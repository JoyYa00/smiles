/* eslint-disable no-unused-expressions */
/*! MolView JavaScript App libraries build on 2020-07-30 */

if (!window.util) {

    var util = {}
}
var EventMap = {
    mousemove: "mousemove",
    mousedown: "mousedown",
    mouseup: "mouseup"
};
Array.prototype.swap = function (t, e) {
    var i = this[t];
    this[t] = this[e]
    this[e] = i
}
util.each = function (t, e, i) {
    util.assert(!util.isNullOrUndefined(t), "array must be defined");
    for (var n = 0; n < t.length; ++n) e.call(i, t[n], n)
}
util.map_each = function (t, e, i) {
    for (var n in util.assert(!util.isNullOrUndefined(t), "map must be defined"), t) e.call(i, n, t[n])
}
util.find = function (t, e, i) {
    for (var n = 0; n < t.length; ++n)
        if (e.call(i, t[n], n)) return n;
    return -1
}
util.findAll = function (t, e, i) {
    for (var n = [], r = 0; r < t.length; ++r) e.call(i, t[r], r) && n.push(t[r]);
    return n
}
util.array = function (t) {
    for (var e = [], i = t.length; 0 <= --i;) e[i] = t[i];
    return e
}
util.isEmpty = function (t) {
    for (var e in t) return !1;
    return !0
}
util.stopEventPropagation = function (t) {
    if ("stopPropagation" in t) t.stopPropagation();
    else {
        if (!("cancelBubble" in t)) throw Error("Browser unrecognized");
        t.cancelBubble = !0
    }
}
util.setElementTextContent = function (t, e) {
    if ("textContent" in t) t.textContent = e;
    else {
        if (!("innerText" in t)) throw Error("Browser unrecognized");
        t.innerText = e
    }
}
util.getElementTextContent = function (t) {
    if ("textContent" in t) return t.textContent;
    if ("innerText" in t) return t.innerText;
    throw Error("Browser unrecognized")
}
util.stringPadded = function (t, e, i) {
    t += "";
    for (var n = ""; t.length + n.length < e;) n += " ";
    return i ? t + n : n + t
}
util.idList = function (t) {
    var e = [];
    for (var i in t) e.push(i);
    return e
}
util.mapArray = function (t, e) {
    for (var i = [], n = 0; n < t.length; ++n) i.push(e[t[n]]);
    return i
}
util.arrayMax = function (t) {
    return Math.max.apply(Math, t)
}
util.arrayMin = function (t) {
    return Math.min.apply(Math, t)
}
util.map = function (t, e, i) {
    for (var n = [], r = 0; r < t.length; ++r) n.push(e.call(i, t[r]));
    return n
}
util.apply = function (t, e) {
    for (var i = 0; i < t.length; ++i) t[i] = e(t[i])
}
util.isUndefined = function (t) {
    return void 0 === t
}
util.ifDef = function (t, e, i, n) {
    t[i] = util.isUndefined(e[i]) ? n : e[i]
}
util.ifDefList = function (t, e, i, n) {
    t[i] = util.isUndefined(e[i]) || null === e[i] ? n : util.array(e[i])
}
util.identityMap = function (t) {
    for (var e = {}, i = 0; i < t.length; ++i) e[t[i]] = t[i];
    return e
}
util.strip = function (t) {
    return t.replace(/\s*$/, "").replace(/^\s*/, "")
}
util.stripRight = function (t) {
    return t.replace(/\s*$/, "")
}
util.stripQuotes = function (t) {
    return '"' === t[0] && '"' === t[t.length - 1] ? t.substr(1, t.length - 2) : t
}
util.paddedFloat = function (t, e, i) {
    var n = t.toFixed(i).replace(",", ".");
    if (n.length > e) throw new Error("number does not fit");
    return util.stringPadded(n, e)
}
util.paddedInt = function (t, e) {
    var i = t.toFixed(0);
    if (i.length > e) throw new Error("number does not fit");
    return util.stringPadded(i, e)
}
util.arrayAddIfMissing = function (t, e) {
    for (var i = 0; i < t.length; ++i)
        if (t[i] === e) return !1;
    return t.push(e), !0
}
util.assert = function (t, e) {
    if (!t) throw new Error(e ? "Assertion failed: " + e : "Assertion failed")
}
util.isNull = function (t) {
    return null === t
}
util.isNullOrUndefined = function (t) {
    return util.isUndefined(t) || util.isNull(t)
}
util.arrayRemoveByValue = function (t, e) {
    util.assert(!util.isUndefined(t) && !util.isNull(t), "array must be defined");
    for (var i = t.indexOf(e), n = 0; 0 <= i;) {
        t.splice(i, 1)
        n += 1
        i = t.indexOf(e)
    }
    return n
}
util.listNextRotate = function (t, e) {
    return t[(t.indexOf(e) + 1) % t.length]
}
util.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t)
}


util.assertDefined = function (t) {
    util.assert(!util.isNullOrUndefined(t))
}
util.Vec2 = function (t, e) {
    if (0 == arguments.length) {
        this.x = 0
        this.y = 0;
    }
    else if (1 == arguments.length) {
        this.x = parseFloat(t.x)
        this.y = parseFloat(t.y)
    }
    else {
        if (2 != arguments.length) throw new Error("util.Vec2(): invalid arguments");
        this.x = parseFloat(t)
        this.y = parseFloat(e)
    }
}, util.Vec2.ZERO = new util.Vec2(0, 0), util.Vec2.UNIT = new util.Vec2(1, 1), util.Vec2.segmentIntersection = function (t, e, i, n) {
    var r = (t.x - i.x) * (e.y - i.y) - (t.y - i.y) * (e.x - i.x),
        o = (t.x - n.x) * (e.y - n.y) - (t.y - n.y) * (e.x - n.x),
        s = (i.x - t.x) * (n.y - t.y) - (i.y - t.y) * (n.x - t.x),
        a = (i.x - e.x) * (n.y - e.y) - (i.y - e.y) * (n.x - e.x);
    return r * o <= 0 && s * a <= 0
}, util.Vec2.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}, util.Vec2.prototype.equals = function (t) {
    return util.assertDefined(t), this.x == t.x && this.y == t.y
}, util.Vec2.prototype.add = function (t) {
    return util.assertDefined(t), new util.Vec2(this.x + t.x, this.y + t.y)
}, util.Vec2.prototype.add_ = function (t) {
    util.assertDefined(t)
    this.x += t.x
    this.y += t.y
}, util.Vec2.prototype.sub = function (t) {
    return util.assertDefined(t), new util.Vec2(this.x - t.x, this.y - t.y)
}, util.Vec2.prototype.scaled = function (t) {
    return util.assertDefined(t), new util.Vec2(this.x * t, this.y * t)
}, util.Vec2.prototype.negated = function () {
    return new util.Vec2(-this.x, -this.y)
}, util.Vec2.prototype.yComplement = function (t) {
    return t = t || 0, new util.Vec2(this.x, t - this.y)
}, util.Vec2.prototype.addScaled = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(this.x + t.x * e, this.y + t.y * e)
}, util.Vec2.prototype.normalized = function () {
    return this.scaled(1 / this.length())
}, util.Vec2.prototype.normalize = function () {
    var t = this.length();
    return !(t < 1e-6) && (this.x /= t, this.y /= t, !0)
}, util.Vec2.prototype.turnLeft = function () {
    return new util.Vec2(-this.y, this.x)
}, util.Vec2.prototype.coordStr = function () {
    return this.x.toString() + " , " + this.y.toString()
}, util.Vec2.prototype.toString = function () {
    return "(" + this.x.toFixed(2) + "," + this.y.toFixed(2) + ")"
}, util.Vec2.dist = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), util.Vec2.diff(t, e).length()
}, util.Vec2.max = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(Math.max(t.x, e.x), Math.max(t.y, e.y))
}, util.Vec2.min = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(Math.min(t.x, e.x), Math.min(t.y, e.y))
}, util.Vec2.prototype.max = function (t) {
    return util.assertDefined(t), new util.Vec2.max(this, t)
}, util.Vec2.prototype.min = function (t) {
    return util.assertDefined(t), new util.Vec2.min(this, t)
}, util.Vec2.prototype.ceil = function () {
    return new util.Vec2(Math.ceil(this.x), Math.ceil(this.y))
}, util.Vec2.prototype.floor = function () {
    return new util.Vec2(Math.floor(this.x), Math.floor(this.y))
}, util.Vec2.sum = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(t.x + e.x, t.y + e.y)
}, util.Vec2.dot = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), t.x * e.x + t.y * e.y
}, util.Vec2.cross = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), t.x * e.y - t.y * e.x
}, util.Vec2.prototype.rotate = function (t) {
    util.assertDefined(t);
    var e = Math.sin(t),
        i = Math.cos(t);
    return this.rotateSC(e, i)
}, util.Vec2.prototype.rotateSC = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(this.x * e - this.y * t, this.x * t + this.y * e)
}, util.Vec2.angle = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), Math.atan2(util.Vec2.cross(t, e), util.Vec2.dot(t, e))
}, util.Vec2.prototype.oxAngle = function () {
    return Math.atan2(this.y, this.x)
}, util.Vec2.diff = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Vec2(t.x - e.x, t.y - e.y)
}, util.Vec2.lc = function () {
    for (var t = new util.Vec2(), e = 0; e < arguments.length / 2; ++e) t = t.addScaled(arguments[2 * e], arguments[2 * e + 1]);
    return t
}, util.Vec2.lc2 = function (t, e, i, n) {
    return util.assertDefined(t), util.assertDefined(i), util.assertDefined(e), util.assertDefined(n), new util.Vec2(t.x * e + i.x * n, t.y * e + i.y * n)
}, util.Vec2.centre = function (t, e) {
    return new util.Vec2.lc2(t, .5, e, .5)
}, util.Box2Abs = function () {
    // eslint-disable-next-line no-unused-expressions
    1 == arguments.length && "min" in arguments[0] && "max" in arguments[0] && (this.p0 = arguments[0].min, this.p1 = arguments[0].max), 2 == arguments.length && arguments[0] instanceof util.Vec2 && arguments[1] instanceof util.Vec2 ? (this.p0 = arguments[0], this.p1 = arguments[1]) : 4 == arguments.length ? (this.p0 = new util.Vec2(arguments[0], arguments[1]), this.p1 = new util.Vec2(arguments[2], arguments[3])) : 0 == arguments.length ? (this.p0 = new util.Vec2(), this.p1 = new util.Vec2()) : new Error("util.Box2Abs constructor only accepts 4 numbers or 2 vectors or no arguments!")
}, util.Box2Abs.prototype.toString = function () {
    return this.p0.toString() + " " + this.p1.toString()
}, util.Box2Abs.fromRelBox = function (t) {
    return util.assertDefined(t), new util.Box2Abs(t.x, t.y, t.x + t.width, t.y + t.height)
}, util.Box2Abs.prototype.clone = function () {
    return new util.Box2Abs(this.p0, this.p1)
}, util.Box2Abs.union = function (t, e) {
    return util.assertDefined(t), util.assertDefined(e), new util.Box2Abs(util.Vec2.min(t.p0, e.p0), util.Vec2.max(t.p1, e.p1))
}, util.Box2Abs.prototype.extend = function (t, e) {
    return util.assertDefined(t), e = e || t, new util.Box2Abs(this.p0.sub(t), this.p1.add(e))
}, util.Box2Abs.prototype.include = function (t) {
    return util.assertDefined(t), new util.Box2Abs(this.p0.min(t), this.p1.max(t))
}, util.Box2Abs.prototype.contains = function (t, e) {
    return e = +(e || 0), util.assertDefined(t), t.x >= this.p0.x - e && t.x <= this.p1.x + e && t.y >= this.p0.y - e && t.y <= this.p1.y + e
}, util.Box2Abs.prototype.translate = function (t) {
    return util.assertDefined(t), new util.Box2Abs(this.p0.add(t), this.p1.add(t))
}, util.Box2Abs.prototype.transform = function (t, e) {
    return util.assert(!util.isNullOrUndefined(t)), new util.Box2Abs(t.call(e, this.p0), t.call(e, this.p1))
}, util.Box2Abs.prototype.sz = function () {
    return this.p1.sub(this.p0)
}, util.Box2Abs.prototype.centre = function () {
    return util.Vec2.centre(this.p0, this.p1)
}, util.Box2Abs.prototype.pos = function () {
    return this.p0
}, util.Vec2.shiftRayBox = function (e, i, t) {
    util.assertDefined(e)
    util.assertDefined(i)
    util.assertDefined(t);
    var n = [t.p0, new util.Vec2(t.p1.x, t.p0.y), t.p1, new util.Vec2(t.p0.x, t.p1.y)].map(function (t) {
        return t.sub(e)
    });
    i = i.normalized();
    for (var r, o, s = n.map(function (t) {
        return util.Vec2.cross(t, i)
    }), a = n.map(function (t) {
        return util.Vec2.dot(t, i)
    }), c = -1, h = -1, l = 0; l < 4; ++l) 0 < s[l] ? (c < 0 || a[c] < a[l]) && (c = l) : (h < 0 || a[h] < a[l]) && (h = l);
    return h < 0 || c < 0 ? 0 : (o = a[c] > a[h] ? (r = h, c) : (r = c, h), a[r] + Math.abs(s[r]) * (a[o] - a[r]) / (Math.abs(s[r]) + Math.abs(s[o])))
}

util.Set = {
    empty: function () {
        return {}
    },
    single: function (t) {
        var e = {};
        return util.Set.add(e, t), e
    },
    size: function (t) {
        var e = 0;
        for (var i in t) t[i] !== Object.prototype[i] && e++;
        return e
    },
    contains: function (t, e) {
        return void 0 !== t[e] && t[e] !== Object.prototype[e]
    },
    subset: function (t, e) {
        for (var i in t)
            if (t[i] !== Object.prototype[i] && e[i] !== t[i]) return !1;
        return !0
    },
    intersection: function (t, e) {
        var i = {};
        for (var n in t) t[n] !== Object.prototype[n] && e[n] === t[n] && util.Set.add(i, n);
        return i
    },
    disjoint: function (t, e) {
        for (var i in t)
            if (t[i] !== Object.prototype[i] && e[i] === t[i]) return !1;
        return !0
    },
    eq: function (t, e) {
        return util.Set.subset(t, e) && util.Set.subset(e, t)
    },
    each: function (t, e, i) {
        for (var n in t) t[n] !== Object.prototype[n] && e.call(i, t[n])
    },
    filter: function (t, e, i) {
        var n = {};
        for (var r in t) t[r] !== Object.prototype[r] && e.call(i, t[r]) && (n[t[r]] = t[r]);
        return n
    },
    pick: function (t) {
        for (var e in t)
            if (t[e] !== Object.prototype[e]) return t[e];
        return null
    },
    list: function (t) {
        var e = [];
        for (var i in t) t[i] !== Object.prototype[i] && e.push(t[i]);
        return e
    },
    add: function (t, e) {
        t[e] = e
    },
    mergeIn: function (e, t) {
        util.Set.each(t, function (t) {
            util.Set.add(e, t)
        })
    },
    remove: function (t, e) {
        var i = t[e];
        return delete t[e], i
    },
    clone: function (t) {
        var e = {};
        return util.Set.mergeIn(e, t), e
    },
    fromList: function (t) {
        var e = {};
        if (t)
            for (var i = 0; i < t.length; ++i) e[+t[i]] = +t[i];
        return e
    },
    keySetInt: function (t) {
        var e = {};
        return t.each(function (t) {
            e[+t] = +t
        }), e
    },
    find: function (t, e, i) {
        for (var n in t)
            if (t[n] !== Object.prototype[n] && e.call(i, t[n])) return n;
        return null
    }
}

util.Map = function (t) {
    if (void 0 !== t && t.constructor !== Object) throw Error("Passed object is not an instance of 'Object'!");
    this._obj = t || {}
    this._count = 0
}, util.Map.prototype.each = function (t, e) {
    for (var i in this._obj) {
        var n = parseInt(i),
            r = this._obj[i];
        isNaN(n) || (i = n)
        t.call(e, i, r)
    }
}, util.Map.prototype.map = function (i, n) {
    var r = new util.Map();
    return this.each(function (t, e) {
        r.set(t, i.call(n, t, e))
    }, this), r
}, util.Map.prototype.find = function (t, e) {
    for (var i in this._obj) {
        var n = parseInt(i),
            r = this._obj[i];
        if (isNaN(n) || (i = n), t.call(e, i, r)) return i
    }
}, util.Map.prototype.findAll = function (t, e) {
    var i = [];
    for (var n in this._obj) {
        var r = parseInt(n),
            o = this._obj[n];
        isNaN(r) || (n = r)
        t.call(e, n, o) && i.push(n)
    }
    return i
}, util.Map.prototype.keys = function () {
    var t = [];
    for (var e in this._obj) t.push(e);
    return t
}, util.Map.prototype.ikeys = function () {
    var t = [];
    for (var e in this._obj) t.push(+e);
    return t
}, util.Map.prototype.set = function (t, e) {
    if (this._count += (void 0 !== e ? 1 : 0) - (void 0 !== this._obj[t] ? 1 : 0), void 0 !== e) return this._obj[t] = e;
    var i = this._obj[t];
    return delete this._obj[t], i
}, util.Map.prototype.get = function (t) {
    if (this._obj[t] !== Object.prototype[t]) return this._obj[t]
}, util.Map.prototype.has = function (t) {
    return this._obj[t] !== Object.prototype[t]
}, util.Map.prototype.unset = function (t) {
    return this.set(t, void 0)
}, util.Map.prototype.update = function (t) {
    for (var e in t) this.set(e, t[e])
}, util.Map.prototype.clear = function () {
    this._obj = {}
    this._count = 0
}, util.Map.prototype.count = function () {
    return this._count
}, util.Map.prototype.idList = function () {
    return util.idList(this._obj)
}, util.Map.prototype.keyOf = function (t) {
    for (var e in this._obj)
        if (this._obj[e] === t) return e
}
util.Pool = function () {
    this._map = new util.Map()
    this._nextId = 0
}, util.Pool.prototype.newId = function () {
    return this._nextId++
}, util.Pool.prototype.add = function (t) {
    var e = this._nextId++;
    return this._map.set(e, t), e
}, util.Pool.prototype.set = function (t, e) {
    this._map.set(t, e)
}, util.Pool.prototype.get = function (t) {
    return this._map.get(t)
}, util.Pool.prototype.has = function (t) {
    return this._map.has(t)
}, util.Pool.prototype.remove = function (t) {
    return this._map.unset(t)
}, util.Pool.prototype.clear = function () {
    this._map.clear()
}, util.Pool.prototype.keys = function () {
    return this._map.keys()
}, util.Pool.prototype.ikeys = function () {
    return this._map.ikeys()
}, util.Pool.prototype.each = function (t, e) {
    this._map.each(t, e)
}, util.Pool.prototype.map = function (t, e) {
    return this._map.map(t, e)
}, util.Pool.prototype.find = function (t, e) {
    return this._map.find(t, e)
}, util.Pool.prototype.count = function () {
    return this._map.count()
}, util.Pool.prototype.keyOf = function (t) {
    return this._map.keyOf(t)
}


function hexToRGB(t) {
    return {
        r: parseInt(t.substring(1, 3), 16),
        g: parseInt(t.substring(3, 5), 16),
        b: parseInt(t.substring(5, 7), 16)
    }
}

function rgbCompToHex(t) {
    t = t.toFixed();
    var e = (t = Math.max(Math.min(t, 255), 0)).toString(16);
    return e.length < 2 && (e = "0" + e), e
}

function rgbToHex(t) {
    return "#" + rgbCompToHex(t.r) + rgbCompToHex(t.g) + rgbCompToHex(t.b)
}

function rgbRescale(t, e) {
    var i = .21 * t.r + .72 * t.g + .07 * t.b;
    return i <= e ? t : {
        r: +(t.r * e / i).toFixed(),
        g: +(t.g * e / i).toFixed(),
        b: +(t.b * e / i).toFixed()
    }
}

