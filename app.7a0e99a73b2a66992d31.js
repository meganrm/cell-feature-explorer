webpackJsonp([1],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["changeAxis"] = changeAxis;
/* harmony export (immutable) */ __webpack_exports__["selectGroupOfPoints"] = selectGroupOfPoints;
/* harmony export (immutable) */ __webpack_exports__["deselectGroupOfPoints"] = deselectGroupOfPoints;
/* harmony export (immutable) */ __webpack_exports__["deselectPoint"] = deselectPoint;
/* harmony export (immutable) */ __webpack_exports__["selectPoint"] = selectPoint;
/* harmony export (immutable) */ __webpack_exports__["clearAllSelectedPoints"] = clearAllSelectedPoints;
/* harmony export (immutable) */ __webpack_exports__["toggleFilterByProteinName"] = toggleFilterByProteinName;
/* harmony export (immutable) */ __webpack_exports__["selectCellFor3DViewer"] = selectCellFor3DViewer;
/* harmony export (immutable) */ __webpack_exports__["toggleApplySelectionSetColors"] = toggleApplySelectionSetColors;
/* harmony export (immutable) */ __webpack_exports__["changeClusteringAlgorithm"] = changeClusteringAlgorithm;
/* harmony export (immutable) */ __webpack_exports__["changeClusteringNumber"] = changeClusteringNumber;
/* harmony export (immutable) */ __webpack_exports__["toggleShowClusters"] = toggleShowClusters;
/* harmony export (immutable) */ __webpack_exports__["changeDownloadSettings"] = changeDownloadSettings;
/* harmony export (immutable) */ __webpack_exports__["downloadImage"] = downloadImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(62);

function changeAxis(axisId, payload) {
    return {
        axisId: axisId,
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* CHANGE_AXIS */],
    };
}
function selectGroupOfPoints(key, payload) {
    return {
        key: key,
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["q" /* SELECT_GROUP */],
    };
}
function deselectGroupOfPoints(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* DESELECT_GROUP_OF_POINTS */],
    };
}
function deselectPoint(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* DESELECT_POINT */],
    };
}
function selectPoint(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* SELECT_POINT */],
    };
}
function clearAllSelectedPoints() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* DESELECT_ALL_POINTS */],
    };
}
function toggleFilterByProteinName(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* TOGGLE_FILTER_BY_PROTEIN_NAME */],
    };
}
function selectCellFor3DViewer(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* OPEN_CELL_IN_3D */],
    };
}
function toggleApplySelectionSetColors(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* TOGGLE_APPLY_SELECTION_SET_COLOR */],
    };
}
function changeClusteringAlgorithm(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* CHANGE_CLUSTERING_ALGORITHM */],
    };
}
function changeClusteringNumber(clusteringKey, payload) {
    return {
        clusteringKey: clusteringKey,
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* CHANGE_CLUSTER_NUMBER */],
    };
}
function toggleShowClusters(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* TOGGLE_CLUSTERS_VISIBLE */],
    };
}
function changeDownloadSettings(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* SELECT_DOWNLOAD_ID */],
    };
}
function downloadImage(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* DOWNLOAD_IMAGE_DATA */],
    };
}


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_ID; });
/* unused harmony export API_VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return X_AXIS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Y_AXIS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SCATTER_PLOT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SELECTIONS_PLOT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CLUSTERS_PLOT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return COLOR_BY_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CELL_ID_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CELL_LINE_NAME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return FOV_ID_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return PROTEIN_NAME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CELL_LINE_DEF_NAME_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CELL_LINE_DEF_STRUCTURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CELL_LINE_DEF_PROTEIN_KEY; });
/* unused harmony export FILE_INFO_KEYS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DOWNLOAD_CONFIG_TYPE_PROTEIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return DOWNLOAD_CONFIG_TYPE_SELECTION_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGGLOMERATIVE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return KMEANS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DBSCAN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CLUSTER_NUMBER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CLUSTER_DISTANCE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _CELL_VIEWER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _BASE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return _THUMBNAIL_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _DOWNLOAD_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DISABLE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return OFF_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GENERAL_PLOT_SETTINGS; });
var APP_ID = "cell-feature-explorer";
var API_VERSION = "v1";
var X_AXIS_ID = "plotByOnX";
var Y_AXIS_ID = "plotByOnY";
var SCATTER_PLOT_NAME = "features-scatter-plot";
var SELECTIONS_PLOT_NAME = "selections-scatter-plot";
var CLUSTERS_PLOT_NAME = "clusters-plot-name";
var COLOR_BY_SELECTOR = "colorBy";
var CELL_ID_KEY = "CellId";
var CELL_LINE_NAME_KEY = "CellLineName";
var FOV_ID_KEY = "FOVId";
var PROTEIN_NAME_KEY = "structureProteinName";
var CELL_LINE_DEF_NAME_KEY = "CellLineId/Name";
var CELL_LINE_DEF_STRUCTURE_KEY = "StructureId/Name";
var CELL_LINE_DEF_PROTEIN_KEY = "ProteinId/DisplayName";
var FILE_INFO_KEYS = Object.freeze([CELL_ID_KEY, CELL_LINE_NAME_KEY, FOV_ID_KEY]);
var DOWNLOAD_CONFIG_TYPE_PROTEIN = "protein";
var DOWNLOAD_CONFIG_TYPE_SELECTION_SET = "selectionSet";
var AGGLOMERATIVE_KEY = "Agglomerative";
var KMEANS_KEY = "KMeans";
var DBSCAN_KEY = "DBSCAN";
var CLUSTER_NUMBER_KEY = "numberOfClusters";
var CLUSTER_DISTANCE_KEY = "clusteringDistance";
var _CELL_VIEWER_URL = CELL_VIEWER_URL;

var _BASE_API_URL = BASE_API_URL;

var _THUMBNAIL_BASE_URL = THUMBNAIL_BASE_URL;

var _DOWNLOAD_URL_PREFIX = THUMBNAIL_BASE_URL;

var DISABLE_COLOR = "#6e6e6e";
var OFF_COLOR = "#000";
var GENERAL_PLOT_SETTINGS = {
    backgroundColor: "rgba(0,0,0,0)",
    cellName: CELL_ID_KEY,
    chartParent: "ace-scatter-chart",
    circleRadius: 4,
    histogramColor: "rgb(164,162,164)",
    legend: {
        font: {
            color: "rgb(255,255,255)",
        },
        orientation: "h",
        y: 60,
    },
    margin: {
        bottom: 10,
        left: 25,
        right: 25,
        top: 10,
    },
    moveDropdownCutoffWidth: 370,
    showLegendCutoffHeight: 635,
    showLegendCutoffWidth: 692,
    textColor: "rgb(255,255,255)",
    unselectedCircleOpacity: .5,
    xAxisInitial: "Nuclear Volume (fL)",
    yAxisInitial: "Cellular Volume (fL)",
};


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logics__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(648);





/* harmony default export */ __webpack_exports__["a"] = ({
    actions: __WEBPACK_IMPORTED_MODULE_0__actions__,
    logics: __WEBPACK_IMPORTED_MODULE_1__logics__["a" /* default */],
    reducer: __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */],
    selectors: __WEBPACK_IMPORTED_MODULE_3__selectors__,
    types: __WEBPACK_IMPORTED_MODULE_4__types__,
});


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RECEIVE_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REQUEST_FEATURE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVE_CELL_LINE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_CELL_LINE_DATA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(43);

var RECEIVE_METADATA = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* makeConstant */])("metadata", "receive");
var REQUEST_FEATURE_DATA = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* makeConstant */])("metadata", "request");
var RECEIVE_CELL_LINE_DATA = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* makeConstant */])("celllinedata", "receive");
var REQUEST_CELL_LINE_DATA = Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* makeConstant */])("celllinedata", "request");


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logics__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__types__);





/* harmony default export */ __webpack_exports__["a"] = ({
    actions: __WEBPACK_IMPORTED_MODULE_0__actions__,
    logics: __WEBPACK_IMPORTED_MODULE_1__logics__["a" /* default */],
    reducer: __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* default */],
    selectors: __WEBPACK_IMPORTED_MODULE_3__selectors__,
    types: __WEBPACK_IMPORTED_MODULE_4__types__,
});


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["receiveCellLineData"] = receiveCellLineData;
/* harmony export (immutable) */ __webpack_exports__["receiveMetadata"] = receiveMetadata;
/* harmony export (immutable) */ __webpack_exports__["requestCellLineData"] = requestCellLineData;
/* harmony export (immutable) */ __webpack_exports__["requestFeatureData"] = requestFeatureData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(169);

function receiveCellLineData(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* RECEIVE_CELL_LINE_DATA */],
    };
}
function receiveMetadata(payload) {
    return {
        payload: payload,
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* RECEIVE_METADATA */],
    };
}
function requestCellLineData() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_CELL_LINE_DATA */],
    };
}
function requestFeatureData() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* REQUEST_FEATURE_DATA */],
    };
}


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_select__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_select_style_index_js__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_metadata_selectors__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_selection_actions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__ = __webpack_require__(59);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};









var styles = __webpack_require__(748);
var Option = __WEBPACK_IMPORTED_MODULE_0_antd_es_select__["a" /* default */].Option;
var AxisDropDown = /** @class */ (function (_super) {
    __extends(AxisDropDown, _super);
    function AxisDropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    AxisDropDown.prototype.handleChange = function (value) {
        var _a = this.props, axisId = _a.axisId, handleChangeAxis = _a.handleChangeAxis;
        var axisSettingValue = value;
        handleChangeAxis(axisId, axisSettingValue);
    };
    AxisDropDown.prototype.render = function () {
        var _a;
        var _b = this.props, axisId = _b.axisId, colorByValue = _b.colorByValue, xDropDownValue = _b.xDropDownValue, yDropDownValue = _b.yDropDownValue, featureNames = _b.featureNames;
        var axisIDMap = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_5__constants__["A" /* X_AXIS_ID */]] = xDropDownValue,
            _a[__WEBPACK_IMPORTED_MODULE_5__constants__["B" /* Y_AXIS_ID */]] = yDropDownValue,
            _a[__WEBPACK_IMPORTED_MODULE_5__constants__["m" /* COLOR_BY_SELECTOR */]] = colorByValue,
            _a);
        var displayOptions;
        if (axisId === __WEBPACK_IMPORTED_MODULE_5__constants__["m" /* COLOR_BY_SELECTOR */] && !__WEBPACK_IMPORTED_MODULE_2_lodash_includes___default()(featureNames, __WEBPACK_IMPORTED_MODULE_5__constants__["w" /* PROTEIN_NAME_KEY */])) {
            displayOptions = __spread([__WEBPACK_IMPORTED_MODULE_5__constants__["w" /* PROTEIN_NAME_KEY */]], featureNames);
        }
        else {
            displayOptions = featureNames;
        }
        return (__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", { className: styles[axisId] },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_select__["a" /* default */], { defaultValue: axisIDMap[axisId], onChange: this.handleChange }, displayOptions.map(function (option) {
                return (__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Option, { value: option, key: option }, option === __WEBPACK_IMPORTED_MODULE_5__constants__["w" /* PROTEIN_NAME_KEY */] ? "Protein" : option));
            }))));
    };
    return AxisDropDown;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component));
