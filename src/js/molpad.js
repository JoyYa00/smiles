

/* eslint-disable no-unused-expressions */
import { my$ } from "./base";
import { chem } from "./applib";
import { oneOf } from "./core";




//初始化元素周期表颜色
const JmolAtomColorsHashHex = {
    D: "#111111",
    H: "#fff",
    He: "#849b9b",
    Li: "#c87efa",
    Be: "#82ab00",
    B: "#c38a8a",
    C: "#000000",
    N: "#304ff7",
    O: "#ff0d0d",
    F: "#6dab3c",
    Ne: "#7b9ca8",
    Na: "#ab5cf2",
    Mg: "#61b400",
    Al: "#a79191",
    Si: "#b09276",
    P: "#ff8000",
    S: "#c39517",
    Cl: "#1dc51d",
    Ar: "#63a2b0",
    K: "#8f40d4",
    Ca: "#2fc300",
    Sc: "#969696",
    Ti: "#94969a",
    V: "#96969a",
    Cr: "#8796c3",
    Mn: "#9c7ac7",
    Fe: "#e06633",
    Co: "#db8293",
    Ni: "#45b645",
    Cu: "#c78033",
    Zn: "#7d80b0",
    Ga: "#bd8c8c",
    Ge: "#668f8f",
    As: "#bd80e3",
    Se: "#e28f00",
    Br: "#a62929",
    Kr: "#53a6bc",
    Rb: "#702eb0",
    Sr: "#00d000",
    Y: "#5fa4a4",
    Zr: "#6ba2a2",
    Nb: "#61a4a9",
    Mo: "#4ea9a9",
    Tc: "#3b9e9e",
    Ru: "#248f8f",
    Rh: "#0a7d8c",
    Pd: "#006985",
    Ag: "#969696",
    Cd: "#ae9462",
    In: "#a67573",
    Sn: "#668080",
    Sb: "#9e63b5",
    Te: "#d47a00",
    I: "#940094",
    Xe: "#429eb0",
    Cs: "#57178f",
    Ba: "#00c900",
    La: "#57a4c5",
    Ce: "#989877",
    Pr: "#869d7b",
    Nd: "#7da07d",
    Pm: "#69a581",
    Sm: "#5ea883",
    Eu: "#43b089",
    Gd: "#31b48d",
    Tb: "#23b890",
    Dy: "#17bb92",
    Ho: "#00c578",
    Er: "#00c765",
    Tm: "#00c94e",
    Yb: "#00bf38",
    Lu: "#00ab24",
    Hf: "#42a8dc",
    Ta: "#4ba2f9",
    W: "#2194d6",
    Re: "#267dab",
    Os: "#266696",
    Ir: "#175487",
    Pt: "#9595a0",
    Au: "#b9981a",
    Hg: "#9595a9",
    Tl: "#a6544d",
    Pb: "#575961",
    Bi: "#9e4fb5",
    Po: "#ab5c00",
    At: "#754f45",
    Rn: "#428296",
    Fr: "#420066",
    Ra: "#007d00",
    Ac: "#669ce4",
    Th: "#00b8fc",
    Pa: "#00a1ff",
    U: "#008fff",
    Np: "#0080ff",
    Pu: "#006bff",
    Am: "#545cf2",
    Cm: "#785ce3",
    Bk: "#8a4fe3",
    Cf: "#a136d4",
    Es: "#b31fd4",
    Fm: "#B31FBA",
    Md: "#B30DA6",
    No: "#BD0D87",
    Lr: "#C70066",
    Rf: "#CC0059",
    Db: "#D1004F",
    Sg: "#D90045",
    Bh: "#E00038",
    Hs: "#E6002E",
    Mt: "#EB0026",
    Ds: "#9595a0",
    Rg: "#b9981a",
    Cn: "#9595a9"
}
const PI2 = 2 * Math.PI;

function indev(t, e, o) {
    return e - o < t && t < e + o
}

function radSide(t, e) {
    return angleBetween(t, e) < Math.PI ? 1 : -1
}

function posRad(t) {
    for (; t < 0;) t += PI2;
    for (; PI2 < t;) t -= PI2;
    return t
}

function smallestAngleBetween(t, e) {
    var o = Math.abs(posRad(t) - posRad(e));
    return o < PI2 - o ? o : PI2 - o
}

function angleBetween(t, e) {
    return t = posRad(t), (e = posRad(e)) <= t ? e - t + PI2 : e - t
}

function clampedAngle(t, e, o, i) {
    var s = e.angleTo(o),
        n = i / PI2;
    return posRad(Math.round((s - t) * n) / n + t)
}

function mapArray(t, e) {
    for (var o = 0; o < t.length; o++) {
        // eslint-disable-next-line no-unused-expressions
        void 0 !== e[t[o]] ? t[o] = e[t[o]] : (t.splice(o, 1), o--)
    }
    return t
}

function transformArrayMult(t, e) {
    for (var o = [], i = 0; i < t.length; i++) o.push(t[i] * e);
    return o
}

function transformArrayAdd(t, e) {
    for (var o = [], i = 0; i < t.length; i++) o.push(t[i] + e);
    return o
}


function getMultiTouchDelta(t) {
    var e = t.originalEvent.targetTouches;
    if (e.length <= 1) return 0;
    var o = Math.abs(e[0].pageX - e[1].pageX),
        i = Math.abs(e[0].pageY - e[1].pageY);
    return Math.sqrt(o * o + i * i)
}

function sign(t) {
    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
}

function MPPoint(t, e) {
    this.x = t || 0
    this.y = e || 0
}

function MPPFO(t) {
    return new MPPoint(t.x, t.y)
}
MPPoint.prototype.clone = function () {
    return new MPPoint(this.x, this.y)
}
MPPoint.prototype.equals = function (t) {
    return this.x === t.x && this.y === t.y
}
MPPoint.prototype.set = function (t, e) {
    this.x = t
    this.y = e
}
MPPoint.prototype.replace = function (t) {
    this.x = t.x
    this.y = t.y
}
MPPoint.prototype.add = function (t) {
    this.x += t.x
    this.y += t.y
}
MPPoint.prototype.addX = function (t) {
    this.x += t
}
MPPoint.prototype.addY = function (t) {
    this.y += t
}
MPPoint.prototype.divide = function (t) {
    this.x /= t
    this.y /= t
}
MPPoint.prototype.divideX = function (t) {
    this.x /= t
}
MPPoint.prototype.divideY = function (t) {
    this.y /= t
}
MPPoint.prototype.multiply = function (t) {
    this.x *= t
    this.y *= t
}
MPPoint.prototype.multiplyX = function (t) {
    this.x *= t
}
MPPoint.prototype.multiplyY = function (t) {
    this.y *= t
}
MPPoint.prototype.translate = function (t, e) {
    this.x += t
    this.y += e
}
MPPoint.prototype.scale = function (t) {
    this.x *= t
    this.y *= t
}
MPPoint.prototype.mirror = function (t, e) {
    if (this.lineSide(t) === e) return !1;
    var o, i, s, n = t.to.x - t.from.x,
        a = t.to.y - t.from.y;
    return Math.abs(n) < .001 ? this.x = 2 * t.from.x - this.x : (o = a / n, i = t.from.y - o * t.from.x, s = (this.x + (this.y - i) * o) / (1 + o * o), this.x = 2 * s - this.x, this.y = 2 * s * o - this.y + 2 * i), !0
}
MPPoint.prototype.lineSide = function (t) {
    var e = sign((t.to.x - t.from.x) * (this.y - t.from.y) - (t.to.y - t.from.y) * (this.x - t.from.x));
    return 0 < e ? 1 : e < 0 ? -1 : 0
}
MPPoint.prototype.rotateAroundCenter = function (t, e) {
    var o = this.x - t.x,
        i = this.y - t.y;
    this.x = o * Math.cos(-e) - i * Math.sin(-e) + t.x
    this.y = o * Math.sin(-e) + i * Math.cos(-e) + t.y
}
MPPoint.prototype.angleTo = function (t) {
    return Math.atan2(-t.y + this.y, t.x - this.x)
}
MPPoint.prototype.inCircle = function (t, e) {
    return (this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y) < e * e
}
MPPoint.prototype.inLineBox = function (t, e, o) {
    var i = {}, s = {};
    return t.x < e.x ? (i.x = t.x, s.x = e.x) : (i.x = e.x, s.x = t.x), t.y < e.y ? (i.y = t.y, s.y = e.y) : (i.y = e.y, s.y = t.y), !(this.x < i.x - o || this.x > s.x + o || this.y < i.y - o || this.y > s.y + o)
}
MPPoint.prototype.inCircleBox = function (t, e) {
    return !(this.x < t.x - e || this.x > t.x + e || this.y < t.y - e || this.y > t.y + e)
}
MPPoint.prototype.inRect = function (t) {
    var e = t.x,
        o = t.y,
        i = t.width,
        s = t.height;
    return i < 0 && (e -= i = -i), s < 0 && (o -= s = -s), this.x > e && this.x < e + i && this.y > o && this.y < o + s
}
MPPoint.prototype.inPolygon = function (t) {
    for (var e = !1, o = 0, i = t.length - 1; o < t.length; i = o++) t[o].y > this.y != t[i].y > this.y && this.x < (t[i].x - t[o].x) * (this.y - t[o].y) / (t[i].y - t[o].y) + t[o].x && (e = !e);
    return e
}
MPPoint.prototype.lineDistance = function (t, e) {
    var o, i = this.x - t.x,
        s = this.y - t.y,
        n = e.x - t.x,
        a = e.y - t.y,
        h = (i * n + s * a) / (n * n + a * a),
        r = h < 0 || t.x === e.x && t.y === e.y ? (o = t.x, t.y) : 1 < h ? (o = e.x, e.y) : (o = t.x + h * n, t.y + h * a),
        l = this.x - o,
        c = this.y - r;
    return Math.sqrt(l * l + c * c)
}
MPPoint.prototype.distanceTo = function (t) {
    return Math.sqrt((t.x - this.x) * (t.x - this.x) + (t.y - this.y) * (t.y - this.y))
}
MPPoint.prototype.fromPointer = function (t) {
    var e = t.originalEvent;
    return e.targetTouches && 0 < e.targetTouches.length ? this.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY) : this.set(e.pageX, e.pageY), this
}
MPPoint.prototype.fromRelativePointer = function (t, e) {
    return this.fromPointer(t), this.x = (this.x - e.offset.left) * e.devicePixelRatio, this.y = (this.y - e.offset.top) * e.devicePixelRatio, this.x = (this.x - e.matrix[4]) / e.matrix[0], this.y = (this.y - e.matrix[5]) / e.matrix[3], this
}
MPPoint.prototype.fromMultiTouchCenter = function (t) {
    var e = t.originalEvent.targetTouches;
    if (1 < e.length) {
        this.x = e[0].pageX
        this.y = e[0].pageY;
        for (var o = 1; o < e.length; o++) this.x += e[o].pageX
        this.y += e[o].pageY;
        this.x /= e.length
        this.y /= e.length
    }
    return this
}

function MPLine(t) {
    this.from = void 0 !== t && t.from.clone() || new MPPoint()
    this.to = void 0 !== t && t.to.clone() || new MPPoint()
}

MPLine.prototype.intersection = function (t) {
    var e = (t.to.y - t.from.y) * (this.to.x - this.from.x) - (t.to.x - t.from.x) * (this.to.y - this.from.y);
    if (0 == e) return {
        p: void 0,
        onL1: !1,
        onL2: !1
    };
    var o = this.from.y - t.from.y,
        i = this.from.x - t.from.x,
        s = (t.to.x - t.from.x) * o - (t.to.y - t.from.y) * i,
        n = (this.to.x - this.from.x) * o - (this.to.y - this.from.y) * i,
        o = s / e,
        i = n / e;
    return {
        p: MPPFO({
            x: this.from.x + o * (this.to.x - this.from.x),
            y: this.from.y + o * (this.to.y - this.from.y)
        }),
        onL1: 0 < o && o < 1,
        onL2: 0 < i && i < 1
    }
}
MPLine.prototype.length = function () {
    return this.from.distanceTo(this.to)
};


// 环
const MPFragments = {
    benzene: {},
    cyclopropane: {},
    cyclobutane: {},
    cyclopentane: {},
    cyclohexane: {},
    cycloheptane: {},
    length: 1,
    lengthHydrogen: 34 / 55,
    init: function () {
        // eslint-disable-next-line no-unused-expressions
        this.benzene = this.generateRing(6, !0)
        this.cyclopropane = this.generateRing(3, !1)
        this.cyclobutane = this.generateRing(4, !1)
        this.cyclopentane = this.generateRing(5, !1)
        this.cyclohexane = this.generateRing(6, !1)
        this.cycloheptane = this.generateRing(7, !1)
    },
    generateRing: function (t, e) {
        var o = PI2 / t,
            i = .5 / Math.sin(o / 2) * this.length;
        return {
            full: this.createRing(t, e ? 2 : 0),
            toAtom: this.translate(this.createRing(t, e ? 2 : 0), i, 0),
            toBond: this.rotate(this.translate(this.createRing(t, e ? 2 : 0), i, 0), {
                x: 0,
                y: 0
            }, (Math.PI - o) / 2)
        }
    },
    createRing: function (t, e) {
        var o = {
            atoms: [],
            bonds: []
        }, i = PI2 / t;
        o.r = .5 / Math.sin(i / 2) * this.length;
        // eslint-disable-next-line no-unused-expressions
        for (var s = 0; s < t; s++) o.atoms.push({
            center: new MPPoint(o.r * Math.cos(Math.PI + i * s), o.r * Math.sin(Math.PI + i * s)),
            element: "C"
        }), o.bonds.push({
            from: s,
            to: s + 1 < t ? s + 1 : 0,
            type: 0 === e || s % 2 == 2 - e ? MP_BOND_SINGLE : MP_BOND_DOUBLE
        });
        return o
    },
    clone: function (t) {
        for (var e = {
            atoms: [],
            bonds: [],
            r: t.r
        }, o = 0; o < t.atoms.length; o++) e.atoms.push({
            center: t.atoms[o].center.clone(),
            element: t.atoms[o].element
        });
        for (o = 0; o < t.bonds.length; o++) e.bonds.push({
            from: t.bonds[o].from,
            to: t.bonds[o].to,
            type: t.bonds[o].type
        });
        return e
    },
    scale: function (t, e) {
        for (var o = 0; o < t.atoms.length; o++) t.atoms[o].center.scale(e);
        return t
    },
    rotate: function (t, e, o) {
        for (var i = 0; i < t.atoms.length; i++) t.atoms[i].center.rotateAroundCenter(e, o);
        return t
    },
    translate: function (t, e, o) {
        for (var i = 0; i < t.atoms.length; i++) t.atoms[i].center.translate(e, o);
        return t
    }
};

