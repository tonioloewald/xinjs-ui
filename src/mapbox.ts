import { Component as WebComponent, elements, vars } from 'xinjs'
import { styleSheet, scriptTag } from './via-tag'

const cssAvailable = styleSheet(
  'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css'
)
const mapboxAvailable = scriptTag(
  'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'
)

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
  coords = '65.01715565258993,25.48081004203459,10'
  content = div({ style: { width: '100%', height: '100%' } })
  map: any
  style = MAPSTYLES[0]
  token = ''

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'block',
      position: 'relative',
      width: '400px',
      height: '400px',
    },
  })

  constructor() {
    super()
    this.initAttributes('coords', 'token')
  }

  connectedCallback(): void {
    super.connectedCallback()
    if (!this.token) {
      console.error('mapbox requires an access token which you can provide via the token attribute')
    }
  }

  render(): void {
    super.render()

    if (!this.token) {
      return
    }

    const { div } = this.refs

    const [long, lat, zoom] = this.coords.split(',').map((x) => Number(x))

    mapboxAvailable.then(() => {
      // @ts-expect-error
      globalThis.mapboxgl.accessToken = this.token
      this.map = new globalThis.mapboxgl.Map({
        container: div,
        style: this.style.url,
        zoom,
        center: [lat, long],
      })

      this.map.on('render', () => this.map.resize())
    })
  }
}

export const mapBox = MapBox.elementCreator({ tag: 'map-box' })