function mapStateToProps(state) {
    return {
        colorByValue: Object(__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getColorBySelection"])(state),
        featureNames: Object(__WEBPACK_IMPORTED_MODULE_6__state_metadata_selectors__["getFeatureNames"])(state),
        xDropDownValue: Object(__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getPlotByOnX"])(state),
        yDropDownValue: Object(__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getPlotByOnY"])(state),
    };
}
var dispatchToPropsMap = {
    handleChangeAxis: __WEBPACK_IMPORTED_MODULE_7__state_selection_actions__["changeAxis"],
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, dispatchToPropsMap)(AxisDropDown));


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__selection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configure_store__ = __webpack_require__(812);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__configure_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__util__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__types__);
/* unused harmony reexport State */







/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_set__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_App__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state__ = __webpack_require__(310);









Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_redux__["a" /* Provider */], { store: Object(__WEBPACK_IMPORTED_MODULE_8__state__["a" /* createReduxStore */])() },
    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__containers_App__["a" /* default */], null)), document.getElementById(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* APP_ID */]));


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_icon_style_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_layout__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_layout_style_index_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_uniq__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_selection_selectors__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CellViewer_index__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_ColorByMenu__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MainPlotContainer__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ThumbnailGallery__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_AffixedNav__ = __webpack_require__(804);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};













var styles = __webpack_require__(811);
var Header = __WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */].Header, Footer = __WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */].Footer, Sider = __WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */].Sider, Content = __WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */].Content;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            defaultActiveKey: [App.panelKeys[0]],
            openKeys: [App.panelKeys[0]],
        };
        _this.onSelectionToolUsed = _this.onSelectionToolUsed.bind(_this);
        _this.onPanelClicked = _this.onPanelClicked.bind(_this);
        return _this;
    }
    App.prototype.onSelectionToolUsed = function () {
        this.setState({ openKeys: __WEBPACK_IMPORTED_MODULE_4_lodash_uniq___default()(__spread(this.state.openKeys, [App.panelKeys[1]])) });
    };
    App.prototype.onPanelClicked = function (value) {
        this.setState({ openKeys: value });
    };
    App.prototype.render = function () {
        var _a = this.props, selected3DCell = _a.selected3DCell, selected3DCellFOV = _a.selected3DCellFOV, selected3DCellCellLine = _a.selected3DCellCellLine;
        return (__WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */], { className: styles.container },
            __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Header, null,
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("h3", null,
                    __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_antd_es_icon__["a" /* default */], { type: "dot-chart" }),
                    " Plot"),
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__components_AffixedNav__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd_es_layout__["a" /* default */], null,
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Sider, { className: styles.colorMenu },
                    __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__containers_ColorByMenu__["a" /* default */], { panelKeys: App.panelKeys, openKeys: this.state.openKeys, defaultActiveKey: this.state.defaultActiveKey, onPanelClicked: this.onPanelClicked })),
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Content, { className: styles.content },
                    __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { className: styles.plotView },
                        __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10__MainPlotContainer__["a" /* default */], { handleSelectionToolUsed: this.onSelectionToolUsed }))),
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Sider, null)),
            __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](Footer, null,
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__ThumbnailGallery__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("div", { className: styles.cellViewerContainer },
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"]("h3", { className: styles.header },
                    __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_antd_es_icon__["a" /* default */], { type: "sync" }),
                    " 3D Cell Viewer"),
                __WEBPACK_IMPORTED_MODULE_5_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_CellViewer_index__["a" /* default */], { cellId: selected3DCell, fovId: selected3DCellFOV, cellLineName: selected3DCellCellLine }))));
    };
    App.panelKeys = ["proteinNames", "selections", "clusters"];
    return App;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]));
function mapStateToProps(state) {
    return {
        selected3DCell: Object(__WEBPACK_IMPORTED_MODULE_7__state_selection_selectors__["getSelected3DCell"])(state),
        selected3DCellCellLine: Object(__WEBPACK_IMPORTED_MODULE_7__state_selection_selectors__["getSelected3DCellCellLine"])(state),
        selected3DCellFOV: Object(__WEBPACK_IMPORTED_MODULE_7__state_selection_selectors__["getSelected3DCellFOV"])(state),
    };
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, null)(App));


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = makeConstant;
/* harmony export (immutable) */ __webpack_exports__["d"] = makeReducer;
/* unused harmony export batchActions */
/* harmony export (immutable) */ __webpack_exports__["b"] = enableBatching;
/* harmony export (immutable) */ __webpack_exports__["a"] = convertFileInfoToAICSId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(13);

function makeConstant(associatedReducer, actionType) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* APP_ID */] + "/" + associatedReducer.toUpperCase() + "/" + actionType.toUpperCase();
}
function makeReducer(typeToDescriptionMap, initialState) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        var description = typeToDescriptionMap[action.type];
        if (!description) {
            return state;
        }
        if (description.accepts(action)) {
            return description.perform(state, action);
        }
        return state;
    };
}
var BATCH_ACTIONS = makeConstant("batch", "batch-actions");
function batchActions(actions, type) {
    if (type === void 0) { type = BATCH_ACTIONS; }
    return { type: type, batch: true, payload: actions };
}
function actionIsBatched(action) {
    return action && action.batch && Array.isArray(action.payload);
}
function enableBatching(reducer) {
    return function batchingReducer(state, action) {
        if (actionIsBatched(action)) {
            return action.payload.reduce(batchingReducer, state);
        }
        return reducer(state, action);
    };
}
function convertFileInfoToAICSId(datum) {
    return datum.CellLineName + "_" + datum.FOVId + "_" + datum.CellId;
}


/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index__ = __webpack_require__(13);


var styles = __webpack_require__(525);
var CellViewer = function (_a) {
    var cellId = _a.cellId, cellLineName = _a.cellLineName, fovId = _a.fovId;
    if (!cellId) {
        return null;
    }
    var query = "";
    if (!fovId) {
        // Assume cellId has the form:
        // ?legacyName_1_2=2017_03_08_Struct_First_Pass_Seg/AICS-10/AICS-10_5_5
        // After release, actual legacy links will look like : ?legacyName_1_2=AICS-10_5_5
        // TODO this needs to be updated before release, when we flatten the directory
        // structure of the bucket containing legacy version 1.2 images
        query = "legacyName_1_2=" + cellId;
    }
    else {
        query = "fovId=" + fovId + "&cellId=" + cellId + "&cellLine=" + cellLineName;
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { id: "three-d-viewer", frameBorder: 0, className: styles.cellViewer, src: __WEBPACK_IMPORTED_MODULE_1__constants_index__["i" /* CELL_VIEWER_URL */] + "?" + query }));
};
/* harmony default export */ __webpack_exports__["a"] = (CellViewer);


/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cell-viewer":"style__cell-viewer--2yy3F","cellViewer":"style__cell-viewer--2yy3F"};

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_checkbox__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_checkbox_style_index_js__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_col__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_col_style_index_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_collapse__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_collapse_style_index_js__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_es_radio__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_es_radio_style_index_js__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_es_row__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_es_row_style_index_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_filter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_indexOf__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_indexOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_indexOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__state_metadata__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__state_selection__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__state_selection_constants__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_BarChart__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ColorBySwitcher__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_SliderWithCustomMarks__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__AxisDropDown__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__selectors__ = __webpack_require__(749);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
