function MPAtom(t, e) {
    this.mp = t
    this.index = e.i
    this.center = new MPPoint(e.x || 0, e.y || 0)
    this.element = e.element || "C"
    this.charge = e.charge || 0
    this.isotope = e.isotope || 0
    this.bonds = void 0 !== e.bonds ? e.bonds.slice() : []
    this.selected = e.selected || !1
    this.display = "normal"
    this.valid = !1
    this.mp.requestRedraw()
}
MPAtom.prototype.getX = function () {
    return this.center.x
}
MPAtom.prototype.getY = function () {
    return this.center.y
}
MPAtom.prototype.getKetcherData = function () {
    return new chem.Struct.Atom({
        pp: {
            x: this.center.x / this.mp.s.bond.length,
            y: this.center.y / this.mp.s.bond.length
        },
        label: this.element,
        charge: this.charge,
        isotope: this.isotope
    })
}
// eslint-disable-next-line no-unused-expressions
MPAtom.prototype.getConfig = function () {
    return {
        i: this.index,
        x: this.center.x,
        y: this.center.y,
        element: this.element,
        charge: this.charge,
        isotope: this.isotope,
        bonds: this.bonds.slice()
    }
}
MPAtom.prototype.toString = function () {
    for (var t = this.center.x.toString() + "," + this.center.y.toString() + "," + this.element.toString() + "," + this.charge.toString() + "," + this.isotope.toString(), e = 0; e < this.bonds.length; e++) t += "," + this.mp.mol.bonds[this.bonds[e]].toString();
    return t
}
MPAtom.prototype.getChargeLabel = function () {
    return 0 === this.charge ? "" : -1 === this.charge ? "−" : 1 === this.charge ? "+" : (1 < this.charge ? "+" : "-") + Math.abs(this.charge)
}
MPAtom.prototype.setIndex = function (t) {
    this.index = t
}
MPAtom.prototype.setCenter = function (t, e) {
    this.center.replace(t, e)
    this.centerChanged()
}
MPAtom.prototype.setElement = function (t) {
    this.element = "D" === t ? "H" : t
    this.labelChanged()
}
MPAtom.prototype.setCharge = function (t) {
    this.charge = t
    this.labelChanged()
}
MPAtom.prototype.setIsotope = function (t) {
    this.isotope = t
    this.labelChanged()
}
MPAtom.prototype.setDisplay = function (t) {
    // eslint-disable-next-line no-unused-expressions
    t !== this.display && (this.display = t, this.mp.requestRedraw())
}
MPAtom.prototype.equals = function (t) {
    return this.index === t.index
}
MPAtom.prototype.getSelectedBonds = function () {
    for (var t = 0, e = 0; e < this.bonds.length; e++) this.mp.mol.bonds[this.bonds[e]].isSelected() && t++;
    return t
}
MPAtom.prototype.getNeighborBond = function (t) {
    for (var e = 0; e < this.bonds.length; e++)
        if (this.mp.mol.bonds[this.bonds[e]].getOppositeAtom(this.index) === t) return this.bonds[e];
    return -1
}
MPAtom.prototype.hasUnselectedNeighbors = function () {
    for (var t = 0; t < this.bonds.length; t++)
        if (!this.mp.mol.atoms[this.mp.mol.bonds[this.bonds[t]].getOppositeAtom(this.index)].isSelected()) return !0;
    return !1
}
MPAtom.prototype.isSelected = function () {
    return this.selected
}
MPAtom.prototype.isImplicit = function () {
    if ("H" === this.element && 0 === this.isotope && 0 === this.charge && 1 === this.bonds.length) {
        var t = this.mp.mol.bonds[this.bonds[0]];
        if (t.type === MP_BOND_SINGLE && t.stereo === MP_STEREO_NONE && t.isPair("C", "H")) return !0
    }
    return !1
}
MPAtom.prototype.isHidden = function () {
    return "hidden" === this.display
}
MPAtom.prototype.isVisible = function () {
    return !0 === this.wasVisible
}
MPAtom.prototype.select = function (t) {
    // eslint-disable-next-line no-unused-expressions
    this.isSelected() !== t && (this.selected = t, this.mp.sel.update(), this.mp.requestRedraw())
}
MPAtom.prototype.translate = function (t, e) {
    // eslint-disable-next-line no-unused-expressions
    0 < Math.abs(t) + Math.abs(e) && (this.center.translate(t, e), this.centerChanged())
}
MPAtom.prototype.mirror = function (t, e) {
    this.center.mirror(t, e) && this.centerChanged()
}
MPAtom.prototype.rotateAroundCenter = function (t, e) {
    // eslint-disable-next-line no-unused-expressions
    this.center.rotateAroundCenter(t, e), this.centerChanged()
}
MPAtom.prototype.getBondCount = function () {
    for (var t = 0, e = 0; e < this.bonds.length; e++) t += this.mp.mol.bonds[this.bonds[e]].type;
    return t
}
MPAtom.prototype.addBond = function (t) {
    // eslint-disable-next-line no-unused-expressions
    -1 === this.bonds.indexOf(t) && (this.bonds.push(t), this.bondsChanged())
}
MPAtom.prototype.removeBond = function (t) {
    var e = this.bonds.indexOf(t);
    // eslint-disable-next-line no-unused-expressions
    - 1 !== e && (this.bonds.splice(e, 1), this.bondsChanged())
}
MPAtom.prototype.mapBonds = function (t) {
    var e = this.bonds.length;
    this.bonds = mapArray(this.bonds, t)
    this.bonds.length !== e && this.bondsChanged()
}
MPAtom.prototype.replaceBond = function (t, e) {
    var o = this.bonds.indexOf(t),
        i = this.bonds.indexOf(e);
    - 1 !== o && (-1 !== i ? this.bonds.splice(t, 1) : this.bonds[o] = e)
    this.bondsChanged()
}
MPAtom.prototype.addNewBond = function (t) {
    var e = new MPAtom(this.mp, {
        i: this.mp.mol.atoms.length,
        x: this.getX() + (t.length || this.mp.s.bond.length) * Math.cos(t.a),
        y: this.getY() - (t.length || this.mp.s.bond.length) * Math.sin(t.a),
        element: t.element || "C"
    }),
        o = new MPBond(this.mp, {
            i: this.mp.mol.bonds.length,
            type: t.type || MP_BOND_SINGLE,
            stereo: t.stereo || MP_STEREO_NONE,
            from: this.index,
            to: e.index
        });
    return this.mp.mol.atoms.push(e), this.mp.mol.bonds.push(o), e.addBond(o.index), this.addBond(o.index), {
        atom: e.index,
        bond: o.index,
        startAngle: t.a,
        currentAngle: t.a
    }
}
MPAtom.prototype.addImplicitHydrogen = function () {
    if ("C" === this.element) {
        if (2 === this.getBondCount() && 2 === this.bonds.length) {
            var t = this.mp.mol.bonds[this.bonds[0]].getAngle(this),
                e = this.mp.mol.bonds[this.bonds[1]].getAngle(this);
            if (indev(Math.max(t, e) - Math.min(t, e), Math.PI, this.mp.s.bond.angleDev)) {
                if (0 === (o = this.calculateNewBondAngle(2))) return;
                return this.addNewBond({
                    a: o[0],
                    length: this.mp.s.bond.lengthHydrogen,
                    element: "H"
                }), void this.addNewBond({
                    a: o[1],
                    length: this.mp.s.bond.lengthHydrogen,
                    element: "H"
                })
            }
        }
        for (; this.getBondCount() < 4;) {
            this.cmap = this.calculateConnectionMap();
            var o = this.calculateNewBondAngle();
            this.addNewBond({
                a: o,
                length: this.mp.s.bond.lengthHydrogen,
                element: "H"
            })
        }
    }
}
MPAtom.prototype.invalidate = function () {
    this.valid = !1
    this.mp.requestRedraw()
}
MPAtom.prototype.centerChanged = function () {
    this.invalidate();
    for (var t = 0; t < this.bonds.length; t++) {
        this.mp.mol.bonds[this.bonds[t]].invalidate()
        this.mp.mol.atoms[this.mp.mol.bonds[this.bonds[t]].getOppositeAtom(this.index)].bondsChanged(!0);
    }
    this.cmap = this.calculateConnectionMap()
}
MPAtom.prototype.labelChanged = function () {
    this.invalidate()
    this.line = void 0;
    for (var t = 0; t < this.bonds.length; t++) {
        this.mp.mol.bonds[this.bonds[t]].invalidate()
        this.mp.mol.atoms[this.mp.mol.bonds[this.bonds[t]].getOppositeAtom(this.index)].bondsChanged()
    }
}
MPAtom.prototype.bondsChanged = function (t) {
    if (this.invalidate(), this.mp.s.skeletalDisplay)
        for (var e = 0; e < this.bonds.length; e++) this.mp.mol.bonds[this.bonds[e]].invalidate()
}
MPAtom.prototype.validate = function () {
    // eslint-disable-next-line no-unused-expressions
    this.valid || (this.valid = !0, this.wasVisible = this.calculateVisibility(), this.cmap = this.calculateConnectionMap(), void 0 === this.line && (this.line = this.calculateCenterLine()))
}
MPAtom.prototype.drawStateColor = function () {
    var t;
    // eslint-disable-next-line no-unused-expressions
    this.isHidden() || void 0 === this.line || ("hover" === this.display || "active" === this.display || "normal" === this.display && this.isSelected()) && (t = this.isSelected() ? "selected" : this.display, this.mp.ctx.beginPath(), this.line.area.point ? (this.mp.ctx.arc(this.center.x, this.center.y, this.mp.s.atom.selectionRadiusScaled, 0, PI2), this.mp.ctx.fillStyle = this.mp.s.atom[t].color, this.mp.ctx.fill()) : (this.mp.ctx.moveTo(this.center.x + this.line.area.left, this.center.y), this.mp.ctx.lineTo(this.center.x + this.line.area.right, this.center.y), this.mp.ctx.strokeStyle = this.mp.s.atom[t].color, this.mp.ctx.stroke()))
}
MPAtom.prototype.drawLabel = function () {
    var t, e;
    // eslint-disable-next-line no-unused-expressions
    this.isHidden() || void 0 === this.line || this.isVisible() && (this.mp.s.atom.colored && (this.mp.ctx.fillStyle = JmolAtomColorsHashHex[this.element] || JmolAtomColorsHashHex.C), this.mp.s.atom.miniLabel ? (t = this.mp.s.atom.miniLabelSize, this.mp.ctx.fillRect(this.center.x - t / 2, this.center.y - t / 2, t, t)) : (e = this.center.x + this.line.text.offsetLeft, 0 < this.isotope && (this.mp.setFont("isotope"), this.mp.ctx.fillText("" + this.isotope, e, this.center.y + this.line.text.offsetTop - this.line.text.isotopeHeight), e += this.line.text.isotopeWidth), this.mp.setFont("element"), this.mp.ctx.fillText("" + this.element, e, this.center.y + this.line.text.offsetTop), e += this.line.text.labelWidth, 0 !== this.charge && (this.mp.setFont("charge"), this.mp.ctx.fillText(this.getChargeLabel(), e, this.center.y + this.line.text.offsetTop - this.line.text.chargeHeight))))
}
MPAtom.prototype.calculateConnectionMap = function () {
    if (0 === this.bonds.length) return 0;
    for (var t = [], e = 0; e < this.bonds.length; e++) t.push({
        i: this.bonds[e],
        a: this.mp.mol.bonds[this.bonds[e]].getAngle(this)
    });
    t.sort(function (t, e) {
        return t.a - e.a
    });
    for (var o = [], e = 0; e < t.length; e++) {
        var i = 0 === e ? t.length - 1 : e - 1;
        o.push({
            from: i,
            to: e,
            a: angleBetween(t[i].a, t[e].a)
        })
    }
    return {
        bondMap: t,
        sections: o
    }
}
MPAtom.prototype.calculateClosestBonds = function (t) {
    for (var e = 0; e < this.cmap.bondMap.length; e++)
        if (this.cmap.bondMap[e].i === t) {
            var o = e + 1 < this.cmap.bondMap.length ? e + 1 : 0,
                i = 0 <= e - 1 ? e - 1 : this.cmap.bondMap.length - 1;
            return {
                none: !1,
                upper: this.cmap.bondMap[o].i,
                lower: this.cmap.bondMap[i].i,
                upperBisectAngle: (this.cmap.bondMap[o].a + this.cmap.bondMap[e].a) / 2,
                lowerBisectAngle: (this.cmap.bondMap[i].a + this.cmap.bondMap[e].a) / 2,
                upperSectionAngle: angleBetween(this.cmap.bondMap[e].a, this.cmap.bondMap[o].a),
                lowerSectionAngle: angleBetween(this.cmap.bondMap[i].a, this.cmap.bondMap[e].a)
            }
        }
    return {
        none: !0
    }
}
MPAtom.prototype.calculateNewBondAngle = function (t) {
    if (0 === this.bonds.length || void 0 === this.cmap) return 0;
    for (var e = 0, o = 1; o < this.cmap.sections.length; o++) this.cmap.sections[o].a > this.cmap.sections[e].a && (e = o);
    if (void 0 === t) return this.cmap.bondMap[this.cmap.sections[e].from].a + this.cmap.sections[e].a / 2;
    for (var i = this.cmap.sections[e].a / (t + 1), s = [], o = 1; o <= t; o++) s.push(this.cmap.bondMap[this.cmap.sections[e].from].a + o * i);
    return s
}
MPAtom.prototype.calculateCenterLine = function () {
    if (this.mp.s.atom.miniLabel) return {
        text: {
            offsetLeft: 0,
            offsetTop: 0
        },
        area: {
            point: !0
        }
    };
    var t = this.mp.s.atom.scale,
        e = {};
    // eslint-disable-next-line no-unused-expressions
    this.mp.setFont("element"), e.labelWidth = this.mp.ctx.measureText("" + this.element).width;
    var o = e.labelWidth;
    // eslint-disable-next-line no-unused-expressions
    0 < this.isotope && (this.mp.setFont("isotope"), e.isotopeHeight = this.mp.s.fonts.isotope.fontSize * t, e.isotopeWidth = this.mp.ctx.measureText("" + this.isotope).width + this.mp.s.atom.isotope.padding * t, o += e.isotopeWidth), 0 !== this.charge && (this.mp.setFont("charge"), e.chargeHeight = this.mp.s.fonts.charge.fontSize * t, e.chargeWidth = this.mp.ctx.measureText("" + this.getChargeLabel()).width, e.labelWidth += this.mp.s.atom.charge.padding * t, o += e.chargeWidth + this.mp.s.atom.charge.padding * t);
    var i = this.mp.s.fonts.element.fontSize * t,
        s = o / 2;
    if (e.offsetLeft = -s, e.offsetTop = i / 2, o > this.mp.s.atom.circleClamp) {
        var n = this.mp.s.atom.radius * t - i / 2;
        return {
            text: e,
            area: {
                half: s + n,
                left: n - s,
                right: s - n
            }
        }
    }
    return {
        text: e,
        area: {
            point: !0
        }
    }
}
MPAtom.prototype.calculateBondVertices = function (t, e) {
    var o = this.mp.mol.atoms[t].center;
    return this._calculateBondVertices(o, e)
}
MPAtom.prototype._calculateBondVertices = function (t, e) {
    if (t.x === this.center.x || this.hidden || void 0 === this.line) {
        for (var o = [], i = this.isVisible() ? this.mp.s.atom.radius : 0, s = t.y < this.center.y, n = 0; n < e.length; n++) o.push(MPPFO({
            x: this.center.x + (s ? e[n] : -e[n]),
            y: this.center.y + (s ? -i : i)
        }));
        return o
    }
    if (t.y === this.center.y) {
        for (var o = [], i = this.isVisible() ? this.line.area.half || this.mp.s.atom.radius : 0, a = t.x > this.center.x, n = 0; n < e.length; n++) o.push(MPPFO({
            x: this.center.x + (a ? i : -i),
            y: this.center.y + (a ? e[n] : -e[n])
        }));
        return o
    }
    if (this.isVisible()) {
        var h = this.center,
            r = this.center,
            l = 1;
        // eslint-disable-next-line no-unused-expressions
        this.line.area.left && t.x < this.center.x ? h = new MPPoint(this.center.x + this.line.area.left, this.center.y) : this.line.area.right && t.x > this.center.x && (h = new MPPoint(this.center.x + this.line.area.right, this.center.y), l = -1);
        for (var c = Math.abs(h.x - r.x), i = this.mp.s.atom.radius, d = t.x - r.x, m = t.y - r.y, p = d / (M = Math.sqrt(d * d + m * m)), u = 0 < l ? i - p * c : i + p * c, f = p * u, g = (b = m / M) * u, y = r.x + f, P = r.y + g, o = [], n = 0; n < e.length; n++) o.push(MPPFO({
            x: y - b * e[n],
            y: P + p * e[n]
        }));
        return o
    }
    if (1 === e.length && 0 === e[0]) return [MPPFO({
        x: this.center.x,
        y: this.center.y
    })];
    for (var M, d = t.x - this.center.x, m = t.y - this.center.y, p = d / (M = Math.sqrt(d * d + m * m)), b = m / M, o = [], n = 0; n < e.length; n++) o.push(MPPFO({
        x: -b * e[n],
        y: p * e[n]
    }));
    for (n = 0; n < o.length; n++) {
        o[n].x += this.center.x
        o[n].y += this.center.y;
    }
    return o
}
MPAtom.prototype.calculateVisibility = function () {
    if (this.isHidden()) return !1;
    if (this.mp.s.skeletalDisplay) {
        if ("C" !== this.element || 0 !== this.charge || 0 !== this.isotope) return !0;
        if (0 === this.bonds.length) return !0;
        if (2 !== this.bonds.length || this.mp.mol.bonds[this.bonds[0]].type !== this.mp.mol.bonds[this.bonds[1]].type || this.mp.mol.bonds[this.bonds[0]].stereo !== this.mp.mol.bonds[this.bonds[1]].stereo) return !1;
        var t = this.mp.mol.bonds[this.bonds[0]].getAngle(this),
            e = this.mp.mol.bonds[this.bonds[1]].getAngle(this);
        return !!indev(Math.max(t, e) - Math.min(t, e), Math.PI, this.mp.s.bond.angleDev)
    }
    return !0
}
MPAtom.prototype.getHandler = function () {
    return "atom" === this.mp.tool.type ? {
        scope: this,
        data: {},
        onPointerDown: function (t, e) {
            this.data = {
                atom: -1,
                oldElement: this.scope.element
            }
            this.scope.setElement(e.tool.data.element)
        },
        onPointerMove: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e);
            // eslint-disable-next-line no-unused-expressions
            o.inCircle(this.scope.center, e.s.atom.minAddRotateLength) || (-1 === this.data.atom && (this.scope.setElement(this.data.oldElement), this.data.startAngle = this.scope.calculateNewBondAngle(), this.data = this.scope.addNewBond({
                a: this.data.startAngle,
                type: e.tool.data.type || MP_BOND_SINGLE,
                stereo: e.tool.data.stereo || MP_STEREO_NONE,
                element: e.tool.data.element
            })), this.data.currentAngle = e.mol.rotateAtoms(this.scope.center, o, [this.data.atom], this.data.currentAngle, this.data.startAngle, e.s.rotateSteps))
        },
        onPointerUp: function (t, e) {
            -1 !== this.data.atom && e.mol.collapseAtoms([this.data.atom], !0)
        }
    } : "bond" === this.mp.tool.type ? {
        scope: this,
        data: {},
        onPointerDown: function (t, e) {
            console.log(e.tool.data.type)
            var o = this.scope.calculateNewBondAngle();
            this.data = this.scope.addNewBond({
                a: o,
                type: e.tool.data.type || MP_BOND_SINGLE,
                stereo: e.tool.data.stereo || MP_STEREO_NONE,
                element: e.tool.data.element
            })
        },
        onPointerMove: function (t, e) {
            for (var o, i = (new MPPoint()).fromRelativePointer(t, e), s = e.mol.bonds[this.data.bond], n = 0; n < e.mol.atoms.length; n++) {
                if (n !== this.scope.index && n !== this.data.atom)
                    if (e.mol.atoms[n].handle(i, "active")) return void (s.to !== n && (e.mol.atoms[s.to].setDisplay("normal"), e.mol.atoms[s.to].removeBond(s.index), e.mol.atoms[this.data.atom].setDisplay("hidden"), s.setTo(n), e.mol.atoms[n].addBond(s.index), -1 !== (o = this.scope.getNeighborBond(n)) && o !== this.data.bond ? o !== this.data.neighbor && (this.data.neighbor = o, e.mol.bonds[o].setDisplay("hidden")) : void 0 !== this.data.neighbor && (e.mol.bonds[this.data.neighbor].setDisplay("normal"), this.data.neighbor = void 0)))
            }
            // eslint-disable-next-line no-unused-expressions
            s.to !== this.data.atom && (e.mol.atoms[this.data.atom].setDisplay("normal"), void 0 !== this.data.neighbor && (e.mol.bonds[this.data.neighbor].setDisplay("normal"), this.data.neighbor = void 0), e.mol.atoms[s.to].removeBond(s.index), e.mol.atoms[this.data.atom].addBond(s.index), s.setTo(this.data.atom)), i.inCircle(this.scope.center, e.s.atom.minAddRotateLength) || (this.data.currentAngle = e.mol.rotateAtoms(this.scope.center, i, [this.data.atom], this.data.currentAngle, this.data.startAngle, e.s.rotateSteps))
        },
        onPointerUp: function (t, e) {
            var o = e.mol.bonds[this.data.bond].to;
            // eslint-disable-next-line no-unused-expressions
            o !== this.data.atom ? (e.mol.atoms[o].addBond(this.data.bond), e.mol.atoms.pop(), void 0 !== this.data.neighbor && (e.mol.bonds.splice(this.data.neighbor, 1), e.mol.updateIndices())) : e.mol.collapseAtoms([o], !0)
        }
    } : "fragment" === this.mp.tool.type ? {
        scope: this,
        data: {},
        onPointerDown: function (t, e) {
            var o = 2 < this.scope.getBondCount() && "C" === this.scope.element;
            // eslint-disable-next-line no-unused-expressions
            this.data = {
                frag: MPFragments.translate(MPFragments.scale(MPFragments.translate(MPFragments.clone(e.tool.data.frag.toAtom), o ? 1 : 0, 0), e.s.bond.length), this.scope.center.x, this.scope.center.y)
            }
            e.sel.clear()
            e.sel.currentAngle = e.sel.startAngle = this.scope.calculateNewBondAngle()
            e.sel.center = this.scope.center.clone()
            MPFragments.rotate(this.data.frag, this.scope.center, e.sel.currentAngle);
            var i, s = e.mol.createFragment(this.data.frag, !0);
            // eslint-disable-next-line no-unused-expressions
            o ? (i = new MPBond(e, {
                i: e.mol.bonds.length,
                type: MP_BOND_SINGLE,
                stereo: MP_STEREO_NONE,
                from: this.scope.index,
                to: s.atoms[0],
                selected: !0
            }), e.mol.bonds.push(i), e.mol.atoms[i.to].addBond(i.index), this.scope.addBond(i.index), this.scope.select(!0)) : e.mol.mergeAtoms(s.atoms[0], this.scope.index)
        },
        onPointerMove: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e);
            o.inCircle(this.scope.center, e.s.atom.minAddRotateLength) || e.sel.rotate(o)
        },
        onPointerUp: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            e.sel.collapse(), e.sel.clear()
        }
    } : "charge" === this.mp.tool.type ? {
        scope: this,
        onPointerDown: function (t, e) {
            this.scope.setCharge(this.scope.charge + e.tool.data.charge)
        }
    } : "chain" === this.mp.tool.type ? {
        scope: this,
        data: {
            startAngle: 0,
            length: this.mp.s.bond.length * Math.cos(this.mp.s.chain.devAngle),
            chain: [],
            ra: void 0
        },
        onDraw: function (t) {
            // eslint-disable-next-line no-unused-expressions
            t.ctx.strokeStyle = t.s.chain.strokeStyle, t.ctx.lineWidth = t.s.bond.width * t.s.bond.scale, t.ctx.lineCap = t.s.chain.lineCap, t.ctx.lineJoin = t.s.chain.lineJoin, t.ctx.setLineDash([2 * t.s.bond.scale, 5 * t.s.bond.scale]), t.ctx.beginPath();
            for (var e, o, i, s, n, a = 0; a < this.data.chain.length; a++) 0 === a ? t.ctx.moveTo(this.data.chain[a].x, this.data.chain[a].y) : t.ctx.lineTo(this.data.chain[a].x, this.data.chain[a].y);
            // eslint-disable-next-line no-unused-expressions
            t.ctx.stroke(), 0 < this.data.chain.length && (t.setFont("chainSize"), t.ctx.fillStyle = t.s.chain.color, e = "" + this.data.size, o = t.ctx.measureText(e).width, i = t.s.atom.scale * t.s.fonts.chainSize.fontSize, s = this.data.chain[this.data.chain.length - 1].clone(), n = t.s.atom.scale * t.s.chain.padding + (i < o ? o : i), s.x += n * Math.cos(this.data.a), s.y += n * Math.sin(-this.data.a), s.x -= o / 2, s.y += i / 2, t.ctx.fillText(e, s.x, s.y))
        },
        onPointerDown: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            this.data.startAngle = this.scope.calculateNewBondAngle(), 1 === this.scope.bonds.length ? this.data.ra = posRad(e.mol.bonds[this.scope.bonds[0]].getAngle(this.scope) + Math.PI) : 2 === this.scope.bonds.length ? this.data.ra = posRad(this.scope.calculateNewBondAngle() + Math.PI) : this.data.ra = void 0
        },
        onPointerMove: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = clampedAngle(this.data.startAngle, this.scope.center, o, e.s.chain.rotateSteps),
                s = Math.floor(this.scope.center.distanceTo(o) / this.data.length);
            if (i !== this.data.a || s !== this.data.size) {
                // eslint-disable-next-line no-unused-expressions
                this.data.a = i, this.data.size = s;
                var n, a = this.data.a > -Math.PI / 2 && this.data.a < Math.PI / 2 ? 1 : -1,
                    h = this.data.a + a * e.s.chain.devAngle;
                // eslint-disable-next-line no-unused-expressions
                void 0 !== this.data.ra && (n = this.data.a - a * e.s.chain.devAngle, smallestAngleBetween(h, this.data.ra) < smallestAngleBetween(n, this.data.ra) && (h = n));
                var r = this.data.length * Math.cos(this.data.a),
                    l = this.data.length * Math.sin(-this.data.a),
                    c = e.s.bond.length * Math.cos(h),
                    d = e.s.bond.length * Math.sin(-h);
                this.data.chain = [];
                // eslint-disable-next-line no-unused-expressions
                for (var m = this.scope.center.clone(), p = 0; p < this.data.size; p++) p % 2 == 0 ? this.data.chain.push(MPPFO({
                    x: m.x + c,
                    y: m.y + d
                })) : (m.x += 2 * r, m.y += 2 * l, this.data.chain.push(m.clone()));
                // eslint-disable-next-line no-unused-expressions
                0 < this.data.chain.length && this.data.chain.unshift(this.scope._calculateBondVertices(this.data.chain[0], [0])[0]), e.requestRedraw()
            }
        },
        onPointerUp: function (t, e) {
            for (var o = this.scope, i = [], s = 1; s < this.data.chain.length; s++) {
                var n = new MPAtom(e, {
                    i: e.mol.atoms.length,
                    x: this.data.chain[s].x,
                    y: this.data.chain[s].y,
                    element: "C"
                });
                // eslint-disable-next-line no-unused-expressions
                e.mol.atoms.push(n), i.push(n.index);
                var a = new MPBond(e, {
                    i: e.mol.bonds.length,
                    from: o.index,
                    to: n.index,
                    type: MP_BOND_SINGLE
                });
                // eslint-disable-next-line no-unused-expressions
                e.mol.bonds.push(a), o.addBond(a.index), n.addBond(a.index), o = n
            }
            e.mol.collapseAtoms(i, !0)
        }
    } : "erase" === this.mp.tool.type ? {
        scope: this,
        onPointerDown: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            this.scope.isSelected() ? e.sel.remove() : e.mol.removeAtom(this.scope.index, !0), e.pointer.handler = void 0
        }
    } : {
        scope: this,
        data: {},
        onPointerDown: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e);
            e.sel.hasCenter() && (e.sel.startAngle = e.sel.currentAngle = e.sel.center.angleTo(o))
        },
        onPointerMove: function (t, e) {
            e.setCursor("move");
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = o.x - e.pointer.old.r.x,
                s = o.y - e.pointer.old.r.y;
            // eslint-disable-next-line no-unused-expressions
            (Math.sqrt(i * i + s * s) > e.s.draggingThreshold || this.data.moved) && (this.data.moved = !0, this.scope.isSelected() ? e.sel.hasCenter() && e.sel.centerAtom !== this.scope.index ? e.sel.rotate(o) : e.sel.translate(i, s) : this.scope.translate(o.x - e.pointer.old.r.x, o.y - e.pointer.old.r.y), e.pointer.old.r = o)
        },
        onPointerUp: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            !this.data.moved && oneOf(e.tool.type, ["select", "drag"]) ? this.scope.select(!this.scope.isSelected()) : this.scope.isSelected() ? e.sel.collapse() : e.mol.collapseAtoms([this.scope.index], !0), e.sel.updateRotationCenter()
        }
    }
}
MPAtom.prototype.handle = function (t, e) {
    if (void 0 === this.line) return !1;
    var o = this.mp.s.atom.selectionRadiusScaled;
    if (this.line.area.point) {
        if (t.inCircleBox(this.center, o) && t.inCircle(this.center, o)) return this.setDisplay(e), !0
    } else {
        var i = new MPPoint(this.center.x + this.line.area.left, this.center.y),
            s = new MPPoint(this.center.x + this.line.area.right, this.center.y);
        if (t.inLineBox(i, s, o) && t.lineDistance(i, s) <= o) return this.setDisplay(e), !0
    }
    return this.setDisplay("normal"), !1
}
MPAtom.prototype.handleRectSelect = function (t) {
    this.select(this.center.inRect(t))
}
MPAtom.prototype.handlePolygonSelect = function (t) {
    this.select(this.center.inPolygon(t))
};


