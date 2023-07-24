let e
function t(e) {
  return e && e.__esModule ? e.default : e
}
const i = { debug: !1, perf: !1 }
function n(e) {
  if (null == e || 'object' != typeof e) return e
  if (Array.isArray(e)) return e.map(n)
  let t = {}
  for (let i in e) {
    let a = e[i]
    null != e && 'object' == typeof e ? (t[i] = n(a)) : (t[i] = a)
  }
  return t
}
const a = '-xin-data',
  r = `.${a}`,
  s = '-xin-event',
  o = `.${s}`,
  l = Symbol('xin-path'),
  u = Symbol('xin-value'),
  c = (e) => e[l]
function h(e) {
  return ('object' == typeof e && null !== e && e[u]) || e
}
const p = new WeakMap(),
  d = new WeakMap(),
  m = (e) => {
    let t = e.cloneNode()
    if (t instanceof HTMLElement) {
      let i = d.get(e),
        a = p.get(e)
      null != i && d.set(t, n(i)), null != a && p.set(t, n(a))
    }
    for (let i of e instanceof HTMLTemplateElement
      ? e.content.childNodes
      : e.childNodes)
      i instanceof HTMLElement || i instanceof DocumentFragment
        ? t.appendChild(m(i))
        : t.appendChild(i.cloneNode())
    return t
  },
  x = new WeakMap(),
  k = (e) => {
    let t = document.body.parentElement
    for (; null != e.parentElement && e.parentElement !== t; ) {
      let t = x.get(e)
      if (null != t) return t
      e = e.parentElement
    }
    return !1
  },
  f = Symbol('observer should be removed'),
  D = [],
  g = []
let b = !1
class y {
  constructor(e, t) {
    let i
    let n = 'string' == typeof t ? `"${t}"` : `function ${t.name}`
    if ('string' == typeof e)
      (this.test = (t) =>
        'string' == typeof t &&
        '' !== t &&
        (e.startsWith(t) || t.startsWith(e))),
        (i = `test = "${e}"`)
    else if (e instanceof RegExp)
      (this.test = e.test.bind(e)), (i = `test = "${e.toString()}"`)
    else if (e instanceof Function)
      (this.test = e), (i = `test = function ${e.name}`)
    else
      throw Error(
        'expect listener test to be a string, RegExp, or test function'
      )
    if (((this.description = `${i}, ${n}`), 'function' == typeof t))
      this.callback = t
    else throw Error('expect callback to be a path or function')
    D.push(this)
  }
}
const v = () => {
    i.perf && console.time('xin async update')
    let t = [...g]
    for (let e of t)
      D.filter((t) => {
        let i
        try {
          i = t.test(e)
        } catch (i) {
          throw Error(`Listener ${t.description} threw "${i}" at "${e}"`)
        }
        return i === f ? (F(t), !1) : i
      }).forEach((t) => {
        let i
        try {
          i = t.callback(e)
        } catch (i) {
          console.error(
            `Listener ${t.description} threw "${i}" handling "${e}"`
          )
        }
        i === f && F(t)
      })
    g.splice(0),
      (b = !1),
      'function' == typeof e && e(),
      i.perf && console.timeEnd('xin async update')
  },
  E = (t) => {
    let i = 'string' == typeof t ? t : c(t)
    if (void 0 === i)
      throw (
        (console.error('touch was called on an invalid target', t),
        Error('touch was called on an invalid target'))
      )
    !1 === b &&
      (new Promise((t) => {
        e = t
      }),
      (b = setTimeout(v))),
      null == g.find((e) => i.startsWith(e)) && g.push(i)
  },
  A = (e, t) => new y(e, t),
  F = (e) => {
    let t = D.indexOf(e)
    if (t > -1) D.splice(t, 1)
    else throw Error('unobserve failed, listener not found')
  },
  w = (e) => {
    try {
      return JSON.stringify(e)
    } catch (e) {
      return '{has circular references}'
    }
  },
  C = (...e) => Error(e.map(w).join(' ')),
  B = () =>
    new Date(parseInt('1000000000', 36) + Date.now())
      .valueOf()
      .toString(36)
      .slice(1)
let S = 0
const _ = () => (parseInt('10000', 36) + ++S).toString(36).slice(-5),
  $ = () => B() + _(),
  V = {},
  T = {}
function P(e) {
  if ('' === e) return []
  if (Array.isArray(e)) return e
  {
    let t = []
    for (; e.length > 0; ) {
      let i = e.search(/\[[^\]]+\]/)
      if (-1 === i) {
        t.push(e.split('.'))
        break
      }
      {
        let n = e.slice(0, i)
        ;(e = e.slice(i)),
          '' !== n && t.push(n.split('.')),
          (i = e.indexOf(']') + 1),
          t.push(e.slice(1, i - 1)),
          '.' === e.slice(i, i + 1) && (i += 1),
          (e = e.slice(i))
      }
    }
    return t
  }
}
const G = new WeakMap()
function z(e, t) {
  void 0 === G.get(e) && G.set(e, {}),
    void 0 === G.get(e)[t] && (G.get(e)[t] = {})
  let i = G.get(e)[t]
  return (
    '_auto_' === t
      ? e.forEach((e, t) => {
          void 0 === e._auto_ && (e._auto_ = $()), (i[e._auto_ + ''] = t)
        })
      : e.forEach((e, n) => {
          i[I(e, t) + ''] = n
        }),
    i
  )
}
function R(e, t, i, n) {
  var a
  let r
  let s =
    '' !== t
      ? ((a = i + ''),
        (void 0 ===
          (r = (
            void 0 === G.get(e) || void 0 === G.get(e)[t]
              ? z(e, t)
              : G.get(e)[t]
          )[a]) ||
          I(e[r], t) + '' !== a) &&
          (r = z(e, t)[a]),
        r)
      : i
  if (n === V) return e.splice(s, 1), G.delete(e), Symbol('deleted')
  if (n === T) '' === t && void 0 === e[s] && (e[s] = {})
  else if (void 0 !== n) {
    if (void 0 !== s) e[s] = n
    else if ('' !== t && I(n, t) + '' == i + '') e.push(n), (s = e.length - 1)
    else throw Error(`byIdPath insert failed at [${t}=${i}]`)
  }
  return e[s]
}
function L(e) {
  if (!Array.isArray(e)) throw C('setByPath failed: expected array, found', e)
}
function j(e) {
  if (null == e || !(e instanceof Object))
    throw C('setByPath failed: expected Object, found', e)
}
function I(e, t) {
  let i, n, a, r
  let s = P(t),
    o = e
  for (i = 0, n = s.length; void 0 !== o && i < n; i++) {
    let e = s[i]
    if (Array.isArray(e))
      for (a = 0, r = e.length; void 0 !== o && a < r; a++) {
        let t = e[a]
        o = o[t]
      }
    else if (0 === o.length) {
      if (((o = o[e.slice(1)]), '=' !== e[0])) return
    } else if (e.includes('=')) {
      let [t, ...i] = e.split('=')
      o = R(o, t, i.join('='))
    } else o = o[(a = parseInt(e, 10))]
  }
  return o
}
const O = [
    'sort',
    'splice',
    'copyWithin',
    'fill',
    'pop',
    'push',
    'reverse',
    'shift',
    'unshift',
  ],
  N = {},
  M = /^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,
  q = (e) => M.test(e),
  W = (e = '', t = '') =>
    '' === e
      ? t
      : null !== t.match(/^\d+$/) || t.includes('=')
      ? `${e}[${t}]`
      : `${e}.${t}`,
  H = (e = '') => ({
    get(t, i) {
      if (i === l) return e
      if (i === u) {
        for (; void 0 !== c(t); ) t = h(t)
        return t
      }
      if ('symbol' == typeof i) return t[i]
      let n = i,
        a =
          n.match(/^([^.[]+)\.(.+)$/) ??
          n.match(/^([^\]]+)(\[.+)/) ??
          n.match(/^(\[[^\]]+\])\.(.+)$/) ??
          n.match(/^(\[[^\]]+\])\[(.+)$/)
      if (null !== a) {
        let [, i, n] = a,
          r = W(e, i),
          s = I(t, i)
        return null !== s && 'object' == typeof s ? new Proxy(s, H(r))[n] : s
      }
      if (
        (n.startsWith('[') &&
          n.endsWith(']') &&
          (n = n.substring(1, n.length - 1)),
        (!Array.isArray(t) && void 0 !== t[n]) ||
          (Array.isArray(t) && n.includes('=')))
      ) {
        let i
        if (n.includes('=')) {
          let [e, a] = n.split('=')
          i = t.find((t) => `${I(t, e)}` === a)
        } else i = t[n]
        if (null !== i && 'object' == typeof i) {
          let t = W(e, n)
          return new Proxy(i, H(t))
        }
        return 'function' == typeof i ? i.bind(t) : i
      }
      if (!Array.isArray(t)) return t[n]
      {
        let i = t[n]
        return 'function' == typeof i
          ? (...i) => {
              let a = Array.prototype[n].apply(t, i)
              return O.includes(n) && E(e), a
            }
          : 'object' == typeof i
          ? new Proxy(i, H(W(e, n)))
          : i
      }
    },
    set(t, i, n) {
      n = h(n)
      let a = W(e, i)
      if (!q(a)) throw Error(`setting invalid path ${a}`)
      let r = h(Z[a])
      return (
        r !== n &&
          (function (e, t, i) {
            let n = e,
              a = P(t)
            for (; null != n && a.length > 0; ) {
              let e = a.shift()
              if ('string' == typeof e) {
                let t = e.indexOf('=')
                if (t > -1) {
                  0 === t ? j(n) : L(n)
                  let r = e.slice(0, t),
                    s = e.slice(t + 1)
                  if (((n = R(n, r, s, a.length > 0 ? T : i)), 0 === a.length))
                    return !0
                } else {
                  L(n)
                  let t = parseInt(e, 10)
                  if (a.length > 0) n = n[t]
                  else {
                    if (i !== V) {
                      if (n[t] === i) return !1
                      n[t] = i
                    } else n.splice(t, 1)
                    return !0
                  }
                }
              } else if (Array.isArray(e) && e.length > 0)
                for (j(n); e.length > 0; ) {
                  let t = e.shift()
                  if (e.length > 0 || a.length > 0) {
                    var r, s
                    ;(r = n),
                      (s = e.length > 0 ? {} : []),
                      void 0 === r[t] && void 0 !== s && (r[t] = s),
                      (n = r[t])
                  } else {
                    if (i !== V) {
                      if (n[t] === i) return !1
                      n[t] = i
                    } else {
                      if (!Object.prototype.hasOwnProperty.call(n, t)) return !1
                      delete n[t]
                    }
                    return !0
                  }
                }
              else throw Error(`setByPath failed, bad path ${t}`)
            }
            throw Error(`setByPath(${e}, ${t}, ${i}) failed`)
          })(N, a, n) &&
          E(a),
        !0
      )
    },
  }),
  Z = new Proxy(N, H()),
  { document: U, MutationObserver: Q } = globalThis,
  Y = (e, t) => {
    let i = d.get(e)
    if (null != i)
      for (let n of i) {
        let { path: i, binding: a, options: r } = n,
          { toDOM: s } = a
        if (null != s) {
          if (i.startsWith('^')) {
            let t = k(e)
            if (null != t && null != t[l])
              i = n.path = `${t[l]}${i.substring(1)}`
            else
              throw (
                (console.error(
                  `Cannot resolve relative binding ${i}`,
                  e,
                  'is not part of a list'
                ),
                Error(`Cannot resolve relative binding ${i}`))
              )
          }
          ;(null == t || i.startsWith(t)) && s(e, Z[i], r)
        }
      }
  }
if (null != Q) {
  let e = new Q((e) => {
    e.forEach((e) => {
      ;[...e.addedNodes].forEach((e) => {
        e instanceof HTMLElement &&
          [...e.querySelectorAll(r)].forEach((e) => Y(e))
      })
    })
  })
  e.observe(U.body, { subtree: !0, childList: !0 })
}
;((e, t) => {
  let i = 'function' == typeof t ? t : Z[t]
  if ('function' != typeof i)
    throw Error(
      `observe expects a function or path to a function, ${t} is neither`
    )
  return A(e, i)
})(
  () => !0,
  (e) => {
    let t = U.querySelectorAll(r)
    for (let i of t) Y(i, e)
  }
)
const J = (e) => {
  let t = e.target.closest(r)
  for (; null != t; ) {
    let e = d.get(t)
    for (let i of e) {
      let { binding: e, path: n } = i,
        { fromDOM: a } = e
      if (null != a) {
        let e
        try {
          e = a(t, i.options)
        } catch (e) {
          throw (
            (console.error('Cannot get value from', t, 'via', i),
            Error('Cannot obtain value fromDOM'))
          )
        }
        if (null != e) {
          let t = Z[n]
          if (null == t) Z[n] = e
          else {
            let i = null != t[l] ? t[u] : t,
              a = null != e[l] ? e[u] : e
            i !== a && (Z[n] = a)
          }
        }
      }
    }
    t = t.parentElement.closest(r)
  }
}
null != globalThis.document &&
  (U.body.addEventListener('change', J, !0),
  U.body.addEventListener('input', J, !0))
const X = new Set(),
  K = (e) => {
    let t = e?.target.closest(o),
      i = !1,
      n = new Proxy(e, {
        get(t, n) {
          if ('stopPropagation' === n)
            return () => {
              e.stopPropagation(), (i = !0)
            }
          {
            let e = t[n]
            return 'function' == typeof e ? e.bind(t) : e
          }
        },
      })
    for (; !i && null != t; ) {
      let a = p.get(t),
        r = a[e.type] || []
      for (let e of r) {
        if ('function' == typeof e) e(n)
        else {
          let t = Z[e]
          if ('function' == typeof t) t(n)
          else throw Error(`no event handler found at path ${e}`)
        }
        if (i) continue
      }
      t = null != t.parentElement ? t.parentElement.closest(o) : null
    }
  },
  ee = (e, t, i) => {
    let n = p.get(e)
    e.classList.add(s),
      null == n && ((n = {}), p.set(e, n)),
      n[t] || (n[t] = []),
      n[t].includes(i) || n[t].push(i),
      X.has(t) || (X.add(t), U.body.addEventListener(t, K, !0))
  },
  et = (e, t) => {
    let i = new Event(t)
    e.dispatchEvent(i)
  },
  ei = (e) =>
    e instanceof HTMLInputElement
      ? e.type
      : e instanceof HTMLSelectElement && e.hasAttribute('multiple')
      ? 'multi-select'
      : 'other',
  en = (e, t) => {
    switch (ei(e)) {
      case 'radio':
        e.checked = e.value === t
        break
      case 'checkbox':
        e.checked = t
        break
      case 'date':
        e.valueAsDate = new Date(t)
        break
      case 'multi-select':
        for (let i of [...e.querySelectorAll('option')]) i.selected = t[i.value]
        break
      default:
        e.value = t
    }
  },
  ea = (e) => {
    switch (ei(e)) {
      case 'radio': {
        let t = e.parentElement?.querySelector(`[name="${e.name}"]:checked`)
        return null != t ? t.value : null
      }
      case 'checkbox':
        return e.checked
      case 'date':
        return e.valueAsDate.toISOString()
      case 'multi-select':
        return [...e.querySelectorAll('option')].reduce(
          (e, t) => ((e[t.value] = t.selected), e),
          {}
        )
      default:
        return e.value
    }
  },
  { ResizeObserver: er } = globalThis,
  es =
    null != er
      ? new er((e) => {
          for (let t of e) {
            let e = t.target
            et(e, 'resize')
          }
        })
      : { observe() {}, unobserve() {} },
  eo = (e, t, i = !0) => {
    if (null != e && null != t) {
      if ('string' == typeof t) e.textContent = t
      else if (Array.isArray(t))
        t.forEach((t) => {
          e.append(t instanceof Node && i ? m(t) : t)
        })
      else if (t instanceof HTMLElement || t instanceof DocumentFragment)
        e.append(i ? m(t) : t)
      else throw Error('expect text content or document node')
    }
  },
  el = (e, t = 250) => {
    let i
    return (...n) => {
      void 0 !== i && clearTimeout(i),
        (i = setTimeout(() => {
          e(...n)
        }, t))
    }
  },
  eu = (e, t = 250) => {
    let i
    let n = Date.now() - t,
      a = !1
    return (...r) => {
      if (
        (clearTimeout(i),
        (i = setTimeout(async () => {
          e(...r), (n = Date.now())
        }, t)),
        !a && Date.now() - n >= t)
      ) {
        a = !0
        try {
          e(...r), (n = Date.now())
        } finally {
          a = !1
        }
      }
    }
  },
  ec = Symbol('list-binding')