var styles = __webpack_require__(753);
var RadioButton = __WEBPACK_IMPORTED_MODULE_6_antd_es_radio__["a" /* default */].Button;
var RadioGroup = __WEBPACK_IMPORTED_MODULE_6_antd_es_radio__["a" /* default */].Group;
var initIndex = 2;
var Panel = __WEBPACK_IMPORTED_MODULE_4_antd_es_collapse__["a" /* default */].Panel;
var ColorByMenu = /** @class */ (function (_super) {
    __extends(ColorByMenu, _super);
    // submenu keys of first level
    function ColorByMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.onBarClicked = _this.onBarClicked.bind(_this);
        _this.onColorBySwitchChanged = _this.onColorBySwitchChanged.bind(_this);
        _this.onActivePanelChange = _this.onActivePanelChange.bind(_this);
        _this.changeClusteringAlgorithm = _this.changeClusteringAlgorithm.bind(_this);
        _this.changeClusteringNumber = _this.changeClusteringNumber.bind(_this);
        _this.renderProteinPanel = _this.renderProteinPanel.bind(_this);
        _this.renderSelectionPanel = _this.renderSelectionPanel.bind(_this);
        _this.renderClusteringPanel = _this.renderClusteringPanel.bind(_this);
        _this.allOnOff = _this.allOnOff.bind(_this);
        _this.onProteinDownloadButtonClicked = _this.onProteinDownloadButtonClicked.bind(_this);
        _this.onSelectionSetDownloadButtonClicked = _this.onSelectionSetDownloadButtonClicked.bind(_this);
        return _this;
    }
    ColorByMenu.prototype.componentDidUpdate = function () {
        var _a = this.props, clusteringAlgorithm = _a.clusteringAlgorithm, handleChangeClusteringNumber = _a.handleChangeClusteringNumber, clusteringSetting = _a.clusteringSetting, clusteringOptions = _a.clusteringOptions;
        if (!clusteringSetting) {
            handleChangeClusteringNumber(Object(__WEBPACK_IMPORTED_MODULE_18__state_selection_constants__["e" /* CLUSTERING_MAP */])(clusteringAlgorithm), clusteringOptions[initIndex]);
        }
    };
    ColorByMenu.prototype.onBarClicked = function (_a) {
        var target = _a.target;
        var _b = this.props, handleFilterByProteinName = _b.handleFilterByProteinName, filtersToExclude = _b.filtersToExclude;
        var newFilterList = __WEBPACK_IMPORTED_MODULE_11_lodash_includes___default()(filtersToExclude, target.value) ?
            __WEBPACK_IMPORTED_MODULE_10_lodash_filter___default()(filtersToExclude, function (e) { return e !== target.value; }) : __spread(filtersToExclude, [target.value]);
        handleFilterByProteinName(newFilterList);
    };
    ColorByMenu.prototype.onProteinDownloadButtonClicked = function (proteinName) {
        var handleChangeDownloadSettings = this.props.handleChangeDownloadSettings;
        handleChangeDownloadSettings({
            key: proteinName,
            type: __WEBPACK_IMPORTED_MODULE_15__constants__["p" /* DOWNLOAD_CONFIG_TYPE_PROTEIN */],
        });
    };
    ColorByMenu.prototype.onSelectionSetDownloadButtonClicked = function (selectionSetId) {
        var handleChangeDownloadSettings = this.props.handleChangeDownloadSettings;
        handleChangeDownloadSettings({
            key: selectionSetId,
            type: __WEBPACK_IMPORTED_MODULE_15__constants__["q" /* DOWNLOAD_CONFIG_TYPE_SELECTION_SET */],
        });
    };
    ColorByMenu.prototype.allOnOff = function (_a) {
        var target = _a.target;
        var _b = this.props, handleFilterByProteinName = _b.handleFilterByProteinName, proteinNames = _b.proteinNames;
        if (target.checked) {
            return handleFilterByProteinName([]);
        }
        handleFilterByProteinName(proteinNames);
    };
    ColorByMenu.prototype.onColorBySwitchChanged = function (colorByProtein) {
        var handleChangeAxis = this.props.handleChangeAxis;
        if (colorByProtein) {
            return handleChangeAxis(__WEBPACK_IMPORTED_MODULE_15__constants__["m" /* COLOR_BY_SELECTOR */], __WEBPACK_IMPORTED_MODULE_15__constants__["w" /* PROTEIN_NAME_KEY */]);
        }
        handleChangeAxis(__WEBPACK_IMPORTED_MODULE_15__constants__["m" /* COLOR_BY_SELECTOR */], "Nuclear Volume (fL)");
    };
    ColorByMenu.prototype.onActivePanelChange = function (value) {
        var onPanelClicked = this.props.onPanelClicked;
        onPanelClicked(value);
    };
    ColorByMenu.prototype.changeClusteringAlgorithm = function (_a) {
        var target = _a.target;
        var handleChangeClusteringAlgorithm = this.props.handleChangeClusteringAlgorithm;
        handleChangeClusteringAlgorithm(target.value);
    };
    ColorByMenu.prototype.changeClusteringNumber = function (value) {
        var _a = this.props, handleChangeClusteringNumber = _a.handleChangeClusteringNumber, clusteringAlgorithm = _a.clusteringAlgorithm;
        handleChangeClusteringNumber(Object(__WEBPACK_IMPORTED_MODULE_18__state_selection_constants__["e" /* CLUSTERING_MAP */])(clusteringAlgorithm), value);
    };
    ColorByMenu.prototype.renderClusteringPanel = function () {
        var _a = this.props, clusteringAlgorithm = _a.clusteringAlgorithm, clusteringSetting = _a.clusteringSetting, handleClusteringToggle = _a.handleClusteringToggle, clusteringOptions = _a.clusteringOptions, showClusters = _a.showClusters;
        var initSliderSetting = __WEBPACK_IMPORTED_MODULE_12_lodash_indexOf___default()(clusteringOptions, clusteringSetting) || initIndex;
        return (__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react___default.a.Fragment, null,
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_ColorBySwitcher__["a" /* default */], { defaultChecked: false, handleChange: handleClusteringToggle, label: "Show clusters:" }),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_es_row__["a" /* default */], { className: styles.colorByRow, type: "flex", align: "middle" },
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(RadioGroup, { onChange: this.changeClusteringAlgorithm, defaultValue: __WEBPACK_IMPORTED_MODULE_15__constants__["u" /* KMEANS_KEY */], disabled: !showClusters },
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(RadioButton, { value: __WEBPACK_IMPORTED_MODULE_15__constants__["u" /* KMEANS_KEY */] }, "KMeans"),
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(RadioButton, { value: __WEBPACK_IMPORTED_MODULE_15__constants__["a" /* AGGLOMERATIVE_KEY */] }, "Agglomerative"),
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(RadioButton, { value: __WEBPACK_IMPORTED_MODULE_15__constants__["n" /* DBSCAN_KEY */] }, "DBSCAN"))),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_SliderWithCustomMarks__["a" /* default */], { disabled: !showClusters, label: __WEBPACK_IMPORTED_MODULE_18__state_selection_constants__["d" /* CLUSTERING_LABEL */][Object(__WEBPACK_IMPORTED_MODULE_18__state_selection_constants__["e" /* CLUSTERING_MAP */])(clusteringAlgorithm)], onValueChange: this.changeClusteringNumber, valueOptions: clusteringOptions, initIndex: initSliderSetting })));
    };
    ColorByMenu.prototype.renderSelectionPanel = function () {
        var _a = this.props, downloadUrls = _a.downloadUrls, downloadConfig = _a.downloadConfig, handleApplyColorSwitchChange = _a.handleApplyColorSwitchChange, selectionSetsPanelData = _a.selectionSetsPanelData, handleCloseSelectionSet = _a.handleCloseSelectionSet;
        return selectionSetsPanelData.length === 0 ?
            (__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("span", null,
                "No selected sets yet. Make a selection on the plot using the",
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("strong", null, " Lasso Select"),
                " or",
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("strong", null, " Box Select"),
                " tools on the plot, and it will get saved here.")) : (__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react___default.a.Fragment, null,
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__components_ColorBySwitcher__["a" /* default */], { defaultChecked: true, handleChange: handleApplyColorSwitchChange, label: "Show selections: " }),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("div", null,
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_BarChart__["a" /* default */], { closeable: true, hideable: false, handleCloseSelectionSet: handleCloseSelectionSet, panelData: selectionSetsPanelData, downloadUrls: downloadUrls, downloadConfig: downloadConfig, handleDownload: this.onSelectionSetDownloadButtonClicked }))));
    };
    ColorByMenu.prototype.renderProteinPanel = function () {
        var _a = this.props, filtersToExclude = _a.filtersToExclude, someProteinsOff = _a.someProteinsOff, proteinPanelData = _a.proteinPanelData, downloadUrls = _a.downloadUrls, downloadConfig = _a.downloadConfig;
        return (__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react___default.a.Fragment, null,
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_es_row__["a" /* default */], { className: styles.colorByRow },
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col__["a" /* default */], { span: 6 }, "Color by:"),
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_col__["a" /* default */], { span: 6 },
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__AxisDropDown__["a" /* default */], { axisId: __WEBPACK_IMPORTED_MODULE_15__constants__["m" /* COLOR_BY_SELECTOR */] }))),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("div", null,
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("div", { className: styles.barChartHeader },
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_checkbox__["a" /* default */], { indeterminate: someProteinsOff, checked: filtersToExclude.length === 0, onChange: this.allOnOff }, "Show/Hide all"),
                    __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("span", { className: styles.label }, "# of cells")),
                __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__components_BarChart__["a" /* default */], { closeable: false, panelData: proteinPanelData, downloadUrls: downloadUrls, downloadConfig: downloadConfig, hideable: true, onBarClicked: this.onBarClicked, handleDownload: this.onProteinDownloadButtonClicked }))));
    };
    ColorByMenu.prototype.render = function () {
        var _a = this.props, defaultActiveKey = _a.defaultActiveKey, openKeys = _a.openKeys, panelKeys = _a.panelKeys;
        return (__WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_collapse__["a" /* default */], { defaultActiveKey: defaultActiveKey, activeKey: openKeys, onChange: this.onActivePanelChange },
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(Panel, { key: panelKeys[0], header: "Data grouped by tagged structures" }, this.renderProteinPanel()),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(Panel, { key: panelKeys[1], header: "Selected sets" }, this.renderSelectionPanel()),
            __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(Panel, { key: panelKeys[2], header: "Data group by clustering" }, this.renderClusteringPanel())));
    };
    return ColorByMenu;
}(__WEBPACK_IMPORTED_MODULE_13_react___default.a.Component));
function mapStateToProps(state) {
    return {
        clusteringAlgorithm: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getClusteringAlgorithm(state),
        clusteringOptions: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getClusteringRange(state),
        clusteringSetting: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getClusteringSetting(state),
        colorBy: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getColorBySelection(state),
        downloadConfig: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getDownloadConfig(state),
        downloadUrls: Object(__WEBPACK_IMPORTED_MODULE_23__selectors__["a" /* createUrlFromListOfIds */])(state),
        filtersToExclude: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getFiltersToExclude(state),
        proteinNames: __WEBPACK_IMPORTED_MODULE_16__state_metadata__["a" /* default */].selectors.getProteinNames(state),
        proteinPanelData: Object(__WEBPACK_IMPORTED_MODULE_23__selectors__["c" /* getInteractivePanelData */])(state),
        selectionSetsPanelData: Object(__WEBPACK_IMPORTED_MODULE_23__selectors__["d" /* getSelectionPanelData */])(state),
        showClusters: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].selectors.getClustersOn(state),
        someProteinsOff: Object(__WEBPACK_IMPORTED_MODULE_23__selectors__["b" /* getCheckAllCheckboxIsIntermediate */])(state),
    };
}
var dispatchToPropsMap = {
    handleApplyColorSwitchChange: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.toggleApplySelectionSetColors,
    handleChangeAxis: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.changeAxis,
    handleChangeClusteringAlgorithm: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.changeClusteringAlgorithm,
    handleChangeClusteringNumber: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.changeClusteringNumber,
    handleChangeDownloadSettings: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.changeDownloadSettings,
    handleCloseSelectionSet: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.deselectGroupOfPoints,
    handleClusteringToggle: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.toggleShowClusters,
    handleFilterByProteinName: __WEBPACK_IMPORTED_MODULE_17__state_selection__["a" /* default */].actions.toggleFilterByProteinName,
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_14_react_redux__["b" /* connect */])(mapStateToProps, dispatchToPropsMap)(ColorByMenu));


/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_keys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_shuffle__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_shuffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_shuffle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logic__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selection_actions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selection_constants__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(169);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};










