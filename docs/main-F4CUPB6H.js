import {
  $ as S,
  $a as Ke,
  A as Ln,
  Aa as xo,
  Ab as Vo,
  B as at,
  Ba as Ve,
  Bb as Yn,
  C as uo,
  Ca as x,
  Cb as Wo,
  D as mo,
  Da as Io,
  Db as Ho,
  E as Jt,
  Ea as Eo,
  F as ut,
  Fa as Co,
  G as jn,
  Ga as Tt,
  H as ho,
  Ha as To,
  I as po,
  Ia as Wn,
  J as Le,
  Ja as Hn,
  K as je,
  Ka as Rt,
  L as K,
  La as pt,
  M as Lt,
  Ma as re,
  N as M,
  Na as W,
  O as C,
  Oa as Z,
  P as mt,
  Pa as A,
  Q as v,
  Qa as qn,
  R as T,
  Ra as zt,
  S as fo,
  Sa as ct,
  T as w,
  Ta as Gn,
  U as Un,
  Ua as We,
  V as p,
  Va as He,
  W as m,
  Wa as H,
  X as zn,
  Xa as ft,
  Y as bo,
  Ya as qe,
  Z as te,
  Za as Ro,
  _ as k,
  _a as Ge,
  a as u,
  aa as R,
  ab as Kn,
  b as F,
  ba as J,
  bb as Ao,
  c as ao,
  ca as jt,
  cb as Zn,
  d as Sn,
  da as go,
  db as Ze,
  e as so,
  ea as ee,
  eb as ae,
  f as Mn,
  fa as st,
  fb as Do,
  g as kn,
  ga as Ue,
  gb as Ye,
  h as On,
  ha as Bn,
  hb as So,
  i as $,
  ia as $n,
  ib as Xe,
  j as U,
  ja as Vn,
  jb as Mo,
  k as lt,
  ka as ze,
  kb as ko,
  l as z,
  la as B,
  lb as Oo,
  m as f,
  ma as Et,
  mb as tt,
  n as Qt,
  na as vo,
  nb as No,
  o as co,
  oa as ne,
  ob as Qe,
  p as lo,
  pa as yo,
  pb as Fo,
  q as y,
  qa as ht,
  qb as Po,
  r as Ft,
  ra as Ct,
  rb as D,
  s as V,
  sa as ie,
  sb as Lo,
  t as Nn,
  ta as Be,
  tb as se,
  u as Pe,
  ua as _o,
  ub as jo,
  v as Fn,
  va as oe,
  vb as Uo,
  w as rt,
  wa as E,
  wb as ce,
  x as Pt,
  xa as Ut,
  xb as zo,
  y as It,
  ya as wo,
  yb as Bo,
  z as Pn,
  za as $e,
  zb as $o,
} from "./chunk-6CNX4AE4.js";
var tn = class e {
  constructor(t) {
    (this.normalizedNames = new Map()),
      (this.lazyUpdate = null),
      t
        ? typeof t == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                t
                  .split(
                    `
`,
                  )
                  .forEach((o) => {
                    let n = o.indexOf(":");
                    if (n > 0) {
                      let i = o.slice(0, n),
                        r = i.toLowerCase(),
                        a = o.slice(n + 1).trim();
                      this.maybeSetNormalizedName(i, r),
                        this.headers.has(r)
                          ? this.headers.get(r).push(a)
                          : this.headers.set(r, [a]);
                    }
                  });
            })
          : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((o, n) => {
                this.setHeaderEntries(n, o);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(t).forEach(([o, n]) => {
                    this.setHeaderEntries(o, n);
                  });
              })
        : (this.headers = new Map());
  }
  has(t) {
    return this.init(), this.headers.has(t.toLowerCase());
  }
  get(t) {
    this.init();
    let o = this.headers.get(t.toLowerCase());
    return o && o.length > 0 ? o[0] : null;
  }
  keys() {
    return this.init(), Array.from(this.normalizedNames.values());
  }
  getAll(t) {
    return this.init(), this.headers.get(t.toLowerCase()) || null;
  }
  append(t, o) {
    return this.clone({ name: t, value: o, op: "a" });
  }
  set(t, o) {
    return this.clone({ name: t, value: o, op: "s" });
  }
  delete(t, o) {
    return this.clone({ name: t, value: o, op: "d" });
  }
  maybeSetNormalizedName(t, o) {
    this.normalizedNames.has(o) || this.normalizedNames.set(o, t);
  }
  init() {
    this.lazyInit &&
      (this.lazyInit instanceof e
        ? this.copyFrom(this.lazyInit)
        : this.lazyInit(),
      (this.lazyInit = null),
      this.lazyUpdate &&
        (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
        (this.lazyUpdate = null)));
  }
  copyFrom(t) {
    t.init(),
      Array.from(t.headers.keys()).forEach((o) => {
        this.headers.set(o, t.headers.get(o)),
          this.normalizedNames.set(o, t.normalizedNames.get(o));
      });
  }
  clone(t) {
    let o = new e();
    return (
      (o.lazyInit =
        this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this),
      (o.lazyUpdate = (this.lazyUpdate || []).concat([t])),
      o
    );
  }
  applyUpdate(t) {
    let o = t.name.toLowerCase();
    switch (t.op) {
      case "a":
      case "s":
        let n = t.value;
        if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
        this.maybeSetNormalizedName(t.name, o);
        let i = (t.op === "a" ? this.headers.get(o) : void 0) || [];
        i.push(...n), this.headers.set(o, i);
        break;
      case "d":
        let r = t.value;
        if (!r) this.headers.delete(o), this.normalizedNames.delete(o);
        else {
          let a = this.headers.get(o);
          if (!a) return;
          (a = a.filter((s) => r.indexOf(s) === -1)),
            a.length === 0
              ? (this.headers.delete(o), this.normalizedNames.delete(o))
              : this.headers.set(o, a);
        }
        break;
    }
  }
  setHeaderEntries(t, o) {
    let n = (Array.isArray(o) ? o : [o]).map((r) => r.toString()),
      i = t.toLowerCase();
    this.headers.set(i, n), this.maybeSetNormalizedName(t, i);
  }
  forEach(t) {
    this.init(),
      Array.from(this.normalizedNames.keys()).forEach((o) =>
        t(this.normalizedNames.get(o), this.headers.get(o)),
      );
  }
};
var Qo = (function (e) {
    return (
      (e[(e.Sent = 0)] = "Sent"),
      (e[(e.UploadProgress = 1)] = "UploadProgress"),
      (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
      (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
      (e[(e.Response = 4)] = "Response"),
      (e[(e.User = 5)] = "User"),
      e
    );
  })(Qo || {}),
  Xn = class {
    constructor(t, o = Jo.Ok, n = "OK") {
      (this.headers = t.headers || new tn()),
        (this.status = t.status !== void 0 ? t.status : o),
        (this.statusText = t.statusText || n),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  };
var en = class e extends Xn {
  constructor(t = {}) {
    super(t),
      (this.type = Qo.Response),
      (this.body = t.body !== void 0 ? t.body : null);
  }
  clone(t = {}) {
    return new e({
      body: t.body !== void 0 ? t.body : this.body,
      headers: t.headers || this.headers,
      status: t.status !== void 0 ? t.status : this.status,
      statusText: t.statusText || this.statusText,
      url: t.url || this.url || void 0,
    });
  }
};
var Jo = (function (e) {
  return (
    (e[(e.Continue = 100)] = "Continue"),
    (e[(e.SwitchingProtocols = 101)] = "SwitchingProtocols"),
    (e[(e.Processing = 102)] = "Processing"),
    (e[(e.EarlyHints = 103)] = "EarlyHints"),
    (e[(e.Ok = 200)] = "Ok"),
    (e[(e.Created = 201)] = "Created"),
    (e[(e.Accepted = 202)] = "Accepted"),
    (e[(e.NonAuthoritativeInformation = 203)] = "NonAuthoritativeInformation"),
    (e[(e.NoContent = 204)] = "NoContent"),
    (e[(e.ResetContent = 205)] = "ResetContent"),
    (e[(e.PartialContent = 206)] = "PartialContent"),
    (e[(e.MultiStatus = 207)] = "MultiStatus"),
    (e[(e.AlreadyReported = 208)] = "AlreadyReported"),
    (e[(e.ImUsed = 226)] = "ImUsed"),
    (e[(e.MultipleChoices = 300)] = "MultipleChoices"),
    (e[(e.MovedPermanently = 301)] = "MovedPermanently"),
    (e[(e.Found = 302)] = "Found"),
    (e[(e.SeeOther = 303)] = "SeeOther"),
    (e[(e.NotModified = 304)] = "NotModified"),
    (e[(e.UseProxy = 305)] = "UseProxy"),
    (e[(e.Unused = 306)] = "Unused"),
    (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
    (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"),
    (e[(e.BadRequest = 400)] = "BadRequest"),
    (e[(e.Unauthorized = 401)] = "Unauthorized"),
    (e[(e.PaymentRequired = 402)] = "PaymentRequired"),
    (e[(e.Forbidden = 403)] = "Forbidden"),
    (e[(e.NotFound = 404)] = "NotFound"),
    (e[(e.MethodNotAllowed = 405)] = "MethodNotAllowed"),
    (e[(e.NotAcceptable = 406)] = "NotAcceptable"),
    (e[(e.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
    (e[(e.RequestTimeout = 408)] = "RequestTimeout"),
    (e[(e.Conflict = 409)] = "Conflict"),
    (e[(e.Gone = 410)] = "Gone"),
    (e[(e.LengthRequired = 411)] = "LengthRequired"),
    (e[(e.PreconditionFailed = 412)] = "PreconditionFailed"),
    (e[(e.PayloadTooLarge = 413)] = "PayloadTooLarge"),
    (e[(e.UriTooLong = 414)] = "UriTooLong"),
    (e[(e.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
    (e[(e.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
    (e[(e.ExpectationFailed = 417)] = "ExpectationFailed"),
    (e[(e.ImATeapot = 418)] = "ImATeapot"),
    (e[(e.MisdirectedRequest = 421)] = "MisdirectedRequest"),
    (e[(e.UnprocessableEntity = 422)] = "UnprocessableEntity"),
    (e[(e.Locked = 423)] = "Locked"),
    (e[(e.FailedDependency = 424)] = "FailedDependency"),
    (e[(e.TooEarly = 425)] = "TooEarly"),
    (e[(e.UpgradeRequired = 426)] = "UpgradeRequired"),
    (e[(e.PreconditionRequired = 428)] = "PreconditionRequired"),
    (e[(e.TooManyRequests = 429)] = "TooManyRequests"),
    (e[(e.RequestHeaderFieldsTooLarge = 431)] = "RequestHeaderFieldsTooLarge"),
    (e[(e.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
    (e[(e.InternalServerError = 500)] = "InternalServerError"),
    (e[(e.NotImplemented = 501)] = "NotImplemented"),
    (e[(e.BadGateway = 502)] = "BadGateway"),
    (e[(e.ServiceUnavailable = 503)] = "ServiceUnavailable"),
    (e[(e.GatewayTimeout = 504)] = "GatewayTimeout"),
    (e[(e.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
    (e[(e.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
    (e[(e.InsufficientStorage = 507)] = "InsufficientStorage"),
    (e[(e.LoopDetected = 508)] = "LoopDetected"),
    (e[(e.NotExtended = 510)] = "NotExtended"),
    (e[(e.NetworkAuthenticationRequired = 511)] =
      "NetworkAuthenticationRequired"),
    e
  );
})(Jo || {});
var Ua = new w("");
var qo = "b",
  Go = "h",
  Ko = "s",
  Zo = "st",
  Yo = "u",
  Xo = "rt",
  Je = new w(""),
  za = ["GET", "HEAD"];
function Ba(e, t) {
  let l = m(Je),
    { isCacheActive: o } = l,
    n = ao(l, ["isCacheActive"]),
    { transferCache: i, method: r } = e;
  if (
    !o ||
    (r === "POST" && !n.includePostRequests && !i) ||
    (r !== "POST" && !za.includes(r)) ||
    e.headers.has("authorization") ||
    e.headers.has("proxy-authorization") ||
    i === !1 ||
    n.filter?.(e) === !1
  )
    return t(e);
  let a = m(Be),
    s = Va(e),
    d = a.get(s, null),
    c = n.includeHeaders;
  if ((typeof i == "object" && i.includeHeaders && (c = i.includeHeaders), d)) {
    let { [qo]: h, [Xo]: b, [Go]: I, [Ko]: Q, [Zo]: P, [Yo]: dt } = d,
      j = h;
    switch (b) {
      case "arraybuffer":
        j = new TextEncoder().encode(h).buffer;
        break;
      case "blob":
        j = new Blob([h]);
        break;
    }
    let Nt = new tn(I);
    return f(
      new en({ body: j, headers: Nt, status: Q, statusText: P, url: dt }),
    );
  }
  return t(e).pipe(
    M((h) => {
      h instanceof en &&
        a.set(s, {
          [qo]: h.body,
          [Go]: $a(h.headers, c),
          [Ko]: h.status,
          [Zo]: h.statusText,
          [Yo]: h.url || "",
          [Xo]: e.responseType,
        });
    }),
  );
}
function $a(e, t) {
  if (!t) return {};
  let o = {};
  for (let n of t) {
    let i = e.getAll(n);
    i !== null && (o[n] = i);
  }
  return o;
}
function Va(e) {
  let { params: t, method: o, responseType: n, url: i, body: r } = e,
    a = t
      .keys()
      .sort()
      .map((l) => `${l}=${t.getAll(l)}`)
      .join("&"),
    d = [o, n, i, typeof r == "string" ? r : "", a].join("|"),
    c = Wa(d);
  return c;
}
function Wa(e) {
  let t = 0;
  for (let o of e) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), t.toString();
}
function tr(e) {
  return [
    {
      provide: Je,
      useFactory: () => (
        Ve("NgHttpTransferCache"), u({ isCacheActive: !0 }, e)
      ),
    },
    { provide: Ua, useValue: Ba, multi: !0, deps: [Be, Je] },
    {
      provide: Ze,
      multi: !0,
      useFactory: () => {
        let t = m(ae),
          o = m(Je);
        return () => {
          Do(t).then(() => {
            o.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
var ti = class extends Po {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  ei = class e extends ti {
    static makeCurrent() {
      Fo(new e());
    }
    onAndCancel(t, o, n) {
      return (
        t.addEventListener(o, n),
        () => {
          t.removeEventListener(o, n);
        }
      );
    }
    dispatchEvent(t, o) {
      t.dispatchEvent(o);
    }
    remove(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    createElement(t, o) {
      return (o = o || this.getDefaultDocument()), o.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, o) {
      return o === "window"
        ? window
        : o === "document"
          ? t
          : o === "body"
            ? t.body
            : null;
    }
    getBaseHref(t) {
      let o = qa();
      return o == null ? null : Ga(o);
    }
    resetBaseElement() {
      de = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return zo(document.cookie, t);
    }
  },
  de = null;
function qa() {
  return (
    (de = de || document.querySelector("base")),
    de ? de.getAttribute("href") : null
  );
}
function Ga(e) {
  return new URL(e, document.baseURI).pathname;
}
var ni = class {
    addToWindow(t) {
      (mt.getAngularTestability = (n, i = !0) => {
        let r = t.findTestabilityInTree(n, i);
        if (r == null) throw new C(5103, !1);
        return r;
      }),
        (mt.getAllAngularTestabilities = () => t.getAllTestabilities()),
        (mt.getAllAngularRootElements = () => t.getAllRootElements());
      let o = (n) => {
        let i = mt.getAllAngularTestabilities(),
          r = i.length,
          a = function () {
            r--, r == 0 && n();
          };
        i.forEach((s) => {
          s.whenStable(a);
        });
      };
      mt.frameworkStabilizers || (mt.frameworkStabilizers = []),
        mt.frameworkStabilizers.push(o);
    }
    findTestabilityInTree(t, o, n) {
      if (o == null) return null;
      let i = t.getTestability(o);
      return (
        i ??
        (n
          ? Qe().isShadowRoot(o)
            ? this.findTestabilityInTree(t, o.host, !0)
            : this.findTestabilityInTree(t, o.parentElement, !0)
          : null)
      );
    }
  },
  Ka = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  ii = new w(""),
  or = (() => {
    let t = class t {
      constructor(n, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          n.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = n.slice().reverse());
      }
      addEventListener(n, i, r) {
        return this._findPluginFor(i).addEventListener(n, i, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(n) {
        let i = this._eventNameToPlugin.get(n);
        if (i) return i;
        if (((i = this._plugins.find((a) => a.supports(n))), !i))
          throw new C(5101, !1);
        return this._eventNameToPlugin.set(n, i), i;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(ii), p(x));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  nn = class {
    constructor(t) {
      this._doc = t;
    }
  },
  Qn = "ng-app-id",
  rr = (() => {
    let t = class t {
      constructor(n, i, r, a = {}) {
        (this.doc = n),
          (this.appId = i),
          (this.nonce = r),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Yn(a)),
          this.resetHostNodes();
      }
      addStyles(n) {
        for (let i of n)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(n) {
        for (let i of n)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let n = this.styleNodesInDOM;
        n && (n.forEach((i) => i.remove()), n.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(n) {
        this.hostNodes.add(n);
        for (let i of this.getAllStyles()) this.addStyleToHost(n, i);
      }
      removeHost(n) {
        this.hostNodes.delete(n);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(n) {
        for (let i of this.hostNodes) this.addStyleToHost(i, n);
      }
      onStyleRemoved(n) {
        let i = this.styleRef;
        i.get(n)?.elements?.forEach((r) => r.remove()), i.delete(n);
      }
      collectServerRenderedStyles() {
        let n = this.doc.head?.querySelectorAll(`style[${Qn}="${this.appId}"]`);
        if (n?.length) {
          let i = new Map();
          return (
            n.forEach((r) => {
              r.textContent != null && i.set(r.textContent, r);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(n, i) {
        let r = this.styleRef;
        if (r.has(n)) {
          let a = r.get(n);
          return (a.usage += i), a.usage;
        }
        return r.set(n, { usage: i, elements: [] }), i;
      }
      getStyleElement(n, i) {
        let r = this.styleNodesInDOM,
          a = r?.get(i);
        if (a?.parentNode === n) return r.delete(i), a.removeAttribute(Qn), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = i),
            this.platformIsServer && s.setAttribute(Qn, this.appId),
            n.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(n, i) {
        let r = this.getStyleElement(n, i),
          a = this.styleRef,
          s = a.get(i)?.elements;
        s ? s.push(r) : a.set(i, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let n = this.hostNodes;
        n.clear(), n.add(this.doc.head);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(D), p(ne), p(ie, 8), p(ht));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Jn = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  ai = /%COMP%/g,
  ar = "%COMP%",
  Za = `_nghost-${ar}`,
  Ya = `_ngcontent-${ar}`,
  Xa = !0,
  Qa = new w("", { providedIn: "root", factory: () => Xa });
function Ja(e) {
  return Ya.replace(ai, e);
}
function ts(e) {
  return Za.replace(ai, e);
}
function sr(e, t) {
  return t.map((o) => o.replace(ai, e));
}
var on = (() => {
    let t = class t {
      constructor(n, i, r, a, s, d, c, l = null) {
        (this.eventManager = n),
          (this.sharedStylesHost = i),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = s),
          (this.platformId = d),
          (this.ngZone = c),
          (this.nonce = l),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Yn(d)),
          (this.defaultRenderer = new le(n, s, c, this.platformIsServer));
      }
      createRenderer(n, i) {
        if (!n || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === te.ShadowDom &&
          (i = F(u({}, i), { encapsulation: te.Emulated }));
        let r = this.getOrCreateRenderer(n, i);
        return (
          r instanceof rn
            ? r.applyToHost(n)
            : r instanceof ue && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(n, i) {
        let r = this.rendererByCompId,
          a = r.get(i.id);
        if (!a) {
          let s = this.doc,
            d = this.ngZone,
            c = this.eventManager,
            l = this.sharedStylesHost,
            h = this.removeStylesOnCompDestroy,
            b = this.platformIsServer;
          switch (i.encapsulation) {
            case te.Emulated:
              a = new rn(c, l, i, this.appId, h, s, d, b);
              break;
            case te.ShadowDom:
              return new oi(c, l, n, i, s, d, this.nonce, b);
            default:
              a = new ue(c, l, i, h, s, d, b);
              break;
          }
          r.set(i.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(or), p(rr), p(ne), p(Qa), p(D), p(ht), p(x), p(ie));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  le = class {
    constructor(t, o, n, i) {
      (this.eventManager = t),
        (this.doc = o),
        (this.ngZone = n),
        (this.platformIsServer = i),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, o) {
      return o
        ? this.doc.createElementNS(Jn[o] || o, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, o) {
      (er(t) ? t.content : t).appendChild(o);
    }
    insertBefore(t, o, n) {
      t && (er(t) ? t.content : t).insertBefore(o, n);
    }
    removeChild(t, o) {
      t && t.removeChild(o);
    }
    selectRootElement(t, o) {
      let n = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!n) throw new C(-5104, !1);
      return o || (n.textContent = ""), n;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, o, n, i) {
      if (i) {
        o = i + ":" + o;
        let r = Jn[i];
        r ? t.setAttributeNS(r, o, n) : t.setAttribute(o, n);
      } else t.setAttribute(o, n);
    }
    removeAttribute(t, o, n) {
      if (n) {
        let i = Jn[n];
        i ? t.removeAttributeNS(i, o) : t.removeAttribute(`${n}:${o}`);
      } else t.removeAttribute(o);
    }
    addClass(t, o) {
      t.classList.add(o);
    }
    removeClass(t, o) {
      t.classList.remove(o);
    }
    setStyle(t, o, n, i) {
      i & (oe.DashCase | oe.Important)
        ? t.style.setProperty(o, n, i & oe.Important ? "important" : "")
        : (t.style[o] = n);
    }
    removeStyle(t, o, n) {
      n & oe.DashCase ? t.style.removeProperty(o) : (t.style[o] = "");
    }
    setProperty(t, o, n) {
      t != null && (t[o] = n);
    }
    setValue(t, o) {
      t.nodeValue = o;
    }
    listen(t, o, n) {
      if (
        typeof t == "string" &&
        ((t = Qe().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${o}`);
      return this.eventManager.addEventListener(
        t,
        o,
        this.decoratePreventDefault(n),
      );
    }
    decoratePreventDefault(t) {
      return (o) => {
        if (o === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(o)) : t(o)) ===
          !1 && o.preventDefault();
      };
    }
  };
function er(e) {
  return e.tagName === "TEMPLATE" && e.content !== void 0;
}
var oi = class extends le {
    constructor(t, o, n, i, r, a, s, d) {
      super(t, r, a, d),
        (this.sharedStylesHost = o),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = sr(i.id, i.styles);
      for (let l of c) {
        let h = document.createElement("style");
        s && h.setAttribute("nonce", s),
          (h.textContent = l),
          this.shadowRoot.appendChild(h);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, o) {
      return super.appendChild(this.nodeOrShadowRoot(t), o);
    }
    insertBefore(t, o, n) {
      return super.insertBefore(this.nodeOrShadowRoot(t), o, n);
    }
    removeChild(t, o) {
      return super.removeChild(this.nodeOrShadowRoot(t), o);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  ue = class extends le {
    constructor(t, o, n, i, r, a, s, d) {
      super(t, r, a, s),
        (this.sharedStylesHost = o),
        (this.removeStylesOnCompDestroy = i),
        (this.styles = d ? sr(d, n.styles) : n.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  rn = class extends ue {
    constructor(t, o, n, i, r, a, s, d) {
      let c = i + "-" + n.id;
      super(t, o, n, r, a, s, d, c),
        (this.contentAttr = Ja(c)),
        (this.hostAttr = ts(c));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, o) {
      let n = super.createElement(t, o);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  },
  es = (() => {
    let t = class t extends nn {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return !0;
      }
      addEventListener(n, i, r) {
        return (
          n.addEventListener(i, r, !1), () => this.removeEventListener(n, i, r)
        );
      }
      removeEventListener(n, i, r) {
        return n.removeEventListener(i, r);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(D));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  nr = ["alt", "control", "meta", "shift"],
  ns = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  is = {
    alt: (e) => e.altKey,
    control: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
  },
  os = (() => {
    let t = class t extends nn {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return t.parseEventName(n) != null;
      }
      addEventListener(n, i, r) {
        let a = t.parseEventName(i),
          s = t.eventCallback(a.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Qe().onAndCancel(n, a.domEventName, s));
      }
      static parseEventName(n) {
        let i = n.toLowerCase().split("."),
          r = i.shift();
        if (i.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let a = t._normalizeKey(i.pop()),
          s = "",
          d = i.indexOf("code");
        if (
          (d > -1 && (i.splice(d, 1), (s = "code.")),
          nr.forEach((l) => {
            let h = i.indexOf(l);
            h > -1 && (i.splice(h, 1), (s += l + "."));
          }),
          (s += a),
          i.length != 0 || a.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = r), (c.fullKey = s), c;
      }
      static matchEventFullKeyCode(n, i) {
        let r = ns[n.key] || n.key,
          a = "";
        return (
          i.indexOf("code.") > -1 && ((r = n.code), (a = "code.")),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === " " ? (r = "space") : r === "." && (r = "dot"),
              nr.forEach((s) => {
                if (s !== r) {
                  let d = is[s];
                  d(n) && (a += s + ".");
                }
              }),
              (a += r),
              a === i)
        );
      }
      static eventCallback(n, i, r) {
        return (a) => {
          t.matchEventFullKeyCode(a, n) && r.runGuarded(() => i(a));
        };
      }
      static _normalizeKey(n) {
        return n === "esc" ? "escape" : n;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(D));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function rs() {
  ei.makeCurrent();
}
function as() {
  return new ze();
}
function ss() {
  return vo(document), document;
}
var cs = [
    { provide: ht, useValue: $o },
    { provide: yo, useValue: rs, multi: !0 },
    { provide: D, useFactory: ss, deps: [] },
  ],
  cr = So(Mo, "browser", cs),
  ds = new w(""),
  ls = [
    { provide: Ge, useClass: ni, deps: [] },
    { provide: Ro, useClass: Ke, deps: [x, Kn, Ge] },
    { provide: Ke, useClass: Ke, deps: [x, Kn, Ge] },
  ],
  us = [
    { provide: go, useValue: "root" },
    { provide: ze, useFactory: as, deps: [] },
    { provide: ii, useClass: es, multi: !0, deps: [D, x, ht] },
    { provide: ii, useClass: os, multi: !0, deps: [D] },
    on,
    rr,
    or,
    { provide: $e, useExisting: on },
    { provide: Ho, useClass: Ka, deps: [] },
    [],
  ],
  dr = (() => {
    let t = class t {
      constructor(n) {}
      static withServerTransition(n) {
        return { ngModule: t, providers: [{ provide: ne, useValue: n.appId }] };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(ds, 12));
    }),
      (t.ɵmod = R({ type: t })),
      (t.ɵinj = T({ providers: [...us, ...ls], imports: [Bo, ko] }));
    let e = t;
    return e;
  })();
var lr = (() => {
  let t = class t {
    constructor(n) {
      this._doc = n;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(n) {
      this._doc.title = n || "";
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(p(D));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var ri = (function (e) {
  return (
    (e[(e.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
    (e[(e.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
    e
  );
})(ri || {});
function ur(...e) {
  let t = [],
    o = new Set(),
    n = o.has(ri.HttpTransferCacheOptions);
  for (let { ɵproviders: i, ɵkind: r } of e) o.add(r), i.length && t.push(i);
  return jt([[], Oo(), o.has(ri.NoHttpTransferCache) || n ? [] : tr({}), t]);
}
var ci;
try {
  ci = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  ci = !1;
}
var L = (() => {
  let t = class t {
    constructor(n) {
      (this._platformId = n),
        (this.isBrowser = this._platformId
          ? Vo(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || ci) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(p(ht));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var me;
function ms() {
  if (me == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (me = !0) }),
      );
    } finally {
      me = me || !1;
    }
  return me;
}
function Bt(e) {
  return ms() ? e : !!e.capture;
}
var si;
function hs() {
  if (si == null) {
    let e = typeof document < "u" ? document.head : null;
    si = !!(e && (e.createShadowRoot || e.attachShadow));
  }
  return si;
}
function hr(e) {
  if (hs()) {
    let t = e.getRootNode ? e.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function bt(e) {
  return e.composedPath ? e.composedPath()[0] : e.target;
}
function pr() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function di(e) {
  return Array.isArray(e) ? e : [e];
}
function At(e) {
  return e instanceof B ? e.nativeElement : e;
}
var fr = new Set(),
  Dt,
  ps = (() => {
    let t = class t {
      constructor(n, i) {
        (this._platform = n),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : bs);
      }
      matchMedia(n) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && fs(n, this._nonce),
          this._matchMedia(n)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(L), p(ie, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function fs(e, t) {
  if (!fr.has(e))
    try {
      Dt ||
        ((Dt = document.createElement("style")),
        t && (Dt.nonce = t),
        Dt.setAttribute("type", "text/css"),
        document.head.appendChild(Dt)),
        Dt.sheet &&
          (Dt.sheet.insertRule(`@media ${e} {body{ }}`, 0), fr.add(e));
    } catch (o) {
      console.error(o);
    }
}
function bs(e) {
  return {
    matches: e === "all" || e === "",
    media: e,
    addListener: () => {},
    removeListener: () => {},
  };
}
var gr = (() => {
  let t = class t {
    constructor(n, i) {
      (this._mediaMatcher = n),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new $());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(n) {
      return br(di(n)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(n) {
      let r = br(di(n)).map((s) => this._registerQuery(s).observable),
        a = Ft(r);
      return (
        (a = Pe(a.pipe(at(1)), a.pipe(Le(1), Pn(0)))),
        a.pipe(
          y((s) => {
            let d = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: c, query: l }) => {
                (d.matches = d.matches || c), (d.breakpoints[l] = c);
              }),
              d
            );
          }),
        )
      );
    }
    _registerQuery(n) {
      if (this._queries.has(n)) return this._queries.get(n);
      let i = this._mediaMatcher.matchMedia(n),
        a = {
          observable: new Mn((s) => {
            let d = (c) => this._zone.run(() => s.next(c));
            return (
              i.addListener(d),
              () => {
                i.removeListener(d);
              }
            );
          }).pipe(
            je(i),
            y(({ matches: s }) => ({ query: n, matches: s })),
            Lt(this._destroySubject),
          ),
          mql: i,
        };
      return this._queries.set(n, a), a;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(p(ps), p(x));
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function br(e) {
  return e
    .map((t) => t.split(","))
    .reduce((t, o) => t.concat(o))
    .map((t) => t.trim());
}
function ui(e) {
  return e.buttons === 0 || e.detail === 0;
}
function mi(e) {
  let t =
    (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var gs = new w("cdk-input-modality-detector-options"),
  vs = { ignoreKeys: [18, 17, 224, 91, 16] },
  _r = 650,
  $t = Bt({ passive: !0, capture: !0 }),
  ys = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(n, i, r, a) {
        (this._platform = n),
          (this._mostRecentTarget = null),
          (this._modality = new U(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((d) => d === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = bt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < _r ||
              (this._modality.next(ui(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = bt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (mi(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = bt(s));
          }),
          (this._options = u(u({}, vs), a)),
          (this.modalityDetected = this._modality.pipe(Le(1))),
          (this.modalityChanged = this.modalityDetected.pipe(mo())),
          n.isBrowser &&
            i.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, $t),
                r.addEventListener("mousedown", this._onMousedown, $t),
                r.addEventListener("touchstart", this._onTouchstart, $t);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, $t),
            document.removeEventListener("mousedown", this._onMousedown, $t),
            document.removeEventListener("touchstart", this._onTouchstart, $t));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(L), p(x), p(D), p(gs, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var sn = (function (e) {
    return (
      (e[(e.IMMEDIATE = 0)] = "IMMEDIATE"),
      (e[(e.EVENTUAL = 1)] = "EVENTUAL"),
      e
    );
  })(sn || {}),
  _s = new w("cdk-focus-monitor-default-options"),
  an = Bt({ passive: !0, capture: !0 }),
  wr = (() => {
    let t = class t {
      constructor(n, i, r, a, s) {
        (this._ngZone = n),
          (this._platform = i),
          (this._inputModalityDetector = r),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new $()),
          (this._rootNodeFocusAndBlurListener = (d) => {
            let c = bt(d);
            for (let l = c; l; l = l.parentElement)
              d.type === "focus" ? this._onFocus(d, l) : this._onBlur(d, l);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || sn.IMMEDIATE);
      }
      monitor(n, i = !1) {
        let r = At(n);
        if (!this._platform.isBrowser || r.nodeType !== 1) return f();
        let a = hr(r) || this._getDocument(),
          s = this._elementInfo.get(r);
        if (s) return i && (s.checkChildren = !0), s.subject;
        let d = { checkChildren: i, subject: new $(), rootNode: a };
        return (
          this._elementInfo.set(r, d),
          this._registerGlobalListeners(d),
          d.subject
        );
      }
      stopMonitoring(n) {
        let i = At(n),
          r = this._elementInfo.get(i);
        r &&
          (r.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(r));
      }
      focusVia(n, i, r) {
        let a = At(n),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([d, c]) =>
              this._originChanged(d, i, c),
            )
          : (this._setOrigin(i), typeof a.focus == "function" && a.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((n, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(n) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(n)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : n && this._isLastInteractionFromInputLabel(n)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(n) {
        return (
          this._detectionMode === sn.EVENTUAL ||
          !!n?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(n, i) {
        n.classList.toggle("cdk-focused", !!i),
          n.classList.toggle("cdk-touch-focused", i === "touch"),
          n.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          n.classList.toggle("cdk-mouse-focused", i === "mouse"),
          n.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(n, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = n),
            (this._originFromTouchInteraction = n === "touch" && i),
            this._detectionMode === sn.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? _r : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(n, i) {
        let r = this._elementInfo.get(i),
          a = bt(n);
        !r ||
          (!r.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), r);
      }
      _onBlur(n, i) {
        let r = this._elementInfo.get(i);
        !r ||
          (r.checkChildren &&
            n.relatedTarget instanceof Node &&
            i.contains(n.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(r, null));
      }
      _emitOrigin(n, i) {
        n.subject.observers.length && this._ngZone.run(() => n.subject.next(i));
      }
      _registerGlobalListeners(n) {
        if (!this._platform.isBrowser) return;
        let i = n.rootNode,
          r = this._rootNodeFocusListenerCount.get(i) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, an),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                an,
              );
          }),
          this._rootNodeFocusListenerCount.set(i, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(Lt(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(n) {
        let i = n.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let r = this._rootNodeFocusListenerCount.get(i);
          r > 1
            ? this._rootNodeFocusListenerCount.set(i, r - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                an,
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                an,
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(n, i, r) {
        this._setClasses(n, i),
          this._emitOrigin(r, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(n) {
        let i = [];
        return (
          this._elementInfo.forEach((r, a) => {
            (a === n || (r.checkChildren && a.contains(n))) && i.push([a, r]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(n) {
        let { _mostRecentTarget: i, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !i ||
          i === n ||
          (n.nodeName !== "INPUT" && n.nodeName !== "TEXTAREA") ||
          n.disabled
        )
          return !1;
        let a = n.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(i)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(x), p(L), p(ys), p(D, 8), p(_s, 8));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var St = (function (e) {
    return (
      (e[(e.NONE = 0)] = "NONE"),
      (e[(e.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (e[(e.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      e
    );
  })(St || {}),
  vr = "cdk-high-contrast-black-on-white",
  yr = "cdk-high-contrast-white-on-black",
  li = "cdk-high-contrast-active",
  xr = (() => {
    let t = class t {
      constructor(n, i) {
        (this._platform = n),
          (this._document = i),
          (this._breakpointSubscription = m(gr)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return St.NONE;
        let n = this._document.createElement("div");
        (n.style.backgroundColor = "rgb(1,2,3)"),
          (n.style.position = "absolute"),
          this._document.body.appendChild(n);
        let i = this._document.defaultView || window,
          r = i && i.getComputedStyle ? i.getComputedStyle(n) : null,
          a = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((n.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return St.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return St.BLACK_ON_WHITE;
        }
        return St.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let n = this._document.body.classList;
          n.remove(li, vr, yr), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === St.BLACK_ON_WHITE
            ? n.add(li, vr)
            : i === St.WHITE_ON_BLACK && n.add(li, yr);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(L), p(D));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var hi = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = R({ type: t })),
    (t.ɵinj = T({}));
  let e = t;
  return e;
})();
function Is() {
  return !0;
}
var Es = new w("mat-sanity-checks", { providedIn: "root", factory: Is }),
  et = (() => {
    let t = class t {
      constructor(n, i, r) {
        (this._sanityChecks = i),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          n._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(n) {
        return pr()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[n];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(xr), p(Es, 8), p(D));
    }),
      (t.ɵmod = R({ type: t })),
      (t.ɵinj = T({ imports: [hi, hi] }));
    let e = t;
    return e;
  })();
var Y = (function (e) {
    return (
      (e[(e.FADING_IN = 0)] = "FADING_IN"),
      (e[(e.VISIBLE = 1)] = "VISIBLE"),
      (e[(e.FADING_OUT = 2)] = "FADING_OUT"),
      (e[(e.HIDDEN = 3)] = "HIDDEN"),
      e
    );
  })(Y || {}),
  bi = class {
    constructor(t, o, n, i = !1) {
      (this._renderer = t),
        (this.element = o),
        (this.config = n),
        (this._animationForciblyDisabledThroughCss = i),
        (this.state = Y.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Ir = Bt({ passive: !0, capture: !0 }),
  gi = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let o = bt(t);
          o &&
            this._events.get(t.type)?.forEach((n, i) => {
              (i === o || i.contains(o)) && n.forEach((r) => r.handleEvent(t));
            });
        });
    }
    addHandler(t, o, n, i) {
      let r = this._events.get(o);
      if (r) {
        let a = r.get(n);
        a ? a.add(i) : r.set(n, new Set([i]));
      } else
        this._events.set(o, new Map([[n, new Set([i])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(o, this._delegateEventHandler, Ir);
          });
    }
    removeHandler(t, o, n) {
      let i = this._events.get(t);
      if (!i) return;
      let r = i.get(o);
      r &&
        (r.delete(n),
        r.size === 0 && i.delete(o),
        i.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, Ir)));
    }
  },
  Er = { enterDuration: 225, exitDuration: 150 },
  Cs = 800,
  Cr = Bt({ passive: !0, capture: !0 }),
  Tr = ["mousedown", "touchstart"],
  Rr = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  pe = class pe {
    constructor(t, o, n, i) {
      (this._target = t),
        (this._ngZone = o),
        (this._platform = i),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        i.isBrowser && (this._containerElement = At(n));
    }
    fadeInRipple(t, o, n = {}) {
      let i = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        r = u(u({}, Er), n.animation);
      n.centered && ((t = i.left + i.width / 2), (o = i.top + i.height / 2));
      let a = n.radius || Ts(t, o, i),
        s = t - i.left,
        d = o - i.top,
        c = r.enterDuration,
        l = document.createElement("div");
      l.classList.add("mat-ripple-element"),
        (l.style.left = `${s - a}px`),
        (l.style.top = `${d - a}px`),
        (l.style.height = `${a * 2}px`),
        (l.style.width = `${a * 2}px`),
        n.color != null && (l.style.backgroundColor = n.color),
        (l.style.transitionDuration = `${c}ms`),
        this._containerElement.appendChild(l);
      let h = window.getComputedStyle(l),
        b = h.transitionProperty,
        I = h.transitionDuration,
        Q =
          b === "none" ||
          I === "0s" ||
          I === "0s, 0s" ||
          (i.width === 0 && i.height === 0),
        P = new bi(this, l, n, Q);
      (l.style.transform = "scale3d(1, 1, 1)"),
        (P.state = Y.FADING_IN),
        n.persistent || (this._mostRecentTransientRipple = P);
      let dt = null;
      return (
        !Q &&
          (c || r.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let j = () => this._finishRippleTransition(P),
              Nt = () => this._destroyRipple(P);
            l.addEventListener("transitionend", j),
              l.addEventListener("transitioncancel", Nt),
              (dt = { onTransitionEnd: j, onTransitionCancel: Nt });
          }),
        this._activeRipples.set(P, dt),
        (Q || !c) && this._finishRippleTransition(P),
        P
      );
    }
    fadeOutRipple(t) {
      if (t.state === Y.FADING_OUT || t.state === Y.HIDDEN) return;
      let o = t.element,
        n = u(u({}, Er), t.config.animation);
      (o.style.transitionDuration = `${n.exitDuration}ms`),
        (o.style.opacity = "0"),
        (t.state = Y.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !n.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let o = At(t);
      !this._platform.isBrowser ||
        !o ||
        o === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = o),
        Tr.forEach((n) => {
          pe._eventManager.addHandler(this._ngZone, n, o, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
          ? this._onTouchStart(t)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            Rr.forEach((o) => {
              this._triggerElement.addEventListener(o, this, Cr);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === Y.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === Y.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let o = t === this._mostRecentTransientRipple,
        { persistent: n } = t.config;
      (t.state = Y.VISIBLE), !n && (!o || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let o = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = Y.HIDDEN),
        o !== null &&
          (t.element.removeEventListener("transitionend", o.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            o.onTransitionCancel,
          )),
        t.element.remove();
    }
    _onMousedown(t) {
      let o = ui(t),
        n =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Cs;
      !this._target.rippleDisabled &&
        !o &&
        !n &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !mi(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let o = t.changedTouches;
        if (o)
          for (let n = 0; n < o.length; n++)
            this.fadeInRipple(
              o[n].clientX,
              o[n].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let o =
            t.state === Y.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === Y.FADING_IN);
          !t.config.persistent && o && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (Tr.forEach((o) => pe._eventManager.removeHandler(o, t, this)),
        this._pointerUpEventsRegistered &&
          Rr.forEach((o) => t.removeEventListener(o, this, Cr)));
    }
  };
pe._eventManager = new gi();
var vi = pe;
function Ts(e, t, o) {
  let n = Math.max(Math.abs(e - o.left), Math.abs(e - o.right)),
    i = Math.max(Math.abs(t - o.top), Math.abs(t - o.bottom));
  return Math.sqrt(n * n + i * i);
}
var Mr = new w("mat-ripple-global-options"),
  Rs = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(n) {
        n && this.fadeOutAllNonPersistent(),
          (this._disabled = n),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(n) {
        (this._trigger = n), this._setupTriggerEventsIfEnabled();
      }
      constructor(n, i, r, a, s) {
        (this._elementRef = n),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new vi(this, i, n, r));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: u(
            u(
              u({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(n, i = 0, r) {
        return typeof n == "number"
          ? this._rippleRenderer.fadeInRipple(
              n,
              i,
              u(u({}, this.rippleConfig), r),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              u(u({}, this.rippleConfig), n),
            );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(E(B), E(x), E(L), E(Mr, 8), E(Ct, 8));
    }),
      (t.ɵdir = J({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 && pt("mat-ripple-unbounded", r.unbounded);
        },
        inputs: {
          color: [k.None, "matRippleColor", "color"],
          unbounded: [k.None, "matRippleUnbounded", "unbounded"],
          centered: [k.None, "matRippleCentered", "centered"],
          radius: [k.None, "matRippleRadius", "radius"],
          animation: [k.None, "matRippleAnimation", "animation"],
          disabled: [k.None, "matRippleDisabled", "disabled"],
          trigger: [k.None, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  kr = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = R({ type: t })),
      (t.ɵinj = T({ imports: [et, et] }));
    let e = t;
    return e;
  })();
var Ar = { capture: !0 },
  Dr = ["focus", "click", "mouseenter", "touchstart"],
  pi = "mat-ripple-loader-uninitialized",
  fi = "mat-ripple-loader-class-name",
  Sr = "mat-ripple-loader-centered",
  cn = "mat-ripple-loader-disabled",
  Or = (() => {
    let t = class t {
      constructor() {
        (this._document = m(D, { optional: !0 })),
          (this._animationMode = m(Ct, { optional: !0 })),
          (this._globalRippleOptions = m(Mr, { optional: !0 })),
          (this._platform = m(L)),
          (this._ngZone = m(x)),
          (this._hosts = new Map()),
          (this._onInteraction = (n) => {
            if (!(n.target instanceof HTMLElement)) return;
            let r = n.target.closest(`[${pi}]`);
            r && this._createRipple(r);
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let n of Dr)
              this._document?.addEventListener(n, this._onInteraction, Ar);
          });
      }
      ngOnDestroy() {
        let n = this._hosts.keys();
        for (let i of n) this.destroyRipple(i);
        for (let i of Dr)
          this._document?.removeEventListener(i, this._onInteraction, Ar);
      }
      configureRipple(n, i) {
        n.setAttribute(pi, ""),
          (i.className || !n.hasAttribute(fi)) &&
            n.setAttribute(fi, i.className || ""),
          i.centered && n.setAttribute(Sr, ""),
          i.disabled && n.setAttribute(cn, "");
      }
      getRipple(n) {
        return this._hosts.get(n) || this._createRipple(n);
      }
      setDisabled(n, i) {
        let r = this._hosts.get(n);
        if (r) {
          r.disabled = i;
          return;
        }
        i ? n.setAttribute(cn, "") : n.removeAttribute(cn);
      }
      _createRipple(n) {
        if (!this._document) return;
        let i = this._hosts.get(n);
        if (i) return i;
        n.querySelector(".mat-ripple")?.remove();
        let r = this._document.createElement("span");
        r.classList.add("mat-ripple", n.getAttribute(fi)), n.append(r);
        let a = new Rs(
          new B(r),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = n),
          (a.centered = n.hasAttribute(Sr)),
          (a.disabled = n.hasAttribute(cn)),
          this.attachRipple(n, a),
          a
        );
      }
      attachRipple(n, i) {
        n.removeAttribute(pi), this._hosts.set(n, i);
      }
      destroyRipple(n) {
        let i = this._hosts.get(n);
        i && (i.ngOnDestroy(), this._hosts.delete(n));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var Nr = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = R({ type: t })),
    (t.ɵinj = T({ imports: [et, et] }));
  let e = t;
  return e;
})();
var As = ["mat-button", ""],
  Ds = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  Ss = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var Ms = new w("MAT_BUTTON_CONFIG");
var ks = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab"] },
    {
      attribute: "mat-mini-fab",
      mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  Os = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(n) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, n);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(n) {
        (this._disableRipple = n), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(n) {
        (this._disabled = n), this._updateRippleDisabled();
      }
      constructor(n, i, r, a) {
        (this._elementRef = n),
          (this._platform = i),
          (this._ngZone = r),
          (this._animationMode = a),
          (this._focusMonitor = m(wr)),
          (this._rippleLoader = m(Or)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = m(Ms, { optional: !0 }),
          d = n.nativeElement,
          c = d.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          this._rippleLoader?.configureRipple(d, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: l, mdcClasses: h } of ks)
          d.hasAttribute(l) && c.add(...h);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(n = "program", i) {
        n
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, n, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
    };
    (t.ɵfac = function (i) {
      Ut();
    }),
      (t.ɵdir = J({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [
            k.HasDecoratorInputTransform,
            "disableRipple",
            "disableRipple",
            tt,
          ],
          disabled: [k.HasDecoratorInputTransform, "disabled", "disabled", tt],
          ariaDisabled: [
            k.HasDecoratorInputTransform,
            "aria-disabled",
            "ariaDisabled",
            tt,
          ],
          disabledInteractive: [
            k.HasDecoratorInputTransform,
            "disabledInteractive",
            "disabledInteractive",
            tt,
          ],
        },
        features: [Tt],
      }));
    let e = t;
    return e;
  })();
var dn = (() => {
  let t = class t extends Os {
    constructor(n, i, r, a) {
      super(n, i, r, a);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(E(B), E(L), E(x), E(Ct, 8));
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [
        ["button", "mat-button", ""],
        ["button", "mat-raised-button", ""],
        ["button", "mat-flat-button", ""],
        ["button", "mat-stroked-button", ""],
      ],
      hostVars: 14,
      hostBindings: function (i, r) {
        i & 2 &&
          (Rt("disabled", r._getDisabledAttribute())(
            "aria-disabled",
            r._getAriaDisabled(),
          ),
          re(r.color ? "mat-" + r.color : ""),
          pt("mat-mdc-button-disabled", r.disabled)(
            "mat-mdc-button-disabled-interactive",
            r.disabledInteractive,
          )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
            "mat-unthemed",
            !r.color,
          )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      standalone: !0,
      features: [Co, ft],
      attrs: As,
      ngContentSelectors: Ss,
      decls: 7,
      vars: 4,
      consts: [
        [1, "mat-mdc-button-persistent-ripple"],
        [1, "mdc-button__label"],
        [1, "mat-mdc-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (i, r) {
        i & 1 &&
          (zt(Ds),
          A(0, "span", 0),
          ct(1),
          W(2, "span", 1),
          ct(3, 1),
          Z(),
          ct(4, 2),
          A(5, "span", 2)(6, "span", 3)),
          i & 2 &&
            pt("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
      },
      styles: [
        '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
        ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var Fr = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = R({ type: t })),
    (t.ɵinj = T({ imports: [et, kr, et] }));
  let e = t;
  return e;
})();
var Ns = ["*", [["mat-toolbar-row"]]],
  Fs = ["*", "mat-toolbar-row"],
  Ps = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = J({
        type: t,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  Lr = (() => {
    let t = class t {
      constructor(n, i, r) {
        (this._elementRef = n), (this._platform = i), (this._document = r);
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          (this._checkToolbarMixedModes(),
          this._toolbarRows.changes.subscribe(() =>
            this._checkToolbarMixedModes(),
          ));
      }
      _checkToolbarMixedModes() {
        this._toolbarRows.length;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(E(B), E(L), E(D));
    }),
      (t.ɵcmp = S({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (i, r, a) {
          if ((i & 1 && Gn(a, Ps, 5), i & 2)) {
            let s;
            We((s = He())) && (r._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (i, r) {
          i & 2 &&
            (re(r.color ? "mat-" + r.color : ""),
            pt("mat-toolbar-multiple-rows", r._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              r._toolbarRows.length === 0,
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [ft],
        ngContentSelectors: Fs,
        decls: 2,
        vars: 0,
        template: function (i, r) {
          i & 1 && (zt(Ns), ct(0), ct(1, 1));
        },
        styles: [
          ".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })();
var jr = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = R({ type: t })),
    (t.ɵinj = T({ imports: [et, et] }));
  let e = t;
  return e;
})();
var g = "primary",
  De = Symbol("RouteTitle"),
  Ii = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let o = this.params[t];
        return Array.isArray(o) ? o[0] : o;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let o = this.params[t];
        return Array.isArray(o) ? o : [o];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Gt(e) {
  return new Ii(e);
}
function js(e, t, o) {
  let n = o.path.split("/");
  if (
    n.length > e.length ||
    (o.pathMatch === "full" && (t.hasChildren() || n.length < e.length))
  )
    return null;
  let i = {};
  for (let r = 0; r < n.length; r++) {
    let a = n[r],
      s = e[r];
    if (a.startsWith(":")) i[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: e.slice(0, n.length), posParams: i };
}
function Us(e, t) {
  if (e.length !== t.length) return !1;
  for (let o = 0; o < e.length; ++o) if (!nt(e[o], t[o])) return !1;
  return !0;
}
function nt(e, t) {
  let o = e ? Ei(e) : void 0,
    n = t ? Ei(t) : void 0;
  if (!o || !n || o.length != n.length) return !1;
  let i;
  for (let r = 0; r < o.length; r++)
    if (((i = o[r]), !Gr(e[i], t[i]))) return !1;
  return !0;
}
function Ei(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function Gr(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    let o = [...e].sort(),
      n = [...t].sort();
    return o.every((i, r) => n[r] === i);
  } else return e === t;
}
function Kr(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function wt(e) {
  return co(e) ? e : Ao(e) ? z(Promise.resolve(e)) : f(e);
}
var zs = { exact: Yr, subset: Xr },
  Zr = { exact: Bs, subset: $s, ignored: () => !0 };
function Ur(e, t, o) {
  return (
    zs[o.paths](e.root, t.root, o.matrixParams) &&
    Zr[o.queryParams](e.queryParams, t.queryParams) &&
    !(o.fragment === "exact" && e.fragment !== t.fragment)
  );
}
function Bs(e, t) {
  return nt(e, t);
}
function Yr(e, t, o) {
  if (
    !kt(e.segments, t.segments) ||
    !mn(e.segments, t.segments, o) ||
    e.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let n in t.children)
    if (!e.children[n] || !Yr(e.children[n], t.children[n], o)) return !1;
  return !0;
}
function $s(e, t) {
  return (
    Object.keys(t).length <= Object.keys(e).length &&
    Object.keys(t).every((o) => Gr(e[o], t[o]))
  );
}
function Xr(e, t, o) {
  return Qr(e, t, t.segments, o);
}
function Qr(e, t, o, n) {
  if (e.segments.length > o.length) {
    let i = e.segments.slice(0, o.length);
    return !(!kt(i, o) || t.hasChildren() || !mn(i, o, n));
  } else if (e.segments.length === o.length) {
    if (!kt(e.segments, o) || !mn(e.segments, o, n)) return !1;
    for (let i in t.children)
      if (!e.children[i] || !Xr(e.children[i], t.children[i], n)) return !1;
    return !0;
  } else {
    let i = o.slice(0, e.segments.length),
      r = o.slice(e.segments.length);
    return !kt(e.segments, i) || !mn(e.segments, i, n) || !e.children[g]
      ? !1
      : Qr(e.children[g], t, r, n);
  }
}
function mn(e, t, o) {
  return t.every((n, i) => Zr[o](e[i].parameters, n.parameters));
}
var gt = class {
    constructor(t = new _([], {}), o = {}, n = null) {
      (this.root = t), (this.queryParams = o), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Gt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return Hs.serialize(this);
    }
  },
  _ = class {
    constructor(t, o) {
      (this.segments = t),
        (this.children = o),
        (this.parent = null),
        Object.values(o).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return hn(this);
    }
  },
  Mt = class {
    constructor(t, o) {
      (this.path = t), (this.parameters = o);
    }
    get parameterMap() {
      return (this._parameterMap ??= Gt(this.parameters)), this._parameterMap;
    }
    toString() {
      return ta(this);
    }
  };
function Vs(e, t) {
  return kt(e, t) && e.every((o, n) => nt(o.parameters, t[n].parameters));
}
function kt(e, t) {
  return e.length !== t.length ? !1 : e.every((o, n) => o.path === t[n].path);
}
function Ws(e, t) {
  let o = [];
  return (
    Object.entries(e.children).forEach(([n, i]) => {
      n === g && (o = o.concat(t(i, n)));
    }),
    Object.entries(e.children).forEach(([n, i]) => {
      n !== g && (o = o.concat(t(i, n)));
    }),
    o
  );
}
var Se = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => new we(), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  we = class {
    parse(t) {
      let o = new Ti(t);
      return new gt(
        o.parseRootSegment(),
        o.parseQueryParams(),
        o.parseFragment(),
      );
    }
    serialize(t) {
      let o = `/${fe(t.root, !0)}`,
        n = Ks(t.queryParams),
        i = typeof t.fragment == "string" ? `#${qs(t.fragment)}` : "";
      return `${o}${n}${i}`;
    }
  },
  Hs = new we();
function hn(e) {
  return e.segments.map((t) => ta(t)).join("/");
}
function fe(e, t) {
  if (!e.hasChildren()) return hn(e);
  if (t) {
    let o = e.children[g] ? fe(e.children[g], !1) : "",
      n = [];
    return (
      Object.entries(e.children).forEach(([i, r]) => {
        i !== g && n.push(`${i}:${fe(r, !1)}`);
      }),
      n.length > 0 ? `${o}(${n.join("//")})` : o
    );
  } else {
    let o = Ws(e, (n, i) =>
      i === g ? [fe(e.children[g], !1)] : [`${i}:${fe(n, !1)}`],
    );
    return Object.keys(e.children).length === 1 && e.children[g] != null
      ? `${hn(e)}/${o[0]}`
      : `${hn(e)}/(${o.join("//")})`;
  }
}
function Jr(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function ln(e) {
  return Jr(e).replace(/%3B/gi, ";");
}
function qs(e) {
  return encodeURI(e);
}
function Ci(e) {
  return Jr(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function pn(e) {
  return decodeURIComponent(e);
}
function zr(e) {
  return pn(e.replace(/\+/g, "%20"));
}
function ta(e) {
  return `${Ci(e.path)}${Gs(e.parameters)}`;
}
function Gs(e) {
  return Object.entries(e)
    .map(([t, o]) => `;${Ci(t)}=${Ci(o)}`)
    .join("");
}
function Ks(e) {
  let t = Object.entries(e)
    .map(([o, n]) =>
      Array.isArray(n)
        ? n.map((i) => `${ln(o)}=${ln(i)}`).join("&")
        : `${ln(o)}=${ln(n)}`,
    )
    .filter((o) => o);
  return t.length ? `?${t.join("&")}` : "";
}
var Zs = /^[^\/()?;#]+/;
function yi(e) {
  let t = e.match(Zs);
  return t ? t[0] : "";
}
var Ys = /^[^\/()?;=#]+/;
function Xs(e) {
  let t = e.match(Ys);
  return t ? t[0] : "";
}
var Qs = /^[^=?&#]+/;
function Js(e) {
  let t = e.match(Qs);
  return t ? t[0] : "";
}
var tc = /^[^&#]+/;
function ec(e) {
  let t = e.match(tc);
  return t ? t[0] : "";
}
var Ti = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new _([], {})
        : new _([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let o = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (o = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (t.length > 0 || Object.keys(o).length > 0) && (n[g] = new _(t, o)),
      n
    );
  }
  parseSegment() {
    let t = yi(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new C(4009, !1);
    return this.capture(t), new Mt(pn(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let o = Xs(this.remaining);
    if (!o) return;
    this.capture(o);
    let n = "";
    if (this.consumeOptional("=")) {
      let i = yi(this.remaining);
      i && ((n = i), this.capture(n));
    }
    t[pn(o)] = pn(n);
  }
  parseQueryParam(t) {
    let o = Js(this.remaining);
    if (!o) return;
    this.capture(o);
    let n = "";
    if (this.consumeOptional("=")) {
      let a = ec(this.remaining);
      a && ((n = a), this.capture(n));
    }
    let i = zr(o),
      r = zr(n);
    if (t.hasOwnProperty(i)) {
      let a = t[i];
      Array.isArray(a) || ((a = [a]), (t[i] = a)), a.push(r);
    } else t[i] = r;
  }
  parseParens(t) {
    let o = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = yi(this.remaining),
        i = this.remaining[n.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new C(4010, !1);
      let r;
      n.indexOf(":") > -1
        ? ((r = n.slice(0, n.indexOf(":"))), this.capture(r), this.capture(":"))
        : t && (r = g);
      let a = this.parseChildren();
      (o[r] = Object.keys(a).length === 1 ? a[g] : new _([], a)),
        this.consumeOptional("//");
    }
    return o;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new C(4011, !1);
  }
};
function ea(e) {
  return e.segments.length > 0 ? new _([], { [g]: e }) : e;
}
function na(e) {
  let t = {};
  for (let [n, i] of Object.entries(e.children)) {
    let r = na(i);
    if (n === g && r.segments.length === 0 && r.hasChildren())
      for (let [a, s] of Object.entries(r.children)) t[a] = s;
    else (r.segments.length > 0 || r.hasChildren()) && (t[n] = r);
  }
  let o = new _(e.segments, t);
  return nc(o);
}
function nc(e) {
  if (e.numberOfChildren === 1 && e.children[g]) {
    let t = e.children[g];
    return new _(e.segments.concat(t.segments), t.children);
  }
  return e;
}
function Kt(e) {
  return e instanceof gt;
}
function ic(e, t, o = null, n = null) {
  let i = ia(e);
  return oa(i, t, o, n);
}
function ia(e) {
  let t;
  function o(r) {
    let a = {};
    for (let d of r.children) {
      let c = o(d);
      a[d.outlet] = c;
    }
    let s = new _(r.url, a);
    return r === e && (t = s), s;
  }
  let n = o(e.root),
    i = ea(n);
  return t ?? i;
}
function oa(e, t, o, n) {
  let i = e;
  for (; i.parent; ) i = i.parent;
  if (t.length === 0) return _i(i, i, i, o, n);
  let r = oc(t);
  if (r.toRoot()) return _i(i, i, new _([], {}), o, n);
  let a = rc(r, i, e),
    s = a.processChildren
      ? ve(a.segmentGroup, a.index, r.commands)
      : aa(a.segmentGroup, a.index, r.commands);
  return _i(i, a.segmentGroup, s, o, n);
}
function fn(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function xe(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function _i(e, t, o, n, i) {
  let r = {};
  n &&
    Object.entries(n).forEach(([d, c]) => {
      r[d] = Array.isArray(c) ? c.map((l) => `${l}`) : `${c}`;
    });
  let a;
  e === t ? (a = o) : (a = ra(e, t, o));
  let s = ea(na(a));
  return new gt(s, r, i);
}
function ra(e, t, o) {
  let n = {};
  return (
    Object.entries(e.children).forEach(([i, r]) => {
      r === t ? (n[i] = o) : (n[i] = ra(r, t, o));
    }),
    new _(e.segments, n)
  );
}
var bn = class {
  constructor(t, o, n) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = o),
      (this.commands = n),
      t && n.length > 0 && fn(n[0]))
    )
      throw new C(4003, !1);
    let i = n.find(xe);
    if (i && i !== Kr(n)) throw new C(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function oc(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new bn(!0, 0, e);
  let t = 0,
    o = !1,
    n = e.reduce((i, r, a) => {
      if (typeof r == "object" && r != null) {
        if (r.outlets) {
          let s = {};
          return (
            Object.entries(r.outlets).forEach(([d, c]) => {
              s[d] = typeof c == "string" ? c.split("/") : c;
            }),
            [...i, { outlets: s }]
          );
        }
        if (r.segmentPath) return [...i, r.segmentPath];
      }
      return typeof r != "string"
        ? [...i, r]
        : a === 0
          ? (r.split("/").forEach((s, d) => {
              (d == 0 && s === ".") ||
                (d == 0 && s === ""
                  ? (o = !0)
                  : s === ".."
                    ? t++
                    : s != "" && i.push(s));
            }),
            i)
          : [...i, r];
    }, []);
  return new bn(o, t, n);
}
var Ht = class {
  constructor(t, o, n) {
    (this.segmentGroup = t), (this.processChildren = o), (this.index = n);
  }
};
function rc(e, t, o) {
  if (e.isAbsolute) return new Ht(t, !0, 0);
  if (!o) return new Ht(t, !1, NaN);
  if (o.parent === null) return new Ht(o, !0, 0);
  let n = fn(e.commands[0]) ? 0 : 1,
    i = o.segments.length - 1 + n;
  return ac(o, i, e.numberOfDoubleDots);
}
function ac(e, t, o) {
  let n = e,
    i = t,
    r = o;
  for (; r > i; ) {
    if (((r -= i), (n = n.parent), !n)) throw new C(4005, !1);
    i = n.segments.length;
  }
  return new Ht(n, !1, i - r);
}
function sc(e) {
  return xe(e[0]) ? e[0].outlets : { [g]: e };
}
function aa(e, t, o) {
  if (((e ??= new _([], {})), e.segments.length === 0 && e.hasChildren()))
    return ve(e, t, o);
  let n = cc(e, t, o),
    i = o.slice(n.commandIndex);
  if (n.match && n.pathIndex < e.segments.length) {
    let r = new _(e.segments.slice(0, n.pathIndex), {});
    return (
      (r.children[g] = new _(e.segments.slice(n.pathIndex), e.children)),
      ve(r, 0, i)
    );
  } else
    return n.match && i.length === 0
      ? new _(e.segments, {})
      : n.match && !e.hasChildren()
        ? Ri(e, t, o)
        : n.match
          ? ve(e, 0, i)
          : Ri(e, t, o);
}
function ve(e, t, o) {
  if (o.length === 0) return new _(e.segments, {});
  {
    let n = sc(o),
      i = {};
    if (
      Object.keys(n).some((r) => r !== g) &&
      e.children[g] &&
      e.numberOfChildren === 1 &&
      e.children[g].segments.length === 0
    ) {
      let r = ve(e.children[g], t, o);
      return new _(e.segments, r.children);
    }
    return (
      Object.entries(n).forEach(([r, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (i[r] = aa(e.children[r], t, a));
      }),
      Object.entries(e.children).forEach(([r, a]) => {
        n[r] === void 0 && (i[r] = a);
      }),
      new _(e.segments, i)
    );
  }
}
function cc(e, t, o) {
  let n = 0,
    i = t,
    r = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < e.segments.length; ) {
    if (n >= o.length) return r;
    let a = e.segments[i],
      s = o[n];
    if (xe(s)) break;
    let d = `${s}`,
      c = n < o.length - 1 ? o[n + 1] : null;
    if (i > 0 && d === void 0) break;
    if (d && c && typeof c == "object" && c.outlets === void 0) {
      if (!$r(d, c, a)) return r;
      n += 2;
    } else {
      if (!$r(d, {}, a)) return r;
      n++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: n };
}
function Ri(e, t, o) {
  let n = e.segments.slice(0, t),
    i = 0;
  for (; i < o.length; ) {
    let r = o[i];
    if (xe(r)) {
      let d = dc(r.outlets);
      return new _(n, d);
    }
    if (i === 0 && fn(o[0])) {
      let d = e.segments[t];
      n.push(new Mt(d.path, Br(o[0]))), i++;
      continue;
    }
    let a = xe(r) ? r.outlets[g] : `${r}`,
      s = i < o.length - 1 ? o[i + 1] : null;
    a && s && fn(s)
      ? (n.push(new Mt(a, Br(s))), (i += 2))
      : (n.push(new Mt(a, {})), i++);
  }
  return new _(n, {});
}
function dc(e) {
  let t = {};
  return (
    Object.entries(e).forEach(([o, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (t[o] = Ri(new _([], {}), 0, n));
    }),
    t
  );
}
function Br(e) {
  let t = {};
  return Object.entries(e).forEach(([o, n]) => (t[o] = `${n}`)), t;
}
function $r(e, t, o) {
  return e == o.path && nt(t, o.parameters);
}
var ye = "imperative",
  N = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(N || {}),
  X = class {
    constructor(t, o) {
      (this.id = t), (this.url = o);
    }
  },
  Zt = class extends X {
    constructor(t, o, n = "imperative", i = null) {
      super(t, o),
        (this.type = N.NavigationStart),
        (this.navigationTrigger = n),
        (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  it = class extends X {
    constructor(t, o, n) {
      super(t, o), (this.urlAfterRedirects = n), (this.type = N.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  G = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      e
    );
  })(G || {}),
  gn = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(gn || {}),
  vt = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.reason = n),
        (this.code = i),
        (this.type = N.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  yt = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.reason = n),
        (this.code = i),
        (this.type = N.NavigationSkipped);
    }
  },
  Ie = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.error = n),
        (this.target = i),
        (this.type = N.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  vn = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.type = N.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ai = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.type = N.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Di = class extends X {
    constructor(t, o, n, i, r) {
      super(t, o),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.shouldActivate = r),
        (this.type = N.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Si = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.type = N.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Mi = class extends X {
    constructor(t, o, n, i) {
      super(t, o),
        (this.urlAfterRedirects = n),
        (this.state = i),
        (this.type = N.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ki = class {
    constructor(t) {
      (this.route = t), (this.type = N.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Oi = class {
    constructor(t) {
      (this.route = t), (this.type = N.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Ni = class {
    constructor(t) {
      (this.snapshot = t), (this.type = N.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Fi = class {
    constructor(t) {
      (this.snapshot = t), (this.type = N.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Pi = class {
    constructor(t) {
      (this.snapshot = t), (this.type = N.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Li = class {
    constructor(t) {
      (this.snapshot = t), (this.type = N.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  yn = class {
    constructor(t, o, n) {
      (this.routerEvent = t),
        (this.position = o),
        (this.anchor = n),
        (this.type = N.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  Ee = class {},
  Ce = class {
    constructor(t) {
      this.url = t;
    }
  };
var ji = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new Me()),
        (this.attachRef = null);
    }
  },
  Me = (() => {
    let t = class t {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(n, i) {
        let r = this.getOrCreateContext(n);
        (r.outlet = i), this.contexts.set(n, r);
      }
      onChildOutletDestroyed(n) {
        let i = this.getContext(n);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let n = this.contexts;
        return (this.contexts = new Map()), n;
      }
      onOutletReAttached(n) {
        this.contexts = n;
      }
      getOrCreateContext(n) {
        let i = this.getContext(n);
        return i || ((i = new ji()), this.contexts.set(n, i)), i;
      }
      getContext(n) {
        return this.contexts.get(n) || null;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  _n = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let o = this.pathFromRoot(t);
      return o.length > 1 ? o[o.length - 2] : null;
    }
    children(t) {
      let o = Ui(t, this._root);
      return o ? o.children.map((n) => n.value) : [];
    }
    firstChild(t) {
      let o = Ui(t, this._root);
      return o && o.children.length > 0 ? o.children[0].value : null;
    }
    siblings(t) {
      let o = zi(t, this._root);
      return o.length < 2
        ? []
        : o[o.length - 2].children.map((i) => i.value).filter((i) => i !== t);
    }
    pathFromRoot(t) {
      return zi(t, this._root).map((o) => o.value);
    }
  };
function Ui(e, t) {
  if (e === t.value) return t;
  for (let o of t.children) {
    let n = Ui(e, o);
    if (n) return n;
  }
  return null;
}
function zi(e, t) {
  if (e === t.value) return [t];
  for (let o of t.children) {
    let n = zi(e, o);
    if (n.length) return n.unshift(t), n;
  }
  return [];
}
var q = class {
  constructor(t, o) {
    (this.value = t), (this.children = o);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Wt(e) {
  let t = {};
  return e && e.children.forEach((o) => (t[o.value.outlet] = o)), t;
}
var wn = class extends _n {
  constructor(t, o) {
    super(t), (this.snapshot = o), Yi(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function sa(e) {
  let t = lc(e),
    o = new U([new Mt("", {})]),
    n = new U({}),
    i = new U({}),
    r = new U({}),
    a = new U(""),
    s = new Ot(o, n, r, a, i, g, e, t.root);
  return (s.snapshot = t.root), new wn(new q(s, []), t);
}
function lc(e) {
  let t = {},
    o = {},
    n = {},
    i = "",
    r = new Te([], t, n, i, o, g, e, null, {});
  return new xn("", new q(r, []));
}
var Ot = class {
  constructor(t, o, n, i, r, a, s, d) {
    (this.urlSubject = t),
      (this.paramsSubject = o),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = i),
      (this.dataSubject = r),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = d),
      (this.title = this.dataSubject?.pipe(y((c) => c[De])) ?? f(void 0)),
      (this.url = t),
      (this.params = o),
      (this.queryParams = n),
      (this.fragment = i),
      (this.data = r);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(y((t) => Gt(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(y((t) => Gt(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Zi(e, t, o = "emptyOnly") {
  let n,
    { routeConfig: i } = e;
  return (
    t !== null &&
    (o === "always" ||
      i?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (n = {
          params: u(u({}, t.params), e.params),
          data: u(u({}, t.data), e.data),
          resolve: u(u(u(u({}, e.data), t.data), i?.data), e._resolvedData),
        })
      : (n = {
          params: u({}, e.params),
          data: u({}, e.data),
          resolve: u(u({}, e.data), e._resolvedData ?? {}),
        }),
    i && da(i) && (n.resolve[De] = i.title),
    n
  );
}
var Te = class {
    get title() {
      return this.data?.[De];
    }
    constructor(t, o, n, i, r, a, s, d, c) {
      (this.url = t),
        (this.params = o),
        (this.queryParams = n),
        (this.fragment = i),
        (this.data = r),
        (this.outlet = a),
        (this.component = s),
        (this.routeConfig = d),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Gt(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Gt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((n) => n.toString()).join("/"),
        o = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${o}')`;
    }
  },
  xn = class extends _n {
    constructor(t, o) {
      super(o), (this.url = t), Yi(this, o);
    }
    toString() {
      return ca(this._root);
    }
  };
function Yi(e, t) {
  (t.value._routerState = e), t.children.forEach((o) => Yi(e, o));
}
function ca(e) {
  let t = e.children.length > 0 ? ` { ${e.children.map(ca).join(", ")} } ` : "";
  return `${e.value}${t}`;
}
function wi(e) {
  if (e.snapshot) {
    let t = e.snapshot,
      o = e._futureSnapshot;
    (e.snapshot = o),
      nt(t.queryParams, o.queryParams) ||
        e.queryParamsSubject.next(o.queryParams),
      t.fragment !== o.fragment && e.fragmentSubject.next(o.fragment),
      nt(t.params, o.params) || e.paramsSubject.next(o.params),
      Us(t.url, o.url) || e.urlSubject.next(o.url),
      nt(t.data, o.data) || e.dataSubject.next(o.data);
  } else
    (e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data);
}
function Bi(e, t) {
  let o = nt(e.params, t.params) && Vs(e.url, t.url),
    n = !e.parent != !t.parent;
  return o && !n && (!e.parent || Bi(e.parent, t.parent));
}
function da(e) {
  return typeof e.title == "string" || e.title === null;
}
var Xi = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = g),
          (this.activateEvents = new Et()),
          (this.deactivateEvents = new Et()),
          (this.attachEvents = new Et()),
          (this.detachEvents = new Et()),
          (this.parentContexts = m(Me)),
          (this.location = m(Eo)),
          (this.changeDetector = m(Xe)),
          (this.environmentInjector = m(ee)),
          (this.inputBinder = m(Rn, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(n) {
        if (n.name) {
          let { firstChange: i, previousValue: r } = n.name;
          if (i) return;
          this.isTrackedInParentContexts(r) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(n) {
        return this.parentContexts.getContext(n)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let n = this.parentContexts.getContext(this.name);
        n?.route &&
          (n.attachRef
            ? this.attach(n.attachRef, n.route)
            : this.activateWith(n.route, n.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new C(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new C(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new C(4012, !1);
        this.location.detach();
        let n = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(n.instance),
          n
        );
      }
      attach(n, i) {
        (this.activated = n),
          (this._activatedRoute = i),
          this.location.insert(n.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(n.instance);
      }
      deactivate() {
        if (this.activated) {
          let n = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(n);
        }
      }
      activateWith(n, i) {
        if (this.isActivated) throw new C(4013, !1);
        this._activatedRoute = n;
        let r = this.location,
          s = n.snapshot.component,
          d = this.parentContexts.getOrCreateContext(this.name).children,
          c = new $i(n, d, r.injector);
        (this.activated = r.createComponent(s, {
          index: r.length,
          injector: c,
          environmentInjector: i ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = J({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Ue],
      }));
    let e = t;
    return e;
  })(),
  $i = class {
    constructor(t, o, n) {
      (this.route = t), (this.childContexts = o), (this.parent = n);
    }
    get(t, o) {
      return t === Ot
        ? this.route
        : t === Me
          ? this.childContexts
          : this.parent.get(t, o);
    }
  },
  Rn = new w(""),
  Vr = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(n) {
        this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n);
      }
      unsubscribeFromRouteData(n) {
        this.outletDataSubscriptions.get(n)?.unsubscribe(),
          this.outletDataSubscriptions.delete(n);
      }
      subscribeToRouteData(n) {
        let { activatedRoute: i } = n,
          r = Ft([i.queryParams, i.params, i.data])
            .pipe(
              K(
                ([a, s, d], c) => (
                  (d = u(u(u({}, a), s), d)),
                  c === 0 ? f(d) : Promise.resolve(d)
                ),
              ),
            )
            .subscribe((a) => {
              if (
                !n.isActivated ||
                !n.activatedComponentRef ||
                n.activatedRoute !== i ||
                i.component === null
              ) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              let s = No(i.component);
              if (!s) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              for (let { templateName: d } of s.inputs)
                n.activatedComponentRef.setInput(d, a[d]);
            });
        this.outletDataSubscriptions.set(n, r);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function uc(e, t, o) {
  let n = Re(e, t._root, o ? o._root : void 0);
  return new wn(n, t);
}
function Re(e, t, o) {
  if (o && e.shouldReuseRoute(t.value, o.value.snapshot)) {
    let n = o.value;
    n._futureSnapshot = t.value;
    let i = mc(e, t, o);
    return new q(n, i);
  } else {
    if (e.shouldAttach(t.value)) {
      let r = e.retrieve(t.value);
      if (r !== null) {
        let a = r.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((s) => Re(e, s))),
          a
        );
      }
    }
    let n = hc(t.value),
      i = t.children.map((r) => Re(e, r));
    return new q(n, i);
  }
}
function mc(e, t, o) {
  return t.children.map((n) => {
    for (let i of o.children)
      if (e.shouldReuseRoute(n.value, i.value.snapshot)) return Re(e, n, i);
    return Re(e, n);
  });
}
function hc(e) {
  return new Ot(
    new U(e.url),
    new U(e.params),
    new U(e.queryParams),
    new U(e.fragment),
    new U(e.data),
    e.outlet,
    e.component,
    e,
  );
}
var la = "ngNavigationCancelingError";
function ua(e, t) {
  let { redirectTo: o, navigationBehaviorOptions: n } = Kt(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    i = ma(!1, G.Redirect);
  return (i.url = o), (i.navigationBehaviorOptions = n), i;
}
function ma(e, t) {
  let o = new Error(`NavigationCancelingError: ${e || ""}`);
  return (o[la] = !0), (o.cancellationCode = t), o;
}
function pc(e) {
  return ha(e) && Kt(e.url);
}
function ha(e) {
  return !!e && e[la];
}
var fc = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [ft],
      decls: 1,
      vars: 0,
      template: function (i, r) {
        i & 1 && A(0, "router-outlet");
      },
      dependencies: [Xi],
      encapsulation: 2,
    }));
  let e = t;
  return e;
})();
function bc(e, t) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = Wn(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
  );
}
function Qi(e) {
  let t = e.children && e.children.map(Qi),
    o = t ? F(u({}, e), { children: t }) : u({}, e);
  return (
    !o.component &&
      !o.loadComponent &&
      (t || o.loadChildren) &&
      o.outlet &&
      o.outlet !== g &&
      (o.component = fc),
    o
  );
}
function ot(e) {
  return e.outlet || g;
}
function gc(e, t) {
  let o = e.filter((n) => ot(n) === t);
  return o.push(...e.filter((n) => ot(n) !== t)), o;
}
function ke(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let t = e.parent; t; t = t.parent) {
    let o = t.routeConfig;
    if (o?._loadedInjector) return o._loadedInjector;
    if (o?._injector) return o._injector;
  }
  return null;
}
var vc = (e, t, o, n) =>
    y(
      (i) => (
        new Vi(t, i.targetRouterState, i.currentRouterState, o, n).activate(e),
        i
      ),
    ),
  Vi = class {
    constructor(t, o, n, i, r) {
      (this.routeReuseStrategy = t),
        (this.futureState = o),
        (this.currState = n),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = r);
    }
    activate(t) {
      let o = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(o, n, t),
        wi(this.futureState.root),
        this.activateChildRoutes(o, n, t);
    }
    deactivateChildRoutes(t, o, n) {
      let i = Wt(o);
      t.children.forEach((r) => {
        let a = r.value.outlet;
        this.deactivateRoutes(r, i[a], n), delete i[a];
      }),
        Object.values(i).forEach((r) => {
          this.deactivateRouteAndItsChildren(r, n);
        });
    }
    deactivateRoutes(t, o, n) {
      let i = t.value,
        r = o ? o.value : null;
      if (i === r)
        if (i.component) {
          let a = n.getContext(i.outlet);
          a && this.deactivateChildRoutes(t, o, a.children);
        } else this.deactivateChildRoutes(t, o, n);
      else r && this.deactivateRouteAndItsChildren(o, n);
    }
    deactivateRouteAndItsChildren(t, o) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, o)
        : this.deactivateRouteAndOutlet(t, o);
    }
    detachAndStoreRouteSubtree(t, o) {
      let n = o.getContext(t.value.outlet),
        i = n && t.value.component ? n.children : o,
        r = Wt(t);
      for (let a of Object.values(r)) this.deactivateRouteAndItsChildren(a, i);
      if (n && n.outlet) {
        let a = n.outlet.detach(),
          s = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: a,
          route: t,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(t, o) {
      let n = o.getContext(t.value.outlet),
        i = n && t.value.component ? n.children : o,
        r = Wt(t);
      for (let a of Object.values(r)) this.deactivateRouteAndItsChildren(a, i);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(t, o, n) {
      let i = Wt(o);
      t.children.forEach((r) => {
        this.activateRoutes(r, i[r.value.outlet], n),
          this.forwardEvent(new Li(r.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new Fi(t.value.snapshot));
    }
    activateRoutes(t, o, n) {
      let i = t.value,
        r = o ? o.value : null;
      if ((wi(i), i === r))
        if (i.component) {
          let a = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, o, a.children);
        } else this.activateChildRoutes(t, o, n);
      else if (i.component) {
        let a = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            (a.attachRef = s.componentRef),
            (a.route = s.route.value),
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            wi(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else {
          let s = ke(i.snapshot);
          (a.attachRef = null),
            (a.route = i),
            (a.injector = s),
            a.outlet && a.outlet.activateWith(i, a.injector),
            this.activateChildRoutes(t, null, a.children);
        }
      } else this.activateChildRoutes(t, null, n);
    }
  },
  In = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  qt = class {
    constructor(t, o) {
      (this.component = t), (this.route = o);
    }
  };
function yc(e, t, o) {
  let n = e._root,
    i = t ? t._root : null;
  return be(n, i, o, [n.value]);
}
function _c(e) {
  let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: e, guards: t };
}
function Xt(e, t) {
  let o = Symbol(),
    n = t.get(e, o);
  return n === o ? (typeof e == "function" && !fo(e) ? e : t.get(e)) : n;
}
function be(
  e,
  t,
  o,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let r = Wt(t);
  return (
    e.children.forEach((a) => {
      wc(a, r[a.value.outlet], o, n.concat([a.value]), i),
        delete r[a.value.outlet];
    }),
    Object.entries(r).forEach(([a, s]) => _e(s, o.getContext(a), i)),
    i
  );
}
function wc(
  e,
  t,
  o,
  n,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let r = e.value,
    a = t ? t.value : null,
    s = o ? o.getContext(e.value.outlet) : null;
  if (a && r.routeConfig === a.routeConfig) {
    let d = xc(a, r, r.routeConfig.runGuardsAndResolvers);
    d
      ? i.canActivateChecks.push(new In(n))
      : ((r.data = a.data), (r._resolvedData = a._resolvedData)),
      r.component ? be(e, t, s ? s.children : null, n, i) : be(e, t, o, n, i),
      d &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        i.canDeactivateChecks.push(new qt(s.outlet.component, a));
  } else
    a && _e(t, s, i),
      i.canActivateChecks.push(new In(n)),
      r.component
        ? be(e, null, s ? s.children : null, n, i)
        : be(e, null, o, n, i);
  return i;
}
function xc(e, t, o) {
  if (typeof o == "function") return o(e, t);
  switch (o) {
    case "pathParamsChange":
      return !kt(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !kt(e.url, t.url) || !nt(e.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Bi(e, t) || !nt(e.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !Bi(e, t);
  }
}
function _e(e, t, o) {
  let n = Wt(e),
    i = e.value;
  Object.entries(n).forEach(([r, a]) => {
    i.component
      ? t
        ? _e(a, t.children.getContext(r), o)
        : _e(a, null, o)
      : _e(a, t, o);
  }),
    i.component
      ? t && t.outlet && t.outlet.isActivated
        ? o.canDeactivateChecks.push(new qt(t.outlet.component, i))
        : o.canDeactivateChecks.push(new qt(null, i))
      : o.canDeactivateChecks.push(new qt(null, i));
}
function Oe(e) {
  return typeof e == "function";
}
function Ic(e) {
  return typeof e == "boolean";
}
function Ec(e) {
  return e && Oe(e.canLoad);
}
function Cc(e) {
  return e && Oe(e.canActivate);
}
function Tc(e) {
  return e && Oe(e.canActivateChild);
}
function Rc(e) {
  return e && Oe(e.canDeactivate);
}
function Ac(e) {
  return e && Oe(e.canMatch);
}
function pa(e) {
  return e instanceof lo || e?.name === "EmptyError";
}
var un = Symbol("INITIAL_VALUE");
function Yt() {
  return K((e) =>
    Ft(e.map((t) => t.pipe(at(1), je(un)))).pipe(
      y((t) => {
        for (let o of t)
          if (o !== !0) {
            if (o === un) return un;
            if (o === !1 || o instanceof gt) return o;
          }
        return !0;
      }),
      rt((t) => t !== un),
      at(1),
    ),
  );
}
function Dc(e, t) {
  return V((o) => {
    let {
      targetSnapshot: n,
      currentSnapshot: i,
      guards: { canActivateChecks: r, canDeactivateChecks: a },
    } = o;
    return a.length === 0 && r.length === 0
      ? f(F(u({}, o), { guardsResult: !0 }))
      : Sc(a, n, i, e).pipe(
          V((s) => (s && Ic(s) ? Mc(n, r, e, t) : f(s))),
          y((s) => F(u({}, o), { guardsResult: s })),
        );
  });
}
function Sc(e, t, o, n) {
  return z(e).pipe(
    V((i) => Pc(i.component, i.route, o, t, n)),
    ut((i) => i !== !0, !0),
  );
}
function Mc(e, t, o, n) {
  return z(t).pipe(
    It((i) =>
      Pe(
        Oc(i.route.parent, n),
        kc(i.route, n),
        Fc(e, i.path, o),
        Nc(e, i.route, o),
      ),
    ),
    ut((i) => i !== !0, !0),
  );
}
function kc(e, t) {
  return e !== null && t && t(new Pi(e)), f(!0);
}
function Oc(e, t) {
  return e !== null && t && t(new Ni(e)), f(!0);
}
function Nc(e, t, o) {
  let n = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!n || n.length === 0) return f(!0);
  let i = n.map((r) =>
    Fn(() => {
      let a = ke(t) ?? o,
        s = Xt(r, a),
        d = Cc(s) ? s.canActivate(t, e) : st(a, () => s(t, e));
      return wt(d).pipe(ut());
    }),
  );
  return f(i).pipe(Yt());
}
function Fc(e, t, o) {
  let n = t[t.length - 1],
    r = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => _c(a))
      .filter((a) => a !== null)
      .map((a) =>
        Fn(() => {
          let s = a.guards.map((d) => {
            let c = ke(a.node) ?? o,
              l = Xt(d, c),
              h = Tc(l) ? l.canActivateChild(n, e) : st(c, () => l(n, e));
            return wt(h).pipe(ut());
          });
          return f(s).pipe(Yt());
        }),
      );
  return f(r).pipe(Yt());
}
function Pc(e, t, o, n, i) {
  let r = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!r || r.length === 0) return f(!0);
  let a = r.map((s) => {
    let d = ke(t) ?? i,
      c = Xt(s, d),
      l = Rc(c) ? c.canDeactivate(e, t, o, n) : st(d, () => c(e, t, o, n));
    return wt(l).pipe(ut());
  });
  return f(a).pipe(Yt());
}
function Lc(e, t, o, n) {
  let i = t.canLoad;
  if (i === void 0 || i.length === 0) return f(!0);
  let r = i.map((a) => {
    let s = Xt(a, e),
      d = Ec(s) ? s.canLoad(t, o) : st(e, () => s(t, o));
    return wt(d);
  });
  return f(r).pipe(Yt(), fa(n));
}
function fa(e) {
  return so(
    M((t) => {
      if (Kt(t)) throw ua(e, t);
    }),
    y((t) => t === !0),
  );
}
function jc(e, t, o, n) {
  let i = t.canMatch;
  if (!i || i.length === 0) return f(!0);
  let r = i.map((a) => {
    let s = Xt(a, e),
      d = Ac(s) ? s.canMatch(t, o) : st(e, () => s(t, o));
    return wt(d);
  });
  return f(r).pipe(Yt(), fa(n));
}
var Ae = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  En = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function Vt(e) {
  return Qt(new Ae(e));
}
function Uc(e) {
  return Qt(new C(4e3, !1));
}
function zc(e) {
  return Qt(ma(!1, G.GuardRejected));
}
var Wi = class {
    constructor(t, o) {
      (this.urlSerializer = t), (this.urlTree = o);
    }
    lineralizeSegments(t, o) {
      let n = [],
        i = o.root;
      for (;;) {
        if (((n = n.concat(i.segments)), i.numberOfChildren === 0)) return f(n);
        if (i.numberOfChildren > 1 || !i.children[g]) return Uc(t.redirectTo);
        i = i.children[g];
      }
    }
    applyRedirectCommands(t, o, n) {
      let i = this.applyRedirectCreateUrlTree(
        o,
        this.urlSerializer.parse(o),
        t,
        n,
      );
      if (o.startsWith("/")) throw new En(i);
      return i;
    }
    applyRedirectCreateUrlTree(t, o, n, i) {
      let r = this.createSegmentGroup(t, o.root, n, i);
      return new gt(
        r,
        this.createQueryParams(o.queryParams, this.urlTree.queryParams),
        o.fragment,
      );
    }
    createQueryParams(t, o) {
      let n = {};
      return (
        Object.entries(t).forEach(([i, r]) => {
          if (typeof r == "string" && r.startsWith(":")) {
            let s = r.substring(1);
            n[i] = o[s];
          } else n[i] = r;
        }),
        n
      );
    }
    createSegmentGroup(t, o, n, i) {
      let r = this.createSegments(t, o.segments, n, i),
        a = {};
      return (
        Object.entries(o.children).forEach(([s, d]) => {
          a[s] = this.createSegmentGroup(t, d, n, i);
        }),
        new _(r, a)
      );
    }
    createSegments(t, o, n, i) {
      return o.map((r) =>
        r.path.startsWith(":")
          ? this.findPosParam(t, r, i)
          : this.findOrReturn(r, n),
      );
    }
    findPosParam(t, o, n) {
      let i = n[o.path.substring(1)];
      if (!i) throw new C(4001, !1);
      return i;
    }
    findOrReturn(t, o) {
      let n = 0;
      for (let i of o) {
        if (i.path === t.path) return o.splice(n), i;
        n++;
      }
      return t;
    }
  },
  Hi = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Bc(e, t, o, n, i) {
  let r = Ji(e, t, o);
  return r.matched
    ? ((n = bc(t, n)),
      jc(n, t, o, i).pipe(y((a) => (a === !0 ? r : u({}, Hi)))))
    : f(r);
}
function Ji(e, t, o) {
  if (t.path === "**") return $c(o);
  if (t.path === "")
    return t.pathMatch === "full" && (e.hasChildren() || o.length > 0)
      ? u({}, Hi)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: o,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (t.matcher || js)(o, e, t);
  if (!i) return u({}, Hi);
  let r = {};
  Object.entries(i.posParams ?? {}).forEach(([s, d]) => {
    r[s] = d.path;
  });
  let a =
    i.consumed.length > 0
      ? u(u({}, r), i.consumed[i.consumed.length - 1].parameters)
      : r;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: o.slice(i.consumed.length),
    parameters: a,
    positionalParamSegments: i.posParams ?? {},
  };
}
function $c(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? Kr(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Wr(e, t, o, n) {
  return o.length > 0 && Hc(e, o, n)
    ? {
        segmentGroup: new _(t, Wc(n, new _(o, e.children))),
        slicedSegments: [],
      }
    : o.length === 0 && qc(e, o, n)
      ? {
          segmentGroup: new _(e.segments, Vc(e, o, n, e.children)),
          slicedSegments: o,
        }
      : { segmentGroup: new _(e.segments, e.children), slicedSegments: o };
}
function Vc(e, t, o, n) {
  let i = {};
  for (let r of o)
    if (An(e, t, r) && !n[ot(r)]) {
      let a = new _([], {});
      i[ot(r)] = a;
    }
  return u(u({}, n), i);
}
function Wc(e, t) {
  let o = {};
  o[g] = t;
  for (let n of e)
    if (n.path === "" && ot(n) !== g) {
      let i = new _([], {});
      o[ot(n)] = i;
    }
  return o;
}
function Hc(e, t, o) {
  return o.some((n) => An(e, t, n) && ot(n) !== g);
}
function qc(e, t, o) {
  return o.some((n) => An(e, t, n));
}
function An(e, t, o) {
  return (e.hasChildren() || t.length > 0) && o.pathMatch === "full"
    ? !1
    : o.path === "";
}
function Gc(e, t, o, n) {
  return ot(e) !== n && (n === g || !An(t, o, e)) ? !1 : Ji(t, e, o).matched;
}
function Kc(e, t, o) {
  return t.length === 0 && !e.children[o];
}
var qi = class {};
function Zc(e, t, o, n, i, r, a = "emptyOnly") {
  return new Gi(e, t, o, n, i, a, r).recognize();
}
var Yc = 31,
  Gi = class {
    constructor(t, o, n, i, r, a, s) {
      (this.injector = t),
        (this.configLoader = o),
        (this.rootComponentType = n),
        (this.config = i),
        (this.urlTree = r),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new Wi(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new C(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = Wr(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        y((o) => {
          let n = new Te(
              [],
              Object.freeze({}),
              Object.freeze(u({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              g,
              this.rootComponentType,
              null,
              {},
            ),
            i = new q(n, o),
            r = new xn("", i),
            a = ic(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (r.url = this.urlSerializer.serialize(a)),
            this.inheritParamsAndData(r._root, null),
            { state: r, tree: a }
          );
        }),
      );
    }
    match(t) {
      return this.processSegmentGroup(this.injector, this.config, t, g).pipe(
        Pt((n) => {
          if (n instanceof En)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof Ae ? this.noMatchError(n) : n;
        }),
      );
    }
    inheritParamsAndData(t, o) {
      let n = t.value,
        i = Zi(n, o, this.paramsInheritanceStrategy);
      (n.params = Object.freeze(i.params)),
        (n.data = Object.freeze(i.data)),
        t.children.forEach((r) => this.inheritParamsAndData(r, n));
    }
    processSegmentGroup(t, o, n, i) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(t, o, n)
        : this.processSegment(t, o, n, n.segments, i, !0).pipe(
            y((r) => (r instanceof q ? [r] : [])),
          );
    }
    processChildren(t, o, n) {
      let i = [];
      for (let r of Object.keys(n.children))
        r === "primary" ? i.unshift(r) : i.push(r);
      return z(i).pipe(
        It((r) => {
          let a = n.children[r],
            s = gc(o, r);
          return this.processSegmentGroup(t, s, a, r);
        }),
        po((r, a) => (r.push(...a), r)),
        Ln(null),
        ho(),
        V((r) => {
          if (r === null) return Vt(n);
          let a = ba(r);
          return Xc(a), f(a);
        }),
      );
    }
    processSegment(t, o, n, i, r, a) {
      return z(o).pipe(
        It((s) =>
          this.processSegmentAgainstRoute(
            s._injector ?? t,
            o,
            s,
            n,
            i,
            r,
            a,
          ).pipe(
            Pt((d) => {
              if (d instanceof Ae) return f(null);
              throw d;
            }),
          ),
        ),
        ut((s) => !!s),
        Pt((s) => {
          if (pa(s)) return Kc(n, i, r) ? f(new qi()) : Vt(n);
          throw s;
        }),
      );
    }
    processSegmentAgainstRoute(t, o, n, i, r, a, s) {
      return Gc(n, i, r, a)
        ? n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, i, n, r, a)
          : this.allowRedirects && s
            ? this.expandSegmentAgainstRouteUsingRedirect(t, i, o, n, r, a)
            : Vt(i)
        : Vt(i);
    }
    expandSegmentAgainstRouteUsingRedirect(t, o, n, i, r, a) {
      let {
        matched: s,
        consumedSegments: d,
        positionalParamSegments: c,
        remainingSegments: l,
      } = Ji(o, i, r);
      if (!s) return Vt(o);
      i.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Yc && (this.allowRedirects = !1));
      let h = this.applyRedirects.applyRedirectCommands(d, i.redirectTo, c);
      return this.applyRedirects
        .lineralizeSegments(i, h)
        .pipe(V((b) => this.processSegment(t, n, o, b.concat(l), a, !1)));
    }
    matchSegmentAgainstRoute(t, o, n, i, r) {
      let a = Bc(o, n, i, t, this.urlSerializer);
      return (
        n.path === "**" && (o.children = {}),
        a.pipe(
          K((s) =>
            s.matched
              ? ((t = n._injector ?? t),
                this.getChildConfig(t, n, i).pipe(
                  K(({ routes: d }) => {
                    let c = n._loadedInjector ?? t,
                      {
                        consumedSegments: l,
                        remainingSegments: h,
                        parameters: b,
                      } = s,
                      I = new Te(
                        l,
                        b,
                        Object.freeze(u({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Jc(n),
                        ot(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        td(n),
                      ),
                      { segmentGroup: Q, slicedSegments: P } = Wr(o, l, h, d);
                    if (P.length === 0 && Q.hasChildren())
                      return this.processChildren(c, d, Q).pipe(
                        y((j) => (j === null ? null : new q(I, j))),
                      );
                    if (d.length === 0 && P.length === 0)
                      return f(new q(I, []));
                    let dt = ot(n) === r;
                    return this.processSegment(c, d, Q, P, dt ? g : r, !0).pipe(
                      y((j) => new q(I, j instanceof q ? [j] : [])),
                    );
                  }),
                ))
              : Vt(o),
          ),
        )
      );
    }
    getChildConfig(t, o, n) {
      return o.children
        ? f({ routes: o.children, injector: t })
        : o.loadChildren
          ? o._loadedRoutes !== void 0
            ? f({ routes: o._loadedRoutes, injector: o._loadedInjector })
            : Lc(t, o, n, this.urlSerializer).pipe(
                V((i) =>
                  i
                    ? this.configLoader.loadChildren(t, o).pipe(
                        M((r) => {
                          (o._loadedRoutes = r.routes),
                            (o._loadedInjector = r.injector);
                        }),
                      )
                    : zc(o),
                ),
              )
          : f({ routes: [], injector: t });
    }
  };
function Xc(e) {
  e.sort((t, o) =>
    t.value.outlet === g
      ? -1
      : o.value.outlet === g
        ? 1
        : t.value.outlet.localeCompare(o.value.outlet),
  );
}
function Qc(e) {
  let t = e.value.routeConfig;
  return t && t.path === "";
}
function ba(e) {
  let t = [],
    o = new Set();
  for (let n of e) {
    if (!Qc(n)) {
      t.push(n);
      continue;
    }
    let i = t.find((r) => n.value.routeConfig === r.value.routeConfig);
    i !== void 0 ? (i.children.push(...n.children), o.add(i)) : t.push(n);
  }
  for (let n of o) {
    let i = ba(n.children);
    t.push(new q(n.value, i));
  }
  return t.filter((n) => !o.has(n));
}
function Jc(e) {
  return e.data || {};
}
function td(e) {
  return e.resolve || {};
}
function ed(e, t, o, n, i, r) {
  return V((a) =>
    Zc(e, t, o, n, a.extractedUrl, i, r).pipe(
      y(({ state: s, tree: d }) =>
        F(u({}, a), { targetSnapshot: s, urlAfterRedirects: d }),
      ),
    ),
  );
}
function nd(e, t) {
  return V((o) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: i },
    } = o;
    if (!i.length) return f(o);
    let r = new Set(i.map((d) => d.route)),
      a = new Set();
    for (let d of r) if (!a.has(d)) for (let c of ga(d)) a.add(c);
    let s = 0;
    return z(a).pipe(
      It((d) =>
        r.has(d)
          ? id(d, n, e, t)
          : ((d.data = Zi(d, d.parent, e).resolve), f(void 0)),
      ),
      M(() => s++),
      jn(1),
      V((d) => (s === a.size ? f(o) : lt)),
    );
  });
}
function ga(e) {
  let t = e.children.map((o) => ga(o)).flat();
  return [e, ...t];
}
function id(e, t, o, n) {
  let i = e.routeConfig,
    r = e._resolve;
  return (
    i?.title !== void 0 && !da(i) && (r[De] = i.title),
    od(r, e, t, n).pipe(
      y(
        (a) => (
          (e._resolvedData = a), (e.data = Zi(e, e.parent, o).resolve), null
        ),
      ),
    )
  );
}
function od(e, t, o, n) {
  let i = Ei(e);
  if (i.length === 0) return f({});
  let r = {};
  return z(i).pipe(
    V((a) =>
      rd(e[a], t, o, n).pipe(
        ut(),
        M((s) => {
          r[a] = s;
        }),
      ),
    ),
    jn(1),
    uo(r),
    Pt((a) => (pa(a) ? lt : Qt(a))),
  );
}
function rd(e, t, o, n) {
  let i = ke(t) ?? n,
    r = Xt(e, i),
    a = r.resolve ? r.resolve(t, o) : st(i, () => r(t, o));
  return wt(a);
}
function xi(e) {
  return K((t) => {
    let o = e(t);
    return o ? z(o).pipe(y(() => t)) : f(t);
  });
}
var va = (() => {
    let t = class t {
      buildTitle(n) {
        let i,
          r = n.root;
        for (; r !== void 0; )
          (i = this.getResolvedTitleForRoute(r) ?? i),
            (r = r.children.find((a) => a.outlet === g));
        return i;
      }
      getResolvedTitleForRoute(n) {
        return n.data[De];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => m(ad), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  ad = (() => {
    let t = class t extends va {
      constructor(n) {
        super(), (this.title = n);
      }
      updateTitle(n) {
        let i = this.buildTitle(n);
        i !== void 0 && this.title.setTitle(i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(lr));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Ne = new w("", { providedIn: "root", factory: () => ({}) }),
  Cn = new w(""),
  to = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = m(Ye));
      }
      loadComponent(n) {
        if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
        if (n._loadedComponent) return f(n._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(n);
        let i = wt(n.loadComponent()).pipe(
            y(ya),
            M((a) => {
              this.onLoadEndListener && this.onLoadEndListener(n),
                (n._loadedComponent = a);
            }),
            Jt(() => {
              this.componentLoaders.delete(n);
            }),
          ),
          r = new On(i, () => new $()).pipe(kn());
        return this.componentLoaders.set(n, r), r;
      }
      loadChildren(n, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return f({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let a = sd(i, this.compiler, n, this.onLoadEndListener).pipe(
            Jt(() => {
              this.childrenLoaders.delete(i);
            }),
          ),
          s = new On(a, () => new $()).pipe(kn());
        return this.childrenLoaders.set(i, s), s;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function sd(e, t, o, n) {
  return wt(e.loadChildren()).pipe(
    y(ya),
    V((i) =>
      i instanceof To || Array.isArray(i) ? f(i) : z(t.compileModuleAsync(i)),
    ),
    y((i) => {
      n && n(e);
      let r,
        a,
        s = !1;
      return (
        Array.isArray(i)
          ? ((a = i), (s = !0))
          : ((r = i.create(o).injector),
            (a = r.get(Cn, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(Qi), injector: r }
      );
    }),
  );
}
function cd(e) {
  return e && typeof e == "object" && "default" in e;
}
function ya(e) {
  return cd(e) ? e.default : e;
}
var eo = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => m(dd), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  dd = (() => {
    let t = class t {
      shouldProcessUrl(n) {
        return !0;
      }
      extract(n) {
        return n;
      }
      merge(n, i) {
        return n;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  _a = new w(""),
  wa = new w("");
function ld(e, t, o) {
  let n = e.get(wa),
    i = e.get(D);
  return e.get(x).runOutsideAngular(() => {
    if (!i.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), Promise.resolve();
    let r,
      a = new Promise((c) => {
        r = c;
      }),
      s = i.startViewTransition(() => (r(), ud(e))),
      { onViewTransitionCreated: d } = n;
    return d && st(e, () => d({ transition: s, from: t, to: o })), a;
  });
}
function ud(e) {
  return new Promise((t) => {
    Io(t, { injector: e });
  });
}
var no = (() => {
  let t = class t {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new $()),
        (this.transitionAbortSubject = new $()),
        (this.configLoader = m(to)),
        (this.environmentInjector = m(ee)),
        (this.urlSerializer = m(Se)),
        (this.rootContexts = m(Me)),
        (this.location = m(ce)),
        (this.inputBindingEnabled = m(Rn, { optional: !0 }) !== null),
        (this.titleStrategy = m(va)),
        (this.options = m(Ne, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = m(eo)),
        (this.createViewTransition = m(_a, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => f(void 0)),
        (this.rootComponentType = null);
      let n = (r) => this.events.next(new ki(r)),
        i = (r) => this.events.next(new Oi(r));
      (this.configLoader.onLoadEndListener = i),
        (this.configLoader.onLoadStartListener = n);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(n) {
      let i = ++this.navigationId;
      this.transitions?.next(F(u(u({}, this.transitions.value), n), { id: i }));
    }
    setupNavigations(n, i, r) {
      return (
        (this.transitions = new U({
          id: 0,
          currentUrlTree: i,
          currentRawUrl: i,
          extractedUrl: this.urlHandlingStrategy.extract(i),
          urlAfterRedirects: this.urlHandlingStrategy.extract(i),
          rawUrl: i,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: ye,
          restoredState: null,
          currentSnapshot: r.snapshot,
          targetSnapshot: null,
          currentRouterState: r,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          rt((a) => a.id !== 0),
          y((a) =>
            F(u({}, a), {
              extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
            }),
          ),
          K((a) => {
            let s = !1,
              d = !1;
            return f(a).pipe(
              K((c) => {
                if (this.navigationId > a.id)
                  return (
                    this.cancelNavigationTransition(
                      a,
                      "",
                      G.SupersededByNewNavigation,
                    ),
                    lt
                  );
                (this.currentTransition = a),
                  (this.currentNavigation = {
                    id: c.id,
                    initialUrl: c.rawUrl,
                    extractedUrl: c.extractedUrl,
                    trigger: c.source,
                    extras: c.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? F(u({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let l =
                    !n.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  h = c.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                if (!l && h !== "reload") {
                  let b = "";
                  return (
                    this.events.next(
                      new yt(
                        c.id,
                        this.urlSerializer.serialize(c.rawUrl),
                        b,
                        gn.IgnoredSameUrlNavigation,
                      ),
                    ),
                    c.resolve(null),
                    lt
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                  return f(c).pipe(
                    K((b) => {
                      let I = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new Zt(
                            b.id,
                            this.urlSerializer.serialize(b.extractedUrl),
                            b.source,
                            b.restoredState,
                          ),
                        ),
                        I !== this.transitions?.getValue()
                          ? lt
                          : Promise.resolve(b)
                      );
                    }),
                    ed(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      n.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy,
                    ),
                    M((b) => {
                      (a.targetSnapshot = b.targetSnapshot),
                        (a.urlAfterRedirects = b.urlAfterRedirects),
                        (this.currentNavigation = F(
                          u({}, this.currentNavigation),
                          { finalUrl: b.urlAfterRedirects },
                        ));
                      let I = new vn(
                        b.id,
                        this.urlSerializer.serialize(b.extractedUrl),
                        this.urlSerializer.serialize(b.urlAfterRedirects),
                        b.targetSnapshot,
                      );
                      this.events.next(I);
                    }),
                  );
                if (
                  l &&
                  this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                ) {
                  let {
                      id: b,
                      extractedUrl: I,
                      source: Q,
                      restoredState: P,
                      extras: dt,
                    } = c,
                    j = new Zt(b, this.urlSerializer.serialize(I), Q, P);
                  this.events.next(j);
                  let Nt = sa(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = a =
                      F(u({}, c), {
                        targetSnapshot: Nt,
                        urlAfterRedirects: I,
                        extras: F(u({}, dt), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = I),
                    f(a)
                  );
                } else {
                  let b = "";
                  return (
                    this.events.next(
                      new yt(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        b,
                        gn.IgnoredByUrlHandlingStrategy,
                      ),
                    ),
                    c.resolve(null),
                    lt
                  );
                }
              }),
              M((c) => {
                let l = new Ai(
                  c.id,
                  this.urlSerializer.serialize(c.extractedUrl),
                  this.urlSerializer.serialize(c.urlAfterRedirects),
                  c.targetSnapshot,
                );
                this.events.next(l);
              }),
              y(
                (c) => (
                  (this.currentTransition = a =
                    F(u({}, c), {
                      guards: yc(
                        c.targetSnapshot,
                        c.currentSnapshot,
                        this.rootContexts,
                      ),
                    })),
                  a
                ),
              ),
              Dc(this.environmentInjector, (c) => this.events.next(c)),
              M((c) => {
                if (((a.guardsResult = c.guardsResult), Kt(c.guardsResult)))
                  throw ua(this.urlSerializer, c.guardsResult);
                let l = new Di(
                  c.id,
                  this.urlSerializer.serialize(c.extractedUrl),
                  this.urlSerializer.serialize(c.urlAfterRedirects),
                  c.targetSnapshot,
                  !!c.guardsResult,
                );
                this.events.next(l);
              }),
              rt((c) =>
                c.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(c, "", G.GuardRejected),
                    !1),
              ),
              xi((c) => {
                if (c.guards.canActivateChecks.length)
                  return f(c).pipe(
                    M((l) => {
                      let h = new Si(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot,
                      );
                      this.events.next(h);
                    }),
                    K((l) => {
                      let h = !1;
                      return f(l).pipe(
                        nd(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector,
                        ),
                        M({
                          next: () => (h = !0),
                          complete: () => {
                            h ||
                              this.cancelNavigationTransition(
                                l,
                                "",
                                G.NoDataFromResolver,
                              );
                          },
                        }),
                      );
                    }),
                    M((l) => {
                      let h = new Mi(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot,
                      );
                      this.events.next(h);
                    }),
                  );
              }),
              xi((c) => {
                let l = (h) => {
                  let b = [];
                  h.routeConfig?.loadComponent &&
                    !h.routeConfig._loadedComponent &&
                    b.push(
                      this.configLoader.loadComponent(h.routeConfig).pipe(
                        M((I) => {
                          h.component = I;
                        }),
                        y(() => {}),
                      ),
                    );
                  for (let I of h.children) b.push(...l(I));
                  return b;
                };
                return Ft(l(c.targetSnapshot.root)).pipe(Ln(null), at(1));
              }),
              xi(() => this.afterPreactivation()),
              K(() => {
                let { currentSnapshot: c, targetSnapshot: l } = a,
                  h = this.createViewTransition?.(
                    this.environmentInjector,
                    c.root,
                    l.root,
                  );
                return h ? z(h).pipe(y(() => a)) : f(a);
              }),
              y((c) => {
                let l = uc(
                  n.routeReuseStrategy,
                  c.targetSnapshot,
                  c.currentRouterState,
                );
                return (
                  (this.currentTransition = a =
                    F(u({}, c), { targetRouterState: l })),
                  (this.currentNavigation.targetRouterState = l),
                  a
                );
              }),
              M(() => {
                this.events.next(new Ee());
              }),
              vc(
                this.rootContexts,
                n.routeReuseStrategy,
                (c) => this.events.next(c),
                this.inputBindingEnabled,
              ),
              at(1),
              M({
                next: (c) => {
                  (s = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new it(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(c.urlAfterRedirects),
                      ),
                    ),
                    this.titleStrategy?.updateTitle(
                      c.targetRouterState.snapshot,
                    ),
                    c.resolve(!0);
                },
                complete: () => {
                  s = !0;
                },
              }),
              Lt(
                this.transitionAbortSubject.pipe(
                  M((c) => {
                    throw c;
                  }),
                ),
              ),
              Jt(() => {
                !s &&
                  !d &&
                  this.cancelNavigationTransition(
                    a,
                    "",
                    G.SupersededByNewNavigation,
                  ),
                  this.currentTransition?.id === a.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              Pt((c) => {
                if (((d = !0), ha(c)))
                  this.events.next(
                    new vt(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      c.message,
                      c.cancellationCode,
                    ),
                  ),
                    pc(c) ? this.events.next(new Ce(c.url)) : a.resolve(!1);
                else {
                  this.events.next(
                    new Ie(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      c,
                      a.targetSnapshot ?? void 0,
                    ),
                  );
                  try {
                    a.resolve(n.errorHandler(c));
                  } catch (l) {
                    this.options.resolveNavigationPromiseOnError
                      ? a.resolve(!1)
                      : a.reject(l);
                  }
                }
                return lt;
              }),
            );
          }),
        )
      );
    }
    cancelNavigationTransition(n, i, r) {
      let a = new vt(n.id, this.urlSerializer.serialize(n.extractedUrl), i, r);
      this.events.next(a), n.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function md(e) {
  return e !== ye;
}
var hd = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => m(pd), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Ki = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, o) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, o) {
      return t.routeConfig === o.routeConfig;
    }
  },
  pd = (() => {
    let t = class t extends Ki {};
    (t.ɵfac = (() => {
      let n;
      return function (r) {
        return (n || (n = Bn(t)))(r || t);
      };
    })()),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  xa = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: () => m(fd), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  fd = (() => {
    let t = class t extends xa {
      constructor() {
        super(...arguments),
          (this.location = m(ce)),
          (this.urlSerializer = m(Se)),
          (this.options = m(Ne, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = m(eo)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new gt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = sa(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(n) {
        return this.location.subscribe((i) => {
          i.type === "popstate" && n(i.url, i.state);
        });
      }
      handleRouterEvent(n, i) {
        if (n instanceof Zt) this.stateMemento = this.createStateMemento();
        else if (n instanceof yt) this.rawUrlTree = i.initialUrl;
        else if (n instanceof vn) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(r, i);
          }
        } else
          n instanceof Ee
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl,
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (i.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, i)))
            : n instanceof vt &&
                (n.code === G.GuardRejected || n.code === G.NoDataFromResolver)
              ? this.restoreHistory(i)
              : n instanceof Ie
                ? this.restoreHistory(i, !0)
                : n instanceof it &&
                  ((this.lastSuccessfulId = n.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(n, i) {
        let r = this.urlSerializer.serialize(n);
        if (this.location.isCurrentPathEqualTo(r) || i.extras.replaceUrl) {
          let a = this.browserPageId,
            s = u(u({}, i.extras.state), this.generateNgRouterState(i.id, a));
          this.location.replaceState(r, "", s);
        } else {
          let a = u(
            u({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1),
          );
          this.location.go(r, "", a);
        }
      }
      restoreHistory(n, i = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let r = this.browserPageId,
            a = this.currentPageId - r;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === n.finalUrl &&
              a === 0 &&
              (this.resetState(n), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (i && this.resetState(n), this.resetUrlToCurrentUrlTree());
      }
      resetState(n) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(n, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: n, ɵrouterPageId: i }
          : { navigationId: n };
      }
    };
    (t.ɵfac = (() => {
      let n;
      return function (r) {
        return (n || (n = Bn(t)))(r || t);
      };
    })()),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  ge = (function (e) {
    return (
      (e[(e.COMPLETE = 0)] = "COMPLETE"),
      (e[(e.FAILED = 1)] = "FAILED"),
      (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
      e
    );
  })(ge || {});
function Ia(e, t) {
  e.events
    .pipe(
      rt(
        (o) =>
          o instanceof it ||
          o instanceof vt ||
          o instanceof Ie ||
          o instanceof yt,
      ),
      y((o) =>
        o instanceof it || o instanceof yt
          ? ge.COMPLETE
          : (
                o instanceof vt
                  ? o.code === G.Redirect ||
                    o.code === G.SupersededByNewNavigation
                  : !1
              )
            ? ge.REDIRECTING
            : ge.FAILED,
      ),
      rt((o) => o !== ge.REDIRECTING),
      at(1),
    )
    .subscribe(() => {
      t();
    });
}
function bd(e) {
  throw e;
}
var gd = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  vd = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  _t = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = m(qe)),
          (this.stateManager = m(xa)),
          (this.options = m(Ne, { optional: !0 }) || {}),
          (this.pendingTasks = m(Hn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = m(no)),
          (this.urlSerializer = m(Se)),
          (this.location = m(ce)),
          (this.urlHandlingStrategy = m(eo)),
          (this._events = new $()),
          (this.errorHandler = this.options.errorHandler || bd),
          (this.navigated = !1),
          (this.routeReuseStrategy = m(hd)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = m(Cn, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!m(Rn, { optional: !0 })),
          (this.eventsSubscription = new Sn()),
          (this.isNgZoneEnabled = m(x) instanceof x && x.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (n) => {
                this.console.warn(n);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let n = this.navigationTransitions.events.subscribe((i) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (r !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, a),
                i instanceof vt &&
                  i.code !== G.Redirect &&
                  i.code !== G.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof it) this.navigated = !0;
              else if (i instanceof Ce) {
                let s = this.urlHandlingStrategy.merge(i.url, r.currentRawUrl),
                  d = {
                    info: r.extras.info,
                    skipLocationChange: r.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || md(r.source),
                  };
                this.scheduleNavigation(s, ye, null, d, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            _d(i) && this._events.next(i);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(n);
      }
      resetRootComponentType(n) {
        (this.routerState.root.component = n),
          (this.navigationTransitions.rootComponentType = n);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              ye,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (n, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(n, "popstate", i);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(n, i, r) {
        let a = { replaceUrl: !0 },
          s = r?.navigationId ? r : null;
        if (r) {
          let c = u({}, r);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (a.state = c);
        }
        let d = this.parseUrl(n);
        this.scheduleNavigation(d, i, s, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(n) {
        (this.config = n.map(Qi)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(n, i = {}) {
        let {
            relativeTo: r,
            queryParams: a,
            fragment: s,
            queryParamsHandling: d,
            preserveFragment: c,
          } = i,
          l = c ? this.currentUrlTree.fragment : s,
          h = null;
        switch (d) {
          case "merge":
            h = u(u({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
          default:
            h = a || null;
        }
        h !== null && (h = this.removeEmptyProps(h));
        let b;
        try {
          let I = r ? r.snapshot : this.routerState.snapshot.root;
          b = ia(I);
        } catch {
          (typeof n[0] != "string" || !n[0].startsWith("/")) && (n = []),
            (b = this.currentUrlTree.root);
        }
        return oa(b, n, h, l ?? null);
      }
      navigateByUrl(n, i = { skipLocationChange: !1 }) {
        let r = Kt(n) ? n : this.parseUrl(n),
          a = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(a, ye, null, i);
      }
      navigate(n, i = { skipLocationChange: !1 }) {
        return yd(n), this.navigateByUrl(this.createUrlTree(n, i), i);
      }
      serializeUrl(n) {
        return this.urlSerializer.serialize(n);
      }
      parseUrl(n) {
        try {
          return this.urlSerializer.parse(n);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(n, i) {
        let r;
        if (
          (i === !0 ? (r = u({}, gd)) : i === !1 ? (r = u({}, vd)) : (r = i),
          Kt(n))
        )
          return Ur(this.currentUrlTree, n, r);
        let a = this.parseUrl(n);
        return Ur(this.currentUrlTree, a, r);
      }
      removeEmptyProps(n) {
        return Object.entries(n).reduce(
          (i, [r, a]) => (a != null && (i[r] = a), i),
          {},
        );
      }
      scheduleNavigation(n, i, r, a, s) {
        if (this.disposed) return Promise.resolve(!1);
        let d, c, l;
        s
          ? ((d = s.resolve), (c = s.reject), (l = s.promise))
          : (l = new Promise((b, I) => {
              (d = b), (c = I);
            }));
        let h = this.pendingTasks.add();
        return (
          Ia(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(h));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: n,
            extras: a,
            resolve: d,
            reject: c,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          l.catch((b) => Promise.reject(b))
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function yd(e) {
  for (let t = 0; t < e.length; t++) if (e[t] == null) throw new C(4008, !1);
}
function _d(e) {
  return !(e instanceof Ee) && !(e instanceof Ce);
}
var Ea = (() => {
  let t = class t {
    constructor(n, i, r, a, s, d) {
      (this.router = n),
        (this.route = i),
        (this.tabIndexAttribute = r),
        (this.renderer = a),
        (this.el = s),
        (this.locationStrategy = d),
        (this.href = null),
        (this.commands = null),
        (this.onChanges = new $()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1);
      let c = s.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = c === "a" || c === "area"),
        this.isAnchorElement
          ? (this.subscription = n.events.subscribe((l) => {
              l instanceof it && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl("0");
    }
    setTabIndexIfNotOnNativeEl(n) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue("tabindex", n);
    }
    ngOnChanges(n) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(n) {
      n != null
        ? ((this.commands = Array.isArray(n) ? n : [n]),
          this.setTabIndexIfNotOnNativeEl("0"))
        : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
    }
    onClick(n, i, r, a, s) {
      let d = this.urlTree;
      if (
        d === null ||
        (this.isAnchorElement &&
          (n !== 0 ||
            i ||
            r ||
            a ||
            s ||
            (typeof this.target == "string" && this.target != "_self")))
      )
        return !0;
      let c = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(d, c), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let n = this.urlTree;
      this.href =
        n !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(n),
            )
          : null;
      let i =
        this.href === null
          ? null
          : _o(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
      this.applyAttributeValue("href", i);
    }
    applyAttributeValue(n, i) {
      let r = this.renderer,
        a = this.el.nativeElement;
      i !== null ? r.setAttribute(a, n, i) : r.removeAttribute(a, n);
    }
    get urlTree() {
      return this.commands === null
        ? null
        : this.router.createUrlTree(this.commands, {
            relativeTo:
              this.relativeTo !== void 0 ? this.relativeTo : this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: this.preserveFragment,
          });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(E(_t), E(Ot), $n("tabindex"), E(xo), E(B), E(se));
  }),
    (t.ɵdir = J({
      type: t,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function (i, r) {
        i & 1 &&
          qn("click", function (s) {
            return r.onClick(
              s.button,
              s.ctrlKey,
              s.shiftKey,
              s.altKey,
              s.metaKey,
            );
          }),
          i & 2 && Rt("target", r.target);
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [
          k.HasDecoratorInputTransform,
          "preserveFragment",
          "preserveFragment",
          tt,
        ],
        skipLocationChange: [
          k.HasDecoratorInputTransform,
          "skipLocationChange",
          "skipLocationChange",
          tt,
        ],
        replaceUrl: [
          k.HasDecoratorInputTransform,
          "replaceUrl",
          "replaceUrl",
          tt,
        ],
        routerLink: "routerLink",
      },
      standalone: !0,
      features: [Tt, Ue],
    }));
  let e = t;
  return e;
})();
var Tn = class {};
var wd = (() => {
    let t = class t {
      constructor(n, i, r, a, s) {
        (this.router = n),
          (this.injector = r),
          (this.preloadingStrategy = a),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            rt((n) => n instanceof it),
            It(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(n, i) {
        let r = [];
        for (let a of i) {
          a.providers &&
            !a._injector &&
            (a._injector = Wn(a.providers, n, `Route: ${a.path}`));
          let s = a._injector ?? n,
            d = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            r.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              r.push(this.processRoutes(d, a.children ?? a._loadedRoutes));
        }
        return z(r).pipe(Nn());
      }
      preloadConfig(n, i) {
        return this.preloadingStrategy.preload(i, () => {
          let r;
          i.loadChildren && i.canLoad === void 0
            ? (r = this.loader.loadChildren(n, i))
            : (r = f(null));
          let a = r.pipe(
            V((s) =>
              s === null
                ? f(void 0)
                : ((i._loadedRoutes = s.routes),
                  (i._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? n, s.routes)),
            ),
          );
          if (i.loadComponent && !i._loadedComponent) {
            let s = this.loader.loadComponent(i);
            return z([a, s]).pipe(Nn());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(_t), p(Ye), p(ee), p(Tn), p(to));
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Ca = new w(""),
  xd = (() => {
    let t = class t {
      constructor(n, i, r, a, s = {}) {
        (this.urlSerializer = n),
          (this.transitions = i),
          (this.viewportScroller = r),
          (this.zone = a),
          (this.options = s),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof Zt
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = n.navigationTrigger),
              (this.restoredId = n.restoredState
                ? n.restoredState.navigationId
                : 0))
            : n instanceof it
              ? ((this.lastId = n.id),
                this.scheduleScrollEvent(
                  n,
                  this.urlSerializer.parse(n.urlAfterRedirects).fragment,
                ))
              : n instanceof yt &&
                n.code === gn.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  n,
                  this.urlSerializer.parse(n.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof yn &&
            (n.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(n.position)
              : n.anchor && this.options.anchorScrolling === "enabled"
                ? this.viewportScroller.scrollToAnchor(n.anchor)
                : this.options.scrollPositionRestoration !== "disabled" &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(n, i) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new yn(
                  n,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  i,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      Ut();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function Id(e) {
  return e.routerState.root;
}
function Fe(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function Ed() {
  let e = m(Vn);
  return (t) => {
    let o = e.get(ae);
    if (t !== o.components[0]) return;
    let n = e.get(_t),
      i = e.get(Ta);
    e.get(io) === 1 && n.initialNavigation(),
      e.get(Ra, null, Un.Optional)?.setUpPreloading(),
      e.get(Ca, null, Un.Optional)?.init(),
      n.resetRootComponentType(o.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var Ta = new w("", { factory: () => new $() }),
  io = new w("", { providedIn: "root", factory: () => 1 });
function Cd() {
  return Fe(2, [
    { provide: io, useValue: 0 },
    {
      provide: Zn,
      multi: !0,
      deps: [Vn],
      useFactory: (t) => {
        let o = t.get(Lo, Promise.resolve());
        return () =>
          o.then(
            () =>
              new Promise((n) => {
                let i = t.get(_t),
                  r = t.get(Ta);
                Ia(i, () => {
                  n(!0);
                }),
                  (t.get(no).afterPreactivation = () => (
                    n(!0), r.closed ? f(void 0) : r
                  )),
                  i.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function Td() {
  return Fe(3, [
    {
      provide: Zn,
      multi: !0,
      useFactory: () => {
        let t = m(_t);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: io, useValue: 2 },
  ]);
}
var Ra = new w("");
function Rd(e) {
  return Fe(0, [
    { provide: Ra, useExisting: wd },
    { provide: Tn, useExisting: e },
  ]);
}
function Ad() {
  return Fe(8, [Vr, { provide: Rn, useExisting: Vr }]);
}
function Dd(e) {
  let t = [
    { provide: _a, useValue: ld },
    {
      provide: wa,
      useValue: u({ skipNextTransition: !!e?.skipInitialTransition }, e),
    },
  ];
  return Fe(9, t);
}
var Hr = new w("ROUTER_FORROOT_GUARD"),
  Sd = [
    ce,
    { provide: Se, useClass: we },
    _t,
    Me,
    { provide: Ot, useFactory: Id, deps: [_t] },
    to,
    [],
  ],
  oo = (() => {
    let t = class t {
      constructor(n) {}
      static forRoot(n, i) {
        return {
          ngModule: t,
          providers: [
            Sd,
            [],
            { provide: Cn, multi: !0, useValue: n },
            { provide: Hr, useFactory: Nd, deps: [[_t, new zn(), new bo()]] },
            { provide: Ne, useValue: i || {} },
            i?.useHash ? kd() : Od(),
            Md(),
            i?.preloadingStrategy ? Rd(i.preloadingStrategy).ɵproviders : [],
            i?.initialNavigation ? Fd(i) : [],
            i?.bindToComponentInputs ? Ad().ɵproviders : [],
            i?.enableViewTransitions ? Dd().ɵproviders : [],
            Pd(),
          ],
        };
      }
      static forChild(n) {
        return {
          ngModule: t,
          providers: [{ provide: Cn, multi: !0, useValue: n }],
        };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(p(Hr, 8));
    }),
      (t.ɵmod = R({ type: t })),
      (t.ɵinj = T({}));
    let e = t;
    return e;
  })();
function Md() {
  return {
    provide: Ca,
    useFactory: () => {
      let e = m(Wo),
        t = m(x),
        o = m(Ne),
        n = m(no),
        i = m(Se);
      return (
        o.scrollOffset && e.setOffset(o.scrollOffset), new xd(i, n, e, t, o)
      );
    },
  };
}
function kd() {
  return { provide: se, useClass: Uo };
}
function Od() {
  return { provide: se, useClass: jo };
}
function Nd(e) {
  return "guarded";
}
function Fd(e) {
  return [
    e.initialNavigation === "disabled" ? Td().ɵproviders : [],
    e.initialNavigation === "enabledBlocking" ? Cd().ɵproviders : [],
  ];
}
var qr = new w("");
function Pd() {
  return [
    { provide: qr, useFactory: Ed },
    { provide: Ze, multi: !0, useExisting: qr },
  ];
}
var xt = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-navbar"]],
      decls: 14,
      vars: 0,
      consts: [
        ["color", "primary"],
        ["src", "assets/logo.png", "id", "nav-logo"],
        ["mat-button", "", "routerLink", "/intro", 1, "nav-btn"],
        ["mat-button", "", "routerLink", "/process", 1, "nav-btn"],
        ["mat-button", "", "routerLink", "/showcase", 1, "nav-btn"],
        ["mat-button", "", "routerLink", "/about-us", 1, "nav-btn"],
        [1, "spacer"],
        [
          "mat-button",
          "",
          "routerLink",
          "/process",
          1,
          "nav-btn",
          2,
          "padding",
          "0px 200px 0px 0px",
        ],
      ],
      template: function (i, r) {
        i & 1 &&
          (W(0, "p")(1, "mat-toolbar", 0),
          A(2, "img", 1),
          W(3, "button", 2),
          H(4, "\u670D\u52A1\u4ECB\u7ECD"),
          Z(),
          W(5, "button", 3),
          H(6, "\u5B9A\u5236\u6D41\u7A0B"),
          Z(),
          W(7, "button", 4),
          H(8, "\u6848\u4F8B\u5C55\u793A"),
          Z(),
          W(9, "button", 5),
          H(10, "\u5173\u4E8E\u6211\u4EEC"),
          Z(),
          A(11, "span", 6),
          W(12, "button", 7),
          H(
            13,
            " \u5F00\u59CB\u4F60\u7684\u60CA\u559C\u6E38\u620F\u5B9A\u5236 ",
          ),
          Z()()());
      },
      dependencies: [Ea, dn, Lr],
      styles: [
        "p[_ngcontent-%COMP%]{margin-bottom:0!important}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}#nav-logo[_ngcontent-%COMP%]{padding:0 50px 0 200px;height:100%}.nav-btn[_ngcontent-%COMP%]{padding:0 25px;font-size:18px;font-weight:700}",
      ],
    }));
  let e = t;
  return e;
})();
var Da = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-intro"]],
      decls: 14,
      vars: 0,
      consts: [
        [1, "background-image"],
        ["id", "main-content-wrapper"],
        ["id", "title1-wrapper"],
        ["id", "title1", "color", "primary"],
        ["mat-flat-button", "", "color", "primary", "id", "start-icon"],
      ],
      template: function (i, r) {
        i & 1 &&
          (A(0, "app-navbar"),
          W(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3),
          H(
            5,
            "\u5373\u523B\u6784\u5EFA\u4E13\u5C5E\u4E8E\u4F60\u7684\u6E38\u620F\u4E16\u754C",
          ),
          A(6, "br"),
          H(
            7,
            " \u60A8\u7684\u68A6\u60F3\u6E38\u620F\u4E16\u754C\u89E6\u624B\u53EF\u53CA",
          ),
          A(8, "br"),
          H(
            9,
            " \u6211\u4EEC\u611F\u53D7\u5230\u4E86\u4F60\u4E30\u5BCC\u7684\u5185\u5FC3\u4E16\u754C\u3002\u6211\u4EEC\u5F15\u5BFC\u60A8\u4ECE\u96F6\u5F00\u59CB",
          ),
          A(10, "br"),
          H(
            11,
            " \u6BCF\u4E00\u6B65\u90FD\u6709\u6211\u4EEC\u7684\u4E13\u4E1A\u534F\u52A9\uFF0C\u5B9A\u5236\u60A8\u7684\u5E7B\u60F3\u4E16\u754C",
          ),
          Z(),
          W(12, "button", 4),
          H(13, "\u5F00\u59CB\u5B9A\u5236"),
          Z()()()());
      },
      dependencies: [dn, xt],
      styles: [
        '#title1[_ngcontent-%COMP%]{font-weight:700;font-size:35px;padding-right:400px;line-height:45px;color:#222}#main-content-wrapper[_ngcontent-%COMP%]{width:1400px;margin:0 auto}#title1-wrapper[_ngcontent-%COMP%]{height:400px;padding:200px 20px 120px}.background-image[_ngcontent-%COMP%]{content:"";background-size:cover;background-repeat:no-repeat;background-position:center center;transform:translateY(0);background-image:url(/assets/intro_bg1_opa.png);opacity:.8}#start-icon[_ngcontent-%COMP%]{height:70px;font-size:35px;width:250px;font-weight:700;border-radius:25px}',
      ],
    }));
  let e = t;
  return e;
})();
var Sa = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-process"]],
      decls: 1,
      vars: 0,
      template: function (i, r) {
        i & 1 && A(0, "app-navbar");
      },
      dependencies: [xt],
    }));
  let e = t;
  return e;
})();
var Ma = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-about-us"]],
      decls: 1,
      vars: 0,
      template: function (i, r) {
        i & 1 && A(0, "app-navbar");
      },
      dependencies: [xt],
    }));
  let e = t;
  return e;
})();
var ka = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-showcase"]],
      decls: 1,
      vars: 0,
      template: function (i, r) {
        i & 1 && A(0, "app-navbar");
      },
      dependencies: [xt],
    }));
  let e = t;
  return e;
})();
var Ld = [
    { path: "intro", component: Da },
    { path: "process", component: Sa },
    { path: "about-us", component: Ma },
    { path: "showcase", component: ka },
    { path: "**", redirectTo: "intro" },
  ],
  Oa = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = R({ type: t })),
      (t.ɵinj = T({ imports: [oo.forRoot(Ld), oo] }));
    let e = t;
    return e;
  })();
var Na = (() => {
  let t = class t {
    constructor() {
      this.title = "dreamcrafters";
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = S({
      type: t,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function (i, r) {
        i & 1 && A(0, "router-outlet");
      },
      dependencies: [Xi],
    }));
  let e = t;
  return e;
})();
var jd = "@",
  Ud = (() => {
    let t = class t {
      constructor(n, i, r, a, s) {
        (this.doc = n),
          (this.delegate = i),
          (this.zone = r),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = m(wo, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        return (this.moduleImpl ?? import("./chunk-7SIBXLPU.js"))
          .catch((i) => {
            throw new C(5300, !1);
          })
          .then(({ ɵcreateEngine: i, ɵAnimationRendererFactory: r }) => {
            this._engine = i(this.animationType, this.doc, this.scheduler);
            let a = new r(this.delegate, this._engine, this.zone);
            return (this.delegate = a), a;
          });
      }
      createRenderer(n, i) {
        let r = this.delegate.createRenderer(n, i);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let a = new ro(r);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let d = s.createRenderer(n, i);
              a.use(d);
            })
            .catch((s) => {
              a.use(r);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (t.ɵfac = function (i) {
      Ut();
    }),
      (t.ɵprov = v({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  ro = class {
    constructor(t) {
      (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
    }
    use(t) {
      if (((this.delegate = t), this.replay !== null)) {
        for (let o of this.replay) o(t);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(t, o) {
      return this.delegate.createElement(t, o);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(t, o) {
      this.delegate.appendChild(t, o);
    }
    insertBefore(t, o, n, i) {
      this.delegate.insertBefore(t, o, n, i);
    }
    removeChild(t, o, n) {
      this.delegate.removeChild(t, o, n);
    }
    selectRootElement(t, o) {
      return this.delegate.selectRootElement(t, o);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, o, n, i) {
      this.delegate.setAttribute(t, o, n, i);
    }
    removeAttribute(t, o, n) {
      this.delegate.removeAttribute(t, o, n);
    }
    addClass(t, o) {
      this.delegate.addClass(t, o);
    }
    removeClass(t, o) {
      this.delegate.removeClass(t, o);
    }
    setStyle(t, o, n, i) {
      this.delegate.setStyle(t, o, n, i);
    }
    removeStyle(t, o, n) {
      this.delegate.removeStyle(t, o, n);
    }
    setProperty(t, o, n) {
      this.shouldReplay(o) && this.replay.push((i) => i.setProperty(t, o, n)),
        this.delegate.setProperty(t, o, n);
    }
    setValue(t, o) {
      this.delegate.setValue(t, o);
    }
    listen(t, o, n) {
      return (
        this.shouldReplay(o) && this.replay.push((i) => i.listen(t, o, n)),
        this.delegate.listen(t, o, n)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(jd);
    }
  };
function Fa(e = "animations") {
  return (
    Ve("NgAsyncAnimations"),
    jt([
      {
        provide: $e,
        useFactory: (t, o, n) => new Ud(t, o, n, e),
        deps: [D, on, x],
      },
      {
        provide: Ct,
        useValue: e === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Pa = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = R({ type: t, bootstrap: [Na] })),
    (t.ɵinj = T({ providers: [ur(), Fa()], imports: [dr, Oa, Fr, Nr, jr] }));
  let e = t;
  return e;
})();
cr()
  .bootstrapModule(Pa)
  .catch((e) => console.error(e));
