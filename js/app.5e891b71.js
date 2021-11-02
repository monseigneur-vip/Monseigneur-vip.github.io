(function(t) {
    function e(e) {
        for (var n, o, r = e[0], c = e[1], l = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), i[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        d && d(e);
        while (p.length) p.shift()();
        return s.push.apply(s, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
                var c = a[r];
                0 !== i[c] && (n = !1)
            }
            n && (s.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var n = {},
        i = {
            app: 0
        },
        s = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = n, o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function(e) {
                return t[e]
            }.bind(null, n));
        return a
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var d = c;
    s.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "0cae": function(t, e, a) {},
    "12e3": function(t, e, a) {},
    1831: function(t, e, a) {
        t.exports = a.p + "media/switch.7da37659.mp3"
    },
    2395: function(t, e, a) {},
    "26fb": function(t, e, a) {
        t.exports = a.p + "img/contact.788dd0e6.png"
    },
    "289b": function(t, e) {
        window.storage = function(t, e) {
            if (void 0 !== e) {
                var a;
                try {
                    a = JSON.stringify(e)
                } catch (i) {
                    a = e
                }
                return window.localStorage.setItem(t, a), !0
            }
            var n;
            try {
                n = JSON.parse(window.localStorage.getItem(t))
            } catch (s) {
                n = window.localStorage.getItem(t)
            }
            return n
        }
    },
    "318a": function(t, e, a) {
        "use strict";
        a("12e3")
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e623"), a("e379"), a("5dc8"), a("37e1");
        var n = a("2b0e"),
            i = function() {
                var t = this,
                    e = this,
                    a = e.$createElement,
                    n = e._self._c || a;
                return n("div", {
                    staticClass: "container"
                }, [n("Television", {
                    on: {
                        pay: function() {
                            t.$refs.paycode.open()
                        }
                    }
                }), n("Footer"), n("Modal", {
                    ref: "paycode",
                    staticClass: "paycode",
                    attrs: {
                        "btn-text": "下次一定"
                    }
                }, [n("p", [e._v("哇哦٩(๑ᵒ̴̶͈᷄ᗨᵒ̴̶͈᷅)و ！欢迎加入我们官方群")]), n("img", {
                    attrs: {
                        src: "images/gzh.png"
                    }
                }), n("div", {
                    staticStyle: {
                        "font-size": "11px",
                        "margin-top": "10px",
                        color: "#666"
                    }
                }, [n("p", [e._v("各种活动资讯")]), n("p", [e._v("“"), n("span", {
                    staticStyle: {
                        color: "#46c829"
                    }
                }, [e._v("加入QQ群")]), e._v("”各种暴力项目等你撸ᵒ̴̶͈᷄ᗨᵒ̴̶͈᷅")])])])], 1)
            },
            s = [],
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "all"
                }, [n("div", {
                    staticClass: "old-tv",
                    class: {
                        off: !t.power,
                        load: t.loaded,
                        "off-animation": t.offAnimation
                    }
                }, [n("div", {
                    staticClass: "paycode-btn",
                    on: {
                        click: t.showPaycode
                    }
                }, [n("img", {
                    attrs: {
                        src: a("64bb")
                    }
                })]), n("div", {
                    staticClass: "antenna"
                }), n("main", [n("div", {
                    staticClass: "error-noise"
                }, [n("div", {
                    staticClass: "error-effect"
                }, [n("video", {
                    ref: "video",
                    attrs: {
                        playsinline: ""
                    }
                }), n("div", {
                    staticClass: "old-tv-content"
                }, [t.power ? n("div", {
                    staticClass: "text-layout"
                }, [t.rate > 1 ? n("span", {
                    staticClass: "corner-text rate"
                }, [t._v(t._s(t.rate) + "x")]) : t._e(), t.loaded ? t._e() : n("p", [t._v(" " + t._s(t.waitingText) + " ")])]) : t._e()])])])]), n("div", {
                    staticClass: "speaker"
                }), n("div", {
                    staticClass: "volume"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.volume,
                        expression: "volume",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "range",
                        min: "0",
                        max: "100"
                    },
                    domProps: {
                        value: t.volume
                    },
                    on: {
                        __r: function(e) {
                            t.volume = t._n(e.target.value)
                        },
                        blur: function(e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), n("nav", {
                    staticClass: "channel"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.rate,
                        expression: "rate",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "range",
                        min: "1",
                        max: "2",
                        step: "0.5"
                    },
                    domProps: {
                        value: t.rate
                    },
                    on: {
                        __r: function(e) {
                            t.rate = t._n(e.target.value)
                        },
                        blur: function(e) {
                            return t.$forceUpdate()
                        }
                    }
                })]), n("nav", {
                    staticClass: "power",
                    on: {
                        click: t.handlePowerClick,
                        touchend: t.handlePowerOn
                    }
                }, [n("button")]), n("nav"), n("footer")]), t.playInOrder ? n("div", {
                    staticClass: "controller"
                }, [n("div", {
                    staticClass: "prev",
                    on: {
                        click: function(e) {
                            return t.handlePlaylist(0)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont icon-Previoustrack"
                })]), n("span", {
                    staticClass: "play-index"
                }, [t._v(t._s(t.nowPlaying) + "/" + t._s(t.videoSeries.count))]), n("div", {
                    staticClass: "next",
                    on: {
                        click: function(e) {
                            return t.handlePlaylist(1)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont icon-Previoustrack"
                })])]) : t._e(), t._m(0)])
            },
            r = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        attrs: {
                            id: "table-tv"
                        }
                    }, [a("div", {
                        staticClass: "scene"
                    }, [a("div", {
                        staticClass: "shape cuboid-1 cub-1"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 1px rgba(255,255,255,0.2)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt"
                    }), a("div", {
                        staticClass: "face lt"
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp",
                        staticStyle: {
                            "box-shadow": "inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)"
                        }
                    })]), a("div", {
                        staticClass: "shape cuboid-3 cub-3"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt"
                    }), a("div", {
                        staticClass: "face lt",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.8)"
                        }
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp"
                    })]), a("div", {
                        staticClass: "shape cuboid-4 cub-4"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt"
                    }), a("div", {
                        staticClass: "face lt",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.3)"
                        }
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp"
                    })]), a("div", {
                        staticClass: "shape cuboid-5 cub-5"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.8)"
                        }
                    }), a("div", {
                        staticClass: "face lt"
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp"
                    })]), a("div", {
                        staticClass: "shape cuboid-6 cub-6"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt",
                        staticStyle: {
                            "box-shadow": "inset 0 300px rgba(0,0,0,0.3)"
                        }
                    }), a("div", {
                        staticClass: "face lt"
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp"
                    })]), a("div", {
                        staticClass: "shape cuboid-2 cub-2"
                    }, [a("div", {
                        staticClass: "face ft",
                        staticStyle: {
                            "box-shadow": "inset 0 1px rgba(255,255,255,0.2)"
                        }
                    }), a("div", {
                        staticClass: "face bk"
                    }), a("div", {
                        staticClass: "face rt"
                    }), a("div", {
                        staticClass: "face lt"
                    }), a("div", {
                        staticClass: "face bm"
                    }), a("div", {
                        staticClass: "face tp",
                        staticStyle: {
                            "box-shadow": "inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)"
                        }
                    })])])])
                }
            ],
            c = a("1da1"),
            l = (a("96cf"), a("b0c0"), a("99af"), a("1831")),
            d = a.n(l),
            u = a("f5c5"),
            p = a.n(u),
            f = [{
                name: "longzhu1",
                count: 10,
                repo: "superdangdang/tv",
                playInOrder: !0
            }, {
                name: "shierdameinv",
                count: 6,
                repo: "superdangdang/tv",
                playInOrder: !0,
                random: !0
            }, {
                name: "duolaameng",
                count: 1,
                repo: "superdangdang/tv2"
            }, {
                name: "heimaojingzhang",
                count: 1,
                repo: "superdangdang/tv2"
            }, {
                name: "labixiaoxin",
                count: 2,
                repo: "superdangdang/tv2",
                playInOrder: !0
            }, {
                name: "outman",
                count: 1,
                repo: "superdangdang/tv2"
            }, {
                name: "tiebiatongmu",
                count: 1,
                repo: "superdangdang/tv2"
            }],
            v = ["信号接收中...", "⚠️电压不稳定⚠️", "正在拍打电视机", "电视机正在冒烟", "再等等", "FBI WARNING", "CDN信号接入中..."],
            h = {
                switch: new Audio(d.a),
                noise: new Audio(p.a)
            };

        function m(t) {
            return Math.floor(Math.random() * t)
        }

        function b() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return t[m(t.length)]
        }
        h.noise.loop = !0;
        var y = {
                data: function() {
                    return {
                        videoControl: null,
                        volume: 100,
                        rate: 1,
                        power: !1,
                        loaded: !1,
                        paycode: !1,
                        waitingText: v[0],
                        waitingTextTimer: null,
                        cdn: "",
                        videoSeries: {},
                        offAnimation: !1
                    }
                },
                watch: {
                    volume: function(t, e) {
                        var a = t / 100;
                        this.videoControl.volume(a), h.noise.volume = a
                    },
                    rate: function(t, e) {
                        this.videoControl.playbackRate(t)
                    }
                },
                created: function() {
                    this.setWaitingText()
                },
                mounted: function() {
                    var t = this;
                    this.videoControl = videojs(this.$refs.video, {
                        autoplay: !0,
                        controls: !1,
                        loop: !0,
                        width: 0,
                        height: 0,
                        children: []
                    }), this.videoControl.on("canplay", (function() {
                        t.handleCanplay()
                    })), this.videoControl.on("error", (function() {
                        4 === t.videoControl.error().code && t.handleMediaError()
                    }))
                },
                destroyed: function() {
                    clearTimeout(this.waitingTextTimer)
                },
                computed: {
                    playInOrder: function() {
                        return !!this.videoSeries.playInOrder
                    }
                },
                methods: {
                    handlePowerClick: function() {
                        "ontouchstart" in document || this.handlePowerOn()
                    },
                    handlePowerOn: function() {
                        var t = this;
                        return Object(c["a"])(regeneratorRuntime.mark((function e() {
                            var a, n, i, s, o, r, c, l;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        h.switch.pause(), h.switch.currentTime = 0, h.switch.play(), t.power = !t.power, t.power ? (t.offAnimation = !1, t.toWaitState(), t.videoSeries = b(f), a = t.videoSeries, n = a.name, i = a.repo, s = a.count, o = a.playInOrder, r = a.random, t.nowPlaying = o && !r ? 1 : m(s) + 1, c = "".concat(n, "/").concat(t.nowPlaying), l = "https://cdn.jsdelivr.net/gh/".concat(i, "@master/videos/").concat(c, "/playlist.m3u8"), t.videoControl.src() === l ? (t.handleCanplay(), t.videoControl.play().catch((function(e) {
                                            console.warn(e), 9 === e.code && t.toErrorState("信号丢失 请插拔电源重试")
                                        }))) : t.videoControl.src({
                                            type: "application/x-mpegURL",
                                            src: l
                                        })) : t.toStopState();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    handleCanplay: function() {
                        this.toPlayState()
                    },
                    handleMediaError: function() {
                        this.toErrorState("信号丢失 请插拔电源重试")
                    },
                    toPlayState: function() {
                        h.noise.pause(), this.loaded = !0, clearTimeout(this.waitingTextTimer)
                    },
                    toWaitState: function() {
                        this.waitingText = v[0], this.setWaitingText(), h.noise.play(), this.loaded = !1
                    },
                    toStopState: function() {
                        this.offAnimation = !0, this.videoSeries = {}, clearTimeout(this.waitingTextTimer), this.rate = 1, h.noise.pause(), this.videoControl.pause(), this.loaded = !1
                    },
                    toErrorState: function(t) {
                        clearTimeout(this.waitingTextTimer), h.noise.play(), this.loaded = !1, this.waitingText = t
                    },
                    showPaycode: function() {
                        this.$emit("pay")
                    },
                    setWaitingText: function() {
                        var t = this;
                        this.waitingTextTimer = setTimeout((function() {
                            t.waitingText = b(v), t.setWaitingText()
                        }), 1e3 * (m(5) + 5))
                    },
                    handlePlaylist: function(t) {
                        if (this.loaded)
                            if (t) {
                                if (this.nowPlaying >= this.videoSeries.count) return;
                                this.playSeries(this.nowPlaying + 1)
                            } else {
                                if (this.nowPlaying <= 1) return;
                                this.playSeries(this.nowPlaying - 1)
                            }
                    },
                    playSeries: function(t) {
                        var e = this;
                        this.toWaitState();
                        var a = this.videoSeries,
                            n = a.name,
                            i = a.repo;
                        a.count, a.playInOrder;
                        this.nowPlaying = t;
                        var s = "".concat(n, "/").concat(this.nowPlaying),
                            o = "https://cdn.jsdelivr.net/gh/".concat(i, "@master/videos/").concat(s, "/playlist.m3u8");
                        this.videoControl.src() === o ? (this.handleCanplay(), this.videoControl.play().catch((function(t) {
                            console.warn(t), 9 === t.code && e.toErrorState("信号丢失 请插拔电源重试")
                        }))) : this.videoControl.src({
                            type: "application/x-mpegURL",
                            src: o
                        })
                    }
                }
            },
            x = y,
            g = (a("318a"), a("2877")),
            C = Object(g["a"])(x, o, r, !1, null, "03d70710", null),
            w = C.exports,
            P = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container-footer"
                }, [n("p", {
                    staticClass: "copyright"
                }, [n("span", {
                    staticClass: "no-select"
                }, [t._v("© 2021 - " + t._s(t.year) + ",")]), t._v("小高教学网：www.xg3q.com"), t._m(0)]), n("Modal", {
                    ref: "contact",
                    staticClass: "contact",
                    attrs: {
                        "btn-text": "再见！"
                    }
                }, [n("img", {
                    staticClass: "contact-code",
                    attrs: {
                        src: a("26fb")
                    }
                }), n("p", [t._v("备注来意")]), t._v(" （比如有没有可能来个带宽资源赞助？电视信号快断粮了，宝～） ")])], 1)
            },
            T = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("span", {
                        staticClass: "links"
                    }, [a("a", {
                        attrs: {
                            href: "https://www.xg3q.com"
                        }
                    }, [t._v("关于我们")])])
                }
            ],
            X = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("transition", {
                    attrs: {
                        name: "fadein"
                    }
                }, [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.visible,
                        expression: "visible"
                    }],
                    staticClass: "modal"
                }, [t._t("default"), a("div", {
                    staticClass: "close-btn",
                    on: {
                        click: t.close
                    }
                }, [t._v(" " + t._s(t.btnText) + " ")])], 2)])
            },
            S = [],
            R = {
                name: "Modal",
                props: {
                    btnText: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        visible: !1
                    }
                },
                methods: {
                    open: function() {
                        this.visible = !0
                    },
                    close: function() {
                        this.visible = !1
                    }
                }
            },
            O = R,
            j = (a("6306"), Object(g["a"])(O, X, S, !1, null, "e8323650", null)),
            k = j.exports,
            D = {
                name: "Footer",
                components: {
                    Modal: k
                },
                computed: {
                    year: function() {
                        return (new Date).getFullYear()
                    }
                }
            },
            N = D,
            L = (a("ca11"), Object(g["a"])(N, P, T, !1, null, "24dd2893", null)),
            I = L.exports,
            z = {
                name: "App",
                components: {
                    Television: w,
                    Footer: I,
                    Modal: k
                },
                data: function() {
                    return {
                        paycode: !1
                    }
                }
            },
            G = z,
            V = (a("7c55"), Object(g["a"])(G, i, s, !1, null, null, null)),
            q = V.exports;
        a("289b"), a("cd22");
        n["a"].config.productionTip = !1, new n["a"]({
            render: function(t) {
                return t(q)
            }
        }).$mount("#app")
    },
    6306: function(t, e, a) {
        "use strict";
        a("e6e3")
    },
    "64bb": function(t, e, a) {
        t.exports = a.p + "images/gzh.png"
    },
    "7c55": function(t, e, a) {
        "use strict";
        a("2395")
    },
    ca11: function(t, e, a) {
        "use strict";
        a("0cae")
    },
    cd22: function(t, e, a) {},
    e6e3: function(t, e, a) {},
    f5c5: function(t, e, a) {
        t.exports = a.p + "media/noise.488d9968.mp3"
    }
});