var requestCellLineData = Object(__WEBPACK_IMPORTED_MODULE_4_redux_logic__["a" /* createLogic */])({
    process: function (deps, dispatch, done) {
        var baseApiUrl = deps.baseApiUrl, httpClient = deps.httpClient;
        return httpClient
            .get(baseApiUrl + "/cell-line-def.json")
            .then(function (metadata) { return metadata.data; })
            .then(function (data) {
            return __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(data, function (accumulator, datum) {
                var _a;
                accumulator[datum[__WEBPACK_IMPORTED_MODULE_5__constants_index__["e" /* CELL_LINE_DEF_NAME_KEY */]]] = (_a = {},
                    _a[__WEBPACK_IMPORTED_MODULE_5__constants_index__["g" /* CELL_LINE_DEF_STRUCTURE_KEY */]] = datum[__WEBPACK_IMPORTED_MODULE_5__constants_index__["g" /* CELL_LINE_DEF_STRUCTURE_KEY */]],
                    _a[__WEBPACK_IMPORTED_MODULE_5__constants_index__["f" /* CELL_LINE_DEF_PROTEIN_KEY */]] = datum[__WEBPACK_IMPORTED_MODULE_5__constants_index__["f" /* CELL_LINE_DEF_PROTEIN_KEY */]],
                    _a);
                return accumulator;
            }, {});
        })
            .then(function (data) { return dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions__["receiveCellLineData"])(data)); })
            .then(function () { return dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions__["requestFeatureData"])()); })
            .catch(function (reason) {
            console.log(reason); // tslint:disable-line:no-console
        })
            .then(function () { return done(); });
    },
    type: __WEBPACK_IMPORTED_MODULE_9__constants__["c" /* REQUEST_CELL_LINE_DATA */],
});
var requestFeatureDataLogic = Object(__WEBPACK_IMPORTED_MODULE_4_redux_logic__["a" /* createLogic */])({
    // processOptions: {
    //     successType: receiveMetadata,
    // },
    process: function (deps, dispatch, done) {
        var baseApiUrl = deps.baseApiUrl, getState = deps.getState, httpClient = deps.httpClient;
        return httpClient
            .get(baseApiUrl + "/cell-feature-analysis.json")
            .then(function (metadata) { return metadata.data; })
            .then(function (data) {
            var cellLineDefs = getState().metadata.cellLineDefs;
            // shuffle to keep the plot from being organized in z
            return __WEBPACK_IMPORTED_MODULE_3_lodash_shuffle___default()(__WEBPACK_IMPORTED_MODULE_1_lodash_map___default()(data, function (datum) {
                var _a;
                return {
                    clusters: datum.clusters,
                    file_info: __assign({}, datum.file_info, (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_5__constants_index__["w" /* PROTEIN_NAME_KEY */]] = cellLineDefs[datum.file_info[__WEBPACK_IMPORTED_MODULE_5__constants_index__["h" /* CELL_LINE_NAME_KEY */]]][__WEBPACK_IMPORTED_MODULE_5__constants_index__["f" /* CELL_LINE_DEF_PROTEIN_KEY */]], _a)),
                    measured_features: datum.measured_features,
                };
            }));
        })
            .then(function (metaData) {
            dispatch((Object(__WEBPACK_IMPORTED_MODULE_8__actions__["receiveMetadata"])(metaData)));
            __WEBPACK_IMPORTED_MODULE_1_lodash_map___default()(metaData[0].clusters, function (value, clusteringName) {
                var initVal = __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(value)[Math.floor(__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(value).length / 2)];
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__selection_actions__["changeClusteringNumber"])(Object(__WEBPACK_IMPORTED_MODULE_7__selection_constants__["e" /* CLUSTERING_MAP */])(clusteringName), initVal));
            });
        })
            .catch(function (reason) {
            console.log(reason); // tslint:disable-line:no-console
        })
            .then(function () { return done(); });
    },
    type: __WEBPACK_IMPORTED_MODULE_9__constants__["d" /* REQUEST_FEATURE_DATA */],
});
/* harmony default export */ __webpack_exports__["a"] = ([
    requestCellLineData,
    requestFeatureDataLogic,
]);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlotByOnX", function() { return getPlotByOnX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlotByOnY", function() { return getPlotByOnY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClickedScatterPoints", function() { return getClickedScatterPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedGroups", function() { return getSelectedGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorBySelection", function() { return getColorBySelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinColors", function() { return getProteinColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectionSetColors", function() { return getSelectionSetColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersToExclude", function() { return getFiltersToExclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected3DCell", function() { return getSelected3DCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyColorToSelections", function() { return getApplyColorToSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClustersOn", function() { return getClustersOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusteringAlgorithm", function() { return getClusteringAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfClusters", function() { return getNumberOfClusters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusteringDistance", function() { return getClusteringDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadConfig", function() { return getDownloadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected3DCellFOV", function() { return getSelected3DCellFOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected3DCellCellLine", function() { return getSelected3DCellCellLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXValues", function() { return getXValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYValues", function() { return getYValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedGroupsData", function() { return getSelectedGroupsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPossibleColorByData", function() { return getPossibleColorByData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredOpacity", function() { return getFilteredOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpacity", function() { return getOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorByValues", function() { return getColorByValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainPlotData", function() { return getMainPlotData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedGroupKeys", function() { return getSelectedGroupKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedSetTotals", function() { return getSelectedSetTotals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThumbnails", function() { return getThumbnails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotations", function() { return getAnnotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusteringRange", function() { return getClusteringRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusteringSetting", function() { return getClusteringSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusteringResult", function() { return getClusteringResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_keys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reduce__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reselect__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(62);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};










// BASIC SELECTORS
var getPlotByOnX = function (state) { return state.selection.plotByOnX; };
var getPlotByOnY = function (state) { return state.selection.plotByOnY; };
var getClickedScatterPoints = function (state) { return state.selection.selectedPoints; };
var getSelectedGroups = function (state) { return state.selection.selectedGroups; };
var getColorBySelection = function (state) { return state.selection.colorBy; };
var getProteinColors = function (state) { return state.selection.proteinColors; };
var getSelectionSetColors = function (state) { return state.selection.selectedGroupColors; };
var getFiltersToExclude = function (state) { return state.selection.filterExclude; };
var getSelected3DCell = function (state) { return state.selection.cellSelectedFor3D; };
var getApplyColorToSelections = function (state) { return state.selection.applySelectionSetColoring; };
var getClustersOn = function (state) { return state.selection.showClusters; };
var getClusteringAlgorithm = function (state) { return state.selection.clusteringAlgorithm; };
var getNumberOfClusters = function (state) { return state.selection.numberOfClusters; };
var getClusteringDistance = function (state) { return state.selection.clusteringDistance; };
var getDownloadConfig = function (state) { return state.selection.downloadConfig; };
// COMPOSED SELECTORS
var getSelected3DCellFOV = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getSelected3DCell, __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getFileInfo"]], function (selected3DCellId, fileInfoArray) {
    var _a;
    var fileInfo = __WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(fileInfoArray, (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_7__constants__["d" /* CELL_ID_KEY */]] = selected3DCellId, _a));
    return fileInfo ? fileInfo[__WEBPACK_IMPORTED_MODULE_7__constants__["s" /* FOV_ID_KEY */]] : "";
});
var getSelected3DCellCellLine = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getSelected3DCell, __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getFileInfo"]], function (selected3DCellId, fileInfoArray) {
    var _a;
    var fileInfo = __WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(fileInfoArray, (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_7__constants__["d" /* CELL_ID_KEY */]] = selected3DCellId, _a));
    return fileInfo ? fileInfo[__WEBPACK_IMPORTED_MODULE_7__constants__["h" /* CELL_LINE_NAME_KEY */]] : "";
});
var getXValues = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getMeasuredData"], getPlotByOnX], function (measuredData, plotByOnX) { return (__WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(measuredData, function (metaDatum) { return (metaDatum[plotByOnX]); })); });
var getYValues = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getMeasuredData"], getPlotByOnY], function (measuredData, plotByOnY) { return (measuredData.map(function (metaDatum) { return (metaDatum[plotByOnY]); })); });
var getSelectedGroupsData = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getMeasuredData"],
    getSelectedGroups,
    getPlotByOnX,
    getPlotByOnY,
    getSelectionSetColors,
], function (measuredDataArray, selectedGroups, plotByOnX, plotByOnY, selectedGroupColorMapping) {
    var dataArray = __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default()(selectedGroups, function (value, key) {
        // for each point index, get x, y, and color for the point.
        return __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(value, function (pointIndex) {
            var measuredFeatures = measuredDataArray[pointIndex];
            return {
                groupColor: selectedGroupColorMapping[key],
                x: measuredFeatures[plotByOnX],
                y: measuredFeatures[plotByOnY],
            };
        });
    });
    // flatten into array
    var flattened = __WEBPACK_IMPORTED_MODULE_5_lodash_reduce___default()(dataArray, function (accum, value) {
        return __spread(accum, value);
    }, []);
    return {
        color: __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(flattened, "groupColor"),
        x: __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(flattened, "x"),
        y: __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(flattened, "y"),
    };
});
var getPossibleColorByData = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getFullMetaDataArray"]], function (metaData) { return (__WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(metaData, function (ele) {
    var _a;
    return (__assign({}, ele.measured_features, (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */]] = ele.file_info[__WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */]], _a)));
})); });
var getFilteredOpacity = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    getColorBySelection,
    getFiltersToExclude,
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getProteinLabels"],
], function (colorBySelection, filtersToExclude, proteinLabels) {
    return __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(proteinLabels, function (proteinName) { return (__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(filtersToExclude, proteinName) ? 0 : __WEBPACK_IMPORTED_MODULE_7__constants__["t" /* GENERAL_PLOT_SETTINGS */].unselectedCircleOpacity); });
});
var getOpacity = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    getColorBySelection,
    getFiltersToExclude,
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getProteinNames"],
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getProteinLabels"],
], function (colorBySelection, filtersToExclude, proteinNameArray, proteinLabels) {
    var arrayToMap;
    if (colorBySelection === __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */]) {
        arrayToMap = proteinNameArray;
    }
    else {
        arrayToMap = proteinLabels;
    }
    return __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(arrayToMap, function (proteinName) { return (__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(filtersToExclude, proteinName) ? 0 : __WEBPACK_IMPORTED_MODULE_7__constants__["t" /* GENERAL_PLOT_SETTINGS */].unselectedCircleOpacity); });
});
var getColorByValues = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getPossibleColorByData, getColorBySelection], function (metaData, colorBy) { return (__WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(metaData, colorBy)); });
var getMainPlotData = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    getXValues,
    getYValues,
    getColorByValues,
    getOpacity,
    getColorBySelection,
    getProteinColors,
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getProteinNames"],
], function (xValues, yValues, colorByValues, opacity, colorBy, proteinColors, proteinNames) {
    return {
        color: colorBy === __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */] ? null : colorByValues,
        groupBy: colorBy === __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */],
        groupSettings: colorBy === __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */] ? __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(proteinNames, function (name, index) {
            return {
                color: proteinColors[index],
                name: name,
                opacity: opacity[index],
            };
        }) : null,
        groups: colorByValues,
        opacity: opacity,
        x: xValues,
        y: yValues,
    };
});
var getSelectedGroupKeys = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getSelectedGroups], function (selectedGroups) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(selectedGroups);
});
var getSelectedSetTotals = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getSelectedGroups], function (selectedGroups) {
    return __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(selectedGroups, function (group) { return group.length; });
});
var getThumbnails = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getFileInfo"],
    getClickedScatterPoints,
], function (fileInfo, clickedScatterPointIndices) {
    return clickedScatterPointIndices.map(function (pointIndex) {
        var cellID = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["d" /* CELL_ID_KEY */]];
        var cellLineId = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["h" /* CELL_LINE_NAME_KEY */]];
        var fovId = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["s" /* FOV_ID_KEY */]];
        var src = "/" + cellLineId + "/" + cellLineId + "_" + fovId + "_" + cellID + ".png";
        return {
            cellID: cellID,
            pointIndex: pointIndex,
            src: src,
        };
    });
});
var getAnnotations = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getMeasuredData"],
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getFileInfo"],
    getClickedScatterPoints,
    getPlotByOnX,
    getPlotByOnY,
], function (measuredData, fileInfo, clickedScatterPointIndices, xaxis, yaxis) {
    return clickedScatterPointIndices.map(function (pointIndex) {
        var cellID = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["d" /* CELL_ID_KEY */]];
        var fovID = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["s" /* FOV_ID_KEY */]];
        var cellLine = fileInfo[pointIndex][__WEBPACK_IMPORTED_MODULE_7__constants__["h" /* CELL_LINE_NAME_KEY */]];
        var x = measuredData[pointIndex][xaxis];
        var y = measuredData[pointIndex][yaxis];
        return {
            cellID: cellID,
            cellLine: cellLine,
            fovID: fovID,
            pointIndex: pointIndex,
            x: x,
            y: y,
        };
    });
});
var getClusteringRange = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getClusterData"], getClusteringAlgorithm], function (clusterData, clusteringAlgorithm) {
    if (clusterData[0]) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(clusterData[0][clusteringAlgorithm]);
    }
    return [];
});
var getClusteringSetting = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getClusteringAlgorithm, getClusteringDistance, getNumberOfClusters], function (clusteringAlgorithm, distance, numberOfClusters) {
    var clusteringType = Object(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* CLUSTERING_MAP */])(clusteringAlgorithm);
    return clusteringType === __WEBPACK_IMPORTED_MODULE_7__constants__["k" /* CLUSTER_DISTANCE_KEY */] ? distance : numberOfClusters;
});
var getClusteringResult = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_8__metadata_selectors__["getClusterData"],
    getClusteringAlgorithm,
    getClusteringSetting,
    getXValues,
    getYValues,
    getFilteredOpacity,
], function (clusteringData, clusteringAlgorithm, clusterSetting, xValues, yValues, opacity) {
    return {
        color: __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(clusteringData, function (ele) { return ele[clusteringAlgorithm][clusterSetting]; }),
        opacity: opacity,
        x: xValues,
        y: yValues,
    };
});


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_AXIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SELECT_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DESELECT_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SELECT_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DESELECT_ALL_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TOGGLE_FILTER_BY_PROTEIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return OPEN_CELL_IN_3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TOGGLE_APPLY_SELECTION_SET_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DESELECT_GROUP_OF_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_CLUSTER_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_CLUSTERING_ALGORITHM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TOGGLE_CLUSTERS_VISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SELECT_DOWNLOAD_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DOWNLOAD_IMAGE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INITIAL_COLOR_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INITIAL_PLOT_BY_ON_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INITIAL_PLOT_BY_ON_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INITIAL_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return INITIAL_SELECTION_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CLUSTERING_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLUSTERING_LABEL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(43);
var _a;


