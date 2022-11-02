/* eslint-disable no-unused-expressions */
/*! MolView JavaScript Core build on 2020-07-30 */

import { my$ } from "./base";
import MolView from "./molview-app";

var xhr, emptyImage = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    defaultMol2D = ["C8H10N4O2", "APtclcactv04181408232D 0   0.00000     0.00000", " ", " 24 25  0  0  0  0  0  0  0  0999 V2000", "    2.8660    0.5000    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0", "    2.0000    1.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    2.8660   -0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    2.0000   -1.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0", "    3.7321   -1.0000    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0", "    3.7321   -2.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    4.5981   -0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    5.5443   -0.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0", "    6.1279    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    5.5443    0.8047    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0", "    5.8550    1.7553    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    4.5981    0.5000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    3.7321    1.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0", "    3.7321    2.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0", "    2.3100    1.5369    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    1.4631    1.3100    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    1.6900    0.4631    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    3.1121   -2.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    3.7321   -2.6200    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    4.3521   -2.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    6.7479   -0.0000    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    6.4443    1.5626    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    6.0476    2.3446    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "    5.2656    1.9479    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0", "  1  2  1  0  0  0  0", "  1  3  1  0  0  0  0", "  3  4  2  0  0  0  0", "  3  5  1  0  0  0  0", "  5  6  1  0  0  0  0", "  5  7  1  0  0  0  0", "  7  8  1  0  0  0  0", "  8  9  2  0  0  0  0", "  9 10  1  0  0  0  0", " 10 11  1  0  0  0  0", " 10 12  1  0  0  0  0", "  7 12  2  0  0  0  0", " 12 13  1  0  0  0  0", "  1 13  1  0  0  0  0", " 13 14  2  0  0  0  0", "  2 15  1  0  0  0  0", "  2 16  1  0  0  0  0", "  2 17  1  0  0  0  0", "  6 18  1  0  0  0  0", "  6 19  1  0  0  0  0", "  6 20  1  0  0  0  0", "  9 21  1  0  0  0  0", " 11 22  1  0  0  0  0", " 11 23  1  0  0  0  0", " 11 24  1  0  0  0  0", "M  END", "$$$$"].join("\n"),

    ChemIdentifiers = {
        regex: {
            formula: /^((?:[A-Z][a-z]?)+[\d,.]*)*/
        },
        isFormula: function (e) {
            return this.regex.formula.exec(e)[0] === e
        }
    };

function ucfirst(e) {
    return void 0 === e ? e : e.charAt(0).toUpperCase() + e.slice(1)
}

function humanize(e) {
    return void 0 === e ? e : e.replace(/(\b[A-Z]+\b)/g, function (e) {
        return e.toLowerCase()
    })
}

function formatMFormula(e) {
    return e ? e.replace(/[a-zA-Z0-9.,]+/g, function (e) {
        return ChemIdentifiers.isFormula(e) ? e.replace(/[\d,.]*/g, "<sub>$&</sub>") : e
    }) : void 0
}

function formatHTMLLinks(e) {
    return e.replace(/(http|https):\/\/[^\s]+/g, function (e) {
        return '<a class="link" href="' + e + '" target="_blank">' + e + "</a>"
    })
}

function isTouchDevice() {
    return !!("ontouchstart" in window) || !!("onmsgesturechange" in window) && !!window.navigator.maxTouchPoints
}

function getQuery() {
    // eslint-disable-next-line no-restricted-globals
    if ("" === location.search) return {};
    // eslint-disable-next-line no-restricted-globals
    var e = location.search.slice(1).split("&"),
        t = {};
    return e.forEach(function (e) {
        e = e.split(/=(.+)?/), t[e[0]] = decodeURIComponent(e[1] || "")
    }), t
}

function oneOf(e, t) {
    return -1 !== t.indexOf(e)
}

function specialEncodeURIComponent(e) {
    return e.replace(/&/g, "%26").replace(/#/g, "%23")
}

function dataURItoBlob(e) {
    try {
        for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], s = new ArrayBuffer(t.length), o = new Uint8Array(s), r = 0; r < t.length; r++) o[r] = t.charCodeAt(r);
        var n = new DataView(s);
        return new Blob([n], {
            type: i
        })
    } catch (e) {
        return console.error(e), null
    }
}

