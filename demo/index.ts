import {
  tabSelector,
  bodymovinPlayer,
  mapBox,
  dataTable,
  scriptTag,
} from '../src'
import { elements, xinProxy, vars, xin } from 'xinjs'

const deathsUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

import rocket from './88140-rocket-livetrade.json'

const PROJECT = 'xinjs-ui'

const { app } = xinProxy({
  app: {
    title: PROJECT,
    githubUrl: `https://github.com/tonioloewald/${PROJECT}#readme`,
    npmUrl: `https://www.npmjs.com/package/${PROJECT}`,
    bundleUrl: `https://deno.bundlejs.com/?q=${PROJECT}&badge=`,
    optimizeLottie: false,
    tableData: [
      { id: 'NCC-1701', name: 'Enterprise', number: 17, hasKirk: true },
      { id: 'NCC-74656-A', name: 'Voyager', number: 74, hasKirk: false },
    ],
  },
})

;(async () => {
  await scriptTag('https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js')
  await scriptTag(
    'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js'
  )

  const response = await fetch(deathsUrl)
  const csv = await response.text()
  // @ts-expect-error
  const rows = Papa.parse(csv).data.map((row) => [
    ...row.slice(0, 4),
    ...row.slice(-5),
  ])
  const columns = rows.shift()
  app.tableData = rows.map((row: string[]) =>
    row.reduce((obj, value, idx) => {
      obj[columns[idx]] = value
      return obj
    }, {} as { [key: string]: any })
  )
})()

Object.assign(globalThis, { app, xin })

// @ts-expect-error
const main = document.querySelector('main')

const { h1, h2, div, span, a, img, p, label, input, header } = elements

const table = dataTable({
  style: {
    flex: '1 1 auto',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  rowHeight: 36,
  bindValue: app.tableData,
})

main.append(
  header(
    h1({ bindText: 'app.title' }),
    span({ class: 'elastic' }),
    img({ src: app.bundleUrl }),
    a('github', { href: app.githubUrl }),
    a('npm', { href: app.npmUrl })
  ),
  tabSelector(
    {
      style: {
        position: 'relative',
        flex: '1 1 auto',
      },
    },
    div(
      {
        name: 'bodymovin',
        style: { textAlign: 'center' },
      },
      h2('bodymovin-player'),
      div(
        { class: 'bar' },
        label(
          'load your own lottie json file',
          input({
            type: 'file',
            accept: '.json,application/json',
            onChange(event: Event) {
              // @ts-expect-error
              const about = document.querySelector('.bodymovin-info')
              // @ts-expect-error
              const { files } = event.target
              if (files && files.length === 1) {
                // @ts-expect-error
                const reader = new FileReader()
                reader.onload = () => {
                  let { result } = reader
                  if (app.optimizeLottie) {
                    const origSize = result.length
                    result = result.replace(/"mn":\s*"[^"]*",/g, '')
                    result = result.replace(/"nm":\s*"[^"]*",/g, '')
                    result = result.replace(
                      /\d+\.\d+/g,
                      (floatString: string) => {
                        const float = Number(floatString)
                        return float > 10 ? float.toFixed(0) : float.toFixed(1)
                      }
                    )
                    const currentSize = result.length
                    about.textContent = `loaded ${origSize} chars, reduced to ${currentSize}`
                    console.log(result)
                  } else {
                    about.textContent = `size: ${result.length}`
                  }
                  // @ts-expect-error
                  document.querySelector('bodymovin-player').json = JSON.parse(
                    reader.result
                  )
                }
                reader.readAsText(files[0])
              }
            },
          })
        ),
        span({ class: 'elastic' }),
        label(
          input({
            title: 'optimize',
            type: 'checkbox',
            bindValue: 'app.optimizeLottie',
          }),
          'optimize json'
        )
      ),
      bodymovinPlayer({ style: { marginTop: vars.spacing200 }, json: rocket }),
      p(
        { class: 'bodymovin-info' },
        'Animation by',
        a('chiến lê hồng', {
          href: 'https://lottiefiles.com/dvskjbicfc',
        })
      )
    ),
    div(
      {
        name: 'mapbox',
        style: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
      },
      h2('mapbox'),
      // this is my token, please don't abuse it!
      mapBox({
        style: {
          flex: '1 1 auto',
          width: '100%',
        },
        token:
          'pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA',
      })
    ),
    div(
      {
        name: 'data table',
        style: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: '100%',
        },
      },
      h2('data-table', { style: { textAlign: 'center' } }),
      div(
        {
          class: 'bar',
        },
        label(
          'load your own json data',
          input({
            type: 'file',
            accept: '.json,application/json',
            onChange(event: Event) {
              // @ts-expect-error
              const { files } = event.target
              if (files && files.length === 1) {
                // @ts-expect-error
                const reader = new FileReader()
                reader.onload = () => {
                  table.columns = undefined
                  app.tableData = JSON.parse(reader.result)
                }
                reader.readAsText(files[0])
              }
            },
          })
        ),
        span({ class: 'elastic' })
      ),
      table
    )
  )
)