const MP_BOND_SINGLE = 1
const MP_BOND_DOUBLE = 2
const MP_BOND_TRIPLE = 3
const MP_BOND_WEDGEHASH = 4
const MP_BOND_CIS = 5
const MP_STEREO_NONE = 0
const MP_STEREO_UP = 1
const MP_STEREO_DOWN = 6
const MP_STEREO_CIS_TRANS = 3
const MP_STEREO_EITHER = 4

function MPBond(t, e) {
    this.mp = t
    this.index = e.i
    this.type = e.type || 0
    this.stereo = e.stereo || MP_STEREO_NONE
    this.from = e.from || 0
    this.to = e.to || 0
    this.selected = e.selected || !1
    this.display = "normal"
    this.hidden = !1
    this.valid = !1
    this.mp.requestRedraw()
}
// eslint-disable-next-line no-unused-expressions
MPBond.prototype.getKetcherData = function () {
    return new chem.Struct.Bond({
        type: this.type,
        stereo: this.stereo,
        begin: this.from,
        end: this.to
    })
}
MPBond.prototype.getConfig = function () {
    return {
        i: this.index,
        type: this.type,
        stereo: this.stereo,
        from: this.from,
        to: this.to
    }
}
MPBond.prototype.toString = function () {
    return this.type.toString() + this.stereo.toString() + this.to - this.from
}
MPBond.prototype.getLine = function () {
    return new MPLine({
        from: this.mp.mol.atoms[this.from].center,
        to: this.mp.mol.atoms[this.to].center
    })
}
MPBond.prototype.getAngle = function (t) {
    return this.mp.mol.atoms[this.from].equals(t) ? this.mp.mol.atoms[this.from].center.angleTo(this.mp.mol.atoms[this.to].center) : this.mp.mol.atoms[this.to].center.angleTo(this.mp.mol.atoms[this.from].center)
}
MPBond.prototype.setIndex = function (t) {
    this.index = t
}
MPBond.prototype.setType = function (t) {
    this.type = t
    this.changed()
}
MPBond.prototype.setStereo = function (t) {
    this.stereo = t
    this.changed()
}
MPBond.prototype.setFrom = function (t) {
    this.from = t
    this.changed()
}
MPBond.prototype.setTo = function (t) {
    this.to = t
    this.changed()
}
MPBond.prototype.setDisplay = function (t) {
    // eslint-disable-next-line no-unused-expressions
    t !== this.display && (this.display = t, this.mp.requestRedraw())
}
MPBond.prototype.replaceAtom = function (t, e) {
    // eslint-disable-next-line no-unused-expressions
    this.from === t && this.to !== e ? this.from = e : this.to === t && this.from !== e && (this.to = e)
    this.changed()
}
MPBond.prototype.compare = function (t) {
    return t.i === this.index && t.type === this.type && t.stereo === this.stereo && t.from === this.from && t.to === this.to
}
MPBond.prototype.equals = function (t) {
    return t.from === this.from && t.to === this.to
}
MPBond.prototype.isSelected = function () {
    return this.selected
}
MPBond.prototype.isHidden = function () {
    return "hidden" === this.display || this.hidden
}
MPBond.prototype.isPair = function (t, e) {
    var o = this.mp.mol.atoms[this.from].element,
        i = this.mp.mol.atoms[this.to].element;
    return o === t && i === e || o === e && i === t
}
MPBond.prototype.hasAtom = function (t) {
    return this.from === t || this.to === t
}
MPBond.prototype.getOppositeAtom = function (t) {
    return this.from === t ? this.to : this.from
}
MPBond.prototype.select = function (t) {
    // eslint-disable-next-line no-unused-expressions
    this.isSelected() !== t && (this.selected = t, this.mp.sel.update(), this.mp.requestRedraw())
}
MPBond.prototype.invalidate = function () {
    // eslint-disable-next-line no-unused-expressions
    this.valid = !1, this.mp.requestRedraw()
}
MPBond.prototype.changed = function () {
    // eslint-disable-next-line no-unused-expressions
    this.invalidate(), this.mp.mol.atoms[this.from].bondsChanged(), this.mp.mol.atoms[this.to].bondsChanged()
}
MPBond.prototype.drawStateColor = function () {
    var t, e, o;
    // eslint-disable-next-line no-unused-expressions
    this.isHidden() || void 0 === this.line || ("hover" === this.display || "active" === this.display || "normal" === this.display && this.isSelected()) && (t = this.isSelected() ? "selected" : this.display, this.mp.ctx.beginPath(), e = this.line.from, o = this.line.to, this.mp.mol.atoms[this.from].isSelected() && (e = this.mp.mol.atoms[this.from].center), this.mp.mol.atoms[this.to].isSelected() && (o = this.mp.mol.atoms[this.to].center), this.mp.ctx.moveTo(e.x, e.y), this.mp.ctx.lineTo(o.x, o.y), this.mp.ctx.strokeStyle = this.mp.s.bond[t].color, this.mp.ctx.stroke())
}
MPBond.prototype.drawBond = function () {
    if (!this.isHidden() && void 0 !== this.line) {
        // eslint-disable-next-line no-unused-expressions
        this.mp.s.bond.scale;
        var t = this.mp.ctx;
        // eslint-disable-next-line no-unused-expressions
        if (this.mp.s.bond.colored && !this.mp.s.atom.miniLabel && (t.strokeStyle = this.cache.bondColor, this.stereo === MP_STEREO_UP && (t.fillStyle = this.cache.bondColor)), this.mp.getScale() < this.mp.s.bond.singleOnlyScale) t.beginPath(), t.moveTo(this.line.from.x, this.line.from.y), t.lineTo(this.line.to.x, this.line.to.y), t.stroke();
        // eslint-disable-next-line no-unused-expressions
        else if (this.stereo === MP_STEREO_CIS_TRANS && this.type === MP_BOND_DOUBLE) t.beginPath(), t.moveTo(this.cache.ctd.from[0].x, this.cache.ctd.from[0].y), t.lineTo(this.cache.ctd.to[0].x, this.cache.ctd.to[0].y), t.moveTo(this.cache.ctd.from[1].x, this.cache.ctd.from[1].y), t.lineTo(this.cache.ctd.to[1].x, this.cache.ctd.to[1].y), t.stroke();
        // eslint-disable-next-line no-unused-expressions
        else if (this.stereo === MP_STEREO_UP) t.beginPath(), t.moveTo(this.cache.wedge.far[0].x, this.cache.wedge.far[0].y), t.lineTo(this.cache.wedge.near[0].x, this.cache.wedge.near[0].y), t.lineTo(this.line.to.x, this.line.to.y), t.lineTo(this.cache.wedge.near[1].x, this.cache.wedge.near[1].y), t.closePath(), t.fill(), t.stroke();
        else if (this.stereo === MP_STEREO_DOWN) {
            t.beginPath();
            // eslint-disable-next-line no-unused-expressions
            for (var e = 0; e < this.cache.hashLines.length; e++) t.moveTo(this.cache.hashLines[e].from.x, this.cache.hashLines[e].from.y), t.lineTo(this.cache.hashLines[e].to.x, this.cache.hashLines[e].to.y);
            t.stroke()
        } else if (this.type === MP_BOND_SINGLE) {
            t.beginPath()
            t.moveTo(this.line.from.x, this.line.from.y)
            t.lineTo(this.line.to.x, this.line.to.y)
            t.stroke();
        }
        else if (this.type === MP_BOND_DOUBLE || this.type === MP_BOND_TRIPLE) {
            t.beginPath();
            // eslint-disable-next-line no-unused-expressions
            for (e = 0; e < this.cache.bond.from.length; e++) t.moveTo(this.cache.bond.from[e].x, this.cache.bond.from[e].y), t.lineTo(this.cache.bond.to[e].x, this.cache.bond.to[e].y);
            // eslint-disable-next-line no-unused-expressions
            this.type === MP_BOND_TRIPLE && (t.moveTo(this.line.from.x, this.line.from.y), t.lineTo(this.line.to.x, this.line.to.y)), t.stroke()
        }
    }
}
MPBond.prototype.validate = function () {
    if (!this.valid)
        if (this.valid = !0, this.mp.mol.atoms[this.from].center.distanceTo(this.mp.mol.atoms[this.to].center) <= ((this.mp.mol.atoms[this.from].isVisible() ? 1 : 0) + (this.mp.mol.atoms[this.to].isVisible() ? 1 : 0)) * this.mp.s.atom.radius) this.hidden = !0;
        else {
            this.hidden = !1;
            var t, e, o, i, s, n, a, h, r, l, c, d, m, p, u, f, g, y, P = this.mp.s.bond.scale;
            if (this.cache = {}, this.line = {
                from: this.mp.mol.atoms[this.from].calculateBondVertices(this.to, [0])[0],
                to: this.mp.mol.atoms[this.to].calculateBondVertices(this.from, [0])[0]
            }, this.line.center = new MPPFO({
                x: (this.line.from.x + this.line.to.x) / 2,
                y: (this.line.from.y + this.line.to.y) / 2
            }), this.mp.s.bond.colored ? (t = this.mp.mol.atoms[this.from], e = this.mp.mol.atoms[this.to], this.stereo === MP_STEREO_UP ? this.cache.bondColor = JmolAtomColorsHashHex.C : t.element === e.element ? this.cache.bondColor = JmolAtomColorsHashHex[t.element] || JmolAtomColorsHashHex.C : (this.cache.bondColor = this.mp.ctx.createLinearGradient(t.getX(), t.getY(), e.getX(), e.getY()), this.cache.bondColor.addColorStop(this.mp.s.bond.gradient.from, JmolAtomColorsHashHex[t.element] || JmolAtomColorsHashHex.C), this.cache.bondColor.addColorStop(this.mp.s.bond.gradient.to, JmolAtomColorsHashHex[e.element] || JmolAtomColorsHashHex.C))) : this.cache.bondColor = this.mp.s.bond.color, this.mp.getScale() >= this.mp.s.bond.singleOnlyScale)
                if (this.stereo === MP_STEREO_CIS_TRANS && this.type === MP_BOND_DOUBLE) {
                    var M = transformArrayMult(this.mp.s.bond.delta[MP_BOND_CIS], -this.mp.s.bond.deltaScale);
                    this.cache.ctd = {
                        from: this.mp.mol.atoms[this.from].calculateBondVertices(this.to, M),
                        to: this.mp.mol.atoms[this.to].calculateBondVertices(this.from, M)
                    }
                } else if (this.stereo === MP_STEREO_UP) {
                    // eslint-disable-next-line no-unused-expressions
                    this.cache.wedge = {
                        far: this.mp.mol.atoms[this.from].calculateBondVertices(this.to, [0]),
                        near: this.mp.mol.atoms[this.to].calculateBondVertices(this.from, transformArrayMult(this.mp.s.bond.delta[MP_BOND_WEDGEHASH], -this.mp.s.bond.deltaScale))
                    }, this.mp.mol.atoms[this.to].isVisible() || ((o = this.mp.mol.atoms[this.to].calculateClosestBonds(this.index)).none || (this.mp.mol.bonds[o.lower].type != MP_BOND_SINGLE || void 0 !== (i = this.mp.mol.bonds[o.lower].getLine().intersection(new MPLine({
                        from: this.cache.wedge.far[0],
                        to: this.cache.wedge.near[0]
                    }))).p && this.line.to.distanceTo(i.p) < this.mp.s.bond.wedgeFitMaxD && (this.cache.wedge.near[0] = i.p || this.cache.wedge.near[0]), this.mp.mol.bonds[o.upper].type != MP_BOND_SINGLE || void 0 !== (s = this.mp.mol.bonds[o.upper].getLine().intersection(new MPLine({
                        from: this.cache.wedge.far[0],
                        to: this.cache.wedge.near[1]
                    }))).p && this.line.to.distanceTo(s.p) < this.mp.s.bond.wedgeFitMaxD && (this.cache.wedge.near[1] = s.p || this.cache.wedge.near[1])))
                } else if (this.stereo === MP_STEREO_DOWN) {
                    var b = this.mp.mol.atoms[this.from].calculateBondVertices(this.to, [0]),
                        x = this.mp.mol.atoms[this.to].calculateBondVertices(this.from, transformArrayMult(this.mp.s.bond.delta[MP_BOND_WEDGEHASH], -this.mp.s.bond.deltaScale)),
                        v = x[0].x - b[0].x,
                        S = x[0].y - b[0].y,
                        w = x[1].x - b[0].x,
                        A = x[1].y - b[0].y,
                        B = Math.sqrt(v * v + S * S),
                        C = this.mp.s.bond.width * P,
                        D = this.mp.s.bond.hashLineSpace * P;
                    for (this.cache.hashLines = []; 0 < B - D - C;) {
                        var R = (B - D - C) / B;
                        // eslint-disable-next-line no-unused-expressions
                        B *= R, v *= R, S *= R, w *= R, A *= R, this.cache.hashLines.push({
                            from: {
                                x: b[0].x + v,
                                y: b[0].y + S
                            },
                            to: {
                                x: b[0].x + w,
                                y: b[0].y + A
                            }
                        })
                    }
                } else {
                    // eslint-disable-next-line no-unused-expressions
                    this.type !== MP_BOND_DOUBLE && this.type !== MP_BOND_TRIPLE || (M = [], g = 1, n = this.mp.mol.atoms[this.from].calculateClosestBonds(this.index), a = this.mp.mol.atoms[this.to].calculateClosestBonds(this.index), r = h = !1, (l = this.mp.s.skeletalDisplay && (!this.mp.mol.atoms[this.from].isVisible() || !this.mp.mol.atoms[this.to].isVisible()) && !(1 === this.mp.mol.atoms[this.from].bonds.length && (this.mp.mol.atoms[this.from].isVisible() && 2 < this.mp.mol.atoms[this.to].bonds.length || 1 === this.mp.mol.atoms[this.to].bonds.length)) && !(1 === this.mp.mol.atoms[this.to].bonds.length && (this.mp.mol.atoms[this.to].isVisible() && 2 < this.mp.mol.atoms[this.from].bonds.length || 1 === this.mp.mol.atoms[this.from].bonds.length))) && (d = c = this.line.from.distanceTo(this.line.to), m = 0, n.upperSectionAngle < Math.PI ? (this.mp.mol.atoms[this.from].isVisible() || (d -= 8 / Math.tan(n.upperSectionAngle / 2)), m += Math.abs(this.mp.s.bond.bestBisect - n.upperSectionAngle / 2)) : m += Math.abs(this.mp.s.bond.bestBisect - Math.PI / 2), a.lowerSectionAngle < Math.PI ? (this.mp.mol.atoms[this.to].isVisible() || (d -= 8 / Math.tan(a.lowerSectionAngle / 2)), m += Math.abs(this.mp.s.bond.bestBisect - a.lowerSectionAngle / 2)) : m += Math.abs(this.mp.s.bond.bestBisect - Math.PI / 2), p = c, u = 0, n.lowerSectionAngle < Math.PI ? (this.mp.mol.atoms[this.from].isVisible() || (p -= 8 / Math.tan(n.lowerSectionAngle / 2)), u += Math.abs(this.mp.s.bond.bestBisect - n.lowerSectionAngle / 2)) : u += Math.abs(this.mp.s.bond.bestBisect - Math.PI / 2), a.upperSectionAngle < Math.PI ? (this.mp.mol.atoms[this.to].isVisible() || (p -= 8 / Math.tan(a.upperSectionAngle / 2)), u += Math.abs(this.mp.s.bond.bestBisect - a.upperSectionAngle / 2)) : u += Math.abs(this.mp.s.bond.bestBisect - Math.PI / 2), Math.abs(n.upperSectionAngle - a.upperSectionAngle) + Math.abs(n.lowerSectionAngle - a.lowerSectionAngle) < this.mp.s.bond.angleDev ? g = (f = this.mp.mol.atoms[this.from].center.angleTo(this.mp.mol.atoms[this.to].center)) > -Math.PI / 2 + this.mp.s.bond.angleDev && f <= Math.PI / 2 + this.mp.s.bond.angleDev ? 1 : -1 : (u < m || d < this.mp.s.atom.radius && p > this.mp.s.atom.radius) && (g = -1),
                        h = (this.type === MP_BOND_TRIPLE || 1 === g) && d > this.mp.s.atom.radius,
                        r = (this.type === MP_BOND_TRIPLE || -1 === g) && p > this.mp.s.atom.radius),

                        this.type === MP_BOND_DOUBLE ? (M = this.mp.s.bond.delta[MP_BOND_DOUBLE],
                            l && (M = transformArrayAdd(M, -g * M[0]))) : this.type === MP_BOND_TRIPLE && (M = this.mp.s.bond.delta[MP_BOND_TRIPLE]),
                        M = transformArrayMult(M, -this.mp.s.bond.deltaScale),
                        y = transformArrayMult(M, -1),
                        this.cache.bond = {
                            from: this.mp.mol.atoms[this.from].calculateBondVertices(this.to, M),
                            to: this.mp.mol.atoms[this.to].calculateBondVertices(this.from, y)
                        }, this.mp.mol.atoms[this.from].isVisible() || n.none || ((!l || r) && n.lowerSectionAngle < Math.PI && (this.cache.bond.from[0] = this.refineBondVertex(l, n.lowerBisectAngle, this.line.from, this.cache.bond.from[0], this.cache.bond.to[0], this.mp.mol.bonds[n.lower].getLine())), (!l || h) && n.upperSectionAngle < Math.PI && (this.cache.bond.from[1] = this.refineBondVertex(l, n.upperBisectAngle, this.line.from, this.cache.bond.from[1], this.cache.bond.to[1], this.mp.mol.bonds[n.upper].getLine()))), this.mp.mol.atoms[this.to].isVisible() || a.none || ((!l || r) && a.upperSectionAngle < Math.PI && (this.cache.bond.to[0] = this.refineBondVertex(l, a.upperBisectAngle, this.line.to, this.cache.bond.to[0], this.cache.bond.from[0], this.mp.mol.bonds[a.upper].getLine())), (!l || h) && a.lowerSectionAngle < Math.PI && (this.cache.bond.to[1] = this.refineBondVertex(l, a.lowerBisectAngle, this.line.to, this.cache.bond.to[1], this.cache.bond.from[1], this.mp.mol.bonds[a.lower].getLine()))))
                }
        }
}


