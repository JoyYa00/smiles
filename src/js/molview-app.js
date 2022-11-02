/* eslint-disable no-unused-expressions */
import { Detector, my$ } from "./base";
import { MPFragments, MolPad, MP_STEREO_DOWN, MP_BOND_SINGLE, MP_BOND_DOUBLE, MP_BOND_TRIPLE, MP_STEREO_UP, JmolAtomColorsHashHex } from "./molpad";
import { defaultMol2D, emptyImage, ucfirst, humanize, Request } from "./core";
import { PeriodicTable } from "./dataset";

//左侧结构式
const Sketcher = {
	molpad: void 0,
	metadata: {
		cid: void 0,
		inchi: void 0,
		inchikey: void 0,
		smiles: void 0
	},
	init: function () {
		MPFragments.init()
		this.initPeriodicTable()


		// eslint-disable-next-line no-unused-expressions
		Detector.canvas ? (
			this.molpad = new MolPad(document.getElementById("molpad-canvas-wrapper"), MolView.devicePixelRatio, {
				undo: "#action-mp-undo",
				redo: "#action-mp-redo"
			}),
			// this.molpad.setSkeletalDisplay(Preferences.get("sketcher", "skeletal_formula", !0)),

			MolView.loadDefault && this.loadMOL(defaultMol2D),
			this.molpad.onChange(function () {
				Sketcher.metadata = {}
				Sketcher.molpad.mol.copy.fingerprint === Sketcher.fingerprint ? Sketcher.markUpdated() : Sketcher.markOutdated()
			})
		) : alert("no_canvas_support")
	},
	initPeriodicTable: function () {
		var e = PeriodicTable.table;
		e.push({
			elements: PeriodicTable.lanthanoids
		}), e.push({
			elements: PeriodicTable.actinoids
		});
		for (var t = 0; t < e.length; t++) {
			for (var o = -1, a = 0; a < e[t].elements.length; a++) {
				var s = e[t].elements[a];
				if ("" !== s.name) {
					for (var i = o; i < s.position - 1; i++) my$('<div class="pt-space"></div>').appendTo("#periodictable");
					my$('<div class="pt-element"></div>').attr("title", s.name).append(my$("<h3></h3>").html(s.number)).append(my$("<h4></h4>").html(s.small).css("color", JmolAtomColorsHashHex[s.small])).data("element", s.small).on(MolView.trigger, function () {
						my$("#molpad .primary-tool").removeClass("tool-button-selected"), my$("#action-mp-periodictable").addClass("tool-button-selected"), Sketcher.molpad.setTool("atom", {
							element: my$(this).data("element")
						}), MolView.hideDialogs()
					}).appendTo("#periodictable"), o = s.position
				}
			}
			my$("<br/>").appendTo("#periodictable")
		}
	},


	loadMOL: function (e) {
		this.molpad && this.molpad.loadMOL(e)
	},
	getMOL: function () {
		return this.molpad ? this.molpad.getMOL() : ""
	},
	getSMILES: function () {

		return this.metadata.smiles ? this.metadata.smiles : this.molpad ? (this.metadata.smiles = this.molpad.getSMILES(), this.metadata.smiles) : ""

	},
	setTool: function (e, t, o) {
		// 点击的标签对象  "bound"  {type:1}

		this.molpad && this.molpad.setTool(t, o)
		let chArr = document.body.getElementsByClassName("primary-tool");
		for (let i = 0; i < chArr.length; i++) {
			//删除元素 元素.parentNode.removeChild(元素);
			if (chArr[i] != null)
				chArr[i].classList.remove("tool-button-selected");
		}

		e.classList.add("tool-button-selected")
	},
	clear: function () {
		this.molpad.clear()
	},
	undo: function () {
		this.molpad && this.molpad.undo()
	},
	redo: function () {
		this.molpad && this.molpad.redo()
	},


	center: function () {
		this.molpad && this.molpad.center()
	},
	clean: function () {
		// Messages.process(Loader.clean, "clean")
	},
	markOutdated: function () {
		document.getElementById("action-resolve").classList.add("resolve-outdated")
	},
	markUpdated: function () {
		this.fingerprint = this.molpad.mol.copy.fingerprint
		document.getElementById("action-resolve").classList.remove("resolve-outdated")

	},
	toDataURL: function () {
		return this.molpad ? this.molpad.toDataURL() : ""
	}
}

