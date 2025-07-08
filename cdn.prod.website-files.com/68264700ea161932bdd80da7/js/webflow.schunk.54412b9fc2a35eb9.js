(self.webpackChunk = self.webpackChunk || []).push([
  ["661"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new U.Bare().init(e, t);
        }
        function a(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function n(e, t, a) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1)
          );
        }
        function i() {}
        function d(e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a;
          var n = a;
          return (
            $.test(e) || !q.test(e)
              ? (n = parseInt(e, 10))
              : q.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          );
        }
        function o(e) {
          Y.debug && window && window.console.warn(e);
        }
        var l,
          c,
          r,
          s = (function (e, t, a) {
            function n(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function d() {}
            return function o(l, c) {
              function r() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              c === a && ((c = l), (l = Object)), (r.Bare = s);
              var f,
                u = (d[e] = l[e]),
                p = (s[e] = r[e] = new d());
              return (
                (p.constructor = r),
                (r.mixin = function (t) {
                  return (s[e] = r[e] = o(r, t)[e]), r;
                }),
                (r.open = function (e) {
                  if (
                    ((f = {}),
                    i(e) ? (f = e.call(r, p, u, r, l)) : n(e) && (f = e),
                    n(f))
                  )
                    for (var a in f) t.call(f, a) && (p[a] = f[a]);
                  return i(p.init) || (p.init = l), r;
                }),
                r.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          f = {
            ease: [
              "ease",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  d = i * e;
                return (
                  t +
                  a *
                    (-2.75 * d * i + 11 * i * i + -15.5 * d + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  d = i * e;
                return t + a * (-1 * d * i + 3 * i * i + -3 * d + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  d = i * e;
                return (
                  t +
                  a *
                    (0.3 * d * i + -1.6 * i * i + 2.2 * d + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  d = i * e;
                return t + a * (2 * d * i + -5 * i * i + 2 * d + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, a, n) {
                return (a * e) / n + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, a, n) {
                return a * (e /= n) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e + t
                  : (-a / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, a, n) {
                return e === n
                  ? t + a
                  : a * (-Math.pow(2, (-10 * e) / n) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * (e /= n) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          u = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = "number",
          g = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          _ = "unitless",
          L = /(all|none) 0s ease 0s/,
          v = /^(width|height)$/,
          R = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          A = ["-webkit-", "-moz-", "-o-", "-ms-"],
          S = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              a,
              n = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((a = N[t] + n) in R.style) return { dom: a, css: A[t] + e };
          },
          h = (t.support = {
            bind: Function.prototype.bind,
            transform: S("transform"),
            transition: S("transition"),
            backface: S("backface-visibility"),
            timing: S("transition-timing-function"),
          });
        if (h.transition) {
          var C = h.timing.dom;
          if (((R.style[C] = f["ease-in-back"][0]), !R.style[C]))
            for (var M in u) f[M][0] = u[M];
        }
        var V = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && h.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          G = (t.now =
            (r =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && h.bind
              ? r.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          x = s(function (t) {
            function a(e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t];
                    i && n.push(i);
                  }
                  return n;
                })(("" + e).split(" ")),
                n = a[0];
              t = t || {};
              var i = H[n];
              if (!i) return o("Unsupported property: " + n);
              if (!t.weak || !this.props[n]) {
                var d = i[0],
                  l = this.props[n];
                return (
                  l || (l = this.props[n] = new d.Bare()),
                  l.init(this.$el, a, i, t),
                  l
                );
              }
            }
            function n(e, t, n) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new D({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      r.call(this);
                      break;
                    default:
                      a.call(this, e, n && n[1]);
                  }
                  return i.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var u = 0;
                  f.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > u && (u = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (u = d(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    u > 0 &&
                      ((this.timer = new D({ duration: u, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    E = !1,
                    I = {};
                  V(function () {
                    f.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(I);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                n.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                f.call(this, t, u),
                s.call(this);
            }
            function c() {
              l.call(this), (this.el.style.display = "none");
            }
            function r() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                a = [];
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string);
              (a = a.join(",")),
                this.style !== a &&
                  ((this.style = a), (this.el.style[h.transition.dom] = a));
            }
            function f(e, t, n) {
              var i,
                d,
                o,
                l,
                c = t !== u,
                r = {};
              for (i in e)
                (o = e[i]),
                  i in j
                    ? (r.transform || (r.transform = {}), (r.transform[i] = o))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in H ? (r[i] = o) : (l || (l = {}), (l[i] = o)));
              for (i in r) {
                if (((o = r[i]), !(d = this.props[i]))) {
                  if (!c) continue;
                  d = a.call(this, i);
                }
                t.call(this, d, o);
              }
              n && l && n.call(this, l);
            }
            function u(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function y(e, a) {
              t[e] = function () {
                return this.children
                  ? g.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this);
              };
            }
            function g(e, t) {
              var a,
                n = this.children.length;
              for (a = 0; n > a; a++) e.apply(this.children[a], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Y.keepInherited && !Y.fallback)
              ) {
                var a = Q(this.el, "transition");
                a && !L.test(a) && (this.upstream = a);
              }
              h.backface &&
                Y.hideBackface &&
                W(this.el, h.backface.css, "hidden");
            }),
              y("add", a),
              y("start", n),
              y("wait", function (e) {
                (e = d(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new D({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              y("next", i),
              y("stop", l),
              y("set", function (e) {
                l.call(this, e), f.call(this, e, p, I);
              }),
              y("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              y("hide", c),
              y("redraw", r),
              y("destroy", function () {
                l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          U = s(x, function (t) {
            function a(t, a) {
              var n = e.data(t, E) || e.data(t, E, new x.Bare());
              return n.el || n.init(t), a ? n.start(a) : n;
            }
            t.init = function (t, n) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return a(i[0], n);
              var d = [];
              return (
                i.each(function (e, t) {
                  d.push(a(t, n));
                }),
                (this.children = d),
                this
              );
            };
          }),
          P = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, a, n) {
              (this.$el = e), (this.el = e[0]);
              var i,
                o,
                l,
                c = t[0];
              a[2] && (c = a[2]),
                z[c] && (c = z[c]),
                (this.name = c),
                (this.type = a[1]),
                (this.duration = d(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (o = this.ease),
                  (l = "ease"),
                  void 0 !== o && (l = o),
                  i in f ? i : l)),
                (this.delay = d(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = v.test(this.name)),
                (this.unit = n.unit || this.unit || Y.defaultUnit),
                (this.angle = n.angle || this.angle || Y.defaultAngle),
                Y.fallback || n.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + f[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var a =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == a && (a = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new B({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return Q(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var a,
                  i,
                  d = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case y:
                    if (d) return e;
                    if (l && "" === e.replace(I, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case g:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? n(a[1], a[2], a[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case b:
                    if (d) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case m:
                    if (d) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (d) return e + this.angle;
                    if (l && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case _:
                    if (d || (l && m.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          k = s(P, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), g));
            };
          }),
          w = s(P, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          F = s(P, function (e, t) {
            function a(e, t) {
              var a, n, i, d, o;
              for (a in e)
                (i = (d = j[a])[0]),
                  (n = d[1] || a),
                  (o = this.convert(e[a], i)),
                  t.call(this, n, o, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  j.perspective &&
                    Y.perspective &&
                    ((this.current.perspective = Y.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var a,
                  n = {};
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                (this.active = !0), (this.nextStyle = this.style(n));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  a = "";
                for (t in e) a += t + "(" + e[t] + ") ";
                return a;
              }),
              (e.values = function (e) {
                var t,
                  n = {};
                return (
                  a.call(this, e, function (e, a, i) {
                    (n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  n
                );
              });
          }),
          B = s(function (t) {
            function d() {
              var e,
                t,
                a,
                n = c.length;
              if (n)
                for (V(d), t = G(), e = n; e--; ) (a = c[e]) && a.render(t);
            }
            var l = { ease: f.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || l.ease;
              f[t] && (t = f[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var a = e.from,
                n = e.to;
              void 0 === a && (a = l.from),
                void 0 === n && (n = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof a && "number" == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = G()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = G()),
                  (this.active = !0),
                  1 === c.push(this) && V(d));
              }),
              (t.stop = function () {
                var t, a;
                this.active &&
                  ((this.active = !1),
                  (a = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(a + 1)),
                    (c.length = a),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start;
                if (this.delay) {
                  if (a <= this.delay) return;
                  a -= this.delay;
                }
                if (a < this.duration) {
                  var i,
                    d,
                    o = this.ease(a, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (d = this.endRGB),
                        n(
                          i[0] + o * (d[0] - i[0]),
                          i[1] + o * (d[1] - i[1]),
                          i[2] + o * (d[2] - i[2])
                        ))
                      : Math.round((this.begin + o * this.change) * r) / r),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var n = t.replace(I, "");
                  n !== e.replace(I, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = n);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var c = [],
              r = 1e3;
          }),
          D = s(B, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = s(B, function (e, t) {
            (e.init = function (e) {
              var t, a;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new B({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1;
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Y = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !h.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!h.transition) return (Y.fallback = !0);
          Y.agentTests.push("(" + e + ")");
          var t = RegExp(Y.agentTests.join("|"), "i");
          Y.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new B(e);
          }),
          (t.delay = function (e, t, a) {
            return new D({ complete: t, duration: e, context: a });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var W = e.style,
          Q = e.css,
          z = { transform: h.transform && h.transform.css },
          H = {
            color: [k, g],
            background: [k, g, "background-color"],
            "outline-color": [k, g],
            "border-color": [k, g],
            "border-top-color": [k, g],
            "border-right-color": [k, g],
            "border-bottom-color": [k, g],
            "border-left-color": [k, g],
            "border-width": [P, b],
            "border-top-width": [P, b],
            "border-right-width": [P, b],
            "border-bottom-width": [P, b],
            "border-left-width": [P, b],
            "border-spacing": [P, b],
            "letter-spacing": [P, b],
            margin: [P, b],
            "margin-top": [P, b],
            "margin-right": [P, b],
            "margin-bottom": [P, b],
            "margin-left": [P, b],
            padding: [P, b],
            "padding-top": [P, b],
            "padding-right": [P, b],
            "padding-bottom": [P, b],
            "padding-left": [P, b],
            "outline-width": [P, b],
            opacity: [P, y],
            top: [P, m],
            right: [P, m],
            bottom: [P, m],
            left: [P, m],
            "font-size": [P, m],
            "text-indent": [P, m],
            "word-spacing": [P, m],
            width: [P, m],
            "min-width": [P, m],
            "max-width": [P, m],
            height: [P, m],
            "min-height": [P, m],
            "max-height": [P, m],
            "line-height": [P, _],
            "scroll-top": [w, y, "scrollTop"],
            "scroll-left": [w, y, "scrollLeft"],
          },
          j = {};
        h.transform &&
          ((H.transform = [F]),
          (j = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          h.transform &&
            h.backface &&
            ((j.z = [m, "translateZ"]),
            (j.rotateZ = [O]),
            (j.scaleZ = [y]),
            (j.perspective = [b]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, a) {
      "use strict";
      var n,
        i,
        d,
        o,
        l,
        c,
        r,
        s,
        f,
        u,
        p,
        E,
        I,
        T,
        y,
        g,
        b,
        m,
        O,
        _,
        L = window.$,
        v = a(5487) && L.tram;
      ((n = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (d = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        d.push,
        (c = d.slice),
        d.concat,
        o.toString,
        (r = o.hasOwnProperty),
        (s = d.forEach),
        (f = d.map),
        d.reduce,
        d.reduceRight,
        (u = d.filter),
        d.every,
        (p = d.some),
        (E = d.indexOf),
        d.lastIndexOf,
        (I = Object.keys),
        l.bind,
        (T =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, a);
              else if (e.length === +e.length) {
                for (var d = 0, o = e.length; d < o; d++)
                  if (t.call(a, e[d], d, e) === i) return;
              } else
                for (var l = n.keys(e), d = 0, o = l.length; d < o; d++)
                  if (t.call(a, e[l[d]], l[d], e) === i) return;
              return e;
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : f && e.map === f
              ? e.map(t, a)
              : (T(e, function (e, i, d) {
                  n.push(t.call(a, e, i, d));
                }),
                n);
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n;
            return (
              y(e, function (e, i, d) {
                if (t.call(a, e, i, d)) return (n = e), !0;
              }),
              n
            );
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : u && e.filter === u
              ? e.filter(t, a)
              : (T(e, function (e, i, d) {
                  t.call(a, e, i, d) && n.push(e);
                }),
                n);
          }),
        (y =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity);
              var d = !1;
              return null == e
                ? d
                : p && e.some === p
                ? e.some(t, a)
                : (T(e, function (e, n, o) {
                    if (d || (d = t.call(a, e, n, o))) return i;
                  }),
                  !!d);
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (n.delay = function (e, t) {
          var a = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, a);
          }, t);
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(c.call(arguments, 1)));
        }),
        (n.throttle = function (e) {
          var t, a, n;
          return function () {
            t ||
              ((t = !0),
              (a = arguments),
              (n = this),
              v.frame(function () {
                (t = !1), e.apply(n, a);
              }));
          };
        }),
        (n.debounce = function (e, t, a) {
          var i,
            d,
            o,
            l,
            c,
            r = function () {
              var s = n.now() - l;
              s < t
                ? (i = setTimeout(r, t - s))
                : ((i = null), a || ((c = e.apply(o, d)), (o = d = null)));
            };
          return function () {
            (o = this), (d = arguments), (l = n.now());
            var s = a && !i;
            return (
              i || (i = setTimeout(r, t)),
              s && ((c = e.apply(o, d)), (o = d = null)),
              c
            );
          };
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e;
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t];
            for (var d in i) void 0 === e[d] && (e[d] = i[d]);
          }
          return e;
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var a in e) n.has(e, a) && t.push(a);
          return t;
        }),
        (n.has = function (e, t) {
          return r.call(e, t);
        }),
        (n.isObject = function (e) {
          return e === Object(e);
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (g = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (_ = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a);
          var i,
            d = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || g)
                  .source,
                (t.interpolate || g).source,
                (t.evaluate || g).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            l = "__p+='";
          e.replace(d, function (t, a, n, i, d) {
            return (
              (l += e.slice(o, d).replace(m, O)),
              (o = d + t.length),
              a
                ? (l += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (l += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (l += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (l += "';\n");
          var c = t.variable;
          if (c) {
            if (!_.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else (l = "with(obj||{}){\n" + l + "}\n"), (c = "obj");
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var r = function (e) {
            return i.call(this, e, n);
          };
          return (r.source = "function(" + c + "){\n" + l + "}"), r;
        }),
        (e.exports = n);
    },
    9461: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "brand",
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            d = e("html"),
            o = e("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            r =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", a ? "display: none !important;" : "");
          }
          
          
         
        })
      );
    },
    322: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "edit",
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env("test") || n.env("frame")) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            d = e(window),
            o = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            r =
              a.load ||
              function () {
                var t, a, n;
                (i = !0),
                  (window.WebflowEditor = !0),
                  d.off(c, f),
                  (t = function (t) {
                    var a;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((a = t),
                        function (t) {
                          var n, i, d;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = a),
                            (i =
                              (n = t.scriptPath).indexOf("//") >= 0
                                ? n
                                : p("https://editor-api.webflow.com" + n)),
                            (d = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(d, u);
                        }),
                    });
                  }),
                  ((a = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (a.style.display = "none"),
                  (a.sandbox = "allow-scripts allow-same-origin"),
                  (n = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(a, n), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(a, n), t(!0));
                  }),
                  (a.onerror = function () {
                    E(a, n), t(!1);
                  }),
                  window.addEventListener("message", n, !1),
                  window.document.body.appendChild(a);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function f() {
            !i && /\?edit/.test(l.hash) && r();
          }
          function u(e, t, a) {
            throw (console.error("Could not load editor script: " + t), a);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? r()
              : l.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                  /\?edit$/.test(l.href)) &&
                r()
              : d.on(c, f).triggerHandler(c),
            {}
          );
        })
      );
    },
    2338: function (e, t, a) {
      "use strict";
      a(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
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
                        "datetime-local": !0,
                      };
                    function d(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener("mousemove", r),
                        document.addEventListener("mousedown", r),
                        document.addEventListener("mouseup", r),
                        document.addEventListener("pointermove", r),
                        document.addEventListener("pointerdown", r),
                        document.addEventListener("pointerup", r),
                        document.addEventListener("touchmove", r),
                        document.addEventListener("touchstart", r),
                        document.addEventListener("touchend", r);
                    }
                    function r(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", r),
                        document.removeEventListener("mousedown", r),
                        document.removeEventListener("mouseup", r),
                        document.removeEventListener("pointermove", r),
                        document.removeEventListener("pointerdown", r),
                        document.removeEventListener("pointerup", r),
                        document.removeEventListener("touchmove", r),
                        document.removeEventListener("touchstart", r),
                        document.removeEventListener("touchend", r));
                    }
                    document.addEventListener(
                      "keydown",
                      function (a) {
                        a.metaKey ||
                          a.altKey ||
                          a.ctrlKey ||
                          (d(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (a && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (d(e.target)) {
                            var a, n, l;
                            (t ||
                              ((n = (a = e.target).type),
                              ("INPUT" === (l = a.tagName) &&
                                i[n] &&
                                !a.readOnly) ||
                                ("TEXTAREA" === l && !a.readOnly) ||
                                a.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            d(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function a(a) {
            t &&
              (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
          }
          function i(a) {
            var n, i;
            (i = (n = a.target).tagName),
              ((/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                n.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", a, !0),
                document.addEventListener("click", a, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        a = {},
        n = [],
        i = ".w-ix",
        d = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            n.__wf_intro ||
              ((n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO));
          },
          outro: function (e, n) {
            n.__wf_intro &&
              ((n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO));
          },
        };
      (a.triggers = {}),
        (a.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var o = n[i];
            o[0](0, o[1]);
          }
          (n = []), t.extend(a.triggers, d);
        }),
        (a.async = function () {
          for (var e in d) {
            var t = d[e];
            d.hasOwnProperty(e) &&
              (a.triggers[e] = function (e, a) {
                n.push([t, a]);
              });
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      "use strict";
      var n = a(7199);
      function i(e, t) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var d = window.jQuery,
        o = {},
        l = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        d.extend(o.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, a) {
      "use strict";
      var n,
        i,
        d = {},
        o = {},
        l = [],
        c = window.Webflow || [],
        r = window.jQuery,
        s = r(window),
        f = r(document),
        u = r.isFunction,
        p = (d._ = a(5756)),
        E = (d.tram = a(5487) && r.tram),
        I = !1,
        T = !1;
      function y(e) {
        d.env() &&
          (u(e.design) && s.on("__wf_design", e.design),
          u(e.preview) && s.on("__wf_preview", e.preview)),
          u(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            (function (e) {
              if (I) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e);
      }
      function g(e) {
        var t;
        u(e.design) && s.off("__wf_design", e.design),
          u(e.preview) && s.off("__wf_preview", e.preview),
          u(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (d.define = function (e, t, a) {
          o[e] && g(o[e]);
          var n = (o[e] = t(r, p, a) || {});
          return y(n), n;
        }),
        (d.require = function (e) {
          return o[e];
        }),
        (d.push = function (e) {
          if (I) {
            u(e) && e();
            return;
          }
          c.push(e);
        }),
        (d.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t;
          return e
            ? "design" === e
              ? a && t
              : "preview" === e
              ? a && !t
              : "slug" === e
              ? a && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : a;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (d.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (d.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        _ = (d.env.ios = /(ipod|iphone|ipad)/.test(b));
      (d.env.safari = /safari/.test(b) && !O && !_),
        m &&
          f.on("touchstart mousedown", function (e) {
            n = e.target;
          }),
        (d.validClick = m
          ? function (e) {
              return e === n || r.contains(e, n);
            }
          : function () {
              return !0;
            });
      var L = "resize.webflow orientationchange.webflow load.webflow",
        v = "scroll.webflow " + L;
      function R(e, t) {
        var a = [],
          n = {};
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            "function" == typeof e && (p.contains(a, e) || a.push(e));
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = [];
              return;
            }
            a = p.filter(a, function (t) {
              return t !== e;
            });
          }),
          n
        );
      }
      function N(e) {
        u(e) && e();
      }
      function A() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new r.Deferred()),
          s.on("load", i.resolve);
      }
      (d.resize = R(s, L)),
        (d.scroll = R(s, v)),
        (d.redraw = R()),
        (d.location = function (e) {
          window.location = e;
        }),
        d.env() && (d.location = function () {}),
        (d.ready = function () {
          (I = !0),
            T ? ((T = !1), p.each(o, y)) : p.each(l, N),
            p.each(c, N),
            d.resize.up();
        }),
        (d.load = function (e) {
          i.then(e);
        }),
        (d.destroy = function (e) {
          (e = e || {}),
            (T = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(o, g),
            d.resize.off(),
            d.scroll.off(),
            d.redraw.off(),
            (l = []),
            (c = []),
            "pending" === i.state() && A();
        }),
        r(d.ready),
        A(),
        (e.exports = window.Webflow = d);
    },
    7624: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "links",
        (e.exports = function (e, t) {
          var a,
            i,
            d,
            o = {},
            l = e(window),
            c = n.env(),
            r = window.location,
            s = document.createElement("a"),
            f = "w--current",
            u = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = l.scrollTop(),
              a = l.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var n = t.link,
                  i = t.sec,
                  d = i.offset().top,
                  o = i.outerHeight(),
                  l = 0.5 * a,
                  c = i.is(":visible") && d + o - l >= e && d + l <= e + a;
                t.active !== c && ((t.active = c), I(n, f, c));
              }
            });
          }
          function I(e, t, a) {
            var n = e.hasClass(t);
            (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (a = c && n.env("design")),
                    (d = n.env("slug") || r.pathname || ""),
                    n.scroll.off(E),
                    (i = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var n =
                          (a && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = n), !(n.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === r.host + r.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var l = e(s.hash);
                            l.length && i.push({ link: o, sec: l, active: !1 });
                            return;
                          }
                          "#" !== n &&
                            "" !== n &&
                            I(
                              o,
                              f,
                              s.href === r.href ||
                                n === d ||
                                (u.test(n) && p.test(d))
                            );
                        }
                      }
                    })(t[o]);
                  i.length && (n.scroll.on(E), E());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            a = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            d = e(window),
            o = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            r = n.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              r +
              " > .header, " +
              r +
              " > .w-nav:not([data-no-scroll])",
            f = 'a[href="#"]',
            u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function T(e, t) {
            var a;
            switch (t) {
              case "add":
                (a = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", a)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (a = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", a),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var o = t.currentTarget;
            if (
              !(
                n.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var r =
                E.test(o.hash) && o.host + o.pathname === a.host + a.pathname
                  ? o.hash
                  : "";
              if ("" !== r) {
                var f,
                  u = e(r);
                u.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (f = r),
                  a.hash !== f &&
                    i &&
                    i.pushState &&
                    !(n.env.chrome && "file:" === a.protocol) &&
                    (i.state && i.state.hash) !== f &&
                    i.pushState({ hash: f }, "", f),
                  window.setTimeout(function () {
                    !(function (t, a) {
                      var n = d.scrollTop(),
                        i = (function (t) {
                          var a = e(s),
                            n =
                              "fixed" === a.css("position")
                                ? a.outerHeight()
                                : 0,
                            i = t.offset().top - n;
                          if ("mid" === t.data("scroll")) {
                            var o = d.height() - n,
                              l = t.outerHeight();
                            l < o && (i -= Math.round((o - l) / 2));
                          }
                          return i;
                        })(t);
                      if (n !== i) {
                        var o = (function (e, t, a) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              I.matches
                            )
                              return 0;
                            var n = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var a = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(a) && a >= 0 && (n = a);
                              }),
                              (472.143 * Math.log(Math.abs(t - a) + 125) -
                                2e3) *
                                n
                            );
                          })(t, n, i),
                          r = Date.now(),
                          f = function () {
                            var e,
                              t,
                              d,
                              l,
                              s,
                              u = Date.now() - r;
                            window.scroll(
                              0,
                              ((e = n),
                              (t = i),
                              (d = u) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = d / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              u <= o ? c(f) : "function" == typeof a && a();
                          };
                        c(f);
                      }
                    })(u, function () {
                      T(u, "add"),
                        u.get(0).focus({ preventScroll: !0 }),
                        T(u, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t;
              o.on(a, u, y),
                o.on(e, f, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, a) {
      "use strict";
      a(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection;
          function n(t) {
            var n,
              i,
              d = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((d = !0),
                t ? ((o = !0), (n = t[0].clientX)) : (n = e.clientX),
                (i = n));
            }
            function r(t) {
              if (d) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var n,
                  c,
                  r,
                  s,
                  u = t.touches,
                  p = u ? u[0].clientX : t.clientX,
                  E = p - i;
                (i = p),
                  Math.abs(E) > l &&
                    a &&
                    "" === String(a()) &&
                    ((n = "swipe"),
                    (c = t),
                    (r = { direction: E > 0 ? "right" : "left" }),
                    (s = e.Event(n, { originalEvent: c })),
                    e(c.target).trigger(s, r),
                    f());
              }
            }
            function s(e) {
              if (d && ((d = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function f() {
              d = !1;
            }
            t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", r, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", f, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", r, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", f, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", r, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", f, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", r, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", f, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new n(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    3946: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        actionListPlaybackChanged: function () {
          return Q;
        },
        animationFrameChanged: function () {
          return F;
        },
        clearRequested: function () {
          return U;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return P;
        },
        eventStateChanged: function () {
          return w;
        },
        instanceAdded: function () {
          return D;
        },
        instanceRemoved: function () {
          return Y;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return H;
        },
        parameterChanged: function () {
          return B;
        },
        playbackRequested: function () {
          return G;
        },
        previewRequested: function () {
          return V;
        },
        rawDataImported: function () {
          return S;
        },
        sessionInitialized: function () {
          return h;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return M;
        },
        stopRequested: function () {
          return x;
        },
        testFrameRendered: function () {
          return k;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = a(7087),
        o = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: r,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: f,
          IX2_PLAYBACK_REQUESTED: u,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: g,
          IX2_PARAMETER_CHANGED: b,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: _,
          IX2_ELEMENT_STATE_CHANGED: L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = d.IX2EngineActionTypes,
        { reifyState: A } = o.IX2VanillaUtils,
        S = (e) => ({ type: l, payload: { ...A(e) } }),
        h = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: r }),
        M = () => ({ type: s }),
        V = ({ rawData: e, defer: t }) => ({
          type: f,
          payload: { defer: t, rawData: e },
        }),
        G = ({
          actionTypeId: e = d.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: l,
          verbose: c,
          rawData: r,
        }) => ({
          type: u,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: l,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: c,
            rawData: r,
          },
        }),
        x = (e) => ({ type: p, payload: { actionListId: e } }),
        U = () => ({ type: E }),
        P = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        k = (e = 1) => ({ type: T, payload: { step: e } }),
        w = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        F = (e, t) => ({ type: g, payload: { now: e, parameters: t } }),
        B = (e, t) => ({ type: b, payload: { key: e, value: t } }),
        D = (e) => ({ type: m, payload: { ...e } }),
        X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        Y = (e) => ({ type: _, payload: { instanceId: e } }),
        W = (e, t, a, n) => ({
          type: L,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n },
        }),
        Q = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        H = () => ({ type: N });
    },
    6011: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          actions: function () {
            return r;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return u;
          },
          store: function () {
            return f;
          },
        };
      for (var d in i)
        Object.defineProperty(t, d, { enumerable: !0, get: i[d] });
      let o = a(9516),
        l = (n = a(7243)) && n.__esModule ? n : { default: n },
        c = a(1970),
        r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = s(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, d, o)
                : (n[d] = e[d]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (s = function (e) {
          return e ? a : t;
        })(e);
      }
      let f = (0, o.createStore)(l.default);
      function u(e) {
        e() && (0, c.observeRequests)(f);
      }
      function p(e) {
        E(), (0, c.startEngine)({ store: f, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, c.stopEngine)(f);
      }
    },
    5012: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        elementContains: function () {
          return b;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return L;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return _;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return m;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return g;
        },
        setStyle: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = a(9468),
        o = a(7087),
        { ELEMENT_MATCHES: l } = d.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: r,
          PLAIN_OBJECT: s,
          WF_PAGE: f,
        } = o.IX2EngineConstants;
      function u(e, t, a) {
        e.style[t] = a;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[l](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let a = e.split(c),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(f)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(f)
          ? document
          : null;
      }
      function g(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function b(e, t) {
        return e.contains(t);
      }
      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }
      function _(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue;
          a.push(i);
          let d = i.firstElementChild;
          for (; null != d; )
            -1 === e.indexOf(d) && t.push(d), (d = d.nextElementSibling);
        }
        return t;
      }
      let L = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[l] && a[l](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? r
            : s
          : null;
      }
    },
    1970: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return en;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return eu;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = g(a(9777)),
        o = g(a(4738)),
        l = g(a(4659)),
        c = g(a(3452)),
        r = g(a(6633)),
        s = g(a(3729)),
        f = g(a(2397)),
        u = g(a(5082)),
        p = a(7087),
        E = a(9468),
        I = a(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = b(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, d, o)
                : (n[d] = e[d]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        y = g(a(8955));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (b = function (e) {
          return e ? a : t;
        })(e);
      }
      let m = Object.keys(p.QuickEffectIds),
        O = (e) => m.includes(e),
        {
          COLON_DELIMITER: _,
          BOUNDARY_SELECTOR: L,
          HTML_ELEMENT: v,
          RENDER_GENERAL: R,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: A,
          getElementId: S,
          getDestinationValues: h,
          observeStore: C,
          getInstanceId: M,
          renderHTMLElement: V,
          clearAllStyles: G,
          getMaxDurationItemIndex: x,
          getComputedStyle: U,
          getInstanceOrigin: P,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: w,
          getNamespacedParameterId: F,
          shouldAllowMediaQuery: B,
          cleanupHTMLElement: D,
          clearObjectCache: X,
          stringifyTarget: Y,
          mediaQueriesEqual: W,
          shallowEqual: Q,
        } = E.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: H,
          getPluginDuration: j,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ea });
      }
      function Z({ rawData: e, defer: t }, a) {
        let n = () => {
          en({ store: a, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(n, 0) : n();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: d,
            allowEvents: o,
            immediate: l,
            testManual: c,
            verbose: r = !0,
          } = e,
          { rawData: s } = e;
        if (n && i && s && l) {
          let e = s.actionLists[n];
          e && (s = k({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (en({ store: t, rawData: s, allowEvents: o, testManual: c }),
          (n && a === p.ActionTypeConsts.GENERAL_START_ACTION) || O(a))
        ) {
          ep({ store: t, actionListId: n }),
            ef({ store: t, actionListId: n, eventId: d });
          let e = eE({
            store: t,
            eventId: d,
            actionListId: n,
            immediate: l,
            verbose: r,
          });
          r &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !l,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : eu({ store: t }), ei(t);
      }
      function ea(e, t) {
        ei(t), G({ store: t, elementApi: T });
      }
      function en({ store: e, rawData: t, allowEvents: a, testManual: n }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(L),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          a) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: a } = t;
              el(e),
                (0, f.default)(a, (t, a) => {
                  let n = y.default[a];
                  if (!n)
                    return void console.warn(
                      `IX2 event type not configured: ${a}`
                    );
                  !(function ({ logic: e, store: t, events: a }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        a = "";
                      for (let n in e) {
                        let { eventTypeId: i, target: d } = e[n],
                          o = T.getQuerySelector(d);
                        t[o] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (a +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (a) {
                        let e = document.createElement("style");
                        (e.textContent = a), document.body.appendChild(e);
                      }
                    })(a);
                    let { types: n, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: r } = c,
                      s = ec(a, es);
                    if (!(0, l.default)(s)) return;
                    (0, f.default)(s, (e, n) => {
                      let i = a[n],
                        {
                          action: l,
                          id: s,
                          mediaQueries: f = c.mediaQueryKeys,
                        } = i,
                        { actionListId: u } = l.config;
                      W(f, c.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((a) => {
                            let { continuousParameterGroupId: n } = a,
                              i = (0, o.default)(
                                r,
                                `${u}.continuousParameterGroups`,
                                []
                              ),
                              l = (0, d.default)(i, ({ id: e }) => e === n),
                              c = (a.smoothing || 0) / 100,
                              f = (a.restingState || 0) / 100;
                            l &&
                              e.forEach((e, n) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: a,
                                  eventId: n,
                                  eventConfig: i,
                                  actionListId: d,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: r,
                                }) {
                                  let { ixData: s, ixSession: f } =
                                      e.getState(),
                                    { events: u } = s,
                                    E = u[n],
                                    { eventTypeId: I } = E,
                                    y = {},
                                    g = {},
                                    b = [],
                                    { continuousActionGroups: m } = l,
                                    { id: O } = l;
                                  w(I, i) && (O = F(t, O));
                                  let v =
                                    f.hasBoundaryNodes && a
                                      ? T.getClosestElement(a, L)
                                      : null;
                                  m.forEach((e) => {
                                    let { keyframe: t, actionItems: n } = e;
                                    n.forEach((e) => {
                                      let { actionTypeId: n } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let d = i.boundaryMode ? v : null,
                                        o = Y(i) + _ + n;
                                      if (
                                        ((g[o] = (function (e = [], t, a) {
                                          let n,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, a) =>
                                                e.keyframe === t &&
                                                ((n = a), !0)
                                            ),
                                            null == n &&
                                              ((n = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[n].actionItems.push(a),
                                            i
                                          );
                                        })(g[o], t, e)),
                                        !y[o])
                                      ) {
                                        y[o] = !0;
                                        let { config: t } = e;
                                        A({
                                          config: t,
                                          event: E,
                                          eventTarget: a,
                                          elementRoot: d,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          b.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    b.forEach(({ element: t, key: a }) => {
                                      let i = g[a],
                                        l = (0, o.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = l,
                                        f = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(s)
                                        )
                                          ? H(s)?.(t, l)
                                          : null,
                                        u = h(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: T,
                                          },
                                          f
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: n,
                                        actionListId: d,
                                        actionItem: l,
                                        destination: u,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: r,
                                        pluginInstance: f,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + _ + n,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: a,
                                  actionListId: u,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: f,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(l.actionTypeId)) &&
                          ef({ store: t, actionListId: u, eventId: s });
                    });
                    let E = (e) => {
                        let { ixSession: n } = t.getState();
                        er(s, (d, o, l) => {
                          let r = a[o],
                            s = n.eventState[l],
                            { action: f, mediaQueries: u = c.mediaQueryKeys } =
                              r;
                          if (!B(u, n.mediaQueryKey)) return;
                          let E = (a = {}) => {
                            let n = i(
                              {
                                store: t,
                                element: d,
                                event: r,
                                eventConfig: a,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              s
                            );
                            Q(n, s) ||
                              t.dispatch((0, I.eventStateChanged)(l, n));
                          };
                          f.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(r.config)
                                ? r.config
                                : [r.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      y = (0, u.default)(E, 12),
                      g = ({ target: e = document, types: a, throttle: n }) => {
                        a.split(" ")
                          .filter(Boolean)
                          .forEach((a) => {
                            let i = n ? y : E;
                            e.addEventListener(a, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [a, i]));
                          });
                      };
                    Array.isArray(n)
                      ? n.forEach(g)
                      : "string" == typeof n && g(e);
                  })({ logic: n, store: e, events: t });
                });
              let { ixSession: n } = e.getState();
              n.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  eo.forEach((a) => {
                    window.addEventListener(a, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [a, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    G({ store: e, elementApi: T }),
                    en({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: d } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(n, d)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        a(e), t();
                      },
                    });
                  } else requestAnimationFrame(a);
              };
              a(window.performance.now());
            })(e, n);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(ed), X(), e.dispatch((0, I.sessionStopped)());
        }
      }
      function ed({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: n, mediaQueries: t })
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, s.default)(e, t), r.default),
        er = (e, t) => {
          (0, f.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + _ + n);
            });
          });
        },
        es = (e) =>
          A({
            config: { target: e.target, targets: e.targets },
            elementApi: T,
          });
      function ef({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: i } = e.getState(),
          { actionLists: d, events: l } = n,
          c = l[a],
          r = d[t];
        if (r && r.useFirstGroupAsInitialState) {
          let d = (0, o.default)(r, "actionItemGroups[0].actionItems", []);
          if (
            !B(
              (0, o.default)(c, "mediaQueries", n.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          d.forEach((n) => {
            let { config: i, actionTypeId: d } = n,
              o = A({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: T,
              }),
              l = z(d);
            o.forEach((i) => {
              let o = l ? H(d)?.(i, n) : null;
              eI({
                destination: h({ element: i, actionItem: n, elementApi: T }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function eu({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, f.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eT(t, e),
              n &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
      }) {
        let { ixInstances: d, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
        (0, f.default)(d, (a) => {
          let d = (0, o.default)(a, "actionItem.config.target.boundaryMode"),
            l = !n || a.eventStateKey === n;
          if (a.actionListId === i && a.eventId === t && l) {
            if (c && d && !T.elementContains(c, a.element)) return;
            eT(a, e),
              a.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
        groupIndex: d = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: r, ixSession: s } = e.getState(),
          { events: f } = r,
          u = f[t] || {},
          { mediaQueries: p = r.mediaQueryKeys } = u,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          o.default)(r, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        d >= E.length && (0, o.default)(u, "config.loop") && (d = 0),
          0 === d && I && d++;
        let y =
            (0 === d || (1 === d && I)) && O(u.action?.actionTypeId)
              ? u.config.delay
              : void 0,
          g = (0, o.default)(E, [d, "actionItems"], []);
        if (!g.length || !B(p, s.mediaQueryKey)) return !1;
        let b = s.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null,
          m = x(g),
          _ = !1;
        return (
          g.forEach((o, r) => {
            let { config: s, actionTypeId: f } = o,
              p = z(f),
              { target: E } = s;
            E &&
              A({
                config: s,
                event: u,
                eventTarget: a,
                elementRoot: E.boundaryMode ? b : null,
                elementApi: T,
              }).forEach((s, u) => {
                let E = p ? H(f)?.(s, o) : null,
                  I = p ? j(f)(s, o) : null;
                _ = !0;
                let g = U({ element: s, actionItem: o }),
                  b = h({ element: s, actionItem: o, elementApi: T }, E);
                eI({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: d,
                  isCarrier: m === r && 0 === u,
                  computedStyle: g,
                  destination: b,
                  immediate: l,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: y,
                });
              });
          }),
          _
        );
      }
      function eI(e) {
        let t,
          { store: a, computedStyle: n, ...i } = e,
          {
            element: d,
            actionItem: o,
            immediate: l,
            pluginInstance: c,
            continuous: r,
            restingValue: s,
            eventId: f,
          } = i,
          u = M(),
          { ixElements: E, ixSession: y, ixData: g } = a.getState(),
          b = S(E, d),
          { refState: m } = E[b] || {},
          O = T.getRefType(d),
          _ = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (_ && r)
          switch (g.events[f]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let L = P(d, m, n, o, T, c);
        if (
          (a.dispatch(
            (0, I.instanceAdded)({
              instanceId: u,
              elementId: b,
              origin: L,
              refType: O,
              skipMotion: _,
              skipToValue: t,
              ...i,
            })
          ),
          ey(document.body, "ix2-animation-started", u),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            eg(n[t], e);
          })(a, u);
        C({ store: a, select: ({ ixInstances: e }) => e[u], onChange: eg }),
          r || a.dispatch((0, I.instanceStarted)(u, y.tick));
      }
      function eT(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: d, refType: o } = i[a] || {};
        o === v && D(d, n, T), t.dispatch((0, I.instanceRemoved)(e.id));
      }
      function ey(e, t, a) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }
      function eg(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: d,
            actionItem: o,
            actionTypeId: l,
            renderType: c,
            current: r,
            groupIndex: s,
            eventId: f,
            eventTarget: u,
            eventStateKey: p,
            actionListId: E,
            isCarrier: y,
            styleProp: g,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: _ } = t.getState(),
          { events: L } = O,
          { mediaQueries: N = O.mediaQueryKeys } = L && L[f] ? L[f] : {};
        if (B(N, _.mediaQueryKey) && (n || a || i)) {
          if (r || (c === R && i)) {
            t.dispatch((0, I.elementStateChanged)(d, l, r, o));
            let { ixElements: e } = t.getState(),
              { ref: a, refType: n, refState: i } = e[d] || {},
              s = i && i[l];
            (n === v || z(l)) && V(a, i, s, f, o, g, T, c, m);
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: f,
                eventTarget: u,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: b,
              });
              b &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, a) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = f(a(5801)),
        d = f(a(4738)),
        o = f(a(3789)),
        l = a(7087),
        c = a(1970),
        r = a(3946),
        s = a(9468);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: u,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: T,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: g,
          DROPDOWN_OPEN: b,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: _,
          TAB_INACTIVE: L,
          NAVBAR_CLOSE: v,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: A,
          SCROLL_INTO_VIEW: S,
          SCROLL_OUT_OF_VIEW: h,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: M,
          PAGE_FINISH: V,
          ECOMMERCE_CART_CLOSE: G,
          ECOMMERCE_CART_OPEN: x,
          PAGE_START: U,
          PAGE_SCROLL: P,
        } = l.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        w = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: F } = l.IX2EngineConstants,
        { getNamespacedParameterId: B } = s.IX2VanillaUtils,
        D = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = D(({ element: e, nativeEvent: t }) => e === t.target),
        Y = D(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, i.default)([X, Y]),
        Q = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!Q(e, n);
        },
        H = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: o, id: l } = t,
            { actionListId: r, autoStopEventId: s } = o.config,
            f = Q(e, s);
          return (
            f &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: a,
                eventStateKey: s + F + n.split(F)[1],
                actionListId: (0, d.default)(f, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r,
            }),
            i
          );
        },
        j = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        $ = { handler: j(W, H) },
        q = { ...$, types: [k, w].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: U, PAGE_FINISH: V },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ea = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        en = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            d = e.contains(n);
          if ("mouseover" === a && d) return !0;
          let o = e.contains(i);
          return "mouseout" === a && !!d && !!o;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = et(),
            d = a.scrollOffsetValue,
            o = "PX" === a.scrollOffsetUnit ? d : (i * (d || 0)) / 100;
          return ea(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: n,
            bottom: i - o,
          });
        },
        ed = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [k, w].indexOf(n) ? n === k : a.isActive,
            d = { ...a, isActive: i };
          return ((!a || d.isActive !== a.isActive) && e(t, d)) || d;
        },
        eo = (e) => (t, a) => {
          let n = { elementHovered: en(t) };
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        },
        el =
          (e) =>
          (t, a = {}) => {
            let n,
              i,
              { stiffScrollTop: d, scrollHeight: o, innerHeight: l } = et(),
              {
                event: { config: c, eventTypeId: r },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: f } = c,
              u = o - l,
              p = Number((d / u).toFixed(2));
            if (a && a.percentTop === p) return a;
            let E = ("PX" === f ? s : (l * (s || 0)) / 100) / u,
              I = 0;
            a &&
              ((n = p > a.percentTop),
              (I = (i = a.scrollingDown !== n) ? p : a.anchorTop));
            let T = r === A ? p >= I + E : p <= I - E,
              y = {
                ...a,
                percentTop: p,
                inBounds: T,
                anchorTop: I,
                scrollingDown: n,
              };
            return (a && T && (i || y.inBounds !== a.inBounds) && e(t, y)) || y;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        er =
          (e) =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        es = (e = !0) => ({
          ...q,
          handler: j(
            e ? W : X,
            ed((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        ef = (e = !0) => ({
          ...q,
          handler: j(
            e ? W : X,
            ed((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        eu = {
          ...J,
          handler:
            ((n = (e, t) => {
              let { elementVisible: a } = t,
                { event: n, store: i } = e,
                { ixData: d } = i.getState(),
                { events: o } = d;
              return !o[n.action.config.autoStopEventId] && t.triggered
                ? t
                : (n.eventTypeId === S) === a
                ? (H(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let a = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? a.elementVisible !== t.elementVisible
                  : a.elementVisible) &&
                  n(e, a)) ||
                a
              );
            }),
        },
        ep = {
          [m]: es(),
          [O]: ef(),
          [b]: es(),
          [g]: ef(),
          [R]: es(!1),
          [v]: ef(!1),
          [_]: es(),
          [L]: ef(),
          [x]: { types: "ecommerce-cart-open", handler: j(W, H) },
          [G]: { types: "ecommerce-cart-close", handler: j(W, H) },
          [u]: {
            types: "click",
            handler: j(
              W,
              er((e, { clickCount: t }) => {
                z(e) ? 1 === t && H(e) : H(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: j(
              W,
              er((e, { clickCount: t }) => {
                2 === t && H(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [I]: { ...$, types: "mouseup" },
          [T]: {
            types: Z,
            handler: j(
              W,
              eo((e, t) => {
                t.elementHovered && H(e);
              })
            ),
          },
          [y]: {
            types: Z,
            handler: j(
              W,
              eo((e, t) => {
                t.elementHovered || H(e);
              })
            ),
          },
          [N]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: a,
                nativeEvent: n,
                eventStateKey: i,
              },
              d = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: c,
                  continuousParameterGroupId: s,
                  reverse: f,
                  restingState: u = 0,
                } = a,
                {
                  clientX: p = d.clientX,
                  clientY: E = d.clientY,
                  pageX: I = d.pageX,
                  pageY: T = d.pageY,
                } = n,
                y = "X_AXIS" === c,
                g = "mouseout" === n.type,
                b = u / 100,
                m = s,
                O = !1;
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  b = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: a,
                    scrollHeight: n,
                  } = et();
                  b = y ? Math.min(e + I, a) / a : Math.min(t + T, n) / n;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  m = B(i, s);
                  let e = 0 === n.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: n })) break;
                  let a = t.getBoundingClientRect(),
                    { left: d, top: o, width: l, height: c } = a;
                  if (!e && !ec({ left: p, top: E }, a)) break;
                  (O = !0), (b = y ? (p - d) / l : (E - o) / c);
                }
              }
              return (
                g && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                (o !== l.EventBasedOn.ELEMENT || O || O !== d.elementHovered) &&
                  ((b = f ? 1 - b : b),
                  e.dispatch((0, r.parameterChanged)(m, b))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: T,
                }
              );
            },
          },
          [P]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: a, reverse: n } = t,
                { scrollTop: i, scrollHeight: d, clientHeight: o } = et(),
                l = i / (d - o);
              (l = n ? 1 - l : l), e.dispatch((0, r.parameterChanged)(a, l));
            },
          },
          [M]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: a, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: d,
                  scrollTop: o,
                  scrollWidth: c,
                  scrollHeight: s,
                  clientHeight: f,
                } = et(),
                {
                  basedOn: u,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: g,
                  addOffsetValue: b = 0,
                  endOffsetValue: m = 0,
                } = a;
              if (u === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? d / c : o / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, r.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let a = B(n, E),
                  d = e.getBoundingClientRect(),
                  o = (g ? b : 0) / 100,
                  l = (y ? m : 0) / 100;
                (o = I ? o : 1 - o), (l = T ? l : 1 - l);
                let c = d.top + Math.min(d.height * o, f),
                  u = Math.min(f + (d.top + d.height * l - c), s),
                  p = Math.min(Math.max(0, f - c), u) / u;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, r.parameterChanged)(a, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [S]: eu,
          [h]: eu,
          [A]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && H(e);
            }),
          },
          [C]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || H(e);
            }),
          },
          [V]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: j(X, (e, t) => {
              let a = { finished: "complete" === document.readyState };
              return a.finished && !(t && t.finshed) && H(e), a;
            }),
          },
          [U]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: j(X, (e, t) => (t || H(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === n ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let n = a(7087),
        i = a(9468),
        d = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: r,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: f,
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: u,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = n.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: y,
          getStyleProp: g,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let a,
            n,
            i,
            o,
            {
              position: l,
              parameterId: c,
              actionGroups: r,
              destinationKeys: s,
              smoothing: f,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: g,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - f, 0.01),
            _ = m[c];
          null == _ && ((O = 1), (_ = E));
          let L = u((Math.max(_, 0) || 0) - l),
            v = g ? b : u(l + L * O),
            R = 100 * v;
          if (v === l && e.current) return e;
          for (let e = 0, { length: t } = r; e < t; e++) {
            let { keyframe: t, actionItems: d } = r[e];
            if ((0 === e && (a = d[0]), R >= t)) {
              a = d[0];
              let l = r[e + 1],
                c = l && R !== t;
              (n = c ? l.actionItems[0] : null),
                c && ((i = t / 100), (o = (l.keyframe - t) / 100));
            }
          }
          let N = {};
          if (a && !n)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              N[t] = T(I, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== o) {
            let e = (v - i) / o,
              t = p(a.config.easing, e, y);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                d = T(I, i, a.config),
                o = (T(I, i, n.config) - d) * t + d;
              N[i] = o;
            }
          }
          return (0, d.merge)(e, { position: v, current: N });
        },
        m = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: o,
              renderType: l,
              verbose: c,
              actionItem: r,
              destination: s,
              destinationKeys: f,
              pluginDuration: E,
              instanceDelay: T,
              customEasingFn: y,
              skipMotion: g,
            } = e,
            b = r.config.easing,
            { duration: m, delay: O } = r.config;
          null != E && (m = E),
            (O = null != T ? T : O),
            l === I ? (m = 0) : (o || g) && (m = O = 0);
          let { now: _ } = t.payload;
          if (a && n) {
            let t = _ - (i + O);
            if (c) {
              let t = m + O,
                a = u(Math.min(Math.max(0, (_ - i) / t), 1));
              e = (0, d.set)(e, "verboseTimeElapsed", t * a);
            }
            if (t < 0) return e;
            let a = u(Math.min(Math.max(0, t / m), 1)),
              o = p(b, a, y),
              l = {},
              r = null;
            return (
              f.length &&
                (r = f.reduce((e, t) => {
                  let a = s[t],
                    i = parseFloat(n[t]) || 0,
                    d = parseFloat(a) - i;
                  return (e[t] = d * o + i), e;
                }, {})),
              (l.current = r),
              (l.position = a),
              1 === a && ((l.active = !1), (l.complete = !0)),
              (0, d.merge)(e, l)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: r,
                  groupIndex: s,
                  isCarrier: f,
                  origin: u,
                  destination: p,
                  immediate: I,
                  verbose: T,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: _,
                  restingValue: L,
                  pluginInstance: v,
                  pluginDuration: R,
                  instanceDelay: N,
                  skipMotion: A,
                  skipToValue: S,
                } = t.payload,
                { actionTypeId: h } = i,
                C = y(h),
                M = g(C, h),
                V = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: G } = i.config;
              return (0, d.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: u,
                destination: p,
                destinationKeys: V,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: h,
                eventId: o,
                eventTarget: l,
                eventStateKey: c,
                actionListId: r,
                groupIndex: s,
                renderType: C,
                isCarrier: f,
                styleProp: M,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: _,
                restingValue: L,
                pluginInstance: v,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: A,
                skipToValue: S,
                customEasingFn:
                  Array.isArray(G) && 4 === G.length ? E(G) : void 0,
              });
            }
            case r: {
              let { instanceId: a, time: n } = t.payload;
              return (0, d.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case s: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: d } = i;
              for (let t = 0; t < d; t++) {
                let d = i[t];
                d !== a && (n[d] = e[d]);
              }
              return n;
            }
            case f: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let i = n[o],
                  l = e[i],
                  c = l.continuous ? b : m;
                a = (0, d.set)(a, i, c(l, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: d,
        } = a(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case d: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(9516),
        i = a(4609),
        d = a(628),
        o = a(5862),
        l = a(9468),
        c = a(7718),
        r = a(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        f = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: d.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: r.ixParameters,
        });
    },
    628: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = n.IX2EngineActionTypes,
        r = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [d]: { value: "preview" },
          [o]: { value: "playback" },
          [l]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        f = (e = r, t) => {
          if (t.type in s) {
            let a = [s[t.type]];
            return (0, i.setIn)(e, [a], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: r,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: f,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = n.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = I, t) => {
          switch (t.type) {
            case d: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n });
            }
            case o:
              return (0, i.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + a);
            }
            case c:
              return I;
            case f: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, "tick", a);
            }
            case r: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", a);
            }
            case s: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ["eventState", a], n);
            }
            case u: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ["playbackState", a], n);
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                d = n.length,
                o = null;
              for (let e = 0; e < d; e++) {
                let { key: t, min: i, max: d } = n[e];
                if (a >= i && a <= d) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: o });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return r;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => e.value,
        d = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute("data-duration"));
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        r = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "--wf-rive-fit",
        d = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        r = () => null,
        s = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        f = (e) => e.value.inputs ?? {},
        u = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? o(a) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, a) => {
          let n = l();
          if (!n) return;
          let o = n.getInstance(e),
            c = n.rive.StateMachineInputType,
            { name: r, inputs: s = {} } = a.config.value || {};
          function f(e) {
            if (e.loaded) a();
            else {
              let t = () => {
                a(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function a() {
              let a = e.stateMachineInputs(r);
              if (null != a) {
                if ((e.isPlaying || e.play(r, !1), i in s || d in s)) {
                  let t = e.layout,
                    a = s[i] ?? t.fit,
                    n = s[d] ?? t.alignment;
                  (a !== t.fit || n !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: a, alignment: n }));
                }
                for (let e in s) {
                  if (e === i || e === d) continue;
                  let n = a.find((t) => t.name === e);
                  if (null != n)
                    switch (n.type) {
                      case c.Boolean:
                        null != s[e] && (n.value = !!s[e]);
                        break;
                      case c.Number: {
                        let a = t[e];
                        null != a && (n.value = a);
                        break;
                      }
                      case c.Trigger:
                        s[e] && n.fire();
                    }
                }
              }
            }
          }
          o?.rive ? f(o.rive) : n.setLoadHandler(e, f);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        r = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = o(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = r[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = r[t]), e), {});
        },
        f = (e) => e.value,
        u = (e, t) => {
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        p = (e, t, a) => {
          let n = d();
          if (!n) return;
          let i = n.getInstance(e),
            o = a.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let a = o && e.findObjectById(o);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          i ? l(i.spline) : n.setLoadHandler(e, l);
        },
        E = () => null;
    },
    1407: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return r;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = a(380),
        o = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            n = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(n);
          return null != a.size
            ? { size: parseInt(i, 10) }
            : "%" === a.unit || "-" === a.unit
            ? { size: parseFloat(i) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, d.normalizeColor)(i)
            : void 0;
        },
        r = (e) => e.value,
        s = () => null,
        f = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        u = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            d = t.PLUGIN_VARIABLE,
            o = Object.values(f).find((e) => e.match(d, i));
          o && document.documentElement.style.setProperty(n, o.getValue(d, i));
        },
        p = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = a(7087),
        i = r(a(7377)),
        d = r(a(2866)),
        o = r(a(2570)),
        l = r(a(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function r(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = c(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in e)
          if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, d, o)
              : (n[d] = e[d]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let s = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...d }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return m;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return f;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return b;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return u;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return g;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return _;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return r;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return d;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return L;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "IX2_RAW_DATA_IMPORTED",
        d = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        r = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        f = "IX2_CLEAR_REQUESTED",
        u = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        g = "IX2_INSTANCE_REMOVED",
        b = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        _ = "IX2_MEDIA_QUERIES_DEFINED",
        L = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return w;
        },
        BACKGROUND_COLOR: function () {
          return k;
        },
        BAR_DELIMITER: function () {
          return H;
        },
        BORDER_COLOR: function () {
          return F;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return j;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return B;
        },
        COMMA_DELIMITER: function () {
          return Q;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return u;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return r;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return f;
        },
        DISPLAY: function () {
          return D;
        },
        FILTER: function () {
          return G;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return x;
        },
        HEIGHT: function () {
          return P;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return V;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return en;
        },
        RENDER_PLUGIN: function () {
          return ed;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return ea;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return A;
        },
        ROTATE_Z: function () {
          return S;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return _;
        },
        SCALE_Y: function () {
          return L;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return h;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return M;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return g;
        },
        TRANSLATE_Y: function () {
          return b;
        },
        TRANSLATE_Z: function () {
          return m;
        },
        WF_PAGE: function () {
          return d;
        },
        WIDTH: function () {
          return U;
        },
        WILL_CHANGE: function () {
          return Y;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "|",
        d = "data-wf-page",
        o = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        r = "xValue",
        s = "yValue",
        f = "zValue",
        u = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        T = "unit",
        y = "transform",
        g = "translateX",
        b = "translateY",
        m = "translateZ",
        O = "translate3d",
        _ = "scaleX",
        L = "scaleY",
        v = "scaleZ",
        R = "scale3d",
        N = "rotateX",
        A = "rotateY",
        S = "rotateZ",
        h = "skew",
        C = "skewX",
        M = "skewY",
        V = "opacity",
        G = "filter",
        x = "font-variation-settings",
        U = "width",
        P = "height",
        k = "backgroundColor",
        w = "background",
        F = "borderColor",
        B = "color",
        D = "display",
        X = "flex",
        Y = "willChange",
        W = "AUTO",
        Q = ",",
        z = ":",
        H = "|",
        j = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        ea = "RENDER_TRANSFORM",
        en = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        ed = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionAppliesTo: function () {
          return d;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
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
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        d = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return d.QuickEffectIds;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = r(a(1833), t),
        o = r(a(262), t);
      r(a(8704), t), r(a(3213), t);
      let l = f(a(8023)),
        c = f(a(2686));
      function r(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            "default" === a ||
              Object.prototype.hasOwnProperty.call(t, a) ||
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (s = function (e) {
          return e ? a : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = s(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in e)
          if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, d, o)
              : (n[d] = e[d]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: d,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: r,
        } = a(262).ActionTypeConsts,
        s = { [n]: !0, [i]: !0, [d]: !0, [o]: !0, [l]: !0, [c]: !0, [r]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        EventAppliesTo: function () {
          return d;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return r;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
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
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        d = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        r = {
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
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
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
        yellowgreen: "#9ACD32",
      };
      function n(e) {
        let t,
          n,
          i,
          d = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof a[o] ? a[o].toLowerCase() : null) || o;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (d = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (d = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (d = parseFloat(e[3]));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (l.startsWith("hsla")) {
          let e,
            a,
            o,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            r = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            f = parseFloat(c[2].replace("%", "")) / 100;
          d = parseFloat(c[3]);
          let u = (1 - Math.abs(2 * f - 1)) * s,
            p = u * (1 - Math.abs(((r / 60) % 2) - 1)),
            E = f - u / 2;
          r >= 0 && r < 60
            ? ((e = u), (a = p), (o = 0))
            : r >= 60 && r < 120
            ? ((e = p), (a = u), (o = 0))
            : r >= 120 && r < 180
            ? ((e = 0), (a = u), (o = p))
            : r >= 180 && r < 240
            ? ((e = 0), (a = p), (o = u))
            : r >= 240 && r < 300
            ? ((e = p), (a = 0), (o = u))
            : ((e = u), (a = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (n = Math.round((a + E) * 255)),
            (i = Math.round((o + E) * 255));
        } else if (l.startsWith("hsl")) {
          let e,
            a,
            d,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            r = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            f = (1 - Math.abs(2 * s - 1)) * r,
            u = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = s - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (a = u), (d = 0))
            : c >= 60 && c < 120
            ? ((e = u), (a = f), (d = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (a = f), (d = u))
            : c >= 180 && c < 240
            ? ((e = 0), (a = u), (d = f))
            : c >= 240 && c < 300
            ? ((e = u), (a = 0), (d = f))
            : ((e = f), (a = 0), (d = u)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((d + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: n, blue: i, alpha: d };
      }
    },
    9468: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2BrowserSupport: function () {
          return d;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return r;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = u(a(2662)),
        o = u(a(8686)),
        l = u(a(3767)),
        c = u(a(5861)),
        r = u(a(1799)),
        s = u(a(4124));
      function f(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (f = function (e) {
          return e ? a : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = f(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in e)
          if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, d, o)
              : (n[d] = e[d]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          ELEMENT_MATCHES: function () {
            return r;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return f;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var d in i)
        Object.defineProperty(t, d, { enumerable: !0, get: i[d] });
      let o = (n = a(9777)) && n.__esModule ? n : { default: n },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        r = c(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        f = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + "Transform";
              if (void 0 !== e.style[a]) return a;
            }
          }
          return "transform";
        }, "transform"),
        u = f.split("transform")[0],
        p = u ? u + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          applyEasing: function () {
            return f;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return r;
          },
        };
      for (var d in i)
        Object.defineProperty(t, d, { enumerable: !0, get: i[d] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = c(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var d in e)
            if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, d, o)
                : (n[d] = e[d]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        l = (n = a(1361)) && n.__esModule ? n : { default: n };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function r(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, l.default)(...e);
      }
      function f(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? r(t > 0 ? a(t) : t)
          : r(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return Y;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return r;
          },
          inBack: function () {
            return G;
          },
          inCirc: function () {
            return h;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return P;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return U;
          },
          inOutCirc: function () {
            return M;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return w;
          },
          inOutExpo: function () {
            return S;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return b;
          },
          inOutQuint: function () {
            return _;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return f;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return m;
          },
          inSine: function () {
            return L;
          },
          outBack: function () {
            return x;
          },
          outBounce: function () {
            return V;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return k;
          },
          outExpo: function () {
            return A;
          },
          outQuad: function () {
            return u;
          },
          outQuart: function () {
            return g;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return v;
          },
          swingFrom: function () {
            return B;
          },
          swingFromTo: function () {
            return F;
          },
          swingTo: function () {
            return D;
          },
        };
      for (var d in i)
        Object.defineProperty(t, d, { enumerable: !0, get: i[d] });
      let o = (n = a(1361)) && n.__esModule ? n : { default: n },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        c = (0, o.default)(0.42, 0, 1, 1),
        r = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function f(e) {
        return Math.pow(e, 2);
      }
      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function g(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function m(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function _(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function L(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function v(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function A(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function h(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function M(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function V(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function G(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function x(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function P(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ));
      }
      function k(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1);
      }
      function w(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (a || (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function B(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function D(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Y(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return f;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = a(2662),
        o = a(3690);
      function l(e) {
        return o.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!d.IS_BROWSER_ENV) return () => null;
          let a = o.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let n = a[e];
          if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
          return n;
        },
        r = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        f = c("getPluginDuration"),
        u = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        I = c("clearPlugin");
    },
    4124: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        cleanupHTMLElement: function () {
          return eQ;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return em;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eh;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eS;
        },
        getMaxDurationItemIndex: function () {
          return ej;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eM;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eg;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return eV;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = I(a(4075)),
        o = I(a(1455)),
        l = I(a(5720)),
        c = a(1185),
        r = a(7087),
        s = I(a(7164)),
        f = a(3767),
        u = a(380),
        p = a(1799),
        E = a(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: y,
          TRANSLATE_3D: g,
          SCALE_3D: b,
          ROTATE_X: m,
          ROTATE_Y: O,
          ROTATE_Z: _,
          SKEW: L,
          PRESERVE_3D: v,
          FLEX: R,
          OPACITY: N,
          FILTER: A,
          FONT_VARIATION_SETTINGS: S,
          WIDTH: h,
          HEIGHT: C,
          BACKGROUND_COLOR: M,
          BORDER_COLOR: V,
          COLOR: G,
          CHILDREN: x,
          IMMEDIATE_CHILDREN: U,
          SIBLINGS: P,
          PARENT: k,
          DISPLAY: w,
          WILL_CHANGE: F,
          AUTO: B,
          COMMA_DELIMITER: D,
          COLON_DELIMITER: X,
          BAR_DELIMITER: Y,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: Q,
          RENDER_STYLE: z,
          RENDER_PLUGIN: H,
        } = r.IX2EngineConstants,
        {
          TRANSFORM_MOVE: j,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: ea,
          STYLE_BORDER: en,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: ed,
          OBJECT_VALUE: eo,
        } = r.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({ [ea]: M, [en]: V, [ei]: G }),
        er = Object.freeze({
          [E.TRANSFORM_PREFIXED]: y,
          [M]: T,
          [N]: N,
          [A]: A,
          [h]: h,
          [C]: C,
          [S]: S,
        }),
        es = new Map();
      function ef() {
        es.clear();
      }
      let eu = 1;
      function ep() {
        return "i" + eu++;
      }
      let eE = 1;
      function eI(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return "e" + eE++;
      }
      function eT({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return e[a] || (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          i = a && a.mediaQueries,
          d = [];
        return (
          i
            ? (d = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: d,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function eg({ store: e, select: t, onChange: a, comparator: n = ey }) {
        let { getState: i, subscribe: d } = e,
          o = d(function () {
            let d = t(i());
            if (null == d) return void o();
            n(d, l) || a((l = d), e);
          }),
          l = t(i());
        return o;
      }
      function eb(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: d,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: d,
            useEventTarget: o,
          };
        }
        return {};
      }
      function em({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i,
      }) {
        let d, o, l;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, d) =>
              e.concat(
                em({
                  config: { target: d },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: f,
            queryDocument: u,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: y,
            isSiblingNode: g,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: _,
          selectorGuids: L,
          appliesTo: v,
          useEventTarget: R,
        } = eb(b);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (v === r.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[m || _] || {},
          A = !!(N.id || N.selector),
          S = t && f(eb(t.target));
        if (
          (A
            ? ((d = N.limitAffectedElements), (o = S), (l = f(N)))
            : (o = l = f({ id: m, selector: _, selectorGuids: L })),
          t && R)
        ) {
          let e = a && (l || !0 === R) ? [a] : u(S);
          if (l) {
            if (R === k) return u(l).filter((t) => e.some((e) => y(t, e)));
            if (R === x) return u(l).filter((t) => e.some((e) => y(e, t)));
            if (R === P) return u(l).filter((t) => e.some((e) => g(e, t)));
          }
          return e;
        }
        return null == o || null == l
          ? []
          : E.IS_BROWSER_ENV && n
          ? u(l).filter((e) => n.contains(e))
          : d === x
          ? u(o, l)
          : d === U
          ? p(u(o)).filter(T(l))
          : d === P
          ? I(u(o)).filter(T(l))
          : u(l);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case et:
          case ea:
          case en:
          case ei:
          case ed:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let e_ = /px/,
        eL = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = ex[t.type]), e),
            e || {}
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, a = {}, n, i) {
        let { getStyle: o } = i,
          { actionTypeId: l } = n;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], n);
        switch (n.actionTypeId) {
          case j:
          case $:
          case q:
          case K:
            return t[n.actionTypeId] || eG[n.actionTypeId];
          case J:
            return eL(t[n.actionTypeId], n.config.filters);
          case ee:
            return ev(t[n.actionTypeId], n.config.fontVariations);
          case Z:
            return { value: (0, d.default)(parseFloat(o(e, N)), 1) };
          case et: {
            let t,
              i = o(e, h),
              l = o(e, C);
            return {
              widthValue:
                n.config.widthUnit === B
                  ? e_.test(i)
                    ? parseFloat(i)
                    : parseFloat(a.width)
                  : (0, d.default)(parseFloat(i), parseFloat(a.width)),
              heightValue:
                n.config.heightUnit === B
                  ? e_.test(l)
                    ? parseFloat(l)
                    : parseFloat(a.height)
                  : (0, d.default)(parseFloat(l), parseFloat(a.height)),
            };
          }
          case ea:
          case en:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: n,
            }) {
              let i = ec[t],
                o = n(e, i),
                l = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : "";
                })(eF, ew.test(o) ? o : a[i]).split(D);
              return {
                rValue: (0, d.default)(parseInt(l[0], 10), 255),
                gValue: (0, d.default)(parseInt(l[1], 10), 255),
                bValue: (0, d.default)(parseInt(l[2], 10), 255),
                aValue: (0, d.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: a,
              getStyle: o,
            });
          case ed:
            return { value: (0, d.default)(o(e, w), a.display) };
          case eo:
            return t[n.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t, a) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                a.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };
      function eh({ element: e, actionItem: t, elementApi: a }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case j:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return { xValue: e, yValue: a, zValue: n };
          }
          case et: {
            let { getStyle: n, setStyle: i, getProperty: d } = a,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: c, heightValue: r } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: c, heightValue: r };
            if (o === B) {
              let t = n(e, h);
              i(e, h, ""), (c = d(e, "offsetWidth")), i(e, h, t);
            }
            if (l === B) {
              let t = n(e, C);
              i(e, C, ""), (r = d(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: c, heightValue: r };
          }
          case ea:
          case en:
          case ei: {
            let {
              rValue: n,
              gValue: i,
              bValue: d,
              aValue: o,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = a,
                n = t(e, l),
                i = (0, u.normalizeColor)(n);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: n, gValue: i, bValue: d, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? Q
          : /^PLUGIN_/.test(e)
          ? H
          : void 0;
      }
      function eM(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eV(e, t, a, n, i, d, l, c, r) {
        switch (c) {
          case W:
            var s = e,
              f = t,
              u = a,
              I = i,
              T = l;
            let y = ek
                .map((e) => {
                  let t = eG[e],
                    {
                      xValue: a = t.xValue,
                      yValue: n = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: d = "",
                      yUnit: o = "",
                      zUnit: l = "",
                    } = f[e] || {};
                  switch (e) {
                    case j:
                      return `${g}(${a}${d}, ${n}${o}, ${i}${l})`;
                    case $:
                      return `${b}(${a}${d}, ${n}${o}, ${i}${l})`;
                    case q:
                      return `${m}(${a}${d}) ${O}(${n}${o}) ${_}(${i}${l})`;
                    case K:
                      return `${L}(${a}${d}, ${n}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: N } = T;
            eB(s, E.TRANSFORM_PREFIXED, T),
              N(s, E.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: a, zValue: n }
              ) {
                return (
                  (e === j && void 0 !== n) ||
                  (e === $ && void 0 !== n) ||
                  (e === q && (void 0 !== t || void 0 !== a))
                );
              })(I, u) && N(s, E.TRANSFORM_STYLE_PREFIXED, v);
            return;
          case z:
            return (function (e, t, a, n, i, d) {
              let { setStyle: l } = d;
              switch (n.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = n.config,
                    { widthValue: o, heightValue: c } = a;
                  void 0 !== o &&
                    (t === B && (t = "px"), eB(e, h, d), l(e, h, o + t)),
                    void 0 !== c &&
                      (i === B && (i = "px"), eB(e, C, d), l(e, C, c + i));
                  break;
                }
                case J:
                  var c = n.config;
                  let r = (0, o.default)(
                      a,
                      (e, t, a) => `${e} ${a}(${t}${eP(a, c)})`,
                      ""
                    ),
                    { setStyle: s } = d;
                  eB(e, A, d), s(e, A, r);
                  break;
                case ee:
                  n.config;
                  let f = (0, o.default)(
                      a,
                      (e, t, a) => (e.push(`"${a}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: u } = d;
                  eB(e, S, d), u(e, S, f);
                  break;
                case ea:
                case en:
                case ei: {
                  let t = ec[n.actionTypeId],
                    i = Math.round(a.rValue),
                    o = Math.round(a.gValue),
                    c = Math.round(a.bValue),
                    r = a.aValue;
                  eB(e, t, d),
                    l(
                      e,
                      t,
                      r >= 1
                        ? `rgb(${i},${o},${c})`
                        : `rgba(${i},${o},${c},${r})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = n.config;
                  eB(e, i, d), l(e, i, a.value + t);
                }
              }
            })(e, 0, a, i, d, l);
          case Q:
            var M = e,
              V = i,
              G = l;
            let { setStyle: x } = G;
            if (V.actionTypeId === ed) {
              let { value: e } = V.config;
              x(M, w, e === R && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case H: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(r, t, i);
          }
        }
      }
      let eG = {
          [j]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        ex = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eP = (e, t) => {
          let a = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ek = Object.keys(eG),
        ew = /^rgb/,
        eF = RegExp("rgba?\\(([^)]+)\\)");
      function eB(e, t, a) {
        if (!E.IS_BROWSER_ENV) return;
        let n = er[t];
        if (!n) return;
        let { getStyle: i, setStyle: d } = a,
          o = i(e, F);
        if (!o) return void d(e, F, n);
        let l = o.split(D).map(el);
        -1 === l.indexOf(n) && d(e, F, l.concat(n).join(D));
      }
      function eD(e, t, a) {
        if (!E.IS_BROWSER_ENV) return;
        let n = er[t];
        if (!n) return;
        let { getStyle: i, setStyle: d } = a,
          o = i(e, F);
        o &&
          -1 !== o.indexOf(n) &&
          d(
            e,
            F,
            o
              .split(D)
              .map(el)
              .filter((e) => e !== n)
              .join(D)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: d } = a.action,
            { actionListId: o } = d,
            l = i[o];
          l && eY({ actionList: l, event: a, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eY({ actionList: i[e], elementApi: t });
          });
      }
      function eY({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: a });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: a });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n,
            { actionTypeId: i, config: d } = e;
          (n = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : ez({ effect: eH, actionTypeId: i, elementApi: a })),
            em({ config: d, event: t, elementApi: a }).forEach(n);
        });
      }
      function eQ(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: d } = t;
        if (d === et) {
          let { config: a } = t;
          a.widthUnit === B && n(e, h, ""), a.heightUnit === B && n(e, C, "");
        }
        i(e, F) && ez({ effect: eD, actionTypeId: d, elementApi: a })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case j:
            case $:
            case q:
            case K:
              e(n, E.TRANSFORM_PREFIXED, a);
              break;
            case J:
              e(n, A, a);
              break;
            case ee:
              e(n, S, a);
              break;
            case Z:
              e(n, N, a);
              break;
            case et:
              e(n, h, a), e(n, C, a);
              break;
            case ea:
            case en:
            case ei:
              e(n, ec[t], a);
              break;
            case ed:
              e(n, w, a);
          }
        };
      function eH(e, t, a) {
        let { setStyle: n } = a;
        eD(e, t, a),
          n(e, t, ""),
          t === E.TRANSFORM_PREFIXED && n(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function ej(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              d = i.delay + i.duration;
            d >= t && ((t = d), (a = n));
          }),
          a
        );
      }
      function e$(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: d = 0 } = t,
          o = 0,
          l = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              c = a[ej(a)],
              { config: r, actionTypeId: s } = c;
            i.id === c.id && (l = o + d);
            let f = eC(s) === Q ? 0 : r.duration;
            o += r.delay + f;
          }),
          o > 0 ? (0, f.optimizeFloat)(l / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          d = [],
          o = (e) => (
            d.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          n && n.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, c.setIn)(a, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: d }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === r.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === r.EventBasedOn.ELEMENT || null == t)) ||
          (e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Y + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: a = "", useEventTarget: n = "" } = e;
        return t + Y + a + Y + n;
      }
    },
    7164: function (e, t) {
      "use strict";
      function a(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        createElementState: function () {
          return L;
        },
        ixElements: function () {
          return _;
        },
        mergeActionState: function () {
          return v;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let d = a(1185),
        o = a(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: r,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: f,
          CONFIG_Z_VALUE: u,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: g,
          IX2_INSTANCE_ADDED: b,
          IX2_ELEMENT_STATE_CHANGED: m,
        } = o.IX2EngineActionTypes,
        O = {},
        _ = (e = O, t = {}) => {
          switch (t.type) {
            case g:
              return O;
            case b: {
              let {
                  elementId: a,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = o,
                r = e;
              return (
                (0, d.getIn)(r, [a, n]) !== n && (r = L(r, n, l, a, o)),
                v(r, a, c, i, o)
              );
            }
            case m: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: d,
              } = t.payload;
              return v(e, a, n, i, d);
            }
            default:
              return e;
          }
        };
      function L(e, t, a, n, i) {
        let o =
          a === c ? (0, d.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, d.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: a });
      }
      function v(e, t, a, n, i) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              d = t[n],
              o = t[i];
            return null != d && null != o && (e[i] = o), e;
          }, {});
        })(i);
        return (0, d.mergeIn)(e, [t, "refState", a], n, o);
      }
      let R = [
        [s, E],
        [f, I],
        [u, T],
        [p, y],
      ];
    },
    9680: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_button",
              originalId:
                "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_button",
                originalId:
                  "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1940597001e,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_button",
              originalId:
                "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_button",
                originalId:
                  "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19405970020,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e9c6ec8d-760f-6f76-f692-4091b53afd26",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e9c6ec8d-760f-6f76-f692-4091b53afd26",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19405c9d4a8,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "e9c6ec8d-760f-6f76-f692-4091b53afd77",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e9c6ec8d-760f-6f76-f692-4091b53afd77",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194053e1479,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da08e087,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "51c04b08-f112-dc39-7386-06d942d86096",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "51c04b08-f112-dc39-7386-06d942d86096",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da7d1eb7,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "51c04b08-f112-dc39-7386-06d942d86096",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "51c04b08-f112-dc39-7386-06d942d86096",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da7d1eb7,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "865ba833-336b-2b0c-6bb6-1d5fb488e303",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "865ba833-336b-2b0c-6bb6-1d5fb488e303",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da836f35,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "865ba833-336b-2b0c-6bb6-1d5fb488e303",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "865ba833-336b-2b0c-6bb6-1d5fb488e303",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da836f35,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|c268429d-5f27-8605-81dd-e10ac8e8ae7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|c268429d-5f27-8605-81dd-e10ac8e8ae7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196dac097b3,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-4",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68264700ea161932bdd80e47|a5d0197b-4bad-3d7b-35c5-035e655f7008",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|a5d0197b-4bad-3d7b-35c5-035e655f7008",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-4-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 92,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-4-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 92,
                restingState: 50,
              },
            ],
            createdOn: 0x196dae1c166,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|619b6c8e-87fa-7425-efa5-19bcea1d8e1e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|619b6c8e-87fa-7425-efa5-19bcea1d8e1e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196ee917f48,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|07d0612c-d2c3-5c62-a1ed-b659ca677e7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|07d0612c-d2c3-5c62-a1ed-b659ca677e7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 30,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196ef68d312,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68264700ea161932bdd80e47",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
            ],
            createdOn: 0x196ef79ade5,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68264700ea161932bdd80e47|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ef7a7663,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68264700ea161932bdd80e47|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ef7a7663,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-17",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-17-p",
                smoothing: 95,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 20,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ea9b4acb6,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea9c7d2c1,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea9c7d2c1,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea9cf4a4b,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea9cf4a4c,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586ad",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586ad",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ef9e7c70,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-23",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "0b5bf721-b9c7-7d24-1268-cad2b59586ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0b5bf721-b9c7-7d24-1268-cad2b59586ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-23-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 45,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196efa3a2b8,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "2fe3cebd-ac4d-f827-54fd-5ab7505407e6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2fe3cebd-ac4d-f827-54fd-5ab7505407e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da836f35,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "2fe3cebd-ac4d-f827-54fd-5ab7505407e6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "2fe3cebd-ac4d-f827-54fd-5ab7505407e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196da836f35,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f01e118e,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02a7c16,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|bdbcb679-efb0-e795-00a5-a7612668a72c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|bdbcb679-efb0-e795-00a5-a7612668a72c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02c187c,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-116",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|0cb93a61-625e-2ea3-8463-c0b964a0352f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|0cb93a61-625e-2ea3-8463-c0b964a0352f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02c6895,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|9ac55add-88d5-6349-fbf1-415893960740",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|9ac55add-88d5-6349-fbf1-415893960740",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02ca593,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|a6675218-e2ce-8eb5-13f6-2d3783e2c2e6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|a6675218-e2ce-8eb5-13f6-2d3783e2c2e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02df737,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|b6c844c4-8a13-eb53-674d-16a8e52398a8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|b6c844c4-8a13-eb53-674d-16a8e52398a8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02e1ca1,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|b6c844c4-8a13-eb53-674d-16a8e52398ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|b6c844c4-8a13-eb53-674d-16a8e52398ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02e5798,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|c99965c9-f112-500b-416a-b8c5c0c6592d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|c99965c9-f112-500b-416a-b8c5c0c6592d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02e76b5,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|39186d55-16f1-ca92-3a97-a7ced626b408",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|39186d55-16f1-ca92-3a97-a7ced626b408",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02f6d08,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-52",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|6d4cd2fc-bdd6-8c31-a648-d2b76bdbc74a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|6d4cd2fc-bdd6-8c31-a648-d2b76bdbc74a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02f98e8,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|6d4cd2fc-bdd6-8c31-a648-d2b76bdbc751",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|6d4cd2fc-bdd6-8c31-a648-d2b76bdbc751",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02fb316,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|f7b5304c-bfbe-6652-8d6f-7eecedaace78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|f7b5304c-bfbe-6652-8d6f-7eecedaace78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02fcd4c,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f02ff99e,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f03016ea,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b84",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|30e4db02-c0a4-a0b6-5c18-7c1c84484b84",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f03030d8,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|c6b8f727-bbce-09b2-59c0-e2e685f4ffab",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|c6b8f727-bbce-09b2-59c0-e2e685f4ffab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f0304f2a,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|74647a67-d895-dddd-5181-d57c864adc51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|74647a67-d895-dddd-5181-d57c864adc51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f0314342,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|43744f35-d2f6-ddaf-a5a8-91ab214336e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|43744f35-d2f6-ddaf-a5a8-91ab214336e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f0316081,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-70",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|2e85e448-bb7e-c3b6-2ef3-b8e207b1566d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|2e85e448-bb7e-c3b6-2ef3-b8e207b1566d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f0318241,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-34",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".about-clients_wrap",
              originalId:
                "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".about-clients_wrap",
                originalId:
                  "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-34-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-34-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
            ],
            createdOn: 0x18ee2b944fd,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196ceddd2c0,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|a627ab5c-64aa-bfb1-31d5-78d5271249c0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|a627ab5c-64aa-bfb1-31d5-78d5271249c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f34d51b9,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|ba1ff20d-558b-bb7c-5c14-1213bdf38c90",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|ba1ff20d-558b-bb7c-5c14-1213bdf38c90",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f351325a,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-117",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|7c47fc36-21b7-3ea1-62e9-17043a705097",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|7c47fc36-21b7-3ea1-62e9-17043a705097",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f351eccc,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-37",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|807e6f8d-b634-5c17-8100-5f2bb5a5fd41",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|807e6f8d-b634-5c17-8100-5f2bb5a5fd41",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-37-p",
                smoothing: 94,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f3578019,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|cbe7edcf-ea3f-7fd2-0020-cdcd5f5e57f9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|cbe7edcf-ea3f-7fd2-0020-cdcd5f5e57f9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3778e03,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|62786f8d-05ac-c366-2230-b06ceab2eb98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|62786f8d-05ac-c366-2230-b06ceab2eb98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f377b623,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|7e1e57dc-819f-83c1-3b37-7b15d379ae56",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|7e1e57dc-819f-83c1-3b37-7b15d379ae56",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f377c912,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f377e056,
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|a627ab5c-64aa-bfb1-31d5-78d5271249be",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|a627ab5c-64aa-bfb1-31d5-78d5271249be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f37828e6,
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-102",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|ba1ff20d-558b-bb7c-5c14-1213bdf38c8e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|ba1ff20d-558b-bb7c-5c14-1213bdf38c8e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3786ef3,
          },
          "e-103": {
            id: "e-103",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682dd0e70b05db56823e3e33|7c47fc36-21b7-3ea1-62e9-17043a705095",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682dd0e70b05db56823e3e33|7c47fc36-21b7-3ea1-62e9-17043a705095",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3788a40,
          },
          "e-111": {
            id: "e-111",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-43",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d13775c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d13775c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-43-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 40,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ee3a06fc1,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-122",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|79a214b1-54cb-c5a2-2fcd-085f343d99cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|79a214b1-54cb-c5a2-2fcd-085f343d99cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3c70c9a,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-124",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|44152717-51f8-b318-ec52-0e4f6e1c6eea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|44152717-51f8-b318-ec52-0e4f6e1c6eea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3c7bb37,
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|9d93bc96-0059-1c59-aaa6-5cd5104a53ca",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|9d93bc96-0059-1c59-aaa6-5cd5104a53ca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3c92248,
          },
          "e-127": {
            id: "e-127",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-128",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|f3356839-85ef-9f80-9dcb-dd35cff908a7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|f3356839-85ef-9f80-9dcb-dd35cff908a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3c94bb6,
          },
          "e-129": {
            id: "e-129",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-130",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137749",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137749",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ed2fdf,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-132",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137760",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137760",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ed636d,
          },
          "e-133": {
            id: "e-133",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-134",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137767",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d137767",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ed8450,
          },
          "e-135": {
            id: "e-135",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-136",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d13776f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682df20c235114f47fa3eba8|8049aa59-391b-0969-5946-e6d95d13776f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ed9b05,
          },
          "e-137": {
            id: "e-137",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-138",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".process_number",
              originalId:
                "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c51916",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".process_number",
                originalId:
                  "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c51916",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3edda8a,
          },
          "e-139": {
            id: "e-139",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-140",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".services_service-name",
              originalId:
                "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c51914",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".services_service-name",
                originalId:
                  "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c51914",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ee0a54,
          },
          "e-141": {
            id: "e-141",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-142",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".process_img-wrap",
              originalId:
                "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c5191c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".process_img-wrap",
                originalId:
                  "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c5191c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ee6aaf,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".process_text",
              originalId:
                "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c5191e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".process_text",
                originalId:
                  "682df20c235114f47fa3eba8|7d84f867-fee9-0c83-abdf-4e0147c5191e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f3ee8ced,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e28c2afe87e1d14844d36",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e28c2afe87e1d14844d36",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f450d1d5,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-52",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f469443e,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-152",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a83208da-6355-34a7-2601-92ba47f99e35",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a83208da-6355-34a7-2601-92ba47f99e35",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f478b369,
          },
          "e-152": {
            id: "e-152",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-151",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a83208da-6355-34a7-2601-92ba47f99e35",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a83208da-6355-34a7-2601-92ba47f99e35",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f478b369,
          },
          "e-153": {
            id: "e-153",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-154",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e28c2afe87e1d14844d36|c840adc6-e361-4689-c066-f9b4d079f516",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e28c2afe87e1d14844d36|c840adc6-e361-4689-c066-f9b4d079f516",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f47f919b,
          },
          "e-155": {
            id: "e-155",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-156",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e28c2afe87e1d14844d36|c840adc6-e361-4689-c066-f9b4d079f525",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e28c2afe87e1d14844d36|c840adc6-e361-4689-c066-f9b4d079f525",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f47fbb88,
          },
          "e-157": {
            id: "e-157",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb15",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb15",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f47ffff6,
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb17",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb17",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48015c3,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-162",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb1a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb1a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48036e3,
          },
          "e-163": {
            id: "e-163",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-164",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb1f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb1f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4804e28,
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-166",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb25",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb25",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4806922,
          },
          "e-167": {
            id: "e-167",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb34",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb34",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4807ffc,
          },
          "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-56",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-170",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb2a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb2a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f480d2e5,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-172",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb2f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e2ed208558a2423dd7281|d3dd2c8b-ed9c-2dfb-4e42-4e295c7dbb2f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48115f9,
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-174",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda953",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda953",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48185b0,
          },
          "e-175": {
            id: "e-175",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-176",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|2221ac87-3ce7-02a7-e1b9-af747fbae1fa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|2221ac87-3ce7-02a7-e1b9-af747fbae1fa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4819b6d,
          },
          "e-177": {
            id: "e-177",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-178",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda95e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda95e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f481b9e8,
          },
          "e-179": {
            id: "e-179",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-180",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda962",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda962",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f481d220,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-182",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda966",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda966",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f481eae8,
          },
          "e-183": {
            id: "e-183",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-184",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda96a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda96a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48202da,
          },
          "e-185": {
            id: "e-185",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-56",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-186",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda96e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda96e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f48218da,
          },
          "e-187": {
            id: "e-187",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-188",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda976",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e330caafa3cad08365408|76052e90-78b2-bd25-a39c-4a98a5bda976",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f4823d21,
          },
          "e-189": {
            id: "e-189",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-58",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e456d43327522404b3ec9|6e54ac56-8742-c0a3-dadd-2c87ad90acc5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|6e54ac56-8742-c0a3-dadd-2c87ad90acc5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-58-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 100,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 40,
              },
            ],
            createdOn: 0x18e1fef1460,
          },
          "e-200": {
            id: "e-200",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-201",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f52bc08b,
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-208",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f800",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f800",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f54c76a8,
          },
          "e-209": {
            id: "e-209",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-210",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f806",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f806",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f54c76a8,
          },
          "e-211": {
            id: "e-211",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-212",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f80b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|58a92da7-9c13-7730-cb9e-2446c582f80b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f54c76a8,
          },
          "e-213": {
            id: "e-213",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|288690c6-f4dd-f300-f5cb-71a36e55d42d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|288690c6-f4dd-f300-f5cb-71a36e55d42d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f54d5338,
          },
          "e-214": {
            id: "e-214",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-215",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fcd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fcd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f552a2dd,
          },
          "e-216": {
            id: "e-216",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-217",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fd0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fd0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f552a2dd,
          },
          "e-218": {
            id: "e-218",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-219",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fd7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fd7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f552a2dd,
          },
          "e-220": {
            id: "e-220",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-221",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fdc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c4183f08-3260-4e62-90c7-22c864298fdc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f552a2dd,
          },
          "e-222": {
            id: "e-222",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-223",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5558e11,
          },
          "e-224": {
            id: "e-224",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-225",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5558e11,
          },
          "e-226": {
            id: "e-226",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-227",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5ec0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5ec0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5558e11,
          },
          "e-228": {
            id: "e-228",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-229",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5ec5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5ec5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5558e11,
          },
          "e-230": {
            id: "e-230",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-231",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f55684f3,
          },
          "e-232": {
            id: "e-232",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-233",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f55684f3,
          },
          "e-234": {
            id: "e-234",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-235",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7db",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7db",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f55684f3,
          },
          "e-236": {
            id: "e-236",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-237",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7e0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7e0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f55684f3,
          },
          "e-238": {
            id: "e-238",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".home-expertise_img",
              originalId:
                "682e456d43327522404b3ec9|17c0d3d1-1bbc-b189-4793-41f4fd128776",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".home-expertise_img",
                originalId:
                  "682e456d43327522404b3ec9|17c0d3d1-1bbc-b189-4793-41f4fd128776",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f565cd45,
          },
          "e-239": {
            id: "e-239",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-240",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64760",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64760",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f567c922,
          },
          "e-241": {
            id: "e-241",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-242",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64763",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64763",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f567c922,
          },
          "e-243": {
            id: "e-243",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-244",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64765",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e64765",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f567c922,
          },
          "e-245": {
            id: "e-245",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-66",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd1f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd1f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-66-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18f124ac16b,
          },
          "e-246": {
            id: "e-246",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-247",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|288690c6-f4dd-f300-f5cb-71a36e55d42c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|288690c6-f4dd-f300-f5cb-71a36e55d42c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f56eca90,
          },
          "e-248": {
            id: "e-248",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-249",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|50a08100-a6e9-f1b2-ff55-df55b7a61c6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|50a08100-a6e9-f1b2-ff55-df55b7a61c6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f56f25ef,
          },
          "e-250": {
            id: "e-250",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-251",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|9a2d68f2-bd02-b813-c7e1-f3ed607515de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|9a2d68f2-bd02-b813-c7e1-f3ed607515de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f56f4b9e,
          },
          "e-252": {
            id: "e-252",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-253",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|f3bfc941-9194-fd97-5fea-9da9b6fc59bb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|f3bfc941-9194-fd97-5fea-9da9b6fc59bb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f56f9821,
          },
          "e-254": {
            id: "e-254",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-255",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|7f83bcc2-45b5-117c-0113-0730f4a93e45",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|7f83bcc2-45b5-117c-0113-0730f4a93e45",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f56fcfed,
          },
          "e-256": {
            id: "e-256",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-257",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|c7729af8-0e23-bdc3-7678-312c3b3a5eb5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5704eee,
          },
          "e-258": {
            id: "e-258",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-259",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|291a9c3e-3f2e-c8b4-846f-43956a46e7d0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5709aee,
          },
          "e-260": {
            id: "e-260",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x196f572f4ea,
          },
          "e-261": {
            id: "e-261",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-262",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd21",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd21",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5731d09,
          },
          "e-262": {
            id: "e-262",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-261",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd21",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|a361b065-70bd-24ae-46c0-69bed4b5cd21",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5731d0b,
          },
          "e-268": {
            id: "e-268",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73aec0f25ca795aebed3|07d0612c-d2c3-5c62-a1ed-b659ca677e7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|07d0612c-d2c3-5c62-a1ed-b659ca677e7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 30,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f573e453,
          },
          "e-269": {
            id: "e-269",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73aec0f25ca795aebed3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
            ],
            createdOn: 0x196f573e453,
          },
          "e-270": {
            id: "e-270",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-271",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73aec0f25ca795aebed3|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f573e453,
          },
          "e-271": {
            id: "e-271",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-270",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73aec0f25ca795aebed3|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|c3aa485f-cc12-d93a-d282-f27efdbfbca1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f573e453,
          },
          "e-306": {
            id: "e-306",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-307",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73aec0f25ca795aebed3|74647a67-d895-dddd-5181-d57c864adc51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|74647a67-d895-dddd-5181-d57c864adc51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f573e453,
          },
          "e-308": {
            id: "e-308",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-309",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73aec0f25ca795aebed3|43744f35-d2f6-ddaf-a5a8-91ab214336e1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|43744f35-d2f6-ddaf-a5a8-91ab214336e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f573e453,
          },
          "e-310": {
            id: "e-310",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-311",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73aec0f25ca795aebed3|2e85e448-bb7e-c3b6-2ef3-b8e207b1566d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|2e85e448-bb7e-c3b6-2ef3-b8e207b1566d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f573e453,
          },
          "e-348": {
            id: "e-348",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-349",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64760",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64760",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f574f507,
          },
          "e-350": {
            id: "e-350",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-351",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64763",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64763",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f574f507,
          },
          "e-352": {
            id: "e-352",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-353",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64765",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|14f13784-86bf-60ba-331a-a2c4f9e64765",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f574f507,
          },
          "e-354": {
            id: "e-354",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-66",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd1f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd1f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-66-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f574f507,
          },
          "e-369": {
            id: "e-369",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73f4375a5aac41c133d6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 50,
                restingState: 50,
              },
            ],
            createdOn: 0x196f574f507,
          },
          "e-370": {
            id: "e-370",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-371",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd21",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd21",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f574f507,
          },
          "e-371": {
            id: "e-371",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-370",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd21",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73f4375a5aac41c133d6|a361b065-70bd-24ae-46c0-69bed4b5cd21",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f574f507,
          },
          "e-372": {
            id: "e-372",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f586a3ac,
          },
          "e-373": {
            id: "e-373",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127df5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127df5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f586d561,
          },
          "e-374": {
            id: "e-374",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-375",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4522",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4522",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f588ad4a,
          },
          "e-376": {
            id: "e-376",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4523",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4523",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f588ad4a,
          },
          "e-377": {
            id: "e-377",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-378",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4525",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4525",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f588ad4a,
          },
          "e-379": {
            id: "e-379",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-380",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d452b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d452b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f588ad4a,
          },
          "e-381": {
            id: "e-381",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-382",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4530",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|e7816d93-064f-b010-9f04-a9d1823d4530",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f588ad4a,
          },
          "e-383": {
            id: "e-383",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-384",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58ae324,
          },
          "e-385": {
            id: "e-385",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f58ae324,
          },
          "e-386": {
            id: "e-386",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-387",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008d4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58ae324,
          },
          "e-388": {
            id: "e-388",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-389",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58ae324,
          },
          "e-390": {
            id: "e-390",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-391",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|effce73d-6361-aa37-77dc-799ea89008df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58ae324,
          },
          "e-392": {
            id: "e-392",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-393",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58baee1,
          },
          "e-394": {
            id: "e-394",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f58baee1,
          },
          "e-395": {
            id: "e-395",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-396",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ec4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58baee1,
          },
          "e-397": {
            id: "e-397",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-398",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77eca",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77eca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58baee1,
          },
          "e-399": {
            id: "e-399",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-400",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ecf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|895362f4-6fcc-0814-20f7-398d60e77ecf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f58baee1,
          },
          "e-401": {
            id: "e-401",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-402",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5940e24,
          },
          "e-403": {
            id: "e-403",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-404",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5940e24,
          },
          "e-405": {
            id: "e-405",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-406",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc79f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5940e24,
          },
          "e-407": {
            id: "e-407",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-67",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-67-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f59a655e,
          },
          "e-408": {
            id: "e-408",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7502d6f2ba740b7c3277",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x196f59ffe50,
          },
          "e-409": {
            id: "e-409",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-410",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7502d6f2ba740b7c3277|8846422a-025b-34fa-ac92-1359f7a75daf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|8846422a-025b-34fa-ac92-1359f7a75daf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0360e,
          },
          "e-410": {
            id: "e-410",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-409",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7502d6f2ba740b7c3277|8846422a-025b-34fa-ac92-1359f7a75daf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|8846422a-025b-34fa-ac92-1359f7a75daf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0360f,
          },
          "e-440": {
            id: "e-440",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-441",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0fe0d,
          },
          "e-442": {
            id: "e-442",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-443",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0fe0d,
          },
          "e-444": {
            id: "e-444",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-445",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc79f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0fe0d,
          },
          "e-446": {
            id: "e-446",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-67",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-67-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f5a0fe0d,
          },
          "e-447": {
            id: "e-447",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x196f5a0fe0d,
          },
          "e-448": {
            id: "e-448",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-449",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|8846422a-025b-34fa-ac92-1359f7a75daf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|8846422a-025b-34fa-ac92-1359f7a75daf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0fe0d,
          },
          "e-449": {
            id: "e-449",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-448",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682e7f3ad2e4b18cf4fc32b6|8846422a-025b-34fa-ac92-1359f7a75daf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7f3ad2e4b18cf4fc32b6|8846422a-025b-34fa-ac92-1359f7a75daf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a0fe0d,
          },
          "e-450": {
            id: "e-450",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-451",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127de5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127de5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a29604,
          },
          "e-452": {
            id: "e-452",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-453",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|dcbbffde-3943-d51f-f0c2-c0648e585a4c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|dcbbffde-3943-d51f-f0c2-c0648e585a4c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a2b0fc,
          },
          "e-454": {
            id: "e-454",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-455",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d22c1a3c-c124-5a2c-d643-b453ac8dc9fd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d22c1a3c-c124-5a2c-d643-b453ac8dc9fd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a2f2c2,
          },
          "e-456": {
            id: "e-456",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-457",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|0c6393d4-235e-0793-f4b6-067314de9c17",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|0c6393d4-235e-0793-f4b6-067314de9c17",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a312fa,
          },
          "e-458": {
            id: "e-458",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-459",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127df4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|7642ca84-7ea3-0f63-c6ac-86a686127df4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a342d3,
          },
          "e-460": {
            id: "e-460",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-461",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a371d9,
          },
          "e-462": {
            id: "e-462",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-463",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a3a4ae,
          },
          "e-464": {
            id: "e-464",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-465",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4d3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a3cf98,
          },
          "e-466": {
            id: "e-466",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-467",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4db",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4db",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a3ebfa,
          },
          "e-468": {
            id: "e-468",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-469",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|d4953883-e802-c78c-c2e6-164fc31de4df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f5a41b64,
          },
          "e-470": {
            id: "e-470",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-471",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68264700ea161932bdd80e47|7dc38120-aa02-5ed2-ef22-bb6849ec52aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68264700ea161932bdd80e47|7dc38120-aa02-5ed2-ef22-bb6849ec52aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f8364095,
          },
          "e-472": {
            id: "e-472",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-68",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-473",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "cf8193c3-54a9-f4b4-1be1-235d677d8f1e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "cf8193c3-54a9-f4b4-1be1-235d677d8f1e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f85f05db,
          },
          "e-473": {
            id: "e-473",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-69",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-472",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "cf8193c3-54a9-f4b4-1be1-235d677d8f1e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "cf8193c3-54a9-f4b4-1be1-235d677d8f1e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f85f05dd,
          },
          "e-474": {
            id: "e-474",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-475",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e6475f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e456d43327522404b3ec9|14f13784-86bf-60ba-331a-a2c4f9e6475f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f89d14db,
          },
          "e-476": {
            id: "e-476",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-477",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc799",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc799",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f8c17d3f,
          },
          "e-478": {
            id: "e-478",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-479",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682e73aec0f25ca795aebed3|7dc38120-aa02-5ed2-ef22-bb6849ec52aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682e73aec0f25ca795aebed3|7dc38120-aa02-5ed2-ef22-bb6849ec52aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f8cea9bd,
          },
          "e-480": {
            id: "e-480",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682ce02e953b593875516913|c6c54efa-70b5-36dc-ad8c-af6a5c828f9f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913|c6c54efa-70b5-36dc-ad8c-af6a5c828f9f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f989edc0,
          },
          "e-481": {
            id: "e-481",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682ce02e953b593875516913|4fa61fff-504c-176b-6406-b6a58802e292",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913|4fa61fff-504c-176b-6406-b6a58802e292",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f98edd6d,
          },
          "e-482": {
            id: "e-482",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-483",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682ce02e953b593875516913|2e69d0ad-3e10-aa26-ae69-da9545f7b166",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913|2e69d0ad-3e10-aa26-ae69-da9545f7b166",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f9932289,
          },
          "e-483": {
            id: "e-483",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-482",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "682ce02e953b593875516913|2e69d0ad-3e10-aa26-ae69-da9545f7b166",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913|2e69d0ad-3e10-aa26-ae69-da9545f7b166",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f993228b,
          },
          "e-484": {
            id: "e-484",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682ce02e953b593875516913",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-16-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 80,
                restingState: 50,
              },
            ],
            createdOn: 0x196f99445d2,
          },
          "e-485": {
            id: "e-485",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682ce02e953b593875516913|7d6f6c28-3f71-89a1-b70f-97469484eb78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682ce02e953b593875516913|7d6f6c28-3f71-89a1-b70f-97469484eb78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x196f9ab0d00,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Template tooltip in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: -0.25,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 150,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.006, 0.65, 0.355, 1],
                      duration: 300,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19405338cc1,
          },
          "a-2": {
            id: "a-2",
            title: "Template tooltip out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 150,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inCubic",
                      duration: 300,
                      target: {},
                      yValue: -0.5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19405338cc1,
          },
          "a-3": {
            id: "a-3",
            title: "Template bar close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194053e35cd,
          },
          "a-5": {
            id: "a-5",
            title: "HOME - Header images",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "6fbc",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-8",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a74e",
                          value: 30,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._1",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "478e83dd-29b3-8eda-5603-db9b7b26b9da",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._2",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "da6965b4-694c-f458-6537-296c2a8008e2",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-33",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_line-group",
                        selectorGuids: ["9bc7953a-55b1-0a0e-d8c8-ade088333501"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-36",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { size: 0, unit: "vh", value: 0 },
                      target: {
                        objectId: "--border-radius--header-animation",
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-14",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 3e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".section_home-header",
                        selectorGuids: ["8770a666-6dbe-862c-6260-890e3afa6c3d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 1e3,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-10",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "6fbc",
                          value: 30,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._2",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "da6965b4-694c-f458-6537-296c2a8008e2",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-37",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      value: { size: 20, unit: "vh", value: 0 },
                      target: {
                        objectId: "--border-radius--header-animation",
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 1500,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      yValue: 105,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-34",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 1500,
                      target: {
                        selector: ".home-header_line-group",
                        selectorGuids: ["9bc7953a-55b1-0a0e-d8c8-ade088333501"],
                      },
                      xValue: -200,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 1e3,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-12",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a74e",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._2",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "da6965b4-694c-f458-6537-296c2a8008e2",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._1",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "478e83dd-29b3-8eda-5603-db9b7b26b9da",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-39",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      value: { size: 0, unit: "vh", value: 0 },
                      target: {
                        objectId: "--border-radius--header-animation",
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-32",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 3e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".section_home-header",
                        selectorGuids: ["8770a666-6dbe-862c-6260-890e3afa6c3d"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-22",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 1e3,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._1",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "478e83dd-29b3-8eda-5603-db9b7b26b9da",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-23",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "6fbc",
                          value: 30,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-40",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      value: { size: 20, unit: "vh", value: 0 },
                      target: {
                        objectId: "--border-radius--header-animation",
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-25",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 1500,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-27",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-26",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._2",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "51fb10aa-eeff-75e3-7c49-d9b43ed6cd3e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-35",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 1500,
                      target: {
                        selector: ".home-header_line-group",
                        selectorGuids: ["9bc7953a-55b1-0a0e-d8c8-ade088333501"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-28",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 1e3,
                      target: {
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-31",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._2",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "da6965b4-694c-f458-6537-296c2a8008e2",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-30",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".home-header_blur-img._1",
                        selectorGuids: [
                          "b30407b6-0dfd-517b-4949-df4f4168af6c",
                          "478e83dd-29b3-8eda-5603-db9b7b26b9da",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-29",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".home-header_sharp-img._1",
                        selectorGuids: [
                          "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                          "193099b5-ac90-fb2d-16b7-289fbf041347",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a74e",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-41",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      value: { size: 0, unit: "vh", value: 0 },
                      target: {
                        objectId: "--border-radius--header-animation",
                        selector: ".home-header_blur-img",
                        selectorGuids: ["b30407b6-0dfd-517b-4949-df4f4168af6c"],
                      },
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196da08eb3f,
          },
          "a-6": {
            id: "a-6",
            title: "Button hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-6-n-7",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-6-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-13",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-6-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-15",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-6-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195fbb9873b,
          },
          "a-7": {
            id: "a-7",
            title: "Button hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._1",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b7",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "be1c",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_text._2",
                        selectorGuids: [
                          "08e42615-ef36-ac0b-5847-0029a80171a6",
                          "08e42615-ef36-ac0b-5847-0029a80171b2",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "650e",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button_dot-scale",
                        selectorGuids: ["08e42615-ef36-ac0b-5847-0029a80171aa"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195fbb9873b,
          },
          "a-8": {
            id: "a-8",
            title: "Nav link hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-8-n-7",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-8-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-13",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-8-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-15",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-8-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195fbb9873b,
          },
          "a-9": {
            id: "a-9",
            title: "Nav link hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._1",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "b720f729-687b-ce42-845e-a53febcf6055",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "be1c",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-9-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-6",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "650e",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_link-text._2",
                        selectorGuids: [
                          "088affb8-d98a-e652-9b41-7f7a0cf21b3c",
                          "25e9383a-c86c-5548-ae74-cb47d7fb097b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195fbb9873b,
          },
          "a-10": {
            id: "a-10",
            title: "Image scale",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68264700ea161932bdd80e47|c268429d-5f27-8605-81dd-e10ac8e8ae7d",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68264700ea161932bdd80e47|c268429d-5f27-8605-81dd-e10ac8e8ae7d",
                          },
                          xValue: 1.15,
                          yValue: 1.15,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196dac0a675,
          },
          "a-4": {
            id: "a-4",
            title: "HOME - Header blur move",
            continuousParameterGroups: [
              {
                id: "a-4-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-4-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-imgs",
                            selectorGuids: [
                              "b288f333-5e96-6906-d03b-0190de04adff",
                            ],
                          },
                          xValue: -25,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-4-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-img",
                            selectorGuids: [
                              "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                            ],
                          },
                          xValue: 25,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-4-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-imgs",
                            selectorGuids: [
                              "b288f333-5e96-6906-d03b-0190de04adff",
                            ],
                          },
                          xValue: 25,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-4-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-img",
                            selectorGuids: [
                              "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                            ],
                          },
                          xValue: -25,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-4-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-4-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-imgs",
                            selectorGuids: [
                              "b288f333-5e96-6906-d03b-0190de04adff",
                            ],
                          },
                          yValue: -25,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-4-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-img",
                            selectorGuids: [
                              "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                            ],
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-4-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-imgs",
                            selectorGuids: [
                              "b288f333-5e96-6906-d03b-0190de04adff",
                            ],
                          },
                          yValue: 25,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-4-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".home-header_sharp-img",
                            selectorGuids: [
                              "4f3acfd8-ecf7-cc4c-5f5b-f4a6403a1ea0",
                            ],
                          },
                          yValue: -25,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196d99fd561,
          },
          "a-11": {
            id: "a-11",
            title: "Work list 1 - Item scroll",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          yValue: 100,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          xValue: 130,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-11-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-11-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-5",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          xValue: 0,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-11-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-11-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-list_link",
                            selectorGuids: [
                              "bed0854c-d927-0c6b-7f8f-537013f861e7",
                            ],
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196ef690828,
          },
          "a-16": {
            id: "a-16",
            title: "Pill follow mouse",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hover_pill",
                            selectorGuids: [
                              "ce32aed2-64b4-0cfe-da88-2ef423481bdb",
                            ],
                          },
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hover_pill",
                            selectorGuids: [
                              "ce32aed2-64b4-0cfe-da88-2ef423481bdb",
                            ],
                          },
                          xValue: 100,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-16-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hover_pill",
                            selectorGuids: [
                              "ce32aed2-64b4-0cfe-da88-2ef423481bdb",
                            ],
                          },
                          xValue: null,
                          yValue: 0,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-16-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".hover_pill",
                            selectorGuids: [
                              "ce32aed2-64b4-0cfe-da88-2ef423481bdb",
                            ],
                          },
                          xValue: null,
                          yValue: 100,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18fe92bbab5,
          },
          "a-14": {
            id: "a-14",
            title: "Pill hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".hover_wrap",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd9"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hover_text-wrap",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd1"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hover_pill",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bdb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-14-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hover_text",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-14-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".hover_text-wrap",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd1"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".hover_pill",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bdb"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-14-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".hover_text",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd7"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194f5d3279e,
          },
          "a-15": {
            id: "a-15",
            title: "Pill hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".hover_text-wrap",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd1"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-15-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".hover_text",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bd7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-15-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        selector: ".hover_pill",
                        selectorGuids: ["ce32aed2-64b4-0cfe-da88-2ef423481bdb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194f5d3279e,
          },
          "a-17": {
            id: "a-17",
            title: "Email section - Email reveal",
            continuousParameterGroups: [
              {
                id: "a-17-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-17-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".email_link",
                            selectorGuids: [
                              "e6ef5491-1efe-62d8-e501-a5c275493cf4",
                            ],
                          },
                          xValue: 100,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33,
                    actionItems: [
                      {
                        id: "a-17-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".email_shadow-wrap",
                            selectorGuids: [
                              "e6ef5491-1efe-62d8-e501-a5c275493ced",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-17-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".email_link",
                            selectorGuids: [
                              "e6ef5491-1efe-62d8-e501-a5c275493cf4",
                            ],
                          },
                          xValue: 100,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-17-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".email_link",
                            selectorGuids: [
                              "e6ef5491-1efe-62d8-e501-a5c275493cf4",
                            ],
                          },
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 91,
                    actionItems: [
                      {
                        id: "a-17-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".email_shadow-wrap",
                            selectorGuids: [
                              "e6ef5491-1efe-62d8-e501-a5c275493ced",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ea9b4dd84,
          },
          "a-18": {
            id: "a-18",
            title: "CTA — Email arrow Hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-18-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-18-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-18-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea9c7e373,
          },
          "a-19": {
            id: "a-19",
            title: "CTA — Email arrow Hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      yValue: 1,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".email_hover-arrow",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea9c7e373,
          },
          "a-20": {
            id: "a-20",
            title: "CTA — Email filter Hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".email_text",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf3"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "1776",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".email_text",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf3"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "1776",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        selector: ".email_text",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf3"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "1776",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea9c7e373,
          },
          "a-21": {
            id: "a-21",
            title: "CTA — Email filter Hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".email_text",
                        selectorGuids: ["e6ef5491-1efe-62d8-e501-a5c275493cf3"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "c738",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea9c7e373,
          },
          "a-22": {
            id: "a-22",
            title: "Scroll label marquee",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".scroll-note_text",
                        selectorGuids: ["953e6597-5795-9132-4a86-e996386e4aa5"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".scroll-note_text",
                        selectorGuids: ["953e6597-5795-9132-4a86-e996386e4aa5"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e3,
                      target: {
                        selector: ".scroll-note_text",
                        selectorGuids: ["953e6597-5795-9132-4a86-e996386e4aa5"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196ef9e8461,
          },
          "a-23": {
            id: "a-23",
            title: "Email section - Images parallax",
            continuousParameterGroups: [
              {
                id: "a-23-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-23-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-left",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79f",
                            ],
                          },
                          yValue: 80,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-left",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79f",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          yValue: 65,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 5,
                    actionItems: [
                      {
                        id: "a-23-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-left",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79f",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-23-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-left",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79f",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-23-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          yValue: 65,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-23-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-23-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-23-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            selector: ".email_img-left",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79f",
                            ],
                          },
                          yValue: -27,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            selector: ".email_img-right",
                            selectorGuids: [
                              "8b16cb3c-bb35-8fa7-784b-03e1251ed79e",
                            ],
                          },
                          yValue: 15,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x194aec0e092,
          },
          "a-26": {
            id: "a-26",
            title: "Footer link hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-26-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-26-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-26-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-26-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-26-n-8",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "9b03",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-26-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-26-n-10",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "3766",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-26-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-26-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195fbb9873b,
          },
          "a-27": {
            id: "a-27",
            title: "Footer link hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-27-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._1",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "d1f3341e-6c3e-2576-fc59-bfe64b8c3d15",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "be1c",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-27-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-27-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "650e",
                          value: 5,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-27-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".footer_link-text._2",
                        selectorGuids: [
                          "38fe2306-a28d-a322-b2d3-e9f9a8fdfdb8",
                          "21588b1c-168b-ac84-a8f1-7287b9ecde7f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195fbb9873b,
          },
          "a-28": {
            id: "a-28",
            title: "HOME - Page intro",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n-25",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".intro",
                        selectorGuids: ["c37c9d6c-0092-8885-64dd-987b373127b1"],
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      zValue: 16,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "c52b",
                          value: 10,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-28-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._2",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "0d919efd-400e-ce89-4e7f-3358992a3324",
                        ],
                      },
                      xValue: 1,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._2",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "0d919efd-400e-ce89-4e7f-3358992a3324",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._3",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "d662832d-6368-bab0-7576-d8e52225f69e",
                        ],
                      },
                      xValue: -1,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._3",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "d662832d-6368-bab0-7576-d8e52225f69e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._1",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "e6ca23e0-57ff-f765-1df0-825666a19da4",
                        ],
                      },
                      xValue: 1,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._1",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "e6ca23e0-57ff-f765-1df0-825666a19da4",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-19",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._4",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "105a5c8f-118a-c2dd-1809-52735ec6b19e",
                        ],
                      },
                      xValue: -1,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_text._4",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "105a5c8f-118a-c2dd-1809-52735ec6b19e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-26",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".intro_bg",
                        selectorGuids: ["d4bad71d-e582-9a8a-4544-3f1a043bac58"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-29",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".intro_component",
                        selectorGuids: ["89eedbe0-8f74-3060-77fb-1b01ef0eeb2a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 150,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "c52b",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-28-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 150,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "ease",
                      duration: 150,
                      target: {
                        selector: ".intro_logo",
                        selectorGuids: ["7f20ea98-7ce8-673b-739b-68ef8f104d64"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 350,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        selector: ".intro_text._2",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "0d919efd-400e-ce89-4e7f-3358992a3324",
                        ],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 350,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".intro_text._2",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "0d919efd-400e-ce89-4e7f-3358992a3324",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 350,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        selector: ".intro_text._3",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "d662832d-6368-bab0-7576-d8e52225f69e",
                        ],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 350,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".intro_text._3",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "d662832d-6368-bab0-7576-d8e52225f69e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        selector: ".intro_text._1",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "e6ca23e0-57ff-f765-1df0-825666a19da4",
                        ],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".intro_text._1",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "e6ca23e0-57ff-f765-1df0-825666a19da4",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-21",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        selector: ".intro_text._4",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "105a5c8f-118a-c2dd-1809-52735ec6b19e",
                        ],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-22",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 250,
                      target: {
                        selector: ".intro_text._4",
                        selectorGuids: [
                          "4be4b6c1-96fa-da03-5514-265ee5b97508",
                          "105a5c8f-118a-c2dd-1809-52735ec6b19e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-27",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        selector: ".intro_bg",
                        selectorGuids: ["d4bad71d-e582-9a8a-4544-3f1a043bac58"],
                      },
                      yValue: -150,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 750,
                      easing: "ease",
                      duration: 500,
                      target: {
                        selector: ".intro_component",
                        selectorGuids: ["89eedbe0-8f74-3060-77fb-1b01ef0eeb2a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-30",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".intro",
                        selectorGuids: ["c37c9d6c-0092-8885-64dd-987b373127b1"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea4f8fdbb,
          },
          "a-29": {
            id: "a-29",
            title: "Fade in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-30": {
            id: "a-30",
            title: "Fade in (0.1s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-30-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-31": {
            id: "a-31",
            title: "Fade in (0.2s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-31-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-32": {
            id: "a-32",
            title: "Fade in (0.3s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-34": {
            id: "a-34",
            title: "ABOUT — Clients 3d",
            continuousParameterGroups: [
              {
                id: "a-34-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-34-n",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
                          },
                          yValue: -20,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-34-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
                          },
                          yValue: 20,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-34-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-34-n-3",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
                          },
                          xValue: 20,
                          yValue: null,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-34-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682dd0e70b05db56823e3e33|a79bffc5-09b7-2229-03e0-c269849834c5",
                          },
                          xValue: -20,
                          yValue: null,
                          xUnit: "deg",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ee2b952a9,
          },
          "a-35": {
            id: "a-35",
            title: "Line entering",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e",
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e",
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196ceddde26,
          },
          "a-37": {
            id: "a-37",
            title: "ABOUT - Image scale on scroll",
            continuousParameterGroups: [
              {
                id: "a-37-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-37-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about_image",
                            selectorGuids: [
                              "732ceb7f-6d0b-4dd0-04fa-abedd577656f",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-37-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about_image",
                            selectorGuids: [
                              "732ceb7f-6d0b-4dd0-04fa-abedd577656f",
                            ],
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196dac0a675,
          },
          "a-38": {
            id: "a-38",
            title: "Fade in (0.4s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-38-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-38-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-38-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-38-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-39": {
            id: "a-39",
            title: "Fade in (0.5s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-39-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-39-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-43": {
            id: "a-43",
            title: "PROCESS — Scroll images",
            continuousParameterGroups: [
              {
                id: "a-43-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-43-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_columns",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf12",
                            ],
                          },
                          xValue: 0.4,
                          yValue: 0.4,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-43-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_column._1",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf0f",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf18",
                            ],
                          },
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-43-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_column._3",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf0f",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf17",
                            ],
                          },
                          yValue: -40,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-43-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_image.main",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf05",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf14",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-43-n-9",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 4, unit: "rem", value: 4 },
                          target: {
                            objectId: "--border-radius--process-page",
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom-main-image-wrap",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf01",
                            ],
                          },
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-43-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_columns",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf12",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-43-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_column._1",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf0f",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf18",
                            ],
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-43-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "outCubic",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_column._3",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf0f",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf17",
                            ],
                          },
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-43-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom_image.main",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf05",
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf14",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-43-n-10",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem", value: 4 },
                          target: {
                            objectId: "--border-radius--process-page",
                            useEventTarget: "CHILDREN",
                            selector: ".process-zoom-main-image-wrap",
                            selectorGuids: [
                              "d23bc311-24c9-b9f7-fe7e-476abf9ccf01",
                            ],
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ee3a07abf,
          },
          "a-51": {
            id: "a-51",
            title: "CONTACT 1 -  Headline move",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-51-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e4,
                      target: {
                        selector: ".contact-header_text-wrap",
                        selectorGuids: ["f6e5a6b4-d0bb-6b7b-146f-effa98877b62"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-51-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact-header_text-wrap",
                        selectorGuids: ["f6e5a6b4-d0bb-6b7b-146f-effa98877b62"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x188afc721bf,
          },
          "a-52": {
            id: "a-52",
            title: "CONTACT 2 - Image loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-52-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._2",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d4",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-52-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._3",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d3",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-52-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._4",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d0",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-52-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._1",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d1",
                        ],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._2",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d4",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._3",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d3",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._4",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d0",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-8",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._2",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d4",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-52-n-9",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._3",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d3",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-52-n-10",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".contact_image._4",
                        selectorGuids: [
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53ca",
                          "329bfd4b-57f3-ce70-1dbd-a4b18dea53d0",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18e06c4d78d,
          },
          "a-53": {
            id: "a-53",
            title: "CONTACT 3 - FAQ open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq_answer-wrap",
                        selectorGuids: ["261e9302-d8b3-5f8a-2651-d6504d69ef33"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-53-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_button-line.is-second",
                        selectorGuids: [
                          "261e9302-d8b3-5f8a-2651-d6504d69ef22",
                          "261e9302-d8b3-5f8a-2651-d6504d69ef3a",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-53-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq_answer-wrap",
                        selectorGuids: ["261e9302-d8b3-5f8a-2651-d6504d69ef33"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-53-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_button-line.is-second",
                        selectorGuids: [
                          "261e9302-d8b3-5f8a-2651-d6504d69ef22",
                          "261e9302-d8b3-5f8a-2651-d6504d69ef3a",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19585f17b20,
          },
          "a-54": {
            id: "a-54",
            title: "CONTACT 3 - FAQ close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-54-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 250,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq_answer-wrap",
                        selectorGuids: ["261e9302-d8b3-5f8a-2651-d6504d69ef33"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-54-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq_button-line.is-second",
                        selectorGuids: [
                          "261e9302-d8b3-5f8a-2651-d6504d69ef22",
                          "261e9302-d8b3-5f8a-2651-d6504d69ef3a",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19585f17b20,
          },
          "a-55": {
            id: "a-55",
            title: "Fade in (0.6s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-55-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-55-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-56": {
            id: "a-56",
            title: "Fade in (0.7s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-56-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-56-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-56-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-56-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-57": {
            id: "a-57",
            title: "Fade in (0.8s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-57-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0.5,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-57-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outCubic",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      xValue: null,
                      yValue: 0,
                      xUnit: "rem",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68264700ea161932bdd80e47|96b031a7-329e-bc86-4330-4d66c631e1eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f02a8524,
          },
          "a-58": {
            id: "a-58",
            title: "HOME 2 — Header zoom",
            continuousParameterGroups: [
              {
                id: "a-58-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-58-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_content",
                            selectorGuids: [
                              "8faf1495-2768-aa31-87ff-34e849b24597",
                            ],
                          },
                          zValue: -150,
                          xUnit: "PX",
                          yUnit: "PX",
                          zUnit: "rem",
                        },
                      },
                      {
                        id: "a-58-n-7",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_progress-bar",
                            selectorGuids: [
                              "eba98bd6-6951-0f14-f2d6-4b8f37a0ebec",
                            ],
                          },
                          widthValue: 0,
                          heightValue: 1,
                          widthUnit: "%",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 86,
                    actionItems: [
                      {
                        id: "a-58-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_texts",
                            selectorGuids: [
                              "8faf1495-2768-aa31-87ff-34e849b24593",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 93,
                    actionItems: [
                      {
                        id: "a-58-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_texts",
                            selectorGuids: [
                              "8faf1495-2768-aa31-87ff-34e849b24593",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-58-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_content",
                            selectorGuids: [
                              "8faf1495-2768-aa31-87ff-34e849b24597",
                            ],
                          },
                          zValue: 320,
                          xUnit: "PX",
                          yUnit: "PX",
                          zUnit: "rem",
                        },
                      },
                      {
                        id: "a-58-n-8",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".home-header_progress-bar",
                            selectorGuids: [
                              "eba98bd6-6951-0f14-f2d6-4b8f37a0ebec",
                            ],
                          },
                          widthValue: 100,
                          heightValue: 1,
                          widthUnit: "%",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18e1fb4928e,
          },
          "a-66": {
            id: "a-66",
            title: "Work list 2 - Item scroll",
            continuousParameterGroups: [
              {
                id: "a-66-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-66-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".stills_block-wrap",
                            selectorGuids: [
                              "242fe75a-d4ec-17fa-4d87-3ea2f3b80c91",
                            ],
                          },
                          widthValue: 20,
                          heightValue: 10,
                          widthUnit: "%",
                          heightUnit: "%",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-66-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".stills_block-wrap",
                            selectorGuids: [
                              "242fe75a-d4ec-17fa-4d87-3ea2f3b80c91",
                            ],
                          },
                          widthValue: 100,
                          heightValue: 100,
                          widthUnit: "%",
                          heightUnit: "%",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18f0762760c,
          },
          "a-67": {
            id: "a-67",
            title: "Works list 3 - Item scale",
            continuousParameterGroups: [
              {
                id: "a-67-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-67-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-67-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "682e7502d6f2ba740b7c3277|5a100eb5-e1d3-fe01-c823-a3e4afefc7af",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x196f59a6e67,
          },
          "a-68": {
            id: "a-68",
            title: "Open menu",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-68-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-68-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_actions-text",
                        selectorGuids: ["7c97bbbd-0a23-3ef5-1513-f4ef2179e5d1"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-68-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-68-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-68-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_actions-text",
                        selectorGuids: ["7c97bbbd-0a23-3ef5-1513-f4ef2179e5d1"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-68-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f85f0d55,
          },
          "a-69": {
            id: "a-69",
            title: "Close menu",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-69-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 350,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-69-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar_actions-text",
                        selectorGuids: ["7c97bbbd-0a23-3ef5-1513-f4ef2179e5d1"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-69-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".navbar_links",
                        selectorGuids: ["e2d2cb13-8dad-33bd-51a5-64b28c36cbbb"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196f85f0d55,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
