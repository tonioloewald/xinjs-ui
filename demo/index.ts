import { tabSelector, bodymovinPlayer, mapBox } from '../src'
import { elements, xinProxy, vars } from 'xinjs'

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
  },
})

// @ts-expect-error
const main = document.querySelector('main')

const { h1, h2, div, a, img, p, label, input } = elements

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
            const { files } = event.target
            if (files && files.length === 1) {
              // @ts-expect-error
              const reader = new FileReader()
              reader.onload = () => {
                // @ts-expect-error
                document.querySelector('bodymovin-player').json = JSON.parse(
                  reader.result
                )
              }
              reader.readAsText(files[0])
            }
          },
        })
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
      { name: 'third', style: { padding: vars.spacing } },
      h2('third'),
      img({ src: favicon })
    )
  )
)