function openDataURI(e) {
    var t = dataURItoBlob(e),
        i = window.URL || window.webkitURL || void 0;
    null !== t && void 0 !== i ? window.open(i.createObjectURL(t)) : window.open(e)
}

function AJAX(i) {
    console.log("molview-core ajax i", i)
    return i.primary && void 0 !== xhr && xhr.abort(),
        void 0 !== i.defaultError && (i.error = function (e, t) {
            "error" === t && i.defaultError(e.status)
        }),
        //搜索栏ajax请求

        i.primary ? xhr = my$.ajax(i) : my$.ajax(i)
}

function similar_text(e, t, i) {

    if (null === e || null === t || void 0 === e || void 0 === t) return 0;
    for (var s, o, r, n = 0, a = 0, l = 0, c = (e += "").length, d = (t += "").length, l = 0, u = 0; u < c; u++)
        for (s = 0; s < d; s++) {
            for (o = 0; u + o < c && s + o < d && e.charAt(u + o) === t.charAt(s + o); o++);
            l < o && (l = o, n = u, a = s)
        }
    return (r = l) && (n && a && (r += this.similar_text(e.substr(0, n), t.substr(0, a))), n + l < c && a + l < d && (r += this.similar_text(e.substr(n + l, c - n - l), t.substr(a + l, d - a - l)))), i ? 200 * r / (c + d) : r
}


// localstorage
// var Preferences = {
// 	init: function () {
// 		// console.log(Window.localStorage)           //undefined
// 		window.localStorage = {}
// 	},
// 	get: function (e, t, i) {
// 		try {
// 			var s = window.localStorage[e + "." + t];
// 			return "true" === s || "false" !== s && (s || i)
// 		} catch (e) {
// 			return i
// 		}
// 	},
// 	set: function (e, t, i) {
// 		window.localStorage[e + "." + t] = i
// 	}
// }
// 进度条