MPBond.prototype.refineBondVertex = function (t, e, o, i, s, n) {
    var a;
    return t ? a = new MPLine({
        from: o,
        to: MPPFO({
            x: o.x + Math.cos(e),
            y: o.y + Math.sin(-e)
        })
    }).intersection(new MPLine({
        from: i,
        to: s
    })) : (!(a = n.intersection(new MPLine({
        from: i,
        to: s
    }))).onL1 || o.distanceTo(a.p) > n.length() / 2) && (a.p = void 0), void 0 !== a.p ? a.p : i
}

MPBond.prototype.getHandler = function () {
    return "bond" === this.mp.tool.type ? {
        scope: this,
        onPointerDown: function (t, e) {
            var o;
            // eslint-disable-next-line no-unused-expressions

            e.tool.data.type ? (this.scope.setType(e.tool.data.type === MP_BOND_TRIPLE ? MP_BOND_TRIPLE : this.scope.type === MP_BOND_TRIPLE || this.scope.stereo !== MP_STEREO_NONE ? e.tool.data.type : this.scope.type === MP_BOND_SINGLE ? MP_BOND_DOUBLE : MP_BOND_SINGLE), this.scope.setStereo(MP_STEREO_NONE)) : e.tool.data.stereo && (this.scope.setType(MP_BOND_SINGLE), this.scope.stereo === e.tool.data.stereo ? (o = this.scope.from, this.scope.setFrom(this.scope.to), this.scope.setTo(o)) : this.scope.setStereo(e.tool.data.stereo))
        }
    } : "fragment" === this.mp.tool.type && void 0 !== this.mp.tool.data.frag.toBond ? {
        scope: this,
        data: {},
        onPointerDown: function (t, e) {

            (new MPPoint()).fromRelativePointer(t, e);
            var o = e.mol.atoms[this.scope.from].center,
                i = e.mol.atoms[this.scope.to].center,
                s = o.angleTo(i);
            this.data.frag = MPFragments.rotate(MPFragments.translate(MPFragments.scale(MPFragments.clone(e.tool.data.frag.toBond), e.s.bond.length), o.x, o.y), o, s);
            var n = e.mol.createFragment(this.data.frag, !0);
            // eslint-disable-next-line no-unused-expressions
            n.atoms = mapArray(n.atoms, e.mol.mergeAtoms(n.atoms[0], this.scope.from).amap), n.atoms = mapArray(n.atoms, e.mol.mergeAtoms(n.atoms[n.atoms.length - 1], this.scope.to).amap);
            for (var a = 0, h = 0; h < n.atoms.length; h++) a += e.mol.atoms[n.atoms[h]].center.lineSide(this.scope.getLine());
            e.sel.mirrorSide = 0 < a ? 1 : -1;
            for (var r = e.mol.countCollapses(n.atoms), h = 0; h < n.atoms.length; h++) e.mol.atoms[n.atoms[h]].center.mirror(this.scope.getLine(), -e.sel.mirrorSide);
            var l = e.mol.countCollapses(n.atoms);
            if (r === n.atoms.length && l === n.atoms.length) return this.data.lock = !0, this.scope.select(!1), e.mol.atoms[this.scope.from].select(!1), e.mol.atoms[this.scope.to].select(!1), void e.sel.remove();
            if (r < l) {
                for (h = 0; h < n.atoms.length; h++) e.mol.atoms[n.atoms[h]].center.mirror(this.scope.getLine(), e.sel.mirrorSide);
                this.data.lock = l === n.atoms.length
                // eslint-disable-next-line no-unused-expressions
            } else e.sel.mirrorSide = -e.sel.mirrorSide, this.data.lock = r === n.atoms.length
        },
        onPointerMove: function (t, e) {
            var o;
            // eslint-disable-next-line no-unused-expressions
            this.data.lock || (o = (new MPPoint()).fromRelativePointer(t, e), e.sel.mirror(this.scope.getLine(), o))
        },
        onPointerUp: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            e.sel.collapse(), e.sel.clear()
        }
    } : "erase" === this.mp.tool.type ? {
        scope: this,
        onPointerDown: function (t, e) {
            // eslint-disable-next-line no-unused-expressions
            if (this.scope.isSelected()) {
                e.sel.remove()
            } else {
                e.mol.removeBond(this.scope.index)
                e.pointer.handler = void 0
            }

        }
    } : {
        scope: this,
        data: {},
        onPointerMove: function (t, e) {
            e.setCursor("move");
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = o.x - e.pointer.old.r.x,
                s = o.y - e.pointer.old.r.y;
            // eslint-disable-next-line no-unused-expressions
            (Math.sqrt(i * i + s * s) > e.s.draggingThreshold || this.data.moved) && (this.data.moved = !0, this.scope.isSelected() && 0 < e.sel.cache.atoms.length ? e.sel.translate(i, s) : (e.mol.atoms[this.scope.from].translate(i, s), e.mol.atoms[this.scope.to].translate(i, s)), e.pointer.old.r = o)
        },

        onPointerUp: function (t, e) {
            var o;
            // eslint-disable-next-line no-unused-expressions
            !this.data.moved && oneOf(e.tool.type, ["select", "drag"]) ? (o = !this.scope.isSelected(), this.scope.select(o), 0 === e.sel.cache.atoms.length && (e.mol.atoms[this.scope.from].select(o), e.mol.atoms[this.scope.to].select(o))) : this.scope.isSelected() ? e.sel.collapse() : e.mol.collapseAtoms([this.scope.from, this.scope.to], !0), e.sel.updateRotationCenter()
        }
    }
}
MPBond.prototype.handle = function (t, e) {
    if (void 0 === this.line) return !1;
    var o = this.mp.s.bond.radiusScaled;
    return t.inLineBox(this.line.from, this.line.to, o) && t.lineDistance(this.line.from, this.line.to) <= o ? (this.setDisplay(e), !0) : (this.setDisplay("normal"), !1)
}
MPBond.prototype.handleRectSelect = function (t) {
    void 0 !== this.line && this.select(this.line.center.inRect(t))
}
MPBond.prototype.handlePolygonSelect = function (t) {
    void 0 !== this.line && this.select(this.line.center.inPolygon(t))
}

