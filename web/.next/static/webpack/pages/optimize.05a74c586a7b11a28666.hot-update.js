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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanleroy/Documents/projects.nosync/optipyzer/web/src/components/Results.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Results = function Results(props) {\n  _s();\n\n  // destructure props\n  var result = props.result,\n      setResult = props.setResult; // state\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      viewInfo = _useState[0],\n      setViewInfo = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center justify-center min-h-screen my-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex flex-col w-11/12 p-4 mx-6 font-bold text-left bg-blue-200 border-2 border-blue-500 rounded-lg shadow-lg md:w-3/4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          style: {\n            position: 'absolute',\n            display: viewInfo ? 'block' : 'none'\n          },\n          className: \"w-10/12 p-2 mt-4 text-sm bg-yellow-400 border-2 border-black rounded-lg shadow-2xl md:w-1/2 -top-0 md:text-base md:top-1/4\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-between mx-1\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n              className: \"text-lg font-bold\",\n              children: \"About query results:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n              className: \"hover:cursor-pointer hover:text-gray-400\",\n              onClick: function onClick() {\n                return setViewInfo(false);\n              },\n              children: \"\\u24E7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"p-1 font-normal\",\n            children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum quae ratione ducimus sed animi fugit obcaecati, culpa nulla tenetur. Quas, dolorum recusandae? Esse laborum explicabo obcaecati, enim delectus magnam.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row items-start justify-between\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"mb-2 text-4xl font-bold text-left md:text-5xl\",\n          children: \"Query Result:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-2xl font-bold cursor-pointer hover:text-blue-600\",\n          onClick: function onClick() {\n            return setViewInfo(true);\n          },\n          children: \"\\u24D8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Optimized Sequence AD:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.optimmized_ad\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Optimized Sequence SD:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.optimmized_sd\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-lg font-bold\",\n        children: \"Peptide Sequence:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-2 mb-2 font-normal break-all bg-white border-2 border-blue-600 rounded-lg\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: \"text-sm\",\n          children: result.peptide_seq\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return setResult(null);\n          },\n          className: \"px-6 py-2 font-bold text-white transition-all bg-black border-2 border-black rounded-lg hover:bg-transparent hover:text-black\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Results, \"rO0pyxaAwg7oJX6n0SbGDiADeII=\");\n\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZjtBQUFBLCtCQUNFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNUCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsV0FBakI7QUFBd0MsbUJBQVMsRUFBQywrSEFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQTFERDs7R0FBTUg7O0tBQUFBO0FBNEROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jlc3VsdHMudHN4PzI5ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUXVlcnlSZXN1bHQgfSBmcm9tIFwiQC8uLlwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICByZXN1bHQ6IFF1ZXJ5UmVzdWx0O1xuICBzZXRSZXN1bHQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFF1ZXJ5UmVzdWx0IHwgbnVsbD4+O1xufVxuXG5jb25zdCBSZXN1bHRzOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgLy8gZGVzdHJ1Y3R1cmUgcHJvcHNcbiAgY29uc3QgeyByZXN1bHQsIHNldFJlc3VsdCB9ID0gcHJvcHNcblxuICAvLyBzdGF0ZVxuICBjb25zdCBbdmlld0luZm8sIHNldFZpZXdJbmZvXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIHJldHVybiAgKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIG15LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTExLzEyIHAtNCBteC02IGZvbnQtYm9sZCB0ZXh0LWxlZnQgYmctYmx1ZS0yMDAgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIG1kOnctMy80XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgZGlzcGxheTogdmlld0luZm8gPyAnYmxvY2snIDogJ25vbmUnfX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwLzEyIHAtMiBtdC00IHRleHQtc20gYmcteWVsbG93LTQwMCBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1sZyBzaGFkb3ctMnhsIG1kOnctMS8yIC10b3AtMCBtZDp0ZXh0LWJhc2UgbWQ6dG9wLTEvNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBteC0xXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+QWJvdXQgcXVlcnkgcmVzdWx0czo8L3A+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3SW5mbyhmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDik6dcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xIGZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IGV1bSBxdWFlIHJhdGlvbmUgZHVjaW11cyBzZWQgYW5pbWkgZnVnaXQgb2JjYWVjYXRpLCBjdWxwYSBudWxsYSB0ZW5ldHVyLiBRdWFzLCBkb2xvcnVtIHJlY3VzYW5kYWU/IEVzc2UgbGFib3J1bSBleHBsaWNhYm8gb2JjYWVjYXRpLCBlbmltIGRlbGVjdHVzIG1hZ25hbS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtbGVmdCBtZDp0ZXh0LTV4bFwiPlF1ZXJ5IFJlc3VsdDo8L3A+XG4gICAgICAgICAgPHAgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3SW5mbyh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDik5hcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPk9wdGltaXplZCBTZXF1ZW5jZSBBRDo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG1iLTIgZm9udC1ub3JtYWwgYnJlYWstYWxsIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntyZXN1bHQub3B0aW1taXplZF9hZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPk9wdGltaXplZCBTZXF1ZW5jZSBTRDo8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIG1iLTIgZm9udC1ub3JtYWwgYnJlYWstYWxsIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntyZXN1bHQub3B0aW1taXplZF9zZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlBlcHRpZGUgU2VxdWVuY2U6PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBtYi0yIGZvbnQtbm9ybWFsIGJyZWFrLWFsbCBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItYmx1ZS02MDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57cmVzdWx0LnBlcHRpZGVfc2VxfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UmVzdWx0KG51bGwpfSBjbGFzc05hbWU9XCJweC02IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgYmctYmxhY2sgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlc3VsdHMiLCJwcm9wcyIsInJlc3VsdCIsInNldFJlc3VsdCIsInZpZXdJbmZvIiwic2V0Vmlld0luZm8iLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJvcHRpbW1pemVkX2FkIiwib3B0aW1taXplZF9zZCIsInBlcHRpZGVfc2VxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Results.tsx\n");

/***/ })

});