// 请求化合物信息
var Request = {
    API_ROOT: "",
    init: function () { },
    CIRsearch: function (i, s, e) {
        "" !== i ? Request.CIR.resolve(i, !1, function (t) {
            Request.CIR.resolve(i, !0, function (e) {
                s(e, t, i)
            }, e)
        }, e) : e()
    },
    CIRsearch3D: function (t, i, s) {
        "" !== t ? Request.CIR.resolve(t, !1, function (e) {
            i(e, t)
        }, function () {
            Request.translation(t, function (e) {
                t = e, Request.CIR.resolve(t, !1, function (e) {
                    i(e, t)
                }, s)
            })
        }, s) : s()
    },
    resolve: function (e, t, i, s, o) {
        function r(t) {
            0 < t ? Request.PubChem.sdf(t, i, function (e) {
                s(e, t)
            }, function () {
                Request.CIR.resolve(e, i, function (e) {
                    s(e, i ? -1 : t)
                }, o)
            }) : Request.CIR.resolve(e, i, function (e) {
                s(e, -1)
            }, o)
        }
        0 === t ? Request.PubChem.smilesToCID(e, function (e) {
            r(e)
        }, function () {
            r(-1)
        }) : r(t)
    },
    CIR: {
        available: !1,
        resolve: function (e, t, i, s) {
            Request.CIR.available ? AJAX({
                primary: !0,
                dataType: "text",
                url: "https://cactus.nci.nih.gov/chemical/structure/" + (e = e.replace(/#/g, "%23").replace(/\\/g, "%5C")) + "/file?format=sdf&get3d=" + (t ? "False" : "True"),
                defaultError: s,
                success: function (e) {
                    "<h1>Page not found (404)</h1>\n" === e || void 0 === e ? s() : i(e)
                }
            }) : s()
        },
        property: function (e, s, o, r) {
            Request.CIR.available ? AJAX({
                dataType: "text",
                url: "https://cactus.nci.nih.gov/chemical/structure/" + (e = e.replace(/#/g, "%23").replace(/\\/g, "%5C")) + "/" + s,
                defaultError: r,
                success: function (e) {
                    var t, i;
                    "<h1>Page not found (404)</h1>\n" === e || void 0 === e ? r && r() : (i = (t = e.split("\n"))[0], "cas" === s ? (t.sort(function (e, t) {
                        return e.length - t.length
                    }), i = t[0]) : "stdinchikey" === s && (i = i.substr(9)), o(i))
                }
            }) : r()
        }
    },
    PubChem: {
        data: [],
        maxRecords: 50,
        MaxSeconds: 10,
        search: function (e, t, i) {
            "" !== e ? (AJAX({
                primary: !0,
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" + encodeURIComponent(e) + "/cids/json?name_type=word",
                defaultError: i,
                success: function (e) {
                    Request.PubChem.data = e.IdentifierList.CID, t()
                }
            })) : i && i()
        },
        structureSearch: function (e, t, i, s, o) {
            AJAX({
                primary: !0,
                dataType: "json",
                url: "smiles" === e ? "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/" + i + "/" + e + "/json?" + e + "=" + encodeURIComponent(t) + "&MaxRecords=" + Request.PubChem.maxRecords + "&MaxSeconds=" + Request.PubChem.MaxSeconds : "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/" + i + "/" + e + "/" + t + "/json?MaxRecords=" + Request.PubChem.maxRecords + "&MaxSeconds=" + Request.PubChem.MaxSeconds,
                defaultError: o,
                success: function (e) {
                    s(e.Waiting.ListKey)
                }
            })
        },
        list: function (e, t, i, s) {
            AJAX({
                primary: !0,
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/listkey/" + e + "/cids/json",
                defaultError: s,
                success: function (e) {
                    e.IdentifierList ? (Request.PubChem.data = e.IdentifierList.CID, t()) : e.Waiting ? i(e.Waiting.ListKey) : e.Fault && s && s()
                }
            })
        },
        smilesToCID: function (e, t, i) {
            AJAX({
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/cids/json?smiles=" + encodeURIComponent(e),
                defaultError: i,
                success: function (e) {
                    e.IdentifierList && 0 < e.IdentifierList.CID[0] ? t(e.IdentifierList.CID[0]) : i()
                }
            })
        },
        nameToCID: function (e, t, i) {
            AJAX({
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" + e + "/cids/json",
                defaultError: i,
                success: function (e) {
                    e.IdentifierList ? t(e.IdentifierList.CID[0]) : i()
                }
            })
        },
        primaryName: function (e, t, i) {
            AJAX({
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/" + e + "/description/json",
                defaultError: i,
                success: function (e) {
                    e.InformationList ? t(e.InformationList.Information[0].Title) : i && i()
                }
            })
        },
        description: function (e, t, i) {
            AJAX({
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + e + "/description/json",
                defaultError: i,
                success: t
            })
        },
        properties: function (e, t, i, s) {
            AJAX({
                dataType: "json",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + e + "/property/" + t + "/json",
                defaultError: s,
                success: i
            })
        },
        casNumber: function (e, o, r) {
            AJAX({
                dataType: "text",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + e + "/synonyms/txt",
                defaultError: r,
                success: function (e) {
                    for (var t = /^\d{2,7}-\d{2}-\d$/gm, i = [], s = {}; null !== (s = t.exec(e));) i.push(s[0]);
                    0 < i.length ? (i.sort(function (e, t) {
                        return e.length - t.length
                    }), o(i[0])) : r()
                }
            })
        },
        image: function (e, t) {
            return "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + e + "/png?record_type=2d&image_size=" + (Math.round(t) || 300) * MolView.devicePixelRatio + "x" + (Math.round(t) || 300) * MolView.devicePixelRatio
        },
        smilesToImage: function (e) {
            return "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/png?record_type=2d&smiles=" + encodeURIComponent(e) + "&image_size=" + 300 * MolView.devicePixelRatio + "x" + 300 * MolView.devicePixelRatio
        },
        sdf: function (e, t, i, s) {
            AJAX({
                primary: !0,
                dataType: "text",
                url: "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + e + "/sdf?record_type=" + (t ? "2d" : "3d"),
                defaultError: s,
                success: i
            })
        },
        staticURL: function (e) {
            return "https://pubchem.ncbi.nlm.nih.gov/compound/" + e
        }
    },
    RCSB: {
        data: [],
        search: function (e, t, i) {
            "" !== e ? (AJAX({
                primary: !0,
                type: "POST",
                data: "<orgPdbQuery><queryType>org.pdb.query.simple.AdvancedKeywordQuery</queryType><description>Text search for: " + (e = e.replace(/\s/g, "|")) + "(molview.org)</description><keywords>" + e + "</keywords></orgPdbQuery>",
                contentType: "application/x-www-form-urlencoded",
                dataType: "text",
                url: "https://www.rcsb.org/pdb/rest/search?sortfield=rank",
                defaultError: i,
                success: function (e) {
                    Request.RCSB.data = e.split(/\n/), Request.RCSB.data = Request.RCSB.data.filter(function (e) {
                        return "" !== e
                    }), Request.RCSB.data.reverse(), 0 < Request.RCSB.data.length ? t() : i && i()
                }
            })) : i && i()
        },
        information: function (n, a, e) {
            AJAX({
                primary: !0,
                dataType: "text",
                url: "https://www.rcsb.org/pdb/rest/customReport?pdbids=" + n.join() + "&customReportColumns=structureId,structureTitle",
                defaultError: e,
                success: function (e) {
                    for (var t = {
                        dataset: []
                    }, i = [], s = my$(e).find("record"), o = 0; o < s.length; o++) i.push({
                        structureId: my$(s[o]).find("dimStructure\\.structureId").text(),
                        structureTitle: my$(s[o]).find("dimStructure\\.structureTitle").text()
                    });
                    for (o = 0; o < n.length; o++)
                        for (var r = 0; r < i.length; r++) i[r].structureId !== n[o] || t.dataset.push(i[r]);
                    a(t)
                }
            })
        },
        image: function (e) {
            return "https://www.rcsb.org/pdb/images/" + e + "_bio_r_500.jpg"
        },
        PDB: function (e, t, i) {
            AJAX({
                primary: !0,
                dataType: "text",
                url: "https://files.rcsb.org/view/" + e + ".pdb",
                defaultError: i,
                success: t
            })
        },
        staticURL: function (e) {
            return "http://www.rcsb.org/pdb/explore/explore.do?structureId=" + e
        }
    },
    COD: {
        data: {
            records: []
        },
        search: function (e, t, i) {
            "" !== e ? (AJAX({
                primary: !0,
                dataType: "json",
                url: Request.API_ROOT + "api/cod/search/" + encodeURIComponent(e),
                defaultError: i,
                success: function (e) {
                    e.error ? i && i(!0) : e.records && 0 < e.records.length ? (Request.COD.data = e.records, t()) : i && i(!1)
                }
            })) : i && i()
        },
        smiles: function (e, t, i) {
            AJAX({
                primary: !0,
                dataType: "json",
                url: Request.API_ROOT + "api/cod/smiles/" + e,
                defaultError: i,
                success: t
            })
        },
        name: function (e, t, i) {
            AJAX({
                primary: !0,
                dataType: "json",
                url: Request.API_ROOT + "api/cod/name/" + e,
                defaultError: i,
                success: t
            })
        },
        CIF: function (e, t, i) {
            AJAX({
                primary: !0,
                dataType: "text",
                url: "https://molview.org/api/cod/cif/" + e + ".cif",
                defaultError: i,
                success: t
            })
        },
        staticURL: function (e) {
            return "http://www.crystallography.net/" + e + ".html"
        }
    },
    NMRdb: {
        prediction: function (e, t, i) {
            AJAX({
                dataType: "json",
                url: "http://www.nmrdb.org/service/prediction?smiles=" + encodeURIComponent(e),
                defaultError: i,
                success: function (e) {
                    t(e.jcamp.value)
                }
            })
        }
    },
    NIST: {
        lookup: function (e, o, t) {
            AJAX({
                dataType: "json",
                url: Request.API_ROOT + "api/nist/lookup/" + e,
                defaultError: t,
                success: function (e) {
                    var t = [];
                    t.url = e.url, t.mass = e.mass, t.uvvis = e.uvvis, t.ir = new Array(), e.ir.sort(function (e, t) {
                        return e.i - t.i
                    });
                    for (var i, s = 0; s < e.ir.length; s++) {
                        -1 === e.ir[s].source.indexOf("NO SPECTRUM") && (i = humanize(e.ir[s].state), t.ir.push({
                            i: e.ir[s].i,
                            state: i
                        }))
                    }
                    o(t)
                }
            })
        },
        spectrum: function (e, t, i, s) {
            var o = -1; - 1 !== t.indexOf("ir") && (o = parseInt(t.substr(3)), t = "ir")
            AJAX({
                dataType: "text",
                url: Request.API_ROOT + "api/nist/" + t + "/" + e + (-1 !== o ? "/" + o : ""),
                defaultError: s,
                success: i
            })
        }
    }
};

export { defaultMol2D, emptyImage, ucfirst, humanize, oneOf, Request }
