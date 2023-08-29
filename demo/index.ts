import {
  elements,
  xinProxy,
  vars,
  xin,
  bindings,
  touch,
  getListItem,
} from 'xinjs'

import {
  markdownViewer,
  liveExample,
  sideNav,
  SideNav,
  sizeBreak,
} from '../src'

import docs from './docs.json'

console.log(
  '%cwelcome to ui.xinjs.net',
  `color: ${getComputedStyle(document.body).getPropertyValue(
    '--brand-color'
  )}; padding: 0 5px;`
)

const PROJECT = 'xinjs-ui'

const { app } = xinProxy({
  app: {
    title: PROJECT,
    githubUrl: `https://github.com/tonioloewald/${PROJECT}#readme`,
    npmUrl: `https://www.npmjs.com/package/${PROJECT}`,
    xinjsUrl: 'https://xinjs.net',
    bundleUrl: `https://deno.bundlejs.com/?q=${PROJECT}&badge=`,
    optimizeLottie: false,
    lottieFilename: '',
    lottieData: '',
    currentDoc:
      document.location.search !== ''
        ? document.location.search.substring(1)
        : 'README.md',
    docs,
  },
})

bindings.docLink = {
  toDOM(elt, filename) {
    elt.setAttribute('href', `?${filename}`)
  },
}

bindings.current = {
  toDOM(elt, currentFile) {
    const boundFile = elt.getAttribute('href') || ''
    elt.classList.toggle('current', currentFile === boundFile.substring(1))
  },
}

Object.assign(globalThis, { app, xin, bindings, elements, vars, touch })

const main = document.querySelector('main') as HTMLElement

const { h1, div, span, a, img, header, button, template } = elements

const docViewer = markdownViewer({
  style: {
    display: 'block',
    maxWidth: '44em',
    margin: 'auto',
    padding: `0 1em`,
  },
  value: app.docs.find((doc) => doc.filename === app.currentDoc)!.text,
  didRender() {
    const sources = [
      ...docViewer.querySelectorAll(
        'pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]'
      ),
    ].map((code) => ({
      block: code.parentElement as HTMLPreElement,
      language: code.classList[0].split('-').pop(),
      code: (code as HTMLElement).innerText,
    }))
    for (let index = 0; index < sources.length; index += 1) {
      const exampleSources = [sources[index]]
      while (
        index < sources.length - 1 &&
        sources[index].block.nextElementSibling === sources[index + 1].block
      ) {
        exampleSources.push(sources[index + 1])
        index += 1
      }
      const example = liveExample({ style: { margin: `1em -1em` } })
      ;(exampleSources[0].block.parentElement as HTMLElement).insertBefore(
        example,
        exampleSources[0].block
      )
      exampleSources.forEach((source) => {
        switch (source.language) {
          case 'js':
            example.js = source.code
            break
          case 'html':
            example.html = source.code
            break
          case 'css':
            example.css = source.code
            break
        }
        source.block.remove()
      })
      example.showDefaultTab()
    }
  },
})

main.append(
  header(
    // img({src: favicon}),
    h1({ bindText: 'app.title' }),
    span({ class: 'elastic' }),
    sizeBreak(
      { minWidth: 500, style: { margin: `0 10px` } },
      img({ alt: 'bundlejs size badge', src: app.bundleUrl }),
      span({ slot: 'small' })
    ),
    a({ class: 'iconic' }, span({ class: 'icon-github', title: 'github' }), {
      href: app.githubUrl,
    }),
    a({ class: 'iconic' }, span({ class: 'icon-npm', title: 'npmjs' }), {
      href: app.npmUrl,
    })
  ),
  sideNav(
    {
      name: 'Documentation',
      navSize: 200,
      minSize: 600,
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
          overflowY: 'scroll',
        },
        bindList: {
          value: app.docs,
        },
      },
      template(
        a({
          class: 'doc-link',
          bindText: '^.filename',
          bindCurrent: 'app.currentDoc',
          bindDocLink: '^.filename',
          onClick(event: Event) {
            const a = event.target as HTMLAnchorElement
            const doc = getListItem(event.target as HTMLElement)
            const nav = (event.target as HTMLElement).closest(
              'side-nav'
            ) as SideNav
            nav.contentVisible = true
            const { href } = a
            window.history.pushState({ href }, '', href)
            app.currentDoc = doc.filename
            docViewer.value = doc.text
            event.preventDefault()
          },
        })
      )
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
            marginTop: '2px',
            position: 'fixed',
          },
          onClick(event: Event) {
            ;(
              (event.target as HTMLElement).closest('side-nav') as SideNav
            ).contentVisible = false
          },
        },
        span({ class: 'icon-chevron-left' })
      ),
      docViewer
    )
  )
)