if (!window.chem) {
    var chem = {};
    chem.Element = function (t, e, i, n, r, o, s) {
        this.label = t
        this.period = e
        this.group = i
        this.putHydrogenOnTheLeft = n
        this.color = r || "#000000"
        this.labelColor = rgbToHex(rgbRescale(hexToRGB(this.color), 150))
        this.xpos = s || i
        this.ypos = o || e;
        var a = ("0x" + this.color.substring(1, 3)) / 255,
            c = ("0x" + this.color.substring(3, 5)) / 255,
            h = ("0x" + this.color.substring(5, 7)) / 255,
            a = Math.ceil(Math.min(255 * a, 255)).toString(16)
        c = Math.ceil(Math.min(255 * c, 255)).toString(16)
        h = Math.ceil(Math.min(255 * h, 255)).toString(16)
        a = 1 == a.length ? "0" + a : a
        c = 1 == c.length ? "0" + c : c
        h = 1 == h.length ? "0" + h : h
        this.color = "#" + a + c + h
    }
    chem.Element.elements = new util.Map({
        1: new chem.Element("H", 1, 1, !1, "#000000", 1, 1),
        2: new chem.Element("He", 1, 8, !1, "#d9ffff", 1, 18),
        3: new chem.Element("Li", 2, 1, !1, "#cc80ff", 2, 1),
        4: new chem.Element("Be", 2, 2, !1, "#c2ff00", 2, 2),
        5: new chem.Element("B", 2, 3, !1, "#ffb5b5", 2, 13),
        6: new chem.Element("C", 2, 4, !1, "#000000", 2, 14),
        7: new chem.Element("N", 2, 5, !1, "#304ff7", 2, 15),
        8: new chem.Element("O", 2, 6, !0, "#ff0d0d", 2, 16),
        9: new chem.Element("F", 2, 7, !0, "#8fe04f", 2, 17),
        10: new chem.Element("Ne", 2, 8, !1, "#b3e3f5", 2, 18),
        11: new chem.Element("Na", 3, 1, !1, "#ab5cf2", 3, 1),
        12: new chem.Element("Mg", 3, 2, !1, "#8aff00", 3, 2),
        13: new chem.Element("Al", 3, 3, !1, "#bfa6a6", 3, 13),
        14: new chem.Element("Si", 3, 4, !1, "#f0c7a1", 3, 14),
        15: new chem.Element("P", 3, 5, !1, "#ff8000", 3, 15),
        16: new chem.Element("S", 3, 6, !0, "#d9a61a", 3, 16),
        17: new chem.Element("Cl", 3, 7, !0, "#1fd01f", 3, 17),
        18: new chem.Element("Ar", 3, 8, !1, "#80d1e3", 3, 18),
        19: new chem.Element("K", 4, 1, !1, "#8f40d4", 4, 1),
        20: new chem.Element("Ca", 4, 2, !1, "#3dff00", 4, 2),
        21: new chem.Element("Sc", 4, 3, !1, "#e6e6e6", 4, 3),
        22: new chem.Element("Ti", 4, 4, !1, "#bfc2c7", 4, 4),
        23: new chem.Element("V", 4, 5, !1, "#a6a6ab", 4, 5),
        24: new chem.Element("Cr", 4, 6, !1, "#8a99c7", 4, 6),
        25: new chem.Element("Mn", 4, 7, !1, "#9c7ac7", 4, 7),
        26: new chem.Element("Fe", 4, 8, !1, "#e06633", 4, 8),
        27: new chem.Element("Co", 4, 8, !1, "#f08fa1", 4, 9),
        28: new chem.Element("Ni", 4, 8, !1, "#4fd14f", 4, 10),
        29: new chem.Element("Cu", 4, 1, !1, "#c78033", 4, 11),
        30: new chem.Element("Zn", 4, 2, !1, "#7d80b0", 4, 12),
        31: new chem.Element("Ga", 4, 3, !1, "#c28f8f", 4, 13),
        32: new chem.Element("Ge", 4, 4, !1, "#668f8f", 4, 14),
        33: new chem.Element("As", 4, 5, !1, "#bd80e3", 4, 15),
        34: new chem.Element("Se", 4, 6, !0, "#ffa100", 4, 16),
        35: new chem.Element("Br", 4, 7, !0, "#a62929", 4, 17),
        36: new chem.Element("Kr", 4, 8, !1, "#5cb8d1", 4, 18),
        37: new chem.Element("Rb", 5, 1, !1, "#702eb0", 5, 1),
        38: new chem.Element("Sr", 5, 2, !1, "#00ff00", 5, 2),
        39: new chem.Element("Y", 5, 3, !1, "#94ffff", 5, 3),
        40: new chem.Element("Zr", 5, 4, !1, "#94e0e0", 5, 4),
        41: new chem.Element("Nb", 5, 5, !1, "#73c2c9", 5, 5),
        42: new chem.Element("Mo", 5, 6, !1, "#54b5b5", 5, 6),
        43: new chem.Element("Tc", 5, 7, !1, "#3b9e9e", 5, 7),
        44: new chem.Element("Ru", 5, 8, !1, "#248f8f", 5, 8),
        45: new chem.Element("Rh", 5, 8, !1, "#0a7d8c", 5, 9),
        46: new chem.Element("Pd", 5, 8, !1, "#006985", 5, 10),
        47: new chem.Element("Ag", 5, 1, !1, "#bfbfbf", 5, 11),
        48: new chem.Element("Cd", 5, 2, !1, "#ffd98f", 5, 12),
        49: new chem.Element("In", 5, 3, !1, "#a67573", 5, 13),
        50: new chem.Element("Sn", 5, 4, !1, "#668080", 5, 14),
        51: new chem.Element("Sb", 5, 5, !1, "#9e63b5", 5, 15),
        52: new chem.Element("Te", 5, 6, !1, "#d47a00", 5, 16),
        53: new chem.Element("I", 5, 7, !0, "#940094", 5, 17),
        54: new chem.Element("Xe", 5, 8, !1, "#429eb0", 5, 18),
        55: new chem.Element("Cs", 6, 1, !1, "#57178f", 6, 1),
        56: new chem.Element("Ba", 6, 2, !1, "#00c900", 6, 2),
        57: new chem.Element("La", 6, 3, !1, "#70d4ff", 6, 3),
        58: new chem.Element("Ce", 6, 3, !1, "#ffffc7", 8, 4),
        59: new chem.Element("Pr", 6, 3, !1, "#d9ffc7", 8, 5),
        60: new chem.Element("Nd", 6, 3, !1, "#c7ffc7", 8, 6),
        61: new chem.Element("Pm", 6, 3, !1, "#a3ffc7", 8, 7),
        62: new chem.Element("Sm", 6, 3, !1, "#8fffc7", 8, 8),
        63: new chem.Element("Eu", 6, 3, !1, "#61ffc7", 8, 9),
        64: new chem.Element("Gd", 6, 3, !1, "#45ffc7", 8, 10),
        65: new chem.Element("Tb", 6, 3, !1, "#30ffc7", 8, 11),
        66: new chem.Element("Dy", 6, 3, !1, "#1fffc7", 8, 12),
        67: new chem.Element("Ho", 6, 3, !1, "#00ff9c", 8, 13),
        68: new chem.Element("Er", 6, 3, !1, "#00e675", 8, 14),
        69: new chem.Element("Tm", 6, 3, !1, "#00d452", 8, 15),
        70: new chem.Element("Yb", 6, 3, !1, "#00bf38", 8, 16),
        71: new chem.Element("Lu", 6, 3, !1, "#00ab24", 8, 17),
        72: new chem.Element("Hf", 6, 4, !1, "#4dc2ff", 6, 4),
        73: new chem.Element("Ta", 6, 5, !1, "#4da6ff", 6, 5),
        74: new chem.Element("W", 6, 6, !1, "#2194d6", 6, 6),
        75: new chem.Element("Re", 6, 7, !1, "#267dab", 6, 7),
        76: new chem.Element("Os", 6, 8, !1, "#266696", 6, 8),
        77: new chem.Element("Ir", 6, 8, !1, "#175487", 6, 9),
        78: new chem.Element("Pt", 6, 8, !1, "#d1d1e0", 6, 10),
        79: new chem.Element("Au", 6, 1, !1, "#ffd124", 6, 11),
        80: new chem.Element("Hg", 6, 2, !1, "#b8b8d1", 6, 12),
        81: new chem.Element("Tl", 6, 3, !1, "#a6544d", 6, 13),
        82: new chem.Element("Pb", 6, 4, !1, "#575961", 6, 14),
        83: new chem.Element("Bi", 6, 5, !1, "#9e4fb5", 6, 15),
        84: new chem.Element("Po", 6, 6, !1, "#ab5c00", 6, 16),
        85: new chem.Element("At", 6, 7, !1, "#754f45", 6, 17),
        86: new chem.Element("Rn", 6, 8, !1, "#428296", 6, 18),
        87: new chem.Element("Fr", 7, 1, !1, "#420066", 7, 1),
        88: new chem.Element("Ra", 7, 2, !1, "#007d00", 7, 2),
        89: new chem.Element("Ac", 7, 3, !1, "#70abfa", 7, 3),
        90: new chem.Element("Th", 7, 3, !1, "#00baff", 9, 4),
        91: new chem.Element("Pa", 7, 3, !1, "#00a1ff", 9, 5),
        92: new chem.Element("U", 7, 3, !1, "#008fff", 9, 6),
        93: new chem.Element("Np", 7, 3, !1, "#0080ff", 9, 7),
        94: new chem.Element("Pu", 7, 3, !1, "#006bff", 9, 8),
        95: new chem.Element("Am", 7, 3, !1, "#545cf2", 9, 9),
        96: new chem.Element("Cm", 7, 3, !1, "#785ce3", 9, 10),
        97: new chem.Element("Bk", 7, 3, !1, "#8a4fe3", 9, 11),
        98: new chem.Element("Cf", 7, 3, !1, "#a136d4", 9, 12),
        99: new chem.Element("Es", 7, 3, !1, "#b31fd4", 9, 13),
        100: new chem.Element("Fm", 7, 3, !1, "#B31FBA", 9, 14),
        101: new chem.Element("Md", 7, 3, !1, "#B30DA6", 9, 15),
        102: new chem.Element("No", 7, 3, !1, "#BD0D87", 9, 16),
        103: new chem.Element("Lr", 7, 3, !1, "#C70066", 9, 17),
        104: new chem.Element("Rf", 7, 4, !1, "#CC0059", 7, 4),
        105: new chem.Element("Db", 7, 5, !1, "#D1004F", 7, 5),
        106: new chem.Element("Sg", 7, 6, !1, "#D90045", 7, 6),
        107: new chem.Element("Bh", 7, 7, !1, "#E00038", 7, 7),
        108: new chem.Element("Hs", 7, 8, !1, "#E6002E", 7, 8),
        109: new chem.Element("Mt", 7, 8, !1, "#EB0026", 7, 9),
        110: new chem.Element("Ds", 7, 8, !1, "#9595a0", 7, 10),
        111: new chem.Element("Rg", 7, 1, !1, "#b9981a", 7, 11),
        112: new chem.Element("Cn", 7, 2, !1, "#9595a9", 7, 12)
    })
    chem.Element.labelMap = null
    chem.Element.getElementByLabel = function (t) {
        return this.labelMap || (this.labelMap = {}, this.elements.each(function (t, e) {
            this.labelMap[e.label] = +t
        }, this)), this.labelMap.hasOwnProperty(t) ? this.labelMap[t] : null
    }


}
chem.Struct = function () {
    this.atoms = new util.Pool()
    this.bonds = new util.Pool()
    this.sgroups = new util.Pool()
    this.halfBonds = new util.Map()
    this.loops = new util.Pool()
    this.isChiral = !1
    this.isReaction = !1
    this.rxnArrows = new util.Pool()
    this.rxnPluses = new util.Pool()
    this.frags = new util.Pool()
    this.rgroups = new util.Map()
    this.name = ""
    this.sGroupForest = new chem.SGroupForest(this)
}, chem.Struct.prototype.hasRxnProps = function () {
    return 0 <= this.atoms.find(function (t, e) {
        return e.hasRxnProps()
    }, this) || 0 <= this.bonds.find(function (t, e) {
        return e.hasRxnProps()
    }, this)
}, chem.Struct.prototype.hasRxnArrow = function () {
    return 0 < this.rxnArrows.count()
}, chem.Struct.prototype.addRxnArrowIfNecessary = function () {
    var t = !this.hasRxnArrow() && this.hasRxnProps();
    return t && this.rxnArrows.add(new chem.Struct.RxnArrow()), t
}, chem.Struct.prototype.getSGroupsInAtomSet = function (t) {
    var i = new Map();
    util.each(t, function (t) {
        util.Set.list(this.atoms.get(t).sgs).each(function (t) {
            var e = i.get(t);
            util.isUndefined(e) ? e = 1 : e++
            i.set(t, e)
        }, this)
    }, this);
    var r = [];
    return i.each(function (t) {
        var e = parseInt(t.key),
            i = this.sgroups.get(e),
            n = chem.SGroup.getAtoms(this, i);
        t.value == n.length && r.push(e)
    }, this), r
}, chem.Struct.prototype.isBlank = function () {
    return 0 == this.atoms.count() && 0 == this.rxnArrows.count() && 0 == this.rxnPluses.count() && !this.isChiral
}, chem.Struct.prototype.toLists = function () {
    var n = {}, i = [];
    this.atoms.each(function (t, e) {
        n[t] = i.length
        i.push(e)
    });
    var r = [];
    return this.bonds.each(function (t, e) {
        var i = new chem.Struct.Bond(e);
        i.begin = n[e.begin]
        i.end = n[e.end]
        r.push(i)
    }), {
        atoms: i,
        bonds: r
    }
}, chem.Struct.prototype.clone = function (t, e, i, n) {
    var r = new chem.Struct();
    return this.mergeInto(r, t, e, i, !1, n)
}, chem.Struct.prototype.getScaffold = function () {
    var n = util.Set.empty();
    return this.atoms.each(function (t) {
        util.Set.add(n, t)
    }, this), this.rgroups.each(function (t, e) {
        e.frags.each(function (t, i) {
            this.atoms.each(function (t, e) {
                e.fragment == i && util.Set.remove(n, t)
            }, this)
        }, this)
    }, this), this.clone(n)
}, chem.Struct.prototype.getFragmentIds = function (i) {
    var n = util.Set.empty();
    return this.atoms.each(function (t, e) {
        e.fragment == i && util.Set.add(n, t)
    }, this), n
}, chem.Struct.prototype.getFragment = function (t) {
    return this.clone(this.getFragmentIds(t))
}, chem.Struct.prototype.mergeInto = function (r, o, i, t, s, a) {
    o = o || util.Set.keySetInt(this.atoms)
    i = i || util.Set.keySetInt(this.bonds)
    i = util.Set.filter(i, function (t) {
        var e = this.bonds.get(t);
        return util.Set.contains(o, e.begin) && util.Set.contains(o, e.end)
    }, this);
    var c = {};
    this.atoms.each(function (t, e) {
        util.Set.contains(o, t) && (c[e.fragment] = 1)
    });
    var h = {};
    // eslint-disable-next-line no-unused-expressions
    this.frags.each(function (t, e) {
        c[t] && (h[t] = r.frags.add(e.clone()))
    }), this.rgroups.each(function (t, e) {
        var i, n = s;
        (n || (e.frags.each(function (t, e) {
            c[e] && (n = !0)
        }), n)) && ((i = r.rgroups.get(t)) ? e.frags.each(function (t, e) {
            c[e] && i.frags.add(h[e])
        }) : r.rgroups.set(t, e.clone(h)))
    }), null == a && (a = {}), this.atoms.each(function (t, e) {
        util.Set.contains(o, t) && (a[t] = r.atoms.add(e.clone(h)))
    });
    var l = {};
    return this.bonds.each(function (t, e) {
        util.Set.contains(i, t) && (l[t] = r.bonds.add(e.clone(a)))
    }), this.sgroups.each(function (t, e) {
        for (var i = 0; i < e.atoms.length; ++i)
            if (!util.Set.contains(o, e.atoms[i])) return;
        e = chem.SGroup.clone(e, a, l);
        var n = r.sgroups.add(e);
        for (e.id = n, i = 0; i < e.atoms.length; ++i) util.Set.add(r.atoms.get(e.atoms[i]).sgs, n);
        r.sGroupForest.insert(e.id)
    }), r.isChiral = this.isChiral, t || (r.isReaction = this.isReaction, this.rxnArrows.each(function (t, e) {
        r.rxnArrows.add(e.clone())
    }), this.rxnPluses.each(function (t, e) {
        r.rxnPluses.add(e.clone())
    })), r
}, chem.Struct.prototype.findBondId = function (i, n) {
    var r = -1;
    return this.bonds.find(function (t, e) {
        return (e.begin == i && e.end == n || e.begin == n && e.end == i) && (r = t, !0)
    }, this), r
}, chem.Struct.ATOM = {
    RADICAL: {
        NONE: 0,
        SINGLET: 1,
        DOUPLET: 2,
        TRIPLET: 3
    }
}, chem.Struct.radicalElectrons = function (t) {
    if ((t = +t) == chem.Struct.ATOM.RADICAL.NONE) return 0;
    if (t == chem.Struct.ATOM.RADICAL.DOUPLET) return 1;
    if (t == chem.Struct.ATOM.RADICAL.SINGLET || t == chem.Struct.ATOM.RADICAL.TRIPLET) return 2;
    throw new Error("Unknown radical value")
}, chem.Struct.BOND = {
    TYPE: {
        SINGLE: 1,
        DOUBLE: 2,
        TRIPLE: 3,
        AROMATIC: 4,
        SINGLE_OR_DOUBLE: 5,
        SINGLE_OR_AROMATIC: 6,
        DOUBLE_OR_AROMATIC: 7,
        ANY: 8
    },
    STEREO: {
        NONE: 0,
        UP: 1,
        EITHER: 4,
        DOWN: 6,
        CIS_TRANS: 3
    },
    TOPOLOGY: {
        EITHER: 0,
        RING: 1,
        CHAIN: 2
    },
    REACTING_CENTER: {
        NOT_CENTER: -1,
        UNMARKED: 0,
        CENTER: 1,
        UNCHANGED: 2,
        MADE_OR_BROKEN: 4,
        ORDER_CHANGED: 8,
        MADE_OR_BROKEN_AND_CHANGED: 12
    }
}, chem.Struct.FRAGMENT = {
    NONE: 0,
    REACTANT: 1,
    PRODUCT: 2,
    AGENT: 3
}, chem.Struct.Atom = function (t) {
    var e = chem.Struct.Atom.attrGetDefault;
    if (!(t && "label" in t)) throw new Error("Label must be specified!");
    this.label = t.label
    this.fragment = util.isUndefined(t.fragment) ? -1 : t.fragment
    util.ifDef(this, t, "isotope", e("isotope"))
    util.ifDef(this, t, "radical", e("radical"))
    util.ifDef(this, t, "charge", e("charge"))
    util.ifDef(this, t, "rglabel", e("rglabel"))
    util.ifDef(this, t, "attpnt", e("attpnt"))
    util.ifDef(this, t, "explicitValence", e("explicitValence"))
    this.valence = 0
    this.implicitH = 0
    util.isUndefined(t.pp) ? this.pp = new util.Vec2() : this.pp = new util.Vec2(t.pp)
    this.sgs = {}
    util.ifDef(this, t, "ringBondCount", e("ringBondCount"))
    util.ifDef(this, t, "substitutionCount", e("substitutionCount"))
    util.ifDef(this, t, "unsaturatedAtom", e("unsaturatedAtom"))
    util.ifDef(this, t, "hCount", e("hCount"))
    util.ifDef(this, t, "aam", e("aam"))
    util.ifDef(this, t, "invRet", e("invRet"))
    util.ifDef(this, t, "exactChangeFlag", e("exactChangeFlag"))
    util.ifDef(this, t, "rxnFragmentType", -1)
    this.atomList = util.isUndefined(t.atomList) || null == t.atomList ? null : new chem.Struct.AtomList(t.atomList)
    this.neighbors = []
    this.badConn = !1
}, chem.Struct.Atom.getAttrHash = function (t) {
    var e = new Map();
    for (var i in chem.Struct.Atom.attrlist) void 0 !== t[i] && e.set(i, t[i]);
    return e
}, chem.Struct.Atom.attrGetDefault = function (t) {
    if (t in chem.Struct.Atom.attrlist) return chem.Struct.Atom.attrlist[t];
    throw new Error("Attribute unknown")
}, chem.Struct.Atom.attrlist = {
    label: "C",
    isotope: 0,
    radical: 0,
    charge: 0,
    explicitValence: -1,
    ringBondCount: 0,
    substitutionCount: 0,
    unsaturatedAtom: 0,
    hCount: 0,
    atomList: null,
    invRet: 0,
    exactChangeFlag: 0,
    rglabel: null,
    attpnt: null,
    aam: 0
}, chem.Struct.Atom.prototype.clone = function (t) {
    var e = new chem.Struct.Atom(this);
    return t && this.fragment in t && (e.fragment = t[this.fragment]), e
}, chem.Struct.Atom.prototype.isQuery = function () {
    return null != this.atomList || "A" == this.label || this.attpnt || this.hCount
}, chem.Struct.Atom.prototype.pureHydrogen = function () {
    return "H" == this.label && 0 == this.isotope
}, chem.Struct.Atom.prototype.isPlainCarbon = function () {
    return "C" == this.label && 0 == this.isotope && 0 == this.radical && 0 == this.charge && this.explicitValence < 0 && 0 == this.ringBondCount && 0 == this.substitutionCount && 0 == this.unsaturatedAtom && 0 == this.hCount && !this.atomList
}, chem.Struct.Atom.prototype.isPseudo = function () {
    return !this.atomList && !this.rglabel && !chem.Element.getElementByLabel(this.label)
}, chem.Struct.Atom.prototype.hasRxnProps = function () {
    return !(!this.invRet && !this.exactChangeFlag && util.isNull(this.attpnt) && !this.aam)
}, chem.Struct.AtomList = function (t) {
    if (!(t && "notList" in t && "ids" in t)) throw new Error("'notList' and 'ids' must be specified!");
    this.notList = t.notList
    this.ids = t.ids
}, chem.Struct.AtomList.prototype.labelList = function () {
    for (var t = [], e = 0; e < this.ids.length; ++e) t.push(chem.Element.elements.get(this.ids[e]).label);
    return t
}, chem.Struct.AtomList.prototype.label = function () {
    var t = "[" + this.labelList().join(",") + "]";
    return this.notList && (t = "!" + t), t
}, chem.Struct.AtomList.prototype.equals = function (t) {
    return this.notList == t.notList && (this.ids || []).sort().toString() == (t.ids || []).sort().toString()
}, chem.Struct.Bond = function (t) {
    if (!(t && "begin" in t && "end" in t && "type" in t)) throw new Error("'begin', 'end' and 'type' properties must be specified!");
    this.begin = t.begin
    this.end = t.end
    this.type = t.type
    util.ifDef(this, t, "stereo", chem.Struct.BOND.STEREO.NONE)
    util.ifDef(this, t, "topology", chem.Struct.BOND.TOPOLOGY.EITHER)
    util.ifDef(this, t, "reactingCenterStatus", 0)
    this.hb1 = null
    this.hb2 = null
    this.len = 0
    this.center = new util.Vec2()
    this.sb = 0
    this.sa = 0
    this.angle = 0
}, chem.Struct.Bond.attrlist = {
    type: chem.Struct.BOND.TYPE.SINGLE,
    stereo: chem.Struct.BOND.STEREO.NONE,
    topology: chem.Struct.BOND.TOPOLOGY.EITHER,
    reactingCenterStatus: 0
}, chem.Struct.Bond.getAttrHash = function (t) {
    var e = new Map();
    for (var i in chem.Struct.Bond.attrlist) void 0 !== t[i] && e.set(i, t[i]);
    return e
}, chem.Struct.Bond.attrGetDefault = function (t) {
    if (t in chem.Struct.Bond.attrlist) return chem.Struct.Bond.attrlist[t];
    throw new Error("Attribute unknown")
}, chem.Struct.Bond.prototype.hasRxnProps = function () {
    return !!this.reactingCenterStatus
}, chem.Struct.Bond.prototype.getCenter = function (t) {
    var e = t.atoms.get(this.begin).pp,
        i = t.atoms.get(this.end).pp;
    return util.Vec2.lc2(e, .5, i, .5)
}, chem.Struct.Bond.prototype.getDir = function (t) {
    var e = t.atoms.get(this.begin).pp;
    return t.atoms.get(this.end).pp.sub(e).normalized()
}, chem.Struct.Bond.prototype.clone = function (t) {
    var e = new chem.Struct.Bond(this);
    return t && (e.begin = t[e.begin], e.end = t[e.end]), e
}, chem.Struct.Bond.prototype.findOtherEnd = function (t) {
    if (t == this.begin) return this.end;
    if (t == this.end) return this.begin;
    throw new Error("Bond end not found")
}, chem.HalfBond = function (t, e, i) {
    if (3 != arguments.length) throw new Error("Invalid parameter number!");
    this.begin = +t
    this.end = +e
    this.bid = +i
    this.dir = new util.Vec2()
    this.norm = new util.Vec2()
    this.ang = 0
    this.p = new util.Vec2()
    this.loop = -1
    this.contra = -1
    this.next = -1
    this.leftSin = 0
    this.leftCos = 0
    this.leftNeighbor = 0
    this.rightSin = 0
    this.rightCos = 0
    this.rightNeighbor = 0
}, chem.Struct.prototype.initNeighbors = function () {
    this.atoms.each(function (t, e) {
        e.neighbors = []
    })
    this.bonds.each(function (t, e) {
        var i = this.atoms.get(e.begin),
            n = this.atoms.get(e.end);
        i.neighbors.push(e.hb1)
        n.neighbors.push(e.hb2)
    }, this)
}, chem.Struct.prototype.bondInitHalfBonds = function (t, e) {
    (e = e || this.bonds.get(t)).hb1 = 2 * t
    e.hb2 = 2 * t + 1
    this.halfBonds.set(e.hb1, new chem.HalfBond(e.begin, e.end, t))
    this.halfBonds.set(e.hb2, new chem.HalfBond(e.end, e.begin, t));
    var i = this.halfBonds.get(e.hb1),
        n = this.halfBonds.get(e.hb2);
    i.contra = e.hb2
    n.contra = e.hb1
}, chem.Struct.prototype.halfBondUpdate = function (t) {
    var e = this.halfBonds.get(t),
        i = this.atoms.get(e.begin).pp,
        n = this.atoms.get(e.end).pp,
        r = util.Vec2.diff(n, i).normalized();
    e.dir = 1e-4 < util.Vec2.dist(n, i) ? r : new util.Vec2(1, 0)
    e.norm = e.dir.turnLeft()
    e.ang = e.dir.oxAngle()
    e.loop < 0 && (e.loop = -1)
}, chem.Struct.prototype.initHalfBonds = function () {
    this.halfBonds.clear()
    this.bonds.each(this.bondInitHalfBonds, this)
}, chem.Struct.prototype.setHbNext = function (t, e) {
    this.halfBonds.get(this.halfBonds.get(t).contra).next = e
}, chem.Struct.prototype.halfBondSetAngle = function (t, e) {
    var i = this.halfBonds.get(t),
        n = this.halfBonds.get(e);
    n.rightCos = i.leftCos = util.Vec2.dot(n.dir, i.dir)
    n.rightSin = i.leftSin = util.Vec2.cross(n.dir, i.dir)
    i.leftNeighbor = e
    n.rightNeighbor = t
}, chem.Struct.prototype.atomAddNeighbor = function (t) {
    for (var e = this.halfBonds.get(t), i = this.atoms.get(e.begin), n = 0, n = 0; n < i.neighbors.length && !(this.halfBonds.get(i.neighbors[n]).ang > e.ang); ++n);
    i.neighbors.splice(n, 0, t);
    var r = i.neighbors[(n + 1) % i.neighbors.length],
        o = i.neighbors[(n + i.neighbors.length - 1) % i.neighbors.length];
    this.setHbNext(o, t)
    this.setHbNext(t, r)
    this.halfBondSetAngle(t, o)
    this.halfBondSetAngle(r, t)
}, chem.Struct.prototype.atomSortNeighbors = function (t) {
    var e, i = this.atoms.get(t),
        n = this;
    for (i.neighbors = i.neighbors.sort(function (t, e) {
        return n.halfBonds.get(t).ang - n.halfBonds.get(e).ang
    }, this), e = 0; e < i.neighbors.length; ++e) this.halfBonds.get(this.halfBonds.get(i.neighbors[e]).contra).next = i.neighbors[(e + 1) % i.neighbors.length];
    for (e = 0; e < i.neighbors.length; ++e) this.halfBondSetAngle(i.neighbors[(e + 1) % i.neighbors.length], i.neighbors[e])
}, chem.Struct.prototype.sortNeighbors = function (t) {
    util.each(t, function (t) {
        this.atomSortNeighbors(t)
    }, this)
}, chem.Struct.prototype.atomUpdateHalfBonds = function (t) {
    for (var e = this.atoms.get(t).neighbors, i = 0; i < e.length; ++i) {
        var n = e[i];
        this.halfBondUpdate(n), this.halfBondUpdate(this.halfBonds.get(n).contra)
    }
}, chem.Struct.prototype.updateHalfBonds = function (t) {
    util.each(t, function (t) {
        this.atomUpdateHalfBonds(t)
    }, this)
}, chem.Struct.prototype.sGroupsRecalcCrossBonds = function () {
    this.sgroups.each(function (t, e) {
        e.xBonds = [], e.neiAtoms = []
    }, this), this.bonds.each(function (i, n) {
        var r = this.atoms.get(n.begin),
            o = this.atoms.get(n.end);
        util.Set.each(r.sgs, function (t) {
            var e;
            util.Set.contains(o.sgs, t) || ((e = this.sgroups.get(t)).xBonds.push(i), util.arrayAddIfMissing(e.neiAtoms, n.end))
        }, this), util.Set.each(o.sgs, function (t) {
            var e;
            util.Set.contains(r.sgs, t) || ((e = this.sgroups.get(t)).xBonds.push(i), util.arrayAddIfMissing(e.neiAtoms, n.begin))
        }, this)
    }, this)
}, chem.Struct.prototype.sGroupDelete = function (t) {
    for (var e = this.sgroups.get(t), i = 0; i < e.atoms.length; ++i) util.Set.remove(this.atoms.get(e.atoms[i]).sgs, t);
    this.sGroupForest.remove(t), this.sgroups.remove(t)
}, chem.Struct.itemSetPos = function (t, e) {
    t.pp = e
}, chem.Struct.prototype._itemSetPos = function (t, e, i, n) {
    chem.Struct.itemSetPos(this[t].get(e), i, n)
}, chem.Struct.prototype._atomSetPos = function (t, e, i) {
    this._itemSetPos("atoms", t, e, i)
}, chem.Struct.prototype._rxnPlusSetPos = function (t, e, i) {
    this._itemSetPos("rxnPluses", t, e, i)
}, chem.Struct.prototype._rxnArrowSetPos = function (t, e, i) {
    this._itemSetPos("rxnArrows", t, e, i)
}, chem.Struct.prototype.getCoordBoundingBox = function (i) {
    function n(t) {
        e ? (e.min = util.Vec2.min(e.min, t), e.max = util.Vec2.max(e.max, t)) : e = {
            min: t,
            max: t
        }
    }
    var e = null,
        r = void 0 === i;
    return this.atoms.each(function (t, e) {
        (r || util.Set.contains(i, t)) && n(e.pp)
    }), r && (this.rxnPluses.each(function (t, e) {
        n(e.pp)
    }), this.rxnArrows.each(function (t, e) {
        n(e.pp)
    })), !e && r && (e = {
        min: new util.Vec2(0, 0),
        max: new util.Vec2(1, 1)
    }), e
}, chem.Struct.prototype.getCoordBoundingBoxObj = function () {
    var n = null;
    return this.atoms.each(function (t, e) {
        var i;
        i = e.pp, n ? (n.min = util.Vec2.min(n.min, i), n.max = util.Vec2.max(n.max, i)) : n = {
            min: new util.Vec2(i),
            max: new util.Vec2(i)
        }
    }), n
}, chem.Struct.prototype.getBondLengthData = function () {
    var i = 0,
        n = 0;
    return this.bonds.each(function (t, e) {
        i += util.Vec2.dist(this.atoms.get(e.begin).pp, this.atoms.get(e.end).pp), n++
    }, this), {
        cnt: n,
        totalLength: i
    }
}, chem.Struct.prototype.getAvgBondLength = function () {
    var t = this.getBondLengthData();
    return 0 < t.cnt ? t.totalLength / t.cnt : -1
}, chem.Struct.prototype.getAvgClosestAtomDistance = function () {
    for (var t, e, i = 0, n = 0, r = this.atoms.keys(), o = 0; o < r.length; ++o) {
        for (t = -1, e = 0; e < r.length; ++e) e != o && (n = util.Vec2.dist(this.atoms.get(r[e]).pp, this.atoms.get(r[o]).pp), (t < 0 || n < t) && (t = n));
        i += t
    }
    return 0 < r.length ? i / r.length : -1
}, chem.Struct.prototype.checkBondExists = function (i, n) {
    var r = !1;
    return this.bonds.each(function (t, e) {
        (e.begin == i && e.end == n || e.end == i && e.begin == n) && (r = !0)
    }, this), r
}, chem.Loop = function (t, i, e) {
    this.hbs = t, this.dblBonds = 0, this.aromatic = !0, this.convex = e || !1, util.each(t, function (t) {
        var e = i.bonds.get(i.halfBonds.get(t).bid);
        e.type != chem.Struct.BOND.TYPE.AROMATIC && (this.aromatic = !1), e.type == chem.Struct.BOND.TYPE.DOUBLE && this.dblBonds++
    }, this)
}, chem.Struct.RxnPlus = function (t) {
    t = t || {}, this.pp = t.pp ? new util.Vec2(t.pp) : new util.Vec2()
}, chem.Struct.RxnPlus.prototype.clone = function () {
    return new chem.Struct.RxnPlus(this)
}, chem.Struct.RxnArrow = function (t) {
    t = t || {}, this.pp = t.pp ? new util.Vec2(t.pp) : new util.Vec2()
}, chem.Struct.RxnArrow.prototype.clone = function () {
    return new chem.Struct.RxnArrow(this)
}, chem.Struct.prototype.findConnectedComponent = function (t) {
    for (var r = {}, o = [t], s = util.Set.empty(); 0 < o.length;)(function () {
        var t = o.pop();
        r[t] = 1, util.Set.add(s, t);
        for (var e = this.atoms.get(t), i = 0; i < e.neighbors.length; ++i) {
            var n = this.halfBonds.get(e.neighbors[i]).end;
            util.Set.contains(s, n) || o.push(n)
        }
    }).apply(this);
    return s
}, chem.Struct.prototype.findConnectedComponents = function (n) {
    this.halfBonds.count() || (this.initHalfBonds(), this.initNeighbors(), this.updateHalfBonds(this.atoms.keys()), this.sortNeighbors(this.atoms.keys()));
    var r = {};
    this.atoms.each(function (t, e) {
        r[t] = -1
    }, this);
    var o = [];
    return this.atoms.each(function (t, e) {
        var i;
        (n || e.fragment < 0) && r[t] < 0 && (i = this.findConnectedComponent(t), o.push(i), util.Set.each(i, function (t) {
            r[t] = 1
        }, this))
    }, this), o
}, chem.Struct.prototype.markFragment = function (t) {
    var e = this.frags.add(new chem.Struct.Fragment());
    util.Set.each(t, function (t) {
        this.atoms.get(t).fragment = e
    }, this)
}, chem.Struct.prototype.markFragmentByAtomId = function (t) {
    this.markFragment(this.findConnectedComponent(t))
}, chem.Struct.prototype.markFragments = function () {
    for (var t = this.findConnectedComponents(), e = 0; e < t.length; ++e) this.markFragment(t[e])
}, chem.Struct.Fragment = function () { }, chem.Struct.Fragment.prototype.clone = function () {
    return new chem.Struct.Fragment()
}, chem.Struct.Fragment.getAtoms = function (t, i) {
    var n = [];
    return t.atoms.each(function (t, e) {
        e.fragment == i && n.push(t)
    }, this), n
}, chem.Struct.RGroup = function (t) {
    t = t || {}, this.frags = new util.Pool(), this.resth = t.resth || !1, this.range = t.range || "", this.ifthen = t.ifthen || 0
}, chem.Struct.RGroup.prototype.getAttrs = function () {
    return {
        resth: this.resth,
        range: this.range,
        ifthen: this.ifthen
    }
}, chem.Struct.RGroup.findRGroupByFragment = function (t, i) {
    var n;
    return t.each(function (t, e) {
        util.isUndefined(e.frags.keyOf(i)) || (n = t)
    }), n
}, chem.Struct.RGroup.prototype.clone = function (i) {
    var n = new chem.Struct.RGroup(this);
    return this.frags.each(function (t, e) {
        n.frags.add(i ? i[e] : e)
    }), n
}, chem.Struct.prototype.scale = function (i) {
    1 != i && (this.atoms.each(function (t, e) {
        e.pp = e.pp.scaled(i)
    }, this), this.rxnPluses.each(function (t, e) {
        e.pp = e.pp.scaled(i)
    }, this), this.rxnArrows.each(function (t, e) {
        e.pp = e.pp.scaled(i)
    }, this), this.sgroups.each(function (t, e) {
        e.pp = e.pp ? e.pp.scaled(i) : null
    }, this))
}, chem.Struct.prototype.rescale = function () {
    var t = this.getAvgBondLength();
    t < 0 && !this.isReaction && (t = this.getAvgClosestAtomDistance()), t < .001 && (t = 1);
    var e = 1 / t;
    this.scale(e)
}, chem.Struct.prototype.loopHasSelfIntersections = function (t) {
    for (var e = 0; e < t.length; ++e)
        for (var i = this.halfBonds.get(t[e]), n = this.atoms.get(i.begin).pp, r = this.atoms.get(i.end).pp, o = util.Set.fromList([i.begin, i.end]), s = e + 2; s < t.length; ++s) {
            var a = this.halfBonds.get(t[s]);
            if (!util.Set.contains(o, a.begin) && !util.Set.contains(o, a.end)) {
                var c = this.atoms.get(a.begin).pp,
                    h = this.atoms.get(a.end).pp;
                if (util.Vec2.segmentIntersection(n, r, c, h)) return !0
            }
        }
    return !1
}, chem.Struct.prototype.partitionLoop = function (t) {
    var e = [],
        i = !0;
    t: for (; i;) {
        for (var n = {}, r = 0; r < t.length; ++r) {
            var o = t[r],
                s = this.halfBonds.get(o).begin,
                a = this.halfBonds.get(o).end;
            if (a in n) {
                var c = n[a],
                    h = t.slice(c, r + 1);
                e.push(h), r < t.length && t.splice(c, r - c + 1);
                continue t
            }
            n[s] = r
        }
        i = !1, e.push(t)
    }
    return e
}, chem.Struct.prototype.halfBondAngle = function (t, e) {
    var i = this.halfBonds.get(t),
        n = this.halfBonds.get(e);
    return Math.atan2(util.Vec2.cross(i.dir, n.dir), util.Vec2.dot(i.dir, n.dir))
}, chem.Struct.prototype.loopIsConvex = function (t) {
    for (var e = 0; e < t.length; ++e) {
        if (0 < this.halfBondAngle(t[e], t[(e + 1) % t.length])) return !1
    }
    return !0
}, chem.Struct.prototype.loopIsInner = function (t) {
    for (var e = 2 * Math.PI, i = 0; i < t.length; ++i) {
        var n = t[i],
            r = t[(i + 1) % t.length],
            o = this.halfBonds.get(r),
            s = this.halfBondAngle(n, r);
        o.contra == t[i] ? e += Math.PI : e += s
    }
    return Math.abs(e) < Math.PI
}, chem.Struct.prototype.findLoops = function () {
    var n, r, o, s, a = [],
        c = util.Set.empty();
    return this.halfBonds.each(function (t, e) {
        if (-1 == e.loop)
            for (n = t, r = 0, o = []; r <= this.halfBonds.count(); n = this.halfBonds.get(n).next, ++r) {
                if (0 < r && n == t) {
                    var i = this.partitionLoop(o);
                    util.each(i, function (t) {
                        this.loopIsInner(t) && !this.loopHasSelfIntersections(t) ? (s = util.arrayMin(t), this.loops.set(s, new chem.Loop(t, this, this.loopIsConvex(t)))) : s = -2, util.each(t, function (t) {
                            this.halfBonds.get(t).loop = s, util.Set.add(c, this.halfBonds.get(t).bid)
                        }, this), 0 <= s && a.push(s)
                    }, this);
                    break
                }
                o.push(n)
            }
    }, this), {
        newLoops: a,
        bondsToMark: util.Set.list(c)
    }
}, chem.Struct.prototype.prepareLoopStructure = function () {
    this.initHalfBonds(), this.initNeighbors(), this.updateHalfBonds(this.atoms.keys()), this.sortNeighbors(this.atoms.keys()), this.findLoops()
}, chem.Struct.prototype.atomAddToSGroup = function (t, e) {
    chem.SGroup.addAtom(this.sgroups.get(t), e), util.Set.add(this.atoms.get(e).sgs, t)
}

