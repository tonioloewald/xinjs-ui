import {
  tabSelector,
  bodymovinPlayer,
  codeEditor,
  mapBox,
  markdownViewer,
  dataTable,
  filterBuilder,
  scriptTag,
  sideNav,
  sizeBreak,
} from '../src'

import docs from './docs.json'
const getDocSource = (name: string) => {
  const doc = docs.find((doc) => doc.filename === name)
  return doc !== undefined ? doc.text : `document **"${name}"** not found`
}

// import favicon from './favicon.png'
import { elements, xinProxy, vars, xin, bindings, touch } from 'xinjs'

const download = (name: string, data: string): void => {
  const link = a({
    download: name,
    href: `data:text/plain;charset=UTF-8,${encodeURIComponent(data)}`,
  })
  link.click()
}

const deathsUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

import rocket from './88140-rocket-livetrade.json'

const PROJECT = 'xinjs-ui'

const { app } = xinProxy({
  app: {
    title: PROJECT,
    githubUrl: `https://github.com/tonioloewald/${PROJECT}#readme`,
    npmUrl: `https://www.npmjs.com/package/${PROJECT}`,
    xinjsUrl: 'https://xinjs.net',
    bundleUrl: `https://deno.bundlejs.com/?q=${PROJECT}&badge=`,
    optimizeLottie: false,
    tableData: {
      columns: null as null | any[],
      array: [
        { id: 'NCC-1701', name: 'Enterprise', number: 17, hasKirk: true },
        { id: 'NCC-74656-A', name: 'Voyager', number: 74, hasKirk: false },
      ] as any[],
    },
    lottieFilename: '',
    lottieData: '',
  },
})

bindings.columns = {
  toDOM(elt, columns) {
    elt.columns = columns
  },
}
;(async () => {
  const { Papa } = await scriptTag(
    'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js'
  )

  const response = await fetch(deathsUrl)
  const csv = await response.text()
  const rows = Papa.parse(csv).data.map((row: string) => [
    ...row.slice(0, 4),
    ...row.slice(-5),
  ])
  const columns = rows.shift()

  app.tableData = {
    columns: null,
    array: rows.map((row: string[]) =>
      row.reduce((obj, value, idx) => {
        obj[columns[idx]] = value
        return obj
      }, {} as { [key: string]: any })
    ),
  }
})()

Object.assign(globalThis, { app, xin, bindings, elements, vars, touch })

// @ts-expect-error
const main = document.querySelector('main')

const { h1, h2, div, span, a, img, p, label, input, header, button, pre } =
  elements

const table = dataTable({
  style: {
    flex: '1 1 auto',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  rowHeight: 34,
  bindValue: app.tableData,
})

const filter = filterBuilder({
  class: 'elastic',
  onChange(event: Event) {
    // @ts-expect-error
    app.tableData.filter = event.target.filter
    touch('app.tableData')
  },
})

main.append(
  header(
    // img({src: favicon}),
    h1({ bindText: 'app.title' }),
    span({ class: 'elastic' }),
    sizeBreak(
      { minWidth: 500 },
      img({ src: app.bundleUrl }),
      span({ slot: 'small' })
    ),
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
    sideNav(
      {
        name: 'Read Me!',
        navSize: 150,
        style: {
          height: '100%',
        },
      },
      div(
        {
          slot: 'nav',
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: vars.navBg,
          },
        },
        button('read me', {
          onClick(event: Event) {
            // @ts-expect-error
            event.target.closest('side-nav').contentVisible = true
          },
        })
      ),
      div(
        {
          style: {
            position: 'relative',
            overflowY: 'scroll',
            height: '100%',
          },
        },
        button(
          {
            class: 'transparent close-nav show-within-compact',
            style: {
              position: 'absolute',
            },
            onClick(event: Event) {
              // @ts-expect-error
              event.target.closest('side-nav').contentVisible = false
            },
          },
          span({ class: 'feather-chevron-left' })
        ),
        markdownViewer({
          style: {
            display: 'block',
            maxWidth: '44em',
            margin: 'auto',
            padding: `0 2em`,
          },
          value: getDocSource('README.md'),
        })
      )
    ),
    div(
      {
        name: 'bodymovin',
        style: { textAlign: 'center' },
      },
      h2('bodymovin-player'),
      div(
        { class: 'bar' },
        label(
          'test lotte.json',
          { class: 'clickable', tabindex: 0 },
          input({
            type: 'file',
            hidden: true,
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
                    app.lottieData = result
                  } else {
                    about.textContent = `size: ${result.length}`
                  }
                  // @ts-expect-error
                  document.querySelector('bodymovin-player').json = JSON.parse(
                    reader.result
                  )
                }
                app.lottieFilename = files[0].name
                reader.readAsText(files[0])
              }
            },
          })
        ),
        label(
          input({
            title: 'optimize',
            type: 'checkbox',
            bindValue: 'app.optimizeLottie',
          }),
          'optimize'
        ),
        span({ class: 'elastic' }),
        button('Save Data', {
          bindEnabled: 'app.lottieData',
          onClick() {
            download(
              app.lottieFilename.replace(/\.json/, '-optimized.json'),
              app.lottieData
            )
          },
        })
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
        name: 'data table & filter builder',
        style: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: '100%',
        },
      },
      h2('data-table and filter-builder', { style: { textAlign: 'center' } }),
      div(
        {
          class: 'bar',
        },
        label(
          { class: 'clickable', tabindex: 0 },
          'load json data',
          input({
            type: 'file',
            hidden: true,
            accept: '.json,application/json',
            onChange(event: Event) {
              // @ts-expect-error
              const { files } = event.target
              if (files && files.length === 1) {
                // @ts-expect-error
                const reader = new FileReader()
                reader.onload = () => {
                  app.tableData = {
                    columns: null,
                    array: JSON.parse(reader.result),
                  }
                }
                reader.readAsText(files[0])
              }
            },
          })
        ),
        button('Filter Test Data', {
          onClick() {
            const standards = [
              'calendar',
              'collation',
              'currency',
              'numberingSystem',
              'timeZone',
              'unit',
            ]
            const things = standards

              .map((standard: string) => {
                // @ts-expect-error
                const values = Intl.supportedValuesOf(standard)
                return values.map((value) => ({ standard, value }))
              })
              .flat()
            const array = things.map(
              (
                { standard, value }: { standard: string; value: string },
                id
              ) => ({
                id: String(id),
                standard,
                name: value,
                number: (Math.random() * 1e2 - 50).toFixed(2),
                isLucky: Math.random() < 0.1,
              })
            )

            filter.reset()
            const columns = [
              {
                prop: 'id',
                width: 60,
                align: 'right',
              },
              {
                prop: 'standard',
                width: 140,
              },
              {
                prop: 'name',
                width: 250,
              },
              {
                prop: 'number',
                width: 100,
                align: 'right',
              },
              {
                prop: 'isLucky',
                width: 80,
                dataCell() {
                  return span(
                    {
                      style: {
                        textAlign: 'center',
                      },
                    },
                    input({
                      type: 'checkbox',
                      bindValue: '^.isLucky',
                      title: 'special',
                    })
                  )
                },
              },
            ]
            app.tableData = {
              array,
              columns,
            }
          },
        }),
        filter
      ),
      table
    ),
    div(
      {
        name: 'code-editor',
        style: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
      },
      h2('code-editor'),
      codeEditor(
        {
          style: {
            flex: '1 1 auto',
            width: '100%',
          },
        },
        "console.log('hello, world')"
      )
    )
  )
)
