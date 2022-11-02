import React from 'react'
import './App.css'
import { useEffect } from 'react'

import MolView from './js/molview-app'


export default function App() {
    useEffect(() => {
        console.log("useEffect")
        MolView.init()
    }, [])
    return (
        <div>

            {/* <!-- 菜单搜索栏 --> */}
            <div id="menu">
                <div id="menu-bar" className="hstack">

                    <ul id="main-menu" className="hstack">

                        <li id="tools-dropdown" className="dropdown">
                            <a className="dropdown-toggle" id="action-data-infocard" >Information card</a>

                        </li>

                    </ul>

                </div>
            </div>
            {/* <!-- 主体 --> */}
            <div id="content">
                <div id="main-layer">

                    {/* <!-- 左侧结构图 --> */}
                    <div id="sketcher">
                        <div id="molpad" className="sketcher">
                            {/* <!-- 单键双键之类的 --> */}
                            <div id="chem-tools" className="toolbar">
                                <div className="toolbar-inner">
                                    <div id="action-mp-bond-single" className="tool-button primary-tool" title="Single bond"></div>
                                    <div id="action-mp-bond-double" className="tool-button primary-tool" title="Double bond"></div>
                                    <div id="action-mp-bond-triple" className="tool-button primary-tool" title="Triple bond"></div>
                                    <div id="action-mp-bond-wedge" className="tool-button primary-tool" title="Wedge bond"></div>
                                    <div id="action-mp-bond-hash" className="tool-button primary-tool" title="Hash bond"></div>
                                    <div className="vertical-separator"></div>
                                    <div id="action-mp-frag-benzene" className="tool-button primary-tool" title="Benzene"></div>
                                    <div id="action-mp-frag-cyclopropane" className="tool-button primary-tool" title="Cyclopropane">
                                    </div>
                                    <div id="action-mp-frag-cyclobutane" className="tool-button primary-tool" title="Cyclobutane">
                                    </div>
                                    <div id="action-mp-frag-cyclopentane" className="tool-button primary-tool" title="Cyclopentane">
                                    </div>
                                    <div id="action-mp-frag-cyclohexane" className="tool-button primary-tool" title="Cyclohexane">
                                    </div>
                                    <div id="action-mp-frag-cycloheptane" className="tool-button primary-tool" title="Cycloheptane">
                                    </div>
                                    <div className="vertical-separator"></div>
                                    <div id="action-mp-chain" className="tool-button primary-tool" title="Carbon chain"></div>
                                    <div id="action-mp-charge-add" className="tool-button primary-tool" title="Charge +">
                                        e<sup>+</sup></div>
                                    <div id="action-mp-charge-sub" className="tool-button primary-tool" title="Charge -">
                                        e<sup>&minus;</sup></div>
                                </div>
                            </div>
                            {/* <!-- 编辑工具 --> */}
                            <div id="edit-tools" className="toolbar">
                                <div className="toolbar-inner hstack">
                                    <div id="action-mp-clear" className="tool-button tool-button-horizontal" title="Clear all">
                                    </div>
                                    <div id="action-mp-eraser" className="tool-button tool-button-horizontal primary-tool"
                                        title="Erase"></div>
                                    <div className="horizontal-separator"></div>
                                    <div id="action-mp-undo" className="tool-button tool-button-horizontal tool-button-disabled"
                                        title="Undo"></div>
                                    <div id="action-mp-redo" className="tool-button tool-button-horizontal tool-button-disabled"
                                        title="Redo"></div>
                                    <div className="horizontal-separator"></div>
                                    <div id="action-mp-drag" className="tool-button tool-button-horizontal primary-tool"
                                        title="Drag atoms and bonds"></div>
                                    <div id="action-mp-rect" className="tool-button tool-button-horizontal primary-tool"
                                        title="Rectangle selection"></div>
                                    <div id="action-mp-lasso" className="tool-button tool-button-horizontal primary-tool"
                                        title="Lasso selection"></div>
                                    <div className="horizontal-separator"></div>
                                    <div id="action-mp-color-mode" className="tool-button tool-button-horizontal enabled"
                                        title="Toggle color mode"></div>
                                    <div id="action-mp-skeletal-formula" className="tool-button tool-button-horizontal enabled"
                                        title="Toggle skeletal formula"></div>
                                    <div id="action-mp-center" className="tool-button tool-button-horizontal"
                                        title="Center structure"></div>
                                    <div className="horizontal-separator"></div>
                                    <div id="action-mp-clean" className="tool-button tool-button-horizontal"
                                        title="Clean structure"></div>
                                    <div id="action-resolve" className="tool-button tool-button-horizontal" title="Update 3D view">
                                        2D to 3D</div>
                                </div>
                            </div>
                            {/* <!-- 元素工具 --> */}
                            <div id="elem-tools" className="toolbar">
                                <div className="toolbar-inner">
                                    <div id="action-mp-atom-c" className="tool-button primary-tool tool-element element-colored"
                                        title="Carbon">C</div>
                                    <div id="action-mp-atom-h" className="tool-button primary-tool tool-element element-colored"
                                        title="Hydrogen">H</div>
                                    <div id="action-mp-atom-n" className="tool-button primary-tool tool-element element-colored"
                                        title="Nitrogen">N</div>
                                    <div id="action-mp-atom-o" className="tool-button primary-tool tool-element element-colored"
                                        title="Oxygen">O</div>
                                    <div id="action-mp-atom-p" className="tool-button primary-tool tool-element element-colored"
                                        title="Phosphorus">P</div>
                                    <div id="action-mp-atom-s" className="tool-button primary-tool tool-element element-colored"
                                        title="Sulfur">S</div>
                                    <div id="action-mp-atom-f" className="tool-button primary-tool tool-element element-colored"
                                        title="Fluorine">F</div>
                                    <div id="action-mp-atom-cl" className="tool-button primary-tool tool-element element-colored"
                                        title="Chlorine">Cl</div>
                                    <div id="action-mp-atom-br" className="tool-button primary-tool tool-element element-colored"
                                        title="Bromine">Br</div>
                                    <div id="action-mp-atom-i" className="tool-button primary-tool tool-element element-colored"
                                        title="Iodine">I</div>
                                    <div id="action-mp-periodictable" className="tool-button primary-tool" title="Periodic Table">
                                        ...</div>
                                </div>
                            </div>
                            {/* <!-- 中间绘图部分 --> */}
                            <div id="molpad-canvas-wrapper"></div>
                        </div>
                    </div>
                    <div id="model">

                        <div id="chemdoodle" className="render-engine" style={{ display: "none" }}>
                            <canvas id="chemdoodle-canvas"></canvas>
                        </div>
                        <div id="jsmol" className="render-engine" style={{ display: "none" }}></div>
                        <div id="glmol" className="render-engine" style={{ display: "none" }}></div>
                    </div>
                </div>
                <div id="search-layer" className="layer" style={{ display: "none" }}>
                    <div className="btn-group-bar">
                        <button className="btn close btn-primary "><i className="fa fa-arrow-left"></i> Return</button>
                    </div>
                    <div className="container"></div>
                    <div id="action-load-more-pubchem" className="load-more" style={{ display: "none" }}></div>
                    <div id="action-load-more-rcsb" className="load-more" style={{ display: "none" }}></div>
                    <div id="action-load-more-cod" className="load-more" style={{ display: "none" }}></div>
                </div>
                <div id="infocard-layer" className="layer data-layer" style={{ display: "none" }}>
                    <div className="btn-group-bar">
                        <button className="btn close btn-primary " id="close"><i className="fa fa-arrow-left"></i> Return</button>
                    </div>
                    <div id="properties-wrapper">
                        <div id="general-properties">
                            <div id="molecule-image-wrapper" className="properties-block">
                                <img id="molecule-image" alt="" />
                            </div>
                            <div className="properties-block">
                                <div id="molecule-info">
                                    <h3 id="molecule-title"></h3>
                                    <p id="molecule-description"></p>
                                </div>
                                <table id="common-chem-props">
                                    <tbody>
                                        <tr id="prop-formula-wrapper">
                                            <td>Formula</td>
                                            <td id="prop-formula" className="chemprop"></td>
                                        </tr>
                                        <tr id="prop-mw-wrapper">
                                            <td>Molecular weight</td>
                                            <td id="prop-mw" className="chemprop"></td>
                                        </tr>
                                        <tr id="prop-donors-wrapper">
                                            <td>Hydrogen bond donors</td>
                                            <td id="prop-donors" className="chemprop"></td>
                                        </tr>
                                        <tr id="prop-acceptors-wrapper">
                                            <td>Hydrogen bond acceptors</td>
                                            <td id="prop-acceptors" className="chemprop"></td>
                                        </tr>

                                    </tbody>

                                </table>
                                <h3 id="percent-composition-title">Percent composition</h3>
                                <table id="percent-composition-table"></table>
                            </div>
                        </div>
                        <div id="prop-sysname-wrapper" className="chem-identifier">
                            <label htmlFor="prop-sysname">Systematic name</label>
                            <input type="text" id="prop-sysname" className="input chemprop" />
                        </div>
                        <div id="prop-canonicalsmiles-wrapper" className="chem-identifier">
                            <label htmlFor="prop-canonicalsmiles">Canonical SMILES</label>
                            <input type="text" id="prop-canonicalsmiles" className="input chemprop" />
                        </div>
                        <div id="prop-isomericsmiles-wrapper" className="chem-identifier">
                            <label htmlFor="prop-isomericsmiles">Isomeric SMILES</label>
                            <input type="text" id="prop-isomericsmiles" className="input chemprop" />
                        </div>
                        <div id="prop-inchikey-wrapper" className="chem-identifier">
                            <label htmlFor="prop-inchikey">InChIKey</label>
                            <input type="text" id="prop-inchikey" className="input chemprop" />
                        </div>
                        <div id="prop-inchi-wrapper" className="chem-identifier">
                            <label htmlFor="prop-inchi">InChI</label>
                            <input type="text" id="prop-inchi" className="input chemprop" />
                        </div>
                        <div id="prop-cas-wrapper" className="chem-identifier">
                            <label htmlFor="cas-sysname">CAS Number</label>
                            <input type="text" id="prop-cas" className="input chemprop" />
                        </div>
                        <div id="prop-csid-wrapper" className="chem-identifier">
                            <label htmlFor="prop-csid">Chemspider ID
                                <a id="chemspider-link" className="link chem-link" target="_blank"><i
                                    className="fa fa-external-link"></i></a>
                            </label>
                            <input type="text" id="prop-csid" className="input chemprop" />
                        </div>
                        <div id="prop-cid-wrapper" className="chem-identifier">
                            <label htmlFor="prop-cid">PubChem Compound ID
                                <a id="pubchem-link" className="link chem-link" target="_blank"><i
                                    className="fa fa-external-link"></i></a>
                            </label>
                            <input type="text" id="prop-cid" className="input chemprop" />
                        </div>
                    </div>
                </div>
                <div id="spectra-layer" className="layer data-layer" style={{ display: "none" }}>
                    <div className="btn-group-bar">
                        <button className="btn close btn-primary "><i className="fa fa-arrow-left"></i> Return</button>
                        <select id="spectrum-select"></select>
                        <button id="action-export-spectrum-png" className="btn"><i className="fa fa-download"></i> Download PNG
                            image</button>
                        <button id="action-export-spectrum-jcamp" className="btn"><i className="fa fa-download"></i> Download JCAMP
                            data</button>
                        <a id="spectrum-nist-source" className="btn" target="_blank"><i className="fa fa-external-link"></i> NIST
                            source</a>
                    </div>
                    <div id="spectrum-wrapper">
                        <canvas id="spectrum-canvas"></canvas>
                    </div>
                </div>



            </div>
            <div id="dialog-overlay" className="dialog-overlay" style={{ display: "none" }}>
                <div id="dialog-click-area">
                    <div id="dialog-wrapper">
                        <div className="dialog" id="periodictable-dialog" >
                            <h2>Periodic Table</h2>
                            <div id="periodictable"></div>
                            <div className="footer">
                                <button className="btn close btn-primary" >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