function eh(e, t) {
  let i = [...e.querySelectorAll(r)]
  for (let n of (e.matches(r) && i.unshift(e), i)) {
    let e = d.get(n)
    for (let i of e)
      i.path.startsWith('^') && (i.path = `${t}${i.path.substring(1)}`),
        null != i.binding.toDOM && i.binding.toDOM(n, Z[i.path])
  }
}
class ep {
  constructor(e, t = {}) {
    if (
      ((this._array = []),
      (this.boundElement = e),
      (this.itemToElement = new WeakMap()),
      1 !== e.children.length)
    )
      throw Error(
        'ListBinding expects an element with exactly one child element'
      )
    if (e.children[0] instanceof HTMLTemplateElement) {
      let t = e.children[0]
      if (1 !== t.content.children.length)
        throw Error(
          'ListBinding expects a template with exactly one child element'
        )
      this.template = m(t.content.children[0])
    } else (this.template = e.children[0]), this.template.remove()
    ;(this.listTop = document.createElement('div')),
      (this.listBottom = document.createElement('div')),
      this.boundElement.append(this.listTop),
      this.boundElement.append(this.listBottom),
      (this.options = t),
      null != t.virtual &&
        (es.observe(this.boundElement),
        (this._update = eu(() => {
          this.update(this._array, !0)
        }, 16)),
        this.boundElement.addEventListener('scroll', this._update),
        this.boundElement.addEventListener('resize', this._update))
  }
  visibleSlice() {
    let { virtual: e, hiddenProp: t, visibleProp: i } = this.options,
      n = this._array
    void 0 !== t && (n = n.filter((e) => !0 !== e[t])),
      void 0 !== i && (n = n.filter((e) => !0 === e[i]))
    let a = 0,
      r = n.length - 1,
      s = 0,
      o = 0
    if (null != e) {
      let t = this.boundElement.offsetWidth,
        i = this.boundElement.offsetHeight,
        l = null != e.width ? Math.max(1, Math.floor(t / e.width)) : 1,
        u = Math.ceil(i / e.height) + 1,
        c = Math.ceil(n.length / l),
        h = Math.floor(this.boundElement.scrollTop / e.height)
      h > c - u + 1 && (h = Math.max(0, c - u + 1)),
        (r = (a = h * l) + l * u - 1),
        (s = h * e.height),
        (o = Math.max(c * e.height - i - s, 0))
    }
    return {
      items: n,
      firstItem: a,
      lastItem: r,
      topBuffer: s,
      bottomBuffer: o,
    }
  }
  update(e, t) {
    null == e && (e = []), (this._array = e)
    let {
        initInstance: n,
        updateInstance: a,
        hiddenProp: r,
        visibleProp: s,
      } = this.options,
      o = c(e),
      l = this.visibleSlice()
    this.boundElement.classList.toggle('-xin-empty-list', 0 === l.items.length)
    let u = this._previousSlice,
      { firstItem: p, lastItem: d, topBuffer: k, bottomBuffer: f } = l
    if (
      void 0 === r &&
      void 0 === s &&
      !0 === t &&
      null != u &&
      p === u.firstItem &&
      d === u.lastItem
    )
      return
    this._previousSlice = l
    let D = 0,
      g = 0,
      b = 0
    for (let e of [...this.boundElement.children]) {
      if (e === this.listTop || e === this.listBottom) continue
      let t = x.get(e)
      if (null == t) e.remove()
      else {
        let i = l.items.indexOf(t)
        ;(i < p || i > d) &&
          (e.remove(), this.itemToElement.delete(t), x.delete(e), D++)
      }
    }
    ;(this.listTop.style.height = String(k) + 'px'),
      (this.listBottom.style.height = String(f) + 'px')
    let y = [],
      { idPath: v } = this.options
    for (let e = p; e <= d; e++) {
      let t = l.items[e]
      if (void 0 === t) continue
      let i = this.itemToElement.get(h(t))
      if (null == i) {
        if (
          (b++,
          (i = m(this.template)),
          'object' == typeof t &&
            (this.itemToElement.set(h(t), i), x.set(i, h(t))),
          this.boundElement.insertBefore(i, this.listBottom),
          null != v)
        ) {
          let e = t[v],
            n = `${o}[${v}=${e}]`
          eh(i, n)
        } else {
          let t = `${o}[${e}]`
          eh(i, t)
        }
        null != n && n(i, t)
      }
      null != a && a(i, t), y.push(i)
    }
    let E = null
    for (let e of y)
      e.previousElementSibling !== E &&
        (g++,
        E?.nextElementSibling != null
          ? this.boundElement.insertBefore(e, E.nextElementSibling)
          : this.boundElement.insertBefore(e, this.listBottom)),
        (E = e)
    i.perf && console.log(o, 'updated', { removed: D, created: b, moved: g })
  }
}
const ed = (e, t) => {
    let i = e[ec]
    return null == i && ((i = new ep(e, t)), (e[ec] = i)), i
  },
  em = {
    value: {
      toDOM(e, t) {
        en(e, t)
      },
      fromDOM: (e) => ea(e),
    },
    text: {
      toDOM(e, t) {
        e.textContent = t
      },
    },
    enabled: {
      toDOM(e, t) {
        e.disabled = !t
      },
    },
    disabled: {
      toDOM(e, t) {
        e.disabled = !!t
      },
    },
    style: {
      toDOM(e, t) {
        if ('object' == typeof t)
          for (let i of Object.keys(t)) e.style[i] = t[i]
        else if ('string' == typeof t) e.setAttribute('style', t)
        else throw Error('style binding expects either a string or object')
      },
    },
    list: {
      toDOM(e, t, i) {
        let n = ed(e, i)
        n.update(t)
      },
    },
  }
function ex(e, t, i) {
  return t < e ? e : t > i ? i : t
}
function ek(e, t, i) {
  return (i = ex(0, i, 1)) * (t - e) + e
}
const ef = (e) => ('00' + Math.round(Number(e)).toString(16)).slice(-2)
class eD {
  constructor(e, t, i) {
    ;(e /= 255), (t /= 255), (i /= 255)
    let n = Math.max(e, t, i),
      a = n - Math.min(e, t, i),
      r =
        0 !== a
          ? n === e
            ? (t - i) / a
            : n === t
            ? 2 + (i - e) / a
            : 4 + (e - t) / a
          : 0
    ;(this.h = 60 * r < 0 ? 60 * r + 360 : 60 * r),
      (this.s =
        0 !== a ? (n <= 0.5 ? a / (2 * n - a) : a / (2 - (2 * n - a))) : 0),
      (this.l = (2 * n - a) / 2)
  }
}
const eg =
  void 0 !== globalThis.document
    ? globalThis.document.createElement('span')
    : void 0
class eb {
  static fromCss(e) {
    let t = e
    eg instanceof HTMLSpanElement &&
      ((eg.style.color = e),
      document.body.appendChild(eg),
      (t = getComputedStyle(eg).color),
      eg.remove())
    let [i, n, a, r] = t.match(/[\d.]+/g)
    return new eb(Number(i), Number(n), Number(a), null == r ? 1 : Number(r))
  }
  static fromHsl(e, t, i, n = 1) {
    return eb.fromCss(
      `hsla(${e.toFixed(0)}, ${(100 * t).toFixed(0)}%, ${(100 * i).toFixed(
        0
      )}%, ${n.toFixed(2)})`
    )
  }
  constructor(e, t, i, n = 1) {
    ;(this.r = ex(0, e, 255)),
      (this.g = ex(0, t, 255)),
      (this.b = ex(0, i, 255)),
      (this.a = void 0 !== n ? ex(0, n, 1) : (n = 1))
  }
  get inverse() {
    return new eb(255 - this.r, 255 - this.g, 255 - this.b, this.a)
  }
  get inverseLuminance() {
    let { h: e, s: t, l: i } = this._hsl
    return eb.fromHsl(e, t, 1 - i, this.a)
  }
  get rgb() {
    let { r: e, g: t, b: i } = this
    return `rgb(${e.toFixed(0)},${t.toFixed(0)},${i.toFixed(0)})`
  }
  get rgba() {
    let { r: e, g: t, b: i, a: n } = this
    return `rgba(${e.toFixed(0)},${t.toFixed(0)},${i.toFixed(0)},${n.toFixed(
      2
    )})`
  }
  get RGBA() {
    return [this.r / 255, this.g / 255, this.b / 255, this.a]
  }
  get ARGB() {
    return [this.a, this.r / 255, this.g / 255, this.b / 255]
  }
  get _hsl() {
    return (
      null == this._hslCached &&
        (this._hslCached = new eD(this.r, this.g, this.b)),
      this._hslCached
    )
  }
  get hsl() {
    let { h: e, s: t, l: i } = this._hsl
    return `hsl(${e.toFixed(0)}, ${(100 * t).toFixed(0)}%, ${(100 * i).toFixed(
      0
    )}%)`
  }
  get hsla() {
    let { h: e, s: t, l: i } = this._hsl
    return `hsla(${e.toFixed(0)}, ${(100 * t).toFixed(0)}%, ${(100 * i).toFixed(
      0
    )}%, ${this.a.toFixed(2)})`
  }
  get mono() {
    let e = 255 * this.brightness
    return new eb(e, e, e)
  }
  get brightness() {
    return (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / 255
  }
  get html() {
    return 1 === this.a
      ? '#' + ef(this.r) + ef(this.g) + ef(this.b)
      : '#' +
          ef(this.r) +
          ef(this.g) +
          ef(this.b) +
          ef(Math.floor(255 * this.a))
  }
  brighten(e) {
    let { h: t, s: i, l: n } = this._hsl
    return (n = ex(0, n + e * (1 - n), 1)), eb.fromHsl(t, i, n, this.a)
  }
  darken(e) {
    let { h: t, s: i, l: n } = this._hsl
    return (n = ex(0, n * (1 - e), 1)), eb.fromHsl(t, i, n, this.a)
  }
  saturate(e) {
    let { h: t, s: i, l: n } = this._hsl
    return (i = ex(0, i + e * (1 - i), 1)), eb.fromHsl(t, i, n, this.a)
  }
  desaturate(e) {
    let { h: t, s: i, l: n } = this._hsl
    return (i = ex(0, i * (1 - e), 1)), eb.fromHsl(t, i, n, this.a)
  }
  rotate(e) {
    let { h: t, s: i, l: n } = this._hsl
    return (t = (t + 360 + e) % 360), eb.fromHsl(t, i, n, this.a)
  }
  opacity(e) {
    let { h: t, s: i, l: n } = this._hsl
    return eb.fromHsl(t, i, n, e)
  }
  swatch() {
    let { r: e, g: t, b: i, a: n } = this
    console.log(
      `%c   %c ${this.html}, rgba(${e}, ${t}, ${i}, ${n}), ${this.hsla}`,
      `background-color: rgba(${e}, ${t}, ${i}, ${n})`,
      'background-color: #eee'
    )
  }
  blend(e, t) {
    return new eb(
      ek(this.r, e.r, t),
      ek(this.g, e.g, t),
      ek(this.b, e.b, t),
      ek(this.a, e.a, t)
    )
  }
}
function ey(e) {
  return e.replace(/[A-Z]/g, (e) => `-${e.toLocaleLowerCase()}`)
}
const ev = {},
  eE = (e, ...t) => {
    if (void 0 === ev[e]) {
      let [t, i] = e.split('|')
      void 0 === i
        ? (ev[e] = globalThis.document.createElement(t))
        : (ev[e] = globalThis.document.createElementNS(i, t))
    }
    let i = ev[e].cloneNode(),
      n = {}
    for (let e of t)
      e instanceof Element ||
      e instanceof DocumentFragment ||
      'string' == typeof e ||
      'number' == typeof e
        ? i instanceof HTMLTemplateElement
          ? i.content.append(e)
          : i.append(e)
        : Object.assign(n, e)
    for (let e of Object.keys(n)) {
      let t = n[e]
      if ('apply' === e) t(i)
      else if ('style' === e) {
        if ('object' == typeof t)
          for (let e of Object.keys(t))
            e.startsWith('--')
              ? i.style.setProperty(e, t[e])
              : (i.style[e] = t[e])
        else i.setAttribute('style', t)
      } else if (null != e.match(/^on[A-Z]/)) {
        let n = e.substring(2).toLowerCase()
        ee(i, n, t)
      } else if (null != e.match(/^bind[A-Z]/)) {
        let n = e.substring(4, 5).toLowerCase() + e.substring(5),
          r = em[n]
        if (void 0 !== r)
          !(function (e, t, i, n) {
            let r
            if (e instanceof DocumentFragment)
              throw Error('bind cannot bind to a DocumentFragment')
            if ('object' == typeof t && void 0 === t[l] && void 0 === n) {
              let { value: e } = t
              ;(r = 'string' == typeof e ? e : e[l]), (n = t), delete n.value
            } else r = 'string' == typeof t ? t : t[l]
            if (null == r)
              throw Error('bind requires a path or object with xin Proxy')
            let { toDOM: s } = i
            e.classList.add(a)
            let o = d.get(e)
            null == o && ((o = []), d.set(e, o)),
              o.push({ path: r, binding: i, options: n }),
              null == s || r.startsWith('^') || E(r)
          })(i, t, r)
        else throw Error(`${e} is not allowed, bindings.${n} is not defined`)
      } else if (void 0 !== i[e]) {
        let { MathMLElement: n } = globalThis
        i instanceof SVGElement || (void 0 !== n && i instanceof n)
          ? i.setAttribute(e, t)
          : (i[e] = t)
      } else {
        let n = ey(e)
        'class' === n
          ? t.split(' ').forEach((e) => {
              i.classList.add(e)
            })
          : void 0 !== i[n]
          ? (i[n] = t)
          : 'boolean' == typeof t
          ? t
            ? i.setAttribute(n, '')
            : i.removeAttribute(n)
          : i.setAttribute(n, t)
      }
    }
    return i
  },
  eA = (...e) => {
    let t = globalThis.document.createDocumentFragment()
    for (let i of e) t.append(i)
    return t
  },
  eF = new Proxy(
    { fragment: eA },
    {
      get: (e, t) => (
        void 0 ===
          e[(t = t.replace(/[A-Z]/g, (e) => `-${e.toLocaleLowerCase()}`))] &&
          (e[t] = (...e) => eE(t, ...e)),
        e[t]
      ),
      set() {
        throw Error('You may not add new properties to elements')
      },
    }
  )
new Proxy(
  { fragment: eA },
  {
    get: (e, t) => (
      void 0 === e[t] &&
        (e[t] = (...e) => eE(`${t}|http://www.w3.org/2000/svg`, ...e)),
      e[t]
    ),
    set() {
      throw Error('You may not add new properties to elements')
    },
  }
),
  new Proxy(
    { fragment: eA },
    {
      get: (e, t) => (
        void 0 === e[t] &&
          (e[t] = (...e) =>
            eE(`${t}|http://www.w3.org/1998/Math/MathML`, ...e)),
        e[t]
      ),
      set() {
        throw Error('You may not add new properties to elements')
      },
    }
  )
const ew = [
    'animation-iteration-count',
    'flex',
    'flex-base',
    'flex-grow',
    'flex-shrink',
    'gap',
    'opacity',
    'order',
    'tab-size',
    'widows',
    'z-index',
    'zoom',
  ],
  eC = (e, t, i) =>
    void 0 === i
      ? ''
      : 'string' == typeof i || ew.includes(t)
      ? `${e}  ${t}: ${i};`
      : `${e}  ${t}: ${i}px;`,
  eB = (e, t, i = '') => {
    let n = ey(e)
    if ('object' != typeof t) return eC(i, n, t)
    {
      let n = Object.keys(t)
        .map((e) => eB(e, t[e], `${i}  `))
        .join('\n')
      return `${i}  ${e} {
${n}
${i}  }`
    }
  },
  eS = (e, t = '') => {
    let i = Object.keys(e).map((i) => {
      let n = e[i]
      if ('string' == typeof n) {
        if ('@import' === i) return `@import url('${n}');`
        throw Error('top-level string value only allowed for `@import`')
      }
      let a = Object.keys(n)
        .map((e) => eB(e, n[e]))
        .join('\n')
      return `${t}${i} {
${a}
}`
    })
    return i.join('\n\n')
  },
  e_ = new Proxy(
    {},
    {
      get(e, t) {
        if (null == e[t]) {
          let [, i, , n, a, r] = (t = t.replace(
            /[A-Z]/g,
            (e) => `-${e.toLocaleLowerCase()}`
          )).match(/^([^\d_]*)((_)?(\d+)(\w*))?$/)
          if (((i = `--${i}`), null != a)) {
            let s = null == n ? Number(a) / 100 : -Number(a) / 100
            switch (r) {
              case 'b':
                {
                  let n = getComputedStyle(document.body).getPropertyValue(i)
                  e[t] =
                    s > 0
                      ? eb.fromCss(n).brighten(s).rgba
                      : eb.fromCss(n).darken(-s).rgba
                }
                break
              case 's':
                {
                  let n = getComputedStyle(document.body).getPropertyValue(i)
                  e[t] =
                    s > 0
                      ? eb.fromCss(n).saturate(s).rgba
                      : eb.fromCss(n).desaturate(-s).rgba
                }
                break
              case 'h':
                {
                  let n = getComputedStyle(document.body).getPropertyValue(i)
                  ;(e[t] = eb.fromCss(n).rotate(100 * s).rgba),
                    console.log(
                      eb.fromCss(n).hsla,
                      eb.fromCss(n).rotate(s).hsla
                    )
                }
                break
              case 'o':
                {
                  let n = getComputedStyle(document.body).getPropertyValue(i)
                  e[t] = eb.fromCss(n).opacity(s).rgba
                }
                break
              case '':
                e[t] = `calc(var(${i}) * ${s})`
                break
              default:
                throw (
                  (console.error(r),
                  Error(`Unrecognized method ${r} for css variable ${i}`))
                )
            }
          } else e[t] = `var(${i})`
        }
        return e[t]
      },
    }
  ),
  e$ = new Proxy(
    {},
    {
      get(e, t) {
        if (void 0 === e[t]) {
          let i = `--${t.replace(/[A-Z]/g, (e) => `-${e.toLocaleLowerCase()}`)}`
          e[t] = (e) => `var(${i}, ${e})`
        }
        return e[t]
      },
    }
  )
let eV = 0
function eT() {
  return `custom-elt${(eV++).toString(36)}`
}
let eP = 0
class eG extends HTMLElement {
  static #e = (() => {
    this.elements = eF
  })()
  static StyleNode(e) {
    return eF.style(eS(e))
  }
  static elementCreator(e) {
    if (null == this._elementCreator) {
      let t = null != e ? e.tag : null
      for (
        null == t &&
          ('string' == typeof this.name && '' !== this.name
            ? (t = ey(this.name)).startsWith('-') && (t = t.slice(1))
            : (t = eT())),
          null != customElements.get(t) &&
            console.warn(`${t} is already defined`),
          null == t.match(/\w+(-\w+)+/) &&
            (console.warn(`${t} is not a legal tag for a custom-element`),
            (t = eT()));
        void 0 !== customElements.get(t);

      )
        t = eT()
      window.customElements.define(t, this, e), (this._elementCreator = eF[t])
    }
    return this._elementCreator
  }
  initAttributes(...e) {
    let t = {},
      i = {},
      a = new MutationObserver((t) => {
        let i = !1
        t.forEach((t) => {
          i = !!(
            t.attributeName &&
            e.includes(
              t.attributeName.replace(/-([a-z])/g, (e, t) =>
                t.toLocaleUpperCase()
              )
            )
          )
        }),
          i && void 0 !== this.queueRender && this.queueRender(!1)
      })
    a.observe(this, { attributes: !0 }),
      e.forEach((e) => {
        t[e] = n(this[e])
        let a = ey(e)
        Object.defineProperty(this, e, {
          enumerable: !1,
          get() {
            return 'boolean' == typeof t[e]
              ? this.hasAttribute(a)
              : this.hasAttribute(a)
              ? 'number' == typeof t[e]
                ? parseFloat(this.getAttribute(a))
                : this.getAttribute(a)
              : void 0 !== i[e]
              ? i[e]
              : t[e]
          },
          set(n) {
            'boolean' == typeof t[e]
              ? n !== this[e] &&
                (n ? this.setAttribute(a, '') : this.removeAttribute(a),
                this.queueRender())
              : 'number' == typeof t[e]
              ? n !== parseFloat(this[e]) &&
                (this.setAttribute(a, n), this.queueRender())
              : ('object' == typeof n || `${n}` != `${this[e]}`) &&
                (null == n || 'object' == typeof n
                  ? this.removeAttribute(a)
                  : this.setAttribute(a, n),
                this.queueRender(),
                (i[e] = n))
          },
        })
      })
  }
  initValue() {
    let e = Object.getOwnPropertyDescriptor(this, 'value')
    if (void 0 === e || void 0 !== e.get || void 0 !== e.set) return
    let t = this.hasAttribute('value')
      ? this.getAttribute('value')
      : n(this.value)
    delete this.value,
      Object.defineProperty(this, 'value', {
        enumerable: !1,
        get: () => t,
        set(e) {
          t !== e && ((t = e), this.queueRender(!0))
        },
      })
  }
  get refs() {
    console.warn(
      'refs and data-ref are deprecated, use the part attribute and .parts instead'
    )
    let e = null != this.shadowRoot ? this.shadowRoot : this
    return (
      null == this._refs &&
        (this._refs = new Proxy(
          {},
          {
            get(t, i) {
              if (void 0 === t[i]) {
                let n = e.querySelector(`[part="${i}"],[data-ref="${i}"]`)
                if ((null == n && (n = e.querySelector(i)), null == n))
                  throw Error(`elementRef "${i}" does not exist!`)
                n.removeAttribute('data-ref'), (t[i] = n)
              }
              return t[i]
            },
          }
        )),
      this._refs
    )
  }
  get parts() {
    let e = null != this.shadowRoot ? this.shadowRoot : this
    return (
      null == this._refs &&
        (this._refs = new Proxy(
          {},
          {
            get(t, i) {
              if (void 0 === t[i]) {
                let n = e.querySelector(`[part="${i}"]`)
                if ((null == n && (n = e.querySelector(i)), null == n))
                  throw Error(`elementRef "${i}" does not exist!`)
                n.removeAttribute('data-ref'), (t[i] = n)
              }
              return t[i]
            },
          }
        )),
      this._refs
    )
  }
  constructor() {
    super(),
      (this.content = eF.slot()),
      (this._changeQueued = !1),
      (this._renderQueued = !1),
      (this._hydrated = !1),
      (eP += 1),
      this.initAttributes('hidden'),
      (this.instanceId = `${this.tagName.toLocaleLowerCase()}-${eP}`),
      (this._value = n(this.defaultValue))
  }
  connectedCallback() {
    this.hydrate(),
      null != this.role && this.setAttribute('role', this.role),
      void 0 !== this.onResize &&
        (es.observe(this),
        null == this._onResize && (this._onResize = this.onResize.bind(this)),
        this.addEventListener('resize', this._onResize)),
      null != this.value &&
        null != this.getAttribute('value') &&
        (this._value = this.getAttribute('value')),
      this.queueRender()
  }
  disconnectedCallback() {
    es.unobserve(this)
  }
  queueRender(e = !1) {
    this._hydrated &&
      (this._changeQueued || (this._changeQueued = e),
      this._renderQueued ||
        ((this._renderQueued = !0),
        requestAnimationFrame(() => {
          this._changeQueued && et(this, 'change'),
            (this._changeQueued = !1),
            (this._renderQueued = !1),
            this.render()
        })))
  }
  hydrate() {
    if (!this._hydrated) {
      this.initValue()
      let e = 'function' != typeof this.content,
        t = 'function' == typeof this.content ? this.content() : this.content
      if (void 0 !== this.styleNode) {
        let i = this.attachShadow({ mode: 'open' })
        i.appendChild(this.styleNode), eo(i, t, e)
      } else if (null !== t) {
        let i = [...this.childNodes]
        eo(this, t, e),
          (this.isSlotted = void 0 !== this.querySelector('slot,xin-slot'))
        let n = [...this.querySelectorAll('slot')]
        if ((n.length > 0 && n.forEach(ez.replaceSlot), i.length > 0)) {
          let e = { '': this }
          ;[...this.querySelectorAll('xin-slot')].forEach((t) => {
            e[t.name] = t
          }),
            i.forEach((t) => {
              let i = e[''],
                n = t instanceof Element ? e[t.slot] : i
              ;(void 0 !== n ? n : i).append(t)
            })
        }
      }
      this._hydrated = !0
    }
  }
  render() {}
}
class ez extends eG {
  static replaceSlot(e) {
    let t = document.createElement('xin-slot')
    '' !== e.name && t.setAttribute('name', e.name), e.replaceWith(t)
  }
  constructor() {
    super(),
      (this.name = ''),
      (this.content = null),
      this.initAttributes('name')
  }
}
ez.elementCreator({ tag: 'xin-slot' })
const eR = {}
function eL(e, t) {
  if (void 0 === eR[e]) {
    if (void 0 !== t) {
      let i = globalThis[t]
      eR[e] = Promise.resolve({ [t]: i })
    }
    let i = eF.script({ src: e })
    document.head.append(i),
      (eR[e] = new Promise((e) => {
        i.onload = () => e(globalThis)
      }))
  }
  return eR[e]
}
const ej = {}
class eI extends eG {
  content = null
  src = ''
  json = ''
  config = { renderer: 'svg', loop: !0, autoplay: !0 }
  static bodymovinAvailable
  animation
  styleNode = eG.StyleNode({
    ':host': { width: 400, height: 400, display: 'inline-block' },
  })
  _loading = !1
  get loading() {
    return this._loading
  }
  constructor() {
    super(),
      this.initAttributes('src', 'json'),
      void 0 === eI.bodymovinAvailable &&
        (eI.bodymovinAvailable = eL(
          'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js',
          'bodymovin'
        ))
  }
  doneLoading = () => {
    this._loading = !1
  }
  load = ({ bodymovin: e }) => {
    ;(this._loading = !0),
      (this.config.container = this.shadowRoot),
      '' !== this.json
        ? ((this.config.animationData = this.json), delete this.config.path)
        : '' !== this.src
        ? (delete this.config.animationData, (this.config.path = this.src))
        : console.log(
            '%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.',
            'color: #44f; background: #fff; padding: 0 5px',
            'color: default',
            'color: #44f; background: #fff; padding: 0 5px',
            'color: default',
            'color: #44f; background: #fff; padding: 0 5px',
            'color: default'
          ),
      this.animation &&
        (this.animation.destroy(),
        this.shadowRoot.querySelector('svg').remove()),
      (this.animation = e.loadAnimation(this.config)),
      this.animation.addEventListener('DOMLoaded', this.doneLoading)
  }
  render() {
    super.render(),
      eI.bodymovinAvailable.then(this.load).catch((e) => {
        console.error(e)
      })
  }
}
const eO = eI.elementCreator({ tag: 'bodymovin-player' }),
  eN = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/',
  eM = 'ace/theme/monokai',
  eq = async (e, t = 'html', i = {}, n = eM) => {
    let { ace: a } = await eL(`${eN}ace.min.js`)
    a.config.set('basePath', eN)
    let r = a.edit(e, {
      mode: `ace/mode/${t}`,
      tabSize: 2,
      useSoftTabs: !0,
      useWorker: !1,
      ...i,
    })
    return r.setTheme(n), r
  }
