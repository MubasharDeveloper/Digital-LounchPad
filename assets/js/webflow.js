/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
  var k_ = Object.create;
  var nn = Object.defineProperty;
  var B_ = Object.getOwnPropertyDescriptor;
  var U_ = Object.getOwnPropertyNames;
  var X_ = Object.getPrototypeOf
    , H_ = Object.prototype.hasOwnProperty;
  var ce = (e, t) => () => (e && (t = e(e = 0)),
  t);
  var c = (e, t) => () => (t || e((t = {
      exports: {}
  }).exports, t),
  t.exports)
    , Pe = (e, t) => {
      for (var r in t)
          nn(e, r, {
              get: t[r],
              enumerable: !0
          })
  }
    , xs = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
          for (let i of U_(t))
              !H_.call(e, i) && i !== r && nn(e, i, {
                  get: () => t[i],
                  enumerable: !(n = B_(t, i)) || n.enumerable
              });
      return e
  }
  ;
  var ne = (e, t, r) => (r = e != null ? k_(X_(e)) : {},
  xs(t || !e || !e.__esModule ? nn(r, "default", {
      value: e,
      enumerable: !0
  }) : r, e))
    , Qe = e => xs(nn({}, "__esModule", {
      value: !0
  }), e);
  var Cs = c( () => {
      "use strict";
      (function() {
          if (typeof window > "u")
              return;
          let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./)
            , t = e ? parseInt(e[1], 10) >= 16 : !1;
          if ("objectFit"in document.documentElement.style && !t) {
              window.objectFitPolyfill = function() {
                  return !1
              }
              ;
              return
          }
          let n = function(a) {
              let u = window.getComputedStyle(a, null)
                , l = u.getPropertyValue("position")
                , v = u.getPropertyValue("overflow")
                , d = u.getPropertyValue("display");
              (!l || l === "static") && (a.style.position = "relative"),
              v !== "hidden" && (a.style.overflow = "hidden"),
              (!d || d === "inline") && (a.style.display = "block"),
              a.clientHeight === 0 && (a.style.height = "100%"),
              a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
          }
            , i = function(a) {
              let u = window.getComputedStyle(a, null)
                , l = {
                  "max-width": "none",
                  "max-height": "none",
                  "min-width": "0px",
                  "min-height": "0px",
                  top: "auto",
                  right: "auto",
                  bottom: "auto",
                  left: "auto",
                  "margin-top": "0px",
                  "margin-right": "0px",
                  "margin-bottom": "0px",
                  "margin-left": "0px"
              };
              for (let v in l)
                  u.getPropertyValue(v) !== l[v] && (a.style[v] = l[v])
          }
            , o = function(a) {
              let u = a.parentNode;
              n(u),
              i(a),
              a.style.position = "absolute",
              a.style.height = "100%",
              a.style.width = "auto",
              a.clientWidth > u.clientWidth ? (a.style.top = "0",
              a.style.marginTop = "0",
              a.style.left = "50%",
              a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%",
              a.style.height = "auto",
              a.style.left = "0",
              a.style.marginLeft = "0",
              a.style.top = "50%",
              a.style.marginTop = a.clientHeight / -2 + "px")
          }
            , s = function(a) {
              if (typeof a > "u" || a instanceof Event)
                  a = document.querySelectorAll("[data-object-fit]");
              else if (a && a.nodeName)
                  a = [a];
              else if (typeof a == "object" && a.length && a[0].nodeName)
                  a = a;
              else
                  return !1;
              for (let u = 0; u < a.length; u++) {
                  if (!a[u].nodeName)
                      continue;
                  let l = a[u].nodeName.toLowerCase();
                  if (l === "img") {
                      if (t)
                          continue;
                      a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                          o(this)
                      })
                  } else
                      l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                          o(this)
                      }) : o(a[u])
              }
              return !0
          };
          document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(),
          window.addEventListener("resize", s),
          window.objectFitPolyfill = s
      }
      )()
  }
  );
  var Rs = c( () => {
      "use strict";
      (function() {
          if (typeof window > "u")
              return;
          function e(n) {
              Webflow.env("design") || ($("video").each(function() {
                  n && $(this).prop("autoplay") ? this.play() : this.pause()
              }),
              $(".w-background-video--control").each(function() {
                  n ? r($(this)) : t($(this))
              }))
          }
          function t(n) {
              n.find("> span").each(function(i) {
                  $(this).prop("hidden", () => i === 0)
              })
          }
          function r(n) {
              n.find("> span").each(function(i) {
                  $(this).prop("hidden", () => i === 1)
              })
          }
          $(document).ready( () => {
              let n = window.matchMedia("(prefers-reduced-motion: reduce)");
              n.addEventListener("change", i => {
                  e(!i.matches)
              }
              ),
              n.matches && e(!1),
              $("video:not([autoplay])").each(function() {
                  $(this).parent().find(".w-background-video--control").each(function() {
                      t($(this))
                  })
              }),
              $(document).on("click", ".w-background-video--control", function(i) {
                  if (Webflow.env("design"))
                      return;
                  let o = $(i.currentTarget)
                    , s = $(`video#${o.attr("aria-controls")}`).get(0);
                  if (s)
                      if (s.paused) {
                          let a = s.play();
                          r(o),
                          a && typeof a.catch == "function" && a.catch( () => {
                              t(o)
                          }
                          )
                      } else
                          s.pause(),
                          t(o)
              })
          }
          )
      }
      )()
  }
  );
  var Ri = c( () => {
      "use strict";
      window.tram = function(e) {
          function t(f, y) {
              var _ = new he.Bare;
              return _.init(f, y)
          }
          function r(f) {
              return f.replace(/[A-Z]/g, function(y) {
                  return "-" + y.toLowerCase()
              })
          }
          function n(f) {
              var y = parseInt(f.slice(1), 16)
                , _ = y >> 16 & 255
                , I = y >> 8 & 255
                , R = 255 & y;
              return [_, I, R]
          }
          function i(f, y, _) {
              return "#" + (1 << 24 | f << 16 | y << 8 | _).toString(16).slice(1)
          }
          function o() {}
          function s(f, y) {
              l("Type warning: Expected: [" + f + "] Got: [" + typeof y + "] " + y)
          }
          function a(f, y, _) {
              l("Units do not match [" + f + "]: " + y + ", " + _)
          }
          function u(f, y, _) {
              if (y !== void 0 && (_ = y),
              f === void 0)
                  return _;
              var I = _;
              return yr.test(f) || !wt.test(f) ? I = parseInt(f, 10) : wt.test(f) && (I = 1e3 * parseFloat(f)),
              0 > I && (I = 0),
              I === I ? I : _
          }
          function l(f) {
              se.debug && window && window.console.warn(f)
          }
          function v(f) {
              for (var y = -1, _ = f ? f.length : 0, I = []; ++y < _; ) {
                  var R = f[y];
                  R && I.push(R)
              }
              return I
          }
          var d = function(f, y, _) {
              function I(Q) {
                  return typeof Q == "object"
              }
              function R(Q) {
                  return typeof Q == "function"
              }
              function C() {}
              function j(Q, ue) {
                  function D() {
                      var Oe = new Z;
                      return R(Oe.init) && Oe.init.apply(Oe, arguments),
                      Oe
                  }
                  function Z() {}
                  ue === _ && (ue = Q,
                  Q = Object),
                  D.Bare = Z;
                  var J, ve = C[f] = Q[f], $e = Z[f] = D[f] = new C;
                  return $e.constructor = D,
                  D.mixin = function(Oe) {
                      return Z[f] = D[f] = j(D, Oe)[f],
                      D
                  }
                  ,
                  D.open = function(Oe) {
                      if (J = {},
                      R(Oe) ? J = Oe.call(D, $e, ve, D, Q) : I(Oe) && (J = Oe),
                      I(J))
                          for (var Er in J)
                              y.call(J, Er) && ($e[Er] = J[Er]);
                      return R($e.init) || ($e.init = Q),
                      D
                  }
                  ,
                  D.open(ue)
              }
              return j
          }("prototype", {}.hasOwnProperty)
            , p = {
              ease: ["ease", function(f, y, _, I) {
                  var R = (f /= I) * f
                    , C = R * f;
                  return y + _ * (-2.75 * C * R + 11 * R * R + -15.5 * C + 8 * R + .25 * f)
              }
              ],
              "ease-in": ["ease-in", function(f, y, _, I) {
                  var R = (f /= I) * f
                    , C = R * f;
                  return y + _ * (-1 * C * R + 3 * R * R + -3 * C + 2 * R)
              }
              ],
              "ease-out": ["ease-out", function(f, y, _, I) {
                  var R = (f /= I) * f
                    , C = R * f;
                  return y + _ * (.3 * C * R + -1.6 * R * R + 2.2 * C + -1.8 * R + 1.9 * f)
              }
              ],
              "ease-in-out": ["ease-in-out", function(f, y, _, I) {
                  var R = (f /= I) * f
                    , C = R * f;
                  return y + _ * (2 * C * R + -5 * R * R + 2 * C + 2 * R)
              }
              ],
              linear: ["linear", function(f, y, _, I) {
                  return _ * f / I + y
              }
              ],
              "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, y, _, I) {
                  return _ * (f /= I) * f + y
              }
              ],
              "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, y, _, I) {
                  return -_ * (f /= I) * (f - 2) + y
              }
              ],
              "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, y, _, I) {
                  return (f /= I / 2) < 1 ? _ / 2 * f * f + y : -_ / 2 * (--f * (f - 2) - 1) + y
              }
              ],
              "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, y, _, I) {
                  return _ * (f /= I) * f * f + y
              }
              ],
              "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, y, _, I) {
                  return _ * ((f = f / I - 1) * f * f + 1) + y
              }
              ],
              "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, y, _, I) {
                  return (f /= I / 2) < 1 ? _ / 2 * f * f * f + y : _ / 2 * ((f -= 2) * f * f + 2) + y
              }
              ],
              "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, y, _, I) {
                  return _ * (f /= I) * f * f * f + y
              }
              ],
              "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, y, _, I) {
                  return -_ * ((f = f / I - 1) * f * f * f - 1) + y
              }
              ],
              "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, y, _, I) {
                  return (f /= I / 2) < 1 ? _ / 2 * f * f * f * f + y : -_ / 2 * ((f -= 2) * f * f * f - 2) + y
              }
              ],
              "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, y, _, I) {
                  return _ * (f /= I) * f * f * f * f + y
              }
              ],
              "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, y, _, I) {
                  return _ * ((f = f / I - 1) * f * f * f * f + 1) + y
              }
              ],
              "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, y, _, I) {
                  return (f /= I / 2) < 1 ? _ / 2 * f * f * f * f * f + y : _ / 2 * ((f -= 2) * f * f * f * f + 2) + y
              }
              ],
              "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, y, _, I) {
                  return -_ * Math.cos(f / I * (Math.PI / 2)) + _ + y
              }
              ],
              "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, y, _, I) {
                  return _ * Math.sin(f / I * (Math.PI / 2)) + y
              }
              ],
              "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, y, _, I) {
                  return -_ / 2 * (Math.cos(Math.PI * f / I) - 1) + y
              }
              ],
              "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, y, _, I) {
                  return f === 0 ? y : _ * Math.pow(2, 10 * (f / I - 1)) + y
              }
              ],
              "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, y, _, I) {
                  return f === I ? y + _ : _ * (-Math.pow(2, -10 * f / I) + 1) + y
              }
              ],
              "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, y, _, I) {
                  return f === 0 ? y : f === I ? y + _ : (f /= I / 2) < 1 ? _ / 2 * Math.pow(2, 10 * (f - 1)) + y : _ / 2 * (-Math.pow(2, -10 * --f) + 2) + y
              }
              ],
              "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, y, _, I) {
                  return -_ * (Math.sqrt(1 - (f /= I) * f) - 1) + y
              }
              ],
              "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, y, _, I) {
                  return _ * Math.sqrt(1 - (f = f / I - 1) * f) + y
              }
              ],
              "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, y, _, I) {
                  return (f /= I / 2) < 1 ? -_ / 2 * (Math.sqrt(1 - f * f) - 1) + y : _ / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + y
              }
              ],
              "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, y, _, I, R) {
                  return R === void 0 && (R = 1.70158),
                  _ * (f /= I) * f * ((R + 1) * f - R) + y
              }
              ],
              "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, y, _, I, R) {
                  return R === void 0 && (R = 1.70158),
                  _ * ((f = f / I - 1) * f * ((R + 1) * f + R) + 1) + y
              }
              ],
              "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, y, _, I, R) {
                  return R === void 0 && (R = 1.70158),
                  (f /= I / 2) < 1 ? _ / 2 * f * f * (((R *= 1.525) + 1) * f - R) + y : _ / 2 * ((f -= 2) * f * (((R *= 1.525) + 1) * f + R) + 2) + y
              }
              ]
          }
            , E = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }
            , T = document
            , b = window
            , O = "bkwld-tram"
            , m = /[\-\.0-9]/g
            , x = /[A-Z]/
            , A = "number"
            , P = /^(rgb|#)/
            , q = /(em|cm|mm|in|pt|pc|px)$/
            , N = /(em|cm|mm|in|pt|pc|px|%)$/
            , k = /(deg|rad|turn)$/
            , B = "unitless"
            , U = /(all|none) 0s ease 0s/
            , H = /^(width|height)$/
            , F = " "
            , w = T.createElement("a")
            , g = ["Webkit", "Moz", "O", "ms"]
            , S = ["-webkit-", "-moz-", "-o-", "-ms-"]
            , L = function(f) {
              if (f in w.style)
                  return {
                      dom: f,
                      css: f
                  };
              var y, _, I = "", R = f.split("-");
              for (y = 0; y < R.length; y++)
                  I += R[y].charAt(0).toUpperCase() + R[y].slice(1);
              for (y = 0; y < g.length; y++)
                  if (_ = g[y] + I,
                  _ in w.style)
                      return {
                          dom: _,
                          css: S[y] + f
                      }
          }
            , M = t.support = {
              bind: Function.prototype.bind,
              transform: L("transform"),
              transition: L("transition"),
              backface: L("backface-visibility"),
              timing: L("transition-timing-function")
          };
          if (M.transition) {
              var W = M.timing.dom;
              if (w.style[W] = p["ease-in-back"][0],
              !w.style[W])
                  for (var z in E)
                      p[z][0] = E[z]
          }
          var ee = t.frame = function() {
              var f = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
              return f && M.bind ? f.bind(b) : function(y) {
                  b.setTimeout(y, 16)
              }
          }()
            , fe = t.now = function() {
              var f = b.performance
                , y = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
              return y && M.bind ? y.bind(f) : Date.now || function() {
                  return +new Date
              }
          }()
            , Ge = d(function(f) {
              function y(K, re) {
                  var pe = v(("" + K).split(F))
                    , ie = pe[0];
                  re = re || {};
                  var we = V[ie];
                  if (!we)
                      return l("Unsupported property: " + ie);
                  if (!re.weak || !this.props[ie]) {
                      var Be = we[0]
                        , Le = this.props[ie];
                      return Le || (Le = this.props[ie] = new Be.Bare),
                      Le.init(this.$el, pe, we, re),
                      Le
                  }
              }
              function _(K, re, pe) {
                  if (K) {
                      var ie = typeof K;
                      if (re || (this.timer && this.timer.destroy(),
                      this.queue = [],
                      this.active = !1),
                      ie == "number" && re)
                          return this.timer = new gt({
                              duration: K,
                              context: this,
                              complete: C
                          }),
                          void (this.active = !0);
                      if (ie == "string" && re) {
                          switch (K) {
                          case "hide":
                              D.call(this);
                              break;
                          case "stop":
                              j.call(this);
                              break;
                          case "redraw":
                              Z.call(this);
                              break;
                          default:
                              y.call(this, K, pe && pe[1])
                          }
                          return C.call(this)
                      }
                      if (ie == "function")
                          return void K.call(this, this);
                      if (ie == "object") {
                          var we = 0;
                          $e.call(this, K, function(ye, V_) {
                              ye.span > we && (we = ye.span),
                              ye.stop(),
                              ye.animate(V_)
                          }, function(ye) {
                              "wait"in ye && (we = u(ye.wait, 0))
                          }),
                          ve.call(this),
                          we > 0 && (this.timer = new gt({
                              duration: we,
                              context: this
                          }),
                          this.active = !0,
                          re && (this.timer.complete = C));
                          var Be = this
                            , Le = !1
                            , rn = {};
                          ee(function() {
                              $e.call(Be, K, function(ye) {
                                  ye.active && (Le = !0,
                                  rn[ye.name] = ye.nextStyle)
                              }),
                              Le && Be.$el.css(rn)
                          })
                      }
                  }
              }
              function I(K) {
                  K = u(K, 0),
                  this.active ? this.queue.push({
                      options: K
                  }) : (this.timer = new gt({
                      duration: K,
                      context: this,
                      complete: C
                  }),
                  this.active = !0)
              }
              function R(K) {
                  return this.active ? (this.queue.push({
                      options: K,
                      args: arguments
                  }),
                  void (this.timer.complete = C)) : l("No active transition timer. Use start() or wait() before then().")
              }
              function C() {
                  if (this.timer && this.timer.destroy(),
                  this.active = !1,
                  this.queue.length) {
                      var K = this.queue.shift();
                      _.call(this, K.options, !0, K.args)
                  }
              }
              function j(K) {
                  this.timer && this.timer.destroy(),
                  this.queue = [],
                  this.active = !1;
                  var re;
                  typeof K == "string" ? (re = {},
                  re[K] = 1) : re = typeof K == "object" && K != null ? K : this.props,
                  $e.call(this, re, Oe),
                  ve.call(this)
              }
              function Q(K) {
                  j.call(this, K),
                  $e.call(this, K, Er, D_)
              }
              function ue(K) {
                  typeof K != "string" && (K = "block"),
                  this.el.style.display = K
              }
              function D() {
                  j.call(this),
                  this.el.style.display = "none"
              }
              function Z() {
                  this.el.offsetHeight
              }
              function J() {
                  j.call(this),
                  e.removeData(this.el, O),
                  this.$el = this.el = null
              }
              function ve() {
                  var K, re, pe = [];
                  this.upstream && pe.push(this.upstream);
                  for (K in this.props)
                      re = this.props[K],
                      re.active && pe.push(re.string);
                  pe = pe.join(","),
                  this.style !== pe && (this.style = pe,
                  this.el.style[M.transition.dom] = pe)
              }
              function $e(K, re, pe) {
                  var ie, we, Be, Le, rn = re !== Oe, ye = {};
                  for (ie in K)
                      Be = K[ie],
                      ie in le ? (ye.transform || (ye.transform = {}),
                      ye.transform[ie] = Be) : (x.test(ie) && (ie = r(ie)),
                      ie in V ? ye[ie] = Be : (Le || (Le = {}),
                      Le[ie] = Be));
                  for (ie in ye) {
                      if (Be = ye[ie],
                      we = this.props[ie],
                      !we) {
                          if (!rn)
                              continue;
                          we = y.call(this, ie)
                      }
                      re.call(this, we, Be)
                  }
                  pe && Le && pe.call(this, Le)
              }
              function Oe(K) {
                  K.stop()
              }
              function Er(K, re) {
                  K.set(re)
              }
              function D_(K) {
                  this.$el.css(K)
              }
              function ke(K, re) {
                  f[K] = function() {
                      return this.children ? G_.call(this, re, arguments) : (this.el && re.apply(this, arguments),
                      this)
                  }
              }
              function G_(K, re) {
                  var pe, ie = this.children.length;
                  for (pe = 0; ie > pe; pe++)
                      K.apply(this.children[pe], re);
                  return this
              }
              f.init = function(K) {
                  if (this.$el = e(K),
                  this.el = this.$el[0],
                  this.props = {},
                  this.queue = [],
                  this.style = "",
                  this.active = !1,
                  se.keepInherited && !se.fallback) {
                      var re = G(this.el, "transition");
                      re && !U.test(re) && (this.upstream = re)
                  }
                  M.backface && se.hideBackface && h(this.el, M.backface.css, "hidden")
              }
              ,
              ke("add", y),
              ke("start", _),
              ke("wait", I),
              ke("then", R),
              ke("next", C),
              ke("stop", j),
              ke("set", Q),
              ke("show", ue),
              ke("hide", D),
              ke("redraw", Z),
              ke("destroy", J)
          })
            , he = d(Ge, function(f) {
              function y(_, I) {
                  var R = e.data(_, O) || e.data(_, O, new Ge.Bare);
                  return R.el || R.init(_),
                  I ? R.start(I) : R
              }
              f.init = function(_, I) {
                  var R = e(_);
                  if (!R.length)
                      return this;
                  if (R.length === 1)
                      return y(R[0], I);
                  var C = [];
                  return R.each(function(j, Q) {
                      C.push(y(Q, I))
                  }),
                  this.children = C,
                  this
              }
          })
            , Y = d(function(f) {
              function y() {
                  var C = this.get();
                  this.update("auto");
                  var j = this.get();
                  return this.update(C),
                  j
              }
              function _(C, j, Q) {
                  return j !== void 0 && (Q = j),
                  C in p ? C : Q
              }
              function I(C) {
                  var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                  return (j ? i(j[1], j[2], j[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
              }
              var R = {
                  duration: 500,
                  ease: "ease",
                  delay: 0
              };
              f.init = function(C, j, Q, ue) {
                  this.$el = C,
                  this.el = C[0];
                  var D = j[0];
                  Q[2] && (D = Q[2]),
                  X[D] && (D = X[D]),
                  this.name = D,
                  this.type = Q[1],
                  this.duration = u(j[1], this.duration, R.duration),
                  this.ease = _(j[2], this.ease, R.ease),
                  this.delay = u(j[3], this.delay, R.delay),
                  this.span = this.duration + this.delay,
                  this.active = !1,
                  this.nextStyle = null,
                  this.auto = H.test(this.name),
                  this.unit = ue.unit || this.unit || se.defaultUnit,
                  this.angle = ue.angle || this.angle || se.defaultAngle,
                  se.fallback || ue.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                  this.string = this.name + F + this.duration + "ms" + (this.ease != "ease" ? F + p[this.ease][0] : "") + (this.delay ? F + this.delay + "ms" : ""))
              }
              ,
              f.set = function(C) {
                  C = this.convert(C, this.type),
                  this.update(C),
                  this.redraw()
              }
              ,
              f.transition = function(C) {
                  this.active = !0,
                  C = this.convert(C, this.type),
                  this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                  this.redraw()),
                  C == "auto" && (C = y.call(this))),
                  this.nextStyle = C
              }
              ,
              f.fallback = function(C) {
                  var j = this.el.style[this.name] || this.convert(this.get(), this.type);
                  C = this.convert(C, this.type),
                  this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)),
                  C == "auto" && (C = y.call(this))),
                  this.tween = new Ot({
                      from: j,
                      to: C,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              f.get = function() {
                  return G(this.el, this.name)
              }
              ,
              f.update = function(C) {
                  h(this.el, this.name, C)
              }
              ,
              f.stop = function() {
                  (this.active || this.nextStyle) && (this.active = !1,
                  this.nextStyle = null,
                  h(this.el, this.name, this.get()));
                  var C = this.tween;
                  C && C.context && C.destroy()
              }
              ,
              f.convert = function(C, j) {
                  if (C == "auto" && this.auto)
                      return C;
                  var Q, ue = typeof C == "number", D = typeof C == "string";
                  switch (j) {
                  case A:
                      if (ue)
                          return C;
                      if (D && C.replace(m, "") === "")
                          return +C;
                      Q = "number(unitless)";
                      break;
                  case P:
                      if (D) {
                          if (C === "" && this.original)
                              return this.original;
                          if (j.test(C))
                              return C.charAt(0) == "#" && C.length == 7 ? C : I(C)
                      }
                      Q = "hex or rgb string";
                      break;
                  case q:
                      if (ue)
                          return C + this.unit;
                      if (D && j.test(C))
                          return C;
                      Q = "number(px) or string(unit)";
                      break;
                  case N:
                      if (ue)
                          return C + this.unit;
                      if (D && j.test(C))
                          return C;
                      Q = "number(px) or string(unit or %)";
                      break;
                  case k:
                      if (ue)
                          return C + this.angle;
                      if (D && j.test(C))
                          return C;
                      Q = "number(deg) or string(angle)";
                      break;
                  case B:
                      if (ue || D && N.test(C))
                          return C;
                      Q = "number(unitless) or string(unit or %)"
                  }
                  return s(Q, C),
                  C
              }
              ,
              f.redraw = function() {
                  this.el.offsetHeight
              }
          })
            , te = d(Y, function(f, y) {
              f.init = function() {
                  y.init.apply(this, arguments),
                  this.original || (this.original = this.convert(this.get(), P))
              }
          })
            , Re = d(Y, function(f, y) {
              f.init = function() {
                  y.init.apply(this, arguments),
                  this.animate = this.fallback
              }
              ,
              f.get = function() {
                  return this.$el[this.name]()
              }
              ,
              f.update = function(_) {
                  this.$el[this.name](_)
              }
          })
            , Ne = d(Y, function(f, y) {
              function _(I, R) {
                  var C, j, Q, ue, D;
                  for (C in I)
                      ue = le[C],
                      Q = ue[0],
                      j = ue[1] || C,
                      D = this.convert(I[C], Q),
                      R.call(this, j, D, Q)
              }
              f.init = function() {
                  y.init.apply(this, arguments),
                  this.current || (this.current = {},
                  le.perspective && se.perspective && (this.current.perspective = se.perspective,
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()))
              }
              ,
              f.set = function(I) {
                  _.call(this, I, function(R, C) {
                      this.current[R] = C
                  }),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()
              }
              ,
              f.transition = function(I) {
                  var R = this.values(I);
                  this.tween = new vr({
                      current: this.current,
                      values: R,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease
                  });
                  var C, j = {};
                  for (C in this.current)
                      j[C] = C in R ? R[C] : this.current[C];
                  this.active = !0,
                  this.nextStyle = this.style(j)
              }
              ,
              f.fallback = function(I) {
                  var R = this.values(I);
                  this.tween = new vr({
                      current: this.current,
                      values: R,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              f.update = function() {
                  h(this.el, this.name, this.style(this.current))
              }
              ,
              f.style = function(I) {
                  var R, C = "";
                  for (R in I)
                      C += R + "(" + I[R] + ") ";
                  return C
              }
              ,
              f.values = function(I) {
                  var R, C = {};
                  return _.call(this, I, function(j, Q, ue) {
                      C[j] = Q,
                      this.current[j] === void 0 && (R = 0,
                      ~j.indexOf("scale") && (R = 1),
                      this.current[j] = this.convert(R, ue))
                  }),
                  C
              }
          })
            , Ot = d(function(f) {
              function y(D) {
                  Q.push(D) === 1 && ee(_)
              }
              function _() {
                  var D, Z, J, ve = Q.length;
                  if (ve)
                      for (ee(_),
                      Z = fe(),
                      D = ve; D--; )
                          J = Q[D],
                          J && J.render(Z)
              }
              function I(D) {
                  var Z, J = e.inArray(D, Q);
                  J >= 0 && (Z = Q.slice(J + 1),
                  Q.length = J,
                  Z.length && (Q = Q.concat(Z)))
              }
              function R(D) {
                  return Math.round(D * ue) / ue
              }
              function C(D, Z, J) {
                  return i(D[0] + J * (Z[0] - D[0]), D[1] + J * (Z[1] - D[1]), D[2] + J * (Z[2] - D[2]))
              }
              var j = {
                  ease: p.ease[1],
                  from: 0,
                  to: 1
              };
              f.init = function(D) {
                  this.duration = D.duration || 0,
                  this.delay = D.delay || 0;
                  var Z = D.ease || j.ease;
                  p[Z] && (Z = p[Z][1]),
                  typeof Z != "function" && (Z = j.ease),
                  this.ease = Z,
                  this.update = D.update || o,
                  this.complete = D.complete || o,
                  this.context = D.context || this,
                  this.name = D.name;
                  var J = D.from
                    , ve = D.to;
                  J === void 0 && (J = j.from),
                  ve === void 0 && (ve = j.to),
                  this.unit = D.unit || "",
                  typeof J == "number" && typeof ve == "number" ? (this.begin = J,
                  this.change = ve - J) : this.format(ve, J),
                  this.value = this.begin + this.unit,
                  this.start = fe(),
                  D.autoplay !== !1 && this.play()
              }
              ,
              f.play = function() {
                  this.active || (this.start || (this.start = fe()),
                  this.active = !0,
                  y(this))
              }
              ,
              f.stop = function() {
                  this.active && (this.active = !1,
                  I(this))
              }
              ,
              f.render = function(D) {
                  var Z, J = D - this.start;
                  if (this.delay) {
                      if (J <= this.delay)
                          return;
                      J -= this.delay
                  }
                  if (J < this.duration) {
                      var ve = this.ease(J, 0, 1, this.duration);
                      return Z = this.startRGB ? C(this.startRGB, this.endRGB, ve) : R(this.begin + ve * this.change),
                      this.value = Z + this.unit,
                      void this.update.call(this.context, this.value)
                  }
                  Z = this.endHex || this.begin + this.change,
                  this.value = Z + this.unit,
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy()
              }
              ,
              f.format = function(D, Z) {
                  if (Z += "",
                  D += "",
                  D.charAt(0) == "#")
                      return this.startRGB = n(Z),
                      this.endRGB = n(D),
                      this.endHex = D,
                      this.begin = 0,
                      void (this.change = 1);
                  if (!this.unit) {
                      var J = Z.replace(m, "")
                        , ve = D.replace(m, "");
                      J !== ve && a("tween", Z, D),
                      this.unit = J
                  }
                  Z = parseFloat(Z),
                  D = parseFloat(D),
                  this.begin = this.value = Z,
                  this.change = D - Z
              }
              ,
              f.destroy = function() {
                  this.stop(),
                  this.context = null,
                  this.ease = this.update = this.complete = o
              }
              ;
              var Q = []
                , ue = 1e3
          })
            , gt = d(Ot, function(f) {
              f.init = function(y) {
                  this.duration = y.duration || 0,
                  this.complete = y.complete || o,
                  this.context = y.context,
                  this.play()
              }
              ,
              f.render = function(y) {
                  var _ = y - this.start;
                  _ < this.duration || (this.complete.call(this.context),
                  this.destroy())
              }
          })
            , vr = d(Ot, function(f, y) {
              f.init = function(_) {
                  this.context = _.context,
                  this.update = _.update,
                  this.tweens = [],
                  this.current = _.current;
                  var I, R;
                  for (I in _.values)
                      R = _.values[I],
                      this.current[I] !== R && this.tweens.push(new Ot({
                          name: I,
                          from: this.current[I],
                          to: R,
                          duration: _.duration,
                          delay: _.delay,
                          ease: _.ease,
                          autoplay: !1
                      }));
                  this.play()
              }
              ,
              f.render = function(_) {
                  var I, R, C = this.tweens.length, j = !1;
                  for (I = C; I--; )
                      R = this.tweens[I],
                      R.context && (R.render(_),
                      this.current[R.name] = R.value,
                      j = !0);
                  return j ? void (this.update && this.update.call(this.context)) : this.destroy()
              }
              ,
              f.destroy = function() {
                  if (y.destroy.call(this),
                  this.tweens) {
                      var _, I = this.tweens.length;
                      for (_ = I; _--; )
                          this.tweens[_].destroy();
                      this.tweens = null,
                      this.current = null
                  }
              }
          })
            , se = t.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !M.transition,
              agentTests: []
          };
          t.fallback = function(f) {
              if (!M.transition)
                  return se.fallback = !0;
              se.agentTests.push("(" + f + ")");
              var y = new RegExp(se.agentTests.join("|"),"i");
              se.fallback = y.test(navigator.userAgent)
          }
          ,
          t.fallback("6.0.[2-5] Safari"),
          t.tween = function(f) {
              return new Ot(f)
          }
          ,
          t.delay = function(f, y, _) {
              return new gt({
                  complete: y,
                  duration: f,
                  context: _
              })
          }
          ,
          e.fn.tram = function(f) {
              return t.call(null, this, f)
          }
          ;
          var h = e.style
            , G = e.css
            , X = {
              transform: M.transform && M.transform.css
          }
            , V = {
              color: [te, P],
              background: [te, P, "background-color"],
              "outline-color": [te, P],
              "border-color": [te, P],
              "border-top-color": [te, P],
              "border-right-color": [te, P],
              "border-bottom-color": [te, P],
              "border-left-color": [te, P],
              "border-width": [Y, q],
              "border-top-width": [Y, q],
              "border-right-width": [Y, q],
              "border-bottom-width": [Y, q],
              "border-left-width": [Y, q],
              "border-spacing": [Y, q],
              "letter-spacing": [Y, q],
              margin: [Y, q],
              "margin-top": [Y, q],
              "margin-right": [Y, q],
              "margin-bottom": [Y, q],
              "margin-left": [Y, q],
              padding: [Y, q],
              "padding-top": [Y, q],
              "padding-right": [Y, q],
              "padding-bottom": [Y, q],
              "padding-left": [Y, q],
              "outline-width": [Y, q],
              opacity: [Y, A],
              top: [Y, N],
              right: [Y, N],
              bottom: [Y, N],
              left: [Y, N],
              "font-size": [Y, N],
              "text-indent": [Y, N],
              "word-spacing": [Y, N],
              width: [Y, N],
              "min-width": [Y, N],
              "max-width": [Y, N],
              height: [Y, N],
              "min-height": [Y, N],
              "max-height": [Y, N],
              "line-height": [Y, B],
              "scroll-top": [Re, A, "scrollTop"],
              "scroll-left": [Re, A, "scrollLeft"]
          }
            , le = {};
          M.transform && (V.transform = [Ne],
          le = {
              x: [N, "translateX"],
              y: [N, "translateY"],
              rotate: [k],
              rotateX: [k],
              rotateY: [k],
              scale: [A],
              scaleX: [A],
              scaleY: [A],
              skew: [k],
              skewX: [k],
              skewY: [k]
          }),
          M.transform && M.backface && (le.z = [N, "translateZ"],
          le.rotateZ = [k],
          le.scaleZ = [A],
          le.perspective = [q]);
          var yr = /ms/
            , wt = /s|\./;
          return e.tram = t
      }(window.jQuery)
  }
  );
  var Ls = c( (Pk, Ns) => {
      "use strict";
      var W_ = window.$
        , j_ = Ri() && W_.tram;
      Ns.exports = function() {
          var e = {};
          e.VERSION = "1.6.0-Webflow";
          var t = {}
            , r = Array.prototype
            , n = Object.prototype
            , i = Function.prototype
            , o = r.push
            , s = r.slice
            , a = r.concat
            , u = n.toString
            , l = n.hasOwnProperty
            , v = r.forEach
            , d = r.map
            , p = r.reduce
            , E = r.reduceRight
            , T = r.filter
            , b = r.every
            , O = r.some
            , m = r.indexOf
            , x = r.lastIndexOf
            , A = Array.isArray
            , P = Object.keys
            , q = i.bind
            , N = e.each = e.forEach = function(g, S, L) {
              if (g == null)
                  return g;
              if (v && g.forEach === v)
                  g.forEach(S, L);
              else if (g.length === +g.length) {
                  for (var M = 0, W = g.length; M < W; M++)
                      if (S.call(L, g[M], M, g) === t)
                          return
              } else
                  for (var z = e.keys(g), M = 0, W = z.length; M < W; M++)
                      if (S.call(L, g[z[M]], z[M], g) === t)
                          return;
              return g
          }
          ;
          e.map = e.collect = function(g, S, L) {
              var M = [];
              return g == null ? M : d && g.map === d ? g.map(S, L) : (N(g, function(W, z, ee) {
                  M.push(S.call(L, W, z, ee))
              }),
              M)
          }
          ,
          e.find = e.detect = function(g, S, L) {
              var M;
              return k(g, function(W, z, ee) {
                  if (S.call(L, W, z, ee))
                      return M = W,
                      !0
              }),
              M
          }
          ,
          e.filter = e.select = function(g, S, L) {
              var M = [];
              return g == null ? M : T && g.filter === T ? g.filter(S, L) : (N(g, function(W, z, ee) {
                  S.call(L, W, z, ee) && M.push(W)
              }),
              M)
          }
          ;
          var k = e.some = e.any = function(g, S, L) {
              S || (S = e.identity);
              var M = !1;
              return g == null ? M : O && g.some === O ? g.some(S, L) : (N(g, function(W, z, ee) {
                  if (M || (M = S.call(L, W, z, ee)))
                      return t
              }),
              !!M)
          }
          ;
          e.contains = e.include = function(g, S) {
              return g == null ? !1 : m && g.indexOf === m ? g.indexOf(S) != -1 : k(g, function(L) {
                  return L === S
              })
          }
          ,
          e.delay = function(g, S) {
              var L = s.call(arguments, 2);
              return setTimeout(function() {
                  return g.apply(null, L)
              }, S)
          }
          ,
          e.defer = function(g) {
              return e.delay.apply(e, [g, 1].concat(s.call(arguments, 1)))
          }
          ,
          e.throttle = function(g) {
              var S, L, M;
              return function() {
                  S || (S = !0,
                  L = arguments,
                  M = this,
                  j_.frame(function() {
                      S = !1,
                      g.apply(M, L)
                  }))
              }
          }
          ,
          e.debounce = function(g, S, L) {
              var M, W, z, ee, fe, Ge = function() {
                  var he = e.now() - ee;
                  he < S ? M = setTimeout(Ge, S - he) : (M = null,
                  L || (fe = g.apply(z, W),
                  z = W = null))
              };
              return function() {
                  z = this,
                  W = arguments,
                  ee = e.now();
                  var he = L && !M;
                  return M || (M = setTimeout(Ge, S)),
                  he && (fe = g.apply(z, W),
                  z = W = null),
                  fe
              }
          }
          ,
          e.defaults = function(g) {
              if (!e.isObject(g))
                  return g;
              for (var S = 1, L = arguments.length; S < L; S++) {
                  var M = arguments[S];
                  for (var W in M)
                      g[W] === void 0 && (g[W] = M[W])
              }
              return g
          }
          ,
          e.keys = function(g) {
              if (!e.isObject(g))
                  return [];
              if (P)
                  return P(g);
              var S = [];
              for (var L in g)
                  e.has(g, L) && S.push(L);
              return S
          }
          ,
          e.has = function(g, S) {
              return l.call(g, S)
          }
          ,
          e.isObject = function(g) {
              return g === Object(g)
          }
          ,
          e.now = Date.now || function() {
              return new Date().getTime()
          }
          ,
          e.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
          };
          var B = /(.)^/
            , U = {
              "'": "'",
              "\\": "\\",
              "\r": "r",
              "\n": "n",
              "\u2028": "u2028",
              "\u2029": "u2029"
          }
            , H = /\\|'|\r|\n|\u2028|\u2029/g
            , F = function(g) {
              return "\\" + U[g]
          }
            , w = /^\s*(\w|\$)+\s*$/;
          return e.template = function(g, S, L) {
              !S && L && (S = L),
              S = e.defaults({}, S, e.templateSettings);
              var M = RegExp([(S.escape || B).source, (S.interpolate || B).source, (S.evaluate || B).source].join("|") + "|$", "g")
                , W = 0
                , z = "__p+='";
              g.replace(M, function(he, Y, te, Re, Ne) {
                  return z += g.slice(W, Ne).replace(H, F),
                  W = Ne + he.length,
                  Y ? z += `'+
((__t=(` + Y + `))==null?'':_.escape(__t))+
'` : te ? z += `'+
((__t=(` + te + `))==null?'':__t)+
'` : Re && (z += `';
` + Re + `
__p+='`),
                  he
              }),
              z += `';
`;
              var ee = S.variable;
              if (ee) {
                  if (!w.test(ee))
                      throw new Error("variable is not a bare identifier: " + ee)
              } else
                  z = `with(obj||{}){
` + z + `}
`,
                  ee = "obj";
              z = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + z + `return __p;
`;
              var fe;
              try {
                  fe = new Function(S.variable || "obj","_",z)
              } catch (he) {
                  throw he.source = z,
                  he
              }
              var Ge = function(he) {
                  return fe.call(this, he, e)
              };
              return Ge.source = "function(" + ee + `){
` + z + "}",
              Ge
          }
          ,
          e
      }()
  }
  );
  var Je = c( (qk, ks) => {
      "use strict";
      var oe = {}
        , Gt = {}
        , Vt = []
        , Li = window.Webflow || []
        , ht = window.jQuery
        , Xe = ht(window)
        , z_ = ht(document)
        , Ze = ht.isFunction
        , Ue = oe._ = Ls()
        , qs = oe.tram = Ri() && ht.tram
        , an = !1
        , Pi = !1;
      qs.config.hideBackface = !1;
      qs.config.keepInherited = !0;
      oe.define = function(e, t, r) {
          Gt[e] && Fs(Gt[e]);
          var n = Gt[e] = t(ht, Ue, r) || {};
          return Ms(n),
          n
      }
      ;
      oe.require = function(e) {
          return Gt[e]
      }
      ;
      function Ms(e) {
          oe.env() && (Ze(e.design) && Xe.on("__wf_design", e.design),
          Ze(e.preview) && Xe.on("__wf_preview", e.preview)),
          Ze(e.destroy) && Xe.on("__wf_destroy", e.destroy),
          e.ready && Ze(e.ready) && K_(e)
      }
      function K_(e) {
          if (an) {
              e.ready();
              return
          }
          Ue.contains(Vt, e.ready) || Vt.push(e.ready)
      }
      function Fs(e) {
          Ze(e.design) && Xe.off("__wf_design", e.design),
          Ze(e.preview) && Xe.off("__wf_preview", e.preview),
          Ze(e.destroy) && Xe.off("__wf_destroy", e.destroy),
          e.ready && Ze(e.ready) && Y_(e)
      }
      function Y_(e) {
          Vt = Ue.filter(Vt, function(t) {
              return t !== e.ready
          })
      }
      oe.push = function(e) {
          if (an) {
              Ze(e) && e();
              return
          }
          Li.push(e)
      }
      ;
      oe.env = function(e) {
          var t = window.__wf_design
            , r = typeof t < "u";
          if (!e)
              return r;
          if (e === "design")
              return r && t;
          if (e === "preview")
              return r && !t;
          if (e === "slug")
              return r && window.__wf_slug;
          if (e === "editor")
              return window.WebflowEditor;
          if (e === "test")
              return window.__wf_test;
          if (e === "frame")
              return window !== window.top
      }
      ;
      var on = navigator.userAgent.toLowerCase()
        , Ds = oe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
        , $_ = oe.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10)
        , Q_ = oe.env.ios = /(ipod|iphone|ipad)/.test(on);
      oe.env.safari = /safari/.test(on) && !$_ && !Q_;
      var Ni;
      Ds && z_.on("touchstart mousedown", function(e) {
          Ni = e.target
      });
      oe.validClick = Ds ? function(e) {
          return e === Ni || ht.contains(e, Ni)
      }
      : function() {
          return !0
      }
      ;
      var Gs = "resize.webflow orientationchange.webflow load.webflow"
        , Z_ = "scroll.webflow " + Gs;
      oe.resize = qi(Xe, Gs);
      oe.scroll = qi(Xe, Z_);
      oe.redraw = qi();
      function qi(e, t) {
          var r = []
            , n = {};
          return n.up = Ue.throttle(function(i) {
              Ue.each(r, function(o) {
                  o(i)
              })
          }),
          e && t && e.on(t, n.up),
          n.on = function(i) {
              typeof i == "function" && (Ue.contains(r, i) || r.push(i))
          }
          ,
          n.off = function(i) {
              if (!arguments.length) {
                  r = [];
                  return
              }
              r = Ue.filter(r, function(o) {
                  return o !== i
              })
          }
          ,
          n
      }
      oe.location = function(e) {
          window.location = e
      }
      ;
      oe.env() && (oe.location = function() {}
      );
      oe.ready = function() {
          an = !0,
          Pi ? J_() : Ue.each(Vt, Ps),
          Ue.each(Li, Ps),
          oe.resize.up()
      }
      ;
      function Ps(e) {
          Ze(e) && e()
      }
      function J_() {
          Pi = !1,
          Ue.each(Gt, Ms)
      }
      var St;
      oe.load = function(e) {
          St.then(e)
      }
      ;
      function Vs() {
          St && (St.reject(),
          Xe.off("load", St.resolve)),
          St = new ht.Deferred,
          Xe.on("load", St.resolve)
      }
      oe.destroy = function(e) {
          e = e || {},
          Pi = !0,
          Xe.triggerHandler("__wf_destroy"),
          e.domready != null && (an = e.domready),
          Ue.each(Gt, Fs),
          oe.resize.off(),
          oe.scroll.off(),
          oe.redraw.off(),
          Vt = [],
          Li = [],
          St.state() === "pending" && Vs()
      }
      ;
      ht(oe.ready);
      Vs();
      ks.exports = window.Webflow = oe
  }
  );
  var Xs = c( (Mk, Us) => {
      "use strict";
      var Bs = Je();
      Bs.define("brand", Us.exports = function(e) {
          var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", s = window.location, a = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
          t.ready = function() {
              var E = n.attr("data-wf-status")
                , T = n.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(T) && s.hostname !== T && (E = !0),
              E && !a && (l = l || d(),
              p(),
              setTimeout(p, 500),
              e(r).off(u, v).on(u, v))
          }
          ;
          function v() {
              var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
              e(l).attr("style", E ? "display: none !important;" : "")
          }
          function d() {
              var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                  marginRight: "4px",
                  width: "26px"
              })
                , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
              return E.append(T, b),
              E[0]
          }
          function p() {
              var E = i.children(o)
                , T = E.length && E.get(0) === l
                , b = Bs.env("editor");
              if (T) {
                  b && E.remove();
                  return
              }
              E.length && E.remove(),
              b || i.append(l)
          }
          return t
      }
      )
  }
  );
  var Ws = c( (Fk, Hs) => {
      "use strict";
      var eb = Je();
      eb.define("focus-visible", Hs.exports = function() {
          function e(r) {
              var n = !0
                , i = !1
                , o = null
                , s = {
                  text: !0,
                  search: !0,
                  url: !0,
                  tel: !0,
                  email: !0,
                  password: !0,
                  number: !0,
                  date: !0,
                  month: !0,
                  week: !0,
                  time: !0,
                  datetime: !0,
                  "datetime-local": !0
              };
              function a(A) {
                  return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList"in A && "contains"in A.classList)
              }
              function u(A) {
                  var P = A.type
                    , q = A.tagName;
                  return !!(q === "INPUT" && s[P] && !A.readOnly || q === "TEXTAREA" && !A.readOnly || A.isContentEditable)
              }
              function l(A) {
                  A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
              }
              function v(A) {
                  A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
              }
              function d(A) {
                  A.metaKey || A.altKey || A.ctrlKey || (a(r.activeElement) && l(r.activeElement),
                  n = !0)
              }
              function p() {
                  n = !1
              }
              function E(A) {
                  a(A.target) && (n || u(A.target)) && l(A.target)
              }
              function T(A) {
                  a(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                  window.clearTimeout(o),
                  o = window.setTimeout(function() {
                      i = !1
                  }, 100),
                  v(A.target))
              }
              function b() {
                  document.visibilityState === "hidden" && (i && (n = !0),
                  O())
              }
              function O() {
                  document.addEventListener("mousemove", x),
                  document.addEventListener("mousedown", x),
                  document.addEventListener("mouseup", x),
                  document.addEventListener("pointermove", x),
                  document.addEventListener("pointerdown", x),
                  document.addEventListener("pointerup", x),
                  document.addEventListener("touchmove", x),
                  document.addEventListener("touchstart", x),
                  document.addEventListener("touchend", x)
              }
              function m() {
                  document.removeEventListener("mousemove", x),
                  document.removeEventListener("mousedown", x),
                  document.removeEventListener("mouseup", x),
                  document.removeEventListener("pointermove", x),
                  document.removeEventListener("pointerdown", x),
                  document.removeEventListener("pointerup", x),
                  document.removeEventListener("touchmove", x),
                  document.removeEventListener("touchstart", x),
                  document.removeEventListener("touchend", x)
              }
              function x(A) {
                  A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1,
                  m())
              }
              document.addEventListener("keydown", d, !0),
              document.addEventListener("mousedown", p, !0),
              document.addEventListener("pointerdown", p, !0),
              document.addEventListener("touchstart", p, !0),
              document.addEventListener("visibilitychange", b, !0),
              O(),
              r.addEventListener("focus", E, !0),
              r.addEventListener("blur", T, !0)
          }
          function t() {
              if (typeof document < "u")
                  try {
                      document.querySelector(":focus-visible")
                  } catch {
                      e(document)
                  }
          }
          return {
              ready: t
          }
      }
      )
  }
  );
  var Ks = c( (Dk, zs) => {
      "use strict";
      var js = Je();
      js.define("focus", zs.exports = function() {
          var e = []
            , t = !1;
          function r(s) {
              t && (s.preventDefault(),
              s.stopPropagation(),
              s.stopImmediatePropagation(),
              e.unshift(s))
          }
          function n(s) {
              var a = s.target
                , u = a.tagName;
              return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
          }
          function i(s) {
              n(s) && (t = !0,
              setTimeout( () => {
                  for (t = !1,
                  s.target.focus(); e.length > 0; ) {
                      var a = e.pop();
                      a.target.dispatchEvent(new MouseEvent(a.type,a))
                  }
              }
              , 0))
          }
          function o() {
              typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && js.env.safari && (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0))
          }
          return {
              ready: o
          }
      }
      )
  }
  );
  var Qs = c( (Gk, $s) => {
      "use strict";
      var Mi = window.jQuery
        , et = {}
        , sn = []
        , Ys = ".w-ix"
        , un = {
          reset: function(e, t) {
              t.__wf_intro = null
          },
          intro: function(e, t) {
              t.__wf_intro || (t.__wf_intro = !0,
              Mi(t).triggerHandler(et.types.INTRO))
          },
          outro: function(e, t) {
              t.__wf_intro && (t.__wf_intro = null,
              Mi(t).triggerHandler(et.types.OUTRO))
          }
      };
      et.triggers = {};
      et.types = {
          INTRO: "w-ix-intro" + Ys,
          OUTRO: "w-ix-outro" + Ys
      };
      et.init = function() {
          for (var e = sn.length, t = 0; t < e; t++) {
              var r = sn[t];
              r[0](0, r[1])
          }
          sn = [],
          Mi.extend(et.triggers, un)
      }
      ;
      et.async = function() {
          for (var e in un) {
              var t = un[e];
              un.hasOwnProperty(e) && (et.triggers[e] = function(r, n) {
                  sn.push([t, n])
              }
              )
          }
      }
      ;
      et.async();
      $s.exports = et
  }
  );
  var ln = c( (Vk, eu) => {
      "use strict";
      var Fi = Qs();
      function Zs(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null),
          e.dispatchEvent(r)
      }
      var tb = window.jQuery
        , cn = {}
        , Js = ".w-ix"
        , rb = {
          reset: function(e, t) {
              Fi.triggers.reset(e, t)
          },
          intro: function(e, t) {
              Fi.triggers.intro(e, t),
              Zs(t, "COMPONENT_ACTIVE")
          },
          outro: function(e, t) {
              Fi.triggers.outro(e, t),
              Zs(t, "COMPONENT_INACTIVE")
          }
      };
      cn.triggers = {};
      cn.types = {
          INTRO: "w-ix-intro" + Js,
          OUTRO: "w-ix-outro" + Js
      };
      tb.extend(cn.triggers, rb);
      eu.exports = cn
  }
  );
  var tu = c( (kk, st) => {
      function Di(e) {
          return st.exports = Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          st.exports.__esModule = !0,
          st.exports.default = st.exports,
          Di(e)
      }
      st.exports = Di,
      st.exports.__esModule = !0,
      st.exports.default = st.exports
  }
  );
  var fn = c( (Bk, mr) => {
      var nb = tu().default;
      function ru(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (ru = function(i) {
              return i ? r : t
          }
          )(e)
      }
      function ib(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || nb(e) != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = ru(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                  var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
      mr.exports = ib,
      mr.exports.__esModule = !0,
      mr.exports.default = mr.exports
  }
  );
  var nu = c( (Uk, _r) => {
      function ob(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      _r.exports = ob,
      _r.exports.__esModule = !0,
      _r.exports.default = _r.exports
  }
  );
  var de = c( (Xk, iu) => {
      var dn = function(e) {
          return e && e.Math == Math && e
      };
      iu.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function() {
          return this
      }() || Function("return this")()
  }
  );
  var kt = c( (Hk, ou) => {
      ou.exports = function(e) {
          try {
              return !!e()
          } catch {
              return !0
          }
      }
  }
  );
  var xt = c( (Wk, au) => {
      var ab = kt();
      au.exports = !ab(function() {
          return Object.defineProperty({}, 1, {
              get: function() {
                  return 7
              }
          })[1] != 7
      })
  }
  );
  var pn = c( (jk, su) => {
      var br = Function.prototype.call;
      su.exports = br.bind ? br.bind(br) : function() {
          return br.apply(br, arguments)
      }
  }
  );
  var fu = c(lu => {
      "use strict";
      var uu = {}.propertyIsEnumerable
        , cu = Object.getOwnPropertyDescriptor
        , sb = cu && !uu.call({
          1: 2
      }, 1);
      lu.f = sb ? function(t) {
          var r = cu(this, t);
          return !!r && r.enumerable
      }
      : uu
  }
  );
  var Gi = c( (Kk, du) => {
      du.exports = function(e, t) {
          return {
              enumerable: !(e & 1),
              configurable: !(e & 2),
              writable: !(e & 4),
              value: t
          }
      }
  }
  );
  var He = c( (Yk, gu) => {
      var pu = Function.prototype
        , Vi = pu.bind
        , ki = pu.call
        , ub = Vi && Vi.bind(ki);
      gu.exports = Vi ? function(e) {
          return e && ub(ki, e)
      }
      : function(e) {
          return e && function() {
              return ki.apply(e, arguments)
          }
      }
  }
  );
  var yu = c( ($k, vu) => {
      var hu = He()
        , cb = hu({}.toString)
        , lb = hu("".slice);
      vu.exports = function(e) {
          return lb(cb(e), 8, -1)
      }
  }
  );
  var mu = c( (Qk, Eu) => {
      var fb = de()
        , db = He()
        , pb = kt()
        , gb = yu()
        , Bi = fb.Object
        , hb = db("".split);
      Eu.exports = pb(function() {
          return !Bi("z").propertyIsEnumerable(0)
      }) ? function(e) {
          return gb(e) == "String" ? hb(e, "") : Bi(e)
      }
      : Bi
  }
  );
  var Ui = c( (Zk, _u) => {
      var vb = de()
        , yb = vb.TypeError;
      _u.exports = function(e) {
          if (e == null)
              throw yb("Can't call method on " + e);
          return e
      }
  }
  );
  var Tr = c( (Jk, bu) => {
      var Eb = mu()
        , mb = Ui();
      bu.exports = function(e) {
          return Eb(mb(e))
      }
  }
  );
  var tt = c( (eB, Tu) => {
      Tu.exports = function(e) {
          return typeof e == "function"
      }
  }
  );
  var Bt = c( (tB, Iu) => {
      var _b = tt();
      Iu.exports = function(e) {
          return typeof e == "object" ? e !== null : _b(e)
      }
  }
  );
  var Ir = c( (rB, Au) => {
      var Xi = de()
        , bb = tt()
        , Tb = function(e) {
          return bb(e) ? e : void 0
      };
      Au.exports = function(e, t) {
          return arguments.length < 2 ? Tb(Xi[e]) : Xi[e] && Xi[e][t]
      }
  }
  );
  var wu = c( (nB, Ou) => {
      var Ib = He();
      Ou.exports = Ib({}.isPrototypeOf)
  }
  );
  var xu = c( (iB, Su) => {
      var Ab = Ir();
      Su.exports = Ab("navigator", "userAgent") || ""
  }
  );
  var Mu = c( (oB, qu) => {
      var Pu = de(), Hi = xu(), Cu = Pu.process, Ru = Pu.Deno, Nu = Cu && Cu.versions || Ru && Ru.version, Lu = Nu && Nu.v8, We, gn;
      Lu && (We = Lu.split("."),
      gn = We[0] > 0 && We[0] < 4 ? 1 : +(We[0] + We[1]));
      !gn && Hi && (We = Hi.match(/Edge\/(\d+)/),
      (!We || We[1] >= 74) && (We = Hi.match(/Chrome\/(\d+)/),
      We && (gn = +We[1])));
      qu.exports = gn
  }
  );
  var Wi = c( (aB, Du) => {
      var Fu = Mu()
        , Ob = kt();
      Du.exports = !!Object.getOwnPropertySymbols && !Ob(function() {
          var e = Symbol();
          return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Fu && Fu < 41
      })
  }
  );
  var ji = c( (sB, Gu) => {
      var wb = Wi();
      Gu.exports = wb && !Symbol.sham && typeof Symbol.iterator == "symbol"
  }
  );
  var zi = c( (uB, Vu) => {
      var Sb = de()
        , xb = Ir()
        , Cb = tt()
        , Rb = wu()
        , Nb = ji()
        , Lb = Sb.Object;
      Vu.exports = Nb ? function(e) {
          return typeof e == "symbol"
      }
      : function(e) {
          var t = xb("Symbol");
          return Cb(t) && Rb(t.prototype, Lb(e))
      }
  }
  );
  var Bu = c( (cB, ku) => {
      var Pb = de()
        , qb = Pb.String;
      ku.exports = function(e) {
          try {
              return qb(e)
          } catch {
              return "Object"
          }
      }
  }
  );
  var Xu = c( (lB, Uu) => {
      var Mb = de()
        , Fb = tt()
        , Db = Bu()
        , Gb = Mb.TypeError;
      Uu.exports = function(e) {
          if (Fb(e))
              return e;
          throw Gb(Db(e) + " is not a function")
      }
  }
  );
  var Wu = c( (fB, Hu) => {
      var Vb = Xu();
      Hu.exports = function(e, t) {
          var r = e[t];
          return r == null ? void 0 : Vb(r)
      }
  }
  );
  var zu = c( (dB, ju) => {
      var kb = de()
        , Ki = pn()
        , Yi = tt()
        , $i = Bt()
        , Bb = kb.TypeError;
      ju.exports = function(e, t) {
          var r, n;
          if (t === "string" && Yi(r = e.toString) && !$i(n = Ki(r, e)) || Yi(r = e.valueOf) && !$i(n = Ki(r, e)) || t !== "string" && Yi(r = e.toString) && !$i(n = Ki(r, e)))
              return n;
          throw Bb("Can't convert object to primitive value")
      }
  }
  );
  var Yu = c( (pB, Ku) => {
      Ku.exports = !1
  }
  );
  var hn = c( (gB, Qu) => {
      var $u = de()
        , Ub = Object.defineProperty;
      Qu.exports = function(e, t) {
          try {
              Ub($u, e, {
                  value: t,
                  configurable: !0,
                  writable: !0
              })
          } catch {
              $u[e] = t
          }
          return t
      }
  }
  );
  var vn = c( (hB, Ju) => {
      var Xb = de()
        , Hb = hn()
        , Zu = "__core-js_shared__"
        , Wb = Xb[Zu] || Hb(Zu, {});
      Ju.exports = Wb
  }
  );
  var Qi = c( (vB, tc) => {
      var jb = Yu()
        , ec = vn();
      (tc.exports = function(e, t) {
          return ec[e] || (ec[e] = t !== void 0 ? t : {})
      }
      )("versions", []).push({
          version: "3.19.0",
          mode: jb ? "pure" : "global",
          copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      })
  }
  );
  var nc = c( (yB, rc) => {
      var zb = de()
        , Kb = Ui()
        , Yb = zb.Object;
      rc.exports = function(e) {
          return Yb(Kb(e))
      }
  }
  );
  var vt = c( (EB, ic) => {
      var $b = He()
        , Qb = nc()
        , Zb = $b({}.hasOwnProperty);
      ic.exports = Object.hasOwn || function(t, r) {
          return Zb(Qb(t), r)
      }
  }
  );
  var Zi = c( (mB, oc) => {
      var Jb = He()
        , eT = 0
        , tT = Math.random()
        , rT = Jb(1.toString);
      oc.exports = function(e) {
          return "Symbol(" + (e === void 0 ? "" : e) + ")_" + rT(++eT + tT, 36)
      }
  }
  );
  var Ji = c( (_B, lc) => {
      var nT = de()
        , iT = Qi()
        , ac = vt()
        , oT = Zi()
        , sc = Wi()
        , cc = ji()
        , Ut = iT("wks")
        , Ct = nT.Symbol
        , uc = Ct && Ct.for
        , aT = cc ? Ct : Ct && Ct.withoutSetter || oT;
      lc.exports = function(e) {
          if (!ac(Ut, e) || !(sc || typeof Ut[e] == "string")) {
              var t = "Symbol." + e;
              sc && ac(Ct, e) ? Ut[e] = Ct[e] : cc && uc ? Ut[e] = uc(t) : Ut[e] = aT(t)
          }
          return Ut[e]
      }
  }
  );
  var gc = c( (bB, pc) => {
      var sT = de()
        , uT = pn()
        , fc = Bt()
        , dc = zi()
        , cT = Wu()
        , lT = zu()
        , fT = Ji()
        , dT = sT.TypeError
        , pT = fT("toPrimitive");
      pc.exports = function(e, t) {
          if (!fc(e) || dc(e))
              return e;
          var r = cT(e, pT), n;
          if (r) {
              if (t === void 0 && (t = "default"),
              n = uT(r, e, t),
              !fc(n) || dc(n))
                  return n;
              throw dT("Can't convert object to primitive value")
          }
          return t === void 0 && (t = "number"),
          lT(e, t)
      }
  }
  );
  var eo = c( (TB, hc) => {
      var gT = gc()
        , hT = zi();
      hc.exports = function(e) {
          var t = gT(e, "string");
          return hT(t) ? t : t + ""
      }
  }
  );
  var ro = c( (IB, yc) => {
      var vT = de()
        , vc = Bt()
        , to = vT.document
        , yT = vc(to) && vc(to.createElement);
      yc.exports = function(e) {
          return yT ? to.createElement(e) : {}
      }
  }
  );
  var no = c( (AB, Ec) => {
      var ET = xt()
        , mT = kt()
        , _T = ro();
      Ec.exports = !ET && !mT(function() {
          return Object.defineProperty(_T("div"), "a", {
              get: function() {
                  return 7
              }
          }).a != 7
      })
  }
  );
  var io = c(_c => {
      var bT = xt()
        , TT = pn()
        , IT = fu()
        , AT = Gi()
        , OT = Tr()
        , wT = eo()
        , ST = vt()
        , xT = no()
        , mc = Object.getOwnPropertyDescriptor;
      _c.f = bT ? mc : function(t, r) {
          if (t = OT(t),
          r = wT(r),
          xT)
              try {
                  return mc(t, r)
              } catch {}
          if (ST(t, r))
              return AT(!TT(IT.f, t, r), t[r])
      }
  }
  );
  var Ar = c( (wB, Tc) => {
      var bc = de()
        , CT = Bt()
        , RT = bc.String
        , NT = bc.TypeError;
      Tc.exports = function(e) {
          if (CT(e))
              return e;
          throw NT(RT(e) + " is not an object")
      }
  }
  );
  var Or = c(Oc => {
      var LT = de()
        , PT = xt()
        , qT = no()
        , Ic = Ar()
        , MT = eo()
        , FT = LT.TypeError
        , Ac = Object.defineProperty;
      Oc.f = PT ? Ac : function(t, r, n) {
          if (Ic(t),
          r = MT(r),
          Ic(n),
          qT)
              try {
                  return Ac(t, r, n)
              } catch {}
          if ("get"in n || "set"in n)
              throw FT("Accessors not supported");
          return "value"in n && (t[r] = n.value),
          t
      }
  }
  );
  var yn = c( (xB, wc) => {
      var DT = xt()
        , GT = Or()
        , VT = Gi();
      wc.exports = DT ? function(e, t, r) {
          return GT.f(e, t, VT(1, r))
      }
      : function(e, t, r) {
          return e[t] = r,
          e
      }
  }
  );
  var ao = c( (CB, Sc) => {
      var kT = He()
        , BT = tt()
        , oo = vn()
        , UT = kT(Function.toString);
      BT(oo.inspectSource) || (oo.inspectSource = function(e) {
          return UT(e)
      }
      );
      Sc.exports = oo.inspectSource
  }
  );
  var Rc = c( (RB, Cc) => {
      var XT = de()
        , HT = tt()
        , WT = ao()
        , xc = XT.WeakMap;
      Cc.exports = HT(xc) && /native code/.test(WT(xc))
  }
  );
  var so = c( (NB, Lc) => {
      var jT = Qi()
        , zT = Zi()
        , Nc = jT("keys");
      Lc.exports = function(e) {
          return Nc[e] || (Nc[e] = zT(e))
      }
  }
  );
  var En = c( (LB, Pc) => {
      Pc.exports = {}
  }
  );
  var Vc = c( (PB, Gc) => {
      var KT = Rc(), Dc = de(), uo = He(), YT = Bt(), $T = yn(), co = vt(), lo = vn(), QT = so(), ZT = En(), qc = "Object already initialized", po = Dc.TypeError, JT = Dc.WeakMap, mn, wr, _n, eI = function(e) {
          return _n(e) ? wr(e) : mn(e, {})
      }, tI = function(e) {
          return function(t) {
              var r;
              if (!YT(t) || (r = wr(t)).type !== e)
                  throw po("Incompatible receiver, " + e + " required");
              return r
          }
      };
      KT || lo.state ? (yt = lo.state || (lo.state = new JT),
      Mc = uo(yt.get),
      fo = uo(yt.has),
      Fc = uo(yt.set),
      mn = function(e, t) {
          if (fo(yt, e))
              throw new po(qc);
          return t.facade = e,
          Fc(yt, e, t),
          t
      }
      ,
      wr = function(e) {
          return Mc(yt, e) || {}
      }
      ,
      _n = function(e) {
          return fo(yt, e)
      }
      ) : (Rt = QT("state"),
      ZT[Rt] = !0,
      mn = function(e, t) {
          if (co(e, Rt))
              throw new po(qc);
          return t.facade = e,
          $T(e, Rt, t),
          t
      }
      ,
      wr = function(e) {
          return co(e, Rt) ? e[Rt] : {}
      }
      ,
      _n = function(e) {
          return co(e, Rt)
      }
      );
      var yt, Mc, fo, Fc, Rt;
      Gc.exports = {
          set: mn,
          get: wr,
          has: _n,
          enforce: eI,
          getterFor: tI
      }
  }
  );
  var Uc = c( (qB, Bc) => {
      var go = xt()
        , rI = vt()
        , kc = Function.prototype
        , nI = go && Object.getOwnPropertyDescriptor
        , ho = rI(kc, "name")
        , iI = ho && function() {}
      .name === "something"
        , oI = ho && (!go || go && nI(kc, "name").configurable);
      Bc.exports = {
          EXISTS: ho,
          PROPER: iI,
          CONFIGURABLE: oI
      }
  }
  );
  var zc = c( (MB, jc) => {
      var aI = de()
        , Xc = tt()
        , sI = vt()
        , Hc = yn()
        , uI = hn()
        , cI = ao()
        , Wc = Vc()
        , lI = Uc().CONFIGURABLE
        , fI = Wc.get
        , dI = Wc.enforce
        , pI = String(String).split("String");
      (jc.exports = function(e, t, r, n) {
          var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, s = n ? !!n.noTargetGet : !1, a = n && n.name !== void 0 ? n.name : t, u;
          if (Xc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!sI(r, "name") || lI && r.name !== a) && Hc(r, "name", a),
          u = dI(r),
          u.source || (u.source = pI.join(typeof a == "string" ? a : ""))),
          e === aI) {
              o ? e[t] = r : uI(t, r);
              return
          } else
              i ? !s && e[t] && (o = !0) : delete e[t];
          o ? e[t] = r : Hc(e, t, r)
      }
      )(Function.prototype, "toString", function() {
          return Xc(this) && fI(this).source || cI(this)
      })
  }
  );
  var vo = c( (FB, Kc) => {
      var gI = Math.ceil
        , hI = Math.floor;
      Kc.exports = function(e) {
          var t = +e;
          return t !== t || t === 0 ? 0 : (t > 0 ? hI : gI)(t)
      }
  }
  );
  var $c = c( (DB, Yc) => {
      var vI = vo()
        , yI = Math.max
        , EI = Math.min;
      Yc.exports = function(e, t) {
          var r = vI(e);
          return r < 0 ? yI(r + t, 0) : EI(r, t)
      }
  }
  );
  var Zc = c( (GB, Qc) => {
      var mI = vo()
        , _I = Math.min;
      Qc.exports = function(e) {
          return e > 0 ? _I(mI(e), 9007199254740991) : 0
      }
  }
  );
  var el = c( (VB, Jc) => {
      var bI = Zc();
      Jc.exports = function(e) {
          return bI(e.length)
      }
  }
  );
  var yo = c( (kB, rl) => {
      var TI = Tr()
        , II = $c()
        , AI = el()
        , tl = function(e) {
          return function(t, r, n) {
              var i = TI(t), o = AI(i), s = II(n, o), a;
              if (e && r != r) {
                  for (; o > s; )
                      if (a = i[s++],
                      a != a)
                          return !0
              } else
                  for (; o > s; s++)
                      if ((e || s in i) && i[s] === r)
                          return e || s || 0;
              return !e && -1
          }
      };
      rl.exports = {
          includes: tl(!0),
          indexOf: tl(!1)
      }
  }
  );
  var mo = c( (BB, il) => {
      var OI = He()
        , Eo = vt()
        , wI = Tr()
        , SI = yo().indexOf
        , xI = En()
        , nl = OI([].push);
      il.exports = function(e, t) {
          var r = wI(e), n = 0, i = [], o;
          for (o in r)
              !Eo(xI, o) && Eo(r, o) && nl(i, o);
          for (; t.length > n; )
              Eo(r, o = t[n++]) && (~SI(i, o) || nl(i, o));
          return i
      }
  }
  );
  var bn = c( (UB, ol) => {
      ol.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  }
  );
  var sl = c(al => {
      var CI = mo()
        , RI = bn()
        , NI = RI.concat("length", "prototype");
      al.f = Object.getOwnPropertyNames || function(t) {
          return CI(t, NI)
      }
  }
  );
  var cl = c(ul => {
      ul.f = Object.getOwnPropertySymbols
  }
  );
  var fl = c( (WB, ll) => {
      var LI = Ir()
        , PI = He()
        , qI = sl()
        , MI = cl()
        , FI = Ar()
        , DI = PI([].concat);
      ll.exports = LI("Reflect", "ownKeys") || function(t) {
          var r = qI.f(FI(t))
            , n = MI.f;
          return n ? DI(r, n(t)) : r
      }
  }
  );
  var pl = c( (jB, dl) => {
      var GI = vt()
        , VI = fl()
        , kI = io()
        , BI = Or();
      dl.exports = function(e, t) {
          for (var r = VI(t), n = BI.f, i = kI.f, o = 0; o < r.length; o++) {
              var s = r[o];
              GI(e, s) || n(e, s, i(t, s))
          }
      }
  }
  );
  var hl = c( (zB, gl) => {
      var UI = kt()
        , XI = tt()
        , HI = /#|\.prototype\./
        , Sr = function(e, t) {
          var r = jI[WI(e)];
          return r == KI ? !0 : r == zI ? !1 : XI(t) ? UI(t) : !!t
      }
        , WI = Sr.normalize = function(e) {
          return String(e).replace(HI, ".").toLowerCase()
      }
        , jI = Sr.data = {}
        , zI = Sr.NATIVE = "N"
        , KI = Sr.POLYFILL = "P";
      gl.exports = Sr
  }
  );
  var yl = c( (KB, vl) => {
      var _o = de()
        , YI = io().f
        , $I = yn()
        , QI = zc()
        , ZI = hn()
        , JI = pl()
        , e0 = hl();
      vl.exports = function(e, t) {
          var r = e.target, n = e.global, i = e.stat, o, s, a, u, l, v;
          if (n ? s = _o : i ? s = _o[r] || ZI(r, {}) : s = (_o[r] || {}).prototype,
          s)
              for (a in t) {
                  if (l = t[a],
                  e.noTargetGet ? (v = YI(s, a),
                  u = v && v.value) : u = s[a],
                  o = e0(n ? a : r + (i ? "." : "#") + a, e.forced),
                  !o && u !== void 0) {
                      if (typeof l == typeof u)
                          continue;
                      JI(l, u)
                  }
                  (e.sham || u && u.sham) && $I(l, "sham", !0),
                  QI(s, a, l, e)
              }
      }
  }
  );
  var ml = c( (YB, El) => {
      var t0 = mo()
        , r0 = bn();
      El.exports = Object.keys || function(t) {
          return t0(t, r0)
      }
  }
  );
  var bl = c( ($B, _l) => {
      var n0 = xt()
        , i0 = Or()
        , o0 = Ar()
        , a0 = Tr()
        , s0 = ml();
      _l.exports = n0 ? Object.defineProperties : function(t, r) {
          o0(t);
          for (var n = a0(r), i = s0(r), o = i.length, s = 0, a; o > s; )
              i0.f(t, a = i[s++], n[a]);
          return t
      }
  }
  );
  var Il = c( (QB, Tl) => {
      var u0 = Ir();
      Tl.exports = u0("document", "documentElement")
  }
  );
  var Nl = c( (ZB, Rl) => {
      var c0 = Ar(), l0 = bl(), Al = bn(), f0 = En(), d0 = Il(), p0 = ro(), g0 = so(), Ol = ">", wl = "<", To = "prototype", Io = "script", xl = g0("IE_PROTO"), bo = function() {}, Cl = function(e) {
          return wl + Io + Ol + e + wl + "/" + Io + Ol
      }, Sl = function(e) {
          e.write(Cl("")),
          e.close();
          var t = e.parentWindow.Object;
          return e = null,
          t
      }, h0 = function() {
          var e = p0("iframe"), t = "java" + Io + ":", r;
          return e.style.display = "none",
          d0.appendChild(e),
          e.src = String(t),
          r = e.contentWindow.document,
          r.open(),
          r.write(Cl("document.F=Object")),
          r.close(),
          r.F
      }, Tn, In = function() {
          try {
              Tn = new ActiveXObject("htmlfile")
          } catch {}
          In = typeof document < "u" ? document.domain && Tn ? Sl(Tn) : h0() : Sl(Tn);
          for (var e = Al.length; e--; )
              delete In[To][Al[e]];
          return In()
      };
      f0[xl] = !0;
      Rl.exports = Object.create || function(t, r) {
          var n;
          return t !== null ? (bo[To] = c0(t),
          n = new bo,
          bo[To] = null,
          n[xl] = t) : n = In(),
          r === void 0 ? n : l0(n, r)
      }
  }
  );
  var Pl = c( (JB, Ll) => {
      var v0 = Ji()
        , y0 = Nl()
        , E0 = Or()
        , Ao = v0("unscopables")
        , Oo = Array.prototype;
      Oo[Ao] == null && E0.f(Oo, Ao, {
          configurable: !0,
          value: y0(null)
      });
      Ll.exports = function(e) {
          Oo[Ao][e] = !0
      }
  }
  );
  var ql = c( () => {
      "use strict";
      var m0 = yl()
        , _0 = yo().includes
        , b0 = Pl();
      m0({
          target: "Array",
          proto: !0
      }, {
          includes: function(t) {
              return _0(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
      });
      b0("includes")
  }
  );
  var Fl = c( (rU, Ml) => {
      var T0 = de()
        , I0 = He();
      Ml.exports = function(e, t) {
          return I0(T0[e].prototype[t])
      }
  }
  );
  var Gl = c( (nU, Dl) => {
      ql();
      var A0 = Fl();
      Dl.exports = A0("Array", "includes")
  }
  );
  var kl = c( (iU, Vl) => {
      var O0 = Gl();
      Vl.exports = O0
  }
  );
  var Ul = c( (oU, Bl) => {
      var w0 = kl();
      Bl.exports = w0
  }
  );
  var wo = c( (aU, Xl) => {
      var S0 = typeof global == "object" && global && global.Object === Object && global;
      Xl.exports = S0
  }
  );
  var je = c( (sU, Hl) => {
      var x0 = wo()
        , C0 = typeof self == "object" && self && self.Object === Object && self
        , R0 = x0 || C0 || Function("return this")();
      Hl.exports = R0
  }
  );
  var Xt = c( (uU, Wl) => {
      var N0 = je()
        , L0 = N0.Symbol;
      Wl.exports = L0
  }
  );
  var Yl = c( (cU, Kl) => {
      var jl = Xt()
        , zl = Object.prototype
        , P0 = zl.hasOwnProperty
        , q0 = zl.toString
        , xr = jl ? jl.toStringTag : void 0;
      function M0(e) {
          var t = P0.call(e, xr)
            , r = e[xr];
          try {
              e[xr] = void 0;
              var n = !0
          } catch {}
          var i = q0.call(e);
          return n && (t ? e[xr] = r : delete e[xr]),
          i
      }
      Kl.exports = M0
  }
  );
  var Ql = c( (lU, $l) => {
      var F0 = Object.prototype
        , D0 = F0.toString;
      function G0(e) {
          return D0.call(e)
      }
      $l.exports = G0
  }
  );
  var Et = c( (fU, ef) => {
      var Zl = Xt()
        , V0 = Yl()
        , k0 = Ql()
        , B0 = "[object Null]"
        , U0 = "[object Undefined]"
        , Jl = Zl ? Zl.toStringTag : void 0;
      function X0(e) {
          return e == null ? e === void 0 ? U0 : B0 : Jl && Jl in Object(e) ? V0(e) : k0(e)
      }
      ef.exports = X0
  }
  );
  var So = c( (dU, tf) => {
      function H0(e, t) {
          return function(r) {
              return e(t(r))
          }
      }
      tf.exports = H0
  }
  );
  var xo = c( (pU, rf) => {
      var W0 = So()
        , j0 = W0(Object.getPrototypeOf, Object);
      rf.exports = j0
  }
  );
  var ut = c( (gU, nf) => {
      function z0(e) {
          return e != null && typeof e == "object"
      }
      nf.exports = z0
  }
  );
  var Co = c( (hU, af) => {
      var K0 = Et()
        , Y0 = xo()
        , $0 = ut()
        , Q0 = "[object Object]"
        , Z0 = Function.prototype
        , J0 = Object.prototype
        , of = Z0.toString
        , eA = J0.hasOwnProperty
        , tA = of.call(Object);
      function rA(e) {
          if (!$0(e) || K0(e) != Q0)
              return !1;
          var t = Y0(e);
          if (t === null)
              return !0;
          var r = eA.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && of.call(r) == tA
      }
      af.exports = rA
  }
  );
  var sf = c(Ro => {
      "use strict";
      Object.defineProperty(Ro, "__esModule", {
          value: !0
      });
      Ro.default = nA;
      function nA(e) {
          var t, r = e.Symbol;
          return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
          r.observable = t) : t = "@@observable",
          t
      }
  }
  );
  var uf = c( (Lo, No) => {
      "use strict";
      Object.defineProperty(Lo, "__esModule", {
          value: !0
      });
      var iA = sf()
        , oA = aA(iA);
      function aA(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var Ht;
      typeof self < "u" ? Ht = self : typeof window < "u" ? Ht = window : typeof global < "u" ? Ht = global : typeof No < "u" ? Ht = No : Ht = Function("return this")();
      var sA = (0,
      oA.default)(Ht);
      Lo.default = sA
  }
  );
  var Po = c(Cr => {
      "use strict";
      Cr.__esModule = !0;
      Cr.ActionTypes = void 0;
      Cr.default = df;
      var uA = Co()
        , cA = ff(uA)
        , lA = uf()
        , cf = ff(lA);
      function ff(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var lf = Cr.ActionTypes = {
          INIT: "@@redux/INIT"
      };
      function df(e, t, r) {
          var n;
          if (typeof t == "function" && typeof r > "u" && (r = t,
          t = void 0),
          typeof r < "u") {
              if (typeof r != "function")
                  throw new Error("Expected the enhancer to be a function.");
              return r(df)(e, t)
          }
          if (typeof e != "function")
              throw new Error("Expected the reducer to be a function.");
          var i = e
            , o = t
            , s = []
            , a = s
            , u = !1;
          function l() {
              a === s && (a = s.slice())
          }
          function v() {
              return o
          }
          function d(b) {
              if (typeof b != "function")
                  throw new Error("Expected listener to be a function.");
              var O = !0;
              return l(),
              a.push(b),
              function() {
                  if (O) {
                      O = !1,
                      l();
                      var x = a.indexOf(b);
                      a.splice(x, 1)
                  }
              }
          }
          function p(b) {
              if (!(0,
              cA.default)(b))
                  throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof b.type > "u")
                  throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (u)
                  throw new Error("Reducers may not dispatch actions.");
              try {
                  u = !0,
                  o = i(o, b)
              } finally {
                  u = !1
              }
              for (var O = s = a, m = 0; m < O.length; m++)
                  O[m]();
              return b
          }
          function E(b) {
              if (typeof b != "function")
                  throw new Error("Expected the nextReducer to be a function.");
              i = b,
              p({
                  type: lf.INIT
              })
          }
          function T() {
              var b, O = d;
              return b = {
                  subscribe: function(x) {
                      if (typeof x != "object")
                          throw new TypeError("Expected the observer to be an object.");
                      function A() {
                          x.next && x.next(v())
                      }
                      A();
                      var P = O(A);
                      return {
                          unsubscribe: P
                      }
                  }
              },
              b[cf.default] = function() {
                  return this
              }
              ,
              b
          }
          return p({
              type: lf.INIT
          }),
          n = {
              dispatch: p,
              subscribe: d,
              getState: v,
              replaceReducer: E
          },
          n[cf.default] = T,
          n
      }
  }
  );
  var Mo = c(qo => {
      "use strict";
      qo.__esModule = !0;
      qo.default = fA;
      function fA(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e)
          } catch {}
      }
  }
  );
  var hf = c(Fo => {
      "use strict";
      Fo.__esModule = !0;
      Fo.default = vA;
      var pf = Po()
        , dA = Co()
        , mU = gf(dA)
        , pA = Mo()
        , _U = gf(pA);
      function gf(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function gA(e, t) {
          var r = t && t.type
            , n = r && '"' + r.toString() + '"' || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      }
      function hA(e) {
          Object.keys(e).forEach(function(t) {
              var r = e[t]
                , n = r(void 0, {
                  type: pf.ActionTypes.INIT
              });
              if (typeof n > "u")
                  throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, {
                  type: i
              }) > "u")
                  throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + pf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
          })
      }
      function vA(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              typeof e[i] == "function" && (r[i] = e[i])
          }
          var o = Object.keys(r);
          if (!1)
              var s;
          var a;
          try {
              hA(r)
          } catch (u) {
              a = u
          }
          return function() {
              var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                , v = arguments[1];
              if (a)
                  throw a;
              if (!1)
                  var d;
              for (var p = !1, E = {}, T = 0; T < o.length; T++) {
                  var b = o[T]
                    , O = r[b]
                    , m = l[b]
                    , x = O(m, v);
                  if (typeof x > "u") {
                      var A = gA(b, v);
                      throw new Error(A)
                  }
                  E[b] = x,
                  p = p || x !== m
              }
              return p ? E : l
          }
      }
  }
  );
  var yf = c(Do => {
      "use strict";
      Do.__esModule = !0;
      Do.default = yA;
      function vf(e, t) {
          return function() {
              return t(e.apply(void 0, arguments))
          }
      }
      function yA(e, t) {
          if (typeof e == "function")
              return vf(e, t);
          if (typeof e != "object" || e === null)
              throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
              var o = r[i]
                , s = e[o];
              typeof s == "function" && (n[o] = vf(s, t))
          }
          return n
      }
  }
  );
  var Vo = c(Go => {
      "use strict";
      Go.__esModule = !0;
      Go.default = EA;
      function EA() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          if (t.length === 0)
              return function(o) {
                  return o
              }
              ;
          if (t.length === 1)
              return t[0];
          var n = t[t.length - 1]
            , i = t.slice(0, -1);
          return function() {
              return i.reduceRight(function(o, s) {
                  return s(o)
              }, n.apply(void 0, arguments))
          }
      }
  }
  );
  var Ef = c(ko => {
      "use strict";
      ko.__esModule = !0;
      var mA = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ;
      ko.default = IA;
      var _A = Vo()
        , bA = TA(_A);
      function TA(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function IA() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          return function(n) {
              return function(i, o, s) {
                  var a = n(i, o, s)
                    , u = a.dispatch
                    , l = []
                    , v = {
                      getState: a.getState,
                      dispatch: function(p) {
                          return u(p)
                      }
                  };
                  return l = t.map(function(d) {
                      return d(v)
                  }),
                  u = bA.default.apply(void 0, l)(a.dispatch),
                  mA({}, a, {
                      dispatch: u
                  })
              }
          }
      }
  }
  );
  var Bo = c(Ve => {
      "use strict";
      Ve.__esModule = !0;
      Ve.compose = Ve.applyMiddleware = Ve.bindActionCreators = Ve.combineReducers = Ve.createStore = void 0;
      var AA = Po()
        , OA = Wt(AA)
        , wA = hf()
        , SA = Wt(wA)
        , xA = yf()
        , CA = Wt(xA)
        , RA = Ef()
        , NA = Wt(RA)
        , LA = Vo()
        , PA = Wt(LA)
        , qA = Mo()
        , OU = Wt(qA);
      function Wt(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Ve.createStore = OA.default;
      Ve.combineReducers = SA.default;
      Ve.bindActionCreators = CA.default;
      Ve.applyMiddleware = NA.default;
      Ve.compose = PA.default
  }
  );
  var ze, Uo, rt, MA, FA, An, DA, Xo = ce( () => {
      "use strict";
      ze = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
      },
      Uo = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
      },
      rt = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
      },
      MA = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
      },
      FA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      },
      An = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      },
      DA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  }
  );
  var qe, GA, On = ce( () => {
      "use strict";
      qe = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      },
      GA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  }
  );
  var VA, mf = ce( () => {
      "use strict";
      VA = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
  }
  );
  var kA, BA, UA, XA, HA, WA, jA, Ho, _f = ce( () => {
      "use strict";
      On();
      ({TRANSFORM_MOVE: kA, TRANSFORM_SCALE: BA, TRANSFORM_ROTATE: UA, TRANSFORM_SKEW: XA, STYLE_SIZE: HA, STYLE_FILTER: WA, STYLE_FONT_VARIATION: jA} = qe),
      Ho = {
          [kA]: !0,
          [BA]: !0,
          [UA]: !0,
          [XA]: !0,
          [HA]: !0,
          [WA]: !0,
          [jA]: !0
      }
  }
  );
  var Ee = {};
  Pe(Ee, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => cO,
      IX2_ANIMATION_FRAME_CHANGED: () => nO,
      IX2_CLEAR_REQUESTED: () => eO,
      IX2_ELEMENT_STATE_CHANGED: () => uO,
      IX2_EVENT_LISTENER_ADDED: () => tO,
      IX2_EVENT_STATE_CHANGED: () => rO,
      IX2_INSTANCE_ADDED: () => oO,
      IX2_INSTANCE_REMOVED: () => sO,
      IX2_INSTANCE_STARTED: () => aO,
      IX2_MEDIA_QUERIES_DEFINED: () => fO,
      IX2_PARAMETER_CHANGED: () => iO,
      IX2_PLAYBACK_REQUESTED: () => ZA,
      IX2_PREVIEW_REQUESTED: () => QA,
      IX2_RAW_DATA_IMPORTED: () => zA,
      IX2_SESSION_INITIALIZED: () => KA,
      IX2_SESSION_STARTED: () => YA,
      IX2_SESSION_STOPPED: () => $A,
      IX2_STOP_REQUESTED: () => JA,
      IX2_TEST_FRAME_RENDERED: () => dO,
      IX2_VIEWPORT_WIDTH_CHANGED: () => lO
  });
  var zA, KA, YA, $A, QA, ZA, JA, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, bf = ce( () => {
      "use strict";
      zA = "IX2_RAW_DATA_IMPORTED",
      KA = "IX2_SESSION_INITIALIZED",
      YA = "IX2_SESSION_STARTED",
      $A = "IX2_SESSION_STOPPED",
      QA = "IX2_PREVIEW_REQUESTED",
      ZA = "IX2_PLAYBACK_REQUESTED",
      JA = "IX2_STOP_REQUESTED",
      eO = "IX2_CLEAR_REQUESTED",
      tO = "IX2_EVENT_LISTENER_ADDED",
      rO = "IX2_EVENT_STATE_CHANGED",
      nO = "IX2_ANIMATION_FRAME_CHANGED",
      iO = "IX2_PARAMETER_CHANGED",
      oO = "IX2_INSTANCE_ADDED",
      aO = "IX2_INSTANCE_STARTED",
      sO = "IX2_INSTANCE_REMOVED",
      uO = "IX2_ELEMENT_STATE_CHANGED",
      cO = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      lO = "IX2_VIEWPORT_WIDTH_CHANGED",
      fO = "IX2_MEDIA_QUERIES_DEFINED",
      dO = "IX2_TEST_FRAME_RENDERED"
  }
  );
  var Ae = {};
  Pe(Ae, {
      ABSTRACT_NODE: () => lw,
      AUTO: () => JO,
      BACKGROUND: () => zO,
      BACKGROUND_COLOR: () => jO,
      BAR_DELIMITER: () => rw,
      BORDER_COLOR: () => KO,
      BOUNDARY_SELECTOR: () => yO,
      CHILDREN: () => nw,
      COLON_DELIMITER: () => tw,
      COLOR: () => YO,
      COMMA_DELIMITER: () => ew,
      CONFIG_UNIT: () => OO,
      CONFIG_VALUE: () => bO,
      CONFIG_X_UNIT: () => TO,
      CONFIG_X_VALUE: () => EO,
      CONFIG_Y_UNIT: () => IO,
      CONFIG_Y_VALUE: () => mO,
      CONFIG_Z_UNIT: () => AO,
      CONFIG_Z_VALUE: () => _O,
      DISPLAY: () => $O,
      FILTER: () => UO,
      FLEX: () => QO,
      FONT_VARIATION_SETTINGS: () => XO,
      HEIGHT: () => WO,
      HTML_ELEMENT: () => uw,
      IMMEDIATE_CHILDREN: () => iw,
      IX2_ID_DELIMITER: () => pO,
      OPACITY: () => BO,
      PARENT: () => aw,
      PLAIN_OBJECT: () => cw,
      PRESERVE_3D: () => sw,
      RENDER_GENERAL: () => dw,
      RENDER_PLUGIN: () => gw,
      RENDER_STYLE: () => pw,
      RENDER_TRANSFORM: () => fw,
      ROTATE_X: () => MO,
      ROTATE_Y: () => FO,
      ROTATE_Z: () => DO,
      SCALE_3D: () => qO,
      SCALE_X: () => NO,
      SCALE_Y: () => LO,
      SCALE_Z: () => PO,
      SIBLINGS: () => ow,
      SKEW: () => GO,
      SKEW_X: () => VO,
      SKEW_Y: () => kO,
      TRANSFORM: () => wO,
      TRANSLATE_3D: () => RO,
      TRANSLATE_X: () => SO,
      TRANSLATE_Y: () => xO,
      TRANSLATE_Z: () => CO,
      WF_PAGE: () => gO,
      WIDTH: () => HO,
      WILL_CHANGE: () => ZO,
      W_MOD_IX: () => vO,
      W_MOD_JS: () => hO
  });
  var pO, gO, hO, vO, yO, EO, mO, _O, bO, TO, IO, AO, OO, wO, SO, xO, CO, RO, NO, LO, PO, qO, MO, FO, DO, GO, VO, kO, BO, UO, XO, HO, WO, jO, zO, KO, YO, $O, QO, ZO, JO, ew, tw, rw, nw, iw, ow, aw, sw, uw, cw, lw, fw, dw, pw, gw, Tf = ce( () => {
      "use strict";
      pO = "|",
      gO = "data-wf-page",
      hO = "w-mod-js",
      vO = "w-mod-ix",
      yO = ".w-dyn-item",
      EO = "xValue",
      mO = "yValue",
      _O = "zValue",
      bO = "value",
      TO = "xUnit",
      IO = "yUnit",
      AO = "zUnit",
      OO = "unit",
      wO = "transform",
      SO = "translateX",
      xO = "translateY",
      CO = "translateZ",
      RO = "translate3d",
      NO = "scaleX",
      LO = "scaleY",
      PO = "scaleZ",
      qO = "scale3d",
      MO = "rotateX",
      FO = "rotateY",
      DO = "rotateZ",
      GO = "skew",
      VO = "skewX",
      kO = "skewY",
      BO = "opacity",
      UO = "filter",
      XO = "font-variation-settings",
      HO = "width",
      WO = "height",
      jO = "backgroundColor",
      zO = "background",
      KO = "borderColor",
      YO = "color",
      $O = "display",
      QO = "flex",
      ZO = "willChange",
      JO = "AUTO",
      ew = ",",
      tw = ":",
      rw = "|",
      nw = "CHILDREN",
      iw = "IMMEDIATE_CHILDREN",
      ow = "SIBLINGS",
      aw = "PARENT",
      sw = "preserve-3d",
      uw = "HTML_ELEMENT",
      cw = "PLAIN_OBJECT",
      lw = "ABSTRACT_NODE",
      fw = "RENDER_TRANSFORM",
      dw = "RENDER_GENERAL",
      pw = "RENDER_STYLE",
      gw = "RENDER_PLUGIN"
  }
  );
  var If = {};
  Pe(If, {
      ActionAppliesTo: () => GA,
      ActionTypeConsts: () => qe,
      EventAppliesTo: () => Uo,
      EventBasedOn: () => rt,
      EventContinuousMouseAxes: () => MA,
      EventLimitAffectedElements: () => FA,
      EventTypeConsts: () => ze,
      IX2EngineActionTypes: () => Ee,
      IX2EngineConstants: () => Ae,
      InteractionTypeConsts: () => VA,
      QuickEffectDirectionConsts: () => DA,
      QuickEffectIds: () => An,
      ReducedMotionTypes: () => Ho
  });
  var Me = ce( () => {
      "use strict";
      Xo();
      On();
      mf();
      _f();
      bf();
      Tf();
      On();
      Xo()
  }
  );
  var hw, Af, Of = ce( () => {
      "use strict";
      Me();
      ({IX2_RAW_DATA_IMPORTED: hw} = Ee),
      Af = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case hw:
              return t.payload.ixData || Object.freeze({});
          default:
              return e
          }
      }
  }
  );
  var jt = c(ge => {
      "use strict";
      Object.defineProperty(ge, "__esModule", {
          value: !0
      });
      var vw = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
      ge.clone = Sn;
      ge.addLast = xf;
      ge.addFirst = Cf;
      ge.removeLast = Rf;
      ge.removeFirst = Nf;
      ge.insert = Lf;
      ge.removeAt = Pf;
      ge.replaceAt = qf;
      ge.getIn = xn;
      ge.set = Cn;
      ge.setIn = Rn;
      ge.update = Ff;
      ge.updateIn = Df;
      ge.merge = Gf;
      ge.mergeDeep = Vf;
      ge.mergeIn = kf;
      ge.omit = Bf;
      ge.addDefaults = Uf;
      var wf = "INVALID_ARGS";
      function Sf(e) {
          throw new Error(e)
      }
      function Wo(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
      }
      var yw = {}.hasOwnProperty;
      function Sn(e) {
          if (Array.isArray(e))
              return e.slice();
          for (var t = Wo(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              r[i] = e[i]
          }
          return r
      }
      function Fe(e, t, r) {
          var n = r;
          n == null && Sf(wf);
          for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++)
              s[a - 3] = arguments[a];
          for (var u = 0; u < s.length; u++) {
              var l = s[u];
              if (l != null) {
                  var v = Wo(l);
                  if (v.length)
                      for (var d = 0; d <= v.length; d++) {
                          var p = v[d];
                          if (!(e && n[p] !== void 0)) {
                              var E = l[p];
                              t && wn(n[p]) && wn(E) && (E = Fe(e, t, n[p], E)),
                              !(E === void 0 || E === n[p]) && (i || (i = !0,
                              n = Sn(n)),
                              n[p] = E)
                          }
                      }
              }
          }
          return n
      }
      function wn(e) {
          var t = typeof e > "u" ? "undefined" : vw(e);
          return e != null && (t === "object" || t === "function")
      }
      function xf(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t])
      }
      function Cf(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e)
      }
      function Rf(e) {
          return e.length ? e.slice(0, e.length - 1) : e
      }
      function Nf(e) {
          return e.length ? e.slice(1) : e
      }
      function Lf(e, t, r) {
          return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
      }
      function Pf(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
      }
      function qf(e, t, r) {
          if (e[t] === r)
              return e;
          for (var n = e.length, i = Array(n), o = 0; o < n; o++)
              i[o] = e[o];
          return i[t] = r,
          i
      }
      function xn(e, t) {
          if (!Array.isArray(t) && Sf(wf),
          e != null) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var i = t[n];
                  if (r = r?.[i],
                  r === void 0)
                      return r
              }
              return r
          }
      }
      function Cn(e, t, r) {
          var n = typeof t == "number" ? [] : {}
            , i = e ?? n;
          if (i[t] === r)
              return i;
          var o = Sn(i);
          return o[t] = r,
          o
      }
      function Mf(e, t, r, n) {
          var i = void 0
            , o = t[n];
          if (n === t.length - 1)
              i = r;
          else {
              var s = wn(e) && wn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
              i = Mf(s, t, r, n + 1)
          }
          return Cn(e, o, i)
      }
      function Rn(e, t, r) {
          return t.length ? Mf(e, t, r, 0) : r
      }
      function Ff(e, t, r) {
          var n = e?.[t]
            , i = r(n);
          return Cn(e, t, i)
      }
      function Df(e, t, r) {
          var n = xn(e, t)
            , i = r(n);
          return Rn(e, t, i)
      }
      function Gf(e, t, r, n, i, o) {
          for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
              a[u - 6] = arguments[u];
          return a.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Fe(!1, !1, e, t, r, n, i, o)
      }
      function Vf(e, t, r, n, i, o) {
          for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
              a[u - 6] = arguments[u];
          return a.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Fe(!1, !0, e, t, r, n, i, o)
      }
      function kf(e, t, r, n, i, o, s) {
          var a = xn(e, t);
          a == null && (a = {});
          for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++)
              v[d - 7] = arguments[d];
          return v.length ? u = Fe.call.apply(Fe, [null, !1, !1, a, r, n, i, o, s].concat(v)) : u = Fe(!1, !1, a, r, n, i, o, s),
          Rn(e, t, u)
      }
      function Bf(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
              if (yw.call(e, r[i])) {
                  n = !0;
                  break
              }
          if (!n)
              return e;
          for (var o = {}, s = Wo(e), a = 0; a < s.length; a++) {
              var u = s[a];
              r.indexOf(u) >= 0 || (o[u] = e[u])
          }
          return o
      }
      function Uf(e, t, r, n, i, o) {
          for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
              a[u - 6] = arguments[u];
          return a.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Fe(!0, !1, e, t, r, n, i, o)
      }
      var Ew = {
          clone: Sn,
          addLast: xf,
          addFirst: Cf,
          removeLast: Rf,
          removeFirst: Nf,
          insert: Lf,
          removeAt: Pf,
          replaceAt: qf,
          getIn: xn,
          set: Cn,
          setIn: Rn,
          update: Ff,
          updateIn: Df,
          merge: Gf,
          mergeDeep: Vf,
          mergeIn: kf,
          omit: Bf,
          addDefaults: Uf
      };
      ge.default = Ew
  }
  );
  var Hf, mw, _w, bw, Tw, Iw, Xf, Wf, jf = ce( () => {
      "use strict";
      Me();
      Hf = ne(jt()),
      {IX2_PREVIEW_REQUESTED: mw, IX2_PLAYBACK_REQUESTED: _w, IX2_STOP_REQUESTED: bw, IX2_CLEAR_REQUESTED: Tw} = Ee,
      Iw = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
      },
      Xf = Object.create(null, {
          [mw]: {
              value: "preview"
          },
          [_w]: {
              value: "playback"
          },
          [bw]: {
              value: "stop"
          },
          [Tw]: {
              value: "clear"
          }
      }),
      Wf = (e=Iw, t) => {
          if (t.type in Xf) {
              let r = [Xf[t.type]];
              return (0,
              Hf.setIn)(e, [r], {
                  ...t.payload
              })
          }
          return e
      }
  }
  );
  var Se, Aw, Ow, ww, Sw, xw, Cw, Rw, Nw, Lw, Pw, zf, qw, Kf, Yf = ce( () => {
      "use strict";
      Me();
      Se = ne(jt()),
      {IX2_SESSION_INITIALIZED: Aw, IX2_SESSION_STARTED: Ow, IX2_TEST_FRAME_RENDERED: ww, IX2_SESSION_STOPPED: Sw, IX2_EVENT_LISTENER_ADDED: xw, IX2_EVENT_STATE_CHANGED: Cw, IX2_ANIMATION_FRAME_CHANGED: Rw, IX2_ACTION_LIST_PLAYBACK_CHANGED: Nw, IX2_VIEWPORT_WIDTH_CHANGED: Lw, IX2_MEDIA_QUERIES_DEFINED: Pw} = Ee,
      zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
      },
      qw = 20,
      Kf = (e=zf, t) => {
          switch (t.type) {
          case Aw:
              {
                  let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                  return (0,
                  Se.merge)(e, {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  })
              }
          case Ow:
              return (0,
              Se.set)(e, "active", !0);
          case ww:
              {
                  let {payload: {step: r=qw}} = t;
                  return (0,
                  Se.set)(e, "tick", e.tick + r)
              }
          case Sw:
              return zf;
          case Rw:
              {
                  let {payload: {now: r}} = t;
                  return (0,
                  Se.set)(e, "tick", r)
              }
          case xw:
              {
                  let r = (0,
                  Se.addLast)(e.eventListeners, t.payload);
                  return (0,
                  Se.set)(e, "eventListeners", r)
              }
          case Cw:
              {
                  let {stateKey: r, newState: n} = t.payload;
                  return (0,
                  Se.setIn)(e, ["eventState", r], n)
              }
          case Nw:
              {
                  let {actionListId: r, isPlaying: n} = t.payload;
                  return (0,
                  Se.setIn)(e, ["playbackState", r], n)
              }
          case Lw:
              {
                  let {width: r, mediaQueries: n} = t.payload
                    , i = n.length
                    , o = null;
                  for (let s = 0; s < i; s++) {
                      let {key: a, min: u, max: l} = n[s];
                      if (r >= u && r <= l) {
                          o = a;
                          break
                      }
                  }
                  return (0,
                  Se.merge)(e, {
                      viewportWidth: r,
                      mediaQueryKey: o
                  })
              }
          case Pw:
              return (0,
              Se.set)(e, "hasDefinedMediaQueries", !0);
          default:
              return e
          }
      }
  }
  );
  var Qf = c( (WU, $f) => {
      function Mw() {
          this.__data__ = [],
          this.size = 0
      }
      $f.exports = Mw
  }
  );
  var Nn = c( (jU, Zf) => {
      function Fw(e, t) {
          return e === t || e !== e && t !== t
      }
      Zf.exports = Fw
  }
  );
  var Rr = c( (zU, Jf) => {
      var Dw = Nn();
      function Gw(e, t) {
          for (var r = e.length; r--; )
              if (Dw(e[r][0], t))
                  return r;
          return -1
      }
      Jf.exports = Gw
  }
  );
  var td = c( (KU, ed) => {
      var Vw = Rr()
        , kw = Array.prototype
        , Bw = kw.splice;
      function Uw(e) {
          var t = this.__data__
            , r = Vw(t, e);
          if (r < 0)
              return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : Bw.call(t, r, 1),
          --this.size,
          !0
      }
      ed.exports = Uw
  }
  );
  var nd = c( (YU, rd) => {
      var Xw = Rr();
      function Hw(e) {
          var t = this.__data__
            , r = Xw(t, e);
          return r < 0 ? void 0 : t[r][1]
      }
      rd.exports = Hw
  }
  );
  var od = c( ($U, id) => {
      var Ww = Rr();
      function jw(e) {
          return Ww(this.__data__, e) > -1
      }
      id.exports = jw
  }
  );
  var sd = c( (QU, ad) => {
      var zw = Rr();
      function Kw(e, t) {
          var r = this.__data__
            , n = zw(r, e);
          return n < 0 ? (++this.size,
          r.push([e, t])) : r[n][1] = t,
          this
      }
      ad.exports = Kw
  }
  );
  var Nr = c( (ZU, ud) => {
      var Yw = Qf()
        , $w = td()
        , Qw = nd()
        , Zw = od()
        , Jw = sd();
      function zt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      zt.prototype.clear = Yw;
      zt.prototype.delete = $w;
      zt.prototype.get = Qw;
      zt.prototype.has = Zw;
      zt.prototype.set = Jw;
      ud.exports = zt
  }
  );
  var ld = c( (JU, cd) => {
      var eS = Nr();
      function tS() {
          this.__data__ = new eS,
          this.size = 0
      }
      cd.exports = tS
  }
  );
  var dd = c( (eX, fd) => {
      function rS(e) {
          var t = this.__data__
            , r = t.delete(e);
          return this.size = t.size,
          r
      }
      fd.exports = rS
  }
  );
  var gd = c( (tX, pd) => {
      function nS(e) {
          return this.__data__.get(e)
      }
      pd.exports = nS
  }
  );
  var vd = c( (rX, hd) => {
      function iS(e) {
          return this.__data__.has(e)
      }
      hd.exports = iS
  }
  );
  var nt = c( (nX, yd) => {
      function oS(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function")
      }
      yd.exports = oS
  }
  );
  var jo = c( (iX, Ed) => {
      var aS = Et()
        , sS = nt()
        , uS = "[object AsyncFunction]"
        , cS = "[object Function]"
        , lS = "[object GeneratorFunction]"
        , fS = "[object Proxy]";
      function dS(e) {
          if (!sS(e))
              return !1;
          var t = aS(e);
          return t == cS || t == lS || t == uS || t == fS
      }
      Ed.exports = dS
  }
  );
  var _d = c( (oX, md) => {
      var pS = je()
        , gS = pS["__core-js_shared__"];
      md.exports = gS
  }
  );
  var Id = c( (aX, Td) => {
      var zo = _d()
        , bd = function() {
          var e = /[^.]+$/.exec(zo && zo.keys && zo.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : ""
      }();
      function hS(e) {
          return !!bd && bd in e
      }
      Td.exports = hS
  }
  );
  var Ko = c( (sX, Ad) => {
      var vS = Function.prototype
        , yS = vS.toString;
      function ES(e) {
          if (e != null) {
              try {
                  return yS.call(e)
              } catch {}
              try {
                  return e + ""
              } catch {}
          }
          return ""
      }
      Ad.exports = ES
  }
  );
  var wd = c( (uX, Od) => {
      var mS = jo()
        , _S = Id()
        , bS = nt()
        , TS = Ko()
        , IS = /[\\^$.*+?()[\]{}|]/g
        , AS = /^\[object .+?Constructor\]$/
        , OS = Function.prototype
        , wS = Object.prototype
        , SS = OS.toString
        , xS = wS.hasOwnProperty
        , CS = RegExp("^" + SS.call(xS).replace(IS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function RS(e) {
          if (!bS(e) || _S(e))
              return !1;
          var t = mS(e) ? CS : AS;
          return t.test(TS(e))
      }
      Od.exports = RS
  }
  );
  var xd = c( (cX, Sd) => {
      function NS(e, t) {
          return e?.[t]
      }
      Sd.exports = NS
  }
  );
  var mt = c( (lX, Cd) => {
      var LS = wd()
        , PS = xd();
      function qS(e, t) {
          var r = PS(e, t);
          return LS(r) ? r : void 0
      }
      Cd.exports = qS
  }
  );
  var Ln = c( (fX, Rd) => {
      var MS = mt()
        , FS = je()
        , DS = MS(FS, "Map");
      Rd.exports = DS
  }
  );
  var Lr = c( (dX, Nd) => {
      var GS = mt()
        , VS = GS(Object, "create");
      Nd.exports = VS
  }
  );
  var qd = c( (pX, Pd) => {
      var Ld = Lr();
      function kS() {
          this.__data__ = Ld ? Ld(null) : {},
          this.size = 0
      }
      Pd.exports = kS
  }
  );
  var Fd = c( (gX, Md) => {
      function BS(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0,
          t
      }
      Md.exports = BS
  }
  );
  var Gd = c( (hX, Dd) => {
      var US = Lr()
        , XS = "__lodash_hash_undefined__"
        , HS = Object.prototype
        , WS = HS.hasOwnProperty;
      function jS(e) {
          var t = this.__data__;
          if (US) {
              var r = t[e];
              return r === XS ? void 0 : r
          }
          return WS.call(t, e) ? t[e] : void 0
      }
      Dd.exports = jS
  }
  );
  var kd = c( (vX, Vd) => {
      var zS = Lr()
        , KS = Object.prototype
        , YS = KS.hasOwnProperty;
      function $S(e) {
          var t = this.__data__;
          return zS ? t[e] !== void 0 : YS.call(t, e)
      }
      Vd.exports = $S
  }
  );
  var Ud = c( (yX, Bd) => {
      var QS = Lr()
        , ZS = "__lodash_hash_undefined__";
      function JS(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1,
          r[e] = QS && t === void 0 ? ZS : t,
          this
      }
      Bd.exports = JS
  }
  );
  var Hd = c( (EX, Xd) => {
      var ex = qd()
        , tx = Fd()
        , rx = Gd()
        , nx = kd()
        , ix = Ud();
      function Kt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Kt.prototype.clear = ex;
      Kt.prototype.delete = tx;
      Kt.prototype.get = rx;
      Kt.prototype.has = nx;
      Kt.prototype.set = ix;
      Xd.exports = Kt
  }
  );
  var zd = c( (mX, jd) => {
      var Wd = Hd()
        , ox = Nr()
        , ax = Ln();
      function sx() {
          this.size = 0,
          this.__data__ = {
              hash: new Wd,
              map: new (ax || ox),
              string: new Wd
          }
      }
      jd.exports = sx
  }
  );
  var Yd = c( (_X, Kd) => {
      function ux(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      Kd.exports = ux
  }
  );
  var Pr = c( (bX, $d) => {
      var cx = Yd();
      function lx(e, t) {
          var r = e.__data__;
          return cx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      $d.exports = lx
  }
  );
  var Zd = c( (TX, Qd) => {
      var fx = Pr();
      function dx(e) {
          var t = fx(this, e).delete(e);
          return this.size -= t ? 1 : 0,
          t
      }
      Qd.exports = dx
  }
  );
  var ep = c( (IX, Jd) => {
      var px = Pr();
      function gx(e) {
          return px(this, e).get(e)
      }
      Jd.exports = gx
  }
  );
  var rp = c( (AX, tp) => {
      var hx = Pr();
      function vx(e) {
          return hx(this, e).has(e)
      }
      tp.exports = vx
  }
  );
  var ip = c( (OX, np) => {
      var yx = Pr();
      function Ex(e, t) {
          var r = yx(this, e)
            , n = r.size;
          return r.set(e, t),
          this.size += r.size == n ? 0 : 1,
          this
      }
      np.exports = Ex
  }
  );
  var Pn = c( (wX, op) => {
      var mx = zd()
        , _x = Zd()
        , bx = ep()
        , Tx = rp()
        , Ix = ip();
      function Yt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Yt.prototype.clear = mx;
      Yt.prototype.delete = _x;
      Yt.prototype.get = bx;
      Yt.prototype.has = Tx;
      Yt.prototype.set = Ix;
      op.exports = Yt
  }
  );
  var sp = c( (SX, ap) => {
      var Ax = Nr()
        , Ox = Ln()
        , wx = Pn()
        , Sx = 200;
      function xx(e, t) {
          var r = this.__data__;
          if (r instanceof Ax) {
              var n = r.__data__;
              if (!Ox || n.length < Sx - 1)
                  return n.push([e, t]),
                  this.size = ++r.size,
                  this;
              r = this.__data__ = new wx(n)
          }
          return r.set(e, t),
          this.size = r.size,
          this
      }
      ap.exports = xx
  }
  );
  var Yo = c( (xX, up) => {
      var Cx = Nr()
        , Rx = ld()
        , Nx = dd()
        , Lx = gd()
        , Px = vd()
        , qx = sp();
      function $t(e) {
          var t = this.__data__ = new Cx(e);
          this.size = t.size
      }
      $t.prototype.clear = Rx;
      $t.prototype.delete = Nx;
      $t.prototype.get = Lx;
      $t.prototype.has = Px;
      $t.prototype.set = qx;
      up.exports = $t
  }
  );
  var lp = c( (CX, cp) => {
      var Mx = "__lodash_hash_undefined__";
      function Fx(e) {
          return this.__data__.set(e, Mx),
          this
      }
      cp.exports = Fx
  }
  );
  var dp = c( (RX, fp) => {
      function Dx(e) {
          return this.__data__.has(e)
      }
      fp.exports = Dx
  }
  );
  var gp = c( (NX, pp) => {
      var Gx = Pn()
        , Vx = lp()
        , kx = dp();
      function qn(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.__data__ = new Gx; ++t < r; )
              this.add(e[t])
      }
      qn.prototype.add = qn.prototype.push = Vx;
      qn.prototype.has = kx;
      pp.exports = qn
  }
  );
  var vp = c( (LX, hp) => {
      function Bx(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e))
                  return !0;
          return !1
      }
      hp.exports = Bx
  }
  );
  var Ep = c( (PX, yp) => {
      function Ux(e, t) {
          return e.has(t)
      }
      yp.exports = Ux
  }
  );
  var $o = c( (qX, mp) => {
      var Xx = gp()
        , Hx = vp()
        , Wx = Ep()
        , jx = 1
        , zx = 2;
      function Kx(e, t, r, n, i, o) {
          var s = r & jx
            , a = e.length
            , u = t.length;
          if (a != u && !(s && u > a))
              return !1;
          var l = o.get(e)
            , v = o.get(t);
          if (l && v)
              return l == t && v == e;
          var d = -1
            , p = !0
            , E = r & zx ? new Xx : void 0;
          for (o.set(e, t),
          o.set(t, e); ++d < a; ) {
              var T = e[d]
                , b = t[d];
              if (n)
                  var O = s ? n(b, T, d, t, e, o) : n(T, b, d, e, t, o);
              if (O !== void 0) {
                  if (O)
                      continue;
                  p = !1;
                  break
              }
              if (E) {
                  if (!Hx(t, function(m, x) {
                      if (!Wx(E, x) && (T === m || i(T, m, r, n, o)))
                          return E.push(x)
                  })) {
                      p = !1;
                      break
                  }
              } else if (!(T === b || i(T, b, r, n, o))) {
                  p = !1;
                  break
              }
          }
          return o.delete(e),
          o.delete(t),
          p
      }
      mp.exports = Kx
  }
  );
  var bp = c( (MX, _p) => {
      var Yx = je()
        , $x = Yx.Uint8Array;
      _p.exports = $x
  }
  );
  var Ip = c( (FX, Tp) => {
      function Qx(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n, i) {
              r[++t] = [i, n]
          }),
          r
      }
      Tp.exports = Qx
  }
  );
  var Op = c( (DX, Ap) => {
      function Zx(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n) {
              r[++t] = n
          }),
          r
      }
      Ap.exports = Zx
  }
  );
  var Rp = c( (GX, Cp) => {
      var wp = Xt()
        , Sp = bp()
        , Jx = Nn()
        , eC = $o()
        , tC = Ip()
        , rC = Op()
        , nC = 1
        , iC = 2
        , oC = "[object Boolean]"
        , aC = "[object Date]"
        , sC = "[object Error]"
        , uC = "[object Map]"
        , cC = "[object Number]"
        , lC = "[object RegExp]"
        , fC = "[object Set]"
        , dC = "[object String]"
        , pC = "[object Symbol]"
        , gC = "[object ArrayBuffer]"
        , hC = "[object DataView]"
        , xp = wp ? wp.prototype : void 0
        , Qo = xp ? xp.valueOf : void 0;
      function vC(e, t, r, n, i, o, s) {
          switch (r) {
          case hC:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                  return !1;
              e = e.buffer,
              t = t.buffer;
          case gC:
              return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
          case oC:
          case aC:
          case cC:
              return Jx(+e, +t);
          case sC:
              return e.name == t.name && e.message == t.message;
          case lC:
          case dC:
              return e == t + "";
          case uC:
              var a = tC;
          case fC:
              var u = n & nC;
              if (a || (a = rC),
              e.size != t.size && !u)
                  return !1;
              var l = s.get(e);
              if (l)
                  return l == t;
              n |= iC,
              s.set(e, t);
              var v = eC(a(e), a(t), n, i, o, s);
              return s.delete(e),
              v;
          case pC:
              if (Qo)
                  return Qo.call(e) == Qo.call(t)
          }
          return !1
      }
      Cp.exports = vC
  }
  );
  var Mn = c( (VX, Np) => {
      function yC(e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
          return e
      }
      Np.exports = yC
  }
  );
  var me = c( (kX, Lp) => {
      var EC = Array.isArray;
      Lp.exports = EC
  }
  );
  var Zo = c( (BX, Pp) => {
      var mC = Mn()
        , _C = me();
      function bC(e, t, r) {
          var n = t(e);
          return _C(e) ? n : mC(n, r(e))
      }
      Pp.exports = bC
  }
  );
  var Mp = c( (UX, qp) => {
      function TC(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
              var s = e[r];
              t(s, r, e) && (o[i++] = s)
          }
          return o
      }
      qp.exports = TC
  }
  );
  var Jo = c( (XX, Fp) => {
      function IC() {
          return []
      }
      Fp.exports = IC
  }
  );
  var ea = c( (HX, Gp) => {
      var AC = Mp()
        , OC = Jo()
        , wC = Object.prototype
        , SC = wC.propertyIsEnumerable
        , Dp = Object.getOwnPropertySymbols
        , xC = Dp ? function(e) {
          return e == null ? [] : (e = Object(e),
          AC(Dp(e), function(t) {
              return SC.call(e, t)
          }))
      }
      : OC;
      Gp.exports = xC
  }
  );
  var kp = c( (WX, Vp) => {
      function CC(e, t) {
          for (var r = -1, n = Array(e); ++r < e; )
              n[r] = t(r);
          return n
      }
      Vp.exports = CC
  }
  );
  var Up = c( (jX, Bp) => {
      var RC = Et()
        , NC = ut()
        , LC = "[object Arguments]";
      function PC(e) {
          return NC(e) && RC(e) == LC
      }
      Bp.exports = PC
  }
  );
  var qr = c( (zX, Wp) => {
      var Xp = Up()
        , qC = ut()
        , Hp = Object.prototype
        , MC = Hp.hasOwnProperty
        , FC = Hp.propertyIsEnumerable
        , DC = Xp(function() {
          return arguments
      }()) ? Xp : function(e) {
          return qC(e) && MC.call(e, "callee") && !FC.call(e, "callee")
      }
      ;
      Wp.exports = DC
  }
  );
  var zp = c( (KX, jp) => {
      function GC() {
          return !1
      }
      jp.exports = GC
  }
  );
  var Fn = c( (Mr, Qt) => {
      var VC = je()
        , kC = zp()
        , $p = typeof Mr == "object" && Mr && !Mr.nodeType && Mr
        , Kp = $p && typeof Qt == "object" && Qt && !Qt.nodeType && Qt
        , BC = Kp && Kp.exports === $p
        , Yp = BC ? VC.Buffer : void 0
        , UC = Yp ? Yp.isBuffer : void 0
        , XC = UC || kC;
      Qt.exports = XC
  }
  );
  var Dn = c( (YX, Qp) => {
      var HC = 9007199254740991
        , WC = /^(?:0|[1-9]\d*)$/;
      function jC(e, t) {
          var r = typeof e;
          return t = t ?? HC,
          !!t && (r == "number" || r != "symbol" && WC.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      Qp.exports = jC
  }
  );
  var Gn = c( ($X, Zp) => {
      var zC = 9007199254740991;
      function KC(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zC
      }
      Zp.exports = KC
  }
  );
  var eg = c( (QX, Jp) => {
      var YC = Et()
        , $C = Gn()
        , QC = ut()
        , ZC = "[object Arguments]"
        , JC = "[object Array]"
        , eR = "[object Boolean]"
        , tR = "[object Date]"
        , rR = "[object Error]"
        , nR = "[object Function]"
        , iR = "[object Map]"
        , oR = "[object Number]"
        , aR = "[object Object]"
        , sR = "[object RegExp]"
        , uR = "[object Set]"
        , cR = "[object String]"
        , lR = "[object WeakMap]"
        , fR = "[object ArrayBuffer]"
        , dR = "[object DataView]"
        , pR = "[object Float32Array]"
        , gR = "[object Float64Array]"
        , hR = "[object Int8Array]"
        , vR = "[object Int16Array]"
        , yR = "[object Int32Array]"
        , ER = "[object Uint8Array]"
        , mR = "[object Uint8ClampedArray]"
        , _R = "[object Uint16Array]"
        , bR = "[object Uint32Array]"
        , ae = {};
      ae[pR] = ae[gR] = ae[hR] = ae[vR] = ae[yR] = ae[ER] = ae[mR] = ae[_R] = ae[bR] = !0;
      ae[ZC] = ae[JC] = ae[fR] = ae[eR] = ae[dR] = ae[tR] = ae[rR] = ae[nR] = ae[iR] = ae[oR] = ae[aR] = ae[sR] = ae[uR] = ae[cR] = ae[lR] = !1;
      function TR(e) {
          return QC(e) && $C(e.length) && !!ae[YC(e)]
      }
      Jp.exports = TR
  }
  );
  var rg = c( (ZX, tg) => {
      function IR(e) {
          return function(t) {
              return e(t)
          }
      }
      tg.exports = IR
  }
  );
  var ig = c( (Fr, Zt) => {
      var AR = wo()
        , ng = typeof Fr == "object" && Fr && !Fr.nodeType && Fr
        , Dr = ng && typeof Zt == "object" && Zt && !Zt.nodeType && Zt
        , OR = Dr && Dr.exports === ng
        , ta = OR && AR.process
        , wR = function() {
          try {
              var e = Dr && Dr.require && Dr.require("util").types;
              return e || ta && ta.binding && ta.binding("util")
          } catch {}
      }();
      Zt.exports = wR
  }
  );
  var Vn = c( (JX, sg) => {
      var SR = eg()
        , xR = rg()
        , og = ig()
        , ag = og && og.isTypedArray
        , CR = ag ? xR(ag) : SR;
      sg.exports = CR
  }
  );
  var ra = c( (eH, ug) => {
      var RR = kp()
        , NR = qr()
        , LR = me()
        , PR = Fn()
        , qR = Dn()
        , MR = Vn()
        , FR = Object.prototype
        , DR = FR.hasOwnProperty;
      function GR(e, t) {
          var r = LR(e)
            , n = !r && NR(e)
            , i = !r && !n && PR(e)
            , o = !r && !n && !i && MR(e)
            , s = r || n || i || o
            , a = s ? RR(e.length, String) : []
            , u = a.length;
          for (var l in e)
              (t || DR.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || qR(l, u))) && a.push(l);
          return a
      }
      ug.exports = GR
  }
  );
  var kn = c( (tH, cg) => {
      var VR = Object.prototype;
      function kR(e) {
          var t = e && e.constructor
            , r = typeof t == "function" && t.prototype || VR;
          return e === r
      }
      cg.exports = kR
  }
  );
  var fg = c( (rH, lg) => {
      var BR = So()
        , UR = BR(Object.keys, Object);
      lg.exports = UR
  }
  );
  var Bn = c( (nH, dg) => {
      var XR = kn()
        , HR = fg()
        , WR = Object.prototype
        , jR = WR.hasOwnProperty;
      function zR(e) {
          if (!XR(e))
              return HR(e);
          var t = [];
          for (var r in Object(e))
              jR.call(e, r) && r != "constructor" && t.push(r);
          return t
      }
      dg.exports = zR
  }
  );
  var Nt = c( (iH, pg) => {
      var KR = jo()
        , YR = Gn();
      function $R(e) {
          return e != null && YR(e.length) && !KR(e)
      }
      pg.exports = $R
  }
  );
  var Gr = c( (oH, gg) => {
      var QR = ra()
        , ZR = Bn()
        , JR = Nt();
      function eN(e) {
          return JR(e) ? QR(e) : ZR(e)
      }
      gg.exports = eN
  }
  );
  var vg = c( (aH, hg) => {
      var tN = Zo()
        , rN = ea()
        , nN = Gr();
      function iN(e) {
          return tN(e, nN, rN)
      }
      hg.exports = iN
  }
  );
  var mg = c( (sH, Eg) => {
      var yg = vg()
        , oN = 1
        , aN = Object.prototype
        , sN = aN.hasOwnProperty;
      function uN(e, t, r, n, i, o) {
          var s = r & oN
            , a = yg(e)
            , u = a.length
            , l = yg(t)
            , v = l.length;
          if (u != v && !s)
              return !1;
          for (var d = u; d--; ) {
              var p = a[d];
              if (!(s ? p in t : sN.call(t, p)))
                  return !1
          }
          var E = o.get(e)
            , T = o.get(t);
          if (E && T)
              return E == t && T == e;
          var b = !0;
          o.set(e, t),
          o.set(t, e);
          for (var O = s; ++d < u; ) {
              p = a[d];
              var m = e[p]
                , x = t[p];
              if (n)
                  var A = s ? n(x, m, p, t, e, o) : n(m, x, p, e, t, o);
              if (!(A === void 0 ? m === x || i(m, x, r, n, o) : A)) {
                  b = !1;
                  break
              }
              O || (O = p == "constructor")
          }
          if (b && !O) {
              var P = e.constructor
                , q = t.constructor;
              P != q && "constructor"in e && "constructor"in t && !(typeof P == "function" && P instanceof P && typeof q == "function" && q instanceof q) && (b = !1)
          }
          return o.delete(e),
          o.delete(t),
          b
      }
      Eg.exports = uN
  }
  );
  var bg = c( (uH, _g) => {
      var cN = mt()
        , lN = je()
        , fN = cN(lN, "DataView");
      _g.exports = fN
  }
  );
  var Ig = c( (cH, Tg) => {
      var dN = mt()
        , pN = je()
        , gN = dN(pN, "Promise");
      Tg.exports = gN
  }
  );
  var Og = c( (lH, Ag) => {
      var hN = mt()
        , vN = je()
        , yN = hN(vN, "Set");
      Ag.exports = yN
  }
  );
  var na = c( (fH, wg) => {
      var EN = mt()
        , mN = je()
        , _N = EN(mN, "WeakMap");
      wg.exports = _N
  }
  );
  var Un = c( (dH, Pg) => {
      var ia = bg()
        , oa = Ln()
        , aa = Ig()
        , sa = Og()
        , ua = na()
        , Lg = Et()
        , Jt = Ko()
        , Sg = "[object Map]"
        , bN = "[object Object]"
        , xg = "[object Promise]"
        , Cg = "[object Set]"
        , Rg = "[object WeakMap]"
        , Ng = "[object DataView]"
        , TN = Jt(ia)
        , IN = Jt(oa)
        , AN = Jt(aa)
        , ON = Jt(sa)
        , wN = Jt(ua)
        , Lt = Lg;
      (ia && Lt(new ia(new ArrayBuffer(1))) != Ng || oa && Lt(new oa) != Sg || aa && Lt(aa.resolve()) != xg || sa && Lt(new sa) != Cg || ua && Lt(new ua) != Rg) && (Lt = function(e) {
          var t = Lg(e)
            , r = t == bN ? e.constructor : void 0
            , n = r ? Jt(r) : "";
          if (n)
              switch (n) {
              case TN:
                  return Ng;
              case IN:
                  return Sg;
              case AN:
                  return xg;
              case ON:
                  return Cg;
              case wN:
                  return Rg
              }
          return t
      }
      );
      Pg.exports = Lt
  }
  );
  var Bg = c( (pH, kg) => {
      var ca = Yo()
        , SN = $o()
        , xN = Rp()
        , CN = mg()
        , qg = Un()
        , Mg = me()
        , Fg = Fn()
        , RN = Vn()
        , NN = 1
        , Dg = "[object Arguments]"
        , Gg = "[object Array]"
        , Xn = "[object Object]"
        , LN = Object.prototype
        , Vg = LN.hasOwnProperty;
      function PN(e, t, r, n, i, o) {
          var s = Mg(e)
            , a = Mg(t)
            , u = s ? Gg : qg(e)
            , l = a ? Gg : qg(t);
          u = u == Dg ? Xn : u,
          l = l == Dg ? Xn : l;
          var v = u == Xn
            , d = l == Xn
            , p = u == l;
          if (p && Fg(e)) {
              if (!Fg(t))
                  return !1;
              s = !0,
              v = !1
          }
          if (p && !v)
              return o || (o = new ca),
              s || RN(e) ? SN(e, t, r, n, i, o) : xN(e, t, u, r, n, i, o);
          if (!(r & NN)) {
              var E = v && Vg.call(e, "__wrapped__")
                , T = d && Vg.call(t, "__wrapped__");
              if (E || T) {
                  var b = E ? e.value() : e
                    , O = T ? t.value() : t;
                  return o || (o = new ca),
                  i(b, O, r, n, o)
              }
          }
          return p ? (o || (o = new ca),
          CN(e, t, r, n, i, o)) : !1
      }
      kg.exports = PN
  }
  );
  var la = c( (gH, Hg) => {
      var qN = Bg()
        , Ug = ut();
      function Xg(e, t, r, n, i) {
          return e === t ? !0 : e == null || t == null || !Ug(e) && !Ug(t) ? e !== e && t !== t : qN(e, t, r, n, Xg, i)
      }
      Hg.exports = Xg
  }
  );
  var jg = c( (hH, Wg) => {
      var MN = Yo()
        , FN = la()
        , DN = 1
        , GN = 2;
      function VN(e, t, r, n) {
          var i = r.length
            , o = i
            , s = !n;
          if (e == null)
              return !o;
          for (e = Object(e); i--; ) {
              var a = r[i];
              if (s && a[2] ? a[1] !== e[a[0]] : !(a[0]in e))
                  return !1
          }
          for (; ++i < o; ) {
              a = r[i];
              var u = a[0]
                , l = e[u]
                , v = a[1];
              if (s && a[2]) {
                  if (l === void 0 && !(u in e))
                      return !1
              } else {
                  var d = new MN;
                  if (n)
                      var p = n(l, v, u, e, t, d);
                  if (!(p === void 0 ? FN(v, l, DN | GN, n, d) : p))
                      return !1
              }
          }
          return !0
      }
      Wg.exports = VN
  }
  );
  var fa = c( (vH, zg) => {
      var kN = nt();
      function BN(e) {
          return e === e && !kN(e)
      }
      zg.exports = BN
  }
  );
  var Yg = c( (yH, Kg) => {
      var UN = fa()
        , XN = Gr();
      function HN(e) {
          for (var t = XN(e), r = t.length; r--; ) {
              var n = t[r]
                , i = e[n];
              t[r] = [n, i, UN(i)]
          }
          return t
      }
      Kg.exports = HN
  }
  );
  var da = c( (EH, $g) => {
      function WN(e, t) {
          return function(r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
          }
      }
      $g.exports = WN
  }
  );
  var Zg = c( (mH, Qg) => {
      var jN = jg()
        , zN = Yg()
        , KN = da();
      function YN(e) {
          var t = zN(e);
          return t.length == 1 && t[0][2] ? KN(t[0][0], t[0][1]) : function(r) {
              return r === e || jN(r, e, t)
          }
      }
      Qg.exports = YN
  }
  );
  var Vr = c( (_H, Jg) => {
      var $N = Et()
        , QN = ut()
        , ZN = "[object Symbol]";
      function JN(e) {
          return typeof e == "symbol" || QN(e) && $N(e) == ZN
      }
      Jg.exports = JN
  }
  );
  var Hn = c( (bH, eh) => {
      var eL = me()
        , tL = Vr()
        , rL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
        , nL = /^\w*$/;
      function iL(e, t) {
          if (eL(e))
              return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || tL(e) ? !0 : nL.test(e) || !rL.test(e) || t != null && e in Object(t)
      }
      eh.exports = iL
  }
  );
  var nh = c( (TH, rh) => {
      var th = Pn()
        , oL = "Expected a function";
      function pa(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
              throw new TypeError(oL);
          var r = function() {
              var n = arguments
                , i = t ? t.apply(this, n) : n[0]
                , o = r.cache;
              if (o.has(i))
                  return o.get(i);
              var s = e.apply(this, n);
              return r.cache = o.set(i, s) || o,
              s
          };
          return r.cache = new (pa.Cache || th),
          r
      }
      pa.Cache = th;
      rh.exports = pa
  }
  );
  var oh = c( (IH, ih) => {
      var aL = nh()
        , sL = 500;
      function uL(e) {
          var t = aL(e, function(n) {
              return r.size === sL && r.clear(),
              n
          })
            , r = t.cache;
          return t
      }
      ih.exports = uL
  }
  );
  var sh = c( (AH, ah) => {
      var cL = oh()
        , lL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
        , fL = /\\(\\)?/g
        , dL = cL(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""),
          e.replace(lL, function(r, n, i, o) {
              t.push(i ? o.replace(fL, "$1") : n || r)
          }),
          t
      });
      ah.exports = dL
  }
  );
  var ga = c( (OH, uh) => {
      function pL(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
              i[r] = t(e[r], r, e);
          return i
      }
      uh.exports = pL
  }
  );
  var gh = c( (wH, ph) => {
      var ch = Xt()
        , gL = ga()
        , hL = me()
        , vL = Vr()
        , yL = 1 / 0
        , lh = ch ? ch.prototype : void 0
        , fh = lh ? lh.toString : void 0;
      function dh(e) {
          if (typeof e == "string")
              return e;
          if (hL(e))
              return gL(e, dh) + "";
          if (vL(e))
              return fh ? fh.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -yL ? "-0" : t
      }
      ph.exports = dh
  }
  );
  var vh = c( (SH, hh) => {
      var EL = gh();
      function mL(e) {
          return e == null ? "" : EL(e)
      }
      hh.exports = mL
  }
  );
  var kr = c( (xH, yh) => {
      var _L = me()
        , bL = Hn()
        , TL = sh()
        , IL = vh();
      function AL(e, t) {
          return _L(e) ? e : bL(e, t) ? [e] : TL(IL(e))
      }
      yh.exports = AL
  }
  );
  var er = c( (CH, Eh) => {
      var OL = Vr()
        , wL = 1 / 0;
      function SL(e) {
          if (typeof e == "string" || OL(e))
              return e;
          var t = e + "";
          return t == "0" && 1 / e == -wL ? "-0" : t
      }
      Eh.exports = SL
  }
  );
  var Wn = c( (RH, mh) => {
      var xL = kr()
        , CL = er();
      function RL(e, t) {
          t = xL(t, e);
          for (var r = 0, n = t.length; e != null && r < n; )
              e = e[CL(t[r++])];
          return r && r == n ? e : void 0
      }
      mh.exports = RL
  }
  );
  var jn = c( (NH, _h) => {
      var NL = Wn();
      function LL(e, t, r) {
          var n = e == null ? void 0 : NL(e, t);
          return n === void 0 ? r : n
      }
      _h.exports = LL
  }
  );
  var Th = c( (LH, bh) => {
      function PL(e, t) {
          return e != null && t in Object(e)
      }
      bh.exports = PL
  }
  );
  var Ah = c( (PH, Ih) => {
      var qL = kr()
        , ML = qr()
        , FL = me()
        , DL = Dn()
        , GL = Gn()
        , VL = er();
      function kL(e, t, r) {
          t = qL(t, e);
          for (var n = -1, i = t.length, o = !1; ++n < i; ) {
              var s = VL(t[n]);
              if (!(o = e != null && r(e, s)))
                  break;
              e = e[s]
          }
          return o || ++n != i ? o : (i = e == null ? 0 : e.length,
          !!i && GL(i) && DL(s, i) && (FL(e) || ML(e)))
      }
      Ih.exports = kL
  }
  );
  var wh = c( (qH, Oh) => {
      var BL = Th()
        , UL = Ah();
      function XL(e, t) {
          return e != null && UL(e, t, BL)
      }
      Oh.exports = XL
  }
  );
  var xh = c( (MH, Sh) => {
      var HL = la()
        , WL = jn()
        , jL = wh()
        , zL = Hn()
        , KL = fa()
        , YL = da()
        , $L = er()
        , QL = 1
        , ZL = 2;
      function JL(e, t) {
          return zL(e) && KL(t) ? YL($L(e), t) : function(r) {
              var n = WL(r, e);
              return n === void 0 && n === t ? jL(r, e) : HL(t, n, QL | ZL)
          }
      }
      Sh.exports = JL
  }
  );
  var zn = c( (FH, Ch) => {
      function eP(e) {
          return e
      }
      Ch.exports = eP
  }
  );
  var ha = c( (DH, Rh) => {
      function tP(e) {
          return function(t) {
              return t?.[e]
          }
      }
      Rh.exports = tP
  }
  );
  var Lh = c( (GH, Nh) => {
      var rP = Wn();
      function nP(e) {
          return function(t) {
              return rP(t, e)
          }
      }
      Nh.exports = nP
  }
  );
  var qh = c( (VH, Ph) => {
      var iP = ha()
        , oP = Lh()
        , aP = Hn()
        , sP = er();
      function uP(e) {
          return aP(e) ? iP(sP(e)) : oP(e)
      }
      Ph.exports = uP
  }
  );
  var _t = c( (kH, Mh) => {
      var cP = Zg()
        , lP = xh()
        , fP = zn()
        , dP = me()
        , pP = qh();
      function gP(e) {
          return typeof e == "function" ? e : e == null ? fP : typeof e == "object" ? dP(e) ? lP(e[0], e[1]) : cP(e) : pP(e)
      }
      Mh.exports = gP
  }
  );
  var va = c( (BH, Fh) => {
      var hP = _t()
        , vP = Nt()
        , yP = Gr();
      function EP(e) {
          return function(t, r, n) {
              var i = Object(t);
              if (!vP(t)) {
                  var o = hP(r, 3);
                  t = yP(t),
                  r = function(a) {
                      return o(i[a], a, i)
                  }
              }
              var s = e(t, r, n);
              return s > -1 ? i[o ? t[s] : s] : void 0
          }
      }
      Fh.exports = EP
  }
  );
  var ya = c( (UH, Dh) => {
      function mP(e, t, r, n) {
          for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
              if (t(e[o], o, e))
                  return o;
          return -1
      }
      Dh.exports = mP
  }
  );
  var Vh = c( (XH, Gh) => {
      var _P = /\s/;
      function bP(e) {
          for (var t = e.length; t-- && _P.test(e.charAt(t)); )
              ;
          return t
      }
      Gh.exports = bP
  }
  );
  var Bh = c( (HH, kh) => {
      var TP = Vh()
        , IP = /^\s+/;
      function AP(e) {
          return e && e.slice(0, TP(e) + 1).replace(IP, "")
      }
      kh.exports = AP
  }
  );
  var Kn = c( (WH, Hh) => {
      var OP = Bh()
        , Uh = nt()
        , wP = Vr()
        , Xh = 0 / 0
        , SP = /^[-+]0x[0-9a-f]+$/i
        , xP = /^0b[01]+$/i
        , CP = /^0o[0-7]+$/i
        , RP = parseInt;
      function NP(e) {
          if (typeof e == "number")
              return e;
          if (wP(e))
              return Xh;
          if (Uh(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Uh(t) ? t + "" : t
          }
          if (typeof e != "string")
              return e === 0 ? e : +e;
          e = OP(e);
          var r = xP.test(e);
          return r || CP.test(e) ? RP(e.slice(2), r ? 2 : 8) : SP.test(e) ? Xh : +e
      }
      Hh.exports = NP
  }
  );
  var zh = c( (jH, jh) => {
      var LP = Kn()
        , Wh = 1 / 0
        , PP = 17976931348623157e292;
      function qP(e) {
          if (!e)
              return e === 0 ? e : 0;
          if (e = LP(e),
          e === Wh || e === -Wh) {
              var t = e < 0 ? -1 : 1;
              return t * PP
          }
          return e === e ? e : 0
      }
      jh.exports = qP
  }
  );
  var Ea = c( (zH, Kh) => {
      var MP = zh();
      function FP(e) {
          var t = MP(e)
            , r = t % 1;
          return t === t ? r ? t - r : t : 0
      }
      Kh.exports = FP
  }
  );
  var $h = c( (KH, Yh) => {
      var DP = ya()
        , GP = _t()
        , VP = Ea()
        , kP = Math.max;
      function BP(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = r == null ? 0 : VP(r);
          return i < 0 && (i = kP(n + i, 0)),
          DP(e, GP(t, 3), i)
      }
      Yh.exports = BP
  }
  );
  var ma = c( (YH, Qh) => {
      var UP = va()
        , XP = $h()
        , HP = UP(XP);
      Qh.exports = HP
  }
  );
  var ev = {};
  Pe(ev, {
      ELEMENT_MATCHES: () => WP,
      FLEX_PREFIXED: () => _a,
      IS_BROWSER_ENV: () => Ke,
      TRANSFORM_PREFIXED: () => bt,
      TRANSFORM_STYLE_PREFIXED: () => $n,
      withBrowser: () => Yn
  });
  var Jh, Ke, Yn, WP, _a, bt, Zh, $n, Qn = ce( () => {
      "use strict";
      Jh = ne(ma()),
      Ke = typeof window < "u",
      Yn = (e, t) => Ke ? e() : t,
      WP = Yn( () => (0,
      Jh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
      _a = Yn( () => {
          let e = document.createElement("i")
            , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
            , r = "";
          try {
              let {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i];
                  if (e.style.display = o,
                  e.style.display === o)
                      return o
              }
              return r
          } catch {
              return r
          }
      }
      , "flex"),
      bt = Yn( () => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"]
                , r = "Transform"
                , {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i] + r;
                  if (e.style[o] !== void 0)
                      return o
              }
          }
          return "transform"
      }
      , "transform"),
      Zh = bt.split("transform")[0],
      $n = Zh ? Zh + "TransformStyle" : "transformStyle"
  }
  );
  var ba = c( ($H, ov) => {
      var jP = 4
        , zP = .001
        , KP = 1e-7
        , YP = 10
        , Br = 11
        , Zn = 1 / (Br - 1)
        , $P = typeof Float32Array == "function";
      function tv(e, t) {
          return 1 - 3 * t + 3 * e
      }
      function rv(e, t) {
          return 3 * t - 6 * e
      }
      function nv(e) {
          return 3 * e
      }
      function Jn(e, t, r) {
          return ((tv(t, r) * e + rv(t, r)) * e + nv(t)) * e
      }
      function iv(e, t, r) {
          return 3 * tv(t, r) * e * e + 2 * rv(t, r) * e + nv(t)
      }
      function QP(e, t, r, n, i) {
          var o, s, a = 0;
          do
              s = t + (r - t) / 2,
              o = Jn(s, n, i) - e,
              o > 0 ? r = s : t = s;
          while (Math.abs(o) > KP && ++a < YP);
          return s
      }
      function ZP(e, t, r, n) {
          for (var i = 0; i < jP; ++i) {
              var o = iv(t, r, n);
              if (o === 0)
                  return t;
              var s = Jn(t, r, n) - e;
              t -= s / o
          }
          return t
      }
      ov.exports = function(t, r, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
          var o = $P ? new Float32Array(Br) : new Array(Br);
          if (t !== r || n !== i)
              for (var s = 0; s < Br; ++s)
                  o[s] = Jn(s * Zn, t, n);
          function a(u) {
              for (var l = 0, v = 1, d = Br - 1; v !== d && o[v] <= u; ++v)
                  l += Zn;
              --v;
              var p = (u - o[v]) / (o[v + 1] - o[v])
                , E = l + p * Zn
                , T = iv(E, t, n);
              return T >= zP ? ZP(u, E, t, n) : T === 0 ? E : QP(u, l, l + Zn, t, n)
          }
          return function(l) {
              return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Jn(a(l), r, i)
          }
      }
  }
  );
  var Xr = {};
  Pe(Xr, {
      bounce: () => qq,
      bouncePast: () => Mq,
      ease: () => JP,
      easeIn: () => eq,
      easeInOut: () => rq,
      easeOut: () => tq,
      inBack: () => Oq,
      inCirc: () => bq,
      inCubic: () => aq,
      inElastic: () => xq,
      inExpo: () => Eq,
      inOutBack: () => Sq,
      inOutCirc: () => Iq,
      inOutCubic: () => uq,
      inOutElastic: () => Rq,
      inOutExpo: () => _q,
      inOutQuad: () => oq,
      inOutQuart: () => fq,
      inOutQuint: () => gq,
      inOutSine: () => yq,
      inQuad: () => nq,
      inQuart: () => cq,
      inQuint: () => dq,
      inSine: () => hq,
      outBack: () => wq,
      outBounce: () => Aq,
      outCirc: () => Tq,
      outCubic: () => sq,
      outElastic: () => Cq,
      outExpo: () => mq,
      outQuad: () => iq,
      outQuart: () => lq,
      outQuint: () => pq,
      outSine: () => vq,
      swingFrom: () => Lq,
      swingFromTo: () => Nq,
      swingTo: () => Pq
  });
  function nq(e) {
      return Math.pow(e, 2)
  }
  function iq(e) {
      return -(Math.pow(e - 1, 2) - 1)
  }
  function oq(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
  }
  function aq(e) {
      return Math.pow(e, 3)
  }
  function sq(e) {
      return Math.pow(e - 1, 3) + 1
  }
  function uq(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
  }
  function cq(e) {
      return Math.pow(e, 4)
  }
  function lq(e) {
      return -(Math.pow(e - 1, 4) - 1)
  }
  function fq(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
  }
  function dq(e) {
      return Math.pow(e, 5)
  }
  function pq(e) {
      return Math.pow(e - 1, 5) + 1
  }
  function gq(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
  }
  function hq(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
  }
  function vq(e) {
      return Math.sin(e * (Math.PI / 2))
  }
  function yq(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
  }
  function Eq(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
  }
  function mq(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
  }
  function _q(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
  }
  function bq(e) {
      return -(Math.sqrt(1 - e * e) - 1)
  }
  function Tq(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
  }
  function Iq(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
  }
  function Aq(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function Oq(e) {
      let t = ct;
      return e * e * ((t + 1) * e - t)
  }
  function wq(e) {
      let t = ct;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function Sq(e) {
      let t = ct;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function xq(e) {
      let t = ct
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
  }
  function Cq(e) {
      let t = ct
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
  }
  function Rq(e) {
      let t = ct
        , r = 0
        , n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
  }
  function Nq(e) {
      let t = ct;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function Lq(e) {
      let t = ct;
      return e * e * ((t + 1) * e - t)
  }
  function Pq(e) {
      let t = ct;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function qq(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function Mq(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
  }
  var Ur, ct, JP, eq, tq, rq, Ta = ce( () => {
      "use strict";
      Ur = ne(ba()),
      ct = 1.70158,
      JP = (0,
      Ur.default)(.25, .1, .25, 1),
      eq = (0,
      Ur.default)(.42, 0, 1, 1),
      tq = (0,
      Ur.default)(0, 0, .58, 1),
      rq = (0,
      Ur.default)(.42, 0, .58, 1)
  }
  );
  var sv = {};
  Pe(sv, {
      applyEasing: () => Dq,
      createBezierEasing: () => Fq,
      optimizeFloat: () => Hr
  });
  function Hr(e, t=5, r=10) {
      let n = Math.pow(r, t)
        , i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
  }
  function Fq(e) {
      return (0,
      av.default)(...e)
  }
  function Dq(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && Xr[e] ? Xr[e](t) : t)
  }
  var av, Ia = ce( () => {
      "use strict";
      Ta();
      av = ne(ba())
  }
  );
  var lv = {};
  Pe(lv, {
      createElementState: () => cv,
      ixElements: () => Qq,
      mergeActionState: () => Aa
  });
  function cv(e, t, r, n, i) {
      let o = r === Gq ? (0,
      tr.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0,
      tr.mergeIn)(e, [n], {
          id: n,
          ref: t,
          refId: o,
          refType: r
      })
  }
  function Aa(e, t, r, n, i) {
      let o = Jq(i);
      return (0,
      tr.mergeIn)(e, [t, $q, r], n, o)
  }
  function Jq(e) {
      let {config: t} = e;
      return Zq.reduce( (r, n) => {
          let i = n[0]
            , o = n[1]
            , s = t[i]
            , a = t[o];
          return s != null && a != null && (r[o] = a),
          r
      }
      , {})
  }
  var tr, ZH, Gq, JH, Vq, kq, Bq, Uq, Xq, Hq, Wq, jq, zq, Kq, Yq, uv, $q, Qq, Zq, fv = ce( () => {
      "use strict";
      tr = ne(jt());
      Me();
      ({HTML_ELEMENT: ZH, PLAIN_OBJECT: Gq, ABSTRACT_NODE: JH, CONFIG_X_VALUE: Vq, CONFIG_Y_VALUE: kq, CONFIG_Z_VALUE: Bq, CONFIG_VALUE: Uq, CONFIG_X_UNIT: Xq, CONFIG_Y_UNIT: Hq, CONFIG_Z_UNIT: Wq, CONFIG_UNIT: jq} = Ae),
      {IX2_SESSION_STOPPED: zq, IX2_INSTANCE_ADDED: Kq, IX2_ELEMENT_STATE_CHANGED: Yq} = Ee,
      uv = {},
      $q = "refState",
      Qq = (e=uv, t={}) => {
          switch (t.type) {
          case zq:
              return uv;
          case Kq:
              {
                  let {elementId: r, element: n, origin: i, actionItem: o, refType: s} = t.payload
                    , {actionTypeId: a} = o
                    , u = e;
                  return (0,
                  tr.getIn)(u, [r, n]) !== n && (u = cv(u, n, s, r, o)),
                  Aa(u, r, a, i, o)
              }
          case Yq:
              {
                  let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                  return Aa(e, r, n, i, o)
              }
          default:
              return e
          }
      }
      ;
      Zq = [[Vq, Xq], [kq, Hq], [Bq, Wq], [Uq, jq]]
  }
  );
  var dv = c(_e => {
      "use strict";
      Object.defineProperty(_e, "__esModule", {
          value: !0
      });
      _e.renderPlugin = _e.getPluginOrigin = _e.getPluginDuration = _e.getPluginDestination = _e.getPluginConfig = _e.createPluginInstance = _e.clearPlugin = void 0;
      var eM = e => e.value;
      _e.getPluginConfig = eM;
      var tM = (e, t) => {
          if (t.config.duration !== "auto")
              return null;
          let r = parseFloat(e.getAttribute("data-duration"));
          return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      }
      ;
      _e.getPluginDuration = tM;
      var rM = e => e || {
          value: 0
      };
      _e.getPluginOrigin = rM;
      var nM = e => ({
          value: e.value
      });
      _e.getPluginDestination = nM;
      var iM = e => {
          let t = window.Webflow.require("lottie").createInstance(e);
          return t.stop(),
          t.setSubframe(!0),
          t
      }
      ;
      _e.createPluginInstance = iM;
      var oM = (e, t, r) => {
          if (!e)
              return;
          let n = t[r.actionTypeId].value / 100;
          e.goToFrame(e.frames * n)
      }
      ;
      _e.renderPlugin = oM;
      var aM = e => {
          window.Webflow.require("lottie").createInstance(e).stop()
      }
      ;
      _e.clearPlugin = aM
  }
  );
  var gv = c(be => {
      "use strict";
      Object.defineProperty(be, "__esModule", {
          value: !0
      });
      be.renderPlugin = be.getPluginOrigin = be.getPluginDuration = be.getPluginDestination = be.getPluginConfig = be.createPluginInstance = be.clearPlugin = void 0;
      var sM = e => document.querySelector(`[data-w-id="${e}"]`)
        , uM = () => window.Webflow.require("spline")
        , cM = (e, t) => e.filter(r => !t.includes(r))
        , lM = (e, t) => e.value[t];
      be.getPluginConfig = lM;
      var fM = () => null;
      be.getPluginDuration = fM;
      var pv = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
      })
        , dM = (e, t) => {
          let r = t.config.value
            , n = Object.keys(r);
          if (e) {
              let o = Object.keys(e)
                , s = cM(n, o);
              return s.length ? s.reduce( (u, l) => (u[l] = pv[l],
              u), e) : e
          }
          return n.reduce( (o, s) => (o[s] = pv[s],
          o), {})
      }
      ;
      be.getPluginOrigin = dM;
      var pM = e => e.value;
      be.getPluginDestination = pM;
      var gM = (e, t) => {
          var r;
          let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
          return n ? sM(n) : null
      }
      ;
      be.createPluginInstance = gM;
      var hM = (e, t, r) => {
          let n = uM()
            , i = n.getInstance(e)
            , o = r.config.target.objectId
            , s = a => {
              if (!a)
                  throw new Error("Invalid spline app passed to renderSpline");
              let u = o && a.findObjectById(o);
              if (!u)
                  return;
              let {PLUGIN_SPLINE: l} = t;
              l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ)
          }
          ;
          i ? s(i.spline) : n.setLoadHandler(e, s)
      }
      ;
      be.renderPlugin = hM;
      var vM = () => null;
      be.clearPlugin = vM
  }
  );
  var wa = c(Oa => {
      "use strict";
      Object.defineProperty(Oa, "__esModule", {
          value: !0
      });
      Oa.normalizeColor = yM;
      var hv = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32"
      };
      function yM(e) {
          let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), a = (typeof hv[o] == "string" ? hv[o].toLowerCase() : null) || o;
          if (a.startsWith("#")) {
              let u = a.substring(1);
              u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
              r = parseInt(u[1] + u[1], 16),
              n = parseInt(u[2] + u[2], 16),
              u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
              r = parseInt(u.substring(2, 4), 16),
              n = parseInt(u.substring(4, 6), 16),
              u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
          } else if (a.startsWith("rgba")) {
              let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10),
              i = parseFloat(u[3])
          } else if (a.startsWith("rgb")) {
              let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10)
          } else if (a.startsWith("hsla")) {
              let u = a.match(/hsla\(([^)]+)\)/)[1].split(",")
                , l = parseFloat(u[0])
                , v = parseFloat(u[1].replace("%", "")) / 100
                , d = parseFloat(u[2].replace("%", "")) / 100;
              i = parseFloat(u[3]);
              let p = (1 - Math.abs(2 * d - 1)) * v, E = p * (1 - Math.abs(l / 60 % 2 - 1)), T = d - p / 2, b, O, m;
              l >= 0 && l < 60 ? (b = p,
              O = E,
              m = 0) : l >= 60 && l < 120 ? (b = E,
              O = p,
              m = 0) : l >= 120 && l < 180 ? (b = 0,
              O = p,
              m = E) : l >= 180 && l < 240 ? (b = 0,
              O = E,
              m = p) : l >= 240 && l < 300 ? (b = E,
              O = 0,
              m = p) : (b = p,
              O = 0,
              m = E),
              t = Math.round((b + T) * 255),
              r = Math.round((O + T) * 255),
              n = Math.round((m + T) * 255)
          } else if (a.startsWith("hsl")) {
              let u = a.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), v = parseFloat(u[1].replace("%", "")) / 100, d = parseFloat(u[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * d - 1)) * v, E = p * (1 - Math.abs(l / 60 % 2 - 1)), T = d - p / 2, b, O, m;
              l >= 0 && l < 60 ? (b = p,
              O = E,
              m = 0) : l >= 60 && l < 120 ? (b = E,
              O = p,
              m = 0) : l >= 120 && l < 180 ? (b = 0,
              O = p,
              m = E) : l >= 180 && l < 240 ? (b = 0,
              O = E,
              m = p) : l >= 240 && l < 300 ? (b = E,
              O = 0,
              m = p) : (b = p,
              O = 0,
              m = E),
              t = Math.round((b + T) * 255),
              r = Math.round((O + T) * 255),
              n = Math.round((m + T) * 255)
          }
          if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
              throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
          return {
              red: t,
              green: r,
              blue: n,
              alpha: i
          }
      }
  }
  );
  var vv = c(Te => {
      "use strict";
      Object.defineProperty(Te, "__esModule", {
          value: !0
      });
      Te.renderPlugin = Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
      var EM = wa()
        , mM = (e, t) => e.value[t];
      Te.getPluginConfig = mM;
      var _M = () => null;
      Te.getPluginDuration = _M;
      var bM = (e, t) => {
          if (e)
              return e;
          let r = t.config.value
            , n = t.config.target.objectId
            , i = getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r.size != null)
              return {
                  size: parseInt(i, 10)
              };
          if (r.red != null && r.green != null && r.blue != null)
              return (0,
              EM.normalizeColor)(i)
      }
      ;
      Te.getPluginOrigin = bM;
      var TM = e => e.value;
      Te.getPluginDestination = TM;
      var IM = () => null;
      Te.createPluginInstance = IM;
      var AM = (e, t, r) => {
          let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: s, red: a, green: u, blue: l, alpha: v} = o, d;
          s != null && (d = s + i),
          a != null && l != null && u != null && v != null && (d = `rgba(${a}, ${u}, ${l}, ${v})`),
          d != null && document.documentElement.style.setProperty(n, d)
      }
      ;
      Te.renderPlugin = AM;
      var OM = (e, t) => {
          let r = t.config.target.objectId;
          document.documentElement.style.removeProperty(r)
      }
      ;
      Te.clearPlugin = OM
  }
  );
  var yv = c(ei => {
      "use strict";
      var xa = fn().default;
      Object.defineProperty(ei, "__esModule", {
          value: !0
      });
      ei.pluginMethodMap = void 0;
      var Sa = (Me(),
      Qe(If))
        , wM = xa(dv())
        , SM = xa(gv())
        , xM = xa(vv())
        , iW = ei.pluginMethodMap = new Map([[Sa.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...wM
      }], [Sa.ActionTypeConsts.PLUGIN_SPLINE, {
          ...SM
      }], [Sa.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...xM
      }]])
  }
  );
  var Ev = {};
  Pe(Ev, {
      clearPlugin: () => qa,
      createPluginInstance: () => RM,
      getPluginConfig: () => Ra,
      getPluginDestination: () => La,
      getPluginDuration: () => CM,
      getPluginOrigin: () => Na,
      isPluginType: () => Pt,
      renderPlugin: () => Pa
  });
  function Pt(e) {
      return Ca.pluginMethodMap.has(e)
  }
  var Ca, qt, Ra, Na, CM, La, RM, Pa, qa, Ma = ce( () => {
      "use strict";
      Qn();
      Ca = ne(yv());
      qt = e => t => {
          if (!Ke)
              return () => null;
          let r = Ca.pluginMethodMap.get(t);
          if (!r)
              throw new Error(`IX2 no plugin configured for: ${t}`);
          let n = r[e];
          if (!n)
              throw new Error(`IX2 invalid plugin method: ${e}`);
          return n
      }
      ,
      Ra = qt("getPluginConfig"),
      Na = qt("getPluginOrigin"),
      CM = qt("getPluginDuration"),
      La = qt("getPluginDestination"),
      RM = qt("createPluginInstance"),
      Pa = qt("renderPlugin"),
      qa = qt("clearPlugin")
  }
  );
  var _v = c( (sW, mv) => {
      function NM(e, t) {
          return e == null || e !== e ? t : e
      }
      mv.exports = NM
  }
  );
  var Tv = c( (uW, bv) => {
      function LM(e, t, r, n) {
          var i = -1
            , o = e == null ? 0 : e.length;
          for (n && o && (r = e[++i]); ++i < o; )
              r = t(r, e[i], i, e);
          return r
      }
      bv.exports = LM
  }
  );
  var Av = c( (cW, Iv) => {
      function PM(e) {
          return function(t, r, n) {
              for (var i = -1, o = Object(t), s = n(t), a = s.length; a--; ) {
                  var u = s[e ? a : ++i];
                  if (r(o[u], u, o) === !1)
                      break
              }
              return t
          }
      }
      Iv.exports = PM
  }
  );
  var wv = c( (lW, Ov) => {
      var qM = Av()
        , MM = qM();
      Ov.exports = MM
  }
  );
  var Fa = c( (fW, Sv) => {
      var FM = wv()
        , DM = Gr();
      function GM(e, t) {
          return e && FM(e, t, DM)
      }
      Sv.exports = GM
  }
  );
  var Cv = c( (dW, xv) => {
      var VM = Nt();
      function kM(e, t) {
          return function(r, n) {
              if (r == null)
                  return r;
              if (!VM(r))
                  return e(r, n);
              for (var i = r.length, o = t ? i : -1, s = Object(r); (t ? o-- : ++o < i) && n(s[o], o, s) !== !1; )
                  ;
              return r
          }
      }
      xv.exports = kM
  }
  );
  var Da = c( (pW, Rv) => {
      var BM = Fa()
        , UM = Cv()
        , XM = UM(BM);
      Rv.exports = XM
  }
  );
  var Lv = c( (gW, Nv) => {
      function HM(e, t, r, n, i) {
          return i(e, function(o, s, a) {
              r = n ? (n = !1,
              o) : t(r, o, s, a)
          }),
          r
      }
      Nv.exports = HM
  }
  );
  var qv = c( (hW, Pv) => {
      var WM = Tv()
        , jM = Da()
        , zM = _t()
        , KM = Lv()
        , YM = me();
      function $M(e, t, r) {
          var n = YM(e) ? WM : KM
            , i = arguments.length < 3;
          return n(e, zM(t, 4), r, i, jM)
      }
      Pv.exports = $M
  }
  );
  var Fv = c( (vW, Mv) => {
      var QM = ya()
        , ZM = _t()
        , JM = Ea()
        , eF = Math.max
        , tF = Math.min;
      function rF(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = n - 1;
          return r !== void 0 && (i = JM(r),
          i = r < 0 ? eF(n + i, 0) : tF(i, n - 1)),
          QM(e, ZM(t, 3), i, !0)
      }
      Mv.exports = rF
  }
  );
  var Gv = c( (yW, Dv) => {
      var nF = va()
        , iF = Fv()
        , oF = nF(iF);
      Dv.exports = oF
  }
  );
  function Vv(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }
  function aF(e, t) {
      if (Vv(e, t))
          return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
      let r = Object.keys(e)
        , n = Object.keys(t);
      if (r.length !== n.length)
          return !1;
      for (let i = 0; i < r.length; i++)
          if (!Object.hasOwn(t, r[i]) || !Vv(e[r[i]], t[r[i]]))
              return !1;
      return !0
  }
  var Ga, kv = ce( () => {
      "use strict";
      Ga = aF
  }
  );
  var iy = {};
  Pe(iy, {
      cleanupHTMLElement: () => n1,
      clearAllStyles: () => r1,
      clearObjectCache: () => IF,
      getActionListProgress: () => o1,
      getAffectedElements: () => Xa,
      getComputedStyle: () => NF,
      getDestinationValues: () => GF,
      getElementId: () => SF,
      getInstanceId: () => OF,
      getInstanceOrigin: () => qF,
      getItemConfigByKey: () => DF,
      getMaxDurationItemIndex: () => ny,
      getNamespacedParameterId: () => u1,
      getRenderType: () => ey,
      getStyleProp: () => VF,
      mediaQueriesEqual: () => l1,
      observeStore: () => RF,
      reduceListToGroup: () => a1,
      reifyState: () => xF,
      renderHTMLElement: () => kF,
      shallowEqual: () => Ga,
      shouldAllowMediaQuery: () => c1,
      shouldNamespaceEventParameter: () => s1,
      stringifyTarget: () => f1
  });
  function IF() {
      ti.clear()
  }
  function OF() {
      return "i" + AF++
  }
  function SF(e, t) {
      for (let r in e) {
          let n = e[r];
          if (n && n.ref === t)
              return n.id
      }
      return "e" + wF++
  }
  function xF({events: e, actionLists: t, site: r}={}) {
      let n = (0,
      oi.default)(e, (s, a) => {
          let {eventTypeId: u} = a;
          return s[u] || (s[u] = {}),
          s[u][a.id] = a,
          s
      }
      , {})
        , i = r && r.mediaQueries
        , o = [];
      return i ? o = i.map(s => s.key) : (i = [],
      console.warn("IX2 missing mediaQueries in site data")),
      {
          ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o
          }
      }
  }
  function RF({store: e, select: t, onChange: r, comparator: n=CF}) {
      let {getState: i, subscribe: o} = e
        , s = o(u)
        , a = t(i());
      function u() {
          let l = t(i());
          if (l == null) {
              s();
              return
          }
          n(l, a) || (a = l,
          r(a, e))
      }
      return s
  }
  function Xv(e) {
      let t = typeof e;
      if (t === "string")
          return {
              id: e
          };
      if (e != null && t === "object") {
          let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: s, useEventTarget: a} = e;
          return {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: s,
              useEventTarget: a
          }
      }
      return {}
  }
  function Xa({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
      if (!i)
          throw new Error("IX2 missing elementApi");
      let {targets: o} = e;
      if (Array.isArray(o) && o.length > 0)
          return o.reduce( (w, g) => w.concat(Xa({
              config: {
                  target: g
              },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i
          })), []);
      let {getValidDocument: s, getQuerySelector: a, queryDocument: u, getChildElements: l, getSiblingElements: v, matchSelector: d, elementContains: p, isSiblingNode: E} = i
        , {target: T} = e;
      if (!T)
          return [];
      let {id: b, objectId: O, selector: m, selectorGuids: x, appliesTo: A, useEventTarget: P} = Xv(T);
      if (O)
          return [ti.has(O) ? ti.get(O) : ti.set(O, {}).get(O)];
      if (A === Uo.PAGE) {
          let w = s(b);
          return w ? [w] : []
      }
      let N = (t?.action?.config?.affectedElements ?? {})[b || m] || {}, k = !!(N.id || N.selector), B, U, H, F = t && a(Xv(t.target));
      if (k ? (B = N.limitAffectedElements,
      U = F,
      H = a(N)) : U = H = a({
          id: b,
          selector: m,
          selectorGuids: x
      }),
      t && P) {
          let w = r && (H || P === !0) ? [r] : u(F);
          if (H) {
              if (P === _F)
                  return u(H).filter(g => w.some(S => p(g, S)));
              if (P === Bv)
                  return u(H).filter(g => w.some(S => p(S, g)));
              if (P === Uv)
                  return u(H).filter(g => w.some(S => E(S, g)))
          }
          return w
      }
      return U == null || H == null ? [] : Ke && n ? u(H).filter(w => n.contains(w)) : B === Bv ? u(U, H) : B === mF ? l(u(U)).filter(d(H)) : B === Uv ? v(u(U)).filter(d(H)) : u(H)
  }
  function NF({element: e, actionItem: t}) {
      if (!Ke)
          return {};
      let {actionTypeId: r} = t;
      switch (r) {
      case ar:
      case sr:
      case ur:
      case cr:
      case si:
          return window.getComputedStyle(e);
      default:
          return {}
      }
  }
  function qF(e, t={}, r={}, n, i) {
      let {getStyle: o} = i
        , {actionTypeId: s} = n;
      if (Pt(s))
          return Na(s)(t[s], n);
      switch (n.actionTypeId) {
      case nr:
      case ir:
      case or:
      case Kr:
          return t[n.actionTypeId] || Ha[n.actionTypeId];
      case Yr:
          return LF(t[n.actionTypeId], n.config.filters);
      case $r:
          return PF(t[n.actionTypeId], n.config.fontVariations);
      case Qv:
          return {
              value: (0,
              lt.default)(parseFloat(o(e, ni)), 1)
          };
      case ar:
          {
              let a = o(e, it), u = o(e, ot), l, v;
              return n.config.widthUnit === Tt ? l = Hv.test(a) ? parseFloat(a) : parseFloat(r.width) : l = (0,
              lt.default)(parseFloat(a), parseFloat(r.width)),
              n.config.heightUnit === Tt ? v = Hv.test(u) ? parseFloat(u) : parseFloat(r.height) : v = (0,
              lt.default)(parseFloat(u), parseFloat(r.height)),
              {
                  widthValue: l,
                  heightValue: v
              }
          }
      case sr:
      case ur:
      case cr:
          return JF({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: r,
              getStyle: o
          });
      case si:
          return {
              value: (0,
              lt.default)(o(e, ii), r.display)
          };
      case TF:
          return t[n.actionTypeId] || {
              value: 0
          };
      default:
          return
      }
  }
  function GF({element: e, actionItem: t, elementApi: r}) {
      if (Pt(t.actionTypeId))
          return La(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
      case nr:
      case ir:
      case or:
      case Kr:
          {
              let {xValue: n, yValue: i, zValue: o} = t.config;
              return {
                  xValue: n,
                  yValue: i,
                  zValue: o
              }
          }
      case ar:
          {
              let {getStyle: n, setStyle: i, getProperty: o} = r
                , {widthUnit: s, heightUnit: a} = t.config
                , {widthValue: u, heightValue: l} = t.config;
              if (!Ke)
                  return {
                      widthValue: u,
                      heightValue: l
                  };
              if (s === Tt) {
                  let v = n(e, it);
                  i(e, it, ""),
                  u = o(e, "offsetWidth"),
                  i(e, it, v)
              }
              if (a === Tt) {
                  let v = n(e, ot);
                  i(e, ot, ""),
                  l = o(e, "offsetHeight"),
                  i(e, ot, v)
              }
              return {
                  widthValue: u,
                  heightValue: l
              }
          }
      case sr:
      case ur:
      case cr:
          {
              let {rValue: n, gValue: i, bValue: o, aValue: s, globalSwatchId: a} = t.config;
              if (a && a.startsWith("--")) {
                  let {getStyle: u} = r
                    , l = u(e, a)
                    , v = (0,
                  zv.normalizeColor)(l);
                  return {
                      rValue: v.red,
                      gValue: v.green,
                      bValue: v.blue,
                      aValue: v.alpha
                  }
              }
              return {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: s
              }
          }
      case Yr:
          return t.config.filters.reduce(MF, {});
      case $r:
          return t.config.fontVariations.reduce(FF, {});
      default:
          {
              let {value: n} = t.config;
              return {
                  value: n
              }
          }
      }
  }
  function ey(e) {
      if (/^TRANSFORM_/.test(e))
          return Yv;
      if (/^STYLE_/.test(e))
          return Ba;
      if (/^GENERAL_/.test(e))
          return ka;
      if (/^PLUGIN_/.test(e))
          return $v
  }
  function VF(e, t) {
      return e === Ba ? t.replace("STYLE_", "").toLowerCase() : null
  }
  function kF(e, t, r, n, i, o, s, a, u) {
      switch (a) {
      case Yv:
          return WF(e, t, r, i, s);
      case Ba:
          return e1(e, t, r, i, o, s);
      case ka:
          return t1(e, i, s);
      case $v:
          {
              let {actionTypeId: l} = i;
              if (Pt(l))
                  return Pa(l)(u, t, i)
          }
      }
  }
  function WF(e, t, r, n, i) {
      let o = HF.map(a => {
          let u = Ha[a]
            , {xValue: l=u.xValue, yValue: v=u.yValue, zValue: d=u.zValue, xUnit: p="", yUnit: E="", zUnit: T=""} = t[a] || {};
          switch (a) {
          case nr:
              return `${cF}(${l}${p}, ${v}${E}, ${d}${T})`;
          case ir:
              return `${lF}(${l}${p}, ${v}${E}, ${d}${T})`;
          case or:
              return `${fF}(${l}${p}) ${dF}(${v}${E}) ${pF}(${d}${T})`;
          case Kr:
              return `${gF}(${l}${p}, ${v}${E})`;
          default:
              return ""
          }
      }
      ).join(" ")
        , {setStyle: s} = i;
      Mt(e, bt, i),
      s(e, bt, o),
      KF(n, r) && s(e, $n, hF)
  }
  function jF(e, t, r, n) {
      let i = (0,
      oi.default)(t, (s, a, u) => `${s} ${u}(${a}${XF(u, r)})`, "")
        , {setStyle: o} = n;
      Mt(e, Wr, n),
      o(e, Wr, i)
  }
  function zF(e, t, r, n) {
      let i = (0,
      oi.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`),
      s), []).join(", ")
        , {setStyle: o} = n;
      Mt(e, jr, n),
      o(e, jr, i)
  }
  function KF({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
      return e === nr && n !== void 0 || e === ir && n !== void 0 || e === or && (t !== void 0 || r !== void 0)
  }
  function ZF(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
  }
  function JF({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
      let i = Ua[t]
        , o = n(e, i)
        , s = $F.test(o) ? o : r[i]
        , a = ZF(QF, s).split(zr);
      return {
          rValue: (0,
          lt.default)(parseInt(a[0], 10), 255),
          gValue: (0,
          lt.default)(parseInt(a[1], 10), 255),
          bValue: (0,
          lt.default)(parseInt(a[2], 10), 255),
          aValue: (0,
          lt.default)(parseFloat(a[3]), 1)
      }
  }
  function e1(e, t, r, n, i, o) {
      let {setStyle: s} = o;
      switch (n.actionTypeId) {
      case ar:
          {
              let {widthUnit: a="", heightUnit: u=""} = n.config
                , {widthValue: l, heightValue: v} = r;
              l !== void 0 && (a === Tt && (a = "px"),
              Mt(e, it, o),
              s(e, it, l + a)),
              v !== void 0 && (u === Tt && (u = "px"),
              Mt(e, ot, o),
              s(e, ot, v + u));
              break
          }
      case Yr:
          {
              jF(e, r, n.config, o);
              break
          }
      case $r:
          {
              zF(e, r, n.config, o);
              break
          }
      case sr:
      case ur:
      case cr:
          {
              let a = Ua[n.actionTypeId]
                , u = Math.round(r.rValue)
                , l = Math.round(r.gValue)
                , v = Math.round(r.bValue)
                , d = r.aValue;
              Mt(e, a, o),
              s(e, a, d >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${d})`);
              break
          }
      default:
          {
              let {unit: a=""} = n.config;
              Mt(e, i, o),
              s(e, i, r.value + a);
              break
          }
      }
  }
  function t1(e, t, r) {
      let {setStyle: n} = r;
      switch (t.actionTypeId) {
      case si:
          {
              let {value: i} = t.config;
              i === vF && Ke ? n(e, ii, _a) : n(e, ii, i);
              return
          }
      }
  }
  function Mt(e, t, r) {
      if (!Ke)
          return;
      let n = Jv[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , s = i(e, rr);
      if (!s) {
          o(e, rr, n);
          return
      }
      let a = s.split(zr).map(Zv);
      a.indexOf(n) === -1 && o(e, rr, a.concat(n).join(zr))
  }
  function ty(e, t, r) {
      if (!Ke)
          return;
      let n = Jv[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , s = i(e, rr);
      !s || s.indexOf(n) === -1 || o(e, rr, s.split(zr).map(Zv).filter(a => a !== n).join(zr))
  }
  function r1({store: e, elementApi: t}) {
      let {ixData: r} = e.getState()
        , {events: n={}, actionLists: i={}} = r;
      Object.keys(n).forEach(o => {
          let s = n[o]
            , {config: a} = s.action
            , {actionListId: u} = a
            , l = i[u];
          l && Wv({
              actionList: l,
              event: s,
              elementApi: t
          })
      }
      ),
      Object.keys(i).forEach(o => {
          Wv({
              actionList: i[o],
              elementApi: t
          })
      }
      )
  }
  function Wv({actionList: e={}, event: t, elementApi: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e;
      n && n.forEach(o => {
          jv({
              actionGroup: o,
              event: t,
              elementApi: r
          })
      }
      ),
      i && i.forEach(o => {
          let {continuousActionGroups: s} = o;
          s.forEach(a => {
              jv({
                  actionGroup: a,
                  event: t,
                  elementApi: r
              })
          }
          )
      }
      )
  }
  function jv({actionGroup: e, event: t, elementApi: r}) {
      let {actionItems: n} = e;
      n.forEach(i => {
          let {actionTypeId: o, config: s} = i, a;
          Pt(o) ? a = u => qa(o)(u, i) : a = ry({
              effect: i1,
              actionTypeId: o,
              elementApi: r
          }),
          Xa({
              config: s,
              event: t,
              elementApi: r
          }).forEach(a)
      }
      )
  }
  function n1(e, t, r) {
      let {setStyle: n, getStyle: i} = r
        , {actionTypeId: o} = t;
      if (o === ar) {
          let {config: s} = t;
          s.widthUnit === Tt && n(e, it, ""),
          s.heightUnit === Tt && n(e, ot, "")
      }
      i(e, rr) && ry({
          effect: ty,
          actionTypeId: o,
          elementApi: r
      })(e)
  }
  function i1(e, t, r) {
      let {setStyle: n} = r;
      ty(e, t, r),
      n(e, t, ""),
      t === bt && n(e, $n, "")
  }
  function ny(e) {
      let t = 0
        , r = 0;
      return e.forEach( (n, i) => {
          let {config: o} = n
            , s = o.delay + o.duration;
          s >= t && (t = s,
          r = i)
      }
      ),
      r
  }
  function o1(e, t) {
      let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
        , {actionItem: i, verboseTimeElapsed: o=0} = t
        , s = 0
        , a = 0;
      return r.forEach( (u, l) => {
          if (n && l === 0)
              return;
          let {actionItems: v} = u
            , d = v[ny(v)]
            , {config: p, actionTypeId: E} = d;
          i.id === d.id && (a = s + o);
          let T = ey(E) === ka ? 0 : p.duration;
          s += p.delay + T
      }
      ),
      s > 0 ? Hr(a / s) : 0
  }
  function a1({actionList: e, actionItemId: t, rawData: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e
        , o = []
        , s = a => (o.push((0,
      ai.mergeIn)(a, ["config"], {
          delay: 0,
          duration: 0
      })),
      a.id === t);
      return n && n.some( ({actionItems: a}) => a.some(s)),
      i && i.some(a => {
          let {continuousActionGroups: u} = a;
          return u.some( ({actionItems: l}) => l.some(s))
      }
      ),
      (0,
      ai.setIn)(r, ["actionLists"], {
          [e.id]: {
              id: e.id,
              actionItemGroups: [{
                  actionItems: o
              }]
          }
      })
  }
  function s1(e, {basedOn: t}) {
      return e === ze.SCROLLING_IN_VIEW && (t === rt.ELEMENT || t == null) || e === ze.MOUSE_MOVE && t === rt.ELEMENT
  }
  function u1(e, t) {
      return e + bF + t
  }
  function c1(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
  }
  function l1(e, t) {
      return Ga(e && e.sort(), t && t.sort())
  }
  function f1(e) {
      if (typeof e == "string")
          return e;
      if (e.pluginElement && e.objectId)
          return e.pluginElement + Va + e.objectId;
      if (e.objectId)
          return e.objectId;
      let {id: t="", selector: r="", useEventTarget: n=""} = e;
      return t + Va + r + Va + n
  }
  var lt, oi, ri, ai, zv, sF, uF, cF, lF, fF, dF, pF, gF, hF, vF, ni, Wr, jr, it, ot, Kv, yF, EF, Bv, mF, Uv, _F, ii, rr, Tt, zr, bF, Va, Yv, ka, Ba, $v, nr, ir, or, Kr, Qv, Yr, $r, ar, sr, ur, cr, si, TF, Zv, Ua, Jv, ti, AF, wF, CF, Hv, LF, PF, MF, FF, DF, Ha, BF, UF, XF, HF, YF, $F, QF, ry, oy = ce( () => {
      "use strict";
      lt = ne(_v()),
      oi = ne(qv()),
      ri = ne(Gv()),
      ai = ne(jt());
      Me();
      kv();
      Ia();
      zv = ne(wa());
      Ma();
      Qn();
      ({BACKGROUND: sF, TRANSFORM: uF, TRANSLATE_3D: cF, SCALE_3D: lF, ROTATE_X: fF, ROTATE_Y: dF, ROTATE_Z: pF, SKEW: gF, PRESERVE_3D: hF, FLEX: vF, OPACITY: ni, FILTER: Wr, FONT_VARIATION_SETTINGS: jr, WIDTH: it, HEIGHT: ot, BACKGROUND_COLOR: Kv, BORDER_COLOR: yF, COLOR: EF, CHILDREN: Bv, IMMEDIATE_CHILDREN: mF, SIBLINGS: Uv, PARENT: _F, DISPLAY: ii, WILL_CHANGE: rr, AUTO: Tt, COMMA_DELIMITER: zr, COLON_DELIMITER: bF, BAR_DELIMITER: Va, RENDER_TRANSFORM: Yv, RENDER_GENERAL: ka, RENDER_STYLE: Ba, RENDER_PLUGIN: $v} = Ae),
      {TRANSFORM_MOVE: nr, TRANSFORM_SCALE: ir, TRANSFORM_ROTATE: or, TRANSFORM_SKEW: Kr, STYLE_OPACITY: Qv, STYLE_FILTER: Yr, STYLE_FONT_VARIATION: $r, STYLE_SIZE: ar, STYLE_BACKGROUND_COLOR: sr, STYLE_BORDER: ur, STYLE_TEXT_COLOR: cr, GENERAL_DISPLAY: si, OBJECT_VALUE: TF} = qe,
      Zv = e => e.trim(),
      Ua = Object.freeze({
          [sr]: Kv,
          [ur]: yF,
          [cr]: EF
      }),
      Jv = Object.freeze({
          [bt]: uF,
          [Kv]: sF,
          [ni]: ni,
          [Wr]: Wr,
          [it]: it,
          [ot]: ot,
          [jr]: jr
      }),
      ti = new Map;
      AF = 1;
      wF = 1;
      CF = (e, t) => e === t;
      Hv = /px/,
      LF = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = BF[n.type]),
      r), e || {}),
      PF = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = UF[n.type] || n.defaultValue || 0),
      r), e || {});
      MF = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      FF = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      DF = (e, t, r) => {
          if (Pt(e))
              return Ra(e)(r, t);
          switch (e) {
          case Yr:
              {
                  let n = (0,
                  ri.default)(r.filters, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          case $r:
              {
                  let n = (0,
                  ri.default)(r.fontVariations, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          default:
              return r[t]
          }
      }
      ;
      Ha = {
          [nr]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [ir]: Object.freeze({
              xValue: 1,
              yValue: 1,
              zValue: 1
          }),
          [or]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [Kr]: Object.freeze({
              xValue: 0,
              yValue: 0
          })
      },
      BF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
      }),
      UF = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
      }),
      XF = (e, t) => {
          let r = (0,
          ri.default)(t.filters, ({type: n}) => n === e);
          if (r && r.unit)
              return r.unit;
          switch (e) {
          case "blur":
              return "px";
          case "hue-rotate":
              return "deg";
          default:
              return "%"
          }
      }
      ,
      HF = Object.keys(Ha);
      YF = "\\(([^)]+)\\)",
      $F = /^rgb/,
      QF = RegExp(`rgba?${YF}`);
      ry = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
          switch (t) {
          case nr:
          case ir:
          case or:
          case Kr:
              e(n, bt, r);
              break;
          case Yr:
              e(n, Wr, r);
              break;
          case $r:
              e(n, jr, r);
              break;
          case Qv:
              e(n, ni, r);
              break;
          case ar:
              e(n, it, r),
              e(n, ot, r);
              break;
          case sr:
          case ur:
          case cr:
              e(n, Ua[t], r);
              break;
          case si:
              e(n, ii, r);
              break
          }
      }
  }
  );
  var Ft = c(xe => {
      "use strict";
      var lr = fn().default;
      Object.defineProperty(xe, "__esModule", {
          value: !0
      });
      xe.IX2VanillaUtils = xe.IX2VanillaPlugins = xe.IX2ElementsReducer = xe.IX2Easings = xe.IX2EasingUtils = xe.IX2BrowserSupport = void 0;
      var d1 = lr((Qn(),
      Qe(ev)));
      xe.IX2BrowserSupport = d1;
      var p1 = lr((Ta(),
      Qe(Xr)));
      xe.IX2Easings = p1;
      var g1 = lr((Ia(),
      Qe(sv)));
      xe.IX2EasingUtils = g1;
      var h1 = lr((fv(),
      Qe(lv)));
      xe.IX2ElementsReducer = h1;
      var v1 = lr((Ma(),
      Qe(Ev)));
      xe.IX2VanillaPlugins = v1;
      var y1 = lr((oy(),
      Qe(iy)));
      xe.IX2VanillaUtils = y1
  }
  );
  var ci, ft, E1, m1, _1, b1, T1, I1, ui, ay, A1, O1, Wa, w1, S1, x1, C1, sy, uy = ce( () => {
      "use strict";
      Me();
      ci = ne(Ft()),
      ft = ne(jt()),
      {IX2_RAW_DATA_IMPORTED: E1, IX2_SESSION_STOPPED: m1, IX2_INSTANCE_ADDED: _1, IX2_INSTANCE_STARTED: b1, IX2_INSTANCE_REMOVED: T1, IX2_ANIMATION_FRAME_CHANGED: I1} = Ee,
      {optimizeFloat: ui, applyEasing: ay, createBezierEasing: A1} = ci.IX2EasingUtils,
      {RENDER_GENERAL: O1} = Ae,
      {getItemConfigByKey: Wa, getRenderType: w1, getStyleProp: S1} = ci.IX2VanillaUtils,
      x1 = (e, t) => {
          let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: s, restingValue: a, actionTypeId: u, customEasingFn: l, skipMotion: v, skipToValue: d} = e
            , {parameters: p} = t.payload
            , E = Math.max(1 - s, .01)
            , T = p[n];
          T == null && (E = 1,
          T = a);
          let b = Math.max(T, 0) || 0
            , O = ui(b - r)
            , m = v ? d : ui(r + O * E)
            , x = m * 100;
          if (m === r && e.current)
              return e;
          let A, P, q, N;
          for (let B = 0, {length: U} = i; B < U; B++) {
              let {keyframe: H, actionItems: F} = i[B];
              if (B === 0 && (A = F[0]),
              x >= H) {
                  A = F[0];
                  let w = i[B + 1]
                    , g = w && x !== H;
                  P = g ? w.actionItems[0] : null,
                  g && (q = H / 100,
                  N = (w.keyframe - H) / 100)
              }
          }
          let k = {};
          if (A && !P)
              for (let B = 0, {length: U} = o; B < U; B++) {
                  let H = o[B];
                  k[H] = Wa(u, H, A.config)
              }
          else if (A && P && q !== void 0 && N !== void 0) {
              let B = (m - q) / N
                , U = A.config.easing
                , H = ay(U, B, l);
              for (let F = 0, {length: w} = o; F < w; F++) {
                  let g = o[F]
                    , S = Wa(u, g, A.config)
                    , W = (Wa(u, g, P.config) - S) * H + S;
                  k[g] = W
              }
          }
          return (0,
          ft.merge)(e, {
              position: m,
              current: k
          })
      }
      ,
      C1 = (e, t) => {
          let {active: r, origin: n, start: i, immediate: o, renderType: s, verbose: a, actionItem: u, destination: l, destinationKeys: v, pluginDuration: d, instanceDelay: p, customEasingFn: E, skipMotion: T} = e
            , b = u.config.easing
            , {duration: O, delay: m} = u.config;
          d != null && (O = d),
          m = p ?? m,
          s === O1 ? O = 0 : (o || T) && (O = m = 0);
          let {now: x} = t.payload;
          if (r && n) {
              let A = x - (i + m);
              if (a) {
                  let B = x - i
                    , U = O + m
                    , H = ui(Math.min(Math.max(0, B / U), 1));
                  e = (0,
                  ft.set)(e, "verboseTimeElapsed", U * H)
              }
              if (A < 0)
                  return e;
              let P = ui(Math.min(Math.max(0, A / O), 1))
                , q = ay(b, P, E)
                , N = {}
                , k = null;
              return v.length && (k = v.reduce( (B, U) => {
                  let H = l[U]
                    , F = parseFloat(n[U]) || 0
                    , g = (parseFloat(H) - F) * q + F;
                  return B[U] = g,
                  B
              }
              , {})),
              N.current = k,
              N.position = P,
              P === 1 && (N.active = !1,
              N.complete = !0),
              (0,
              ft.merge)(e, N)
          }
          return e
      }
      ,
      sy = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case E1:
              return t.payload.ixInstances || Object.freeze({});
          case m1:
              return Object.freeze({});
          case _1:
              {
                  let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: s, eventStateKey: a, actionListId: u, groupIndex: l, isCarrier: v, origin: d, destination: p, immediate: E, verbose: T, continuous: b, parameterId: O, actionGroups: m, smoothing: x, restingValue: A, pluginInstance: P, pluginDuration: q, instanceDelay: N, skipMotion: k, skipToValue: B} = t.payload
                    , {actionTypeId: U} = i
                    , H = w1(U)
                    , F = S1(H, U)
                    , w = Object.keys(p).filter(S => p[S] != null && typeof p[S] != "string")
                    , {easing: g} = i.config;
                  return (0,
                  ft.set)(e, r, {
                      id: r,
                      elementId: n,
                      active: !1,
                      position: 0,
                      start: 0,
                      origin: d,
                      destination: p,
                      destinationKeys: w,
                      immediate: E,
                      verbose: T,
                      current: null,
                      actionItem: i,
                      actionTypeId: U,
                      eventId: o,
                      eventTarget: s,
                      eventStateKey: a,
                      actionListId: u,
                      groupIndex: l,
                      renderType: H,
                      isCarrier: v,
                      styleProp: F,
                      continuous: b,
                      parameterId: O,
                      actionGroups: m,
                      smoothing: x,
                      restingValue: A,
                      pluginInstance: P,
                      pluginDuration: q,
                      instanceDelay: N,
                      skipMotion: k,
                      skipToValue: B,
                      customEasingFn: Array.isArray(g) && g.length === 4 ? A1(g) : void 0
                  })
              }
          case b1:
              {
                  let {instanceId: r, time: n} = t.payload;
                  return (0,
                  ft.mergeIn)(e, [r], {
                      active: !0,
                      complete: !1,
                      start: n
                  })
              }
          case T1:
              {
                  let {instanceId: r} = t.payload;
                  if (!e[r])
                      return e;
                  let n = {}
                    , i = Object.keys(e)
                    , {length: o} = i;
                  for (let s = 0; s < o; s++) {
                      let a = i[s];
                      a !== r && (n[a] = e[a])
                  }
                  return n
              }
          case I1:
              {
                  let r = e
                    , n = Object.keys(e)
                    , {length: i} = n;
                  for (let o = 0; o < i; o++) {
                      let s = n[o]
                        , a = e[s]
                        , u = a.continuous ? x1 : C1;
                      r = (0,
                      ft.set)(r, s, u(a, t))
                  }
                  return r
              }
          default:
              return e
          }
      }
  }
  );
  var R1, N1, L1, cy, ly = ce( () => {
      "use strict";
      Me();
      ({IX2_RAW_DATA_IMPORTED: R1, IX2_SESSION_STOPPED: N1, IX2_PARAMETER_CHANGED: L1} = Ee),
      cy = (e={}, t) => {
          switch (t.type) {
          case R1:
              return t.payload.ixParameters || {};
          case N1:
              return {};
          case L1:
              {
                  let {key: r, value: n} = t.payload;
                  return e[r] = n,
                  e
              }
          default:
              return e
          }
      }
  }
  );
  var py = {};
  Pe(py, {
      default: () => q1
  });
  var fy, dy, P1, q1, gy = ce( () => {
      "use strict";
      fy = ne(Bo());
      Of();
      jf();
      Yf();
      dy = ne(Ft());
      uy();
      ly();
      ({ixElements: P1} = dy.IX2ElementsReducer),
      q1 = (0,
      fy.combineReducers)({
          ixData: Af,
          ixRequest: Wf,
          ixSession: Kf,
          ixElements: P1,
          ixInstances: sy,
          ixParameters: cy
      })
  }
  );
  var vy = c( (qW, hy) => {
      var M1 = Et()
        , F1 = me()
        , D1 = ut()
        , G1 = "[object String]";
      function V1(e) {
          return typeof e == "string" || !F1(e) && D1(e) && M1(e) == G1
      }
      hy.exports = V1
  }
  );
  var Ey = c( (MW, yy) => {
      var k1 = ha()
        , B1 = k1("length");
      yy.exports = B1
  }
  );
  var _y = c( (FW, my) => {
      var U1 = "\\ud800-\\udfff"
        , X1 = "\\u0300-\\u036f"
        , H1 = "\\ufe20-\\ufe2f"
        , W1 = "\\u20d0-\\u20ff"
        , j1 = X1 + H1 + W1
        , z1 = "\\ufe0e\\ufe0f"
        , K1 = "\\u200d"
        , Y1 = RegExp("[" + K1 + U1 + j1 + z1 + "]");
      function $1(e) {
          return Y1.test(e)
      }
      my.exports = $1
  }
  );
  var Cy = c( (DW, xy) => {
      var Ty = "\\ud800-\\udfff"
        , Q1 = "\\u0300-\\u036f"
        , Z1 = "\\ufe20-\\ufe2f"
        , J1 = "\\u20d0-\\u20ff"
        , eD = Q1 + Z1 + J1
        , tD = "\\ufe0e\\ufe0f"
        , rD = "[" + Ty + "]"
        , ja = "[" + eD + "]"
        , za = "\\ud83c[\\udffb-\\udfff]"
        , nD = "(?:" + ja + "|" + za + ")"
        , Iy = "[^" + Ty + "]"
        , Ay = "(?:\\ud83c[\\udde6-\\uddff]){2}"
        , Oy = "[\\ud800-\\udbff][\\udc00-\\udfff]"
        , iD = "\\u200d"
        , wy = nD + "?"
        , Sy = "[" + tD + "]?"
        , oD = "(?:" + iD + "(?:" + [Iy, Ay, Oy].join("|") + ")" + Sy + wy + ")*"
        , aD = Sy + wy + oD
        , sD = "(?:" + [Iy + ja + "?", ja, Ay, Oy, rD].join("|") + ")"
        , by = RegExp(za + "(?=" + za + ")|" + sD + aD, "g");
      function uD(e) {
          for (var t = by.lastIndex = 0; by.test(e); )
              ++t;
          return t
      }
      xy.exports = uD
  }
  );
  var Ny = c( (GW, Ry) => {
      var cD = Ey()
        , lD = _y()
        , fD = Cy();
      function dD(e) {
          return lD(e) ? fD(e) : cD(e)
      }
      Ry.exports = dD
  }
  );
  var Py = c( (VW, Ly) => {
      var pD = Bn()
        , gD = Un()
        , hD = Nt()
        , vD = vy()
        , yD = Ny()
        , ED = "[object Map]"
        , mD = "[object Set]";
      function _D(e) {
          if (e == null)
              return 0;
          if (hD(e))
              return vD(e) ? yD(e) : e.length;
          var t = gD(e);
          return t == ED || t == mD ? e.size : pD(e).length
      }
      Ly.exports = _D
  }
  );
  var My = c( (kW, qy) => {
      var bD = "Expected a function";
      function TD(e) {
          if (typeof e != "function")
              throw new TypeError(bD);
          return function() {
              var t = arguments;
              switch (t.length) {
              case 0:
                  return !e.call(this);
              case 1:
                  return !e.call(this, t[0]);
              case 2:
                  return !e.call(this, t[0], t[1]);
              case 3:
                  return !e.call(this, t[0], t[1], t[2])
              }
              return !e.apply(this, t)
          }
      }
      qy.exports = TD
  }
  );
  var Ka = c( (BW, Fy) => {
      var ID = mt()
        , AD = function() {
          try {
              var e = ID(Object, "defineProperty");
              return e({}, "", {}),
              e
          } catch {}
      }();
      Fy.exports = AD
  }
  );
  var Ya = c( (UW, Gy) => {
      var Dy = Ka();
      function OD(e, t, r) {
          t == "__proto__" && Dy ? Dy(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
          }) : e[t] = r
      }
      Gy.exports = OD
  }
  );
  var ky = c( (XW, Vy) => {
      var wD = Ya()
        , SD = Nn()
        , xD = Object.prototype
        , CD = xD.hasOwnProperty;
      function RD(e, t, r) {
          var n = e[t];
          (!(CD.call(e, t) && SD(n, r)) || r === void 0 && !(t in e)) && wD(e, t, r)
      }
      Vy.exports = RD
  }
  );
  var Xy = c( (HW, Uy) => {
      var ND = ky()
        , LD = kr()
        , PD = Dn()
        , By = nt()
        , qD = er();
      function MD(e, t, r, n) {
          if (!By(e))
              return e;
          t = LD(t, e);
          for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o; ) {
              var u = qD(t[i])
                , l = r;
              if (u === "__proto__" || u === "constructor" || u === "prototype")
                  return e;
              if (i != s) {
                  var v = a[u];
                  l = n ? n(v, u, a) : void 0,
                  l === void 0 && (l = By(v) ? v : PD(t[i + 1]) ? [] : {})
              }
              ND(a, u, l),
              a = a[u]
          }
          return e
      }
      Uy.exports = MD
  }
  );
  var Wy = c( (WW, Hy) => {
      var FD = Wn()
        , DD = Xy()
        , GD = kr();
      function VD(e, t, r) {
          for (var n = -1, i = t.length, o = {}; ++n < i; ) {
              var s = t[n]
                , a = FD(e, s);
              r(a, s) && DD(o, GD(s, e), a)
          }
          return o
      }
      Hy.exports = VD
  }
  );
  var zy = c( (jW, jy) => {
      var kD = Mn()
        , BD = xo()
        , UD = ea()
        , XD = Jo()
        , HD = Object.getOwnPropertySymbols
        , WD = HD ? function(e) {
          for (var t = []; e; )
              kD(t, UD(e)),
              e = BD(e);
          return t
      }
      : XD;
      jy.exports = WD
  }
  );
  var Yy = c( (zW, Ky) => {
      function jD(e) {
          var t = [];
          if (e != null)
              for (var r in Object(e))
                  t.push(r);
          return t
      }
      Ky.exports = jD
  }
  );
  var Qy = c( (KW, $y) => {
      var zD = nt()
        , KD = kn()
        , YD = Yy()
        , $D = Object.prototype
        , QD = $D.hasOwnProperty;
      function ZD(e) {
          if (!zD(e))
              return YD(e);
          var t = KD(e)
            , r = [];
          for (var n in e)
              n == "constructor" && (t || !QD.call(e, n)) || r.push(n);
          return r
      }
      $y.exports = ZD
  }
  );
  var Jy = c( (YW, Zy) => {
      var JD = ra()
        , e2 = Qy()
        , t2 = Nt();
      function r2(e) {
          return t2(e) ? JD(e, !0) : e2(e)
      }
      Zy.exports = r2
  }
  );
  var tE = c( ($W, eE) => {
      var n2 = Zo()
        , i2 = zy()
        , o2 = Jy();
      function a2(e) {
          return n2(e, o2, i2)
      }
      eE.exports = a2
  }
  );
  var nE = c( (QW, rE) => {
      var s2 = ga()
        , u2 = _t()
        , c2 = Wy()
        , l2 = tE();
      function f2(e, t) {
          if (e == null)
              return {};
          var r = s2(l2(e), function(n) {
              return [n]
          });
          return t = u2(t),
          c2(e, r, function(n, i) {
              return t(n, i[0])
          })
      }
      rE.exports = f2
  }
  );
  var oE = c( (ZW, iE) => {
      var d2 = _t()
        , p2 = My()
        , g2 = nE();
      function h2(e, t) {
          return g2(e, p2(d2(t)))
      }
      iE.exports = h2
  }
  );
  var sE = c( (JW, aE) => {
      var v2 = Bn()
        , y2 = Un()
        , E2 = qr()
        , m2 = me()
        , _2 = Nt()
        , b2 = Fn()
        , T2 = kn()
        , I2 = Vn()
        , A2 = "[object Map]"
        , O2 = "[object Set]"
        , w2 = Object.prototype
        , S2 = w2.hasOwnProperty;
      function x2(e) {
          if (e == null)
              return !0;
          if (_2(e) && (m2(e) || typeof e == "string" || typeof e.splice == "function" || b2(e) || I2(e) || E2(e)))
              return !e.length;
          var t = y2(e);
          if (t == A2 || t == O2)
              return !e.size;
          if (T2(e))
              return !v2(e).length;
          for (var r in e)
              if (S2.call(e, r))
                  return !1;
          return !0
      }
      aE.exports = x2
  }
  );
  var cE = c( (ej, uE) => {
      var C2 = Ya()
        , R2 = Fa()
        , N2 = _t();
      function L2(e, t) {
          var r = {};
          return t = N2(t, 3),
          R2(e, function(n, i, o) {
              C2(r, i, t(n, i, o))
          }),
          r
      }
      uE.exports = L2
  }
  );
  var fE = c( (tj, lE) => {
      function P2(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
              ;
          return e
      }
      lE.exports = P2
  }
  );
  var pE = c( (rj, dE) => {
      var q2 = zn();
      function M2(e) {
          return typeof e == "function" ? e : q2
      }
      dE.exports = M2
  }
  );
  var hE = c( (nj, gE) => {
      var F2 = fE()
        , D2 = Da()
        , G2 = pE()
        , V2 = me();
      function k2(e, t) {
          var r = V2(e) ? F2 : D2;
          return r(e, G2(t))
      }
      gE.exports = k2
  }
  );
  var yE = c( (ij, vE) => {
      var B2 = je()
        , U2 = function() {
          return B2.Date.now()
      };
      vE.exports = U2
  }
  );
  var _E = c( (oj, mE) => {
      var X2 = nt()
        , $a = yE()
        , EE = Kn()
        , H2 = "Expected a function"
        , W2 = Math.max
        , j2 = Math.min;
      function z2(e, t, r) {
          var n, i, o, s, a, u, l = 0, v = !1, d = !1, p = !0;
          if (typeof e != "function")
              throw new TypeError(H2);
          t = EE(t) || 0,
          X2(r) && (v = !!r.leading,
          d = "maxWait"in r,
          o = d ? W2(EE(r.maxWait) || 0, t) : o,
          p = "trailing"in r ? !!r.trailing : p);
          function E(N) {
              var k = n
                , B = i;
              return n = i = void 0,
              l = N,
              s = e.apply(B, k),
              s
          }
          function T(N) {
              return l = N,
              a = setTimeout(m, t),
              v ? E(N) : s
          }
          function b(N) {
              var k = N - u
                , B = N - l
                , U = t - k;
              return d ? j2(U, o - B) : U
          }
          function O(N) {
              var k = N - u
                , B = N - l;
              return u === void 0 || k >= t || k < 0 || d && B >= o
          }
          function m() {
              var N = $a();
              if (O(N))
                  return x(N);
              a = setTimeout(m, b(N))
          }
          function x(N) {
              return a = void 0,
              p && n ? E(N) : (n = i = void 0,
              s)
          }
          function A() {
              a !== void 0 && clearTimeout(a),
              l = 0,
              n = u = i = a = void 0
          }
          function P() {
              return a === void 0 ? s : x($a())
          }
          function q() {
              var N = $a()
                , k = O(N);
              if (n = arguments,
              i = this,
              u = N,
              k) {
                  if (a === void 0)
                      return T(u);
                  if (d)
                      return clearTimeout(a),
                      a = setTimeout(m, t),
                      E(u)
              }
              return a === void 0 && (a = setTimeout(m, t)),
              s
          }
          return q.cancel = A,
          q.flush = P,
          q
      }
      mE.exports = z2
  }
  );
  var TE = c( (aj, bE) => {
      var K2 = _E()
        , Y2 = nt()
        , $2 = "Expected a function";
      function Q2(e, t, r) {
          var n = !0
            , i = !0;
          if (typeof e != "function")
              throw new TypeError($2);
          return Y2(r) && (n = "leading"in r ? !!r.leading : n,
          i = "trailing"in r ? !!r.trailing : i),
          K2(e, t, {
              leading: n,
              maxWait: t,
              trailing: i
          })
      }
      bE.exports = Q2
  }
  );
  var AE = {};
  Pe(AE, {
      actionListPlaybackChanged: () => dr,
      animationFrameChanged: () => fi,
      clearRequested: () => TG,
      elementStateChanged: () => is,
      eventListenerAdded: () => li,
      eventStateChanged: () => ts,
      instanceAdded: () => rs,
      instanceRemoved: () => ns,
      instanceStarted: () => di,
      mediaQueriesDefined: () => as,
      parameterChanged: () => fr,
      playbackRequested: () => _G,
      previewRequested: () => mG,
      rawDataImported: () => Qa,
      sessionInitialized: () => Za,
      sessionStarted: () => Ja,
      sessionStopped: () => es,
      stopRequested: () => bG,
      testFrameRendered: () => IG,
      viewportWidthChanged: () => os
  });
  var IE, Z2, J2, eG, tG, rG, nG, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, hG, vG, yG, EG, Qa, Za, Ja, es, mG, _G, bG, TG, li, IG, ts, fi, fr, rs, di, ns, is, dr, os, as, pi = ce( () => {
      "use strict";
      Me();
      IE = ne(Ft()),
      {IX2_RAW_DATA_IMPORTED: Z2, IX2_SESSION_INITIALIZED: J2, IX2_SESSION_STARTED: eG, IX2_SESSION_STOPPED: tG, IX2_PREVIEW_REQUESTED: rG, IX2_PLAYBACK_REQUESTED: nG, IX2_STOP_REQUESTED: iG, IX2_CLEAR_REQUESTED: oG, IX2_EVENT_LISTENER_ADDED: aG, IX2_TEST_FRAME_RENDERED: sG, IX2_EVENT_STATE_CHANGED: uG, IX2_ANIMATION_FRAME_CHANGED: cG, IX2_PARAMETER_CHANGED: lG, IX2_INSTANCE_ADDED: fG, IX2_INSTANCE_STARTED: dG, IX2_INSTANCE_REMOVED: pG, IX2_ELEMENT_STATE_CHANGED: gG, IX2_ACTION_LIST_PLAYBACK_CHANGED: hG, IX2_VIEWPORT_WIDTH_CHANGED: vG, IX2_MEDIA_QUERIES_DEFINED: yG} = Ee,
      {reifyState: EG} = IE.IX2VanillaUtils,
      Qa = e => ({
          type: Z2,
          payload: {
              ...EG(e)
          }
      }),
      Za = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
          type: J2,
          payload: {
              hasBoundaryNodes: e,
              reducedMotion: t
          }
      }),
      Ja = () => ({
          type: eG
      }),
      es = () => ({
          type: tG
      }),
      mG = ({rawData: e, defer: t}) => ({
          type: rG,
          payload: {
              defer: t,
              rawData: e
          }
      }),
      _G = ({actionTypeId: e=qe.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: s, verbose: a, rawData: u}) => ({
          type: nG,
          payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: r,
              testManual: s,
              eventId: n,
              allowEvents: i,
              immediate: o,
              verbose: a,
              rawData: u
          }
      }),
      bG = e => ({
          type: iG,
          payload: {
              actionListId: e
          }
      }),
      TG = () => ({
          type: oG
      }),
      li = (e, t) => ({
          type: aG,
          payload: {
              target: e,
              listenerParams: t
          }
      }),
      IG = (e=1) => ({
          type: sG,
          payload: {
              step: e
          }
      }),
      ts = (e, t) => ({
          type: uG,
          payload: {
              stateKey: e,
              newState: t
          }
      }),
      fi = (e, t) => ({
          type: cG,
          payload: {
              now: e,
              parameters: t
          }
      }),
      fr = (e, t) => ({
          type: lG,
          payload: {
              key: e,
              value: t
          }
      }),
      rs = e => ({
          type: fG,
          payload: {
              ...e
          }
      }),
      di = (e, t) => ({
          type: dG,
          payload: {
              instanceId: e,
              time: t
          }
      }),
      ns = e => ({
          type: pG,
          payload: {
              instanceId: e
          }
      }),
      is = (e, t, r, n) => ({
          type: gG,
          payload: {
              elementId: e,
              actionTypeId: t,
              current: r,
              actionItem: n
          }
      }),
      dr = ({actionListId: e, isPlaying: t}) => ({
          type: hG,
          payload: {
              actionListId: e,
              isPlaying: t
          }
      }),
      os = ({width: e, mediaQueries: t}) => ({
          type: vG,
          payload: {
              width: e,
              mediaQueries: t
          }
      }),
      as = () => ({
          type: yG
      })
  }
  );
  var Ce = {};
  Pe(Ce, {
      elementContains: () => cs,
      getChildElements: () => PG,
      getClosestElement: () => Qr,
      getProperty: () => xG,
      getQuerySelector: () => us,
      getRefType: () => ls,
      getSiblingElements: () => qG,
      getStyle: () => SG,
      getValidDocument: () => RG,
      isSiblingNode: () => LG,
      matchSelector: () => CG,
      queryDocument: () => NG,
      setStyle: () => wG
  });
  function wG(e, t, r) {
      e.style[t] = r
  }
  function SG(e, t) {
      return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
  }
  function xG(e, t) {
      return e[t]
  }
  function CG(e) {
      return t => t[ss](e)
  }
  function us({id: e, selector: t}) {
      if (e) {
          let r = e;
          if (e.indexOf(OE) !== -1) {
              let n = e.split(OE)
                , i = n[0];
              if (r = n[1],
              i !== document.documentElement.getAttribute(SE))
                  return null
          }
          return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
  }
  function RG(e) {
      return e == null || e === document.documentElement.getAttribute(SE) ? document : null
  }
  function NG(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
  }
  function cs(e, t) {
      return e.contains(t)
  }
  function LG(e, t) {
      return e !== t && e.parentNode === t.parentNode
  }
  function PG(e) {
      let t = [];
      for (let r = 0, {length: n} = e || []; r < n; r++) {
          let {children: i} = e[r]
            , {length: o} = i;
          if (o)
              for (let s = 0; s < o; s++)
                  t.push(i[s])
      }
      return t
  }
  function qG(e=[]) {
      let t = []
        , r = [];
      for (let n = 0, {length: i} = e; n < i; n++) {
          let {parentNode: o} = e[n];
          if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
              continue;
          r.push(o);
          let s = o.firstElementChild;
          for (; s != null; )
              e.indexOf(s) === -1 && t.push(s),
              s = s.nextElementSibling
      }
      return t
  }
  function ls(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? AG : OG : null
  }
  var wE, ss, OE, AG, OG, SE, Qr, xE = ce( () => {
      "use strict";
      wE = ne(Ft());
      Me();
      ({ELEMENT_MATCHES: ss} = wE.IX2BrowserSupport),
      {IX2_ID_DELIMITER: OE, HTML_ELEMENT: AG, PLAIN_OBJECT: OG, WF_PAGE: SE} = Ae;
      Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
          if (!document.documentElement.contains(e))
              return null;
          let r = e;
          do {
              if (r[ss] && r[ss](t))
                  return r;
              r = r.parentNode
          } while (r != null);
          return null
      }
  }
  );
  var fs = c( (cj, RE) => {
      var MG = nt()
        , CE = Object.create
        , FG = function() {
          function e() {}
          return function(t) {
              if (!MG(t))
                  return {};
              if (CE)
                  return CE(t);
              e.prototype = t;
              var r = new e;
              return e.prototype = void 0,
              r
          }
      }();
      RE.exports = FG
  }
  );
  var gi = c( (lj, NE) => {
      function DG() {}
      NE.exports = DG
  }
  );
  var vi = c( (fj, LE) => {
      var GG = fs()
        , VG = gi();
      function hi(e, t) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__chain__ = !!t,
          this.__index__ = 0,
          this.__values__ = void 0
      }
      hi.prototype = GG(VG.prototype);
      hi.prototype.constructor = hi;
      LE.exports = hi
  }
  );
  var FE = c( (dj, ME) => {
      var PE = Xt()
        , kG = qr()
        , BG = me()
        , qE = PE ? PE.isConcatSpreadable : void 0;
      function UG(e) {
          return BG(e) || kG(e) || !!(qE && e && e[qE])
      }
      ME.exports = UG
  }
  );
  var VE = c( (pj, GE) => {
      var XG = Mn()
        , HG = FE();
      function DE(e, t, r, n, i) {
          var o = -1
            , s = e.length;
          for (r || (r = HG),
          i || (i = []); ++o < s; ) {
              var a = e[o];
              t > 0 && r(a) ? t > 1 ? DE(a, t - 1, r, n, i) : XG(i, a) : n || (i[i.length] = a)
          }
          return i
      }
      GE.exports = DE
  }
  );
  var BE = c( (gj, kE) => {
      var WG = VE();
      function jG(e) {
          var t = e == null ? 0 : e.length;
          return t ? WG(e, 1) : []
      }
      kE.exports = jG
  }
  );
  var XE = c( (hj, UE) => {
      function zG(e, t, r) {
          switch (r.length) {
          case 0:
              return e.call(t);
          case 1:
              return e.call(t, r[0]);
          case 2:
              return e.call(t, r[0], r[1]);
          case 3:
              return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
      }
      UE.exports = zG
  }
  );
  var jE = c( (vj, WE) => {
      var KG = XE()
        , HE = Math.max;
      function YG(e, t, r) {
          return t = HE(t === void 0 ? e.length - 1 : t, 0),
          function() {
              for (var n = arguments, i = -1, o = HE(n.length - t, 0), s = Array(o); ++i < o; )
                  s[i] = n[t + i];
              i = -1;
              for (var a = Array(t + 1); ++i < t; )
                  a[i] = n[i];
              return a[t] = r(s),
              KG(e, this, a)
          }
      }
      WE.exports = YG
  }
  );
  var KE = c( (yj, zE) => {
      function $G(e) {
          return function() {
              return e
          }
      }
      zE.exports = $G
  }
  );
  var QE = c( (Ej, $E) => {
      var QG = KE()
        , YE = Ka()
        , ZG = zn()
        , JG = YE ? function(e, t) {
          return YE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: QG(t),
              writable: !0
          })
      }
      : ZG;
      $E.exports = JG
  }
  );
  var JE = c( (mj, ZE) => {
      var eV = 800
        , tV = 16
        , rV = Date.now;
      function nV(e) {
          var t = 0
            , r = 0;
          return function() {
              var n = rV()
                , i = tV - (n - r);
              if (r = n,
              i > 0) {
                  if (++t >= eV)
                      return arguments[0]
              } else
                  t = 0;
              return e.apply(void 0, arguments)
          }
      }
      ZE.exports = nV
  }
  );
  var tm = c( (_j, em) => {
      var iV = QE()
        , oV = JE()
        , aV = oV(iV);
      em.exports = aV
  }
  );
  var nm = c( (bj, rm) => {
      var sV = BE()
        , uV = jE()
        , cV = tm();
      function lV(e) {
          return cV(uV(e, void 0, sV), e + "")
      }
      rm.exports = lV
  }
  );
  var am = c( (Tj, om) => {
      var im = na()
        , fV = im && new im;
      om.exports = fV
  }
  );
  var um = c( (Ij, sm) => {
      function dV() {}
      sm.exports = dV
  }
  );
  var ds = c( (Aj, lm) => {
      var cm = am()
        , pV = um()
        , gV = cm ? function(e) {
          return cm.get(e)
      }
      : pV;
      lm.exports = gV
  }
  );
  var dm = c( (Oj, fm) => {
      var hV = {};
      fm.exports = hV
  }
  );
  var ps = c( (wj, gm) => {
      var pm = dm()
        , vV = Object.prototype
        , yV = vV.hasOwnProperty;
      function EV(e) {
          for (var t = e.name + "", r = pm[t], n = yV.call(pm, t) ? r.length : 0; n--; ) {
              var i = r[n]
                , o = i.func;
              if (o == null || o == e)
                  return i.name
          }
          return t
      }
      gm.exports = EV
  }
  );
  var Ei = c( (Sj, hm) => {
      var mV = fs()
        , _V = gi()
        , bV = 4294967295;
      function yi(e) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__dir__ = 1,
          this.__filtered__ = !1,
          this.__iteratees__ = [],
          this.__takeCount__ = bV,
          this.__views__ = []
      }
      yi.prototype = mV(_V.prototype);
      yi.prototype.constructor = yi;
      hm.exports = yi
  }
  );
  var ym = c( (xj, vm) => {
      function TV(e, t) {
          var r = -1
            , n = e.length;
          for (t || (t = Array(n)); ++r < n; )
              t[r] = e[r];
          return t
      }
      vm.exports = TV
  }
  );
  var mm = c( (Cj, Em) => {
      var IV = Ei()
        , AV = vi()
        , OV = ym();
      function wV(e) {
          if (e instanceof IV)
              return e.clone();
          var t = new AV(e.__wrapped__,e.__chain__);
          return t.__actions__ = OV(e.__actions__),
          t.__index__ = e.__index__,
          t.__values__ = e.__values__,
          t
      }
      Em.exports = wV
  }
  );
  var Tm = c( (Rj, bm) => {
      var SV = Ei()
        , _m = vi()
        , xV = gi()
        , CV = me()
        , RV = ut()
        , NV = mm()
        , LV = Object.prototype
        , PV = LV.hasOwnProperty;
      function mi(e) {
          if (RV(e) && !CV(e) && !(e instanceof SV)) {
              if (e instanceof _m)
                  return e;
              if (PV.call(e, "__wrapped__"))
                  return NV(e)
          }
          return new _m(e)
      }
      mi.prototype = xV.prototype;
      mi.prototype.constructor = mi;
      bm.exports = mi
  }
  );
  var Am = c( (Nj, Im) => {
      var qV = Ei()
        , MV = ds()
        , FV = ps()
        , DV = Tm();
      function GV(e) {
          var t = FV(e)
            , r = DV[t];
          if (typeof r != "function" || !(t in qV.prototype))
              return !1;
          if (e === r)
              return !0;
          var n = MV(r);
          return !!n && e === n[0]
      }
      Im.exports = GV
  }
  );
  var xm = c( (Lj, Sm) => {
      var Om = vi()
        , VV = nm()
        , kV = ds()
        , gs = ps()
        , BV = me()
        , wm = Am()
        , UV = "Expected a function"
        , XV = 8
        , HV = 32
        , WV = 128
        , jV = 256;
      function zV(e) {
          return VV(function(t) {
              var r = t.length
                , n = r
                , i = Om.prototype.thru;
              for (e && t.reverse(); n--; ) {
                  var o = t[n];
                  if (typeof o != "function")
                      throw new TypeError(UV);
                  if (i && !s && gs(o) == "wrapper")
                      var s = new Om([],!0)
              }
              for (n = s ? n : r; ++n < r; ) {
                  o = t[n];
                  var a = gs(o)
                    , u = a == "wrapper" ? kV(o) : void 0;
                  u && wm(u[0]) && u[1] == (WV | XV | HV | jV) && !u[4].length && u[9] == 1 ? s = s[gs(u[0])].apply(s, u[3]) : s = o.length == 1 && wm(o) ? s[a]() : s.thru(o)
              }
              return function() {
                  var l = arguments
                    , v = l[0];
                  if (s && l.length == 1 && BV(v))
                      return s.plant(v).value();
                  for (var d = 0, p = r ? t[d].apply(this, l) : v; ++d < r; )
                      p = t[d].call(this, p);
                  return p
              }
          })
      }
      Sm.exports = zV
  }
  );
  var Rm = c( (Pj, Cm) => {
      var KV = xm()
        , YV = KV();
      Cm.exports = YV
  }
  );
  var Lm = c( (qj, Nm) => {
      function $V(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
          e
      }
      Nm.exports = $V
  }
  );
  var qm = c( (Mj, Pm) => {
      var QV = Lm()
        , hs = Kn();
      function ZV(e, t, r) {
          return r === void 0 && (r = t,
          t = void 0),
          r !== void 0 && (r = hs(r),
          r = r === r ? r : 0),
          t !== void 0 && (t = hs(t),
          t = t === t ? t : 0),
          QV(hs(e), t, r)
      }
      Pm.exports = ZV
  }
  );
  var Xm, Hm, Wm, jm, JV, e5, t5, r5, n5, i5, o5, a5, s5, u5, c5, l5, f5, d5, p5, zm, Km, g5, h5, v5, Ym, y5, E5, $m, m5, vs, Qm, Mm, Fm, Zm, Jr, _5, at, Jm, b5, De, Ye, en, e_, ys, Dm, Es, T5, Zr, I5, A5, O5, t_, Gm, w5, Vm, S5, x5, C5, km, _i, bi, Bm, Um, r_, n_ = ce( () => {
      "use strict";
      Xm = ne(Rm()),
      Hm = ne(jn()),
      Wm = ne(qm());
      Me();
      ms();
      pi();
      jm = ne(Ft()),
      {MOUSE_CLICK: JV, MOUSE_SECOND_CLICK: e5, MOUSE_DOWN: t5, MOUSE_UP: r5, MOUSE_OVER: n5, MOUSE_OUT: i5, DROPDOWN_CLOSE: o5, DROPDOWN_OPEN: a5, SLIDER_ACTIVE: s5, SLIDER_INACTIVE: u5, TAB_ACTIVE: c5, TAB_INACTIVE: l5, NAVBAR_CLOSE: f5, NAVBAR_OPEN: d5, MOUSE_MOVE: p5, PAGE_SCROLL_DOWN: zm, SCROLL_INTO_VIEW: Km, SCROLL_OUT_OF_VIEW: g5, PAGE_SCROLL_UP: h5, SCROLLING_IN_VIEW: v5, PAGE_FINISH: Ym, ECOMMERCE_CART_CLOSE: y5, ECOMMERCE_CART_OPEN: E5, PAGE_START: $m, PAGE_SCROLL: m5} = ze,
      vs = "COMPONENT_ACTIVE",
      Qm = "COMPONENT_INACTIVE",
      {COLON_DELIMITER: Mm} = Ae,
      {getNamespacedParameterId: Fm} = jm.IX2VanillaUtils,
      Zm = e => t => typeof t == "object" && e(t) ? !0 : t,
      Jr = Zm( ({element: e, nativeEvent: t}) => e === t.target),
      _5 = Zm( ({element: e, nativeEvent: t}) => e.contains(t.target)),
      at = (0,
      Xm.default)([Jr, _5]),
      Jm = (e, t) => {
          if (t) {
              let {ixData: r} = e.getState()
                , {events: n} = r
                , i = n[t];
              if (i && !T5[i.eventTypeId])
                  return i
          }
          return null
      }
      ,
      b5 = ({store: e, event: t}) => {
          let {action: r} = t
            , {autoStopEventId: n} = r.config;
          return !!Jm(e, n)
      }
      ,
      De = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
          let {action: o, id: s} = t
            , {actionListId: a, autoStopEventId: u} = o.config
            , l = Jm(e, u);
          return l && pr({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + Mm + n.split(Mm)[1],
              actionListId: (0,
              Hm.default)(l, "action.config.actionListId")
          }),
          pr({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a
          }),
          tn({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a
          }),
          i
      }
      ,
      Ye = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      en = {
          handler: Ye(at, De)
      },
      e_ = {
          ...en,
          types: [vs, Qm].join(" ")
      },
      ys = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0
      }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0
      }],
      Dm = "mouseover mouseout",
      Es = {
          types: ys
      },
      T5 = {
          PAGE_START: $m,
          PAGE_FINISH: Ym
      },
      Zr = ( () => {
          let e = window.pageXOffset !== void 0
            , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
              scrollLeft: e ? window.pageXOffset : r.scrollLeft,
              scrollTop: e ? window.pageYOffset : r.scrollTop,
              stiffScrollTop: (0,
              Wm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
              scrollWidth: r.scrollWidth,
              scrollHeight: r.scrollHeight,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
          })
      }
      )(),
      I5 = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
      A5 = ({element: e, nativeEvent: t}) => {
          let {type: r, target: n, relatedTarget: i} = t
            , o = e.contains(n);
          if (r === "mouseover" && o)
              return !0;
          let s = e.contains(i);
          return !!(r === "mouseout" && o && s)
      }
      ,
      O5 = e => {
          let {element: t, event: {config: r}} = e
            , {clientWidth: n, clientHeight: i} = Zr()
            , o = r.scrollOffsetValue
            , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return I5(t.getBoundingClientRect(), {
              left: 0,
              top: u,
              right: n,
              bottom: i - u
          })
      }
      ,
      t_ = e => (t, r) => {
          let {type: n} = t.nativeEvent
            , i = [vs, Qm].indexOf(n) !== -1 ? n === vs : r.isActive
            , o = {
              ...r,
              isActive: i
          };
          return (!r || o.isActive !== r.isActive) && e(t, o) || o
      }
      ,
      Gm = e => (t, r) => {
          let n = {
              elementHovered: A5(t)
          };
          return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
      }
      ,
      w5 = e => (t, r) => {
          let n = {
              ...r,
              elementVisible: O5(t)
          };
          return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
      }
      ,
      Vm = e => (t, r={}) => {
          let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = Zr()
            , {event: {config: s, eventTypeId: a}} = t
            , {scrollOffsetValue: u, scrollOffsetUnit: l} = s
            , v = l === "PX"
            , d = i - o
            , p = Number((n / d).toFixed(2));
          if (r && r.percentTop === p)
              return r;
          let E = (v ? u : o * (u || 0) / 100) / d, T, b, O = 0;
          r && (T = p > r.percentTop,
          b = r.scrollingDown !== T,
          O = b ? p : r.anchorTop);
          let m = a === zm ? p >= O + E : p <= O - E
            , x = {
              ...r,
              percentTop: p,
              inBounds: m,
              anchorTop: O,
              scrollingDown: T
          };
          return r && m && (b || x.inBounds !== r.inBounds) && e(t, x) || x
      }
      ,
      S5 = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
      x5 = e => (t, r) => {
          let n = {
              finished: document.readyState === "complete"
          };
          return n.finished && !(r && r.finshed) && e(t),
          n
      }
      ,
      C5 = e => (t, r) => {
          let n = {
              started: !0
          };
          return r || e(t),
          n
      }
      ,
      km = e => (t, r={
          clickCount: 0
      }) => {
          let n = {
              clickCount: r.clickCount % 2 + 1
          };
          return n.clickCount !== r.clickCount && e(t, n) || n
      }
      ,
      _i = (e=!0) => ({
          ...e_,
          handler: Ye(e ? at : Jr, t_( (t, r) => r.isActive ? en.handler(t, r) : r))
      }),
      bi = (e=!0) => ({
          ...e_,
          handler: Ye(e ? at : Jr, t_( (t, r) => r.isActive ? r : en.handler(t, r)))
      }),
      Bm = {
          ...Es,
          handler: w5( (e, t) => {
              let {elementVisible: r} = t
                , {event: n, store: i} = e
                , {ixData: o} = i.getState()
                , {events: s} = o;
              return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Km === r ? (De(e),
              {
                  ...t,
                  triggered: !0
              }) : t
          }
          )
      },
      Um = .05,
      r_ = {
          [s5]: _i(),
          [u5]: bi(),
          [a5]: _i(),
          [o5]: bi(),
          [d5]: _i(!1),
          [f5]: bi(!1),
          [c5]: _i(),
          [l5]: bi(),
          [E5]: {
              types: "ecommerce-cart-open",
              handler: Ye(at, De)
          },
          [y5]: {
              types: "ecommerce-cart-close",
              handler: Ye(at, De)
          },
          [JV]: {
              types: "click",
              handler: Ye(at, km( (e, {clickCount: t}) => {
                  b5(e) ? t === 1 && De(e) : De(e)
              }
              ))
          },
          [e5]: {
              types: "click",
              handler: Ye(at, km( (e, {clickCount: t}) => {
                  t === 2 && De(e)
              }
              ))
          },
          [t5]: {
              ...en,
              types: "mousedown"
          },
          [r5]: {
              ...en,
              types: "mouseup"
          },
          [n5]: {
              types: Dm,
              handler: Ye(at, Gm( (e, t) => {
                  t.elementHovered && De(e)
              }
              ))
          },
          [i5]: {
              types: Dm,
              handler: Ye(at, Gm( (e, t) => {
                  t.elementHovered || De(e)
              }
              ))
          },
          [p5]: {
              types: "mousemove mouseout scroll",
              handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                  clientX: 0,
                  clientY: 0,
                  pageX: 0,
                  pageY: 0
              }) => {
                  let {basedOn: s, selectedAxis: a, continuousParameterGroupId: u, reverse: l, restingState: v=0} = r
                    , {clientX: d=o.clientX, clientY: p=o.clientY, pageX: E=o.pageX, pageY: T=o.pageY} = n
                    , b = a === "X_AXIS"
                    , O = n.type === "mouseout"
                    , m = v / 100
                    , x = u
                    , A = !1;
                  switch (s) {
                  case rt.VIEWPORT:
                      {
                          m = b ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                          break
                      }
                  case rt.PAGE:
                      {
                          let {scrollLeft: P, scrollTop: q, scrollWidth: N, scrollHeight: k} = Zr();
                          m = b ? Math.min(P + E, N) / N : Math.min(q + T, k) / k;
                          break
                      }
                  case rt.ELEMENT:
                  default:
                      {
                          x = Fm(i, u);
                          let P = n.type.indexOf("mouse") === 0;
                          if (P && at({
                              element: t,
                              nativeEvent: n
                          }) !== !0)
                              break;
                          let q = t.getBoundingClientRect()
                            , {left: N, top: k, width: B, height: U} = q;
                          if (!P && !S5({
                              left: d,
                              top: p
                          }, q))
                              break;
                          A = !0,
                          m = b ? (d - N) / B : (p - k) / U;
                          break
                      }
                  }
                  return O && (m > 1 - Um || m < Um) && (m = Math.round(m)),
                  (s !== rt.ELEMENT || A || A !== o.elementHovered) && (m = l ? 1 - m : m,
                  e.dispatch(fr(x, m))),
                  {
                      elementHovered: A,
                      clientX: d,
                      clientY: p,
                      pageX: E,
                      pageY: T
                  }
              }
          },
          [m5]: {
              types: ys,
              handler: ({store: e, eventConfig: t}) => {
                  let {continuousParameterGroupId: r, reverse: n} = t
                    , {scrollTop: i, scrollHeight: o, clientHeight: s} = Zr()
                    , a = i / (o - s);
                  a = n ? 1 - a : a,
                  e.dispatch(fr(r, a))
              }
          },
          [v5]: {
              types: ys,
              handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                  scrollPercent: 0
              }) => {
                  let {scrollLeft: o, scrollTop: s, scrollWidth: a, scrollHeight: u, clientHeight: l} = Zr()
                    , {basedOn: v, selectedAxis: d, continuousParameterGroupId: p, startsEntering: E, startsExiting: T, addEndOffset: b, addStartOffset: O, addOffsetValue: m=0, endOffsetValue: x=0} = r
                    , A = d === "X_AXIS";
                  if (v === rt.VIEWPORT) {
                      let P = A ? o / a : s / u;
                      return P !== i.scrollPercent && t.dispatch(fr(p, P)),
                      {
                          scrollPercent: P
                      }
                  } else {
                      let P = Fm(n, p)
                        , q = e.getBoundingClientRect()
                        , N = (O ? m : 0) / 100
                        , k = (b ? x : 0) / 100;
                      N = E ? N : 1 - N,
                      k = T ? k : 1 - k;
                      let B = q.top + Math.min(q.height * N, l)
                        , H = q.top + q.height * k - B
                        , F = Math.min(l + H, u)
                        , g = Math.min(Math.max(0, l - B), F) / F;
                      return g !== i.scrollPercent && t.dispatch(fr(P, g)),
                      {
                          scrollPercent: g
                      }
                  }
              }
          },
          [Km]: Bm,
          [g5]: Bm,
          [zm]: {
              ...Es,
              handler: Vm( (e, t) => {
                  t.scrollingDown && De(e)
              }
              )
          },
          [h5]: {
              ...Es,
              handler: Vm( (e, t) => {
                  t.scrollingDown || De(e)
              }
              )
          },
          [Ym]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Ye(Jr, x5(De))
          },
          [$m]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Ye(Jr, C5(De))
          }
      }
  }
  );
  var __ = {};
  Pe(__, {
      observeRequests: () => Y5,
      startActionGroup: () => tn,
      startEngine: () => Si,
      stopActionGroup: () => pr,
      stopAllActionGroups: () => y_,
      stopEngine: () => xi
  });
  function Y5(e) {
      Dt({
          store: e,
          select: ({ixRequest: t}) => t.preview,
          onChange: Z5
      }),
      Dt({
          store: e,
          select: ({ixRequest: t}) => t.playback,
          onChange: J5
      }),
      Dt({
          store: e,
          select: ({ixRequest: t}) => t.stop,
          onChange: ek
      }),
      Dt({
          store: e,
          select: ({ixRequest: t}) => t.clear,
          onChange: tk
      })
  }
  function $5(e) {
      Dt({
          store: e,
          select: ({ixSession: t}) => t.mediaQueryKey,
          onChange: () => {
              xi(e),
              p_({
                  store: e,
                  elementApi: Ce
              }),
              Si({
                  store: e,
                  allowEvents: !0
              }),
              g_()
          }
      })
  }
  function Q5(e, t) {
      let r = Dt({
          store: e,
          select: ({ixSession: n}) => n.tick,
          onChange: n => {
              t(n),
              r()
          }
      })
  }
  function Z5({rawData: e, defer: t}, r) {
      let n = () => {
          Si({
              store: r,
              rawData: e,
              allowEvents: !0
          }),
          g_()
      }
      ;
      t ? setTimeout(n, 0) : n()
  }
  function g_() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }
  function J5(e, t) {
      let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: s, immediate: a, testManual: u, verbose: l=!0} = e
        , {rawData: v} = e;
      if (n && i && v && a) {
          let d = v.actionLists[n];
          d && (v = G5({
              actionList: d,
              actionItemId: i,
              rawData: v
          }))
      }
      if (Si({
          store: t,
          rawData: v,
          allowEvents: s,
          testManual: u
      }),
      n && r === qe.GENERAL_START_ACTION || _s(r)) {
          pr({
              store: t,
              actionListId: n
          }),
          v_({
              store: t,
              actionListId: n,
              eventId: o
          });
          let d = tn({
              store: t,
              eventId: o,
              actionListId: n,
              immediate: a,
              verbose: l
          });
          l && d && t.dispatch(dr({
              actionListId: n,
              isPlaying: !a
          }))
      }
  }
  function ek({actionListId: e}, t) {
      e ? pr({
          store: t,
          actionListId: e
      }) : y_({
          store: t
      }),
      xi(t)
  }
  function tk(e, t) {
      xi(t),
      p_({
          store: t,
          elementApi: Ce
      })
  }
  function Si({store: e, rawData: t, allowEvents: r, testManual: n}) {
      let {ixSession: i} = e.getState();
      t && e.dispatch(Qa(t)),
      i.active || (e.dispatch(Za({
          hasBoundaryNodes: !!document.querySelector(Ii),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })),
      r && (sk(e),
      rk(),
      e.getState().ixSession.hasDefinedMediaQueries && $5(e)),
      e.dispatch(Ja()),
      nk(e, n))
  }
  function rk() {
      let {documentElement: e} = document;
      e.className.indexOf(i_) === -1 && (e.className += ` ${i_}`)
  }
  function nk(e, t) {
      let r = n => {
          let {ixSession: i, ixParameters: o} = e.getState();
          i.active && (e.dispatch(fi(n, o)),
          t ? Q5(e, r) : requestAnimationFrame(r))
      }
      ;
      r(window.performance.now())
  }
  function xi(e) {
      let {ixSession: t} = e.getState();
      if (t.active) {
          let {eventListeners: r} = t;
          r.forEach(ik),
          U5(),
          e.dispatch(es())
      }
  }
  function ik({target: e, listenerParams: t}) {
      e.removeEventListener.apply(e, t)
  }
  function ok({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: s, smoothing: a, restingValue: u}) {
      let {ixData: l, ixSession: v} = e.getState()
        , {events: d} = l
        , p = d[n]
        , {eventTypeId: E} = p
        , T = {}
        , b = {}
        , O = []
        , {continuousActionGroups: m} = s
        , {id: x} = s;
      V5(E, i) && (x = k5(t, x));
      let A = v.hasBoundaryNodes && r ? Qr(r, Ii) : null;
      m.forEach(P => {
          let {keyframe: q, actionItems: N} = P;
          N.forEach(k => {
              let {actionTypeId: B} = k
                , {target: U} = k.config;
              if (!U)
                  return;
              let H = U.boundaryMode ? A : null
                , F = X5(U) + bs + B;
              if (b[F] = ak(b[F], q, k),
              !T[F]) {
                  T[F] = !0;
                  let {config: w} = k;
                  Ai({
                      config: w,
                      event: p,
                      eventTarget: r,
                      elementRoot: H,
                      elementApi: Ce
                  }).forEach(g => {
                      O.push({
                          element: g,
                          key: F
                      })
                  }
                  )
              }
          }
          )
      }
      ),
      O.forEach( ({element: P, key: q}) => {
          let N = b[q]
            , k = (0,
          dt.default)(N, "[0].actionItems[0]", {})
            , {actionTypeId: B} = k
            , U = wi(B) ? Is(B)(P, k) : null
            , H = Ts({
              element: P,
              actionItem: k,
              elementApi: Ce
          }, U);
          As({
              store: e,
              element: P,
              eventId: n,
              actionListId: o,
              actionItem: k,
              destination: H,
              continuous: !0,
              parameterId: x,
              actionGroups: N,
              smoothing: a,
              restingValue: u,
              pluginInstance: U
          })
      }
      )
  }
  function ak(e=[], t, r) {
      let n = [...e], i;
      return n.some( (o, s) => o.keyframe === t ? (i = s,
      !0) : !1),
      i == null && (i = n.length,
      n.push({
          keyframe: t,
          actionItems: []
      })),
      n[i].actionItems.push(r),
      n
  }
  function sk(e) {
      let {ixData: t} = e.getState()
        , {eventTypeMap: r} = t;
      h_(e),
      (0,
      gr.default)(r, (i, o) => {
          let s = r_[o];
          if (!s) {
              console.warn(`IX2 event type not configured: ${o}`);
              return
          }
          pk({
              logic: s,
              store: e,
              events: i
          })
      }
      );
      let {ixSession: n} = e.getState();
      n.eventListeners.length && ck(e)
  }
  function ck(e) {
      let t = () => {
          h_(e)
      }
      ;
      uk.forEach(r => {
          window.addEventListener(r, t),
          e.dispatch(li(window, [r, t]))
      }
      ),
      t()
  }
  function h_(e) {
      let {ixSession: t, ixData: r} = e.getState()
        , n = window.innerWidth;
      if (n !== t.viewportWidth) {
          let {mediaQueries: i} = r;
          e.dispatch(os({
              width: n,
              mediaQueries: i
          }))
      }
  }
  function pk({logic: e, store: t, events: r}) {
      gk(r);
      let {types: n, handler: i} = e
        , {ixData: o} = t.getState()
        , {actionLists: s} = o
        , a = lk(r, dk);
      if (!(0,
      s_.default)(a))
          return;
      (0,
      gr.default)(a, (d, p) => {
          let E = r[p]
            , {action: T, id: b, mediaQueries: O=o.mediaQueryKeys} = E
            , {actionListId: m} = T.config;
          H5(O, o.mediaQueryKeys) || t.dispatch(as()),
          T.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(A => {
              let {continuousParameterGroupId: P} = A
                , q = (0,
              dt.default)(s, `${m}.continuousParameterGroups`, [])
                , N = (0,
              a_.default)(q, ({id: U}) => U === P)
                , k = (A.smoothing || 0) / 100
                , B = (A.restingState || 0) / 100;
              N && d.forEach( (U, H) => {
                  let F = b + bs + H;
                  ok({
                      store: t,
                      eventStateKey: F,
                      eventTarget: U,
                      eventId: b,
                      eventConfig: A,
                      actionListId: m,
                      parameterGroup: N,
                      smoothing: k,
                      restingValue: B
                  })
              }
              )
          }
          ),
          (T.actionTypeId === qe.GENERAL_START_ACTION || _s(T.actionTypeId)) && v_({
              store: t,
              actionListId: m,
              eventId: b
          })
      }
      );
      let u = d => {
          let {ixSession: p} = t.getState();
          fk(a, (E, T, b) => {
              let O = r[T]
                , m = p.eventState[b]
                , {action: x, mediaQueries: A=o.mediaQueryKeys} = O;
              if (!Oi(A, p.mediaQueryKey))
                  return;
              let P = (q={}) => {
                  let N = i({
                      store: t,
                      element: E,
                      event: O,
                      eventConfig: q,
                      nativeEvent: d,
                      eventStateKey: b
                  }, m);
                  W5(N, m) || t.dispatch(ts(b, N))
              }
              ;
              x.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(P) : P()
          }
          )
      }
        , l = (0,
      f_.default)(u, K5)
        , v = ({target: d=document, types: p, throttle: E}) => {
          p.split(" ").filter(Boolean).forEach(T => {
              let b = E ? l : u;
              d.addEventListener(T, b),
              t.dispatch(li(d, [T, b]))
          }
          )
      }
      ;
      Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
  }
  function gk(e) {
      if (!z5)
          return;
      let t = {}
        , r = "";
      for (let n in e) {
          let {eventTypeId: i, target: o} = e[n]
            , s = us(o);
          t[s] || (i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) && (t[s] = !0,
          r += s + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
          let n = document.createElement("style");
          n.textContent = r,
          document.body.appendChild(n)
      }
  }
  function v_({store: e, actionListId: t, eventId: r}) {
      let {ixData: n, ixSession: i} = e.getState()
        , {actionLists: o, events: s} = n
        , a = s[r]
        , u = o[t];
      if (u && u.useFirstGroupAsInitialState) {
          let l = (0,
          dt.default)(u, "actionItemGroups[0].actionItems", [])
            , v = (0,
          dt.default)(a, "mediaQueries", n.mediaQueryKeys);
          if (!Oi(v, i.mediaQueryKey))
              return;
          l.forEach(d => {
              let {config: p, actionTypeId: E} = d
                , T = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                  target: a.target,
                  targets: a.targets
              } : p
                , b = Ai({
                  config: T,
                  event: a,
                  elementApi: Ce
              })
                , O = wi(E);
              b.forEach(m => {
                  let x = O ? Is(E)(m, d) : null;
                  As({
                      destination: Ts({
                          element: m,
                          actionItem: d,
                          elementApi: Ce
                      }, x),
                      immediate: !0,
                      store: e,
                      element: m,
                      eventId: r,
                      actionItem: d,
                      actionListId: t,
                      pluginInstance: x
                  })
              }
              )
          }
          )
      }
  }
  function y_({store: e}) {
      let {ixInstances: t} = e.getState();
      (0,
      gr.default)(t, r => {
          if (!r.continuous) {
              let {actionListId: n, verbose: i} = r;
              Os(r, e),
              i && e.dispatch(dr({
                  actionListId: n,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function pr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
      let {ixInstances: o, ixSession: s} = e.getState()
        , a = s.hasBoundaryNodes && r ? Qr(r, Ii) : null;
      (0,
      gr.default)(o, u => {
          let l = (0,
          dt.default)(u, "actionItem.config.target.boundaryMode")
            , v = n ? u.eventStateKey === n : !0;
          if (u.actionListId === i && u.eventId === t && v) {
              if (a && l && !cs(a, u.element))
                  return;
              Os(u, e),
              u.verbose && e.dispatch(dr({
                  actionListId: i,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function tn({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: s, verbose: a}) {
      let {ixData: u, ixSession: l} = e.getState()
        , {events: v} = u
        , d = v[t] || {}
        , {mediaQueries: p=u.mediaQueryKeys} = d
        , E = (0,
      dt.default)(u, `actionLists.${i}`, {})
        , {actionItemGroups: T, useFirstGroupAsInitialState: b} = E;
      if (!T || !T.length)
          return !1;
      o >= T.length && (0,
      dt.default)(d, "config.loop") && (o = 0),
      o === 0 && b && o++;
      let m = (o === 0 || o === 1 && b) && _s(d.action?.actionTypeId) ? d.config.delay : void 0
        , x = (0,
      dt.default)(T, [o, "actionItems"], []);
      if (!x.length || !Oi(p, l.mediaQueryKey))
          return !1;
      let A = l.hasBoundaryNodes && r ? Qr(r, Ii) : null
        , P = M5(x)
        , q = !1;
      return x.forEach( (N, k) => {
          let {config: B, actionTypeId: U} = N
            , H = wi(U)
            , {target: F} = B;
          if (!F)
              return;
          let w = F.boundaryMode ? A : null;
          Ai({
              config: B,
              event: d,
              eventTarget: r,
              elementRoot: w,
              elementApi: Ce
          }).forEach( (S, L) => {
              let M = H ? Is(U)(S, N) : null
                , W = H ? j5(U)(S, N) : null;
              q = !0;
              let z = P === k && L === 0
                , ee = F5({
                  element: S,
                  actionItem: N
              })
                , fe = Ts({
                  element: S,
                  actionItem: N,
                  elementApi: Ce
              }, M);
              As({
                  store: e,
                  element: S,
                  actionItem: N,
                  eventId: t,
                  eventTarget: r,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: z,
                  computedStyle: ee,
                  destination: fe,
                  immediate: s,
                  verbose: a,
                  pluginInstance: M,
                  pluginDuration: W,
                  instanceDelay: m
              })
          }
          )
      }
      ),
      q
  }
  function As(e) {
      let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: s, pluginInstance: a, continuous: u, restingValue: l, eventId: v} = n, d = !u, p = P5(), {ixElements: E, ixSession: T, ixData: b} = t.getState(), O = L5(E, i), {refState: m} = E[O] || {}, x = ls(i), A = T.reducedMotion && Ho[o.actionTypeId], P;
      if (A && u)
          switch (b.events[v]?.eventTypeId) {
          case ze.MOUSE_MOVE:
          case ze.MOUSE_MOVE_IN_VIEWPORT:
              P = l;
              break;
          default:
              P = .5;
              break
          }
      let q = D5(i, m, r, o, Ce, a);
      if (t.dispatch(rs({
          instanceId: p,
          elementId: O,
          origin: q,
          refType: x,
          skipMotion: A,
          skipToValue: P,
          ...n
      })),
      E_(document.body, "ix2-animation-started", p),
      s) {
          hk(t, p);
          return
      }
      Dt({
          store: t,
          select: ({ixInstances: N}) => N[p],
          onChange: m_
      }),
      d && t.dispatch(di(p, T.tick))
  }
  function Os(e, t) {
      E_(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
      });
      let {elementId: r, actionItem: n} = e
        , {ixElements: i} = t.getState()
        , {ref: o, refType: s} = i[r] || {};
      s === d_ && B5(o, n, Ce),
      t.dispatch(ns(e.id))
  }
  function E_(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r),
      e.dispatchEvent(n)
  }
  function hk(e, t) {
      let {ixParameters: r} = e.getState();
      e.dispatch(di(t, 0)),
      e.dispatch(fi(performance.now(), r));
      let {ixInstances: n} = e.getState();
      m_(n[t], e)
  }
  function m_(e, t) {
      let {active: r, continuous: n, complete: i, elementId: o, actionItem: s, actionTypeId: a, renderType: u, current: l, groupIndex: v, eventId: d, eventTarget: p, eventStateKey: E, actionListId: T, isCarrier: b, styleProp: O, verbose: m, pluginInstance: x} = e
        , {ixData: A, ixSession: P} = t.getState()
        , {events: q} = A
        , N = q[d] || {}
        , {mediaQueries: k=A.mediaQueryKeys} = N;
      if (Oi(k, P.mediaQueryKey) && (n || r || i)) {
          if (l || u === N5 && i) {
              t.dispatch(is(o, a, l, s));
              let {ixElements: B} = t.getState()
                , {ref: U, refType: H, refState: F} = B[o] || {}
                , w = F && F[a];
              (H === d_ || wi(a)) && q5(U, F, w, d, s, O, Ce, u, x)
          }
          if (i) {
              if (b) {
                  let B = tn({
                      store: t,
                      eventId: d,
                      eventTarget: p,
                      eventStateKey: E,
                      actionListId: T,
                      groupIndex: v + 1,
                      verbose: m
                  });
                  m && !B && t.dispatch(dr({
                      actionListId: T,
                      isPlaying: !1
                  }))
              }
              Os(e, t)
          }
      }
  }
  var a_, dt, s_, u_, c_, l_, gr, f_, Ti, R5, _s, bs, Ii, d_, N5, i_, Ai, L5, Ts, Dt, P5, q5, p_, M5, F5, D5, G5, V5, k5, Oi, B5, U5, X5, H5, W5, wi, Is, j5, o_, z5, K5, uk, lk, fk, dk, ms = ce( () => {
      "use strict";
      a_ = ne(ma()),
      dt = ne(jn()),
      s_ = ne(Py()),
      u_ = ne(oE()),
      c_ = ne(sE()),
      l_ = ne(cE()),
      gr = ne(hE()),
      f_ = ne(TE());
      Me();
      Ti = ne(Ft());
      pi();
      xE();
      n_();
      R5 = Object.keys(An),
      _s = e => R5.includes(e),
      {COLON_DELIMITER: bs, BOUNDARY_SELECTOR: Ii, HTML_ELEMENT: d_, RENDER_GENERAL: N5, W_MOD_IX: i_} = Ae,
      {getAffectedElements: Ai, getElementId: L5, getDestinationValues: Ts, observeStore: Dt, getInstanceId: P5, renderHTMLElement: q5, clearAllStyles: p_, getMaxDurationItemIndex: M5, getComputedStyle: F5, getInstanceOrigin: D5, reduceListToGroup: G5, shouldNamespaceEventParameter: V5, getNamespacedParameterId: k5, shouldAllowMediaQuery: Oi, cleanupHTMLElement: B5, clearObjectCache: U5, stringifyTarget: X5, mediaQueriesEqual: H5, shallowEqual: W5} = Ti.IX2VanillaUtils,
      {isPluginType: wi, createPluginInstance: Is, getPluginDuration: j5} = Ti.IX2VanillaPlugins,
      o_ = navigator.userAgent,
      z5 = o_.match(/iPad/i) || o_.match(/iPhone/),
      K5 = 12;
      uk = ["resize", "orientationchange"];
      lk = (e, t) => (0,
      u_.default)((0,
      l_.default)(e, t), c_.default),
      fk = (e, t) => {
          (0,
          gr.default)(e, (r, n) => {
              r.forEach( (i, o) => {
                  let s = n + bs + o;
                  t(i, n, s)
              }
              )
          }
          )
      }
      ,
      dk = e => {
          let t = {
              target: e.target,
              targets: e.targets
          };
          return Ai({
              config: t,
              elementApi: Ce
          })
      }
  }
  );
  var T_ = c(pt => {
      "use strict";
      var vk = fn().default
        , yk = nu().default;
      Object.defineProperty(pt, "__esModule", {
          value: !0
      });
      pt.actions = void 0;
      pt.destroy = b_;
      pt.init = Tk;
      pt.setEnv = bk;
      pt.store = void 0;
      Ul();
      var Ek = Bo()
        , mk = yk((gy(),
      Qe(py)))
        , ws = (ms(),
      Qe(__))
        , _k = vk((pi(),
      Qe(AE)));
      pt.actions = _k;
      var Ss = pt.store = (0,
      Ek.createStore)(mk.default);
      function bk(e) {
          e() && (0,
          ws.observeRequests)(Ss)
      }
      function Tk(e) {
          b_(),
          (0,
          ws.startEngine)({
              store: Ss,
              rawData: e,
              allowEvents: !0
          })
      }
      function b_() {
          (0,
          ws.stopEngine)(Ss)
      }
  }
  );
  var w_ = c( (Hj, O_) => {
      "use strict";
      var I_ = Je()
        , A_ = T_();
      A_.setEnv(I_.env);
      I_.define("ix2", O_.exports = function() {
          return A_
      }
      )
  }
  );
  var x_ = c( (Wj, S_) => {
      "use strict";
      var hr = Je();
      hr.define("links", S_.exports = function(e, t) {
          var r = {}, n = e(window), i, o = hr.env(), s = window.location, a = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, v = /\/$/, d, p;
          r.ready = r.design = r.preview = E;
          function E() {
              i = o && hr.env("design"),
              p = hr.env("slug") || s.pathname || "",
              hr.scroll.off(b),
              d = [];
              for (var m = document.links, x = 0; x < m.length; ++x)
                  T(m[x]);
              d.length && (hr.scroll.on(b),
              b())
          }
          function T(m) {
              if (!m.getAttribute("hreflang")) {
                  var x = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                  if (a.href = x,
                  !(x.indexOf(":") >= 0)) {
                      var A = e(m);
                      if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                          if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash))
                              return;
                          var P = e(a.hash);
                          P.length && d.push({
                              link: A,
                              sec: P,
                              active: !1
                          });
                          return
                      }
                      if (!(x === "#" || x === "")) {
                          var q = a.href === s.href || x === p || l.test(x) && v.test(p);
                          O(A, u, q)
                      }
                  }
              }
          }
          function b() {
              var m = n.scrollTop()
                , x = n.height();
              t.each(d, function(A) {
                  if (!A.link.attr("hreflang")) {
                      var P = A.link
                        , q = A.sec
                        , N = q.offset().top
                        , k = q.outerHeight()
                        , B = x * .5
                        , U = q.is(":visible") && N + k - B >= m && N + B <= m + x;
                      A.active !== U && (A.active = U,
                      O(P, u, U))
                  }
              })
          }
          function O(m, x, A) {
              var P = m.hasClass(x);
              A && P || !A && !P || (A ? m.addClass(x) : m.removeClass(x))
          }
          return r
      }
      )
  }
  );
  var R_ = c( (jj, C_) => {
      "use strict";
      var Ci = Je();
      Ci.define("scroll", C_.exports = function(e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll"
          }
            , r = window.location
            , n = T() ? null : window.history
            , i = e(window)
            , o = e(document)
            , s = e(document.body)
            , a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(w) {
              window.setTimeout(w, 15)
          }
            , u = Ci.env("editor") ? ".w-editor-body" : "body"
            , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
            , v = 'a[href="#"]'
            , d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")"
            , p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            , E = document.createElement("style");
          E.appendChild(document.createTextNode(p));
          function T() {
              try {
                  return !!window.frameElement
              } catch {
                  return !0
              }
          }
          var b = /^#[a-zA-Z0-9][\w:.-]*$/;
          function O(w) {
              return b.test(w.hash) && w.host + w.pathname === r.host + r.pathname
          }
          let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function x() {
              return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
          }
          function A(w, g) {
              var S;
              switch (g) {
              case "add":
                  S = w.attr("tabindex"),
                  S ? w.attr("data-wf-tabindex-swap", S) : w.attr("tabindex", "-1");
                  break;
              case "remove":
                  S = w.attr("data-wf-tabindex-swap"),
                  S ? (w.attr("tabindex", S),
                  w.removeAttr("data-wf-tabindex-swap")) : w.removeAttr("tabindex");
                  break
              }
              w.toggleClass("wf-force-outline-none", g === "add")
          }
          function P(w) {
              var g = w.currentTarget;
              if (!(Ci.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                  var S = O(g) ? g.hash : "";
                  if (S !== "") {
                      var L = e(S);
                      L.length && (w && (w.preventDefault(),
                      w.stopPropagation()),
                      q(S, w),
                      window.setTimeout(function() {
                          N(L, function() {
                              A(L, "add"),
                              L.get(0).focus({
                                  preventScroll: !0
                              }),
                              A(L, "remove")
                          })
                      }, w ? 0 : 300))
                  }
              }
          }
          function q(w) {
              if (r.hash !== w && n && n.pushState && !(Ci.env.chrome && r.protocol === "file:")) {
                  var g = n.state && n.state.hash;
                  g !== w && n.pushState({
                      hash: w
                  }, "", w)
              }
          }
          function N(w, g) {
              var S = i.scrollTop()
                , L = k(w);
              if (S !== L) {
                  var M = B(w, S, L)
                    , W = Date.now()
                    , z = function() {
                      var ee = Date.now() - W;
                      window.scroll(0, U(S, L, ee, M)),
                      ee <= M ? a(z) : typeof g == "function" && g()
                  };
                  a(z)
              }
          }
          function k(w) {
              var g = e(l)
                , S = g.css("position") === "fixed" ? g.outerHeight() : 0
                , L = w.offset().top - S;
              if (w.data("scroll") === "mid") {
                  var M = i.height() - S
                    , W = w.outerHeight();
                  W < M && (L -= Math.round((M - W) / 2))
              }
              return L
          }
          function B(w, g, S) {
              if (x())
                  return 0;
              var L = 1;
              return s.add(w).each(function(M, W) {
                  var z = parseFloat(W.getAttribute("data-scroll-time"));
                  !isNaN(z) && z >= 0 && (L = z)
              }),
              (472.143 * Math.log(Math.abs(g - S) + 125) - 2e3) * L
          }
          function U(w, g, S, L) {
              return S > L ? g : w + (g - w) * H(S / L)
          }
          function H(w) {
              return w < .5 ? 4 * w * w * w : (w - 1) * (2 * w - 2) * (2 * w - 2) + 1
          }
          function F() {
              var {WF_CLICK_EMPTY: w, WF_CLICK_SCROLL: g} = t;
              o.on(g, d, P),
              o.on(w, v, function(S) {
                  S.preventDefault()
              }),
              document.head.insertBefore(E, document.head.firstChild)
          }
          return {
              ready: F
          }
      }
      )
  }
  );
  var L_ = c( (zj, N_) => {
      "use strict";
      var Ik = Je();
      Ik.define("touch", N_.exports = function(e) {
          var t = {}
            , r = window.getSelection;
          e.event.special.tap = {
              bindType: "click",
              delegateType: "click"
          },
          t.init = function(o) {
              return o = typeof o == "string" ? e(o).get(0) : o,
              o ? new n(o) : null
          }
          ;
          function n(o) {
              var s = !1, a = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, v;
              o.addEventListener("touchstart", d, !1),
              o.addEventListener("touchmove", p, !1),
              o.addEventListener("touchend", E, !1),
              o.addEventListener("touchcancel", T, !1),
              o.addEventListener("mousedown", d, !1),
              o.addEventListener("mousemove", p, !1),
              o.addEventListener("mouseup", E, !1),
              o.addEventListener("mouseout", T, !1);
              function d(O) {
                  var m = O.touches;
                  m && m.length > 1 || (s = !0,
                  m ? (a = !0,
                  l = m[0].clientX) : l = O.clientX,
                  v = l)
              }
              function p(O) {
                  if (s) {
                      if (a && O.type === "mousemove") {
                          O.preventDefault(),
                          O.stopPropagation();
                          return
                      }
                      var m = O.touches
                        , x = m ? m[0].clientX : O.clientX
                        , A = x - v;
                      v = x,
                      Math.abs(A) > u && r && String(r()) === "" && (i("swipe", O, {
                          direction: A > 0 ? "right" : "left"
                      }),
                      T())
                  }
              }
              function E(O) {
                  if (s && (s = !1,
                  a && O.type === "mouseup")) {
                      O.preventDefault(),
                      O.stopPropagation(),
                      a = !1;
                      return
                  }
              }
              function T() {
                  s = !1
              }
              function b() {
                  o.removeEventListener("touchstart", d, !1),
                  o.removeEventListener("touchmove", p, !1),
                  o.removeEventListener("touchend", E, !1),
                  o.removeEventListener("touchcancel", T, !1),
                  o.removeEventListener("mousedown", d, !1),
                  o.removeEventListener("mousemove", p, !1),
                  o.removeEventListener("mouseup", E, !1),
                  o.removeEventListener("mouseout", T, !1),
                  o = null
              }
              this.destroy = b
          }
          function i(o, s, a) {
              var u = e.Event(o, {
                  originalEvent: s
              });
              e(s.target).trigger(u, a)
          }
          return t.instance = t.init(document),
          t
      }
      )
  }
  );
  var q_ = c( (Kj, P_) => {
      "use strict";
      var It = Je()
        , Ak = ln()
        , Ie = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
      };
      It.define("navbar", P_.exports = function(e, t) {
          var r = {}, n = e.tram, i = e(window), o = e(document), s = t.debounce, a, u, l, v, d = It.env(), p = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", T = "w--open", b = "w--nav-dropdown-open", O = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", x = "w--nav-link-open", A = Ak.triggers, P = e();
          r.ready = r.design = r.preview = q,
          r.destroy = function() {
              P = e(),
              N(),
              u && u.length && u.each(H)
          }
          ;
          function q() {
              l = d && It.env("design"),
              v = It.env("editor"),
              a = e(document.body),
              u = o.find(E),
              u.length && (u.each(U),
              N(),
              k())
          }
          function N() {
              It.resize.off(B)
          }
          function k() {
              It.resize.on(B)
          }
          function B() {
              u.each(Y)
          }
          function U(h, G) {
              var X = e(G)
                , V = e.data(G, E);
              V || (V = e.data(G, E, {
                  open: !1,
                  el: X,
                  config: {},
                  selectedIdx: -1
              })),
              V.menu = X.find(".w-nav-menu"),
              V.links = V.menu.find(".w-nav-link"),
              V.dropdowns = V.menu.find(".w-dropdown"),
              V.dropdownToggle = V.menu.find(".w-dropdown-toggle"),
              V.dropdownList = V.menu.find(".w-dropdown-list"),
              V.button = X.find(".w-nav-button"),
              V.container = X.find(".w-container"),
              V.overlayContainerId = "w-nav-overlay-" + h,
              V.outside = Ge(V);
              var le = X.find(".w-nav-brand");
              le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"),
              V.button.attr("style", "-webkit-user-select: text;"),
              V.button.attr("aria-label") == null && V.button.attr("aria-label", "menu"),
              V.button.attr("role", "button"),
              V.button.attr("tabindex", "0"),
              V.button.attr("aria-controls", V.overlayContainerId),
              V.button.attr("aria-haspopup", "menu"),
              V.button.attr("aria-expanded", "false"),
              V.el.off(E),
              V.button.off(E),
              V.menu.off(E),
              g(V),
              l ? (F(V),
              V.el.on("setting" + E, S(V))) : (w(V),
              V.button.on("click" + E, ee(V)),
              V.menu.on("click" + E, "a", fe(V)),
              V.button.on("keydown" + E, L(V)),
              V.el.on("keydown" + E, M(V))),
              Y(h, G)
          }
          function H(h, G) {
              var X = e.data(G, E);
              X && (F(X),
              e.removeData(G, E))
          }
          function F(h) {
              h.overlay && (se(h, !0),
              h.overlay.remove(),
              h.overlay = null)
          }
          function w(h) {
              h.overlay || (h.overlay = e(p).appendTo(h.el),
              h.overlay.attr("id", h.overlayContainerId),
              h.parent = h.menu.parent(),
              se(h, !0))
          }
          function g(h) {
              var G = {}
                , X = h.config || {}
                , V = G.animation = h.el.attr("data-animation") || "default";
              G.animOver = /^over/.test(V),
              G.animDirect = /left$/.test(V) ? -1 : 1,
              X.animation !== V && h.open && t.defer(z, h),
              G.easing = h.el.attr("data-easing") || "ease",
              G.easing2 = h.el.attr("data-easing2") || "ease";
              var le = h.el.attr("data-duration");
              G.duration = le != null ? Number(le) : 400,
              G.docHeight = h.el.attr("data-doc-height"),
              h.config = G
          }
          function S(h) {
              return function(G, X) {
                  X = X || {};
                  var V = i.width();
                  g(h),
                  X.open === !0 && gt(h, !0),
                  X.open === !1 && se(h, !0),
                  h.open && t.defer(function() {
                      V !== i.width() && z(h)
                  })
              }
          }
          function L(h) {
              return function(G) {
                  switch (G.keyCode) {
                  case Ie.SPACE:
                  case Ie.ENTER:
                      return ee(h)(),
                      G.preventDefault(),
                      G.stopPropagation();
                  case Ie.ESCAPE:
                      return se(h),
                      G.preventDefault(),
                      G.stopPropagation();
                  case Ie.ARROW_RIGHT:
                  case Ie.ARROW_DOWN:
                  case Ie.HOME:
                  case Ie.END:
                      return h.open ? (G.keyCode === Ie.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                      W(h),
                      G.preventDefault(),
                      G.stopPropagation()) : (G.preventDefault(),
                      G.stopPropagation())
                  }
              }
          }
          function M(h) {
              return function(G) {
                  if (h.open)
                      switch (h.selectedIdx = h.links.index(document.activeElement),
                      G.keyCode) {
                      case Ie.HOME:
                      case Ie.END:
                          return G.keyCode === Ie.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0,
                          W(h),
                          G.preventDefault(),
                          G.stopPropagation();
                      case Ie.ESCAPE:
                          return se(h),
                          h.button.focus(),
                          G.preventDefault(),
                          G.stopPropagation();
                      case Ie.ARROW_LEFT:
                      case Ie.ARROW_UP:
                          return h.selectedIdx = Math.max(-1, h.selectedIdx - 1),
                          W(h),
                          G.preventDefault(),
                          G.stopPropagation();
                      case Ie.ARROW_RIGHT:
                      case Ie.ARROW_DOWN:
                          return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1),
                          W(h),
                          G.preventDefault(),
                          G.stopPropagation()
                      }
              }
          }
          function W(h) {
              if (h.links[h.selectedIdx]) {
                  var G = h.links[h.selectedIdx];
                  G.focus(),
                  fe(G)
              }
          }
          function z(h) {
              h.open && (se(h, !0),
              gt(h, !0))
          }
          function ee(h) {
              return s(function() {
                  h.open ? se(h) : gt(h)
              })
          }
          function fe(h) {
              return function(G) {
                  var X = e(this)
                    , V = X.attr("href");
                  if (!It.validClick(G.currentTarget)) {
                      G.preventDefault();
                      return
                  }
                  V && V.indexOf("#") === 0 && h.open && se(h)
              }
          }
          function Ge(h) {
              return h.outside && o.off("click" + E, h.outside),
              function(G) {
                  var X = e(G.target);
                  v && X.closest(".w-editor-bem-EditorOverlay").length || he(h, X)
              }
          }
          var he = s(function(h, G) {
              if (h.open) {
                  var X = G.closest(".w-nav-menu");
                  h.menu.is(X) || se(h)
              }
          });
          function Y(h, G) {
              var X = e.data(G, E)
                , V = X.collapsed = X.button.css("display") !== "none";
              if (X.open && !V && !l && se(X, !0),
              X.container.length) {
                  var le = Re(X);
                  X.links.each(le),
                  X.dropdowns.each(le)
              }
              X.open && vr(X)
          }
          var te = "max-width";
          function Re(h) {
              var G = h.container.css(te);
              return G === "none" && (G = ""),
              function(X, V) {
                  V = e(V),
                  V.css(te, ""),
                  V.css(te) === "none" && V.css(te, G)
              }
          }
          function Ne(h, G) {
              G.setAttribute("data-nav-menu-open", "")
          }
          function Ot(h, G) {
              G.removeAttribute("data-nav-menu-open")
          }
          function gt(h, G) {
              if (h.open)
                  return;
              h.open = !0,
              h.menu.each(Ne),
              h.links.addClass(x),
              h.dropdowns.addClass(b),
              h.dropdownToggle.addClass(O),
              h.dropdownList.addClass(m),
              h.button.addClass(T);
              var X = h.config
                , V = X.animation;
              (V === "none" || !n.support.transform || X.duration <= 0) && (G = !0);
              var le = vr(h)
                , yr = h.menu.outerHeight(!0)
                , wt = h.menu.outerWidth(!0)
                , f = h.el.height()
                , y = h.el[0];
              if (Y(0, y),
              A.intro(0, y),
              It.redraw.up(),
              l || o.on("click" + E, h.outside),
              G) {
                  R();
                  return
              }
              var _ = "transform " + X.duration + "ms " + X.easing;
              if (h.overlay && (P = h.menu.prev(),
              h.overlay.show().append(h.menu)),
              X.animOver) {
                  n(h.menu).add(_).set({
                      x: X.animDirect * wt,
                      height: le
                  }).start({
                      x: 0
                  }).then(R),
                  h.overlay && h.overlay.width(wt);
                  return
              }
              var I = f + yr;
              n(h.menu).add(_).set({
                  y: -I
              }).start({
                  y: 0
              }).then(R);
              function R() {
                  h.button.attr("aria-expanded", "true")
              }
          }
          function vr(h) {
              var G = h.config
                , X = G.docHeight ? o.height() : a.height();
              return G.animOver ? h.menu.height(X) : h.el.css("position") !== "fixed" && (X -= h.el.outerHeight(!0)),
              h.overlay && h.overlay.height(X),
              X
          }
          function se(h, G) {
              if (!h.open)
                  return;
              h.open = !1,
              h.button.removeClass(T);
              var X = h.config;
              if ((X.animation === "none" || !n.support.transform || X.duration <= 0) && (G = !0),
              A.outro(0, h.el[0]),
              o.off("click" + E, h.outside),
              G) {
                  n(h.menu).stop(),
                  y();
                  return
              }
              var V = "transform " + X.duration + "ms " + X.easing2
                , le = h.menu.outerHeight(!0)
                , yr = h.menu.outerWidth(!0)
                , wt = h.el.height();
              if (X.animOver) {
                  n(h.menu).add(V).start({
                      x: yr * X.animDirect
                  }).then(y);
                  return
              }
              var f = wt + le;
              n(h.menu).add(V).start({
                  y: -f
              }).then(y);
              function y() {
                  h.menu.height(""),
                  n(h.menu).set({
                      x: 0,
                      y: 0
                  }),
                  h.menu.each(Ot),
                  h.links.removeClass(x),
                  h.dropdowns.removeClass(b),
                  h.dropdownToggle.removeClass(O),
                  h.dropdownList.removeClass(m),
                  h.overlay && h.overlay.children().length && (P.length ? h.menu.insertAfter(P) : h.menu.prependTo(h.parent),
                  h.overlay.attr("style", "").hide()),
                  h.el.triggerHandler("w-close"),
                  h.button.attr("aria-expanded", "false")
              }
          }
          return r
      }
      )
  }
  );
  var F_ = c( (Yj, M_) => {
      "use strict";
      var At = Je()
        , Ok = ln();
      At.define("tabs", M_.exports = function(e) {
          var t = {}, r = e.tram, n = e(document), i, o, s = At.env, a = s.safari, u = s(), l = "data-w-tab", v = "data-w-pane", d = ".w-tabs", p = "w--current", E = "w--tab-active", T = Ok.triggers, b = !1;
          t.ready = t.design = t.preview = O,
          t.redraw = function() {
              b = !0,
              O(),
              b = !1
          }
          ,
          t.destroy = function() {
              i = n.find(d),
              i.length && (i.each(A),
              m())
          }
          ;
          function O() {
              o = u && At.env("design"),
              i = n.find(d),
              i.length && (i.each(P),
              At.env("preview") && !b && i.each(A),
              m(),
              x())
          }
          function m() {
              At.redraw.off(t.redraw)
          }
          function x() {
              At.redraw.on(t.redraw)
          }
          function A(F, w) {
              var g = e.data(w, d);
              g && (g.links && g.links.each(T.reset),
              g.panes && g.panes.each(T.reset))
          }
          function P(F, w) {
              var g = d.substr(1) + "-" + F
                , S = e(w)
                , L = e.data(w, d);
              if (L || (L = e.data(w, d, {
                  el: S,
                  config: {}
              })),
              L.current = null,
              L.tabIdentifier = g + "-" + l,
              L.paneIdentifier = g + "-" + v,
              L.menu = S.children(".w-tab-menu"),
              L.links = L.menu.children(".w-tab-link"),
              L.content = S.children(".w-tab-content"),
              L.panes = L.content.children(".w-tab-pane"),
              L.el.off(d),
              L.links.off(d),
              L.menu.attr("role", "tablist"),
              L.links.attr("tabindex", "-1"),
              q(L),
              !o) {
                  L.links.on("click" + d, k(L)),
                  L.links.on("keydown" + d, B(L));
                  var M = L.links.filter("." + p)
                    , W = M.attr(l);
                  W && U(L, {
                      tab: W,
                      immediate: !0
                  })
              }
          }
          function q(F) {
              var w = {};
              w.easing = F.el.attr("data-easing") || "ease";
              var g = parseInt(F.el.attr("data-duration-in"), 10);
              g = w.intro = g === g ? g : 0;
              var S = parseInt(F.el.attr("data-duration-out"), 10);
              S = w.outro = S === S ? S : 0,
              w.immediate = !g && !S,
              F.config = w
          }
          function N(F) {
              var w = F.current;
              return Array.prototype.findIndex.call(F.links, g => g.getAttribute(l) === w, null)
          }
          function k(F) {
              return function(w) {
                  w.preventDefault();
                  var g = w.currentTarget.getAttribute(l);
                  g && U(F, {
                      tab: g
                  })
              }
          }
          function B(F) {
              return function(w) {
                  var g = N(F)
                    , S = w.key
                    , L = {
                      ArrowLeft: g - 1,
                      ArrowUp: g - 1,
                      ArrowRight: g + 1,
                      ArrowDown: g + 1,
                      End: F.links.length - 1,
                      Home: 0
                  };
                  if (S in L) {
                      w.preventDefault();
                      var M = L[S];
                      M === -1 && (M = F.links.length - 1),
                      M === F.links.length && (M = 0);
                      var W = F.links[M]
                        , z = W.getAttribute(l);
                      z && U(F, {
                          tab: z
                      })
                  }
              }
          }
          function U(F, w) {
              w = w || {};
              var g = F.config
                , S = g.easing
                , L = w.tab;
              if (L !== F.current) {
                  F.current = L;
                  var M;
                  F.links.each(function(Y, te) {
                      var Re = e(te);
                      if (w.immediate || g.immediate) {
                          var Ne = F.panes[Y];
                          te.id || (te.id = F.tabIdentifier + "-" + Y),
                          Ne.id || (Ne.id = F.paneIdentifier + "-" + Y),
                          te.href = "#" + Ne.id,
                          te.setAttribute("role", "tab"),
                          te.setAttribute("aria-controls", Ne.id),
                          te.setAttribute("aria-selected", "false"),
                          Ne.setAttribute("role", "tabpanel"),
                          Ne.setAttribute("aria-labelledby", te.id)
                      }
                      te.getAttribute(l) === L ? (M = te,
                      Re.addClass(p).removeAttr("tabindex").attr({
                          "aria-selected": "true"
                      }).each(T.intro)) : Re.hasClass(p) && Re.removeClass(p).attr({
                          tabindex: "-1",
                          "aria-selected": "false"
                      }).each(T.outro)
                  });
                  var W = []
                    , z = [];
                  F.panes.each(function(Y, te) {
                      var Re = e(te);
                      te.getAttribute(l) === L ? W.push(te) : Re.hasClass(E) && z.push(te)
                  });
                  var ee = e(W)
                    , fe = e(z);
                  if (w.immediate || g.immediate) {
                      ee.addClass(E).each(T.intro),
                      fe.removeClass(E),
                      b || At.redraw.up();
                      return
                  } else {
                      var Ge = window.scrollX
                        , he = window.scrollY;
                      M.focus(),
                      window.scrollTo(Ge, he)
                  }
                  fe.length && g.outro ? (fe.each(T.outro),
                  r(fe).add("opacity " + g.outro + "ms " + S, {
                      fallback: a
                  }).start({
                      opacity: 0
                  }).then( () => H(g, fe, ee))) : H(g, fe, ee)
              }
          }
          function H(F, w, g) {
              if (w.removeClass(E).css({
                  opacity: "",
                  transition: "",
                  transform: "",
                  width: "",
                  height: ""
              }),
              g.addClass(E).each(T.intro),
              At.redraw.up(),
              !F.intro)
                  return r(g).set({
                      opacity: 1
                  });
              r(g).set({
                  opacity: 0
              }).redraw().add("opacity " + F.intro + "ms " + F.easing, {
                  fallback: a
              }).start({
                  opacity: 1
              })
          }
          return t
      }
      )
  }
  );
  Cs();
  Rs();
  Xs();
  Ws();
  Ks();
  ln();
  w_();
  x_();
  R_();
  L_();
  q_();
  F_();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
* Webflow._ (aka) Underscore.js 1.6.0 (custom build)
*
* http://underscorejs.org
* (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
* Underscore may be freely distributed under the MIT license.
* @license MIT
*/
/*! Bundled license information:

timm/lib/timm.js:
(*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 *)
*/
/**
* ----------------------------------------------------------------------
* Webflow: Interactions 2.0: Init
*/
Webflow.require('ix2').init({
  "events": {
      "e-13": {
          "id": "e-13",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-15"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6996",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6996",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689342376031
      },
      "e-20": {
          "id": "e-20",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-28"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ab6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ab6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446317330
      },
      "e-28": {
          "id": "e-28",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-20"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ab6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ab6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446317330
      },
      "e-31": {
          "id": "e-31",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-1185"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aca",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aca",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446316922
      },
      "e-41": {
          "id": "e-41",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1439"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6972",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6972",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1637330077473
      },
      "e-43": {
          "id": "e-43",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-297"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1626130887231
      },
      "e-48": {
          "id": "e-48",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-204"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-51": {
          "id": "e-51",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-202"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ad4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ad4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446315522
      },
      "e-56": {
          "id": "e-56",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-243"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698076444408
      },
      "e-58": {
          "id": "e-58",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-118"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698846610182
      },
      "e-64": {
          "id": "e-64",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-232"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cd7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698846610182
      },
      "e-70": {
          "id": "e-70",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-147"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b04",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b04",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-83": {
          "id": "e-83",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-245"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b2e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b2e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-98": {
          "id": "e-98",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-237"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-100": {
          "id": "e-100",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-170"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cda",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5cda",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698846631920
      },
      "e-110": {
          "id": "e-110",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInLeft",
                  "autoStopEventId": "e-172"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5be5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d5be5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 1100,
              "direction": "LEFT",
              "effectIn": true
          },
          "createdOn": 1698886152547
      },
      "e-115": {
          "id": "e-115",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-79"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1626130887231
      },
      "e-119": {
          "id": "e-119",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-528"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446294536
      },
      "e-129": {
          "id": "e-129",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-304"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b1a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b1a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-132": {
          "id": "e-132",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-217"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698798091944
      },
      "e-133": {
          "id": "e-133",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1452"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6983",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6983",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689342294943
      },
      "e-138": {
          "id": "e-138",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1431"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69b9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69b9",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689356654668
      },
      "e-141": {
          "id": "e-141",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-7"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69d7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69d7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1698798283165
      },
      "e-142": {
          "id": "e-142",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-51"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ad4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ad4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446315522
      },
      "e-146": {
          "id": "e-146",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-32"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6a9f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698076456587
      },
      "e-147": {
          "id": "e-147",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-70"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b04",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b04",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-151": {
          "id": "e-151",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-129"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b1a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b1a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-157": {
          "id": "e-157",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-119"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446294539
      },
      "e-164": {
          "id": "e-164",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1457"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69f0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69f0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689359679649
      },
      "e-180": {
          "id": "e-180",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-31"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aca",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aca",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446316922
      },
      "e-183": {
          "id": "e-183",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-78"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "selector": ".tabs-container---brix-2",
              "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".tabs-container---brix-2",
              "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1626130830417
      },
      "e-186": {
          "id": "e-186",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-203"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b2e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b2e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-189": {
          "id": "e-189",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1463"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69e3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69e3",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689358734737
      },
      "e-198": {
          "id": "e-198",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-215"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6af0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6af0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-209": {
          "id": "e-209",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-228"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ac0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ac0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698880163953
      },
      "e-215": {
          "id": "e-215",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-249"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6af0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6af0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-218": {
          "id": "e-218",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-332"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6afa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446347986
      },
      "e-219": {
          "id": "e-219",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-14"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "selector": ".tabs-container---brix",
              "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".tabs-container---brix",
              "originalId": "8739190c-8a7a-ecba-480d-691237d84003",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1626130830417
      },
      "e-228": {
          "id": "e-228",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-209"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ac0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6ac0",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1698880163953
      },
      "e-230": {
          "id": "e-230",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInRight",
                  "autoStopEventId": "e-1440"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d69c5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 15,
              "scrollOffsetUnit": "%",
              "delay": 350,
              "direction": "RIGHT",
              "effectIn": true
          },
          "createdOn": 1689356734278
      },
      "e-234": {
          "id": "e-234",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-171"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6aa2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 35,
              "scrollOffsetUnit": "%",
              "delay": 200,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1698076468482
      },
      "e-237": {
          "id": "e-237",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-317"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|5f509935-03d9-9694-f5a7-dc68a14d6b24",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1626446348353
      },
      "e-242": {
          "id": "e-242",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-247"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|6cfa92f4-31d5-d713-baa1-96e93af8bc9b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|6cfa92f4-31d5-d713-baa1-96e93af8bc9b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 30,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1641922757723
      },
      "e-245": {
          "id": "e-245",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-246"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|6cfa92f4-31d5-d713-baa1-96e93af8bc8e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|6cfa92f4-31d5-d713-baa1-96e93af8bc8e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 30,
              "scrollOffsetUnit": "%",
              "delay": 0,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1641922731330
      },
      "e-248": {
          "id": "e-248",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "SLIDE_EFFECT",
              "instant": false,
              "config": {
                  "actionListId": "slideInBottom",
                  "autoStopEventId": "e-249"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|289e4729-9b3c-01ef-4ecc-bfc8822d3d27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|289e4729-9b3c-01ef-4ecc-bfc8822d3d27",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": 30,
              "scrollOffsetUnit": "%",
              "delay": 100,
              "direction": "BOTTOM",
              "effectIn": true
          },
          "createdOn": 1700058427080
      },
      "e-251": {
          "id": "e-251",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5e6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5e6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625181330349
      },
      "e-252": {
          "id": "e-252",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5fc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5fc",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625182218549
      },
      "e-253": {
          "id": "e-253",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5da",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc5da",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625125522687
      },
      "e-254": {
          "id": "e-254",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc629",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc629",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625183469535
      },
      "e-257": {
          "id": "e-257",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc60d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625183162737
      },
      "e-258": {
          "id": "e-258",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc63a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|e21a1679-9c70-6d38-23bd-0e23abecc63a",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1625183741882
      },
      "e-336": {
          "id": "e-336",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|94ab6e30-eb1e-1ca3-cf04-de82b301bb92",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|94ab6e30-eb1e-1ca3-cf04-de82b301bb92",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-19-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": true,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1700531029705
      },
      "e-972": {
          "id": "e-972",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-973"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|76a1a867-ad2d-a607-d2b7-c79a17786b55",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|76a1a867-ad2d-a607-d2b7-c79a17786b55",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407159996
      },
      "e-973": {
          "id": "e-973",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-972"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|76a1a867-ad2d-a607-d2b7-c79a17786b55",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|76a1a867-ad2d-a607-d2b7-c79a17786b55",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407159996
      },
      "e-974": {
          "id": "e-974",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-975"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|940b3896-19f0-b58e-ab91-a3b773c5a9f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|940b3896-19f0-b58e-ab91-a3b773c5a9f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407222585
      },
      "e-975": {
          "id": "e-975",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-974"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|940b3896-19f0-b58e-ab91-a3b773c5a9f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|940b3896-19f0-b58e-ab91-a3b773c5a9f4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407222585
      },
      "e-976": {
          "id": "e-976",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-977"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|fa399696-6be9-a517-aefd-fe8f7c972ce6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|fa399696-6be9-a517-aefd-fe8f7c972ce6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407395108
      },
      "e-977": {
          "id": "e-977",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-976"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|fa399696-6be9-a517-aefd-fe8f7c972ce6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|fa399696-6be9-a517-aefd-fe8f7c972ce6",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407395108
      },
      "e-978": {
          "id": "e-978",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-979"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|4c3398e3-89fb-06bf-b82a-a23b2278139f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|4c3398e3-89fb-06bf-b82a-a23b2278139f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407493334
      },
      "e-979": {
          "id": "e-979",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-978"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66168865c9e7cec5cff0ff6b|4c3398e3-89fb-06bf-b82a-a23b2278139f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66168865c9e7cec5cff0ff6b|4c3398e3-89fb-06bf-b82a-a23b2278139f",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1707407493334
      }
  },
  "actionLists": {
      "a-3": {
          "id": "a-3",
          "title": "2. Close FAQ Accordion",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-3-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "xValue": 0.9,
                      "yValue": 0.9,
                      "locked": true
                  }
              }, {
                  "id": "a-3-n-2",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "heightValue": 0,
                      "widthUnit": "PX",
                      "heightUnit": "px",
                      "locked": false
                  }
              }, {
                  "id": "a-3-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 800,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-3-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-3-n-5",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix.second-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                      },
                      "zValue": 90,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-3-n-6",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-item-title---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1626114382035
      },
      "a-12": {
          "id": "a-12",
          "title": "2. Open FAQ Accordion",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-12-n",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "heightValue": 0,
                      "widthUnit": "PX",
                      "heightUnit": "px",
                      "locked": false
                  }
              }, {
                  "id": "a-12-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "xValue": 0.9,
                      "yValue": 0.9,
                      "locked": true
                  }
              }, {
                  "id": "a-12-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-12-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-12-n-5",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix.second-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                      },
                      "zValue": 90,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-12-n-6",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-item-title---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n-7",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }, {
                  "id": "a-12-n-8",
                  "actionTypeId": "STYLE_SIZE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "widthUnit": "AUTO",
                      "heightUnit": "AUTO",
                      "locked": false
                  }
              }, {
                  "id": "a-12-n-9",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 800,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-content---brix-2",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece638a"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-12-n-10",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }, {
                  "id": "a-12-n-11",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".open-close-line---brix.second-line---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece637b", "d738313c-e991-4bd3-2b6e-45ebaece6405"]
                      },
                      "zValue": 0,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-12-n-12",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".accordion-item-title---brix",
                          "selectorGuids": ["d738313c-e991-4bd3-2b6e-45ebaece62db"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1626114382035
      },
      "a-19": {
          "id": "a-19",
          "title": "Timeline Animation",
          "continuousParameterGroups": [{
              "id": "a-19-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 57,
                  "actionItems": [{
                      "id": "a-19-n",
                      "actionTypeId": "STYLE_BACKGROUND_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_circle",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                          },
                          "globalSwatchId": "",
                          "rValue": 8,
                          "bValue": 8,
                          "gValue": 8,
                          "aValue": 0
                      }
                  }, {
                      "id": "a-19-n-2",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_right",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                          },
                          "value": 0.25,
                          "unit": ""
                      }
                  }, {
                      "id": "a-19-n-3",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_left",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                          },
                          "value": 0.25,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 62,
                  "actionItems": [{
                      "id": "a-19-n-4",
                      "actionTypeId": "STYLE_BACKGROUND_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_circle",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e18"]
                          },
                          "globalSwatchId": "",
                          "rValue": 255,
                          "bValue": 255,
                          "gValue": 255,
                          "aValue": 0
                      }
                  }, {
                      "id": "a-19-n-5",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_right",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e05"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }, {
                      "id": "a-19-n-6",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 500,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".timeline_left",
                              "selectorGuids": ["b86ccd61-0586-8968-0bbb-97f53ac03e04"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }]
          }],
          "createdOn": 1625115912519
      },
      "slideInRight": {
          "id": "slideInRight",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 100,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }, {
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }]
      },
      "slideInBottom": {
          "id": "slideInBottom",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 100,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }, {
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }]
          }]
      },
      "slideInLeft": {
          "id": "slideInLeft",
          "useFirstGroupAsInitialState": true,
          "actionItemGroups": [{
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 0
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "duration": 0,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": -100,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "value": 1
                  }
              }, {
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuart",
                      "duration": 1000,
                      "target": {
                          "id": "N/A",
                          "appliesTo": "TRIGGER_ELEMENT",
                          "useEventTarget": true
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }]
      }
  },
  "site": {
      "mediaQueries": [{
          "key": "main",
          "min": 992,
          "max": 10000
      }, {
          "key": "medium",
          "min": 768,
          "max": 991
      }, {
          "key": "small",
          "min": 480,
          "max": 767
      }, {
          "key": "tiny",
          "min": 0,
          "max": 479
      }]
  }
});