var CHANGE_AXIS = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "deselect-file");
var SELECT_GROUP = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "select_group");
var DESELECT_POINT = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "deselect-point");
var SELECT_POINT = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "select-point");
var DESELECT_ALL_POINTS = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "deselect-all-points");
var TOGGLE_FILTER_BY_PROTEIN_NAME = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "toggle-filter-by-protein-name");
var OPEN_CELL_IN_3D = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "open-cell-in-3d");
var TOGGLE_APPLY_SELECTION_SET_COLOR = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "apply-selection-set-color");
var DESELECT_GROUP_OF_POINTS = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "deselect-group");
var CHANGE_CLUSTER_NUMBER = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "change-cluster-number");
var CHANGE_CLUSTERING_ALGORITHM = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "change-clustering-algorithm");
var TOGGLE_CLUSTERS_VISIBLE = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "toggle-clusters-on");
var SELECT_DOWNLOAD_ID = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "select-download-id");
var DOWNLOAD_IMAGE_DATA = Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* makeConstant */])("selection", "download-image");
var INITIAL_COLOR_BY = __WEBPACK_IMPORTED_MODULE_0__constants_index__["w" /* PROTEIN_NAME_KEY */];
var INITIAL_PLOT_BY_ON_X = "Nuclear Volume (fL)";
var INITIAL_PLOT_BY_ON_Y = "Cellular Volume (fL)";
var INITIAL_COLORS = [
    "#a6cee3",
    "#1f78b4",
    "#b2df8a",
    "#33a02c",
    "#fb9a99",
    "#e31a1c",
    "#fdbf6f",
    "#ff7f00",
    "#cab2d6",
    "#6a3d9a",
    "#ffff99",
    "#ff00de",
    "#24bcfa",
    "#84df11",
    "#ecc560",
    "#ff72ff",
    "#f58117",
    "#f8311b",
    "#5791db",
    "#98b0d6",
    "#11a89a",
    "#a70009",
    "#ff6200",
    "#fddb02",
    "#f7db78",
    "#b15928",
    "#f9a558",
];
var INITIAL_SELECTION_COLORS = [
    "#8dd3c7",
    "#ffffb3",
    "#bebada",
    "#fb8072",
    "#80b1d3",
    "#fdb462",
    "#b3de69",
    "#fccde5",
    "#d9d9d9",
    "#bc80bd",
    "#ccebc5",
    "#ffed6f",
];
var CLUSTERING_MAP = function (key) {
    var _a;
    var map = (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_index__["a" /* AGGLOMERATIVE_KEY */]] = __WEBPACK_IMPORTED_MODULE_0__constants_index__["l" /* CLUSTER_NUMBER_KEY */],
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_index__["n" /* DBSCAN_KEY */]] = __WEBPACK_IMPORTED_MODULE_0__constants_index__["k" /* CLUSTER_DISTANCE_KEY */],
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_index__["u" /* KMEANS_KEY */]] = __WEBPACK_IMPORTED_MODULE_0__constants_index__["l" /* CLUSTER_NUMBER_KEY */],
        _a);
    return map[key] || __WEBPACK_IMPORTED_MODULE_0__constants_index__["l" /* CLUSTER_NUMBER_KEY */];
};
var CLUSTERING_LABEL = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_0__constants_index__["l" /* CLUSTER_NUMBER_KEY */]] = "number of clusters",
    _a[__WEBPACK_IMPORTED_MODULE_0__constants_index__["k" /* CLUSTER_DISTANCE_KEY */]] = "distance between clusters",
    _a);


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(169);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _a;


var initialState = {
    cellLineDefs: {},
    featureData: [],
};
var actionToConfigMap = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* RECEIVE_METADATA */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* RECEIVE_METADATA */]; },
        perform: function (state, action) { return (__assign({}, state, { featureData: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* RECEIVE_CELL_LINE_DATA */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* RECEIVE_CELL_LINE_DATA */]; },
        perform: function (state, action) { return (__assign({}, state, { cellLineDefs: action.payload })); },
    },
    _a);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* makeReducer */])(actionToConfigMap, initialState));


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index__ = __webpack_require__(13);



/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logic__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata_selectors__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(62);





function createAnchorForHref(href) {
    var anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = "true";
    return anchor;
}
var downloadImageData = Object(__WEBPACK_IMPORTED_MODULE_0_redux_logic__["a" /* createLogic */])({
    process: function (deps) {
        var action = deps.action, getState = deps.getState;
        var state = getState();
        var fileInfoArray = Object(__WEBPACK_IMPORTED_MODULE_2__metadata_selectors__["getFileInfo"])(state);
        var fileInfoData = fileInfoArray[action.payload];
        var url = __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* DOWNLOAD_URL_PREFIX */] + "&id=" + Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* convertFileInfoToAICSId */])(fileInfoData);
        var anchor = createAnchorForHref(url);
        anchor.click();
    },
    type: __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* DOWNLOAD_IMAGE_DATA */],
});
/* harmony default export */ __webpack_exports__["a"] = ([
    downloadImageData,
]);


/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pickBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(62);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _a;





var initialState = {
    applySelectionSetColoring: true,
    cellSelectedFor3D: null,
    clusteringAlgorithm: __WEBPACK_IMPORTED_MODULE_2__constants__["u" /* KMEANS_KEY */],
    clusteringDistance: "",
    colorBy: __WEBPACK_IMPORTED_MODULE_4__constants__["k" /* INITIAL_COLOR_BY */],
    downloadConfig: {
        key: "",
        type: "",
    },
    filterExclude: [],
    numberOfClusters: "",
    plotByOnX: __WEBPACK_IMPORTED_MODULE_4__constants__["l" /* INITIAL_PLOT_BY_ON_X */],
    plotByOnY: __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* INITIAL_PLOT_BY_ON_Y */],
    proteinColors: __WEBPACK_IMPORTED_MODULE_4__constants__["j" /* INITIAL_COLORS */],
    selectedGroupColors: {},
    selectedGroups: {},
    selectedPoints: [],
    showClusters: false,
};
var actionToConfigMap = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* CHANGE_AXIS */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* CHANGE_AXIS */]; },
        perform: function (state, action) {
            var _a;
            return (__assign({}, state, (_a = {}, _a[action.axisId] = action.payload, _a)));
        },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["o" /* OPEN_CELL_IN_3D */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["o" /* OPEN_CELL_IN_3D */]; },
        perform: function (state, action) { return (__assign({}, state, { cellSelectedFor3D: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["q" /* SELECT_GROUP */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["q" /* SELECT_GROUP */]; },
        perform: function (state, action) {
            var _a, _b;
            return (__assign({}, state, { selectedGroupColors: __assign({}, state.selectedGroupColors, (_a = {}, _a[action.key] = __WEBPACK_IMPORTED_MODULE_4__constants__["n" /* INITIAL_SELECTION_COLORS */].splice(0, 1)[0], _a)), selectedGroups: __assign({}, state.selectedGroups, (_b = {}, _b[action.key] = action.payload, _b)) }));
        },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["g" /* DESELECT_GROUP_OF_POINTS */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* DESELECT_GROUP_OF_POINTS */]; },
        perform: function (state, action) { return (__assign({}, state, { selectedGroupColors: __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default()(state.selectedGroupColors, function (value, key) { return key.toString() !== action.payload.toString(); }), selectedGroups: __WEBPACK_IMPORTED_MODULE_1_lodash_pickBy___default()(state.selectedGroups, function (value, key) { return key.toString() !== action.payload.toString(); }) })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["h" /* DESELECT_POINT */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["h" /* DESELECT_POINT */]; },
        perform: function (state, action) { return (__assign({}, state, { selectedPoints: __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default()(state.selectedPoints, function (e) { return e !== action.payload; }) })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["r" /* SELECT_POINT */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["r" /* SELECT_POINT */]; },
        perform: function (state, action) { return (__assign({}, state, { selectedPoints: __spread(state.selectedPoints, [action.payload]) })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["f" /* DESELECT_ALL_POINTS */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* DESELECT_ALL_POINTS */]; },
        perform: function (state, action) { return (__assign({}, state, { selectedPoints: __spread(initialState.selectedPoints) })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["u" /* TOGGLE_FILTER_BY_PROTEIN_NAME */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["u" /* TOGGLE_FILTER_BY_PROTEIN_NAME */]; },
        perform: function (state, action) { return (__assign({}, state, { filterExclude: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["s" /* TOGGLE_APPLY_SELECTION_SET_COLOR */]] = {
        accepts: function (action) {
            return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["s" /* TOGGLE_APPLY_SELECTION_SET_COLOR */];
        },
        perform: function (state, action) { return (__assign({}, state, { applySelectionSetColoring: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* CHANGE_CLUSTERING_ALGORITHM */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* CHANGE_CLUSTERING_ALGORITHM */]; },
        perform: function (state, action) { return (__assign({}, state, { clusteringAlgorithm: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* CHANGE_CLUSTER_NUMBER */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* CHANGE_CLUSTER_NUMBER */]; },
        perform: function (state, action) {
            var _a;
            return (__assign({}, state, (_a = {}, _a[action.clusteringKey] = action.payload, _a)));
        },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["t" /* TOGGLE_CLUSTERS_VISIBLE */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["t" /* TOGGLE_CLUSTERS_VISIBLE */]; },
        perform: function (state, action) { return (__assign({}, state, { showClusters: action.payload })); },
    },
    _a[__WEBPACK_IMPORTED_MODULE_4__constants__["p" /* SELECT_DOWNLOAD_ID */]] = {
        accepts: function (action) { return action.type === __WEBPACK_IMPORTED_MODULE_4__constants__["p" /* SELECT_DOWNLOAD_ID */]; },
        perform: function (state, action) { return (__assign({}, state, { downloadConfig: action.payload })); },
    },
    _a);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeReducer */])(actionToConfigMap, initialState));


/***/ }),

/***/ 661:
/***/ (function(module, exports) {



/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InteractiveRow__ = __webpack_require__(663);



var BarChart = function (props) {
    var closeable = props.closeable, downloadUrls = props.downloadUrls, handleCloseSelectionSet = props.handleCloseSelectionSet, handleDownload = props.handleDownload, downloadConfig = props.downloadConfig, hideable = props.hideable, onBarClicked = props.onBarClicked, panelData = props.panelData;
    return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(panelData, function (item) {
        return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InteractiveRow__["a" /* default */], { key: item.name, closeable: closeable, checked: item.checked, hideable: hideable, color: item.color, name: item.name, total: item.total, id: item.id, onBarClicked: onBarClicked, handleClose: handleCloseSelectionSet, handleDownload: handleDownload, downloadUrls: downloadUrls, downloadConfig: downloadConfig }));
    })));
};
/* harmony default export */ __webpack_exports__["a"] = (BarChart);


/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_badge__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_badge_style_index_js__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_button__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_button_style_index_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_checkbox__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_checkbox_style_index_js__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DownloadDropDownMenu__ = __webpack_require__(671);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var styles = __webpack_require__(722);
var InteractiveRow = /** @class */ (function (_super) {
    __extends(InteractiveRow, _super);
    function InteractiveRow(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }
    InteractiveRow.prototype.onClose = function (_a) {
        var currentTarget = _a.currentTarget;
        var handleClose = this.props.handleClose;
        if (currentTarget && currentTarget.id && handleClose) {
            handleClose(currentTarget.id);
        }
    };
    InteractiveRow.prototype.render = function () {
        var _a = this.props, closeable = _a.closeable, hideable = _a.hideable, id = _a.id, color = _a.color, name = _a.name, total = _a.total, onBarClicked = _a.onBarClicked, checked = _a.checked, downloadUrls = _a.downloadUrls, downloadConfig = _a.downloadConfig, handleDownload = _a.handleDownload;
        return (__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", { className: styles.container },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", { className: styles.firstColumn },
                hideable &&
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_checkbox__["a" /* default */], { onChange: onBarClicked, value: id, defaultChecked: true, checked: checked }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_badge__["a" /* default */], { style: {
                        backgroundColor: color,
                        padding: 4,
                    }, dot: true }),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: styles.label }, name)),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", null,
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: styles.label }, total),
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__DownloadDropDownMenu__["a" /* default */], { color: color, id: id, name: name, total: total, downloadConfig: downloadConfig, downloadUrls: downloadUrls, handleDownload: handleDownload }),
                closeable &&
                    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_button__["a" /* default */], { icon: "close", size: "small", id: id, ghost: true, onClick: this.onClose }))));
    };
    InteractiveRow.defaultProps = {
        closeable: false,
        downloadUrls: [],
        hideable: true,
    };
    return InteractiveRow;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (InteractiveRow);


/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_button__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_button_style_index_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_dropdown__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_dropdown_style_index_js__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_icon_style_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_es_menu__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_es_menu_style_index_js__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniq__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};











