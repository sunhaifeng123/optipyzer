"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/optimize",{

/***/ "./src/components/Results.tsx":
/*!************************************!*\
  !*** ./src/components/Results.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanleroy/Documents/projects.nosync/optipyzer/web/src/components/Results.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Results = function Results(props) {\n  _s();\n\n  // destructure props\n  var result = props.result,\n      setResult = props.setResult; // state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      viewInfo = _useState[0],\n      setViewInfo = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center justify-center min-h-screen my-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-11/12 p-4 mx-6 font-bold text-left bg-blue-200 border-2 border-blue-500 rounded-lg shadow-lg md:w-3/4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          style: {\n            position: 'absolute',\n            display: viewInfo ? 'block' : 'none'\n          },\n          className: \"w-1/2 p-3 text-sm -translate-y-8 bg-yellow-400 border-2 border-black rounded-lg shadow-2xl md:text-base md:-translate-y-1/2\",\n          children: \"About results: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum quae ratione ducimus sed animi fugit obcaecati, culpa nulla tenetur. Quas, dolorum recusandae? Esse laborum explicabo obcaecati, enim delectus magnam.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row items-start justify-between\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"mb-2 text-4xl font-bold text-left md:text-5xl\",\n          children: \"Query Result:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-2xl font-bold cursor-pointer hover:text-blue-600\",\n          onMouseEnter: function onMouseEnter() {\n            return setViewInfo(true);\n          },\n          onMouseLeave: function onMouseLeave() {\n            return setViewInfo(false);\n          },\n          children: \"\\u24D8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Optimized Sequence AD:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.optimmized_ad\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Optimized Sequence SD:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.optimmized_sd\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Peptide Sequence:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.peptide_seq\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return setResult(null);\n          },\n          className: \"px-6 py-2 font-bold text-white transition-all bg-black border-2 border-black rounded-lg hover:bg-transparent hover:text-black\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Results, \"rO0pyxaAwg7oJX6n0SbGDiADeII=\");\n\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLnRzeD8yOWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5UmVzdWx0IH0gZnJvbSBcIkAvLi5cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVzdWx0OiBRdWVyeVJlc3VsdDtcbiAgc2V0UmVzdWx0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxRdWVyeVJlc3VsdCB8IG51bGw+Pjtcbn1cblxuY29uc3QgUmVzdWx0czogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vIGRlc3RydWN0dXJlIHByb3BzXG4gIGNvbnN0IHsgcmVzdWx0LCBzZXRSZXN1bHQgfSA9IHByb3BzXG5cbiAgLy8gc3RhdGVcbiAgY29uc3QgW3ZpZXdJbmZvLCBzZXRWaWV3SW5mb10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICByZXR1cm4gIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBteS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0xMS8xMiBwLTQgbXgtNiBmb250LWJvbGQgdGV4dC1sZWZ0IGJnLWJsdWUtMjAwIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBtZDp3LTMvNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIGRpc3BsYXk6IHZpZXdJbmZvID8gJ2Jsb2NrJyA6ICdub25lJ319IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgcC0zIHRleHQtc20gLXRyYW5zbGF0ZS15LTggYmcteWVsbG93LTQwMCBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1sZyBzaGFkb3ctMnhsIG1kOnRleHQtYmFzZSBtZDotdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBYm91dCByZXN1bHRzOlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCBldW0gcXVhZSByYXRpb25lIGR1Y2ltdXMgc2VkIGFuaW1pIGZ1Z2l0IG9iY2FlY2F0aSwgY3VscGEgbnVsbGEgdGVuZXR1ci4gUXVhcywgZG9sb3J1bSByZWN1c2FuZGFlPyBFc3NlIGxhYm9ydW0gZXhwbGljYWJvIG9iY2FlY2F0aSwgZW5pbSBkZWxlY3R1cyBtYWduYW0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1sZWZ0IG1kOnRleHQtNXhsXCI+UXVlcnkgUmVzdWx0OjwvcD5cbiAgICAgICAgICA8cCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNjAwXCJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Vmlld0luZm8odHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFZpZXdJbmZvKGZhbHNlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDik5hcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPk9wdGltaXplZCBTZXF1ZW5jZSBBRDo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG1iLTIgZm9udC1ub3JtYWwgYnJlYWstYWxsIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntyZXN1bHQub3B0aW1taXplZF9hZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPk9wdGltaXplZCBTZXF1ZW5jZSBTRDo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG1iLTIgZm9udC1ub3JtYWwgYnJlYWstYWxsIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntyZXN1bHQub3B0aW1taXplZF9zZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlBlcHRpZGUgU2VxdWVuY2U6PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBtYi0yIGZvbnQtbm9ybWFsIGJyZWFrLWFsbCBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS02MDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57cmVzdWx0LnBlcHRpZGVfc2VxfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UmVzdWx0KG51bGwpfSBjbGFzc05hbWU9XCJweC02IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgYmctYmxhY2sgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlc3VsdHMiLCJwcm9wcyIsInJlc3VsdCIsInNldFJlc3VsdCIsInZpZXdJbmZvIiwic2V0Vmlld0luZm8iLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJvcHRpbW1pemVkX2FkIiwib3B0aW1taXplZF9zZCIsInBlcHRpZGVfc2VxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Results.tsx\n");

/***/ })

});