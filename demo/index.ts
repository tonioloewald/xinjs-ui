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
  tabSelector,
  bodymovinPlayer,
  BodymovinPlayer,
  markdownViewer,
  dataTable,
  filterBuilder,
  FilterBuilder,
  liveExample,
  richText,
  scriptTag,
  sideNav,
  SideNav,
  sizeBreak,
  TableData,
} from '../src'

import docs from './docs.json'

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
    } as TableData,
    lottieFilename: '',
    lottieData: '',
    currentDoc:
      document.location.search !== ''
        ? document.location.search.substring(1)
        : 'README.md',
    docs,
  },
})

bindings.columns = {
  toDOM(elt: any, columns) {
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
    filter: undefined,
  }
})()

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

const {
  h1,
  h2,
  h3,
  div,
  span,
  a,
  img,
  p,
  label,
  input,
  header,
  button,
  select,
  option,
  template,
} = elements

const table = dataTable({
  style: {
    flex: '1 1 auto',
  },
  rowHeight: 34,
  bindValue: 'app.tableData',
})

const filter = filterBuilder({
  class: 'elastic',
  placeholder: 'enter query',
  onChange(event: Event) {
    app.tableData.filter = (event.target as FilterBuilder).filter
    touch('app.tableData')
  },
})

const docViewer = markdownViewer({
  style: {
    display: 'block',
    maxWidth: '44em',
    margin: 'auto',
    padding: `0 2em`,
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
      const example = liveExample()
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
  tabSelector(
    {
      style: {
        position: 'relative',
        flex: '1 1 auto',
      },
    },
    sideNav(
      {
        name: 'Documentation',
        navSize: 200,
        minSize: 600,
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
              const about = document.querySelector(
                '.bodymovin-info'
              ) as HTMLElement
              const { files } = event.target as HTMLInputElement
              if (files && files.length === 1) {
                const reader = new FileReader()

                reader.onload = () => {
                  let { result } = reader
                  if (typeof result !== 'string') {
                    return
                  }
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
                  ;(
                    document.querySelector(
                      'bodymovin-player'
                    ) as BodymovinPlayer
                  ).json = JSON.parse(result)
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
        'Animation by ',
        a('chiến lê hồng', {
          href: 'https://lottiefiles.com/dvskjbicfc',
        })
      )
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
          'load json',
          input({
            type: 'file',
            hidden: true,
            accept: '.json,application/json',
            onChange(event: Event) {
              const { files } = event.target as HTMLInputElement
              if (files && files.length === 1) {
                const reader = new FileReader()
                reader.onload = () => {
                  const { result } = reader
                  if (typeof result !== 'string') {
                    return
                  }
                  app.tableData = {
                    columns: null,
                    array: JSON.parse(result),
                  }
                }
                reader.readAsText(files[0])
              }
            },
          })
        ),
        label(
          { class: 'clickable', tabindex: 0 },
          'load tsv',
          input({
            type: 'file',
            hidden: true,
            accept: '.tsv,text/tab-separated-values',
            onChange(event: Event) {
              const { files } = event.target as HTMLInputElement
              if (files && files.length === 1) {
                const reader = new FileReader()
                reader.onload = () => {
                  const { result } = reader
                  if (typeof result !== 'string') {
                    return
                  }
                  const rows = result.split('\n').map((row) => row.split('\t'))
                  const keys = rows.shift() as string[]
                  const array = rows.map((row) => {
                    const obj: { [key: string]: string } = {}
                    for (const i in keys) {
                      obj[keys[i]] = row[i]
                    }
                    return obj
                  })
                  app.tableData = {
                    columns: null,
                    array,
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
                // @ts-expect-error it is a legal value
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
                date: new Date(
                  Date.now() - Math.random() * 10 * 365 * 24 * 3600 * 1000
                ).toLocaleString(),
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
              {
                prop: 'date',
                width: 200,
              },
            ]
            app.tableData = {
              array,
              columns,
            }
          },
        }),
        filter,
        button(
          {
            class: 'iconic',
            style: {
              marginLeft: vars.spacing_50,
            },
            onClick(event: Event) {
              ;(event.target as HTMLElement)
                .closest('button')
                ?.classList.toggle('on')
              filter.classList.toggle('show-help')
            },
          },
          span({
            class: 'icon-help',
          })
        )
      ),
      table
    ),
    richText(
      {
        name: 'rich-text',
        selectionChange(event: Event, rt: any) {
          const select = rt.querySelector(
            'select[title="paragraph style"]'
          ) as HTMLSelectElement
          let blockTags = (rt.selectedBlocks as HTMLElement[]).map(
            (block) => block.tagName
          )
          blockTags = [...new Set(blockTags)]
          select.value =
            blockTags.length === 1 ? `formatBlock,${blockTags[0]}` : ''
        },
      },
      select(
        { title: 'paragraph style', slot: 'toolbar' },
        option('Heading 1', { value: 'formatBlock,H1' }),
        option('Heading 2', { value: 'formatBlock,H2' }),
        option('Heading 3', { value: 'formatBlock,H3' }),
        option('Heading 4', { value: 'formatBlock,H4' }),
        option('Body', { value: 'formatBlock,P' }),
        option('Code', { value: 'formatBlock,PRE' })
      ),
      span({ slot: 'toolbar', style: { flex: '0 0 10px', content: ' ' } }),
      button(
        { slot: 'toolbar', dataCommand: 'indent', title: 'indent' },
        span({ class: 'icon-format_indent_increase' })
      ),
      button(
        { slot: 'toolbar', dataCommand: 'outdent', title: 'decrease indent' },
        span({ class: 'icon-format_indent_decrease' })
      ),
      span({ slot: 'toolbar', style: { flex: '0 0 10px', content: ' ' } }),
      button(
        { slot: 'toolbar', dataCommand: 'bold', title: 'bold' },
        span({ class: 'icon-format_bold' })
      ),
      button(
        { slot: 'toolbar', dataCommand: 'italic', title: 'italic' },
        span({ class: 'icon-format_italic' })
      ),
      button(
        { slot: 'toolbar', dataCommand: 'underline', title: 'underline' },
        span({ class: 'icon-format_underlined' })
      ),
      span({ slot: 'toolbar', style: { flex: '0 0 10px', content: ' ' } }),
      button(
        {
          slot: 'toolbar',
          dataCommand: 'insertUnorderedList',
          title: 'bullet list',
        },
        span({ class: 'icon-format_list_bulleted' })
      ),
      button(
        {
          slot: 'toolbar',
          dataCommand: 'insertOrderedList',
          title: 'numbered list',
        },
        span({ class: 'icon-format_list_numbered' })
      ),
      h3('Rich Text Editor'),
      p(
        'This is a minimalist, but easily extended rich-text editor based on the deprecated but widely-supported and not-being-replaced-any-time-soon document.execCommand API.'
      ),
      a('document.execCommand is documented here', {
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand',
      })
    )
  )
)