MolPad.prototype.loadSettings = function () {
    this.s = {
        maxStackSize: 100,
        zoomType: MP_ZOOM_TO_POINTER,
        zoomSpeed: .2,
        minZoom: .01,
        skeletalDisplay: !0,
        relativePadding: .15,
        draggingThreshold: 2,
        rotateSteps: 12,
        fonts: {
            element: {
                fontStyle: "bold",
                fontFamily: "sans-serif",
                fontSize: 12
            },
            charge: {
                fontStyle: "bold",
                fontFamily: "sans-serif",
                fontSize: 8
            },
            isotope: {
                fontStyle: "bold",
                fontFamily: "sans-serif",
                fontSize: 8
            },
            chainSize: {
                fontStyle: "normal",
                fontFamily: "sans-serif",
                fontSize: 12
            }
        },
        atom: {
            hover: {
                color: "#bfb"
            },
            active: {
                color: "#8f8"
            },
            incorrect: {
                color: "#f66"
            },
            selected: {
                color: "#8f8"
            },
            charge: {
                padding: 1
            },
            isotope: {
                padding: 1
            },
            scale: 1,
            minScale: 1 / 1.5,
            radius: 12,
            selectionRadius: 15,
            color: "#111",
            colored: !0,
            lineCap: "round",
            circleClamp: 15,
            minAddRotateLength: 15,
            maxMiniLabelScale: .2,
            miniLabelSize: 25,
            miniLabel: !1
        },
        bond: {
            gradient: {
                from: .4,
                to: .6
            },
            color: "#111",
            colored: !0,
            hover: {
                color: "#bfb"
            },
            active: {
                color: "#8f8"
            },
            selected: {
                color: "#8f8"
            },
            delta: [
                [],
                [0],
                [-4, 4],
                [-8, 8],
                [-6, 6],
                [0, 8]
            ],
            length: 55,
            lengthHydrogen: 34,
            radius: 8,
            lineCap: "round",
            lineJoin: "round",
            width: 1.5,
            scale: 1,
            minScale: 1 / 1.5,
            minDeltaScale: .25,
            singleOnlyScale: .2,
            hashLineSpace: 2,
            wedgeFitMaxD: 20,
            bestBisect: Math.PI / 4,
            angleDev: Math.PI / 30
        },
        chain: {
            rotateSteps: 12,
            devAngle: Math.PI / 6,
            padding: 2,
            color: "#f50",
            strokeStyle: "#f50",
            lineCap: "round",
            lineJoin: "round"
        },
        select: {
            fillStyle: "rgba(255, 85, 0, 0.3)",
            strokeStyle: "#f50",
            lineWidth: 2,
            lineCap: "round",
            lineJoin: "round"
        }
    }
};

