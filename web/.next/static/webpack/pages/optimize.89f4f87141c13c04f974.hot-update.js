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

/***/ "./src/components/CopyToClipboard.tsx":
/*!********************************************!*\
  !*** ./src/components/CopyToClipboard.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/nathanleroy/Documents/projects.nosync/optipyzer/web/src/components/CopyToClipboard.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar CopyToClipboard = function CopyToClipboard(props) {\n  _s();\n\n  // state\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      copied = _useState[0],\n      setCopied = _useState[1];\n\n  var content = props.content;\n\n  var copyToClipboard = function copyToClipboard(text) {\n    navigator.clipboard.writeText(text);\n  };\n\n  var handleCopy = function handleCopy() {\n    copyToClipboard(content);\n    setCopied(true);\n    setTimeout(function () {\n      return setCopied(false);\n    }, 2000);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n    className: \"flex flex-col items-center justify-center px-1 mx-2 text-sm transition-all bg-gray-100 border border-black rounded-md shadow-xl hover:shadow-sm hover:bg-gray-300\",\n    onClick: handleCopy,\n    disabled: copied,\n    style: {\n      minHeight: \"30px\"\n    },\n    children: copied ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      className: \"text-lg font-bold\",\n      children: \"\\u2713\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 24\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n      src: \"/images/clipboard.png\",\n      alt: \"Copy to clipboard\",\n      height: \"28\",\n      width: \"28\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(CopyToClipboard, \"NE86rL3vg4NVcTTWDavsT0hUBJs=\");\n\n_c = CopyToClipboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CopyToClipboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"CopyToClipboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3B5VG9DbGlwYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQU1BLElBQU1FLGVBQTBCLEdBQUcsU0FBN0JBLGVBQTZCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUxQztBQUNBLGtCQUE0QkYsK0NBQVEsQ0FBVSxLQUFWLENBQXBDO0FBQUEsTUFBT0csTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBUUMsT0FBUixHQUFvQkgsS0FBcEIsQ0FBUUcsT0FBUjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBa0I7QUFDdENDLElBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJILElBQTlCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCTCxJQUFBQSxlQUFlLENBQUNELE9BQUQsQ0FBZjtBQUNBRCxJQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FRLElBQUFBLFVBQVUsQ0FBQztBQUFBLGFBQU1SLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUFELEVBQXlCLElBQXpCLENBQVY7QUFDSCxHQUpEOztBQU1BLHNCQUNJO0FBQ0ksYUFBUyxFQUFDLG1LQURkO0FBRUksV0FBTyxFQUFFTyxVQUZiO0FBR0ksWUFBUSxFQUFFUixNQUhkO0FBSUksU0FBSyxFQUFFO0FBQ0hVLE1BQUFBLFNBQVMsRUFBRTtBQURSLEtBSlg7QUFBQSxjQVNNVixNQUFNLGdCQUFHO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUNOLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFDLHVCQUROO0FBRUUsU0FBRyxFQUFDLG1CQUZOO0FBR0UsWUFBTSxFQUFDLElBSFQ7QUFJRSxXQUFLLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBckNEOztHQUFNRjs7S0FBQUE7QUF1Q04sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29weVRvQ2xpcGJvYXJkLnRzeD84NDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBDb3B5VG9DbGlwYm9hcmQ6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIC8vIHN0YXRlXG4gICAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgICAgIGNvcHlUb0NsaXBib2FyZChjb250ZW50KVxuICAgICAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTEgbXgtMiB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3cteGwgaG92ZXI6c2hhZG93LXNtIGhvdmVyOmJnLWdyYXktMzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHl9XG4gICAgICAgICAgICBkaXNhYmxlZD17Y29waWVkfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzBweFwiXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvcGllZCA/IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+4pyTPC9zcGFuPiA6XG4gICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2NsaXBib2FyZC5wbmdcIiBcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb3B5IHRvIGNsaXBib2FyZFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZCJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiQ29weVRvQ2xpcGJvYXJkIiwicHJvcHMiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJjb250ZW50IiwiY29weVRvQ2xpcGJvYXJkIiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImhhbmRsZUNvcHkiLCJzZXRUaW1lb3V0IiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CopyToClipboard.tsx\n");

/***/ })

});