var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/xinjs/dist/module.js
var exports_module = {};
__export(exports_module, {
  xinValue: () => M,
  xinProxy: () => Rn,
  xinPath: () => u,
  xin: () => T,
  version: () => Kn,
  vars: () => qn,
  varDefault: () => wn,
  updates: () => jn,
  unobserve: () => a,
  touch: () => _,
  throttle: () => Zn,
  svgElements: () => Un,
  settings: () => Q,
  on: () => Wn,
  observerShouldBeRemoved: () => l,
  observe: () => N,
  mathML: () => Qn,
  makeComponent: () => Xn,
  invertLuminance: () => Ro,
  initVars: () => Bo,
  hotReload: () => Io,
  getListItem: () => Tn,
  elements: () => S,
  debounce: () => On,
  darkMode: () => Ko,
  css: () => P,
  boxedProxy: () => fn,
  boxed: () => I,
  blueprintLoader: () => Ff,
  blueprint: () => Tf,
  bindings: () => on,
  bind: () => nn,
  StyleSheet: () => qo,
  MoreMath: () => Go,
  Component: () => G,
  Color: () => $,
  BlueprintLoader: () => Eo,
  Blueprint: () => Blueprint
});
var Q = { debug: false, perf: false };
function O(n) {
  if (n == null || typeof n !== "object")
    return n;
  if (Array.isArray(n))
    return n.map(O);
  let o = {};
  for (let c in n) {
    let f = n[c];
    if (n != null && typeof n === "object")
      o[c] = O(f);
    else
      o[c] = f;
  }
  return o;
}
var rn = "-xin-data";
var i = `.${rn}`;
var En = "-xin-event";
var $n = `.${En}`;
var C = "xinPath";
var q = "xinValue";
var u = (n) => {
  return n[C];
};
function M(n) {
  return typeof n === "object" && n !== null ? n[q] || n : n;
}
var Y = new WeakMap;
var Z = new WeakMap;
var w = (n) => {
  let o = n.cloneNode();
  if (o instanceof Element) {
    let c = Z.get(n), f = Y.get(n);
    if (c != null)
      Z.set(o, O(c));
    if (f != null)
      Y.set(o, O(f));
  }
  for (let c of n instanceof HTMLTemplateElement ? n.content.childNodes : n.childNodes)
    if (c instanceof Element || c instanceof DocumentFragment)
      o.appendChild(w(c));
    else
      o.appendChild(c.cloneNode());
  return o;
};
var m = new WeakMap;
var Tn = (n) => {
  let o = document.body.parentElement;
  while (n.parentElement != null && n.parentElement !== o) {
    let c = m.get(n);
    if (c != null)
      return c;
    n = n.parentElement;
  }
  return false;
};
var l = Symbol("observer should be removed");
var e = [];
var t = [];
var Fn = false;
var kn;
var Sn;

class _n {
  description;
  test;
  callback;
  constructor(n, o) {
    let c = typeof o === "string" ? `"${o}"` : `function ${o.name}`, f;
    if (typeof n === "string")
      this.test = (X) => typeof X === "string" && X !== "" && (n.startsWith(X) || X.startsWith(n)), f = `test = "${n}"`;
    else if (n instanceof RegExp)
      this.test = n.test.bind(n), f = `test = "${n.toString()}"`;
    else if (n instanceof Function)
      this.test = n, f = `test = function ${n.name}`;
    else
      throw new Error("expect listener test to be a string, RegExp, or test function");
    if (this.description = `${f}, ${c}`, typeof o === "function")
      this.callback = o;
    else
      throw new Error("expect callback to be a path or function");
    e.push(this);
  }
}
var jn = async () => {
  if (kn === undefined)
    return;
  await kn;
};
var To = () => {
  if (Q.perf)
    console.time("xin async update");
  let n = [...t];
  for (let o of n)
    e.filter((c) => {
      let f;
      try {
        f = c.test(o);
      } catch (X) {
        throw new Error(`Listener ${c.description} threw "${X}" at "${o}"`);
      }
      if (f === l)
        return a(c), false;
      return f;
    }).forEach((c) => {
      let f;
      try {
        f = c.callback(o);
      } catch (X) {
        console.error(`Listener ${c.description} threw "${X}" handling "${o}"`);
      }
      if (f === l)
        a(c);
    });
  if (t.splice(0), Fn = false, typeof Sn === "function")
    Sn();
  if (Q.perf)
    console.timeEnd("xin async update");
};
var _ = (n) => {
  let o = typeof n === "string" ? n : u(n);
  if (o === undefined)
    throw console.error("touch was called on an invalid target", n), new Error("touch was called on an invalid target");
  if (Fn === false)
    kn = new Promise((c) => {
      Sn = c;
    }), Fn = setTimeout(To);
  if (t.find((c) => o.startsWith(c)) == null)
    t.push(o);
};
var Vn = (n, o) => {
  return new _n(n, o);
};
var a = (n) => {
  let o = e.indexOf(n);
  if (o > -1)
    e.splice(o, 1);
  else
    throw new Error("unobserve failed, listener not found");
};
var Fo = (n) => {
  try {
    return JSON.stringify(n);
  } catch (o) {
    return "{has circular references}";
  }
};
var Ln = (...n) => new Error(n.map(Fo).join(" "));
var ko = () => new Date(parseInt("1000000000", 36) + Date.now()).valueOf().toString(36).slice(1);
var So = 0;
var Lo = () => (parseInt("10000", 36) + ++So).toString(36).slice(-5);
var Co = () => ko() + Lo();
var Cn = {};
var un = {};
function mn(n) {
  if (n === "")
    return [];
  if (Array.isArray(n))
    return n;
  else {
    let o = [];
    while (n.length > 0) {
      let c = n.search(/\[[^\]]+\]/);
      if (c === -1) {
        o.push(n.split("."));
        break;
      } else {
        let f = n.slice(0, c);
        if (n = n.slice(c), f !== "")
          o.push(f.split("."));
        if (c = n.indexOf("]") + 1, o.push(n.slice(1, c - 1)), n.slice(c, c + 1) === ".")
          c += 1;
        n = n.slice(c);
      }
    }
    return o;
  }
}
var J = new WeakMap;
function Nn(n, o) {
  if (J.get(n) === undefined)
    J.set(n, {});
  if (J.get(n)[o] === undefined)
    J.get(n)[o] = {};
  let c = J.get(n)[o];
  if (o === "_auto_")
    n.forEach((f, X) => {
      if (f._auto_ === undefined)
        f._auto_ = Co();
      c[f._auto_ + ""] = X;
    });
  else
    n.forEach((f, X) => {
      c[j(f, o) + ""] = X;
    });
  return c;
}
function Mo(n, o) {
  if (J.get(n) === undefined || J.get(n)[o] === undefined)
    return Nn(n, o);
  else
    return J.get(n)[o];
}
function Ao(n, o, c) {
  c = c + "";
  let f = Mo(n, o)[c];
  if (f === undefined || j(n[f], o) + "" !== c)
    f = Nn(n, o)[c];
  return f;
}
function Wo(n, o, c) {
  if (n[o] === undefined && c !== undefined)
    n[o] = c;
  return n[o];
}
function pn(n, o, c, f) {
  let X = o !== "" ? Ao(n, o, c) : c;
  if (f === Cn)
    return n.splice(X, 1), J.delete(n), Symbol("deleted");
  else if (f === un) {
    if (o === "" && n[X] === undefined)
      n[X] = {};
  } else if (f !== undefined)
    if (X !== undefined)
      n[X] = f;
    else if (o !== "" && j(f, o) + "" === c + "")
      n.push(f), X = n.length - 1;
    else
      throw new Error(`byIdPath insert failed at [${o}=${c}]`);
  return n[X];
}
function In(n) {
  if (!Array.isArray(n))
    throw Ln("setByPath failed: expected array, found", n);
}
function Pn(n) {
  if (n == null || !(n instanceof Object))
    throw Ln("setByPath failed: expected Object, found", n);
}
function j(n, o) {
  let c = mn(o), f = n, X, y, x, r;
  for (X = 0, y = c.length;f !== undefined && X < y; X++) {
    let E = c[X];
    if (Array.isArray(E))
      for (x = 0, r = E.length;f !== undefined && x < r; x++) {
        let F = E[x];
        f = f[F];
      }
    else if (f.length === 0) {
      if (f = f[E.slice(1)], E[0] !== "=")
        return;
    } else if (E.includes("=")) {
      let [F, ...W] = E.split("=");
      f = pn(f, F, W.join("="));
    } else
      x = parseInt(E, 10), f = f[x];
  }
  return f;
}
function bn(n, o, c) {
  let f = n, X = mn(o);
  while (f != null && X.length > 0) {
    let y = X.shift();
    if (typeof y === "string") {
      let x = y.indexOf("=");
      if (x > -1) {
        if (x === 0)
          Pn(f);
        else
          In(f);
        let r = y.slice(0, x), E = y.slice(x + 1);
        if (f = pn(f, r, E, X.length > 0 ? un : c), X.length === 0)
          return true;
      } else {
        In(f);
        let r = parseInt(y, 10);
        if (X.length > 0)
          f = f[r];
        else {
          if (c !== Cn) {
            if (f[r] === c)
              return false;
            f[r] = c;
          } else
            f.splice(r, 1);
          return true;
        }
      }
    } else if (Array.isArray(y) && y.length > 0) {
      Pn(f);
      while (y.length > 0) {
        let x = y.shift();
        if (y.length > 0 || X.length > 0)
          f = Wo(f, x, y.length > 0 ? {} : []);
        else {
          if (c !== Cn) {
            if (f[x] === c)
              return false;
            f[x] = c;
          } else {
            if (!Object.prototype.hasOwnProperty.call(f, x))
              return false;
            delete f[x];
          }
          return true;
        }
      }
    } else
      throw new Error(`setByPath failed, bad path ${o}`);
  }
  throw new Error(`setByPath(${n}, ${o}, ${c}) failed`);
}
var Do = ["sort", "splice", "copyWithin", "fill", "pop", "push", "reverse", "shift", "unshift"];
var An = {};
var Ho = true;
var zo = /^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/;
var Oo = (n) => zo.test(n);
var s = (n = "", o = "") => {
  if (n === "")
    return o;
  else if (o.match(/^\d+$/) !== null || o.includes("="))
    return `${n}[${o}]`;
  else
    return `${n}.${o}`;
};
var Zo = { string(n) {
  return new String(n);
}, boolean(n) {
  return new Boolean(n);
}, bigint(n) {
  return n;
}, symbol(n) {
  return n;
}, number(n) {
  return new Number(n);
} };
function Mn(n, o) {
  let c = typeof n;
  if (n === undefined || c === "object" || c === "function")
    return n;
  else
    return new Proxy(Zo[typeof n](n), V(o, true));
}
var V = (n, o) => ({ get(c, f) {
  switch (f) {
    case C:
      return n;
    case q:
      return M(c);
  }
  if (typeof f === "symbol")
    return c[f];
  let X = f, y = X.match(/^([^.[]+)\.(.+)$/) ?? X.match(/^([^\]]+)(\[.+)/) ?? X.match(/^(\[[^\]]+\])\.(.+)$/) ?? X.match(/^(\[[^\]]+\])\[(.+)$/);
  if (y !== null) {
    let [, x, r] = y, E = s(n, x), F = j(c, x);
    return F !== null && typeof F === "object" ? new Proxy(F, V(E, o))[r] : F;
  }
  if (X.startsWith("[") && X.endsWith("]"))
    X = X.substring(1, X.length - 1);
  if (!Array.isArray(c) && c[X] !== undefined || Array.isArray(c) && X.includes("=")) {
    let x;
    if (X.includes("=")) {
      let [r, E] = X.split("=");
      x = c.find((F) => `${j(F, r)}` === E);
    } else
      x = c[X];
    if (x !== null && typeof x === "object") {
      let r = s(n, X);
      return new Proxy(x, V(r, o));
    } else if (typeof x === "function")
      return x.bind(c);
    else
      return o ? Mn(x, s(n, X)) : x;
  } else if (Array.isArray(c)) {
    let x = c[X];
    return typeof x === "function" ? (...r) => {
      let E = Array.prototype[X].apply(c, r);
      if (Do.includes(X))
        _(n);
      return E;
    } : typeof x === "object" ? new Proxy(x, V(s(n, X), o)) : o ? Mn(x, s(n, X)) : x;
  } else
    return o ? Mn(c[X], s(n, X)) : c[X];
}, set(c, f, X) {
  X = M(X);
  let y = f !== q ? s(n, f) : n;
  if (Ho && !Oo(y))
    throw new Error(`setting invalid path ${y}`);
  if (M(T[y]) !== X && bn(An, y, X))
    _(y);
  return true;
} });
var N = (n, o) => {
  let c = typeof o === "function" ? o : T[o];
  if (typeof c !== "function")
    throw new Error(`observe expects a function or path to a function, ${o} is neither`);
  return Vn(n, c);
};
var T = new Proxy(An, V("", false));
var I = new Proxy(An, V("", true));
var { document: p, MutationObserver: dn } = globalThis;
var hn = (n, o) => {
  let c = Z.get(n);
  if (c == null)
    return;
  for (let f of c) {
    let { binding: X, options: y } = f, { path: x } = f, { toDOM: r } = X;
    if (r != null) {
      if (x.startsWith("^")) {
        let E = Tn(n);
        if (E != null && E[C] != null)
          x = f.path = `${E[C]}${x.substring(1)}`;
        else
          throw console.error(`Cannot resolve relative binding ${x}`, n, "is not part of a list"), new Error(`Cannot resolve relative binding ${x}`);
      }
      if (o == null || x.startsWith(o))
        r(n, T[x], y);
    }
  }
};
if (dn != null)
  new dn((o) => {
    o.forEach((c) => {
      [...c.addedNodes].forEach((f) => {
        if (f instanceof Element)
          [...f.querySelectorAll(i)].forEach((X) => hn(X));
      });
    });
  }).observe(p.body, { subtree: true, childList: true });
N(() => true, (n) => {
  let o = p.querySelectorAll(i);
  for (let c of o)
    hn(c, n);
});
var gn = (n) => {
  let o = n.target.closest(i);
  while (o != null) {
    let c = Z.get(o);
    for (let f of c) {
      let { binding: X, path: y } = f, { fromDOM: x } = X;
      if (x != null) {
        let r;
        try {
          r = x(o, f.options);
        } catch (E) {
          throw console.error("Cannot get value from", o, "via", f), new Error("Cannot obtain value fromDOM");
        }
        if (r != null) {
          let E = T[y];
          if (E == null)
            T[y] = r;
          else {
            let F = E[C] != null ? E[q] : E, W = r[C] != null ? r[q] : r;
            if (F !== W)
              T[y] = W;
          }
        }
      }
    }
    o = o.parentElement.closest(i);
  }
};
if (globalThis.document != null)
  p.body.addEventListener("change", gn, true), p.body.addEventListener("input", gn, true);
function nn(n, o, c, f) {
  if (n instanceof DocumentFragment)
    throw new Error("bind cannot bind to a DocumentFragment");
  let X;
  if (typeof o === "object" && o[C] === undefined && f === undefined) {
    let { value: r } = o;
    X = typeof r === "string" ? r : r[C], f = o, delete f.value;
  } else
    X = typeof o === "string" ? o : o[C];
  if (X == null)
    throw new Error("bind requires a path or object with xin Proxy");
  let { toDOM: y } = c;
  n.classList?.add(rn);
  let x = Z.get(n);
  if (x == null)
    x = [], Z.set(n, x);
  if (x.push({ path: X, binding: c, options: f }), y != null && !X.startsWith("^"))
    _(X);
  return n;
}
var vn = new Set;
var Jo = (n) => {
  let o = n?.target.closest($n), c = false, f = new Proxy(n, { get(X, y) {
    if (y === "stopPropagation")
      return () => {
        n.stopPropagation(), c = true;
      };
    else {
      let x = X[y];
      return typeof x === "function" ? x.bind(X) : x;
    }
  } });
  while (!c && o != null) {
    let y = Y.get(o)[n.type] || [];
    for (let x of y) {
      if (typeof x === "function")
        x(f);
      else {
        let r = T[x];
        if (typeof r === "function")
          r(f);
        else
          throw new Error(`no event handler found at path ${x}`);
      }
      if (c)
        continue;
    }
    o = o.parentElement != null ? o.parentElement.closest($n) : null;
  }
};
var Wn = (n, o, c) => {
  let f = Y.get(n);
  if (n.classList.add(En), f == null)
    f = {}, Y.set(n, f);
  if (!f[o])
    f[o] = [];
  if (!f[o].includes(c))
    f[o].push(c);
  if (!vn.has(o))
    vn.add(o), p.body.addEventListener(o, Jo, true);
};
var Dn = (n, o) => {
  let c = new Event(o);
  n.dispatchEvent(c);
};
var en = (n) => {
  if (n instanceof HTMLInputElement)
    return n.type;
  else if (n instanceof HTMLSelectElement && n.hasAttribute("multiple"))
    return "multi-select";
  else
    return "other";
};
var Hn = (n, o) => {
  switch (en(n)) {
    case "radio":
      n.checked = n.value === o;
      break;
    case "checkbox":
      n.checked = !!o;
      break;
    case "date":
      n.valueAsDate = new Date(o);
      break;
    case "multi-select":
      for (let c of [...n.querySelectorAll("option")])
        c.selected = o[c.value];
      break;
    default:
      n.value = o;
  }
};
var tn = (n) => {
  switch (en(n)) {
    case "radio": {
      let o = n.parentElement?.querySelector(`[name="${n.name}"]:checked`);
      return o != null ? o.value : null;
    }
    case "checkbox":
      return n.checked;
    case "date":
      return n.valueAsDate?.toISOString();
    case "multi-select":
      return [...n.querySelectorAll("option")].reduce((o, c) => {
        return o[c.value] = c.selected, o;
      }, {});
    default:
      return n.value;
  }
};
var { ResizeObserver: ln } = globalThis;
var b = ln != null ? new ln((n) => {
  for (let o of n) {
    let c = o.target;
    Dn(c, "resize");
  }
}) : { observe() {}, unobserve() {} };
var zn = (n, o, c = true) => {
  if (n != null && o != null)
    if (typeof o === "string")
      n.textContent = o;
    else if (Array.isArray(o))
      o.forEach((f) => {
        n.append(f instanceof Node && c ? w(f) : f);
      });
    else if (o instanceof Node)
      n.append(c ? w(o) : o);
    else
      throw new Error("expect text content or document node");
};
var On = (n, o = 250) => {
  let c;
  return (...f) => {
    if (c !== undefined)
      clearTimeout(c);
    c = setTimeout(() => {
      n(...f);
    }, o);
  };
};
var Zn = (n, o = 250) => {
  let c, f = Date.now() - o, X = false;
  return (...y) => {
    if (clearTimeout(c), c = setTimeout(async () => {
      n(...y), f = Date.now();
    }, o), !X && Date.now() - f >= o) {
      X = true;
      try {
        n(...y), f = Date.now();
      } finally {
        X = false;
      }
    }
  };
};
var an = Symbol("list-binding");
var io = 16;
function no(n, o) {
  let c = [...n.querySelectorAll(i)];
  if (n.matches(i))
    c.unshift(n);
  for (let f of c) {
    let X = Z.get(f);
    for (let y of X) {
      if (y.path.startsWith("^"))
        y.path = `${o}${y.path.substring(1)}`;
      if (y.binding.toDOM != null)
        y.binding.toDOM(f, T[y.path]);
    }
  }
}

class oo {
  boundElement;
  listTop;
  listBottom;
  template;
  options;
  itemToElement;
  _array = [];
  _update;
  _previousSlice;
  constructor(n, o = {}) {
    if (this.boundElement = n, this.itemToElement = new WeakMap, n.children.length !== 1)
      throw new Error("ListBinding expects an element with exactly one child element");
    if (n.children[0] instanceof HTMLTemplateElement) {
      let c = n.children[0];
      if (c.content.children.length !== 1)
        throw new Error("ListBinding expects a template with exactly one child element");
      this.template = w(c.content.children[0]);
    } else
      this.template = n.children[0], this.template.remove();
    if (this.listTop = document.createElement("div"), this.listBottom = document.createElement("div"), this.boundElement.append(this.listTop), this.boundElement.append(this.listBottom), this.options = o, o.virtual != null)
      b.observe(this.boundElement), this._update = Zn(() => {
        this.update(this._array, true);
      }, io), this.boundElement.addEventListener("scroll", this._update), this.boundElement.addEventListener("resize", this._update);
  }
  visibleSlice() {
    let { virtual: n, hiddenProp: o, visibleProp: c } = this.options, f = this._array;
    if (o !== undefined)
      f = f.filter((E) => E[o] !== true);
    if (c !== undefined)
      f = f.filter((E) => E[c] === true);
    let X = 0, y = f.length - 1, x = 0, r = 0;
    if (n != null && this.boundElement instanceof HTMLElement) {
      let E = this.boundElement.offsetWidth, F = this.boundElement.offsetHeight, W = n.width != null ? Math.max(1, Math.floor(E / n.width)) : 1, K = Math.ceil(F / n.height) + 1, R = Math.ceil(f.length / W), v = W * K, U = Math.floor(this.boundElement.scrollTop / n.height);
      if (U > R - K + 1)
        U = Math.max(0, R - K + 1);
      X = U * W, y = X + v - 1, x = U * n.height, r = Math.max(R * n.height - F - x, 0);
    }
    return { items: f, firstItem: X, lastItem: y, topBuffer: x, bottomBuffer: r };
  }
  update(n, o) {
    if (n == null)
      n = [];
    this._array = n;
    let { hiddenProp: c, visibleProp: f } = this.options, X = u(n), y = this.visibleSlice();
    this.boundElement.classList.toggle("-xin-empty-list", y.items.length === 0);
    let x = this._previousSlice, { firstItem: r, lastItem: E, topBuffer: F, bottomBuffer: W } = y;
    if (c === undefined && f === undefined && o === true && x != null && r === x.firstItem && E === x.lastItem)
      return;
    this._previousSlice = y;
    let K = 0, R = 0, v = 0;
    for (let k of [...this.boundElement.children]) {
      if (k === this.listTop || k === this.listBottom)
        continue;
      let D = m.get(k);
      if (D == null)
        k.remove();
      else {
        let L = y.items.indexOf(D);
        if (L < r || L > E)
          k.remove(), this.itemToElement.delete(D), m.delete(k), K++;
      }
    }
    this.listTop.style.height = String(F) + "px", this.listBottom.style.height = String(W) + "px";
    let U = [], { idPath: xn } = this.options;
    for (let k = r;k <= E; k++) {
      let D = y.items[k];
      if (D === undefined)
        continue;
      let L = this.itemToElement.get(M(D));
      if (L == null) {
        if (v++, L = w(this.template), typeof D === "object")
          this.itemToElement.set(M(D), L), m.set(L, M(D));
        if (this.boundElement.insertBefore(L, this.listBottom), xn != null) {
          let yn = D[xn], $o = `${X}[${xn}=${yn}]`;
          no(L, $o);
        } else {
          let yn = `${X}[${k}]`;
          no(L, yn);
        }
      }
      U.push(L);
    }
    let h = null;
    for (let k of U) {
      if (k.previousElementSibling !== h)
        if (R++, h?.nextElementSibling != null)
          this.boundElement.insertBefore(k, h.nextElementSibling);
        else
          this.boundElement.insertBefore(k, this.listBottom);
      h = k;
    }
    if (Q.perf)
      console.log(X, "updated", { removed: K, created: v, moved: R });
  }
}
var co = (n, o) => {
  let c = n[an];
  if (c === undefined)
    c = new oo(n, o), n[an] = c;
  return c;
};
var on = { value: { toDOM: Hn, fromDOM(n) {
  return tn(n);
} }, set: { toDOM: Hn }, text: { toDOM(n, o) {
  n.textContent = o;
} }, enabled: { toDOM(n, o) {
  n.disabled = !o;
} }, disabled: { toDOM(n, o) {
  n.disabled = Boolean(o);
} }, style: { toDOM(n, o) {
  if (typeof o === "object")
    for (let c of Object.keys(o))
      n.style[c] = o[c];
  else if (typeof o === "string")
    n.setAttribute("style", o);
  else
    throw new Error("style binding expects either a string or object");
} }, list: { toDOM(n, o, c) {
  co(n, c).update(o);
} } };
var Oc = 180 / Math.PI;
var Zc = Math.PI / 180;
function A(n, o, c) {
  return o < n ? n : o > c ? c : o;
}
function H(n, o, c) {
  return c = A(0, c, 1), c * (o - n) + n;
}
var Go = { clamp: A, lerp: H };
var Uo = (n, o, c) => {
  return (0.299 * n + 0.587 * o + 0.114 * c) / 255;
};
var B = (n) => ("00" + Math.round(Number(n)).toString(16)).slice(-2);

class fo {
  h;
  s;
  l;
  constructor(n, o, c) {
    n /= 255, o /= 255, c /= 255;
    let f = Math.max(n, o, c), X = f - Math.min(n, o, c), y = X !== 0 ? f === n ? (o - c) / X : f === o ? 2 + (c - n) / X : 4 + (n - o) / X : 0;
    this.h = 60 * y < 0 ? 60 * y + 360 : 60 * y, this.s = X !== 0 ? f <= 0.5 ? X / (2 * f - X) : X / (2 - (2 * f - X)) : 0, this.l = (2 * f - X) / 2;
  }
}
var d = globalThis.document !== undefined ? globalThis.document.createElement("span") : undefined;

class $ {
  r;
  g;
  b;
  a;
  static fromCss(n) {
    let o = n;
    if (d instanceof HTMLSpanElement)
      d.style.color = n, document.body.appendChild(d), o = getComputedStyle(d).color, d.remove();
    let [c, f, X, y] = o.match(/[\d.]+/g);
    return new $(Number(c), Number(f), Number(X), y == null ? 1 : Number(y));
  }
  static fromHsl(n, o, c, f = 1) {
    return $.fromCss(`hsla(${n.toFixed(0)}, ${(o * 100).toFixed(0)}%, ${(c * 100).toFixed(0)}%, ${f.toFixed(2)})`);
  }
  constructor(n, o, c, f = 1) {
    this.r = A(0, n, 255), this.g = A(0, o, 255), this.b = A(0, c, 255), this.a = f !== undefined ? A(0, f, 1) : f = 1;
  }
  get inverse() {
    return new $(255 - this.r, 255 - this.g, 255 - this.b, this.a);
  }
  get inverseLuminance() {
    let { h: n, s: o, l: c } = this._hsl;
    return $.fromHsl(n, o, 1 - c, this.a);
  }
  get rgb() {
    let { r: n, g: o, b: c } = this;
    return `rgb(${n.toFixed(0)},${o.toFixed(0)},${c.toFixed(0)})`;
  }
  get rgba() {
    let { r: n, g: o, b: c, a: f } = this;
    return `rgba(${n.toFixed(0)},${o.toFixed(0)},${c.toFixed(0)},${f.toFixed(2)})`;
  }
  get RGBA() {
    return [this.r / 255, this.g / 255, this.b / 255, this.a];
  }
  get ARGB() {
    return [this.a, this.r / 255, this.g / 255, this.b / 255];
  }
  hslCached;
  get _hsl() {
    if (this.hslCached == null)
      this.hslCached = new fo(this.r, this.g, this.b);
    return this.hslCached;
  }
  get hsl() {
    let { h: n, s: o, l: c } = this._hsl;
    return `hsl(${n.toFixed(0)}, ${(o * 100).toFixed(0)}%, ${(c * 100).toFixed(0)}%)`;
  }
  get hsla() {
    let { h: n, s: o, l: c } = this._hsl;
    return `hsla(${n.toFixed(0)}, ${(o * 100).toFixed(0)}%, ${(c * 100).toFixed(0)}%, ${this.a.toFixed(2)})`;
  }
  get mono() {
    let n = this.brightness * 255;
    return new $(n, n, n);
  }
  get brightness() {
    return Uo(this.r, this.g, this.b);
  }
  get html() {
    return this.toString();
  }
  toString() {
    return this.a === 1 ? "#" + B(this.r) + B(this.g) + B(this.b) : "#" + B(this.r) + B(this.g) + B(this.b) + B(Math.floor(255 * this.a));
  }
  brighten(n) {
    let { h: o, s: c, l: f } = this._hsl, X = A(0, f + n * (1 - f), 1);
    return $.fromHsl(o, c, X, this.a);
  }
  darken(n) {
    let { h: o, s: c, l: f } = this._hsl, X = A(0, f * (1 - n), 1);
    return $.fromHsl(o, c, X, this.a);
  }
  saturate(n) {
    let { h: o, s: c, l: f } = this._hsl, X = A(0, c + n * (1 - c), 1);
    return $.fromHsl(o, X, f, this.a);
  }
  desaturate(n) {
    let { h: o, s: c, l: f } = this._hsl, X = A(0, c * (1 - n), 1);
    return $.fromHsl(o, X, f, this.a);
  }
  rotate(n) {
    let { h: o, s: c, l: f } = this._hsl, X = (o + 360 + n) % 360;
    return $.fromHsl(X, c, f, this.a);
  }
  opacity(n) {
    let { h: o, s: c, l: f } = this._hsl;
    return $.fromHsl(o, c, f, n);
  }
  swatch() {
    let { r: n, g: o, b: c, a: f } = this;
    return console.log(`%c      %c ${this.html}, rgba(${n}, ${o}, ${c}, ${f}), ${this.hsla}`, `background-color: rgba(${n}, ${o}, ${c}, ${f})`, "background-color: transparent"), this;
  }
  blend(n, o) {
    return new $(H(this.r, n.r, o), H(this.g, n.g, o), H(this.b, n.b, o), H(this.a, n.a, o));
  }
  mix(n, o) {
    let c = this._hsl, f = n._hsl;
    return $.fromHsl(H(c.h, f.h, o), H(c.s, f.s, o), H(c.l, f.l, o), H(this.a, n.a, o));
  }
}
function z(n) {
  return n.replace(/[A-Z]/g, (o) => {
    return `-${o.toLocaleLowerCase()}`;
  });
}
function Xo(n) {
  return n.replace(/-([a-z])/g, (o, c) => {
    return c.toLocaleUpperCase();
  });
}
var Qo = "http://www.w3.org/1998/Math/MathML";
var Yo = "http://www.w3.org/2000/svg";
var cn = {};
var Jn = (n, ...o) => {
  if (cn[n] === undefined) {
    let [X, y] = n.split("|");
    if (y === undefined)
      cn[n] = globalThis.document.createElement(X);
    else
      cn[n] = globalThis.document.createElementNS(y, X);
  }
  let c = cn[n].cloneNode(), f = {};
  for (let X of o)
    if (X instanceof Element || X instanceof DocumentFragment || typeof X === "string" || typeof X === "number")
      if (c instanceof HTMLTemplateElement)
        c.content.append(X);
      else
        c.append(X);
    else
      Object.assign(f, X);
  for (let X of Object.keys(f)) {
    let y = f[X];
    if (X === "apply")
      y(c);
    else if (X === "style")
      if (typeof y === "object")
        for (let x of Object.keys(y)) {
          let r = Yn(z(x), y[x]);
          if (r.prop.startsWith("--"))
            c.style.setProperty(r.prop, r.value);
          else
            c.style[x] = r.value;
        }
      else
        c.setAttribute("style", y);
    else if (X.match(/^on[A-Z]/) != null) {
      let x = X.substring(2).toLowerCase();
      Wn(c, x, y);
    } else if (X === "bind")
      if ((typeof y.binding === "string" ? on[y.binding] : y.binding) !== undefined && y.value !== undefined)
        nn(c, y.value, y.binding instanceof Function ? { toDOM: y.binding } : y.binding);
      else
        throw new Error("bad binding");
    else if (X.match(/^bind[A-Z]/) != null) {
      let x = X.substring(4, 5).toLowerCase() + X.substring(5), r = on[x];
      if (r !== undefined)
        nn(c, y, r);
      else
        throw new Error(`${X} is not allowed, bindings.${x} is not defined`);
    } else if (c[X] !== undefined) {
      let { MathMLElement: x } = globalThis;
      if (c instanceof SVGElement || x !== undefined && c instanceof x)
        c.setAttribute(X, y);
      else
        c[X] = y;
    } else {
      let x = z(X);
      if (x === "class")
        y.split(" ").forEach((r) => {
          c.classList.add(r);
        });
      else if (c[x] !== undefined)
        c[x] = y;
      else if (typeof y === "boolean")
        y ? c.setAttribute(x, "") : c.removeAttribute(x);
      else
        c.setAttribute(x, y);
    }
  }
  return c;
};
var Gn = (...n) => {
  let o = globalThis.document.createDocumentFragment();
  for (let c of n)
    o.append(c);
  return o;
};
var S = new Proxy({ fragment: Gn }, { get(n, o) {
  if (o = o.replace(/[A-Z]/g, (c) => `-${c.toLocaleLowerCase()}`), n[o] === undefined)
    n[o] = (...c) => Jn(o, ...c);
  return n[o];
}, set() {
  throw new Error("You may not add new properties to elements");
} });
var Un = new Proxy({ fragment: Gn }, { get(n, o) {
  if (n[o] === undefined)
    n[o] = (...c) => Jn(`${o}|${Yo}`, ...c);
  return n[o];
}, set() {
  throw new Error("You may not add new properties to elements");
} });
var Qn = new Proxy({ fragment: Gn }, { get(n, o) {
  if (n[o] === undefined)
    n[o] = (...c) => Jn(`${o}|${Qo}`, ...c);
  return n[o];
}, set() {
  throw new Error("You may not add new properties to elements");
} });
function qo(n, o) {
  let c = S.style(P(o));
  c.id = n, document.head.append(c);
}
var wo = ["animation-iteration-count", "flex", "flex-base", "flex-grow", "flex-shrink", "opacity", "order", "tab-size", "widows", "z-index", "zoom"];
var Yn = (n, o) => {
  if (typeof o === "number" && !wo.includes(n))
    o = `${o}px`;
  if (n.startsWith("_"))
    if (n.startsWith("__"))
      n = "--" + n.substring(2), o = `var(${n}-default, ${o})`;
    else
      n = "--" + n.substring(1);
  return { prop: n, value: String(o) };
};
var so = (n, o, c) => {
  if (c === undefined)
    return "";
  if (c instanceof $)
    c = c.html;
  let f = Yn(o, c);
  return `${n}  ${f.prop}: ${f.value};`;
};
var xo = (n, o, c = "") => {
  let f = z(n);
  if (typeof o === "object" && !(o instanceof $)) {
    let X = Object.keys(o).map((y) => xo(y, o[y], `${c}  `)).join(`
`);
    return `${c}  ${n} {
${X}
${c}  }`;
  } else
    return so(c, f, o);
};
var P = (n, o = "") => {
  return Object.keys(n).map((f) => {
    let X = n[f];
    if (typeof X === "string") {
      if (f === "@import")
        return `@import url('${X}');`;
      throw new Error("top-level string value only allowed for `@import`");
    }
    let y = Object.keys(X).map((x) => xo(x, X[x])).join(`
`);
    return `${o}${f} {
${y}
}`;
  }).join(`

`);
};
var Bo = (n) => {
  console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");
  let o = {};
  for (let c of Object.keys(n)) {
    let f = n[c], X = z(c);
    o[`--${X}`] = typeof f === "number" && f !== 0 ? String(f) + "px" : f;
  }
  return o;
};
var Ko = (n) => {
  console.warn("darkMode is deprecated. Use inverseLuminance instead.");
  let o = {};
  for (let c of Object.keys(n)) {
    let f = n[c];
    if (typeof f === "string" && f.match(/^(#|rgb[a]?\(|hsl[a]?\()/) != null)
      f = $.fromCss(f).inverseLuminance.html, o[`--${z(c)}`] = f;
  }
  return o;
};
var Ro = (n) => {
  let o = {};
  for (let c of Object.keys(n)) {
    let f = n[c];
    if (f instanceof $)
      o[c] = f.inverseLuminance;
    else if (typeof f === "string" && f.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/))
      o[c] = $.fromCss(f).inverseLuminance;
  }
  return o;
};
var qn = new Proxy({}, { get(n, o) {
  if (n[o] == null) {
    o = o.replace(/[A-Z]/g, (r) => `-${r.toLocaleLowerCase()}`);
    let [, c, , f, X, y] = o.match(/^([^\d_]*)((_)?(\d+)(\w*))?$/), x = `--${c}`;
    if (X != null) {
      let r = f == null ? Number(X) / 100 : -Number(X) / 100;
      switch (y) {
        case "b":
          {
            let E = getComputedStyle(document.body).getPropertyValue(x);
            n[o] = r > 0 ? $.fromCss(E).brighten(r).rgba : $.fromCss(E).darken(-r).rgba;
          }
          break;
        case "s":
          {
            let E = getComputedStyle(document.body).getPropertyValue(x);
            n[o] = r > 0 ? $.fromCss(E).saturate(r).rgba : $.fromCss(E).desaturate(-r).rgba;
          }
          break;
        case "h":
          {
            let E = getComputedStyle(document.body).getPropertyValue(x);
            n[o] = $.fromCss(E).rotate(r * 100).rgba, console.log($.fromCss(E).hsla, $.fromCss(E).rotate(r).hsla);
          }
          break;
        case "o":
          {
            let E = getComputedStyle(document.body).getPropertyValue(x);
            n[o] = $.fromCss(E).opacity(r).rgba;
          }
          break;
        case "":
          n[o] = `calc(var(${x}) * ${r})`;
          break;
        default:
          throw console.error(y), new Error(`Unrecognized method ${y} for css variable ${x}`);
      }
    } else
      n[o] = `var(${x})`;
  }
  return n[o];
} });
var wn = new Proxy({}, { get(n, o) {
  if (n[o] === undefined) {
    let c = `--${o.replace(/[A-Z]/g, (f) => `-${f.toLocaleLowerCase()}`)}`;
    n[o] = (f) => `var(${c}, ${f})`;
  }
  return n[o];
} });
var _o = 0;
function sn() {
  return `custom-elt${(_o++).toString(36)}`;
}
var yo = 0;
var g = {};
function jo(n, o) {
  let c = g[n], f = P(o).replace(/:host\b/g, n);
  g[n] = c ? c + `
` + f : f;
}
function Vo(n) {
  if (g[n])
    document.head.append(S.style({ id: n + "-component" }, g[n]));
  delete g[n];
}

class G extends HTMLElement {
  static elements = S;
  static _elementCreator;
  instanceId;
  styleNode;
  static styleSpec;
  static styleNode;
  content = S.slot();
  isSlotted;
  static _tagName = null;
  static get tagName() {
    return this._tagName;
  }
  static StyleNode(n) {
    return console.warn("StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"), S.style(P(n));
  }
  static elementCreator(n = {}) {
    if (this._elementCreator == null) {
      let { tag: o, styleSpec: c } = n, f = n != null ? o : null;
      if (f == null)
        if (typeof this.name === "string" && this.name !== "") {
          if (f = z(this.name), f.startsWith("-"))
            f = f.slice(1);
        } else
          f = sn();
      if (customElements.get(f) != null)
        console.warn(`${f} is already defined`);
      if (f.match(/\w+(-\w+)+/) == null)
        console.warn(`${f} is not a legal tag for a custom-element`), f = sn();
      while (customElements.get(f) !== undefined)
        f = sn();
      if (this._tagName = f, c !== undefined)
        jo(f, c);
      window.customElements.define(f, this, n), this._elementCreator = S[f];
    }
    return this._elementCreator;
  }
  initAttributes(...n) {
    let o = {}, c = {};
    new MutationObserver((X) => {
      let y = false;
      if (X.forEach((x) => {
        y = !!(x.attributeName && n.includes(Xo(x.attributeName)));
      }), y && this.queueRender !== undefined)
        this.queueRender(false);
    }).observe(this, { attributes: true }), n.forEach((X) => {
      o[X] = O(this[X]);
      let y = z(X);
      Object.defineProperty(this, X, { enumerable: false, get() {
        if (typeof o[X] === "boolean")
          return this.hasAttribute(y);
        else if (this.hasAttribute(y))
          return typeof o[X] === "number" ? parseFloat(this.getAttribute(y)) : this.getAttribute(y);
        else if (c[X] !== undefined)
          return c[X];
        else
          return o[X];
      }, set(x) {
        if (typeof o[X] === "boolean") {
          if (x !== this[X]) {
            if (x)
              this.setAttribute(y, "");
            else
              this.removeAttribute(y);
            this.queueRender();
          }
        } else if (typeof o[X] === "number") {
          if (x !== parseFloat(this[X]))
            this.setAttribute(y, x), this.queueRender();
        } else if (typeof x === "object" || `${x}` !== `${this[X]}`) {
          if (x === null || x === undefined || typeof x === "object")
            this.removeAttribute(y);
          else
            this.setAttribute(y, x);
          this.queueRender(), c[X] = x;
        }
      } });
    });
  }
  initValue() {
    let n = Object.getOwnPropertyDescriptor(this, "value");
    if (n === undefined || n.get !== undefined || n.set !== undefined)
      return;
    let o = this.hasAttribute("value") ? this.getAttribute("value") : O(this.value);
    delete this.value, Object.defineProperty(this, "value", { enumerable: false, get() {
      return o;
    }, set(c) {
      if (o !== c)
        o = c, this.queueRender(true);
    } });
  }
  _parts;
  get parts() {
    let n = this.shadowRoot != null ? this.shadowRoot : this;
    if (this._parts == null)
      this._parts = new Proxy({}, { get(o, c) {
        if (o[c] === undefined) {
          let f = n.querySelector(`[part="${c}"]`);
          if (f == null)
            f = n.querySelector(c);
          if (f == null)
            throw new Error(`elementRef "${c}" does not exist!`);
          f.removeAttribute("data-ref"), o[c] = f;
        }
        return o[c];
      } });
    return this._parts;
  }
  constructor() {
    super();
    yo += 1, this.initAttributes("hidden"), this.instanceId = `${this.tagName.toLocaleLowerCase()}-${yo}`, this._value = O(this.defaultValue);
  }
  connectedCallback() {
    if (Vo(this.constructor.tagName), this.hydrate(), this.role != null)
      this.setAttribute("role", this.role);
    if (this.onResize !== undefined) {
      if (b.observe(this), this._onResize == null)
        this._onResize = this.onResize.bind(this);
      this.addEventListener("resize", this._onResize);
    }
    if (this.value != null && this.getAttribute("value") != null)
      this._value = this.getAttribute("value");
    this.queueRender();
  }
  disconnectedCallback() {
    b.unobserve(this);
  }
  _changeQueued = false;
  _renderQueued = false;
  queueRender(n = false) {
    if (!this._hydrated)
      return;
    if (!this._changeQueued)
      this._changeQueued = n;
    if (!this._renderQueued)
      this._renderQueued = true, requestAnimationFrame(() => {
        if (this._changeQueued)
          Dn(this, "change");
        this._changeQueued = false, this._renderQueued = false, this.render();
      });
  }
  _hydrated = false;
  hydrate() {
    if (!this._hydrated) {
      this.initValue();
      let n = typeof this.content !== "function", o = typeof this.content === "function" ? this.content() : this.content, { styleSpec: c } = this.constructor, { styleNode: f } = this.constructor;
      if (c)
        f = this.constructor.styleNode = S.style(P(c)), delete this.constructor.styleNode;
      if (this.styleNode)
        console.warn(this, "styleNode is deprecrated, use static styleNode or statc styleSpec instead"), f = this.styleNode;
      if (f) {
        let X = this.attachShadow({ mode: "open" });
        X.appendChild(f.cloneNode(true)), zn(X, o, n);
      } else if (o !== null) {
        let X = [...this.childNodes];
        zn(this, o, n), this.isSlotted = this.querySelector("slot,xin-slot") !== undefined;
        let y = [...this.querySelectorAll("slot")];
        if (y.length > 0)
          y.forEach(Bn.replaceSlot);
        if (X.length > 0) {
          let x = { "": this };
          [...this.querySelectorAll("xin-slot")].forEach((r) => {
            x[r.name] = r;
          }), X.forEach((r) => {
            let E = x[""], F = r instanceof Element ? x[r.slot] : E;
            (F !== undefined ? F : E).append(r);
          });
        }
      }
      this._hydrated = true;
    }
  }
  render() {}
}

class Bn extends G {
  name = "";
  content = null;
  static replaceSlot(n) {
    let o = document.createElement("xin-slot");
    if (n.name !== "")
      o.setAttribute("name", n.name);
    n.replaceWith(o);
  }
  constructor() {
    super();
    this.initAttributes("name");
  }
}
var Nc = Bn.elementCreator({ tag: "xin-slot" });
var Io = (n = () => true) => {
  let o = localStorage.getItem("xin-state");
  if (o != null) {
    let f = JSON.parse(o);
    for (let X of Object.keys(f).filter(n))
      if (T[X] !== undefined)
        Object.assign(T[X], f[X]);
      else
        T[X] = f[X];
  }
  let c = On(() => {
    let f = {}, X = M(T);
    for (let y of Object.keys(X).filter(n))
      f[y] = X[y];
    localStorage.setItem("xin-state", JSON.stringify(f)), console.log("xin state saved to localStorage");
  }, 500);
  N(n, c);
};
var Kn = "0.8.8";
function fn(n) {
  return Object.assign(I, n), I;
}
var ro = false;
function Rn(n, o = false) {
  if (o) {
    if (!ro)
      console.warn("xinProxy(..., true) is deprecated; use boxedProxy(...) instead"), ro = true;
    return fn(n);
  }
  return Object.keys(n).forEach((c) => {
    T[c] = n[c];
  }), T;
}
var Po = {};
async function Xn(n, o) {
  let { type: c, styleSpec: f } = await o(n, { Color: $, Component: G, elements: S, svgElements: Un, mathML: Qn, varDefault: wn, vars: qn, xin: T, boxed: I, xinProxy: Rn, boxedProxy: fn, makeComponent: Xn, version: Kn }), X = { type: c, creator: c.elementCreator({ tag: n, styleSpec: f }) };
  return Po[n] = X, X;
}

class Blueprint extends G {
  tag = "anon-elt";
  src = "";
  property = "default";
  loaded;
  async packaged() {
    if (!this.loaded) {
      let { tag, src } = this, imported = await eval(`import('${src}')`), blueprint = imported[this.property];
      this.loaded = await Xn(tag, blueprint);
    }
    return this.loaded;
  }
  constructor() {
    super();
    this.initAttributes("tag", "src", "property");
  }
}
var Tf = Blueprint.elementCreator({ tag: "xin-blueprint", styleSpec: { ":host": { display: "none" } } });

class Eo extends G {
  constructor() {
    super();
  }
  async load() {
    let o = [...this.querySelectorAll(Blueprint.tagName)].filter((c) => c.src).map((c) => c.packaged());
    await Promise.all(o);
  }
  connectedCallback() {
    super.connectedCallback(), this.load();
  }
}
var Ff = Eo.elementCreator({ tag: "xin-loader", styleSpec: { ":host": { display: "none" } } });

// src/index.ts
var exports_src = {};
__export(exports_src, {
  xrControllersText: () => xrControllersText,
  xrControllers: () => xrControllers,
  xinTagList: () => xinTagList,
  xinTag: () => xinTag,
  xinSizer: () => xinSizer,
  xinSelect: () => xinSelect,
  xinSegmented: () => xinSegmented,
  xinRating: () => xinRating,
  xinPasswordStrength: () => xinPasswordStrength,
  xinNotification: () => xinNotification,
  xinLocalized: () => xinLocalized,
  xinForm: () => xinForm,
  xinFloat: () => xinFloat,
  xinField: () => xinField,
  xinCarousel: () => xinCarousel,
  version: () => version,
  updateLocalized: () => updateLocalized,
  trackDrag: () => trackDrag,
  tabSelector: () => tabSelector,
  svgIcon: () => svgIcon,
  svg2DataUrl: () => svg2DataUrl,
  styleSheet: () => styleSheet,
  spacer: () => spacer,
  sizeBreak: () => sizeBreak,
  sideNav: () => sideNav,
  scriptTag: () => scriptTag,
  richTextWidgets: () => richTextWidgets,
  richText: () => richText,
  removeLastMenu: () => removeLastMenu,
  postNotification: () => postNotification,
  positionFloat: () => positionFloat,
  popMenu: () => popMenu,
  popFloat: () => popFloat,
  menu: () => menu,
  markdownViewer: () => markdownViewer,
  mapBox: () => mapBox,
  makeSorter: () => makeSorter,
  makeExamplesLive: () => makeExamplesLive,
  localize: () => localize,
  localePicker: () => localePicker,
  liveExample: () => liveExample,
  isBreached: () => isBreached,
  initLocalization: () => initLocalization,
  icons: () => icons,
  i18n: () => i18n,
  gamepadText: () => gamepadText,
  gamepadState: () => gamepadState,
  findHighestZ: () => findHighestZ,
  filterPart: () => filterPart,
  filterBuilder: () => filterBuilder,
  elastic: () => elastic,
  editableRect: () => editableRect,
  dragAndDrop: () => exports_drag_and_drop,
  digest: () => digest,
  defineIcon: () => defineIcon,
  dataTable: () => dataTable,
  createSubMenu: () => createSubMenu,
  createMenuItem: () => createMenuItem,
  createMenuAction: () => createMenuAction,
  commandButton: () => commandButton,
  colorInput: () => colorInput,
  codeEditor: () => codeEditor,
  bringToFront: () => bringToFront,
  bodymovinPlayer: () => bodymovinPlayer,
  blockStyle: () => blockStyle,
  b3d: () => b3d,
  availableFilters: () => availableFilters,
  abTest: () => abTest,
  XinTagList: () => XinTagList,
  XinTag: () => XinTag,
  XinSizer: () => XinSizer,
  XinSelect: () => XinSelect,
  XinSegmented: () => XinSegmented,
  XinRating: () => XinRating,
  XinPasswordStrength: () => XinPasswordStrength,
  XinNotification: () => XinNotification,
  XinLocalized: () => XinLocalized,
  XinForm: () => XinForm,
  XinFloat: () => XinFloat,
  XinField: () => XinField,
  XinCarousel: () => XinCarousel,
  TabSelector: () => TabSelector,
  SvgIcon: () => SvgIcon,
  SizeBreak: () => SizeBreak,
  SideNav: () => SideNav,
  RichText: () => RichText,
  MarkdownViewer: () => MarkdownViewer,
  MapBox: () => MapBox,
  LocalePicker: () => LocalePicker,
  LiveExample: () => LiveExample,
  FilterPart: () => FilterPart,
  FilterBuilder: () => FilterBuilder,
  EditableRect: () => EditableRect,
  DataTable: () => DataTable,
  CodeEditor: () => CodeEditor,
  BodymovinPlayer: () => BodymovinPlayer,
  B3d: () => B3d,
  AbTest: () => AbTest
});

// src/ab-test.ts
/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

function randomize() {
  const conditions = {
    testA: Math.random() < 0.5,
    testB: Math.random() < 0.5,
    testC: Math.random() < 0.5
  }

  AbTest.conditions = conditions

  preview.querySelector('pre').innerText = JSON.stringify(conditions, null, 2)
}

preview.querySelector('.randomize-conditions').addEventListener('click', randomize)

randomize()
```
```html
<xin-ab class="a" condition="testA">
  <p>testA</p>
</xin-ab>
<xin-ab class="not-a" not condition="testA">
  <p>not testA</p>
</xin-ab>
<xin-ab class="b" condition="testB">
  <p>testB</p>
</xin-ab>
<xin-ab class="not-b" not condition="testB">
  <p>not testB</p>
</xin-ab>
<xin-ab class="c" condition="testC">
  <p>testC</p>
</xin-ab>
<xin-ab class="not-c" not condition="testC">
  <p>not testC</p>
</xin-ab>
<pre>
</pre>
<button class="randomize-conditions">Randomize</button>
```
```css
.preview {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.preview p {
  background: #44c;
  color: white;
  display: block;
  border-radius: 99px;
  padding: 4px 10px;
  margin: 0;
}

.preview xin-ab[not] p {
  background: red;
}
```

- Set `AbTest.conditions` to anything you like.
- Use `<xin-ab>` elements to display conditional content.
- `condition` attribute determines which value in `AbTest.conditions` controls the element
- `not` reverses the condition (so `<xin-ab not condition="foo">` will be visible if `conditions.foo` is `false`)
*/
var { abTestConditions } = Rn({
  abTestConditions: {}
});

class AbTest extends G {
  static set conditions(context) {
    Object.assign(abTestConditions, context);
    for (const abTest of [...AbTest.instances]) {
      abTest.queueRender();
    }
  }
  condition = "";
  not = false;
  static instances = new Set;
  constructor() {
    super();
    this.initAttributes("condition", "not");
  }
  connectedCallback() {
    super.connectedCallback();
    AbTest.instances.add(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    AbTest.instances.delete(this);
  }
  render() {
    if (this.condition !== "" && (this.not ? abTestConditions[this.condition] !== true : abTestConditions[this.condition] === true)) {
      this.toggleAttribute("hidden", false);
    } else {
      this.toggleAttribute("hidden", true);
    }
  }
}
var abTest = AbTest.elementCreator({ tag: "xin-ab" });
// src/via-tag.ts
/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

`xinjs-ui` uses this library to implement the `<xin-code>`, `<xin-lottie>`, and `<xin-map>`
elements.

`scriptTag()` and `styleSheet()` return promises that resolve `globalThis` when the module in question
has loaded and otherwise behave as much like `import()` as possible.

This example uses `scriptTag` and `styleSheet` to load [quilljs](https://quilljs.com) on-the-fly.

```js
const { elements } = xinjs
const { scriptTag, styleSheet } = xinjsui

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, false] }],
  ['blockquote', 'code-block'],
  [{ 'align': [] }],
  ['bold', 'italic', 'strike'],
  ['link', 'image', 'video'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  ['clean']
]

;(async () => {
  await Promise.all([
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.core.css'),
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css'),
  ])

  const container = elements.div()
  const { Quill } = await scriptTag('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js')
  preview.append(container)

  const quill = new Quill(container, {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    theme: 'snow',
  })
})()
```

Note that `scriptTag` will resolve `globalThis` so it behaves as much like async `import()`
as possible.

As an aside:

`<xin-lottie>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for `<xin-map>` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a `<link>` tag for a specified css file.

Using `styleSheet`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet `<link>` will only be inserted _once_.
*/
var loadedScripts = {};
function scriptTag(src2, existingSymbolName) {
  if (loadedScripts[src2] === undefined) {
    if (existingSymbolName !== undefined) {
      const existing = globalThis[existingSymbolName];
      loadedScripts[src2] = Promise.resolve({ [existingSymbolName]: existing });
    }
    const scriptElt = S.script({ src: src2 });
    document.head.append(scriptElt);
    loadedScripts[src2] = new Promise((resolve) => {
      scriptElt.onload = () => resolve(globalThis);
    });
  }
  return loadedScripts[src2];
}
var loadedStyleSheets = {};
function styleSheet(href) {
  if (loadedStyleSheets[href] === undefined) {
    const linkElement = S.link({
      rel: "stylesheet",
      type: "text/css",
      href
    });
    document.head.append(linkElement);
    loadedStyleSheets[href] = new Promise((resolve) => {
      linkElement.onload = resolve;
    });
  }
  return loadedStyleSheets[href];
}

// src/icon-data.ts
var icon_data_default = {
  xrColor: {
    p: [
      "M801 116c-0-0-1-0-1-0-473 0-734 64-734 396 0 254 135 396 349 396s279-164 385-164c0 0 1-0 1-0 0 0 1 0 1 0 107 0 172 164 385 164s349-142 349-396c0-332-261-396-734-396-0 0-1 0-1 0 0 0-0 0-0 0z",
      "M482 822c147-18 199-134 280-134 0 0 1-0 1-0 0 0 1 0 1 0 14 0 26 3 39 9 13-5 25-9 39-9 0 0 1-0 1-0 0 0 1 0 1 0 81 0 134 116 280 134 153-17 247-132 247-325 0-266-202-324-568-327-367 4-568 62-568 327 0 193 95 308 247 325z",
      "M482 822c13 1 27 2 41 2 149-0 211-97 280-127-13-5-25-9-39-9-0 0-1-0-1-0-0 0-1 0-1 0-81 0-134 116-280 134z",
      "M803 169c13-0 26-0 39-0 0 0 1 0 1 0 0 0 0 0 0 0 0-0 1-0 1-0 392 0 607 53 607 328 0 210-112 328-289 328-13-0-26-1-38-2 153-17 247-132 247-325 0-266-202-324-568-327 0 0 0 0 0 0z",
      "M803 697c69 30 130 127 280 127 14 0 28-1 41-2-147-18-199-134-280-134-0 0-1-0-1-0-0 0-1 0-1 0-14 0-26 3-39 9z",
      "M482 822c-12 1-25 2-38 2-177 0-289-118-289-328 0-275 216-328 607-328 0 0 1 0 1 0 0 0 0 0 0 0 0-0 1-0 1-0 13 0 26 0 39 0-367 4-568 62-568 327 0 193 95 308 247 325z",
      "M929 246c0 0 6 0 6 0 18 7 11 3 22 12 3 3 3 3 14 14 0 0 308 308 308 308 12 12 12 12 14 14 16 16 16 43 0 60-16 16-43 16-60 0 0 0-337-337-337-337-16-16-16-43 0-60 10-10 18-11 32-12z",
      "M801 245c23 0 42 19 42 42 0 336 0 223 0 337 0 23-19 42-42 42-23 0-42-19-42-42 0 0 0-337 0-337 0-23 19-42 42-42z",
      "M346 246c18 7 11 3 22 12 0 0 139 139 139 139s124-124 124-124c12-12 12-12 14-14 10-10 18-11 32-12 0 0 6 0 6 0 18 7 11 3 22 12 16 16 16 43 0 60-3 3-3 3-14 14 0 0-124 124-124 124s139 139 139 139c16 16 16 43 0 60-16 16-43 16-60 0 0 0-139-139-139-139s-65 65-65 65c0 0-60 60-60 60-12 12-12 12-14 14-16 16-43 16-60 0-16-16-16-43 0-60 3-3 3-3 14-14 0 0 124-124 124-124s-139-139-139-139c-16-16-16-43 0-60 10-10 18-11 32-12 0 0 6 0 6 0z"
    ],
    c: [
      "rgb(0, 0, 0)",
      "rgb(251, 237, 33)",
      "rgb(140, 198, 63)",
      "rgb(140, 198, 63)",
      "rgb(255, 28, 36)",
      "rgb(255, 28, 36)",
      "rgb(61, 168, 244)",
      "rgb(140, 198, 63)",
      "rgb(255, 28, 36)"
    ],
    w: 1600
  },
  blueprint: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z",
      "M128 0c0 0 0 129 0 129s305 0 305 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s27 0 27 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s58 0 58 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s27 0 27 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s71 0 71 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s108 0 108 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s123 0 123 0c0 0 0-129 0-129s4 0 4 0c0 0 0 129 0 129s150 0 150 0c0 0 0 4 0 4s-150 0-150 0c0 0 0 305 0 305s150 0 150 0c0 0 0 4 0 4s-150 0-150 0c0 0 0 54 0 54s150 0 150 0c0 0 0 4 0 4s-150 0-150 0c0 0 0 380 0 380s150 0 150 0c0 0 0 4 0 4s-150 0-150 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-123 0-123 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-108 0-108 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-71 0-71 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-27 0-27 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-58 0-58 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-27 0-27 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-305 0-305 0c0 0 0 141 0 141s-4 0-4 0c0 0 0-141 0-141s-123 0-123 0c0 0 0-4 0-4s123 0 123 0c0 0 0-380 0-380s-123 0-123 0c0 0 0-4 0-4s123 0 123 0c0 0 0-54 0-54s-123 0-123 0c0 0 0-4 0-4s123 0 123 0c0 0 0-305 0-305s-123 0-123 0c0 0 0-4 0-4s123 0 123 0c0 0 0-129 0-129s4 0 4 0zM870 500c0 0-123 0-123 0s0 380 0 380c0 0 123 0 123 0s0-380 0-380zM743 500c0 0-108 0-108 0s0 380 0 380c0 0 108 0 108 0s0-380 0-380zM631 500c0 0-71 0-71 0s0 380 0 380c0 0 71 0 71 0s0-380 0-380zM556 500c0 0-27 0-27 0s0 380 0 380c0 0 27 0 27 0s0-380 0-380zM525 500c0 0-58 0-58 0s0 380 0 380c0 0 58 0 58 0s0-380 0-380zM464 500c0 0-27 0-27 0s0 380 0 380c0 0 27 0 27 0s0-380 0-380zM433 500c0 0-305 0-305 0s0 380 0 380c0 0 305 0 305 0s0-380 0-380zM525 442c0 0-58 0-58 0s0 54 0 54c0 0 58 0 58 0s0-54 0-54zM870 442c0 0-123 0-123 0s0 54 0 54c0 0 123 0 123 0s0-54 0-54zM631 442c0 0-71 0-71 0s0 54 0 54c0 0 71 0 71 0s0-54 0-54zM433 442c0 0-305 0-305 0s0 54 0 54c0 0 305 0 305 0s0-54 0-54zM743 442c0 0-108 0-108 0s0 54 0 54c0 0 108 0 108 0s0-54 0-54zM556 442c0 0-27 0-27 0s0 54 0 54c0 0 27 0 27 0s0-54 0-54zM464 442c0 0-27 0-27 0s0 54 0 54c0 0 27 0 27 0s0-54 0-54zM870 133c0 0-123 0-123 0s0 305 0 305c0 0 123 0 123 0s0-305 0-305zM743 133c0 0-108 0-108 0s0 305 0 305c0 0 108 0 108 0s0-305 0-305zM631 133c0 0-71 0-71 0s0 305 0 305c0 0 71 0 71 0s0-305 0-305zM556 133c0 0-27 0-27 0s0 305 0 305c0 0 27 0 27 0s0-305 0-305zM525 133c0 0-58 0-58 0s0 305 0 305c0 0 58 0 58 0s0-305 0-305zM464 133c0 0-27 0-27 0s0 305 0 305c0 0 27 0 27 0s0-305 0-305zM433 133c0 0-305 0-305 0s0 305 0 305c0 0 305 0 305 0s0-305 0-305z",
      "M162 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z",
      "M496 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z",
      "M591 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z",
      "M609 498c13 0 24 11 24 24 0 0 0 122 0 122 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-122 0-122 0-13 11-24 24-24 0 0 79 0 79 0 13 0 24 11 24 24 0 0 0 122 0 122 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-122 0-122 0-13 11-24 24-24 0 0 79 0 79 0z",
      "M769 881c-13 0-24-11-24-24 0 0 0-335 0-335 0-13 11-24 24-24 0 0 79 0 79 0 13 0 24 11 24 24 0 0 0 335 0 335 0 13-11 24-24 24 0 0-79 0-79 0z",
      "M680 953c-22-45-26-53-46-94-2-4-8-5-12-2-21 20-42 40-63 60-5 4-12 1-12-5 0 0 0-323 0-323 0-6 7-9 12-6 84 65 169 129 253 194 5 4 3 12-3 13-28 5-57 10-85 15-5 1-7 6-5 10 21 43 42 86 63 130 2 4 0 8-3 10 0 0-72 37-72 37-4 2-8 0-10-3 0 0-17-35-17-35zM632 812c3-2 7-2 8 1 0 0 69 142 69 142 1 3 4 4 7 2 10-5 20-10 29-15 3-1 4-4 2-7-23-47-46-95-70-142-2-3 0-7 4-7 0 0 68-12 68-12 4-1 6-6 2-9-57-44-114-87-171-131-3-3-8-0-8 4 0 0 0 217 0 217 0 5 5 7 9 4 13-13 16-15 34-32 0 0 16-15 16-15z"
    ],
    c: [
      "rgb(78, 144, 235)",
      "rgb(166, 200, 246)",
      "rgb(166, 200, 246)",
      "rgb(166, 200, 246)",
      "rgb(166, 200, 246)",
      "rgb(166, 200, 246)",
      "rgb(166, 200, 246)",
      "rgb(255, 255, 255)"
    ]
  },
  xinie: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z",
      "M927 741c0 12-10 22-22 22-174 0-116 0-175 0-12 0-22-10-22-22s10-22 22-22c0 0 175 0 175 0 12 0 22 10 22 22z",
      "M927 916c0 12-10 22-22 22-174 0-116 0-175 0-12 0-22-10-22-22s10-22 22-22c0 0 175 0 175 0 12 0 22 10 22 22z",
      "M927 828c0 12-10 22-22 22-174 0-116 0-175 0-12 0-22-10-22-22s10-22 22-22c0 0 175 0 175 0 12 0 22 10 22 22z",
      "M664 719c12 0 22 10 22 22 0 174 0 116 0 175 0 12-10 22-22 22s-22-10-22-22c0 0 0-175 0-175 0-12 10-22 22-22z",
      "M426 719c0 0 3 0 3 0 9 4 6 1 11 6 1 1 1 1 8 8 0 0 160 160 160 160 6 6 6 6 8 8 9 9 9 22 0 31-9 9-22 9-31 0 0 0-175-175-175-175-9-9-9-22 0-31 5-5 9-6 16-6z",
      "M359 719c12 0 22 10 22 22 0 174 0 116 0 175 0 12-10 22-22 22-12 0-22-10-22-22 0 0 0-175 0-175 0-12 10-22 22-22z",
      "M123 719c9 4 6 1 11 6 0 0 72 72 72 72s64-64 64-64c6-6 6-6 8-8 5-5 9-6 16-6 0 0 3 0 3 0 9 4 6 1 11 6 9 9 9 22 0 31-1 1-1 1-8 8 0 0-64 64-64 64s72 72 72 72c9 9 9 22 0 31-9 9-22 9-31 0 0 0-72-72-72-72s-34 34-34 34c0 0-31 31-31 31-6 6-6 6-8 8-9 9-22 9-31 0s-9-22 0-31c1-1 1-1 8-8 0 0 64-64 64-64s-72-72-72-72c-9-9-9-22 0-31 5-5 9-6 16-6 0 0 3 0 3 0z",
      "M640 714c0 0-18-8-30-25-12-17-6-28-6-28s-22 18-9 36c13 18 46 17 46 17z",
      "M621 636c0 0 64-20 64 4 0 14-11 27-29 27s-45-20-45-32c-0-12 9-24 9-24s-23 10-22 25c1 16 11 36 58 36 27 0 49-6 49-31 0-18-20-23-40-23-20 0-43 18-43 18z",
      "M672 614z",
      "M540 306c0 0 61-120 61-120s-3 31 1 77c1 12 3 21 6 28 0 0-68 15-68 15z",
      "M624 85c0 0 12-19 57-20s80 36 81 74c1 38-15 56-15 86 0 30 54 39 54 39s-42 47-80 47c-26 0-53-44-54-81-0-37 29-60 33-94 6-49-76-52-76-52z",
      "M593 63c29 14 35 61 14 105-21 44-62 68-91 54-29-14-35-61-14-105s62-68 91-54z",
      "M477 335c0 0-42 137-123 139-81 2-58-118-66-125-8-8-40-26-40-26s71 26 93 19c22-7 26-16 26-16s-50 111 6 108c56-3 104-98 104-98z",
      "M710 290c0 0 48 28 46 67-1 25-114 61-115 93-2 32 29 38 47 37 18-0 37-9 37-9s-63 10-64-18c-2-42 152-9 151-78s-101-92-101-92z",
      "M624 81z",
      "M493 324c0 0-40 150 7 210 83 106 205 40 205 40s-102 9-99-70c3-110 96-228 96-228s-209 47-209 47z",
      "M716 568c0 0 63-31 26-55-42-27-86 29-86 29s39-27 60-12c21 15 0 38 0 38z",
      "M314 245c76 0 137 16 137 37s-61 37-137 37c-76 0-137-16-137-37s61-37 137-37z",
      "M314 205c76 0 137 16 137 37s-61 37-137 37c-76 0-137-16-137-37s61-37 137-37z",
      "M314 165c76 0 137 16 137 37s-61 37-137 37c-76 0-137-16-137-37s61-37 137-37z"
    ],
    c: [
      "rgb(64, 64, 64)",
      "rgb(251, 237, 33)",
      "rgb(251, 237, 33)",
      "rgb(251, 237, 33)",
      "rgb(255, 147, 29)",
      "rgb(61, 168, 244)",
      "rgb(140, 198, 63)",
      "rgb(255, 28, 36)",
      "rgb(255, 147, 29)",
      "rgb(255, 147, 29)",
      "rgb(170, 170, 170)",
      "rgb(251, 237, 33)",
      "rgb(255, 147, 29)",
      "rgb(251, 237, 33)",
      "rgb(251, 237, 33)",
      "rgb(251, 237, 33)",
      "rgb(0, 242, 36)",
      "rgb(251, 237, 33)",
      "rgb(255, 147, 29)",
      "rgb(255, 28, 36)",
      "rgb(140, 198, 63)",
      "rgb(61, 168, 244)"
    ]
  },
  xinjsUiColor: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z",
      "M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z",
      "M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z",
      "M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z",
      "M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z",
      "M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z",
      "M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z",
      "M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z",
      "M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z",
      "M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"
    ],
    c: [
      "rgb(64, 64, 64)",
      "rgb(255, 28, 36)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(140, 198, 63)",
      "rgb(61, 168, 244)",
      "rgb(255, 147, 29)",
      "rgb(251, 237, 33)",
      "rgb(255, 255, 255)",
      "rgb(0, 0, 0)"
    ]
  },
  xinjsUi: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z",
      "M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0z",
      "M516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z",
      "M516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31z",
      "M611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z",
      "M182 131c13 5 8 2 16 9 0 0 102 102 102 102s91-91 91-91c9-9 9-9 11-11 8-7 13-8 23-9 0 0 4 0 4 0 13 5 8 2 16 9 12 12 12 32 0 44-2 2-2 2-11 11 0 0-91 91-91 91s102 102 102 102c12 12 12 32 0 44-12 12-32 12-44 0 0 0-102-102-102-102s-48 48-48 48c0 0-44 44-44 44-9 9-9 9-11 11-12 12-32 12-44 0-12-12-12-32 0-44 2-2 2-2 11-11 0 0 91-91 91-91s-102-102-102-102c-12-12-12-32 0-44 8-7 13-8 23-9 0 0 4 0 4 0zM516 131c17 0 31 14 31 31 0 0 0 248 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9zM516 131c17 0 31 14 31 31 0 247 0 164 0 248 0 17-14 31-31 31-17 0-31-14-31-31 0 0 0-248 0-248 0-17 14-31 31-31zM611 131c0 0 4 0 4 0 13 5 8 2 16 9 2 2 2 2 11 11 0 0 226 226 226 226 9 9 9 9 11 11 12 12 12 32 0 44-12 12-32 12-44 0 0 0-248-248-248-248-12-12-12-32 0-44 8-7 13-8 23-9z",
      "M653 498c0 0 0 146 0 146 0 140-114 254-254 254-140 0-254-114-254-254 0 0 0-146 0-146s127 0 127 0c0 0 0 146 0 146 0 70 57 127 127 127 70 0 127-57 127-127 0 0 0-146 0-146s127 0 127 0z",
      "M765 881c0 0 0-384 0-384s127 0 127 0c0 0 0 384 0 384s-127 0-127 0z",
      "M720 995c-24-48-47-96-71-145-27 26-55 53-82 79 0-118 0-237 0-355 93 71 185 142 278 213-37 7-74 13-111 20 24 48 47 96 71 145-28 14-57 29-85 43 0 0 0 0 0 0z",
      "M657 807c25 51 50 102 75 153 13-7 26-13 38-20-25-51-50-102-75-153 29-5 58-10 86-15-63-48-126-96-188-144 0 80 0 160 0 240 21-20 42-41 64-61 0 0 0 0 0 0z"
    ],
    c: [
      "rgb(237, 242, 221)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(8, 131, 87)",
      "rgb(236, 243, 221)",
      "rgb(8, 131, 87)"
    ]
  },
  cmy: {
    p: [
      "M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z",
      "M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z",
      "M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z",
      "M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z",
      "M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z",
      "M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z",
      "M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"
    ],
    c: [
      "rgb(86, 206, 255)",
      "rgb(20, 248, 0)",
      "rgb(249, 255, 44)",
      "rgb(0, 0, 0)",
      "rgb(252, 0, 0)",
      "rgb(1, 6, 255)",
      "rgb(241, 76, 255)"
    ]
  },
  rgb: {
    p: [
      "M302 442c-11-27-17-56-17-86 0-126 103-229 229-229s229 103 229 229c0 31-6 60-17 87-12-2-24-3-37-3-72 0-136 33-178 85-42-52-106-85-178-85-11 0-21 1-32 2z",
      "M478 582c-80-13-146-67-175-140 10-1 21-2 32-2 72 0 136 33 178 85-14 17-26 37-34 58z",
      "M512 813c-42 52-106 85-178 85-126 0-229-103-229-229 0-116 86-211 197-227 30 73 96 127 175 140-11 27-17 56-17 87 0 55 19 105 51 144z",
      "M547 582c-10 1-21 2-32 2-13 0-25-1-37-3 9-21 20-40 34-58 14 18 26 37 35 58 0 0 0 0 0 0z",
      "M478 582c-11 27-17 56-17 87 0 55 19 105 51 144 32-39 51-90 51-144 0-30-6-59-17-86-10 1-21 2-32 2-13 0-25-1-37-3z",
      "M547 582c82-11 150-66 180-140-12-2-24-3-37-3-72 0-136 33-178 85 14 18 26 37 35 58 0 0 0 0 0 0z",
      "M512 813c42 52 106 85 178 85 126 0 229-103 229-229 0-114-83-208-192-226-30 74-98 129-180 140 11 27 17 56 17 86 0 55-19 105-51 144 0 0 0 0 0 0z"
    ],
    c: [
      "rgb(248, 14, 0)",
      "rgb(253, 0, 255)",
      "rgb(44, 131, 255)",
      "rgb(255, 255, 255)",
      "rgb(0, 219, 255)",
      "rgb(250, 255, 0)",
      "rgb(0, 204, 3)"
    ]
  },
  xinjsColor: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11 0 0 21 21 21 21 3 3 5 7 5 11 0 0 0 928 0 928 0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14 0 0-7 7-7 7-3 3-7 5-11 5 0 0-928 0-928 0-4 0-8-2-11-5-4-4-7-7-11-11 0 0-21-21-21-21-3-3-5-7-5-11 0 0 0-928 0-928 0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14 0 0 7-7 7-7 3-3 7-5 11-5 0 0 928 0 928 0z",
      "M125 308c8 3 5 1 10 5 0 0 65 65 65 65s58-58 58-58c6-6 6-6 7-7 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7 0 0-58 58-58 58s65 65 65 65c8 8 8 20 0 28-8 8-20 8-28 0 0 0-65-65-65-65s-30 30-30 30c0 0-28 28-28 28-6 6-6 6-7 7-8 8-20 8-28 0-8-8-8-20 0-28 1-1 1-1 7-7 0 0 58-58 58-58s-65-65-65-65c-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0z",
      "M337 307c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z",
      "M337 307c11 0 20 9 20 20 0 156 0 104 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z",
      "M660 464c11 0 20 9 20 20 0 0 0 216 0 216 0 11-9 20-20 20s-20-9-20-20c0 0 0-216 0-216 0-11 9-20 20-20z",
      "M396 308c0 0 3 0 3 0 8 3 5 1 10 5 1 1 1 1 7 7 0 0 143 143 143 143 6 6 6 6 7 7 8 8 8 20 0 28-8 8-20 8-28 0 0 0-157-157-157-157-8-8-8-20 0-28 5-5 8-5 15-5z",
      "M279 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-2 2-3 3 0 0-38 38-38 38s-1 1-1 1c0 0-21 21-21 21s-2 2-2 2c0 0 65 65 65 65 8 8 8 20 0 28-8 8-20 8-28 0-1-1-1-1-7-7 0 0-58-58-58-58s-26 26-26 26c-3 3-7 7-10 10 0 0-28 28-28 28-8 8-20 8-28 0-8-8-8-20 0-28 0 0 65-65 65-65s-58-58-58-58c-2-2-4-4-6-6 0 0-0-0-0-0-8-8-8-20 0-28 5-5 8-5 15-5 0 0 3 0 3 0 8 3 5 1 10 5 0 0 65 65 65 65 22-22 43-43 65-65 5-5 8-5 15-5z",
      "M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z",
      "M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z",
      "M337 523c11 0 20 9 20 20 0 0 0 157 0 157 0 11-9 20-20 20-11 0-20-9-20-20 0 0 0-157 0-157 0-11 9-20 20-20z",
      "M553 523c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28-1 1-1 1-7 7-50 50-100 100-150 150-8 8-20 8-28 0-8-8-8-20 0-28 1-1 2-2 3-3 51-52 103-103 154-154 5-5 8-5 15-5z",
      "M689 307c11 0 20 9 20 20 0 0 0 137 0 137 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-59 0-59 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 51 0 51 0s8-8 8-8c0 0 0-129 0-129 0-11 9-20 20-20z",
      "M905 464c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z",
      "M905 533c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z",
      "M905 395c11 0 20 9 20 20 0 11-9 20-20 20 0 0-157 0-157 0-11 0-20-9-20-20 0-11 9-20 20-20 0 0 157 0 157 0z",
      "M906 308c0 0 3 0 3 0 8 3 5 1 10 5 8 8 8 20 0 28 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20s9-20 20-20c0 0 129 0 129 0s14-14 14-14c5-5 8-5 15-5z",
      "M905 601c11 0 20 9 20 20 0 0 0 59 0 59 0 5-2 10-6 14 0 0-20 20-20 20-4 4-9 6-14 6 0 0-137 0-137 0-11 0-20-9-20-20 0 0 0-78 0-78 0-11 9-20 20-20 0 0 157 0 157 0zM885 640c0 0-118 0-118 0s0 39 0 39c0 0 109 0 109 0s8-8 8-8c0 0 0-31 0-31z"
    ],
    c: [
      "rgb(237, 243, 221)",
      "rgb(8, 131, 88)",
      "rgb(8, 131, 88)",
      "rgb(8, 131, 88)",
      "rgb(155, 205, 188)",
      "rgb(8, 131, 88)",
      "rgb(155, 205, 188)",
      "rgb(8, 131, 88)",
      "rgb(8, 131, 88)",
      "rgb(155, 205, 188)",
      "rgb(155, 205, 188)",
      "rgb(8, 131, 88)",
      "rgb(8, 131, 88)",
      "rgb(155, 205, 188)",
      "rgb(8, 131, 88)",
      "rgb(8, 131, 88)",
      "rgb(155, 205, 188)"
    ]
  },
  xinColor: {
    p: [
      "M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11-4 4-7 7-11 11-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11 5-5 9-9 14-14l7-7c3-3 7-5 11-5h928z",
      "M589 862c13 13 34 13 48 0l104-104 141-141 17-17 7-7c13-13 13-34-0-48-13-13-34-13-48-0l-269 269c-13 13-13 34 0 48zM600 851c-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-11 11-19 19-162 162-53 53-24 24c-7 7-18 7-25-0z",
      "M512 871c19 0 34-15 34-34v-270c0-19-15-34-34-34-19 0-34 15-34 34v270c0 19 15 34 34 34zM512 855c-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18 10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18z",
      "M436 862c13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0zM425 851c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0 7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0z",
      "M589 170c13-13 34-13 48-0 190 190 205 205 269 269 13 13 13 34-0 48-13 13-34 13-48 0l-269-269c-13-13-13-34 0-48z",
      "M512 158c19 0 34 15 34 34 0 269 0 179 0 270 0 19-15 34-34 34-19 0-34-15-34-34v-270c0-19 15-34 34-34z",
      "M388 168c13-13 34-13 48 0 13 13 13 34 0 48l-112 112 112 112c13 13 13 34 0 48-13 13-34 13-48 0l-112-112-110 110c-13 13-34 13-48-0-13-13-13-34-1-47l1-1 110-110-110-110c-13-13-13-34 0-48 13-13 34-13 48-0l110 110 112-112z"
    ],
    c: [
      "rgb(9, 131, 88)",
      "rgb(237, 243, 221)",
      "rgb(237, 243, 221)",
      "rgb(237, 243, 221)",
      "rgb(237, 243, 221)",
      "rgb(237, 243, 221)",
      "rgb(237, 243, 221)"
    ]
  },
  sortDescending: "M723 469c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43zM603 725c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43zM856 213c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43z",
  sortAscending: "M301 555c256 0 179 0 435 0 24 0 43-19 43-43s-19-43-43-43c-256 0-179 0-435 0-24 0-43 19-43 43s19 43 43 43zM421 299c256 0-61 0 195 0 24 0 43-19 43-43s-19-43-43-43c-256 0 61 0-195 0-24 0-43 19-43 43s19 43 43 43zM168 811c256 0 432 0 688 0 24 0 43-19 43-43s-19-43-43-43c-256 0-432 0-688 0-24 0-43 19-43 43s19 43 43 43z",
  sidebar: "M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM427 853v-683h384c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13zM341 171v683h-128c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",
  calendar: "M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",
  editDoc: "M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",
  edit: "M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",
  web: "M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",
  info: "M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM555 683v-171c0-24-19-43-43-43s-43 19-43 43v171c0 24 19 43 43 43s43-19 43-43zM512 384c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  loading: "M469 85v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM469 768v171c0 24 19 43 43 43s43-19 43-43v-171c0-24-19-43-43-43s-43 19-43 43zM180 241l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM663 723l121 121c17 17 44 17 60 0s17-44 0-60l-121-121c-17-17-44-17-60 0s-17 44 0 60zM85 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM768 555h171c24 0 43-19 43-43s-19-43-43-43h-171c-24 0-43 19-43 43s19 43 43 43zM241 844l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0zM723 361l121-121c17-17 17-44 0-60s-44-17-60 0l-121 121c-17 17-17 44 0 60s44 17 60 0z",
  mail: "M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",
  resize: "M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",
  menu: "M128 555h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 299h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43zM128 811h768c24 0 43-19 43-43s-19-43-43-43h-768c-24 0-43 19-43 43s19 43 43 43z",
  message: "M939 640v-427c0-35-14-67-38-90s-55-38-90-38h-597c-35 0-67 14-90 38s-38 55-38 90v683c0 11 4 22 13 30 17 17 44 17 60 0l158-158h494c35 0 67-14 90-38s38-55 38-90zM853 640c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22 5-30 13l-98 98v-580c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",
  blog: {
    p: [
      "M848 517c0-23 19-42 42-43l1-0c23 0 42 19 43 42l0 1v128c0 35-14 67-37 90l-1 1c-23 23-55 37-89 38l-1 0h-494l-158 158c-17 17-44 17-60 0-8-8-12-19-12-29l-0-1v-683c0-35 14-67 38-90 23-23 55-37 89-38l1-0h299c24 0 43 19 43 43 0 23-19 42-42 43l-1 0h-299c-12 0-22 5-30 12l-0 0c-8 8-12 18-12 29l-0 1v580l98-98c8-8 18-12 29-12l1-0h512c12 0 22-5 30-13 8-8 12-18 12-29l0-1v-128zM797 39l-352 352c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l352-352c26-26 39-60 39-94s-13-68-39-94c-26-26-60-39-94-39s-68 13-94 39zM857 99c9-9 22-14 34-14s24 5 34 14c9 9 14 22 14 34s-5 24-14 34l-344 344-90 23 23-90 344-344z",
      "M292 251h163c24 0 43 19 43 43s-19 43-43 43h-163c-24 0-43-19-43-43s19-43 43-43z",
      "M292 407h67c24 0 43 19 43 43s-19 43-43 43h-67c-24 0-43-19-43-43s19-43 43-43z"
    ]
  },
  phone: "M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",
  pieChart: "M866 661c-41 98-118 169-209 206s-196 39-294-2-169-118-206-209-39-196 2-294c40-94 113-165 200-202 22-9 31-35 22-56s-35-31-56-22c-106 46-196 132-245 247-50 119-48 248-3 359s133 205 252 256 248 48 359 3 205-133 256-252c9-22-1-47-23-56s-47 1-56 23zM894 469h-339v-339c89 10 169 50 229 110s100 140 110 229zM981 512c0-130-53-247-137-332s-202-137-332-137c-24 0-43 19-43 43v427c0 24 19 43 43 43h427c24 0 43-19 43-43z",
  search: "M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60z",
  send: "M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",
  server: "M171 43c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 128h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM171 555c-35 0-67 14-90 38s-38 55-38 90v171c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90v-171c0-35-14-67-38-90s-55-38-90-38zM171 640h683c12 0 22 5 30 13s13 18 13 30v171c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-171c0-12 5-22 13-30s18-13 30-13zM256 299c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43zM256 811c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  graphUp: "M725 299h153l-302 302-183-183c-17-17-44-17-60 0l-320 320c-17 17-17 44 0 60s44 17 60 0l290-290 183 183c17 17 44 17 60 0l333-333v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43z",
  copy: "M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",
  alignCenter: "M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",
  alignLeft: "M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",
  alignRight: "M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",
  fontBold: "M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",
  blockOutdent: "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",
  blockIndent: "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",
  fontItalic: "M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",
  listBullet: "M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",
  listNumber: "M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",
  fontUnderline: "M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",
  airplay: "M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",
  bell: "M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",
  bellOff: "M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",
  bookmark: "M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",
  camera: "M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",
  check: "M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",
  chevronDown: "M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",
  chevronLeft: "M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",
  chevronRight: "M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",
  chevronUp: "M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",
  code: "M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",
  undo: "M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",
  redo: "M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",
  crop: "M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",
  database: "M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",
  download: "M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",
  downloadCloud: "M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",
  externalLink: "M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",
  eye: "M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
  eyeOff: "M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",
  fastForward: "M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",
  file: "M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",
  fileMinus: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",
  filePlus: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
  fileText: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",
  filter: "M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",
  flag: "M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",
  folder: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",
  folderMinus: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",
  folderPlus: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
  help: "M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  home: "M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",
  image: "M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",
  layers: "M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",
  link: "M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",
  lock: "M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",
  logIn: "M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",
  logOut: "M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",
  map: "M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",
  mapPin: "M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
  maximize: "M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",
  messageCircle: "M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",
  mic: "M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",
  micOff: "M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",
  minimize: "M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",
  minus: "M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",
  moon: "M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",
  more: "M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",
  moreVertical: "M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",
  mousePointer: "M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",
  move: "M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",
  music: "M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
  paperclip: "M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",
  pause: "M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",
  play: "M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",
  plus: "M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",
  refresh: "M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",
  rewind: "M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",
  settings: "M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",
  share: "M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",
  start: "M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",
  end: "M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",
  forbidden: "M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",
  square: "M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",
  star: "M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40-122-247z",
  sun: "M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",
  tag: "M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  terminal: "M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",
  thumbsDown: "M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",
  thumbsUp: "M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",
  trash: "M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",
  unlock: "M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",
  upload: "M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",
  uploadCloud: "M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",
  user: "M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",
  userMinus: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",
  userPlus: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",
  userX: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",
  users: "M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",
  video: "M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",
  videoOff: "M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",
  volume: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",
  volumeLow: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",
  volumeHigh: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",
  volumeOff: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",
  wifi: "M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  wifiOff: "M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
  x: "M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",
  zoomIn: "M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
  zoomOut: "M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",
  discord: {
    p: [
      "M1145 86c-81-38-174-68-272-85l-7-1c-11 19-23 43-34 68l-2 5c-46-7-100-12-155-12s-108 4-160 12l6-1c-13-29-25-53-38-76l2 4c-105 18-198 48-286 89l7-3c-176 261-224 516-200 766v0c98 73 211 131 334 169l8 2c26-34 50-73 71-113l2-5c-45-17-83-35-119-57l3 2c10-7 19-14 28-21 100 48 218 76 342 76s242-28 347-78l-5 2c9 8 19 15 28 21-33 20-71 38-111 53l-5 2c23 45 47 84 75 120l-2-2c131-40 244-99 345-174l-3 2c28-291-48-543-201-767zM451 698c-67 0-122-60-122-135s53-135 121-135 123 61 122 135-54 135-122 135zM900 698c-67 0-122-60-122-135s53-135 122-135 123 61 121 135-54 135-121 135z"
    ],
    w: 1351
  },
  tiktok: "M535 1c56-1 111-0 167-1 3 65 27 132 75 178 48 47 115 69 181 76v172c-61-2-123-15-179-41-24-11-47-25-69-40-0 125 0 249-1 373-3 60-23 119-58 168-56 82-153 135-252 137-61 3-122-13-174-44-86-51-147-144-156-244-1-21-1-43-0-64 8-81 48-159 110-212 71-61 170-91 262-73 1 63-2 126-2 189-42-14-92-10-129 16-27 17-47 44-58 75-9 22-6 46-6 69 10 70 78 129 149 122 48-0 93-28 118-69 8-14 17-29 17-45 4-76 3-152 3-229 0-172-0-343 1-515z",
  instagram: {
    p: [
      "M512 92c137 0 153 1 207 3 50 2 77 11 95 18 24 9 41 20 59 38 18 18 29 35 38 59 7 18 15 45 18 95 2 54 3 70 3 207s-1 153-3 207c-2 50-11 77-18 95-9 24-20 41-38 59-18 18-35 29-59 38-18 7-45 15-95 18-54 2-70 3-207 3s-153-1-207-3c-50-2-77-11-95-18-24-9-41-20-59-38-18-18-29-35-38-59-7-18-15-45-18-95-2-54-3-70-3-207s1-153 3-207c2-50 11-77 18-95 9-24 20-41 38-59 18-18 35-29 59-38 18-7 45-15 95-18 54-2 70-3 207-3zM512 0c-139 0-156 1-211 3-54 2-92 11-124 24-34 13-62 31-91 59-29 28-46 57-59 91-13 33-21 70-24 124-2 55-3 72-3 211s1 156 3 211c2 54 11 92 24 124 13 34 31 62 59 91 28 28 57 46 91 59 33 13 70 21 124 24 55 2 72 3 211 3s156-1 211-3c54-2 92-11 124-24 34-13 62-31 91-59s46-57 59-91c13-33 21-70 24-124 2-55 3-72 3-211s-1-156-3-211c-2-54-11-92-24-124-13-34-30-63-59-91-28-28-57-46-91-59-33-13-70-21-124-24-55-3-72-3-211-3v0z",
      "M512 249c-145 0-263 118-263 263s118 263 263 263 263-118 263-263c0-145-118-263-263-263zM512 683c-94 0-171-76-171-171s76-171 171-171c94 0 171 76 171 171s-76 171-171 171z",
      "M847 239c0 34-27 61-61 61s-61-27-61-61c0-34 27-61 61-61s61 27 61 61z"
    ]
  },
  linkedin: "M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h832c53 0 96-43 96-96v-832c0-53-43-96-96-96zM384 832h-128v-448h128v448zM320 320c-35 0-64-29-64-64s29-64 64-64c35 0 64 29 64 64s-29 64-64 64zM832 832h-128v-256c0-35-29-64-64-64s-64 29-64 64v256h-128v-448h128v79c26-36 67-79 112-79 80 0 144 72 144 160v288z",
  eyedropper: "M987 37c-50-50-131-50-181 0l-172 172-121-121-136 136 106 106-472 472c-8 8-11 19-10 29h-0v160c0 18 14 32 32 32h160c0 0 3 0 4 0 9 0 18-4 25-11l472-472 106 106 136-136-121-121 172-172c50-50 50-131 0-181zM173 960h-109v-109l470-470 109 109-470 470z",
  heart: {
    p: [
      "M1088 358c0 86-37 164-96 218h0l-320 320c-32 32-64 64-96 64s-64-32-96-64l-320-320c-59-54-96-131-96-218 0-162 132-294 294-294 86 0 164 37 218 96 54-59 131-96 218-96 162 0 294 132 294 294z"
    ],
    w: 1152
  },
  facebook: "M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",
  twitter: "M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",
  youtube: "M1014 307c0 0-10-71-41-102-39-41-83-41-103-43-143-10-358-10-358-10h-0c0 0-215 0-358 10-20 2-64 3-103 43-31 31-41 102-41 102s-10 83-10 166v78c0 83 10 166 10 166s10 71 41 102c39 41 90 39 113 44 82 8 348 10 348 10s215-0 358-11c20-2 64-3 103-43 31-31 41-102 41-102s10-83 10-166v-78c-0-83-10-166-10-166zM406 645v-288l277 144-277 143z",
  game: {
    p: [
      "M1056 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM576 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM960 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1152 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"
    ],
    w: 1408
  },
  google: "M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",
  github: "M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",
  npm: "M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",
  xr: {
    p: [
      "M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"
    ],
    w: 1600
  },
  xinjs: {
    p: [
      "M937 548c14 14 14 37 0 51l-113 113-178 178c-14 14-37 14-51-0-14-14-14-37 0-51l290-291c14-14 37-14 51 0zM924 560c-7-7-19-7-27-0l-0 0-290 291c-7 7-7 20 0 27 7 7 19 7 27 0l0-0 12-12 21-21 231-232 26-26c7-7 7-20-0-27z",
      "M512 900c20 0 36-16 36-36v-291c0-20-16-36-36-36-20 0-36 16-36 36v291c0 20 16 36 36 36zM511 882c-10 0-19-8-19-19l-0-1v-292c0-11 9-19 19-19 10 0 19 8 19 19l0 1 0 40-0 131-0 121c0 11-9 19-19 19z",
      "M429 889c14-14 14-37 0-52l-121-121 121-121c14-14 14-37 0-52-14-14-37-14-51 0l-121 121-119-119c-14-14-37-14-51 0-14 14-14 37-1 51l1 1 119 119-119 119c-14 14-14 37 0 52 14 14 37 14 51 0l119-119 121 121c14 14 37 14 51 0zM418 876c-7 7-19 7-27 0l-0-0-133-133-131 130c-7 7-20 7-27-0-7-7-7-19-0-27l0-0 131-130-131-131c-7-7-7-19 0-27 7-7 19-7 27-0l0 0 131 130 133-133c7-7 20-7 27 0 7 7 7 19 0 27l-0 0-134 132 134 132c7 7 7 19 0 27l-0 0z",
      "M594 142c14-14 37-14 51-0 205 205 222 221 291 290 14 14 14 37 0 51-14 14-37 14-51 0l-291-290c-14-14-14-37 0-51z",
      "M511 130c20 0 36 16 36 36 0 290 0 193 0 291 0 20-16 36-36 36-20 0-36-16-36-36v-291c0-20 16-36 36-36z",
      "M378 140c14-14 37-14 51 0 14 14 14 37 0 51l-121 120 121 120c14 14 14 37 0 51-14 14-37 14-51 0l-121-121-119 118c-14 14-37 14-51-0-14-14-14-37-1-51l1-1 119-118-119-118c-14-14-14-37 0-51 14-14 37-14 51-0l119 118 121-121z"
    ]
  },
  html5: "M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",
  bug: {
    p: [
      "M933 549c0 20-17 37-37 37h-128c0 71-15 125-38 166l119 119c14 14 14 37 0 51-7 7-17 11-26 11s-19-3-26-11l-113-113s-75 69-172 69v-512h-73v512c-103 0-179-75-179-75l-105 118c-7 8-17 12-27 12-9 0-17-3-25-9-15-14-16-37-3-52l115-130c-20-39-33-90-33-157h-128c-20 0-37-17-37-37s17-37 37-37h128v-168l-99-99c-14-14-14-37 0-51s37-14 51 0l99 99h482l99-99c14-14 37-14 51 0s14 37 0 51l-99 99v168h128c20 0 37 17 37 37zM658 219h-366c0-101 82-183 183-183s183 82 183 183z"
    ],
    w: 951
  }
};

// src/icons.ts
/*!
# icons

<center>
  <xin-icon icon="settings" style="--font-size: 128px"></xin-icon>
  <xin-icon icon="xrColor" style="--font-size: 96px"></xin-icon>
  <xin-icon icon="rgb" style="--font-size: 128px"></xin-icon>
</center>

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

> ### Supported Use Cases
> - inline SVGs that can be styled by CSS (for buttons, etc.)
> - No build process magic needed (it's "just javascript")
> - icons can be rendered  as data urls, e.g. to insert into CSS
> - highly optimized and compressible
> - support for color icons (still allowing with CSS styling)

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 16}),
  div(iconName)
)))
```
```css
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  font-family: Menlo, Monaco, monospace;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
}
```

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

`defineIcon(name: string, icon: IconSpec | string)` adds or replaces your own icons

```
interface IconSpec {
  p: string[]  // paths
  c?: string[] // colors of the paths in p
  w: number    // width of icon
  h: number    // height of icon
}
```

The simplest option is simply to pass the `path` attribute (if the icon has a single path) while more
complex icons can be provide an `IconSpec` structure, specifying multiple paths (and colors if so
desired).

This utility loads SVG files (they should only contain paths with no strokes, transforms, or nesting)
and generates an `IconSpec`. It renders the original icon side-by-side with the `<xin-icon>` version.
**If the icon on the right appears garbled, it probably needs to be simplified**.

```js
const { defineIcon, xinIcon } = xinjsui

const fileInput = preview.querySelector('input')
const icon = preview.querySelector('.icon')
const svgContainer = preview.querySelector('.svg')
const iconSpec = preview.querySelector('textarea')
const simplify = preview.querySelector('.simplify')

function jsObject(o) {
  let json = JSON.stringify(o, null, 2)
  return json.replace(/"(\w+)":/g, '$1:')
}

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    const reader = new FileReader();
    reader.onload = function(e) {
      svgContainer.innerHTML = e.target.result
      const svg = svgContainer.querySelector('svg')
      const paths = Array.from(svg.querySelectorAll('path')).map(path => ({
        p: path.getAttribute('d'),
        c: path.style.fill
      }))
      const isMulticolor = [...new Set(paths.map(path => path.c))].length > 1
      let { width, height } = svg.viewBox.baseVal

      if (simplify.checked) {
        const scale = 1024 / height
        height = 1024
        width = width * scale

        paths.forEach(path => {
          path.p = path.p.replace(/\d+\.\d+/g, x => (Number(x) * scale).toFixed(0))
        })
      }

      if (width === 1024 && height === 1024 && paths.length === 1) {
        iconSpec.value = jsObject(paths[0])
      } else {
        const spec = {
          p: paths.map(path => path.p),
          w: width,
          h: height
        }
        if (isMulticolor) {
          spec.c = paths.map(path => path.c)
        }
        iconSpec.value = jsObject(spec)
        defineIcon('svgLoader', spec)
        icon.setAttribute('icon', 'svgLoader')
        fileInput.value = ''
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
})
```
```html
<div class="svg-loader">
  <label>
    <span>Load an SVG file</span>
    <input accept="image/svg+xml" type="file">
  </label>
  <label style="flex-direction: row">
    <input type="checkbox" class="simplify" checked>
    <span>Scale to 1024 high and round floats?</span>
  </label>
  <div class="side-by-side">
    <label>
      <span>IconSpec</span>
      <textarea></textarea>
    </label>
    <label>
      <span>Icons</span>
      <div class="side-by-side">
        <div class="svg"></div>
        <xin-icon class="icon"></xin-icon>
      </div>
    </label>
  </div>
</div>
```
```css
.preview .svg-loader,
.preview .svg-loader label {
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-direction: column;
}

.preview .svg-loader {
  gap: 10px;
  height: 100%;
}

.preview .svg-loader textarea {
  flex: 1;
  resize: none;
  font-family: Monaco, monospace;
  font-size: 12px;
  line-height: 15px;
}

.preview .side-by-side {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.preview .svg-loader .icon {
  position: relative;
}

.preview .svg-loader svg {
  height: 128px;
  width: 128px;
}

.preview xin-icon:not([icon]) {
  display: none;
}

.preview .svg-loader xin-icon {
  --font-size: 128px;
}
```

## `<xin-icon>`

`<xin-icon>` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

`<xin-icon>` supports four attributes:

- `size` (defaults to 0) if non-zero sets the height of the icon in pixels
- `icon` is the name of the icon
- `color` is the fill color (if you don't want to style it using CSS)
- `stroke` is the stroke color
- `stroke-width` (defaults to 1) is the width of the stroke assuming the icon's viewBox is 1024 units tall but the
  icon is rendered at 32px (so it's multiplied by 32).

> **Aside**: the tool used to build the icon library scales up the viewBox to 1024 tall and then rounds
> all coordinates to nearest integer on the assumption that this is plenty precise enough for icons and
> makes everything smaller and easier to compress.

```html
<xin-icon size="64" icon="game" color="var(--brand-color)"></xin-icon>
<xin-icon size="96" icon="game" color="yellow" stroke="black"></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(345deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
```
```css
xin-icon.demo-2 > svg {
  height: 96px;
}
```

**CSS-to-SVG Gradient** support is work-in-progress and experimental (there seem to be
…issues… with how SVG  gradients behave). The goal is to be able to use CSS gradients
to generate SVG gradients (which are kind of a pain) on-the-fly. Use at your own risk.

## SVGs as data-urls

```js
const { elements } = xinjs
const { icons, svg2DataUrl } = xinjsui

preview.append(
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'none', '#bbb', 3)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'gold', 'orange', 2)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '100px',
      height: '200px',
      content: '" "',
      background: svg2DataUrl(icons.xinjsColor())
    }
  }),
)
```

`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the `<xin-3d>` component to render the XR widget.)

If you're using `SVGElement`s created using the `icons` proxy, you'll want to provide `fill` and/or
`stroke` values, because images loaded via css properties cannot be styled.

## Color Icons

```html
<xin-icon icon="xinjsColor" class="demo-icon"></xin-icon>
<xin-icon icon="xinjsColor" class="demo-icon recolored"></xin-icon>
```
```css
.demo-icon {
  --font-size: 160px
}

.recolored {
  --icon-fill-0: blue;
  --icon-fill-1: white;
  --icon-fill-2: red;
}
```

Each path inside an icon can be individually colored. When the icon is hydrated,
the colors will be assigned to a (minimal) set of CSS-variables (`--icon-fill-0`, etc.)
and these can be overridden in the usual way.

## Missing Icons

If you ask for an icon that isn't defined, the `icons` proxy will print a warning to console
and render a `square` (in fact, `icons.square()`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

Until I wrote this library, I had settled on icomoon.io's system for generating and maintaining
custom icon fonts for managing icons within a project, but this makes exporting UI elements
with icons in them fiddly, and I looked at other UI libraries and found similar issues.

Even when just using this approach for projects over which I had full control, there were issues
with syncing icons with CSS (e.g. if you want to attach an element to a pseudo-element). `icons`
in combination with `svg2DataUrl` solves all these problems.

Basically, I wanted an icon solution that "just works" and this is it.

Internally, icons are stored as javascript path data.

Many of these icons are sourced from [Feather Icons](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

## Is this efficient?

I use [icomoon](https://icomoon.com/app) to manage my icon libraries. Its method of distributing icons
is to create custom fonts and an accompanying stylesheet.

- the iconData file, compressed is ~23kB
- icomoon's equivalent CSS file is ~3kB and the font files are 21kB

But these fonts are less flexible, harder to distribute as part of a library, you need to
distribute three versions for compatibility, and the color icons are very flaky and cannot
be styled.

## Feather Icons Copyright Notice

The MIT License (MIT)

Copyright (c) 2013-2023 Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/
var { svg, path } = Un;
function getIconSpec(name) {
  let data = icon_data_default[name];
  if (data === undefined) {
    if (name) {
      console.warn(`icon ${name} not found`);
    }
    data = icon_data_default.square;
  }
  return typeof data !== "string" ? data : {
    w: 1024,
    h: 1024,
    p: [data]
  };
}
var defineIcon = (name, icon) => {
  icon_data_default[name] = icon;
};
var svg2DataUrl = (svg2, fill, stroke, strokeWidth = 1) => {
  if (fill !== undefined) {
    for (const path2 of [...svg2.querySelectorAll("path")]) {
      path2.setAttribute("fill", fill);
      if (stroke !== undefined) {
        path2.setAttribute("stroke", stroke);
        path2.setAttribute("stroke-width", String(Number(strokeWidth) * 32));
      }
    }
  }
  svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const styled = svg2.querySelectorAll("[style]");
  svg2.removeAttribute("style");
  for (const item of [...styled]) {
    const [color] = item.getAttribute("style")?.match(/rgb\([^)]+\)/) || [];
    item.removeAttribute("style");
    if (color && !fill) {
      item.setAttribute("fill", $.fromCss(color).html);
    }
  }
  const text = encodeURIComponent(svg2.outerHTML);
  return `url(data:image/svg+xml;charset=UTF-8,${text})`;
};
var icons = new Proxy(icon_data_default, {
  get(target, prop) {
    const iconSpec = getIconSpec(prop);
    return iconSpec === undefined ? undefined : (...parts) => {
      const { w: w2, h } = Object.assign({ w: 1024, h: 1024 }, iconSpec);
      return svg({
        viewBox: `0 0 ${w2} ${h}`,
        class: "icon-" + prop.replace(/([a-z])([A-Z])/g, (_2, a2, b2) => a2 + "-" + b2.toLocaleLowerCase()),
        style: {
          height: wn.uiIconHeight("16px")
        }
      }, ...parts, ...iconSpec.p.map((d2, index) => {
        const uniqueColors = Array.from(new Set(iconSpec.c));
        const p2 = iconSpec.c ? path({
          d: d2,
          style: {
            fill: `var(--icon-fill-${uniqueColors.indexOf(iconSpec.c[index])}, ${iconSpec.c[index]})`
          }
        }) : path({ d: d2 });
        return p2;
      }));
    };
  }
});

class SvgIcon extends G {
  icon = "";
  size = 0;
  color = "";
  stroke = "";
  strokeWidth = 1;
  constructor() {
    super();
    this.initAttributes("icon", "size", "color", "stroke", "strokeWidth");
  }
  render() {
    this.textContent = "";
    const style = {};
    if (this.size)
      style.height = this.size;
    if (this.stroke) {
      style.stroke = this.stroke;
      style.strokeWidth = this.strokeWidth * 32;
    }
    if (this.color.match(/linear-gradient/)) {
      const type = this.color.split("-")[0];
      const [, spec] = this.color.match(/[a-z-]+\((.*)\)/) || [];
      const [, direction] = spec.match(/(\d+)deg/) || [];
      const items = spec.match(/(#|rgb|hsl).*?%/g) || [];
      const stops = items.map((item) => {
        const [, color, position] = item.match(/^(.*)\s(\d+%)$/) || [
          "black",
          "100%"
        ];
        return `<stop offset="${position}" stop-color="${$.fromCss(color).html}" ></stop>`;
      }).join("");
      let transform = "";
      if (direction) {
        const angle = parseFloat(direction);
        transform = ` gradientTransform="rotate(${angle.toFixed(0)})"`;
      }
      const defs = Un.defs();
      const id = "g-" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      defs.innerHTML = `<${type}Gradient id="${id}" ${transform}>${stops}</${type}Gradient>`;
      style.fill = `url(#${id})`;
      this.append(icons[this.icon]({ style }, defs));
    } else {
      style.fill = this.color;
      this.append(icons[this.icon]({ style }));
    }
  }
}
var svgIcon = SvgIcon.elementCreator({
  tag: "xin-icon",
  styleSpec: {
    ":host": {
      display: "inline-flex"
    }
  }
});

// src/babylon-3d.ts
/*!
# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A `<xin-3d>` element is initialized with an `engine`, `canvas`, `scene`, and an update-loop.

If you view this example with an XR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

```js
const { b3d, gamepadText, xrControllers, xrControllersText } = xinjsui

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 1, -4),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, -0.5))

    this.loadScene('/', 'xin3d.glb')

    const size = 1024
    const textTexture = new BABYLON.DynamicTexture('Text', size, element.scene)
    const textContext = textTexture.getContext()
    textTexture.update()

    const textMaterial = new BABYLON.StandardMaterial('Text', element.scene)
    textMaterial.diffuseTexture = textTexture
    textMaterial.emissiveTexture = textTexture
    textMaterial.backfaceCulling = false

    const plaque = BABYLON.MeshBuilder.CreatePlane('Plaque', {size: 1}, element.scene)
    plaque.position.x = 0
    plaque.position.y = 2
    plaque.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
    plaque.material = textMaterial

    let controllers
    if (navigator.xr) {
      const xrHelper = await element.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      })
      controllers = xrControllers(xrHelper)
    }

    const interval = setInterval(() => {
      if (document.body.contains(element)) {
        textContext.fillStyle = '#204020'
        textContext.fillRect(0, 0, size, size)
        const text = gamepadText() + '\n' + xrControllersText(controllers)
        const lines = text.split('\n')
        textContext.fillStyle = '#afa'
        textContext.font = '32px monospace'
        for(let i = 0; i < lines.length; i++) {
          const line = lines[i]
          textContext.fillText(line, 40, 70 + i * 40)
        }
        textContext.fillStyle = '#bbb'
        textContext.fillText('xinjs-xr — debug info', 40, 984)
        textTexture.update()
      } else {
        clearInterval(interval)
      }
    }, 100)
  },
}))
```
```css
.preview xin-3d {
  width: 100%;
  height: 100%;
}
```

You can access the `scene` and `engine` properties. You can also assign `sceneCreated`
and `update` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

Both `sceneCreated` and `update` may be `async`. The component will `await` `sceneCreated`
before starting the renderLoop, but `update` is simply passed to babylon, so be careful.

By default, this component loads `babylon.js` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if `BABYLON` is already defined (e.g. if you've bundled it) then it will use that instead.

If you need additional libraries, e.g. `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js` for loading models such as `gltf` and `glb` files, you should load those in `sceneCreated`.

Here's a simple example of a terrain mesh comprising 125k triangles, 50% of which is being scaled using a `profileScale` function that
takes an array of numbers that use a linear profile to change the landform.

```js
const { b3d } = xinjsui
const { MoreMath } = xinjs

const debugCutoff = 0.5
const defaultProfile = [0, 1, 5, 8, 10].map(x => x/10)

const { clamp } = MoreMath
function profileScale(t = 0, bypass = false, profile = defaultProfile) {
  if (bypass) {
    return t
  }
  const count = profile.length - 1
  if (count < 1) {
    throw new Error('profile must be of length ≥ 2')
  }

  const s = clamp(0, (t + 1) / 2, 1)
  const index = Math.floor(s * count)
  const dt = (s - index / count) * count
  const min = profile[index]
  const max = profile[index + 1]
  const p = dt * (max - min) + min
  return 2 * p - 1
}

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const { scene } = element
    const { createNoise2D } = await import('https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm')

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 2))

    const terrain = new BABYLON.Mesh('terrain', scene)
    const vertexData = new BABYLON.VertexData()

    const noise2D = createNoise2D()
    const positions = []
    const indices = []
    const gridSize = 100
    const gridResolution = 250
    const gridPoints = gridResolution + 1
    const noiseScale = 0.03
    const heightScale = 4.5
    terrain.position.y = -5
    const scale = t => t * gridSize / gridResolution - gridSize * 0.5
    for(let x = 0; x <= gridResolution; x++) {
      for(let z = 0; z <= gridResolution; z++) {
        const y =  profileScale(noise2D(scale(x) * noiseScale, scale(z) * noiseScale), x < gridResolution * debugCutoff)
        positions.push(scale(x), y * heightScale, scale(z))
        if (x > 0 && z > 0) {
          const i = x * gridPoints + z
          indices.push(
            i, i - gridPoints - 1, i - 1,
            i, i - gridPoints, i - gridPoints - 1,
          )
        }
      }
    }
    const normals = []
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    vertexData.positions = positions
    vertexData.indices = indices
    vertexData.normals = normals
    vertexData.applyToMesh(terrain)
  },
}))
```

## loadScene

`<xin-3d>.loadScene(path: string, file: string, callBack(meshes: any[]): void)` can
be used to load `.glb` files.

## loadUI

`<xin-3d>.loadUI(options: B3dUIOptions)` loads babylonjs guis, which you can create programmatically or using the [babylonjs gui tool](https://gui.babylonjs.com/).
*/
var noop = () => {};

class B3d extends G {
  babylonReady;
  BABYLON;
  static styleSpec = {
    ":host": {
      display: "block",
      position: "relative"
    },
    ":host canvas": {
      width: "100%",
      height: "100%"
    },
    ":host .babylonVRicon": {
      height: 50,
      width: 80,
      backgroundColor: "transparent",
      filter: "drop-shadow(0 0 4px #000c)",
      backgroundImage: svg2DataUrl(icons.xrColor()),
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "none",
      borderRadius: 5,
      borderStyle: "none",
      outline: "none",
      transition: "transform 0.125s ease-out"
    },
    ":host .babylonVRicon:hover": {
      transform: "scale(1.1)"
    }
  };
  content = S.canvas({ part: "canvas" });
  constructor() {
    super();
    this.babylonReady = (async () => {
      const { BABYLON } = await scriptTag("https://cdn.babylonjs.com/babylon.js", "BABYLON");
      return BABYLON;
    })();
  }
  scene;
  engine;
  sceneCreated = noop;
  update = noop;
  _update = () => {
    if (this.scene) {
      if (this.update !== undefined) {
        this.update(this, this.BABYLON);
      }
      if (this.scene.activeCamera !== undefined) {
        this.scene.render();
      }
    }
  };
  onResize() {
    if (this.engine) {
      this.engine.resize();
    }
  }
  loadScene = async (path2, file, processCallback) => {
    const { BABYLON } = await scriptTag("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js", "BABYLON");
    BABYLON.SceneLoader.Append(path2, file, this.scene, processCallback);
  };
  loadUI = async (options) => {
    const { BABYLON } = await scriptTag("https://cdn.babylonjs.com/gui/babylon.gui.min.js", "BABYLON");
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, this.scene);
    const { snippetId, jsonUrl, data, size } = options;
    if (size) {
      advancedTexture.idealWidth = size;
      advancedTexture.renderAtIdealSize = true;
    }
    let gui;
    if (snippetId) {
      gui = await advancedTexture.parseFromSnippetAsync(snippetId);
    } else if (jsonUrl) {
      gui = await advancedTexture.parseFromURLAsync(jsonUrl);
    } else if (data) {
      gui = advancedTexture.parseContent(data);
    } else {
      return null;
    }
    const root = advancedTexture.getChildren()[0];
    const widgets = root.children.reduce((map, widget) => {
      map[widget.name] = widget;
      return map;
    }, {});
    return { advancedTexture, gui, root, widgets };
  };
  connectedCallback() {
    super.connectedCallback();
    const { canvas } = this.parts;
    this.babylonReady.then(async (BABYLON) => {
      this.BABYLON = BABYLON;
      this.engine = new BABYLON.Engine(canvas, true);
      this.scene = new BABYLON.Scene(this.engine);
      if (this.sceneCreated) {
        await this.sceneCreated(this, BABYLON);
      }
      if (this.scene.activeCamera === undefined) {
        const camera = new BABYLON.ArcRotateCamera("default-camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(this.parts.canvas, true);
      }
      this.engine.runRenderLoop(this._update);
    });
  }
}
var b3d = B3d.elementCreator({ tag: "xin-3d" });
// src/bp-loader.ts
/*!
# blueprint loading

<center>
  <xin-icon icon="blueprint" style="--font-size: 256px"></xin-icon>
</center>

`<xin-loader>` and `<xin-blueprint>` are simple elements provided by `xinjs` for the dynamic loading
of component **blueprints**.

```html
<xin-loader>
  <xin-blueprint tag="swiss-clock" src="https://tonioloewald.github.io/xin-clock/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<swiss-clock></swiss-clock>
```

## Attributes

- `blueprint` is the url of the `blueprint` javascript module (required)
- `tag` is the tagName you wish to use. If the name of the blueprint is
  hyphenated, then that will be used by default
- `property` if the blueprint module exports the blueprint function as
  a property, you can specify the property here.
*/
// src/bodymovin-player.ts
/*!
# lottie / bodymovin

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an `<img>` element (just set its `src` attribute).

```js
const { xinProxy } = xinjs
const { icons, popFloat } = xinjsui
const { div, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('xin-lottie')
setTimeout(
  () => {
 preview.append(
   popFloat({
     content: [
       { class: 'panel', drag: true },
       div({ class: 'panel-header' }, 'Player Controls' ),
       label(
         { class: 'no-drag' },
         'speed',
         input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
           const speed = Math.pow(5, Number(event.target.value))
           rocket.animation.setSpeed(speed)
           event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
         } }),
         span('100%', {style: { textAlign: 'right', width: '40px'}})
       ),
       label(
         { class: 'no-drag' },
         'direction',
         select(
           option('Forwards', {value: 1, selected: true}),
           option('Backwards', {value: -1}),
           {
             onChange(event) {
               rocket.animation.setDirection(event.target.value)
             }
           }
         ),
         icons.chevronDown(),
       )
     ],
     target: rocket,
     position: 's'
   })
 )
  },
  500
)
```
```html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview .caption {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.preview .panel-header {
  margin: 0;
  text-align: center;
  font-weight: bold;
  background: var(--brand-color);
  color: white;
  padding: 5px;
  margin: -10px -10px 0 -10px;
  cursor: move;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)
*/

class BodymovinPlayer extends G {
  content = null;
  src = "";
  json = "";
  config = {
    renderer: "svg",
    loop: true,
    autoplay: true
  };
  static bodymovinAvailable;
  animation;
  static styleSpec = {
    ":host": {
      width: 400,
      height: 400,
      display: "inline-block"
    }
  };
  _loading = false;
  get loading() {
    return this._loading;
  }
  constructor() {
    super();
    this.initAttributes("src", "json");
    if (BodymovinPlayer.bodymovinAvailable === undefined) {
      BodymovinPlayer.bodymovinAvailable = scriptTag("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js", "bodymovin");
    }
  }
  doneLoading = () => {
    this._loading = false;
  };
  load = ({ bodymovin }) => {
    this._loading = true;
    this.config.container = this.shadowRoot !== null ? this.shadowRoot : undefined;
    if (this.json !== "") {
      this.config.animationData = this.json;
      delete this.config.path;
    } else if (this.src !== "") {
      delete this.config.animationData;
      this.config.path = this.src;
    } else {
      console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default");
    }
    if (this.animation) {
      this.animation.destroy();
      const root = this.shadowRoot;
      if (root !== null) {
        root.querySelector("svg")?.remove();
      }
    }
    this.animation = bodymovin.loadAnimation(this.config);
    this.animation.addEventListener("DOMLoaded", this.doneLoading);
  };
  render() {
    super.render();
    BodymovinPlayer.bodymovinAvailable.then(this.load).catch((e2) => {
      console.error(e2);
    });
  }
}
var bodymovinPlayer = BodymovinPlayer.elementCreator({
  tag: "xin-lottie"
});
// src/carousel.ts
/*!
# carousel

```html
<xin-carousel arrows dots max-visible-items=2 auto=2 loop>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
</xin-carousel>
```
```css
.thing {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 32px;
}

.pink {
  background: #fdd;
}

.green {
  background: #dfd;
}

.blue {
  background: #ddf;
}

.yellow {
  background: #ffd;
}
```

This is a minimalist carousel component that supports the usual stuff.

## Attributes

- `arrows` (boolean, false by default) shows/hides the arrow paging controls
- `dots` (boolean, false by default) shows/hides the dot progress indicators
- `max-visible-items` (number, 1 by default) determines how many items are shown at once.
- `snap-duration` (number, 0.25 [seconds] by default) determines the time taken to scroll / snap scroll.
- `snap-delay` (number, 0.1 [seconds] by default)
- `loop` (boolean, false by default) causes next/previous buttons to loop
- `auto` (number, 0 [seconds] by default) if > 0, automatically advances after that many seconds (always loops!)

<xin-css-var-editor element-selector="xin-carousel"></xin-css-var-editor>
*/
var { button, slot, div } = S;

class XinCarousel extends G {
  arrows = false;
  dots = false;
  loop = false;
  maxVisibleItems = 1;
  snapDelay = 0.1;
  snapDuration = 0.25;
  auto = 0;
  lastAutoAdvance = Date.now();
  interval;
  autoAdvance = () => {
    if (this.auto > 0 && this.auto * 1000 < Date.now() - this.lastAutoAdvance) {
      this.forward();
    }
  };
  _page = 0;
  get page() {
    return this._page;
  }
  set page(p2) {
    const { scroller, back, forward } = this.parts;
    if (this.lastPage <= 0) {
      forward.disabled = back.disabled = true;
      p2 = 0;
    } else {
      p2 = Math.max(0, Math.min(this.lastPage, p2));
      p2 = isNaN(p2) ? 0 : p2;
    }
    if (this._page !== p2) {
      this._page = isNaN(p2) ? 0 : p2;
      this.animateScroll(this._page * scroller.offsetWidth);
      back.disabled = this.page <= 0 && !this.loop;
      forward.disabled = this.page >= this.lastPage && !this.loop;
    }
  }
  get visibleItems() {
    return [...this.children].filter((element) => getComputedStyle(element).display !== "none");
  }
  get lastPage() {
    return Math.max(Math.ceil(this.visibleItems.length / (this.maxVisibleItems || 1)) - 1, 0);
  }
  static styleSpec = {
    ":host": {
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    ":host svg": {
      height: qn.carouselIconSize
    },
    ":host button": {
      outline: "none",
      border: "none",
      boxShadow: "none",
      background: "transparent",
      fill: qn.carouselButtonColor,
      padding: 0
    },
    ":host::part(back), :host::part(forward)": {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: qn.carouseButtonWidth,
      zIndex: 2
    },
    ":host::part(back)": {
      left: 0
    },
    ":host::part(forward)": {
      right: 0
    },
    ":host button:disabled": {
      opacity: 0.5,
      pointerEvents: "none"
    },
    ":host button:hover": {
      fill: qn.carouselButtonHoverColor
    },
    ":host button:active": {
      fill: qn.carouselButtonActiveColor
    },
    ":host::part(pager)": {
      position: "relative"
    },
    ":host::part(scroller)": {
      overflow: "auto hidden",
      position: "relative"
    },
    ":host::part(grid)": {
      display: "grid",
      justifyItems: "center"
    },
    ":host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb": {
      display: "none"
    },
    ":host .dot": {
      background: qn.carouselButtonColor,
      borderRadius: qn.carouselDotSize,
      height: qn.carouselDotSize,
      width: qn.carouselDotSize,
      transition: qn.carouselDotTransition
    },
    ":host .dot:not(.current):hover": {
      background: qn.carouselButtonHoverColor,
      height: qn.carouselDotSize150,
      width: qn.carouselDotSize150,
      margin: qn.carouselDotSize_25
    },
    ":host .dot:not(.current):active": {
      background: qn.carouselButtonActiveColor
    },
    ":host .dot.current": {
      background: qn.carouselDotCurrentColor
    },
    ":host::part(progress)": {
      display: "flex",
      gap: qn.carouselDotSpacing,
      justifyContent: "center",
      padding: qn.carouselProgressPadding
    }
  };
  easing = (t2) => {
    return Math.sin(t2 * Math.PI * 0.5);
  };
  indicateCurrent = () => {
    const { scroller, progress } = this.parts;
    const page = scroller.scrollLeft / scroller.offsetWidth;
    [...progress.children].forEach((dot, index) => {
      dot.classList.toggle("current", Math.floor(index / this.maxVisibleItems - page) === 0);
    });
    this.lastAutoAdvance = Date.now();
    clearTimeout(this.snapTimer);
    this.snapTimer = setTimeout(this.snapPosition, this.snapDelay * 1000);
  };
  snapPosition = () => {
    const { scroller } = this.parts;
    const currentPosition = scroller.scrollLeft / scroller.offsetWidth;
    if (currentPosition !== this.page) {
      this.page = currentPosition > this.page ? Math.ceil(currentPosition) : Math.floor(currentPosition);
    }
    this.lastAutoAdvance = Date.now();
  };
  back = () => {
    this.page = this.page > 0 ? this.page - 1 : this.lastPage;
  };
  forward = () => {
    this.page = this.page < this.lastPage ? this.page + 1 : 0;
  };
  handleDotClick = (event) => {
    const { progress } = this.parts;
    const index = [...progress.children].indexOf(event.target);
    if (index > -1) {
      this.page = Math.floor(index / this.maxVisibleItems);
    }
  };
  snapTimer;
  animationFrame;
  animateScroll(position, startingPosition = -1, timestamp = 0) {
    cancelAnimationFrame(this.animationFrame);
    const { scroller } = this.parts;
    if (startingPosition === -1) {
      startingPosition = scroller.scrollLeft;
      timestamp = Date.now();
      this.animationFrame = requestAnimationFrame(() => {
        this.animateScroll(position, startingPosition, timestamp);
      });
      return;
    }
    const elapsed = (Date.now() - timestamp) / 1000;
    if (elapsed >= this.snapDuration || Math.abs(scroller.scrollLeft - position) < 2) {
      scroller.scrollLeft = position;
      this.animationFrame = null;
    } else {
      scroller.scrollLeft = startingPosition + this.easing(elapsed / this.snapDuration) * (position - startingPosition);
      this.animationFrame = requestAnimationFrame(() => {
        this.animateScroll(position, startingPosition, timestamp);
      });
    }
  }
  content = () => [
    div({ part: "pager" }, button({ title: "previous slide", part: "back" }, icons.chevronLeft()), div({ title: "slides", role: "group", part: "scroller" }, div({ part: "grid" }, slot())), button({ title: "next slide", part: "forward" }, icons.chevronRight())),
    div({ title: "choose slide to display", role: "group", part: "progress" })
  ];
  constructor() {
    super();
    this.initAttributes("dots", "arrows", "maxVisibleItems", "snapDuration", "loop", "auto");
  }
  connectedCallback() {
    super.connectedCallback();
    this.ariaRoleDescription = "carousel";
    this.ariaOrientation = "horizontal";
    this.ariaReadOnly = "true";
    const { back, forward, scroller, progress } = this.parts;
    back.addEventListener("click", this.back);
    forward.addEventListener("click", this.forward);
    scroller.addEventListener("scroll", this.indicateCurrent);
    progress.addEventListener("click", this.handleDotClick);
    this.lastAutoAdvance = Date.now();
    this.interval = setInterval(this.autoAdvance, 100);
  }
  disconnectedCallback() {
    clearInterval(this.interval);
  }
  render() {
    super.render();
    const { dots, arrows, visibleItems, lastPage } = this;
    const { progress, back, forward, grid } = this.parts;
    visibleItems.forEach((item) => {
      item.role = "group";
    });
    grid.style.gridTemplateColumns = `${100 / this.maxVisibleItems / (1 + this.lastPage)}% `.repeat(visibleItems.length).trim();
    grid.style.width = (1 + this.lastPage) * 100 + "%";
    progress.textContent = "";
    progress.append(...visibleItems.map((_2, index) => button({ title: `item ${index + 1}`, class: "dot" })));
    this.indicateCurrent();
    progress.style.display = dots && lastPage > 0 ? "" : "none";
    back.hidden = forward.hidden = !(arrows && lastPage > 0);
  }
}
var xinCarousel = XinCarousel.elementCreator({
  tag: "xin-carousel",
  styleSpec: {
    ":host": {
      _carouselIconSize: 24,
      _carouselButtonColor: "#0004",
      _carouselButtonHoverColor: "#0006",
      _carouselButtonActiveColor: "#000c",
      _carouseButtonWidth: 48,
      _carouselDotCurrentColor: "#0008",
      _carouselDotSize: 8,
      _carouselDotSpacing: qn.carouselDotSize,
      _carouselProgressPadding: 12,
      _carouselDotTransition: "0.125s ease-in-out"
    },
    ":host:focus": {
      outline: "none",
      boxShadow: "none"
    }
  }
});
// src/code-editor.ts
/*!
# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

`<xin-code>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
```
*/
var ACE_BASE_URL = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/";
var DEFAULT_THEME = "ace/theme/tomorrow";
var makeCodeEditor = async (codeElement, mode = "html", options = {}, theme = DEFAULT_THEME) => {
  const { ace } = await scriptTag(`${ACE_BASE_URL}ace.min.js`);
  ace.config.set("basePath", ACE_BASE_URL);
  const editor = ace.edit(codeElement, {
    mode: `ace/mode/${mode}`,
    tabSize: 2,
    useSoftTabs: true,
    useWorker: false,
    ...options
  });
  editor.setTheme(theme);
  return editor;
};

class CodeEditor extends G {
  source = "";
  get value() {
    return this.editor === undefined ? this.source : this.editor.getValue();
  }
  set value(text) {
    if (this.editor === undefined) {
      this.source = text;
    } else {
      this.editor.setValue(text);
      this.editor.clearSelection();
      this.editor.session.getUndoManager().reset();
    }
  }
  mode = "javascript";
  disabled = false;
  role = "code editor";
  get editor() {
    return this._editor;
  }
  _editor;
  _editorPromise;
  options = {};
  theme = DEFAULT_THEME;
  static styleSpec = {
    ":host": {
      display: "block",
      position: "relative",
      width: "100%",
      height: "100%"
    }
  };
  constructor() {
    super();
    this.initAttributes("mode", "theme", "disabled");
  }
  onResize() {
    if (this.editor !== undefined) {
      this.editor.resize(true);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.source === "") {
      this.value = this.textContent !== null ? this.textContent.trim() : "";
    }
    if (this._editorPromise === undefined) {
      this._editorPromise = makeCodeEditor(this, this.mode, this.options, this.theme);
      this._editorPromise.then((editor) => {
        this._editor = editor;
        editor.setValue(this.source, 1);
        editor.clearSelection();
        editor.session.getUndoManager().reset();
      });
    }
  }
  render() {
    super.render();
    if (this._editorPromise !== undefined) {
      this._editorPromise.then((editor) => editor.setReadOnly(this.disabled));
    }
  }
}
var codeEditor = CodeEditor.elementCreator({
  tag: "xin-code"
});
// src/color-input.ts
/*!

# color input field

This is a color input field that supports opacity

```js
const colorInput = preview.querySelector('xin-color')
const circle = preview.querySelector('div')

colorInput.addEventListener('change', () => {
  console.log(colorInput.value)
  circle.style.background = colorInput.value
})
```
```html
<xin-color value="red"></xin-color>
<div
  style="
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 100px;
  "
></div>
```


<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>
*/
var { input } = S;
var defaultColor = $.fromCss("#8888");

class ColorInput extends G {
  value = defaultColor.rgba;
  color = defaultColor;
  static styleSpec = {
    ":host": {
      _gap: 8,
      _swatchSize: 32,
      _cssWidth: 72,
      _alphaWidth: 72,
      display: "inline-flex",
      gap: qn.gap,
      alignItems: "center"
    },
    ':host input[type="color"]': {
      border: 0,
      width: qn.swatchSize,
      height: qn.swatchSize
    },
    ":host::part(alpha)": {
      width: qn.alphaWidth
    },
    ":host::part(css)": {
      width: qn.cssWidth,
      fontFamily: "monospace"
    }
  };
  content = [
    input({ title: "base color", type: "color", part: "rgb" }),
    input({
      type: "range",
      title: "opacity",
      part: "alpha",
      min: 0,
      max: 1,
      step: 0.05
    }),
    input({ title: "css color spec", part: "css" })
  ];
  valueChanged = false;
  update = (event) => {
    const { rgb, alpha, css } = this.parts;
    if (event.type === "input") {
      this.color = $.fromCss(rgb.value);
      this.color.a = Number(alpha.value);
      css.value = this.color.html;
    } else {
      this.color = $.fromCss(css.value);
      rgb.value = this.color.html.substring(0, 7);
      alpha.value = String(this.color.a);
    }
    rgb.style.opacity = String(this.color.a);
    this.value = this.color.rgba;
    this.valueChanged = true;
  };
  connectedCallback() {
    super.connectedCallback();
    const { rgb, alpha, css } = this.parts;
    rgb.addEventListener("input", this.update);
    alpha.addEventListener("input", this.update);
    css.addEventListener("change", this.update);
  }
  render() {
    if (this.valueChanged) {
      this.valueChanted = false;
      return;
    }
    const { rgb, alpha, css } = this.parts;
    this.color = $.fromCss(this.value);
    rgb.value = this.color.html.substring(0, 7);
    rgb.style.opacity = String(this.color.a);
    alpha.value = String(this.color.a);
    css.value = this.color.html;
  }
}
var colorInput = ColorInput.elementCreator({
  tag: "xin-color"
});
// src/track-drag.ts
/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<xin-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

```html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
```
```css
.preview {
  touch-action: none;
}

.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
}

.preview p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```
```js
const { trackDrag } = xinjsui

function dragItem(event) {
  const draggable = event.target
  if (draggable.classList.contains('draggable')) {
    const x = draggable.offsetLeft
    const y = draggable.offsetTop
    trackDrag(event, (dx, dy, event) => {
      draggable.style.left = (x + dx) + 'px'
      draggable.style.top = (y + dy) + 'px'
      draggable.style.bottom = 'auto'
      draggable.style.right = 'auto'
      return event.type === 'mouseup'
    })
  }
}

preview.addEventListener('mousedown', dragItem )
preview.addEventListener('touchstart', dragItem, { passive: true } )
```

For `touch` events, `dx` and `dy` are based on tracking `event.changedTouches[0]` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.

## bringToFront

`bringToFront(element: HTMLElement, selector = 'body *')`  gives the element the highest
`z-index` of any element matching the selector (which is passed to findHighestZ).

## findHighestZ

`findHighestZ(selector = 'body *'): number` returns the the highest `z-index` of any element
matching `selector`.
*/
var TRACKER = S.div({
  style: {
    content: " ",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
var PASSIVE = { passive: true };
var trackDrag = (event, callback, cursor = "move") => {
  const isTouchEvent = event.type.startsWith("touch");
  if (!isTouchEvent) {
    const origX = event.clientX;
    const origY = event.clientY;
    TRACKER.style.cursor = cursor;
    bringToFront(TRACKER);
    document.body.append(TRACKER);
    const wrappedCallback = (event2) => {
      const dx = event2.clientX - origX;
      const dy = event2.clientY - origY;
      if (callback(dx, dy, event2) === true) {
        TRACKER.removeEventListener("mousemove", wrappedCallback);
        TRACKER.removeEventListener("mouseup", wrappedCallback);
        TRACKER.remove();
      }
    };
    TRACKER.addEventListener("mousemove", wrappedCallback, PASSIVE);
    TRACKER.addEventListener("mouseup", wrappedCallback, PASSIVE);
  } else if (event instanceof TouchEvent) {
    const touch = event.changedTouches[0];
    const touchId = touch.identifier;
    const origX = touch.clientX;
    const origY = touch.clientY;
    const target = event.target;
    let dx = 0;
    let dy = 0;
    const wrappedCallback = (event2) => {
      const touch2 = [...event2.touches].find((touch3) => touch3.identifier === touchId);
      if (touch2 !== undefined) {
        dx = touch2.clientX - origX;
        dy = touch2.clientY - origY;
      }
      if (event2.type === "touchmove") {
        event2.stopPropagation();
        event2.preventDefault();
      }
      if (callback(dx, dy, event2) === true || touch2 === undefined) {
        target.removeEventListener("touchmove", wrappedCallback);
        target.removeEventListener("touchend", wrappedCallback);
        target.removeEventListener("touchcancel", wrappedCallback);
      }
    };
    target.addEventListener("touchmove", wrappedCallback);
    target.addEventListener("touchend", wrappedCallback, PASSIVE);
    target.addEventListener("touchcancel", wrappedCallback, PASSIVE);
  }
};
var findHighestZ = (selector = "body *") => [...document.querySelectorAll(selector)].map((elt) => parseFloat(getComputedStyle(elt).zIndex)).reduce((z2, highest) => isNaN(z2) || Number(z2) < highest ? highest : Number(z2), 0);
var bringToFront = (element, selector = "body *") => {
  element.style.zIndex = String(findHighestZ(selector) + 1);
};

// src/float.ts
/*!
# float

A floating, potentially draggable user interface element.

```html
<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remain" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I ignore resizing and scrolling</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-scroll="remain" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on resize</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remove" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on scroll</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
```
```css
.preview .float {
  width: 220px;
  height: 180px;
  padding: 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff8;
  box-shadow: 2px 10px 20px #0004;
  overflow: hidden;
  cursor: move;
}

.preview h4 {
  margin: 0;
  padding: 5px 10px;
  color: white;
  background: red;
}

.preview .balloon {
  cursor: default;
  flex: 1 1 auto;
  font-size: 99px;
  line-height: 120px;
  text-align: center;
  height: auto;
  overflow: hidden;
}

.preview .behavior {
  position: absolute;
  bottom: 16px;
  left: 8px;
  right: 8px;
  background: #fffc;
}

.preview footer {
  text-align: center;
  background: #f008;
  color: white;
```

## Styling

Note that the `<xin-float>` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

## Attributes

- `drag` false | true — to make a `<xin-float>` element draggable, simply set its `drag` attribute.
- `remain-on-resize` 'remove' | 'hide' | 'remain' — by default, floats will hide if the window is resized
- `remain-on-scroll` 'remain' | 'remove' | 'hide' — by default, floats will remain if the document is scrolled

Note that `remain-on-scroll` behavior applies to any scrolling in the document (including within the float) so
if you want finer-grained disappearing behavior triggered by scrolling, you might want to implement it yourself.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the `no-drag` class to an element or its container.
*/
var { slot: slot2 } = S;

class XinFloat extends G {
  static floats = new Set;
  drag = false;
  remainOnResize = "remove";
  remainOnScroll = "remain";
  content = slot2();
  static styleSpec = {
    ":host": {
      position: "fixed"
    }
  };
  constructor() {
    super();
    this.initAttributes("drag", "remainOnResize", "remainOnScroll");
  }
  reposition = (event) => {
    const target = event.target;
    if (target?.closest(".no-drag")) {
      return;
    }
    if (this.drag) {
      bringToFront(this);
      const x = this.offsetLeft;
      const y = this.offsetTop;
      trackDrag(event, (dx, dy, pointerEvent) => {
        this.style.left = `${x + dx}px`;
        this.style.top = `${y + dy}px`;
        this.style.right = "auto";
        this.style.bottom = "auto";
        if (pointerEvent.type === "mouseup") {
          return true;
        }
      });
    }
  };
  connectedCallback() {
    super.connectedCallback();
    XinFloat.floats.add(this);
    const PASSIVE2 = { passive: true };
    this.addEventListener("touchstart", this.reposition, PASSIVE2);
    this.addEventListener("mousedown", this.reposition, PASSIVE2);
    bringToFront(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    XinFloat.floats.delete(this);
  }
}
var xinFloat = XinFloat.elementCreator({
  tag: "xin-float"
});
window.addEventListener("resize", () => {
  [...XinFloat.floats].forEach((float) => {
    if (float.remainOnResize === "hide") {
      float.hidden = true;
    } else if (float.remainOnResize === "remove") {
      float.remove();
    }
  });
}, { passive: true });
document.addEventListener("scroll", (event) => {
  if (event.target instanceof HTMLElement && event.target.closest(XinFloat.tagName)) {
    return;
  }
  [...XinFloat.floats].forEach((float) => {
    if (float.remainOnScroll === "hide") {
      float.hidden = true;
    } else if (float.remainOnScroll === "remove") {
      float.remove();
    }
  });
}, { passive: true, capture: true });

// src/pop-float.ts
/*!
# popFloat

There are so many cases in user-interfaces where it's useful to pop-up a floating
user interface element that a simple and reliable way of doing this seems like
a good idea.

The problem with many such approaches is that they assume a highly specific
use-case (e.g. popup menu or combo box) and while meeting the creator's intended
purpose admirably, turn out to have some annoying limitation that prevents them
handling the specific case at hand.

```js
const { popFloat, positionFloat } = xinjsui
const { button } = xinjs.elements
const grid = preview.querySelector('.grid')

grid.addEventListener('click', (event) => {
  const { target } = event
  if (!target.closest('button')) {
    return
  }
  const float = preview.querySelector('xin-float')
  if (float === null) {
    // create and position a float
    preview.append(
      popFloat({
        content: [
          'hello, I am a float',
          button('close me', {
            onClick(event){
              event.target.closest('xin-float').remove()
            }
          })
        ],
        target,
        position: target.dataset.float
      })
    )
  } else {
    // position an existing float
    positionFloat(float, target, target.dataset.float)
  }
})
```
```html
<h2>Pop Float Demo</h2>
<div class="grid">
  <button data-float="nw">nw</button>
  <button data-float="n">n</button>
  <button data-float="ne">ne</button>
  <button data-float="wn">wn</button>
  <span>&nbsp;</span>
  <button data-float="en">en</button>
  <button data-float="w">w</button>
  <button data-float="auto">auto</button>
  <button data-float="e">e</button>
  <button data-float="ws">ws</button>
  <button data-float="side">side</button>
  <button data-float="es">es</button>
  <button data-float="sw">sw</button>
  <button data-float="s">s</button>
  <button data-float="se">se</button>
</div>
```
```css
.preview .grid {
  display: grid;
  grid-template-columns: 80px 80px 80px;
}

.preview xin-float {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  background: white;
  box-shadow: 2px 10px 5px #0004;
}
```

## popFloat

```
export interface PopFloatOptions {
  content: HTMLElement | ElementPart[]
  target: HTMLElement
  position?: FloatPosition
}

export const popFloat = (options: PopFloatOptions): XinFloat
```

Create a `<xin-float>` with the content provided, positioned as specified (or automatically).

## positionFloat

```
export const positionFloat = (
  element: HTMLElement,
  target: HTMLElement,
  position?: FloatPosition
  remainOnScroll?: 'hide' | 'remove' | boolean // default is 'remove'
  remainOnResize?: 'hide' | 'remove' | boolean // default is 'remove'
): void
```

This allows you to, for example, provide a global menu that can be used on any element
instead of needing to have a whole instance of the menu wrapped around every instance
of the thing you want the menu to affect (a common anti-pattern of front-end frameworks).

### Handling Overflow

`positionFloat` automatically sets two css-variables `--max-height` and `--max-width` on
the floating element to help you deal with overflow (e.g. in menus). E.g. if the float
is positioned with `top: 125px` then it will set `--max-height: calc(100vh - 125px)`.

## FloatPosition

```
export type FloatPosition =
| 'n'
| 's'
| 'e'
| 'w'
| 'ne'
| 'nw'
| 'se'
| 'sw'
| 'en'
| 'wn'
| 'es'
| 'ws'
| 'side'
| 'auto'
```

*/
var popFloat = (options) => {
  const { content, target, position } = options;
  const float = Array.isArray(content) ? xinFloat(...content) : xinFloat(content);
  positionFloat(float, target, position);
  document.body.append(float);
  return float;
};
var positionFloat = (element, target, position) => {
  {
    const { position: position2 } = getComputedStyle(element);
    if (position2 !== "fixed") {
      element.style.position = "fixed";
    }
    bringToFront(element);
  }
  const { left, top, width, height } = target.getBoundingClientRect();
  const cx = left + width * 0.5;
  const cy = top + height * 0.5;
  const w2 = window.innerWidth;
  const h = window.innerHeight;
  if (position === "side") {
    position = (cx < w2 * 0.5 ? "e" : "w") + (cy < h * 0.5 ? "s" : "n");
  } else if (position === "auto" || position === undefined) {
    position = (cy < h * 0.5 ? "s" : "n") + (cx < w2 * 0.5 ? "e" : "w");
  }
  element.style.top = element.style.left = element.style.right = element.style.bottom = element.style.transform = "";
  if (position.length === 2) {
    const [first, second] = position;
    switch (first) {
      case "n":
        element.style.bottom = (h - top).toFixed(2) + "px";
        break;
      case "e":
        element.style.left = (left + width).toFixed(2) + "px";
        break;
      case "s":
        element.style.top = (top + height).toFixed(2) + "px";
        break;
      case "w":
        element.style.right = (w2 - left).toFixed(2) + "px";
        break;
    }
    switch (second) {
      case "n":
        element.style.bottom = (h - top - height).toFixed(2) + "px";
        break;
      case "e":
        element.style.left = left.toFixed(2) + "px";
        break;
      case "s":
        element.style.top = top.toFixed(2) + "px";
        break;
      case "w":
        element.style.right = (w2 - left - width).toFixed(2) + "px";
        break;
    }
    element.style.transform = "";
  } else if (position === "n") {
    element.style.bottom = (h - top).toFixed(2) + "px";
    element.style.left = cx.toFixed(2) + "px";
    element.style.transform = "translateX(-50%)";
  } else if (position === "s") {
    element.style.top = (top + height).toFixed(2) + "px";
    element.style.left = cx.toFixed(2) + "px";
    element.style.transform = "translateX(-50%)";
  } else if (position === "e") {
    element.style.left = (left + width).toFixed(2) + "px";
    element.style.top = cy.toFixed(2) + "px";
    element.style.transform = "translateY(-50%)";
  } else if (position === "w") {
    element.style.right = (w2 - left).toFixed(2) + "px";
    element.style.top = cy.toFixed(2) + "px";
    element.style.transform = "translateY(-50%)";
  }
  element.style.setProperty("--max-height", `calc(100vh - ${element.style.top || element.style.bottom})`);
  element.style.setProperty("--max-width", `calc(100vw - ${element.style.left || element.style.right})`);
};

// src/menu.ts
/*!
# menu

Being able to pop a menu up anywhere is just so nice, and `xinjs-ui` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

```js
const { popMenu } = xinjsui
const { elements } = xinjs

let picked = ''
let testingEnabled = false

preview.addEventListener('click', (event) => {
  if (!event.target.closest('button')) {
    return
  }
  popMenu({
    target: event.target,
    menuItems: [
      {
        icon: 'thumbsUp',
        caption: 'Like',
        shortcut: '^L',
        action() {
          window.alert('I like it!')
        }
      },
      null, // separator
      {
        icon: 'thumbsDown',
        caption: 'dislike',
        shortcut: '⌘D',
        action() {
          window.alert('Awwwww!')
        }
      },
      {
        icon: elements.span('🥹'),
        caption: 'Also see…',
        menuItems: [
          {
            icon: elements.span('😳'),
            caption: 'And that’s not all…',
            menuItems: [
              {
                icon: 'externalLink',
                caption: 'timezones',
                action: 'https://timezones.xinjs.net/'
              },
              {
                icon: 'externalLink',
                caption: 'b8rjs',
                action: 'https://b8rjs.com'
              },
            ]
          },
          {
            icon: 'xinjs',
            caption: 'xinjs',
            action: 'https://xinjs.net'
          },
          {
            icon: 'xinie',
            caption: 'xinie',
            action: 'https://xinie.net'
          },
        ]
      },
      {
        icon: testingEnabled ? 'check' : '',
        caption: 'Testing Enabled',
        action() {
          testingEnabled = !testingEnabled
        }
      },
      {
        caption: 'Testing…',
        enabled() {
          return testingEnabled
        },
        menuItems: [
          {
            caption: 'one',
            checked: () => picked === 'one',
            action () {
              picked = 'one'
            }
          },
          {
            caption: 'two',
            checked: () => picked === 'two',
            action () {
              picked = 'two'
            }
          },
          {
            caption: 'three',
            checked: () => picked === 'three',
            action () {
              picked = 'three'
            }
          }
        ]
      }
    ]
  })
})
```
```html
<button title="menu test">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
<button title="menu test from bottom-right" style="position: absolute; bottom: 0; right: 0">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
```

## Overflow test

```js
const { popMenu, icons } = xinjsui
const { elements } = xinjs

preview.querySelector('button').addEventListener('click', (event) => {
  popMenu({
    target: event.target,
    menuItems:  Object.keys(icons).map(icon => ({
      icon,
      caption: icon,
      action() {
        console.log(caption)
      }
    }))
  })
})
```
```html
<button title="big menu test" style="position: absolute; top: 0; left: 0">
  Big Menu Test
</button>
```

## popMenu({target, width, menuItems…})

`popMenu` will spawn a menu on a target element. A menu is just a `MenuItem[]`.

## MenuItem

A `MenuItem` can be one of three things:

- `null` denotes a separator
- `MenuAction` denotes a labeled button or `<a>` tag based on whether the `action` provided
  is a url (string) or an event handler (function).
- `SubMenu` is a submenu.

### MenuAction

Note that popMenu does not implement shortcuts for you (yet!).

```
interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}
```

### SubMenu

```
interface SubMenu {
  caption: string
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}
```

## Why another menu library?!

Support for menus is sadly lacking in HTML, and unfortunately there's a huge conceptual problem
with menus implemented the way React and React-influenced libraries work, i.e. you need
to have an instance of a menu "wrapped around" the DOM element that triggers it, whereas
a better approach (and one dating back at least as far as the original Mac UI) is to treat
a menu as a separate resource that can be instantiated on demand.

A simple example where this becomes really obvious is if you want to associate a "more options"
menu with every row of a large table. Either you end up having an enormous DOM (virtual or otherwise)
or you have to painfully swap out components on-the-fly.

And, finally, submenus are darn useful for any serious app.

For this reason, `xinjs-ui` has its own menu implementation.
*/
var { div: div2, button: button2, span, a: a2 } = S;
qo("xin-menu-helper", {
  ".xin-menu": {
    overflow: "hidden auto",
    maxHeight: `calc(${qn.maxHeight} - ${wn.menuInset("8px")})`,
    borderRadius: qn.spacing50,
    background: wn.menuBg("#fafafa"),
    boxShadow: `${qn.spacing13} ${qn.spacing50} ${qn.spacing} ${qn.shadowColor}`
  },
  ".xin-menu > div": {
    width: wn.menuWidth("auto")
  },
  ".xin-menu-trigger": {
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: wn.touchSize("48px")
  },
  ".xin-menu-separator": {
    display: "inline-block",
    content: " ",
    height: "1px",
    width: "100%",
    background: wn.menuItemColor("#222"),
    opacity: 0.25,
    margin: wn.menuSeparatorMargin("8px 0")
  },
  ".xin-menu-item": {
    boxShadow: "none",
    border: "none !important",
    display: "grid",
    alignItems: "center",
    justifyContent: "flex-start",
    textDecoration: "none",
    gridTemplateColumns: "0px 1fr 30px",
    width: "100%",
    gap: 0,
    background: "transparent",
    padding: wn.menuItemPadding("0 16px"),
    height: wn.menuItemHeight("48px"),
    lineHeight: wn.menuItemHeight("48px"),
    textAlign: "left"
  },
  ".xin-menu-item, .xin-menu-item > span": {
    color: wn.menuItemColor("#222")
  },
  ".xin-menu-with-icons .xin-menu-item": {
    gridTemplateColumns: "30px 1fr 30px"
  },
  ".xin-menu-item svg": {
    fill: wn.menuItemIconColor("#222")
  },
  ".xin-menu-item.xin-menu-item-checked": {
    background: wn.menuItemHoverBg("#eee")
  },
  ".xin-menu-item > span:nth-child(2)": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left"
  },
  ".xin-menu-item:hover": {
    boxShadow: "none !important",
    background: wn.menuItemHoverBg("#eee")
  },
  ".xin-menu-item:active": {
    boxShadow: "none !important",
    background: wn.menuItemActiveBg("#aaa"),
    color: wn.menuItemActiveColor("#000")
  },
  ".xin-menu-item:active svg": {
    fill: wn.menuItemIconActiveColor("#000")
  }
});
var createMenuAction = (item) => {
  const checked = item.checked && item.checked() && "check" || false;
  let icon = item?.icon || checked || span(" ");
  if (typeof icon === "string") {
    icon = icons[icon]();
  }
  let menuItem;
  if (typeof item?.action === "string") {
    menuItem = a2({
      class: "xin-menu-item",
      href: item.action
    }, icon, span(item.caption), span(item.shortcut || " "));
  } else {
    menuItem = button2({
      class: "xin-menu-item",
      onClick: item.action
    }, icon, span(item.caption), span(item.shortcut || " "));
  }
  menuItem.classList.toggle("xin-menu-item-checked", checked !== false);
  if (item?.enabled && !item.enabled()) {
    menuItem.setAttribute("disabled", "");
  }
  return menuItem;
};
var createSubMenu = (item, options) => {
  const checked = item.checked && item.checked() && "check" || false;
  let icon = item?.icon || checked || span(" ");
  if (typeof icon === "string") {
    icon = icons[icon]();
  }
  const submenuItem = button2({
    class: "xin-menu-item",
    disabled: !(!item.enabled || item.enabled()),
    onClick(event) {
      popMenu(Object.assign({}, options, {
        menuItems: item.menuItems,
        target: submenuItem,
        submenuDepth: (options.submenuDepth || 0) + 1,
        position: "side"
      }));
      event.stopPropagation();
      event.preventDefault();
    }
  }, icon, span(item.caption), icons.chevronRight({ style: { justifySelf: "flex-end" } }));
  return submenuItem;
};
var createMenuItem = (item, options) => {
  if (item === null) {
    return span({ class: "xin-menu-separator" });
  } else if (item?.action) {
    return createMenuAction(item);
  } else {
    return createSubMenu(item, options);
  }
};
var menu = (options) => {
  const { target, width, menuItems } = options;
  const hasIcons = menuItems.find((item) => item?.icon || item?.checked);
  return div2({
    class: hasIcons ? "xin-menu xin-menu-with-icons" : "xin-menu",
    onClick() {
      removeLastMenu(0);
    }
  }, div2({
    style: {
      minWidth: target.offsetWidth + "px",
      width: typeof width === "number" ? `${width}px` : width
    },
    onMousedown(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, ...menuItems.map((item) => createMenuItem(item, options))));
};
var lastPopped;
var poppedMenus = [];
var removeLastMenu = (depth = 0) => {
  const toBeRemoved = poppedMenus.splice(depth);
  for (const popped of toBeRemoved) {
    popped.menu.remove();
  }
  lastPopped = toBeRemoved[0];
  return depth > 0 ? poppedMenus[depth - 1] : undefined;
};
document.body.addEventListener("mousedown", (event) => {
  if (event.target && !poppedMenus.find((popped) => popped.target.contains(event.target))) {
    removeLastMenu(0);
  }
});
document.body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    removeLastMenu(0);
  }
});
var popMenu = (options) => {
  options = Object.assign({ submenuDepth: 0 }, options);
  const { target, position, submenuDepth } = options;
  if (lastPopped && !document.body.contains(lastPopped?.menu)) {
    lastPopped = undefined;
  }
  if (poppedMenus.length && !document.body.contains(poppedMenus[0].menu)) {
    poppedMenus.splice(0);
  }
  if (submenuDepth === 0 && lastPopped?.target === target)
    return;
  const popped = removeLastMenu(submenuDepth);
  if (lastPopped?.target === target)
    return;
  if (popped && popped.target === target) {
    removeLastMenu();
    return;
  }
  const content = menu(options);
  const float = popFloat({
    content,
    target,
    position
  });
  float.remainOnScroll = "remove";
  poppedMenus.push({
    target,
    menu: float
  });
};

// src/drag-and-drop.ts
var exports_drag_and_drop = {};
__export(exports_drag_and_drop, {
  init: () => init,
  draggedElement: () => draggedElement
});
/*!
# drag & drop

> **Note** this library is a modernized version of the [b8rjs](https://b8rjs.com) drag-and-drop.js library.
> It removes all usage of b8rjs and has no dependencies.

A lightweight library building on top of HTML5 drag and drop behavior.

To use it, simply call `dragAndDrop.init()` (it only needs to be called once,
but calling it again is harmless).

```
import { dragAndDrop } from 'xinjs-ui'

dragAndDrop.init()
```

The library just sets up some event listeners.

You can use `dragAndDrop.draggedElement()` to get the element being dragged (if it's
actually from the page you're in).

> ### Important Note
>
> The nice thing about HTML5 drag-and-drop is that it leverages the OS's drag and
> drop support. This means you can drag from one window to another, from the desktop
> to your app and vice versa. It's all a matter of configuring the DOM elements.

This module sets up some global event handlers and *just works*&trade; (arguably, it merely does things
that the browser should do, such as add a CSS selector for drop zones that are compatible
with what's being dragged).

This module uses but *does not define* the following class selectors:

- `.drag-source` an element being dragged
- `.drag-target` an element on which the dragged object may be dropped
- `.drag-over` a `.drag-target` which the object is currently over

You may also wish to create style rules for:

- `[draggable="true"]` anything other than a `<a>` (and perhaps an `<img>`) that can be dragged
- `[data-drag]` indicates *types* of draggable things that can be dropped on them.
- `[data-drop]` indicates potential *drop zones*.

> **Note** `draggable` is has to be set to "true", [see documentation on draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

## Draggable Objects

To create a draggable element, add `draggable="true"`.

    <div draggable="true">Drag Me</div>

To specify the type(s) of content that will be dragged, use the `data-drag` attribute:

    <div draggable="true" data-drag="text/plain">Drag Me</div>

To specify the content dragged, use a `data-drag-content` attribute.

    <div
      draggable="true"
      data-drag="text/plain"
      data-drag-content="Surprise!"
    >Drag Me</div>

## Drop Zones

To create a drop zone, use the data-drop attribute set to a semicolon-delimited list
of mime types:

    <div data-drop="text/plain">
      Drop plain text here
    </div>
    <div data-drop="text/plain;text/html">
      Drop html or plain text here
    </div>

Finally, you can override default drop behavior (which is to copy the dragged node into
the drop zone node) simply using data-event="drop:path.to.drop_handler" as usual.

    <div
      data-drop="custom"
      data-event="drop:path.to.drop_handler"
    >
      Drop some custom thing here
    </div>

### Typed Drop Zones Example

```html
<div style="display: grid; grid-template-columns: 50% 50%">
  <div>
    <h4>Draggable</h4>
    <a class="drag" href="javascript: alert('I don't do anything)">Links are draggable by default</a>
    <p draggable="true">
      Just adding the <code>draggable="true"</code>
      makes this paragraph draggable (as text/html by default)
    </p>
    <p draggable="true" data-drag="text/html">
      Draggable as <i>text/html</i>
    </p>
    <p draggable="true" data-drag="text/plain" data-drag-content="Surprise!">
      Draggable as <i>text/plain</i>, with <b>custom content</b>
    </p>
    <p draggable="true" data-drag="text/html;text/plain">
      Draggable as <i>text/html</i> or <i>text/plain</i>
    </p>
    <p draggable="true" data-drag="text/plain">
      Draggable as <i>text/plain</i>
    </p>
  </div>
  <div>
    <h4>Drop Targets</h4>
    <div data-drop="text/html">
      You can drop stuff here
    </div>
    <div data-drop="text/html">
      You can drop HTML here
    </div>
    <div data-drop="text/*">
      You can drop any text
    </div>
    <div data-drop="text/html;url">
      You can drop HTML or urls here
    </div>
    <div
      data-drop="special/any"
      data-event="drop:_component_.drop"
    >
      I accept anything and have special drop handling
    </div>
  </div>
</div>
```
```css
.drag-source {
  box-shadow: 0 0 2px 2px orange;
  opacity: 0.5;
}
.drag-target {
  min-height: 10px;
  background: rgba(0,0,255,0.25);
}
.drag-target.drag-over {
  background: rgba(0,0,255,0.5);
}
:not([data-drop]) > .drag,
[draggable="true"] {
  border: 1px solid rgba(255,192,0,0.5);
  cursor: pointer;
  display: block;
}

:not([data-drop]) > .drag,
[data-drop],
[draggable="true"] {
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
}
```
```js
const { dragAndDrop } = xinjsui

dragAndDrop.init()
```

> Note that you can drag between two browser tabs containing this
> example (or between two different browsers) and it will work.

### Reorderable List Example

```js
const { elements, boxedProxy, getListItem } = xinjs
const { dragAndDrop } = xinjsui

dragAndDrop.init()

const shuffle = (deck) => {
  var shuffled = [];
  for( const card of deck ){
    shuffled.splice( Math.floor( Math.random() * (1 + shuffled.length) ), 0, card );
  }
  return shuffled;
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]
const { spectrum } = boxedProxy({
  spectrum: shuffle(colors).map(color => ({color}))
})

const { div, template } = elements

let dragged = null

const dropColor = (event) => {
  const dropped = getListItem(event.target)
  const draggedIndex = spectrum.indexOf(dragged)
  const droppedIndex = spectrum.indexOf(dropped)
  spectrum.splice(draggedIndex, 1)
  spectrum.splice(droppedIndex, 0, dragged)

  console.log({dragged, draggedIndex, dropped, droppedIndex})

  event.preventDefault()
  event.stopPropagation()
}

const dragId = 'spectrum/' + Math.floor(Math.random() * 1e9)

preview.append(
  div(
    {
      bindList: { value: spectrum, idPath: 'color' }
    },
    template(
      div({
        class: 'spectrum',
        bindText: '^.color',
        draggable: 'true',
        dataDrag: dragId,
        dataDrop: dragId,
        onDrop: dropColor,
        bind: {
          value: '^.color',
          binding(element, value) {
            element.style.backgroundColor = value
          }
        },
        onDragstart(event) {
          dragged = getListItem(event.target)
        }
      })
    )
  ),
)
```
```css
.spectrum {
  height: 36px;
  color: white;
  font-weight: 700;
  text-shadow: 1px 2px 0 black;
  padding-left: 10px;
}

.spectrum.drag-over {
  box-shadow: 0 0 0 4px blue;
}
```

> To prevent this example from allowing drags between windows (which
> wouldn't make sense) a random dragId is assigned to `data-drag` and
> `data-drop` in this example.
)
*/
var dragInProgress = () => !!document.querySelector(".drag-source");
var isTypeAllowed = (allowedTypes, type) => {
  if (!allowedTypes) {
    return false;
  }
  for (const allowedType of allowedTypes) {
    if (allowedType === "special/any") {
      return true;
    } else if (allowedType.indexOf("*") > -1) {
      const [A2, B2] = allowedType.split("/");
      const [a3, b2] = type.split("/");
      if ((A2 === "*" || A2 === a3) && (B2 === "*" || B2 === b2)) {
        return true;
      }
    } else {
      if (allowedType === type) {
        return true;
      }
    }
  }
};
var removeClass = (className) => {
  for (const elt of [...document.querySelectorAll(`.${className}`)]) {
    elt.classList.remove(className);
  }
};
var end = () => {
  removeClass("drag-over");
  removeClass("drag-source");
  removeClass("drag-target");
};
var stringToTypes = (s2, delimiter = ";") => {
  return (s2 || "").split(delimiter).map((t2) => t2.trim()).filter((i2) => i2 !== "");
};
var markDroppable = (types) => {
  if (!types)
    types = [];
  const elements = [
    ...document.querySelectorAll("[data-drop]")
  ];
  for (const element of elements) {
    const dropTypes = stringToTypes(element.dataset.drop);
    if (types.find((type) => isTypeAllowed(dropTypes, type))) {
      element.classList.add("drag-target");
    } else {
      element.classList.remove("drag-target");
    }
  }
};
function start(evt) {
  const target = evt.target?.closest('[draggable="true"],a[href]');
  if (!target) {
    return;
  }
  target.classList.add("drag-source");
  const types = target.matches('[draggable="true"]') ? stringToTypes(target.dataset.drag || "text/html") : stringToTypes(target.dataset.drag || "url");
  for (const type of types) {
    const content = target.dataset.dragContent || (type === "text/html" ? target.innerHTML : target.textContent);
    evt.dataTransfer?.setData(type, content || "");
  }
  markDroppable(evt.dataTransfer?.types);
  evt.stopPropagation();
}
function drag(evt) {
  if (!dragInProgress()) {
    markDroppable(evt.dataTransfer?.types);
  }
  const target = evt.target.closest(".drag-target");
  if (target && evt.dataTransfer) {
    target.classList.add("drag-over");
    evt.dataTransfer.dropEffect = "copy";
  } else {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
function leave() {
  removeClass("drag-over");
}
function drop(evt) {
  const target = evt.target.closest(".drag-target");
  if (target) {
    const dropTypes = (target.dataset?.drop || "").split(";");
    for (const type of dropTypes) {
      if (isTypeAllowed(evt.dataTransfer?.types, type)) {
        if (type === "text/html") {
          target.innerHTML = evt.dataTransfer?.getData(type) || "";
        } else {
          target.textContent = evt.dataTransfer?.getData(type) || "";
        }
      }
    }
  }
  end();
}
var draggedElement = () => document.querySelector(".drag-source");
var isInitialized = false;
var init = () => {
  if (isInitialized) {
    return;
  }
  document.body.addEventListener("dragstart", start);
  document.body.addEventListener("dragenter", drag);
  document.body.addEventListener("dragover", drag);
  document.body.addEventListener("drop", drop);
  document.body.addEventListener("dragleave", leave);
  document.body.addEventListener("dragend", end);
  window.addEventListener("dragover", (evt) => evt.preventDefault());
  window.addEventListener("drop", (evt) => evt.preventDefault());
  isInitialized = true;
};

// src/data-table.ts
/*!
# table

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

```js
const { dataTable } = xinjsui
const { input } = xinjs.elements

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    width: 80,
    sort: false,
    visible: true
  },
  {
    prop: "name",
    width: 300,
    // custom cell using xinjs bindings to make the field editable
    dataCell() {
      return input({
        class: 'td',
        bindValue: '^.name',
        title: 'name',
        onMouseup: (event) => { event.stopPropagation() },
        onTouchend: (event) => { event.stopPropagation() },
      })
    },
  },
  {
    prop: "category",
    sort: "ascending",
    width: 150
  },
  {
    prop: "subcategory",
    width: 150
  },
]

preview.append(dataTable({
  multiple: true,
  array: emojiData,
  columns,
  rowHeight: 40,
  pinnedBottom: 2
}))
```
```css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: #fff4;
}

.preview xin-table {
  height: 100%;
}

.preview xin-table [part="pinnedTopRows"],
.preview xin-table [part="pinnedBottomRows"] {
  background: #ddd;
}
```

> In the preceding example, the `name` column is *editable* (and *bound*, try editing something and scrolling
> it out of view and back) and `multiple` select is enabled. In the console, you can try `$('xin-table').visibleRows`
> and $('xin-table').selectedRows`.

You can set the `<xin-table>`'s `array`, `columns`, and `filter` properties directly, or set its `value` to:

```
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
```

## `ColumnOptions`

You can configure the table's columns by providing it an array of `ColumnOptions`:

```
export interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  align?: string
  sort?: false | 'ascending' | 'descending'
  headerCell?: (options: ColumnOptions) => HTMLElement
  dataCell?: (options: ColumnOptions) => HTMLElement
}
```

## Selection

`<xin-table>` supports `select` and `multiple` boolean properties allowing rows to be selectable. Selected rows will
be given the `[aria-selected]` attribute, so style them as you wish.

`multiple` select supports shift-clicking and command/meta-clicking.

`<xin-table>` provides an `selectionChanged(visibleSelectedRows: any[]): void` callback property allowing you to respond to changes
in the selection, and also `selectedRows` and `visibleSelectedRows` properties.

The following methods are also provided:

- `<xin-table>.selectRow(row: any, select = true)` (de)selects specified row
- `<xin-table>.selectRows(rows?: any[], select = true)` (de)selects specified rows
- `<xin-table>.deSelect(rows?: any[])` deselects all or specified rows.

These are rather fine-grained but they're used internally by the selection code so they may as well be documented.

## Sorting

By default, the user can sort the table by any column which doesn't have a `sort === false`.

You can set the initial sort by setting the `sort` value of a specific column to `ascending`
or `descending`.

You can override this by setting the table's sort function (it's an `Array.sort()` callback)
to whatever you like, and you can replace the `headerCell` or set the `sort` of each column
to `false` if you have some specific sorting in mind.

You can disable sorting controls by adding the `nosort` attribute to the `<xin-table>`.

## Hiding (and Showing) Columns

By default, the user can show / hide columns by clicking via the column header menu.
You can remove this option by adding the `nohide` attribute to the `<xin-table>`

## Reordering Columns

By default, the user can reorder columns by dragging them around. You can disable this
by adding the `noreorder` attribute to the `<xin-table>`.

## Row Height

If you set the `<xin-table>`'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.

## Styling

Aside from row height (see previous) the component doesn't use the shadowDOM, so it's easy to override
its styles.

## Pinned Rows

The table supports two attributes, `pinnedTop` and `pinnedBottom` that let you pin the specified number
of top and bottom rows.
*/
function defaultWidth(array, prop, charWidth) {
  const example = array.find((item) => item[prop] !== undefined && item[prop] !== null);
  if (example !== undefined) {
    const value = example[prop];
    switch (typeof value) {
      case "string":
        if (value.match(/^\d+(\.\d+)?$/)) {
          return 6 * charWidth;
        } else if (value.includes(" ")) {
          return 20 * charWidth;
        } else {
          return 12 * charWidth;
        }
      case "number":
        return 6 * charWidth;
      case "boolean":
        return 5 * charWidth;
      case "object":
        return false;
      default:
        return 8 * charWidth;
    }
  }
  return false;
}
var { div: div3, span: span2, button: button3, template } = S;
var passThru = (array) => array;

class DataTable extends G {
  select = false;
  multiple = false;
  nosort = false;
  nohide = false;
  noreorder = false;
  selectionChanged = () => {};
  selectedKey = Symbol("selected");
  selectBinding = (elt, obj) => {
    elt.toggleAttribute("aria-selected", obj[this.selectedKey] === true);
  };
  pinnedTop = 0;
  pinnedBottom = 0;
  maxVisibleRows = 1e4;
  get value() {
    return {
      array: this.array,
      filter: this.filter,
      columns: this.columns
    };
  }
  set value(data) {
    const { array, columns, filter } = M(data);
    if (this._array !== array || this._columns !== columns || this._filter !== filter) {
      this.queueRender();
    }
    this._array = array || [];
    this._columns = columns || null;
    this._filter = filter || passThru;
  }
  rowData = {
    visible: [],
    pinnedTop: [],
    pinnedBottom: []
  };
  _array = [];
  _columns = null;
  _filter = passThru;
  charWidth = 15;
  rowHeight = 30;
  minColumnWidth = 30;
  get virtual() {
    return this.rowHeight > 0 ? { height: this.rowHeight } : undefined;
  }
  constructor() {
    super();
    this.rowData = Rn({
      [this.instanceId]: this.rowData
    }, true)[this.instanceId];
    this.initAttributes("rowHeight", "charWidth", "minColumnWidth", "select", "multiple", "pinnedTop", "pinnedBottom", "nosort", "nohide", "noreorder");
  }
  get array() {
    return this._array;
  }
  set array(newArray) {
    this._array = M(newArray);
    this.queueRender();
  }
  get filter() {
    return this._filter;
  }
  set filter(filterFunc) {
    if (this._filter !== filterFunc) {
      this._filter = filterFunc;
      this.queueRender();
    }
  }
  get sort() {
    if (this._sort) {
      return this._sort;
    }
    const sortColumn = this._columns?.find((c) => c.sort === "ascending" || c.sort === "descending");
    if (!sortColumn) {
      return;
    }
    const { prop } = sortColumn;
    return sortColumn.sort === "ascending" ? (a3, b2) => a3[prop] > b2[prop] ? 1 : -1 : (a3, b2) => a3[prop] > b2[prop] ? -1 : 1;
  }
  set sort(sortFunc) {
    if (this._sort !== sortFunc) {
      this._sort = sortFunc;
      this.queueRender();
    }
  }
  get columns() {
    if (!Array.isArray(this._columns)) {
      const { _array } = this;
      this._columns = Object.keys(_array[0] || {}).map((prop) => {
        const width = defaultWidth(_array, prop, this.charWidth);
        return {
          name: prop.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleLowerCase(),
          prop,
          align: typeof _array[0][prop] === "number" || _array[0][prop] !== "" && !isNaN(_array[0][prop]) ? "right" : "left",
          visible: width !== false,
          width: width ? width : 0
        };
      });
    }
    return this._columns;
  }
  set columns(newColumns) {
    this._columns = newColumns;
    this.queueRender();
  }
  get visibleColumns() {
    return this.columns.filter((c) => c.visible !== false);
  }
  content = null;
  getColumn(event) {
    const x = (event.touches !== undefined ? event.touches[0].clientX : event.clientX) - this.getBoundingClientRect().x;
    const epsilon = event.touches !== undefined ? 20 : 5;
    let boundaryX = 0;
    const log = [];
    const column = this.visibleColumns.find((options) => {
      if (options.visible !== false) {
        boundaryX += options.width;
        log.push(boundaryX);
        return Math.abs(x - boundaryX) < epsilon;
      }
    });
    return column;
  }
  setCursor = (event) => {
    const column = this.getColumn(event);
    if (column !== undefined) {
      this.style.cursor = "col-resize";
    } else {
      this.style.cursor = "";
    }
  };
  resizeColumn = (event) => {
    const column = this.getColumn(event);
    if (column !== undefined) {
      const origWidth = Number(column.width);
      const isTouchEvent = event.touches !== undefined;
      const touchIdentifier = isTouchEvent ? event.touches[0].identifier : undefined;
      trackDrag(event, (dx, _dy, event2) => {
        const touch2 = isTouchEvent ? [...event2.touches].find((touch3) => touch3.identifier === touchIdentifier) : true;
        if (touch2 === undefined) {
          return true;
        }
        const width = origWidth + dx;
        column.width = width > this.minColumnWidth ? width : this.minColumnWidth;
        this.setColumnWidths();
        if (event2.type === "mouseup") {
          return true;
        }
      }, "col-resize");
    }
  };
  selectRow(row, select = true) {
    if (select) {
      row[this.selectedKey] = true;
    } else {
      delete row[this.selectedKey];
    }
  }
  selectRows(rows, select = true) {
    for (const row of rows || this.array) {
      this.selectRow(row, select);
    }
  }
  deSelect(rows) {
    this.selectRows(rows, false);
  }
  rangeStart;
  updateSelection = (event) => {
    if (!this.select && !this.multiple) {
      return;
    }
    const { target } = event;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const tr = target.closest(".tr");
    if (!(tr instanceof HTMLElement)) {
      return;
    }
    const pickedItem = Tn(tr);
    if (pickedItem === false) {
      return;
    }
    const mouseEvent = event;
    const selection = window.getSelection();
    if (selection !== null) {
      selection.removeAllRanges();
    }
    const rows = this.visibleRows;
    if (this.multiple && mouseEvent.shiftKey && rows.length > 0 && this.rangeStart !== pickedItem) {
      const mode = this.rangeStart === undefined || this.rangeStart[this.selectedKey] === true;
      const [start2, finish] = [
        this.rangeStart !== undefined ? rows.indexOf(this.rangeStart) : 0,
        rows.indexOf(pickedItem)
      ].sort((a3, b2) => a3 - b2);
      if (start2 > -1) {
        for (let idx = start2;idx <= finish; idx++) {
          const row = rows[idx];
          this.selectRow(row, mode);
        }
      }
    } else if (this.multiple && mouseEvent.metaKey) {
      this.selectRow(pickedItem, !pickedItem[this.selectedKey]);
      const pickedIndex = rows.indexOf(pickedItem);
      const nextItem = rows[pickedIndex + 1];
      const previousItem = pickedIndex > 0 ? rows[pickedIndex - 1] : undefined;
      if (nextItem !== undefined && nextItem[this.selectedKey] === true) {
        this.rangeStart = nextItem;
      } else if (previousItem !== undefined && previousItem[this.selectedKey] === true) {
        this.rangeStart = previousItem;
      } else {
        this.rangeStart = undefined;
      }
    } else {
      this.rangeStart = pickedItem;
      this.deSelect();
      this.selectRow(pickedItem, true);
    }
    this.selectionChanged(this.visibleSelectedRows);
    for (const row of Array.from(this.querySelectorAll(".tr"))) {
      const item = Tn(row);
      this.selectBinding(row, item);
    }
  };
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mousemove", this.setCursor);
    this.addEventListener("mousedown", this.resizeColumn);
    this.addEventListener("touchstart", this.resizeColumn, { passive: true });
    this.addEventListener("mouseup", this.updateSelection);
    this.addEventListener("touchend", this.updateSelection);
  }
  setColumnWidths() {
    this.style.setProperty("--grid-columns", this.visibleColumns.map((c) => c.width + "px").join(" "));
    this.style.setProperty("--grid-row-width", this.visibleColumns.reduce((w2, c) => w2 + c.width, 0) + "px");
  }
  sortByColumn = (columnOptions, direction = "auto") => {
    for (const column of this.columns.filter((c) => M(c.sort) !== false)) {
      if (M(column) === columnOptions) {
        if (direction === "auto") {
          column.sort = column.sort === "ascending" ? "descending" : "ascending";
        } else {
          column.sort = direction;
        }
        this.queueRender();
      } else {
        delete column.sort;
      }
    }
  };
  popColumnMenu = (target, options) => {
    const { sortByColumn } = this;
    const hiddenColumns = this.columns.filter((column) => column.visible === false);
    const queueRender = this.queueRender.bind(this);
    const menu2 = [];
    if (!this.nosort && options.sort !== false) {
      menu2.push({
        caption: "Sort Ascending",
        icon: "sortAscending",
        action() {
          sortByColumn(options);
        }
      }, {
        caption: "Sort Descending",
        icon: "sortDescending",
        action() {
          sortByColumn(options, "descending");
        }
      });
    }
    if (!this.nohide) {
      if (menu2.length) {
        menu2.push(null);
      }
      menu2.push({
        caption: "Hide Column",
        icon: "eyeOff",
        enabled: () => options.visible !== true,
        action() {
          options.visible = false;
          queueRender();
        }
      }, {
        caption: "Show Column",
        icon: "eye",
        enabled: () => hiddenColumns.length > 0,
        menuItems: hiddenColumns.map((column) => {
          return {
            caption: column.name || column.prop,
            action() {
              delete column.visible;
              queueRender();
            }
          };
        })
      });
    }
    popMenu({
      target,
      menuItems: menu2
    });
  };
  headerCell = (options) => {
    const { popColumnMenu } = this;
    let ariaSort = "none";
    let sortIcon;
    switch (options.sort) {
      case "ascending":
        sortIcon = icons.sortAscending();
        ariaSort = "descending";
        break;
      case false:
        break;
      default:
        break;
      case "descending":
        ariaSort = "ascending";
        sortIcon = icons.sortDescending();
    }
    const menuButton = !(this.nosort && this.nohide) ? button3({
      class: "menu-trigger",
      onClick(event) {
        popColumnMenu(event.target, options);
        event.stopPropagation();
      }
    }, sortIcon || icons.moreVertical()) : {};
    return options.headerCell !== undefined ? options.headerCell(options) : span2({
      class: "th",
      role: "columnheader",
      ariaSort,
      style: {
        ...this.cellStyle,
        textAlign: options.align || "left"
      }
    }, span2(typeof options.name === "string" ? options.name : options.prop), span2({ style: { flex: "1" } }), menuButton);
  };
  dataCell = (options) => {
    if (options.dataCell !== undefined) {
      return options.dataCell(options);
    }
    return span2({
      class: "td",
      role: "cell",
      style: {
        ...this.cellStyle,
        textAlign: options.align || "left"
      },
      bindText: `^.${options.prop}`
    });
  };
  get visibleRows() {
    return M(this.rowData.visible);
  }
  get visibleSelectedRows() {
    return this.visibleRows.filter((obj) => obj[this.selectedKey]);
  }
  get selectedRows() {
    return this.array.filter((obj) => obj[this.selectedKey]);
  }
  rowTemplate(columns) {
    return template(div3({
      class: "tr",
      role: "row",
      bind: {
        value: "^",
        binding: { toDOM: this.selectBinding }
      }
    }, ...columns.map(this.dataCell)));
  }
  draggedColumn;
  dropColumn = (event) => {
    const target = event.target.closest(".drag-over");
    const targetIndex = Array.from(target.parentElement.children).indexOf(target);
    const dropped = this.visibleColumns[targetIndex];
    const draggedIndex = this.columns.indexOf(this.draggedColumn);
    const droppedIndex = this.columns.indexOf(dropped);
    this.columns.splice(draggedIndex, 1);
    this.columns.splice(droppedIndex, 0, this.draggedColumn);
    console.log({ event, target, targetIndex, draggedIndex, droppedIndex });
    this.queueRender();
    event.preventDefault();
    event.stopPropagation();
  };
  render() {
    super.render();
    this.rowData.pinnedTop = this.pinnedTop > 0 ? this._array.slice(0, this.pinnedTop) : [];
    this.rowData.pinnedBottom = this.pinnedBottom > 0 ? this._array.slice(this._array.length - this.pinnedBottom) : [];
    this.rowData.visible = this.filter(this._array.slice(this.pinnedTop, Math.min(this.maxVisibleRows, this._array.length - this.pinnedTop - this.pinnedBottom)));
    const { sort } = this;
    if (sort) {
      this.rowData.visible.sort(sort);
    }
    this.textContent = "";
    this.style.display = "flex";
    this.style.flexDirection = "column";
    const { visibleColumns } = this;
    this.style.setProperty("--row-height", `${this.rowHeight}px`);
    this.setColumnWidths();
    if (!this.noreorder) {
      init();
    }
    const dragId = this.instanceId + "-column-header";
    const columnHeaders = visibleColumns.map((column) => {
      const header = this.headerCell(column);
      if (!this.noreorder) {
        header.setAttribute("draggable", "true");
        header.dataset.drag = dragId;
        header.dataset.drop = dragId;
        header.addEventListener("dragstart", () => {
          this.draggedColumn = column;
        });
        header.addEventListener("drop", this.dropColumn);
      }
      return header;
    });
    this.append(div3({ class: "thead", role: "rowgroup", style: { touchAction: "none" } }, div3({
      class: "tr",
      role: "row"
    }, ...columnHeaders)));
    if (this.pinnedTop > 0) {
      this.append(div3({
        part: "pinnedTopRows",
        class: "tbody",
        role: "rowgroup",
        style: {
          flex: "0 0 auto",
          overflow: "hidden",
          height: `${this.rowHeight * this.pinnedTop}px`
        },
        bindList: {
          value: this.rowData.pinnedTop,
          virtual: this.virtual
        }
      }, this.rowTemplate(visibleColumns)));
    }
    this.append(div3({
      part: "visibleRows",
      class: "tbody",
      role: "rowgroup",
      style: {
        content: " ",
        minHeight: "100px",
        flex: "1 1 100px",
        overflow: "hidden auto"
      },
      bindList: {
        value: this.rowData.visible,
        virtual: this.virtual
      }
    }, this.rowTemplate(visibleColumns)));
    if (this.pinnedBottom > 0) {
      this.append(div3({
        part: "pinnedBottomRows",
        class: "tbody",
        role: "rowgroup",
        style: {
          flex: "0 0 auto",
          overflow: "hidden",
          height: `${this.rowHeight * this.pinnedBottom}px`
        },
        bindList: {
          value: this.rowData.pinnedBottom,
          virtual: this.virtual
        }
      }, this.rowTemplate(visibleColumns)));
    }
  }
}
var dataTable = DataTable.elementCreator({
  tag: "xin-table",
  styleSpec: {
    ":host": {
      overflow: "auto hidden"
    },
    ":host .thead, :host .tbody": {
      width: qn.gridRowWidth
    },
    ":host .tr": {
      display: "grid",
      gridTemplateColumns: qn.gridColumns,
      height: qn.rowHeight,
      lineHeight: qn.rowHeight
    },
    ":host .td, :host .th": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "flex",
      alignItems: "center"
    },
    ":host .th .menu-trigger": {
      color: "currentColor",
      background: "none",
      padding: 0,
      lineHeight: qn.touchSize,
      height: qn.touchSize,
      width: qn.touchSize
    },
    ':host [draggable="true"]': {
      cursor: "ew-resize"
    },
    ':host [draggable="true"]:active': {
      background: wn.draggedHeaderBg("#0004"),
      color: wn.draggedHeaderColor("#fff")
    },
    ":host .drag-over": {
      background: wn.dropHeaderBg("#fff4")
    }
  }
});
// src/editable-rect.ts
/*!
# editable-rect

`<xin-editable>` (`editableRect` is the `ElementCreator` and `EditableRect` is the class) is an element
for allowing the adjustment of another element's position and size. Simply insert it in a `position: absolute`
or `position: fixed` element and you can directly adjust its CSS positioning, including rotation.

Click on an element to adjust its position, dimensions, and rotation.

```js
const { editableRect, icons } = xinjsui
const { elements } = xinjs
const { button } = elements

function showTools(event) {
  event.stopPropagation()
  event.preventDefault()
}

const editable = editableRect(button({class: 'more-popup', onClick: showTools}, icons.moreVertical()))
preview.addEventListener('click', (event) => {
  const target = event.target
  if (['absolute', 'fixed'].includes(getComputedStyle(target).position)) {
    target.append(editable)
  } else {
    editable.remove()
  }
})
preview.addEventListener('change', event => console.log(event))
```
```html
<div class="editable" style="top: 20px; left: 20px; width: auto; height: auto; right: 20px; bottom: 20px;">
  <div class="editable" style="top: 20px; left: 20px; width: 200px; height: 150px;">
  </div>
  <div class="editable" style="bottom: 20px; top: 20px; width: 300px; height: auto; right: 20px;">
  </div>
</div>
```
```css
.preview .editable {
  position: absolute;
  box-shadow: inset 0 0 0 1px #0ccc;
  background: #0cc1;
}

.preview button.more-popup {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 2px;
  right: 2px;
  --text-color: black;
  background: transparent;
  box-shadow: none;
}

.previw button
```

## Snapping

When `EditableRect.snapToGrid === true` or the shift-key is depresseed, position will snap to `EditableRect.gridSize` pixels (default = 8).

Similarly `EditableRect.snapAngle === true` or the shift-key will snap rotation to increments of `EditableRect.angleSize` degrees (default = 15).

## Events

After an element's position, size, or rotation are adjusted a `change` event is triggered on the element.
*/
var { div: div4, slot: slot3 } = S;

class EditableRect extends G {
  static angleSize = 15;
  static gridSize = 8;
  static snapAngle = false;
  static snapToGrid = false;
  static styleSpec = {
    ":host": {
      "--handle-bg": "#fff4",
      "--handle-color": "#2228",
      "--handle-hover-bg": "#8ff8",
      "--handle-hover-color": "#222",
      "--handle-size": "20px",
      "--handle-padding": "2px"
    },
    ":host ::slotted(*)": {
      position: "absolute"
    },
    ":host > :not(style,slot)": {
      boxSizing: "border-box",
      content: '" "',
      position: "absolute",
      display: "flex",
      height: qn.handleSize,
      width: qn.handleSize,
      padding: qn.handlePadding,
      "--text-color": qn.handleColor,
      background: qn.handleBg
    },
    ":host > .drag-size": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "auto",
      width: "auto",
      background: "transparent",
      cursor: "ew-resize"
    },
    ':host > [part="rotate"]': {
      transform: `translateY(${qn.handleSize_50})`
    },
    ":host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg": {
      display: "none"
    },
    ":host .icon-unlock": {
      opacity: 0.5
    },
    ":host svg": {
      pointerEvents: "none"
    },
    ":host > *:hover": {
      "--text-color": qn.handleHoverColor,
      background: qn.handleHoverBg
    }
  };
  static snappedCoords(event, coords) {
    const { gridSize } = EditableRect;
    return EditableRect.snapToGrid || event.shiftKey ? coords.map((v) => Math.round(v / gridSize) * gridSize) : coords;
  }
  static snappedAngle(event, a3) {
    const { angleSize } = EditableRect;
    return EditableRect.snapAngle || event.shiftKey ? Math.round(a3 / angleSize) * angleSize : a3;
  }
  get locked() {
    const element = this.parentElement;
    if (element.style.inset) {
      return { left: true, top: true, bottom: true, right: true };
    }
    const right = element.style.right.match(/\d/) !== null;
    const left = !right || element.style.left.match(/\d/) !== null;
    const bottom = element.style.bottom.match(/\d/) !== null;
    const top = !bottom || element.style.top.match(/\d/) !== null;
    return { left, top, bottom, right };
  }
  set locked(locks) {
    const { bottom, right } = locks;
    let { left, top } = locks;
    const element = this.parentElement;
    const l2 = element.offsetLeft;
    const t2 = element.offsetTop;
    const w2 = element.offsetWidth;
    const h = element.offsetHeight;
    const r = element.offsetParent.offsetWidth - l2 - w2;
    const b2 = element.offsetParent.offsetHeight - t2 - h;
    Object.assign(element.style, {
      left: "",
      right: "",
      top: "",
      bottom: "",
      width: "",
      height: ""
    });
    if (!right)
      left = true;
    if (!bottom)
      top = true;
    if (left)
      element.style.left = l2 + "px";
    if (right)
      element.style.right = r + "px";
    if (left && right) {
      element.style.width = "auto";
    } else {
      element.style.width = w2 + "px";
    }
    if (top)
      element.style.top = t2 + "px";
    if (bottom)
      element.style.bottom = b2 + "px";
    if (top && bottom) {
      element.style.height = "auto";
    } else {
      element.style.height = h + "px";
    }
    this.queueRender();
  }
  get coords() {
    const { top, left, right, bottom } = this.parentElement.style;
    return {
      top: parseFloat(top),
      left: parseFloat(left),
      right: parseFloat(right),
      bottom: parseFloat(bottom)
    };
  }
  get left() {
    return this.parentElement.offsetLeft;
  }
  get width() {
    return this.parentElement.offsetWidth;
  }
  get right() {
    return this.parentElement.offsetParent.offsetWidth - (this.left + this.width);
  }
  get top() {
    return this.parentElement.offsetTop;
  }
  get height() {
    return this.parentElement.offsetHeight;
  }
  get bottom() {
    return this.parentElement.offsetParent.offsetHeight - (this.top + this.height);
  }
  triggerChange = () => {
    this.parentElement.dispatchEvent(new Event("change", {
      bubbles: true,
      composed: true
    }));
  };
  adjustPosition = (event) => {
    const { locked } = this;
    this.locked = locked;
    const target = this.parentElement;
    const { top, left, bottom, right } = this.coords;
    trackDrag(event, (dx, dy, dragEvent) => {
      [dx, dy] = EditableRect.snappedCoords(dragEvent, [dx, dy]);
      if (!isNaN(top)) {
        target.style.top = top + dy + "px";
      }
      if (!isNaN(bottom)) {
        target.style.bottom = bottom - dy + "px";
      }
      if (!isNaN(left)) {
        target.style.left = left + dx + "px";
      }
      if (!isNaN(right)) {
        target.style.right = right - dx + "px";
      }
      if (dragEvent.type === "mouseup") {
        this.triggerChange();
        return true;
      }
    });
  };
  resize = (event) => {
    const target = this.parentElement;
    const { locked } = this;
    this.locked = Object.assign({
      left: true,
      top: true,
      right: true,
      bottom: true
    });
    const [right, bottom] = [this.right, this.bottom];
    trackDrag(event, (dx, dy, dragEvent) => {
      let r = right - dx;
      let b2 = bottom - dy;
      [r, b2] = EditableRect.snappedCoords(dragEvent, [r, b2]);
      target.style.right = r + "px";
      target.style.bottom = b2 + "px";
      if (dragEvent.type === "mouseup") {
        this.locked = locked;
        this.triggerChange();
        return true;
      }
    });
  };
  adjustSize = (event) => {
    const target = this.parentElement;
    const { locked } = this;
    const dimension = event.target.getAttribute("part");
    this.locked = Object.assign({
      left: true,
      right: true,
      top: true,
      bottom: true
    });
    const original = this[dimension];
    trackDrag(event, (dx, dy, dragEvent) => {
      const [adjusted] = EditableRect.snappedCoords(dragEvent, [
        original + (["left", "right"].includes(dimension) ? dx : dy) * (["right", "bottom"].includes(dimension) ? -1 : 1)
      ]);
      target.style[dimension] = adjusted + "px";
      if (dragEvent.type === "mouseup") {
        this.locked = locked;
        this.triggerChange();
        return true;
      }
    });
  };
  get rect() {
    return this.parentElement.getBoundingClientRect();
  }
  get center() {
    const rect = this.parentElement.getBoundingClientRect();
    return {
      x: rect.x + rect.width * 0.5,
      y: rect.y + rect.height * 0.5
    };
  }
  get element() {
    return this.parentElement;
  }
  adjustRotation = (event) => {
    const { center } = this;
    const { transformOrigin } = this.element.style;
    if (!transformOrigin) {
      this.element.style.transformOrigin = "50% 50%";
    }
    trackDrag(event, (_dx, _dy, dragEvent) => {
      const { clientX, clientY } = dragEvent;
      const x = clientX - center.x;
      const y = clientY - center.y;
      let alpha = y > 0 ? 90 : -90;
      if (x !== 0) {
        alpha = Math.atan2(y, x) * 180 / Math.PI;
      }
      alpha = EditableRect.snappedAngle(dragEvent, alpha);
      if (alpha === 0) {
        this.element.style.transformOrigin = "";
        this.element.style.transform = "";
      } else {
        this.element.style.transform = `rotate(${alpha}deg)`;
      }
      this.triggerChange();
      return dragEvent.type === "mouseup";
    });
  };
  toggleLock = (event) => {
    const { locked } = this;
    const which = event.target.title.split(" ")[1];
    locked[which] = !locked[which];
    this.locked = locked;
    this.queueRender();
    event.stopPropagation();
    event.preventDefault();
  };
  content = () => [
    div4({
      part: "move",
      style: { top: "50%", left: "50%", transform: "translate(-50%,-50%)" }
    }, icons.move()),
    div4({
      part: "left",
      title: "resize left",
      class: "drag-size",
      style: { left: "-6px", width: "8px" }
    }),
    div4({
      part: "right",
      title: "resize right",
      class: "drag-size",
      style: { left: "calc(100% - 2px)", width: "8px" }
    }),
    div4({
      part: "top",
      title: "resize top",
      class: "drag-size",
      style: { top: "-6px", height: "8px", cursor: "ns-resize" }
    }),
    div4({
      part: "bottom",
      title: "resize bottom",
      class: "drag-size",
      style: { top: "calc(100% - 2px)", height: "8px", cursor: "ns-resize" }
    }),
    div4({
      part: "resize",
      style: { top: "100%", left: "100%" }
    }, icons.resize()),
    div4({
      part: "rotate",
      style: { top: "50%", right: "0" }
    }, icons.refresh()),
    div4({
      part: "lockLeft",
      title: "lock left",
      style: { top: "50%", left: 0, transform: "translate(-100%, -50%)" }
    }, icons.unlock(), icons.lock()),
    div4({
      part: "lockRight",
      title: "lock right",
      style: { top: "50%", left: "100%", transform: "translate(0%, -50%)" }
    }, icons.unlock(), icons.lock()),
    div4({
      part: "lockTop",
      title: "lock top",
      style: { top: 0, left: "50%", transform: "translate(-50%, -100%)" }
    }, icons.unlock(), icons.lock()),
    div4({
      part: "lockBottom",
      title: "lock bottom",
      style: { top: "100%", left: "50%", transform: "translate(-50%, 0%)" }
    }, icons.unlock(), icons.lock()),
    slot3()
  ];
  constructor() {
    super();
    this.initAttributes("rotationSnap", "positionSnap");
  }
  connectedCallback() {
    super.connectedCallback();
    const {
      left,
      right,
      top,
      bottom,
      lockLeft,
      lockRight,
      lockTop,
      lockBottom,
      move,
      resize,
      rotate
    } = this.parts;
    const PASSIVE2 = { passive: true };
    [left, right, top, bottom].forEach((elt) => {
      elt.addEventListener("mousedown", this.adjustSize, PASSIVE2);
      elt.addEventListener("touchstart", this.adjustSize, PASSIVE2);
    });
    [lockLeft, lockRight, lockTop, lockBottom].forEach((elt) => {
      elt.addEventListener("click", this.toggleLock);
    });
    resize.addEventListener("mousedown", this.resize, PASSIVE2);
    move.addEventListener("mousedown", this.adjustPosition, PASSIVE2);
    rotate.addEventListener("mousedown", this.adjustRotation, PASSIVE2);
    resize.addEventListener("touchstart", this.resize, PASSIVE2);
    move.addEventListener("touchstart", this.adjustPosition, PASSIVE2);
    rotate.addEventListener("touchstart", this.adjustRotation, PASSIVE2);
  }
  render() {
    super.render();
    if (!this.parentElement) {
      return;
    }
    const { lockLeft, lockRight, lockTop, lockBottom } = this.parts;
    const { left, right, top, bottom } = this.locked;
    lockLeft.toggleAttribute("locked", left);
    lockRight.toggleAttribute("locked", right);
    lockTop.toggleAttribute("locked", top);
    lockBottom.toggleAttribute("locked", bottom);
  }
}
var editableRect = EditableRect.elementCreator({
  tag: "xin-editable"
});
// src/filter-builder.ts
/*!
# filter

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of `Filter` objects.

```js
const { elements } = xinjs
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return [...new Set(words)]
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
    tags: randomWords()
  })
}

const { span } = elements
const tagsBinding = {
  value: '^.tags',
  binding: {
    toDOM(element, value) {
      element.classList.add('tag-list')
      element.textContent = ''
      element.append(...value.map(tag => span(tag, {class: 'tag'})))
    }
  }
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 90
  },
  {
    prop: 'number',
    align: 'right',
    width: 90
  },
  {
    prop: 'string',
    width: 200
  },
  {
    prop: 'tags',
    width: 200,
    dataCell() {
      return elements.div({ bind: tagsBinding })
    }
  },
]

const table = dataTable({ array, columns })
const filter = filterBuilder({
  fields: columns,
  onChange(event) {
    table.filter = filter.filter
  }
})
preview.append(filter, table)
```
```css
.preview {
  display: flex;
  flex-direction: column;
}

.preview xin-table {
  flex: 1 1 auto;
}

.preview .tag-list {
  display: flex;
  font-size: 80%;
  align-items: center;
  gap: 2px;
}

.preview .tag {
  display: inline-block;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 20px;
  height: 20px;
  color: var(--brand-text-color);
  background: var(--brand-color);
}
```

## serialization

The current state of a `<xin-filter>` can be serialized as, and restored from, a Javascript object (which itself
can easily be converted into JSON or a URL component) via its `state` property. Obviously, a `<xin-filter>` can
only restore state if it has the necessary constituent `filters`.

## availableFilters

`<xin-filter>` has a default set of `FilterMaker` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to `contains`, `equals`, `after`, and `isTrue`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are `true`
- **false** looks for fields that are `false`
- **hasTags** looks for fields that are arrays containing all the (space/comma) delimited strings
- **doesNotHaveTags** looks for fields that are arrays containing *none* of the strings

**Note**: the filters marked with an * have negative version (e.g. does not contain).

```
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
```
*/
var { div: div5, input: input2, select, option, button: button4, span: span3 } = S;
var passThru2 = (array) => array;
var NULL_FILTER_DESCRIPTION = "null filter, everything matches";
var availableFilters = {
  contains: {
    caption: "contains",
    negative: "does not contain",
    makeTest: (value) => {
      value = value.toLocaleLowerCase();
      return (obj) => String(obj).toLocaleLowerCase().includes(value);
    }
  },
  hasTags: {
    caption: "has tags",
    makeTest: (value) => {
      const tags = value.split(/[\s,]/).map((tag2) => tag2.trim().toLocaleLowerCase()).filter((tag2) => tag2 !== "");
      console.log(tags);
      return (obj) => Array.isArray(obj) && tags.find((tag2) => !obj.includes(tag2)) === undefined;
    }
  },
  doesNotHaveTags: {
    caption: "does not have tags",
    makeTest: (value) => {
      const tags = value.split(/[\s,]/).map((tag2) => tag2.trim().toLocaleLowerCase()).filter((tag2) => tag2 !== "");
      console.log(tags);
      return (obj) => Array.isArray(obj) && tags.find((tag2) => obj.includes(tag2)) === undefined;
    }
  },
  equals: {
    caption: "=",
    negative: "≠",
    makeTest: (value) => {
      if (isNaN(Number(value))) {
        value = String(value).toLocaleLowerCase();
        return (obj) => String(obj).toLocaleLowerCase() === value;
      }
      const num = Number(value);
      return (obj) => Number(obj) === num;
    }
  },
  after: {
    caption: "is after",
    negative: "is before",
    makeTest: (value) => {
      const date = new Date(value);
      return (obj) => new Date(obj) > date;
    }
  },
  greaterThan: {
    caption: ">",
    negative: "≤",
    makeTest: (value) => {
      if (!isNaN(Number(value))) {
        const num = Number(value);
        return (obj) => Number(obj) > num;
      }
      value = value.toLocaleLowerCase();
      return (obj) => String(obj).toLocaleLowerCase() > value;
    }
  },
  truthy: {
    caption: "is true/non-empty/non-zero",
    negative: "is false/empty/zero",
    needsValue: false,
    makeTest: () => (obj) => !!obj
  },
  isTrue: {
    caption: "= true",
    needsValue: false,
    makeTest: () => (obj) => obj === true
  },
  isFalse: {
    caption: "= false",
    needsValue: false,
    makeTest: () => (obj) => obj === false
  }
};
var passAnything = {
  description: "anything",
  test: () => true
};
function getSelectText(select2) {
  return select2.options[select2.selectedIndex].text;
}

class FilterPart extends G {
  fields = [];
  filters = availableFilters;
  haystack = "*";
  condition = "";
  needle = "";
  content = () => [
    select({ part: "haystack" }),
    icons.chevronDown(),
    select({ part: "condition" }),
    icons.chevronDown(),
    input2({ part: "needle", type: "search" }),
    span3({ part: "padding" }),
    button4({ part: "remove", title: "delete" }, icons.trash())
  ];
  filter = passAnything;
  constructor() {
    super();
    this.initAttributes("haystack", "condition", "needle");
  }
  get state() {
    const { haystack, needle, condition } = this.parts;
    return {
      haystack: haystack.value,
      needle: needle.value,
      condition: condition.value
    };
  }
  set state(newState) {
    Object.assign(this, newState);
  }
  buildFilter = () => {
    const { haystack, condition, needle } = this.parts;
    const negative = condition.value.startsWith("~");
    const key = negative ? condition.value.slice(1) : condition.value;
    const filter = this.filters[key];
    needle.hidden = filter.needsValue === false;
    const baseTest = filter.needsValue === false ? filter.makeTest(undefined) : filter.makeTest(needle.value);
    const field = haystack.value;
    let test;
    if (field !== "*") {
      test = negative ? (obj) => !baseTest(obj[field]) : (obj) => baseTest(obj[field]);
    } else {
      test = negative ? (obj) => Object.values(obj).find((v) => !baseTest(v)) !== undefined : (obj) => Object.values(obj).find((v) => baseTest(v)) !== undefined;
    }
    const matchValue = filter.needsValue !== false ? ` "${needle.value}"` : "";
    const description = `${getSelectText(haystack)} ${getSelectText(condition)}${matchValue}`;
    this.filter = {
      description,
      test
    };
    this.parentElement?.dispatchEvent(new Event("change"));
  };
  connectedCallback() {
    super.connectedCallback();
    const { haystack, condition, needle, remove } = this.parts;
    haystack.addEventListener("change", this.buildFilter);
    condition.addEventListener("change", this.buildFilter);
    needle.addEventListener("input", this.buildFilter);
    haystack.value = this.haystack;
    condition.value = this.condition;
    needle.value = this.needle;
    remove.addEventListener("click", () => {
      const { parentElement } = this;
      this.remove();
      parentElement?.dispatchEvent(new Event("change"));
    });
  }
  render() {
    super.render();
    const { haystack, condition, needle } = this.parts;
    haystack.textContent = "";
    haystack.append(option("any field", { value: "*" }), ...this.fields.map((field) => {
      const caption = field.name || field.prop;
      return option(`${caption}`, { value: field.prop });
    }));
    condition.textContent = "";
    const conditions = Object.keys(this.filters).map((key) => {
      const filter = this.filters[key];
      return filter.negative !== undefined ? [
        option(filter.caption, { value: key }),
        option(filter.negative, { value: "~" + key })
      ] : option(filter.caption, { value: key });
    }).flat();
    condition.append(...conditions);
    if (this.haystack !== "") {
      haystack.value = this.haystack;
    }
    if (this.condition !== "") {
      condition.value = this.condition;
    }
    if (this.needle !== "") {
      needle.value = this.needle;
    }
    this.buildFilter();
  }
}
var filterPart = FilterPart.elementCreator({
  tag: "xin-filter-part",
  styleSpec: {
    ":host": {
      display: "flex"
    },
    ':host svg[class^="icon-"]:': {
      height: "var(--font-size, 16px)",
      verticalAlign: "middle",
      fill: "var(--text-color)",
      pointerEvents: "none"
    },
    ':host [part="haystack"], :host [part="condition"]': {
      flex: "1"
    },
    ':host [part="needle"]': {
      flex: 2
    },
    ':host [hidden]+[part="padding"]': {
      display: "block",
      content: " ",
      flex: "1 1 auto"
    }
  }
});

class FilterBuilder extends G {
  _fields = [];
  get fields() {
    return this._fields;
  }
  set fields(_fields) {
    this._fields = _fields;
    this.queueRender();
  }
  get state() {
    const { filterContainer } = this.parts;
    return [...filterContainer.children].map((part) => part.state);
  }
  set state(parts) {
    const { fields, filters } = this;
    const { filterContainer } = this.parts;
    filterContainer.textContent = "";
    for (const state of parts) {
      filterContainer.append(filterPart({ fields, filters, ...state }));
    }
  }
  filter = passThru2;
  description = NULL_FILTER_DESCRIPTION;
  addFilter = () => {
    const { fields, filters } = this;
    const { filterContainer } = this.parts;
    filterContainer.append(filterPart({ fields, filters }));
  };
  content = () => [
    button4({
      part: "add",
      title: "add filter condition",
      onClick: this.addFilter,
      class: "round"
    }, icons.plus()),
    div5({ part: "filterContainer" }),
    button4({ part: "reset", title: "reset filter", onClick: this.reset }, icons.x())
  ];
  filters = availableFilters;
  reset = () => {
    const { fields, filters } = this;
    const { filterContainer } = this.parts;
    this.description = NULL_FILTER_DESCRIPTION;
    this.filter = passThru2;
    filterContainer.textContent = "";
    filterContainer.append(filterPart({ fields, filters }));
    this.dispatchEvent(new Event("change"));
  };
  buildFilter = () => {
    const { filterContainer } = this.parts;
    if (filterContainer.children.length === 0) {
      this.reset();
      return;
    }
    const filters = [...filterContainer.children].map((filterPart2) => filterPart2.filter);
    const tests = filters.map((filter) => filter.test);
    this.description = filters.map((filter) => filter.description).join(", ");
    this.filter = (array) => array.filter((obj) => tests.find((f) => f(obj) === false) === undefined);
    this.dispatchEvent(new Event("change"));
  };
  connectedCallback() {
    super.connectedCallback();
    const { filterContainer } = this.parts;
    filterContainer.addEventListener("change", this.buildFilter);
    this.reset();
  }
  render() {
    super.render();
  }
}
var filterBuilder = FilterBuilder.elementCreator({
  tag: "xin-filter",
  styleSpec: {
    ":host": {
      height: "auto",
      display: "grid",
      gridTemplateColumns: "32px calc(100% - 64px) 32px",
      alignItems: "center"
    },
    ':host [part="filterContainer"]': {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      flex: "1 1 auto"
    },
    ':host [part="add"], :host [part="reset"]': {
      "--button-size": "var(--touch-size, 32px)",
      borderRadius: "999px",
      height: "var(--button-size)",
      lineHeight: "var(--button-size)",
      margin: "0",
      padding: "0",
      textAlign: "center",
      width: "var(--button-size)",
      flex: "0 0 var(--button-size)"
    }
  }
});
// src/form.ts
/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

```js
const form = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', form.submit)
```
```html
<xin-form value='{"formInitializer": "initial value from form"}'>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <xin-field key="color" type="color" value="pink">
    favorite color
  </xin-field>
  <xin-field key="select">
    Custom Field
    <select slot="input">
      <option>This</option>
      <option>That</option>
      <option>The Other</option>
    </select>
  </xin-field>
  <xin-field key="tags">
    Tag List
    <xin-tag-list editable slot="input" available-tags="pick me,no pick me"></xin-tag-list>
  </xin-field>
  <xin-field key="rating">
    Rate this form!
    <xin-rating slot="input"></xin-rating>
  </xin-field>
  <xin-field key="like">
    Do you like it?
    <xin-segmented
      choices="yes=Yes:thumbsUp,no=No:thumbsDown"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="relationship">
    Relationship Status
    <xin-segmented
      style="--segmented-direction: column; --segmented-align-items: stretch"
      choices="couple=In a relationship,single=Single"
      other="It's complicated…"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="amount" fixed-precision="2" type="number" prefix="$" suffix="(USD)">
    What's it worth?
  </xin-field>
  <xin-field key="valueInitializer" value="initial value from field">
    Initialized by field
  </xin-field>
  <xin-field key="formInitializer">
    Initialized by form
  </xin-field>
  <button slot="footer" class="submit">Submit</button>
</xin-form>
```
```css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: #ddd;
  justify-content: center;
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

.preview h3, .preview h4 {
  margin: 0;
  padding: 0;
}

.preview ::part(content) {
  padding: var(--spacing);
  gap: var(--spacing);
  background: #e8e8e8;
}

.preview label {
  display: grid;
  grid-template-columns: 180px auto 100px;
  gap: var(--spacing);
}

.preview label [part="caption"] {
  text-align: right;
}

.preview label:has(:invalid:required)::after {
  content: '* required'
}

@media (max-width: 500px) {
  .preview label [part="caption"] {
    text-align: center;
  }

  .preview label {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: stretch;
    gap: calc(var(--spacing) * 0.5);
  }

  .preview label:has(:invalid:required)::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '*'
  }

  .preview xin-field [part="field"],
  .preview xin-field [part="input"] > * {
    display: flex;
    justify-content: center;
  }
}

.preview :invalid {
  box-shadow: inset 0 0 2px red;
}
```

## `<xin-form>`

`<xin-form>` prevents the default form behavior when a `submit` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its `submitCallback(value: {[key: string]: any}, isValid: boolean): void`
method.

`<xin-form>` offers a `fields` proxy that allows values stored in the form to be updated. Any changes will trigger a `change`
event on the `<xin-form>` (in addition to any events fired by form fields).

`<xin-form>` instances have `value` and `isValid` properties you can access any time. Note that `isValid` is computed
and triggers form validation.

`<xin-form>` has `header` and `footer` `<slot>`s in addition to default `<slot>`, which is tucked inside a `<form>` element.

## `<xin-field>`

`<xin-field>` is a simple web-component with no shadowDOM that combines an `<input>` field wrapped with a `<label>`. Any
content of the custom-element will become the `caption` or you can simply set the `caption` attribute.

You can replace the default `<input>` field by adding an element to the slot `input` (it's a `xinSlot`) whereupon
the `value` of that element will be used instead of the built-in `<input>`. (The `<input>` is retained and
is used to drive form-validation.)

`<xin-field>` supports the following attributes:

- `caption` labels the field
- `key` determines the form property the field will populate
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder

The `text` type populates the `input` slot with a `<textarea>` element.

The `color` type populates the `input` slot with a `<xin-color>` element (and thus supports colors with alpha values).

<xin-css-var-editor element-selector="xin-field" target-selector=".preview"></xin-css-var-editor>
*/
var { form, slot: slot4, xinSlot, label, input: input3, span: span4 } = S;
function attr(element, name, value) {
  if (value !== "" && value !== false) {
    element.setAttribute(name, value);
  } else {
    element.removeAttribute(name);
  }
}
function getInputValue(input4) {
  switch (input4.type) {
    case "checkbox":
      return input4.checked;
    case "radio": {
      const picked = input4.parentElement?.querySelector(`input[type="radio"][name="${input4.name}"]:checked`);
      return picked ? picked.value : null;
    }
    case "range":
    case "number":
      return Number(input4.value);
    default:
      return Array.isArray(input4.value) && input4.value.length === 0 ? null : input4.value;
  }
}
function setElementValue(input4, value) {
  if (!(input4 instanceof HTMLElement)) {} else if (input4 instanceof HTMLInputElement) {
    switch (input4.type) {
      case "checkbox":
        input4.checked = value;
        break;
      case "radio":
        input4.checked = value === input4.value;
        break;
      default:
        input4.value = String(value || "");
    }
  } else {
    if (value != null || input4.value != null) {
      input4.value = String(value || "");
    }
  }
}

class XinField extends G {
  caption = "";
  key = "";
  type = "";
  optional = false;
  pattern = "";
  placeholder = "";
  min = "";
  max = "";
  step = "";
  fixedPrecision = -1;
  value = null;
  content = label(xinSlot({ part: "caption" }), span4({ part: "field" }, xinSlot({ part: "input", name: "input" }), input3({ part: "valueHolder" })));
  constructor() {
    super();
    this.initAttributes("caption", "key", "type", "optional", "pattern", "placeholder", "min", "max", "step", "fixedPrecision", "prefix", "suffix");
  }
  valueChanged = false;
  handleChange = () => {
    const { input: input4, valueHolder } = this.parts;
    const inputElement = input4.children[0] || valueHolder;
    if (inputElement !== valueHolder) {
      valueHolder.value = inputElement.value;
    }
    this.value = getInputValue(inputElement);
    this.valueChanged = true;
    const form2 = this.closest("xin-form");
    if (form2 && this.key !== "") {
      switch (this.type) {
        case "checkbox":
          form2.fields[this.key] = inputElement.checked;
          break;
        case "number":
        case "range":
          if (this.fixedPrecision > -1) {
            inputElement.value = Number(inputElement.value).toFixed(this.fixedPrecision);
            form2.fields[this.key] = Number(inputElement.value);
          } else {
            form2.fields[this.key] = Number(inputElement.value);
          }
          break;
        default:
          form2.fields[this.key] = inputElement.value;
      }
    }
  };
  initialize(form2) {
    const initialValue = form2.fields[this.key] !== undefined ? form2.fields[this.key] : this.value;
    if (initialValue != null && initialValue !== "") {
      if (form2.fields[this.key] == null)
        form2.fields[this.key] = initialValue;
      this.value = initialValue;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    const { input: input4, valueHolder } = this.parts;
    const form2 = this.closest(XinForm.tagName);
    if (form2 instanceof XinForm) {
      this.initialize(form2);
    }
    valueHolder.addEventListener("change", this.handleChange);
    input4.addEventListener("change", this.handleChange, true);
  }
  render() {
    if (this.valueChanged) {
      this.valueChanged = false;
      return;
    }
    const { input: input4, caption, valueHolder, field } = this.parts;
    if (caption.textContent?.trim() === "") {
      caption.append(this.caption !== "" ? this.caption : this.key);
    }
    if (this.type === "text") {
      input4.textContent = "";
      const textarea = S.textarea({ value: this.value });
      if (this.placeholder) {
        textarea.setAttribute("placeholder", this.placeholder);
      }
      input4.append(textarea);
    } else if (this.type === "color") {
      input4.textContent = "";
      input4.append(colorInput({ value: this.value }));
    } else if (input4.children.length === 0) {
      attr(valueHolder, "placeholder", this.placeholder);
      attr(valueHolder, "type", this.type);
      attr(valueHolder, "pattern", this.pattern);
      attr(valueHolder, "min", this.min);
      attr(valueHolder, "max", this.max);
      attr(valueHolder, "step", this.step);
    }
    setElementValue(valueHolder, this.value);
    setElementValue(input4.children[0], this.value);
    this.prefix ? field.setAttribute("prefix", this.prefix) : field.removeAttribute("prefix");
    this.suffix ? field.setAttribute("suffix", this.suffix) : field.removeAttribute("suffix");
    valueHolder.classList.toggle("hidden", input4.children.length > 0);
    if (input4.children.length > 0) {
      valueHolder.setAttribute("tabindex", "-1");
    } else {
      valueHolder.removeAttribute("tabindex");
    }
    input4.style.display = input4.children.length === 0 ? "none" : "";
    attr(valueHolder, "required", !this.optional);
  }
}

class XinForm extends G {
  context = {};
  value = {};
  get isValid() {
    const widgets = [...this.querySelectorAll("*")].filter((widget) => widget.required !== undefined);
    return widgets.find((widget) => !widget.reportValidity()) === undefined;
  }
  static styleSpec = {
    ":host": {
      display: "flex",
      flexDirection: "column"
    },
    ":host::part(header), :host::part(footer)": {
      display: "flex"
    },
    ":host::part(content)": {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden auto",
      height: "100%",
      width: "100%",
      position: "relative",
      boxSizing: "border-box"
    },
    ":host form": {
      display: "flex",
      flex: "1 1 auto",
      position: "relative",
      overflow: "hidden"
    }
  };
  content = [
    slot4({ part: "header", name: "header" }),
    form({ part: "form" }, slot4({ part: "content" })),
    slot4({ part: "footer", name: "footer" })
  ];
  getField = (key) => {
    return this.querySelector(`xin-field[key="${key}"]`);
  };
  get fields() {
    if (typeof this.value === "string") {
      try {
        this.value = JSON.parse(this.value);
      } catch (e2) {
        console.log("<xin-form> could not use its value, expects valid JSON");
        this.value = {};
      }
    }
    const { getField } = this;
    const dispatch = this.dispatchEvent.bind(this);
    return new Proxy(this.value, {
      get(target, prop) {
        return target[prop];
      },
      set(target, prop, newValue) {
        if (target[prop] !== newValue) {
          target[prop] = newValue;
          const field = getField(prop);
          if (field) {
            field.value = newValue;
          }
          dispatch(new Event("change"));
        }
        return true;
      }
    });
  }
  set fields(values) {
    const fields = [...this.querySelectorAll(XinField.tagName)];
    for (const field of fields) {
      field.value = values[field.key];
    }
  }
  submit = () => {
    this.parts.form.dispatchEvent(new Event("submit"));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.submitCallback(this.value, this.isValid);
  };
  submitCallback = (value, isValid) => {
    console.log("override submitCallback to handle this data", {
      value,
      isValid
    });
  };
  connectedCallback() {
    super.connectedCallback();
    const { form: form2 } = this.parts;
    form2.addEventListener("submit", this.handleSubmit);
  }
}
var xinField = XinField.elementCreator({
  tag: "xin-field",
  styleSpec: {
    ':host [part="field"]': {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: wn.prefixSuffixGap("8px")
    },
    ':host [part="field"][prefix]::before': {
      content: "attr(prefix)"
    },
    ':host [part="field"][suffix]::after': {
      content: "attr(suffix)"
    },
    ':host [part="field"] > *, :host [part="input"] > *': {
      width: "100%"
    },
    ":host textarea": {
      resize: "none"
    },
    ':host input[type="checkbox"]': {
      width: "fit-content"
    },
    ":host .hidden": {
      position: "absolute",
      pointerEvents: "none",
      opacity: 0
    }
  }
});
var xinForm = XinForm.elementCreator({
  tag: "xin-form"
});
// src/gamepad.ts
/*!
# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

`gamepadState()` gives you a condensed version of active gamepad state

`gamepadText()` provides the above in minimal text form for debugging

```js
const { elements } = xinjs
const { gamepadText } = xinjsui

const pre = elements.pre()
preview.append(pre)

const interval = setInterval(() => {
  if (!pre.closest('body')) {
    clearInterval(interval)
  } else {
    pre.textContent = gamepadText()
  }
}, 100)
```

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

`xrControllers(babylonjsXRHelper)` returns an `XinXRControllerMap` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

`xrControllerText(controllerMap)` renders the map output by the above in a compact form
which is useful when debugging.
*/
function gamepadState() {
  const gamepads = navigator.getGamepads().filter((p2) => p2 !== null);
  return gamepads.map((p2) => {
    const { id, axes, buttons } = p2;
    return {
      id,
      axes,
      buttons: buttons.map((button5, index) => {
        const { pressed, value } = button5;
        return {
          index,
          pressed,
          value
        };
      }).filter((b2) => b2.pressed || b2.value !== 0).reduce((map, button5) => {
        map[button5.index] = button5.value;
        return map;
      }, {})
    };
  });
}
function gamepadText() {
  const state = gamepadState();
  return state.length === 0 ? "no active gamepads" : state.map(({ id, axes, buttons }) => {
    const axesText = axes.map((a3) => a3.toFixed(2)).join(" ");
    const buttonText = Object.keys(buttons).map((key) => `[${key}](${buttons[Number(key)].toFixed(2)})`).join(" ");
    return `${id}
${axesText}
${buttonText}`;
  }).join(`
`);
}
function xrControllers(xrHelper) {
  const controllers = {};
  xrHelper.input.onControllerAddedObservable.add((controller) => {
    controller.onMotionControllerInitObservable.add((mc) => {
      const state = {};
      const componentIds = mc.getComponentIds();
      componentIds.forEach((componentId) => {
        const component = mc.getComponent(componentId);
        state[componentId] = { pressed: component.pressed };
        component.onButtonStateChangedObservable.add(() => {
          state[componentId].pressed = component.pressed;
        });
        if (component.onAxisValueChangedObservable) {
          state[componentId].axes = [];
          component.onAxisValueChangedObservable.add((axes) => {
            state[componentId].axes = axes;
          });
        }
      });
      controllers[mc.handedness] = state;
    });
  });
  return controllers;
}
function xrControllersText(controllers) {
  if (controllers === undefined || Object.keys(controllers).length === 0) {
    return "no xr inputs";
  }
  return Object.keys(controllers).map((controllerId) => {
    const state = controllers[controllerId];
    const buttonText = Object.keys(state).filter((componentId) => state[componentId].pressed).join(" ");
    return `${controllerId}
${buttonText}`;
  }).join(`
`);
}
// src/tab-selector.ts
/*!
# tabs

`<xin-tabs>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

tabSelector.onCloseTab = body => {
  if (!confirm(`Are you sure you want to close the ${body.getAttribute('name')} tab?`)) {
    return false
  }
}

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = `new tab ${++bodycount}`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
```
```html
<xin-tabs>
  <div name="first">first body</div>
  <div name="second" data-close>
    <template role="tab">
      <xin-icon
        style="
          display: inline-block;
          width: 16px;
          height: 16px;
          transform: translateY(2px);
          margin-right: 4px;
          fill: var(--brand-color);
        "
        icon="eye"
      ></xin-icon>
      <span>Ooooh!!!</span>
    </template>
    look at the html…
  </div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <xin-icon icon="plus"></xin-icon>
  </button>
</xin-tabs>
```
```css
  .preview xin-tabs {
    height: 100%;
  }

  .preview div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }

  .preview .add {
    width: 38px;
    line-height: 38px;
    height: 38px;
    padding: 0;
  }
```

The `<xin-tabs>`s `value` is the index of its active body.

A `<xin-tabs>` has `addTabBody(body: HTMLElement, select?: boolean)` and
`removeTabBody(body: number | HTMLElement)` methods for updating its content.

You can also just insert or remove tab bodies directly and call `setupTabs()`.

## Closeable Tabs

Adding the `data-close` attribute to a tab will make it closeable.

When a tab is closed, the `<xin-tabs>` element's `onCloseTab: (tabBody: Element) => boolean | undefined | void`
will be called. If you override this method and return `false`, the tab will
not be closed (e.g. if you want to implement save/cancel behavior).

## Custom Tab Content

You can specify the exact content of the tab for a given body by
adding a `<template role="tab">` to that body. The contents of that
template will be cloned into the tab.
*/
var { div: div6, slot: slot5, span: span5, button: button5 } = S;

class TabSelector extends G {
  value = 0;
  static makeTab(tabs, tabBody, bodyId) {
    const tabContent = tabBody.querySelector('template[role="tab"]')?.content.cloneNode(true) || span5(tabBody.getAttribute("name"));
    const tab = div6(tabContent, {
      part: "tab",
      tabindex: 0,
      role: "tab",
      ariaControls: bodyId
    }, tabBody.hasAttribute("data-close") ? button5({
      title: "close",
      class: "close"
    }, icons.x()) : {});
    return tab;
  }
  static styleSpec = {
    ":host": {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      boxShadow: "none !important"
    },
    slot: {
      position: "relative",
      display: "block",
      flex: "1",
      overflow: "hidden",
      overflowY: "auto"
    },
    'slot[name="after-tabs"]': {
      flex: "0 0 auto"
    },
    "::slotted([hidden])": {
      display: "none !important"
    },
    ":host::part(tabpanel)": {
      display: "flex",
      flexDirection: "column",
      overflowX: "auto"
    },
    ":host::part(tabrow)": {
      display: "flex"
    },
    ":host .tabs": {
      display: "flex",
      userSelect: "none",
      whiteSpace: "nowrap"
    },
    ":host .tabs > div": {
      padding: `${qn.spacing50} ${qn.spacing}`,
      cursor: "default",
      display: "flex",
      alignItems: "baseline"
    },
    ':host .tabs > [aria-selected="true"]': {
      "--text-color": qn.xinTabsSelectedColor,
      color: qn.textColor
    },
    ":host .elastic": {
      flex: "1"
    },
    ":host .border": {
      background: "var(--xin-tabs-bar-color, #ccc)"
    },
    ":host .border > .selected": {
      content: " ",
      width: 0,
      height: "var(--xin-tabs-bar-height, 2px)",
      background: qn.xinTabsSelectedColor,
      transition: "ease-out 0.2s"
    },
    ":host button.close": {
      fill: qn.textColor,
      border: 0,
      background: "transparent",
      textAlign: "center",
      marginLeft: qn.spacing50,
      padding: 0
    },
    ":host button.close > svg": {
      height: "12px"
    }
  };
  onCloseTab = null;
  content = [
    div6({ role: "tabpanel", part: "tabpanel" }, div6({ part: "tabrow" }, div6({ class: "tabs", part: "tabs" }), div6({ class: "elastic" }), slot5({ name: "after-tabs" })), div6({ class: "border" }, div6({ class: "selected", part: "selected" }))),
    slot5()
  ];
  constructor() {
    super();
    this.initAttributes("anne", "example");
  }
  addTabBody(body, selectTab = false) {
    if (!body.hasAttribute("name")) {
      console.error("element has no name attribute", body);
      throw new Error("element has no name attribute");
    }
    this.append(body);
    this.setupTabs();
    if (selectTab) {
      this.value = this.bodies.length - 1;
    }
    this.queueRender();
  }
  removeTabBody(body) {
    body.remove();
    this.setupTabs();
    this.queueRender();
  }
  keyTab = (event) => {
    const { tabs } = this.parts;
    const tabIndex = [...tabs.children].indexOf(event.target);
    switch (event.key) {
      case "ArrowLeft":
        this.value = (tabIndex + Number(tabs.children.length) - 1) % tabs.children.length;
        tabs.children[this.value].focus();
        event.preventDefault();
        break;
      case "ArrowRight":
        this.value = (tabIndex + 1) % tabs.children.length;
        tabs.children[this.value].focus();
        event.preventDefault();
        break;
      case " ":
        this.pickTab(event);
        event.preventDefault();
        break;
      default:
    }
  };
  get bodies() {
    return [...this.children].filter((elt) => elt.hasAttribute("name"));
  }
  pickTab = (event) => {
    const { tabs } = this.parts;
    const target = event.target;
    const isCloseEvent = target.closest("button.close") !== null;
    const tab = target.closest(".tabs > div");
    const tabIndex = [...tabs.children].indexOf(tab);
    if (isCloseEvent) {
      const body = this.bodies[tabIndex];
      if (!this.onCloseTab || this.onCloseTab(body) !== false) {
        this.removeTabBody(this.bodies[tabIndex]);
      }
    } else {
      if (tabIndex > -1) {
        this.value = tabIndex;
      }
    }
  };
  setupTabs = () => {
    const { tabs } = this.parts;
    const tabBodies = [...this.children].filter((child) => !child.hasAttribute("slot") && child.hasAttribute("name"));
    tabs.textContent = "";
    if (this.value >= tabBodies.length) {
      this.value = tabBodies.length - 1;
    }
    for (const index in tabBodies) {
      const tabBody = tabBodies[index];
      const bodyId = `${this.instanceId}-${index}`;
      tabBody.id = bodyId;
      const tab = TabSelector.makeTab(this, tabBody, bodyId);
      tabs.append(tab);
    }
  };
  connectedCallback() {
    super.connectedCallback();
    const { tabs } = this.parts;
    tabs.addEventListener("click", this.pickTab);
    tabs.addEventListener("keydown", this.keyTab);
    this.setupTabs();
  }
  onResize() {
    this.queueRender();
  }
  render() {
    const { tabs, selected } = this.parts;
    const tabBodies = this.bodies;
    for (let i2 = 0;i2 < tabBodies.length; i2++) {
      const tabBody = tabBodies[i2];
      const tab = tabs.children[i2];
      if (this.value === Number(i2)) {
        tab.setAttribute("aria-selected", "true");
        selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`;
        selected.style.width = `${tab.offsetWidth}px`;
        tabBody.toggleAttribute("hidden", false);
      } else {
        tab.toggleAttribute("aria-selected", false);
        tabBody.toggleAttribute("hidden", true);
      }
    }
  }
}
var tabSelector = TabSelector.elementCreator({
  tag: "xin-tabs"
});

// src/live-example.ts
/*!
# example

`<xin-example>` makes it easy to insert interactive code examples in a web page. It
started life as a super lightweight, easier-to-embed implementation of
[b8rjs's fiddle component](https://b8rjs.com)—which I dearly missed—but now the student
is, by far, the master. And it's still super lightweight.

*You're probably looking at it right now.*

```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
```
```html
<h2>Example</h2>
```
```css
.preview {
  padding: 0 var(--spacing);
}

.example {
  animation: throb ease-in-out 1s infinite alternate;
}

@keyframes throb {
  from { color: blue }
  to { color: red }
}
```

You can also create a live-example from HTML. And if you add the `persist-to-dom`
attribute, it will persist your code to the DOM.

<xin-example persist-to-dom>
  <pre class="language-html">
    <h1 class="make-it-red">Pure HTML!</h1>
    <button>Click Me!</button>
  </pre>
  <pre class="language-js">
    preview.querySelector('button').addEventListener('click', () => {
      alert('you clicked?')
    })
  </pre>
  <pre class="language-css">
    .make-it-red {
      color: red;
    }
  </pre>
</xin-example>

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

## Code-Editor

The **code-editor** is actually the same component spawned in a new window using
a couple of clever tricks, the most important of which is leveraging
[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).

This functionality was originally added to make working in XR easier, but it turned
out that it's just better than the earlier way of doing things.

It actually uses just one `localStorage` item to handle any number of code-editors,
and cleans up after itself when you close the example (including closing stray
windows.

> **To Do** a little refactoring and tweaking to split the the editor off as a
completely separate component that can be used for other things, and make the
example itself lighter-weight.

## context

A `<xin-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<xin-example>` instance.
*/
var { div: div7, xinSlot: xinSlot2, style, button: button6, h4, pre } = S;
var AsyncFunction = (async () => {}).constructor;

class LiveExample extends G {
  persistToDom = false;
  prettier = false;
  prefix = "lx";
  storageKey = "live-example-payload";
  context = {};
  uuid = crypto.randomUUID();
  remoteId = "";
  lastUpdate = 0;
  interval;
  static insertExamples(element, context = {}) {
    const sources = [
      ...element.querySelectorAll(".language-html,.language-js,.language-css")
    ].filter((element2) => !element2.closest(LiveExample.tagName)).map((code) => ({
      block: code.parentElement,
      language: code.classList[0].split("-").pop(),
      code: code.innerText
    }));
    for (let index = 0;index < sources.length; index += 1) {
      const exampleSources = [sources[index]];
      while (index < sources.length - 1 && sources[index].block.nextElementSibling === sources[index + 1].block) {
        exampleSources.push(sources[index + 1]);
        index += 1;
      }
      const example = liveExample({ context });
      exampleSources[0].block.parentElement.insertBefore(example, exampleSources[0].block);
      exampleSources.forEach((source) => {
        switch (source.language) {
          case "js":
            example.js = source.code;
            break;
          case "html":
            example.html = source.code;
            break;
          case "css":
            example.css = source.code;
            break;
        }
        source.block.remove();
      });
      example.showDefaultTab();
    }
  }
  constructor() {
    super();
    this.initAttributes("persistToDom", "prettier");
  }
  get activeTab() {
    const { editors } = this.parts;
    return [...editors.children].find((elt) => elt.getAttribute("hidden") === null);
  }
  getEditorValue(which) {
    return this.parts[which].value;
  }
  setEditorValue(which, code) {
    const codeEditor2 = this.parts[which];
    codeEditor2.value = code;
  }
  get css() {
    return this.getEditorValue("css");
  }
  set css(code) {
    this.setEditorValue("css", code);
  }
  get html() {
    return this.getEditorValue("html");
  }
  set html(code) {
    this.setEditorValue("html", code);
  }
  get js() {
    return this.getEditorValue("js");
  }
  set js(code) {
    this.setEditorValue("js", code);
  }
  updateUndo = () => {
    const { activeTab } = this;
    const { undo, redo } = this.parts;
    if (activeTab instanceof CodeEditor && activeTab.editor !== undefined) {
      const undoManager = activeTab.editor.session.getUndoManager();
      undo.disabled = !undoManager.hasUndo();
      redo.disabled = !undoManager.hasRedo();
    } else {
      undo.disabled = true;
      redo.disabled = true;
    }
  };
  undo = () => {
    const { activeTab } = this;
    if (activeTab instanceof CodeEditor) {
      activeTab.editor.undo();
    }
  };
  redo = () => {
    const { activeTab } = this;
    if (activeTab instanceof CodeEditor) {
      activeTab.editor.redo();
    }
  };
  get isMaximized() {
    return this.classList.contains("-maximize");
  }
  flipLayout = () => {
    this.classList.toggle("-vertical");
  };
  exampleMenu = () => {
    popMenu({
      target: this.parts.exampleWidgets,
      width: "auto",
      menuItems: [
        {
          icon: "edit",
          caption: "view/edit code",
          action: this.showCode
        },
        {
          icon: "editDoc",
          caption: "view/edit code in a new window",
          action: this.openEditorWindow
        },
        null,
        {
          icon: this.isMaximized ? "minimize" : "maximize",
          caption: this.isMaximized ? "restore preview" : "maximize preview",
          action: this.toggleMaximize
        }
      ]
    });
  };
  content = () => [
    div7({ part: "example" }, style({ part: "style" }), button6({
      title: "example menu",
      part: "exampleWidgets",
      onClick: this.exampleMenu
    }, icons.code())),
    div7({
      class: "code-editors",
      part: "codeEditors",
      hidden: true
    }, h4("Code"), button6({
      title: "close code",
      class: "transparent close-button",
      onClick: this.closeCode
    }, icons.x()), tabSelector({
      part: "editors",
      onChange: this.updateUndo
    }, codeEditor({
      name: "js",
      mode: "javascript",
      part: "js"
    }), codeEditor({ name: "html", mode: "html", part: "html" }), codeEditor({ name: "css", mode: "css", part: "css" }), div7({
      slot: "after-tabs",
      class: "row"
    }, button6({
      title: "undo",
      part: "undo",
      class: "transparent",
      onClick: this.undo
    }, icons.undo()), button6({
      title: "redo",
      part: "redo",
      class: "transparent",
      onClick: this.redo
    }, icons.redo()), button6({
      title: "flip direction",
      class: "transparent",
      onClick: this.flipLayout
    }, icons.sidebar()), button6({
      title: "copy as markdown",
      class: "transparent",
      onClick: this.copy
    }, icons.copy()), button6({
      title: "reload",
      class: "transparent",
      onClick: this.refreshRemote
    }, icons.refresh())))),
    xinSlot2({ part: "sources", hidden: true })
  ];
  connectedCallback() {
    super.connectedCallback();
    const { sources } = this.parts;
    this.initFromElements([...sources.children]);
    addEventListener("storage", this.remoteChange);
    this.interval = setInterval(this.remoteChange, 500);
    this.undoInterval = setInterval(this.updateUndo, 250);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const { storageKey, remoteKey } = this;
    clearInterval(this.interval);
    clearInterval(this.undoInterval);
    localStorage.setItem(storageKey, JSON.stringify({
      remoteKey,
      sentAt: Date.now(),
      close: true
    }));
  }
  copy = () => {
    const js = this.js !== "" ? "```js\n" + this.js.trim() + "\n```\n" : "";
    const html = this.html !== "" ? "```html\n" + this.html.trim() + "\n```\n" : "";
    const css = this.css !== "" ? "```css\n" + this.css.trim() + "\n```\n" : "";
    navigator.clipboard.writeText(js + html + css);
  };
  toggleMaximize = () => {
    this.classList.toggle("-maximize");
  };
  get remoteKey() {
    return this.remoteId !== "" ? this.prefix + "-" + this.remoteId : this.prefix + "-" + this.uuid;
  }
  remoteChange = (event) => {
    const data = localStorage.getItem(this.storageKey);
    if (event instanceof StorageEvent && event.key !== this.storageKey) {
      return;
    }
    if (data === null) {
      return;
    }
    const { remoteKey, sentAt, css, html, js, close } = JSON.parse(data);
    if (sentAt <= this.lastUpdate) {
      return;
    }
    if (remoteKey !== this.remoteKey) {
      return;
    }
    if (close === true) {
      window.close();
    }
    console.log("received new code", sentAt, this.lastUpdate);
    this.lastUpdate = sentAt;
    this.css = css;
    this.html = html;
    this.js = js;
    this.refresh();
  };
  showCode = () => {
    this.classList.add("-maximize");
    this.classList.toggle("-vertical", this.offsetHeight > this.offsetWidth);
    this.parts.codeEditors.hidden = false;
  };
  closeCode = () => {
    if (this.remoteId !== "") {
      window.close();
    } else {
      this.classList.remove("-maximize");
      this.parts.codeEditors.hidden = true;
    }
  };
  openEditorWindow = () => {
    const { storageKey, remoteKey, css, html, js, uuid, prefix } = this;
    const href = location.href.split("?")[0] + `?${prefix}=${uuid}`;
    localStorage.setItem(storageKey, JSON.stringify({
      remoteKey,
      sentAt: Date.now(),
      css,
      html,
      js
    }));
    window.open(href);
  };
  refreshRemote = () => {
    const { remoteKey, css, html, js } = this;
    localStorage.setItem(this.storageKey, JSON.stringify({ remoteKey, sentAt: Date.now(), css, html, js }));
  };
  updateSources = () => {
    if (this.persistToDom) {
      const { sources } = this.parts;
      sources.innerText = "";
      for (const language of ["js", "css", "html"]) {
        if (this[language]) {
          sources.append(pre({ class: `language-${language}`, innerHTML: this[language] }));
        }
      }
    }
  };
  refresh = () => {
    if (this.remoteId !== "") {
      return;
    }
    const { example, style: style2 } = this.parts;
    const preview = div7({ class: "preview" });
    preview.innerHTML = this.html;
    style2.innerText = this.css;
    const oldPreview = example.querySelector(".preview");
    if (oldPreview) {
      oldPreview.replaceWith(preview);
    } else {
      example.insertBefore(preview, this.parts.exampleWidgets);
    }
    const context = { preview, ...this.context };
    try {
      const func = new AsyncFunction(...Object.keys(context), this.js);
      func(...Object.values(context)).catch((err) => console.error(err));
      if (this.persistToDom) {
        this.updateSources();
      }
    } catch (e2) {
      console.error(e2);
      window.alert(`Error: ${e2}, the console may have more information…`);
    }
  };
  initFromElements(elements) {
    for (const element of elements) {
      element.hidden = true;
      const [mode, ...lines] = element.innerHTML.split(`
`);
      if (["js", "html", "css"].includes(mode)) {
        const minIndex = lines.filter((line) => line.trim() !== "").map((line) => line.match(/^\s*/)[0].length).sort()[0];
        const source = (minIndex > 0 ? lines.map((line) => line.substring(minIndex)) : lines).join(`
`);
        this.parts[mode].value = source;
      } else {
        const language = ["js", "html", "css"].find((language2) => element.matches(`.language-${language2}`));
        if (language) {
          this.parts[language].value = language === "html" ? element.innerHTML : element.innerText;
        }
      }
    }
  }
  showDefaultTab() {
    const { editors } = this.parts;
    if (this.js !== "") {
      editors.value = 0;
    } else if (this.html !== "") {
      editors.value = 1;
    } else if (this.css !== "") {
      editors.value = 2;
    }
  }
  render() {
    super.render();
    if (this.remoteId !== "") {
      const data = localStorage.getItem(this.storageKey);
      if (data !== null) {
        const { remoteKey, sentAt, css, html, js } = JSON.parse(data);
        if (this.remoteKey !== remoteKey) {
          return;
        }
        this.lastUpdate = sentAt;
        this.css = css;
        this.html = html;
        this.js = js;
        this.parts.example.hidden = true;
        this.parts.codeEditors.hidden = false;
        this.classList.add("-maximize");
        this.updateUndo();
      }
    } else {
      this.refresh();
    }
  }
}
var liveExample = LiveExample.elementCreator({
  tag: "xin-example",
  styleSpec: {
    ":host": {
      "--xin-example-height": "320px",
      "--code-editors-bar-bg": "#777",
      "--code-editors-bar-color": "#fff",
      "--widget-bg": "#fff8",
      "--widget-color": "#000",
      position: "relative",
      display: "flex",
      height: "var(--xin-example-height)",
      background: "var(--background)",
      boxSizing: "border-box"
    },
    ":host.-maximize": {
      position: "fixed",
      left: "0",
      top: "0",
      height: "100vh",
      width: "100vw",
      margin: "0 !important"
    },
    ".-maximize": {
      zIndex: 101
    },
    ":host.-vertical": {
      flexDirection: "column"
    },
    ":host .icon-sidebar": {
      transform: "rotateZ(180deg)"
    },
    ":host.-vertical .icon-sidebar": {
      transform: "rotateZ(270deg)"
    },
    ":host.-maximize .hide-if-maximized, :host:not(.-maximize) .show-if-maximized": {
      display: "none"
    },
    ':host [part="example"]': {
      flex: "1 1 50%",
      height: "100%",
      position: "relative",
      overflowX: "auto"
    },
    ":host .preview": {
      height: "100%",
      position: "relative",
      overflow: "hidden",
      background: `#f7f7f7 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" ><rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>')`
    },
    ':host [part="editors"]': {
      flex: "1 1 200px",
      height: "100%",
      position: "relative"
    },
    ':host [part="exampleWidgets"]': {
      position: "absolute",
      left: "2px",
      bottom: "2px",
      "--widget-color": "var(--brand-color)",
      background: "var(--widget-bg)",
      borderRadius: "5px",
      width: "44px",
      height: "44px",
      lineHeight: "44px",
      zIndex: "100"
    },
    ':host [part="exampleWidgets"] svg': {
      fill: "var(--widget-color)"
    },
    ":host .code-editors": {
      overflow: "hidden",
      background: "white",
      position: "relative",
      top: "0",
      right: "0",
      flex: "1 1 50%",
      height: "100%",
      flexDirection: "column",
      zIndex: "10"
    },
    ":host .code-editors:not([hidden])": {
      display: "flex"
    },
    ":host .code-editors > h4": {
      padding: "5px",
      margin: "0",
      textAlign: "center",
      background: "var(--code-editors-bar-bg)",
      color: "var(--code-editors-bar-color)",
      cursor: "move"
    },
    ":host .close-button": {
      position: "absolute",
      top: "0",
      right: "0",
      color: "var(--code-editors-bar-color)"
    },
    ":host button.transparent, :host .sizer": {
      width: "32px",
      height: "32px",
      lineHeight: "32px",
      textAlign: "center",
      padding: "0",
      margin: "0"
    },
    ":host .sizer": {
      cursor: "nwse-resize"
    }
  }
});
function makeExamplesLive(element) {
  const preElements = [...element.querySelectorAll("pre")].filter((pre2) => ["js", "html", "css", "json"].includes(pre2.innerText.split(`
`)[0]));
  for (let i2 = 0;i2 < preElements.length; i2++) {
    const parts = [preElements[i2]];
    while (preElements[i2].nextElementSibling === preElements[i2 + 1]) {
      parts.push(preElements[i2 + 1]);
      i2 += 1;
    }
    const example = liveExample();
    element.insertBefore(example, parts[0]);
    example.initFromElements(parts);
  }
}
var params = new URL(window.location.href).searchParams;
var remoteId = params.get("lx");
if (remoteId) {
  document.title += " [code editor]";
  document.body.textContent = "";
  document.body.append(liveExample({ remoteId }));
}
// src/make-sorter.ts
/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

```js
const { select, option, div, span, ul, li } = xinjs.elements
const { icons, makeSorter } = xinjsui

const people = [
  { first: 'Frasier', last: 'Crane', age: 38 },
  { first: 'Lilith', last: 'Crane', age: 37 },
  { first: 'Rebecca', last: 'Howe', age: 35 },
  { first: 'Woody', last: 'Boyd', age: 25 },
  { first: 'Sam', last: 'Malone', age: 40 },
  { first: 'Norm', last: 'Peterson', age: 38 },
]

const sorters = {
  firstSort: makeSorter(person => [person.first]),
  firstDescSort: makeSorter(person => [person.first], false),
  nameSort: makeSorter(person => [person.last, person.first]),
  ageFirst: makeSorter(person => [-person.age, person.last]),
  ageLast: makeSorter(person => [person.age, person.first], [true, false]),
}

function person({first, last, age}) {
  return li(`${first} ${last}, ${age}`)
}

const list = ul()
sortPicker = select(
  option('Sort by first', {value: 'firstSort'}),
  option('Sort by first (desc)', {value: 'firstDescSort'}),
  option('Sort by last, first', {value: 'nameSort'}),
  option('Sort by age (desc), first', {value: 'ageFirst'}),
  option('Sort by age, last (desc)', {value: 'ageLast'}),
  {
    onChange: render,
    value: 'nameSort'
  },
)

function render () {
  list.textContent = ''
  list.append(...people.sort(sorters[sortPicker.value]).map(person))
}

preview.append(
  div(
    sortPicker,
    icons.chevronDown()
  ),
  list
)

render()
```
```css
.preview {
  padding: var(--spacing);
}

.preview div {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
}
```

## Details

To create a sort callback that sorts by propA then propB (if propA is tied):

```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB]
)
```

As above, but sort descending:
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  false
)
```

As above but propA is sorted ascending, propB descending
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  [true, false]
)
```
*/
function makeSorter(sortValuator, ascending = true) {
  return (p2, q2) => {
    const pSort = sortValuator(p2);
    const qSort = sortValuator(q2);
    for (const i2 in pSort) {
      if (pSort[i2] !== qSort[i2]) {
        const isAscending = Array.isArray(ascending) ? ascending[i2] !== false : ascending;
        return isAscending ? pSort[i2] > qSort[i2] ? 1 : -1 : pSort[i2] > qSort[i2] ? -1 : 1;
      }
    }
    return 0;
  };
}

// src/select.ts
/*!
# select

`<xin-select>` (`xinSelect` is the `ElementCreator`) is a replacement for the lamentable
built in `<select>` element that addresses its various shortcomings.

- since `<xin-select>` is powered by `popMenu`, and supports separators and submenus.
- options can have icons.
- `<xin-select>` will retain and display a value even if the matching option is missing.
- its displayed value can be made `editable`, allowing use as a "combo box".
- options can have `async` callbacks that return a value.
- picking an item triggers an `action` event even if the value hasn't changed.
- available options are set via the `options` attribute or the element's `options` property (not `<option>` elements)

```html
<xin-select
  title="simple select"
  options="this,that,,the other"
  value="not an option!"
></xin-select><br>
<xin-select
  show-icon
  title="has captions"
  class="captions"
  value="image"
></xin-select><br>
<xin-select
  show-icon
  title="combo select with icons"
  class="icons"
  editable
  placeholder="pick an icon"
></xin-select><br>
<xin-select
  show-icon
  hide-caption
  title="icons only"
  class="icons-only"
  placeholder="pick an icon"
></xin-select>
<pre contenteditable>Select some text in here…
…to check for focus stealing</pre>
```
```js
const { icons } = xinjsui

const captions = preview.querySelector('.captions')

captions.options = [
  {
    caption: 'a heading',
    value: 'heading'
  },
  {
    caption: 'a paragraph',
    value: 'paragraph'
  },
  null,
  {
    caption: 'choose some other',
    options: [
      {
        icon: 'image',
        caption: 'an image',
        value: 'image'
      },
      {
        icon: 'fileText',
        caption: 'a text file',
        value: 'text',
      },
      {
        icon: 'video',
        caption: 'a video',
        value: 'video'
      },
      null,
      {
        caption: 'anything goes…',
        value: () => prompt('Enter your other', 'other') || undefined
      },
      {
        caption: 'brother… (after 1s delay)',
        value: async () => new Promise(resolve => {
          setTimeout(() => resolve('brother'), 1000)
        })
      }
    ]
  }
]

const iconsSelect = preview.querySelector('.icons')
const iconsOnly = preview.querySelector('.icons-only')

iconsSelect.options = iconsOnly.options = Object.keys(icons).sort().map(icon =>({
  icon,
  caption: icon,
  value: icon
}))

preview.addEventListener('action', (event) => {
  console.log(event.target.title, 'user picked', event.target.value)
}, true)

preview.addEventListener('change', (event) => {
  console.log(event.target.title, 'changed to', event.target.value)
}, true)
```
<xin-css-var-editor element-selector="xin-select"></xin-css-var-editor>

## `options`

    type OptionRequest = () => Promise<string | undefined>

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    export interface SelectOptionSubmenu {
      icon?: string | HTMLElement
      caption: string
      options: SelectOptions
    }

    export type SelectOptions = Array<string | null | SelectOption | SelectOptionSubmenu>

A `<xin-select>` can be assigned `options` as a string of comma-delimited choices,
or be provided a `SelectOptions` array (which allows for submenus, separators, etc.).

## Attributes

`<xin-select>` supports several attributes:

- `editable` lets the user directly edit the value (like a "combo box").
- `show-icon` displays the icon corresponding to the currently selected value.
- `hide-caption` hides the caption.
- `placeholder` allows you to set a placeholder.
- `options` allows you to assign options as a comma-delimited string attribute.

## Events

Picking an option triggers an `action` event (whether or not this changes the value).

Changing the value, either by typing in an editable `<xin-select>` or picking a new
value triggers a `change` event.

You can look at the console to see the events triggered by the second example.
*/
var { button: button7, span: span6, input: input4 } = S;
var hasValue = (options, value) => {
  return !!options.find((option2) => {
    if (option2 === null || value == null) {
      return false;
    } else if (Array.isArray(option2)) {
      return hasValue(option2, value);
    } else if (option2.value === value || option2 === value) {
      return true;
    }
  });
};

class XinSelect extends G {
  editable = false;
  showIcon = false;
  hideCaption = false;
  options = "";
  value = "";
  placeholder = "";
  setValue = (value, triggerAction = false) => {
    if (this.value !== value) {
      this.value = value;
      this.queueRender(true);
    }
    if (triggerAction) {
      this.dispatchEvent(new Event("action"));
    }
  };
  getValue = () => this.value;
  get selectOptions() {
    return typeof this.options === "string" ? this.options.split(",").map((option2) => option2.trim() || null) : this.options;
  }
  buildOptionMenuItem = (option2) => {
    if (option2 === null) {
      return null;
    }
    const { setValue, getValue } = this;
    let icon;
    let caption;
    let value;
    if (typeof option2 === "string") {
      caption = value = option2;
    } else {
      ({ icon, caption, value } = option2);
    }
    const { options } = option2;
    if (options) {
      return {
        icon,
        caption,
        checked: () => hasValue(options, getValue()),
        menuItems: options.map(this.buildOptionMenuItem)
      };
    }
    return {
      icon,
      caption,
      checked: () => getValue() === value,
      action: typeof value === "function" ? async () => {
        const newValue = await value();
        if (newValue !== undefined) {
          setValue(newValue, true);
        }
      } : () => {
        if (typeof value === "string") {
          setValue(value, true);
        }
      }
    };
  };
  get optionsMenu() {
    const options = this.selectOptions.map(this.buildOptionMenuItem);
    if (this.filter === "") {
      return options;
    }
    const showOption = (option2) => {
      if (option2 === null) {
        return true;
      } else if (option2.menuItems) {
        option2.menuItems = option2.menuItems.filter(showOption);
        return option2.menuItems.length > 0;
      } else {
        return option2.caption.toLocaleLowerCase().includes(this.filter);
      }
    };
    return options.filter(showOption);
  }
  handleChange = (event) => {
    const { value } = this.parts;
    const newValue = value.value || "";
    if (this.value !== String(newValue)) {
      this.value = newValue;
      this.dispatchEvent(new Event("change"));
    }
    this.filter = "";
    event.stopPropagation();
    event.preventDefault();
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  filterMenu = Zn(() => {
    this.filter = this.parts.value.value.toLocaleLowerCase();
    removeLastMenu(0);
    this.popOptions();
  });
  popOptions = (event) => {
    if (event && event.type === "click") {
      this.filter = "";
    }
    this.poppedOptions = this.optionsMenu;
    popMenu({
      target: this,
      menuItems: this.poppedOptions
    });
  };
  content = () => [
    button7({
      onClick: this.popOptions
    }, span6(), input4({
      part: "value",
      value: this.value,
      tabindex: 0,
      onKeydown: this.handleKey,
      onInput: this.filterMenu,
      onChange: this.handleChange
    }), icons.chevronDown())
  ];
  constructor() {
    super();
    this.initAttributes("options", "editable", "placeholder", "showIcon", "hideCaption");
  }
  get allOptions() {
    const all = [];
    function flatten(some) {
      for (const option2 of some) {
        if (typeof option2 === "string") {
          all.push({ caption: option2, value: option2 });
        } else if (option2?.value) {
          all.push(option2);
        } else if (option2?.options) {
          flatten(option2.options);
        }
      }
    }
    flatten(this.selectOptions);
    return all;
  }
  findOption() {
    const found = this.allOptions.find((option2) => option2.value === this.value);
    return found || { caption: this.value, value: this.value };
  }
  render() {
    super.render();
    const { value } = this.parts;
    const icon = value.previousElementSibling;
    const option2 = this.findOption();
    let newIcon = span6();
    value.value = option2.caption;
    if (option2.icon) {
      if (option2.icon instanceof HTMLElement) {
        newIcon = option2.icon.cloneNode(true);
      } else {
        newIcon = icons[option2.icon]();
      }
    }
    icon.replaceWith(newIcon);
    value.setAttribute("placeholder", this.placeholder);
    value.style.pointerEvents = this.editable ? "" : "none";
    value.readOnly = !this.editable;
  }
}
var xinSelect = XinSelect.elementCreator({
  tag: "xin-select",
  styleSpec: {
    ":host": {
      "--gap": "8px",
      "--touch-size": "44px",
      "--padding": "0 8px",
      "--value-padding": "0 8px",
      "--icon-width": "24px",
      "--fieldWidth": "140px",
      display: "inline-block",
      position: "relative"
    },
    ":host button": {
      display: "grid",
      alignItems: "center",
      gap: qn.gap,
      textAlign: "left",
      height: qn.touchSize,
      padding: qn.padding,
      gridTemplateColumns: `auto ${qn.iconWidth}`,
      position: "relative"
    },
    ":host[show-icon] button": {
      gridTemplateColumns: `${qn.iconWidth} auto ${qn.iconWidth}`
    },
    ":host[hide-caption] button": {
      gridTemplateColumns: `${qn.iconWidth} ${qn.iconWidth}`
    },
    ":host:not([show-icon]) button > :first-child": {
      display: "none"
    },
    ":host[hide-caption] button > :nth-child(2)": {
      display: "none"
    },
    ':host [part="value"]': {
      width: qn.fieldWidth,
      padding: qn.valuePadding,
      height: qn.touchSize,
      lineHeight: qn.touchSize,
      boxShadow: "none",
      whiteSpace: "nowrap",
      outline: "none",
      background: "transparent"
    },
    ':host [part="value"]:not(:focus)': {
      overflow: "hidden",
      textOverflow: "ellipsis",
      background: "transparent"
    }
  }
});

// src/localize.ts
/*!
# localize

`xinjs-ui` provides support for localization via the `localize` method and the `<xin-locale-picker>`
and `<xin-localized>` custom-elements.

> ### Important Note
> This module deals with the **language** used in the user interface. "locale" is
> *not the same thing*. The (usually) two-letter codes used designate **language**
> and **not locale**.
>
> E.g. the US *locale* includes things like measurement systems
> and date format. Most European locales use commas where we use decimal points in the US.
>
> Similarly, `ja` is the code for the Japanese **language** while `jp` is the **locale**.

## `initLocalization(localizationData: string)`

Enables localization from TSV data.

## XinLocalePicker

A selector that lets the user pick from among supported languages.

```html
<h3>Locale Picker</h3>
<xin-locale-picker></xin-locale-picker>

<h3>Locale Picker with <code>hide-captions</code></h3>
<xin-locale-picker hide-caption></xin-locale-picker>
```

## XinLocalized

A span-replacement that automatically localizes its text content.
By default the case in the localized data is preserved unless the
reference text is all lowercase, in which case the localized text
is also lowercased.

While viewing this documentation, all `<xin-localized>` elements should display a **red
underline**.

```html
<h3>Localized Widgets</h3>
<button><xin-localized>Yes</xin-localized></button>
<button><xin-localized>No</xin-localized></button>

<h3>Lowercase is preserved</h3>
<button><xin-localized>yes</xin-localized></button>
<button><xin-localized>no</xin-localized></button>
```
```css
xin-localized {
  border-bottom: 2px solid red;
}
```

## `i18n`

All of the data can be bound in the `i18n` proxy (`xin.i18n`), including the currently selected
locale (which will default to `navigator.language`).

You can take a look at `xin.i18n` in the console (and use it to set locale directly).

```
i18n.locale = 'fr' // set localization to French (if available)
```

## Creating Localized String Data

`localized.tsv` provides data for localizing strings. It can be created automatically
using something like my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages `googletranslate` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(`googletranslate` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | suomi | svenska | 中文（普通话）
🇺🇸 | 🇫🇷 | 🇫🇮 | 🇸🇪 | 🇨🇳
Icon | Icône | Kuvake | Ikon | 图标
Ok | D'accord | Ok | Ok | 好的
Cancel | Annuler | Peruuttaa | Avboka | 取消

- Column 1 is your reference language.
- Row 1 is [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
- Row 2 is the name of the language in your reference language.
- Row 3 is the name of the language in itself (because it's silly to expect people
  to know the name of their language in a language they don't know)
- Row 4 is the flag emoji for that language (yes, that's problematic, but languages
  do not have flags, per se)
- Rows 5 and on are user interface strings you want to localize

In the spreadsheet provided, each cell contains a formula that translates the term
in the left-most column from the language in that column to the language in the
destination column. Once you have an automatic translation, you can hand off the
sheet to language experts to vet the translations.

Finally, create a `tsv` file and then turn that into a Typescript file by wrapping
the content thus:

```
export default `( content of tsv file )`
```

## To Do

- support for automated localization of attributes such as `title`
- `data-xin-i18n` attribute to allow this (if present, text content localized
  actual value of attribute can specify attributes needing localization)
  - `data-xin-i18n="placeholder,text,title,value"` would indicate what
    needs localizing; it could use a WeakMap to track original strings
- DOM watcher looks for insertion of marked elements and localizes them

*/
var { span: span7 } = S;
var { i18n } = fn({
  i18n: {
    locale: window.navigator.language,
    locales: [window.navigator.language],
    languages: [window.navigator.language],
    emoji: [""],
    stringMap: {},
    localeOptions: [
      {
        icon: span7(),
        caption: window.navigator.language,
        value: window.navigator.language
      }
    ]
  }
});
on.localeOptions = {
  toDOM(select2, options) {
    if (select2 instanceof XinSelect) {
      select2.options = options;
    }
  }
};
var updateLocalized = () => {
  const localizeds = [
    ...document.querySelectorAll(XinLocalized.tagName)
  ];
  for (const localized of localizeds) {
    localized.render();
  }
};
var captionSort = makeSorter((locale) => [
  locale.caption.toLocaleLowerCase()
]);
function initLocalization(localizedStrings) {
  const [locales, , languages, emoji, ...strings] = localizedStrings.split(`
`).map((line) => line.split("\t"));
  if (locales && languages && emoji && strings) {
    i18n.locales = locales;
    i18n.languages = languages;
    i18n.emoji = emoji;
    i18n.stringMap = strings.reduce((map, strings2) => {
      map[strings2[0].toLocaleLowerCase()] = strings2;
      return map;
    }, {});
    i18n.localeOptions = locales.map((locale, index) => ({
      icon: span7({ title: locales[index] }, emoji[index]),
      caption: languages[index],
      value: locale
    })).sort(captionSort);
    if (!i18n.locales.includes(i18n.locale.valueOf())) {
      const language = i18n.locale.substring(0, 2);
      i18n.locale = i18n.locales.find((locale) => locale.substring(0, 2) === language) || i18n.locales[0];
    }
    updateLocalized();
  }
}
function localize(ref) {
  const index = i18n.locales.indexOf(i18n.locale.valueOf());
  if (index > -1) {
    const map = i18n.stringMap[ref.toLocaleLowerCase()];
    const localized = map && map[index];
    if (localized) {
      ref = ref.toLocaleLowerCase() === ref ? localized.toLocaleLowerCase() : localized;
    }
  }
  return ref;
}

class LocalePicker extends G {
  hideCaption = false;
  content = () => {
    return xinSelect({
      part: "select",
      showIcon: true,
      title: localize("Language"),
      bindValue: i18n.locale,
      bindLocaleOptions: i18n.localeOptions
    });
  };
  constructor() {
    super();
    this.initAttributes("hideCaption");
  }
  connectedCallback() {
    super.connectedCallback();
    this.parts.select.value = i18n.locale;
    this.parts.select.addEventListener("change", updateLocalized);
  }
  render() {
    super.render();
    this.parts.select.toggleAttribute("hide-caption", this.hideCaption);
  }
}
var localePicker = LocalePicker.elementCreator({
  tag: "xin-locale-picker"
});

class XinLocalized extends G {
  contents = () => S.xinSlot();
  refString = "";
  render() {
    super.render();
    if (!this.refString) {
      this.refString = this.textContent || "";
    }
    this.textContent = localize(this.refString);
  }
}
var xinLocalized = XinLocalized.elementCreator({
  tag: "xin-localized",
  styleSpec: {
    ":host": {
      pointerEvents: "none"
    }
  }
});
// src/mapbox.ts
/*!
# map

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

```js
const pickStyle = preview.querySelector('select')
const mapbox = preview.querySelector('xin-map')
const here = preview.querySelector('button')

pickStyle.addEventListener('change', () => {
  mapbox.mapStyle = pickStyle.value
})

function getUserGPSCoordinates() {
  return new Promise((resolve) => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      resolve(null);
      return;
    }

    // Request position with options
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      // Error callback
      (error) => {
        console.log(`Error getting location: ${error.message}`);
        resolve(null);
      },
      // Options
      {
        enableHighAccuracy: true,  // Request high accuracy if available
        timeout: 10000,            // Time to wait for position (10 seconds)
        maximumAge: 0              // Don't use cached position
      }
    );
  });
}

here.addEventListener('click', async () => {
  const location = await getUserGPSCoordinates()
  if (location) {
    mapbox.coords = `${location.latitude},${location.longitude},12`
  }
})
```
```html
<!-- please don't abuse my mapbox token -->
<xin-map
  style="width: 100%; height: 100%"
  coords="14.0093606,120.995083,17"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
  map-style="mapbox://styles/mapbox/streets-v12"
></xin-map>
<select>
  <option selected value="mapbox://styles/mapbox/streets-v12">Streets</option>
  <option value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
  <option value="mapbox://styles/mapbox/light-v11">Light</option>
  <option value="mapbox://styles/mapbox/dark-v11">Dark</option>
  <option value="mapbox://styles/mapbox/outdoors-v12">Outdoors</option>
</select>
<button>
  <xin-icon icon="mapPin"></xin-icon>
  <span>Your Location</span>
</button>
```
```css
.preview button {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.preview select {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
```

There's no need to learn new APIs or write wrappers, just access the element's `map` property
and [use the standard mapbox APIs directly](https://docs.mapbox.com/api/maps/styles/).
*/
var { div: div8 } = S;

class MapBox extends G {
  coords = "65.01715565258993,25.48081004203459,12";
  content = div8({ style: { width: "100%", height: "100%" } });
  get map() {
    return this._map;
  }
  mapStyle = "mapbox://styles/mapbox/streets-v12";
  token = "";
  static mapboxCSSAvailable;
  static mapboxAvailable;
  _map;
  static styleSpec = {
    ":host": {
      display: "inline-block",
      position: "relative",
      width: "400px",
      height: "400px",
      textAlign: "left"
    }
  };
  constructor() {
    super();
    this.initAttributes("coords", "token", "mapStyle");
    if (MapBox.mapboxCSSAvailable === undefined) {
      MapBox.mapboxCSSAvailable = styleSheet("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e2) => {
        console.error("failed to load mapbox-gl.css", e2);
      });
      MapBox.mapboxAvailable = scriptTag("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e2) => {
        console.error("failed to load mapbox-gl.js", e2);
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.token) {
      console.error("mapbox requires an access token which you can provide via the token attribute");
    }
  }
  render() {
    super.render();
    if (!this.token) {
      return;
    }
    const { div: div9 } = this.parts;
    const [long, lat, zoom] = this.coords.split(",").map((x) => Number(x));
    if (this.map) {
      this.map.remove();
    }
    MapBox.mapboxAvailable.then(({ mapboxgl }) => {
      console.log("%cmapbox may complain about missing css -- don't panic!", "background: orange; color: black; padding: 0 5px;");
      mapboxgl.accessToken = this.token;
      this._map = new mapboxgl.Map({
        container: div9,
        style: this.mapStyle,
        zoom,
        center: [lat, long]
      });
      this._map.on("render", () => this._map.resize());
    });
  }
}
var mapBox = MapBox.elementCreator({
  tag: "xin-map"
});
// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_2, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e2) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = { exec: function noopTest2() {} };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (;i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l2 = str.length;
  if (l2 === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l2) {
    const currChar = str.charAt(l2 - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l2 - suffLen);
}
function findClosingBracket(str, b2) {
  if (str.indexOf(b2[1]) === -1) {
    return -1;
  }
  const l2 = str.length;
  let level = 0, i2 = 0;
  for (;i2 < l2; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b2[0]) {
      level++;
    } else if (str[i2] === b2[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function checkDeprecations(opt, callback) {
  if (!opt || opt.silent) {
    return;
  }
  if (callback) {
    console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");
  }
  if (opt.sanitize || opt.sanitizer) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  if (opt.highlight || opt.langPrefix !== "language-") {
    console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");
  }
  if (opt.mangle) {
    console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");
  }
  if (opt.baseUrl) {
    console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");
  }
  if (opt.smartypants) {
    console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");
  }
  if (opt.xhtml) {
    console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");
  }
  if (opt.headerIds || opt.headerPrefix) {
    console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.");
  }
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split(`
`).map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join(`
`);
}

class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src2) {
    const cap = this.rules.block.newline.exec(src2);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src2) {
    const cap = this.rules.block.code.exec(src2);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, `
`) : text
      };
    }
  }
  fences(src2) {
    const cap = this.rules.block.fences.exec(src2);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src2) {
    const cap = this.rules.block.heading.exec(src2);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src2) {
    const cap = this.rules.block.hr.exec(src2);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src2) {
    const cap = this.rules.block.blockquote.exec(src2);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src2) {
    let cap = this.rules.block.list.exec(src2);
    if (cap) {
      let raw, istask, ischecked, indent, i2, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src2) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src2))) {
          break;
        }
        if (this.rules.block.hr.test(src2)) {
          break;
        }
        raw = cap[0];
        src2 = src2.substring(raw.length);
        line = cap[2].split(`
`, 1)[0].replace(/^\t+/, (t2) => " ".repeat(3 * t2.length));
        nextLine = src2.split(`
`, 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + `
`;
          src2 = src2.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src2) {
            rawLine = src2.split(`
`, 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src2)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += `
` + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += `
` + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + `
`;
            src2 = src2.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l2 = list.items.length;
      for (i2 = 0;i2 < l2; i2++) {
        this.lexer.state.top = false;
        list.items[i2].tokens = this.lexer.blockTokens(list.items[i2].text, []);
        if (!list.loose) {
          const spacers = list.items[i2].tokens.filter((t2) => t2.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t2) => /\n.*\n/.test(t2.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      if (list.loose) {
        for (i2 = 0;i2 < l2; i2++) {
          list.items[i2].loose = true;
        }
      }
      return list;
    }
  }
  html(src2) {
    const cap = this.rules.block.html.exec(src2);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src2) {
    const cap = this.rules.block.def.exec(src2);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src2) {
    const cap = this.rules.block.table.exec(src2);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l2 = item.align.length;
        let i2, j2, k, row;
        for (i2 = 0;i2 < l2; i2++) {
          if (/^ *-+: *$/.test(item.align[i2])) {
            item.align[i2] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i2])) {
            item.align[i2] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i2])) {
            item.align[i2] = "left";
          } else {
            item.align[i2] = null;
          }
        }
        l2 = item.rows.length;
        for (i2 = 0;i2 < l2; i2++) {
          item.rows[i2] = splitCells(item.rows[i2], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l2 = item.header.length;
        for (j2 = 0;j2 < l2; j2++) {
          item.header[j2].tokens = this.lexer.inline(item.header[j2].text);
        }
        l2 = item.rows.length;
        for (j2 = 0;j2 < l2; j2++) {
          row = item.rows[j2];
          for (k = 0;k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src2) {
    const cap = this.rules.block.lheading.exec(src2);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src2) {
    const cap = this.rules.block.paragraph.exec(src2);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === `
` ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src2) {
    const cap = this.rules.block.text.exec(src2);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src2) {
    const cap = this.rules.inline.escape.exec(src2);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src2) {
    const cap = this.rules.inline.tag.exec(src2);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src2) {
    const cap = this.rules.inline.link.exec(src2);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start2 = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start2 + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src2, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src2, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src2);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src2.slice(0, lLength + match.index + rLength + 1);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src2) {
    const cap = this.rules.inline.code.exec(src2);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src2) {
    const cap = this.rules.inline.br.exec(src2);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src2) {
    const cap = this.rules.inline.del.exec(src2);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src2, mangle) {
    const cap = this.rules.inline.autolink.exec(src2);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src2, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src2)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src2, smartypants) {
    const cap = this.rules.inline.text.exec(src2);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:" + "<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)" + "|comment[^\\n]*(\\n+|$)" + "|<\\?[\\s\\S]*?(?:\\?>\\n*|$)" + "|<![A-Z][\\s\\S]*?(?:>\\n*|$)" + "|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)" + "|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)" + "|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)" + "|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)" + ")",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption" + "|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption" + "|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe" + "|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option" + "|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr" + "|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.lheading = edit(block.lheading).replace(/bull/g, block.bullet).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = { ...block };
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n" + " {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?" + "(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit("^ *(?:comment *(?:\\n|\\s*$)" + "|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)" + `|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:" + "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub" + "|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)" + "\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment" + "|^</[a-zA-Z][\\w:-]*\\s*>" + "|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>" + "|^<\\?[\\s\\S]*?\\?>" + "|^<![a-zA-Z]+\\s[\\s\\S]*?>" + "|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
inline._punctuation = "\\p{P}$+<=>`^|~";
inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = { ...inline };
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function mangle(text) {
  let out = "", i2, ch;
  const l2 = text.length;
  for (i2 = 0;i2 < l2; i2++) {
    ch = text.charCodeAt(i2);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}

class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer;
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src2, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src2);
  }
  static lexInline(src2, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src2);
  }
  lex(src2) {
    src2 = src2.replace(/\r\n|\r/g, `
`);
    this.blockTokens(src2, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src2, tokens = []) {
    if (this.options.pedantic) {
      src2 = src2.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src2 = src2.replace(/^( *)(\t+)/gm, (_2, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src2) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src2)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += `
`;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += `
` + token.raw;
          lastToken.text += `
` + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += `
` + token.raw;
          lastToken.text += `
` + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src2;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += `
` + token.raw;
          lastToken.text += `
` + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src2.length;
        src2 = src2.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += `
` + token.raw;
          lastToken.text += `
` + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src2, tokens = []) {
    this.inlineQueue.push({ src: src2, tokens });
    return tokens;
  }
  inlineTokens(src2, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src2;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src2) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src2)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
        src2 = src2.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src2, mangle)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src2, mangle))) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src2;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}

class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + `
`;
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + `</code></pre>
`;
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + `</code></pre>
`;
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(body, ordered, start2) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start2 !== 1 ? ' start="' + start2 + '"' : "";
    return "<" + type + startatt + `>
` + body + "</" + type + `>
`;
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return `<table>
` + `<thead>
` + header + `</thead>
` + body + `</table>
`;
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag2 = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}

class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}

class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer;
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer;
    this.slugger = new Slugger;
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i2, j2, k, l2, l3, row, cell, header, body, token, ordered, start2, loose, itemBody, item, checked, task, checkbox, ret;
    const l4 = tokens.length;
    for (i2 = 0;i2 < l4; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j2 = 0;j2 < l2; j2++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j2].tokens), { header: true, align: token.align[j2] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j2 = 0;j2 < l2; j2++) {
            row = token.rows[j2];
            cell = "";
            l3 = row.length;
            for (k = 0;k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start2 = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j2 = 0;j2 < l2; j2++) {
            item = token.items[j2];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start2);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text, token.block);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i2 + 1 < l4 && tokens[i2 + 1].type === "text") {
            token = tokens[++i2];
            body += `
` + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i2, token, ret;
    const l2 = tokens.length;
    for (i2 = 0;i2 < l2; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

class Hooks {
  constructor(options) {
    this.options = options || defaults;
  }
  static passThroughHooks = new Set([
    "preprocess",
    "postprocess"
  ]);
  preprocess(markdown) {
    return markdown;
  }
  postprocess(html) {
    return html;
  }
}

class Marked {
  defaults = getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(Lexer.lex, Parser.parse);
  parseInline = this.#parseMarkdown(Lexer.lexInline, Parser.parseInline);
  Parser = Parser;
  parser = Parser.parse;
  Renderer = Renderer;
  TextRenderer = TextRenderer;
  Lexer = Lexer;
  lexer = Lexer.lex;
  Tokenizer = Tokenizer;
  Slugger = Slugger;
  Hooks = Hooks;
  constructor(...args) {
    this.use(...args);
  }
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          for (const cell of token.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          values = values.concat(this.walkTokens(token.items, callback));
          break;
        }
        default: {
          if (this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[token.type]) {
            this.defaults.extensions.childTokens[token.type].forEach((childTokens) => {
              values = values.concat(this.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(this.walkTokens(token.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new Renderer(this.defaults);
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new Hooks;
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args2) => {
              let ret = pack.hooks[prop].apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  #parseMarkdown(lexer, parser) {
    return (src2, opt, callback) => {
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      const origOpt = { ...opt };
      opt = { ...this.defaults, ...origOpt };
      const throwError = this.#onError(opt.silent, opt.async, callback);
      if (typeof src2 === "undefined" || src2 === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src2 !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected"));
      }
      checkDeprecations(opt, callback);
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          if (opt.hooks) {
            src2 = opt.hooks.preprocess(src2);
          }
          tokens = lexer(src2, opt);
        } catch (e2) {
          return throwError(e2);
        }
        const done = (err) => {
          let out;
          if (!err) {
            try {
              if (opt.walkTokens) {
                this.walkTokens(tokens, opt.walkTokens);
              }
              out = parser(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e2) {
              err = e2;
            }
          }
          opt.highlight = highlight;
          return err ? throwError(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length)
          return done();
        let pending = 0;
        this.walkTokens(tokens, (token) => {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, (err, code) => {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src2) : src2).then((src3) => lexer(src3, opt)).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src2 = opt.hooks.preprocess(src2);
        }
        const tokens = lexer(src2, opt);
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e2) {
        return throwError(e2);
      }
    };
  }
  #onError(silent, async, callback) {
    return (e2) => {
      e2.message += `
Please report this to https://github.com/markedjs/marked.`;
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape(e2.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e2);
      }
      if (callback) {
        callback(e2);
        return;
      }
      throw e2;
    };
  }
}
var markedInstance = new Marked(defaults);
function marked(src2, opt, callback) {
  return markedInstance.parse(src2, opt, callback);
}
marked.options = marked.setOptions = function(opt) {
  markedInstance.setOptions(opt);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = Parser.parse;
var lexer = Lexer.lex;

// src/markdown-viewer.ts
/*!
# markdown

`<xin-md>` renders markdown using [marked](https://www.npmjs.com/package/marked).

`<xin-md>` renders [markdown](https://www.markdownguide.org/) anywhere, either using the
`src` attribute to load the file asynchronously, or rendering the text inside it.

```html
<xin-md>
## hello
world
</xin-md>
```
```css
xin-md {
  display: block;
  padding: var(--spacing);
}
```

Note that, by default, `<xin-md>` will use its `textContent` (not its `innerHTML`) as its source.

## rendering markdown from a url

Again, like an `<img>` tag, you can simply set a `<xin-md>`'s `src` attribute to a URL pointing
to markdown source and it will load it asynchronously and render it.

```
<xin-md src="/path/to/file.md">
```

## setting its `value`

Or, just set the element's `value` and it will render it for you. You can try
this in the console, e.g.

```
$('.preview xin-md').value = 'testing\n\n## this is a test'
```

## elements

`<xin-md>` also (optionally) allows the embedding of inline HTML elements without blocking markdown
rendering, so that you can embed specific elements while retaining markdown. You need to explicitly set
the `elements` property, and for markdown rendering not to be blocked, the html elements need to
start on a new line and not be indented. E.g.

```html
<xin-md elements>
<form>
### this is a form
<label>
fill in this field.
**It's important!**
<input>
</label>
</form>
</xin-md>
```

In this case `<xin-md>` uses its `innerHTML` and not its `textContent`.

## context and template variables

`<xin-md>` also supports **template** values. You need to provide data to the element in the form
of `context` (an arbitrary object, or a JSON string), and then embed the template text using
handlebars-style doubled curly braces, e.g. `{{path.to.value}}`.

If no value is found, the original text is passed through.

Finally, note that template substitution occurs *before* markdown transformation, which means you can
pass context data through to HTML elements.

```html
<xin-md
  elements
  context='{"title": "template example", "foo": {"bar": 17}, "nested": "*work*: {{foo.bar}}"}'
>
## {{title}}

The magic number is <input type="number" value={{foo.bar}}>

Oh, and nested templates {{nested}}.
</xin-md>
```
*/
function populate(basePath, source) {
  if (source == null) {
    source = "";
  } else if (typeof source !== "string") {
    source = String(source);
  }
  return source.replace(/\{\{([^}]+)\}\}/g, (original, prop) => {
    const value = T[`${basePath}${prop.startsWith("[") ? prop : "." + prop}`];
    return value === undefined ? original : populate(basePath, String(value));
  });
}

class MarkdownViewer extends G {
  src = "";
  value = "";
  content = null;
  elements = false;
  context = {};
  constructor() {
    super();
    this.initAttributes("src", "elements", "context");
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.src !== "") {
      (async () => {
        const request = await fetch(this.src);
        this.value = await request.text();
      })();
    } else if (this.value === "") {
      if (this.elements) {
        this.value = this.innerHTML;
      } else {
        this.value = this.textContent != null ? this.textContent : "";
      }
    }
  }
  didRender = () => {};
  render() {
    super.render();
    T[this.instanceId] = typeof this.context === "string" ? JSON.parse(this.context) : this.context;
    const source = populate(this.instanceId, this.value);
    if (this.elements) {
      const chunks = source.split(`
`).reduce((chunks2, line) => {
        if (line.startsWith("<") || chunks2.length === 0) {
          chunks2.push(line);
        } else {
          const lastChunk = chunks2[chunks2.length - 1];
          if (!lastChunk.startsWith("<") || !lastChunk.endsWith(">")) {
            chunks2[chunks2.length - 1] += `
` + line;
          } else {
            chunks2.push(line);
          }
        }
        return chunks2;
      }, []);
      this.innerHTML = chunks.map((chunk) => chunk.startsWith("<") && chunk.endsWith(">") ? chunk : marked(chunk, { mangle: false, headerIds: false })).join("");
    } else {
      this.innerHTML = marked(source, {
        mangle: false,
        headerIds: false
      });
    }
    this.didRender();
  }
}
var markdownViewer = MarkdownViewer.elementCreator({
  tag: "xin-md"
});
// src/notifications.ts
/*!

# notifications

`XinNotification` provides a singleton custom `<xin-notification>` element that manages
a list of notifications.

The notifications are displayed most-recent first. If the notifications would take more than
half the height of the display, they are scrolled.

You can post a notification simply with `XinNotification.post()` or `postNotification()`.

```
interface NotificationSpec {
  message: string
  type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  icon?: SVGElement | string // defaults to an info icon
  duration?: number
  progress?: () => number // return percentage completion
  close?: () => void
}
```

If you provide a `progress` callback (which is assumed to return a number from `0-100`, with
100+ indicating completion) then `XinNotification` will poll it every second until the
task completes or the notification is closed. Returning 100 or more will automatically close
the notification.

If you configure a notification's `type = "progress"` but don't provide a `progress` callback
then an indefinite `<progress>` element will be displayed.

If you provide a `close` callback, it will be fired if the user closes the notification.

`postNotification` returns a callback function that closes the note programmatically (e.g.
when an operation completes). This will *also* call any `close` callback function you
provided. (The progress demos in the example exercise this functionality.)

```js
const { postNotification, icons } = xinjsui

const form = preview.querySelector('xin-form')
const submit = preview.querySelector('.submit')
const closeButton = preview.querySelector('.close')

let close

form.submitCallback = (value, isValid) => {
  if (!isValid) return
  if (value.type.startsWith('progress')) {
    startTime = Date.now()
    const { message, duration, icon } = value
    close = postNotification({
      message,
      type: 'progress',
      icon,
      progress: value.type === 'progress' ? () => (Date.now() - startTime) / (10 * duration) : undefined,
      close: () => { postNotification(`${value.message} cancelled`) },
    })
  } else {
    close = postNotification(value)
  }
  console.log(close)
  closeButton.disabled = false
}

submit.addEventListener('click', form.submit)
closeButton.addEventListener('click', () => {
  if (close) {
    close()
  }
})

postNotification({
  message: 'Welcome to xinjs-ui notifications, this message will disappear in 2s',
  duration: 2
})
```
```html
<xin-form>
  <h3 slot="header">Notification Test</h3>
  <xin-field caption="Message" key="message" type="string" value="This is a test…"></xin-field>
  <xin-field caption="Type" key="type" value="info">
    <xin-select slot="input"
      options="error,warn,info,success,log,,progress,progress (indefinite)"
    ></xin-select>
  </xin-field>
  <xin-field caption="Icon" key="icon" value="info">
    <xin-select slot="input"
      options="info,bug,thumbsUp,thumbsDown,message"
    ></xin-select>
  </xin-field>
  <xin-field caption="Duration" key="duration" type="number" value="2"></xin-field>
  <button slot="footer" class="close" disabled>Close Last Notification</button>
  <span slot="footer" class="elastic"></span>
  <button slot="footer" class="submit">Post Notification</button>
</xin-form>
```
```css
xin-form {
  height: 100%;
}

xin-form::part(content) {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  background: var(--background);
}

xin-form::part(header),
xin-form::part(footer) {
  background: #eee;
  justify-content: center;
  padding: 10px;
}

xin-form h3 {
  margin: 0;
}

xin-form label {
  display: grid;
  grid-template-columns: 120px 1fr;
}
```

## `postNotification(spec: NotificationSpec | string)`

This is simply a wrapper for `XinNotification.post()`.
*/
var { div: div9, button: button8 } = S;
var COLOR_MAP = {
  error: "red",
  warn: "orange",
  info: "royalblue",
  log: "gray",
  success: "green",
  progress: "royalblue"
};

class XinNotification extends G {
  static singleton;
  static styleSpec = {
    ":host": {
      _notificationSpacing: 8,
      _notificationWidth: 360,
      _notificationPadding: `${qn.notificationSpacing} ${qn.notificationSpacing50} ${qn.notificationSpacing} ${qn.notificationSpacing200}`,
      _notificationBg: "#fafafa",
      _notificationAccentColor: "#aaa",
      _notificationTextColor: "#444",
      _notificationIconSize: qn.notificationSpacing300,
      _notificationButtonSize: 48,
      _notificationBorderWidth: "3px 0 0",
      _notificationBorderRadius: qn.notificationSpacing50,
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      paddingBottom: qn.notificationSpacing,
      width: qn.notificationWidth,
      display: "flex",
      flexDirection: "column-reverse",
      margin: "0 auto",
      gap: qn.notificationSpacing,
      maxHeight: "50vh",
      overflow: "hidden auto",
      boxShadow: "none !important"
    },
    ":host *": {
      color: qn.notificationTextColor
    },
    ":host .note": {
      display: "grid",
      background: qn.notificationBg,
      padding: qn.notificationPadding,
      gridTemplateColumns: `${qn.notificationIconSize} 1fr ${qn.notificationButtonSize}`,
      gap: qn.notificationSpacing,
      alignItems: "center",
      borderRadius: qn.notificationBorderRadius,
      boxShadow: `0 2px 8px #0006, inset 0 0 0 2px ${qn.notificationAccentColor}`,
      borderColor: qn.notificationAccentColor,
      borderWidth: qn.notificationBorderWidth,
      borderStyle: "solid",
      transition: "0.5s ease-in",
      transitionProperty: "margin, opacity",
      zIndex: 1
    },
    ":host .note .icon": {
      fill: qn.notificationAccentColor
    },
    ":host .note button": {
      display: "flex",
      lineHeight: qn.notificationButtonSize,
      padding: 0,
      margin: 0,
      height: qn.notificationButtonSize,
      width: qn.notificationButtonSize,
      background: "transparent",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      border: "none",
      position: "relative"
    },
    ":host .note button:hover svg": {
      fill: qn.notificationAccentColor
    },
    ":host .note button:active svg": {
      borderRadius: 99,
      fill: qn.notificationBg,
      background: qn.notificationAccentColor,
      padding: qn.spacing50
    },
    ":host .note svg": {
      height: qn.notificationIconSize,
      width: qn.notificationIconSize,
      pointerEvents: "none"
    },
    ":host .message": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: qn.notificationSpacing
    },
    ":host .note.closing": {
      opacity: 0,
      zIndex: 0
    }
  };
  static removeNote(note) {
    note.classList.add("closing");
    note.style.marginBottom = -note.offsetHeight + "px";
    const remove = () => {
      note.remove();
    };
    note.addEventListener("transitionend", remove);
    setTimeout(remove, 1000);
  }
  static post(spec) {
    const { message, duration, type, close, progress, icon } = Object.assign({ type: "info", duration: -1 }, typeof spec === "string" ? { message: spec } : spec);
    if (!this.singleton) {
      this.singleton = xinNotification();
    }
    const singleton = this.singleton;
    document.body.append(singleton);
    singleton.style.zIndex = String(findHighestZ() + 1);
    const _notificationAccentColor = COLOR_MAP[type];
    const progressBar = progress || type === "progress" ? S.progress() : {};
    const closeCallback = () => {
      if (close) {
        close();
      }
      XinNotification.removeNote(note);
    };
    const iconElement = icon instanceof SVGElement ? icon : icon ? icons[icon]({ class: "icon" }) : icons.info({ class: "icon" });
    const note = div9({
      class: `note ${type}`,
      style: {
        _notificationAccentColor
      }
    }, iconElement, div9({ class: "message" }, div9(message), progressBar), button8({
      class: "close",
      title: "close",
      apply(elt) {
        elt.addEventListener("click", closeCallback);
      }
    }, icons.x()));
    singleton.shadowRoot.append(note);
    if (progressBar instanceof HTMLProgressElement && progress instanceof Function) {
      progressBar.setAttribute("max", String(100));
      progressBar.value = progress();
      const interval = setInterval(() => {
        if (!singleton.shadowRoot.contains(note)) {
          clearInterval(interval);
          return;
        }
        const percentage = progress();
        progressBar.value = percentage;
        if (percentage >= 100) {
          XinNotification.removeNote(note);
        }
      }, 1000);
    }
    if (duration > 0) {
      setTimeout(() => {
        XinNotification.removeNote(note);
      }, duration * 1000);
    }
    note.scrollIntoView();
    return closeCallback;
  }
  content = null;
}
var xinNotification = XinNotification.elementCreator({
  tag: "xin-notification"
});
function postNotification(spec) {
  return XinNotification.post(spec);
}
// src/password-strength.ts
/*!
# password strength

Just wrap it a `<xin-password-strength>` element around an `<input>`
and it will gauge its content strength as a password. It will also
let you **securely verify** that the password hasn't been breached.

```js
const toggle = preview.querySelector('.toggle')
const icon = preview.querySelector('xin-icon')
const input = preview.querySelector('input')
const breach = preview.querySelector('.breach')
const output = preview.querySelector('.output')

toggle.addEventListener('click', () => {
  if (icon.icon === 'eye') {
    input.type = 'text'
    icon.icon = 'eyeOff'
  } else {
    input.type = 'password'
    icon.icon = 'eye'
  }
})

breach.addEventListener('click', async () => {
  preview.querySelector('xin-password-strength').isBreached().then(isBreached => {
    output.textContent =
      isBreached
      ? 'This password has been breached, look at console for details'
      : 'Seems OK'
    output.classList.toggle('breached', isBreached)
  })
})
```
```html
<xin-password-strength>
  <input class="password" type="password">
  <button class="toggle">
    <xin-icon icon="eye"></xin-icon>
  </button>
</xin-password-strength>

<br><br>
<button class="breach">Check if breached</button>
<div class="output"></div>
```
```css
input.password {
  box-shadow: inset 0 0 0 2px var(--indicator-color);
}

.breached {
  color: white;
  background: red;
}
```

## Algorithm

The password is assessed to have a strength based on:

- **length** one point for at least `goodLength` characters long.
- **[a-z]** one point for containing a lowercase letter
- **[A-Z]** one point for containing an uppercase letter
- **[0-9]** one point for containing a numeric character
- **^[a-zA-Z0-9]]** one point for containing some other kind of character

A password smaller than `minLength` is an automatic `0`.

## Attributes

- `minLength` defaults to `8`
- `goodLength` defaults to `12`
- `indicatorColors` six HTML colors, separated by commas, defaults to `'#f00,#f40,#f80,#ef0,#8f0,#0d4'`
- `descriptionColors` six HTML colors, sepeated by commans, defaults to `'#000,#000,#000,#000,#000,#fff'`

## Properties

- `value`, `strength` is a number from 0 to 5
- `issues` is a structure which you can use to generate feedback

```
<xin-password-strength>.issues = {
  tooShort: boolean,
  short: boolean,
  noUpper: boolean,
  noLower: boolean,
  noNumber: boolean,
  noSpecial: boolean,
}
```

## `isBreached()`

`<xin-password-meter>` also provides an `isBreached(): Promise<boolean>` method
which uses [weakpass.com's API](https://weakpass.com/) to tell you if the password has been
breached.

> Note that `isBreached` does not send the plain-text password anywhere. It uses **SHA-1**
to hash the password and then sends that for lookup.

## Utility Functions

Two functions used internally for querying [Weakpass,com](https://weakpass.com/) are
provided in case they're useful on their own.

`isBreached(password: striing): Promise<boolean>` will return `true` if the password is
found in Weakpass's database (and spit out extra info to the console).

`digest(s: string, method="sha-1"): Promise<string>` is just a nice wrapper for `crypto.digest`.
*/
var digest = async (s2, method = "SHA-1") => {
  const encoder = new TextEncoder;
  const data = encoder.encode(s2);
  const hashBuffer = await crypto.subtle.digest(method, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b2) => b2.toString(16).padStart(2, "0")).join("");
  return hashHex;
};
var isBreached = async (password) => {
  const hashHex = await digest(password);
  const response = await fetch(`https://weakpass.com/api/v1/search/${hashHex}`);
  if (response.ok) {
    const result = await response.json();
    console.log("password found in weakpass database", result);
  }
  return response.status !== 404;
};
var { span: span8, xinSlot: xinSlot3 } = S;

class XinPasswordStrength extends G {
  minLength = 8;
  goodLength = 12;
  indicatorColors = "#f00,#f40,#f80,#ef0,#8f0,#0a2";
  descriptionColors = "#000,#000,#000,#000,#000,#fff";
  issues = {
    tooShort: true,
    short: true,
    noUpper: true,
    noLower: true,
    noNumber: true,
    noSpecial: true
  };
  issueDescriptions = {
    tooShort: "too short",
    short: "short",
    noUpper: "no upper case",
    noLower: "no lower case",
    noNumber: "no digits",
    noSpecial: "no unusual characters"
  };
  value = 0;
  strengthDescriptions = [
    "unacceptable",
    "very weak",
    "weak",
    "moderate",
    "strong",
    "very strong"
  ];
  constructor() {
    super();
    this.initAttributes("minLength", "goodLength", "indicatorColors");
  }
  strength(password) {
    this.issues = {
      tooShort: password.length < this.minLength,
      short: password.length < this.goodLength,
      noUpper: !password.match(/[A-Z]/),
      noLower: !password.match(/[a-z]/),
      noNumber: !password.match(/[0-9]/),
      noSpecial: !password.match(/[^a-zA-Z0-9]/)
    };
    return this.issues.tooShort ? 0 : Object.values(this.issues).filter((v) => !v).length - 1;
  }
  async isBreached() {
    const password = this.querySelector("input")?.value;
    if (!password || typeof password !== "string") {
      return true;
    }
    return await isBreached(password);
  }
  updateIndicator = (password) => {
    const { level, description } = this.parts;
    const colors = this.indicatorColors.split(",");
    const descriptionColors = this.descriptionColors.split(",");
    const strength = this.strength(password);
    if (this.value !== strength) {
      this.value = strength;
      this.dispatchEvent(new Event("change"));
    }
    level.style.width = `${(strength + 1) * 16.67}%`;
    this.style.setProperty("--indicator-color", colors[strength]);
    this.style.setProperty("--description-color", descriptionColors[strength]);
    description.textContent = this.strengthDescriptions[strength];
  };
  update = (event) => {
    const input5 = event.target.closest("input");
    this.updateIndicator(input5?.value || "");
  };
  content = () => [
    xinSlot3({ onInput: this.update }),
    span8({ part: "meter" }, span8({ part: "level" }), span8({ part: "description" }))
  ];
  render() {
    super.render();
    const input5 = this.querySelector("input");
    this.updateIndicator(input5?.value);
  }
}
var xinPasswordStrength = XinPasswordStrength.elementCreator({
  tag: "xin-password-strength",
  styleSpec: {
    ":host": {
      display: "inline-flex",
      flexDirection: "column",
      gap: qn.spacing50,
      position: "relative"
    },
    ":host xin-slot": {
      display: "flex"
    },
    ':host [part="meter"]': {
      display: "block",
      position: "relative",
      height: wn.meterHeight("24px"),
      background: wn.indicatorBg("white"),
      borderRadius: wn.meterRadius("4px"),
      boxShadow: wn.meterShadow(`inset 0 0 0 2px ${qn.indicatorColor}`)
    },
    ':host [part="level"]': {
      height: wn.levelHeight("20px"),
      content: '" "',
      display: "inline-block",
      width: 0,
      transition: "0.15s ease-out",
      background: qn.indicatorColor,
      margin: wn.levelMargin("2px"),
      borderRadius: wn.levelRadius("2px")
    },
    ':host [part="description"]': {
      position: "absolute",
      inset: "0",
      color: qn.descriptionColor,
      height: wn.meterHeight("24px"),
      lineHeight: wn.meterHeight("24px"),
      textAlign: "center"
    }
  }
});
// src/rating.ts
/*!
# rating

`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`
that renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.

```html
<xin-rating value=3.4></xin-rating>
<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>
<xin-rating value=3.4 color="deepskyblue"></xin-rating>
<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>
```
```css
.preview {
  display: flex;
  flex-direction: column;
}
```

## Attributes

- `icon-size` (24 by default) determines the height of the control and along with `max` its width
- `max` maximum rating
- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)
- `step` (0.5 by default) granularity of rating
- `icon` ('star' by default) determines the icon used
- `fill` (#f91 by default) is the color of rating icons
- `empty-color` (#ccc by default) is the color of background icons
- `readonly` (false by default) prevents the user from changing the rating
- `hollow` (false by default) makes the empty rating icons hollow.

## Keyboard

`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).

The up key increases the rating, down descreases it. This is the same
as the behavior of `<input type="number">`, [Shoelace's rating widget](https://shoelace.style/components/rating/),
and (in my opinion) common sense, but  not like [MUI's rating widget](https://mui.com/material-ui/react-rating/).
*/
var { span: span9 } = S;

class XinRating extends G {
  iconSize = 24;
  min = 1;
  max = 5;
  step = 1;
  value = null;
  icon = "star";
  color = "#f91";
  emptyColor = "#8888";
  emptyStrokeWidth = 2;
  readonly = false;
  hollow = false;
  static styleSpec = {
    ":host": {
      display: "inline-block",
      position: "relative",
      width: "fit-content"
    },
    ":host::part(container)": {
      position: "relative",
      display: "inline-block"
    },
    ":host::part(empty), :host::part(filled)": {
      height: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    ":host::part(empty)": {
      pointerEvents: "none",
      _textColor: "transparent"
    },
    ':host [part="empty"]:not(.hollow)': {
      fill: qn.ratingEmptyColor
    },
    ":host .hollow": {
      fill: "none",
      stroke: qn.ratingEmptyColor,
      strokeWidth: qn.ratingEmptyStrokeWidth
    },
    ":host::part(filled)": {
      position: "absolute",
      left: 0,
      fill: qn.ratingColor,
      stroke: qn.ratingColor,
      strokeWidth: qn.ratingEmptyStrokeWidth
    },
    ":host svg": {
      transform: "scale(0.7)",
      pointerEvents: "all !important",
      transition: "0.25s ease-in-out"
    },
    ":host svg:hover": {
      transform: "scale(0.9)"
    },
    ":host svg:active": {
      transform: "scale(1)"
    }
  };
  constructor() {
    super();
    this.initAttributes("max", "min", "icon", "step", "color", "emptyColor", "readonly", "iconSize", "hollow");
  }
  content = () => span9({ part: "container" }, span9({ part: "empty" }), span9({ part: "filled" }));
  displayValue(value) {
    const { empty, filled } = this.parts;
    const roundedValue = Math.round((value || 0) / this.step) * this.step;
    filled.style.width = roundedValue / this.max * empty.offsetWidth + "px";
  }
  update = (event) => {
    if (this.readonly) {
      return;
    }
    const { empty } = this.parts;
    const x = event instanceof MouseEvent ? event.pageX - empty.getBoundingClientRect().x : 0;
    const value = Math.min(Math.max(this.min, Math.round(x / empty.offsetWidth * this.max / this.step + this.step * 0.5) * this.step), this.max);
    if (event.type === "click") {
      this.value = value;
    } else if (event.type === "mousemove") {
      this.displayValue(value);
    } else {
      this.displayValue(this.value || 0);
    }
  };
  handleKey = (event) => {
    let value = Number(this.value);
    if (value == null) {
      value = Math.round((this.min + this.max) * 0.5 * this.step) * this.step;
    }
    let blockEvent = false;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowRight":
        value += this.step;
        blockEvent = true;
        break;
      case "ArrowDown":
      case "ArrowLeft":
        value -= this.step;
        blockEvent = true;
        break;
    }
    this.value = Math.max(Math.min(value, this.max), this.min);
    if (blockEvent) {
      event.stopPropagation();
      event.preventDefault();
    }
  };
  connectedCallback() {
    super.connectedCallback();
    const { container } = this.parts;
    container.tabIndex = 0;
    container.addEventListener("mousemove", this.update, true);
    container.addEventListener("mouseleave", this.update);
    container.addEventListener("blur", this.update);
    container.addEventListener("click", this.update);
    container.addEventListener("keydown", this.handleKey);
  }
  _renderedIcon = "";
  render() {
    super.render();
    this.style.setProperty("--rating-color", this.color);
    this.style.setProperty("--rating-empty-color", this.emptyColor);
    this.style.setProperty("--rating-empty-stroke-width", String(this.emptyStrokeWidth * 32));
    if (this.readonly) {
      this.role = "image";
    } else {
      this.role = "slider";
    }
    this.ariaLabel = `rating ${this.value} out of ${this.max}`;
    this.ariaValueMax = String(this.max);
    this.ariaValueMin = String(this.min);
    this.ariaValueNow = this.value === null ? String(-1) : String(this.value);
    const { empty, filled } = this.parts;
    const height = this.iconSize + "px";
    empty.classList.toggle("hollow", this.hollow);
    if (this._renderedIcon !== this.icon) {
      this._renderedIcon = this.icon;
      for (let i2 = 0;i2 < this.max; i2++) {
        empty.append(icons[this.icon]({ height }));
        filled.append(icons[this.icon]({ height }));
      }
    }
    this.style.height = height;
    this.displayValue(this.value);
  }
}
var xinRating = XinRating.elementCreator({
  tag: "xin-rating"
});
// src/rich-text.ts
/*!
# word (rich text editor)

`<xin-word>` is a simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

```html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
```
```css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
```

By default, `<xin-word>` treats its initial contents as its document, but you can also set (and get)
its `value`.

## toolbar

`<xin-word>` elements have a `toolbar` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

## properties

A `<xin-word>` element also has `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<xin-word>` component).
*/
var { xinSlot: xinSlot4, div: div10, button: button9, span: span10 } = S;
var blockStyles = [
  {
    caption: "Title",
    tagType: "H1"
  },
  {
    caption: "Heading",
    tagType: "H2"
  },
  {
    caption: "Subheading",
    tagType: "H3"
  },
  {
    caption: "Minor heading",
    tagType: "H4"
  },
  {
    caption: "Body",
    tagType: "P"
  },
  {
    caption: "Code Block",
    tagType: "PRE"
  }
];
function blockStyle(options2 = blockStyles) {
  return xinSelect({
    title: "paragraph style",
    slot: "toolbar",
    class: "block-style",
    options: options2.map(({ caption, tagType }) => ({
      caption,
      value: `formatBlock,${tagType}`
    }))
  });
}
function spacer(width = "10px") {
  return span10({
    slot: "toolbar",
    style: { flex: `0 0 ${width}`, content: " " }
  });
}
function elastic(width = "10px") {
  return span10({
    slot: "toolbar",
    style: { flex: `0 0 ${width}`, content: " " }
  });
}
function commandButton(title, dataCommand, icon) {
  return button9({ slot: "toolbar", dataCommand, title }, icon);
}
var paragraphStyleWidgets = () => [
  commandButton("left-justify", "justifyLeft", icons.alignLeft()),
  commandButton("center", "justifyCenter", icons.alignCenter()),
  commandButton("right-justify", "justifyRight", icons.alignRight()),
  spacer(),
  commandButton("bullet list", "insertUnorderedList", icons.listBullet()),
  commandButton("numbered list", "insertOrderedList", icons.listNumber()),
  spacer(),
  commandButton("indent", "indent", icons.blockIndent()),
  commandButton("indent", "outdent", icons.blockOutdent())
];
var characterStyleWidgets = () => [
  commandButton("bold", "bold", icons.fontBold()),
  commandButton("italic", "italic", icons.fontItalic()),
  commandButton("underline", "underline", icons.fontUnderline())
];
var minimalWidgets = () => [
  blockStyle(),
  spacer(),
  ...characterStyleWidgets()
];
var richTextWidgets = () => [
  blockStyle(),
  spacer(),
  ...paragraphStyleWidgets(),
  spacer(),
  ...characterStyleWidgets()
];

class RichText extends G {
  widgets = "default";
  isInitialized = false;
  get value() {
    return this.isInitialized ? this.parts.doc.innerHTML : this.savedValue || this.innerHTML;
  }
  set value(docHtml) {
    if (this.isInitialized) {
      this.parts.doc.innerHTML = docHtml;
    } else {
      this.innerHTML = docHtml;
    }
  }
  blockElement(elt) {
    const { doc } = this.parts;
    while (elt.parentElement !== null && elt.parentElement !== doc) {
      elt = elt.parentElement;
    }
    return elt.parentElement === doc ? elt : undefined;
  }
  get selectedBlocks() {
    const { doc } = this.parts;
    const selObject = window.getSelection();
    if (selObject === null) {
      return [];
    }
    const blocks = [];
    for (let i2 = 0;i2 < selObject.rangeCount; i2++) {
      const range = selObject.getRangeAt(i2);
      if (!doc.contains(range.commonAncestorContainer)) {
        continue;
      }
      let block2 = this.blockElement(range.startContainer);
      const lastBlock = this.blockElement(range.endContainer);
      blocks.push(block2);
      while (block2 !== lastBlock && block2 !== null) {
        block2 = block2.nextElementSibling;
        blocks.push(block2);
      }
    }
    return blocks;
  }
  get selectedText() {
    const selObject = window.getSelection();
    if (selObject === null) {
      return "";
    }
    return this.selectedBlocks.length ? selObject.toString() : "";
  }
  selectionChange = () => {};
  handleSelectChange = (event) => {
    const select2 = event.target.closest(XinSelect.tagName);
    if (select2 == null) {
      return;
    }
    this.doCommand(select2.value);
  };
  handleButtonClick = (event) => {
    const button10 = event.target.closest("button");
    if (button10 == null) {
      return;
    }
    this.doCommand(button10.dataset.command);
  };
  content = [
    xinSlot4({
      name: "toolbar",
      part: "toolbar",
      onClick: this.handleButtonClick,
      onChange: this.handleSelectChange
    }),
    div10({
      part: "doc",
      contenteditable: true,
      style: {
        flex: "1 1 auto",
        outline: "none"
      }
    }),
    xinSlot4({
      part: "content"
    })
  ];
  constructor() {
    super();
    this.initAttributes("widgets");
  }
  doCommand(command) {
    if (command === undefined) {
      return;
    }
    const args = command.split(",");
    console.log("execCommand", args[0], false, ...args.slice(1));
    document.execCommand(args[0], false, ...args.slice(1));
  }
  updateBlockStyle() {
    const select2 = this.parts.toolbar.querySelector(".block-style");
    if (select2 === null) {
      return;
    }
    let blockTags = this.selectedBlocks.map((block2) => block2.tagName);
    blockTags = [...new Set(blockTags)];
    select2.value = blockTags.length === 1 ? `formatBlock,${blockTags[0]}` : "";
  }
  connectedCallback() {
    super.connectedCallback();
    const { doc, content } = this.parts;
    if (content.innerHTML !== "" && doc.innerHTML === "") {
      doc.innerHTML = content.innerHTML;
      content.innerHTML = "";
    }
    this.isInitialized = true;
    content.style.display = "none";
    document.addEventListener("selectionchange", (event) => {
      this.updateBlockStyle();
      this.selectionChange(event, this);
    });
  }
  render() {
    const { toolbar } = this.parts;
    super.render();
    if (toolbar.children.length === 0) {
      switch (this.widgets) {
        case "minimal":
          toolbar.append(...minimalWidgets());
          break;
        case "default":
          toolbar.append(...richTextWidgets());
          break;
      }
    }
  }
}
var richText = RichText.elementCreator({
  tag: "xin-word",
  styleSpec: {
    ":host": {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    ':host [part="toolbar"]': {
      padding: "4px",
      display: "flex",
      gap: "0px",
      flex: "0 0 auto",
      flexWrap: "wrap"
    }
  }
});
// src/segmented.ts
/*!
# segmented select

This is a fairly general-purpose segmented select control.

```html
<blockquote>
Check the console to see the values being set.
</blockquote>

<div class="grid">
<xin-segmented value="yes" choices="yes, no, don't care">
  Should we?
</xin-segmented>

<xin-segmented title="do you like?" choices="yes=Yes:thumbsUp, no=No:thumbsDown"></xin-segmented>

<xin-segmented
  style="--segmented-direction: column; --segmented-align-items: stretch" 
  choices="in a relationship, single" other="it's complicated…" 
  placeholder="oooh… please elaborate"
  value="separated"
>
  Relationship Status
</xin-segmented>

<xin-segmented 
  multiple 
  style="
    --segmented-direction: column; 
    --segmented-align-items: start; 
    --segmented-option-grid-columns: 24px 24px 100px;
    --segmented-input-visibility: visible;
  " 
  choices="star=Star:star, game=Game:game, bug=Bug:bug, camera=Camera:camera"
  value="star,bug"
>
  Pick all that apply
</xin-segmented>
</div>
```
```css
.preview .grid {
  --segmented-option-current-background: var(--brand-color);
  --segmented-option-current-color: var(--brand-text-color);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```
```js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
```

## Properties

- `values` is an array of values (only really useful if `multiple` is set to true)

You can set `choices` programmatically to an array of `Choice` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- `choices` is a string of comma-delimited options of the form `value=caption:icon`, 
  where caption and icon are optional
- `multiple` allows multiple selection
- `name` allows you to set the name of the `<input>` elements to a specific value, it will default 
  to the component's `instanceId`
- `other` (default '', meaning other is not allowed) is the caption for other options, allowing 
  the user to input their choice. It will be reset to '' if `multiple` is set.
- `placeholder` is the placeholder displayed in the `<input>` field for **other** responses

## Styling

The following CSS variables can be used to control customize the `<xin-segmented>` component.

    --segmented-align-items
    --segmented-direction
    --segmented-option-color
    --segmented-option-current-background
    --segmented-option-current-color
    --segmented-option-font
    --segmented-option-gap
    --segmented-option-grid-columns
    --segmented-option-icon-color
    --segmented-option-padding
    --segmented-options-background
    --segmented-options-border-radius
    --segmented-placeholder-opacity
*/
var { div: div11, slot: slot6, label: label2, span: span11, input: input5 } = S;

class XinSegmented extends G {
  choices = "";
  other = "";
  multiple = false;
  name = "";
  placeholder = "Please specify…";
  value = null;
  get values() {
    return (this.value || "").split(",").map((v) => v.trim()).filter((v) => v !== "");
  }
  content = () => [
    slot6(),
    div11({ part: "options" }, input5({ part: "custom", hidden: true }))
  ];
  static styleSpec = {
    ":host": {
      display: "inline-flex",
      gap: wn.segmentedOptionGap("8px")
    },
    ":host, :host::part(options)": {
      flexDirection: wn.segmentedDirection("row"),
      alignItems: wn.segmentedAlignItems("center")
    },
    ":host label": {
      display: "inline-grid",
      alignItems: "center",
      gap: wn.segmentedOptionGap("8px"),
      gridTemplateColumns: wn.segmentedOptionGridColumns("0px 24px 1fr"),
      padding: wn.segmentedOptionPadding("4px 12px"),
      font: wn.segmentedOptionFont("16px")
    },
    ":host label:has(:checked)": {
      color: wn.segmentedOptionCurrentColor("#eee"),
      background: wn.segmentedOptionCurrentBackground("#44a")
    },
    ":host svg": {
      height: wn.segmentOptionIconSize("16px"),
      fill: wn.segmentedOptionIconColor("currentColor")
    },
    ":host label.no-icon": {
      gap: 0,
      gridTemplateColumns: wn.segmentedOptionGridColumns("0px 1fr")
    },
    ':host input[type="radio"], :host input[type="checkbox"]': {
      visibility: wn.segmentedInputVisibility("hidden")
    },
    ":host::part(options)": {
      display: "flex",
      borderRadius: wn.segmentedOptionsBorderRadius("8px"),
      background: wn.segmentedOptionsBackground("#fff"),
      color: wn.segmentedOptionColor("#222"),
      overflow: "hidden"
    },
    ":host::part(custom)": {
      padding: wn.segmentedOptionPadding("4px 12px"),
      color: wn.segmentedOptionCurrentColor("#eee"),
      background: wn.segmentedOptionCurrentBackground("#44a"),
      font: wn.segmentedOptionFont("16px"),
      border: "0",
      outline: "none"
    },
    ":host::part(custom)::placeholder": {
      color: wn.segmentedOptionCurrentColor("#eee"),
      opacity: wn.segmentedPlaceholderOpacity(0.75)
    }
  };
  constructor() {
    super();
    this.initAttributes("direction", "choices", "other", "multiple", "name", "placeholder");
  }
  valueChanged = false;
  handleChange = () => {
    const { options: options2, custom } = this.parts;
    if (this.multiple) {
      const inputs = [
        ...options2.querySelectorAll("input:checked")
      ];
      this.value = inputs.map((input6) => input6.value).join(",");
    } else {
      const input6 = options2.querySelector("input:checked");
      if (!input6) {
        this.value = null;
      } else if (input6.value) {
        custom.setAttribute("hidden", "");
        this.value = input6.value;
      } else {
        custom.removeAttribute("hidden");
        custom.focus();
        custom.select();
        this.value = custom.value;
      }
    }
    this.valueChanged = true;
  };
  handleKey = (event) => {
    switch (event.code) {
      case "Space":
        ;
        event.target.click();
        break;
    }
  };
  connectedCallback() {
    super.connectedCallback();
    const { options: options2 } = this.parts;
    if (this.name === "") {
      this.name = this.instanceId;
    }
    options2.addEventListener("change", this.handleChange);
    options2.addEventListener("keydown", this.handleKey);
    if (this.other && this.multiple) {
      console.warn(this, "is set to [other] and [multiple]; [other] will be ignored");
      this.other = "";
    }
  }
  get _choices() {
    const options2 = Array.isArray(this.choices) ? this.choices : this.choices.split(",").filter((c) => c.trim() !== "").map((c) => {
      const [value, remains] = c.split("=").map((v) => v.trim());
      const [caption, iconName] = (remains || value).split(":").map((v) => v.trim());
      const icon = iconName ? icons[iconName]() : "";
      const choice = { value, icon, caption };
      return choice;
    });
    if (this.other && !this.multiple) {
      const [caption, icon] = this.other.split(":");
      options2.push({
        value: "",
        caption,
        icon
      });
    }
    return options2;
  }
  get isOtherValue() {
    return Boolean(this.value === "" || this.value && !this._choices.find((choice) => choice.value === this.value));
  }
  render() {
    super.render();
    if (this.valueChanged) {
      this.valueChanged = false;
      return;
    }
    const { options: options2, custom } = this.parts;
    options2.textContent = "";
    const type = this.multiple ? "checkbox" : "radio";
    const { values, isOtherValue } = this;
    options2.append(...this._choices.map((choice) => {
      return label2({ tabindex: 0 }, input5({
        type,
        name: this.name,
        value: choice.value,
        checked: values.includes(choice.value) || choice.value === "" && isOtherValue,
        tabIndex: -1
      }), choice.icon || { class: "no-icon" }, span11(choice.caption));
    }));
    if (this.other && !this.multiple) {
      custom.hidden = !isOtherValue;
      custom.value = isOtherValue ? this.value : "";
      custom.placeholder = this.placeholder;
      options2.append(custom);
    }
  }
}
var xinSegmented = XinSegmented.elementCreator({
  tag: "xin-segmented"
});
// src/side-nav.ts
/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/
var { slot: slot7 } = S;

class SideNav extends G {
  minSize = 800;
  navSize = 200;
  compact = false;
  content = [slot7({ name: "nav" }), slot7({ part: "content" })];
  _contentVisible = false;
  get contentVisible() {
    return this._contentVisible;
  }
  set contentVisible(visible) {
    this._contentVisible = visible;
    this.queueRender();
  }
  static styleSpec = {
    ":host": {
      display: "grid",
      gridTemplateColumns: `${wn.navWidth("50%")} ${wn.contentWidth("50%")}`,
      gridTemplateRows: "100%",
      position: "relative",
      margin: wn.margin("0 0 0 -100%"),
      transition: wn.sideNavTransition("0.25s ease-out")
    },
    ":host slot": {
      position: "relative"
    },
    ":host slot:not([name])": {
      display: "block"
    },
    ':host slot[name="nav"]': {
      display: "block"
    }
  };
  onResize = () => {
    const { content } = this.parts;
    const parent = this.offsetParent;
    if (parent === null) {
      return;
    }
    this.compact = parent.offsetWidth < this.minSize;
    const empty = [...this.childNodes].find((node) => node instanceof Element ? node.getAttribute("slot") !== "nav" : true) === undefined;
    if (empty) {
      this.style.setProperty("--nav-width", "100%");
      this.style.setProperty("--content-width", "0%");
      return;
    }
    if (!this.compact) {
      content.classList.add("-xin-sidenav-visible");
      this.style.setProperty("--nav-width", `${this.navSize}px`);
      this.style.setProperty("--content-width", `calc(100% - ${this.navSize}px)`);
      this.style.setProperty("--margin", "0");
    } else {
      content.classList.remove("-xin-sidenav-visible");
      this.style.setProperty("--nav-width", "50%");
      this.style.setProperty("--content-width", "50%");
      if (this.contentVisible) {
        this.style.setProperty("--margin", "0 0 0 -100%");
      } else {
        this.style.setProperty("--margin", "0 -100% 0 0");
      }
    }
  };
  observer;
  connectedCallback() {
    super.connectedCallback();
    this.contentVisible = this.parts.content.childNodes.length === 0;
    globalThis.addEventListener("resize", this.onResize);
    this.observer = new MutationObserver(this.onResize);
    this.observer.observe(this, { childList: true });
    this.style.setProperty("--side-nav-transition", "0s");
    setTimeout(() => {
      this.style.removeProperty("--side-nav-transition");
    }, 250);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }
  constructor() {
    super();
    this.initAttributes("minSize", "navSize", "compact");
  }
  render() {
    super.render();
    this.onResize();
  }
}
var sideNav = SideNav.elementCreator({
  tag: "xin-sidenav"
});
// src/size-break.ts
var { slot: slot8 } = S;
/*!
# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<xin-sizebreak>`.

Note that the sizes referred to are of the `<xin-sizebreak>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```html
<div class="container">
  <xin-sizebreak min-width="300" min-height="150">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview {
  touch-action: none;
}

.preview xin-sizebreak {
  width: 100%;
  height: 100%;
  background: #fff8;
  border: 1px solid #aaa;
}

.preview xin-sizebreak * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.preview .container {
  position: relative;
  min-width: 100px;
  min-height: 40px;
  max-height: 100%;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #0002;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
  opacity: 0.5;
}

.preview .sizer:hover {
  opacity: 1.0;
}
```

`<xin-sizebreak>` supports both `min-width` and/or `min-height`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.
*/

class SizeBreak extends G {
  minWidth = 0;
  minHeight = 0;
  value = "normal";
  content = [slot8({ part: "normal" }), slot8({ part: "small", name: "small" })];
  static styleSpec = {
    ":host": {
      display: "inline-block",
      position: "relative"
    }
  };
  constructor() {
    super();
    this.initAttributes("minWidth", "minHeight");
  }
  onResize = () => {
    const { normal, small } = this.parts;
    const parent = this.offsetParent;
    if (!(parent instanceof HTMLElement)) {
      return;
    } else if (parent.offsetWidth < this.minWidth || parent.offsetHeight < this.minHeight) {
      normal.hidden = true;
      small.hidden = false;
      this.value = "small";
    } else {
      normal.hidden = false;
      small.hidden = true;
      this.value = "normal";
    }
  };
  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener("resize", this.onResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    globalThis.removeEventListener("resize", this.onResize);
  }
}
var sizeBreak = SizeBreak.elementCreator({
  tag: "xin-sizebreak"
});
// src/sizer.ts
/*!
# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

```html
<div>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
```

<xin-css-var-editor element-selector="xin-sizer"></xin-css-var-editor>
*/

class XinSizer extends G {
  target = null;
  static styleSpec = {
    ":host": {
      _resizeIconFill: "#222",
      display: "block",
      position: "absolute",
      bottom: -7,
      right: -7,
      padding: 14,
      width: 44,
      height: 44,
      opacity: 0.25,
      transition: "opacity 0.25s ease-out"
    },
    ":host(:hover)": {
      opacity: 0.5
    },
    ":host svg": {
      width: 16,
      height: 16,
      fill: qn.resizeIconFill
    }
  };
  content = icons.resize();
  get minSize() {
    const { minWidth, minHeight } = getComputedStyle(this.target);
    return {
      width: parseFloat(minWidth) || 32,
      height: parseFloat(minHeight) || 32
    };
  }
  resizeTarget = (event) => {
    const { target } = this;
    if (!target)
      return;
    const w2 = target.offsetWidth;
    const h = target.offsetHeight;
    target.style.left = target.offsetLeft + "px";
    target.style.top = target.offsetTop + "px";
    target.style.bottom = "";
    target.style.right = "";
    const { minSize } = this;
    trackDrag(event, (dx, dy, event2) => {
      target.style.width = Math.max(minSize.width, w2 + dx) + "px";
      target.style.height = Math.max(minSize.height, h + dy) + "px";
      if (event2.type === "mouseup") {
        return true;
      }
    }, "nwse-resize");
  };
  connectedCallback() {
    super.connectedCallback();
    if (!this.target) {
      this.target = this.parentElement;
    }
    const PASSIVE2 = { passive: true };
    this.addEventListener("mousedown", this.resizeTarget, PASSIVE2);
    this.addEventListener("touchstart", this.resizeTarget, PASSIVE2);
  }
}
var xinSizer = XinSizer.elementCreator({
  tag: "xin-sizer"
});
// src/tag-list.ts
/*!
# tag-list

Building a tag-list from standard HTML elements is a bit of a nightmare.

`<xin-tag-list>` allows you to display an editable or read-only tag list (represented either
as a comma-delimited string or an array of strings).

```html
<label style="position: absolute; right: 10px; top: 10px; display: block">
  <input type="checkbox" class="disable-toggle">
  <b>Disable All</b>
</label>
<label>
  <b>Display Only</b>
  <xin-tag-list
    value="this,that,,the-other"
  ></xin-tag-list>
</label>
<xin-tag-list
  class="compact"
  value="this,that,,the-other"
></xin-tag-list>
<br>
<label>
  <b>Editable</b>
  <xin-tag-list
    class="editable-tag-list"
    value="belongs,also belongs,custom"
    editable
    available-tags="belongs,also belongs,not initially chosen"
  ></xin-tag-list>
</label>
<br>
<b>Text-Entry</b>
<xin-tag-list
  value="this,that,the-other,not,enough,space"
  editable
  text-entry
  available-tags="tomasina,dick,,harriet"
></xin-tag-list>
```
```css
.preview .compact {
  --spacing: 8px;
  --font-size: 12px;
  --line-height: 18px;
}
.preview label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
```
```js
preview.addEventListener('change', (event) => {
  if (event.target.matches('xin-tag-list')) {
    console.log(event.target, event.target.value) 
  }
}, true)
preview.querySelector('.disable-toggle').addEventListener('change', (event) => {
  const tagLists = Array.from(preview.querySelectorAll('xin-tag-list'))
  for(const tagList of tagLists) {
    tagList.disabled = event.target.checked
  }
})
```

## Properties

### `value`: string | string[]

A list of tags

### `tags`: string[]

## `popSelectMenu`: () => void

This is the method called when the user clicks the menu button. By default is displays a
pick list of tags, but if you wish to customize the behavior, just replace this method.

A read-only property giving the value as an array.

### `available-tags`: string | string[]

A list of tags that will be displayed in the popup menu by default. The popup menu
will always display custom tags (allowing their removal).

### `editable`: boolean

Allows the tag list to be modified via menu and removing tags.

### `text-entry`: boolean

If `editable`, an input field is provided for entering tags directly.

### `placeholder`: string = 'enter tags'

Placeholder shown on input field.
*/
var { div: div12, input: input6, span: span12, button: button10 } = S;

class XinTag extends G {
  caption = "";
  removeable = false;
  removeCallback = () => {
    this.remove();
  };
  content = () => [
    span12({ part: "caption" }, this.caption),
    button10(icons.x(), {
      part: "remove",
      hidden: !this.removeable,
      onClick: this.removeCallback
    })
  ];
  constructor() {
    super();
    this.initAttributes("caption", "removeable");
  }
}
var xinTag = XinTag.elementCreator({
  tag: "xin-tag",
  styleSpec: {
    ":host": {
      "--tag-close-button-color": "#000c",
      "--tag-close-button-bg": "#fffc",
      "--tag-close-button-border-radius": "99px",
      "--tag-button-opacity": "0.5",
      "--tag-button-hover-opacity": "0.75",
      "--tag-bg": wn.brandColor("blue"),
      "--tag-text-color": wn.brandTextColor("white"),
      display: "inline-flex",
      borderRadius: qn.spacing50,
      color: qn.tagTextColor,
      background: qn.tagBg,
      padding: `0 ${qn.spacing75} 0 ${qn.spacing75}`,
      height: `calc(${qn.lineHeight} + ${qn.spacing50})`,
      lineHeight: `calc(${qn.lineHeight} + ${qn.spacing50})`
    },
    ':host > [part="caption"]': {
      position: "relative",
      whiteSpace: "nowrap",
      overflow: "hidden",
      flex: "1 1 auto",
      fontSize: wn.fontSize("16px"),
      color: qn.tagTextColor,
      textOverflow: "ellipsis"
    },
    ':host [part="remove"]': {
      boxShadow: "none",
      margin: `0 ${qn.spacing_50} 0 ${qn.spacing25}`,
      padding: 0,
      display: "inline-flex",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      height: qn.spacing150,
      width: qn.spacing150,
      "--text-color": qn.tagCloseButtonColor,
      background: qn.tagCloseButtonBg,
      borderRadius: qn.tagCloseButtonBorderRadius,
      opacity: qn.tagButtonOpacity
    },
    ':host [part="remove"]:hover': {
      background: qn.tagCloseButtonBg,
      opacity: qn.tagButtonHoverOpacity
    }
  }
});

class XinTagList extends G {
  disabled = false;
  name = "";
  availableTags = [];
  value = [];
  textEntry = false;
  editable = false;
  placeholder = "enter tags";
  get tags() {
    return typeof this.value === "string" ? this.value.split(",").map((tag2) => tag2.trim()).filter((tag2) => tag2 !== "") : this.value;
  }
  constructor() {
    super();
    this.initAttributes("name", "value", "textEntry", "availableTags", "editable", "placeholder", "disabled");
  }
  addTag = (tag2) => {
    if (tag2.trim() === "") {
      return;
    }
    const { tags } = this;
    if (!tags.includes(tag2)) {
      tags.push(tag2);
    }
    this.value = tags;
    this.queueRender(true);
  };
  toggleTag = (toggled) => {
    if (this.tags.includes(toggled)) {
      this.value = this.tags.filter((tag2) => tag2 !== toggled);
    } else {
      this.addTag(toggled);
    }
    this.queueRender(true);
  };
  enterTag = (event) => {
    const { tagInput } = this.parts;
    switch (event.key) {
      case ",":
        {
          const tag2 = tagInput.value.split(",")[0];
          this.addTag(tag2);
        }
        break;
      case "Enter":
        {
          const tag2 = tagInput.value.split(",")[0];
          this.addTag(tag2);
        }
        event.stopPropagation();
        event.preventDefault();
        break;
      default:
    }
  };
  popSelectMenu = () => {
    const { toggleTag } = this;
    const { tagMenu } = this.parts;
    const tags = typeof this.availableTags === "string" ? this.availableTags.split(",") : this.availableTags;
    const extraTags = this.tags.filter((tag2) => !tags.includes(tag2));
    if (extraTags.length) {
      tags.push(null, ...extraTags);
    }
    const menuItems = tags.map((tag2) => {
      if (tag2 === "" || tag2 === null) {
        return null;
      } else if (typeof tag2 === "object") {
        return {
          icon: this.tags.includes(tag2.value) ? icons.minus() : icons.plus(),
          caption: tag2.caption,
          action() {
            toggleTag(tag2.value);
          }
        };
      } else {
        return {
          icon: this.tags.includes(tag2) ? icons.minus() : icons.plus(),
          caption: tag2,
          action() {
            toggleTag(tag2);
          }
        };
      }
    });
    popMenu({
      target: tagMenu,
      width: "auto",
      menuItems
    });
  };
  content = () => [
    div12({
      part: "tagContainer",
      class: "row",
      onClick(event) {
        event.stopPropagation();
        event.preventDefault();
      }
    }),
    input6({
      part: "tagInput",
      class: "elastic",
      onKeydown: this.enterTag
    }),
    button10({
      title: "add tag",
      part: "tagMenu",
      onClick: this.popSelectMenu
    }, icons.chevronDown())
  ];
  removeTag = (event) => {
    if (this.editable && !this.disabled) {
      const tag2 = event.target.closest(XinTag.tagName);
      this.value = this.tags.filter((value) => value !== tag2.caption);
      tag2.remove();
      this.queueRender(true);
    }
    event.stopPropagation();
    event.preventDefault();
  };
  render() {
    super.render();
    const { tagContainer, tagMenu, tagInput } = this.parts;
    tagMenu.disabled = this.disabled;
    tagInput.value = "";
    tagInput.setAttribute("placeholder", this.placeholder);
    if (this.editable && !this.disabled) {
      tagMenu.toggleAttribute("hidden", false);
      tagInput.toggleAttribute("hidden", !this.textEntry);
    } else {
      tagMenu.toggleAttribute("hidden", true);
      tagInput.toggleAttribute("hidden", true);
    }
    tagContainer.textContent = "";
    const { tags } = this;
    for (const tag2 of tags) {
      tagContainer.append(xinTag({
        caption: tag2,
        removeable: this.editable && !this.disabled,
        removeCallback: this.removeTag
      }));
    }
  }
}
var xinTagList = XinTagList.elementCreator({
  tag: "xin-tag-list",
  styleSpec: {
    ":host": {
      "--tag-list-bg": "#f8f8f8",
      "--touch-size": "44px",
      "--spacing": "16px",
      display: "grid",
      gridTemplateColumns: "auto",
      alignItems: "center",
      background: qn.tagListBg,
      gap: qn.spacing25
    },
    ":host[editable]": {
      gridTemplateColumns: `auto ${qn.touchSize}`
    },
    ":host[editable][text-entry]": {
      gridTemplateColumns: `2fr 1fr ${qn.touchSize}`
    },
    ':host [part="tagContainer"]': {
      display: "flex",
      content: '" "',
      alignItems: "center",
      background: qn.inputBg,
      borderRadius: qn.roundedRadius,
      boxShadow: qn.borderShadow,
      flexWrap: "nowrap",
      overflow: "auto hidden",
      gap: qn.spacing25,
      minHeight: `calc(${qn.lineHeight} + ${qn.spacing})`,
      padding: qn.spacing25
    },
    ':host [part="tagMenu"]': {
      width: qn.touchSize,
      height: qn.touchSize,
      lineHeight: qn.touchSize,
      textAlign: "center",
      padding: 0,
      margin: 0
    },
    ":host [hidden]": {
      display: "none !important"
    }
  }
});
// src/version.ts
var version = "0.9.10";
// demo/src/style.ts
/*!
# style

## Convert CSS to Javascript

This is a simple utility for converting CSS into a xinjs `XinStyleSheet` object.
Having all of your CSS start as Javascript (or Typescript) has many
benefits, such as being able to do color math using `xinjs`'s `Color` class,
and use the same values that are in your CSS for inline code when needed.

> ### Caution
>
> - This is not a real parser but regexp hackery!
> - Doesn't handle edge-cases like semicolons inside string values or
>   skipped semicolons for the last property in a rule.
> - Doesn't convert variable references inside style values (e.g. calc(var(--foo) * 0.5))
>   into `vars` values.

```js
const tabs = preview.querySelector('xin-tabs')
const [css, js] = preview.querySelectorAll('xin-code')
const convertButton = preview.querySelector('button')

function quoteTrim(s, symbol = false) {
  s = s.trim()
  if (s.match(/[^\w_]/) || !symbol) {
    s = s.replace(/'/g, "\\'")
    return `'${s}'`
  } else {
    return s
  }
}

function kebabToCamel(s) {
  s = s.replace(/--/, '_')
  return s.replace(/\-(\w)/g, (_, c) => c.toLocaleUpperCase())
}

function css2js () {
  const source = css.value
  const lines = source.split('\n')
  const output = ['{']
  let rule = ''
  for(const line of lines) {
    if (!line.trim()) {
      continue
    }
    try {
      rule = rule ? rule + ' ' + line.trim() : line
      if (rule.match(/@import .*;/)) {
        const [,url] = rule.match(/@import url\(['"](.*)['"]\);/)
        output.push(`'@import': ${quoteTrim(url)},`)
        rule = ''
      } else if (rule.match(/\{\s*$/)) {
        const [,whitespace, selector] = rule.match(/(\s*)([^\s].*)\{/)
        output.push(`${whitespace}${quoteTrim(selector, true)}: {`)
        rule = ''
      } else if (line.match(/[^\s]*\}\s*$/)) {
        output.push(line + ',')
        rule = ''
      } else if (rule.match(/.*:.*;/)) {
        let [,whitespace, prop, value] = rule.match(/(\s*)(.*):(.*);/)
        prop = kebabToCamel(prop)
        output.push(`${whitespace}${quoteTrim(prop, true)}: ${quoteTrim(value)},`)
        rule = ''
      }
    } catch(e) {
      console.error(e, line)
    }
  }
  output.push('}')
  let code = output.join('\n')
  code = code.replace(/'var\(--([^)]*)\)'/g, (_,v) => `vars.${kebabToCamel(v)}`)

  js.value = `import { vars } from 'xinjs'\n\nexport const styleSpec = ${code}`
}

convertButton.addEventListener('click', () => {
  css2js()
  tabs.value = 1
})
```
```html
<xin-tabs>
<button slot="after-tabs">Convert</button>
<xin-code mode="css" name="css">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');

tr:nth-child(2n) {
  background: var(--background-shaded);
}

th,
td {
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header xin-locale-picker xin-select button {
  --brand-color: var(--brand-text-color);
  background: transparent;
  gap: 2px;
}

header xin-locale-picker xin-select button svg {
  fill: var(--brand-text-color) !important;
}
</xin-code>
<xin-code mode="javascript" name="js"></xin-code>
</xin-tabs>
```
```css
.preview xin-tabs {
  background: var(--inset-bg);
}
.preview xin-tabs, .preview textarea, .preview xin-code {
  width: 100%;
  height: 100%;
  resize: none;
}
```

## Using the Output

You can turn the output of this utility using `xinjs`'s `StyleSheet` utility function:

```
import { styleSpec } from './my-style'

StyleSheet('base-style', styleSpec) // creates a `<style id="base-style>` element in
  the `<head>` of the page.
```

You can convert the output to Typescript by importing the `XinStyleSheet` from `xinjs`:

```
import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = ...
```
*/
var styleSpec = {
  "@import": "https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap",
  ":root": {
    _fontFamily: "'Aleo', sans-serif",
    _codeFontFamily: "'Spline Sans Mono', monospace",
    _fontSize: "16px",
    _codeFontSize: "14px",
    _textColor: "#222",
    _brandColor: "#088358",
    _linkColor: qn.brandColor,
    _background: "#fafafa",
    _backgroundShaded: "#f5f5f5",
    _navBg: "#efefeed2",
    _barColor: "#dae3df",
    _focusColor: "#08835880",
    _brandTextColor: "#ecf3dd",
    _insetBg: "#eee",
    _codeBg: "#f8ffe9",
    _spacing: "10px",
    _lineHeight: "calc(var(--font-size) * 1.6)",
    _h1Scale: "2",
    _h2Scale: "1.5",
    _h3Scale: "1.25",
    _xinTabsSelectedColor: qn.brandColor,
    _xinTabsBarColor: qn.brandTextColor,
    _touchSize: "32px",
    _shadowColor: "#0004",
    _menuItemIconColor: qn.brandColor,
    _headerHeight: "calc( var(--line-height) * var(--h2-scale) + var(--spacing) * 2 )"
  },
  "*": {
    boxSizing: "border-box"
  },
  body: {
    fontFamily: qn.fontFamily,
    fontSize: qn.fontSize,
    margin: "0",
    lineHeight: qn.lineHeight,
    background: qn.background,
    color: qn.textColor
  },
  "input, button, select, textarea": {
    fontFamily: qn.fontFamily,
    fontSize: qn.fontSize
  },
  select: {
    WebkitAppearance: "none",
    appearance: "none"
  },
  header: {
    background: qn.brandColor,
    color: qn.brandTextColor,
    _textColor: qn.brandTextColor,
    _linkColor: qn.transTextColor,
    display: "flex",
    alignItems: "center",
    padding: "0 calc(var(--spacing) * 1.5)",
    lineHeight: "calc(var(--line-height) * var(--h1-scale))",
    height: qn.headerHeight,
    whiteSpace: "nowrap"
  },
  h1: {
    _textColor: qn.brandColor,
    fontSize: "calc(var(--font-size) * var(--h1-scale))",
    lineHeight: "calc(var(--line-height) * var(--h1-scale))",
    fontWeight: "400",
    margin: "0",
    padding: qn.spacing,
    textAlign: "center"
  },
  "header h2": {
    color: qn.brandTextColor,
    whiteSpace: "nowrap"
  },
  h2: {
    color: qn.brandColor,
    fontSize: "calc(var(--font-size) * var(--h2-scale))",
    lineHeight: "calc(var(--line-height) * var(--h2-scale))",
    margin: "calc(var(--spacing) * var(--h2-scale)) 0"
  },
  h3: {
    fontSize: "calc(var(--font-size) * var(--h3-scale))",
    lineHeight: "calc(var(--line-height) * var(--h3-scale))",
    margin: "calc(var(--spacing) * var(--h3-scale)) 0"
  },
  main: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    maxWidth: "100vw",
    height: "100vh",
    overflow: "hidden"
  },
  "main > xin-sidenav": {
    height: "calc(100vh - var(--header-height))"
  },
  blockquote: {
    background: qn.insetBg,
    margin: "0",
    padding: "var(--spacing) calc(var(--spacing) * 2)"
  },
  "blockquote > :first-child": {
    marginTop: "0"
  },
  "blockquote > :last-child": {
    marginBottom: "0"
  },
  ".bar": {
    display: "flex",
    gap: qn.spacing,
    justifyContent: "center",
    alignItems: "center",
    padding: qn.spacing,
    flexWrap: "wrap",
    _textColor: qn.brandColor,
    background: qn.barColor
  },
  a: {
    textDecoration: "none",
    color: qn.linkColor,
    opacity: "0.9",
    borderBottom: "1px solid var(--brand-color)"
  },
  "button, select, .clickable": {
    transition: "ease-out 0.2s",
    background: qn.brandTextColor,
    _textColor: qn.brandColor,
    display: "inline-block",
    textDecoration: "none",
    padding: "0 calc(var(--spacing) * 1.25)",
    border: "none",
    borderRadius: "calc(var(--spacing) * 0.5)"
  },
  "button, select, clickable, input": {
    lineHeight: "calc(var(--line-height) + var(--spacing))"
  },
  "select:has(+ .icon-chevron-down)": {
    paddingRight: "calc(var(--spacing) * 2.7)"
  },
  "select + .icon-chevron-down": {
    marginLeft: "calc(var(--spacing) * -2.7)",
    width: "calc(var(--spacing) * 2.7)",
    alignSelf: "center",
    pointerEvents: "none",
    objectPosition: "left center",
    _textColor: qn.brandColor
  },
  "label > select + .icon-chevron-down": {
    marginLeft: "calc(var(--spacing) * -3.5)"
  },
  "input, textarea": {
    border: "none",
    outline: "none",
    borderRadius: "calc(var(--spacing) * 0.5)"
  },
  input: {
    padding: "0 calc(var(--spacing) * 1.5)"
  },
  textarea: {
    padding: "var(--spacing) calc(var(--spacing) * 1.25)",
    lineHeight: qn.lineHeight,
    minHeight: "calc(var(--spacing) + var(--line-height) * 4)"
  },
  "input[type='number']": {
    paddingRight: 0,
    width: "6em",
    textAlign: "right"
  },
  "input[type=number]::-webkit-inner-spin-button": {
    margin: "1px 3px 1px 0.5em",
    opacity: 1,
    inset: 1
  },
  "input[type='checkbox'], input[type='radio']": {
    maxWidth: qn.lineHeight
  },
  "::placeholder": {
    color: qn.focusColor
  },
  img: {
    verticalAlign: "middle"
  },
  "button:hover, button:hover, .clickable:hover": {
    boxShadow: "inset 0 0 0 2px var(--brand-color)"
  },
  "button:active, button:active, .clickable:active": {
    background: qn.brandColor,
    color: qn.brandTextColor
  },
  label: {
    display: "inline-flex",
    gap: "calc(var(--spacing) * 0.5)",
    alignItems: "center"
  },
  ".elastic": {
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative"
  },
  "svg text": {
    pointerEvents: "none",
    fontSize: "16px",
    fontWeight: "bold",
    fill: "#000",
    stroke: "#fff8",
    strokeWidth: "0.5",
    opacity: "0"
  },
  "svg text.hover": {
    opacity: "1"
  },
  ".thead": {
    background: qn.brandColor,
    color: qn.brandTextColor
  },
  ".th + .th": {
    border: "1px solid #fff4",
    borderWidth: "0 1px"
  },
  ".th, .td": {
    padding: "0 var(--spacing)"
  },
  ".tr:not([aria-selected]):hover": {
    background: "#08835810"
  },
  "[aria-selected]": {
    background: "#08835820"
  },
  ":disabled": {
    opacity: "0.5",
    filter: "saturate(0)",
    pointerEvents: "none"
  },
  pre: {
    background: qn.codeBg,
    padding: qn.spacing,
    borderRadius: "calc(var(--spacing) * 0.25)",
    overflow: "scroll",
    fontSize: qn.codeFontSize,
    lineHeight: "calc(var(--font-size) * 1.2)"
  },
  "pre, code": {
    fontFamily: qn.codeFontFamily,
    _textColor: qn.brandColor
  },
  ".-xin-sidenav-visible .close-content": {
    display: "none"
  },
  ".transparent, .iconic": {
    background: "none"
  },
  ".iconic": {
    padding: "0",
    fontSize: "150%",
    lineHeight: "calc(var(--line-height) + var(--spacing))",
    width: "calc(var(--line-height) + var(--spacing))",
    textAlign: "center"
  },
  ".transparent:hover, .iconic:hover": {
    background: "#0002",
    boxShadow: "none",
    color: qn.textColor
  },
  ".transparent:active, .iconic:active": {
    background: "#0004",
    boxShadow: "none",
    color: qn.textColor
  },
  "xin-sidenav:not([compact]) .show-within-compact": {
    display: "none"
  },
  ".on.on": {
    background: qn.brandColor,
    _textColor: qn.brandTextColor
  },
  ".current": {
    background: qn.background
  },
  ".doc-link": {
    cursor: "pointer",
    borderBottom: "none",
    transition: "0.15s ease-out",
    marginLeft: "20px",
    padding: "calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)"
  },
  ".doc-link:not(.current):hover": {
    background: qn.background
  },
  ".doc-link:not(.current)": {
    opacity: "0.8",
    marginLeft: 0
  },
  "xin-example": {
    margin: "var(--spacing) 0"
  },
  "[class*='icon-'], xin-icon": {
    color: "currentcolor",
    height: qn.fontSize,
    pointerEvents: "none"
  },
  "[class*='icon-']": {
    verticalAlign: "middle"
  },
  ".icon-plus": {
    content: "'+'"
  },
  table: {
    borderCollapse: "collapse"
  },
  thead: {
    background: qn.brandColor,
    color: qn.brandTextColor
  },
  tbody: {
    background: qn.background
  },
  "tr:nth-child(2n)": {
    background: qn.backgroundShaded
  },
  "th, td": {
    padding: "calc(var(--spacing) * 0.5) var(--spacing)"
  },
  "header xin-locale-picker xin-select button": {
    color: "currentcolor",
    background: "transparent",
    gap: "2px"
  },
  svg: {
    fill: "currentcolor"
  },
  "img.logo": {
    animation: "2s ease-in-out 0s infinite alternate logo-swing"
  },
  "@keyframes logo-swing": {
    "0%": {
      transform: "perspective(1000px) rotateY(15deg)"
    },
    "100%": {
      transform: "perspective(1000px) rotateY(-15deg)"
    }
  }
};

// demo/src/localized-strings.ts
var localized_strings_default = `en-US	fr	fi	sv	zh	ja	ko	es	de	it
English	French	Finnish	Swedish	Chinese	Japanese	Korean	Spanish	German	Italian
English	Français	suomi	svenska	中国人	日本語	한국인	Español	Deutsch	Italiano
\uD83C\uDDFA\uD83C\uDDF8	\uD83C\uDDEB\uD83C\uDDF7	\uD83C\uDDEB\uD83C\uDDEE	\uD83C\uDDF8\uD83C\uDDEA	\uD83C\uDDE8\uD83C\uDDF3	\uD83C\uDDEF\uD83C\uDDF5	\uD83C\uDDF0\uD83C\uDDF7	\uD83C\uDDEA\uD83C\uDDF8	\uD83C\uDDE9\uD83C\uDDEA	\uD83C\uDDEE\uD83C\uDDF9
Language	Langue	Kieli	Språk	语言	言語	언어	Idioma	Sprache	Lingua
Icon	Icône	Kuvake	Ikon	图标	アイコン	상	Icono	Symbol	Icona
Okay	D'accord	Kunnossa	Okej	好的	わかった	좋아요	Bueno	Okay	Va bene
Cancel	Annuler	Peruuttaa	Avboka	取消	キャンセル	취소	Cancelar	Stornieren	Cancellare
Delete	Supprimer	Poistaa	Radera	删除	消去	삭제	Borrar	Löschen	Eliminare
Yes	Oui	Kyllä	Ja	是的	はい	예	Sí	Ja	SÌ
No	Non	Ei	Inga	不	いいえ	아니요	No	NEIN	NO
Cut	Couper	Leikata	Skära	切	カット	자르다	Cortar	Schneiden	Taglio
Copy	Copie	Kopioida	Kopiera	复制	コピー	복사	Copiar	Kopie	Copia
Paste	Coller	Liitä	Klistra	粘贴	ペースト	반죽	Pasta	Paste	Impasto
Heading	Titre	Otsikko	Rubrik	标题	見出し	표제	Título	Überschrift	Intestazione
Body	Corps	Runko	Kropp	身体	体	몸	Cuerpo	Körper	Corpo
Left	Gauche	Vasen	Vänster	左边	左	왼쪽	Izquierda	Links	Sinistra
Right	Droite	Oikein	Rätt	正确的	右	오른쪽	Bien	Rechts	Giusto
Center	Centre	Keskusta	Centrum	中心	中心	센터	Centro	Center	Centro
Justify	Justifier	Perustella	Rättfärdiga	证明合法	正当化する	신이 옳다고 하다	Justificar	Rechtfertigen	Giustificare
Bold	Audacieux	Lihavoitu	Djärv	大胆的	大胆な	용감한	Atrevido	Deutlich	Grassetto
Italic	Italique	Kursiivi	Kursiv	斜体	イタリック	이탤릭체	Itálico	Kursiv	Corsivo
Underline	Souligner	Korostaa	Betona	强调	下線	밑줄	Subrayar	Unterstreichen	Sottolineare
Save	Sauvegarder	Tallentaa	Spara	节省	保存	구하다	Ahorrar	Speichern	Salva
Open	Ouvrir	Avata	Öppna	打开	開ける	열려 있는	Abierto	Offen	Aprire
Quit	Quitter	Lopettaa	Sluta	辞职	やめる	그만두다	Abandonar	Aufhören	Esentato
Close	Fermer	Lähellä	Nära	关闭	近い	닫다	Cerca	Schließen	Vicino
Exit	Sortie	Poistu	Utgång	出口	出口	출구	Salida	Ausfahrt	Uscita
File	Déposer	Tiedosto	Fil	文件	ファイル	파일	Archivo	Datei	File
Document	Document	Asiakirja	Dokumentera	文档	書類	문서	Documento	Dokumentieren	Documento
Move	Se déplacer	Liikkua	Flytta	移动	動く	이동하다	Mover	Bewegen	Mossa
Code	Code	Koodi	Koda	代码	コード	암호	Código	Code	Codice
Maximize	Maximiser	Maksimoida	Maximera	最大化	最大化する	최대화	Maximizar	Maximieren	Massimizzare
Minimize	Minimiser	Minimoida	Minimera	最小化	最小化する	최소화	Minimizar	Minimieren	Minimizzare
Library	Bibliothèque	Kirjasto	Bibliotek	图书馆	図書館	도서관	Biblioteca	Bibliothek	Biblioteca
Example	Exemple	Esimerkki	Exempel	例子	例	예	Ejemplo	Beispiel	Esempio
Carousel	Carrousel	Karuselli	Karusell	轮播	カルーセル	회전목마	Carrusel	Karussell	Giostra
Menu	Menu	Valikko	Meny	菜单	メニュー	메뉴	Menú	Speisekarte	Menu
Notifications	Notifications	Ilmoitukset	Aviseringar	通知	通知	알림	Notificaciones	Benachrichtigungen	Notifiche
Float	Flotter	Kellua	Flyta	漂浮	フロート	뜨다	Flotar	Schweben	Galleggiante
Rating	Notation	Luokitus	Gradering	等级	評価	평가	Clasificación	Bewertung	Valutazione
Select	Sélectionner	Valitse	Välja	选择	選択	선택하다	Seleccionar	Wählen	Selezionare
Sidebar	Barre latérale	Sivupalkki	Sidofält	侧边栏	サイドバー	사이드바	Barra lateral	Seitenleiste	Barra laterale
Sizer	Calibreur	Mitoitus	Sizer	尺寸测定器	サイザー	사이저	medidor	Sizer	Misuratore
Table	Tableau	Taulukko	Tabell	桌子	テーブル	테이블	Mesa	Tisch	Tavolo
Forms	Formulaires	Lomakkeet	Blanketter	表格	フォーム	양식	Formularios	Formulare	Forme
Filter	Filtre	Suodattaa	Filtrera	筛选	フィルター	필터	Filtrar	Filter	Filtro
Map	Carte	Kartta	Karta	地图	地図	지도	Mapa	Karte	Mappa
Tabs	Onglets	Välilehdet	Flikar	选项卡	タブ	탭	Cortina a la italiana	Tabs	Schede
Localize	Localiser	Paikallistaa	Lokalisera	本地化	ローカライズ	현지화	Localizar	Lokalisieren	Localizzare`;

// demo/src/css-var-editor.ts
var { h2, code } = S;

class XinCssVarEditor extends G {
  elementSelector = "";
  targetSelector = "";
  constructor() {
    super();
    this.initAttributes("elementSelector", "targetSelector");
  }
  content = () => [
    h2({ part: "title" }, "CSS variables"),
    xinForm({ part: "variables", changeCallback: this.update })
  ];
  loadVars = () => {
    const { title, variables } = this.parts;
    variables.textContent = "";
    if (this.elementSelector) {
      title.textContent = `CSS variables for ${this.elementSelector}`;
      const element = document.querySelector(this.elementSelector);
      if (!element) {
        setTimeout(this.loadVars, 250);
        return;
      }
      const styleNode = element.shadowRoot ? element.shadowRoot.querySelector("style") : document.querySelector(`style#${this.elementSelector}-component`);
      const computedStyle = getComputedStyle(element);
      if (styleNode && styleNode.textContent) {
        const cssVars = [
          ...new Set([...styleNode.textContent.match(/--[\w-]+/g) || []])
        ];
        for (const cssVar of cssVars) {
          let value = computedStyle.getPropertyValue(cssVar);
          const type = value.match(/^(#|rgb|hsl)[\d()a-fA-F]+$/) ? "color" : "string";
          if (type === "color") {
            value = $.fromCss(value).html;
          }
          variables.append(xinField(code(cssVar), { key: cssVar, value, type }));
        }
      }
    }
  };
  update = () => {
    const selector = this.targetSelector || this.elementSelector;
    if (selector) {
      const targets = [
        ...document.querySelectorAll(selector) || []
      ];
      const { value } = this.parts.variables;
      for (const target of targets) {
        for (const key of Object.keys(value)) {
          target.style.setProperty(key, value[key]);
        }
      }
    }
  };
  connectedCallback() {
    super.connectedCallback();
    this.loadVars();
    this.parts.variables.addEventListener("change", this.update);
  }
}
var xinCssVarEditor = XinCssVarEditor.elementCreator({
  tag: "xin-css-var-editor"
});

// demo/docs.json
var docs_default = [
  {
    text: `# xinjs-ui

<!--{ "pin": "top" }-->

[ui.xinjs.net live demo](https://ui.xinjs.net) | [xinjs](https://xinjs.net) | [discord](https://discord.gg/ramJ9rgky5) | [github](https://github.com/tonioloewald/xinjs-ui#readme) | [npm](https://www.npmjs.com/package/xinjs-ui)

<img alt="xinjs-ui logo" class="logo" style="display: block; margin: auto; width: 50%" src="https://ui.xinjs.net/xinjs-ui-color.svg">

Copyright ©2023-2025 Tonio Loewald

## the xinjs ui library

In general, \`xinjs\` strives to work _with_ the browser rather than trying to _replace_ it.

In a similar vein, \`xinjs-ui\` comprises a collection of [web-components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
with the goal of augmenting what _already_ works well, and the components are intended be interoperable as
similar as possible to things that you already use, such as \`<input>\` or \`<select>\` elements.
E.g. where appropriate, the \`value\` of an element is its malleable \`state\`, and when this changes,
the element emits a \`change\` event.

Similarly, the xinjs base \`Component\` class and the components in this collection strive to
be as similar in operation as possible to DOM elements as makes sense. E.g. binary attributes
work as expected. Adding the \`hidden\` attribute makes them disappear. If a component subclass
has a \`value\` property then it will be rendered if the value changes (similarly it will be
rendered if an initialized attribute is changed). Intinsic properties of components will
default to \`null\` rather than \`undefined\`.

Similarly, because web-components are highly interoperable, there's no reason to reinvent
wheels. In particular, this library won't try to replace existing, excellent libraries
such as [shoelace.style](https://shoelace.style/) or wrap perfectly functional HTML
elements, like the venerable \`<input>\` or \`<form>\` elements that are already capable
and accessible.

The goal here is to provide useful components and other utilities that add to what's built
into HTML5 and CSS3 and to make custom-elements work as much as possible like drop-in replacements
for an \`<input>\` or \`<textarea>\` (while mitigating the historical pathologies of things like
\`<select>\` and \`<input type="radio">\`). E.g. the \`<xin-select>\` does not suffer from a
race-condition between having its value set and being given an \`<option>\` with the intended value
and you can differentiate between the user picking a value (\`action\`) and the value changing (\`change\`).

## custom elements

The simplest way to use these elements is to simply import the element and then either
use HTML or the \`ElementCreator\` function exported.

E.g. to use the markdown viewer:

\`\`\`
import { markdownViewer } from 'xinjs-ui'
document.body.append(markdownViewer('# hello world\\nthis is a test'))
\`\`\`

\`\`\`js
const { markdownViewer } = xinjsui

preview.append(
  markdownViewer(\`
## hello world
here is some markdown
\`)
)
\`\`\`

Assuming you import the module somewhere, the HTML will work as well.

\`\`\`
<xin-md>
## hello world
here is some markdown
</xin-md>
\`\`\`

The big difference with using the \`markdownViewer()\` function is that the \`xinjs\` \`Component\`
class will automatically pick a new tag if the expected tag is taken (e.g. by a previously
defined custom-element from another library). \`markdownViewer()\` will create an element of
the correct type.

The other thing is that \`xinjs\` \`ElementCreator\` functions are convenient and composable,
allowing you to build DOM elements with less code than pretty much any other option, including
JSX, TSX, or HTML.
`,
    title: "xinjs-ui",
    filename: "README.md",
    path: "README.md",
    pin: "top"
  },
  {
    text: `# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A \`<xin-3d>\` element is initialized with an \`engine\`, \`canvas\`, \`scene\`, and an update-loop.

If you view this example with an XR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

\`\`\`js
const { b3d, gamepadText, xrControllers, xrControllersText } = xinjsui

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 1, -4),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, -0.5))

    this.loadScene('/', 'xin3d.glb')

    const size = 1024
    const textTexture = new BABYLON.DynamicTexture('Text', size, element.scene)
    const textContext = textTexture.getContext()
    textTexture.update()

    const textMaterial = new BABYLON.StandardMaterial('Text', element.scene)
    textMaterial.diffuseTexture = textTexture
    textMaterial.emissiveTexture = textTexture
    textMaterial.backfaceCulling = false

    const plaque = BABYLON.MeshBuilder.CreatePlane('Plaque', {size: 1}, element.scene)
    plaque.position.x = 0
    plaque.position.y = 2
    plaque.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
    plaque.material = textMaterial

    let controllers
    if (navigator.xr) {
      const xrHelper = await element.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      })
      controllers = xrControllers(xrHelper)
    }

    const interval = setInterval(() => {
      if (document.body.contains(element)) {
        textContext.fillStyle = '#204020'
        textContext.fillRect(0, 0, size, size)
        const text = gamepadText() + '\\n' + xrControllersText(controllers)
        const lines = text.split('\\n')
        textContext.fillStyle = '#afa'
        textContext.font = '32px monospace'
        for(let i = 0; i < lines.length; i++) {
          const line = lines[i]
          textContext.fillText(line, 40, 70 + i * 40)
        }
        textContext.fillStyle = '#bbb'
        textContext.fillText('xinjs-xr — debug info', 40, 984)
        textTexture.update()
      } else {
        clearInterval(interval)
      }
    }, 100)
  },
}))
\`\`\`
\`\`\`css
.preview xin-3d {
  width: 100%;
  height: 100%;
}
\`\`\`

You can access the \`scene\` and \`engine\` properties. You can also assign \`sceneCreated\`
and \`update\` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

Both \`sceneCreated\` and \`update\` may be \`async\`. The component will \`await\` \`sceneCreated\`
before starting the renderLoop, but \`update\` is simply passed to babylon, so be careful.

By default, this component loads \`babylon.js\` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if \`BABYLON\` is already defined (e.g. if you've bundled it) then it will use that instead.

If you need additional libraries, e.g. \`https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js\` for loading models such as \`gltf\` and \`glb\` files, you should load those in \`sceneCreated\`.

Here's a simple example of a terrain mesh comprising 125k triangles, 50% of which is being scaled using a \`profileScale\` function that
takes an array of numbers that use a linear profile to change the landform.

\`\`\`js
const { b3d } = xinjsui
const { MoreMath } = xinjs

const debugCutoff = 0.5
const defaultProfile = [0, 1, 5, 8, 10].map(x => x/10)

const { clamp } = MoreMath
function profileScale(t = 0, bypass = false, profile = defaultProfile) {
  if (bypass) {
    return t
  }
  const count = profile.length - 1
  if (count < 1) {
    throw new Error('profile must be of length ≥ 2')
  }

  const s = clamp(0, (t + 1) / 2, 1)
  const index = Math.floor(s * count)
  const dt = (s - index / count) * count
  const min = profile[index]
  const max = profile[index + 1]
  const p = dt * (max - min) + min
  return 2 * p - 1
}

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const { scene } = element
    const { createNoise2D } = await import('https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm')

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 2))

    const terrain = new BABYLON.Mesh('terrain', scene)
    const vertexData = new BABYLON.VertexData()

    const noise2D = createNoise2D()
    const positions = []
    const indices = []
    const gridSize = 100
    const gridResolution = 250
    const gridPoints = gridResolution + 1
    const noiseScale = 0.03
    const heightScale = 4.5
    terrain.position.y = -5
    const scale = t => t * gridSize / gridResolution - gridSize * 0.5
    for(let x = 0; x <= gridResolution; x++) {
      for(let z = 0; z <= gridResolution; z++) {
        const y =  profileScale(noise2D(scale(x) * noiseScale, scale(z) * noiseScale), x < gridResolution * debugCutoff)
        positions.push(scale(x), y * heightScale, scale(z))
        if (x > 0 && z > 0) {
          const i = x * gridPoints + z
          indices.push(
            i, i - gridPoints - 1, i - 1,
            i, i - gridPoints, i - gridPoints - 1,
          )
        }
      }
    }
    const normals = []
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    vertexData.positions = positions
    vertexData.indices = indices
    vertexData.normals = normals
    vertexData.applyToMesh(terrain)
  },
}))
\`\`\`

## loadScene

\`<xin-3d>.loadScene(path: string, file: string, callBack(meshes: any[]): void)\` can
be used to load \`.glb\` files.

## loadUI

\`<xin-3d>.loadUI(options: B3dUIOptions)\` loads babylonjs guis, which you can create programmatically or using the [babylonjs gui tool](https://gui.babylonjs.com/).`,
    title: "3d",
    filename: "babylon-3d.ts",
    path: "src/babylon-3d.ts"
  },
  {
    text: `# ab-test

\`<xin-ab>\` provides a simple method for implementing A|B-testing.

\`\`\`js
const { AbTest } = xinjsui

function randomize() {
  const conditions = {
    testA: Math.random() < 0.5,
    testB: Math.random() < 0.5,
    testC: Math.random() < 0.5
  }

  AbTest.conditions = conditions

  preview.querySelector('pre').innerText = JSON.stringify(conditions, null, 2)
}

preview.querySelector('.randomize-conditions').addEventListener('click', randomize)

randomize()
\`\`\`
\`\`\`html
<xin-ab class="a" condition="testA">
  <p>testA</p>
</xin-ab>
<xin-ab class="not-a" not condition="testA">
  <p>not testA</p>
</xin-ab>
<xin-ab class="b" condition="testB">
  <p>testB</p>
</xin-ab>
<xin-ab class="not-b" not condition="testB">
  <p>not testB</p>
</xin-ab>
<xin-ab class="c" condition="testC">
  <p>testC</p>
</xin-ab>
<xin-ab class="not-c" not condition="testC">
  <p>not testC</p>
</xin-ab>
<pre>
</pre>
<button class="randomize-conditions">Randomize</button>
\`\`\`
\`\`\`css
.preview {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.preview p {
  background: #44c;
  color: white;
  display: block;
  border-radius: 99px;
  padding: 4px 10px;
  margin: 0;
}

.preview xin-ab[not] p {
  background: red;
}
\`\`\`

- Set \`AbTest.conditions\` to anything you like.
- Use \`<xin-ab>\` elements to display conditional content.
- \`condition\` attribute determines which value in \`AbTest.conditions\` controls the element
- \`not\` reverses the condition (so \`<xin-ab not condition="foo">\` will be visible if \`conditions.foo\` is \`false\`)`,
    title: "ab-test",
    filename: "ab-test.ts",
    path: "src/ab-test.ts"
  },
  {
    text: `# blueprint loading

<center>
  <xin-icon icon="blueprint" style="--font-size: 256px"></xin-icon>
</center>

\`<xin-loader>\` and \`<xin-blueprint>\` are simple elements provided by \`xinjs\` for the dynamic loading
of component **blueprints**.

\`\`\`html
<xin-loader>
  <xin-blueprint tag="swiss-clock" src="https://tonioloewald.github.io/xin-clock/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<swiss-clock></swiss-clock>
\`\`\`

## Attributes

- \`blueprint\` is the url of the \`blueprint\` javascript module (required)
- \`tag\` is the tagName you wish to use. If the name of the blueprint is
  hyphenated, then that will be used by default
- \`property\` if the blueprint module exports the blueprint function as
  a property, you can specify the property here.`,
    title: "blueprint loading",
    filename: "bp-loader.ts",
    path: "src/bp-loader.ts"
  },
  {
    text: `# carousel

\`\`\`html
<xin-carousel arrows dots max-visible-items=2 auto=2 loop>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
</xin-carousel>
\`\`\`
\`\`\`css
.thing {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 32px;
}

.pink {
  background: #fdd;
}

.green {
  background: #dfd;
}

.blue {
  background: #ddf;
}

.yellow {
  background: #ffd;
}
\`\`\`

This is a minimalist carousel component that supports the usual stuff.

## Attributes

- \`arrows\` (boolean, false by default) shows/hides the arrow paging controls
- \`dots\` (boolean, false by default) shows/hides the dot progress indicators
- \`max-visible-items\` (number, 1 by default) determines how many items are shown at once.
- \`snap-duration\` (number, 0.25 [seconds] by default) determines the time taken to scroll / snap scroll.
- \`snap-delay\` (number, 0.1 [seconds] by default)
- \`loop\` (boolean, false by default) causes next/previous buttons to loop
- \`auto\` (number, 0 [seconds] by default) if > 0, automatically advances after that many seconds (always loops!)

<xin-css-var-editor element-selector="xin-carousel"></xin-css-var-editor>`,
    title: "carousel",
    filename: "carousel.ts",
    path: "src/carousel.ts"
  },
  {
    text: `# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

\`<xin-code>\`'s \`value\` is the code it contains. Its \`mode\` attribute sets the language, and you can further configure
the ACE editor instance via its \`options\` property.

\`\`\`html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
\`\`\``,
    title: "code",
    filename: "code-editor.ts",
    path: "src/code-editor.ts"
  },
  {
    text: `# color input field

This is a color input field that supports opacity

\`\`\`js
const colorInput = preview.querySelector('xin-color')
const circle = preview.querySelector('div')

colorInput.addEventListener('change', () => {
  console.log(colorInput.value)
  circle.style.background = colorInput.value
})
\`\`\`
\`\`\`html
<xin-color value="red"></xin-color>
<div
  style="
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 100px;
  "
></div>
\`\`\`


<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>`,
    title: "color input field",
    filename: "color-input.ts",
    path: "src/color-input.ts"
  },
  {
    text: `# drag & drop

> **Note** this library is a modernized version of the [b8rjs](https://b8rjs.com) drag-and-drop.js library.
> It removes all usage of b8rjs and has no dependencies.

A lightweight library building on top of HTML5 drag and drop behavior.

To use it, simply call \`dragAndDrop.init()\` (it only needs to be called once,
but calling it again is harmless).

\`\`\`
import { dragAndDrop } from 'xinjs-ui'

dragAndDrop.init()
\`\`\`

The library just sets up some event listeners.

You can use \`dragAndDrop.draggedElement()\` to get the element being dragged (if it's
actually from the page you're in).

> ### Important Note
>
> The nice thing about HTML5 drag-and-drop is that it leverages the OS's drag and
> drop support. This means you can drag from one window to another, from the desktop
> to your app and vice versa. It's all a matter of configuring the DOM elements.

This module sets up some global event handlers and *just works*&trade; (arguably, it merely does things
that the browser should do, such as add a CSS selector for drop zones that are compatible
with what's being dragged).

This module uses but *does not define* the following class selectors:

- \`.drag-source\` an element being dragged
- \`.drag-target\` an element on which the dragged object may be dropped
- \`.drag-over\` a \`.drag-target\` which the object is currently over

You may also wish to create style rules for:

- \`[draggable="true"]\` anything other than a \`<a>\` (and perhaps an \`<img>\`) that can be dragged
- \`[data-drag]\` indicates *types* of draggable things that can be dropped on them.
- \`[data-drop]\` indicates potential *drop zones*.

> **Note** \`draggable\` is has to be set to "true", [see documentation on draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

## Draggable Objects

To create a draggable element, add \`draggable="true"\`.

    <div draggable="true">Drag Me</div>

To specify the type(s) of content that will be dragged, use the \`data-drag\` attribute:

    <div draggable="true" data-drag="text/plain">Drag Me</div>

To specify the content dragged, use a \`data-drag-content\` attribute.

    <div
      draggable="true"
      data-drag="text/plain"
      data-drag-content="Surprise!"
    >Drag Me</div>

## Drop Zones

To create a drop zone, use the data-drop attribute set to a semicolon-delimited list
of mime types:

    <div data-drop="text/plain">
      Drop plain text here
    </div>
    <div data-drop="text/plain;text/html">
      Drop html or plain text here
    </div>

Finally, you can override default drop behavior (which is to copy the dragged node into
the drop zone node) simply using data-event="drop:path.to.drop_handler" as usual.

    <div
      data-drop="custom"
      data-event="drop:path.to.drop_handler"
    >
      Drop some custom thing here
    </div>

### Typed Drop Zones Example

\`\`\`html
<div style="display: grid; grid-template-columns: 50% 50%">
  <div>
    <h4>Draggable</h4>
    <a class="drag" href="javascript: alert('I don't do anything)">Links are draggable by default</a>
    <p draggable="true">
      Just adding the <code>draggable="true"</code>
      makes this paragraph draggable (as text/html by default)
    </p>
    <p draggable="true" data-drag="text/html">
      Draggable as <i>text/html</i>
    </p>
    <p draggable="true" data-drag="text/plain" data-drag-content="Surprise!">
      Draggable as <i>text/plain</i>, with <b>custom content</b>
    </p>
    <p draggable="true" data-drag="text/html;text/plain">
      Draggable as <i>text/html</i> or <i>text/plain</i>
    </p>
    <p draggable="true" data-drag="text/plain">
      Draggable as <i>text/plain</i>
    </p>
  </div>
  <div>
    <h4>Drop Targets</h4>
    <div data-drop="text/html">
      You can drop stuff here
    </div>
    <div data-drop="text/html">
      You can drop HTML here
    </div>
    <div data-drop="text/*">
      You can drop any text
    </div>
    <div data-drop="text/html;url">
      You can drop HTML or urls here
    </div>
    <div
      data-drop="special/any"
      data-event="drop:_component_.drop"
    >
      I accept anything and have special drop handling
    </div>
  </div>
</div>
\`\`\`
\`\`\`css
.drag-source {
  box-shadow: 0 0 2px 2px orange;
  opacity: 0.5;
}
.drag-target {
  min-height: 10px;
  background: rgba(0,0,255,0.25);
}
.drag-target.drag-over {
  background: rgba(0,0,255,0.5);
}
:not([data-drop]) > .drag,
[draggable="true"] {
  border: 1px solid rgba(255,192,0,0.5);
  cursor: pointer;
  display: block;
}

:not([data-drop]) > .drag,
[data-drop],
[draggable="true"] {
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
}
\`\`\`
\`\`\`js
const { dragAndDrop } = xinjsui

dragAndDrop.init()
\`\`\`

> Note that you can drag between two browser tabs containing this
> example (or between two different browsers) and it will work.

### Reorderable List Example

\`\`\`js
const { elements, boxedProxy, getListItem } = xinjs
const { dragAndDrop } = xinjsui

dragAndDrop.init()

const shuffle = (deck) => {
  var shuffled = [];
  for( const card of deck ){
    shuffled.splice( Math.floor( Math.random() * (1 + shuffled.length) ), 0, card );
  }
  return shuffled;
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]
const { spectrum } = boxedProxy({
  spectrum: shuffle(colors).map(color => ({color}))
})

const { div, template } = elements

let dragged = null

const dropColor = (event) => {
  const dropped = getListItem(event.target)
  const draggedIndex = spectrum.indexOf(dragged)
  const droppedIndex = spectrum.indexOf(dropped)
  spectrum.splice(draggedIndex, 1)
  spectrum.splice(droppedIndex, 0, dragged)

  console.log({dragged, draggedIndex, dropped, droppedIndex})

  event.preventDefault()
  event.stopPropagation()
}

const dragId = 'spectrum/' + Math.floor(Math.random() * 1e9)

preview.append(
  div(
    {
      bindList: { value: spectrum, idPath: 'color' }
    },
    template(
      div({
        class: 'spectrum',
        bindText: '^.color',
        draggable: 'true',
        dataDrag: dragId,
        dataDrop: dragId,
        onDrop: dropColor,
        bind: {
          value: '^.color',
          binding(element, value) {
            element.style.backgroundColor = value
          }
        },
        onDragstart(event) {
          dragged = getListItem(event.target)
        }
      })
    )
  ),
)
\`\`\`
\`\`\`css
.spectrum {
  height: 36px;
  color: white;
  font-weight: 700;
  text-shadow: 1px 2px 0 black;
  padding-left: 10px;
}

.spectrum.drag-over {
  box-shadow: 0 0 0 4px blue;
}
\`\`\`

> To prevent this example from allowing drags between windows (which
> wouldn't make sense) a random dragId is assigned to \`data-drag\` and
> \`data-drop\` in this example.
)`,
    title: "drag & drop",
    filename: "drag-and-drop.ts",
    path: "src/drag-and-drop.ts"
  },
  {
    text: `# editable-rect

\`<xin-editable>\` (\`editableRect\` is the \`ElementCreator\` and \`EditableRect\` is the class) is an element
for allowing the adjustment of another element's position and size. Simply insert it in a \`position: absolute\`
or \`position: fixed\` element and you can directly adjust its CSS positioning, including rotation.

Click on an element to adjust its position, dimensions, and rotation.

\`\`\`js
const { editableRect, icons } = xinjsui
const { elements } = xinjs
const { button } = elements

function showTools(event) {
  event.stopPropagation()
  event.preventDefault()
}

const editable = editableRect(button({class: 'more-popup', onClick: showTools}, icons.moreVertical()))
preview.addEventListener('click', (event) => {
  const target = event.target
  if (['absolute', 'fixed'].includes(getComputedStyle(target).position)) {
    target.append(editable)
  } else {
    editable.remove()
  }
})
preview.addEventListener('change', event => console.log(event))
\`\`\`
\`\`\`html
<div class="editable" style="top: 20px; left: 20px; width: auto; height: auto; right: 20px; bottom: 20px;">
  <div class="editable" style="top: 20px; left: 20px; width: 200px; height: 150px;">
  </div>
  <div class="editable" style="bottom: 20px; top: 20px; width: 300px; height: auto; right: 20px;">
  </div>
</div>
\`\`\`
\`\`\`css
.preview .editable {
  position: absolute;
  box-shadow: inset 0 0 0 1px #0ccc;
  background: #0cc1;
}

.preview button.more-popup {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 2px;
  right: 2px;
  --text-color: black;
  background: transparent;
  box-shadow: none;
}

.previw button
\`\`\`

## Snapping

When \`EditableRect.snapToGrid === true\` or the shift-key is depresseed, position will snap to \`EditableRect.gridSize\` pixels (default = 8).

Similarly \`EditableRect.snapAngle === true\` or the shift-key will snap rotation to increments of \`EditableRect.angleSize\` degrees (default = 15).

## Events

After an element's position, size, or rotation are adjusted a \`change\` event is triggered on the element.`,
    title: "editable-rect",
    filename: "editable-rect.ts",
    path: "src/editable-rect.ts"
  },
  {
    text: `# example

\`<xin-example>\` makes it easy to insert interactive code examples in a web page. It
started life as a super lightweight, easier-to-embed implementation of
[b8rjs's fiddle component](https://b8rjs.com)—which I dearly missed—but now the student
is, by far, the master. And it's still super lightweight.

*You're probably looking at it right now.*

\`\`\`js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
\`\`\`
\`\`\`html
<h2>Example</h2>
\`\`\`
\`\`\`css
.preview {
  padding: 0 var(--spacing);
}

.example {
  animation: throb ease-in-out 1s infinite alternate;
}

@keyframes throb {
  from { color: blue }
  to { color: red }
}
\`\`\`

You can also create a live-example from HTML. And if you add the \`persist-to-dom\`
attribute, it will persist your code to the DOM.

<xin-example persist-to-dom>
  <pre class="language-html">
    <h1 class="make-it-red">Pure HTML!</h1>
    <button>Click Me!</button>
  </pre>
  <pre class="language-js">
    preview.querySelector('button').addEventListener('click', () => {
      alert('you clicked?')
    })
  </pre>
  <pre class="language-css">
    .make-it-red {
      color: red;
    }
  </pre>
</xin-example>

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the \`js\`, \`html\`,
and \`css\` properties.

## Code-Editor

The **code-editor** is actually the same component spawned in a new window using
a couple of clever tricks, the most important of which is leveraging
[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).

This functionality was originally added to make working in XR easier, but it turned
out that it's just better than the earlier way of doing things.

It actually uses just one \`localStorage\` item to handle any number of code-editors,
and cleans up after itself when you close the example (including closing stray
windows.

> **To Do** a little refactoring and tweaking to split the the editor off as a
completely separate component that can be used for other things, and make the
example itself lighter-weight.

## context

A \`<xin-example>\` can be given a \`context\` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises \`preview\`
(the \`<div>\` in which the example is rendered), \`xinjs\` (\`* from xinjs\`),
and \`xinjsui\` (\`* from xinjsui\`).

The \`LiveExample\` class provides the static \`insertExamples(element: HTMLElement)\`
function that will replace any sequence of
\`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]\`
elements with a \`<xin-example>\` instance.`,
    title: "example",
    filename: "live-example.ts",
    path: "src/live-example.ts"
  },
  {
    text: `# filter

Automatically creates \`ArrayFilter\` functions \`(a: any[]) => any[]\` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of \`Filter\` objects.

\`\`\`js
const { elements } = xinjs
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return [...new Set(words)]
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
    tags: randomWords()
  })
}

const { span } = elements
const tagsBinding = {
  value: '^.tags',
  binding: {
    toDOM(element, value) {
      element.classList.add('tag-list')
      element.textContent = ''
      element.append(...value.map(tag => span(tag, {class: 'tag'})))
    }
  }
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 90
  },
  {
    prop: 'number',
    align: 'right',
    width: 90
  },
  {
    prop: 'string',
    width: 200
  },
  {
    prop: 'tags',
    width: 200,
    dataCell() {
      return elements.div({ bind: tagsBinding })
    }
  },
]

const table = dataTable({ array, columns })
const filter = filterBuilder({
  fields: columns,
  onChange(event) {
    table.filter = filter.filter
  }
})
preview.append(filter, table)
\`\`\`
\`\`\`css
.preview {
  display: flex;
  flex-direction: column;
}

.preview xin-table {
  flex: 1 1 auto;
}

.preview .tag-list {
  display: flex;
  font-size: 80%;
  align-items: center;
  gap: 2px;
}

.preview .tag {
  display: inline-block;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 20px;
  height: 20px;
  color: var(--brand-text-color);
  background: var(--brand-color);
}
\`\`\`

## serialization

The current state of a \`<xin-filter>\` can be serialized as, and restored from, a Javascript object (which itself
can easily be converted into JSON or a URL component) via its \`state\` property. Obviously, a \`<xin-filter>\` can
only restore state if it has the necessary constituent \`filters\`.

## availableFilters

\`<xin-filter>\` has a default set of \`FilterMaker\` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to \`contains\`, \`equals\`, \`after\`, and \`isTrue\`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are \`true\`
- **false** looks for fields that are \`false\`
- **hasTags** looks for fields that are arrays containing all the (space/comma) delimited strings
- **doesNotHaveTags** looks for fields that are arrays containing *none* of the strings

**Note**: the filters marked with an * have negative version (e.g. does not contain).

\`\`\`
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
\`\`\``,
    title: "filter",
    filename: "filter-builder.ts",
    path: "src/filter-builder.ts"
  },
  {
    text: `# float

A floating, potentially draggable user interface element.

\`\`\`html
<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remain" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I ignore resizing and scrolling</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-scroll="remain" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on resize</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" remain-on-resize="remain" remain-on-scroll="remove" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <div class="behavior">I disappear on scroll</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
\`\`\`
\`\`\`css
.preview .float {
  width: 220px;
  height: 180px;
  padding: 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff8;
  box-shadow: 2px 10px 20px #0004;
  overflow: hidden;
  cursor: move;
}

.preview h4 {
  margin: 0;
  padding: 5px 10px;
  color: white;
  background: red;
}

.preview .balloon {
  cursor: default;
  flex: 1 1 auto;
  font-size: 99px;
  line-height: 120px;
  text-align: center;
  height: auto;
  overflow: hidden;
}

.preview .behavior {
  position: absolute;
  bottom: 16px;
  left: 8px;
  right: 8px;
  background: #fffc;
}

.preview footer {
  text-align: center;
  background: #f008;
  color: white;
\`\`\`

## Styling

Note that the \`<xin-float>\` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

## Attributes

- \`drag\` false | true — to make a \`<xin-float>\` element draggable, simply set its \`drag\` attribute.
- \`remain-on-resize\` 'remove' | 'hide' | 'remain' — by default, floats will hide if the window is resized
- \`remain-on-scroll\` 'remain' | 'remove' | 'hide' — by default, floats will remain if the document is scrolled

Note that \`remain-on-scroll\` behavior applies to any scrolling in the document (including within the float) so
if you want finer-grained disappearing behavior triggered by scrolling, you might want to implement it yourself.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the \`no-drag\` class to an element or its container.`,
    title: "float",
    filename: "float.ts",
    path: "src/float.ts"
  },
  {
    text: `# forms

\`<xin-form>\` and \`<xin-field>\` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

\`\`\`js
const form = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', form.submit)
\`\`\`
\`\`\`html
<xin-form value='{"formInitializer": "initial value from form"}'>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\\d{5}(-\\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <xin-field key="color" type="color" value="pink">
    favorite color
  </xin-field>
  <xin-field key="select">
    Custom Field
    <select slot="input">
      <option>This</option>
      <option>That</option>
      <option>The Other</option>
    </select>
  </xin-field>
  <xin-field key="tags">
    Tag List
    <xin-tag-list editable slot="input" available-tags="pick me,no pick me"></xin-tag-list>
  </xin-field>
  <xin-field key="rating">
    Rate this form!
    <xin-rating slot="input"></xin-rating>
  </xin-field>
  <xin-field key="like">
    Do you like it?
    <xin-segmented
      choices="yes=Yes:thumbsUp,no=No:thumbsDown"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="relationship">
    Relationship Status
    <xin-segmented
      style="--segmented-direction: column; --segmented-align-items: stretch"
      choices="couple=In a relationship,single=Single"
      other="It's complicated…"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="amount" fixed-precision="2" type="number" prefix="$" suffix="(USD)">
    What's it worth?
  </xin-field>
  <xin-field key="valueInitializer" value="initial value from field">
    Initialized by field
  </xin-field>
  <xin-field key="formInitializer">
    Initialized by form
  </xin-field>
  <button slot="footer" class="submit">Submit</button>
</xin-form>
\`\`\`
\`\`\`css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: #ddd;
  justify-content: center;
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

.preview h3, .preview h4 {
  margin: 0;
  padding: 0;
}

.preview ::part(content) {
  padding: var(--spacing);
  gap: var(--spacing);
  background: #e8e8e8;
}

.preview label {
  display: grid;
  grid-template-columns: 180px auto 100px;
  gap: var(--spacing);
}

.preview label [part="caption"] {
  text-align: right;
}

.preview label:has(:invalid:required)::after {
  content: '* required'
}

@media (max-width: 500px) {
  .preview label [part="caption"] {
    text-align: center;
  }

  .preview label {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: stretch;
    gap: calc(var(--spacing) * 0.5);
  }

  .preview label:has(:invalid:required)::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '*'
  }

  .preview xin-field [part="field"],
  .preview xin-field [part="input"] > * {
    display: flex;
    justify-content: center;
  }
}

.preview :invalid {
  box-shadow: inset 0 0 2px red;
}
\`\`\`

## \`<xin-form>\`

\`<xin-form>\` prevents the default form behavior when a \`submit\` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its \`submitCallback(value: {[key: string]: any}, isValid: boolean): void\`
method.

\`<xin-form>\` offers a \`fields\` proxy that allows values stored in the form to be updated. Any changes will trigger a \`change\`
event on the \`<xin-form>\` (in addition to any events fired by form fields).

\`<xin-form>\` instances have \`value\` and \`isValid\` properties you can access any time. Note that \`isValid\` is computed
and triggers form validation.

\`<xin-form>\` has \`header\` and \`footer\` \`<slot>\`s in addition to default \`<slot>\`, which is tucked inside a \`<form>\` element.

## \`<xin-field>\`

\`<xin-field>\` is a simple web-component with no shadowDOM that combines an \`<input>\` field wrapped with a \`<label>\`. Any
content of the custom-element will become the \`caption\` or you can simply set the \`caption\` attribute.

You can replace the default \`<input>\` field by adding an element to the slot \`input\` (it's a \`xinSlot\`) whereupon
the \`value\` of that element will be used instead of the built-in \`<input>\`. (The \`<input>\` is retained and
is used to drive form-validation.)

\`<xin-field>\` supports the following attributes:

- \`caption\` labels the field
- \`key\` determines the form property the field will populate
- \`type\` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color'
- \`optional\` turns off the \`required\` attribute (fields are required by default)
- \`pattern\` is an (optional) regex pattern
- \`placeholder\` is an (optional) placeholder

The \`text\` type populates the \`input\` slot with a \`<textarea>\` element.

The \`color\` type populates the \`input\` slot with a \`<xin-color>\` element (and thus supports colors with alpha values).

<xin-css-var-editor element-selector="xin-field" target-selector=".preview"></xin-css-var-editor>`,
    title: "forms",
    filename: "form.ts",
    path: "src/form.ts"
  },
  {
    text: `# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

\`gamepadState()\` gives you a condensed version of active gamepad state

\`gamepadText()\` provides the above in minimal text form for debugging

\`\`\`js
const { elements } = xinjs
const { gamepadText } = xinjsui

const pre = elements.pre()
preview.append(pre)

const interval = setInterval(() => {
  if (!pre.closest('body')) {
    clearInterval(interval)
  } else {
    pre.textContent = gamepadText()
  }
}, 100)
\`\`\`

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

\`xrControllers(babylonjsXRHelper)\` returns an \`XinXRControllerMap\` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

\`xrControllerText(controllerMap)\` renders the map output by the above in a compact form
which is useful when debugging.`,
    title: "gamepads",
    filename: "gamepad.ts",
    path: "src/gamepad.ts"
  },
  {
    text: `# icons

<center>
  <xin-icon icon="settings" style="--font-size: 128px"></xin-icon>
  <xin-icon icon="xrColor" style="--font-size: 96px"></xin-icon>
  <xin-icon icon="rgb" style="--font-size: 128px"></xin-icon>
</center>

A library that provides \`ElementCreator\` functions that produce SVG icons. It leverages \`xinjs\`'s
\`svgElements\` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

> ### Supported Use Cases
> - inline SVGs that can be styled by CSS (for buttons, etc.)
> - No build process magic needed (it's "just javascript")
> - icons can be rendered  as data urls, e.g. to insert into CSS
> - highly optimized and compressible
> - support for color icons (still allowing with CSS styling)

## icons

\`icons\` is a proxy that generates an \`ElementCreator\` for a given icon on demand,
e.g. \`icons.chevronDown()\` produces an \`<svg>\` element containing a downward-pointing chevron
icon with the class \`icon-chevron-down\`.

\`\`\`js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 16}),
  div(iconName)
)))
\`\`\`
\`\`\`css
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  font-family: Menlo, Monaco, monospace;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
}
\`\`\`

These icons are completely unstyled and can be colored using the css \`fill\` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
\`selection.json\` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

\`defineIcon(name: string, icon: IconSpec | string)\` adds or replaces your own icons

\`\`\`
interface IconSpec {
  p: string[]  // paths
  c?: string[] // colors of the paths in p
  w: number    // width of icon
  h: number    // height of icon
}
\`\`\`

The simplest option is simply to pass the \`path\` attribute (if the icon has a single path) while more
complex icons can be provide an \`IconSpec\` structure, specifying multiple paths (and colors if so
desired).

This utility loads SVG files (they should only contain paths with no strokes, transforms, or nesting)
and generates an \`IconSpec\`. It renders the original icon side-by-side with the \`<xin-icon>\` version.
**If the icon on the right appears garbled, it probably needs to be simplified**.

\`\`\`js
const { defineIcon, xinIcon } = xinjsui

const fileInput = preview.querySelector('input')
const icon = preview.querySelector('.icon')
const svgContainer = preview.querySelector('.svg')
const iconSpec = preview.querySelector('textarea')
const simplify = preview.querySelector('.simplify')

function jsObject(o) {
  let json = JSON.stringify(o, null, 2)
  return json.replace(/"(\\w+)":/g, '$1:')
}

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    const reader = new FileReader();
    reader.onload = function(e) {
      svgContainer.innerHTML = e.target.result
      const svg = svgContainer.querySelector('svg')
      const paths = Array.from(svg.querySelectorAll('path')).map(path => ({
        p: path.getAttribute('d'),
        c: path.style.fill
      }))
      const isMulticolor = [...new Set(paths.map(path => path.c))].length > 1
      let { width, height } = svg.viewBox.baseVal

      if (simplify.checked) {
        const scale = 1024 / height
        height = 1024
        width = width * scale

        paths.forEach(path => {
          path.p = path.p.replace(/\\d+\\.\\d+/g, x => (Number(x) * scale).toFixed(0))
        })
      }

      if (width === 1024 && height === 1024 && paths.length === 1) {
        iconSpec.value = jsObject(paths[0])
      } else {
        const spec = {
          p: paths.map(path => path.p),
          w: width,
          h: height
        }
        if (isMulticolor) {
          spec.c = paths.map(path => path.c)
        }
        iconSpec.value = jsObject(spec)
        defineIcon('svgLoader', spec)
        icon.setAttribute('icon', 'svgLoader')
        fileInput.value = ''
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
})
\`\`\`
\`\`\`html
<div class="svg-loader">
  <label>
    <span>Load an SVG file</span>
    <input accept="image/svg+xml" type="file">
  </label>
  <label style="flex-direction: row">
    <input type="checkbox" class="simplify" checked>
    <span>Scale to 1024 high and round floats?</span>
  </label>
  <div class="side-by-side">
    <label>
      <span>IconSpec</span>
      <textarea></textarea>
    </label>
    <label>
      <span>Icons</span>
      <div class="side-by-side">
        <div class="svg"></div>
        <xin-icon class="icon"></xin-icon>
      </div>
    </label>
  </div>
</div>
\`\`\`
\`\`\`css
.preview .svg-loader,
.preview .svg-loader label {
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-direction: column;
}

.preview .svg-loader {
  gap: 10px;
  height: 100%;
}

.preview .svg-loader textarea {
  flex: 1;
  resize: none;
  font-family: Monaco, monospace;
  font-size: 12px;
  line-height: 15px;
}

.preview .side-by-side {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.preview .svg-loader .icon {
  position: relative;
}

.preview .svg-loader svg {
  height: 128px;
  width: 128px;
}

.preview xin-icon:not([icon]) {
  display: none;
}

.preview .svg-loader xin-icon {
  --font-size: 128px;
}
\`\`\`

## \`<xin-icon>\`

\`<xin-icon>\` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

\`<xin-icon>\` supports four attributes:

- \`size\` (defaults to 0) if non-zero sets the height of the icon in pixels
- \`icon\` is the name of the icon
- \`color\` is the fill color (if you don't want to style it using CSS)
- \`stroke\` is the stroke color
- \`stroke-width\` (defaults to 1) is the width of the stroke assuming the icon's viewBox is 1024 units tall but the
  icon is rendered at 32px (so it's multiplied by 32).

> **Aside**: the tool used to build the icon library scales up the viewBox to 1024 tall and then rounds
> all coordinates to nearest integer on the assumption that this is plenty precise enough for icons and
> makes everything smaller and easier to compress.

\`\`\`html
<xin-icon size="64" icon="game" color="var(--brand-color)"></xin-icon>
<xin-icon size="96" icon="game" color="yellow" stroke="black"></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(345deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
\`\`\`
\`\`\`css
xin-icon.demo-2 > svg {
  height: 96px;
}
\`\`\`

**CSS-to-SVG Gradient** support is work-in-progress and experimental (there seem to be
…issues… with how SVG  gradients behave). The goal is to be able to use CSS gradients
to generate SVG gradients (which are kind of a pain) on-the-fly. Use at your own risk.

## SVGs as data-urls

\`\`\`js
const { elements } = xinjs
const { icons, svg2DataUrl } = xinjsui

preview.append(
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'none', '#bbb', 3)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'gold', 'orange', 2)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '100px',
      height: '200px',
      content: '" "',
      background: svg2DataUrl(icons.xinjsColor())
    }
  }),
)
\`\`\`

\`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string\` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the \`<xin-3d>\` component to render the XR widget.)

If you're using \`SVGElement\`s created using the \`icons\` proxy, you'll want to provide \`fill\` and/or
\`stroke\` values, because images loaded via css properties cannot be styled.

## Color Icons

\`\`\`html
<xin-icon icon="xinjsColor" class="demo-icon"></xin-icon>
<xin-icon icon="xinjsColor" class="demo-icon recolored"></xin-icon>
\`\`\`
\`\`\`css
.demo-icon {
  --font-size: 160px
}

.recolored {
  --icon-fill-0: blue;
  --icon-fill-1: white;
  --icon-fill-2: red;
}
\`\`\`

Each path inside an icon can be individually colored. When the icon is hydrated,
the colors will be assigned to a (minimal) set of CSS-variables (\`--icon-fill-0\`, etc.)
and these can be overridden in the usual way.

## Missing Icons

If you ask for an icon that isn't defined, the \`icons\` proxy will print a warning to console
and render a \`square\` (in fact, \`icons.square()\`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

Until I wrote this library, I had settled on icomoon.io's system for generating and maintaining
custom icon fonts for managing icons within a project, but this makes exporting UI elements
with icons in them fiddly, and I looked at other UI libraries and found similar issues.

Even when just using this approach for projects over which I had full control, there were issues
with syncing icons with CSS (e.g. if you want to attach an element to a pseudo-element). \`icons\`
in combination with \`svg2DataUrl\` solves all these problems.

Basically, I wanted an icon solution that "just works" and this is it.

Internally, icons are stored as javascript path data.

Many of these icons are sourced from [Feather Icons](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a \`viewBox\` typically scaled to 1024  &times; 1024.

## Is this efficient?

I use [icomoon](https://icomoon.com/app) to manage my icon libraries. Its method of distributing icons
is to create custom fonts and an accompanying stylesheet.

- the iconData file, compressed is ~23kB
- icomoon's equivalent CSS file is ~3kB and the font files are 21kB

But these fonts are less flexible, harder to distribute as part of a library, you need to
distribute three versions for compatibility, and the color icons are very flaky and cannot
be styled.

## Feather Icons Copyright Notice

The MIT License (MIT)

Copyright (c) 2013-2023 Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.`,
    title: "icons",
    filename: "icons.ts",
    path: "src/icons.ts"
  },
  {
    text: `# localize

\`xinjs-ui\` provides support for localization via the \`localize\` method and the \`<xin-locale-picker>\`
and \`<xin-localized>\` custom-elements.

> ### Important Note
> This module deals with the **language** used in the user interface. "locale" is
> *not the same thing*. The (usually) two-letter codes used designate **language**
> and **not locale**.
>
> E.g. the US *locale* includes things like measurement systems
> and date format. Most European locales use commas where we use decimal points in the US.
>
> Similarly, \`ja\` is the code for the Japanese **language** while \`jp\` is the **locale**.

## \`initLocalization(localizationData: string)\`

Enables localization from TSV data.

## XinLocalePicker

A selector that lets the user pick from among supported languages.

\`\`\`html
<h3>Locale Picker</h3>
<xin-locale-picker></xin-locale-picker>

<h3>Locale Picker with <code>hide-captions</code></h3>
<xin-locale-picker hide-caption></xin-locale-picker>
\`\`\`

## XinLocalized

A span-replacement that automatically localizes its text content.
By default the case in the localized data is preserved unless the
reference text is all lowercase, in which case the localized text
is also lowercased.

While viewing this documentation, all \`<xin-localized>\` elements should display a **red
underline**.

\`\`\`html
<h3>Localized Widgets</h3>
<button><xin-localized>Yes</xin-localized></button>
<button><xin-localized>No</xin-localized></button>

<h3>Lowercase is preserved</h3>
<button><xin-localized>yes</xin-localized></button>
<button><xin-localized>no</xin-localized></button>
\`\`\`
\`\`\`css
xin-localized {
  border-bottom: 2px solid red;
}
\`\`\`

## \`i18n\`

All of the data can be bound in the \`i18n\` proxy (\`xin.i18n\`), including the currently selected
locale (which will default to \`navigator.language\`).

You can take a look at \`xin.i18n\` in the console (and use it to set locale directly).

\`\`\`
i18n.locale = 'fr' // set localization to French (if available)
\`\`\`

## Creating Localized String Data

\`localized.tsv\` provides data for localizing strings. It can be created automatically
using something like my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages \`googletranslate\` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(\`googletranslate\` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | suomi | svenska | 中文（普通话）
🇺🇸 | 🇫🇷 | 🇫🇮 | 🇸🇪 | 🇨🇳
Icon | Icône | Kuvake | Ikon | 图标
Ok | D'accord | Ok | Ok | 好的
Cancel | Annuler | Peruuttaa | Avboka | 取消

- Column 1 is your reference language.
- Row 1 is [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
- Row 2 is the name of the language in your reference language.
- Row 3 is the name of the language in itself (because it's silly to expect people
  to know the name of their language in a language they don't know)
- Row 4 is the flag emoji for that language (yes, that's problematic, but languages
  do not have flags, per se)
- Rows 5 and on are user interface strings you want to localize

In the spreadsheet provided, each cell contains a formula that translates the term
in the left-most column from the language in that column to the language in the
destination column. Once you have an automatic translation, you can hand off the
sheet to language experts to vet the translations.

Finally, create a \`tsv\` file and then turn that into a Typescript file by wrapping
the content thus:

\`\`\`
export default \`( content of tsv file )\`
\`\`\`

## To Do

- support for automated localization of attributes such as \`title\`
- \`data-xin-i18n\` attribute to allow this (if present, text content localized
  actual value of attribute can specify attributes needing localization)
  - \`data-xin-i18n="placeholder,text,title,value"\` would indicate what
    needs localizing; it could use a WeakMap to track original strings
- DOM watcher looks for insertion of marked elements and localizes them`,
    title: "localize",
    filename: "localize.ts",
    path: "src/localize.ts"
  },
  {
    text: `# lottie / bodymovin

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an \`<img>\` element (just set its \`src\` attribute).

\`\`\`js
const { xinProxy } = xinjs
const { icons, popFloat } = xinjsui
const { div, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('xin-lottie')
setTimeout(
  () => {
 preview.append(
   popFloat({
     content: [
       { class: 'panel', drag: true },
       div({ class: 'panel-header' }, 'Player Controls' ),
       label(
         { class: 'no-drag' },
         'speed',
         input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
           const speed = Math.pow(5, Number(event.target.value))
           rocket.animation.setSpeed(speed)
           event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
         } }),
         span('100%', {style: { textAlign: 'right', width: '40px'}})
       ),
       label(
         { class: 'no-drag' },
         'direction',
         select(
           option('Forwards', {value: 1, selected: true}),
           option('Backwards', {value: -1}),
           {
             onChange(event) {
               rocket.animation.setDirection(event.target.value)
             }
           }
         ),
         icons.chevronDown(),
       )
     ],
     target: rocket,
     position: 's'
   })
 )
  },
  500
)
\`\`\`
\`\`\`html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
\`\`\`
\`\`\`css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview .caption {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.preview .panel-header {
  margin: 0;
  text-align: center;
  font-weight: bold;
  background: var(--brand-color);
  color: white;
  padding: 5px;
  margin: -10px -10px 0 -10px;
  cursor: move;
}
\`\`\`

You can also directly set its \`json\` property to the content of a \`lottie.json\` file.

And of course just access the element's \`animation\` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)`,
    title: "lottie / bodymovin",
    filename: "bodymovin-player.ts",
    path: "src/bodymovin-player.ts"
  },
  {
    text: `# makeSorter

I'm always confusing myself when writing sort functions, so I wrote \`makeSorter()\`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

\`\`\`js
const { select, option, div, span, ul, li } = xinjs.elements
const { icons, makeSorter } = xinjsui

const people = [
  { first: 'Frasier', last: 'Crane', age: 38 },
  { first: 'Lilith', last: 'Crane', age: 37 },
  { first: 'Rebecca', last: 'Howe', age: 35 },
  { first: 'Woody', last: 'Boyd', age: 25 },
  { first: 'Sam', last: 'Malone', age: 40 },
  { first: 'Norm', last: 'Peterson', age: 38 },
]

const sorters = {
  firstSort: makeSorter(person => [person.first]),
  firstDescSort: makeSorter(person => [person.first], false),
  nameSort: makeSorter(person => [person.last, person.first]),
  ageFirst: makeSorter(person => [-person.age, person.last]),
  ageLast: makeSorter(person => [person.age, person.first], [true, false]),
}

function person({first, last, age}) {
  return li(\`\${first} \${last}, \${age}\`)
}

const list = ul()
sortPicker = select(
  option('Sort by first', {value: 'firstSort'}),
  option('Sort by first (desc)', {value: 'firstDescSort'}),
  option('Sort by last, first', {value: 'nameSort'}),
  option('Sort by age (desc), first', {value: 'ageFirst'}),
  option('Sort by age, last (desc)', {value: 'ageLast'}),
  {
    onChange: render,
    value: 'nameSort'
  },
)

function render () {
  list.textContent = ''
  list.append(...people.sort(sorters[sortPicker.value]).map(person))
}

preview.append(
  div(
    sortPicker,
    icons.chevronDown()
  ),
  list
)

render()
\`\`\`
\`\`\`css
.preview {
  padding: var(--spacing);
}

.preview div {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
}
\`\`\`

## Details

To create a sort callback that sorts by propA then propB (if propA is tied):

\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB]
)
\`\`\`

As above, but sort descending:
\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  false
)
\`\`\`

As above but propA is sorted ascending, propB descending
\`\`\`
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  [true, false]
)
\`\`\``,
    title: "makeSorter",
    filename: "make-sorter.ts",
    path: "src/make-sorter.ts"
  },
  {
    text: `# map

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

\`\`\`js
const pickStyle = preview.querySelector('select')
const mapbox = preview.querySelector('xin-map')
const here = preview.querySelector('button')

pickStyle.addEventListener('change', () => {
  mapbox.mapStyle = pickStyle.value
})

function getUserGPSCoordinates() {
  return new Promise((resolve) => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      resolve(null);
      return;
    }

    // Request position with options
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      // Error callback
      (error) => {
        console.log(\`Error getting location: \${error.message}\`);
        resolve(null);
      },
      // Options
      {
        enableHighAccuracy: true,  // Request high accuracy if available
        timeout: 10000,            // Time to wait for position (10 seconds)
        maximumAge: 0              // Don't use cached position
      }
    );
  });
}

here.addEventListener('click', async () => {
  const location = await getUserGPSCoordinates()
  if (location) {
    mapbox.coords = \`\${location.latitude},\${location.longitude},12\`
  }
})
\`\`\`
\`\`\`html
<!-- please don't abuse my mapbox token -->
<xin-map
  style="width: 100%; height: 100%"
  coords="14.0093606,120.995083,17"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
  map-style="mapbox://styles/mapbox/streets-v12"
></xin-map>
<select>
  <option selected value="mapbox://styles/mapbox/streets-v12">Streets</option>
  <option value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
  <option value="mapbox://styles/mapbox/light-v11">Light</option>
  <option value="mapbox://styles/mapbox/dark-v11">Dark</option>
  <option value="mapbox://styles/mapbox/outdoors-v12">Outdoors</option>
</select>
<button>
  <xin-icon icon="mapPin"></xin-icon>
  <span>Your Location</span>
</button>
\`\`\`
\`\`\`css
.preview button {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.preview select {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
\`\`\`

There's no need to learn new APIs or write wrappers, just access the element's \`map\` property
and [use the standard mapbox APIs directly](https://docs.mapbox.com/api/maps/styles/).`,
    title: "map",
    filename: "mapbox.ts",
    path: "src/mapbox.ts"
  },
  {
    text: "# markdown\n\n`<xin-md>` renders markdown using [marked](https://www.npmjs.com/package/marked).\n\n`<xin-md>` renders [markdown](https://www.markdownguide.org/) anywhere, either using the\n`src` attribute to load the file asynchronously, or rendering the text inside it.\n\n```html\n<xin-md>\n## hello\nworld\n</xin-md>\n```\n```css\nxin-md {\n  display: block;\n  padding: var(--spacing);\n}\n```\n\nNote that, by default, `<xin-md>` will use its `textContent` (not its `innerHTML`) as its source.\n\n## rendering markdown from a url\n\nAgain, like an `<img>` tag, you can simply set a `<xin-md>`'s `src` attribute to a URL pointing\nto markdown source and it will load it asynchronously and render it.\n\n```\n<xin-md src=\"/path/to/file.md\">\n```\n\n## setting its `value`\n\nOr, just set the element's `value` and it will render it for you. You can try\nthis in the console, e.g.\n\n```\n$('.preview xin-md').value = 'testing\\n\\n## this is a test'\n```\n\n## elements\n\n`<xin-md>` also (optionally) allows the embedding of inline HTML elements without blocking markdown\nrendering, so that you can embed specific elements while retaining markdown. You need to explicitly set\nthe `elements` property, and for markdown rendering not to be blocked, the html elements need to\nstart on a new line and not be indented. E.g.\n\n```html\n<xin-md elements>\n<form>\n### this is a form\n<label>\nfill in this field.\n**It's important!**\n<input>\n</label>\n</form>\n</xin-md>\n```\n\nIn this case `<xin-md>` uses its `innerHTML` and not its `textContent`.\n\n## context and template variables\n\n`<xin-md>` also supports **template** values. You need to provide data to the element in the form\nof `context` (an arbitrary object, or a JSON string), and then embed the template text using\nhandlebars-style doubled curly braces, e.g. `{{path.to.value}}`.\n\nIf no value is found, the original text is passed through.\n\nFinally, note that template substitution occurs *before* markdown transformation, which means you can\npass context data through to HTML elements.\n\n```html\n<xin-md\n  elements\n  context='{\"title\": \"template example\", \"foo\": {\"bar\": 17}, \"nested\": \"*work*: {{foo.bar}}\"}'\n>\n## {{title}}\n\nThe magic number is <input type=\"number\" value={{foo.bar}}>\n\nOh, and nested templates {{nested}}.\n</xin-md>\n```",
    title: "markdown",
    filename: "markdown-viewer.ts",
    path: "src/markdown-viewer.ts"
  },
  {
    text: `# menu

Being able to pop a menu up anywhere is just so nice, and \`xinjs-ui\` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

\`\`\`js
const { popMenu } = xinjsui
const { elements } = xinjs

let picked = ''
let testingEnabled = false

preview.addEventListener('click', (event) => {
  if (!event.target.closest('button')) {
    return
  }
  popMenu({
    target: event.target,
    menuItems: [
      {
        icon: 'thumbsUp',
        caption: 'Like',
        shortcut: '^L',
        action() {
          window.alert('I like it!')
        }
      },
      null, // separator
      {
        icon: 'thumbsDown',
        caption: 'dislike',
        shortcut: '⌘D',
        action() {
          window.alert('Awwwww!')
        }
      },
      {
        icon: elements.span('🥹'),
        caption: 'Also see…',
        menuItems: [
          {
            icon: elements.span('😳'),
            caption: 'And that’s not all…',
            menuItems: [
              {
                icon: 'externalLink',
                caption: 'timezones',
                action: 'https://timezones.xinjs.net/'
              },
              {
                icon: 'externalLink',
                caption: 'b8rjs',
                action: 'https://b8rjs.com'
              },
            ]
          },
          {
            icon: 'xinjs',
            caption: 'xinjs',
            action: 'https://xinjs.net'
          },
          {
            icon: 'xinie',
            caption: 'xinie',
            action: 'https://xinie.net'
          },
        ]
      },
      {
        icon: testingEnabled ? 'check' : '',
        caption: 'Testing Enabled',
        action() {
          testingEnabled = !testingEnabled
        }
      },
      {
        caption: 'Testing…',
        enabled() {
          return testingEnabled
        },
        menuItems: [
          {
            caption: 'one',
            checked: () => picked === 'one',
            action () {
              picked = 'one'
            }
          },
          {
            caption: 'two',
            checked: () => picked === 'two',
            action () {
              picked = 'two'
            }
          },
          {
            caption: 'three',
            checked: () => picked === 'three',
            action () {
              picked = 'three'
            }
          }
        ]
      }
    ]
  })
})
\`\`\`
\`\`\`html
<button title="menu test">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
<button title="menu test from bottom-right" style="position: absolute; bottom: 0; right: 0">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
\`\`\`

## Overflow test

\`\`\`js
const { popMenu, icons } = xinjsui
const { elements } = xinjs

preview.querySelector('button').addEventListener('click', (event) => {
  popMenu({
    target: event.target,
    menuItems:  Object.keys(icons).map(icon => ({
      icon,
      caption: icon,
      action() {
        console.log(caption)
      }
    }))
  })
})
\`\`\`
\`\`\`html
<button title="big menu test" style="position: absolute; top: 0; left: 0">
  Big Menu Test
</button>
\`\`\`

## popMenu({target, width, menuItems…})

\`popMenu\` will spawn a menu on a target element. A menu is just a \`MenuItem[]\`.

## MenuItem

A \`MenuItem\` can be one of three things:

- \`null\` denotes a separator
- \`MenuAction\` denotes a labeled button or \`<a>\` tag based on whether the \`action\` provided
  is a url (string) or an event handler (function).
- \`SubMenu\` is a submenu.

### MenuAction

Note that popMenu does not implement shortcuts for you (yet!).

\`\`\`
interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}
\`\`\`

### SubMenu

\`\`\`
interface SubMenu {
  caption: string
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}
\`\`\`

## Why another menu library?!

Support for menus is sadly lacking in HTML, and unfortunately there's a huge conceptual problem
with menus implemented the way React and React-influenced libraries work, i.e. you need
to have an instance of a menu "wrapped around" the DOM element that triggers it, whereas
a better approach (and one dating back at least as far as the original Mac UI) is to treat
a menu as a separate resource that can be instantiated on demand.

A simple example where this becomes really obvious is if you want to associate a "more options"
menu with every row of a large table. Either you end up having an enormous DOM (virtual or otherwise)
or you have to painfully swap out components on-the-fly.

And, finally, submenus are darn useful for any serious app.

For this reason, \`xinjs-ui\` has its own menu implementation.`,
    title: "menu",
    filename: "menu.ts",
    path: "src/menu.ts"
  },
  {
    text: `# notifications

\`XinNotification\` provides a singleton custom \`<xin-notification>\` element that manages
a list of notifications.

The notifications are displayed most-recent first. If the notifications would take more than
half the height of the display, they are scrolled.

You can post a notification simply with \`XinNotification.post()\` or \`postNotification()\`.

\`\`\`
interface NotificationSpec {
  message: string
  type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  icon?: SVGElement | string // defaults to an info icon
  duration?: number
  progress?: () => number // return percentage completion
  close?: () => void
}
\`\`\`

If you provide a \`progress\` callback (which is assumed to return a number from \`0-100\`, with
100+ indicating completion) then \`XinNotification\` will poll it every second until the
task completes or the notification is closed. Returning 100 or more will automatically close
the notification.

If you configure a notification's \`type = "progress"\` but don't provide a \`progress\` callback
then an indefinite \`<progress>\` element will be displayed.

If you provide a \`close\` callback, it will be fired if the user closes the notification.

\`postNotification\` returns a callback function that closes the note programmatically (e.g.
when an operation completes). This will *also* call any \`close\` callback function you
provided. (The progress demos in the example exercise this functionality.)

\`\`\`js
const { postNotification, icons } = xinjsui

const form = preview.querySelector('xin-form')
const submit = preview.querySelector('.submit')
const closeButton = preview.querySelector('.close')

let close

form.submitCallback = (value, isValid) => {
  if (!isValid) return
  if (value.type.startsWith('progress')) {
    startTime = Date.now()
    const { message, duration, icon } = value
    close = postNotification({
      message,
      type: 'progress',
      icon,
      progress: value.type === 'progress' ? () => (Date.now() - startTime) / (10 * duration) : undefined,
      close: () => { postNotification(\`\${value.message} cancelled\`) },
    })
  } else {
    close = postNotification(value)
  }
  console.log(close)
  closeButton.disabled = false
}

submit.addEventListener('click', form.submit)
closeButton.addEventListener('click', () => {
  if (close) {
    close()
  }
})

postNotification({
  message: 'Welcome to xinjs-ui notifications, this message will disappear in 2s',
  duration: 2
})
\`\`\`
\`\`\`html
<xin-form>
  <h3 slot="header">Notification Test</h3>
  <xin-field caption="Message" key="message" type="string" value="This is a test…"></xin-field>
  <xin-field caption="Type" key="type" value="info">
    <xin-select slot="input"
      options="error,warn,info,success,log,,progress,progress (indefinite)"
    ></xin-select>
  </xin-field>
  <xin-field caption="Icon" key="icon" value="info">
    <xin-select slot="input"
      options="info,bug,thumbsUp,thumbsDown,message"
    ></xin-select>
  </xin-field>
  <xin-field caption="Duration" key="duration" type="number" value="2"></xin-field>
  <button slot="footer" class="close" disabled>Close Last Notification</button>
  <span slot="footer" class="elastic"></span>
  <button slot="footer" class="submit">Post Notification</button>
</xin-form>
\`\`\`
\`\`\`css
xin-form {
  height: 100%;
}

xin-form::part(content) {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  background: var(--background);
}

xin-form::part(header),
xin-form::part(footer) {
  background: #eee;
  justify-content: center;
  padding: 10px;
}

xin-form h3 {
  margin: 0;
}

xin-form label {
  display: grid;
  grid-template-columns: 120px 1fr;
}
\`\`\`

## \`postNotification(spec: NotificationSpec | string)\`

This is simply a wrapper for \`XinNotification.post()\`.`,
    title: "notifications",
    filename: "notifications.ts",
    path: "src/notifications.ts"
  },
  {
    text: `# password strength

Just wrap it a \`<xin-password-strength>\` element around an \`<input>\`
and it will gauge its content strength as a password. It will also
let you **securely verify** that the password hasn't been breached.

\`\`\`js
const toggle = preview.querySelector('.toggle')
const icon = preview.querySelector('xin-icon')
const input = preview.querySelector('input')
const breach = preview.querySelector('.breach')
const output = preview.querySelector('.output')

toggle.addEventListener('click', () => {
  if (icon.icon === 'eye') {
    input.type = 'text'
    icon.icon = 'eyeOff'
  } else {
    input.type = 'password'
    icon.icon = 'eye'
  }
})

breach.addEventListener('click', async () => {
  preview.querySelector('xin-password-strength').isBreached().then(isBreached => {
    output.textContent =
      isBreached
      ? 'This password has been breached, look at console for details'
      : 'Seems OK'
    output.classList.toggle('breached', isBreached)
  })
})
\`\`\`
\`\`\`html
<xin-password-strength>
  <input class="password" type="password">
  <button class="toggle">
    <xin-icon icon="eye"></xin-icon>
  </button>
</xin-password-strength>

<br><br>
<button class="breach">Check if breached</button>
<div class="output"></div>
\`\`\`
\`\`\`css
input.password {
  box-shadow: inset 0 0 0 2px var(--indicator-color);
}

.breached {
  color: white;
  background: red;
}
\`\`\`

## Algorithm

The password is assessed to have a strength based on:

- **length** one point for at least \`goodLength\` characters long.
- **[a-z]** one point for containing a lowercase letter
- **[A-Z]** one point for containing an uppercase letter
- **[0-9]** one point for containing a numeric character
- **^[a-zA-Z0-9]]** one point for containing some other kind of character

A password smaller than \`minLength\` is an automatic \`0\`.

## Attributes

- \`minLength\` defaults to \`8\`
- \`goodLength\` defaults to \`12\`
- \`indicatorColors\` six HTML colors, separated by commas, defaults to \`'#f00,#f40,#f80,#ef0,#8f0,#0d4'\`
- \`descriptionColors\` six HTML colors, sepeated by commans, defaults to \`'#000,#000,#000,#000,#000,#fff'\`

## Properties

- \`value\`, \`strength\` is a number from 0 to 5
- \`issues\` is a structure which you can use to generate feedback

\`\`\`
<xin-password-strength>.issues = {
  tooShort: boolean,
  short: boolean,
  noUpper: boolean,
  noLower: boolean,
  noNumber: boolean,
  noSpecial: boolean,
}
\`\`\`

## \`isBreached()\`

\`<xin-password-meter>\` also provides an \`isBreached(): Promise<boolean>\` method
which uses [weakpass.com's API](https://weakpass.com/) to tell you if the password has been
breached.

> Note that \`isBreached\` does not send the plain-text password anywhere. It uses **SHA-1**
to hash the password and then sends that for lookup.

## Utility Functions

Two functions used internally for querying [Weakpass,com](https://weakpass.com/) are
provided in case they're useful on their own.

\`isBreached(password: striing): Promise<boolean>\` will return \`true\` if the password is
found in Weakpass's database (and spit out extra info to the console).

\`digest(s: string, method="sha-1"): Promise<string>\` is just a nice wrapper for \`crypto.digest\`.`,
    title: "password strength",
    filename: "password-strength.ts",
    path: "src/password-strength.ts"
  },
  {
    text: `# popFloat

There are so many cases in user-interfaces where it's useful to pop-up a floating
user interface element that a simple and reliable way of doing this seems like
a good idea.

The problem with many such approaches is that they assume a highly specific
use-case (e.g. popup menu or combo box) and while meeting the creator's intended
purpose admirably, turn out to have some annoying limitation that prevents them
handling the specific case at hand.

\`\`\`js
const { popFloat, positionFloat } = xinjsui
const { button } = xinjs.elements
const grid = preview.querySelector('.grid')

grid.addEventListener('click', (event) => {
  const { target } = event
  if (!target.closest('button')) {
    return
  }
  const float = preview.querySelector('xin-float')
  if (float === null) {
    // create and position a float
    preview.append(
      popFloat({
        content: [
          'hello, I am a float',
          button('close me', {
            onClick(event){
              event.target.closest('xin-float').remove()
            }
          })
        ],
        target,
        position: target.dataset.float
      })
    )
  } else {
    // position an existing float
    positionFloat(float, target, target.dataset.float)
  }
})
\`\`\`
\`\`\`html
<h2>Pop Float Demo</h2>
<div class="grid">
  <button data-float="nw">nw</button>
  <button data-float="n">n</button>
  <button data-float="ne">ne</button>
  <button data-float="wn">wn</button>
  <span>&nbsp;</span>
  <button data-float="en">en</button>
  <button data-float="w">w</button>
  <button data-float="auto">auto</button>
  <button data-float="e">e</button>
  <button data-float="ws">ws</button>
  <button data-float="side">side</button>
  <button data-float="es">es</button>
  <button data-float="sw">sw</button>
  <button data-float="s">s</button>
  <button data-float="se">se</button>
</div>
\`\`\`
\`\`\`css
.preview .grid {
  display: grid;
  grid-template-columns: 80px 80px 80px;
}

.preview xin-float {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  background: white;
  box-shadow: 2px 10px 5px #0004;
}
\`\`\`

## popFloat

\`\`\`
export interface PopFloatOptions {
  content: HTMLElement | ElementPart[]
  target: HTMLElement
  position?: FloatPosition
}

export const popFloat = (options: PopFloatOptions): XinFloat
\`\`\`

Create a \`<xin-float>\` with the content provided, positioned as specified (or automatically).

## positionFloat

\`\`\`
export const positionFloat = (
  element: HTMLElement,
  target: HTMLElement,
  position?: FloatPosition
  remainOnScroll?: 'hide' | 'remove' | boolean // default is 'remove'
  remainOnResize?: 'hide' | 'remove' | boolean // default is 'remove'
): void
\`\`\`

This allows you to, for example, provide a global menu that can be used on any element
instead of needing to have a whole instance of the menu wrapped around every instance
of the thing you want the menu to affect (a common anti-pattern of front-end frameworks).

### Handling Overflow

\`positionFloat\` automatically sets two css-variables \`--max-height\` and \`--max-width\` on
the floating element to help you deal with overflow (e.g. in menus). E.g. if the float
is positioned with \`top: 125px\` then it will set \`--max-height: calc(100vh - 125px)\`.

## FloatPosition

\`\`\`
export type FloatPosition =
| 'n'
| 's'
| 'e'
| 'w'
| 'ne'
| 'nw'
| 'se'
| 'sw'
| 'en'
| 'wn'
| 'es'
| 'ws'
| 'side'
| 'auto'
\`\`\``,
    title: "popFloat",
    filename: "pop-float.ts",
    path: "src/pop-float.ts"
  },
  {
    text: '# rating\n\n`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`\nthat renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.\n\n```html\n<xin-rating value=3.4></xin-rating>\n<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>\n<xin-rating value=3.4 color="deepskyblue"></xin-rating>\n<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>\n```\n```css\n.preview {\n  display: flex;\n  flex-direction: column;\n}\n```\n\n## Attributes\n\n- `icon-size` (24 by default) determines the height of the control and along with `max` its width\n- `max` maximum rating\n- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)\n- `step` (0.5 by default) granularity of rating\n- `icon` (\'star\' by default) determines the icon used\n- `fill` (#f91 by default) is the color of rating icons\n- `empty-color` (#ccc by default) is the color of background icons\n- `readonly` (false by default) prevents the user from changing the rating\n- `hollow` (false by default) makes the empty rating icons hollow.\n\n## Keyboard\n\n`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).\n\nThe up key increases the rating, down descreases it. This is the same\nas the behavior of `<input type="number">`, [Shoelace\'s rating widget](https://shoelace.style/components/rating/),\nand (in my opinion) common sense, but  not like [MUI\'s rating widget](https://mui.com/material-ui/react-rating/).',
    title: "rating",
    filename: "rating.ts",
    path: "src/rating.ts"
  },
  {
    text: `# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

\`xinjs-ui\` uses this library to implement the \`<xin-code>\`, \`<xin-lottie>\`, and \`<xin-map>\`
elements.

\`scriptTag()\` and \`styleSheet()\` return promises that resolve \`globalThis\` when the module in question
has loaded and otherwise behave as much like \`import()\` as possible.

This example uses \`scriptTag\` and \`styleSheet\` to load [quilljs](https://quilljs.com) on-the-fly.

\`\`\`js
const { elements } = xinjs
const { scriptTag, styleSheet } = xinjsui

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, false] }],
  ['blockquote', 'code-block'],
  [{ 'align': [] }],
  ['bold', 'italic', 'strike'],
  ['link', 'image', 'video'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  ['clean']
]

;(async () => {
  await Promise.all([
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.core.css'),
    styleSheet('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css'),
  ])

  const container = elements.div()
  const { Quill } = await scriptTag('https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js')
  preview.append(container)

  const quill = new Quill(container, {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions,
    },
    theme: 'snow',
  })
})()
\`\`\`

Note that \`scriptTag\` will resolve \`globalThis\` so it behaves as much like async \`import()\`
as possible.

As an aside:

\`<xin-lottie>\` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for \`<xin-map>\` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a \`<link>\` tag for a specified css file.

Using \`styleSheet\`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet \`<link>\` will only be inserted _once_.`,
    title: "scriptTag & styleSheet",
    filename: "via-tag.ts",
    path: "src/via-tag.ts"
  },
  {
    text: `# segmented select

This is a fairly general-purpose segmented select control.

\`\`\`html
<blockquote>
Check the console to see the values being set.
</blockquote>

<div class="grid">
<xin-segmented value="yes" choices="yes, no, don't care">
  Should we?
</xin-segmented>

<xin-segmented title="do you like?" choices="yes=Yes:thumbsUp, no=No:thumbsDown"></xin-segmented>

<xin-segmented
  style="--segmented-direction: column; --segmented-align-items: stretch" 
  choices="in a relationship, single" other="it's complicated…" 
  placeholder="oooh… please elaborate"
  value="separated"
>
  Relationship Status
</xin-segmented>

<xin-segmented 
  multiple 
  style="
    --segmented-direction: column; 
    --segmented-align-items: start; 
    --segmented-option-grid-columns: 24px 24px 100px;
    --segmented-input-visibility: visible;
  " 
  choices="star=Star:star, game=Game:game, bug=Bug:bug, camera=Camera:camera"
  value="star,bug"
>
  Pick all that apply
</xin-segmented>
</div>
\`\`\`
\`\`\`css
.preview .grid {
  --segmented-option-current-background: var(--brand-color);
  --segmented-option-current-color: var(--brand-text-color);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
\`\`\`
\`\`\`js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
\`\`\`

## Properties

- \`values\` is an array of values (only really useful if \`multiple\` is set to true)

You can set \`choices\` programmatically to an array of \`Choice\` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- \`choices\` is a string of comma-delimited options of the form \`value=caption:icon\`, 
  where caption and icon are optional
- \`multiple\` allows multiple selection
- \`name\` allows you to set the name of the \`<input>\` elements to a specific value, it will default 
  to the component's \`instanceId\`
- \`other\` (default '', meaning other is not allowed) is the caption for other options, allowing 
  the user to input their choice. It will be reset to '' if \`multiple\` is set.
- \`placeholder\` is the placeholder displayed in the \`<input>\` field for **other** responses

## Styling

The following CSS variables can be used to control customize the \`<xin-segmented>\` component.

    --segmented-align-items
    --segmented-direction
    --segmented-option-color
    --segmented-option-current-background
    --segmented-option-current-color
    --segmented-option-font
    --segmented-option-gap
    --segmented-option-grid-columns
    --segmented-option-icon-color
    --segmented-option-padding
    --segmented-options-background
    --segmented-options-border-radius
    --segmented-placeholder-opacity`,
    title: "segmented select",
    filename: "segmented.ts",
    path: "src/segmented.ts"
  },
  {
    text: `# select

\`<xin-select>\` (\`xinSelect\` is the \`ElementCreator\`) is a replacement for the lamentable
built in \`<select>\` element that addresses its various shortcomings.

- since \`<xin-select>\` is powered by \`popMenu\`, and supports separators and submenus.
- options can have icons.
- \`<xin-select>\` will retain and display a value even if the matching option is missing.
- its displayed value can be made \`editable\`, allowing use as a "combo box".
- options can have \`async\` callbacks that return a value.
- picking an item triggers an \`action\` event even if the value hasn't changed.
- available options are set via the \`options\` attribute or the element's \`options\` property (not \`<option>\` elements)

\`\`\`html
<xin-select
  title="simple select"
  options="this,that,,the other"
  value="not an option!"
></xin-select><br>
<xin-select
  show-icon
  title="has captions"
  class="captions"
  value="image"
></xin-select><br>
<xin-select
  show-icon
  title="combo select with icons"
  class="icons"
  editable
  placeholder="pick an icon"
></xin-select><br>
<xin-select
  show-icon
  hide-caption
  title="icons only"
  class="icons-only"
  placeholder="pick an icon"
></xin-select>
<pre contenteditable>Select some text in here…
…to check for focus stealing</pre>
\`\`\`
\`\`\`js
const { icons } = xinjsui

const captions = preview.querySelector('.captions')

captions.options = [
  {
    caption: 'a heading',
    value: 'heading'
  },
  {
    caption: 'a paragraph',
    value: 'paragraph'
  },
  null,
  {
    caption: 'choose some other',
    options: [
      {
        icon: 'image',
        caption: 'an image',
        value: 'image'
      },
      {
        icon: 'fileText',
        caption: 'a text file',
        value: 'text',
      },
      {
        icon: 'video',
        caption: 'a video',
        value: 'video'
      },
      null,
      {
        caption: 'anything goes…',
        value: () => prompt('Enter your other', 'other') || undefined
      },
      {
        caption: 'brother… (after 1s delay)',
        value: async () => new Promise(resolve => {
          setTimeout(() => resolve('brother'), 1000)
        })
      }
    ]
  }
]

const iconsSelect = preview.querySelector('.icons')
const iconsOnly = preview.querySelector('.icons-only')

iconsSelect.options = iconsOnly.options = Object.keys(icons).sort().map(icon =>({
  icon,
  caption: icon,
  value: icon
}))

preview.addEventListener('action', (event) => {
  console.log(event.target.title, 'user picked', event.target.value)
}, true)

preview.addEventListener('change', (event) => {
  console.log(event.target.title, 'changed to', event.target.value)
}, true)
\`\`\`
<xin-css-var-editor element-selector="xin-select"></xin-css-var-editor>

## \`options\`

    type OptionRequest = () => Promise<string | undefined>

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    export interface SelectOptionSubmenu {
      icon?: string | HTMLElement
      caption: string
      options: SelectOptions
    }

    export type SelectOptions = Array<string | null | SelectOption | SelectOptionSubmenu>

A \`<xin-select>\` can be assigned \`options\` as a string of comma-delimited choices,
or be provided a \`SelectOptions\` array (which allows for submenus, separators, etc.).

## Attributes

\`<xin-select>\` supports several attributes:

- \`editable\` lets the user directly edit the value (like a "combo box").
- \`show-icon\` displays the icon corresponding to the currently selected value.
- \`hide-caption\` hides the caption.
- \`placeholder\` allows you to set a placeholder.
- \`options\` allows you to assign options as a comma-delimited string attribute.

## Events

Picking an option triggers an \`action\` event (whether or not this changes the value).

Changing the value, either by typing in an editable \`<xin-select>\` or picking a new
value triggers a \`change\` event.

You can look at the console to see the events triggered by the second example.`,
    title: "select",
    filename: "select.ts",
    path: "src/select.ts"
  },
  {
    text: "# sidebar\n\nThe default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small\nscreens, and display the sidebar when space is available (with the user able to explicitly hide\nthe sidebar if so desired). `<xin-sidenav>` provides this functionality.\n\n`<xin-sidenav>` is used to handle the layout of the documentation tab panel.\n\n`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation\nsidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's\ncurrently in `compact` form.",
    title: "sidebar",
    filename: "side-nav.ts",
    path: "src/side-nav.ts"
  },
  {
    text: `# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's \`<xin-sizebreak>\`.

Note that the sizes referred to are of the \`<xin-sizebreak>\`'s \`.offsetParent\`, and it watches for
the window's \`resize\` events and its own (via \`ResizeObserver\`).

\`\`\`html
<div class="container">
  <xin-sizebreak min-width="300" min-height="150">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <xin-sizer></xin-sizer>
</div>
\`\`\`
\`\`\`css
.preview {
  touch-action: none;
}

.preview xin-sizebreak {
  width: 100%;
  height: 100%;
  background: #fff8;
  border: 1px solid #aaa;
}

.preview xin-sizebreak * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.preview .container {
  position: relative;
  min-width: 100px;
  min-height: 40px;
  max-height: 100%;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #0002;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
  opacity: 0.5;
}

.preview .sizer:hover {
  opacity: 1.0;
}
\`\`\`

\`<xin-sizebreak>\` supports both \`min-width\` and/or \`min-height\`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.`,
    title: "size-break",
    filename: "size-break.ts",
    path: "src/size-break.ts"
  },
  {
    text: `# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

\`\`\`html
<div>
  <xin-sizer></xin-sizer>
</div>
\`\`\`
\`\`\`css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
\`\`\`

<xin-css-var-editor element-selector="xin-sizer"></xin-css-var-editor>`,
    title: "sizer",
    filename: "sizer.ts",
    path: "src/sizer.ts"
  },
  {
    text: `# style

## Convert CSS to Javascript

This is a simple utility for converting CSS into a xinjs \`XinStyleSheet\` object.
Having all of your CSS start as Javascript (or Typescript) has many
benefits, such as being able to do color math using \`xinjs\`'s \`Color\` class,
and use the same values that are in your CSS for inline code when needed.

> ### Caution
>
> - This is not a real parser but regexp hackery!
> - Doesn't handle edge-cases like semicolons inside string values or
>   skipped semicolons for the last property in a rule.
> - Doesn't convert variable references inside style values (e.g. calc(var(--foo) * 0.5))
>   into \`vars\` values.

\`\`\`js
const tabs = preview.querySelector('xin-tabs')
const [css, js] = preview.querySelectorAll('xin-code')
const convertButton = preview.querySelector('button')

function quoteTrim(s, symbol = false) {
  s = s.trim()
  if (s.match(/[^\\w_]/) || !symbol) {
    s = s.replace(/'/g, "\\\\'")
    return \`'\${s}'\`
  } else {
    return s
  }
}

function kebabToCamel(s) {
  s = s.replace(/--/, '_')
  return s.replace(/\\-(\\w)/g, (_, c) => c.toLocaleUpperCase())
}

function css2js () {
  const source = css.value
  const lines = source.split('\\n')
  const output = ['{']
  let rule = ''
  for(const line of lines) {
    if (!line.trim()) {
      continue
    }
    try {
      rule = rule ? rule + ' ' + line.trim() : line
      if (rule.match(/@import .*;/)) {
        const [,url] = rule.match(/@import url\\(['"](.*)['"]\\);/)
        output.push(\`'@import': \${quoteTrim(url)},\`)
        rule = ''
      } else if (rule.match(/\\{\\s*$/)) {
        const [,whitespace, selector] = rule.match(/(\\s*)([^\\s].*)\\{/)
        output.push(\`\${whitespace}\${quoteTrim(selector, true)}: {\`)
        rule = ''
      } else if (line.match(/[^\\s]*\\}\\s*$/)) {
        output.push(line + ',')
        rule = ''
      } else if (rule.match(/.*:.*;/)) {
        let [,whitespace, prop, value] = rule.match(/(\\s*)(.*):(.*);/)
        prop = kebabToCamel(prop)
        output.push(\`\${whitespace}\${quoteTrim(prop, true)}: \${quoteTrim(value)},\`)
        rule = ''
      }
    } catch(e) {
      console.error(e, line)
    }
  }
  output.push('}')
  let code = output.join('\\n')
  code = code.replace(/'var\\(--([^)]*)\\)'/g, (_,v) => \`vars.\${kebabToCamel(v)}\`)

  js.value = \`import { vars } from 'xinjs'\\n\\nexport const styleSpec = \${code}\`
}

convertButton.addEventListener('click', () => {
  css2js()
  tabs.value = 1
})
\`\`\`
\`\`\`html
<xin-tabs>
<button slot="after-tabs">Convert</button>
<xin-code mode="css" name="css">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');

tr:nth-child(2n) {
  background: var(--background-shaded);
}

th,
td {
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header xin-locale-picker xin-select button {
  --brand-color: var(--brand-text-color);
  background: transparent;
  gap: 2px;
}

header xin-locale-picker xin-select button svg {
  fill: var(--brand-text-color) !important;
}
</xin-code>
<xin-code mode="javascript" name="js"></xin-code>
</xin-tabs>
\`\`\`
\`\`\`css
.preview xin-tabs {
  background: var(--inset-bg);
}
.preview xin-tabs, .preview textarea, .preview xin-code {
  width: 100%;
  height: 100%;
  resize: none;
}
\`\`\`

## Using the Output

You can turn the output of this utility using \`xinjs\`'s \`StyleSheet\` utility function:

\`\`\`
import { styleSpec } from './my-style'

StyleSheet('base-style', styleSpec) // creates a \`<style id="base-style>\` element in
  the \`<head>\` of the page.
\`\`\`

You can convert the output to Typescript by importing the \`XinStyleSheet\` from \`xinjs\`:

\`\`\`
import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = ...
\`\`\``,
    title: "style",
    filename: "style.ts",
    path: "demo/src/style.ts"
  },
  {
    text: `# table

A virtual data-table, configurable via a \`columns\` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

\`\`\`js
const { dataTable } = xinjsui
const { input } = xinjs.elements

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    width: 80,
    sort: false,
    visible: true
  },
  {
    prop: "name",
    width: 300,
    // custom cell using xinjs bindings to make the field editable
    dataCell() {
      return input({
        class: 'td',
        bindValue: '^.name',
        title: 'name',
        onMouseup: (event) => { event.stopPropagation() },
        onTouchend: (event) => { event.stopPropagation() },
      })
    },
  },
  {
    prop: "category",
    sort: "ascending",
    width: 150
  },
  {
    prop: "subcategory",
    width: 150
  },
]

preview.append(dataTable({
  multiple: true,
  array: emojiData,
  columns,
  rowHeight: 40,
  pinnedBottom: 2
}))
\`\`\`
\`\`\`css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: #fff4;
}

.preview xin-table {
  height: 100%;
}

.preview xin-table [part="pinnedTopRows"],
.preview xin-table [part="pinnedBottomRows"] {
  background: #ddd;
}
\`\`\`

> In the preceding example, the \`name\` column is *editable* (and *bound*, try editing something and scrolling
> it out of view and back) and \`multiple\` select is enabled. In the console, you can try \`$('xin-table').visibleRows\`
> and $('xin-table').selectedRows\`.

You can set the \`<xin-table>\`'s \`array\`, \`columns\`, and \`filter\` properties directly, or set its \`value\` to:

\`\`\`
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
\`\`\`

## \`ColumnOptions\`

You can configure the table's columns by providing it an array of \`ColumnOptions\`:

\`\`\`
export interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  align?: string
  sort?: false | 'ascending' | 'descending'
  headerCell?: (options: ColumnOptions) => HTMLElement
  dataCell?: (options: ColumnOptions) => HTMLElement
}
\`\`\`

## Selection

\`<xin-table>\` supports \`select\` and \`multiple\` boolean properties allowing rows to be selectable. Selected rows will
be given the \`[aria-selected]\` attribute, so style them as you wish.

\`multiple\` select supports shift-clicking and command/meta-clicking.

\`<xin-table>\` provides an \`selectionChanged(visibleSelectedRows: any[]): void\` callback property allowing you to respond to changes
in the selection, and also \`selectedRows\` and \`visibleSelectedRows\` properties.

The following methods are also provided:

- \`<xin-table>.selectRow(row: any, select = true)\` (de)selects specified row
- \`<xin-table>.selectRows(rows?: any[], select = true)\` (de)selects specified rows
- \`<xin-table>.deSelect(rows?: any[])\` deselects all or specified rows.

These are rather fine-grained but they're used internally by the selection code so they may as well be documented.

## Sorting

By default, the user can sort the table by any column which doesn't have a \`sort === false\`.

You can set the initial sort by setting the \`sort\` value of a specific column to \`ascending\`
or \`descending\`.

You can override this by setting the table's sort function (it's an \`Array.sort()\` callback)
to whatever you like, and you can replace the \`headerCell\` or set the \`sort\` of each column
to \`false\` if you have some specific sorting in mind.

You can disable sorting controls by adding the \`nosort\` attribute to the \`<xin-table>\`.

## Hiding (and Showing) Columns

By default, the user can show / hide columns by clicking via the column header menu.
You can remove this option by adding the \`nohide\` attribute to the \`<xin-table>\`

## Reordering Columns

By default, the user can reorder columns by dragging them around. You can disable this
by adding the \`noreorder\` attribute to the \`<xin-table>\`.

## Row Height

If you set the \`<xin-table>\`'s \`rowHeight\` to \`0\` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.

## Styling

Aside from row height (see previous) the component doesn't use the shadowDOM, so it's easy to override
its styles.

## Pinned Rows

The table supports two attributes, \`pinnedTop\` and \`pinnedBottom\` that let you pin the specified number
of top and bottom rows.`,
    title: "table",
    filename: "data-table.ts",
    path: "src/data-table.ts"
  },
  {
    text: `# tabs

\`<xin-tabs>\` creates a \`tabpanel\` for its children, creating a \`tab\` for each based on its
\`name\` attribute.

\`\`\`js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = \`hsl(\${(Math.random() * 360).toFixed(0)} 50% 50%)\`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

tabSelector.onCloseTab = body => {
  if (!confirm(\`Are you sure you want to close the \${body.getAttribute('name')} tab?\`)) {
    return false
  }
}

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = \`new tab \${++bodycount}\`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
\`\`\`
\`\`\`html
<xin-tabs>
  <div name="first">first body</div>
  <div name="second" data-close>
    <template role="tab">
      <xin-icon
        style="
          display: inline-block;
          width: 16px;
          height: 16px;
          transform: translateY(2px);
          margin-right: 4px;
          fill: var(--brand-color);
        "
        icon="eye"
      ></xin-icon>
      <span>Ooooh!!!</span>
    </template>
    look at the html…
  </div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <xin-icon icon="plus"></xin-icon>
  </button>
</xin-tabs>
\`\`\`
\`\`\`css
  .preview xin-tabs {
    height: 100%;
  }

  .preview div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }

  .preview .add {
    width: 38px;
    line-height: 38px;
    height: 38px;
    padding: 0;
  }
\`\`\`

The \`<xin-tabs>\`s \`value\` is the index of its active body.

A \`<xin-tabs>\` has \`addTabBody(body: HTMLElement, select?: boolean)\` and
\`removeTabBody(body: number | HTMLElement)\` methods for updating its content.

You can also just insert or remove tab bodies directly and call \`setupTabs()\`.

## Closeable Tabs

Adding the \`data-close\` attribute to a tab will make it closeable.

When a tab is closed, the \`<xin-tabs>\` element's \`onCloseTab: (tabBody: Element) => boolean | undefined | void\`
will be called. If you override this method and return \`false\`, the tab will
not be closed (e.g. if you want to implement save/cancel behavior).

## Custom Tab Content

You can specify the exact content of the tab for a given body by
adding a \`<template role="tab">\` to that body. The contents of that
template will be cloned into the tab.`,
    title: "tabs",
    filename: "tab-selector.ts",
    path: "src/tab-selector.ts"
  },
  {
    text: `# tag-list

Building a tag-list from standard HTML elements is a bit of a nightmare.

\`<xin-tag-list>\` allows you to display an editable or read-only tag list (represented either
as a comma-delimited string or an array of strings).

\`\`\`html
<label style="position: absolute; right: 10px; top: 10px; display: block">
  <input type="checkbox" class="disable-toggle">
  <b>Disable All</b>
</label>
<label>
  <b>Display Only</b>
  <xin-tag-list
    value="this,that,,the-other"
  ></xin-tag-list>
</label>
<xin-tag-list
  class="compact"
  value="this,that,,the-other"
></xin-tag-list>
<br>
<label>
  <b>Editable</b>
  <xin-tag-list
    class="editable-tag-list"
    value="belongs,also belongs,custom"
    editable
    available-tags="belongs,also belongs,not initially chosen"
  ></xin-tag-list>
</label>
<br>
<b>Text-Entry</b>
<xin-tag-list
  value="this,that,the-other,not,enough,space"
  editable
  text-entry
  available-tags="tomasina,dick,,harriet"
></xin-tag-list>
\`\`\`
\`\`\`css
.preview .compact {
  --spacing: 8px;
  --font-size: 12px;
  --line-height: 18px;
}
.preview label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
\`\`\`
\`\`\`js
preview.addEventListener('change', (event) => {
  if (event.target.matches('xin-tag-list')) {
    console.log(event.target, event.target.value) 
  }
}, true)
preview.querySelector('.disable-toggle').addEventListener('change', (event) => {
  const tagLists = Array.from(preview.querySelectorAll('xin-tag-list'))
  for(const tagList of tagLists) {
    tagList.disabled = event.target.checked
  }
})
\`\`\`

## Properties

### \`value\`: string | string[]

A list of tags

### \`tags\`: string[]

## \`popSelectMenu\`: () => void

This is the method called when the user clicks the menu button. By default is displays a
pick list of tags, but if you wish to customize the behavior, just replace this method.

A read-only property giving the value as an array.

### \`available-tags\`: string | string[]

A list of tags that will be displayed in the popup menu by default. The popup menu
will always display custom tags (allowing their removal).

### \`editable\`: boolean

Allows the tag list to be modified via menu and removing tags.

### \`text-entry\`: boolean

If \`editable\`, an input field is provided for entering tags directly.

### \`placeholder\`: string = 'enter tags'

Placeholder shown on input field.`,
    title: "tag-list",
    filename: "tag-list.ts",
    path: "src/tag-list.ts"
  },
  {
    text: `# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in \`<xin-table>\` work.

Just call \`trackDrag(event, (dx, dy, event) => { ... })\` and you'll get updates on corresponding events until
you return \`true\` from the event-handler (or, in the case of \`touch\` events, the last \`touch\` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

\`\`\`html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
\`\`\`
\`\`\`css
.preview {
  touch-action: none;
}

.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
}

.preview p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
\`\`\`
\`\`\`js
const { trackDrag } = xinjsui

function dragItem(event) {
  const draggable = event.target
  if (draggable.classList.contains('draggable')) {
    const x = draggable.offsetLeft
    const y = draggable.offsetTop
    trackDrag(event, (dx, dy, event) => {
      draggable.style.left = (x + dx) + 'px'
      draggable.style.top = (y + dy) + 'px'
      draggable.style.bottom = 'auto'
      draggable.style.right = 'auto'
      return event.type === 'mouseup'
    })
  }
}

preview.addEventListener('mousedown', dragItem )
preview.addEventListener('touchstart', dragItem, { passive: true } )
\`\`\`

For \`touch\` events, \`dx\` and \`dy\` are based on tracking \`event.changedTouches[0]\` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.

## bringToFront

\`bringToFront(element: HTMLElement, selector = 'body *')\`  gives the element the highest
\`z-index\` of any element matching the selector (which is passed to findHighestZ).

## findHighestZ

\`findHighestZ(selector = 'body *'): number\` returns the the highest \`z-index\` of any element
matching \`selector\`.`,
    title: "trackDrag",
    filename: "track-drag.ts",
    path: "src/track-drag.ts"
  },
  {
    text: `# word (rich text editor)

\`<xin-word>\` is a simple and easily extensible \`document.execCommand\` WYSIWYG editor with some conveniences.

\`\`\`html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
\`\`\`
\`\`\`css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
\`\`\`

By default, \`<xin-word>\` treats its initial contents as its document, but you can also set (and get)
its \`value\`.

## toolbar

\`<xin-word>\` elements have a \`toolbar\` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the \`widgets\` attribute to \`default\` or \`minimal\` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- \`commandButton(title: string, command: string, iconClass: string)\`
- \`blockStyle(options: Array<{caption: string, tagType: string}>)\`
- \`spacer(width = '10px')\`
- \`elastic(width = '10px')\`

These each create a toolbar widget. A \`blockStyle\`-generated \`<select>\` element will
automatically have its value changed based on the current selection.

## properties

A \`<xin-word>\` element also has \`selectedText\` and \`selectedBlocks\` properties, allowing
you to easily perform operations on text selections, and a \`selectionChange\` callback (which
simply passes through document \`selectionchange\` events, but also passes a reference to
the \`<xin-word>\` component).`,
    title: "word (rich text editor)",
    filename: "rich-text.ts",
    path: "src/rich-text.ts"
  },
  {
    text: `# docs.js

The \`xinjs-ui\` package includes \`docs.js\` which is used to build the documentation
for the [ui.xinjs.net](https://ui.xinjs.net).

This is a simple utility for finding all the markdown files in a directory and also all
multi-line comments in .ts, .js, and .css source files that being with a "!".

These comments are assumed to be in markdown.

It then emits JSON containing all the content.

Comments comprising JSON objects are treated as metadata and added to the
file objects in the JSON data. This includes: \`<!--{ ... }-- >\` and \`/*{...}* /\`
comments (omit the spaces inserted to prevent this text from blowing up docs.js!)

As of now, the only metadata supported by docs.js is \`pin\` which if set to "top"
will force the item to the top of the list, while "bottom" will force it to the
bottom.

This doc is pinned to the bottom. README is pinned to the top.

> **Aside**: the original version of this code was written by ChatGPT.`,
    title: "docs.js",
    filename: "docs.js",
    path: "docs.js",
    pin: "bottom"
  },
  {
    text: `# Work in Progress

- \`<xin-filter>\`
  - Leverage \`<xin-select>\` for picking fields etc.
  - Leverage \`<xin-tag-list>\` for displaying filters compactly
  - Leverage \`popFloat\` for disclosing filter-editor
- \`<xin-editable>\`
  - Add support for disabling / enabling options
  - Hide lock icons while resizing
  - Maybe show lines under locks indicating the parent
  - Support snapping to sibling boundaries and centers
- builds
  - better leveraging of tree-shacking
  <!--{"pin": "bottom"}-->
`,
    title: "Work in Progress",
    filename: "TODO.md",
    path: "TODO.md",
    pin: "bottom"
  }
];

// demo/src/index.ts
qo("demo-style", styleSpec);
initLocalization(localized_strings_default);
setTimeout(() => {
  const brandColor = getComputedStyle(document.body).getPropertyValue("--brand-color");
  console.log("welcome to %cui.xinjs.net", `color: ${brandColor}; padding: 0 5px;`);
}, 100);
var PROJECT = "xinjs-ui";
var docName = document.location.search !== "" ? document.location.search.substring(1).split("&")[0] : "README.md";
var currentDoc = docs_default.find((doc) => doc.filename === docName) || docs_default[0];
var { app } = Rn({
  app: {
    title: PROJECT,
    blogUrl: `https://loewald.com`,
    discordUrl: `https://discord.com/invite/ramJ9rgky5`,
    githubUrl: `https://github.com/tonioloewald/${PROJECT}#readme`,
    npmUrl: `https://www.npmjs.com/package/${PROJECT}`,
    xinjsUrl: "https://xinjs.net",
    bundleBadgeUrl: `https://deno.bundlejs.com/?q=${PROJECT}&badge=`,
    bundleUrl: `https://bundlejs.com/?q=${PROJECT}`,
    cdnBadgeUrl: `https://data.jsdelivr.com/v1/package/npm/${PROJECT}/badge`,
    cdnUrl: `https://www.jsdelivr.com/package/npm/${PROJECT}`,
    optimizeLottie: false,
    lottieFilename: "",
    lottieData: "",
    docs: docs_default,
    currentDoc
  }
});
on.docLink = {
  toDOM(elt, filename) {
    elt.setAttribute("href", `?${filename}`);
  }
};
on.current = {
  toDOM(elt, currentFile) {
    const boundFile = elt.getAttribute("href") || "";
    elt.classList.toggle("current", currentFile === boundFile.substring(1));
  }
};
setTimeout(() => {
  Object.assign(globalThis, { app, xin: T, bindings: on, elements: S, vars: qn, touch: _ });
}, 1000);
var main = document.querySelector("main");
var { h2: h22, div: div13, span: span13, a: a3, img, header, button: button11, template: template2 } = S;
window.addEventListener("popstate", () => {
  const filename = window.location.search.substring(1);
  app.currentDoc = app.docs.find((doc) => doc.filename === filename) || app.docs[0];
});
if (main)
  main.append(header(a3({
    href: "/",
    style: {
      display: "flex",
      alignItems: "center",
      borderBottom: "none"
    }
  }, icons.xinjsUiColor({
    style: { _fontSize: 40, marginRight: 10 }
  }), h22({ bindText: "app.title" })), span13({ class: "elastic" }), sizeBreak({
    minWidth: 640
  }, span13({
    style: {
      marginRight: qn.spacing,
      display: "flex",
      alignItems: "center",
      gap: qn.spacing50
    }
  }, a3({ href: app.bundleUrl }, img({ alt: "bundlejs size badge", src: app.bundleBadgeUrl })), a3({ href: app.cdnUrl }, img({ alt: "jsdelivr", src: app.cdnBadgeUrl }))), span13({ slot: "small" })), a3({ class: "iconic", title: "discord", target: "_blank" }, icons.discord(), {
    href: app.discordUrl
  }), a3({ class: "iconic", title: "blog", target: "_blank" }, icons.blog(), {
    href: app.blogUrl
  }), a3({ class: "iconic", title: "github", target: "_blank" }, icons.github(), {
    href: app.githubUrl
  }), a3({ class: "iconic", title: "npmjs", target: "_blank" }, icons.npm(), {
    href: app.npmUrl
  }), localePicker({
    hideCaption: true
  })), sideNav({
    name: "Documentation",
    navSize: 200,
    minSize: 600,
    style: {
      flex: "1 1 auto",
      overflow: "hidden"
    }
  }, div13({
    slot: "nav",
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      background: qn.navBg,
      overflowY: "scroll"
    },
    bindList: {
      value: app.docs
    }
  }, template2(a3({
    class: "doc-link",
    bindCurrent: "app.currentDoc.filename",
    bindDocLink: "^.filename",
    onClick(event) {
      const a4 = event.target;
      const doc = Tn(event.target);
      const nav = event.target.closest("xin-sidenav");
      nav.contentVisible = true;
      const { href } = a4;
      window.history.pushState({ href }, "", href);
      app.currentDoc = doc;
      event.preventDefault();
    }
  }, xinLocalized({ bindText: "^.title" })))), div13({
    style: {
      position: "relative",
      overflowY: "scroll",
      height: "100%"
    }
  }, button11({
    title: "show navigation",
    class: "transparent close-nav show-within-compact",
    style: {
      marginTop: "2px",
      position: "fixed"
    },
    onClick(event) {
      event.target.closest("xin-sidenav").contentVisible = false;
    }
  }, icons.chevronLeft()), markdownViewer({
    style: {
      display: "block",
      maxWidth: "44em",
      margin: "auto",
      padding: `0 1em`,
      overflow: "hidden"
    },
    bindValue: "app.currentDoc.text",
    didRender() {
      LiveExample.insertExamples(this, { xinjs: exports_module, xinjsui: exports_src });
    }
  }))));