const MP_ZOOM_TO_COG = 0
const MP_ZOOM_TO_POINTER = 1

function MolPad(t, e, o) {
    // eslint-disable-next-line no-unused-expressions
    this.loadSettings(), this.tool = {
        type: "bond",
        data: {
            type: MP_BOND_SINGLE
        },
        selection: []
    },
        this.mol = new MPMolecule(this),
        this.sel = new MPSelection(this),
        this.buttons = o,
        // this.container = jQuery(t),
        this.container = t,
        this.container2 = my$(t),
        this.offset = offset(t),

        this.devicePixelRatio = e || 1,
        this.setupEventHandling(),
        this.setupGraphics()
}

function offset(curEle) {
    var totalLeft = null, totalTop = null, par = curEle.offsetParent;
    //首先加自己本身的左偏移和上偏移
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop
    //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
    while (par) {
        if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
            //累加父级参照物的边框
            totalLeft += par.clientLeft;
            totalTop += par.clientTop
        }

        //累加父级参照物本身的偏移
        totalLeft += par.offsetLeft;
        totalTop += par.offsetTop
        par = par.offsetParent;
    }

    return {
        left: totalLeft,
        top: totalTop
    }
}

function MPMolecule(t) {
    // eslint-disable-next-line no-unused-expressions
    this.atoms = []
    this.bonds = []
    this.stack = []
    this.reverseStack = []
    this.copy = {
        atoms: [],
        bonds: [],
        fingerprint: ""
    }, this.mp = t
}

function MPSelection(t) {
    // eslint-disable-next-line no-unused-expressions
    this.cache = {
        atoms: [],
        bonds: []
    }, this.mirrorSide = 1, this.startAngle = 0, this.currentAngle = 0, this.mp = t
}

MolPad.prototype.setTool = function (t, e) {
    console.log(e)

    this.tool.type = t
    this.tool.data = e

}
MolPad.prototype.onChange = function (t) {
    this.changeCallback = t
}
MolPad.prototype.clear = function (t) {
    console.log(this.mol)
    this.mol.clear()
    // this.sel.update()
    // this.scaleAbsolute(1 / this.matrix[0], this.width() / 2, this.height() / 2)
    requestAnimationFrame(this.draw.bind(this))
}
MolPad.prototype.changed = function () {
    my$(this.buttons.undo).toggleClass("tool-button-disabled", 0 === this.mol.stack.length)
    my$(this.buttons.redo).toggleClass("tool-button-disabled", 0 === this.mol.reverseStack.length)
    void 0 !== this.changeCallback && this.changeCallback()
}
MolPad.prototype.undo = function (t) {
    this.dismissHandler()
    this.mol.undo(t) && this.changed()
}
MolPad.prototype.redo = function () {
    this.dismissHandler()
    this.mol.redo() && this.changed()
}