void 0 === String.prototype.trim && (String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, "")
})
var isUndefined = function (t) {
    return util.isUndefined(t)
}
chem.Molfile = function () { }, chem.Molfile.loadRGroupFragments = !0, chem.Molfile.parseDecimalInt = function (t) {
    var e = parseInt(t, 10);
    return isNaN(e) ? 0 : e
}, chem.Molfile.partitionLine = function (t, e, i) {
    for (var n = [], r = 0, o = 0; r < e.length; ++r) n.push(t.slice(o, o + e[r])), i && o++, o += e[r];
    return n
}, chem.Molfile.partitionLineFixed = function (t, e, i) {
    for (var n = [], r = 0; r < t.length; r += e) n.push(t.slice(r, r + e)), i && r++;
    return n
}, chem.Molfile.parseCTFile = function (t) {
    var e = null;
    return (e = 0 == t[0].search("\\$RXN") ? chem.Molfile.parseRxn(t) : chem.Molfile.parseMol(t)).initHalfBonds(), e.initNeighbors(), e.markFragments(), e
}, chem.Molfile.fmtInfo = {
    bondTypeMap: {
        1: chem.Struct.BOND.TYPE.SINGLE,
        2: chem.Struct.BOND.TYPE.DOUBLE,
        3: chem.Struct.BOND.TYPE.TRIPLE,
        4: chem.Struct.BOND.TYPE.AROMATIC,
        5: chem.Struct.BOND.TYPE.SINGLE_OR_DOUBLE,
        6: chem.Struct.BOND.TYPE.SINGLE_OR_AROMATIC,
        7: chem.Struct.BOND.TYPE.DOUBLE_OR_AROMATIC,
        8: chem.Struct.BOND.TYPE.ANY
    },
    bondStereoMap: {
        0: chem.Struct.BOND.STEREO.NONE,
        1: chem.Struct.BOND.STEREO.UP,
        4: chem.Struct.BOND.STEREO.EITHER,
        6: chem.Struct.BOND.STEREO.DOWN,
        3: chem.Struct.BOND.STEREO.CIS_TRANS
    },
    v30bondStereoMap: {
        0: chem.Struct.BOND.STEREO.NONE,
        1: chem.Struct.BOND.STEREO.UP,
        2: chem.Struct.BOND.STEREO.EITHER,
        3: chem.Struct.BOND.STEREO.DOWN
    },
    bondTopologyMap: {
        0: chem.Struct.BOND.TOPOLOGY.EITHER,
        1: chem.Struct.BOND.TOPOLOGY.RING,
        2: chem.Struct.BOND.TOPOLOGY.CHAIN
    },
    countsLinePartition: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6],
    atomLinePartition: [10, 10, 10, 1, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    bondLinePartition: [3, 3, 3, 3, 3, 3, 3],
    atomListHeaderPartition: [3, 1, 1, 4, 1, 1],
    atomListHeaderLength: 11,
    atomListHeaderItemLength: 4,
    chargeMap: [0, 3, 2, 1, 0, -1, -2, -3],
    valenceMap: [void 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0],
    implicitHydrogenMap: [void 0, 0, 1, 2, 3, 4],
    v30atomPropMap: {
        CHG: "charge",
        RAD: "radical",
        MASS: "isotope",
        VAL: "explicitValence",
        HCOUNT: "hCount",
        INVRET: "invRet",
        SUBST: "substitutionCount",
        UNSAT: "unsaturatedAtom",
        RBCNT: "ringBondCount"
    },
    rxnItemsPartition: [3, 3, 3]
}, chem.Molfile.parseAtomLine = function (t) {
    var e = chem.Molfile,
        i = e.partitionLine(t, e.fmtInfo.atomLinePartition),
        n = {
            pp: new util.Vec2(parseFloat(i[0]), -parseFloat(i[1])),
            label: i[4].trim(),
            explicitValence: e.fmtInfo.valenceMap[e.parseDecimalInt(i[10])],
            massDifference: e.parseDecimalInt(i[5]),
            charge: e.fmtInfo.chargeMap[e.parseDecimalInt(i[6])],
            hCount: e.parseDecimalInt(e.parseDecimalInt(i[8])),
            stereoCare: 0 != e.parseDecimalInt(i[9]),
            aam: e.parseDecimalInt(i[14]),
            invRet: e.parseDecimalInt(i[15]),
            exactChangeFlag: 0 != e.parseDecimalInt(i[16])
        };
    return new chem.Struct.Atom(n)
}, chem.Molfile.stripV30 = function (t) {
    if ("M  V30 " != t.slice(0, 7)) throw Error("Prefix invalid");
    return t.slice(7)
}, chem.Molfile.parseAtomLineV3000 = function (t) {
    var e, i, n, r, o = chem.Molfile,
        s = o.spaceparsplit(t),
        a = {
            pp: new util.Vec2(parseFloat(s[2]), -parseFloat(s[3])),
            aam: s[5].trim()
        }, c = s[1].trim();
    if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2)), "]" == c.charAt(c.length - 1)) {
        var h = {
            notList: !1
        };
        if ("NOT [" == (c = c.substr(0, c.length - 1)).substr(0, 5)) h.notList = !0, c = c.substr(5);
        else {
            if ("[" != c.charAt(0)) throw new Error("Error: atom list expected, found '" + c + "'");
            c = c.substr(1)
        }
        h.ids = o.labelsListToIds(c.split(",")), a.atomList = new chem.Struct.AtomList(h), a.label = "L#"
    } else a.label = c;
    for (s.splice(0, 6), r = 0; r < s.length; ++r)
        if (i = (e = o.splitonce(s[r], "="))[0], n = e[1], i in o.fmtInfo.v30atomPropMap) {
            var l = o.parseDecimalInt(n);
            if ("VAL" == i) {
                if (0 == l) continue; - 1 == l && (l = 0)
            }
            a[o.fmtInfo.v30atomPropMap[i]] = l
        } else if ("RGROUPS" == i)
            for (var u = (n = n.trim().substr(1, n.length - 2)).split(" ").slice(1), m = a.rglabel = 0; m < u.length; ++m) a.rglabel |= 1 << u[m] - 1;
        else "ATTCHPT" == i && (a.attpnt = +n.trim());
    return new chem.Struct.Atom(a)
}, chem.Molfile.parseBondLineV3000 = function (t) {
    var e, i, n, r, o = chem.Molfile,
        s = o.spaceparsplit(t),
        a = {
            begin: o.parseDecimalInt(s[2]) - 1,
            end: o.parseDecimalInt(s[3]) - 1,
            type: o.fmtInfo.bondTypeMap[o.parseDecimalInt(s[1])]
        };
    for (s.splice(0, 4), r = 0; r < s.length; ++r) i = (e = o.splitonce(s[r], "="))[0], n = e[1], "CFG" == i ? (a.stereo = o.fmtInfo.v30bondStereoMap[o.parseDecimalInt(n)], a.type == chem.Struct.BOND.TYPE.DOUBLE && a.stereo == chem.Struct.BOND.STEREO.EITHER && (a.stereo = chem.Struct.BOND.STEREO.CIS_TRANS)) : "TOPO" == i ? a.topology = o.fmtInfo.bondTopologyMap[o.parseDecimalInt(n)] : "RXCTR" == i ? a.reactingCenterStatus = o.parseDecimalInt(n) : "STBOX" == i && (a.stereoCare = o.parseDecimalInt(n));
    return new chem.Struct.Bond(a)
}, chem.Molfile.parseBondLine = function (t) {
    var e = chem.Molfile,
        i = e.partitionLine(t, e.fmtInfo.bondLinePartition),
        n = {
            begin: e.parseDecimalInt(i[0]) - 1,
            end: e.parseDecimalInt(i[1]) - 1,
            type: e.fmtInfo.bondTypeMap[e.parseDecimalInt(i[2])],
            stereo: e.fmtInfo.bondStereoMap[e.parseDecimalInt(i[3])],
            topology: e.fmtInfo.bondTopologyMap[e.parseDecimalInt(i[5])],
            reactingCenterStatus: e.parseDecimalInt(i[6])
        };
    return new chem.Struct.Bond(n)
}, chem.Molfile.parseAtomListLine = function (t) {
    for (var e = chem.Molfile, i = e.partitionLine(t, e.fmtInfo.atomListHeaderPartition), n = e.parseDecimalInt(i[0]) - 1, r = "T" == i[2].trim(), o = e.parseDecimalInt(i[4].trim()), s = t.slice(e.fmtInfo.atomListHeaderLength), a = [], c = e.fmtInfo.atomListHeaderItemLength, h = 0; h < o; ++h) a[h] = e.parseDecimalInt(s.slice(h * c, (h + 1) * c - 1));
    return {
        aid: n,
        atomList: new chem.Struct.AtomList({
            notList: r,
            ids: a
        })
    }
}, chem.Molfile.readKeyValuePairs = function (t, e) {
    for (var i = chem.Molfile, n = {}, r = i.partitionLineFixed(t, 3, !0), o = i.parseDecimalInt(r[0]), s = 0; s < o; ++s) n[i.parseDecimalInt(r[2 * s + 1]) - 1] = e ? r[2 * s + 2].trim() : i.parseDecimalInt(r[2 * s + 2]);
    return n
}, chem.Molfile.readKeyMultiValuePairs = function (t, e) {
    for (var i = chem.Molfile, n = [], r = i.partitionLineFixed(t, 3, !0), o = i.parseDecimalInt(r[0]), s = 0; s < o; ++s) n.push([i.parseDecimalInt(r[2 * s + 1]) - 1, e ? r[2 * s + 2].trim() : i.parseDecimalInt(r[2 * s + 2])]);
    return n
}, chem.Molfile.labelsListToIds = function (t) {
    for (var e = [], i = 0; i < t.length; ++i) e.push(chem.Element.getElementByLabel(t[i].trim()));
    return e
}, chem.Molfile.parsePropertyLineAtomList = function (t, e) {
    var i = chem.Molfile,
        n = i.parseDecimalInt(t[1]) - 1,
        r = i.parseDecimalInt(t[2]),
        o = "T" == t[4].trim(),
        s = i.labelsListToIds(e.slice(0, r)),
        a = {};
    return a[n] = new chem.Struct.AtomList({
        notList: o,
        ids: s
    }), a
}, chem.Molfile.initSGroup = function (t, e) {
    var i = chem.Molfile.readKeyValuePairs(e, !0);
    for (var n in i) {
        var r = i[n];
        if (!(r in chem.SGroup.TYPES)) throw new Error("Unsupported S-group type");
        var o = new chem.SGroup(r);
        t[o.number = n] = o
    }
}, chem.Molfile.applySGroupProp = function (t, e, i, n, r) {
    var o = chem.Molfile.readKeyValuePairs(i, !n);
    for (var s in o) (r ? t[s] : t[s].data)[e] = o[s]
}, chem.Molfile.toIntArray = function (t) {
    for (var e = chem.Molfile, i = [], n = 0; n < t.length; ++n) i[n] = e.parseDecimalInt(t[n]);
    return i
}, chem.Molfile.applySGroupArrayProp = function (t, e, i, n) {
    var r = chem.Molfile,
        o = r.parseDecimalInt(i.slice(1, 4)) - 1,
        s = r.parseDecimalInt(i.slice(4, 8)),
        a = r.toIntArray(r.partitionLineFixed(i.slice(8), 3, !0));
    if (a.length != s) throw new Error("File format invalid");
    n && util.apply(a, function (t) {
        return t + n
    }), t[o][e] = t[o][e].concat(a)
}, chem.Molfile.applyDataSGroupName = function (t, e) {
    t.data.fieldName = e
}, chem.Molfile.applyDataSGroupQuery = function (t, e) {
    t.data.query = e
}, chem.Molfile.applyDataSGroupQueryOp = function (t, e) {
    t.data.queryOp = e
}, chem.Molfile.applyDataSGroupDesc = function (t, e) {
    var i = chem.Molfile,
        n = i.partitionLine(e, [4, 31, 2, 20, 2, 3], !1),
        r = i.parseDecimalInt(n[0]) - 1,
        o = n[1].trim(),
        s = n[2].trim(),
        a = n[3].trim(),
        c = n[4].trim(),
        h = n[5].trim(),
        l = t[r];
    l.data.fieldType = s, l.data.fieldName = o, l.data.units = a, l.data.query = c, l.data.queryOp = h
}, chem.Molfile.applyDataSGroupInfo = function (t, e) {
    var i = chem.Molfile,
        n = i.partitionLine(e, [10, 10, 4, 1, 1, 1, 3, 3, 3, 3, 2, 3, 2], !1),
        r = parseFloat(n[0]),
        o = parseFloat(n[1]),
        s = "A" == n[3].trim(),
        a = "A" == n[4].trim(),
        c = "U" == n[5].trim(),
        h = "ALL" == (h = n[7].trim()) ? -1 : i.parseDecimalInt(h),
        l = n[10].trim(),
        u = i.parseDecimalInt(n[11].trim());
    t.pp = new util.Vec2(r, -o), t.data.attached = s, t.data.absolute = a, t.data.showUnits = c, t.data.nCharsToDisplay = h, t.data.tagChar = l, t.data.daspPos = u
}, chem.Molfile.applyDataSGroupInfoLine = function (t, e) {
    var i = chem.Molfile,
        n = t[i.parseDecimalInt(e.substr(0, 4)) - 1];
    i.applyDataSGroupInfo(n, e.substr(5))
}, chem.Molfile.applyDataSGroupData = function (t, e, i) {
    t.data.fieldValue = (t.data.fieldValue || "") + e, i && (t.data.fieldValue = util.stripRight(t.data.fieldValue), t.data.fieldValue.startsWith('"') && t.data.fieldValue.endsWith('"') && (t.data.fieldValue = t.data.fieldValue.substr(1, t.data.fieldValue.length - 2)), t.data.fieldValue += "\n")
}, chem.Molfile.applyDataSGroupDataLine = function (t, e, i) {
    var n = chem.Molfile,
        r = n.parseDecimalInt(e.substr(0, 5)) - 1,
        o = e.substr(5),
        s = t[r];
    n.applyDataSGroupData(s, o, i)
}, chem.Molfile.parsePropertyLines = function (t, e, i, n, r, o) {
    for (var s = chem.Molfile, a = new util.Map(); i < n;) {
        var c = e[i];
        if ("A" == c.charAt(0)) a.get("label") || a.set("label", new util.Map()), a.get("label").set(s.parseDecimalInt(c.slice(3, 6)) - 1, e[++i]);
        else if ("M" == c.charAt(0)) {
            var h = c.slice(3, 6),
                l = c.slice(6);
            if ("END" == h) break;
            if ("CHG" == h) a.get("charge") || a.set("charge", new util.Map()), a.get("charge").update(s.readKeyValuePairs(l));
            else if ("RAD" == h) a.get("radical") || a.set("radical", new util.Map()), a.get("radical").update(s.readKeyValuePairs(l));
            else if ("ISO" == h) a.get("isotope") || a.set("isotope", new util.Map()), a.get("isotope").update(s.readKeyValuePairs(l));
            else if ("RBC" == h) a.get("ringBondCount") || a.set("ringBondCount", new util.Map()), a.get("ringBondCount").update(s.readKeyValuePairs(l));
            else if ("SUB" == h) a.get("substitutionCount") || a.set("substitutionCount", new util.Map()), a.get("substitutionCount").update(s.readKeyValuePairs(l));
            else if ("UNS" == h) a.get("unsaturatedAtom") || a.set("unsaturatedAtom", new util.Map()), a.get("unsaturatedAtom").update(s.readKeyValuePairs(l));
            else if ("RGP" == h) {
                a.get("rglabel") || a.set("rglabel", new util.Map());
                for (var u = a.get("rglabel"), m = s.readKeyMultiValuePairs(l), d = 0; d < m.length; d++) {
                    var p = m[d];
                    u.set(p[0], (u.get(p[0]) || 0) | 1 << p[1] - 1)
                }
            } else if ("LOG" == h) {
                l = l.slice(4);
                var f = s.parseDecimalInt(l.slice(0, 3).trim()),
                    g = s.parseDecimalInt(l.slice(4, 7).trim()),
                    b = s.parseDecimalInt(l.slice(8, 11).trim()),
                    S = l.slice(12).trim(),
                    w = {};
                0 < g && (w.ifthen = g), w.resth = 1 == b, w.range = S, o[f] = w
            } else if ("APO" == h) a.get("attpnt") || a.set("attpnt", new util.Map()), a.get("attpnt").update(s.readKeyValuePairs(l));
            else if ("ALS" == h) {
                a.get("atomList") || a.set("atomList", new util.Map());
                var v = s.parsePropertyLineAtomList(s.partitionLine(l, [1, 3, 3, 1, 1, 1]), s.partitionLineFixed(l.slice(10), 4, !1));
                for (var y in a.get("atomList").update(v), a.get("label") || a.set("label", new util.Map()), v) a.get("label").set(y, "L#")
            } else {
                "STY" == h ? s.initSGroup(r, l) : "SST" == h ? s.applySGroupProp(r, "subtype", l) : "SLB" == h ? s.applySGroupProp(r, "label", l, !0) : "SPL" == h ? s.applySGroupProp(r, "parent", l, !0, !0) : "SCN" == h ? s.applySGroupProp(r, "connectivity", l) : "SAL" == h ? s.applySGroupArrayProp(r, "atoms", l, -1) : "SBL" == h ? s.applySGroupArrayProp(r, "bonds", l, -1) : "SPA" == h ? s.applySGroupArrayProp(r, "patoms", l, -1) : "SMT" == h ? r[s.parseDecimalInt(l.slice(0, 4)) - 1].data.subscript = l.slice(4).trim() : "SDT" == h ? s.applyDataSGroupDesc(r, l) : "SDD" == h ? s.applyDataSGroupInfoLine(r, l) : "SCD" == h ? s.applyDataSGroupDataLine(r, l, !1) : "SED" == h && s.applyDataSGroupDataLine(r, l, !0)
            }
        } ++i
    }
    return a
}, chem.Molfile.applyAtomProp = function (i, t, n, e) {
    t.each(function (t, e) {
        i.get(t)[n] = e
    })
}, chem.Molfile.parseCTabV2000 = function (t, e) {
    var i = new chem.Struct(),
        n = chem.Molfile,
        r = n.parseDecimalInt(e[0]),
        o = n.parseDecimalInt(e[1]),
        s = n.parseDecimalInt(e[2]);
    i.isChiral = 0 != n.parseDecimalInt(e[4]);
    var a = n.parseDecimalInt(e[5]),
        c = n.parseDecimalInt(e[10]),
        h = 0,
        l = t.slice(h, h + r);
    h += r;
    var u = t.slice(h, h + o);
    h += o;
    var m = t.slice(h, h + s);
    h += s + a;
    for (var d = l.map(n.parseAtomLine), p = 0; p < d.length; ++p) i.atoms.add(d[p]);
    var f = u.map(n.parseBondLine);
    for (p = 0; p < f.length; ++p) i.bonds.add(f[p]);
    var g = m.map(n.parseAtomListLine);
    util.each(g, function (t) {
        i.atoms.get(t.aid).atomList = t.atomList, i.atoms.get(t.aid).label = "L#"
    });
    var b = {}, S = {};
    n.parsePropertyLines(i, t, h, Math.min(t.length, h + c), b, S).each(function (t, e) {
        n.applyAtomProp(i.atoms, e, t)
    });
    var w, v = {};
    for (w in b) {
        var y, E, x = b[w];
        "DAT" !== x.type || 0 !== x.atoms.length || 0 <= (y = b[w].parent) && ("GEN" === (E = b[y - 1]).type && (x.atoms = util.array(E.atoms)))
    }
    for (w in b) chem.SGroup.addGroup(i, b[w], v);
    var B = [];
    for (w in b) chem.SGroup.filter(i, b[w], v), 0 != b[w].atoms.length || b[w].allAtoms || B.push(w);
    for (p = 0; p < B.length; ++p) i.sGroupForest.remove(B[p]), i.sgroups.remove(B[p]);
    for (var A in S) i.rgroups.set(A, new chem.Struct.RGroup(S[A]));
    return i
}, chem.Molfile.spaceparsplit = function (t) {
    for (var e, i = [], n = 0, r = -1, o = t.toArray(), s = !1, a = 0; a < t.length; ++a) "(" == (e = o[a]) ? n++ : ")" == e && n--, '"' == e && (s = !s), s || " " != o[a] || 0 != n || (r + 1 < a && i.push(t.slice(r + 1, a)), r = a);
    return r + 1 < a && i.push(t.slice(r + 1, a)), r = a, i
}, chem.Molfile.splitonce = function (t, e) {
    var i = t.indexOf(e);
    return [t.slice(0, i), t.slice(i + 1)]
}, chem.Molfile.splitSGroupDef = function (t) {
    for (var e = [], i = 0, n = !1, r = 0; r < t.length; ++r) {
        var o = t.charAt(r);
        '"' == o ? n = !n : n || ("(" == o ? i++ : ")" == o ? i-- : " " == o && 0 == i && (e.push(t.slice(0, r)), t = t.slice(r + 1).trim(), r = 0))
    }
    if (0 != i) throw new Error("Brace balance broken. S-group properies invalid!");
    return 0 < t.length && e.push(t.trim()), e
}, chem.Molfile.parseBracedNumberList = function (t, e) {
    if (!t) return null;
    var i = [],
        n = (t = (t = t.trim()).substr(1, t.length - 2)).split(" ");
    e = e || 0;
    for (var r = 1; r < n.length; ++r) i.push(+n[r] + e);
    return i
}, chem.Molfile.v3000parseCollection = function (t, e, i) {
    for (i++;
        "M  V30 END COLLECTION" != e[i].trim();) i++;
    return ++i
}, chem.Molfile.v3000parseSGroup = function (t, e, i, n, r) {
    var o = chem.Molfile,
        s = "";
    for (r++; r < e.length;) {
        if ("END SGROUP" == (s = o.stripV30(e[r++]).trim()).trim()) return r;
        for (;
            "-" == s.charAt(s.length - 1);) s = (s.substr(0, s.length - 1) + o.stripV30(e[r++])).trim();
        var a = o.splitSGroupDef(s),
            c = a[1],
            h = new chem.SGroup(c);
        h.number = +a[0], h.type = c, h.label = +a[2], i[h.number] = h;
        for (var l = {}, u = 3; u < a.length; ++u) {
            var m = o.splitonce(a[u], "=");
            if (2 != m.length) throw new Error("A record of form AAA=BBB or AAA=(...) expected, got '" + a[u] + "'");
            var d = m[0];
            d in l || (l[d] = []), l[d].push(m[1])
        }
        h.atoms = o.parseBracedNumberList(l.ATOMS[0], -1), l.PATOMS && (h.patoms = o.parseBracedNumberList(l.PATOMS[0], -1)), h.bonds = l.BONDS ? o.parseBracedNumberList(l.BONDS[0], -1) : [];
        var p = l.BRKXYZ;
        if (h.brkxyz = [], p)
            for (var f = 0; f < p.length; ++f) h.brkxyz.push(o.parseBracedNumberList(p[f]));
        l.MULT && (h.data.subscript = +l.MULT[0]), l.LABEL && (h.data.subscript = l.LABEL[0].trim()), l.CONNECT && (h.data.connectivity = l.CONNECT[0].toLowerCase()), l.FIELDDISP && o.applyDataSGroupInfo(h, util.stripQuotes(l.FIELDDISP[0])), l.FIELDDATA && o.applyDataSGroupData(h, l.FIELDDATA[0], !0), l.FIELDNAME && o.applyDataSGroupName(h, l.FIELDNAME[0]), l.QUERYTYPE && o.applyDataSGroupQuery(h, l.QUERYTYPE[0]), l.QUERYOP && o.applyDataSGroupQueryOp(h, l.QUERYOP[0]), chem.SGroup.addGroup(t, h, n)
    }
    throw new Error("S-group declaration incomplete.")
}, chem.Molfile.parseCTabV3000 = function (t, e) {
    var i = new chem.Struct(),
        n = chem.Molfile,
        r = 0;
    if ("M  V30 BEGIN CTAB" != t[r++].trim()) throw Error("CTAB V3000 invalid");
    if ("M  V30 COUNTS" != t[r].slice(0, 13)) throw Error("CTAB V3000 invalid");
    var o, s = t[r].slice(14).split(" ");
    if (i.isChiral = 1 == n.parseDecimalInt(s[4]), "M  V30 BEGIN ATOM" == t[++r].trim()) {
        for (r++; r < t.length && "END ATOM" != (o = n.stripV30(t[r++]).trim());) {
            for (;
                "-" == o.charAt(o.length - 1);) o = (o.substring(0, o.length - 1) + n.stripV30(t[r++])).trim();
            i.atoms.add(n.parseAtomLineV3000(o))
        }
        if ("M  V30 BEGIN BOND" == t[r].trim())
            for (r++; r < t.length && "END BOND" != (o = n.stripV30(t[r++]).trim());) {
                for (;
                    "-" == o.charAt(o.length - 1);) o = (o.substring(0, o.length - 1) + n.stripV30(t[r++])).trim();
                i.bonds.add(n.parseBondLineV3000(o))
            }
        for (var a = {}, c = {};
            "M  V30 END CTAB" != t[r].trim();)
            if ("M  V30 BEGIN COLLECTION" == t[r].trim()) r = n.v3000parseCollection(i, t, r);
            else {
                if ("M  V30 BEGIN SGROUP" != t[r].trim()) throw Error("CTAB V3000 invalid");
                r = n.v3000parseSGroup(i, t, a, c, r)
            }
    }
    if ("M  V30 END CTAB" != t[r++].trim()) throw Error("CTAB V3000 invalid");
    return e || n.readRGroups3000(i, t.slice(r)), i
}, chem.Molfile.readRGroups3000 = function (t, e) {
    for (var i = {}, n = {}, r = 0, o = chem.Molfile; r < e.length && 0 == e[r].search("M  V30 BEGIN RGROUP");) {
        var s = e[r++].split(" ").pop();
        for (i[s] = [], n[s] = {}; ;) {
            var a = e[r].trim();
            if (0 != a.search("M  V30 RLOGIC")) {
                if ("M  V30 BEGIN CTAB" != a) throw Error("CTAB V3000 invalid");
                for (var c = 0; c < e.length && "M  V30 END CTAB" != e[r + c].trim(); ++c);
                var h = e.slice(r, r + c + 1),
                    l = this.parseCTabV3000(h, !0);
                if (i[s].push(l), "M  V30 END RGROUP" == e[r = r + c + 1].trim()) {
                    r++;
                    break
                }
            } else {
                var u = (a = a.slice(13)).trim().split(/\s+/g),
                    m = o.parseDecimalInt(u[0]),
                    d = o.parseDecimalInt(u[1]),
                    p = u.slice(2).join(" "),
                    f = {};
                0 < m && (f.ifthen = m), f.resth = 1 == d, f.range = p, n[s] = f, r++
            }
        }
    }
    for (var g in i)
        for (var b = 0; b < i[g].length; ++b) {
            var S = i[g][b];
            S.rgroups.set(g, new chem.Struct.RGroup(n[g]));
            var w = S.frags.add(new chem.Struct.Fragment());
            S.rgroups.get(g).frags.add(w), S.atoms.each(function (t, e) {
                e.fragment = w
            }), S.mergeInto(t)
        }
}, chem.Molfile.parseMol = function (t) {
    if (0 == t[0].search("\\$MDL")) return this.parseRg2000(t);
    var e = this.parseCTab(t.slice(3));
    return e.name = t[0].trim(), e
}, chem.Molfile.parseCTab = function (t) {
    var e = chem.Molfile,
        i = e.partitionLine(t[0], e.fmtInfo.countsLinePartition),
        n = i[11].trim();
    if (t = t.slice(1), "V2000" == n) return this.parseCTabV2000(t, i);
    if ("V3000" == n) return this.parseCTabV3000(t, !chem.Molfile.loadRGroupFragments);
    throw Error("Molfile version unknown: " + n)
}, chem.MolfileSaver = function (t) {
    this.molecule = null, this.molfile = null, this.v3000 = t || !1
}, chem.MolfileSaver.prototype.prepareSGroups = function (i) {
    var n = this.molecule,
        r = (n.sgroups, []);
    if (util.each(this.molecule.sGroupForest.getSGroupsBFS().reverse(), function (t) {
        var e = n.sgroups.get(t);
        try {
            e.prepareForSaving(n)
        } catch (t) {
            if (!i || "number" != typeof t.id) throw t;
            r.push(t.id)
        }
    }, this), 0 < r.length) throw new Error(r.length.toString() + " invalid S-groups were detected. They will be omitted.");
    for (var t = 0; t < r.length; ++t) n.sGroupDelete(r[t]);
    return n
}, chem.MolfileSaver.getComponents = function (t) {
    var e = t.findConnectedComponents(!0),
        i = [],
        n = null;
    t.rxnArrows.each(function (t, e) {
        n = e.pp.x
    }), t.rxnPluses.each(function (t, e) {
        i.push(e.pp.x)
    }), null != n && i.push(n), i.sort(function (t, e) {
        return t - e
    });
    for (var r = [], o = 0; o < e.length; ++o) {
        for (var s = t.getCoordBoundingBox(e[o]), a = util.Vec2.lc2(s.min, .5, s.max, .5), c = 0; a.x > i[c];)++c;
        r[c] = r[c] || {}, util.Set.mergeIn(r[c], e[o])
    }
    var h = [],
        l = [],
        u = [];
    for (o = 0; o < r.length; ++o) r[o] ? (s = t.getCoordBoundingBox(r[o]), (a = util.Vec2.lc2(s.min, .5, s.max, .5)).x < n ? l.push(r[o]) : u.push(r[o])) : h.push("");
    return {
        reactants: l,
        products: u
    }
}, chem.MolfileSaver.prototype.getCTab = function (t, e) {
    return this.molecule = t.clone(), this.molfile = "", this.writeCTab2000(e), this.molfile
}, chem.MolfileSaver.prototype.saveMolecule = function (n, t, e) {
    if (this.reaction = 0 < n.rxnArrows.count(), 1 < n.rxnArrows.count()) throw new Error("Reaction may not contain more than one arrow");
    if (this.molfile = "", this.reaction) {
        if (0 < n.rgroups.count()) throw new Error("Unable to save the structure - reactions with r-groups are not supported at the moment");
        var i = chem.MolfileSaver.getComponents(n),
            r = i.reactants,
            o = i.products,
            s = r.concat(o);
        this.molfile = "$RXN\n\n\n\n" + util.paddedInt(r.length, 3) + util.paddedInt(o.length, 3) + util.paddedInt(0, 3) + "\n";
        for (var a = 0; a < s.length; ++a) {
            var c = new chem.MolfileSaver(!1),
                h = n.clone(s[a], null, !0),
                l = c.saveMolecule(h, !1, !0);
            this.molfile += "$MOL\n" + l
        }
        return this.molfile
    }
    if (0 < n.rgroups.count()) {
        if (!e) {
            var u = new chem.MolfileSaver(!1).getCTab(n.getScaffold(), n.rgroups);
            return this.molfile = "$MDL  REV  1\n$MOL\n$HDR\n\n\n\n$END HDR\n", this.molfile += "$CTAB\n" + u + "$END CTAB\n", n.rgroups.each(function (t, e) {
                this.molfile += "$RGP\n", this.writePaddedNumber(t, 3), this.molfile += "\n", e.frags.each(function (t, e) {
                    var i = new chem.MolfileSaver(!1).getCTab(n.getFragment(e));
                    this.molfile += "$CTAB\n" + i + "$END CTAB\n"
                }, this), this.molfile += "$END RGP\n"
            }, this), this.molfile += "$END MOL\n", this.molfile
        }
        n = n.getScaffold()
    }
    return this.molecule = n.clone(), this.prepareSGroups(t), this.writeHeader(), this.writeCTab2000(), this.molfile
}, chem.MolfileSaver.prototype.writeHeader = function () {
    var t = new Date();
    this.writeCR(), this.writeWhiteSpace(2), this.write("MolView"), this.writeWhiteSpace(), this.writeCR((t.getMonth() + 1).toPaddedString(2) + t.getDate().toPaddedString(2) + (t.getFullYear() % 100).toPaddedString(2) + t.getHours().toPaddedString(2) + t.getMinutes().toPaddedString(2) + "2D 1   1.00000     0.00000     0"), this.writeCR()
}, chem.MolfileSaver.prototype.write = function (t) {
    this.molfile += t
}, chem.MolfileSaver.prototype.writeCR = function (t) {
    0 == arguments.length && (t = ""), this.molfile += t + "\n"
}, chem.MolfileSaver.prototype.writeWhiteSpace = function (t) {
    0 == arguments.length && (t = 1);
    for (var e = 0; e < t; e++) this.write(" ")
}, chem.MolfileSaver.prototype.writePadded = function (t, e) {
    this.write(t), this.writeWhiteSpace(e - t.length)
}, chem.MolfileSaver.prototype.writePaddedNumber = function (t, e) {
    var i = (+t).toString();
    this.writeWhiteSpace(e - i.length), this.write(i)
}, chem.MolfileSaver.prototype.writePaddedFloat = function (t, e, i) {
    this.write(util.paddedFloat(t, e, i))
}, chem.MolfileSaver.prototype.writeCTab2000Header = function () {
    this.writePaddedNumber(this.molecule.atoms.count(), 3), this.writePaddedNumber(this.molecule.bonds.count(), 3), this.writePaddedNumber(0, 3), this.writeWhiteSpace(3), this.writePaddedNumber(this.molecule.isChiral ? 1 : 0, 3), this.writePaddedNumber(0, 3), this.writeWhiteSpace(12), this.writePaddedNumber(999, 3), this.writeCR(" V2000")
}, chem.MolfileSaver.prototype.writeCTab2000 = function (t) {
    this.writeCTab2000Header(), this.mapping = {};
    var n = 1,
        r = [],
        o = [];
    for (this.molecule.atoms.each(function (t, e) {
        this.writePaddedFloat(e.pp.x, 10, 4), this.writePaddedFloat(-e.pp.y, 10, 4), this.writePaddedFloat(0, 10, 4), this.writeWhiteSpace();
        var i = e.label;
        null != e.atomList ? (i = "L", r.push(t)) : null == chem.Element.getElementByLabel(i) && -1 == ["A", "Q", "X", "*", "R#"].indexOf(i) && (i = "C", o.push(t)), this.writePadded(i, 3), this.writePaddedNumber(0, 2), this.writePaddedNumber(0, 3), this.writePaddedNumber(0, 3), isUndefined(e.hCount) && (e.hCount = 0), this.writePaddedNumber(e.hCount, 3), isUndefined(e.stereoCare) && (e.stereoCare = 0), this.writePaddedNumber(e.stereoCare, 3), this.writePaddedNumber(e.explicitValence < 0 ? 0 : 0 == e.explicitValence ? 15 : e.explicitValence, 3), this.writePaddedNumber(0, 3), this.writePaddedNumber(0, 3), this.writePaddedNumber(0, 3), isUndefined(e.aam) && (e.aam = 0), this.writePaddedNumber(e.aam, 3), isUndefined(e.invRet) && (e.invRet = 0), this.writePaddedNumber(e.invRet, 3), isUndefined(e.exactChangeFlag) && (e.exactChangeFlag = 0), this.writePaddedNumber(e.exactChangeFlag, 3), this.writeCR(), this.mapping[t] = n, n++
    }, this), this.bondMapping = {}, n = 1, this.molecule.bonds.each(function (t, e) {
        this.bondMapping[t] = n++, this.writePaddedNumber(this.mapping[e.begin], 3), this.writePaddedNumber(this.mapping[e.end], 3), this.writePaddedNumber(e.type, 3), isUndefined(e.stereo) && (e.stereo = 0), this.writePaddedNumber(e.stereo, 3), this.writeWhiteSpace(3), isUndefined(e.topology) && (e.topology = 0), this.writePaddedNumber(e.topology, 3), isUndefined(e.reactingCenterStatus) && (e.reactingCenterStatus = 0), this.writePaddedNumber(e.reactingCenterStatus, 3), this.writeCR()
    }, this); 0 < o.length;) this.write("A  "), this.writePaddedNumber(o[0] + 1, 3), this.writeCR(), this.writeCR(this.molecule.atoms.get(o[0]).label), o.splice(0, 1);
    var s = new Array(),
        a = new Array(),
        c = new Array(),
        h = new Array(),
        l = new Array(),
        u = new Array(),
        m = new Array(),
        d = new Array(),
        p = new Array();
    this.molecule.atoms.each(function (t, e) {
        if (0 != e.charge && s.push([t, e.charge]), 0 != e.isotope && a.push([t, e.isotope]), 0 != e.radical && c.push([t, e.radical]), null != e.rglabel && "R#" == e.label)
            for (var i = 0; i < 32; i++) e.rglabel & 1 << i && h.push([t, i + 1]);
        null != e.attpnt && u.push([t, e.attpnt]), 0 != e.ringBondCount && m.push([t, e.ringBondCount]), 0 != e.substitutionCount && p.push([t, e.substitutionCount]), 0 != e.unsaturatedAtom && d.push([t, e.unsaturatedAtom])
    }), t && t.each(function (t, e) {
        var i;
        (e.resth || 0 < e.ifthen || 0 < e.range.length) && (i = "  1 " + util.paddedInt(t, 3) + " " + util.paddedInt(e.ifthen, 3) + " " + util.paddedInt(e.resth ? 1 : 0, 3) + "   " + e.range, l.push(i))
    });

    function e(t, e) {
        for (; 0 < e.length;) {
            for (var i = new Array(); 0 < e.length && i.length < 8;) i.push(e[0]), e.splice(0, 1);
            this.write(t), this.writePaddedNumber(i.length, 3), util.each(i, function (t) {
                this.writeWhiteSpace(), this.writePaddedNumber(this.mapping[t[0]], 3), this.writeWhiteSpace(), this.writePaddedNumber(t[1], 3)
            }, this), this.writeCR()
        }
    }
    e.call(this, "M  CHG", s), e.call(this, "M  ISO", a), e.call(this, "M  RAD", c), e.call(this, "M  RGP", h);
    for (var i = 0; i < l.length; ++i) this.write("M  LOG" + l[i] + "\n");
    if (e.call(this, "M  APO", u), e.call(this, "M  RBC", m), e.call(this, "M  SUB", p), e.call(this, "M  UNS", d), 0 < r.length)
        for (i = 0; i < r.length; ++i) {
            var f = r[i],
                g = this.molecule.atoms.get(f).atomList;
            this.write("M  ALS"), this.writePaddedNumber(f + 1, 4), this.writePaddedNumber(g.ids.length, 3), this.writeWhiteSpace(), this.write(g.notList ? "T" : "F");
            for (var b = g.labelList(), S = 0; S < b.length; ++S) this.writeWhiteSpace(), this.writePadded(b[S], 3);
            this.writeCR()
        }
    var w = {}, v = 1,
        y = {}, E = this.molecule.sGroupForest.getSGroupsBFS();
    util.each(E, function (t) {
        y[v] = t, w[t] = v++
    }, this);
    for (var x = 1; x < v; ++x) {
        var B = y[x],
            A = this.molecule.sgroups.get(B);
        this.write("M  STY"), this.writePaddedNumber(1, 3), this.writeWhiteSpace(1), this.writePaddedNumber(x, 3), this.writeWhiteSpace(1), this.writePadded(A.type, 3), this.writeCR(), this.write("M  SLB"), this.writePaddedNumber(1, 3), this.writeWhiteSpace(1), this.writePaddedNumber(x, 3), this.writeWhiteSpace(1), this.writePaddedNumber(x, 3), this.writeCR();
        var D, M = this.molecule.sGroupForest.parent.get(B);
        0 <= M && (this.write("M  SPL"), this.writePaddedNumber(1, 3), this.writeWhiteSpace(1), this.writePaddedNumber(x, 3), this.writeWhiteSpace(1), this.writePaddedNumber(w[M], 3), this.writeCR()), "SRU" == A.type && A.data.connectivity && (D = "", D += " ", D += util.stringPadded(x.toString(), 3), D += " ", D += util.stringPadded(A.data.connectivity, 3, !0), this.write("M  SCN"), this.writePaddedNumber(1, 3), this.write(D.toUpperCase()), this.writeCR()), "SRU" == A.type && (this.write("M  SMT "), this.writePaddedNumber(x, 3), this.writeWhiteSpace(), this.write(A.data.subscript || "n"), this.writeCR()), this.writeCR(A.saveToMolfile(this.molecule, w, this.mapping, this.bondMapping))
    }
    this.writeCR("M  END")
}, chem.Molfile.parseRxn = function (t) {
    var e = chem.Molfile,
        i = t[0].trim().split(" ");
    return 1 < i.length && "V3000" == i[1] ? e.parseRxn3000(t) : e.parseRxn2000(t)
}, chem.Molfile.parseRxn2000 = function (t) {
    var e = chem.Molfile;
    t = t.slice(4);
    var i = e.partitionLine(t[0], e.fmtInfo.rxnItemsPartition),
        n = +i[0],
        r = +i[1],
        o = +i[2];
    t = t.slice(1);
    for (var s = []; 0 < t.length && "$MOL" == t[0].substr(0, 4);) {
        t = t.slice(1);
        for (var a = 0; a < t.length && "$MOL" != t[a].substr(0, 4);) a++;
        s.push(chem.Molfile.parseMol(t.slice(0, a))), t = t.slice(a)
    }
    return e.rxnMerge(s, n, r, o)
}, chem.Molfile.parseRxn3000 = function (i) {
    function n(t) {
        util.assert(t, "CTab format invalid")
    }

    function t(t) {
        for (var e = t; e < i.length; ++e)
            if ("M  V30 END CTAB" == i[e].trim()) return e;
        n(!1)
    }

    function e(t) {
        for (var e = t; e < i.length; ++e)
            if ("M  V30 END RGROUP" == i[e].trim()) return e;
        n(!1)
    }
    for (var r = chem.Molfile, o = (i = i.slice(4))[0].split(/\s+/g).slice(3), s = +o[0], a = +o[1], c = 2 < o.length ? +o[2] : 0, h = [], l = [], u = null, m = [], d = 0; d < i.length; ++d) {
        var p = i[d].trim();
        if (!p.startsWith("M  V30 COUNTS")) {
            if ("M  END" == p) break;
            if ("M  V30 BEGIN PRODUCT" == p) n(null == u), u = l;
            else if ("M  V30 END PRODUCT" == p) n(u === l), u = null;
            else if ("M  V30 BEGIN REACTANT" == p) n(null == u), u = h;
            else if ("M  V30 END REACTANT" == p) n(u === h), u = null;
            else if (p.startsWith("M  V30 BEGIN RGROUP")) {
                n(null == u);
                var f = e(d);
                m.push(i.slice(d, f + 1)), d = f
            } else {
                if ("M  V30 BEGIN CTAB" != p) throw new Error("Line unrecognized: " + p);
                f = t(d);
                u.push(i.slice(d, f + 1)), d = f
            }
        }
    }
    for (var g = [], b = h.concat(l), f = 0; f < b.length; ++f) {
        var S = chem.Molfile.parseCTabV3000(b[f], o);
        g.push(S)
    }
    var w = r.rxnMerge(g, s, a, c);
    return r.readRGroups3000(w, function (t) {
        for (var e = [], i = 0; i < t.length; ++i) e = e.concat(t[i]);
        return e
    }(m)), w
}, chem.Molfile.rxnMerge = function (t, e, i, n) {
    chem.Molfile;
    for (var r = new chem.Struct(), o = [], s = [], a = [], c = [], h = [], l = [], u = {
        cnt: 0,
        totalLength: 0
    }, m = 0; m < t.length; ++m) {
        var d = t[m],
            p = d.getBondLengthData();
        u.cnt += p.cnt, u.totalLength += p.totalLength
    }
    var f = 1 / (0 == u.cnt ? 1 : u.totalLength / u.cnt);
    for (m = 0; m < t.length; ++m)(d = t[m]).scale(f);
    for (m = 0; m < t.length; ++m) {
        var g, b = (d = t[m]).getCoordBoundingBoxObj();
        b && ((g = m < e ? chem.Struct.FRAGMENT.REACTANT : m < e + i ? chem.Struct.FRAGMENT.PRODUCT : chem.Struct.FRAGMENT.AGENT) == chem.Struct.FRAGMENT.REACTANT ? (o.push(b), c.push(d)) : g == chem.Struct.FRAGMENT.AGENT ? (s.push(b), h.push(d)) : g == chem.Struct.FRAGMENT.PRODUCT && (a.push(b), l.push(d)), d.atoms.each(function (t, e) {
            e.rxnFragmentType = g
        }))
    }

    function S(t, e, i, n, r) {
        var o = new util.Vec2(n - i.min.x, r ? 1 - i.min.y : -(i.min.y + i.max.y) / 2);
        return e.atoms.each(function (t, e) {
            e.pp.add_(o)
        }), e.sgroups.each(function (t, e) {
            e.pp && e.pp.add_(o)
        }), i.min.add_(o), i.max.add_(o), e.mergeInto(t), i.max.x - i.min.x
    }
    var w = 0;
    for (m = 0; m < c.length; ++m) w += S(r, c[m], o[m], w, !1) + 2;
    for (w += 2, m = 0; m < h.length; ++m) w += S(r, h[m], s[m], w, !0) + 2;
    for (w += 2, m = 0; m < l.length; ++m) w += S(r, l[m], a[m], w, !1) + 2;
    var v, y, E, x, B, A, D = null,
        M = null;
    for (m = 0; m < o.length - 1; ++m) v = o[m], y = o[m + 1], E = (v.max.x + y.min.x) / 2, x = (v.max.y + v.min.y + y.max.y + y.min.y) / 4, r.rxnPluses.add(new chem.Struct.RxnPlus({
        pp: new util.Vec2(E, x)
    }));
    for (m = 0; m < o.length; ++m) 0 == m ? ((D = {}).max = new util.Vec2(o[m].max), D.min = new util.Vec2(o[m].min)) : (D.max = util.Vec2.max(D.max, o[m].max), D.min = util.Vec2.min(D.min, o[m].min));
    for (m = 0; m < a.length - 1; ++m) v = a[m], y = a[m + 1], E = (v.max.x + y.min.x) / 2, x = (v.max.y + v.min.y + y.max.y + y.min.y) / 4, r.rxnPluses.add(new chem.Struct.RxnPlus({
        pp: new util.Vec2(E, x)
    }));
    for (m = 0; m < a.length; ++m) 0 == m ? ((M = {}).max = new util.Vec2(a[m].max), M.min = new util.Vec2(a[m].min)) : (M.max = util.Vec2.max(M.max, a[m].max), M.min = util.Vec2.min(M.min, a[m].min));
    return y = M, (v = D) || y ? (B = v ? new util.Vec2(v.max.x, (v.max.y + v.min.y) / 2) : null, A = y ? new util.Vec2(y.min.x, (y.max.y + y.min.y) / 2) : null, B = B || new util.Vec2(A.x - 3, A.y), A = A || new util.Vec2(B.x + 3, B.y), r.rxnArrows.add(new chem.Struct.RxnArrow({
        pp: util.Vec2.lc2(B, .5, A, .5)
    }))) : r.rxnArrows.add(new chem.Struct.RxnArrow({
        pp: new util.Vec2(0, 0)
    })), r.isReaction = !0, r
}, chem.Molfile.rgMerge = function (t, e) {
    var i = new chem.Struct();
    for (var n in t.mergeInto(i, null, null, !1, !0), e)
        for (var r = 0; r < e[n].length; ++r) {
            var o = e[n][r];
            o.rgroups.set(n, new chem.Struct.RGroup());
            var s = o.frags.add(new chem.Struct.Fragment());
            o.rgroups.get(n).frags.add(s), o.atoms.each(function (t, e) {
                e.fragment = s
            }), o.mergeInto(i)
        }
    return i
}, chem.Molfile.parseRg2000 = function (t) {
    var e = chem.Molfile;
    if ("$CTAB" != (t = t.slice(7))[0].trim()) throw new Error("RGFile format invalid");
    for (var i = 1;
        "$" != t[i].charAt(0);) i++;
    if ("$END CTAB" != t[i].trim()) throw new Error("RGFile format invalid");
    var n = t.slice(1, i);
    t = t.slice(i + 1);
    for (var r = {}; ;) {
        if (0 == t.length) throw new Error("Unexpected end of file");
        var o = t[0].trim();
        if ("$END MOL" == o) {
            t = t.slice(1);
            break
        }
        if ("$RGP" != o) throw new Error("RGFile format invalid");
        var s = +t[1].trim();
        for (r[s] = [], t = t.slice(2); ;) {
            if (0 == t.length) throw new Error("Unexpected end of file");
            if ("$END RGP" == (o = t[0].trim())) {
                t = t.slice(1);
                break
            }
            if ("$CTAB" != o) throw new Error("RGFile format invalid");
            for (i = 1;
                "$" != t[i].charAt(0);) i++;
            if ("$END CTAB" != t[i].trim()) throw new Error("RGFile format invalid");
            r[s].push(t.slice(1, i)), t = t.slice(i + 1)
        }
    }
    var a = chem.Molfile.parseCTab(n),
        c = {};
    if (chem.Molfile.loadRGroupFragments)
        for (var h in r) {
            c[h] = [];
            for (var l = 0; l < r[h].length; ++l) c[h].push(chem.Molfile.parseCTab(r[h][l]))
        }
    return e.rgMerge(a, c)
}