var styles = __webpack_require__(721);
var LOCAL_STORAGE_KEY = "alreadyDownloaded";
var DownloadDropDownMenu = /** @class */ (function (_super) {
    __extends(DownloadDropDownMenu, _super);
    function DownloadDropDownMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.onClose = _this.onClose.bind(_this);
        _this.onDownload = _this.onDownload.bind(_this);
        _this.saveDownloadUrl = _this.saveDownloadUrl.bind(_this);
        _this.handleMenuClick = _this.handleMenuClick.bind(_this);
        _this.handleDownloadMenuVisibleChange = _this.handleDownloadMenuVisibleChange.bind(_this);
        _this.state = {
            alreadyDownloaded: localStorage.getItem(LOCAL_STORAGE_KEY) ?
                JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {},
            downloadMenuVisible: false,
        };
        return _this;
    }
    DownloadDropDownMenu.prototype.onClose = function (_a) {
        var currentTarget = _a.currentTarget;
        var handleClose = this.props.handleClose;
        if (currentTarget && currentTarget.id && handleClose) {
            handleClose(currentTarget.id);
        }
    };
    DownloadDropDownMenu.prototype.onDownload = function (_a) {
        var currentTarget = _a.currentTarget;
        var handleDownload = this.props.handleDownload;
        if (currentTarget && currentTarget.id && handleDownload) {
            handleDownload(currentTarget.id);
        }
    };
    DownloadDropDownMenu.prototype.saveDownloadUrl = function (clickedLink) {
        var _a, _b;
        var downloadConfig = this.props.downloadConfig;
        var alreadyDownloaded = this.state.alreadyDownloaded;
        var thisAlreadyDownloaded = alreadyDownloaded[downloadConfig.key];
        if (thisAlreadyDownloaded) {
            this.setState({
                alreadyDownloaded: __assign({}, alreadyDownloaded, (_a = {}, _a[downloadConfig.key] = __WEBPACK_IMPORTED_MODULE_9_lodash_uniq___default()(__spread(thisAlreadyDownloaded, [clickedLink.key])), _a)),
            });
        }
        else {
            this.setState({
                alreadyDownloaded: __assign({}, alreadyDownloaded, (_b = {}, _b[downloadConfig.key] = [clickedLink.key], _b)),
            });
        }
    };
    DownloadDropDownMenu.prototype.handleDownloadMenuVisibleChange = function (flag) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.alreadyDownloaded));
        this.setState({ downloadMenuVisible: !!flag }); // for typescript, to convert undefined to false
    };
    DownloadDropDownMenu.prototype.handleMenuClick = function () {
        var _a = this.props, downloadUrls = _a.downloadUrls, downloadConfig = _a.downloadConfig;
        var alreadyDownloaded = this.state.alreadyDownloaded[downloadConfig.key];
        // if they've already downloaded the set, or are clicking on the last link, close the menu
        // otherwise leave it open to make it easy to download the set.
        if (alreadyDownloaded && alreadyDownloaded.length === downloadUrls.length) {
            this.setState({ downloadMenuVisible: false });
        }
    };
    DownloadDropDownMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, downloadUrls = _a.downloadUrls, downloadConfig = _a.downloadConfig;
        var alreadyDownloaded = this.state.alreadyDownloaded[downloadConfig.key];
        var menu = (__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_es_menu__["a" /* default */], { onClick: this.handleMenuClick }, downloadUrls.map(function (url, index) {
            return (__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_es_menu__["a" /* default */].Item, { key: index, onClick: _this.saveDownloadUrl },
                __WEBPACK_IMPORTED_MODULE_8_lodash_includes___default()(alreadyDownloaded, index.toString()) ?
                    __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_icon__["a" /* default */], { type: "check" }) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_icon__["a" /* default */], { type: "download" }),
                __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", { href: url },
                    " data chunk ",
                    index + 1,
                    " ")));
        })));
        return (__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", { className: styles.container },
            __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_dropdown__["a" /* default */], { overlay: menu, trigger: ["click"], onVisibleChange: this.handleDownloadMenuVisibleChange, visible: this.state.downloadMenuVisible },
                __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_button__["a" /* default */], { size: "small", className: "ant-dropdown-link", id: id, onClick: this.onDownload },
                    __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_icon__["a" /* default */], { type: "download" })))));
    };
    DownloadDropDownMenu.defaultProps = {
        closeable: false,
        downloadUrls: [],
        hideable: true,
    };
    return DownloadDropDownMenu;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (DownloadDropDownMenu);


/***/ }),

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style__container--1QLpn"};

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style__container--2a80r","label":"style__label--qfuCJ","first-column":"style__first-column--3dKE9","firstColumn":"style__first-column--3dKE9"};

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_col__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_col_style_index_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_row__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_row_style_index_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_switch__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_switch_style_index_js__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);







var styles = __webpack_require__(729);
var ColorBySwitcher = function (props) {
    return props.includeCol ? (__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_row__["a" /* default */], { className: styles.colorByRow, type: "flex", align: "middle" },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_col__["a" /* default */], { span: props.includeCol },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("label", { className: styles.label }, "Color by:"),
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_switch__["a" /* default */], { className: styles.colorBySwitch, defaultChecked: props.defaultChecked, checkedChildren: props.checkedChildren, unCheckedChildren: props.unCheckedChildren, onChange: props.handleChange })),
        props.children)) : (__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_row__["a" /* default */], { className: styles.colorByRow, type: "flex", align: "middle" },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("label", { className: styles.label }, props.label),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_switch__["a" /* default */], { className: styles.colorBySwitch, defaultChecked: props.defaultChecked, onChange: props.handleChange })));
};
/* harmony default export */ __webpack_exports__["a"] = (ColorBySwitcher);


/***/ }),

/***/ 729:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"color-by-switch":"style__color-by-switch--LlTQq","colorBySwitch":"style__color-by-switch--LlTQq","color-by-row":"style__color-by-row--2738P","colorByRow":"style__color-by-row--2738P","label":"style__label--3W_cl"};

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_col__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_col_style_index_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_row__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_row_style_index_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_slider__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_slider_style_index_js__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_reduce__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var SliderWithCustomMarks = /** @class */ (function (_super) {
    __extends(SliderWithCustomMarks, _super);
    function SliderWithCustomMarks(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value) {
            var valueOptions = _this.props.valueOptions;
            // SliderValue can be [number, number]
            _this.setState({
                inputValue: value,
            });
            _this.props.onValueChange(valueOptions[value]);
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.state = {
            inputValue: props.initIndex || 0,
        };
        return _this;
    }
    SliderWithCustomMarks.prototype.componentDidUpdate = function (prevProps) {
        var initIndex = this.props.initIndex;
        if (prevProps.initIndex !== initIndex) {
            this.setState({ inputValue: initIndex });
        }
    };
    SliderWithCustomMarks.prototype.render = function () {
        var inputValue = this.state.inputValue;
        var _a = this.props, disabled = _a.disabled, label = _a.label, valueOptions = _a.valueOptions;
        var tip = function (value) { return valueOptions[value].slice(0, 2); };
        if (disabled) {
            return null;
        }
        var accInit = {};
        var marks = __WEBPACK_IMPORTED_MODULE_6_lodash_reduce___default()(valueOptions, function (acc, cur, index) {
            acc[index] = Math.round(Number(cur));
            return acc;
        }, accInit);
        return (__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_row__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_col__["a" /* default */], { span: 6 },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", null, label)),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_col__["a" /* default */], { span: 14 },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_es_slider__["a" /* default */], { min: 0, max: valueOptions.length - 1, onChange: this.onChange, step: 1, tipFormatter: tip, value: typeof inputValue === "number" ? inputValue : 0, marks: marks }))));
    };
    return SliderWithCustomMarks;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (SliderWithCustomMarks);


/***/ }),

/***/ 748:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"plot-by-on-x":"style__plot-by-on-x--2opAx","plotByOnX":"style__plot-by-on-x--2opAx","plot-by-on-y":"style__plot-by-on-y--2d4YU","plotByOnY":"style__plot-by-on-y--2d4YU"};

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCheckAllCheckboxIsIntermediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getInteractivePanelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectionPanelData; });
/* unused harmony export getListOfCellIdsByDownloadConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUrlFromListOfIds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_chunk__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_chunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_chunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_values__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reselect__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_util__ = __webpack_require__(43);










var getCheckAllCheckboxIsIntermediate = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getFiltersToExclude"], __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getProteinNames"]], function (filtersToExclude, allProteinNames) {
    return filtersToExclude.length > 0 && filtersToExclude.length !== allProteinNames.length;
});
var getColors = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getColorBySelection"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getProteinColors"], __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getProteinNames"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getFiltersToExclude"]], function (colorBy, proteinColors, proteinNames, filtersToExclude) {
    return colorBy === __WEBPACK_IMPORTED_MODULE_6__constants_index__["w" /* PROTEIN_NAME_KEY */] ?
        proteinNames
            .map(function (ele, index) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(filtersToExclude, ele) ? __WEBPACK_IMPORTED_MODULE_6__constants_index__["v" /* OFF_COLOR */] : proteinColors[index];
        }) :
        proteinNames
            .map(function (ele, index) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(filtersToExclude, ele) ? __WEBPACK_IMPORTED_MODULE_6__constants_index__["v" /* OFF_COLOR */] : __WEBPACK_IMPORTED_MODULE_6__constants_index__["o" /* DISABLE_COLOR */];
        });
});
var getInteractivePanelData = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getProteinNames"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getFiltersToExclude"], __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getProteinTotals"], getColors], function (proteinNames, filtersToExclude, proteinTotals, proteinColors) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(proteinTotals, function (total, index) {
        return {
            checked: !__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(filtersToExclude, proteinNames[index]),
            color: proteinColors[index],
            id: proteinNames[index],
            name: proteinNames[index],
            total: total,
        };
    });
});
var getSelectionPanelData = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([__WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getApplyColorToSelections"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getSelectionSetColors"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getSelectedGroupKeys"], __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getSelectedSetTotals"]], function (applyColorToSelections, selectedSetColors, selectedSetNames, selectedSetTotals) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(selectedSetNames, function (name, index) {
        var color = applyColorToSelections ? __WEBPACK_IMPORTED_MODULE_4_lodash_values___default()(selectedSetColors)[index] : __WEBPACK_IMPORTED_MODULE_6__constants_index__["o" /* DISABLE_COLOR */];
        var displayName = Number(name) ? index : name;
        return {
            color: color,
            id: name.toString(),
            name: displayName.toString(),
            total: selectedSetTotals[index],
        };
    });
});
var getListOfCellIdsByDownloadConfig = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getProteinNames"],
    __WEBPACK_IMPORTED_MODULE_7__state_metadata_selectors__["getFileInfo"],
    __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getDownloadConfig"],
    __WEBPACK_IMPORTED_MODULE_8__state_selection_selectors__["getSelectedGroups"],
], function (proteinNames, fileInfo, downloadConfig, selectedGroups) {
    var returnArray = [];
    if (downloadConfig.type === __WEBPACK_IMPORTED_MODULE_6__constants_index__["p" /* DOWNLOAD_CONFIG_TYPE_PROTEIN */]) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(fileInfo, function (acc, cur) {
            if (cur[__WEBPACK_IMPORTED_MODULE_6__constants_index__["w" /* PROTEIN_NAME_KEY */]] === downloadConfig.key) {
                acc.push(Object(__WEBPACK_IMPORTED_MODULE_9__state_util__["a" /* convertFileInfoToAICSId */])(cur));
            }
            return acc;
        }, returnArray);
    }
    else if (downloadConfig.type === __WEBPACK_IMPORTED_MODULE_6__constants_index__["q" /* DOWNLOAD_CONFIG_TYPE_SELECTION_SET */]) {
        var selectedIndices_1 = selectedGroups[downloadConfig.key];
        return __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(fileInfo, function (acc, cur, index) {
            if (__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(selectedIndices_1, index)) {
                acc.push(Object(__WEBPACK_IMPORTED_MODULE_9__state_util__["a" /* convertFileInfoToAICSId */])(cur));
            }
            return acc;
        }, returnArray);
    }
    return returnArray;
});
var createUrlFromListOfIds = Object(__WEBPACK_IMPORTED_MODULE_5_reselect__["createSelector"])([getListOfCellIdsByDownloadConfig], function (cellIdsToDownload) {
    var chunkSize = 340;
    var chunksOfIds = __WEBPACK_IMPORTED_MODULE_0_lodash_chunk___default()(cellIdsToDownload, chunkSize);
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(chunksOfIds, function (listOfIds) { return ("" + __WEBPACK_IMPORTED_MODULE_6__constants_index__["r" /* DOWNLOAD_URL_PREFIX */] + __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(listOfIds, function (cellId) { return "&id=" + cellId; }).join("")); });
});


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullMetaDataArray", function() { return getFullMetaDataArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullCellLineDefs", function() { return getFullCellLineDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeasuredData", function() { return getMeasuredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusterData", function() { return getClusterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatureNames", function() { return getFeatureNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinLabels", function() { return getProteinLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinNames", function() { return getProteinNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinTotals", function() { return getProteinTotals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClusterNames", function() { return getClusterNames; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_keys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_uniq__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_values__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reselect__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(13);








// BASIC SELECTORS
var getFullMetaDataArray = function (state) { return state.metadata.featureData; };
var getFullCellLineDefs = function (state) { return state.metadata.cellLineDefs; };
var getFileInfo = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFullMetaDataArray], function (fullMetaData) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(fullMetaData, "file_info");
});
var getMeasuredData = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFullMetaDataArray], function (fullMetaData) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(fullMetaData, "measured_features");
});
var getClusterData = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFullMetaDataArray], function (fullMetaData) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(fullMetaData, "clusters");
});
var getFeatureNames = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getMeasuredData], function (measuredFeatures) { return (__WEBPACK_IMPORTED_MODULE_1_lodash_keys___default()(measuredFeatures[0])); });
var getProteinLabels = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFileInfo], function (fullMetaData) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(fullMetaData, __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */]);
});
var getProteinNames = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFileInfo], function (fileInfo) {
    return __WEBPACK_IMPORTED_MODULE_4_lodash_uniq___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_map___default()((fileInfo), __WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */])).sort(function (a, b) {
        if (b > a) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    });
});
var getProteinTotals = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getFileInfo, getProteinNames], function (featureData, proteinNames) {
    var totals = __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(featureData, function (acc, cur) {
        var index = proteinNames.indexOf(cur[__WEBPACK_IMPORTED_MODULE_7__constants__["w" /* PROTEIN_NAME_KEY */]]);
        if (acc[index]) {
            acc[index]++;
        }
        else {
            acc[index] = 1;
        }
        return acc;
    }, {});
    return __WEBPACK_IMPORTED_MODULE_5_lodash_values___default()(totals);
});
var getClusterNames = Object(__WEBPACK_IMPORTED_MODULE_6_reselect__["createSelector"])([getClusterData], function (clusterData) { return (__WEBPACK_IMPORTED_MODULE_1_lodash_keys___default()(clusterData[0])); });


