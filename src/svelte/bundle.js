function t() {}

function n(t) {
  return t()
}

function e() {
  return Object.create(null)
}

function o(t) {
  t.forEach(n)
}

function r(t) {
  return "function" == typeof t
}

function c(t, n) {
  return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
}

function u(t, n) {
  t.appendChild(n)
}

function i(t) {
  t.parentNode.removeChild(t)
}

function l(t) {
  return document.createTextNode(t)
}
let s;

function a(t) {
  s = t
}

function f() {
  const t = function () {
    if (!s) throw new Error("Function called outside component initialization");
    return s
  }();
  return (n, e) => {
    const o = t.$$.callbacks[n];
    if (o) {
      const r = function (t, n) {
        const e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, n), e
      }(n, e);
      o.slice().forEach((n => {
        n.call(t, r)
      }))
    }
  }
}
const d = [],
  p = [],
  $ = [],
  h = [],
  m = Promise.resolve();
let g = !1;

function b(t) {
  $.push(t)
}
let y = !1;
const _ = new Set;

function x() {
  if (!y) {
    y = !0;
    do {
      for (let t = 0; t < d.length; t += 1) {
        const n = d[t];
        a(n), v(n.$$)
      }
      for (a(null), d.length = 0; p.length;) p.pop()();
      for (let t = 0; t < $.length; t += 1) {
        const n = $[t];
        _.has(n) || (_.add(n), n())
      }
      $.length = 0
    } while (d.length);
    for (; h.length;) h.pop()();
    g = !1, y = !1, _.clear()
  }
}

function v(t) {
  if (null !== t.fragment) {
    t.update(), o(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(b)
  }
}
const E = new Set;

function k(t, n) {
  -1 === t.$$.dirty[0] && (d.push(t), g || (g = !0, m.then(x)), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31
}

function w(c, u, l, f, d, p, $ = [-1]) {
  const h = s;
  a(c);
  const m = c.$$ = {
    fragment: null,
    ctx: null,
    props: p,
    update: t,
    not_equal: d,
    bound: e(),
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(h ? h.$$.context : []),
    callbacks: e(),
    dirty: $,
    skip_bound: !1
  };
  let g = !1;
  if (m.ctx = l ? l(c, u.props || {}, ((t, n, ...e) => {
      const o = e.length ? e[0] : n;
      return m.ctx && d(m.ctx[t], m.ctx[t] = o) && (!m.skip_bound && m.bound[t] && m.bound[t](o), g && k(c, t)), n
    })) : [], m.update(), g = !0, o(m.before_update), m.fragment = !!f && f(m.ctx), u.target) {
    if (u.hydrate) {
      const t = function (t) {
        return Array.from(t.childNodes)
      }(u.target);
      m.fragment && m.fragment.l(t), t.forEach(i)
    } else m.fragment && m.fragment.c();
    u.intro && ((y = c.$$.fragment) && y.i && (E.delete(y), y.i(_))),
      function (t, e, c) {
        const {
          fragment: u,
          on_mount: i,
          on_destroy: l,
          after_update: s
        } = t.$$;
        u && u.m(e, c), b((() => {
          const e = i.map(n).filter(r);
          l ? l.push(...e) : o(e), t.$$.on_mount = []
        })), s.forEach(b)
      }(c, u.target, u.anchor), x()
  }
  var y, _;
  a(h)
}

function j(n) {
  let e, o, r, c, s;
  return {
    c() {
      var t, c, u, i;
      t = "button", e = document.createElement(t), o = l(n[0]), r = l("(Svelte)"), c = e, u = "class", null == (i = "bg-gray-800 rounded-lg text-gray-100") ? c.removeAttribute(u) : c.getAttribute(u) !== i && c.setAttribute(u, i)
    },
    m(t, i) {
      var l, a, f, d;
      ! function (t, n, e) {
        t.insertBefore(n, e || null)
      }(t, e, i), u(e, o), u(e, r), c || (l = e, a = "click", f = n[2], l.addEventListener(a, f, d), s = () => l.removeEventListener(a, f, d), c = !0)
    },
    p(t, [n]) {
      1 & n && function (t, n) {
        n = "" + n, t.wholeText !== n && (t.data = n)
      }(o, t[0])
    },
    i: t,
    o: t,
    d(t) {
      t && i(e), c = !1, s()
    }
  }
}

function A(t, n, e) {
  const o = f();
  let {
    label: r
  } = n;
  return t.$$set = t => {
    "label" in t && e(0, r = t.label)
  }, [r, o, () => o("click")]
}
export const Btn = class extends class {
  $destroy() {
    ! function (t, n) {
      const e = t.$$;
      null !== e.fragment && (o(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = [])
    }(this, 1), this.$destroy = t
  }
  $on(t, n) {
    const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return e.push(n), () => {
      const t = e.indexOf(n); - 1 !== t && e.splice(t, 1)
    }
  }
  $set(t) {
    var n;
    this.$$set && (n = t, 0 !== Object.keys(n).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
  }
} {
  constructor(t) {
    super(), w(this, t, A, j, c, {
      label: 0
    })
  }
};