chem.SGroup = function (t) {
    if (!(t && t in chem.SGroup.TYPES)) throw new Error("Invalid or unsupported s-group type");
    this.type = t, this.id = -1, chem.SGroup.equip(this, t), this.label = -1, this.bracketBox = null, this.bracketDir = new util.Vec2(1, 0), this.areas = [], this.highlight = !1, this.highlighting = null, this.selected = !1, this.selectionPlate = null, this.atoms = [], this.patoms = [], this.bonds = [], this.xBonds = [], this.neiAtoms = [], this.pp = null, this.data = {
        mul: 1,
        connectivity: "ht",
        name: "",
        subscript: "n",
        attached: !1,
        absolute: !0,
        showUnits: !1,
        nCharsToDisplay: -1,
        tagChar: "",
        daspPos: 1,
        fieldType: "F",
        fieldName: "",
        fieldValue: "",
        units: "",
        query: "",
        queryOp: ""
    }
}, chem.SGroup.prototype.getAttr = function (t) {
    return this.data[t]
}, chem.SGroup.prototype.getAttrs = function () {
    var t = {};
    for (var e in this.data) t[e] = this.data[e];
    return t
}, chem.SGroup.prototype.setAttr = function (t, e) {
    var i = this.data[t];
    return this.data[t] = e, i
}, chem.SGroup.prototype.checkAttr = function (t, e) {
    return this.data[t] == e
}, chem.SGroup.equip = function (t, e) {
    var i = chem.SGroup.TYPES[e];
    for (var n in i) t[n] = i[n]
}, chem.SGroup.numberArrayToString = function (t, e) {
    for (var i = util.stringPadded(t.length, 3), n = 0; n < t.length; ++n) i += " " + util.stringPadded(e[t[n]], 3);
    return i
}, chem.SGroup.addGroup = function (t, e, i) {
    e.id = t.sgroups.add(e), e.postLoad(t, i);
    for (var n = 0; n < e.atoms.length; ++n) t.atoms.has(e.atoms[n]) && util.Set.add(t.atoms.get(e.atoms[n]).sgs, e.id);
    return t.sGroupForest.insert(e.id), e.id
}, chem.SGroup.bracketsToMolfile = function (t, e, i) {
    var n = [],
        r = util.Set.fromList(e.atoms);
    chem.SGroup.getCrossBonds([], n, t, r), chem.SGroup.bracketPos(e, null, t, n);
    for (var o = e.bracketBox, s = e.bracketDir, a = s.rotateSC(1, 0), c = chem.SGroup.getBracketParameters(t, n, r, o, s, a, null, e.id), h = [], l = 0; l < c.length; ++l) {
        for (var u = c[l], m = u.c.addScaled(u.n, -.5 * u.h).yComplement(), d = u.c.addScaled(u.n, .5 * u.h).yComplement(), p = "M  SDI " + i + util.paddedInt(4, 3), f = [m.x, m.y, d.x, d.y], g = 0; g < f.length; ++g) p += util.paddedFloat(f[g], 10, 4);
        h.push(p)
    }
    return h
}, chem.SGroup.filterAtoms = function (t, e) {
    for (var i = [], n = 0; n < t.length; ++n) {
        var r = t[n];
        "number" != typeof e[r] ? i.push(r) : 0 <= e[r] ? i.push(e[r]) : i.push(-1)
    }
    return i
}, chem.SGroup.removeNegative = function (t) {
    for (var e = [], i = 0; i < t.length; ++i) 0 <= t[i] && e.push(t[i]);
    return e
}, chem.SGroup.filter = function (t, e, i) {
    e.atoms = chem.SGroup.removeNegative(chem.SGroup.filterAtoms(e.atoms, i))
}, chem.SGroup.clone = function (t, e, i) {
    var n = new chem.SGroup(t.type);
    for (var r in t.data) n.data[r] = t.data[r];
    return n.atoms = util.mapArray(t.atoms, e), n.pp = t.pp, n.bracketBox = t.bracketBox, n.patoms = null, n.bonds = null, n.allAtoms = t.allAtoms, n
}, chem.SGroup.addAtom = function (t, e) {
    t.atoms.push(e)
}, chem.SGroup.removeAtom = function (t, e) {
    for (var i = 0; i < t.atoms.length; ++i)
        if (t.atoms[i] === e) return void t.atoms.splice(i, 1);
    throw new Error("The atom is not found in the given s-group")
}, chem.SGroup.getCrossBonds = function (i, n, t, r) {
    t.bonds.each(function (t, e) {
        util.Set.contains(r, e.begin) && util.Set.contains(r, e.end) ? util.isNull(i) || i.push(t) : (util.Set.contains(r, e.begin) || util.Set.contains(r, e.end)) && (util.isNull(n) || n.push(t))
    }, this)
}, chem.SGroup.bracketPos = function (t, o, s, e) {
    var i, n, r, a, c = t.atoms;
    e && 2 === e.length ? (i = s.bonds.get(e[0]), n = s.bonds.get(e[1]), r = i.getCenter(s), a = n.getCenter(s), t.bracketDir = util.Vec2.diff(a, r).normalized()) : t.bracketDir = new util.Vec2(1, 0);
    var h = t.bracketDir,
        l = h.rotateSC(1, 0),
        u = null,
        m = [];
    util.each(c, function (t) {
        var e, i = s.atoms.get(t),
            n = o ? o.ctab.atoms.get(t).visel.boundingBox : null,
            r = new util.Vec2(i.pp);
        n = util.isNull(n) ? (n = new util.Box2Abs(r, r), e = new util.Vec2(.05 * 3, .05 * 3), n.extend(e, e)) : n.translate((o.offset || new util.Vec2()).negated()).transform(o.scaled2obj, o), m.push(n)
    }, this), util.each(s.sGroupForest.children.get(t.id), function (t) {
        var e = o ? o.ctab.sgroups.get(t).visel.boundingBox : null;
        util.isNull(e) || (e = e.translate((o.offset || new util.Vec2()).negated()).transform(o.scaled2obj, o), m.push(e))
    }, this), util.each(m, function (t) {
        var r = null;
        util.each([t.p0.x, t.p1.x], function (n) {
            util.each([t.p0.y, t.p1.y], function (t) {
                var e = new util.Vec2(n, t),
                    i = new util.Vec2(util.Vec2.dot(e, h), util.Vec2.dot(e, l));
                r = util.isNull(r) ? new util.Box2Abs(i, i) : r.include(i)
            }, this)
        }, this), u = util.isNull(u) ? r : util.Box2Abs.union(u, r)
    }, this);
    var d = new util.Vec2(.2, .4);
    util.isNull(u) || (u = u.extend(d, d)), t.bracketBox = u
}, chem.SGroup.drawBrackets = function (s, a, t, e, i, n, r, o, c, h, l) {
    // for (var u = chem.SGroup.getBracketParameters(a.ctab.molecule, e, i, n, r, o, a, t.id), m = -1, d = 0; d < u.length; ++d) {
    // 	var p = u[d],
    // 		f = chem.SGroup.drawBracket(a, a.paper, a.styles, p.d, p.n, p.c, p.w, p.h);
    // 	s.push(f), (m < 0 || u[m].d.x < p.d.x || u[m].d.x == p.d.x && u[m].d.y > p.d.y) && (m = d)
    // }

    // function g(t, e) {
    // 	var i = a.ps(b.c.addScaled(b.n, e * b.h)),
    // 		n = a.paper.text(i.x, i.y, t).attr({
    // 			font: a.settings.font,
    // 			"font-size": a.settings.fontszsub
    // 		});
    // 	l && n.attr(l);
    // 	var r = util.Box2Abs.fromRelBox(rnd.relBox(n.getBBox())),
    // 		o = Math.max(util.Vec2.shiftRayBox(i, b.d.negated(), r), 3) + 2;
    // 	n.translateAbs(o * b.d.x, o * b.d.y), s.push(n)
    // }
    // var b = u[m];
    // c && g(c, .5), h && g(h, -.5)
}, chem.SGroup.drawBracket = function (t, e, i, n, r, o, s, a) {
    s = s || .25, a = a || 1;
    var c = o.addScaled(r, -.5 * a),
        h = o.addScaled(r, .5 * a),
        l = c.addScaled(n, -s),
        u = h.addScaled(n, -s),
        c = t.obj2scaled(c),
        h = t.obj2scaled(h),
        l = t.obj2scaled(l),
        u = t.obj2scaled(u);
    return e.path("M {0}, {1} L {2} , {3} L {4} , {5} L {6} , {7}", l.x, l.y, c.x, c.y, h.x, h.y, u.x, u.y).attr(i.sgroupBracketStyle)
}, chem.SGroup.getBracketParameters = function (p, f, r, o, s, a, g, b) {
    function S(t, e, i, n) {
        this.c = t, this.d = e, this.n = e.rotateSC(1, 0), this.w = i, this.h = n
    }
    var w = [];
    return (f.length < 2 ? function () {
        s = s || new util.Vec2(1, 0), a = a || s.rotateSC(1, 0);
        var t = Math.min(.25, .3 * o.sz().x),
            e = util.Vec2.lc2(s, o.p0.x, a, .5 * (o.p0.y + o.p1.y)),
            i = util.Vec2.lc2(s, o.p1.x, a, .5 * (o.p0.y + o.p1.y)),
            n = o.sz().y;
        w.push(new S(e, s.negated(), t, n), new S(i, s, t, n))
    } : 2 === f.length ? function () {
        var t = p.bonds.get(f[0]),
            e = p.bonds.get(f[1]),
            i = t.getCenter(p),
            n = e.getCenter(p),
            r = -1,
            o = -1,
            s = -1,
            a = -1,
            c = util.Vec2.centre(i, n),
            h = util.Vec2.diff(n, i).normalized(),
            l = h.negated(),
            u = h.rotateSC(1, 0),
            m = u.negated();
        util.each(p.sGroupForest.children.get(b), function (t) {
            var e = g ? g.ctab.sgroups.get(t).visel.boundingBox : null;
            util.isNull(e) || (e = e.translate((g.offset || new util.Vec2()).negated()).transform(g.scaled2obj, g), r = Math.max(r, util.Vec2.shiftRayBox(i, l, e)), o = Math.max(o, util.Vec2.shiftRayBox(n, h, e)), s = Math.max(s, util.Vec2.shiftRayBox(c, u, e)), a = Math.max(a, util.Vec2.shiftRayBox(c, m, e)))
        }, this), r = Math.max(r + .2, 0), o = Math.max(o + .2, 0);
        var d = 1.5 + (s = Math.max(Math.max(s, a) + .1, 0));
        w.push(new S(i.addScaled(l, r), l, .25, d), new S(n.addScaled(h, o), h, .25, d))
    } : function () {
        for (var t = 0; t < f.length; ++t) {
            var e = p.bonds.get(f[t]),
                i = e.getCenter(p),
                n = util.Set.contains(r, e.begin) ? e.getDir(p) : e.getDir(p).negated();
            w.push(new S(i, n, .2, 1))
        }
    })(), w
}, chem.SGroup.getObjBBox = function (t, e) {
    if (0 == t.length) throw new Error("Atom list is empty");
    for (var i = e.atoms.get(t[0]).pp, n = new util.Box2Abs(i, i), r = 1; r < t.length; ++r) var o = t[r],
        s = e.atoms.get(o).pp, n = n.include(s);
    return n
}, chem.SGroup.makeAtomBondLines = function (t, e, i, n) {
    if (!i) return [];
    for (var r = [], o = 0; o < Math.floor((i.length + 14) / 15); ++o) {
        for (var s = Math.min(i.length - 15 * o, 15), a = "M  " + t + " " + e + " " + util.paddedInt(s, 2), c = 0; c < s; ++c) a += " " + util.paddedInt(n[i[15 * o + c]], 3);
        r.push(a)
    }
    return r
}, chem.SGroup.getAtoms = function (t, e) {
    if (!e.allAtoms) return e.atoms;
    var i = [];
    return t.atoms.each(function (t) {
        i.push(t)
    }), i
}, chem.SGroup.getBonds = function (t, e) {
    var i = chem.SGroup.getAtoms(t, e),
        n = [];
    return t.bonds.each(function (t, e) {
        0 <= i.indexOf(e.begin) && 0 <= i.indexOf(e.end) && n.push(t)
    }), n
}, chem.SGroup.GroupMul = {
    draw: function (t) {
        var e = t.render,
            i = e.paper.set(),
            n = [],
            r = util.Set.fromList(this.atoms);
        chem.SGroup.getCrossBonds([], n, t.molecule, r), chem.SGroup.bracketPos(this, e, t.molecule, n);
        var o = this.bracketBox,
            s = this.bracketDir,
            a = s.rotateSC(1, 0);
        return this.areas = [o], chem.SGroup.drawBrackets(i, e, this, n, r, o, s, a, this.data.mul), i
    },
    saveToMolfile: function (t, e, i, n) {
        var r = util.stringPadded(e[this.id], 3),
            o = [];
        o = (o = (o = o.concat(chem.SGroup.makeAtomBondLines("SAL", r, util.idList(this.atomSet), i))).concat(chem.SGroup.makeAtomBondLines("SPA", r, util.idList(this.parentAtomSet), i))).concat(chem.SGroup.makeAtomBondLines("SBL", r, this.bonds, n));
        var s = "M  SMT " + r + " " + this.data.mul;
        return o.push(s), (o = o.concat(chem.SGroup.bracketsToMolfile(t, this, r))).join("\n")
    },
    prepareForSaving: function (n) {
        this.atoms.sort(), this.atomSet = util.Set.fromList(this.atoms), this.parentAtomSet = util.Set.clone(this.atomSet);
        var i = [],
            r = [];
        if (n.bonds.each(function (t, e) {
            util.Set.contains(this.parentAtomSet, e.begin) && util.Set.contains(this.parentAtomSet, e.end) ? i.push(t) : (util.Set.contains(this.parentAtomSet, e.begin) || util.Set.contains(this.parentAtomSet, e.end)) && r.push(t)
        }, this), 0 != r.length && 2 != r.length) throw {
            id: this.id,
            "error-type": "cross-bond-number",
            message: "Unsupported cross-bonds number"
        };
        var t, e, o = -1,
            s = -1,
            a = null;
        2 == r.length && (t = n.bonds.get(r[0]), o = util.Set.contains(this.parentAtomSet, t.begin) ? t.begin : t.end, e = n.bonds.get(r[1]), s = util.Set.contains(this.parentAtomSet, e.begin) ? e.begin : e.end, a = e);
        for (var c, h = null, l = o, u = [], m = 0; m < this.data.mul - 1; ++m) {
            var d, h = {};
            util.each(this.atoms, function (t) {
                var e = n.atoms.get(t),
                    i = n.atoms.add(new chem.Struct.Atom(e));
                u.push(i), this.atomSet[i] = 1, h[t] = i
            }, this), util.each(i, function (t) {
                var e = n.bonds.get(t),
                    i = new chem.Struct.Bond(e);
                i.begin = h[i.begin], i.end = h[i.end], n.bonds.add(i)
            }, this), null != a && ((d = new chem.Struct.Bond(a)).begin = l, d.end = h[s], n.bonds.add(d), l = h[o])
        }
        util.each(u, function (e) {
            util.each(n.sGroupForest.getPathToRoot(this.id).reverse(), function (t) {
                n.atomAddToSGroup(t, e)
            }, this)
        }, this), 0 <= l && ((c = n.bonds.get(r[0])).begin == o ? c.begin = l : c.end = l), this.bonds = r
    },
    postLoad: function (t, e) {
        this.data.mul = +this.data.subscript;
        var r = {};
        this.atoms = chem.SGroup.filterAtoms(this.atoms, e), this.patoms = chem.SGroup.filterAtoms(this.patoms, e);
        for (var i = 1; i < this.data.mul; ++i)
            for (var n = 0; n < this.patoms.length; ++n) {
                var o = this.atoms[i * this.patoms.length + n];
                if (!(o < 0)) {
                    if (this.patoms[n] < 0) throw new Error("parent atom missing");
                    r[o] = this.patoms[n]
                }
            }
        this.patoms = chem.SGroup.removeNegative(this.patoms);
        var s = util.identityMap(this.patoms),
            a = [];
        t.bonds.each(function (t, e) {
            var i = e.begin in r,
                n = e.end in r;
            i && n || i && e.end in s || n && e.begin in s ? a.push(t) : i ? e.begin = r[e.begin] : n && (e.end = r[e.end])
        }, this);
        for (var c = 0; c < a.length; ++c) t.bonds.remove(a[c]);
        for (var h in r) t.atoms.remove(h), e[h] = -1;
        this.atoms = this.patoms, this.patoms = null
    }
}, chem.SGroup.GroupSru = {
    draw: function (t) {
        var e = t.render,
            i = e.paper.set(),
            n = [],
            r = util.Set.fromList(this.atoms);
        chem.SGroup.getCrossBonds([], n, t.molecule, r), chem.SGroup.bracketPos(this, e, t.molecule, n);
        var o = this.bracketBox,
            s = this.bracketDir,
            a = s.rotateSC(1, 0);
        this.areas = [o];
        var c = this.data.connectivity || "eu";
        "ht" == c && (c = "");
        var h = this.data.subscript || "n";
        return chem.SGroup.drawBrackets(i, e, this, n, r, o, s, a, h, c), i
    },
    saveToMolfile: function (t, e, i, n) {
        var r = util.stringPadded(e[this.id], 3),
            o = [];
        return (o = (o = (o = o.concat(chem.SGroup.makeAtomBondLines("SAL", r, this.atoms, i))).concat(chem.SGroup.makeAtomBondLines("SBL", r, this.bonds, n))).concat(chem.SGroup.bracketsToMolfile(t, this, r))).join("\n")
    },
    prepareForSaving: function (r) {
        var o = [];
        if (r.bonds.each(function (t, e) {
            var i = r.atoms.get(e.begin),
                n = r.atoms.get(e.end);
            (util.Set.contains(i.sgs, this.id) && !util.Set.contains(n.sgs, this.id) || util.Set.contains(n.sgs, this.id) && !util.Set.contains(i.sgs, this.id)) && o.push(t)
        }, this), 0 != o.length && 2 != o.length) throw {
            id: this.id,
            "error-type": "cross-bond-number",
            message: "Unsupported cross-bonds number"
        };
        this.bonds = o
    },
    postLoad: function (t, e) {
        this.data.connectivity = (this.data.connectivity || "EU").strip().toLowerCase()
    }
}, chem.SGroup.GroupSup = {
    draw: function (t) {
        var e = t.render,
            i = e.paper.set(),
            n = [],
            r = util.Set.fromList(this.atoms);
        chem.SGroup.getCrossBonds([], n, t.molecule, r), chem.SGroup.bracketPos(this, e, t.molecule, n);
        var o = this.bracketBox,
            s = this.bracketDir,
            a = s.rotateSC(1, 0);
        return this.areas = [o], chem.SGroup.drawBrackets(i, e, this, n, r, o, s, a, this.data.name, null, {
            "font-style": "italic"
        }), i
    },
    saveToMolfile: function (t, e, i, n) {
        var r = util.stringPadded(e[this.id], 3),
            o = [];
        return o = (o = o.concat(chem.SGroup.makeAtomBondLines("SAL", r, this.atoms, i))).concat(chem.SGroup.makeAtomBondLines("SBL", r, this.bonds, n)), this.data.name && "" != this.data.name && o.push("M  SMT " + r + " " + this.data.name), o.join("\n")
    },
    prepareForSaving: function (r) {
        var o = [];
        r.bonds.each(function (t, e) {
            var i = r.atoms.get(e.begin),
                n = r.atoms.get(e.end);
            (util.Set.contains(i.sgs, this.id) && !util.Set.contains(n.sgs, this.id) || util.Set.contains(n.sgs, this.id) && !util.Set.contains(i.sgs, this.id)) && o.push(t)
        }, this), this.bonds = o
    },
    postLoad: function (t, e) {
        this.data.name = (this.data.subscript || "").strip(), this.data.subscript = ""
    }
}, chem.SGroup.GroupGen = {
    draw: function (t) {
        var e = t.render,
            i = (e.settings, e.styles, e.paper.set()),
            n = [],
            r = util.Set.fromList(this.atoms);
        chem.SGroup.getCrossBonds([], n, t.molecule, r), chem.SGroup.bracketPos(this, e, t.molecule, n);
        var o = this.bracketBox,
            s = this.bracketDir,
            a = s.rotateSC(1, 0);
        return this.areas = [o], chem.SGroup.drawBrackets(i, e, this, n, r, o, s, a), i
    },
    saveToMolfile: function (t, e, i, n) {
        var r = util.stringPadded(e[this.id], 3),
            o = [];
        return (o = (o = (o = o.concat(chem.SGroup.makeAtomBondLines("SAL", r, this.atoms, i))).concat(chem.SGroup.makeAtomBondLines("SBL", r, this.bonds, n))).concat(chem.SGroup.bracketsToMolfile(t, this, r))).join("\n")
    },
    prepareForSaving: function (t) { },
    postLoad: function (t, e) { }
}, chem.SGroup.getMassCentre = function (t, e) {
    for (var i = new util.Vec2(), n = 0; n < e.length; ++n) i = i.addScaled(t.atoms.get(e[n]).pp, 1 / e.length);
    return i
}, chem.SGroup.setPos = function (t, e, i) {
    e.pp = i
}, chem.SGroup.GroupDat = {
    showValue: function (t, e, i, n) {
        return t.text(e.x, e.y, i.data.fieldValue).attr({
            font: n.font,
            "font-size": n.fontsz
        })
    },
    draw: function (t) {
        var e, i = t.render,
            n = i.settings,
            r = i.paper,
            o = r.set(),
            s = chem.SGroup.getAtoms(t, this);
        chem.SGroup.bracketPos(this, i, t.molecule), this.areas = this.bracketBox ? [this.bracketBox] : [], null == this.pp && chem.SGroup.setPos(t, this, this.bracketBox.p1.add(new util.Vec2(.5, .5)));
        var a = this.pp.scaled(n.scaleFactor);
        if (this.data.attached)
            for (e = 0; e < s.length; ++e) {
                var c = t.atoms.get(s[e]),
                    h = i.ps(c.a.pp),
                    l = c.visel.boundingBox;
                null != l && (h.x = Math.max(h.x, l.p1.x)), h.x += n.lineWidth;
                var u = this.showValue(r, h, this, n)
                // 	m = rnd.relBox(u.getBBox());
                // u.translateAbs(.5 * m.width, -.3 * m.height), o.push(u);
                // var d = (d = util.Box2Abs.fromRelBox(rnd.relBox(u.getBBox()))).transform(i.scaled2obj, i);
                // this.areas.push(d)
            } else {
            var p = this.showValue(r, a, this, n)
            // f = rnd.relBox(p.getBBox());
            // p.translateAbs(.5 * f.width, -.5 * f.height), o.push(p);
            // var g = util.Box2Abs.fromRelBox(rnd.relBox(p.getBBox()));
            // this.dataArea = g.transform(i.scaled2obj, i), t.sgroupData.has(this.id) || t.sgroupData.set(this.id, new rnd.ReDataSGroupData(this))
        }
        return o
    },
    saveToMolfile: function (t, e, i, n) {
        var r = util.stringPadded(e[this.id], 3),
            o = this.data,
            s = this.pp;
        o.absolute || (s = s.sub(chem.SGroup.getMassCentre(t, this.atoms)));
        var a = (a = []).concat(chem.SGroup.makeAtomBondLines("SAL", r, this.atoms, i)),
            c = "M  SDT " + r + " " + util.stringPadded(o.fieldName, 30, !0) + util.stringPadded(o.fieldType, 2) + util.stringPadded(o.units, 20, !0) + util.stringPadded(o.query, 2) + util.stringPadded(o.queryOp, 3);
        a.push(c);
        var h = "M  SDD " + r + " " + util.paddedFloat(s.x, 10, 4) + util.paddedFloat(-s.y, 10, 4) + "    " + (o.attached ? "A" : "D") + (o.absolute ? "A" : "R") + (o.showUnits ? "U" : " ") + "   " + (0 <= o.nCharnCharsToDisplay ? util.paddedInt(o.nCharnCharsToDisplay, 3) : "ALL") + "  1   " + util.stringPadded(o.tagChar, 1) + "  " + util.paddedInt(o.daspPos, 1) + "  ";
        return a.push(h), o.fieldValue.replace(/[\r\n|\n|\r]*$/, "").split(/\r\n|\n|\r/).each(function (t) {
            for (; 69 < t.length;) a.push("M  SCD " + r + " " + t.slice(0, 69)), t = t.slice(69);
            a.push("M  SED " + r + " " + util.stringPadded(t, 69, !0))
        }, this), a.join("\n")
    },
    prepareForSaving: function (t) {
        this.atoms = chem.SGroup.getAtoms(t, this)
    },
    postLoad: function (t, e) {
        var i = this.atoms.length == t.atoms.count();
        this.data.absolute || (this.pp = this.pp.add(chem.SGroup.getMassCentre(t, this.atoms))), !i || "MDLBG_FRAGMENT_STEREO" != this.data.fieldName && "MDLBG_FRAGMENT_COEFFICIENT" != this.data.fieldName && "MDLBG_FRAGMENT_CHARGE" != this.data.fieldName || (this.atoms = [], this.allAtoms = !0)
    }
}, chem.SGroup.TYPES = {
    MUL: chem.SGroup.GroupMul,
    SRU: chem.SGroup.GroupSru,
    SUP: chem.SGroup.GroupSup,
    DAT: chem.SGroup.GroupDat,
    GEN: chem.SGroup.GroupGen
}, chem.SGroupForest = function (t) {
    this.parent = new util.Map(), this.children = new util.Map(), this.children.set(-1, []), this.molecule = t
}, chem.SGroupForest.prototype.getSGroupsBFS = function () {
    var t = [],
        e = [],
        i = -1;
    for (e = util.array(this.children.get(-1)); 0 < e.length;) {
        i = e.shift(), e = e.concat(this.children.get(i));
        t.push(i)
    }
    return t
}, chem.SGroupForest.prototype.getAtomSets = function () {
    return this.molecule.sgroups.map(function (t, e) {
        return util.Set.fromList(e.atoms)
    })
}, chem.SGroupForest.prototype.getAtomSetRelations = function (t, i, e) {
    var n = new util.Map(),
        r = new util.Map();
    (e = this.getAtomSets()).unset(t), e.each(function (t, e) {
        r.set(t, util.Set.subset(i, e)), n.set(t, util.Set.subset(e, i) && !util.Set.eq(e, i))
    }, this);
    var o = e.findAll(function (t) {
        return !!r.get(t) && !(0 <= util.find(this.children.get(t), function (t) {
            return r.get(t)
        }, this))
    }, this);
    return util.assert(o.length <= 1), {
        children: e.findAll(function (t, e) {
            return n.get(t) && !n.get(this.parent.get(t))
        }, this),
        parent: 0 === o.length ? -1 : o[0]
    }
}, chem.SGroupForest.prototype.getPathToRoot = function (t) {
    for (var e = [], i = t; 0 <= i; i = this.parent.get(i)) util.assert(e.indexOf(i) < 0, "SGroupForest: loop detected"), e.push(i);
    return e
}, chem.SGroupForest.prototype.validate = function () {
    var r = this.getAtomSets();
    this.molecule.sgroups.each(function (t) {
        this.getPathToRoot(t)
    }, this);
    var o = !0;
    return this.parent.each(function (t, e) {
        0 <= e && !util.Set.subset(r.get(t), r.get(e)) && (o = !1)
    }, this), this.children.each(function (t) {
        for (var e = this.children.get(t), i = 0; i < e.length; ++i)
            for (var n = i + 1; n < e.length; ++n) util.Set.disjoint(r.get(e[i]), r.get(e[n])) || (o = !1)
    }, this), o
}, chem.SGroupForest.prototype.insert = function (e, t, i) {
    util.assert(!this.parent.has(e), "sgid already present in the forest"), util.assert(!this.children.has(e), "sgid already present in the forest"), util.assert(this.validate(), "s-group forest invalid");
    var n, r = this.getAtomSets(),
        o = util.Set.fromList(this.molecule.sgroups.get(e).atoms);
    return (util.isUndefined(t) || util.isUndefined(i)) && (t = (n = this.getAtomSetRelations(e, o, r)).parent, i = n.children), util.each(i, function (t) {
        util.assert(1 === util.arrayRemoveByValue(this.children.get(this.parent.get(t)), t)), this.parent.set(t, e)
    }, this), this.children.set(e, i), this.parent.set(e, t), this.children.get(t).push(e), util.assert(this.validate(), "s-group forest invalid"), {
        parent: t,
        children: i
    }
}, chem.SGroupForest.prototype.remove = function (t) {
    util.assert(this.parent.has(t), "sgid is not in the forest"), util.assert(this.children.has(t), "sgid is not in the forest"), util.assert(this.validate(), "s-group forest invalid");
    var e = this.parent.get(t);
    util.each(this.children.get(t), function (t) {
        this.parent.set(t, e), this.children.get(e).push(t)
    }, this), util.assert(1 === util.arrayRemoveByValue(this.children.get(e), t)), this.children.unset(t), this.parent.unset(t), util.assert(this.validate(), "s-group forest invalid")
}