MolPad.prototype.setSkeletalDisplay = function (t) {
    // eslint-disable-next-line no-unused-expressions
    t !== this.s.skeletalDisplay && (this.dismissHandler(), (this.s.skeletalDisplay = t) ? this.mol.removeImplicitHydrogen() : this.mol.addImplicitHydrogen(), this.mol.invalidateAll(), this.clearRedrawRequest(), this.mol.updateCopy())
}
MolPad.prototype.setColored = function (t) {
    // eslint-disable-next-line no-unused-expressions
    this.s.atom.colored = this.s.bond.colored = t, this.s.fonts.isotope.fontStyle = this.s.fonts.element.fontStyle = this.s.fonts.charge.fontStyle = t ? "bold" : "normal", this.redraw(!0)
}
MolPad.prototype.toDataURL = function () {
    return this.canvas.toDataURL("image/png")
}
MolPad.prototype.loadMOL = function (t, e) {
    // eslint-disable-next-line no-unused-expressions
    this.mol.loadMOL(t), (this.s.skeletalDisplay || e) && this.mol.removeImplicitHydrogen(), this.center(), this.mol.updateCopy()
}
MolPad.prototype.getMOL = function () {
    return this.mol.getMOL()
}
MolPad.prototype.getSMILES = function () {
    return this.mol.getSMILES()
}
MPMolecule.prototype.clear = function () {

    this.atoms = []
    this.bonds = []
}
MPMolecule.prototype.invalidateAll = function () {
    for (var t = 0; t < this.atoms.length; t++) this.atoms[t].invalidate();
    for (t = 0; t < this.bonds.length; t++) this.bonds[t].invalidate()
}
MPMolecule.prototype.validateAll = function () {
    for (var t = 0; t < this.atoms.length; t++) this.atoms[t].validate();
    for (t = 0; t < this.bonds.length; t++) this.bonds[t].validate()
}
MPMolecule.prototype.exec = function (t, e, o) {
    if (e)
        for (var i = 0; i < this.atoms.length; i++)
            if (t.call(this.mp, this.atoms[i])) return;
    if (o)
        for (i = 0; i < this.bonds.length; i++)
            if (t.call(this.mp, this.bonds[i])) return
}
MPMolecule.prototype.loadMOL = function (t) {
    this.clear();
    var e = chem.Molfile.parseCTFile(t.split("\n")),
        i = this;
    e.atoms.each(function (t, e) {
        var o = new MPAtom(i.mp, {
            i: t,
            x: e.pp.x * i.mp.s.bond.length,
            y: e.pp.y * i.mp.s.bond.length,
            element: e.label,
            charge: e.charge,
            isotope: e.isotope
        });
        i.atoms.push(o)
    })
    e.bonds.each(function (t, e) {
        var o = new MPBond(i.mp, {
            i: t,
            type: e.type,
            stereo: e.stereo,
            from: e.begin,
            to: e.end
        });
        i.bonds.push(o)
        i.atoms[e.begin].bonds.push(o.index)
        i.atoms[e.end].bonds.push(o.index)
    })
}
MPMolecule.prototype.getMOL = function () {
    return (new chem.MolfileSaver()).saveMolecule(this.getKetcherData())
}
MPMolecule.prototype.getSMILES = function () {
    if (0 === this.atoms.length) throw new Error("No atoms found");
    return (new chem.SmilesSaver()).saveMolecule(this.getKetcherData())
}
MPMolecule.prototype.getKetcherData = function () {
    for (var t = new chem.Struct(), e = 0; e < this.atoms.length; e++) t.atoms.add(this.atoms[e].getKetcherData());
    for (e = 0; e < this.bonds.length; e++) t.bonds.add(this.bonds[e].getKetcherData());
    return t.initHalfBonds(), t.initNeighbors(), t.markFragments(), t
}
MPMolecule.prototype.getPlainData = function () {
    for (var t = {
        atoms: [],
        bonds: []
    }, e = 0; e < this.atoms.length; e++) t.atoms.push(this.atoms[e].getConfig());
    for (e = 0; e < this.bonds.length; e++) t.bonds.push(this.bonds[e].getConfig());
    return t
}
MPMolecule.prototype.loadPlainData = function (t) {
    this.clear();
    for (var e = 0; e < t.atoms.length; e++) this.atoms.push(new MPAtom(this.mp, t.atoms[e]));
    for (e = 0; e < t.bonds.length; e++) this.bonds.push(new MPBond(this.mp, t.bonds[e]));
    this.mp.redraw(!0)
}
MPMolecule.prototype.getFingerprint = function () {
    for (var t = [], e = 0; e < this.atoms.length; e++) t.push(this.atoms[e].toString());
    return t.sort(), t.join("")
}
MPMolecule.prototype.isChanged = function () {
    return this.getFingerprint() !== this.copy.fingerprint
}
MPMolecule.prototype.createFragment = function (t, e) {
    for (var o = {
        atoms: [],
        bonds: []
    }, i = 0; i < t.atoms.length; i++) {
        var s = new MPAtom(this.mp, {
            i: this.atoms.length,
            x: t.atoms[i].center.x,
            y: t.atoms[i].center.y,
            element: t.atoms[i].element,
            selected: e
        });
        this.atoms.push(s)
        o.atoms.push(s.index)
    }
    for (i = 0; i < t.bonds.length; i++) {
        var n = new MPBond(this.mp, {
            i: this.bonds.length,
            type: t.bonds[i].type,
            stereo: MP_STEREO_NONE,
            from: o.atoms[t.bonds[i].from],
            to: o.atoms[t.bonds[i].to],
            selected: e
        });
        this.bonds.push(n)
        o.bonds.push(n.index)
        this.atoms[n.from].addBond(n.index)
        this.atoms[n.to].addBond(n.index)
    }
    return e && this.mp.sel.update(), o
}
MPMolecule.prototype.rotateAtoms = function (t, e, o, i, s, n, a) {
    var h = i;
    if ((h = void 0 !== n ? clampedAngle(s, t, e, n) : t.angleTo(e)) !== i || a) {
        for (var r = 0; r < o.length; r++) this.atoms[o[r]].rotateAroundCenter(t, h - i);
        return h
    }
    return i
}
MPMolecule.prototype.mergeAtoms = function (t, e, o) {
    var i = this.atoms[t],
        s = this.atoms[e];
    o && s.center.replace(i.center)
    s.select(i.isSelected() || s.isSelected());
    for (var n = 0; n < i.bonds.length; n++) {
        // eslint-disable-next-line no-unused-expressions
        var a = s.getNeighborBond(this.bonds[i.bonds[n]].getOppositeAtom(t)); - 1 === a ? (this.bonds[i.bonds[n]].replaceAtom(t, e), s.addBond(i.bonds[n])) : (this.bonds[a].select(this.bonds[i.bonds[n]].isSelected() || this.bonds[a].isSelected()), this.bonds[i.bonds[n]].type === MP_BOND_SINGLE && this.bonds[a].setType(MP_BOND_SINGLE))
    }
    return "C" === s.element && s.setElement(i.element), this.atoms.splice(t, 1), this.updateIndices()
}
MPMolecule.prototype.collapseAtoms = function (t, e) {
    for (var o = 0; o < t.length; o++)
        for (var i = 0; i < this.atoms.length; i++)
            if (-1 === t.indexOf(i)) {
                var s = (this.atoms[t[o]].isVisible() || this.atoms[i].isVisible() ? 2 : 1) * this.mp.s.atom.selectionRadiusScaled;
                if (this.atoms[t[o]].center.inCircle(this.atoms[i].center, s)) {
                    t = mapArray(t, this.mergeAtoms(i, t[o], e).amap);
                    break
                }
            }
}
MPMolecule.prototype.countCollapses = function (t) {
    for (var e = 0, o = 0; o < t.length; o++)
        for (var i = 0; i < this.atoms.length; i++) - 1 === t.indexOf(i) && this.atoms[t[o]].center.inCircle(this.atoms[i].center, this.mp.s.atom.radiusScaled) && e++;
    return e
}
MPMolecule.prototype.removeAtom = function (t, e) {
    var o = [];
    if (e)
        for (var i = 0; i < this.atoms[t].bonds.length; i++) {
            var s = this.bonds[this.atoms[t].bonds[i]].getOppositeAtom(t);
            "H" == this.atoms[s].element && 1 == this.atoms[s].bonds.length && o.push(s)
        }
    o.push(t)
    o.sort(function (t, e) {
        return t - e
    }).reverse();
    for (i = 0; i < o.length; i++) this.atoms.splice(o[i], 1);
    return this.updateIndices()
}
MPMolecule.prototype.removeBond = function (t) {
    var e = this.bonds[t].from,
        o = this.bonds[t].to;
    return 1 === this.atoms[e].bonds.length && (this.atoms.splice(e, 1), e < o && o--), 1 === this.atoms[o].bonds.length && this.atoms.splice(o, 1), this.bonds.splice(t, 1), this.updateIndices()
}
MPMolecule.prototype.updateIndices = function () {
    // eslint-disable-next-line no-unused-expressions
    for (var t = {}, e = {}, o = 0; o < this.atoms.length; o++) t[this.atoms[o].index] = o, this.atoms[o].index = o, this.atoms[o].valid = !1;
    for (o = 0; o < this.bonds.length; o++) {
        var i = this.bonds[o],
            s = t[i.from],
            n = t[i.to];
        // eslint-disable-next-line no-unused-expressions
        void 0 !== s && void 0 !== n ? (e[i.index] = o, i.index = o, i.from = s, i.to = n, i.valid = !1) : (this.bonds.splice(o, 1), o--)
    }
    for (o = 0; o < this.atoms.length; o++) this.atoms[o].mapBonds(e);
    return this.mp.sel.update(), {
        amap: t,
        bmap: e
    }
}
MPMolecule.prototype.getBBox = function () {
    if (0 === this.atoms.length) return {
        x: 0,
        y: 0,
        width: 1,
        height: 1
    };
    for (var t = void 0, e = void 0, o = 0; o < this.atoms.length; o++) {
        var i = this.atoms[o].calculateCenterLine(),
            s = this.atoms[o].center.x + (i.area.point ? 0 : i.area.left),
            n = this.atoms[o].center.x + (i.area.point ? 0 : i.area.right),
            a = this.atoms[o].center.y;
        // eslint-disable-next-line no-unused-expressions
        void 0 === t ? t = {
            x: s,
            y: a
        } : (t.x > s && (t.x = s), t.y > a && (t.y = a)), void 0 === e ? e = {
            x: n,
            y: a
        } : (e.x < n && (e.x = n), e.y < a && (e.y = a))
    }
    var h = this.mp.s.atom.radius;
    return {
        x: t.x - h,
        y: t.y - h,
        width: e.x - t.x + 2 * h,
        height: e.y - t.y + 2 * h
    }
}
MPMolecule.prototype.updateCopy = function () {
    var t = this.getFingerprint();
    // eslint-disable-next-line no-unused-expressions
    t !== this.copy.fingerprint && (this.reverseStack = [], this.stack.push(this.copy), this.stack.length > this.mp.s.maxStackSize && this.stack.shift(), this.copy = this.getPlainData(), this.copy.fingerprint = t, this.mp.changed())
}
MPMolecule.prototype.undo = function (t) {
    return 0 < this.stack.length && (t || this.reverseStack.push(this.copy), this.copy = this.stack.pop(), this.loadPlainData(this.copy), !0)
}
MPMolecule.prototype.redo = function () {
    return 0 < this.reverseStack.length && (this.stack.push(this.copy), this.copy = this.reverseStack.pop(), this.loadPlainData(this.copy), !0)
}
MPMolecule.prototype.removeImplicitHydrogen = function () {
    for (var t = [], e = 0; e < this.atoms.length; e++) this.atoms[e].isImplicit() && t.push(e);
    for (e = 0; e < t.length; e++) this.atoms.splice(t[e] - e, 1);
    this.updateIndices()
}
MPMolecule.prototype.addImplicitHydrogen = function () {
    for (var t = 0; t < this.atoms.length; t++) this.atoms[t].addImplicitHydrogen()
}
MPSelection.prototype.hasCenter = function () {
    return "object" == typeof this.center
}
MPSelection.prototype.update = function () {
    this.cache.atoms = []
    this.cache.bonds = [];
    for (var t = 0; t < this.mp.mol.atoms.length; t++) this.mp.mol.atoms[t].isSelected() && this.cache.atoms.push(t);
    for (t = 0; t < this.mp.mol.bonds.length; t++) this.mp.mol.bonds[t].isSelected() && this.cache.bonds.push(t)
}
MPSelection.prototype.translate = function (t, e) {
    for (var o = 0; o < this.cache.atoms.length; o++) this.mp.mol.atoms[this.cache.atoms[o]].translate(t, e)
}
MPSelection.prototype.rotate = function (t) {
    this.currentAngle = this.mp.mol.rotateAtoms(this.center, t, this.cache.atoms, this.currentAngle, this.startAngle, this.mp.s.rotateSteps)
}
MPSelection.prototype.mirror = function (t, e) {
    var o = e.lineSide(t);
    if (o !== this.mirrorSide && 0 !== o) {
        this.mirrorSide = o;
        for (var i = 0; i < this.cache.atoms.length; i++) this.mp.mol.atoms[this.cache.atoms[i]].mirror(t, o)
    }
}
MPSelection.prototype.clear = function () {
    this.mp.mol.exec(function (t) {
        t.selected = !1
    }, !0, !0)
    this.center = void 0
    this.update()
    this.mp.requestRedraw()
}
MPSelection.prototype.collapse = function () {
    this.mp.mol.collapseAtoms(this.cache.atoms.slice())
}
MPSelection.prototype.remove = function () {
    for (; 0 < this.cache.atoms.length;) this.mp.mol.removeAtom(this.cache.atoms[0]);
    for (; 0 < this.cache.bonds.length;) this.mp.mol.removeBond(this.cache.bonds[0])
}
MPSelection.prototype.updateRotationCenter = function () {
    for (var t = [], e = 0; e < this.cache.atoms.length; e++) this.mp.mol.atoms[this.cache.atoms[e]].hasUnselectedNeighbors() && t.push(this.cache.atoms[e]);
    // eslint-disable-next-line no-unused-expressions
    1 === t.length && 1 < this.cache.atoms.length ? (this.center = this.mp.mol.atoms[t[0]].center, this.centerAtom = t[0]) : this.center = void 0
}
MolPad.prototype.setupGraphics = function () {
    // eslint-disable-next-line no-unused-expressions
    this.canvas = document.createElement("canvas"), this.canvas.width = this.container.clientWidth * this.devicePixelRatio, this.canvas.height = this.container.clientHeight * this.devicePixelRatio, this.canvas.style.width = this.container.clientWidth + "px", this.canvas.style.height = this.container.clientHeight + "px", this.container.append(this.canvas), this.redrawRequest = !1, this.matrix = [1, 0, 0, 1, 0, 0], this.ctx = this.canvas.getContext("2d"), this.updated = !1, this.pendingFrame = !1
}
MolPad.prototype.resize = function () {
    // eslint-disable-next-line no-unused-expressions
    this.canvas.width = this.container.clientWidth * this.devicePixelRatio, this.canvas.height = this.container.height() * this.devicePixelRatio, this.canvas.style.width = this.container.clientWidth + "px", this.canvas.style.height = this.container.clientHeight + "px", this.offset = this.offset, this.center()
}
MolPad.prototype.requestRedraw = function () {
    this.redrawRequest = !0
}
MolPad.prototype.clearRedrawRequest = function () {
    return !!this.redrawRequest && (this.redrawRequest = !1, this.redraw(), !0)
}
MolPad.prototype.update = function () {
    var t = this.s.atom.scale;
    // eslint-disable-next-line no-unused-expressions
    this.s.atom.miniLabel = this.getScale() <= this.s.atom.maxMiniLabelScale, this.s.atom.scale = this.getScale() < this.s.atom.minScale ? this.s.atom.minScale / this.getScale() : 1, this.s.bond.deltaScale = this.getScale() < this.s.bond.minDeltaScale ? this.s.bond.minDeltaScale / this.getScale() : 1, this.s.bond.scale = this.getScale() < this.s.bond.minScale ? this.s.bond.minScale / this.getScale() : 1, this.s.atom.radiusScaled = this.s.atom.radius * this.s.atom.scale, this.s.atom.selectionRadiusScaled = this.s.atom.selectionRadius * this.s.atom.scale, this.s.bond.radiusScaled = this.s.bond.radius * this.s.bond.scale, this.s.atom.scale !== t && (this.mol.invalidateAll(), this.mol.exec(function (t) {
        t.line = void 0
    }, !0, !1))
}
MolPad.prototype.setCursor = function (t) {
    this.container.style.cursor = t
}
MolPad.prototype.setFont = function (t) {
    var e = this.s.fonts[t].fontStyle + " " + Math.round(this.s.fonts[t].fontSize * this.s.atom.scale * 96 / 72) + "px " + this.s.fonts[t].fontFamily;
    e !== this.ctx.font && (this.ctx.font = e)
}

MolPad.prototype.draw = function () {
    // eslint-disable-next-line no-unused-expressions
    console.log("draw", this.ctx)
    this.pendingFrame = !1
    this.updated || (this.updated = !0, this.update())
    this.mol.validateAll()
    this.ctx.clearRect(0, 0, this.width(), this.height())
    this.ctx.save()
    this.ctx.transform(this.matrix[0], this.matrix[1], this.matrix[2], this.matrix[3], this.matrix[4], this.matrix[5])
    this.ctx.lineWidth = 2 * this.s.bond.radiusScaled
    this.ctx.lineCap = this.s.bond.lineCap;
    for (var t = 0; t < this.mol.bonds.length; t++) {

        this.mol.bonds[t].drawStateColor()
    }
    this.ctx.lineWidth = 2 * this.s.atom.selectionRadiusScaled
    this.ctx.lineCap = this.s.atom.lineCap;
    for (t = 0; t < this.mol.atoms.length; t++) {

        this.mol.atoms[t].drawStateColor()
    }
    this.ctx.fillStyle = this.ctx.strokeStyle = this.s.bond.color

    this.ctx.lineWidth = this.s.bond.width * this.s.bond.scale
    this.ctx.lineCap = this.s.bond.lineCap
    this.ctx.lineJoin = this.s.bond.lineJoin;
    for (t = 0; t < this.mol.bonds.length; t++) {
        this.mol.bonds[t].drawBond()
    }
    this.ctx.fillStyle = this.ctx.strokeStyle = this.s.atom.color;
    for (t = 0; t < this.mol.atoms.length; t++) {
        this.mol.atoms[t].drawLabel()
    }
    // eslint-disable-next-line no-unused-expressions
    this.pointer.handler && this.pointer.handler.onDraw && this.pointer.handler.onDraw(this)
    this.ctx.restore()
}
MolPad.prototype.redraw = function (t) {

    t && (this.updated = !1)
    this.pendingFrame || (this.pendingFrame = !0, requestAnimationFrame(this.draw.bind(this)))
}
MolPad.prototype.center = function () {
    var t, e, o, i;
    // eslint-disable-next-line no-unused-expressions
    0 !== this.mol.atoms.length && (this.resetMatrix(), t = this.mol.getBBox(), (e = this.width() / t.width) < (o = this.height() / t.height) ? (this.scale(e), this.translate(-t.x * e, -t.y * e + (this.height() - t.height * e) / 2)) : (this.scale(o), this.translate(-t.x * o + (this.width() - t.width * o) / 2, -t.y * o)), i = 1 - 2 * this.s.relativePadding, this.scaleAbsolute(i, this.width() / 2, this.height() / 2), this.redraw(!0))
}
MolPad.prototype.width = function () {
    return this.canvas.width
}
MolPad.prototype.height = function () {
    return this.canvas.height
}
// eslint-disable-next-line no-unused-expressions
MolPad.prototype.translate = function (t, e) {
    this.matrix[4] += t
    this.matrix[5] += e
}
MolPad.prototype.scale = function (t) {
    this.matrix[0] *= t
    this.matrix[3] *= t
}
MolPad.prototype.getScale = function () {
    return this.matrix[0]
}

MolPad.prototype.scaleAbsolute = function (t, e, o) {
    // eslint-disable-next-line no-unused-expressions
    this.matrix[0] *= t, this.matrix[3] *= t, this.matrix[4] -= (e - this.matrix[4]) * (t - 1), this.matrix[5] -= (o - this.matrix[5]) * (t - 1)
}
MolPad.prototype.resetMatrix = function () {
    this.matrix = [1, 0, 0, 1, 0, 0]
}
MolPad.prototype.setupEventHandling = function () {
    // eslint-disable-next-line no-unused-expressions
    this.keys = {
        ctrl: !1
    }, this.pointer = {
        old: {
            p: new MPPoint(),
            r: new MPPoint(),
            c: new MPPoint(),
            d: 0
        },
        handler: void 0,
        touches: 0,
        touchGrab: !1
    };
    var e = this;
    this.container2.on("DOMMouseScroll mousewheel", function (t) {
        // eslint-disable-next-line no-unused-expressions
        t.preventDefault(), t.originalEvent.detail ? e.onScroll(t.originalEvent.detail / 3, t) : t.originalEvent.wheelDelta && e.onScroll(t.originalEvent.wheelDelta / 120, t)
    })
    this.container2.on("contextmenu", function (t) {
        return !1
    })
    this.container2.on("mousedown touchstart", function (t) {

        e.onPointerDown(t)
        console.log(t)
        e.clearRedrawRequest()
    })
    this.container2.on("mousemove", function (t) {
        e.onMouseMoveInContainer(t)
        e.clearRedrawRequest()
    })
    this.container.addEventListener("mouseout", function (t) {
        e.onMouseOut(t)
        e.clearRedrawRequest()
    })
    my$(window).on("mousemove touchmove", function (t) {
        e.onPointerMove(t)
        e.clearRedrawRequest()
    })
    my$(window).on("mouseup touchend touchcancel", function (t) {
        e.onPointerUp(t)
        e.clearRedrawRequest()
    })
}

