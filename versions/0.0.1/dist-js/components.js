var St = Object.defineProperty;
var Tt = (t, e, n) => e in t ? St(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var w = (t, e, n) => (Tt(t, typeof e != "symbol" ? e + "" : e, n), n);
function y() {
}
const dt = (t) => t;
function ht(t) {
  return t();
}
function et() {
  return /* @__PURE__ */ Object.create(null);
}
function k(t) {
  t.forEach(ht);
}
function Y(t) {
  return typeof t == "function";
}
function mt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let R;
function nt(t, e) {
  return t === e ? !0 : (R || (R = document.createElement("a")), R.href = e, t === R.href);
}
function Nt(t) {
  return Object.keys(t).length === 0;
}
function Pt(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return y;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function At(t, e, n) {
  t.$$.on_destroy.push(Pt(e, n));
}
function it(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const pt = typeof window < "u";
let D = pt ? () => window.performance.now() : () => Date.now(), Z = pt ? (t) => requestAnimationFrame(t) : y;
const j = /* @__PURE__ */ new Set();
function _t(t) {
  j.forEach((e) => {
    e.c(t) || (j.delete(e), e.f());
  }), j.size !== 0 && Z(_t);
}
function tt(t) {
  let e;
  return j.size === 0 && Z(_t), {
    promise: new Promise((n) => {
      j.add(e = { c: t, f: n });
    }),
    abort() {
      j.delete(e);
    }
  };
}
const jt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function F(t, e) {
  t.appendChild(e);
}
function gt(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Mt(t) {
  const e = M("style");
  return e.textContent = "/* empty */", Ct(gt(t), e), e.sheet;
}
function Ct(t, e) {
  return F(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function G(t, e, n) {
  t.insertBefore(e, n || null);
}
function H(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ot(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function M(t) {
  return document.createElement(t);
}
function Ht(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function yt(t) {
  return document.createTextNode(t);
}
function bt() {
  return yt(" ");
}
function Lt() {
  return yt("");
}
function st(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function E(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ft(t) {
  return Array.from(t.childNodes);
}
function A(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Ut(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
class qt {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    w(this, "is_svg", !1);
    /** parent for creating node */
    w(this, "e");
    /** html tag nodes */
    w(this, "n");
    /** target */
    w(this, "t");
    /** anchor */
    w(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = Ht(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = M(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
    ), this.c(e)), this.i(i);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      G(this.t, this.n[n], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(H);
  }
}
const V = /* @__PURE__ */ new Map();
let x = 0;
function Rt(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function zt(t, e) {
  const n = { stylesheet: Mt(e), rules: {} };
  return V.set(t, n), n;
}
function wt(t, e, n, i, o, f, d, l = 0) {
  const r = 16.666 / i;
  let s = `{
`;
  for (let _ = 0; _ <= 1; _ += r) {
    const g = e + (n - e) * f(_);
    s += _ * 100 + `%{${d(g, 1 - g)}}
`;
  }
  const c = s + `100% {${d(n, 1 - n)}}
}`, a = `__svelte_${Rt(c)}_${l}`, h = gt(t), { stylesheet: u, rules: m } = V.get(h) || zt(h, t);
  m[a] || (m[a] = !0, u.insertRule(`@keyframes ${a} ${c}`, u.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${a} ${i}ms linear ${o}ms 1 both`, x += 1, a;
}
function K(t, e) {
  const n = (t.style.animation || "").split(", "), i = n.filter(
    e ? (f) => f.indexOf(e) < 0 : (f) => f.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = n.length - i.length;
  o && (t.style.animation = i.join(", "), x -= o, x || Dt());
}
function Dt() {
  Z(() => {
    x || (V.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && H(e);
    }), V.clear());
  });
}
let q;
function U(t) {
  q = t;
}
function Vt() {
  if (!q)
    throw new Error("Function called outside component initialization");
  return q;
}
function xt(t) {
  Vt().$$.on_mount.push(t);
}
const P = [], B = [];
let C = [];
const ot = [], Bt = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function It() {
  Q || (Q = !0, Bt.then($t));
}
function O(t) {
  C.push(t);
}
const J = /* @__PURE__ */ new Set();
let T = 0;
function $t() {
  if (T !== 0)
    return;
  const t = q;
  do {
    try {
      for (; T < P.length; ) {
        const e = P[T];
        T++, U(e), Yt(e.$$);
      }
    } catch (e) {
      throw P.length = 0, T = 0, e;
    }
    for (U(null), P.length = 0, T = 0; B.length; )
      B.pop()();
    for (let e = 0; e < C.length; e += 1) {
      const n = C[e];
      J.has(n) || (J.add(n), n());
    }
    C.length = 0;
  } while (P.length);
  for (; ot.length; )
    ot.pop()();
  Q = !1, J.clear(), U(t);
}
function Yt(t) {
  if (t.fragment !== null) {
    t.update(), k(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O);
  }
}
function Gt(t) {
  const e = [], n = [];
  C.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), C = e;
}
let L;
function Et() {
  return L || (L = Promise.resolve(), L.then(() => {
    L = null;
  })), L;
}
function I(t, e, n) {
  t.dispatchEvent(Ut(`${e ? "intro" : "outro"}${n}`));
}
const z = /* @__PURE__ */ new Set();
let $;
function Jt() {
  $ = {
    r: 0,
    c: [],
    p: $
    // parent group
  };
}
function Kt() {
  $.r || k($.c), $ = $.p;
}
function W(t, e) {
  t && t.i && (z.delete(t), t.i(e));
}
function Qt(t, e, n, i) {
  if (t && t.o) {
    if (z.has(t))
      return;
    z.add(t), $.c.push(() => {
      z.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
const kt = { duration: 0 };
function Wt(t, e, n) {
  const i = { direction: "in" };
  let o = e(t, n, i), f = !1, d, l, r = 0;
  function s() {
    d && K(t, d);
  }
  function c() {
    const {
      delay: h = 0,
      duration: u = 300,
      easing: m = dt,
      tick: p = y,
      css: _
    } = o || kt;
    _ && (d = wt(t, 0, 1, u, h, m, _, r++)), p(0, 1);
    const g = D() + h, v = g + u;
    l && l.abort(), f = !0, O(() => I(t, !0, "start")), l = tt((b) => {
      if (f) {
        if (b >= v)
          return p(1, 0), I(t, !0, "end"), s(), f = !1;
        if (b >= g) {
          const S = m((b - g) / u);
          p(S, 1 - S);
        }
      }
      return f;
    });
  }
  let a = !1;
  return {
    start() {
      a || (a = !0, K(t), Y(o) ? (o = o(i), Et().then(c)) : c());
    },
    invalidate() {
      a = !1;
    },
    end() {
      f && (s(), f = !1);
    }
  };
}
function Xt(t, e, n) {
  const i = { direction: "out" };
  let o = e(t, n, i), f = !0, d;
  const l = $;
  l.r += 1;
  let r;
  function s() {
    const {
      delay: c = 0,
      duration: a = 300,
      easing: h = dt,
      tick: u = y,
      css: m
    } = o || kt;
    m && (d = wt(t, 1, 0, a, c, h, m));
    const p = D() + c, _ = p + a;
    O(() => I(t, !1, "start")), "inert" in t && (r = /** @type {HTMLElement} */
    t.inert, t.inert = !0), tt((g) => {
      if (f) {
        if (g >= _)
          return u(0, 1), I(t, !1, "end"), --l.r || k(l.c), !1;
        if (g >= p) {
          const v = h((g - p) / a);
          u(1 - v, v);
        }
      }
      return f;
    });
  }
  return Y(o) ? Et().then(() => {
    o = o(i), s();
  }) : s(), {
    end(c) {
      c && "inert" in t && (t.inert = r), c && o.tick && o.tick(1, 0), f && (d && K(t, d), f = !1);
    }
  };
}
function rt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Zt(t, e, n) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), O(() => {
    const f = t.$$.on_mount.map(ht).filter(Y);
    t.$$.on_destroy ? t.$$.on_destroy.push(...f) : k(f), t.$$.on_mount = [];
  }), o.forEach(O);
}
function te(t, e) {
  const n = t.$$;
  n.fragment !== null && (Gt(n.after_update), k(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ee(t, e) {
  t.$$.dirty[0] === -1 && (P.push(t), It(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ne(t, e, n, i, o, f, d = null, l = [-1]) {
  const r = q;
  U(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: y,
    not_equal: o,
    bound: et(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: et(),
    dirty: l,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  d && d(s.root);
  let c = !1;
  if (s.ctx = n ? n(t, e.props || {}, (a, h, ...u) => {
    const m = u.length ? u[0] : h;
    return s.ctx && o(s.ctx[a], s.ctx[a] = m) && (!s.skip_bound && s.bound[a] && s.bound[a](m), c && ee(t, a)), h;
  }) : [], s.update(), c = !0, k(s.before_update), s.fragment = i ? i(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = Ft(e.target);
      s.fragment && s.fragment.l(a), a.forEach(H);
    } else
      s.fragment && s.fragment.c();
    e.intro && W(t.$$.fragment), Zt(t, e.target, e.anchor), $t();
  }
  U(r);
}
class ie {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    w(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    w(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    te(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Y(n))
      return y;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Nt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const se = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(se);
const N = [];
function oe(t, e = y) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function o(l) {
    if (mt(t, l) && (t = l, n)) {
      const r = !N.length;
      for (const s of i)
        s[1](), N.push(s, t);
      if (r) {
        for (let s = 0; s < N.length; s += 2)
          N[s][0](N[s + 1]);
        N.length = 0;
      }
    }
  }
  function f(l) {
    o(l(t));
  }
  function d(l, r = y) {
    const s = [l, r];
    return i.add(s), i.size === 1 && (n = e(o, f) || y), l(t), () => {
      i.delete(s), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: f, subscribe: d };
}
function ft(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function X(t, e, n, i) {
  if (typeof n == "number" || ft(n)) {
    const o = i - n, f = (n - e) / (t.dt || 1 / 60), d = t.opts.stiffness * o, l = t.opts.damping * f, r = (d - l) * t.inv_mass, s = (f + r) * t.dt;
    return Math.abs(s) < t.opts.precision && Math.abs(o) < t.opts.precision ? i : (t.settled = !1, ft(n) ? new Date(n.getTime() + s) : n + s);
  } else {
    if (Array.isArray(n))
      return n.map(
        (o, f) => X(t, e[f], n[f], i[f])
      );
    if (typeof n == "object") {
      const o = {};
      for (const f in n)
        o[f] = X(t, e[f], n[f], i[f]);
      return o;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function re(t, e = {}) {
  const n = oe(t), { stiffness: i = 0.15, damping: o = 0.8, precision: f = 0.01 } = e;
  let d, l, r, s = t, c = t, a = 1, h = 0, u = !1;
  function m(_, g = {}) {
    c = _;
    const v = r = {};
    return t == null || g.hard || p.stiffness >= 1 && p.damping >= 1 ? (u = !0, d = D(), s = _, n.set(t = c), Promise.resolve()) : (g.soft && (h = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60), a = 0), l || (d = D(), u = !1, l = tt((b) => {
      if (u)
        return u = !1, l = null, !1;
      a = Math.min(a + h, 1);
      const S = {
        inv_mass: a,
        opts: p,
        settled: !0,
        dt: (b - d) * 60 / 1e3
      }, vt = X(S, s, t, c);
      return d = b, s = t, n.set(t = vt), S.settled && (l = null), !S.settled;
    })), new Promise((b) => {
      l.promise.then(() => {
        v === r && b();
      });
    }));
  }
  const p = {
    set: m,
    update: (_, g) => m(_(c, t), g),
    subscribe: n.subscribe,
    stiffness: i,
    damping: o,
    precision: f
  };
  return p;
}
function fe(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function lt(t, { delay: e = 0, duration: n = 400, easing: i = fe, x: o = 0, y: f = 0, opacity: d = 0 } = {}) {
  const l = getComputedStyle(t), r = +l.opacity, s = l.transform === "none" ? "" : l.transform, c = r * (1 - d), [a, h] = it(o), [u, m] = it(f);
  return {
    delay: e,
    duration: n,
    easing: i,
    css: (p, _) => `
			transform: ${s} translate(${(1 - p) * a}${h}, ${(1 - p) * u}${m});
			opacity: ${r - c * _}`
  };
}
const { window: le } = jt;
function ct(t, e, n) {
  const i = t.slice();
  return i[10] = e[n], i;
}
function ut(t) {
  let e, n, i = (
    /*animation*/
    t[10].html + ""
  ), o, f, d, l;
  return {
    c() {
      e = M("div"), n = new qt(!1), o = bt(), n.a = o, E(e, "class", "unstable3d__animation-item svelte-1e66j3g"), A(
        e,
        "left",
        /*animation*/
        t[10].position.x
      ), A(
        e,
        "top",
        /*animation*/
        t[10].position.y
      );
    },
    m(r, s) {
      G(r, e, s), n.m(i, e), F(e, o), l = !0;
    },
    p(r, s) {
      t = r, (!l || s & /*animations*/
      4) && i !== (i = /*animation*/
      t[10].html + "") && n.p(i), (!l || s & /*animations*/
      4) && A(
        e,
        "left",
        /*animation*/
        t[10].position.x
      ), (!l || s & /*animations*/
      4) && A(
        e,
        "top",
        /*animation*/
        t[10].position.y
      );
    },
    i(r) {
      l || (r && O(() => {
        l && (d && d.end(1), f = Wt(
          e,
          lt,
          /*animation*/
          t[10].enter.transition.data
        ), f.start());
      }), l = !0);
    },
    o(r) {
      f && f.invalidate(), r && (d = Xt(
        e,
        lt,
        /*animation*/
        t[10].leave.transition.data
      )), l = !1;
    },
    d(r) {
      r && H(e), r && d && d.end();
    }
  };
}
function at(t) {
  let e, n = (
    /*$currentTimeSpring*/
    t[5] >= /*animation*/
    t[10].enter.time && /*$currentTimeSpring*/
    t[5] <= /*animation*/
    t[10].leave.time && ut(t)
  );
  return {
    c() {
      n && n.c(), e = Lt();
    },
    m(i, o) {
      n && n.m(i, o), G(i, e, o);
    },
    p(i, o) {
      /*$currentTimeSpring*/
      i[5] >= /*animation*/
      i[10].enter.time && /*$currentTimeSpring*/
      i[5] <= /*animation*/
      i[10].leave.time ? n ? (n.p(i, o), o & /*$currentTimeSpring, animations*/
      36 && W(n, 1)) : (n = ut(i), n.c(), W(n, 1), n.m(e.parentNode, e)) : n && (Jt(), Qt(n, 1, 1, () => {
        n = null;
      }), Kt());
    },
    d(i) {
      i && H(e), n && n.d(i);
    }
  };
}
function ce(t) {
  let e, n, i, o, f, d, l, r = rt(
    /*animations*/
    t[2]
  ), s = [];
  for (let c = 0; c < r.length; c += 1)
    s[c] = at(ct(t, r, c));
  return {
    c() {
      e = M("div"), n = M("div"), i = M("video"), f = bt();
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      E(i, "class", "unstable3d__video svelte-1e66j3g"), i.muted = !0, E(i, "preload", "metadata"), nt(i.src, o = /*videoUrl*/
      t[0]) || E(i, "src", o), E(n, "class", "unstable3d__animation-layer svelte-1e66j3g"), E(e, "class", "unstable3d__track svelte-1e66j3g"), A(
        e,
        "height",
        /*trackHeightPx*/
        t[1] + "px"
      );
    },
    m(c, a) {
      G(c, e, a), F(e, n), F(n, i), t[8](i), F(n, f);
      for (let h = 0; h < s.length; h += 1)
        s[h] && s[h].m(n, null);
      t[9](e), d || (l = [
        st(
          le,
          "scroll",
          /*onLoadedVideo*/
          t[7]
        ),
        st(
          i,
          "loadedmetadata",
          /*onLoadedVideo*/
          t[7]
        )
      ], d = !0);
    },
    p(c, [a]) {
      if (a & /*videoUrl*/
      1 && !nt(i.src, o = /*videoUrl*/
      c[0]) && E(i, "src", o), a & /*animations, $currentTimeSpring*/
      36) {
        r = rt(
          /*animations*/
          c[2]
        );
        let h;
        for (h = 0; h < r.length; h += 1) {
          const u = ct(c, r, h);
          s[h] ? s[h].p(u, a) : (s[h] = at(u), s[h].c(), s[h].m(n, null));
        }
        for (; h < s.length; h += 1)
          s[h].d(1);
        s.length = r.length;
      }
      a & /*trackHeightPx*/
      2 && A(
        e,
        "height",
        /*trackHeightPx*/
        c[1] + "px"
      );
    },
    i: y,
    o: y,
    d(c) {
      c && H(e), t[8](null), Ot(s, c), t[9](null), d = !1, k(l);
    }
  };
}
function ue(t, e, n) {
  let i, { videoUrl: o } = e, { trackHeightPx: f } = e, { animations: d } = e, l, r, s = re(0);
  At(t, s, (u) => n(5, i = u));
  const c = () => {
    requestAnimationFrame(async () => {
      if (!r || !l || !(r != null && r.duration))
        return !1;
      const m = window.scrollY + l.getBoundingClientRect().top, p = (window.scrollY - m) / (l.scrollHeight - window.innerHeight), _ = Math.min(Math.max(p, 0), 1);
      s.set(r.duration * _);
    });
  };
  xt(() => (r.readyState > 2 && c(), s.subscribe(async (m) => {
    await r.play(), n(4, r.currentTime = m, r), r.pause();
  })));
  function a(u) {
    B[u ? "unshift" : "push"](() => {
      r = u, n(4, r);
    });
  }
  function h(u) {
    B[u ? "unshift" : "push"](() => {
      l = u, n(3, l);
    });
  }
  return t.$$set = (u) => {
    "videoUrl" in u && n(0, o = u.videoUrl), "trackHeightPx" in u && n(1, f = u.trackHeightPx), "animations" in u && n(2, d = u.animations);
  }, [
    o,
    f,
    d,
    l,
    r,
    i,
    s,
    c,
    a,
    h
  ];
}
class de extends ie {
  constructor(e) {
    super(), ne(this, e, ue, ce, mt, {
      videoUrl: 0,
      trackHeightPx: 1,
      animations: 2
    });
  }
}
export {
  de as VideoScroller
};