chem.Struct.prototype.calcConn = function (t) {
    for (var e = 0, i = this.atoms.get(t), n = !1, r = 0; r < i.neighbors.length; ++r) {
        var o = this.halfBonds.get(i.neighbors[r]);
        switch (this.bonds.get(o.bid).type) {
            case chem.Struct.BOND.TYPE.SINGLE:
                e += 1;
                break;
            case chem.Struct.BOND.TYPE.DOUBLE:
                e += 2;
                break;
            case chem.Struct.BOND.TYPE.TRIPLE:
                e += 3;
                break;
            case chem.Struct.BOND.TYPE.AROMATIC:
                e += 1, n = !0;
                break;
            default:
                return -1
        }
    }
    return n && (e += 1), e
}, chem.Struct.Atom.prototype.calcValence = function (t) {
    var e = this.charge,
        i = this.label;
    if (this.isQuery()) return !(this.implicitH = 0);
    var n = chem.Element.getElementByLabel(i);
    if (null == n) return !(this.implicitH = 0);
    var r = chem.Element.elements.get(n).group,
        o = chem.Struct.radicalElectrons(this.radical),
        s = t,
        a = 0,
        c = Math.abs(e);
    return 1 == r ? "H" != i && "Li" != i && "Na" != i && "K" != i && "Rb" != i && "Cs" != i && "Fr" != i || (a = (s = 1) - o - t - c) : 3 == r ? "B" == i || "Al" == i || "Ga" == i || "In" == i ? a = -1 == e ? (s = 4) - o - t : (s = 3) - o - t - c : "Tl" == i && (a = -1 == e ? o + t <= 2 ? (s = 2) - o - t : (s = 4) - o - t : -2 == e ? o + t <= 3 ? (s = 3) - o - t : (s = 5) - o - t : o + t + c <= 1 ? (s = 1) - o - t - c : (s = 3) - o - t - c) : 4 == r ? "C" == i || "Si" == i || "Ge" == i ? a = (s = 4) - o - t - c : "Sn" != i && "Pb" != i || (a = t + o + c <= 2 ? (s = 2) - o - t - c : (s = 4) - o - t - c) : 5 == r ? "N" == i || "P" == i ? a = 1 == e ? (s = 4) - o - t : 2 == e ? (s = 3) - o - t : "N" == i || o + t + c <= 3 ? (s = 3) - o - t - c : (s = 5) - o - t - c : "Bi" != i && "Sb" != i && "As" != i || (a = 1 == e ? o + t <= 2 && "As" != i ? (s = 2) - o - t : (s = 4) - o - t : 2 == e ? (s = 3) - o - t : o + t <= 3 ? (s = 3) - o - t - c : (s = 5) - o - t - c) : 6 == r ? "O" == i ? a = 1 <= e ? (s = 3) - o - t : (s = 2) - o - t - c : "S" == i || "Se" == i || "Po" == i ? a = 1 == e ? t <= 3 ? (s = 3) - o - t : (s = 5) - o - t : t + o + c <= 2 ? (s = 2) - o - t - c : t + o + c <= 4 ? (s = 4) - o - t - c : (s = 6) - o - t - c : "Te" == i && (-1 == e ? t <= 2 && (a = (s = 2) - o - t - c) : 0 != e && 2 != e || (a = t <= 2 ? (s = 2) - o - t - c : t <= 4 ? (s = 4) - o - t - c : 0 == e && t <= 6 ? (s = 6) - o - t - c : -1)) : 7 == r && ("F" == i ? a = (s = 1) - o - t - c : "Cl" != i && "Br" != i && "I" != i && "At" != i || (1 == e ? t <= 2 ? a = (s = 2) - o - t : (3 == t || 5 == t || 7 <= t) && (a = -1) : 0 == e && (t <= 1 ? a = (s = 1) - o - t : 2 == t || 4 == t || 6 == t ? a = 1 == o ? (s = t, 0) : -1 : 7 < t && (a = -1)))), this.valence = s, this.implicitH = a, !(this.implicitH < 0) || (this.valence = t, this.implicitH = 0, !(this.badConn = !0))
}, chem.Struct.Atom.prototype.calcValenceMinusHyd = function (t) {
    var e = this.charge,
        i = this.label,
        n = chem.Element.getElementByLabel(i);
    if (null == n) throw new Error("Element " + i + " unknown");
    if (n < 0) return this.implicitH = 0, null;
    var r = chem.Element.elements.get(n).group,
        o = chem.Struct.radicalElectrons(this.radical);
    if (3 == r) {
        if (("B" == i || "Al" == i || "Ga" == i || "In" == i) && -1 == e && o + t <= 4) return o + t
    } else if (5 == r) {
        if ("N" == i || "P" == i) {
            if (1 == e) return o + t;
            if (2 == e) return o + t
        } else if ("Sb" == i || "Bi" == i || "As" == i) {
            if (1 == e) return o + t;
            if (2 == e) return o + t
        }
    } else if (6 == r) {
        if ("O" == i) {
            if (1 <= e) return o + t
        } else if (("S" == i || "Se" == i || "Po" == i) && 1 == e) return o + t
    } else if (7 == r && ("Cl" == i || "Br" == i || "I" == i || "At" == i) && 1 == e) return o + t;
    return o + t + Math.abs(e)
}, chem.Struct.prototype.calcImplicitHydrogen = function (t) {
    var e, i = this.calcConn(t),
        n = this.atoms.get(t);
    n.badConn = !1, i < 0 || n.isQuery() ? n.implicitH = 0 : 0 <= n.explicitValence ? (e = chem.Element.getElementByLabel(n.label), n.implicitH = 0, null != e && (n.implicitH = n.explicitValence - n.calcValenceMinusHyd(i), n.implicitH < 0 && (n.implicitH = 0, n.badConn = !0))) : n.calcValence(i)
}

