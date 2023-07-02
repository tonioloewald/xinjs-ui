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
  coords = '38.2641789,-120.5922877,5.8'
  content = div({ style: { width: '100%', height: '100%' } })
  map: any
  style = MAPSTYLES[0]

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
    this.initAttributes('coords')
  }

  connectedCallback(): void {
    super.connectedCallback()
  }

  render(): void {
    super.render()

    const { div } = this.refs

    const [long, lat, zoom] = this.coords.split(',').map((x) => Number(x))

    mapboxAvailable.then(() => {
      // @ts-expect-error
      globalThis.mapboxgl.accessToken =
        'pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA'
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
