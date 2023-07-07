import { Component as WebComponent, elements } from 'xinjs'
import { styleSheet, scriptTag } from './via-tag'

export const MAPSTYLES = [
  {
    name: 'streets',
    url: 'mapbox://styles/mapbox/streets-v10',
  },
  {
    name: 'outdoors',
    url: 'mapbox://styles/mapbox/outdoors-v10',
  },
  {
    name: 'light',
    url: 'mapbox://styles/mapbox/light-v9',
  },
  {
    name: 'dark',
    url: 'mapbox://styles/mapbox/dark-v9',
  },
  {
    name: 'satellite',
    url: 'mapbox://styles/mapbox/satellite-v9',
  },
  {
    name: 'sateliite + streets',
    url: 'mapbox://styles/mapbox/satellite-streets-v10',
  },
  {
    name: 'preview day',
    url: 'mapbox://styles/mapbox/navigation-preview-day-v2',
  },
  {
    name: 'preview night',
    url: 'mapbox://styles/mapbox/navigation-preview-night-v2',
  },
  {
    name: 'guidance day',
    url: 'mapbox://styles/mapbox/navigation-guidance-day-v2',
  },
  {
    name: 'guidance night',
    url: 'mapbox://styles/mapbox/navigation-guidance-night-v2',
  },
]

const { div } = elements

class MapBox extends WebComponent {
  coords = '65.01715565258993,25.48081004203459,12'
  content = div({ style: { width: '100%', height: '100%' } })
  get map(): any {
    return this._map
  }
  mapStyle = MAPSTYLES[0]
  token = ''

  static mapboxCSSAvailable: Promise<void>
  static mapboxAvailable?: Promise<void>

  private _map: any

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'inline-block',
      position: 'relative',
      width: '400px',
      height: '400px',
      textAlign: 'left',
    },
  })

  constructor() {
    super()
    this.initAttributes('coords', 'token', 'mapStyle')

    if (MapBox.mapboxCSSAvailable === undefined) {
      MapBox.mapboxCSSAvailable = styleSheet(
        'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css'
      ).catch((e) => {
        console.error('failed to load mapbox-gl.css', e)
      })
      MapBox.mapboxAvailable = scriptTag(
        'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'
      ).catch((e) => {
        console.error('failed to load mapbox-gl.js', e)
      })
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    if (!this.token) {
      console.error(
        'mapbox requires an access token which you can provide via the token attribute'
      )
    }
  }

  render(): void {
    super.render()

    if (!this.token) {
      return
    }

    const { div } = this.refs

    const [long, lat, zoom] = this.coords.split(',').map((x) => Number(x))

    MapBox.mapboxAvailable!.then(() => {
      console.log('%cmapbox may complain about missing css because it is loaded async on demand', 'background: orange; color: black; padding: 0 5px;')
      // @ts-expect-error
      globalThis.mapboxgl.accessToken = this.token
      // @ts-expect-error
      this._map = new globalThis.mapboxgl.Map({
        container: div,
        style: this.mapStyle.url,
        zoom,
        center: [lat, long],
      })

      this._map.on('render', () => this._map.resize())
    })
  }
}

export const mapBox = MapBox.elementCreator({ tag: 'map-box' })