chem.Dfs = function (t, e, i, n) {
    this.molecule = t, this.atom_data = e, this.components = i, this.nComponentsInReactants = -1, this.nReactants = n, this.vertices = new Array(this.molecule.atoms.count()), this.molecule.atoms.each(function (t) {
        this.vertices[t] = new chem.Dfs.VertexDesc()
    }, this), this.edges = new Array(this.molecule.bonds.count()), this.molecule.bonds.each(function (t) {
        this.edges[t] = new chem.Dfs.EdgeDesc()
    }, this), this.v_seq = new Array()
}, chem.Dfs.VertexDesc = function () {
    this.dfs_state = 0, this.parent_vertex = 0, this.parent_edge = 0, this.branches = 0
}, chem.Dfs.EdgeDesc = function () {
    this.opening_cycles = 0, this.closing_cycle = 0
}, chem.Dfs.SeqElem = function (t, e, i) {
    this.idx = t, this.parent_vertex = e, this.parent_edge = i
}, chem.Dfs.prototype.walk = function () {
    for (var t, e = new Array(), i = 0, n = 0; ;) {
        if (e.length < 1) {
            function r(t) {
                return 0 == this.vertices[t].dfs_state && (o = t, !0)
            }
            for (var o = -1; i < this.components.length && -1 == o;) null === (o = util.Set.find(this.components[i], r, this)) && (o = -1, ++i == this.nReactants && (this.nComponentsInReactants = n));
            if (o < -1 && this.molecule.atoms.find(r, this), -1 == o) break;
            this.vertices[o].parent_vertex = -1, this.vertices[o].parent_edge = -1, e.push(o), n++
        }
        var s = e.pop(),
            a = this.vertices[s].parent_vertex,
            c = new chem.Dfs.SeqElem(s, a, this.vertices[s].parent_edge);
        this.v_seq.push(c), this.vertices[s].dfs_state = 2;
        for (var h = this.atom_data[s], l = 0; l < h.neighbours.length; l++) {
            var u = h.neighbours[l].aid,
                m = h.neighbours[l].bid;
            if (u != a)
                if (2 == this.vertices[u].dfs_state) {
                    for (this.edges[m].closing_cycle = 1, t = s; - 1 != t && this.vertices[t].parent_vertex != u;) t = this.vertices[t].parent_vertex;
                    if (-1 == t) throw new Error("Cycle unwind error");
                    this.edges[this.vertices[t].parent_edge].opening_cycles++, this.vertices[s].branches++, c = new chem.Dfs.SeqElem(u, s, m), this.v_seq.push(c)
                } else {
                    if (1 == this.vertices[u].dfs_state) {
                        if (-1 == (t = e.indexOf(u))) throw new Error("Internal: removing vertex from stack");
                        e.splice(t, 1);
                        var d = this.vertices[u].parent_vertex;
                        0 <= d && this.vertices[d].branches--
                    }
                    this.vertices[s].branches++, this.vertices[u].parent_vertex = s, this.vertices[u].parent_edge = m, this.vertices[u].dfs_state = 1, e.push(u)
                }
        }
    }
}, chem.Dfs.prototype.edgeClosingCycle = function (t) {
    return 0 != this.edges[t].closing_cycle
}, chem.Dfs.prototype.numBranches = function (t) {
    return this.vertices[t].branches
}, chem.Dfs.prototype.numOpeningCycles = function (t) {
    return this.edges[t].opening_cycles
}, chem.Dfs.prototype.toString = function () {
    var e = "";
    return this.v_seq.each(function (t) {
        e += t.idx + " -> "
    }), e += "*"
}

