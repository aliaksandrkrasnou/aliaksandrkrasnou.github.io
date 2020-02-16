(function (e) {
  function t(t) {
    for (var r, n, c = t[0], i = t[1], l = t[2], p = 0, u = []; p < c.length; p++) n = c[p], Object.prototype.hasOwnProperty.call(o, n) && o[n] && u.push(o[n][0]), o[n] = 0;
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    d && d(t);
    while (u.length) u.shift()();
    return s.push.apply(s, l || []), a();
  }

  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], r = !0, n = 1; n < a.length; n++) {
        var c = a[n];
        0 !== o[c] && (r = !1);
      }
      r && (s.splice(t--, 1), e = i(i.s = a[0]));
    }
    return e;
  }

  var r = {},
    n = { app: 0 },
    o = { app: 0 },
    s = [];

  function c(e) {
    return i.p + 'js/' + ({
      'choose-game': 'choose-game',
      'play-noughts-crosses-game': 'play-noughts-crosses-game',
    }[e] || e) + '.' + {
      'choose-game': '07853f9c',
      'play-noughts-crosses-game': 'cf2a31a9',
    }[e] + '.js';
  }

  function i(t) {
    if (r[t]) return r[t].exports;
    var a = r[t] = {
      i: t,
      l: !1,
      exports: {},
    };
    return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports;
  }

  i.e = function (e) {
    var t = [],
      a = {
        'choose-game': 1,
        'play-noughts-crosses-game': 1,
      };
    n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function (t, a) {
      for (var r = 'css/' + ({
        'choose-game': 'choose-game',
        'play-noughts-crosses-game': 'play-noughts-crosses-game',
      }[e] || e) + '.' + {
        'choose-game': '1ed6aa06',
        'play-noughts-crosses-game': '67d0cf15',
      }[e] + '.css', o = i.p + r, s = document.getElementsByTagName('link'), c = 0; c < s.length; c++) {
        var l = s[c],
          p = l.getAttribute('data-href') || l.getAttribute('href');
        if ('stylesheet' === l.rel && (p === r || p === o)) return t();
      }
      var u = document.getElementsByTagName('style');
      for (c = 0; c < u.length; c++) {
        l = u[c], p = l.getAttribute('data-href');
        if (p === r || p === o) return t();
      }
      var d = document.createElement('link');
      d.rel = 'stylesheet', d.type = 'text/css', d.onload = t, d.onerror = function (t) {
        var r = t && t.target && t.target.src || o,
          s = new Error('Loading CSS chunk ' + e + ' failed.\n(' + r + ')');
        s.code = 'CSS_CHUNK_LOAD_FAILED', s.request = r, delete n[e], d.parentNode.removeChild(d), a(s);
      }, d.href = o;
      var m = document.getElementsByTagName('head')[0];
      m.appendChild(d);
    })).then((function () {
      n[e] = 0;
    })));
    var r = o[e];
    if (0 !== r) {
      if (r) {
        t.push(r[2]);
      } else {
        var s = new Promise((function (t, a) {
          r = o[e] = [t, a];
        }));
        t.push(r[2] = s);
        var l,
          p = document.createElement('script');
        p.charset = 'utf-8', p.timeout = 120, i.nc && p.setAttribute('nonce', i.nc), p.src = c(e);
        var u = new Error;
        l = function (t) {
          p.onerror = p.onload = null, clearTimeout(d);
          var a = o[e];
          if (0 !== a) {
            if (a) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                n = t && t.target && t.target.src;
              u.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + n + ')', u.name = 'ChunkLoadError', u.type = r, u.request = n, a[1](u);
            }
            o[e] = void 0;
          }
        };
        var d = setTimeout((function () {
          l({
            type: 'timeout',
            target: p,
          });
        }), 12e4);
        p.onerror = p.onload = l, document.head.appendChild(p);
      }
    }
    return Promise.all(t);
  }, i.m = e, i.c = r, i.d = function (e, t, a) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a,
    });
  }, i.r = function (e) {
    'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (i.r(a), Object.defineProperty(a, 'default', {
      enumerable: !0,
      value: e,
    }), 2 & t && 'string' != typeof e) {
      for (var r in e) {
        i.d(a, r, function (t) {
          return e[t];
        }.bind(null, r));
      }
    }
    return a;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e['default'];
    } : function () {
      return e;
    };
    return i.d(t, 'a', t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = '/', i.oe = function (e) {
    throw console.error(e), e;
  };
  var l = window['webpackJsonp'] = window['webpackJsonp'] || [],
    p = l.push.bind(l);
  l.push = t, l = l.slice();
  for (var u = 0; u < l.length; u++) t(l[u]);
  var d = p;
  s.push([0, 'chunk-vendors']), a();
})({
  0: function (e, t, a) {
    e.exports = a('56d7');
  },
  '0a77': function (e, t, a) {
    'use strict';
    var r = a('7d88'),
      n = a.n(r);
    n.a;
  },
  '24c0': function (e, t, a) {
  },
  '56d7': function (e, t, a) {
    'use strict';
    a.r(t);
    a('e260'), a('e6cf'), a('cca6'), a('a79d');
    var r = a('2b0e'),
      n = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('v-app', [a('AppNavigationDrawer'), a('AppHeader'), a('v-content', [a('transition', {
          attrs: {
            appear: '',
            name: 'fade',
            mode: 'out-in',
          },
        }, [a('router-view')], 1)], 1), a('v-footer', { attrs: { app: '' } })], 1);
      },
      o = [],
      s = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('v-app-bar', {
          attrs: {
            app: '',
            flat: '',
          },
        }, [e.$vuetify.breakpoint.lgAndUp ? a('v-container', [a('v-row', { attrs: { 'no-gutters': '' } }, [a('v-col', { staticClass: 'd-flex align-center' }, [a('span', [e._v('LOGOTYPE')])]), a('v-col', { attrs: { cols: '7' } }, [a('AppNavBar')], 1), a('v-col', { staticClass: 'd-flex align-center justify-center' }, [a('v-btn', {
          staticClass: 'primary',
          on: { click: e.openAppNavigationDrawer },
        }, [a('span', [e._v('Авторизация/Регистрация')])])], 1)], 1)], 1) : [a('v-toolbar-title', [e._v('LOGOTYPE')]), a('v-spacer'), a('v-btn', {
          attrs: { icon: '' },
          on: { click: e.openAppNavigationDrawer },
        }, [a('v-icon', [e._v('fas fa-bars')])], 1)]], 2);
      },
      c = [],
      i = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('nav', [a('v-container', [a('v-row', [a('v-col', [a('v-btn', {
          attrs: {
            text: '',
            small: '',
            to: '/',
          },
        }, [e._v(' Главная ')])], 1), a('v-col', [a('v-btn', {
          attrs: {
            disabled: '',
            text: '',
            small: '',
          },
        }, [e._v(' О проекте ')])], 1), a('v-col', [a('v-btn', {
          attrs: {
            text: '',
            small: '',
            to: '/choose-game/all-games/',
          },
        }, [e._v(' Выбрать игру ')])], 1), a('v-col', [a('v-btn', {
          attrs: {
            disabled: '',
            text: '',
            small: '',
          },
        }, [e._v(' Контакты ')])], 1)], 1)], 1)], 1);
      },
      l = [],
      p = { name: 'AppNavBar' },
      u = p,
      d = a('2877'),
      m = a('6544'),
      v = a.n(m),
      f = a('8336'),
      g = a('62ad'),
      h = a('a523'),
      b = a('0fd9'),
      y = Object(d['a'])(u, i, l, !1, null, '0f2e1a71', null),
      w = y.exports;
    v()(y, {
      VBtn: f['a'],
      VCol: g['a'],
      VContainer: h['a'],
      VRow: b['a'],
    });
    var _ = 'SET_NAVIGATION_DRAWER_STATE',
      O = 'CHANGE_NAVIGATION_DRAWER_STATE',
      j = {
        name: 'AppHeader',
        components: { AppNavBar: w },
        methods: {
          openAppNavigationDrawer: function () {
            this.$store.commit({
              type: 'appNavigationDrawer/'.concat(_),
              value: !0,
            });
          },
        },
      },
      A = j,
      C = a('40dc'),
      V = a('132d'),
      x = a('2fa4'),
      N = a('2a7f'),
      S = Object(d['a'])(A, s, c, !1, null, '6443d4c0', null),
      E = S.exports;
    v()(S, {
      VAppBar: C['a'],
      VBtn: f['a'],
      VCol: g['a'],
      VContainer: h['a'],
      VIcon: V['a'],
      VRow: b['a'],
      VSpacer: x['a'],
      VToolbarTitle: N['a'],
    });
    var k = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('v-navigation-drawer', {
          attrs: {
            value: e.drawerIsOpen,
            app: '',
            absolute: '',
            temporary: '',
            right: '',
          },
          on: { input: e.onDrawerStateChange },
        }, [e._v(' Hi ')]);
      },
      D = [],
      P = (a('a4d3'), a('4de4'), a('e439'), a('dbb4'), a('b64b'), a('159b'), a('ade3')),
      T = a('2f62');

    function I(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), a.push.apply(a, r);
      }
      return a;
    }

    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? I(Object(a), !0)
          .forEach((function (t) {
            Object(P['a'])(e, t, a[t]);
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a))
          .forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          }));
      }
      return e;
    }

    var $ = {
        name: 'AppNavigationDrawer',
        computed: F({}, Object(T['b'])({
          drawerIsOpen: function (e) {
            return e.common.appNavigationDrawer.isOpen;
          },
        })),
        methods: {
          onDrawerStateChange: function (e) {
            this.drawerIsOpen !== e && this.$store.commit({
              type: 'appNavigationDrawer/'.concat(_),
              value: e,
            });
          },
        },
      },
      B = $,
      H = a('f774'),
      L = Object(d['a'])(B, k, D, !1, null, '1046c50d', null),
      R = L.exports;
    v()(L, { VNavigationDrawer: H['a'] });
    var G = {
        name: 'App',
        components: {
          AppNavigationDrawer: R,
          AppHeader: E,
        },
      },
      U = G,
      q = (a('5dd5'), a('7496')),
      M = a('a75b'),
      W = a('553a'),
      J = Object(d['a'])(U, n, o, !1, null, '3c402e23', null),
      Y = J.exports;
    v()(J, {
      VApp: q['a'],
      VContent: M['a'],
      VFooter: W['a'],
    });
    a('d3b7');
    var K = a('8c4f'),
      z = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('v-container', {
          staticClass: 'app-home__container',
          attrs: { fluid: '' },
        }, [a('v-row', {
          staticClass: 'app-home__general',
          attrs: {
            align: 'center',
            justify: 'center',
            tag: 'section',
          },
        }, [a('v-col', {
          attrs: {
            cols: '12',
            sm: '10',
            md: '8',
            lg: '8',
            color: 'primary',
          },
        }, [a('v-container', { attrs: { fluid: '' } }, [a('v-row', [a('v-col', {
          attrs: {
            cols: '12',
            sm: '6',
          },
        }, [a('h1', { staticClass: 'white--text mt-lg-12' }, [e._v(' Добро пожаловать ')]), a('p', { staticClass: 'white--text' }, [e._v(' Вы попали на главную страницу образовательного портала, здесь вы можете выбрать игру по вкусу, создать свою собственную стратегию и победить соперника. Все это будет доступно после авторизации или регистрации. ')]), a('v-btn', {
          staticClass: 'app-home__register-btn mb-lg-12',
          attrs: { color: 'white' },
        }, [e._v(' Зарегистрироваться ')])], 1), a('v-spacer', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: e.$vuetify.breakpoint.lgAndUp,
            expression: '$vuetify.breakpoint.lgAndUp',
          }],
        }), a('v-col', {
          attrs: {
            cols: '12',
            sm: '6',
            lg: '5',
          },
        }, [a('v-sheet', {
          staticClass: 'mt-lg-12 mb-lg-12',
          attrs: { color: 'grey lighten-5' },
        }, [a('v-container', { attrs: { fluid: '' } }, [a('v-row', { attrs: { 'no-gutters': '' } }, [a('v-col', { attrs: { cols: '12' } }, [a('v-form', { ref: 'loginForm' }, [a('v-text-field', {
          attrs: {
            'append-icon': 'fas fa-user',
            'background-color': 'white',
            label: 'Никнейм',
            placeholder: 'Введите никнейм',
            outlined: '',
            required: '',
          },
        }), a('v-text-field', {
          attrs: {
            'append-icon': 'fas fa-lock',
            'background-color': 'white',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            outlined: '',
            type: 'password',
            required: '',
          },
        }), a('v-btn', {
          staticClass: 'mb-4',
          attrs: {
            color: 'primary',
            block: '',
          },
        }, [e._v(' Авторизироваться ')]), a('v-btn', {
          attrs: {
            link: '',
            tag: 'a',
            type: 'link',
            text: '',
            color: 'grey-lighten-3',
            'x-small': '',
            block: '',
          },
        }, [e._v(' Забыли пароль? ')])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), a('v-row', {
          attrs: {
            align: 'center',
            justify: 'center',
            tag: 'section',
          },
        }, [a('v-col', {
          attrs: {
            cols: '12',
            sm: '10',
            md: '8',
            lg: '8',
            color: 'grey lighten-4',
          },
        }, [a('v-container', { attrs: { fluid: '' } }, [a('v-row', {
          attrs: {
            align: 'start',
            justify: 'center',
          },
        }, e._l(e.cards, (function (t, r) {
          return a('v-col', {
            key: r,
            attrs: { sm: '4' },
          }, [a('v-card', { staticClass: 'app-home__card' }, [a('v-img', {
            attrs: {
              alt: t.alt,
              height: '128',
            },
            scopedSlots: e._u([{
              key: 'placeholder',
              fn: function () {
                return [e._v(' ' + e._s(t.alt) + ' ')];
              },
              proxy: !0,
            }], null, !0),
          }), a('v-card-title', [e._v(' ' + e._s(t.title) + ' ')]), a('v-card-subtitle', [e._v(' ' + e._s(t.description) + ' ')]), a('v-card-actions', [a('v-btn', {
            attrs: {
              color: 'primary',
              width: '100%',
            },
          }, [e._v(' Перейти ')])], 1)], 1)], 1);
        })), 1)], 1)], 1)], 1)], 1);
      },
      Q = [],
      X = {
        name: 'Home',
        components: {},
        data: function () {
          return {
            cards: [{
              imgSrc: '../assets/game-console.png',
              alt: 'Game Console Image',
              title: 'Выбрать игру',
              description: 'Здесь вы можете выбрать игру',
              href: '/',
            }, {
              imgSrc: '../../assets/ui.png',
              alt: 'UI Image',
              title: 'Создать стратегию',
              description: 'В данном разделе вы можете выбрать стратегию',
              href: '/',
            }, {
              imgSrc: './win.png',
              alt: 'Win Image',
              title: 'Победить соперника',
              description: 'Одержи победу над соперником',
              href: '/',
            }],
          };
        },
        computed: {},
        methods: {},
      },
      Z = X,
      ee = (a('0a77'), a('b0af')),
      te = a('99d9'),
      ae = a('4bd4'),
      re = a('adda'),
      ne = a('8dd9'),
      oe = a('8654'),
      se = Object(d['a'])(Z, z, Q, !1, null, '9e7d7074', null),
      ce = se.exports;
    v()(se, {
      VBtn: f['a'],
      VCard: ee['a'],
      VCardActions: te['a'],
      VCardSubtitle: te['b'],
      VCardTitle: te['d'],
      VCol: g['a'],
      VContainer: h['a'],
      VForm: ae['a'],
      VImg: re['a'],
      VRow: b['a'],
      VSheet: ne['a'],
      VSpacer: x['a'],
      VTextField: oe['a'],
    }), r['a'].use(K['a']);
    var ie,
      le = [{
        path: '/',
        name: 'home',
        component: ce,
      }, {
        path: '/choose-game',
        name: 'choose-game',
        component: function () {
          return a.e('choose-game')
            .then(a.bind(null, '9de7'));
        },
        children: [{
          path: '/choose-game/all-games',
          name: 'all-games',
          component: function () {
            return a.e('choose-game')
              .then(a.bind(null, '3a7d'));
          },
        }, {
          path: '/choose-game/ratings',
          name: 'ratings',
          component: function () {
            return a.e('choose-game')
              .then(a.bind(null, '1fa4'));
          },
        }, {
          path: '/choose-game/play-noughts-crosses-game',
          name: 'noughts-crosses-game',
          component: function () {
            return a.e('play-noughts-crosses-game')
              .then(a.bind(null, 'a6bf'));
          },
        }],
      }],
      pe = new K['a']({
        mode: 'history',
        base: '/',
        routes: le,
      }),
      ue = pe,
      de = {
        namespaced: !0,
        state: { isOpen: !1 },
        mutations: (ie = {}, Object(P['a'])(ie, _, (function (e, t) {
          var a = t.value,
            r = void 0 !== a && a;
          e.isOpen = r;
        })), Object(P['a'])(ie, O, (function (e) {
          e.isOpen = !e.isOpen;
        })), ie),
      },
      me = de,
      ve = { modules: { appNavigationDrawer: me } },
      fe = ve;
    r['a'].use(T['a']);
    var ge = new T['a'].Store({ modules: { common: fe } }),
      he = a('f309'),
      be = a('da5b'),
      ye = a.n(be),
      we = a('2992'),
      _e = a.n(we);
    r['a'].use(he['a']);
    var Oe = new he['a']({
      theme: {
        options: { customProperties: !0 },
        themes: {
          light: {
            primary: '#3498db',
            secondary: '#424242',
            accent: '#ee44aa',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
      icons: { iconfont: 'fa' },
      lang: {
        locales: {
          ru: _e.a,
          en: ye.a,
        },
        current: 'ru',
      },
    });
    a('d5e8'), a('15f5');
    r['a'].config.productionTip = !1, new r['a']({
      router: ue,
      store: ge,
      vuetify: Oe,
      render: function (e) {
        return e(Y);
      },
    }).$mount('#app');
  },
  '5dd5': function (e, t, a) {
    'use strict';
    var r = a("24c0"),
      n = a.n(r);
    n.a
  },
  "7d88": function (e, t, a) {
  }
});
//# sourceMappingURL=app.aafdf0b6.js.map
