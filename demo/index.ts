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

const { h1, h2, div, a, img } = elements

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
      { name: 'bodymovin', style: { padding: vars.spacing } },
      h2('bodymovin (a.k.a lottie) animation player'),
      bodymovinPlayer({ json: rocket })
    ),
    div(
      { name: 'mapbox', style: { padding: vars.spacing } },
      h2('mapbox'),
      mapBox()
    ),
    div(
      { name: 'third', style: { padding: vars.spacing } },
      h2('third'),
      img({ src: favicon })
    )
  )
)