class eW extends eG {
  value = ''
  mode = 'javascript'
  disabled = !1
  role = 'code editor'
  get editor() {
    return this._editor
  }
  _editor
  _editorPromise
  options = {}
  theme = eM
  styleNode = eG.StyleNode({
    ':host': { display: 'block', position: 'relative' },
  })
  constructor() {
    super(), this.initAttributes('mode', 'theme', 'disabled')
  }
  onResize() {
    void 0 !== this.editor && this.editor.resize(!0)
  }
  updateValue = async (e) => {
    e.target !== this && this.editor && (this.value = this.editor.getValue())
  }
  connectedCallback() {
    super.connectedCallback(),
      '' === this.value && (this.value = this.textContent.trim('\n')),
      void 0 === this._editorPromise &&
        ((this._editorPromise = eq(this, this.mode, this.options, this.theme)),
        this._editorPromise.then((e) => {
          ;(this._editor = e), e.setValue(this.value, 1)
        })),
      this.addEventListener('change', this.updateValue)
  }
  render() {
    super.render(),
      void 0 !== this.editor &&
        this.editor.getValue() !== this.value &&
        this.editor.setValue(this.value),
      void 0 !== this._editorPromise &&
        this._editorPromise.then((e) => e.setReadOnly(this.disabled))
  }
}
const eH = eW.elementCreator({ tag: 'code-editor' }),
  eZ = (e, t, i = 'default') => {
    let n = e.type.startsWith('touch')
    if (n) {
      if (e.type.startsWith('touch')) {
        let i = e.touches[0].clientX,
          n = e.touches[0].clientY,
          a = e.target,
          r = 0,
          s = 0,
          o = (e) => {
            e.touches.length > 0 &&
              ((r = e.touches[0].clientX - i), (s = e.touches[0].clientY - n)),
              (!0 === t(r, s, e) || 0 === e.touches.length) &&
                (a.removeEventListener('touchmove', o),
                a.removeEventListener('touchend', o),
                a.removeEventListener('touchcancel', o))
          }
        a.addEventListener('touchmove', o, { passive: !0 }),
          a.addEventListener('touchend', o, { passive: !0 }),
          a.addEventListener('touchcancel', o, { passive: !0 })
      }
    } else {
      let n = e.clientX,
        a = e.clientY,
        r = eF.div({
          style: {
            content: ' ',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            cursor: i,
          },
        })
      document.body.append(r)
      let s = (e) => {
        let i = e.clientX - n,
          s = e.clientY - a
        !0 === t(i, s, e) && r.remove()
      }
      r.addEventListener('mousemove', s, { passive: !0 }),
        r.addEventListener('mouseup', s, { passive: !0 })
    }
  },
  { div: eU, span: eQ, template: eY } = eF,
  eJ = (e) => e,
  eX = class extends eG {
    get value() {
      return { array: this.array, filter: this.filter, columns: this.columns }
    }
    set value(e) {
      let { array: t, columns: i, filter: n } = h(e)
      ;(this._array !== t || this._columns !== i || this._filter !== n) &&
        this.queueRender(),
        (this._array = t || []),
        (this._columns = i || null),
        (this._filter = n || eJ)
    }
    _array = []
    _columns = null
    _filter = eJ
    charWidth = 15
    rowHeight = 30
    minColumnWidth = 30
    get virtual() {
      return this.rowHeight > 0 ? { height: this.rowHeight } : void 0
    }
    constructor() {
      super(), this.initAttributes('rowHeight', 'charWidth', 'minColumnWidth')
    }
    get array() {
      return this._array
    }
    set array(e) {
      ;(this._array = h(e)), this.queueRender()
    }
    get filter() {
      return this._filter
    }
    set filter(e) {
      this._filter !== e && ((this._filter = e), this.queueRender())
    }
    get columns() {
      if (!Array.isArray(this._columns)) {
        let { _array: e } = this
        this._columns = Object.keys(e[0] || {}).map((t) => {
          let i = (function (e, t, i) {
            let n = e.find((e) => void 0 !== e[t] && null !== e[t])
            if (void 0 !== n) {
              let e = n[t]
              switch (typeof e) {
                case 'string':
                  if (e.match(/^\d+(\.\d+)?$/)) return 6 * i
                  if (e.includes(' ')) return 20 * i
                  return 12 * i
                case 'number':
                  return 6 * i
                case 'boolean':
                  return 5 * i
                case 'object':
                  break
                default:
                  return 8 * i
              }
            }
            return !1
          })(e, t, this.charWidth)
          return {
            name: t.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleLowerCase(),
            prop: t,
            align:
              'number' != typeof e[0][t] && ('' === e[0][t] || isNaN(e[0][t]))
                ? 'left'
                : 'right',
            visible: !1 !== i,
            width: i || 0,
          }
        })
      }
      return this._columns
    }
    set columns(e) {
      ;(this._columns = e), this.queueRender()
    }
    get visibleColumns() {
      return this.columns.filter((e) => !1 !== e.visible)
    }
    get visibleRecords() {
      return Z[this.instanceId]
    }
    content = null
    getColumn(e) {
      let t =
          (void 0 !== e.touches ? e.touches[0].clientX : e.clientX) -
          this.getBoundingClientRect().x,
        i = void 0 !== e.touches ? 20 : 5,
        n = 0,
        a = [],
        r = this.visibleColumns.find((e) => {
          if (!1 !== e.visible)
            return (n += e.width), a.push(n), Math.abs(t - n) < i
        })
      return r
    }
    setCursor = (e) => {
      let t = this.getColumn(e)
      void 0 !== t
        ? (this.style.cursor = 'col-resize')
        : (this.style.cursor = '')
    }
    resizeColumn = (e) => {
      let t = this.getColumn(e)
      if (void 0 !== t) {
        let i = t.width,
          n = void 0 !== e.touches,
          a = n ? e.touches[0].identifier : void 0
        eZ(
          e,
          (e, r, s) => {
            let o = !n || [...s.touches].find((e) => e.identifier === a)
            if (void 0 === o) return !0
            let l = i + e
            if (
              ((t.width = l > this.minColumnWidth ? l : this.minColumnWidth),
              this.setColumnWidths(),
              'mouseup' === s.type)
            )
              return !0
          },
          'col-resize'
        )
      }
    }
    connectedCallback() {
      super.connectedCallback(),
        this.addEventListener('mousemove', this.setCursor),
        this.addEventListener('mousedown', this.resizeColumn),
        this.addEventListener('touchstart', this.resizeColumn, { passive: !0 })
    }
    setColumnWidths() {
      this.style.setProperty(
        '--grid-columns',
        this.visibleColumns.map((e) => e.width + 'px').join(' ')
      )
    }
    get rowStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: e_.gridColumns,
        height: this.rowHeight + 'px',
        lineHeight: this.rowHeight + 'px',
      }
    }
    get cellStyle() {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }
    }
    headerCell = (e) =>
      void 0 !== e.headerCell
        ? e.headerCell()
        : eQ(
            {
              class: 'th',
              role: 'columnheader',
              ariaSort: 'none',
              style: { ...this.cellStyle, textAlign: e.align || 'left' },
            },
            'string' == typeof e.name ? e.name : e.prop
          )
    dataCell = (e) =>
      void 0 !== e.dataCell
        ? e.dataCell(e)
        : eQ({
            class: 'td',
            role: 'cell',
            style: { ...this.cellStyle, textAlign: e.align || 'left' },
            bindText: `^.${e.prop}`,
          })
    get visibleRows() {
      return h(Z[this.instanceId])
    }
    render() {
      super.render(),
        (Z[this.instanceId] = this.filter(this._array)),
        (this.textContent = ''),
        (this.style.display = 'flex'),
        (this.style.flexDirection = 'column')
      let { visibleColumns: e } = this
      this.setColumnWidths(),
        this.append(
          eU(
            { class: 'thead', role: 'rowgroup' },
            eU(
              { class: 'tr', role: 'row', style: this.rowStyle },
              ...e.map(this.headerCell)
            )
          ),
          eU(
            {
              class: 'tbody',
              role: 'rowgroup',
              style: {
                content: ' ',
                minHeight: '200px',
                flex: '1 1 100px',
                overflow: 'hidden',
                overflowY: 'scroll',
              },
              bindList: { value: this.instanceId, virtual: this.virtual },
            },
            eY(
              eU(
                { class: 'tr', role: 'row', style: this.rowStyle },
                ...e.map(this.dataCell)
              )
            )
          )
        )
    }
  }.elementCreator({ tag: 'data-table' }),
  { input: eK } = eF,
  e0 = (e) => e,
  e1 = 'null filter, everything matches',
  e2 = [
    {
      hint: 'field=value',
      explanation: 'field is value, ignoring case',
      description: (e, t) =>
        isNaN(Number(t))
          ? '' !== e
            ? `${e} is "${t}"`
            : `any field is "${t}"`
          : '' !== e
          ? `${e} == ${t}`
          : `any field == ${t}`,
      token: /^([\w-_]*)=(.+)$/,
      makeFilter: (e, t) => {
        if (isNaN(Number(t)))
          return ((t = String(t).toLocaleLowerCase()), '' !== e)
            ? (i) => String(i[e]).toLocaleLowerCase() == t
            : (e) =>
                void 0 !==
                Object.values(e).find((e) => String(e).toLocaleLowerCase() == t)
        let i = Number(t)
        return '' !== e
          ? (t) => Number(t[e]) == i
          : (e) => void 0 !== Object.values(e).find((e) => Number(e) == i)
      },
    },
    {
      hint: 'field!=value',
      explanation: 'field is not value, ignoring case',
      description: (e, t) => `${e} ≠ ${t}`,
      token: /^([\w-_]+)!=(.+)$/,
      makeFilter: (e, t) => (
        (t = t.toLocaleLowerCase()),
        (i) => String(i[e]).toLocaleLowerCase() != t
      ),
    },
    {
      hint: 'field>value',
      explanation: 'field > value (numeric / A-Z)',
      description: (e, t) =>
        isNaN(Number(t)) ? `${e} > ${t} (A-Z)` : `${e} > ${t}`,
      token: /^([\w-_]+)>(.+)$/,
      makeFilter: (e, t) => {
        if (!isNaN(Number(t))) {
          let i = Number(t)
          return (t) => Number(t[e]) > i
        }
        return (
          (t = t.toLocaleLowerCase()),
          (i) => String(i[e]).toLocaleLowerCase() > t
        )
      },
    },
    {
      hint: 'field<value',
      explanation: 'field < value (numeric / A-Z)',
      description: (e, t) =>
        isNaN(Number(t)) ? `${e} < ${t} (A-Z)` : `${e} < ${t}`,
      token: /^([\w-_]+)<(.+)$/,
      makeFilter: (e, t) => {
        if (!isNaN(Number(t))) {
          let i = Number(t)
          return (t) => Number(t[e]) < i
        }
        return (
          (t = t.toLocaleLowerCase()),
          (i) => String(i[e]).toLocaleLowerCase() < t
        )
      },
    },
    {
      hint: 'field:value',
      explanation: 'field contains value, ignoring case',
      description: (e, t) => `${e} contains "${t}"`,
      token: /^([\w-_]+):(.+)$/,
      makeFilter: (e, t) => (
        (t = t.toLocaleLowerCase()),
        (i) => String(i[e]).toLocaleLowerCase().includes(t)
      ),
    },
    {
      hint: '!!field',
      explanation: 'field is true, non-empty, non-zero',
      description: (e) => `${e} is truthy`,
      token: /^!!([\w-_]+)$/,
      makeFilter: (e) => (t) => !!t[e],
    },
    {
      hint: '!field',
      explanation: 'field is false, empty, zero',
      description: (e) => `${e} is falsy`,
      token: /^!([\w-_]+)$/,
      makeFilter: (e) => (t) => !t[e],
    },
    {
      hint: 'value',
      explanation: 'any field contains value',
      description: (e) => `"${e}" in any property`,
      token: /^(.+)$/,
      makeFilter: (e) => (
        (e = e.toLocaleLowerCase()),
        (t) =>
          void 0 !==
          Object.values(t).find((t) =>
            String(t).toLocaleLowerCase().includes(e)
          )
      ),
    },
  ]
class e3 extends eG {
  value = ''
  filter = e0
  title = e1
  content = eK({
    type: 'search',
    part: 'input',
    style: { width: '100%', height: 'auto' },
  })
  placeholder = ''
  help = ''
  filters = e2
  constructor() {
    super(), this.initAttributes('title', 'placeholder', 'help')
  }
  buildFilter = el((e) => {
    let t = e
      .split(/\s+/)
      .filter((e) => '' !== e)
      .map((e) =>
        (function (e, t = e2) {
          let i = t.find((t) => t.token.test(e))
          if (void 0 !== i) {
            let [, ...t] = e.match(i.token)
            return {
              description: i.description(...t),
              test: i.makeFilter(...t),
            }
          }
        })(e, this.filters)
      )
      .filter((e) => void 0 !== e)
    0 === t.length
      ? ((this.title = e1),
        this.filter !== e0 &&
          ((this.filter = e0), this.dispatchEvent(new Event('change'))))
      : ((this.filter = t.reduce(
          (e, t) =>
            !1 === e ? (e) => e.filter(t.test) : (i) => e(i.filter(t.test)),
          !1
        )),
        (this.title = t.map((e) => e.description).join(', and ')),
        this.dispatchEvent(new Event('change')))
  }, 500)
  reset() {
    this.filter !== e0 &&
      ((this.title = e1),
      (this.filter = e0),
      this.dispatchEvent(new Event('change')))
  }
  handleInput = (e) => {
    let { input: t } = this.parts
    this.buildFilter(t.value),
      (this.value = t.value),
      e.stopPropagation(),
      e.preventDefault()
  }
  connectedCallback() {
    super.connectedCallback(),
      this.setAttribute('title', this.title),
      (this.help = this.filters
        .map((e) =>
          void 0 !== e.explanation ? `${e.hint}: ${e.explanation}` : e.hint
        )
        .join('\n'))
    let { input: e } = this.parts
    ;(e.value = this.value),
      e.addEventListener('input', this.handleInput),
      e.addEventListener('change', this.handleInput),
      (this.style.position = 'relative')
  }
  render() {
    super.render()
    let { input: e } = this.parts
    ;(e.placeholder =
      '' !== this.placeholder
        ? this.placeholder
        : this.filters.map((e) => e.hint).join(' ')),
      (e.value = this.value)
  }
}
const e5 = e3.elementCreator({ tag: 'filter-builder' }),
  e6 = [
    { name: 'streets', url: 'mapbox://styles/mapbox/streets-v10' },
    { name: 'outdoors', url: 'mapbox://styles/mapbox/outdoors-v10' },
    { name: 'light', url: 'mapbox://styles/mapbox/light-v9' },
    { name: 'dark', url: 'mapbox://styles/mapbox/dark-v9' },
    { name: 'satellite', url: 'mapbox://styles/mapbox/satellite-v9' },
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
  ],
  { div: e7 } = eF