chem.CisTrans = function (t, e, i) {
    this.molecule = t, this.bonds = new util.Map(), this.getNeighbors = e, this.context = i
}, chem.CisTrans.PARITY = {
    NONE: 0,
    CIS: 1,
    TRANS: 2
}, chem.CisTrans.prototype.each = function (t, e) {
    this.bonds.each(t, e)
}, chem.CisTrans.prototype.getParity = function (t) {
    return this.bonds.get(t).parity
}, chem.CisTrans.prototype.getSubstituents = function (t) {
    return this.bonds.get(t).substituents
}, chem.CisTrans.prototype.sameside = function (t, e, i, n) {
    var r = util.Vec2.diff(t, e),
        o = new util.Vec2(-r.y, r.x);
    if (!o.normalize()) return 0;
    var s = util.Vec2.diff(i, t),
        a = util.Vec2.diff(n, e);
    if (!s.normalize()) return 0;
    if (!a.normalize()) return 0;
    var c = util.Vec2.dot(s, o),
        h = util.Vec2.dot(a, o);
    return Math.abs(c) < .001 || Math.abs(h) < .001 ? 0 : 0 < c * h ? 1 : -1
}, chem.CisTrans.prototype._sameside = function (t, e, i, n) {
    return this.sameside(this.molecule.atoms.get(t).pp, this.molecule.atoms.get(e).pp, this.molecule.atoms.get(i).pp, this.molecule.atoms.get(n).pp)
}, chem.CisTrans.prototype._sortSubstituents = function (t) {
    var e = this.molecule.atoms.get(t[0]).pureHydrogen(),
        i = t[1] < 0 || this.molecule.atoms.get(t[1]).pureHydrogen(),
        n = this.molecule.atoms.get(t[2]).pureHydrogen(),
        r = t[3] < 0 || this.molecule.atoms.get(t[3]).pureHydrogen();
    return (!e || !i) && ((!n || !r) && (i ? t[1] = -1 : e ? (t[0] = t[1], t[1] = -1) : t[0] > t[1] && t.swap(0, 1), r ? t[3] = -1 : n ? (t[2] = t[3], t[3] = -1) : t[2] > t[3] && t.swap(2, 3), !0))
}, chem.CisTrans.prototype.isGeomStereoBond = function (t, e) {
    var i = this.molecule.bonds.get(t);
    if (i.type != chem.Struct.BOND.TYPE.DOUBLE) return !1;
    var n = this.molecule.atoms.get(i.begin).label,
        r = this.molecule.atoms.get(i.end).label;
    if ("C" != n && "N" != n && "Si" != n && "Ge" != n) return !1;
    if ("C" != r && "N" != r && "Si" != r && "Ge" != r) return !1;
    var o, s, a = this.getNeighbors.call(this.context, i.begin),
        c = this.getNeighbors.call(this.context, i.end);
    if (a.length < 2 || 3 < a.length || c.length < 2 || 3 < c.length) return !1;
    for (e[0] = -1, e[1] = -1, e[2] = -1, e[3] = -1, o = 0; o < a.length; o++)
        if ((s = a[o]).bid != t) {
            if (this.molecule.bonds.get(s.bid).type != chem.Struct.BOND.TYPE.SINGLE) return !1; - 1 == e[0] ? e[0] = s.aid : e[1] = s.aid
        }
    for (o = 0; o < c.length; o++)
        if ((s = c[o]).bid != t) {
            if (this.molecule.bonds.get(s.bid).type != chem.Struct.BOND.TYPE.SINGLE) return !1; - 1 == e[2] ? e[2] = s.aid : e[3] = s.aid
        }
    return (-1 == e[1] || -1 == this._sameside(i.begin, i.end, e[0], e[1])) && (-1 == e[3] || -1 == this._sameside(i.begin, i.end, e[2], e[3]))
}, chem.CisTrans.prototype.build = function (r) {
    this.molecule.bonds.each(function (t, e) {
        var i, n = this.bonds.set(t, {
            parity: 0,
            substituents: new Array(4)
        });
        util.isArray(r) && r[t] || this.isGeomStereoBond(t, n.substituents) && (1 == (i = this._sameside(e.begin, e.end, n.substituents[0], n.substituents[2])) ? n.parity = chem.CisTrans.PARITY.CIS : -1 == i && (n.parity = chem.CisTrans.PARITY.TRANS))
    }, this)
}

