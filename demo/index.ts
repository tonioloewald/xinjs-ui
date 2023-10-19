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
  icons,
  markdownViewer,
  MarkdownViewer,
  LiveExample,
  sideNav,
  SideNav,
  sizeBreak,
} from '../src/'

import * as xinjs from 'xinjs'
import * as xinjsui from '../src/'

import docs from './docs.json'

setTimeout(() => {
  console.log(
    'welcome to %cui.xinjs.net',
    `color: ${getComputedStyle(document.body).getPropertyValue(
      '--brand-color'
    )}; padding: 0 5px;`
  )
}, 100)

const PROJECT = 'xinjs-ui'

const docName =
  document.location.search !== ''
    ? document.location.search.substring(1)
    : 'README.md'
const currentDoc = docs.find((doc) => doc.filename === docName) || docs[0]

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
    docs,
    currentDoc,
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

const { h2, div, span, a, img, header, button, template } = elements

window.addEventListener('popstate', () => {
  const filename = window.location.search.substring(1)
  app.currentDoc =
    app.docs.find((doc) => doc.filename === filename) || app.docs[0]
})

main.append(
  header(
    // img({src: favicon}),
    h2({ bindText: 'app.title' }),
    span({ class: 'elastic' }),
    sizeBreak(
      { minWidth: 500, style: { marginRight: vars.spacing, display: 'flex' } },
      img({ alt: 'bundlejs size badge', src: app.bundleUrl }),
      span({ slot: 'small' })
    ),
    a({ class: 'iconic', title: 'github', target: '_blank' }, icons.github(), {
      href: app.githubUrl,
    }),
    a({ class: 'iconic', title: 'npmjs', target: '_blank' }, icons.npm(), {
      href: app.npmUrl,
    })
  ),
  sideNav(
    {
      name: 'Documentation',
      navSize: 200,
      minSize: 600,
      style: {
        flex: '1 1 auto',
        overflow: 'hidden',
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
          overflowY: 'scroll',
        },
        bindList: {
          value: app.docs,
        },
      },
      template(
        a({
          class: 'doc-link',
          bindText: '^.title',
          bindCurrent: 'app.currentDoc.filename',
          bindDocLink: '^.filename',
          onClick(event: Event) {
            const a = event.target as HTMLAnchorElement
            const doc = getListItem(event.target as HTMLElement)
            const nav = (event.target as HTMLElement).closest(
              'xin-sidenav'
            ) as SideNav
            nav.contentVisible = true
            const { href } = a
            window.history.pushState({ href }, '', href)
            app.currentDoc = doc
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
              (event.target as HTMLElement).closest('xin-sidenav') as SideNav
            ).contentVisible = false
          },
        },
        icons.chevronLeft()
      ),
      markdownViewer({
        style: {
          display: 'block',
          maxWidth: '44em',
          margin: 'auto',
          padding: `0 1em`,
          overflow: 'hidden',
        },
        bindValue: 'app.currentDoc.text',
        didRender(this: MarkdownViewer) {
          LiveExample.insertExamples(this, { xinjs, xinjsui })
        },
      })
    )
  )
)