class e8 extends eG {
  coords = '65.01715565258993,25.48081004203459,12'
  content = e7({ style: { width: '100%', height: '100%' } })
  get map() {
    return this._map
  }
  mapStyle = e6[0]
  token = ''
  static mapboxCSSAvailable
  static mapboxAvailable
  _map
  styleNode = eG.StyleNode({
    ':host': {
      display: 'inline-block',
      position: 'relative',
      width: '400px',
      height: '400px',
      textAlign: 'left',
    },
  })
  constructor() {
    super(),
      this.initAttributes('coords', 'token', 'mapStyle'),
      void 0 === e8.mapboxCSSAvailable &&
        ((e8.mapboxCSSAvailable = (function (e) {
          if (void 0 === ej[e]) {
            let t = eF.link({ rel: 'stylesheet', type: 'text/css', href: e })
            document.head.append(t),
              (ej[e] = new Promise((e) => {
                t.onload = e
              }))
          }
          return ej[e]
        })('https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css').catch(
          (e) => {
            console.error('failed to load mapbox-gl.css', e)
          }
        )),
        (e8.mapboxAvailable = eL(
          'https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'
        ).catch((e) => {
          console.error('failed to load mapbox-gl.js', e)
        })))
  }
  connectedCallback() {
    super.connectedCallback(),
      this.token ||
        console.error(
          'mapbox requires an access token which you can provide via the token attribute'
        )
  }
  render() {
    if ((super.render(), !this.token)) return
    let { div: e } = this.parts,
      [t, i, n] = this.coords.split(',').map((e) => Number(e))
    this.map && this.map.remove(),
      e8.mapboxAvailable.then(({ mapboxgl: a }) => {
        console.log(
          '%cmapbox may complain about missing css because it is loaded async on demand',
          'background: orange; color: black; padding: 0 5px;'
        ),
          (a.accessToken = this.token),
          (this._map = new a.Map({
            container: e,
            style: this.mapStyle.url,
            zoom: n,
            center: [i, t],
          })),
          this._map.on('render', () => this._map.resize())
      })
  }
}
const e4 = e8.elementCreator({ tag: 'map-box' })
var e9 = {}
!(function (e) {
  'use strict'
  function t() {
    return (t = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t]
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
          }
          return e
        }).apply(this, arguments)
  }
  function i(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i]
    return n
  }
  function n(e, t) {
    var n =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (n) return (n = n.call(e)).next.bind(n)
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ('string' == typeof e) return i(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if (
            ('Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n)
          )
            return Array.from(e)
          if (
            'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return i(e, t)
        }
      })(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      n && (e = n)
      var a = 0
      return function () {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
      }
    }
    throw TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  var a = 0
  function r(e) {
    return '__private_' + a++ + '_' + e
  }
  function s(e, t) {
    if (!Object.prototype.hasOwnProperty.call(e, t))
      throw TypeError('attempted to use private field on non-instance')
    return e
  }
  function o() {
    return {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      hooks: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    }
  }
  function l(t) {
    e.defaults = t
  }
  e.defaults = o()
  var u = /[&<>"']/,
    c = RegExp(u.source, 'g'),
    h = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    p = RegExp(h.source, 'g'),
    d = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    m = function (e) {
      return d[e]
    }
  function x(e, t) {
    if (t) {
      if (u.test(e)) return e.replace(c, m)
    } else if (h.test(e)) return e.replace(p, m)
    return e
  }
  var k = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
  function f(e) {
    return e.replace(k, function (e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ''
    })
  }
  var D = /(^|[^\[])\^/g
  function g(e, t) {
    ;(e = 'string' == typeof e ? e : e.source), (t = t || '')
    var i = {
      replace: function (t, n) {
        return (
          (n = (n = n.source || n).replace(D, '$1')), (e = e.replace(t, n)), i
        )
      },
      getRegex: function () {
        return new RegExp(e, t)
      },
    }
    return i
  }
  var b = /[^\w:]/g,
    y = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
  function v(e, t, i) {
    var n, a, r, s
    if (e) {
      try {
        n = decodeURIComponent(f(i)).replace(b, '').toLowerCase()
      } catch (e) {
        return null
      }
      if (
        0 === n.indexOf('javascript:') ||
        0 === n.indexOf('vbscript:') ||
        0 === n.indexOf('data:')
      )
        return null
    }
    t &&
      !y.test(i) &&
      ((a = t),
      (r = i),
      E[' ' + a] ||
        (A.test(a) ? (E[' ' + a] = a + '/') : (E[' ' + a] = S(a, '/', !0))),
      (s = -1 === (a = E[' ' + a]).indexOf(':')),
      (i =
        '//' === r.substring(0, 2)
          ? s
            ? r
            : a.replace(F, '$1') + r
          : '/' !== r.charAt(0)
          ? a + r
          : s
          ? r
          : a.replace(w, '$1') + r))
    try {
      i = encodeURI(i).replace(/%25/g, '%')
    } catch (e) {
      return null
    }
    return i
  }
  var E = {},
    A = /^[^:]+:\/*[^/]*$/,
    F = /^([^:]+:)[\s\S]*$/,
    w = /^([^:]+:\/*[^/]*)[\s\S]*$/,
    C = { exec: function () {} }
  function B(e, t) {
    var i = e
        .replace(/\|/g, function (e, t, i) {
          for (var n = !1, a = t; --a >= 0 && '\\' === i[a]; ) n = !n
          return n ? '|' : ' |'
        })
        .split(/ \|/),
      n = 0
    if (
      (i[0].trim() || i.shift(),
      i.length > 0 && !i[i.length - 1].trim() && i.pop(),
      i.length > t)
    )
      i.splice(t)
    else for (; i.length < t; ) i.push('')
    for (; n < i.length; n++) i[n] = i[n].trim().replace(/\\\|/g, '|')
    return i
  }
  function S(e, t, i) {
    var n = e.length
    if (0 === n) return ''
    for (var a = 0; a < n; ) {
      var r = e.charAt(n - a - 1)
      if (r !== t || i) {
        if (r !== t && i) a++
        else break
      } else a++
    }
    return e.slice(0, n - a)
  }
  function _(e, t, i, n) {
    var a = t.href,
      r = t.title ? x(t.title) : null,
      s = e[1].replace(/\\([\[\]])/g, '$1')
    if ('!' !== e[0].charAt(0)) {
      n.state.inLink = !0
      var o = {
        type: 'link',
        raw: i,
        href: a,
        title: r,
        text: s,
        tokens: n.inlineTokens(s),
      }
      return (n.state.inLink = !1), o
    }
    return { type: 'image', raw: i, href: a, title: r, text: x(s) }
  }
  var $ = (function () {
      function t(t) {
        this.options = t || e.defaults
      }
      var i = t.prototype
      return (
        (i.space = function (e) {
          var t = this.rules.block.newline.exec(e)
          if (t && t[0].length > 0) return { type: 'space', raw: t[0] }
        }),
        (i.code = function (e) {
          var t = this.rules.block.code.exec(e)
          if (t) {
            var i = t[0].replace(/^ {1,4}/gm, '')
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? i : S(i, '\n'),
            }
          }
        }),
        (i.fences = function (e) {
          var t = this.rules.block.fences.exec(e)
          if (t) {
            var i = t[0],
              n = (function (e, t) {
                var i = e.match(/^(\s+)(?:```)/)
                if (null === i) return t
                var n = i[1]
                return t
                  .split('\n')
                  .map(function (e) {
                    var t = e.match(/^\s+/)
                    return null === t
                      ? e
                      : t[0].length >= n.length
                      ? e.slice(n.length)
                      : e
                  })
                  .join('\n')
              })(i, t[3] || '')
            return {
              type: 'code',
              raw: i,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline._escapes, '$1')
                : t[2],
              text: n,
            }
          }
        }),
        (i.heading = function (e) {
          var t = this.rules.block.heading.exec(e)
          if (t) {
            var i = t[2].trim()
            if (/#$/.test(i)) {
              var n = S(i, '#')
              this.options.pedantic
                ? (i = n.trim())
                : (!n || / $/.test(n)) && (i = n.trim())
            }
            return {
              type: 'heading',
              raw: t[0],
              depth: t[1].length,
              text: i,
              tokens: this.lexer.inline(i),
            }
          }
        }),
        (i.hr = function (e) {
          var t = this.rules.block.hr.exec(e)
          if (t) return { type: 'hr', raw: t[0] }
        }),
        (i.blockquote = function (e) {
          var t = this.rules.block.blockquote.exec(e)
          if (t) {
            var i = t[0].replace(/^ *>[ \t]?/gm, ''),
              n = this.lexer.state.top
            this.lexer.state.top = !0
            var a = this.lexer.blockTokens(i)
            return (
              (this.lexer.state.top = n),
              { type: 'blockquote', raw: t[0], tokens: a, text: i }
            )
          }
        }),
        (i.list = function (e) {
          var t = this.rules.block.list.exec(e)
          if (t) {
            var i,
              n,
              a,
              r,
              s,
              o,
              l,
              u,
              c,
              h,
              p,
              d,
              m = t[1].trim(),
              x = m.length > 1,
              k = {
                type: 'list',
                raw: '',
                ordered: x,
                start: x ? +m.slice(0, -1) : '',
                loose: !1,
                items: [],
              }
            ;(m = x ? '\\d{1,9}\\' + m.slice(-1) : '\\' + m),
              this.options.pedantic && (m = x ? m : '[*+-]')
            for (
              var f = RegExp('^( {0,3}' + m + ')((?:[	 ][^\\n]*)?(?:\\n|$))');
              e &&
              ((d = !1), !(!(t = f.exec(e)) || this.rules.block.hr.test(e)));

            ) {
              if (
                ((i = t[0]),
                (e = e.substring(i.length)),
                (u = t[2].split('\n', 1)[0].replace(/^\t+/, function (e) {
                  return ' '.repeat(3 * e.length)
                })),
                (c = e.split('\n', 1)[0]),
                this.options.pedantic
                  ? ((r = 2), (p = u.trimLeft()))
                  : ((r = (r = t[2].search(/[^ ]/)) > 4 ? 1 : r),
                    (p = u.slice(r)),
                    (r += t[1].length)),
                (o = !1),
                !u &&
                  /^ *$/.test(c) &&
                  ((i += c + '\n'), (e = e.substring(c.length + 1)), (d = !0)),
                !d)
              )
                for (
                  var D = RegExp(
                      '^ {0,' +
                        Math.min(3, r - 1) +
                        '}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))'
                    ),
                    g = RegExp(
                      '^ {0,' +
                        Math.min(3, r - 1) +
                        '}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)'
                    ),
                    b = RegExp('^ {0,' + Math.min(3, r - 1) + '}(?:```|~~~)'),
                    y = RegExp('^ {0,' + Math.min(3, r - 1) + '}#');
                  e &&
                  ((c = h = e.split('\n', 1)[0]),
                  this.options.pedantic &&
                    (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                  !(b.test(c) || y.test(c) || D.test(c) || g.test(e)));

                ) {
                  if (c.search(/[^ ]/) >= r || !c.trim()) p += '\n' + c.slice(r)
                  else {
                    if (
                      o ||
                      u.search(/[^ ]/) >= 4 ||
                      b.test(u) ||
                      y.test(u) ||
                      g.test(u)
                    )
                      break
                    p += '\n' + c
                  }
                  o || c.trim() || (o = !0),
                    (i += h + '\n'),
                    (e = e.substring(h.length + 1)),
                    (u = c.slice(r))
                }
              !k.loose &&
                (l ? (k.loose = !0) : /\n *\n *$/.test(i) && (l = !0)),
                this.options.gfm &&
                  (n = /^\[[ xX]\] /.exec(p)) &&
                  ((a = '[ ] ' !== n[0]), (p = p.replace(/^\[[ xX]\] +/, ''))),
                k.items.push({
                  type: 'list_item',
                  raw: i,
                  task: !!n,
                  checked: a,
                  loose: !1,
                  text: p,
                }),
                (k.raw += i)
            }
            ;(k.items[k.items.length - 1].raw = i.trimRight()),
              (k.items[k.items.length - 1].text = p.trimRight()),
              (k.raw = k.raw.trimRight())
            var v = k.items.length
            for (s = 0; s < v; s++)
              if (
                ((this.lexer.state.top = !1),
                (k.items[s].tokens = this.lexer.blockTokens(
                  k.items[s].text,
                  []
                )),
                !k.loose)
              ) {
                var E = k.items[s].tokens.filter(function (e) {
                    return 'space' === e.type
                  }),
                  A =
                    E.length > 0 &&
                    E.some(function (e) {
                      return /\n.*\n/.test(e.raw)
                    })
                k.loose = A
              }
            if (k.loose) for (s = 0; s < v; s++) k.items[s].loose = !0
            return k
          }
        }),
        (i.html = function (e) {
          var t = this.rules.block.html.exec(e)
          if (t) {
            var i = {
              type: 'html',
              block: !0,
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: t[0],
            }
            if (this.options.sanitize) {
              var n = this.options.sanitizer
                ? this.options.sanitizer(t[0])
                : x(t[0])
              ;(i.type = 'paragraph'),
                (i.text = n),
                (i.tokens = this.lexer.inline(n))
            }
            return i
          }
        }),
        (i.def = function (e) {
          var t = this.rules.block.def.exec(e)
          if (t) {
            var i = t[1].toLowerCase().replace(/\s+/g, ' '),
              n = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, '$1')
                    .replace(this.rules.inline._escapes, '$1')
                : '',
              a = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline._escapes, '$1')
                : t[3]
            return { type: 'def', tag: i, raw: t[0], href: n, title: a }
          }
        }),
        (i.table = function (e) {
          var t = this.rules.block.table.exec(e)
          if (t) {
            var i = {
              type: 'table',
              header: B(t[1]).map(function (e) {
                return { text: e }
              }),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows:
                t[3] && t[3].trim()
                  ? t[3].replace(/\n[ \t]*$/, '').split('\n')
                  : [],
            }
            if (i.header.length === i.align.length) {
              i.raw = t[0]
              var n,
                a,
                r,
                s,
                o = i.align.length
              for (n = 0; n < o; n++)
                /^ *-+: *$/.test(i.align[n])
                  ? (i.align[n] = 'right')
                  : /^ *:-+: *$/.test(i.align[n])
                  ? (i.align[n] = 'center')
                  : /^ *:-+ *$/.test(i.align[n])
                  ? (i.align[n] = 'left')
                  : (i.align[n] = null)
              for (n = 0, o = i.rows.length; n < o; n++)
                i.rows[n] = B(i.rows[n], i.header.length).map(function (e) {
                  return { text: e }
                })
              for (a = 0, o = i.header.length; a < o; a++)
                i.header[a].tokens = this.lexer.inline(i.header[a].text)
              for (a = 0, o = i.rows.length; a < o; a++)
                for (r = 0, s = i.rows[a]; r < s.length; r++)
                  s[r].tokens = this.lexer.inline(s[r].text)
              return i
            }
          }
        }),
        (i.lheading = function (e) {
          var t = this.rules.block.lheading.exec(e)
          if (t)
            return {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            }
        }),
        (i.paragraph = function (e) {
          var t = this.rules.block.paragraph.exec(e)
          if (t) {
            var i =
              '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
            return {
              type: 'paragraph',
              raw: t[0],
              text: i,
              tokens: this.lexer.inline(i),
            }
          }
        }),
        (i.text = function (e) {
          var t = this.rules.block.text.exec(e)
          if (t)
            return {
              type: 'text',
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            }
        }),
        (i.escape = function (e) {
          var t = this.rules.inline.escape.exec(e)
          if (t) return { type: 'escape', raw: t[0], text: x(t[1]) }
        }),
        (i.tag = function (e) {
          var t = this.rules.inline.tag.exec(e)
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : x(t[0])
                  : t[0],
              }
            )
        }),
        (i.link = function (e) {
          var t = this.rules.inline.link.exec(e)
          if (t) {
            var i = t[2].trim()
            if (!this.options.pedantic && /^</.test(i)) {
              if (!/>$/.test(i)) return
              var n = S(i.slice(0, -1), '\\')
              if ((i.length - n.length) % 2 == 0) return
            } else {
              var a = (function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1
                for (var i = e.length, n = 0, a = 0; a < i; a++)
                  if ('\\' === e[a]) a++
                  else if (e[a] === t[0]) n++
                  else if (e[a] === t[1] && --n < 0) return a
                return -1
              })(t[2], '()')
              if (a > -1) {
                var r = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + a
                ;(t[2] = t[2].substring(0, a)),
                  (t[0] = t[0].substring(0, r).trim()),
                  (t[3] = '')
              }
            }
            var s = t[2],
              o = ''
            if (this.options.pedantic) {
              var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s)
              l && ((s = l[1]), (o = l[3]))
            } else o = t[3] ? t[3].slice(1, -1) : ''
            return (
              (s = s.trim()),
              /^</.test(s) &&
                (s =
                  this.options.pedantic && !/>$/.test(i)
                    ? s.slice(1)
                    : s.slice(1, -1)),
              _(
                t,
                {
                  href: s ? s.replace(this.rules.inline._escapes, '$1') : s,
                  title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                },
                t[0],
                this.lexer
              )
            )
          }
        }),
        (i.reflink = function (e, t) {
          var i
          if (
            (i = this.rules.inline.reflink.exec(e)) ||
            (i = this.rules.inline.nolink.exec(e))
          ) {
            var n = (i[2] || i[1]).replace(/\s+/g, ' ')
            if (!(n = t[n.toLowerCase()])) {
              var a = i[0].charAt(0)
              return { type: 'text', raw: a, text: a }
            }
            return _(i, n, i[0], this.lexer)
          }
        }),
        (i.emStrong = function (e, t, i) {
          void 0 === i && (i = '')
          var n = this.rules.inline.emStrong.lDelim.exec(e)
          if (
            n &&
            !(
              n[3] &&
              i.match(
                /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/
              )
            ) &&
            (!(n[1] || n[2]) || !i || this.rules.inline.punctuation.exec(i))
          ) {
            var a,
              r,
              s = n[0].length - 1,
              o = s,
              l = 0,
              u =
                '*' === n[0][0]
                  ? this.rules.inline.emStrong.rDelimAst
                  : this.rules.inline.emStrong.rDelimUnd
            for (
              u.lastIndex = 0, t = t.slice(-1 * e.length + s);
              null != (n = u.exec(t));

            )
              if ((a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6])) {
                if (((r = a.length), n[3] || n[4])) {
                  o += r
                  continue
                }
                if ((n[5] || n[6]) && s % 3 && !((s + r) % 3)) {
                  l += r
                  continue
                }
                if (!((o -= r) > 0)) {
                  r = Math.min(r, r + o + l)
                  var c = e.slice(0, s + n.index + r + 1)
                  if (Math.min(s, r) % 2) {
                    var h = c.slice(1, -1)
                    return {
                      type: 'em',
                      raw: c,
                      text: h,
                      tokens: this.lexer.inlineTokens(h),
                    }
                  }
                  var p = c.slice(2, -2)
                  return {
                    type: 'strong',
                    raw: c,
                    text: p,
                    tokens: this.lexer.inlineTokens(p),
                  }
                }
              }
          }
        }),
        (i.codespan = function (e) {
          var t = this.rules.inline.code.exec(e)
          if (t) {
            var i = t[2].replace(/\n/g, ' '),
              n = /[^ ]/.test(i),
              a = /^ /.test(i) && / $/.test(i)
            return (
              n && a && (i = i.substring(1, i.length - 1)),
              (i = x(i, !0)),
              { type: 'codespan', raw: t[0], text: i }
            )
          }
        }),
        (i.br = function (e) {
          var t = this.rules.inline.br.exec(e)
          if (t) return { type: 'br', raw: t[0] }
        }),
        (i.del = function (e) {
          var t = this.rules.inline.del.exec(e)
          if (t)
            return {
              type: 'del',
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            }
        }),
        (i.autolink = function (e, t) {
          var i,
            n,
            a = this.rules.inline.autolink.exec(e)
          if (a)
            return (
              (n =
                '@' === a[2]
                  ? 'mailto:' + (i = x(this.options.mangle ? t(a[1]) : a[1]))
                  : (i = x(a[1]))),
              {
                type: 'link',
                raw: a[0],
                text: i,
                href: n,
                tokens: [{ type: 'text', raw: i, text: i }],
              }
            )
        }),
        (i.url = function (e, t) {
          var i, n, a, r
          if ((i = this.rules.inline.url.exec(e))) {
            if ('@' === i[2])
              a = 'mailto:' + (n = x(this.options.mangle ? t(i[0]) : i[0]))
            else {
              do (r = i[0]), (i[0] = this.rules.inline._backpedal.exec(i[0])[0])
              while (r !== i[0])
              ;(n = x(i[0])), (a = 'www.' === i[1] ? 'http://' + i[0] : i[0])
            }
            return {
              type: 'link',
              raw: i[0],
              text: n,
              href: a,
              tokens: [{ type: 'text', raw: n, text: n }],
            }
          }
        }),
        (i.inlineText = function (e, t) {
          var i,
            n = this.rules.inline.text.exec(e)
          if (n)
            return (
              (i = this.lexer.state.inRawBlock
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(n[0])
                    : x(n[0])
                  : n[0]
                : x(this.options.smartypants ? t(n[0]) : n[0])),
              { type: 'text', raw: n[0], text: i }
            )
        }),
        t
      )
    })(),
    V = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: C,
      lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
    }
  ;(V._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/),
    (V._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
    (V.def = g(V.def)
      .replace('label', V._label)
      .replace('title', V._title)
      .getRegex()),
    (V.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (V.listItemStart = g(/^( *)(bull) */)
      .replace('bull', V.bullet)
      .getRegex()),
    (V.list = g(V.list)
      .replace(/bull/g, V.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + V.def.source + ')')
      .getRegex()),
    (V._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (V._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (V.html = g(V.html, 'i')
      .replace('comment', V._comment)
      .replace('tag', V._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (V.lheading = g(V.lheading).replace(/bull/g, V.bullet).getRegex()),
    (V.paragraph = g(V._paragraph)
      .replace('hr', V.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', V._tag)
      .getRegex()),
    (V.blockquote = g(V.blockquote)
      .replace('paragraph', V.paragraph)
      .getRegex()),
    (V.normal = t({}, V)),
    (V.gfm = t({}, V.normal, {
      table:
        '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (V.gfm.table = g(V.gfm.table)
      .replace('hr', V.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', V._tag)
      .getRegex()),
    (V.gfm.paragraph = g(V._paragraph)
      .replace('hr', V.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('table', V.gfm.table)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', V._tag)
      .getRegex()),
    (V.pedantic = t({}, V.normal, {
      html: g(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', V._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: C,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: g(V.normal._paragraph)
        .replace('hr', V.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', V.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }))
  var T = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: C,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim:
        /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
      rDelimAst:
        /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
      rDelimUnd:
        /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: C,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^((?![*_])[\spunctuation])/,
  }
  function P(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…')
  }
  function G(e) {
    var t,
      i,
      n = '',
      a = e.length
    for (t = 0; t < a; t++)
      (i = e.charCodeAt(t)),
        Math.random() > 0.5 && (i = 'x' + i.toString(16)),
        (n += '&#' + i + ';')
    return n
  }
  ;(T._punctuation = '\\p{P}$+<=>`^|~'),
    (T.punctuation = g(T.punctuation, 'u')
      .replace(/punctuation/g, T._punctuation)
      .getRegex()),
    (T.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g),
    (T.anyPunctuation = /\\[punct]/g),
    (T._escapes = /\\([punct])/g),
    (T._comment = g(V._comment).replace('(?:-->|$)', '-->').getRegex()),
    (T.emStrong.lDelim = g(T.emStrong.lDelim, 'u')
      .replace(/punct/g, T._punctuation)
      .getRegex()),
    (T.emStrong.rDelimAst = g(T.emStrong.rDelimAst, 'gu')
      .replace(/punct/g, T._punctuation)
      .getRegex()),
    (T.emStrong.rDelimUnd = g(T.emStrong.rDelimUnd, 'gu')
      .replace(/punct/g, T._punctuation)
      .getRegex()),
    (T.anyPunctuation = g(T.anyPunctuation, 'gu')
      .replace(/punct/g, T._punctuation)
      .getRegex()),
    (T._escapes = g(T._escapes, 'gu')
      .replace(/punct/g, T._punctuation)
      .getRegex()),
    (T._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (T._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (T.autolink = g(T.autolink)
      .replace('scheme', T._scheme)
      .replace('email', T._email)
      .getRegex()),
    (T._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (T.tag = g(T.tag)
      .replace('comment', T._comment)
      .replace('attribute', T._attribute)
      .getRegex()),
    (T._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (T._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (T._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (T.link = g(T.link)
      .replace('label', T._label)
      .replace('href', T._href)
      .replace('title', T._title)
      .getRegex()),
    (T.reflink = g(T.reflink)
      .replace('label', T._label)
      .replace('ref', V._label)
      .getRegex()),
    (T.nolink = g(T.nolink).replace('ref', V._label).getRegex()),
    (T.reflinkSearch = g(T.reflinkSearch, 'g')
      .replace('reflink', T.reflink)
      .replace('nolink', T.nolink)
      .getRegex()),
    (T.normal = t({}, T)),
    (T.pedantic = t({}, T.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: g(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', T._label)
        .getRegex(),
      reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', T._label)
        .getRegex(),
    })),
    (T.gfm = t({}, T.normal, {
      escape: g(T.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (T.gfm.url = g(T.gfm.url, 'i')
      .replace('email', T.gfm._extended_email)
      .getRegex()),
    (T.breaks = t({}, T.gfm, {
      br: g(T.br).replace('{2,}', '*').getRegex(),
      text: g(T.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }))
  var z = (function () {
      function t(t) {
        ;(this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = t || e.defaults),
          (this.options.tokenizer = this.options.tokenizer || new $()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 })
        var i = { block: V.normal, inline: T.normal }
        this.options.pedantic
          ? ((i.block = V.pedantic), (i.inline = T.pedantic))
          : this.options.gfm &&
            ((i.block = V.gfm),
            this.options.breaks ? (i.inline = T.breaks) : (i.inline = T.gfm)),
          (this.tokenizer.rules = i)
      }
      ;(t.lex = function (e, i) {
        return new t(i).lex(e)
      }),
        (t.lexInline = function (e, i) {
          return new t(i).inlineTokens(e)
        })
      var i,
        n = t.prototype
      return (
        (n.lex = function (e) {
          var t
          for (
            e = e.replace(/\r\n|\r/g, '\n'), this.blockTokens(e, this.tokens);
            (t = this.inlineQueue.shift());

          )
            this.inlineTokens(t.src, t.tokens)
          return this.tokens
        }),
        (n.blockTokens = function (e, t) {
          var i,
            n,
            a,
            r,
            s = this
          for (
            void 0 === t && (t = []),
              e = this.options.pedantic
                ? e.replace(/\t/g, '    ').replace(/^ +$/gm, '')
                : e.replace(/^( *)(\t+)/gm, function (e, t, i) {
                    return t + '    '.repeat(i.length)
                  });
            e;

          ) {
            var o = (function () {
              if (
                s.options.extensions &&
                s.options.extensions.block &&
                s.options.extensions.block.some(function (n) {
                  return (
                    !!(i = n.call({ lexer: s }, e, t)) &&
                    ((e = e.substring(i.raw.length)), t.push(i), !0)
                  )
                })
              )
                return 'continue'
              if ((i = s.tokenizer.space(e)))
                return (
                  (e = e.substring(i.raw.length)),
                  1 === i.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += '\n')
                    : t.push(i),
                  'continue'
                )
              if ((i = s.tokenizer.code(e)))
                return (
                  (e = e.substring(i.raw.length)),
                  (n = t[t.length - 1]) &&
                  ('paragraph' === n.type || 'text' === n.type)
                    ? ((n.raw += '\n' + i.raw),
                      (n.text += '\n' + i.text),
                      (s.inlineQueue[s.inlineQueue.length - 1].src = n.text))
                    : t.push(i),
                  'continue'
                )
              if (
                (i = s.tokenizer.fences(e)) ||
                (i = s.tokenizer.heading(e)) ||
                (i = s.tokenizer.hr(e)) ||
                (i = s.tokenizer.blockquote(e)) ||
                (i = s.tokenizer.list(e)) ||
                (i = s.tokenizer.html(e))
              )
                return (e = e.substring(i.raw.length)), t.push(i), 'continue'
              if ((i = s.tokenizer.def(e)))
                return (
                  (e = e.substring(i.raw.length)),
                  (n = t[t.length - 1]) &&
                  ('paragraph' === n.type || 'text' === n.type)
                    ? ((n.raw += '\n' + i.raw),
                      (n.text += '\n' + i.raw),
                      (s.inlineQueue[s.inlineQueue.length - 1].src = n.text))
                    : s.tokens.links[i.tag] ||
                      (s.tokens.links[i.tag] = {
                        href: i.href,
                        title: i.title,
                      }),
                  'continue'
                )
              if ((i = s.tokenizer.table(e)) || (i = s.tokenizer.lheading(e)))
                return (e = e.substring(i.raw.length)), t.push(i), 'continue'
              if (
                ((a = e),
                s.options.extensions && s.options.extensions.startBlock)
              ) {
                var o,
                  l = 1 / 0,
                  u = e.slice(1)
                s.options.extensions.startBlock.forEach(function (e) {
                  'number' == typeof (o = e.call({ lexer: this }, u)) &&
                    o >= 0 &&
                    (l = Math.min(l, o))
                }),
                  l < 1 / 0 && l >= 0 && (a = e.substring(0, l + 1))
              }
              if (s.state.top && (i = s.tokenizer.paragraph(a)))
                return (
                  (n = t[t.length - 1]),
                  r && 'paragraph' === n.type
                    ? ((n.raw += '\n' + i.raw),
                      (n.text += '\n' + i.text),
                      s.inlineQueue.pop(),
                      (s.inlineQueue[s.inlineQueue.length - 1].src = n.text))
                    : t.push(i),
                  (r = a.length !== e.length),
                  (e = e.substring(i.raw.length)),
                  'continue'
                )
              if ((i = s.tokenizer.text(e)))
                return (
                  (e = e.substring(i.raw.length)),
                  (n = t[t.length - 1]) && 'text' === n.type
                    ? ((n.raw += '\n' + i.raw),
                      (n.text += '\n' + i.text),
                      s.inlineQueue.pop(),
                      (s.inlineQueue[s.inlineQueue.length - 1].src = n.text))
                    : t.push(i),
                  'continue'
                )
              if (e) {
                var c = 'Infinite loop on byte: ' + e.charCodeAt(0)
                if (s.options.silent) return console.error(c), 'break'
                throw Error(c)
              }
            })()
            if ('continue' !== o && 'break' === o) break
          }
          return (this.state.top = !0), t
        }),
        (n.inline = function (e, t) {
          return (
            void 0 === t && (t = []),
            this.inlineQueue.push({ src: e, tokens: t }),
            t
          )
        }),
        (n.inlineTokens = function (e, t) {
          var i,
            n,
            a,
            r,
            s,
            o,
            l = this
          void 0 === t && (t = [])
          var u = e
          if (this.tokens.links) {
            var c = Object.keys(this.tokens.links)
            if (c.length > 0)
              for (
                ;
                null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(u));

              )
                c.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
                  (u =
                    u.slice(0, r.index) +
                    '[' +
                    'a'.repeat(r[0].length - 2) +
                    ']' +
                    u.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ))
          }
          for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(u)); )
            u =
              u.slice(0, r.index) +
              '[' +
              'a'.repeat(r[0].length - 2) +
              ']' +
              u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
          for (
            ;
            null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(u));

          )
            u =
              u.slice(0, r.index) +
              '++' +
              u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)
          for (; e; ) {
            var h = (function () {
              if (
                (s || (o = ''),
                (s = !1),
                l.options.extensions &&
                  l.options.extensions.inline &&
                  l.options.extensions.inline.some(function (n) {
                    return (
                      !!(i = n.call({ lexer: l }, e, t)) &&
                      ((e = e.substring(i.raw.length)), t.push(i), !0)
                    )
                  }))
              )
                return 'continue'
              if ((i = l.tokenizer.escape(e)))
                return (e = e.substring(i.raw.length)), t.push(i), 'continue'
              if ((i = l.tokenizer.tag(e)))
                return (
                  (e = e.substring(i.raw.length)),
                  (n = t[t.length - 1]) &&
                  'text' === i.type &&
                  'text' === n.type
                    ? ((n.raw += i.raw), (n.text += i.text))
                    : t.push(i),
                  'continue'
                )
              if ((i = l.tokenizer.link(e)))
                return (e = e.substring(i.raw.length)), t.push(i), 'continue'
              if ((i = l.tokenizer.reflink(e, l.tokens.links)))
                return (
                  (e = e.substring(i.raw.length)),
                  (n = t[t.length - 1]) &&
                  'text' === i.type &&
                  'text' === n.type
                    ? ((n.raw += i.raw), (n.text += i.text))
                    : t.push(i),
                  'continue'
                )
              if (
                (i = l.tokenizer.emStrong(e, u, o)) ||
                (i = l.tokenizer.codespan(e)) ||
                (i = l.tokenizer.br(e)) ||
                (i = l.tokenizer.del(e)) ||
                (i = l.tokenizer.autolink(e, G)) ||
                (!l.state.inLink && (i = l.tokenizer.url(e, G)))
              )
                return (e = e.substring(i.raw.length)), t.push(i), 'continue'
              if (
                ((a = e),
                l.options.extensions && l.options.extensions.startInline)
              ) {
                var r,
                  c = 1 / 0,
                  h = e.slice(1)
                l.options.extensions.startInline.forEach(function (e) {
                  'number' == typeof (r = e.call({ lexer: this }, h)) &&
                    r >= 0 &&
                    (c = Math.min(c, r))
                }),
                  c < 1 / 0 && c >= 0 && (a = e.substring(0, c + 1))
              }
              if ((i = l.tokenizer.inlineText(a, P)))
                return (
                  (e = e.substring(i.raw.length)),
                  '_' !== i.raw.slice(-1) && (o = i.raw.slice(-1)),
                  (s = !0),
                  (n = t[t.length - 1]) && 'text' === n.type
                    ? ((n.raw += i.raw), (n.text += i.text))
                    : t.push(i),
                  'continue'
                )
              if (e) {
                var p = 'Infinite loop on byte: ' + e.charCodeAt(0)
                if (l.options.silent) return console.error(p), 'break'
                throw Error(p)
              }
            })()
            if ('continue' !== h && 'break' === h) break
          }
          return t
        }),
        (i = [
          {
            key: 'rules',
            get: function () {
              return { block: V, inline: T }
            },
          },
        ]),
        (function (e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(
                e,
                (function (e) {
                  var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e
                    var i = e[Symbol.toPrimitive]
                    if (void 0 !== i) {
                      var n = i.call(e, t || 'default')
                      if ('object' != typeof n) return n
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      )
                    }
                    return ('string' === t ? String : Number)(e)
                  })(e, 'string')
                  return 'symbol' == typeof t ? t : String(t)
                })(n.key),
                n
              )
          }
        })(t, i),
        Object.defineProperty(t, 'prototype', { writable: !1 }),
        t
      )
    })(),
    R = (function () {
      function t(t) {
        this.options = t || e.defaults
      }
      var i = t.prototype
      return (
        (i.code = function (e, t, i) {
          var n = (t || '').match(/\S*/)[0]
          if (this.options.highlight) {
            var a = this.options.highlight(e, n)
            null != a && a !== e && ((i = !0), (e = a))
          }
          return ((e = e.replace(/\n$/, '') + '\n'), n)
            ? '<pre><code class="' +
                this.options.langPrefix +
                x(n) +
                '">' +
                (i ? e : x(e, !0)) +
                '</code></pre>\n'
            : '<pre><code>' + (i ? e : x(e, !0)) + '</code></pre>\n'
        }),
        (i.blockquote = function (e) {
          return '<blockquote>\n' + e + '</blockquote>\n'
        }),
        (i.html = function (e, t) {
          return e
        }),
        (i.heading = function (e, t, i, n) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                (this.options.headerPrefix + n.slug(i)) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n'
        }),
        (i.hr = function () {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
        }),
        (i.list = function (e, t, i) {
          var n = t ? 'ol' : 'ul'
          return (
            '<' +
            n +
            (t && 1 !== i ? ' start="' + i + '"' : '') +
            '>\n' +
            e +
            '</' +
            n +
            '>\n'
          )
        }),
        (i.listitem = function (e) {
          return '<li>' + e + '</li>\n'
        }),
        (i.checkbox = function (e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          )
        }),
        (i.paragraph = function (e) {
          return '<p>' + e + '</p>\n'
        }),
        (i.table = function (e, t) {
          return (
            t && (t = '<tbody>' + t + '</tbody>'),
            '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
          )
        }),
        (i.tablerow = function (e) {
          return '<tr>\n' + e + '</tr>\n'
        }),
        (i.tablecell = function (e, t) {
          var i = t.header ? 'th' : 'td'
          return (
            (t.align ? '<' + i + ' align="' + t.align + '">' : '<' + i + '>') +
            e +
            '</' +
            i +
            '>\n'
          )
        }),
        (i.strong = function (e) {
          return '<strong>' + e + '</strong>'
        }),
        (i.em = function (e) {
          return '<em>' + e + '</em>'
        }),
        (i.codespan = function (e) {
          return '<code>' + e + '</code>'
        }),
        (i.br = function () {
          return this.options.xhtml ? '<br/>' : '<br>'
        }),
        (i.del = function (e) {
          return '<del>' + e + '</del>'
        }),
        (i.link = function (e, t, i) {
          if (null === (e = v(this.options.sanitize, this.options.baseUrl, e)))
            return i
          var n = '<a href="' + e + '"'
          return t && (n += ' title="' + t + '"'), (n += '>' + i + '</a>')
        }),
        (i.image = function (e, t, i) {
          if (null === (e = v(this.options.sanitize, this.options.baseUrl, e)))
            return i
          var n = '<img src="' + e + '" alt="' + i + '"'
          return (
            t && (n += ' title="' + t + '"'),
            (n += this.options.xhtml ? '/>' : '>')
          )
        }),
        (i.text = function (e) {
          return e
        }),
        t
      )
    })(),
    L = (function () {
      function e() {}
      var t = e.prototype
      return (
        (t.strong = function (e) {
          return e
        }),
        (t.em = function (e) {
          return e
        }),
        (t.codespan = function (e) {
          return e
        }),
        (t.del = function (e) {
          return e
        }),
        (t.html = function (e) {
          return e
        }),
        (t.text = function (e) {
          return e
        }),
        (t.link = function (e, t, i) {
          return '' + i
        }),
        (t.image = function (e, t, i) {
          return '' + i
        }),
        (t.br = function () {
          return ''
        }),
        e
      )
    })(),
    j = (function () {
      function e() {
        this.seen = {}
      }
      var t = e.prototype
      return (
        (t.serialize = function (e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-')
        }),
        (t.getNextSafeSlug = function (e, t) {
          var i = e,
            n = 0
          if (this.seen.hasOwnProperty(i)) {
            n = this.seen[e]
            do i = e + '-' + ++n
            while (this.seen.hasOwnProperty(i))
          }
          return t || ((this.seen[e] = n), (this.seen[i] = 0)), i
        }),
        (t.slug = function (e, t) {
          void 0 === t && (t = {})
          var i = this.serialize(e)
          return this.getNextSafeSlug(i, t.dryrun)
        }),
        e
      )
    })(),
    I = (function () {
      function t(t) {
        ;(this.options = t || e.defaults),
          (this.options.renderer = this.options.renderer || new R()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new L()),
          (this.slugger = new j())
      }
      ;(t.parse = function (e, i) {
        return new t(i).parse(e)
      }),
        (t.parseInline = function (e, i) {
          return new t(i).parseInline(e)
        })
      var i = t.prototype
      return (
        (i.parse = function (e, t) {
          void 0 === t && (t = !0)
          var i,
            n,
            a,
            r,
            s,
            o,
            l,
            u,
            c,
            h,
            p,
            d,
            m,
            x,
            k,
            D,
            g,
            b,
            y,
            v = '',
            E = e.length
          for (i = 0; i < E; i++) {
            if (
              ((h = e[i]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[h.type] &&
                (!1 !==
                  (y = this.options.extensions.renderers[h.type].call(
                    { parser: this },
                    h
                  )) ||
                  ![
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(h.type)))
            ) {
              v += y || ''
              continue
            }
            switch (h.type) {
              case 'space':
                continue
              case 'hr':
                v += this.renderer.hr()
                continue
              case 'heading':
                v += this.renderer.heading(
                  this.parseInline(h.tokens),
                  h.depth,
                  f(this.parseInline(h.tokens, this.textRenderer)),
                  this.slugger
                )
                continue
              case 'code':
                v += this.renderer.code(h.text, h.lang, h.escaped)
                continue
              case 'table':
                for (n = 0, u = '', l = '', r = h.header.length; n < r; n++)
                  l += this.renderer.tablecell(
                    this.parseInline(h.header[n].tokens),
                    { header: !0, align: h.align[n] }
                  )
                for (
                  u += this.renderer.tablerow(l),
                    c = '',
                    r = h.rows.length,
                    n = 0;
                  n < r;
                  n++
                ) {
                  for (a = 0, o = h.rows[n], l = '', s = o.length; a < s; a++)
                    l += this.renderer.tablecell(
                      this.parseInline(o[a].tokens),
                      { header: !1, align: h.align[a] }
                    )
                  c += this.renderer.tablerow(l)
                }
                v += this.renderer.table(u, c)
                continue
              case 'blockquote':
                ;(c = this.parse(h.tokens)), (v += this.renderer.blockquote(c))
                continue
              case 'list':
                for (
                  n = 0,
                    p = h.ordered,
                    d = h.start,
                    m = h.loose,
                    r = h.items.length,
                    c = '';
                  n < r;
                  n++
                )
                  (D = (k = h.items[n]).checked),
                    (g = k.task),
                    (x = ''),
                    k.task &&
                      ((b = this.renderer.checkbox(D)),
                      m
                        ? k.tokens.length > 0 &&
                          'paragraph' === k.tokens[0].type
                          ? ((k.tokens[0].text = b + ' ' + k.tokens[0].text),
                            k.tokens[0].tokens &&
                              k.tokens[0].tokens.length > 0 &&
                              'text' === k.tokens[0].tokens[0].type &&
                              (k.tokens[0].tokens[0].text =
                                b + ' ' + k.tokens[0].tokens[0].text))
                          : k.tokens.unshift({ type: 'text', text: b })
                        : (x += b)),
                    (x += this.parse(k.tokens, m)),
                    (c += this.renderer.listitem(x, g, D))
                v += this.renderer.list(c, p, d)
                continue
              case 'html':
                v += this.renderer.html(h.text, h.block)
                continue
              case 'paragraph':
                v += this.renderer.paragraph(this.parseInline(h.tokens))
                continue
              case 'text':
                for (
                  c = h.tokens ? this.parseInline(h.tokens) : h.text;
                  i + 1 < E && 'text' === e[i + 1].type;

                )
                  c +=
                    '\n' +
                    ((h = e[++i]).tokens ? this.parseInline(h.tokens) : h.text)
                v += t ? this.renderer.paragraph(c) : c
                continue
              default:
                var A = 'Token with "' + h.type + '" type was not found.'
                if (this.options.silent) {
                  console.error(A)
                  return
                }
                throw Error(A)
            }
          }
          return v
        }),
        (i.parseInline = function (e, t) {
          t = t || this.renderer
          var i,
            n,
            a,
            r = '',
            s = e.length
          for (i = 0; i < s; i++) {
            if (
              ((n = e[i]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[n.type] &&
                (!1 !==
                  (a = this.options.extensions.renderers[n.type].call(
                    { parser: this },
                    n
                  )) ||
                  ![
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(n.type)))
            ) {
              r += a || ''
              continue
            }
            switch (n.type) {
              case 'escape':
              case 'text':
                r += t.text(n.text)
                break
              case 'html':
                r += t.html(n.text)
                break
              case 'link':
                r += t.link(n.href, n.title, this.parseInline(n.tokens, t))
                break
              case 'image':
                r += t.image(n.href, n.title, n.text)
                break
              case 'strong':
                r += t.strong(this.parseInline(n.tokens, t))
                break
              case 'em':
                r += t.em(this.parseInline(n.tokens, t))
                break
              case 'codespan':
                r += t.codespan(n.text)
                break
              case 'br':
                r += t.br()
                break
              case 'del':
                r += t.del(this.parseInline(n.tokens, t))
                break
              default:
                var o = 'Token with "' + n.type + '" type was not found.'
                if (this.options.silent) {
                  console.error(o)
                  return
                }
                throw Error(o)
            }
          }
          return r
        }),
        t
      )
    })(),
    O = (function () {
      function t(t) {
        this.options = t || e.defaults
      }
      var i = t.prototype
      return (
        (i.preprocess = function (e) {
          return e
        }),
        (i.postprocess = function (e) {
          return e
        }),
        t
      )
    })()
  O.passThroughHooks = new Set(['preprocess', 'postprocess'])
  var N = r('parseMarkdown'),
    M = r('onError'),
    q = (function () {
      function e() {
        Object.defineProperty(this, M, { value: H }),
          Object.defineProperty(this, N, { value: W }),
          (this.defaults = o()),
          (this.options = this.setOptions),
          (this.parse = s(this, N)[N](z.lex, I.parse)),
          (this.parseInline = s(this, N)[N](z.lexInline, I.parseInline)),
          (this.Parser = I),
          (this.parser = I.parse),
          (this.Renderer = R),
          (this.TextRenderer = L),
          (this.Lexer = z),
          (this.lexer = z.lex),
          (this.Tokenizer = $),
          (this.Slugger = j),
          (this.Hooks = O),
          this.use.apply(this, arguments)
      }
      var i = e.prototype
      return (
        (i.walkTokens = function (e, t) {
          for (var i, a = this, r = [], s = n(e); !(i = s()).done; )
            !(function () {
              var e = i.value
              switch (((r = r.concat(t.call(a, e))), e.type)) {
                case 'table':
                  for (var s, o = n(e.header); !(s = o()).done; ) {
                    var l = s.value
                    r = r.concat(a.walkTokens(l.tokens, t))
                  }
                  for (var u, c = n(e.rows); !(u = c()).done; )
                    for (var h, p = u.value, d = n(p); !(h = d()).done; ) {
                      var m = h.value
                      r = r.concat(a.walkTokens(m.tokens, t))
                    }
                  break
                case 'list':
                  r = r.concat(a.walkTokens(e.items, t))
                  break
                default:
                  a.defaults.extensions &&
                  a.defaults.extensions.childTokens &&
                  a.defaults.extensions.childTokens[e.type]
                    ? a.defaults.extensions.childTokens[e.type].forEach(
                        function (i) {
                          r = r.concat(a.walkTokens(e[i], t))
                        }
                      )
                    : e.tokens && (r = r.concat(a.walkTokens(e.tokens, t)))
              }
            })()
          return r
        }),
        (i.use = function () {
          for (
            var e = this,
              i = this.defaults.extensions || {
                renderers: {},
                childTokens: {},
              },
              n = arguments.length,
              a = Array(n),
              r = 0;
            r < n;
            r++
          )
            a[r] = arguments[r]
          return (
            a.forEach(function (n) {
              var a = t({}, n)
              if (
                ((a.async = e.defaults.async || a.async || !1),
                n.extensions &&
                  (n.extensions.forEach(function (e) {
                    if (!e.name) throw Error('extension name required')
                    if (e.renderer) {
                      var t = i.renderers[e.name]
                      t
                        ? (i.renderers[e.name] = function () {
                            for (
                              var i = arguments.length, n = Array(i), a = 0;
                              a < i;
                              a++
                            )
                              n[a] = arguments[a]
                            var r = e.renderer.apply(this, n)
                            return !1 === r && (r = t.apply(this, n)), r
                          })
                        : (i.renderers[e.name] = e.renderer)
                    }
                    if (e.tokenizer) {
                      if (
                        !e.level ||
                        ('block' !== e.level && 'inline' !== e.level)
                      )
                        throw Error(
                          "extension level must be 'block' or 'inline'"
                        )
                      i[e.level]
                        ? i[e.level].unshift(e.tokenizer)
                        : (i[e.level] = [e.tokenizer]),
                        e.start &&
                          ('block' === e.level
                            ? i.startBlock
                              ? i.startBlock.push(e.start)
                              : (i.startBlock = [e.start])
                            : 'inline' === e.level &&
                              (i.startInline
                                ? i.startInline.push(e.start)
                                : (i.startInline = [e.start])))
                    }
                    e.childTokens && (i.childTokens[e.name] = e.childTokens)
                  }),
                  (a.extensions = i)),
                n.renderer)
              ) {
                var r = e.defaults.renderer || new R(e.defaults),
                  s = function (e) {
                    var t = r[e]
                    r[e] = function () {
                      for (
                        var i = arguments.length, a = Array(i), s = 0;
                        s < i;
                        s++
                      )
                        a[s] = arguments[s]
                      var o = n.renderer[e].apply(r, a)
                      return !1 === o && (o = t.apply(r, a)), o
                    }
                  }
                for (var o in n.renderer) s(o)
                a.renderer = r
              }
              if (n.tokenizer) {
                var l = e.defaults.tokenizer || new $(e.defaults),
                  u = function (e) {
                    var t = l[e]
                    l[e] = function () {
                      for (
                        var i = arguments.length, a = Array(i), r = 0;
                        r < i;
                        r++
                      )
                        a[r] = arguments[r]
                      var s = n.tokenizer[e].apply(l, a)
                      return !1 === s && (s = t.apply(l, a)), s
                    }
                  }
                for (var c in n.tokenizer) u(c)
                a.tokenizer = l
              }
              if (n.hooks) {
                var h = e.defaults.hooks || new O(),
                  p = function (t) {
                    var i = h[t]
                    O.passThroughHooks.has(t)
                      ? (h[t] = function (a) {
                          if (e.defaults.async)
                            return Promise.resolve(n.hooks[t].call(h, a)).then(
                              function (e) {
                                return i.call(h, e)
                              }
                            )
                          var r = n.hooks[t].call(h, a)
                          return i.call(h, r)
                        })
                      : (h[t] = function () {
                          for (
                            var e = arguments.length, a = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            a[r] = arguments[r]
                          var s = n.hooks[t].apply(h, a)
                          return !1 === s && (s = i.apply(h, a)), s
                        })
                  }
                for (var d in n.hooks) p(d)
                a.hooks = h
              }
              if (n.walkTokens) {
                var m = e.defaults.walkTokens
                a.walkTokens = function (e) {
                  var t = []
                  return (
                    t.push(n.walkTokens.call(this, e)),
                    m && (t = t.concat(m.call(this, e))),
                    t
                  )
                }
              }
              e.defaults = t({}, e.defaults, a)
            }),
            this
          )
        }),
        (i.setOptions = function (e) {
          return (this.defaults = t({}, this.defaults, e)), this
        }),
        e
      )
    })()
  function W(e, i) {
    var n = this
    return function (a, r, o) {
      'function' == typeof r && ((o = r), (r = null))
      var l = t({}, r)
      r = t({}, n.defaults, l)
      var u = s(n, M)[M](r.silent, r.async, o)
      if (null == a)
        return u(Error('marked(): input parameter is undefined or null'))
      if ('string' != typeof a)
        return u(
          Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(a) +
              ', string expected'
          )
        )
      if (
        ((c = r),
        (h = o),
        c &&
          !c.silent &&
          (h &&
            console.warn(
              'marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async'
            ),
          (c.sanitize || c.sanitizer) &&
            console.warn(
              'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
            ),
          (c.highlight || 'language-' !== c.langPrefix) &&
            console.warn(
              'marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.'
            ),
          c.mangle &&
            console.warn(
              'marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.'
            ),
          c.baseUrl &&
            console.warn(
              'marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.'
            ),
          c.smartypants &&
            console.warn(
              'marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.'
            ),
          c.xhtml &&
            console.warn(
              'marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.'
            ),
          (c.headerIds || c.headerPrefix) &&
            console.warn(
              'marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.'
            )),
        r.hooks && (r.hooks.options = r),
        o)
      ) {
        var c,
          h,
          p,
          d = r.highlight
        try {
          r.hooks && (a = r.hooks.preprocess(a)), (p = e(a, r))
        } catch (e) {
          return u(e)
        }
        var m = function (e) {
          var t
          if (!e)
            try {
              r.walkTokens && n.walkTokens(p, r.walkTokens),
                (t = i(p, r)),
                r.hooks && (t = r.hooks.postprocess(t))
            } catch (t) {
              e = t
            }
          return (r.highlight = d), e ? u(e) : o(null, t)
        }
        if (!d || d.length < 3 || (delete r.highlight, !p.length)) return m()
        var x = 0
        return (
          n.walkTokens(p, function (e) {
            'code' === e.type &&
              (x++,
              setTimeout(function () {
                d(e.text, e.lang, function (t, i) {
                  if (t) return m(t)
                  null != i && i !== e.text && ((e.text = i), (e.escaped = !0)),
                    0 == --x && m()
                })
              }, 0))
          }),
          void (0 === x && m())
        )
      }
      if (r.async)
        return Promise.resolve(r.hooks ? r.hooks.preprocess(a) : a)
          .then(function (t) {
            return e(t, r)
          })
          .then(function (e) {
            return r.walkTokens
              ? Promise.all(n.walkTokens(e, r.walkTokens)).then(function () {
                  return e
                })
              : e
          })
          .then(function (e) {
            return i(e, r)
          })
          .then(function (e) {
            return r.hooks ? r.hooks.postprocess(e) : e
          })
          .catch(u)
      try {
        r.hooks && (a = r.hooks.preprocess(a))
        var k = e(a, r)
        r.walkTokens && n.walkTokens(k, r.walkTokens)
        var f = i(k, r)
        return r.hooks && (f = r.hooks.postprocess(f)), f
      } catch (e) {
        return u(e)
      }
    }
  }
  function H(e, t, i) {
    return function (n) {
      if (
        ((n.message +=
          '\nPlease report this to https://github.com/markedjs/this.'),
        e)
      ) {
        var a =
          '<p>An error occurred:</p><pre>' + x(n.message + '', !0) + '</pre>'
        if (t) return Promise.resolve(a)
        if (i) {
          i(null, a)
          return
        }
        return a
      }
      if (t) return Promise.reject(n)
      if (i) {
        i(n)
        return
      }
      throw n
    }
  }
  var Z = new q(e.defaults)
  function U(e, t, i) {
    return Z.parse(e, t, i)
  }
  ;(U.options = U.setOptions =
    function (e) {
      return Z.setOptions(e), (U.defaults = Z.defaults), l(U.defaults), U
    }),
    (U.getDefaults = o),
    (U.defaults = e.defaults),
    (U.use = function () {
      return (
        Z.use.apply(Z, arguments), (U.defaults = Z.defaults), l(U.defaults), U
      )
    }),
    (U.walkTokens = function (e, t) {
      return Z.walkTokens(e, t)
    }),
    (U.parseInline = Z.parseInline),
    (U.Parser = I),
    (U.parser = I.parse),
    (U.Renderer = R),
    (U.TextRenderer = L),
    (U.Lexer = z),
    (U.lexer = z.lex),
    (U.Tokenizer = $),
    (U.Slugger = j),
    (U.Hooks = O),
    (U.parse = U)
  var Q = U.options,
    Y = U.setOptions,
    J = U.use,
    X = U.walkTokens,
    K = U.parseInline,
    ee = I.parse,
    et = z.lex
  ;(e.Hooks = O),
    (e.Lexer = z),
    (e.Marked = q),
    (e.Parser = I),
    (e.Renderer = R),
    (e.Slugger = j),
    (e.TextRenderer = L),
    (e.Tokenizer = $),
    (e.getDefaults = o),
    (e.lexer = et),
    (e.marked = U),
    (e.options = Q),
    (e.parse = U),
    (e.parseInline = K),
    (e.parser = ee),
    (e.setOptions = Y),
    (e.use = J),
    (e.walkTokens = X)
})(e9)
const te = class extends eG {
    src = ''
    value = ''
    content = null
    constructor() {
      super(), this.initAttributes('src')
    }
    connectedCallback() {
      super.connectedCallback(),
        '' !== this.src
          ? (async () => {
              let e = await fetch(this.src)
              this.value = await e.text()
            })()
          : '' === this.value &&
            (this.value = null != this.textContent ? this.textContent : '')
    }
    render() {
      super.render(),
        (this.innerHTML = (0, e9.marked)(this.value, {
          mangle: !1,
          headerIds: !1,
        }))
    }
  }.elementCreator({ tag: 'markdown-viewer' }),
  { slot: tt } = eF,
  ti = {
    left: 'row',
    right: 'row-reverse',
    top: 'column',
    bottom: 'column-reverse',
  },
  tn = {
    left: ['marginLeft', 'marginRight'],
    right: ['marginRight', 'marginLeft'],
    top: ['marginTop', 'marginBottom'],
    bottom: ['marginBottom', 'marginTop'],
  }
class ta extends eG {
  panelPosition = 'left'
  minSize = 600
  navSize = 200
  compact = !1
  content = [tt({ name: 'nav' }), tt({ part: 'content' })]
  _contentVisible = !1
  get contentVisible() {
    return this._contentVisible
  }
  set contentVisible(e) {
    ;(this._contentVisible = e), this.queueRender()
  }
  styleNode = eG.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: e_.flexDirection,
      transition: e$.sideNavTransition('0.25s ease-out'),
    },
    ':host slot': { position: 'relative' },
    ':host slot:not([name])': {
      display: 'block',
      flex: `0 0 ${e_.contentWidth}`,
      width: e_.contentWidth,
    },
    ':host slot[name="nav"]': {
      display: 'block',
      flex: `0 0 ${e_.navWidth}`,
      width: e_.navWidth,
    },
  })
  onResize = () => {
    let { content: e } = this.parts
    if (null === this.offsetParent) return
    ;(this.style.marginLeft = 0),
      (this.style.marginRight = 0),
      (this.style.marginTop = 0),
      (this.style.marginBottom = 0)
    let t =
      void 0 ===
      [...this.childNodes].find(
        (e) => !(e instanceof Element) || 'nav' !== e.getAttribute('slot')
      )
    if (t) {
      this.style.setProperty('--nav-width', '100%'),
        this.style.setProperty('--content-width', '0%')
      return
    }
    let i = this.offsetParent,
      n = (this.panelPosition.match(/left|right/), i.offsetWidth)
    if (((this.compact = n < this.minSize), this.compact)) {
      e.classList.remove('-side-nav-visible'),
        this.style.setProperty('--nav-width', '50%'),
        this.style.setProperty('--content-width', '50%')
      let t = tn[this.panelPosition]
      this.contentVisible
        ? (this.style[t[0]] = '-100%')
        : (this.style[t[1]] = '-100%')
    } else
      e.classList.add('-side-nav-visible'),
        this.style.setProperty('--nav-width', `${this.navSize}px`),
        this.style.setProperty(
          '--content-width',
          `calc(100% - ${this.navSize}px)`
        )
  }
  observer
  connectedCallback() {
    super.connectedCallback(),
      (this.contentVisible = 0 === this.parts.content.childNodes.length),
      globalThis.addEventListener('resize', this.onResize),
      (this.observer = new MutationObserver(this.onResize)),
      this.observer.observe(this, { childList: !0 })
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.observer.disconnect()
  }
  constructor() {
    super(),
      this.initAttributes('panelPosition', 'minSize', 'navSize', 'compact')
  }
  render() {
    super.render(),
      this.style.setProperty('--flex-direction', ti[this.panelPosition]),
      this.onResize()
  }
}
const tr = ta.elementCreator({ tag: 'side-nav' }),
  { slot: ts } = eF
class to extends eG {
  minWidth = 0
  minHeight = 0
  value = 'normal'
  content = [ts({ part: 'normal' }), ts({ part: 'small', name: 'small' })]
  styleNode = eG.StyleNode({ ':host': { position: 'relative' } })
  constructor() {
    super(), this.initAttributes('minWidth', 'minHeight')
  }
  onResize = () => {
    let { normal: e, small: t } = this.parts
    null !== this.offsetParent &&
      (this.offsetParent.offsetWidth < this.minWidth ||
      this.offsetParent.offsetHeight < this.minHeight
        ? ((e.hidden = !0), (t.hidden = !1), (this.value = 'small'))
        : ((e.hidden = !1), (t.hidden = !0), (this.value = 'normal')))
  }
  connectedCallback() {
    super.connectedCallback(),
      globalThis.addEventListener('resize', this.onResize)
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      globalThis.removeEventListener('resize', this.onResize)
  }
}
const tl = to.elementCreator({ tag: 'size-break' }),
  { div: tu, slot: tc } = eF
class th extends eG {
  value = 0
  role = 'tabpanel'
  styleNode = eG.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    },
    slot: {
      position: 'relative',
      display: 'block',
      flex: '1 1 auto',
      overflow: 'hidden',
      overflowY: 'auto',
    },
    '::slotted([hidden])': { display: 'none !important' },
    ':host .tab-holder': { display: 'flex', flexDirection: 'column' },
    ':host .tabs': {
      display: 'flex',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    ':host .tabs > div': {
      padding: `${e_.spacing50} ${e_.spacing}`,
      cursor: 'default',
    },
    ':host .tabs > [aria-selected="true"]': {
      color: e_.tabSelectorSelectedColor,
    },
    ':host .border': { background: 'var(--tab-selector-bar-color, #ccc)' },
    ':host .border > .selected': {
      content: ' ',
      width: 0,
      height: 'var(--tab-selector-bar-height, 2px)',
      background: e_.tabSelectorSelectedColor,
      transition: 'ease-out 0.2s',
    },
  })
  content = [
    tu(
      { class: 'tab-holder' },
      tu({ class: 'tabs', part: 'tabs' }),
      tu({ class: 'border' }, tu({ class: 'selected', part: 'selected' }))
    ),
    tc(),
  ]
  constructor() {
    super(), this.initAttributes('anne', 'example')
  }
  addTabBody(e, t = !1) {
    if (!e.hasAttribute('name')) throw Error('element has no name attribute', e)
    this.shadowRoot.append(e),
      this.setupTabs(),
      t && (this.value = this.bodies.length - 1),
      this.queueRender()
  }
  keyTab = (e) => {
    let { tabs: t } = this.parts,
      i = [...t.children].indexOf(e.target)
    switch (e.key) {
      case 'ArrowLeft':
        ;(this.value = (i + Number(t.children.length) - 1) % t.children.length),
          t.children[this.value].focus(),
          e.preventDefault()
        break
      case 'ArrowRight':
        ;(this.value = (i + 1) % t.children.length),
          t.children[this.value].focus(),
          e.preventDefault()
        break
      case ' ':
        this.pickTab(e), e.preventDefault()
    }
  }
  get bodies() {
    return [...this.children].filter((e) => e.hasAttribute('name'))
  }
  pickTab = (e) => {
    let { tabs: t } = this.parts,
      i = e.target,
      n = [...t.children].indexOf(i)
    n > -1 && (this.value = n)
  }
  setupTabs = () => {
    let { tabs: e } = this.parts,
      t = [...this.childNodes].filter((e) => e.hasAttribute('name'))
    for (let i in ((e.textContent = ''), t)) {
      let n = t[i],
        a = n.getAttribute('name'),
        r = `${this.instanceId}-${i}`
      ;(n.id = r),
        e.append(tu(a, { tabindex: 0, role: 'tab', ariaControls: r }))
    }
  }
  connectedCallback() {
    super.connectedCallback()
    let { tabs: e } = this.parts
    e.addEventListener('click', this.pickTab),
      e.addEventListener('keydown', this.keyTab),
      this.setupTabs()
  }
  render() {
    let { tabs: e, selected: t } = this.parts,
      i = this.bodies
    for (let n = 0; n < i.length; n++) {
      let a = i[n],
        r = e.children[n]
      this.value === Number(n)
        ? (r.setAttribute('aria-selected', !0),
          (t.style.marginLeft = `${r.offsetLeft - e.offsetLeft}px`),
          (t.style.width = `${r.offsetWidth}px`),
          a.removeAttribute('hidden'))
        : (r.removeAttribute('aria-selected'), a.setAttribute('hidden', ''))
    }
  }
}
const tp = th.elementCreator({ tag: 'tab-selector' })
var td = {}
td = JSON.parse(
  '[{"text":"# test\\n\\nThis is a test!\\n","filename":"test.md","path":"documentation/test.md"},{"text":"# xinjs-ui\\n\\n[xinjs](https://xinjs.net) [discord](https://discord.gg/ramJ9rgky5) [github](https://github.com/tonioloewald/xinjs-ui#readme) [npm](https://www.npmjs.com/package/xinjs-ui) <size-break min-width=\\"500\\"><img alt=\\"bundlejs\\" src=\\"https://deno.bundlejs.com/?q=xinjs-ui&badge=\\"></size-break>\\n\\nCopyright \xa92023 Tonio Loewald\\n\\n## the xinjs component library\\n\\nIn general, `xinjs` strives to work _with_ the browser rather than trying to _replace_ it.\\n\\n`xinjs-ui` comprises a collection of [web-components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)\\nwith the goal of augmenting what _already_ works well, and the components should be interoperable as\\npossible with the stuff you already use as possible. E.g. where appropriate, the `value` of an\\nelement is its malleable `state`, and when this changes, the element emits a\\n`change` event.\\n\\nSimilarly, the xinjs base `Component` class and the components in this collection stive to\\nbe as similar in operation as possible to DOM elements as possible. E.g. binary attrbutes\\nwork as expected. Intinsic properties of components will default to `null` rather than `undefined`.\\n\\nSimilarly, because web-components are highly interoperable, there\'s no reason to reinvent\\nwheels. In particular, this library won\'t try to replace existing, excellent libraries\\nsuch as [shoelace.style](https://shoelace.style/) or wrap perfectly functional HTML\\nelements, like the venerable `<input>` or `<form>` elements that are already capable\\nand accessible.\\n\\nThe goal here is to provide useful components that add to what\'s built into HTML5 and CSS3.\\n\\n### `<tab-selector>`\\n\\nA tab-selector with nice animations.\\n\\n### `<map-box>`\\n\\nA [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.\\n\\n    <map-box coords=\\"21.4389,-158.0001,9\\" token=\\"your-mapbox-token-goes-here\\"></map-box>\\n\\nThere\'s no need to learn new apis, just access the element\'s `map` property.\\n\\n### `<bodymovin-player>`\\n\\nA wrapper for AirBnb\'s bodymovin, a.k.a. [lottie](https://airbnb.io/lottie/#/web), player.\\n\\n    <bodymovin-player src=\\"path/to/lottie.json\\"></bodymovin-player>\\n\\nOr you can directly set its `json` property to the content of a `lottie.json` file.\\n\\nAnd of course just access the element\'s `animation` property to use the usual APIs.\\n\\n### `<data-table>`\\n\\nA virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),\\nthat displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.\\n\\nYou can set the `<data-table>`\'s `value` to `{ array: any[], columns: ColumnOptions[] | null, filter?: ArrayFilter }`\\n\\nIf you set the `<data-table>`\'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is\\nuseful for smaller tables, or tables with variable row-heights.\\n\\n### `<markdown-viewer>`\\n\\nRender [markdown](https://www.markdownguide.org/) anywhere, either using the `src` attribute to load\\nthe file asynchronousely, or just put the text inside it. Powered by [marked](https://www.npmjs.com/package/marked).\\n\\n    <markdown-viewer src=\\"/path/to/file.md\\">\\n\\nOr (but don\'t include the indentation!!):\\n\\n    <markdown-viewer>\\n      # hello\\n      world\\n    </markdown-viewer>\\n\\nAnd just set the element\'s `value` and it will render it for you.\\n\\n### `<filter-builder>`\\n\\nAutomatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the\\nfollowing space-delimited criteria — all text matches are performed in `LocaleLowerCase`.\\n\\n`<filter-builder>` has sets its `filter` property to an `ArrayFilter`, by default it just passes through\\nthe array untouched. Its `value` is the source `string`.\\n\\nThe filter-builder has a default set of `FilterMaker` objects which it uses to **curry** an filter function.\\n\\n    type ObjectTest (obj: any) => boolean\\n\\n    interface FilterMaker {\\n      hint: string                                    // describes the grammar\\n      description: (...matches: string[]) => string   // describes the actual filter\\n      token: RegExp                                   // matches the token\\n      filterMaker(...matches: string) => ObjectTest   // builds an ObjectTest\\n    }\\n\\nThe `<filter-builder>` will use the `hint` values to write its `placeholder` (you can override this if\\nyou explicitly set the `placeholder`) and it will use the `description` function to create the\\n`title` attribute, describing the filter.\\n\\nThe default `filters` provided are (in priority order):\\n\\n- `[field]=value` if `field` is specified, matches `value`, otherwise looks for `value` anwhere\\n- `field!=value` matches if `field` is not `value`\\n- `field>value` / `field<value` - matches if `field` is `>`/`<` `value`, if `isNaN(Number(value))` this will\\n  be an alphabetical order comparison, otherwise it will be numberic.\\n- `field:value` matches if `field` contains `value`\\n- `!!field` matches if `field` is **truthy**\\n- `!field` matches if `field` is **falsy** (e.g. `\'\'`, `null`, `undefined`, `false`, `0`)\\n- `value` matches if any field contains `value`\\n\\nRight now multiple criteria are `AND`ed together. This will be extended to allow `()`, `OR`, `<` and `>` comparisons will\\nbecome smarter (convert both sides to numbers if possible), and extensibility will be added.\\n\\n### `<code-editor>`\\n\\nSometimes, it\'s nice to be able to just toss a code-editor in a web-page. The element\'s `value` is\\nthe code.\\n\\n### `<side-nav>`\\n\\nThe default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small\\nscreens, and display the sidebar when space is available (with the user able to explicitly hide\\nthe sidebar if so desired). `<side-nav>` provides this functionality.\\n\\n### `<size-break>`\\n\\nWhile we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),\\nand in any event when you simply want to do different things at different sizes (e.g. in the project I\'m\\nworking on right now, a row of buttons turns into a menu at narrow widths) there\'s `<size-break>`.\\n\\nNote that the sizes referred to are of the `<size-break>`\'s `.offsetParent`, and it watches for\\nthe window\'s `resize` events and its own (via `ResizeObserver`).\\n\\n    <size-break min-width=\\"500\\">\\n      <default-thing>I am big!</default-thing>\\n      <small-thing slot=\\"small\\">I am little</small-thing>\\n    </size-break>\\n\\n`<size-break>` supports both `min-width` and/or `min-height`, and you can of course target only one\\nof the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when\\nspace is tight.\\n\\n## utilities\\n\\n### scriptTag & styleSheet\\n\\nIf you need to load an old schoole javascript library via cdn (both mapboxgl and bodymovin are\\nfine examples) then use these two functions. They return promises that resolve when the\\nmodule in question has loaded.\\n\\nUsage:\\n\\n    import { scriptTag } from \'xinjs-ui\'\\n\\n    const bodymovinAvailable = scriptTag(\'../lottie.min.js\')\\n\\n    bodymovinAvailable.then(() => {\\n      globalThis.bodymovien.loadAnimation(...)\\n    })\\n\\n`<bodymovin-player>` and is implemented in such a way that if you\'ve preloaded the module\\n(e.g. via a script tag or packaging) it won\'t load it again, which affords offline\\nuse.\\n\\nThere\'s no point for mapbox since it won\'t work without connectivity anyway.\\n\\n### trackDrag\\n\\nSometimes you want to track a mouse-drag or touch-drag operation without messing around.\\nThis is how the resizeable columns in `<data-table>` work.\\n\\nJust call `trackDrag(event, (dx, dy, event) => { ... })` and you\'ll get updates on corresponding events until\\nyou return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).\\nFor mouse events, a \\"tracker\\" element is thrown up in front of everything for the event.\\n\\nFor `touch` events, `dx` and `dy` are based on `event.touches[0]`. If you want to handle\\nmulti-touch or specific touches, handle the `event` properties yourself.\\n\\n### makeSorter\\n\\nI\'m always confusing myself when writing sort functions, so I wrote `markSorter()`. It\'s\\ninsanely simple and very powerful. It makes writing an array sort callback for anything\\nother than an array of numbers or strings easier.\\n\\nUsage:\\n\\n    interface Person {\\n      nameFirst: string\\n      nameLast: string\\n    }\\n\\n    const people: Person[] = await getRecords(...)\\n    \\n    const nameSorter = makeSorter(\\n      (person: Person) => [person.nameLast, person.nameLast]\\n    )\\n    \\n    people.sort(nameSorter)\\n\\nBasically, you write a function that given some thing returns a prioritized list of\\nstrings or numbers and `makeSorter` produces an array sort callback function that will\\nsort the array in _ascending_ order. If you pass `false` as the (optional) second \\nparameter you\'ll get a _descending_ sorter.","filename":"README.md","path":"README.md"}]'
)
var tm = {}
tm = JSON.parse(
  '{"v":"5.8.1","fr":60,"ip":0,"op":40,"w":646,"h":1023,"nm":"Rocket 2","ddd":0,"assets":[{"id":"comp_0","nm":"Light","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"light 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[388,815.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-173,-371.5],[-173,-185.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.949204029756,0.91795462814,0.996078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"t":22,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[0]},{"t":40,"s":[50]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":41,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"light 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[663,569.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-173,-371.5],[-173,-185.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.949204029756,0.91795462814,0.996078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[100]},{"t":17,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[0]},{"t":40,"s":[70]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":41,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"light 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[623,681.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-173,-371.5],[-173,-185.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.949204029756,0.91795462814,0.996078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-1,"s":[48]},{"t":8,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-1,"s":[0]},{"t":15,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"light 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[323,511.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-173,-371.5],[-173,-185.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.949204029756,0.91795462814,0.996078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-1,"s":[48]},{"t":8,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":-1,"s":[0]},{"t":17,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":40,"st":0,"bm":0}]},{"id":"comp_1","nm":"wings 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"wing 6","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[156,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[18,69,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":36,"h":138,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"wing 5","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[86.25,73.5,0],"ix":2,"l":2},"a":{"a":0,"k":[9,67.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":18,"h":135,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"wing 4","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[18,69,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":36,"h":138,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"wings","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[87,70.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[174,141],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"wings","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_2","nm":"wing 6","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 28","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24,42,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[-100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.234,-22.789],[-8.468,12.55]],"o":[[-0.651,-8.587],[-11.725,9.248]],"v":[[-4.097,18],[6,-18]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,0.259999990463],"ix":4},"o":{"a":0,"k":26,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 28","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 21","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[-100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-18,-31.25],[11,-68.75],[18,-26.75],[-0.5,68.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":3,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.701960802078,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 21","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"wing","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[36,137.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"wing","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_3","nm":"wing 5","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 29","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[6.559,57,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-7,-76.5],[-0.5,27]],"o":[[-1,-13],[-6,15]],"v":[[2.441,51],[2.441,-51]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,0.259999990463],"ix":4},"o":{"a":0,"k":26,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 29","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 19","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8.75,67.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-8.75,-40.5],[0.75,-67.5],[8.75,-40.5],[0.75,67.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":1,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.701960802078,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 19","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"wing","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8.75,67.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[17.5,135],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"wing","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_4","nm":"wing 4","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 27","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.211,42.25,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.5,-34.5],[-13,19]],"o":[[-1,-13],[-18,14]],"v":[[-6.289,27.25],[9.211,-27.25]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,0.259999990463],"ix":4},"o":{"a":0,"k":26,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 27","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 20","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-18,-31.25],[11,-68.75],[18,-26.75],[-0.5,68.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":3,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.701960802078,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 20","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"wing","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18,68.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[36,137.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"wing","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_5","nm":"Fire 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 18","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[30.009,51,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.227,-31.426],[-8.719,38.883],[-14.372,0]],"o":[[-4.227,-31.692],[13.21,0],[10.832,34.888]],"v":[[-0.408,51],[-13.617,-51],[12.802,-51]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.863041162491,0.736617565155,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 18","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[30.009,75.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.34,-46.522],[-13.078,57.561],[-21.559,0]],"o":[[-6.341,-46.916],[19.815,0],[16.248,51.648]],"v":[[-0.611,75.5],[-20.426,-75.5],[19.203,-75.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.588392138481,0.215686261654,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 17","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Vector 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[30.28,95.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[8,-59],[-16.5,73],[-27.2,0]],"o":[[-8,-59.5],[25,0],[20.5,65.5]],"v":[[-0.771,95.75],[-25.771,-95.75],[24.229,-95.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.96862745285,0.449098020792,0.156862735748,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 16","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Fire","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[30.28,95.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[60.561,191.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Fire","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_6","nm":"body 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Logo 2","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.5,229.46,0],"ix":2,"l":2},"a":{"a":0,"k":[25.5,20.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":51,"h":41,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"window 2","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.5,140.5,0],"ix":2,"l":2},"a":{"a":0,"k":[36.5,36.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":73,"h":73,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Vector 23","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[35.497,185,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-14.4,0],[-8,32.5],[-9.167,-82.5]],"o":[[-17.5,-124.5],[-47.2,14],[3,0]],"v":[[14.503,132.5],[19.003,-132.5],[-12.497,132.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":3,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,0.5],"ix":4},"o":{"a":0,"k":50,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 23","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Union","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.937,39,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[26.5,28.5],[3.5,-14.333],[0,0]],"o":[[-26.5,28.5],[0,0],[-3.5,-14.333]],"v":[[0,-39],[-44.159,39],[44.159,39]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.701960802078,0.184313729405,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Union","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Vector","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[73.881,159.17,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,0.050000000745],"ix":4},"o":{"a":0,"k":5,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"line 2","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65,211,0],"ix":2,"l":2},"a":{"a":0,"k":[65,133,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":130,"h":266,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Union","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.937,166.741,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,4.971],[0,0],[4.704,-6.877],[-13.376,-65.551],[-4.203,0],[0,0]],"o":[[0,0],[0,-8.332],[-62.402,91.222],[0.84,4.118],[0,0],[4.971,0]],"v":[[0,142.259],[0,-142.607],[-14.719,-147.626],[-55.508,144.249],[-46.814,151.259],[-9,151.259]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-4.704,-6.877],[13.376,-65.551],[4.203,0],[0,0],[0,4.971]],"o":[[0,-8.332],[62.402,91.222],[-0.84,4.118],[0,0],[-4.971,0],[0,0]],"v":[[0,-142.607],[14.719,-147.626],[55.508,144.249],[46.814,151.259],[9,151.259],[0,142.259]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.809,0.815,0.967,0.5,0.82,0.787,0.946,1,0.832,0.758,0.925],"ix":9}},"s":{"a":0,"k":[0,-151.259],"ix":5},"e":{"a":0,"k":[0,151.259],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Union","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"body","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64.937,159,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[129.873,318],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"body","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_7","nm":"Logo 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"01","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[28.309,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.037,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.478431373835,0.952941179276,0.988235294819,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"01","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"02","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[33.927,25.575,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.034,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.898039221764,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"02","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"03","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[45.327,25.575,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.673,5.115],[-5.673,5.115],[-0.036,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.003921568859,0.603921592236,0.737254917622,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"03","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"04","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.654,15.345,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.673,5.115],[-5.673,5.115],[-0.036,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.133333340287,0.784313738346,0.847058832645,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"04","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"05","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[33.927,5.115,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.034,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.239215686917,0.909803926945,0.976470589638,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"05","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"06","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[45.327,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.552941203117,0.662745118141,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"06","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"07","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[33.981,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.215686276555,0.917647063732,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"07","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"08","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.599,25.575,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.003921568859,0.698039233685,0.827450990677,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"08","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"09","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[33.927,15.345,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.672,-5.115],[5.672,-5.115],[0.037,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.003921568859,0.854901969433,0.976470589638,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"09","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.345,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.034,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.827450990677,0.51372551918,0.023529412225,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[5.672,25.575,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.034,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.68235296011,0.270588248968,0.003921568859,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"11","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.345,15.345,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.672,5.115],[-5.672,5.115],[-0.034,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372559071,0.109803922474,0.070588238537,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"12","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[17.017,5.115,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[5.673,5.115],[-5.673,5.115],[-0.036,-5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.603921592236,0.058823529631,0.031372550875,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"13","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[17.017,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.96862745285,0.615686297417,0.043137256056,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"14","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[5.672,35.805,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.672,-5.115],[5.672,-5.115],[0.034,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.956862747669,0.407843142748,0.035294119269,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"15","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[11.345,25.575,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.672,-5.115],[5.672,-5.115],[0.034,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.92549020052,0.149019613862,0.105882354081,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"16","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[17.017,15.345,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698039233685,0.054901961237,0.007843137719,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"17","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"18","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[22.69,5.115,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-5.673,-5.115],[5.673,-5.115],[0.036,5.115]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.537254929543,0.054901961237,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"18","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Logo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25.5,20.46,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[51,40.92],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Logo","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_8","nm":"window 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Vector 26","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[31.603,31.095,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[-100,-100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-8.884],[7.298,2.856]],"o":[[0,8.884],[6.028,0]],"v":[[6.504,-3.433],[-6.504,4.817]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.941550970078,0.570875167847,0.014861643314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-0.949,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 26","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Vector 25","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.75,40.91,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-14],[11.5,4.5]],"o":[[0,14],[9.5,0]],"v":[[10.25,-5.41],[-10.25,7.59]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.941550970078,0.570875167847,0.014861643314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 25","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Ellipse 301","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36.5,36.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[49,49],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.019248366356,0.066150136292,0.312384277582,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,1,0.971,0.266,0.5,0.998,0.729,0.143,1,0.996,0.488,0.02],"ix":9}},"s":{"a":0,"k":[0,-24.5],"ix":5},"e":{"a":0,"k":[0,24.5],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 301","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Ellipse 300","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36.5,36.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[73,73],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.109803922474,0.113725490868,0.239215686917,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.156862750649,0.160784319043,0.278431385756,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 300","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"window","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36.5,36.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[73,73],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"window","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_9","nm":"line 2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Ellipse 304","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[69,183,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.768627464771,0.768627464771,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 304","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ellipse 304","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[127,120,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.768627464771,0.768627464771,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 304","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Ellipse 303","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[3,121,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.768627464771,0.768627464771,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 303","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Ellipse 305","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[67,3,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.768627464771,0.768627464771,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 305","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Ellipse 302","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[62,115,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[2,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.768627464771,0.768627464771,0.768627464771,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 302","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Line 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":89.849,"ix":10},"p":{"a":0,"k":[64.5,95,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[95,0.25],[3.759,0.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-69,-0.182],[-95,-0.25]],"c":false},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,0.10000000149],"ix":3},"o":{"a":0,"k":10,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Line 2","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Line 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65,118,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,0],[65,0]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,0.10000000149],"ix":3},"o":{"a":0,"k":10,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Line 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Rectangle 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65,259.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[70,13],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.40184544582,0.405834033442,0.525490196078,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Rectangle 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65,246.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[88,13],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.321107273476,0.325423207003,0.454901960784,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65,133,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[130,266],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"line","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}]},{"id":"comp_10","nm":"Star","fr":60,"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[387,41.5,0],"to":[0,101.167,0],"ti":[0,-101.167,0]},{"t":40,"s":[387,648.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-231.224,-460,0],"ix":1,"l":2},"s":{"a":0,"k":[55.358,50,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[28,28],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.968626972273,0.981244973575,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-233,-459.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[52.353,52.353],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[598,41.5,0],"to":[0,101.167,0],"ti":[0,-101.167,0]},{"t":40,"s":[598,648.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-231.224,-460,0],"ix":1,"l":2},"s":{"a":0,"k":[55.358,50,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[28,28],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.968626972273,0.981244973575,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-233,-459.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[52.353,52.353],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77,41.5,0],"to":[0,101.167,0],"ti":[0,-101.167,0]},{"t":40,"s":[77,648.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-231.224,-460,0],"ix":1,"l":2},"s":{"a":0,"k":[55.358,50,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[28,28],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.968626972273,0.981244973575,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-233,-459.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[52.353,52.353],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Light","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[323,511.5,0],"ix":2,"l":2},"a":{"a":0,"k":[323,511.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":646,"h":1023,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"wings 2","parent":5,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[65.063,331.497,0],"ix":2,"l":2},"a":{"a":0,"k":[87,70.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":174,"h":141,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Fire 2","parent":5,"refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[63.335,344.247,0],"ix":2,"l":2},"a":{"a":0,"k":[28.5,0,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":4,"s":[88,88,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":8,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[88,88,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":16,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":20,"s":[88,88,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":24,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":28,"s":[88,88,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":32,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":36,"s":[88,88,100]},{"t":40,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"w":61,"h":192,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"\\bSmoke","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[63.553,348.5,0],"ix":2,"l":2},"a":{"a":0,"k":[-2,-292,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,87,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":4,"s":[113,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":8,"s":[100,87,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[113,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":16,"s":[100,87,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":20,"s":[113,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":24,"s":[100,87,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":28,"s":[113,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":32,"s":[100,87,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":36,"s":[113,100,100]},{"t":40,"s":[100,87,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[8.058,-182.392],[-50.042,77.5],[-27.397,0]],"o":[[-8.058,-183.937],[25.181,0],[53.596,102.5]],"v":[[-0.766,296],[-25.947,-296],[24.415,-296]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.916184306145,0.903915286064,0.991551041603,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\\bSmoke","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"body 2","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[322.937,246,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":4,"s":[322.937,240,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[322.937,246,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[322.937,240,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[322.937,246,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[322.937,240,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[322.937,246,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[322.937,240,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[322.937,246,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":36,"s":[322.937,240,0],"to":[0,0,0],"ti":[0,0,0]},{"t":40,"s":[322.937,246,0]}],"ix":2,"l":2},"a":{"a":0,"k":[65,159,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":130,"h":318,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Ellipse 307","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[323,323,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[646,646],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274510175,0.066666670144,0.20000000298,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 306","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Star","tt":1,"refId":"comp_10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[323,511.5,0],"ix":2,"l":2},"a":{"a":0,"k":[323,511.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":646,"h":1023,"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Ellipse 306","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[323,323,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[646,646],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274510175,0.066666670144,0.20000000298,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 306","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}'
)
const tx = (e, t) => {
    let i = tE({
      download: e,
      href: `data:text/plain;charset=UTF-8,${encodeURIComponent(t)}`,
    })
    i.click()
  },
  tk = 'xinjs-ui',
  { app: tf } = (function (e) {
    let t = {}
    return (
      Object.keys(e).forEach((i) => {
        ;(Z[i] = e[i]), (t[i] = Z[i])
      }),
      t
    )
  })({
    app: {
      title: tk,
      githubUrl: `https://github.com/tonioloewald/${tk}#readme`,
      npmUrl: `https://www.npmjs.com/package/${tk}`,
      xinjsUrl: 'https://xinjs.net',
      bundleUrl: `https://deno.bundlejs.com/?q=${tk}&badge=`,
      optimizeLottie: !1,
      tableData: {
        columns: null,
        array: [
          { id: 'NCC-1701', name: 'Enterprise', number: 17, hasKirk: !0 },
          { id: 'NCC-74656-A', name: 'Voyager', number: 74, hasKirk: !1 },
        ],
      },
      lottieFilename: '',
      lottieData: '',
    },
  })
;(em.columns = {
  toDOM(e, t) {
    e.columns = t
  },
}),
  (async () => {
    let { Papa: e } = await eL(
        'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js'
      ),
      t = await fetch(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
      ),
      i = await t.text(),
      n = e.parse(i).data.map((e) => [...e.slice(0, 4), ...e.slice(-5)]),
      a = n.shift()
    tf.tableData = {
      columns: null,
      array: n.map((e) => e.reduce((e, t, i) => ((e[a[i]] = t), e), {})),
    }
  })(),
  Object.assign(globalThis, {
    app: tf,
    xin: Z,
    bindings: em,
    elements: eF,
    vars: e_,
    touch: E,
  })
const tD = document.querySelector('main'),
  {
    h1: tg,
    h2: tb,
    div: ty,
    span: tv,
    a: tE,
    img: tA,
    p: tF,
    label: tw,
    input: tC,
    header: tB,
    button: tS,
    pre: t_,
  } = eF,
  t$ = eX({
    style: { flex: '1 1 auto', overflow: 'hidden', overflowY: 'scroll' },
    rowHeight: 34,
    bindValue: tf.tableData,
  }),
  tV = e5({
    class: 'elastic',
    placeholder: 'enter query',
    onChange(e) {
      ;(tf.tableData.filter = e.target.filter), E('app.tableData')
    },
  })
tD.append(
  tB(
    tg({ bindText: 'app.title' }),
    tv({ class: 'elastic' }),
    tl({ minWidth: 500 }, tA({ src: tf.bundleUrl }), tv({ slot: 'small' })),
    tE('github', { href: tf.githubUrl }),
    tE('npm', { href: tf.npmUrl })
  ),
  tp(
    { style: { position: 'relative', flex: '1 1 auto' } },
    tr(
      { name: 'Read Me!', navSize: 150, style: { height: '100%' } },
      ty(
        {
          slot: 'nav',
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: e_.navBg,
          },
        },
        tS('read me', {
          onClick(e) {
            e.target.closest('side-nav').contentVisible = !0
          },
        })
      ),
      ty(
        {
          style: { position: 'relative', overflowY: 'scroll', height: '100%' },
        },
        tS(
          {
            class: 'transparent close-nav show-within-compact',
            style: { position: 'absolute' },
            onClick(e) {
              e.target.closest('side-nav').contentVisible = !1
            },
          },
          tv({ class: 'feather-chevron-left' })
        ),
        te({
          style: {
            display: 'block',
            maxWidth: '44em',
            margin: 'auto',
            padding: '0 2em',
          },
          value: ((e) => {
            let i = t(td).find((t) => t.filename === e)
            return void 0 !== i ? i.text : `document **"${e}"** not found`
          })('README.md'),
        })
      )
    ),
    ty(
      { name: 'bodymovin', style: { textAlign: 'center' } },
      tb('bodymovin-player'),
      ty(
        { class: 'bar' },
        tw(
          'test lotte.json',
          { class: 'clickable', tabindex: 0 },
          tC({
            type: 'file',
            hidden: !0,
            accept: '.json,application/json',
            onChange(e) {
              let t = document.querySelector('.bodymovin-info'),
                { files: i } = e.target
              if (i && 1 === i.length) {
                let e = new FileReader()
                ;(e.onload = () => {
                  let { result: i } = e
                  if (tf.optimizeLottie) {
                    let e = i.length
                    i = (i = (i = i.replace(/"mn":\s*"[^"]*",/g, '')).replace(
                      /"nm":\s*"[^"]*",/g,
                      ''
                    )).replace(/\d+\.\d+/g, (e) => {
                      let t = Number(e)
                      return t > 10 ? t.toFixed(0) : t.toFixed(1)
                    })
                    let n = i.length
                    ;(t.textContent = `loaded ${e} chars, reduced to ${n}`),
                      (tf.lottieData = i)
                  } else t.textContent = `size: ${i.length}`
                  document.querySelector('bodymovin-player').json = JSON.parse(
                    e.result
                  )
                }),
                  (tf.lottieFilename = i[0].name),
                  e.readAsText(i[0])
              }
            },
          })
        ),
        tw(
          tC({
            title: 'optimize',
            type: 'checkbox',
            bindValue: 'app.optimizeLottie',
          }),
          'optimize'
        ),
        tv({ class: 'elastic' }),
        tS('Save Data', {
          bindEnabled: 'app.lottieData',
          onClick() {
            tx(
              tf.lottieFilename.replace(/\.json/, '-optimized.json'),
              tf.lottieData
            )
          },
        })
      ),
      eO({ style: { marginTop: e_.spacing200 }, json: t(tm) }),
      tF(
        { class: 'bodymovin-info' },
        'Animation by',
        tE('chiến l\xea hồng', { href: 'https://lottiefiles.com/dvskjbicfc' })
      )
    ),
    ty(
      {
        name: 'mapbox',
        style: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
      },
      tb('mapbox'),
      e4({
        style: { flex: '1 1 auto', width: '100%' },
        token:
          'pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA',
      })
    ),
    ty(
      {
        name: 'data table & filter builder',
        style: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: '100%',
        },
      },
      tb('data-table and filter-builder', { style: { textAlign: 'center' } }),
      ty(
        { class: 'bar' },
        tw(
          { class: 'clickable', tabindex: 0 },
          'load json data',
          tC({
            type: 'file',
            hidden: !0,
            accept: '.json,application/json',
            onChange(e) {
              let { files: t } = e.target
              if (t && 1 === t.length) {
                let e = new FileReader()
                ;(e.onload = () => {
                  tf.tableData = { columns: null, array: JSON.parse(e.result) }
                }),
                  e.readAsText(t[0])
              }
            },
          })
        ),
        tS('Filter Test Data', {
          onClick() {
            let e = [
                'calendar',
                'collation',
                'currency',
                'numberingSystem',
                'timeZone',
                'unit',
              ]
                .map((e) => {
                  let t = Intl.supportedValuesOf(e)
                  return t.map((t) => ({ standard: e, value: t }))
                })
                .flat(),
              t = e.map(({ standard: e, value: t }, i) => ({
                id: String(i),
                standard: e,
                name: t,
                number: (100 * Math.random() - 50).toFixed(2),
                isLucky: 0.1 > Math.random(),
              }))
            tV.reset()
            let i = [
              { prop: 'id', width: 60, align: 'right' },
              { prop: 'standard', width: 140 },
              { prop: 'name', width: 250 },
              { prop: 'number', width: 100, align: 'right' },
              {
                prop: 'isLucky',
                width: 80,
                dataCell: () =>
                  tv(
                    { style: { textAlign: 'center' } },
                    tC({
                      type: 'checkbox',
                      bindValue: '^.isLucky',
                      title: 'special',
                    })
                  ),
              },
            ]
            tf.tableData = { array: t, columns: i }
          },
        }),
        tV,
        tS(
          {
            style: { marginLeft: e_.spacing_50 },
            onClick(e) {
              e.target.closest('button').classList.toggle('on'),
                tV.classList.toggle('show-help')
            },
          },
          tv({ class: 'feather-help-circle' })
        )
      ),
      t$
    ),
    ty(
      {
        name: 'code-editor',
        style: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
      },
      tb('code-editor'),
      eH(
        { style: { flex: '1 1 auto', width: '100%' } },
        "console.log('hello, world')"
      )
    )
  )
)
//# sourceMappingURL=index.2c19b7e7.js.map