chem.Stereocenters = function (t, e, i) {
    this.molecule = t, this.atoms = new util.Map(), this.getNeighbors = e, this.context = i
}, chem.Stereocenters.prototype.each = function (t, e) {
    this.atoms.each(t, e)
}, chem.Stereocenters.prototype.buildFromBonds = function (t) {
    var a = this.molecule.atoms,
        c = this.molecule.bonds,
        h = util.Set.empty();
    if (a.each(function (e, t) {
        var i = this.getNeighbors.call(this.context, e);
        if (2 != i.length) return !1;
        var n = i[0],
            r = i[1];
        if (0 <= util.find([e, n.aid, r.aid], function (t) {
            return ["C", "Si"].indexOf(a.get(t).label) < 0
        }, this)) return !1;
        if (0 <= util.find([n.bid, r.bid], function (t) {
            return c.get(t).type != chem.Struct.BOND.TYPE.DOUBLE
        }, this)) return !1;
        var o = util.findAll(this.getNeighbors.call(this.context, n.aid), function (t) {
            return t.aid != e
        }, this),
            s = util.findAll(this.getNeighbors.call(this.context, r.aid), function (t) {
                return t.aid != e
            }, this);
        return !(o.length < 1 || 2 < o.length || s.length < 1 || 2 < s.length) && (!(0 <= util.find(o.concat(s), function (t) {
            return c.get(t.bid).type != chem.Struct.BOND.TYPE.SINGLE
        }, this)) && (!(0 <= util.find(o.concat(s), function (t) {
            return c.get(t.bid).stereo == chem.Struct.BOND.STEREO.EITHER
        }, this)) && (util.Set.add(h, n.aid), void util.Set.add(h, r.aid))))
    }, this), 0 < util.Set.size(h)) throw new Error("This structure may contain allenes, which cannot be represented in the SMILES notation. Relevant stereo-information will be discarded.");
    a.each(function (i) {
        var t, n;
        util.Set.contains(h, i) || (t = this.getNeighbors.call(this.context, i), n = !1, util.find(t, function (t) {
            var e = this.molecule.bonds.get(t.bid);
            return e.type == chem.Struct.BOND.TYPE.SINGLE && e.begin == i && (e.stereo == chem.Struct.BOND.STEREO.UP || e.stereo == chem.Struct.BOND.STEREO.DOWN) && (n = !0)
        }, this), n && this._buildOneCenter(i))
    }, this)
}, chem.Stereocenters.allowed_stereocenters = [{
    elem: "C",
    charge: 0,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "C",
    charge: 0,
    degree: 4,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "Si",
    charge: 0,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "Si",
    charge: 0,
    degree: 4,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "N",
    charge: 1,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "N",
    charge: 1,
    degree: 4,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "N",
    charge: 0,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 3
}, {
    elem: "S",
    charge: 0,
    degree: 4,
    n_double_bonds: 2,
    implicit_degree: 4
}, {
    elem: "S",
    charge: 1,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 3
}, {
    elem: "S",
    charge: 0,
    degree: 3,
    n_double_bonds: 1,
    implicit_degree: 3
}, {
    elem: "P",
    charge: 0,
    degree: 3,
    n_double_bonds: 0,
    implicit_degree: 3
}, {
    elem: "P",
    charge: 1,
    degree: 4,
    n_double_bonds: 0,
    implicit_degree: 4
}, {
    elem: "P",
    charge: 0,
    degree: 4,
    n_double_bonds: 1,
    implicit_degree: 4
}], chem.Stereocenters.prototype._buildOneCenter = function (t) {
    var n = this.molecule.atoms.get(t),
        e = this.getNeighbors.call(this.context, t),
        i = e.length,
        r = -1,
        o = {
            group: 0,
            type: 0,
            pyramid: new Array(4)
        }, s = 0,
        a = new Array(4),
        c = 0,
        h = 0;
    o.pyramid[0] = -1, o.pyramid[1] = -1, o.pyramid[2] = -1, o.pyramid[3] = -1;
    var l = 0;
    if (4 < i) throw new Error("Stereocenter with " + i + " bonds are not supported");
    if (e.each(function (t) {
        var e = this.molecule.atoms.get(t.aid),
            i = this.molecule.bonds.get(t.bid);
        if (a[s] = {
            edge_idx: t.bid,
            nei_idx: t.aid,
            rank: t.aid,
            vec: util.Vec2.diff(e.pp, n.pp).yComplement()
        }, e.pureHydrogen() ? (l++, a[s].rank = 1e4) : "H" == e.label && (a[s].rank = 5e3), !a[s].vec.normalize()) throw new Error("Zero bond length");
        if (i.type == chem.Struct.BOND.TYPE.TRIPLE) throw new Error("Non-single bonds not allowed near stereocenter");
        if (i.type == chem.Struct.BOND.TYPE.AROMATIC) throw new Error("Aromatic bonds not allowed near stereocenter");
        i.type == chem.Struct.BOND.TYPE.DOUBLE && h++, s++
    }, this), util.find(chem.Stereocenters.allowed_stereocenters, function (t) {
        return t.elem == n.label && t.charge == n.charge && t.degree == i && t.n_double_bonds == h && (r = t.implicit_degree, !0)
    }, this), -1 == r) throw new Error("Unknown stereocenter configuration: " + n.label + ", charge " + n.charge + ", " + i + " bonds (" + h + " double)");
    if (4 == i && 1 < l) throw new Error(l + " hydrogens near stereocenter");
    if (3 == i && 4 == r && 0 < l) throw new Error("Has hydrogen(s) besides implicit hydrogen near stereocenter");
    if (4 == i) {
        a[0].rank > a[1].rank && a.swap(0, 1), a[1].rank > a[2].rank && a.swap(1, 2), a[2].rank > a[3].rank && a.swap(2, 3), a[1].rank > a[2].rank && a.swap(1, 2), a[0].rank > a[1].rank && a.swap(0, 1), a[1].rank > a[2].rank && a.swap(1, 2);
        for (var u, m, d = -1, p = -1, f = -1, g = -1, b = 0, s = 0; s < 4; s++) {
            var S = this._getBondStereo(t, a[s].edge_idx);
            if (S == chem.Struct.BOND.STEREO.UP || S == chem.Struct.BOND.STEREO.DOWN) {
                d = s, b = S;
                break
            }
        }
        if (-1 == d) throw new Error("None of 4 bonds going from stereocenter is stereobond");
        if (-1 == p && ((u = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 1) % 4].vec, a[(d + 2) % 4].vec)) + (m = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 1) % 4].vec, a[(d + 3) % 4].vec)) != 3 && u + m != 12 || (p = (d + 1) % 4, f = (d + 2) % 4, g = (d + 3) % 4)), -1 == p && ((u = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 2) % 4].vec, a[(d + 1) % 4].vec)) + (m = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 2) % 4].vec, a[(d + 3) % 4].vec)) != 3 && u + m != 12 || (p = (d + 2) % 4, f = (d + 1) % 4, g = (d + 3) % 4)), -1 == p && ((u = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 3) % 4].vec, a[(d + 1) % 4].vec)) + (m = chem.Stereocenters._xyzzy(a[d].vec, a[(d + 3) % 4].vec, a[(d + 2) % 4].vec)) != 3 && u + m != 12 || (p = (d + 3) % 4, f = (d + 2) % 4, g = (d + 1) % 4)), -1 == p) throw new Error("Internal error: can not find opposite bond");
        if (b == chem.Struct.BOND.STEREO.UP && this._getBondStereo(t, a[p].edge_idx) == chem.Struct.BOND.STEREO.DOWN) throw new Error("Stereo types of the opposite bonds mismatch");
        if (b == chem.Struct.BOND.STEREO.DOWN && this._getBondStereo(t, a[p].edge_idx) == chem.Struct.BOND.STEREO.UP) throw new Error("Stereo types of the opposite bonds mismatch");
        if (b == this._getBondStereo(t, a[f].edge_idx)) throw new Error("Stereo types of non-opposite bonds match");
        if (b == this._getBondStereo(t, a[g].edge_idx)) throw new Error("Stereo types of non-opposite bonds match");
        c = 3 == d || 3 == p ? b : b == chem.Struct.BOND.STEREO.UP ? chem.Struct.BOND.STEREO.DOWN : chem.Struct.BOND.STEREO.UP, D = chem.Stereocenters._sign(a[0].vec, a[1].vec, a[2].vec), c == chem.Struct.BOND.STEREO.UP && 0 < D || c == chem.Struct.BOND.STEREO.DOWN && D < 0 ? (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[1].nei_idx, o.pyramid[2] = a[2].nei_idx) : (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[2].nei_idx, o.pyramid[2] = a[1].nei_idx), o.pyramid[3] = a[3].nei_idx
    } else if (3 == i) {
        a[0].rank > a[1].rank && a.swap(0, 1), a[1].rank > a[2].rank && a.swap(1, 2), a[0].rank > a[1].rank && a.swap(0, 1);
        var w, v = this._getBondStereo(t, a[0].edge_idx),
            y = this._getBondStereo(t, a[1].edge_idx),
            E = this._getBondStereo(t, a[2].edge_idx),
            x = 0,
            B = 0;
        if (x += v == chem.Struct.BOND.STEREO.UP ? 1 : 0, x += y == chem.Struct.BOND.STEREO.UP ? 1 : 0, x += E == chem.Struct.BOND.STEREO.UP ? 1 : 0, B += v == chem.Struct.BOND.STEREO.DOWN ? 1 : 0, B += y == chem.Struct.BOND.STEREO.DOWN ? 1 : 0, B += E == chem.Struct.BOND.STEREO.DOWN ? 1 : 0, 4 == r) {
            if (3 == x) throw new Error("All 3 bonds up near stereoatom");
            if (3 == B) throw new Error("All 3 bonds down near stereoatom");
            if (0 == x && 0 == B) throw new Error("No up/down bonds near stereoatom -- indefinite case");
            if (1 == x && 1 == B) throw new Error("One bond up, one bond down -- indefinite case");
            if (b = 0, 2 == x) c = chem.Struct.BOND.STEREO.DOWN;
            else if (2 == B) c = chem.Struct.BOND.STEREO.UP;
            else {
                for (g = f = d = -1, s = 0; s < 3; s++)
                    if ((w = this._getBondStereo(t, a[s].edge_idx)) == chem.Struct.BOND.STEREO.UP || w == chem.Struct.BOND.STEREO.DOWN) {
                        b = w, f = ((d = s) + 1) % 3, g = (s + 2) % 3;
                        break
                    }
                if (-1 == d) throw new Error("Internal error: can not find up or down bond");
                var A = chem.Stereocenters._xyzzy(a[f].vec, a[g].vec, a[d].vec);
                if (3 == A || 4 == A) throw new Error("Degenerate case for 3 bonds near stereoatom");
                c = 1 == A ? b : b == chem.Struct.BOND.STEREO.UP ? chem.Struct.BOND.STEREO.DOWN : chem.Struct.BOND.STEREO.UP
            }
            var D = chem.Stereocenters._sign(a[0].vec, a[1].vec, a[2].vec);
            c == chem.Struct.BOND.STEREO.UP && 0 < D || c == chem.Struct.BOND.STEREO.DOWN && D < 0 ? (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[1].nei_idx, o.pyramid[2] = a[2].nei_idx) : (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[2].nei_idx, o.pyramid[2] = a[1].nei_idx), o.pyramid[3] = -1
        } else {
            if (0 < B && 0 < x) throw new Error("One bond up, one bond down -- indefinite case");
            if (0 == B && 0 == x) throw new Error("No up-down bonds attached to stereocenter");
            w = 0 < x ? 1 : -1, 1 != chem.Stereocenters._xyzzy(a[0].vec, a[1].vec, a[2].vec) && 1 != chem.Stereocenters._xyzzy(a[0].vec, a[2].vec, a[1].vec) && 1 != chem.Stereocenters._xyzzy(a[2].vec, a[1].vec, a[0].vec) || (w = -w), (D = chem.Stereocenters._sign(a[0].vec, a[1].vec, a[2].vec)) == w ? (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[2].nei_idx, o.pyramid[2] = a[1].nei_idx) : (o.pyramid[0] = a[0].nei_idx, o.pyramid[1] = a[1].nei_idx, o.pyramid[2] = a[2].nei_idx), o.pyramid[3] = -1
        }
    }
    this.atoms.set(t, o)
}, chem.Stereocenters.prototype._getBondStereo = function (t, e) {
    var i = this.molecule.bonds.get(e);
    return t != i.begin ? 0 : i.stereo
}, chem.Stereocenters._xyzzy = function (t, e, i) {
    var n = util.Vec2.cross(t, e),
        r = util.Vec2.dot(t, e),
        o = util.Vec2.cross(t, i),
        s = util.Vec2.dot(t, i);
    if (Math.abs(n) < .001) {
        if (Math.abs(o) < .001) throw new Error("Degenerate case -- bonds overlap");
        return 0 < o ? 4 : 8
    }
    return n * o < -1e-6 || s < r ? 2 : 1
}, chem.Stereocenters._sign = function (t, e, i) {
    var n = (t.x - i.x) * (e.y - i.y) - (t.y - i.y) * (e.x - i.x);
    if (.001 < n) return 1;
    if (n < -.001) return -1;
    throw new Error("Degenerate triangle")
}, chem.Stereocenters.isPyramidMappingRigid = function (t) {
    var e = t.clone(),
        i = !0;
    return e[0] > e[1] && (e.swap(0, 1), i = !i), e[1] > e[2] && (e.swap(1, 2), i = !i), e[2] > e[3] && (e.swap(2, 3), i = !i), e[1] > e[2] && (e.swap(1, 2), i = !i), e[0] > e[1] && (e.swap(0, 1), i = !i), e[1] > e[2] && (e.swap(1, 2), i = !i), i
}
chem.SmilesSaver = function () {
    this.smiles = "", this._written_atoms = new Array(), this._written_components = 0, this.ignore_errors = !1
}, chem.SmilesSaver._Atom = function (t) {
    this.neighbours = new Array(), this.aromatic = !1, this.lowercase = !1, this.chirality = 0, this.branch_cnt = 0, this.paren_written = !1, this.h_count = t, this.parent = -1
}, chem.SmilesSaver.prototype.isBondInRing = function (t) {
    if (util.isUndefined(this.inLoop) || util.isNull(this.inLoop)) throw new Error("Init this.inLoop prior to calling this method");
    return this.inLoop[t]
}, chem.SmilesSaver.prototype.saveMolecule = function (n, t) {
    var s;
    util.isUndefined(t) || (this.ignore_errors = t), (n = n.clone()).sgroups.each(function (t, e) {
        if ("MUL" == e.type) try {
            e.prepareForSaving(n)
        } catch (t) {
            throw {
                message: "Bad s-group (" + t.message + ")"
            }
        } else if (!this.ignore_errors) throw new Error("SMILES data format doesn't support s-groups")
    }, this), this.atoms = new Array(n.atoms.count()), n.atoms.each(function (t, e) {
        this.atoms[t] = new chem.SmilesSaver._Atom(e.implicitH)
    }, this);
    var i = ["B", "C", "N", "O", "P", "S", "Se", "As"];
    n.bonds.each(function (t, e) {
        e.type == chem.Struct.BOND.TYPE.AROMATIC && (this.atoms[e.begin].aromatic = !0, -1 != i.indexOf(n.atoms.get(e.begin).label) && (this.atoms[e.begin].lowercase = !0), this.atoms[e.end].aromatic = !0, -1 != i.indexOf(n.atoms.get(e.end).label) && (this.atoms[e.end].lowercase = !0)), this.atoms[e.begin].neighbours.push({
            aid: e.end,
            bid: t
        }), this.atoms[e.end].neighbours.push({
            aid: e.begin,
            bid: t
        })
    }, this), this.inLoop = function () {
        n.prepareLoopStructure();
        var i = util.Set.empty();
        n.loops.each(function (t, e) {
            e.hbs.length <= 6 && util.Set.mergeIn(i, util.Set.fromList(util.map(e.hbs, function (t) {
                return n.halfBonds.get(t).bid
            }, this)))
        }, this);
        var e = {};
        return util.Set.each(i, function (t) {
            e[t] = 1
        }, this), e
    }(), this._touched_cistransbonds = 0, this._markCisTrans(n);
    var e = chem.MolfileSaver.getComponents(n),
        r = e.reactants.concat(e.products),
        o = new chem.Dfs(n, this.atoms, r, e.reactants.length);
    for (o.walk(), util.each(this.atoms, function (t) {
        t.neighbours = []
    }, this), b = 0; b < o.v_seq.length; b++) {
        var a = o.v_seq[b],
            c = a.idx,
            h = a.parent_edge,
            l = a.parent_vertex;
        if (0 <= h) {
            for (var u = this.atoms[c], m = o.numOpeningCycles(h), d = 0; d < m; d++) this.atoms[l].neighbours.push({
                aid: -1,
                bid: -1
            });
            if (o.edgeClosingCycle(h)) {
                for (s = 0; s < u.neighbours.length; s++)
                    if (-1 == u.neighbours[s].aid) {
                        u.neighbours[s].aid = l, u.neighbours[s].bid = h;
                        break
                    }
                if (s == u.neighbours.length) throw new Error("Internal: can not put closing bond to its place")
            } else u.neighbours.push({
                aid: l,
                bid: h
            }), u.parent = l;
            this.atoms[l].neighbours.push({
                aid: c,
                bid: h
            })
        }
    }
    try {
        var p = new chem.Stereocenters(n, function (t) {
            return this.atoms[t].neighbours
        }, this);
        p.buildFromBonds(this.ignore_errors), p.each(function (t, e) {
            var i = -1; - 1 == e.pyramid[3] && (i = 3);
            var n = new Array(4),
                r = 0,
                o = this.atoms[t];
            if (-1 != o.parent)
                for (s = 0; s < 4; s++)
                    if (e.pyramid[s] == o.parent) {
                        n[r++] = s;
                        break
                    }
            for (-1 != i && (n[r++] = i), d = 0; d != o.neighbours.length; d++)
                if (o.neighbours[d].aid != o.parent)
                    for (s = 0; s < 4; s++)
                        if (o.neighbours[d].aid == e.pyramid[s]) {
                            if (4 <= r) throw new Error("Internal: pyramid overflow");
                            n[r++] = s;
                            break
                        }
            if (4 == r) r = n[0], n[0] = n[1], n[1] = n[2], n[2] = n[3], n[3] = r;
            else if (3 != r) throw new Error("Cannot calculate chirality");
            chem.Stereocenters.isPyramidMappingRigid(n) ? this.atoms[t].chirality = 1 : this.atoms[t].chirality = 2
        }, this)
    } catch (t) {
        throw new Error(t.message)
    }
    var f = new Array();
    f.push(0);
    for (var g = !0, b = 0; b < o.v_seq.length; b++) {
        c = (a = o.v_seq[b]).idx, h = a.parent_edge;
        var S = !0;
        if (0 <= (l = a.parent_vertex)) {
            for (1 < o.numBranches(l) && 0 < this.atoms[l].branch_cnt && this.atoms[l].paren_written && (this.smiles += ")"), m = o.numOpeningCycles(h), d = 0; d < m; d++) {
                for (s = 1; s < f.length && -1 != f[s]; s++);
                s == f.length ? f.push(l) : f[s] = l, this._writeCycleNumber(s)
            }
            if (0 <= l) {
                var w = o.numBranches(l);
                if (1 < w && this.atoms[l].branch_cnt < w - 1 && (o.edgeClosingCycle(h) ? this.atoms[l].paren_written = !1 : (this.smiles += "(", this.atoms[l].paren_written = !0)), this.atoms[l].branch_cnt++, this.atoms[l].branch_cnt > w) throw new Error("Unexpected branch")
            }
            var v = n.bonds.get(h),
                y = 0;
            if (v.type == chem.Struct.BOND.TYPE.SINGLE && (y = this._calcBondDirection(n, h, l)), 1 == y && c == v.end || 2 == y && c == v.begin ? this.smiles += "/" : 2 == y && c == v.end || 1 == y && c == v.begin ? this.smiles += "\\" : v.type == chem.Struct.BOND.TYPE.ANY ? this.smiles += "~" : v.type == chem.Struct.BOND.TYPE.DOUBLE ? this.smiles += "=" : v.type == chem.Struct.BOND.TYPE.TRIPLE ? this.smiles += "#" : v.type != chem.Struct.BOND.TYPE.AROMATIC || this.atoms[v.begin].lowercase && this.atoms[v.end].lowercase && this.isBondInRing(h) ? v.type == chem.Struct.BOND.TYPE.SINGLE && this.atoms[v.begin].aromatic && this.atoms[v.end].aromatic ? this.smiles += "-" : 0 : this.smiles += ":", o.edgeClosingCycle(h)) {
                for (d = 1; d < f.length && f[d] != c; d++);
                if (d == f.length) throw new Error("Cycle number not found");
                this._writeCycleNumber(d), S = !(f[d] = -1)
            }
        } else g || (this.smiles += this._written_components == o.nComponentsInReactants ? ">>" : "."), g = !1, this._written_components++;
        S && (this._writeAtom(n, c, this.atoms[c].aromatic, this.atoms[c].lowercase, this.atoms[c].chirality), this._written_atoms.push(a.idx))
    }
    return this.comma = !1, this._writeRadicals(n), this.comma && (this.smiles += "|"), this.smiles
}, chem.SmilesSaver.prototype._writeCycleNumber = function (t) {
    if (0 < t && t < 10) this.smiles += t;
    else if (10 <= t && t < 100) this.smiles += "%" + t;
    else {
        if (!(100 <= t && t < 1e3)) throw new Error("Bad cycle number: " + t);
        this.smiles += "%%" + t
    }
}, chem.SmilesSaver.prototype._writeAtom = function (t, e, i, n, r) {
    var o, s = t.atoms.get(e),
        a = !1,
        c = -1;
    if ("A" != s.label)
        if ("R" != s.label && "R#" != s.label) {
            o = s.aam, "C" != s.label && "P" != s.label && "N" != s.label && "S" != s.label && "O" != s.label && "Cl" != s.label && "F" != s.label && "Br" != s.label && "B" != s.label && "I" != s.label && (a = !0), (0 <= s.explicitValence || 0 != s.radical || 0 < r || i && "C" != s.label && "O" != s.label || i && "C" == s.label && this.atoms[e].neighbours.length < 3 && 0 == this.atoms[e].h_count) && (c = this.atoms[e].h_count);
            var h = s.label;
            if (s.atomList && !s.atomList.notList ? (h = s.atomList.label(), a = !1) : s.isPseudo() || s.atomList && s.atomList.notList ? (h = "*", a = !0) : (r || 0 != s.charge || 0 < s.isotope || 0 <= c || 0 < o) && (a = !0), a && (-1 == c && (c = this.atoms[e].h_count), this.smiles += "["), 0 < s.isotope && (this.smiles += s.isotope), this.smiles += n ? h.toLowerCase() : h, 0 < r && (this.smiles += 1 == r ? "@" : "@@", 1 < s.implicitH)) throw new Error(s.implicitH + " implicit H near stereocenter");
            "H" != s.label && (1 < c || 0 == c && !a ? this.smiles += "H" + c : 1 == c && (this.smiles += "H")), 1 < s.charge ? this.smiles += "+" + s.charge : s.charge < -1 ? this.smiles += s.charge : 1 == s.charge ? this.smiles += "+" : -1 == s.charge && (this.smiles += "-"), 0 < o && (this.smiles += ":" + o), a && (this.smiles += "]")
        } else this.smiles += "[*]";
    else this.smiles += "*"
}, chem.SmilesSaver.prototype._markCisTrans = function (a) {
    this.cis_trans = new chem.CisTrans(a, function (t) {
        return this.atoms[t].neighbours
    }, this), this.cis_trans.build(), this._dbonds = new Array(a.bonds.count()), a.bonds.each(function (t) {
        this._dbonds[t] = {
            ctbond_beg: -1,
            ctbond_end: -1,
            saved: 0
        }
    }, this), this.cis_trans.each(function (e, t) {
        var i = a.bonds.get(e);
        if (0 != t.parity && !this.isBondInRing(e)) {
            var n = this.atoms[i.begin].neighbours,
                r = this.atoms[i.end].neighbours,
                o = !0,
                s = !0;
            if (util.each(n, function (t) {
                t.bid != e && a.bonds.get(t.bid).type == chem.Struct.BOND.TYPE.SINGLE && (o = !1)
            }, this), util.each(r, function (t) {
                t.bid != e && a.bonds.get(t.bid).type == chem.Struct.BOND.TYPE.SINGLE && (s = !1)
            }, this), o || s) return;
            util.each(n, function (t) {
                t.bid != e && (a.bonds.get(t.bid).begin == i.begin ? this._dbonds[t.bid].ctbond_beg = e : this._dbonds[t.bid].ctbond_end = e)
            }, this), util.each(r, function (t) {
                t.bid != e && (a.bonds.get(t.bid).begin == i.end ? this._dbonds[t.bid].ctbond_beg = e : this._dbonds[t.bid].ctbond_end = e)
            }, this)
        }
    }, this)
}, chem.SmilesSaver.prototype._updateSideBonds = function (t, e) {
    var i = t.bonds.get(e),
        n = this.cis_trans.getSubstituents(e),
        r = this.cis_trans.getParity(e),
        o = [-1, -1, -1, -1];
    o[0] = t.findBondId(n[0], i.begin), -1 != n[1] && (o[1] = t.findBondId(n[1], i.begin)), o[2] = t.findBondId(n[2], i.end), -1 != n[3] && (o[3] = t.findBondId(n[3], i.end));
    var s = 0,
        a = 0,
        c = 0,
        h = 0;
    if (0 != this._dbonds[o[0]].saved && (1 == this._dbonds[o[0]].saved && t.bonds.get(o[0]).begin == i.begin || 2 == this._dbonds[o[0]].saved && t.bonds.get(o[0]).end == i.begin ? s++ : a++), -1 != o[1] && 0 != this._dbonds[o[1]].saved && (2 == this._dbonds[o[1]].saved && t.bonds.get(o[1]).begin == i.begin || 1 == this._dbonds[o[1]].saved && t.bonds.get(o[1]).end == i.begin ? s++ : a++), 0 != this._dbonds[o[2]].saved && (1 == this._dbonds[o[2]].saved && t.bonds.get(o[2]).begin == i.end || 2 == this._dbonds[o[2]].saved && t.bonds.get(o[2]).end == i.end ? c++ : h++), -1 != o[3] && 0 != this._dbonds[o[3]].saved && (2 == this._dbonds[o[3]].saved && t.bonds.get(o[3]).begin == i.end || 1 == this._dbonds[o[3]].saved && t.bonds.get(o[3]).end == i.end ? c++ : h++), r == chem.CisTrans.PARITY.CIS ? (s += c, a += h) : (s += h, a += c), 0 < s && 0 < a) throw new Error("Incompatible cis-trans configuration");
    return (0 != s || 0 != a) && (0 < s && (this._dbonds[o[0]].saved = t.bonds.get(o[0]).begin == i.begin ? 1 : 2, -1 != o[1] && (this._dbonds[o[1]].saved = t.bonds.get(o[1]).begin == i.begin ? 2 : 1), this._dbonds[o[2]].saved = t.bonds.get(o[2]).begin == i.end == (r == chem.CisTrans.PARITY.CIS) ? 1 : 2, -1 != o[3] && (this._dbonds[o[3]].saved = t.bonds.get(o[3]).begin == i.end == (r == chem.CisTrans.PARITY.CIS) ? 2 : 1)), 0 < a && (this._dbonds[o[0]].saved = t.bonds.get(o[0]).begin == i.begin ? 2 : 1, -1 != o[1] && (this._dbonds[o[1]].saved = t.bonds.get(o[1]).begin == i.begin ? 1 : 2), this._dbonds[o[2]].saved = t.bonds.get(o[2]).begin == i.end == (r == chem.CisTrans.PARITY.CIS) ? 2 : 1, -1 != o[3] && (this._dbonds[o[3]].saved = t.bonds.get(o[3]).begin == i.end == (r == chem.CisTrans.PARITY.CIS) ? 1 : 2)), !0)
}, chem.SmilesSaver.prototype._calcBondDirection = function (i, t, e) {
    var n;
    if (-1 == this._dbonds[t].ctbond_beg && -1 == this._dbonds[t].ctbond_end) return 0;
    if (i.bonds.get(t).type != chem.Struct.BOND.TYPE.SINGLE) throw new Error("Internal: directed bond type " + i.bonds.get(t).type);
    for (; n = 0, this.cis_trans.each(function (t, e) {
        0 == e.parity || this.isBondInRing(t) || this._updateSideBonds(i, t) && n++
    }, this), n != this._touched_cistransbonds;) this._touched_cistransbonds = n;
    return 0 == this._dbonds[t].saved && (e == i.bonds.get(t).begin ? this._dbonds[t].saved = 1 : this._dbonds[t].saved = 2), this._dbonds[t].saved
}, chem.SmilesSaver.prototype._writeRadicals = function (t) {
    for (var e, i = new Array(this._written_atoms.length), n = 0; n < this._written_atoms.length; n++)
        if (!i[n]) {
            var r = t.atoms.get(this._written_atoms[n]).radical;
            if (0 != r)
                for (this.comma ? this.smiles += "," : (this.smiles += " |", this.comma = !0), r == chem.Struct.ATOM.RADICAL.SINGLET ? this.smiles += "^3:" : r == chem.Struct.ATOM.RADICAL.DOUPLET ? this.smiles += "^1:" : this.smiles += "^4:", this.smiles += n, e = n + 1; e < this._written_atoms.length; e++) t.atoms.get(this._written_atoms[e]).radical == r && (i[e] = !0, this.smiles += "," + e)
        }
};

/*   ?????????????????????				*/
var Inote = {};
Inote.JSTool = function (options) {
    this.options = options || {};
};
Inote.JSTool.prototype = {
    _name: 'Javascript????????????',
    _history: {
        'v1.0': ['2017-6-1', 'CSS??????????????????????????????']
    },
    options: {},
    getName: function () {
        return this._name;
    },
    getHistory: function () {
        return this._history;
    }
};
var jstool = new Inote.JSTool();

export { chem }