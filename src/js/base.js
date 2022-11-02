/* eslint-disable no-unused-expressions */

var my$



Function.prototype.bind || (Function.prototype.bind = function (e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

    function t() { }

    function n() {
        return r.apply(this instanceof t && e ? this : e, i.concat(Array.prototype.slice.call(arguments)))
    }
    var i = Array.prototype.slice.call(arguments, 1),
        r = this;
    t.prototype = this.prototype
    n.prototype = new t()
    return "n"
})



function lala(e, t) {
    t(e)
}

lala(window, function (T, e) {

    function t(t) {
        return t.toUpperCase()
    }
    var n = [],
        w = T.document,
        u = n.slice,
        m = n.concat,
        s = n.push,
        r = n.indexOf,
        i = {},
        o = i.toString,
        p = i.hasOwnProperty,
        g = {},
        C = function (e, t) {
            return new C.fn.init(e, t)
        },
        a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = C.type(e);
        return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "2.2.4",
        constructor: C,
        selector: "",
        length: 0,
        toArray: function () {
            return u.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return C.each(this, e)
        },
        map: function (n) {
            return this.pushStack(C.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
        C.extend = C.fn.extend = function () {
            var e, t, n, i, r, o, a = arguments[0] || {}, s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || C.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (C.isPlainObject(i) || (r = C.isArray(i))) ? (o = r ? (r = !1, n && C.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        },
        C.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === C.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isPlainObject: function (e) {
                var t;
                if ("object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in e);
                return void 0 === t || p.call(e, t)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[o.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                var t, n = eval;
                (e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = w.createElement("script")).text = e, w.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function (e) {
                return e.replace(l, "ms-").replace(c, t)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var n, i = 0;
                if (h(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break; return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(a, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : r.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)!t(e[r], r) != a && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i, r, o = 0,
                    a = [];
                if (h(e))
                    for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return m.apply([], a)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), C.isFunction(e) ? (i = u.call(arguments, 2), (r = function () {
                    return e.apply(t || this, i.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, r) : void 0
            },
            now: Date.now,
            support: g
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = n[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            i["[object " + t + "]"] = t.toLowerCase()
        });
    var f = function (n) {
        function h(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            E()
        }
        var e, p, b, o, a, m, f, g, x, l, c, E, T, s, w, v, u, d, _, C = "sizzle" + +new Date(),
            y = n.document,
            S = 0,
            i = 0,
            D = re(),
            R = re(),
            A = re(),
            M = function (e, t) {
                return e === t && (c = !0), 0
            }, L = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            F = t.push,
            P = t.push,
            N = t.slice,
            k = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            z = "\\[" + O + "*(" + B + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + O + "*\\]",
            j = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            U = new RegExp(O + "+", "g"),
            V = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            W = new RegExp("^" + O + "*," + O + "*"),
            G = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            q = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            X = new RegExp(j),
            $ = new RegExp("^" + B + "$"),
            Y = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + j),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            }, J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig");
        try {
            P.apply(t = N.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function (e, t) {
                    F.apply(e, N.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var r, o, a, s, l, c, u, h, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== T && E(t), t = t || T, w)) {
                if (11 !== d && (c = K.exec(e)))
                    if (r = c[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (f && (a = f.getElementById(r)) && _(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (c[2]) return P.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = c[3]) && p.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(r)), n
                    }
                if (p.qsa && !A[e + " "] && (!v || !v.test(e))) {
                    if (1 !== d) f = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, "\\$&") : t.setAttribute("id", s = C), o = (u = m(e)).length, l = $.test(s) ? "#" + s : "[id='" + s + "']"; o--;) u[o] = l + " " + pe(u[o]);
                        h = u.join(","), f = ee.test(e) && fe(t.parentNode) || t
                    }
                    if (h) try {
                        return P.apply(n, f.querySelectorAll(h)), n
                    } catch (e) { } finally {
                            s === C && t.removeAttribute("id")
                        }
                }
            }
            return g(e.replace(V, "$1"), t, n, i)
        }

        function re() {
            var n = [];

            function i(e, t) {
                return n.push(e + " ") > b.cacheLength && delete i[n.shift()], i[e + " "] = t
            }
            return i
        }

        function oe(e) {
            return e[C] = !0, e
        }

        function ae(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ue(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function he(a) {
            return oe(function (o) {
                return o = +o, oe(function (e, t) {
                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = ie.support = {}, a = ie.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, E = ie.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : y;
            return i !== T && 9 === i.nodeType && i.documentElement && (s = (T = i).documentElement, w = !a(T), (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), p.attributes = ae(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), p.getElementsByTagName = ae(function (e) {
                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), p.getElementsByClassName = Q.test(T.getElementsByClassName), p.getById = ae(function (e) {
                return s.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
            }), p.getById ? (b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && w) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, b.filter.ID = function (e) {
                var t = e.replace(ne, h);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function (e) {
                var n = e.replace(ne, h);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), b.find.TAG = p.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                return i
            }, b.find.CLASS = p.getElementsByClassName && function (e, t) {
                return void 0 !== t.getElementsByClassName && w ? t.getElementsByClassName(e) : void 0
            }, u = [], v = [], (p.qsa = Q.test(T.querySelectorAll)) && (ae(function (e) {
                s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + O + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
            }), ae(function (e) {
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (p.matchesSelector = Q.test(d = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ae(function (e) {
                p.disconnectedMatch = d.call(e, "div"), d.call(e, "[s!='']:x"), u.push("!=", j)
            }), v = v.length && new RegExp(v.join("|")), u = u.length && new RegExp(u.join("|")), t = Q.test(s.compareDocumentPosition), _ = t || Q.test(s.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, M = t ? function (e, t) {
                if (e === t) return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && _(y, e) ? -1 : t === T || t.ownerDocument === y && _(y, t) ? 1 : l ? k(l, e) - k(l, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return c = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!r || !o) return e === T ? -1 : t === T ? 1 : r ? -1 : o ? 1 : l ? k(l, e) - k(l, t) : 0;
                if (r === o) return le(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? le(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0
            }), T
        }, ie.matches = function (e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== T && E(e), t = t.replace(q, "='$1']"), p.matchesSelector && w && !A[t + " "] && (!u || !u.test(t)) && (!v || !v.test(t))) try {
                var n = d.call(e, t);
                if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) { }
            return 0 < ie(t, T, null, [e]).length
        }, ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && E(e), _(e, t)
        }, ie.attr = function (e, t) {
            (e.ownerDocument || e) !== T && E(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !w) : void 0;
            return void 0 !== i ? i : p.attributes || !w ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(M), c) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return l = null, e
        }, o = ie.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += o(t);
            return n
        }, (b = ie.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ne, h), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, h), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne, h).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = D[e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && D(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, i, r) {
                    return function (e) {
                        var t = ie.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(U, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (p, e, t, m, g) {
                    var v = "nth" !== p.slice(0, 3),
                        _ = "last" !== p.slice(-4),
                        y = "of-type" === e;
                    return 1 === m && 0 === g ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var i, r, o, a, s, l, c = v != _ ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            h = y && e.nodeName.toLowerCase(),
                            f = !n && !y,
                            d = !1;
                        if (u) {
                            if (v) {
                                for (; c;) {
                                    for (a = e; a = a[c];)
                                        if (y ? a.nodeName.toLowerCase() === h : 1 === a.nodeType) return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [_ ? u.firstChild : u.lastChild], _ && f) {
                                for (d = (s = (i = (r = (o = (a = u)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (d = s = 0) || l.pop();)
                                    if (1 === a.nodeType && ++d && a === e) {
                                        r[p] = [S, s, d];
                                        break
                                    }
                            } else if (f && (d = s = (i = (r = (o = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === d)
                                for (;
                                    (a = ++s && a && a[c] || (d = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== h : 1 !== a.nodeType) || !++d || (f && ((r = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [S, d]), a !== e)););
                            return (d -= g) === m || d % m == 0 && 0 <= d / m
                        }
                    }
                },
                PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                        for (var n, i = a(e, o), r = i.length; r--;) e[n = k(e, i[r])] = !(t[n] = i[r])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: oe(function (e) {
                    var i = [],
                        r = [],
                        s = f(e.replace(V, "$1"));
                    return s[C] ? oe(function (e, t, n, i) {
                        for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, t, n) {
                        return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                    }
                }),
                has: oe(function (t) {
                    return function (e) {
                        return 0 < ie(t, e).length
                    }
                }),
                contains: oe(function (t) {
                    return t = t.replace(ne, h),
                        function (e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                }),
                lang: oe(function (n) {
                    return $.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, h).toLowerCase(),
                        function (e) {
                            var t;
                            do {
                                if (t = w ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function (e) {
                    return e === s
                },
                focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !b.pseudos.empty(e)
                },
                header: function (e) {
                    return Z.test(e.nodeName)
                },
                input: function (e) {
                    return J.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = ce(e);
        for (e in {
            submit: !0,
            reset: !0
        }) b.pseudos[e] = ue(e);

        function de() { }

        function pe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function me(s, e, t) {
            var l = e.dir,
                c = t && "parentNode" === l,
                u = i++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return s(e, t, n)
            } : function (e, t, n) {
                var i, r, o, a = [S, u];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) {
                            if ((i = (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[l]) && i[0] === S && i[1] === u) return a[2] = i[2];
                            if ((r[l] = a)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function ge(r) {
            return 1 < r.length ? function (e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function ve(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function _e(d, p, m, g, v, e) {
            return g && !g[C] && (g = _e(g)), v && !v[C] && (v = _e(v, e)), oe(function (e, t, n, i) {
                var r, o, a, s = [],
                    l = [],
                    c = t.length,
                    u = e || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    h = !d || !e && p ? u : ve(u, s, d, n, i),
                    f = m ? v || (e ? d : c || g) ? [] : t : h;
                if (m && m(h, f, n, i), g)
                    for (r = ve(f, l), g(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[l[o]] = !(h[l[o]] = a));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (r = [], o = f.length; o--;)(a = f[o]) && r.push(h[o] = a);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(a = f[o]) && -1 < (r = v ? k(e, a) : s[o]) && (e[r] = !(t[r] = a))
                    }
                } else f = ve(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : P.apply(t, f)
            })
        }

        function ye(e) {
            for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = me(function (e) {
                return e === r
            }, a, !0), c = me(function (e) {
                return -1 < k(r, e)
            }, a, !0), u = [
                function (e, t, n) {
                    var i = !o && (n || t !== x) || ((r = t).nodeType ? l : c)(e, t, n);
                    return r = null, i
                }
            ]; s < i; s++)
                if (t = b.relative[e[s].type]) u = [me(ge(u), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[C]) {
                        for (n = ++s; n < i && !b.relative[e[n].type]; n++);
                        return _e(1 < s && ge(u), 1 < s && pe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(V, "$1"), t, s < n && ye(e.slice(s, n)), n < i && ye(e = e.slice(n)), n < i && pe(e))
                    }
                    u.push(t)
                }
            return ge(u)
        }

        function be(g, v) {
            function e(e, t, n, i, r) {
                var o, a, s, l = 0,
                    c = "0",
                    u = e && [],
                    h = [],
                    f = x,
                    d = e || y && b.find.TAG("*", r),
                    p = S += null == f ? 1 : Math.random() || .1,
                    m = d.length;
                for (r && (x = t === T || t || r); c !== m && null != (o = d[c]); c++) {
                    if (y && o) {
                        for (a = 0, t || o.ownerDocument === T || (E(o), n = !w); s = g[a++];)
                            if (s(o, t || T, n)) {
                                i.push(o);
                                break
                            }
                        r && (S = p)
                    }
                    _ && ((o = !s && o) && l--, e && u.push(o))
                }
                if (l += c, _ && c !== l) {
                    for (a = 0; s = v[a++];) s(u, h, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--;) u[c] || h[c] || (h[c] = H.call(i));
                        h = ve(h)
                    }
                    P.apply(i, h), r && !e && 0 < h.length && 1 < l + v.length && ie.uniqueSort(i)
                }
                return r && (S = p, x = f), u
            }
            var _ = 0 < v.length,
                y = 0 < g.length;
            return _ ? oe(e) : e
        }
        return de.prototype = b.filters = b.pseudos, b.setFilters = new de(), m = ie.tokenize = function (e, t) {
            var n, i, r, o, a, s, l, c = R[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = b.preFilter; a;) {
                for (o in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = G.exec(a)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(V, " ")
                }), a = a.slice(n.length)), b.filter) !(i = Y[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : R(e, s).slice(0)
        }, f = ie.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = A[e + " "];
            if (!o) {
                for (n = (t = t || m(e)).length; n--;)(o = ye(t[n]))[C] ? i.push(o) : r.push(o);
                (o = A(e, be(r, i))).selector = e
            }
            return o
        }, g = ie.select = function (e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                u = !i && m(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && p.getById && 9 === t.nodeType && w && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ne, h), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (i = l(a.matches[0].replace(ne, h), ee.test(o[0].type) && fe(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && pe(o))) return P.apply(n, i), n;
                        break
                    }
            }
            return (c || f(e, u))(i, t, !w, n, !t || ee.test(e) && fe(t.parentNode) || t), n
        }, p.sortStable = C.split("").sort(M).join("") === C, p.detectDuplicates = !!c, E(), p.sortDetached = ae(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), ae(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ae(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || se("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function (e) {
            return null == e.getAttribute("disabled")
        }) || se(I, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ie
    }(T);
    C.find = f, C.expr = f.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = f.uniqueSort, C.text = f.getText, C.isXMLDoc = f.isXML, C.contains = f.contains;

    function d(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && C(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function v(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var _ = C.expr.match.needsContext,
        y = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function x(e, n, i) {
        if (C.isFunction(n)) return C.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return C.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (b.test(n)) return C.filter(n, e, i);
            n = C.filter(n, e)
        }
        return C.grep(e, function (e) {
            return -1 < r.call(n, e) !== i
        })
    }
    C.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    },
        C.fn.extend({
            find: function (e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                    for (t = 0; t < n; t++)
                        if (C.contains(r[t], this)) return !0
                }));
                for (t = 0; t < n; t++) C.find(e, r[t], i);
                return (i = this.pushStack(1 < n ? C.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function (e) {
                return this.pushStack(x(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(x(this, e || [], !0))
            },
            is: function (e) {
                return !!x(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
    var E, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || E, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), y.test(i[1]) && C.isPlainObject(t))
                for (i in t) C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = w.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = w, this.selector = e, this
    }).prototype = C.fn, E = C(w);
    var D = /^(?:parents|prev(?:Until|All))/,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function (e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = _.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        C.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return d(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return d(e, "parentNode", n)
            },
            next: function (e) {
                return A(e, "nextSibling")
            },
            prev: function (e) {
                return A(e, "previousSibling")
            },
            nextAll: function (e) {
                return d(e, "nextSibling")
            },
            prevAll: function (e) {
                return d(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return d(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return d(e, "previousSibling", n)
            },
            siblings: function (e) {
                return v((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return v(e.firstChild)
            },
            contents: function (e) {
                return e.contentDocument || C.merge([], e.childNodes)
            }
        }, function (i, r) {
            C.fn[i] = function (e, t) {
                var n = C.map(this, r, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (R[i] || C.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n)
            }
        });
    var M, L = /\S+/g;

    function H() {
        w.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), C.ready()
    }
    C.Callbacks = function (i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(L) || [], function (e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);

        function r() {
            for (s = i.once, a = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length;)!1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1), o = !1, s && (l = t ? [] : "")
        }
        var o, t, a, s, l = [],
            c = [],
            u = -1,
            h = {
                add: function () {
                    return l && (t && !o && (u = l.length - 1, c.push(t)), function n(e) {
                        C.each(e, function (e, t) {
                            C.isFunction(t) ? i.unique && h.has(t) || l.push(t) : t && t.length && "string" !== C.type(t) && n(t)
                        })
                    }(arguments), t && !o && r()), this
                },
                remove: function () {
                    return C.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < C.inArray(e, l) : 0 < l.length
                },
                empty: function () {
                    return l = l && [], this
                },
                disable: function () {
                    return s = c = [], l = t = "", this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return s = c = [], t || (l = t = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), o || r()), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!a
                }
            };
        return h
    },
        C.extend({
            Deferred: function (e) {
                var o = [
                    ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", C.Callbacks("memory")]
                ],
                    r = "pending",
                    a = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var r = arguments;
                            return C.Deferred(function (i) {
                                C.each(o, function (e, t) {
                                    var n = C.isFunction(r[e]) && r[e];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, a) : a
                        }
                    }, s = {};
                return a.pipe = a.then, C.each(o, function (e, t) {
                    var n = t[2],
                        i = t[3];
                    a[t[1]] = n.add, i && n.add(function () {
                        r = i
                    }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
                        return s[t[0] + "With"](this === s ? a : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function (e) {
                function t(t, n, i) {
                    return function (e) {
                        n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === r ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                }
                var r, n, i, o = 0,
                    a = u.call(arguments),
                    s = a.length,
                    l = 1 !== s || e && C.isFunction(e.promise) ? s : 0,
                    c = 1 === l ? e : C.Deferred();
                if (1 < s)
                    for (r = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) a[o] && C.isFunction(a[o].promise) ? a[o].promise().progress(t(o, n, r)).done(t(o, i, a)).fail(c.reject) : --l;
                return l || c.resolveWith(i, a), c.promise()
            }
        }),
        C.fn.ready = function (e) {
            return C.ready.promise().done(e), this
        },
        C.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? C.readyWait++ : C.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (M.resolveWith(w, [C]), C.fn.triggerHandler && (C(w).triggerHandler("ready"), C(w).off("ready"))))
            }
        }),
        C.ready.promise = function (e) {
            return M || (M = C.Deferred(), "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? T.setTimeout(C.ready) : (w.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H))), M.promise(e)
        }, C.ready.promise();

    function F(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    var P = function (e, t, n, i, r, o, a) {
        var s = 0,
            l = e.length,
            c = null == n;
        if ("object" === C.type(n))
            for (s in r = !0, n) P(e, t, s, n[s], !0, o, a);
        else if (void 0 !== i && (r = !0, C.isFunction(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function (e, t, n) {
            return c.call(C(e), n)
        })), t))
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    };

    function N() {
        this.expando = C.expando + N.uid++
    }
    N.uid = 1, N.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!F(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, C.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    n = (i = C.isArray(t) ? t.concat(t.map(C.camelCase)) : (r = C.camelCase(t), t in o ? [t, r] : (i = r) in o ? [i] : i.match(L) || [])).length;
                    for (; n--;) delete o[i[n]]
                }
                void 0 !== t && !C.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var k = new N(),
        I = new N(),
        O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = /[A-Z]/g;

    function z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(B, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? C.parseJSON(n) : n)
                } catch (e) { }
                I.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function (e) {
            return I.hasData(e) || k.hasData(e)
        },
        data: function (e, t, n) {
            return I.access(e, t, n)
        },
        removeData: function (e, t) {
            I.remove(e, t)
        },
        _data: function (e, t, n) {
            return k.access(e, t, n)
        },
        _removeData: function (e, t) {
            k.remove(e, t)
        }
    }),
        C.fn.extend({
            data: function (i, e) {
                var t, n, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                    I.set(this, i)
                }) : P(this, function (t) {
                    var e, n;
                    if (o && void 0 === t) {
                        if (void 0 !== (e = I.get(o, i) || I.get(o, i.replace(B, "-$&").toLowerCase()))) return e;
                        if (n = C.camelCase(i), void 0 !== (e = I.get(o, n))) return e;
                        if (void 0 !== (e = z(o, n, void 0))) return e
                    } else n = C.camelCase(i), this.each(function () {
                        var e = I.get(this, n);
                        I.set(this, n, t), -1 < i.indexOf("-") && void 0 !== e && I.set(this, i, t)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (r = I.get(o), 1 === o.nodeType && !k.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (n = a[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), z(o, n, r[n])));
                    k.set(o, "hasDataAttrs", !0)
                }
                return r
            },
            removeData: function (e) {
                return this.each(function () {
                    I.remove(this, e)
                })
            }
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = k.get(e, t), n && (!i || C.isArray(n) ? i = k.access(e, t, C.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                    C.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return k.get(e, n) || k.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                        k.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                function n() {
                    --r || o.resolveWith(a, [a])
                }
                var i, r = 1,
                    o = C.Deferred(),
                    a = this,
                    s = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = k.get(a[s], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                return n(), o.promise(t)
            }
        });

    function j(e, t) {
        return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
    }
    var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"];

    function G(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return C.css(e, t, "")
            }, l = s(),
            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== c && +l) && V.exec(C.css(e, t));
        if (u && u[3] !== c)
            for (c = c || u[3], n = n || [], u = +l || 1; u /= o = o || ".5", C.style(e, t, u + c), o !== (o = s() / l) && 1 !== o && --a;);
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var q = /^(?:checkbox|radio)$/i,
        X = /<([\w:-]+)/,
        $ = /^$|\/(?:java|ecma)script/i,
        Y = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], n) : n
    }

    function Z(e, t) {
        for (var n = 0, i = e.length; n < i; n++) k.set(e[n], "globalEval", !t || k.get(t[n], "globalEval"))
    }
    Y.optgroup = Y.option, Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead, Y.th = Y.td;
    var Q, K, ee = /<|&#?\w+;/;

    function te(e, t, n, i, r) {
        for (var o, a, s, l, c, u, h = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === C.type(o)) C.merge(f, o.nodeType ? [o] : o);
                else if (ee.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")), s = (X.exec(o) || ["", ""])[1].toLowerCase(), l = Y[s] || Y._default, a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                    C.merge(f, a.childNodes), (a = h.firstChild).textContent = ""
                } else f.push(t.createTextNode(o));
        for (h.textContent = "", d = 0; o = f[d++];)
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (c = C.contains(o.ownerDocument, o), a = J(h.appendChild(o), "script"), c && Z(a), n)
                for (u = 0; o = a[u++];) $.test(o.type || "") && n.push(o);
        return h
    }
    Q = w.createDocumentFragment().appendChild(w.createElement("div")), (K = w.createElement("input")).setAttribute("type", "radio"), K.setAttribute("checked", "checked"), K.setAttribute("name", "t"), Q.appendChild(K), g.checkClone = Q.cloneNode(!0).cloneNode(!0).lastChild.checked, Q.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!Q.cloneNode(!0).lastChild.defaultValue;
    var ne = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        re = /^([^.]*)(?:\.(.+)|)/;

    function oe() {
        return !0
    }

    function ae() {
        return !1
    }

    function se() {
        try {
            return w.activeElement
        } catch (e) { }
    }

    function le(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) le(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ae;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
            return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, r, i, n)
        })
    }
    C.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, a, s, l, c, u, h, f, d, p, m, g = k.get(t);
            if (g)
                for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(L) || [""]).length; c--;) d = m = (s = re.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), d && (h = C.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = C.event.special[d] || {}, u = C.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(d, a)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[d] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, h, f, d, p, m, g = k.hasData(e) && k.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (d = m = (s = re.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), d) {
                        for (h = C.event.special[d] || {}, f = l[d = (i ? h.delegateType : h.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(e, u));
                        a && !f.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || C.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l) C.event.remove(e, d + t[c], n, i, !0);
                C.isEmptyObject(l) && k.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t, n, i, r, o, a = [],
                s = u.call(arguments),
                l = (k.get(this, "events") || {})[e.type] || [],
                c = C.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = C.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? -1 < C(r, this).index(l) : C.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || w).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ie.test(r) ? this.mouseHooks : ne.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = w), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== se() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === se() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        },
        C.Event = function (e, t) {
            return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? oe : ae) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e, t)
        },
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: ae,
            isPropagationStopped: ae,
            isImmediatePropagationStopped: ae,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = oe, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = oe, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        },
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, r) {
            C.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                }
            }
        }),
        C.fn.extend({
            on: function (e, t, n, i) {
                return le(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return le(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function () {
                    C.event.remove(this, e, n, t)
                });
                for (r in e) this.off(r, t, e[r]);
                return this
            }
        });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ue = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /^true\/(.*)/,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ge(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ve(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (k.hasData(e) && (o = k.access(e), a = k.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) C.event.add(t, r, c[r][n]);
            I.hasData(e) && (s = I.access(e), l = C.extend({}, s), I.set(t, l))
        }
    }

    function _e(n, i, r, o) {
        i = m.apply([], i);
        var e, t, a, s, l, c, u = 0,
            h = n.length,
            f = h - 1,
            d = i[0],
            p = C.isFunction(d);
        if (p || 1 < h && "string" == typeof d && !g.checkClone && he.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            p && (i[0] = d.call(this, e, t.html())), _e(t, i, r, o)
        });
        if (h && (t = (e = te(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = C.map(J(e, "script"), me)).length; u < h; u++) l = e, u !== f && (l = C.clone(l, !0, !0), s && C.merge(a, J(l, "script"))), r.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument, C.map(a, ge), u = 0; u < s; u++) l = a[u], $.test(l.type || "") && !k.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : C.globalEval(l.textContent.replace(de, "")))
        }
        return n
    }

    function ye(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(J(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && Z(J(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0),
                h = C.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = J(u), i = 0, r = (o = J(e)).length; i < r; i++) s = o[i], l = a[i], "input" === (c = l.nodeName.toLowerCase()) && q.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || J(e), a = a || J(u), i = 0, r = o.length; i < r; i++) ve(o[i], a[i]);
                else ve(e, u);
            return 0 < (a = J(u, "script")).length && Z(a, !h && J(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if (t = n[k.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[k.expando] = void 0
                    }
                    n[I.expando] && (n[I.expando] = void 0)
                }
        }
    }),
        C.fn.extend({
            domManip: _e,
            detach: function (e) {
                return ye(this, e, !0)
            },
            remove: function (e) {
                return ye(this, e)
            },
            text: function (e) {
                return P(this, function (e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return _e(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pe(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return _e(this, arguments, function (e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = pe(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function () {
                return _e(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return _e(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(J(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return C.clone(this, e, t)
                })
            },
            html: function (e) {
                return P(this, function (e) {
                    var t = this[0] || {}, n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ue.test(e) && !Y[(X.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(J(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return _e(this, arguments, function (e) {
                    var t = this.parentNode;
                    C.inArray(this, n) < 0 && (C.cleanData(J(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, a) {
            C.fn[e] = function (e) {
                for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[a](t), s.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var be, xe = {
        HTML: "block",
        BODY: "block"
    };

    function Ee(e, t) {
        var n = C(t.createElement(e)).appendTo(t.body),
            i = C.css(n[0], "display");
        return n.detach(), i
    }

    function Te(e) {
        var t = w,
            n = xe[e];
        return n || ("none" !== (n = Ee(e, t)) && n || ((t = (be = (be || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ee(e, t), be.detach()), xe[e] = n), n
    }

    function we(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
        return r
    }
    var Ce, Se, De, Re, Ae, Me, Le = /^margin/,
        He = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"),
        Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        }, Pe = w.documentElement;

    function Ne() {
        Me.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", Me.innerHTML = "", Pe.appendChild(Ae);
        var e = T.getComputedStyle(Me);
        Ce = "1%" !== e.top, Re = "2px" === e.marginLeft, Se = "4px" === e.width, Me.style.marginRight = "50%", De = "4px" === e.marginRight, Pe.removeChild(Ae)
    }

    function ke(e, t, n) {
        var i, r, o, a, s = e.style;
        return "" !== (a = (n = n || Fe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), n && !g.pixelMarginRight() && He.test(a) && Le.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
    }

    function Ie(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    Ae = w.createElement("div"), (Me = w.createElement("div")).style && (Me.style.backgroundClip = "content-box", Me.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === Me.style.backgroundClip, Ae.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Ae.appendChild(Me), C.extend(g, {
        pixelPosition: function () {
            return Ne(), Ce
        },
        boxSizingReliable: function () {
            return null == Se && Ne(), Se
        },
        pixelMarginRight: function () {
            return null == Se && Ne(), De
        },
        reliableMarginLeft: function () {
            return null == Se && Ne(), Re
        },
        reliableMarginRight: function () {
            var e, t = Me.appendChild(w.createElement("div"));
            return t.style.cssText = Me.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", Me.style.width = "1px", Pe.appendChild(Ae), e = !parseFloat(T.getComputedStyle(t).marginRight), Pe.removeChild(Ae), Me.removeChild(t), e
        }
    }));
    var Oe = /^(none|table(?!-c[ea]).+)/,
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, ze = {
            letterSpacing: "0",
            fontWeight: "400"
        }, je = ["Webkit", "O", "Moz", "ms"],
        Ue = w.createElement("div").style;

    function Ve(e) {
        if (e in Ue) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = je.length; n--;)
            if ((e = je[n] + t) in Ue) return e
    }

    function We(e, t, n) {
        var i = V.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ge(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += C.css(e, n + W[o], !0, r)), i ? ("content" === n && (a -= C.css(e, "padding" + W[o], !0, r)), "margin" !== n && (a -= C.css(e, "border" + W[o] + "Width", !0, r))) : (a += C.css(e, "padding" + W[o], !0, r), "padding" !== n && (a += C.css(e, "border" + W[o] + "Width", !0, r)));
        return a
    }

    function qe(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Fe(e),
            a = "border-box" === C.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ke(e, t, o)) < 0 || null == r) && (r = e.style[t]), He.test(r)) return r;
            i = a && (g.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + Ge(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function Xe(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = k.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && j(i) && (o[a] = k.access(i, "olddisplay", Te(i.nodeName)))) : (r = j(i), "none" === n && r || k.set(i, "olddisplay", r ? n : C.css(i, "display"))));
        for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function $e(e, t, n, i, r) {
        return new $e.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ke(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = C.camelCase(t),
                    l = e.style;
                return t = C.cssProps[s] || (C.cssProps[s] = Ve(s) || s), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = V.exec(n)) && r[1] && (n = G(e, t, r), o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (C.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = C.camelCase(t);
            return t = C.cssProps[s] || (C.cssProps[s] = Ve(s) || s), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = ke(e, t, i)), "normal" === r && t in ze && (r = ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
        C.each(["height", "width"], function (e, a) {
            C.cssHooks[a] = {
                get: function (e, t, n) {
                    return t ? Oe.test(C.css(e, "display")) && 0 === e.offsetWidth ? we(e, Be, function () {
                        return qe(e, a, n)
                    }) : qe(e, a, n) : void 0
                },
                set: function (e, t, n) {
                    var i, r = n && Fe(e),
                        o = n && Ge(e, a, n, "border-box" === C.css(e, "boxSizing", !1, r), r);
                    return o && (i = V.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), We(0, t, o)
                }
            }
        }),
        C.cssHooks.marginLeft = Ie(g.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(ke(e, "marginLeft")) || e.getBoundingClientRect().left - we(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),

        C.cssHooks.marginRight = Ie(g.reliableMarginRight, function (e, t) {
            return t ? we(e, {
                display: "inline-block"
            }, ke, [e, "marginRight"]) : void 0
        }),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (r, o) {
            C.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + W[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, Le.test(r) || (C.cssHooks[r + o].set = We)
        }),
        C.fn.extend({
            css: function (e, t) {
                return P(this, function (e, t, n) {
                    var i, r, o = {}, a = 0;
                    if (C.isArray(t)) {
                        for (i = Fe(e), r = t.length; a < r; a++) o[t[a]] = C.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function () {
                return Xe(this, !0)
            },
            hide: function () {
                return Xe(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    j(this) ? C(this).show() : C(this).hide()
                })
            }
        }),
        (C.Tween = $e).prototype = {
            constructor: $e,
            init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = $e.propHooks[this.prop];
                return e && e.get ? e.get(this) : $e.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = $e.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $e.propHooks._default.set(this), this
            }
        },
        $e.prototype.init.prototype = $e.prototype, $e.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        $e.propHooks.scrollTop = $e.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        C.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = $e.prototype.init, C.fx.step = {};
    var Ye, Je, Ze, Qe, Ke, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function nt() {
        return T.setTimeout(function () {
            Ye = void 0
        }), Ye = C.now()
    }

    function it(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = W[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function rt(e, t, n) {
        for (var i, r = (ot.tweeners[t] || []).concat(ot.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ot(o, e, t) {
        var n, a, i = 0,
            r = ot.prefilters.length,
            s = C.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var e = Ye || nt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return s.notifyWith(o, [c, n, t]), n < 1 && r ? t : (s.resolveWith(o, [c]), !1)
            }, c = s.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ye || nt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (r = t[i = C.camelCase(n)], o = e[n], C.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                else t[i] = r
        }(u, c.opts.specialEasing); i < r; i++)
            if (n = ot.prefilters[i].call(c, o, u, c.opts)) return C.isFunction(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(n.stop, n)), n;
        return C.map(u, rt, c), C.isFunction(c.opts.start) && c.opts.start.call(o, c), C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    C.Animation = C.extend(ot, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return G(n.elem, e, V.exec(t), n), n
                }
            ]
        },
        tweener: function (e, t) {
            for (var n, i = 0, r = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; i < r; i++) n = e[i], ot.tweeners[n] = ot.tweeners[n] || [], ot.tweeners[n].unshift(t)
        },
        prefilters: [
            function (t, e, n) {
                var i, r, o, a, s, l, c, u = this,
                    h = {}, f = t.style,
                    d = t.nodeType && j(t),
                    p = k.get(t, "fxshow");
                for (i in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, u.always(function () {
                    u.always(function () {
                        s.unqueued--, C.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = C.css(t, "display")) ? k.get(t, "olddisplay") || Te(t.nodeName) : c) && "none" === C.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), e)
                    if (r = e[i], et.exec(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                            if ("show" !== r || !p || void 0 === p[i]) continue;
                            d = !0
                        }
                        h[i] = p && p[i] || C.style(t, i)
                    } else c = void 0;
                if (C.isEmptyObject(h)) "inline" === ("none" === c ? Te(t.nodeName) : c) && (f.display = c);
                else
                    for (i in p ? "hidden" in p && (d = p.hidden) : p = k.access(t, "fxshow", {}), o && (p.hidden = !d), d ? C(t).show() : u.done(function () {
                        C(t).hide()
                    }), u.done(function () {
                        var e;
                        for (e in k.remove(t, "fxshow"), h) C.style(t, e, h[e])
                    }), h) a = rt(d ? p[i] : 0, i, u), i in p || (p[i] = a.start, d && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        ],
        prefilter: function (e, t) {
            t ? ot.prefilters.unshift(e) : ot.prefilters.push(e)
        }
    }),
        C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || C.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !C.isFunction(t) && t
            };
            return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
            }, i
        },
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(j).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (t, e, n, i) {
                function r() {
                    var e = ot(this, C.extend({}, t), a);
                    (o || k.get(this, "finish")) && e.stop(!0)
                }
                var o = C.isEmptyObject(t),
                    a = C.speed(e, n, i);
                return r.finish = r, o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function (r, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                }
                return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = C.timers,
                        i = k.get(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && tt.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || C.dequeue(this, r)
                })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"), this.each(function () {
                    var e, t = k.get(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        r = C.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }),

        C.each(["toggle", "show", "hide"], function (e, i) {
            var r = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(it(i, !0), e, t, n)
            }
        }),
        C.each({
            slideDown: it("show"),
            slideUp: it("hide"),
            slideToggle: it("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, i) {
            C.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n)
            }
        }),
        C.timers = [], C.fx.tick = function () {
            var e, t = 0,
                n = C.timers;
            for (Ye = C.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), Ye = void 0
        }, C.fx.timer = function (e) {
            C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
        }, C.fx.interval = 13, C.fx.start = function () {
            Je = Je || T.setInterval(C.fx.tick, C.fx.interval)
        }, C.fx.stop = function () {
            T.clearInterval(Je), Je = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function (i, e) {
            return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
                var n = T.setTimeout(e, i);
                t.stop = function () {
                    T.clearTimeout(n)
                }
            })
        }, Ze = w.createElement("input"), Qe = w.createElement("select"), Ke = Qe.appendChild(w.createElement("option")), Ze.type = "checkbox", g.checkOn = "" !== Ze.value, g.optSelected = Ke.selected, Qe.disabled = !0, g.optDisabled = !Ke.disabled, (Ze = w.createElement("input")).value = "t", Ze.type = "radio", g.radioValue = "t" === Ze.value;
    var at, st = C.expr.attrHandle;
    C.fn.extend({
        attr: function (e, t) {
            return P(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!g.radioValue && "radio" === t && C.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = C.propFix[n] || n, C.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), at = {
        set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = st[t] || C.find.attr;
        st[t] = function (e, t, n) {
            var i, r;
            return n || (r = st[t], st[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, st[t] = r), i
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e, t) {
            return P(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (C.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        C.propFix[this.toLowerCase()] = this
    });
    var ut = /[\t\r\n\f]/g;

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    C.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).addClass(t.call(this, e, ht(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (r = ht(n), i = 1 === n.nodeType && (" " + r + " ").replace(ut, " ")) {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = C.trim(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this, e, ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[l++];)
                    if (r = ht(n), i = 1 === n.nodeType && (" " + r + " ").replace(ut, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = C.trim(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(r) : this.removeClass(r) : C.isFunction(r) ? this.each(function (e) {
                C(this).toggleClass(r.call(this, e, ht(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if ("string" == o)
                    for (t = 0, n = C(this), i = r.match(L) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != o || ((e = ht(this)) && k.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== r && k.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + ht(t) + " ").replace(ut, " ").indexOf(i)) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        dt = /[\x20\t\r\n\f]+/g;
    C.fn.extend({
        val: function (n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = C.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ft, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : C.trim(C.text(e)).replace(dt, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (((n = i[l]).selected || l === r) && (g.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = C.makeArray(t), a = r.length; a--;)((i = r[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
            set: function (e, t) {
                return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0
            }
        }, g.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function (e, t, n, i) {
            var r, o, a, s, l, c, u = [n || w],
                h = p.call(e, "type") ? e.type : e,
                f = p.call(e, "namespace") ? e.namespace.split(".") : [],
                d = o = n = n || w;
            if (3 !== n.nodeType && 8 !== n.nodeType && !pt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !C.isWindow(n)) {
                    for (a = c.delegateType || h, pt.test(a + h) || (d = d.parentNode); d; d = d.parentNode) u.push(d), o = d;
                    o === (n.ownerDocument || w) && u.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0;
                    (d = u[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? a : c.bindType || h, (l = (k.get(d, "events") || {})[e.type] && k.get(d, "handle")) && l.apply(d, t), (l = s && d[s]) && l.apply && F(d) && (e.result = l.apply(d, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !F(n) || s && C.isFunction(n[h]) && !C.isWindow(n) && ((o = n[s]) && (n[s] = null), n[C.event.triggered = h](), C.event.triggered = void 0, o && (n[s] = o)), e.result
            }
        },
        simulate: function (e, t, n) {
            var i = C.extend(new C.Event(), n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }), C.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? C.event.trigger(e, t, n, !0) : void 0
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        C.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), g.focusin = "onfocusin" in T, g.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        }
        C.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = k.access(e, i);
                t || e.addEventListener(n, r, !0), k.access(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = k.access(e, i) - 1;
                t ? k.access(e, i, t) : (e.removeEventListener(n, r, !0), k.remove(e, i))
            }
        }
    });
    var mt = T.location,
        gt = C.now(),
        vt = /\?/;
    C.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser()).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var _t = /#.*$/,
        yt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xt = /^(?:GET|HEAD)$/,
        Et = /^\/\//,
        Tt = {}, wt = {}, Ct = "*/".concat("*"),
        St = w.createElement("a");

    function Dt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(L) || [];
            if (C.isFunction(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Rt(t, r, o, a) {
        var s = {}, l = t === wt;

        function c(e) {
            var i;
            return s[e] = !0, C.each(t[e] || [], function (e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !s["*"] && c("*")
    }

    function At(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    St.href = mt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ct,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? At(At(e, C.ajaxSettings), t) : At(C.ajaxSettings, e)
        },
        ajaxPrefilter: Dt(Tt),
        ajaxTransport: Dt(wt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, h, f, n, d, i, p, r, m = C.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                _ = C.Deferred(),
                y = C.Callbacks("once memory"),
                b = m.statusCode || {}, o = {}, a = {}, x = 0,
                s = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!n)
                                for (n = {}; t = bt.exec(f);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }

                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? f : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = a[n] = a[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || s;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (_.promise(E).complete = y.add, E.success = E.done, E.error = E.fail, m.url = ((e || m.url || mt.href) + "").replace(_t, "").replace(Et, mt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(L) || [""], null == m.crossDomain) {
                i = w.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = St.protocol + "//" + St.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Rt(Tt, m, t, E), 2 === x) return E;
            for (r in (p = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !xt.test(m.type), h = m.url, m.hasContent || (m.data && (h = m.url += (vt.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = yt.test(h) ? h.replace(yt, "$1_=" + gt++) : h + (vt.test(h) ? "&" : "?") + "_=" + gt++)), m.ifModified && (C.lastModified[h] && E.setRequestHeader("If-Modified-Since", C.lastModified[h]), C.etag[h] && E.setRequestHeader("If-None-Match", C.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ct + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, E, m) || 2 === x)) return E.abort();
            for (r in s = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) E[r](m[r]);
            if (u = Rt(wt, m, t, E)) {
                if (E.readyState = 1, p && v.trigger("ajaxSend", [E, m]), 2 === x) return E;
                m.async && 0 < m.timeout && (d = T.setTimeout(function () {
                    E.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, u.send(o, l)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var r, o, a, s, l, c = t;
                2 !== x && (x = 2, d && T.clearTimeout(d), u = void 0, f = i || "", E.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a = a || r
                        }
                        o = o || a
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                }(m, E, n)), s = function (e, t, n, i) {
                    var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        // console.log(t)
                                        t = a(t)

                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, E, r), r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (C.lastModified[h] = l), (l = E.getResponseHeader("etag")) && (C.etag[h] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || c) + "", r ? _.resolveWith(g, [o, c, E]) : _.rejectWith(g, [E, c, a]), E.statusCode(b), b = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [E, m, r ? o : a]), y.fireWith(g, [E, c]), p && (v.trigger("ajaxComplete", [E, m]), --C.active || C.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function (e, r) {
        C[r] = function (e, t, n, i) {
            return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function (e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function (t) {
            var e;
            return C.isFunction(t) ? this.each(function (e) {
                C(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (n) {
            return C.isFunction(n) ? this.each(function (e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = C.isFunction(t);
            return this.each(function (e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function (e) {
        return !C.expr.filters.visible(e)
    }, C.expr.filters.visible = function (e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Mt = /%20/g,
        Lt = /\[\]$/,
        Ht = /\r?\n/g,
        Ft = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;

    function Nt(n, e, i, r) {
        var t;
        if (C.isArray(e)) C.each(e, function (e, t) {
            i || Lt.test(n) ? r(n, t) : Nt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== C.type(e)) r(n, e);
        else
            for (t in e) Nt(n + "[" + t + "]", e[t], i, r)
    }
    C.param = function (e, t) {
        function n(e, t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, r = [];
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            n(this.name, this.value)
        });
        else
            for (i in e) Nt(i, e[i], t, n);
        return r.join("&").replace(Mt, "+")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Pt.test(this.nodeName) && !Ft.test(e) && (this.checked || !q.test(e))
            }).map(function (e, t) {
                var n = C(this).val();
                return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    }), C.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest()
        } catch (e) { }
    };
    var kt = {
        0: 200,
        1223: 204
    }, It = C.ajaxSettings.xhr();
    g.cors = !!It && "withCredentials" in It, g.ajax = It = !!It, C.ajaxTransport(function (r) {
        var o, a;
        return g.cors || It && !r.crossDomain ? {
            send: function (e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(kt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), a = i.onerror = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
                    4 === i.readyState && T.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        } : void 0
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain) return {
            send: function (e, t) {
                i = C("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function (e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), w.head.appendChild(i[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var Ot = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ot.pop() || C.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Bt, "$1" + i) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || C.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = T[i], T[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? C(T).removeProp(i) : T[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ot.push(i)), o && C.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), C.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || w;
        var i = y.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = te([e], t, r), r && r.length && C(r).remove(), C.merge([], i.childNodes))
    };
    var zt = C.fn.load;

    function jt(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    C.fn.load = function (e, t, n) {
        if ("string" != typeof e && zt) return zt.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = C.trim(e.slice(s)), e = e.slice(0, s)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), C.expr.filters.animated = function (t) {
        return C.grep(C.timers, function (e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = C.css(e, "position"),
                u = C(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, C.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                }, o = i && i.ownerDocument;
            return o ? (e = o.documentElement, C.contains(e, i) ? (r = i.getBoundingClientRect(), n = jt(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (i = e.offset()), i.top += C.css(e[0], "borderTopWidth", !0), i.left += C.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - C.css(n, "marginTop", !0),
                    left: t.left - i.left - C.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || Pe
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function (e) {
            return P(this, function (e, t, n) {
                var i = jt(e);
                return void 0 === n ? i ? i[r] : e[t] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function (e, n) {
        C.cssHooks[n] = Ie(g.pixelPosition, function (e, t) {
            return t ? (t = ke(e, n), He.test(t) ? C(e).position()[n] + "px" : t) : void 0
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function (o, a) {
        C.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function (i, e) {
            C.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return P(this, function (e, t, n) {
                    var i;
                    return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), C.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), C.fn.andSelf = C.fn.addBack;

    var Ut = T.jQuery,
        Vt = T.$;
    C.noConflict = function (e) {
        T.$ === C && (T.$ = Vt)
        e && T.jQuery === C && (T.jQuery = Ut)
        return C
    }
    e || (my$ = T.jQuery = T.$ = C)

    return C
})

// 检测浏览器是否能用画布
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function () {
        try {
            return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
        } catch (e) {
            return !1
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function () {
        var e = "Your browser supports WebGL";
        return this.webgl || (e = window.WebGLRenderingContext ? 'Your graphics card does not seem to support <a class="link" href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>. Find out how to get it <a class="link" href="http://get.webgl.org/">here</a>.' : 'Your browser does not seem to support <a class="link" href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>. Find out how to get it <a class="link" href="http://get.webgl.org/">here</a>.'), e
    }
};


export { Detector, my$ }