const Actions = {

	data_infocard: function () {
		var e;
		// try {

		e = Sketcher.getSMILES()
		// } catch (e) {
		// 	return alert("smiles_load_error_force", e)
		// }
		InfoCard.update(e),
			InfoCard.load()
		MolView.setLayer("infocard")
	},
	data_smilesInfo: function () {
		var e;
		try {

			e = Sketcher.getSMILES()
		} catch (e) {
			return alert("smiles_load_error_force", e)
		}
		InfoCard.update(e),
			InfoCard.load()
	},


	show_search_layer: function () {
		MolView.setLayer("search")
	},

	// 单键
	mp_bond_single: function () {
		Sketcher.setTool(this, "bond", {
			type: MP_BOND_SINGLE
		})
	},
	mp_bond_double: function () {
		Sketcher.setTool(this, "bond", {

			type: MP_BOND_DOUBLE
		})
	},
	mp_bond_triple: function () {
		Sketcher.setTool(this, "bond", {
			type: MP_BOND_TRIPLE
		})
	},
	mp_bond_wedge: function () {
		Sketcher.setTool(this, "bond", {
			stereo: MP_STEREO_UP
		})
	},
	mp_bond_hash: function () {
		Sketcher.setTool(this, "bond", {
			stereo: MP_STEREO_DOWN
		})
	},
	mp_frag_benzene: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.benzene
		})
	},
	mp_frag_cyclopropane: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.cyclopropane
		})
	},
	mp_frag_cyclobutane: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.cyclobutane
		})
	},
	mp_frag_cyclopentane: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.cyclopentane
		})
	},
	mp_frag_cyclohexane: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.cyclohexane
		})
	},
	mp_frag_cycloheptane: function () {
		Sketcher.setTool(this, "fragment", {
			frag: MPFragments.cycloheptane
		})
	},
	mp_chain: function () {
		Sketcher.setTool(this, "chain", {})
	},
	mp_charge_add: function () {
		Sketcher.setTool(this, "charge", {
			charge: 1
		})
	},
	mp_charge_sub: function () {
		Sketcher.setTool(this, "charge", {
			charge: -1
		})
	},
	mp_clear: function () {
		Sketcher.clear()
	},
	mp_eraser: function () {
		Sketcher.setTool(this, "erase", {})
	},
	mp_drag: function () {
		Sketcher.setTool(this, "drag", {})
	},
	mp_undo: function () {
		Sketcher.undo()
	},
	mp_redo: function () {
		Sketcher.redo()
	},
	mp_rect: function () {
		Sketcher.setTool(this, "select", {
			type: "rect"
		})
	},
	mp_lasso: function () {
		Sketcher.setTool(this, "select", {
			type: "lasso"
		})
	},
	mp_color_mode: function () {
		// Sketcher.toggleColorMode()
	},
	mp_skeletal_formula: function () {
		// Sketcher.toggleSkeletalFormula()
	},
	mp_center: function () {
		Sketcher.center()
	},
	mp_clean: function () {
		Sketcher.clean()
	},
	mp_atom_c: function () {
		Sketcher.setTool(this, "atom", {
			element: "C"
		})
	},
	mp_atom_h: function () {
		Sketcher.setTool(this, "atom", {
			element: "H"
		})
	},
	mp_atom_n: function () {
		Sketcher.setTool(this, "atom", {
			element: "N"
		})
	},
	mp_atom_o: function () {
		Sketcher.setTool(this, "atom", {
			element: "O"
		})
	},
	mp_atom_p: function () {
		Sketcher.setTool(this, "atom", {
			element: "P"
		})
	},
	mp_atom_s: function () {
		Sketcher.setTool(this, "atom", {
			element: "S"
		})
	},
	mp_atom_f: function () {
		Sketcher.setTool(this, "atom", {
			element: "F"
		})
	},
	mp_atom_cl: function () {
		Sketcher.setTool(this, "atom", {
			element: "Cl"
		})
	},
	mp_atom_br: function () {
		Sketcher.setTool(this, "atom", {
			element: "Br"
		})
	},
	mp_atom_i: function () {
		Sketcher.setTool(this, "atom", {
			element: "I"
		})
	},
	mp_periodictable: function () {
		MolView.showDialog("periodictable")
	},
	resolve: function () {

	}
};