MolPad.prototype.onScroll = function (t, e) {
    var o = 1 + this.s.zoomSpeed * t;
    this.matrix[0] * o < this.s.minZoom && (o = this.s.minZoom / this.matrix[0]);
    var i = (new MPPoint()).fromPointer(e);
    if (i.x -= this.offset.left, i.y -= this.offset.top, this.s.zoomType === MP_ZOOM_TO_COG) {
        for (var s = new MPPoint(), n = 0; n < this.mol.atoms.length; n++) s.add(this.mol.atoms[n].center);
        s.divide(this.mol.atoms.length)
        s.multiplyX(this.matrix[0])
        s.multiplyY(this.matrix[3])
        s.addX(this.matrix[4])
        s.addY(this.matrix[5])
        s.divide(this.devicePixelRatio)
        this.scaleAbsolute(o, s.x, s.y)
    } else this.scaleAbsolute(o, i.x, i.y);
    this.redraw(!0)
}
MolPad.prototype.onPointerDown = function (t) {
    t.preventDefault()
    t.stopImmediatePropagation();
    var e = t.originalEvent;
    console.log(this.tool.data)
    if ("mousedown" === t.type) {
        if (0 === this.pointer.touches) this.pointer.touchGrab = !1;
        else if (this.pointer.touchGrab) return
        // eslint-disable-next-line no-unused-expressions
    } else "touchstart" === t.type && (this.pointer.touchGrab = !0, this.pointer.touches = e.targetTouches.length || 1);
    this.pointer.old.p.fromPointer(t)
    this.pointer.old.r.fromRelativePointer(t, this)
    this.pointer.handler = void 0
    // eslint-disable-next-line no-unused-expressions
    oneOf(this.tool.type, ["erase", "select", "drag"]) || this.sel.clear(), e.targetTouches && 1 < e.targetTouches.length ? (this.pointer.handler && this.pointer.handler.onPointerUp && this.pointer.handler.onPointerUp(t, this), this.mol.isChanged() ? this.mol.loadPlainData(this.mol.copy) : this.resetEventDisplay(), this.pointer.old.c.fromMultiTouchCenter(t), this.pointer.old.d = getMultiTouchDelta(t), this.pointer.handler = this.multiTouchHandler) : 1 === t.which || e.targetTouches && 1 === e.targetTouches.length ? (this.handleEvent(this.pointer.old.r, "active", function (t) {
        this.pointer.handler = t.getHandler(this)
    }), void 0 === this.pointer.handler && (this.pointer.handler = this.getHandler())) : 2 !== t.which && 3 !== t.which || (this.pointer.handler = this.mouseDragHandler), this.pointer.handler && this.pointer.handler.onPointerDown && this.pointer.handler.onPointerDown(t, this)
}



MolPad.prototype.onMouseMoveInContainer = function (t) {
    this.pointer.touchGrab || void 0 === this.pointer.handler && this.hoverHandler.onPointerMove(t, this)
}

MolPad.prototype.onMouseOut = function (t) {
    // eslint-disable-next-line no-unused-expressions
    void 0 === this.pointer.handler && (this.resetEventDisplay(), this.setCursor("default"))
}

MolPad.prototype.onPointerMove = function (t) {
    // eslint-disable-next-line no-unused-expressions
    "mousemove" === t.type && this.pointer.touchGrab || this.pointer.handler && this.pointer.handler.onPointerMove && (t.preventDefault(), this.pointer.handler.onPointerMove(t, this))
}

MolPad.prototype.onPointerUp = function (t) {
    var e;
    // eslint-disable-next-line no-unused-expressions
    "mouseup" === t.type && this.pointer.touchGrab || (e = t.originalEvent, this.pointer.handler ? (this.pointer.handler.onPointerUp && this.pointer.handler.onPointerUp(t, this), this.pointer.handler.scope ? (this.setCursor("pointer"), this.resetEventDisplay(), this.pointer.handler.scope.setDisplay("mouseup" === t.type ? "hover" : "normal")) : this.setCursor("default")) : this.setCursor("default"), e.targetTouches ? 1 < e.targetTouches.length ? (this.pointer.old.d = getMultiTouchDelta(t), this.pointer.old.c = (new MPPoint()).fromMultiTouchCenter(t)) : 1 === e.targetTouches.length ? (this.pointer.old.p = (new MPPoint()).fromPointer(t), this.pointer.old.r.fromRelativePointer(t, this), void 0 !== this.pointer.handler && (this.pointer.handler = this.mouseDragHandler)) : (this.pointer.handler = void 0, this.mol.updateCopy()) : (this.pointer.handler = void 0, this.mol.updateCopy()))
}

MolPad.prototype.onBlur = function (t) {
    this.keys.ctrl = !1
    this.dismissHandler()
}


MolPad.prototype.handleEvent = function (t, e, o) {
    // eslint-disable-next-line no-unused-expressions
    for (var i = !1, s = 0; s < this.mol.atoms.length; s++) i ? this.mol.atoms[s].setDisplay("normal") : this.mol.atoms[s].handle(t, e) && (i = !0, o.call(this, this.mol.atoms[s]));
    // eslint-disable-next-line no-unused-expressions
    for (s = 0; s < this.mol.bonds.length; s++) i ? this.mol.bonds[s].setDisplay("normal") : this.mol.bonds[s].handle(t, e) && (i = !0, o.call(this, this.mol.bonds[s]))
}
MolPad.prototype.dismissHandler = function () {
    // eslint-disable-next-line no-unused-expressions
    this.resetEventDisplay(), this.sel.clear(), this.setCursor("default"), this.pointer.touches = 0, this.pointer.handler = void 0, this.clearRedrawRequest(), this.mol.updateCopy()
}

MolPad.prototype.resetEventDisplay = function () {
    this.mol.exec(function (t) {
        t.setDisplay("normal")
    }, !0, !0)
}

MolPad.prototype.hoverHandler = {
    onPointerMove: function (t, e) {
        e.setCursor("default");
        var o = (new MPPoint()).fromRelativePointer(t, e);
        e.handleEvent(o, "hover", function (t) {
            e.setCursor("pointer")
        })
    }
}

MolPad.prototype.mouseDragHandler = {
    data: {},
    onPointerMove: function (t, e) {
        e.setCursor("move");
        var o = (new MPPoint()).fromPointer(t);
        // eslint-disable-next-line no-unused-expressions
        this.data.moved = !0, o.equals(e.pointer.old) || (e.translate((o.x - e.pointer.old.p.x) * e.devicePixelRatio, (o.y - e.pointer.old.p.y) * e.devicePixelRatio), e.pointer.old.p = o, e.requestRedraw())
    },
    onPointerUp: function (t, e) {
        // eslint-disable-next-line no-unused-expressions
        this.data.moved || e.sel.clear(), e.setCursor("default")
    }
}


MolPad.prototype.multiTouchHandler = {
    onPointerMove: function (t, e) {
        var o, i;
        // eslint-disable-next-line no-unused-expressions
        t.originalEvent.targetTouches.length <= 1 ? e.dismissHandler() : (o = (new MPPoint()).fromMultiTouchCenter(t), i = getMultiTouchDelta(t), e.translate((o.x - e.pointer.old.c.x) * e.devicePixelRatio, (o.y - e.pointer.old.c.y) * e.devicePixelRatio), e.scaleAbsolute(i / e.pointer.old.d, (o.x - e.offset.left) * e.devicePixelRatio, (o.y - e.offset.top) * e.devicePixelRatio), e.pointer.old.c = o, e.pointer.old.d = i, e.pointer.old.p.fromPointer(t), e.redraw(!0))
    }
}
MolPad.prototype.selectionToolHandler = {
    data: {},
    onDraw: function (t) {
        // eslint-disable-next-line no-unused-expressions
        if (t.ctx.fillStyle = t.s.select.fillStyle, t.ctx.strokeStyle = t.s.select.strokeStyle, t.ctx.lineWidth = t.s.select.lineWidth / t.getScale(), t.ctx.lineCap = t.s.select.lineCap, t.ctx.lineJoin = t.s.select.lineJoin, t.ctx.setLineDash([2 / t.getScale(), 5 / t.getScale()]), t.ctx.beginPath(), "rect" === t.tool.data.type && this.data.rect) t.ctx.rect(this.data.rect.x, this.data.rect.y, this.data.rect.width, this.data.rect.height), t.ctx.fill(), t.ctx.stroke();
        else if ("lasso" === t.tool.data.type && this.data.points) {

            for (var e = 0; e < this.data.points.length; e++) 0 === e ? t.ctx.moveTo(this.data.points[e].x, this.data.points[e].y) : t.ctx.lineTo(this.data.points[e].x, this.data.points[e].y);
            // eslint-disable-next-line no-unused-expressions
            t.ctx.mozFillRule = "evenodd", t.ctx.msFillRule = "evenodd", t.ctx.fillRule = "evenodd", t.ctx.fill("evenodd"), t.ctx.stroke()
        }
    },
    onPointerDown: function (t, e) {
        // eslint-disable-next-line no-unused-expressions
        e.setCursor("pointer"), this.data = {};
        var o = (new MPPoint()).fromRelativePointer(t, e);
        // eslint-disable-next-line no-unused-expressions
        e.keys.ctrl ? this.data.selAdd = {
            atoms: e.sel.cache.atoms.slice(),
            bonds: e.sel.cache.bonds.slice()
        } : (e.sel.clear(), this.data.selAdd = {
            atoms: [],
            bonds: []
        }), "rect" === e.tool.data.type ? this.data.rect = {
            x: o.x,
            y: o.y,
            width: 0,
            height: 0
        } : this.data.points = [o.clone()]
    },
    onPointerMove: function (t, e) {
        e.setCursor("default");
        var o, i, s = (new MPPoint()).fromRelativePointer(t, e);
        // eslint-disable-next-line no-unused-expressions
        "rect" === e.tool.data.type ? (this.data.rect.width = s.x - this.data.rect.x, this.data.rect.height = s.y - this.data.rect.y, o = this.data.rect, e.mol.exec(function (t) {
            t.handleRectSelect(o)
        }, !0, !0)) : (this.data.points.push(s), i = this.data.points, e.mol.exec(function (t) {
            t.handlePolygonSelect(i)
        }, !0, !0));
        for (var n = 0; n < this.data.selAdd.atoms.length; n++) e.mol.atoms[this.data.selAdd.atoms[n]].select(!0);
        for (n = 0; n < this.data.selAdd.bonds.length; n++) e.mol.bonds[this.data.selAdd.bonds[n]].select(!0);
        e.requestRedraw()
    },
    onPointerUp: function (t, e) {
        e.sel.updateRotationCenter()
        e.requestRedraw()
    }
}
MolPad.prototype.getHandler = function () {
    return "atom" === this.tool.type ? {
        onPointerDown: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = new MPAtom(e, {
                    i: e.mol.atoms.length,
                    x: o.x,
                    y: o.y,
                    element: e.tool.data.element
                });
            e.mol.atoms.push(i)
            e.pointer.handler.scope = i
        }
    } : "bond" === this.tool.type ? {
        onPointerDown: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = new MPAtom(e, {
                    i: e.mol.atoms.length,
                    x: o.x - e.s.bond.length / 2,
                    y: o.y,
                    element: "C",
                    selected: !0
                });
            e.mol.atoms.push(i);
            var s = new MPAtom(e, {
                i: e.mol.atoms.length,
                x: o.x + e.s.bond.length / 2,
                y: o.y,
                element: "C",
                selected: !0
            });
            e.mol.atoms.push(s);
            var n = new MPBond(e, {
                i: e.mol.bonds.length,
                from: i.index,
                to: s.index,
                type: e.tool.data.type,
                stereo: e.tool.data.stereo,
                selected: !0
            });
            e.mol.bonds.push(n)
            i.addBond(n.index)
            s.addBond(n.index)
            e.pointer.handler.scope = n
            e.sel.update()
            e.sel.center = o.clone()
            e.sel.currentAngle = e.sel.startAngle = .5 * Math.PI
        },
        onPointerMove: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e);
            e.sel.rotate(o)
        },
        onPointerUp: function (t, e) {
            e.sel.clear()
        }
    } : "fragment" === this.tool.type ? {
        onPointerDown: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = MPFragments.translate(MPFragments.scale(MPFragments.clone(e.tool.data.frag.full), e.s.bond.length), o.x, o.y);
            e.mol.createFragment(i, !0)
            e.sel.center = o.clone()
            e.sel.currentAngle = e.sel.startAngle = 0
        },
        onPointerMove: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e);
            e.sel.rotate(o)
        },
        onPointerUp: function (t, e) {
            e.sel.clear()
        }
    } : "chain" === this.tool.type ? {
        onPointerDown: function (t, e) {
            var o = (new MPPoint()).fromRelativePointer(t, e),
                i = new MPAtom(e, {
                    i: e.mol.atoms.length,
                    x: o.x,
                    y: o.y,
                    element: "C"
                });
            e.mol.atoms.push(i)
            e.pointer.handler = i.getHandler()
        }
    } : "select" === this.tool.type ? this.selectionToolHandler : this.mouseDragHandler
};



export { MPFragments, MolPad, MP_BOND_SINGLE, MP_BOND_DOUBLE, MP_BOND_TRIPLE, MP_STEREO_UP, MP_STEREO_DOWN, JmolAtomColorsHashHex }











