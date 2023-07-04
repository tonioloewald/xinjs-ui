import { tabSelector, bodymovinPlayer, mapBox, dataTable } from '../src'
import { elements, xinProxy, vars, xin } from 'xinjs'

// @ts-expect-error
import favicon from './favicon.png'
import rocket from './88140-rocket-livetrade.json'

const PROJECT = 'xinjs-ui'


/*
[demo]() | 
[github](https://github.com/tonioloewald/xinjs-polygons#readme) | 
[npm](https://www.npmjs.com/package/xinjs-polygons) | 
![bundlejs](https://deno.bundlejs.com/?q=xinjs-polygons&badge=)
*/
const { app } = xinProxy({
  app: {
    title: PROJECT,
    demoUrl: `https://tonioloewald.github.io/${PROJECT}/`,
    githubUrl: `https://github.com/tonioloewald/${PROJECT}#readme`,
    npmUrl: `https://www.npmjs.com/package/${PROJECT}`,
    bundleUrl: `https://deno.bundlejs.com/?q=${PROJECT}&badge=`,
    optimizeLottie: false,
  },
})

Object.assign( globalThis, { app, xin })

// @ts-expect-error
const main = document.querySelector('main')

const { h1, h2, div, a, img, p, label, input } = elements

const table = dataTable({
  style: {
    flex: '1 1 auto',
    overflow: 'hidden',
    overflowY: 'scroll'
  },
  rowHeight: 36,
  value: [
    { id: 'NCC-1701', name: 'Enterprise', number: 17, hasKirk: true },
    { id: 'NCC-74656-A', name: 'Voyager', number: 74, hasKirk: false },
  ]
})

main.append(
  h1({ bindText: 'app.title' }),
  div(
    { class: 'bar' },
    a('demo', { href: app.demoUrl }),
    a('github', { href: app.githubUrl }),
    a('npm', { href: app.npmUrl }),
    img({ src: app.bundleUrl })
  ),
  tabSelector(
    {
      style: {
        margin: vars.spacing,
        position: 'relative',
        flex: '1 1 auto'
      },
    },
    div(
      {
        name: 'bodymovin',
        style: { padding: vars.spacing, textAlign: 'center' },
      },
      h2('bodymovin (a.k.a lottie) animation player'),
      bodymovinPlayer({ json: rocket }),
      p(
        { class: 'bodymovin-info' }, 
        'Animation by',
        a('chiến lê hồng', {
          href: 'https://lottiefiles.com/dvskjbicfc',
        })
      ),
      label(
        'load your own lottie json file',
        input({
          type: 'file',
          accept: '.json,application/json',
          class: 'clickable',
          onChange(event: Event) {
            // @ts-expect-error
            const about = document.querySelector('.bodymovin-info')
            // @ts-expect-error
            const { files } = event.target
            if (files && files.length === 1) {
              // @ts-expect-error
              const reader = new FileReader()
              reader.onload = () => {
                let {result} = reader
                if (app.optimizeLottie) {
                  const origSize = result.length
                  result = result.replace(/"mn":\s*"[^"]*",/g, '')
                  result = result.replace(/"nm":\s*"[^"]*",/g, '')
                  result = result.replace(/\d+\.\d+/g, (floatString: string) => {
                    const float = Number(floatString)
                    return float > 10 ? float.toFixed(0) : float.toFixed(1)
                  })
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
          }
        }),
      ),
      label(
        input({title: 'optimize', type: 'checkbox', bindValue: 'app.optimizeLottie' }),
        'optimize json'
      )
    ),
    div(
      { name: 'mapbox', style: { padding: vars.spacing, textAlign: 'center' } },
      h2('mapbox'),
      // this is my token, please don't abuse it!
      mapBox({
        token:
          'pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA',
      })
    ),
    div(
      { 
        name: 'data table', 
        style: {
          padding: vars.spacing,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: '100%'
        }
      },
      div(
        label(
          'load your own data',
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
                  table.value = JSON.parse(reader.result)
                }
                reader.readAsText(files[0])
              }
            }
          })
        ),
      ),
      table
    )
  )
)