//化合物的信息解构
const PubChemProps = {
	formula: "MolecularFormula",
	mw: "MolecularWeight",
	donors: "HBondDonorCount",
	acceptors: "HBondAcceptorCount",
	sysname: "IUPACName",
	canonicalsmiles: "CanonicalSMILES",
	isomericsmiles: "IsomericSMILES",
	inchikey: "InChIKey",
	inchi: "InChI"
}
const PubChemPropNames = ["MolecularFormula", "MolecularWeight", "HBondDonorCount", "HBondAcceptorCount", "IUPACName", "CanonicalSMILES", "IsomericSMILES", "InChIKey", "InChI"]

const CIRProps = {
	formula: "formula",
	mw: "mw",
	donors: "h_bond_donor_count",
	acceptors: "h_bond_acceptor_count",
	sysname: "iupac_name",
	canonicalsmiles: "smiles",
	inchikey: "stdinchikey",
	inchi: "stdinchi",
	cas: "cas",
	csid: "chemspider_id"
}
// 信息表，第二个页面
const InfoCard = {
	PubChem_cache: void 0,
	PubChem_queue: [],
	data: {},
	updated: !1,
	percentCompositionPrecision: 5,
	update: function (e) {
		return "" !== e && (
			document.getElementsByClassName("chemprop").innerHTML = "",
			document.getElementsByClassName("chemprop").value = "",
			document.getElementsByClassName("chemprop")[0].classList.add("chemprop-loading"),
			document.getElementById("molecule-image").setAttribute("filter", "url('#pubchemImageFilter'"),
			document.getElementById("molecule-image").setAttribute("src", emptyImage),
			document.getElementById("molecule-image-wrapper").style.display = "block",
			document.getElementById("molecule-info").style.display = "none",

			document.getElementById("molecule-title").innerHTML = "",
			document.getElementById("molecule-description").innerHTML = "",
			document.getElementById("percent-composition-table").style.display = "none",
			document.getElementById("percent-composition-title").style.display = "none",
			document.getElementById("common-chem-props").style.display = "block",

			document.getElementsByClassName("chem-identifier")[0].style.display = "block",
			document.getElementsByClassName("chem-link")[0].style.display = "none",



			this.PubChem_cache = void 0, this.PubChem_queue = [], this.data = {}, this.data.smiles = e, this.data.cid = Sketcher.metadata.cid, this.data.inchikey = Sketcher.metadata.inchikey, this.data.inchi = Sketcher.metadata.inchi, !(this.updated = !1))
	},
	load: function () {
		this.updated || (this.updated = !0, this.updateImage(), this.loadProperty("cid", function (e) {

			e && document.getElementById("pubchem-link").setAttribute("href", Request.PubChem.staticURL(e)),
				document.getElementById("pubchem-link").style.display = "block",
				InfoCard.loadProperty("formula"),
				InfoCard.loadProperty("mw"),
				InfoCard.loadProperty("donors"),
				InfoCard.loadProperty("acceptors"),
				InfoCard.loadProperty("sysname"),
				InfoCard.loadProperty("canonicalsmiles"),
				InfoCard.loadProperty("isomericsmiles", function (e) { }),
				InfoCard.loadProperty("inchikey"),
				InfoCard.loadProperty("inchi", function (e) { }),
				InfoCard.loadProperty("cas"),
				InfoCard.loadProperty("csid", function (e) {
					e && document.getElementById("chemspider-link").setAttribute("href", "http://www.chemspider.com/Chemical-Structure." + e + ".html"),
						document.getElementById("chemspider-link").style.display = "block"
				}), e && Request.PubChem.description(e, function (e) {
					for (var t, o, a = 0; a < e.InformationList.Information.length; a++) void 0 === t && void 0 !== e.InformationList.Information[a].Title && (t = ucfirst(humanize(e.InformationList.Information[a].Title))), void 0 === o && void 0 !== e.InformationList.Information[a].Description && (o = e.InformationList.Information[a].Description);
					document.title = t,
						document.getElementById("molecule-info").style.display = "block",
						document.getElementById("molecule-title").innerHTML = t,
						document.getElementById("molecule-description").innerHTML = o
				})
		}))
	},
	processFormula: function (e) {

		return e
	},
	updateImage: function () {
		var e;
		"" !== InfoCard.smiles && ((e = new Image()).onload = function () {
			document.getElementById("molecule-image").setAttribute("src", e.src),
				document.getElementById("molecule-image").setAttribute("width", 300 / MolView.devicePixelRatio),
				document.getElementById("molecule-image-wrapper").style.display = "block"
		}, e.onerror = function () {
			document.getElementById("molecule-image").setAttribute("src", emptyImage),
				document.getElementById("molecule-image-wrapper").style.display = "block"
		}, Sketcher.metadata.cid ? e.src = Request.PubChem.image(Sketcher.metadata.cid) : e.src = Request.PubChem.smilesToImage(InfoCard.data.smiles))
	},
	loadProperty: function (o, a) {
		InfoCard.getProperty(o, function (e) {
			"mw" === o && (e += " u");
			var t = document.getElementById("prop-" + o)
			if (t.nodeName == "INPUT") {
				t.value = e
				t.classList.add("chemprop-loading")
			} else {
				t.innerHTML = e
			}
			t.classList.remove("chemprop-loading")
			a && a(e)
		}, function () {
			document.getElementById("prop-" + o + "-wrapper").style.display = "none"
			a && a()
		})

	},
	getProperty: function (e, t, o) {
		function a() {
			"isomericsmiles" === e ? (InfoCard.data.isomericsmiles = InfoCard.data.smiles, t(InfoCard.data.isomericsmiles)) : o && o()
		}
		InfoCard.data[e] ? t(InfoCard.data[e]) : "cid" === e ? Request.PubChem.smilesToCID(InfoCard.data.smiles, function (e) {

			// 获取上一个？？？？？？？？？？
			// console.log("getProperty", InfoCard.data.smiles)
			InfoCard.data.cid = e, t(InfoCard.data.cid)

		}, function () {
			InfoCard.data.cid = -1, a()
		}) : InfoCard.getPropertyFromPubChem(e, t, a)

	},
	getPropertyFromPubChem: function (o, a, s) {
		-1 === InfoCard.data.cid ? InfoCard.getPropertyFromCIR(o, a, s) : InfoCard.data.cid && "cas" === o ? Request.PubChem.casNumber(InfoCard.data.cid, function (e) {
			InfoCard.data.cas = e, a(InfoCard.data.cas)
		}, function () {
			InfoCard.getPropertyFromCIR(o, a, s)
		}) : PubChemProps[o] ? InfoCard.PubChem_cache ? InfoCard.loadFrom_PubChem_cache(o, a, function () {
			InfoCard.getPropertyFromCIR(o, a, s)
		}) : InfoCard.data.cid && (InfoCard.PubChem_cache = {
			loading: !0
		}, Request.PubChem.properties(InfoCard.data.cid, PubChemPropNames, function (e) {
			InfoCard.PubChem_cache = e.PropertyTable.Properties[0] || {
				failed: !0
			};

			for (var t = 0; t < InfoCard.PubChem_queue.length; t++) InfoCard.PubChem_queue[t].success();
			InfoCard.PubChem_queue = [], InfoCard.loadFrom_PubChem_cache(o, a, function () {
				InfoCard.getPropertyFromCIR(o, a, s)
			})

		}, function () {
			for (var e = 0; e < InfoCard.PubChem_queue.length; e++) InfoCard.PubChem_queue[e].fail();
			InfoCard.PubChem_queue = [], InfoCard.PubChem_cache = {
				failed: !0
			}, InfoCard.getPropertyFromCIR(o, a, s)
		})) : InfoCard.getPropertyFromCIR(o, a, s)

	},
	getPropertyFromCIR: function (t, o, e) {
		InfoCard.data.smiles && void 0 !== CIRProps[t] ? Request.CIR.property(InfoCard.data.isomericsmiles || InfoCard.data.smiles, CIRProps[t], function (e) {
			"formula" === t ? InfoCard.data.formula = InfoCard.processFormula(e) : "sysname" === t ? InfoCard.data.sysname = humanize(e) : InfoCard.data[t] = e, o(InfoCard.data[t])
		}, e) : e()
	},
	loadFrom_PubChem_cache: function (e, t, o) {
		function a(e) {
			return void 0 !== InfoCard.PubChem_cache[PubChemProps[e]] && (InfoCard.data[e] = "formula" === e ? InfoCard.processFormula(InfoCard.PubChem_cache[PubChemProps[e]]) : InfoCard.PubChem_cache[PubChemProps[e]], 1)
		} !InfoCard.PubChem_cache || InfoCard.PubChem_cache.failed ? o() : InfoCard.PubChem_cache.loading ? InfoCard.PubChem_queue.push({
			success: function () {
				a(e) ? t(InfoCard.data[e]) : o()
			},
			fail: o
		}) : a(e) ? t(InfoCard.data[e]) : o()

	}
}
//页面初始化
const MolView = {
	layout: "",
	touch: 0,
	mobile: 0,
	devicePixelRatio: 1,
	trigger: "click",
	query: {},
	loadDefault: !0,
	macromolecules: !0,
	JMOL_J2S_PATH: "jmol/j2s",
	init: function () {
		MolView.devicePixelRatio = window.devicePixelRatio || (MolView.mobile ? 1.5 : 1)
		// 设置window.localstorage
		// Preferences.init()

		// History.init()
		// Link.init(), (this.query.q || this.query.smiles || this.query.cid || this.query.pdbid || this.query.codid) && (this.loadDefault = !1)
		// 搜索栏

		// 请求数据
		Request.init()
		// 左侧绘制
		Sketcher.init()
		// 
		// SearchGrid.init()
		this.touch && !Detector.webgl && (this.macromolecules = !1)
		this.height = window.innerHeight







		// return 
		document.getElementById("close").onclick = function (e) {
			// document.getElementById("properties-wrapper1").innerHTML = ""
			// document.getElementById("trImg").innerHTML = ""
			// document.getElementById("trSmile").innerHTML = ""
			MolView.setLayer("main")
		}

		my$(".dialog .btn.close, .dialog-close-btn").on(this.trigger, function (e) {
			MolView.hideDialogs()
		})


		this.addAction("load_more_pubchem", "button", !0)
		this.addAction("load_more_rcsb", "button", !0)
		this.addAction("load_more_cod", "button", !0)
		this.addAction("mp_bond_single", "button", !0)
		this.addAction("mp_bond_double", "button", !0)
		this.addAction("mp_bond_triple", "button", !0)
		this.addAction("mp_bond_wedge", "button", !0)
		this.addAction("mp_bond_hash", "button", !0)
		this.addAction("mp_frag_benzene", "button", !0)
		this.addAction("mp_frag_cyclopropane", "button", !0)
		this.addAction("mp_frag_cyclobutane", "button", !0)
		this.addAction("mp_frag_cyclopentane", "button", !0)
		this.addAction("mp_frag_cyclohexane", "button", !0)
		this.addAction("mp_frag_cycloheptane", "button", !0)
		this.addAction("mp_chain", "button", !0)
		this.addAction("mp_charge_add", "button", !0)
		this.addAction("mp_charge_sub", "button", !0)
		this.addAction("mp_clear", "button", !0)
		this.addAction("mp_eraser", "button", !0)
		this.addAction("mp_drag", "button", !0)
		this.addAction("mp_undo", "button", !0)
		this.addAction("mp_redo", "button", !0)
		this.addAction("mp_rect", "button", !0)
		this.addAction("mp_lasso", "button", !0)
		this.addAction("mp_color_mode", "button", !0)
		this.addAction("mp_skeletal_formula", "button", !0)
		this.addAction("mp_center", "button", !0)
		this.addAction("mp_clean", "button", !0)
		this.addAction("mp_atom_c", "button", !0)
		this.addAction("mp_atom_h", "button", !0)
		this.addAction("mp_atom_n", "button", !0)
		this.addAction("mp_atom_o", "button", !0)
		this.addAction("mp_atom_p", "button", !0)
		this.addAction("mp_atom_s", "button", !0)
		this.addAction("mp_atom_f", "button", !0)
		this.addAction("mp_atom_cl", "button", !0)
		this.addAction("mp_atom_br", "button", !0)
		this.addAction("mp_atom_i", "button", !0)
		this.addAction("mp_periodictable", "button", !0)
		this.addAction("resolve", "button", !0)
		// this.addAction("start_help", "button", !0)


		document.getElementById("action-data-infocard").onclick = function () {
			Actions["data_infocard"].call(this)
		}


	},
	// 这里是菜单栏的点击事件，单键双键等的
	addAction: function (t, o, a) {
		document.getElementById("action-" + t.replace(/_/g, "-")).onclick = function (e) {
			Actions[t].call(this)

		}
		// console.log(document.getElementById("action-" + t.replace(/_/g, "-")))


	},



	showDialog: function (e) {
		document.getElementById("dialog-overlay").style.display = "block"
	},
	hideDialogs: function () {
		my$("#dialog-overlay").hide()
	},
	setLayer: function (e, t) {

		document.getElementsByClassName("layer")[0].style.display = "none"
		document.getElementsByClassName("layer")[1].style.display = "none"
		document.getElementsByClassName("layer")[2].style.display = "none"

		document.getElementById(e + "-layer").style.display = "block"

	},



	makeModelVisible: function () {
		"sketcher" === this.layout
	},
	search_input_timeout: null
};


export default MolView