/***/ }),

/***/ 753:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"color-by-row":"style__color-by-row--3RQTv","colorByRow":"style__color-by-row--3RQTv","bar-chart-header":"style__bar-chart-header--2oblB","barChartHeader":"style__bar-chart-header--2oblB"};

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_MainPlot__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_metadata__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_selection__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AxisDropDown__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selectors__ = __webpack_require__(759);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var styles = __webpack_require__(760);
var MainPlotContainer = /** @class */ (function (_super) {
    __extends(MainPlotContainer, _super);
    function MainPlotContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.onPointClicked = _this.onPointClicked.bind(_this);
        _this.onGroupSelected = _this.onGroupSelected.bind(_this);
        return _this;
    }
    MainPlotContainer.prototype.componentWillMount = function () {
        this.props.requestCellLineData();
    };
    MainPlotContainer.prototype.onPointClicked = function (clicked) {
        var points = clicked.points;
        var _a = this.props, clickedPoints = _a.clickedPoints, handleSelectPoint = _a.handleSelectPoint, handleDeselectPoint = _a.handleDeselectPoint;
        points.forEach(function (point) {
            if (point.data.name === __WEBPACK_IMPORTED_MODULE_6__constants__["x" /* SCATTER_PLOT_NAME */]) {
                if (__WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(clickedPoints, point.pointIndex)) {
                    handleDeselectPoint(point.pointIndex);
                }
                else {
                    handleSelectPoint(point.pointIndex);
                }
            }
        });
    };
    MainPlotContainer.prototype.onGroupSelected = function (eventData) {
        var points = eventData.points;
        var _a = this.props, handleSelectGroupOfPoints = _a.handleSelectGroupOfPoints, handleSelectionToolUsed = _a.handleSelectionToolUsed;
        var key = Date.now().valueOf().toString();
        var payload = __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_filter___default()(points, function (ele) { return ele.data.name === __WEBPACK_IMPORTED_MODULE_6__constants__["x" /* SCATTER_PLOT_NAME */]; }), "pointIndex");
        handleSelectGroupOfPoints(key, payload);
        handleSelectionToolUsed();
    };
    MainPlotContainer.prototype.render = function () {
        var _a = this.props, annotations = _a.annotations, plotDataArray = _a.plotDataArray;
        if (plotDataArray.length === 0) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { id: "main-plot", className: styles.container },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__AxisDropDown__["a" /* default */], { axisId: __WEBPACK_IMPORTED_MODULE_6__constants__["A" /* X_AXIS_ID */] }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__AxisDropDown__["a" /* default */], { axisId: __WEBPACK_IMPORTED_MODULE_6__constants__["B" /* Y_AXIS_ID */] }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_MainPlot__["a" /* default */], { plotDataArray: plotDataArray, onPointClicked: this.onPointClicked, annotations: annotations, onGroupSelected: this.onGroupSelected })));
    };
    return MainPlotContainer;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));
function mapStateToProps(state) {
    return {
        annotations: __WEBPACK_IMPORTED_MODULE_8__state_selection__["a" /* default */].selectors.getAnnotations(state),
        clickedPoints: __WEBPACK_IMPORTED_MODULE_8__state_selection__["a" /* default */].selectors.getClickedScatterPoints(state),
        plotDataArray: Object(__WEBPACK_IMPORTED_MODULE_10__selectors__["a" /* getScatterPlotDataArray */])(state),
    };
}
var dispatchToPropsMap = {
    handleDeselectPoint: __WEBPACK_IMPORTED_MODULE_8__state_selection__["a" /* default */].actions.deselectPoint,
    handleSelectGroupOfPoints: __WEBPACK_IMPORTED_MODULE_8__state_selection__["a" /* default */].actions.selectGroupOfPoints,
    handleSelectPoint: __WEBPACK_IMPORTED_MODULE_8__state_selection__["a" /* default */].actions.selectPoint,
    requestCellLineData: __WEBPACK_IMPORTED_MODULE_7__state_metadata__["a" /* default */].actions.requestCellLineData,
    requestFeatureData: __WEBPACK_IMPORTED_MODULE_7__state_metadata__["a" /* default */].actions.requestFeatureData,
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps, dispatchToPropsMap)(MainPlotContainer));


/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_plotly_js__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_plotly_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var MainPlot = /** @class */ (function (_super) {
    __extends(MainPlot, _super);
    function MainPlot(props) {
        var _this = _super.call(this, props) || this;
        _this.makeAnnotations = _this.makeAnnotations.bind(_this);
        _this.clickedAnnotation = _this.clickedAnnotation.bind(_this);
        _this.state = {
            layout: {
                annotations: _this.makeAnnotations(),
                autosize: true,
                hovermode: "closest",
                legend: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].legend,
                margin: {
                    b: 30,
                    r: 20,
                    t: 10,
                },
                paper_bgcolor: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].backgroundColor,
                plot_bgcolor: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].backgroundColor,
                xaxis: MainPlot.makeAxis([0, 0.85], ".1f", false),
                xaxis2: MainPlot.makeAxis([0.86, 1], "f", true),
                yaxis: MainPlot.makeAxis([0, 0.85], ".1f", false),
                yaxis2: MainPlot.makeAxis([0.86, 1], "f", true),
            },
            showFullAnnotation: true,
        };
        return _this;
    }
    MainPlot.makeAxis = function (domain, hoverformat, zeroline) {
        return {
            color: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].textColor,
            domain: domain,
            hoverformat: hoverformat,
            linecolor: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].textColor,
            showgrid: false,
            tickcolor: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].textColor,
            zeroline: zeroline,
        };
    };
    MainPlot.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.annotations.length !== this.props.annotations.length) {
            this.setState({ layout: __assign({}, this.state.layout, { annotations: this.makeAnnotations() }) });
        }
    };
    MainPlot.prototype.clickedAnnotation = function () {
        this.setState({ showFullAnnotation: false });
    };
    MainPlot.prototype.makeAnnotations = function () {
        var _this = this;
        var annotations = this.props.annotations;
        return annotations.map(function (point, index) {
            var lastOne = index + 1 === annotations.length;
            var show = lastOne && _this.state.showFullAnnotation;
            return {
                arrowcolor: "#fff",
                arrowhead: 6,
                ax: 0,
                ay: show ? -80 : 0,
                bgcolor: "#a4a2a45c",
                bordercolor: "#fff",
                borderpad: show ? 4 : 0,
                borderwidth: 1,
                captureevents: true,
                cellID: point.cellID,
                cellLine: point.cellLine,
                font: {
                    color: "#ffffff",
                    family: "tahoma, arial, verdana, sans-serif",
                    size: 11,
                },
                fovID: point.fovID,
                pointIndex: point.pointIndex,
                // TODO full AICS cell name?
                text: show ? "Cell " + point.cellID + "<br><i>click \"3D\" button in gallery to load in 3D</i>" : "",
                x: point.x,
                y: point.y,
            };
        });
    };
    MainPlot.prototype.render = function () {
        var _a = this.props, onPointClicked = _a.onPointClicked, onGroupSelected = _a.onGroupSelected, plotDataArray = _a.plotDataArray;
        var options = {
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: [
                // literal typing to avoid a widened type inferred
                "sendDataToCloud",
                "toImage",
                "resetScale2d",
                "hoverClosestCartesian",
                "hoverCompareCartesian",
                "toggleSpikelines",
            ],
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_plotly_js___default.a, { data: plotDataArray, useResizeHandler: true, layout: this.state.layout, config: options, onClick: onPointClicked, onClickAnnotation: this.clickedAnnotation, onSelected: onGroupSelected }));
    };
    return MainPlot;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (MainPlot);


/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export composePlotlyData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScatterPlotDataArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__ = __webpack_require__(59);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




function isGrouped(plotData) {
    return plotData.groupBy === true;
}
var composePlotlyData = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])([
    __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__["getMainPlotData"],
    __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__["getApplyColorToSelections"],
    __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__["getClustersOn"],
    __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__["getSelectedGroupsData"],
    __WEBPACK_IMPORTED_MODULE_3__state_selection_selectors__["getClusteringResult"],
], function (mainPlotDataValues, applyColorToSelections, showClusters, selectedGroups, clusteringResultData) {
    var mainPlotData = __assign({}, mainPlotDataValues, { groupSettings: isGrouped(mainPlotDataValues) ? __assign({}, mainPlotDataValues.groupSettings) : null, plotName: __WEBPACK_IMPORTED_MODULE_2__constants__["x" /* SCATTER_PLOT_NAME */] });
    var selectedGroupPlotData = applyColorToSelections ? __assign({}, selectedGroups, { groupBy: false, plotName: __WEBPACK_IMPORTED_MODULE_2__constants__["y" /* SELECTIONS_PLOT_NAME */] }) : null;
    var clusteringPlotData = showClusters ? __assign({}, clusteringResultData, { groupBy: false, plotName: __WEBPACK_IMPORTED_MODULE_2__constants__["j" /* CLUSTERS_PLOT_NAME */] }) : null;
    return {
        clusteringPlotData: clusteringPlotData,
        mainPlotData: mainPlotData,
        selectedGroupPlotData: selectedGroupPlotData,
    };
});
function colorSettings(plotSettings, plotData) {
    if (isGrouped(plotData)) {
        return __assign({}, plotSettings, { transforms: [{
                    groups: plotData.groups,
                    nameformat: "%{group}",
                    styles: __WEBPACK_IMPORTED_MODULE_0_lodash_map___default()(plotData.groupSettings, function (ele, index) {
                        return {
                            target: ele.name,
                            value: {
                                marker: {
                                    color: ele.color,
                                    opacity: ele.opacity,
                                }
                            },
                        };
                    }),
                    // literal typing to avoid a widened type inferred
                    type: "groupby",
                },
            ] });
    }
    return __assign({}, plotSettings, { marker: __assign({}, plotSettings.marker, { color: plotData.color, opacity: plotData.opacity || __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].unselectedCircleOpacity }) });
}
function makeScatterPlotData(plotData) {
    var plotSettings = {
        marker: {
            size: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].circleRadius,
            symbol: "circle",
        },
        // literal typing to avoid a widened type inferred
        mode: "markers",
        name: plotData.plotName,
        showlegend: false,
        // literal typing to avoid a widened type inferred
        type: "scattergl",
        x: plotData.x,
        y: plotData.y,
        z: [],
    };
    return colorSettings(plotSettings, plotData);
}
function makeHistogramPlotX(data) {
    return {
        marker: {
            color: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].histogramColor,
            line: {
                color: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].textColor,
                width: 1,
            },
        },
        name: "x histogram",
        nbinsx: 60,
        showlegend: false,
        // literal typing to avoid a widened type inferred
        type: "histogram",
        x: data,
        yaxis: "y2",
    };
}
function makeHistogramPlotY(data) {
    return {
        marker: {
            color: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].histogramColor,
            line: {
                color: __WEBPACK_IMPORTED_MODULE_2__constants__["t" /* GENERAL_PLOT_SETTINGS */].textColor,
                width: 1,
            },
        },
        name: "y histogram",
        nbinsy: 60,
        showlegend: false,
        // literal typing to avoid a widened type inferred
        type: "histogram",
        xaxis: "x2",
        y: data,
    };
}
var getScatterPlotDataArray = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])([composePlotlyData], function (allPlotData) {
    var mainPlotData = allPlotData.mainPlotData, selectedGroupPlotData = allPlotData.selectedGroupPlotData, clusteringPlotData = allPlotData.clusteringPlotData;
    var data = [
        makeHistogramPlotX(mainPlotData.x),
        makeHistogramPlotY(mainPlotData.y),
        makeScatterPlotData(mainPlotData),
    ];
    if (clusteringPlotData) {
        data.push(makeScatterPlotData(clusteringPlotData));
    }
    if (selectedGroupPlotData) {
        data.push(makeScatterPlotData(selectedGroupPlotData));
    }
    return data;
});


/***/ }),

/***/ 760:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style__container--3YOZp"};

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_button__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_button_style_index_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_icon_style_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_es_list__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_es_list_style_index_js__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GalleryCard__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_selection_actions__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__state_selection_selectors__ = __webpack_require__(59);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var styles = __webpack_require__(803);
var ThumbnailGallery = /** @class */ (function (_super) {
    __extends(ThumbnailGallery, _super);
    function ThumbnailGallery(props) {
        var _this = _super.call(this, props) || this;
        _this.renderGalleryCard = _this.renderGalleryCard.bind(_this);
        return _this;
    }
    ThumbnailGallery.prototype.render = function () {
        var _a = this.props, data = _a.data, handleClearAllSelectedPoints = _a.handleClearAllSelectedPoints;
        return (__WEBPACK_IMPORTED_MODULE_6_react__["createElement"]("div", { id: "gallery" },
            __WEBPACK_IMPORTED_MODULE_6_react__["createElement"]("section", { className: styles.galleryHeader },
                __WEBPACK_IMPORTED_MODULE_6_react__["createElement"]("h3", null,
                    __WEBPACK_IMPORTED_MODULE_6_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { type: "picture" }),
                    " Thumbnail gallery"),
                data.length > 0 ?
                    __WEBPACK_IMPORTED_MODULE_6_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_antd_es_button__["a" /* default */], { type: "primary", icon: "close", onClick: handleClearAllSelectedPoints }, "Clear All") : __WEBPACK_IMPORTED_MODULE_6_react__["createElement"]("h4", null, "Clicked points on the plot will appear in this section")),
            __WEBPACK_IMPORTED_MODULE_6_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_es_list__["a" /* default */], { grid: { gutter: 8, xs: 1, sm: 2, md: 4, lg: 6, xl: 12 }, dataSource: data.length > 0 ? data : [{ empty: true }], renderItem: this.renderGalleryCard })));
    };
    ThumbnailGallery.prototype.renderGalleryCard = function (item) {
        var _a = this.props, handleDeselectPoint = _a.handleDeselectPoint, handleDownloadImage = _a.handleDownloadImage, handleOpenIn3D = _a.handleOpenIn3D;
        return (__WEBPACK_IMPORTED_MODULE_6_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_es_list__["a" /* default */].Item, null,
            __WEBPACK_IMPORTED_MODULE_6_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__components_GalleryCard__["a" /* default */], { empty: item.empty, title: item.cellID, src: item.src, pointIndex: item.pointIndex, handleDeselectPoint: handleDeselectPoint, handleOpenIn3D: handleOpenIn3D, handleDownloadImage: handleDownloadImage })));
    };
    return ThumbnailGallery;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]));
function mapStateToProps(state) {
    return {
        data: Object(__WEBPACK_IMPORTED_MODULE_10__state_selection_selectors__["getThumbnails"])(state),
    };
}
var dispatchToPropsMap = {
    handleClearAllSelectedPoints: __WEBPACK_IMPORTED_MODULE_9__state_selection_actions__["clearAllSelectedPoints"],
    handleDeselectPoint: __WEBPACK_IMPORTED_MODULE_9__state_selection_actions__["deselectPoint"],
    handleDownloadImage: __WEBPACK_IMPORTED_MODULE_9__state_selection_actions__["downloadImage"],
    handleOpenIn3D: __WEBPACK_IMPORTED_MODULE_9__state_selection_actions__["selectCellFor3DViewer"],
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["b" /* connect */])(mapStateToProps, dispatchToPropsMap)(ThumbnailGallery));


/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_card__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_card_style_index_js__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_icon_style_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(13);






var Meta = __WEBPACK_IMPORTED_MODULE_0_antd_es_card__["a" /* default */].Meta;
var styles = __webpack_require__(802);
var GalleryCard = function (props) {
    var deselectPoint = function () {
        props.handleDeselectPoint(props.pointIndex);
    };
    var openCellin3D = function () {
        setTimeout(window.scroll({
            behavior: "smooth",
            left: 0,
            top: 2500,
        }), 3000);
        props.handleOpenIn3D(props.title);
    };
    var downloadData = function () {
        props.handleDownloadImage(props.pointIndex);
    };
    return (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_card__["a" /* default */], { className: styles.container, loading: props.empty, cover: props.src &&
            (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", { alt: "thumbnail of microscopy image", src: __WEBPACK_IMPORTED_MODULE_5__constants__["z" /* THUMBNAIL_BASE_URL */] + "/" + props.src })), actions: props.empty ? [] : [
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", { key: props.title + "-load", onClick: openCellin3D }, "3D"),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { key: props.title + "-download", type: "download", onClick: downloadData }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { key: props.title + "-close", type: "close", onClick: deselectPoint }),
        ] },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Meta, { title: props.title })));
};
/* harmony default export */ __webpack_exports__["a"] = (GalleryCard);


/***/ }),

/***/ 802:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style__container--1umfk"};

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gallery-header":"style__gallery-header--24Z5z","galleryHeader":"style__gallery-header--24Z5z"};

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_es_anchor__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_es_anchor_style_index_js__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_es_icon__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_es_icon_style_index_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);





var Link = __WEBPACK_IMPORTED_MODULE_0_antd_es_anchor__["a" /* default */].Link;
var AffixedNav = function () {
    return (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_es_anchor__["a" /* default */], null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Link, { href: "#main-plot", title: (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment, null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { type: "dot-chart" }),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", null, " Plot "))) }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Link, { href: "#gallery", title: (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment, null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { type: "picture" }),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", null, " Gallery "))) }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Link, { href: "#three-d-viewer", title: (__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment, null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_es_icon__["a" /* default */], { type: "sync" }),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", null, " 3D viewer "))) })));
};
/* harmony default export */ __webpack_exports__["a"] = (AffixedNav);


/***/ }),

/***/ 811:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"color-menu":"style__color-menu--1I-K5","colorMenu":"style__color-menu--1I-K5","content":"style__content--11OH4","header":"style__header--3rm0D"};

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createReduxStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logic__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(310);
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var reducers = {
    metadata: __WEBPACK_IMPORTED_MODULE_4____["c" /* metadata */].reducer,
    selection: __WEBPACK_IMPORTED_MODULE_4____["d" /* selection */].reducer,
};
var logics = __spread(__WEBPACK_IMPORTED_MODULE_4____["c" /* metadata */].logics, __WEBPACK_IMPORTED_MODULE_4____["d" /* selection */].logics);
var reduxLogicDependencies = {
    baseApiUrl: __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* BASE_API_URL */],
    httpClient: __WEBPACK_IMPORTED_MODULE_0_axios___default.a,
};
function createReduxStore(initialState) {
    var logicMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_redux_logic__["b" /* createLogicMiddleware */])(logics, reduxLogicDependencies);
    var middleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["a" /* applyMiddleware */])(logicMiddleware);
    var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_4____["b" /* enableBatching */])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["c" /* combineReducers */])(reducers));
    if (initialState) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["d" /* createStore */])(rootReducer, initialState, middleware);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["d" /* createStore */])(rootReducer, middleware);
}


/***/ }),

/***/ 832:
/***/ (function(module, exports) {



/***/ })

},[316]);
//# sourceMappingURL=app.7a0e99a73b2a66992d31.js.map