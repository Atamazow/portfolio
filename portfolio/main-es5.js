function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _selector_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selector/selector.component */
    "./src/app/selector/selector.component.ts");
    /* harmony import */


    var _center_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./center/center.component */
    "./src/app/center/center.component.ts");
    /* harmony import */


    var _important_important_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./important/important.component */
    "./src/app/important/important.component.ts");
    /* harmony import */


    var _get_podval_get_podval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./get-podval/get-podval.component */
    "./src/app/get-podval/get-podval.component.ts");
    /* harmony import */


    var _foto_albom_foto_albom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./foto-albom/foto-albom.component */
    "./src/app/foto-albom/foto-albom.component.ts");
    /* harmony import */


    var _blackblock_blackblock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blackblock/blackblock.component */
    "./src/app/blackblock/blackblock.component.ts");
    /* harmony import */


    var _foother_foother_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./foother/foother.component */
    "./src/app/foother/foother.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-get-podval");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-foto-albom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-blackblock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-foother");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _selector_selector_component__WEBPACK_IMPORTED_MODULE_3__["SelectorComponent"], _center_center_component__WEBPACK_IMPORTED_MODULE_4__["CenterComponent"], _important_important_component__WEBPACK_IMPORTED_MODULE_5__["ImportantComponent"], _get_podval_get_podval_component__WEBPACK_IMPORTED_MODULE_6__["GetPodvalComponent"], _foto_albom_foto_albom_component__WEBPACK_IMPORTED_MODULE_7__["FotoAlbomComponent"], _blackblock_blackblock_component__WEBPACK_IMPORTED_MODULE_8__["BlackblockComponent"], _foother_foother_component__WEBPACK_IMPORTED_MODULE_9__["FootherComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _important_important_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./important/important.component */
    "./src/app/important/important.component.ts");
    /* harmony import */


    var _center_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./center/center.component */
    "./src/app/center/center.component.ts");
    /* harmony import */


    var _foother_foother_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./foother/foother.component */
    "./src/app/foother/foother.component.ts");
    /* harmony import */


    var _selector_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./selector/selector.component */
    "./src/app/selector/selector.component.ts");
    /* harmony import */


    var _get_podval_get_podval_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./get-podval/get-podval.component */
    "./src/app/get-podval/get-podval.component.ts");
    /* harmony import */


    var _foto_albom_foto_albom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./foto-albom/foto-albom.component */
    "./src/app/foto-albom/foto-albom.component.ts");
    /* harmony import */


    var _blackblock_blackblock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blackblock/blackblock.component */
    "./src/app/blackblock/blackblock.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"], _important_important_component__WEBPACK_IMPORTED_MODULE_6__["ImportantComponent"], _center_center_component__WEBPACK_IMPORTED_MODULE_7__["CenterComponent"], _foother_foother_component__WEBPACK_IMPORTED_MODULE_8__["FootherComponent"], _selector_selector_component__WEBPACK_IMPORTED_MODULE_9__["SelectorComponent"], _get_podval_get_podval_component__WEBPACK_IMPORTED_MODULE_10__["GetPodvalComponent"], _foto_albom_foto_albom_component__WEBPACK_IMPORTED_MODULE_11__["FotoAlbomComponent"], _blackblock_blackblock_component__WEBPACK_IMPORTED_MODULE_12__["BlackblockComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"], _important_important_component__WEBPACK_IMPORTED_MODULE_6__["ImportantComponent"], _center_center_component__WEBPACK_IMPORTED_MODULE_7__["CenterComponent"], _foother_foother_component__WEBPACK_IMPORTED_MODULE_8__["FootherComponent"], _selector_selector_component__WEBPACK_IMPORTED_MODULE_9__["SelectorComponent"], _get_podval_get_podval_component__WEBPACK_IMPORTED_MODULE_10__["GetPodvalComponent"], _foto_albom_foto_albom_component__WEBPACK_IMPORTED_MODULE_11__["FotoAlbomComponent"], _blackblock_blackblock_component__WEBPACK_IMPORTED_MODULE_12__["BlackblockComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blackblock/blackblock.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/blackblock/blackblock.component.ts ***!
    \****************************************************/

  /*! exports provided: BlackblockComponent */

  /***/
  function srcAppBlackblockBlackblockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlackblockComponent", function () {
      return BlackblockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlackblockComponent = /*#__PURE__*/function () {
      function BlackblockComponent() {
        _classCallCheck(this, BlackblockComponent);
      }

      _createClass(BlackblockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlackblockComponent;
    }();

    BlackblockComponent.ɵfac = function BlackblockComponent_Factory(t) {
      return new (t || BlackblockComponent)();
    };

    BlackblockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlackblockComponent,
      selectors: [["app-blackblock"]],
      decls: 12,
      vars: 0,
      consts: [[1, "blackFoto"], [1, "container"], [1, "blackblockObj"], [1, "row", "black"], [1, "col-md-7", "col-12"], [1, "blackblockObj", "wow", "animate__animated", "animate__fadeIn"], [1, "blackZag"], [1, "blackText"], [1, "blackBtn"]],
      template: function BlackblockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Haven\u2019t Found What You Like? Browse Our Other Demos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Monstroid\xB2 has everything to get you covered. Take a look at the child themes available for you. The list of themes covers most popular spheres o f interest including Art & Photography, Business, Education and Design.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "VIEW NOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".blackFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"/assets/image/blackfoto.png\");\r\n  width: 100%;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  height: 600px;\r\n  background-size: cover;\r\n  background-position: left;\r\n  overflow: hidden;\r\n\r\n}\r\n.black[_ngcontent-%COMP%]{\r\n  justify-content: flex-end;\r\n\r\n}\r\n.blackblockObj[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10%;\r\n\r\n\r\n}\r\n.blackZag[_ngcontent-%COMP%]{\r\n\r\n  font-size: 40px;\r\n  color: white;\r\n}\r\n.blackText[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  margin-top: 28px;\r\n  color: white;\r\n}\r\n.blackblockObj[_ngcontent-%COMP%]{\r\n  margin-top: 80px;\r\n}\r\n.blackBtn[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  color: white;\r\n  border-color: #2ed3ae;\r\n  margin-top: 35px;\r\n  padding: 17px 40px 15px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  border-width: 0;\r\n  border-radius: 4px ;\r\n}\r\n.blackBtn[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  transition: 0.4s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxhY2tibG9jay9ibGFja2Jsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtzQ0FDb0M7RUFDcEMsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7OztBQUdYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUtBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYmxhY2tibG9jay9ibGFja2Jsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2tGb3Rve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCIvYXNzZXRzL2ltYWdlL2JsYWNrZm90by5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuLmJsYWNre1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG59XHJcbi5ibGFja2Jsb2NrT2Jqe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMCU7XHJcblxyXG5cclxufVxyXG4uYmxhY2taYWd7XHJcblxyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ibGFja1RleHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ibGFja2Jsb2NrT2Jqe1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ibGFja0J0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6ICMyZWQzYWU7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBwYWRkaW5nOiAxN3B4IDQwcHggMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA7XHJcbn1cclxuLmJsYWNrQnRuOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlackblockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blackblock',
          templateUrl: './blackblock.component.html',
          styleUrls: ['./blackblock.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/center/center.component.ts":
  /*!********************************************!*\
    !*** ./src/app/center/center.component.ts ***!
    \********************************************/

  /*! exports provided: CenterComponent */

  /***/
  function srcAppCenterCenterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CenterComponent", function () {
      return CenterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CenterComponent = /*#__PURE__*/function () {
      function CenterComponent() {
        _classCallCheck(this, CenterComponent);
      }

      _createClass(CenterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CenterComponent;
    }();

    CenterComponent.ɵfac = function CenterComponent_Factory(t) {
      return new (t || CenterComponent)();
    };

    CenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CenterComponent,
      selectors: [["app-center"]],
      decls: 58,
      vars: 0,
      consts: [[1, "container"], [1, "center"], [1, "row"], [1, "col-md-4", "col-12"], [1, "novosti", "d-flex", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "material-icons", "ikona"], [1, "getCentetText"], [1, "centerZagolovok"], [1, "centerText"], [1, "ikona"], ["aria-hidden", "true", 1, "fa", "fa-rocket"], ["aria-hidden", "true", 1, "fa", "fa-line-chart"], [1, "row", "mt-5"], [1, "novosti", "d-flex", "wow", "animate__animated", "animate__fadeInRightBig"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], ["aria-hidden", "true", 1, "fa", "fa-download"], ["aria-hidden", "true", 1, "fa", "fa-cart-arrow-down"]],
      template: function CenterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " find_in_page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Built for Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Built for speed and performance. Get the best results at GTmetrix and Google PageSpeed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Flexible and Multipurpose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Monstroid\xB2 allows to create various websites for complex and scalable projects. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SEO Friendly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Valid code and performance optimized framework make SEO easy and hassle-free. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "24/7 Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "24/7 Premium technical support and great documentation are included in this template price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Social Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "You can easily integrate your Twitter and Facebook accounts with the website using the social widgets. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Advanced UI Kit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Monstroid\xB2 comes with a powerful and flexible extended toolkit in addition to basic Bootstrap. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".center[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.novosti[_ngcontent-%COMP%]{\r\n  width: 350px;\r\n  max-width: 100%;\r\n}\r\n.ikona[_ngcontent-%COMP%]{\r\n  color: #2ed3ae;\r\n}\r\n.getCentetText[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n}\r\n.centerZagolovok[_ngcontent-%COMP%]{\r\n  font-size: 24px ;\r\n  color: #000;\r\n}\r\n.centerText[_ngcontent-%COMP%]{\r\n  color:#888 ;\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VudGVyL2NlbnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2VudGVyL2NlbnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubm92b3N0aXtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5pa29uYXtcclxuICBjb2xvcjogIzJlZDNhZTtcclxufVxyXG4uZ2V0Q2VudGV0VGV4dHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY2VudGVyWmFnb2xvdm9re1xyXG4gIGZvbnQtc2l6ZTogMjRweCA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNlbnRlclRleHR7XHJcbiAgY29sb3I6Izg4OCA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-center',
          templateUrl: './center.component.html',
          styleUrls: ['./center.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 36,
      vars: 0,
      consts: [[1, "content"], [1, "container"], [1, "row", "row-fix", "justify-content-lg-center"], [1, "col-md-10", "col-12", "wow", "animate__animated", "animate__fadeInRight"], [1, "contentObjText"], [1, "contentZagolovok"], [1, "textContent"], [1, "row", "mt-5"], [1, "col-md-4", "col-12"], [1, "contentGalereya", "ml-3", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "contentFoto1"], [1, "gitObjContent"], [1, "getConZag"], [1, "contText"], [1, "contentFoto2"], [1, "contentFoto3"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Multiple Themes &");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " a Variety of FeaturesS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Monstroid\xB2 is a multipurpose template optimized for various niches of business. Besides neutral classic websites you can create restaurant, hotel, sport gym website and much much more. variety of useful features variety of useful features that are included with this template.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bootstrap Framework");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Monstroid\xB2 is based on Bootstrap Framework, which makes it a nice template for any purpose.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Responsive & Retina Ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Monstroid\xB2 looks great on any screen resolution and on any device due to its responsiveness..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Customizable Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Use our Template to customize and update your website within seconds ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".contentZagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 40px;\r\n  padding-top: 190px;\r\n  box-sizing: border-box;\r\n}\r\n.textContent[_ngcontent-%COMP%]{\r\n  margin-top: 26px;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  color: #888;\r\n}\r\n.contentFoto1[_ngcontent-%COMP%], .contentFoto2[_ngcontent-%COMP%], .contentFoto3[_ngcontent-%COMP%]{\r\n  width: 369px;\r\n  height: 278px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n}\r\n.contentFoto1[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-1-418x315.jpg\");\r\n}\r\n.contentFoto2[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-3-418x315.jpg\");\r\n}\r\n.contentFoto3[_ngcontent-%COMP%]{\r\n\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-2-418x315.jpg\");\r\n}\r\n.contentFoto1[_ngcontent-%COMP%]:hover{\r\n  box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n  transition: 0.4s;\r\n}\r\n.contentFoto2[_ngcontent-%COMP%]:hover{\r\n   box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n   transition: 0.4s;\r\n }\r\n.contentFoto3[_ngcontent-%COMP%]:hover{\r\n    box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n    transition: 0.4s;\r\n  }\r\n.gitObjContent[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  width: 369px;\r\n  text-align: left;\r\n}\r\n.contText[_ngcontent-%COMP%]{\r\n  margin-top:18px ;\r\n  font-size: 18px;\r\n  color: #888;\r\n}\r\n.getConZag[_ngcontent-%COMP%]{\r\n  font-size:24px ;\r\n  color: #151515;\r\n  cursor: pointer;\r\n}\r\n.getConZag[_ngcontent-%COMP%]:hover{\r\n  color: #2ed3ae;\r\n  transition: 0.3s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBOzs7RUFHRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlOztBQUVqQjtBQUNBO0VBQ0U7dUdBQ3FHO0FBQ3ZHO0FBQ0EsY0FBYztxR0FDdUY7QUFDckc7QUFDQTs7RUFFRTt1R0FDcUc7QUFDdkc7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7QUFBQztHQUNFLDhDQUE4QztHQUM5QyxnQkFBZ0I7Q0FDbEI7QUFBQztJQUNFLDhDQUE4QztJQUM5QyxnQkFBZ0I7RUFDbEI7QUFDRjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFphZ29sb3Zva3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxOTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi50ZXh0Q29udGVudHtcclxuICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbn1cclxuLmNvbnRlbnRGb3RvMVxyXG4sLmNvbnRlbnRGb3RvMlxyXG4sLmNvbnRlbnRGb3RvM3tcclxuICB3aWR0aDogMzY5cHg7XHJcbiAgaGVpZ2h0OiAyNzhweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmNvbnRlbnRGb3RvMXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL3NlcnZpY2VzLTEtNDE4eDMxNS5qcGdcIik7XHJcbn1cclxuLmNvbnRlbnRGb3RvMntiYWNrZ3JvdW5kLWltYWdlOlxyXG4gIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9zZXJ2aWNlcy0zLTQxOHgzMTUuanBnXCIpO1xyXG59XHJcbi5jb250ZW50Rm90bzN7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvc2VydmljZXMtMi00MTh4MzE1LmpwZ1wiKTtcclxufVxyXG5cclxuLmNvbnRlbnRGb3RvMTpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn0uY29udGVudEZvdG8yOmhvdmVye1xyXG4gICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gfS5jb250ZW50Rm90bzM6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbi5naXRPYmpDb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDM2OXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRUZXh0e1xyXG4gIG1hcmdpbi10b3A6MThweCA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcbi5nZXRDb25aYWd7XHJcbiAgZm9udC1zaXplOjI0cHggO1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZ2V0Q29uWmFnOmhvdmVye1xyXG4gIGNvbG9yOiAjMmVkM2FlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/foother/foother.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/foother/foother.component.ts ***!
    \**********************************************/

  /*! exports provided: FootherComponent */

  /***/
  function srcAppFootherFootherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FootherComponent", function () {
      return FootherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FootherComponent = /*#__PURE__*/function () {
      function FootherComponent() {
        _classCallCheck(this, FootherComponent);
      }

      _createClass(FootherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FootherComponent;
    }();

    FootherComponent.ɵfac = function FootherComponent_Factory(t) {
      return new (t || FootherComponent)();
    };

    FootherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FootherComponent,
      selectors: [["app-foother"]],
      decls: 26,
      vars: 0,
      consts: [[1, "container"], [1, "getFooter"], [1, "row"], [1, "col-12"], [1, "footerText"], [1, "col-6"], [1, "inpBtn", "d-flex", "align-items", "center"], [1, "footerIkona"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o", "email"], [1, "inputObj"], ["placeholder", "email...", 1, "poisk"], [1, "footerBtn", "ml-5"], [1, "footer-ikonki"], ["aria-hidden", "true", 1, "fa", "fa-facebook", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-vimeo", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-google-plus", "ikonaFuter"], [1, "name"]],
      template: function FootherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Get the latest news delivered daily!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We will send you breaking news right to your inbox. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUBSCRIDE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ATAMAZOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footerBtn[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  color: white;\r\n  border-color: #2ed3ae;\r\n  padding: 18px 45px;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n  border-width: 0;\r\n  border-radius: 4px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.getFooter[_ngcontent-%COMP%]{margin-top: 100px;\r\n\r\n}\r\n\r\n\r\n\r\n.inpBtn[_ngcontent-%COMP%]{  background-color:  #f5f5fa;\r\n  margin-top: 50px;\r\n  align-items: center;\r\n  border-radius: 4px;\r\n  padding: 0px 40px;\r\n  box-sizing: border-box;\r\n\r\n\r\n  max-width: 100%;\r\n  position:relative;\r\n  left: 55%;\r\n  min-width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.poisk[_ngcontent-%COMP%]{\r\n  padding: 6px;\r\n  font-size: 21px;\r\n  font-family: Hind,Arial,sans-serif;\r\n  padding-left: 10px;\r\n  border: none;\r\n  border-width: 0;\r\n  background-color: #f5f5fa;\r\n}\r\n\r\n\r\n\r\n.footerText[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n\r\n\r\n.email[_ngcontent-%COMP%]{\r\n  color:  #c7c7c7;\r\n  font-size: 21px;\r\n}\r\n\r\n\r\n\r\n.inpBtn[_ngcontent-%COMP%]:hover{\r\n  border: 2px solid #2ed3ae;\r\n  transition: 0.4s;\r\n}\r\n\r\n\r\n\r\n.footer-ikonki[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 25px;\r\n}\r\n\r\n\r\n\r\n.ikonaFuter[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  color: #2ed3ae;\r\n  font-size: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n.ikonaFuter[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n.name[_ngcontent-%COMP%]{\r\n  padding-bottom: 100px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGhlci9mb290aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjs7O0FBR3BCOzs7O0FBSUEsV0FBVyxpQkFBaUI7O0FBRTVCOzs7O0FBQ0EsVUFBVSwwQkFBMEI7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjs7O0VBR3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULGVBQWU7O0FBRWpCOzs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7Ozs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7Ozs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7Ozs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Ozs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTs7QUFFakI7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7Ozs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RoZXIvZm9vdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlckJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6ICMyZWQzYWU7XHJcbiAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uZ2V0Rm9vdGVye21hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxufVxyXG4uaW5wQnRueyAgYmFja2dyb3VuZC1jb2xvcjogICNmNWY1ZmE7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGxlZnQ6IDU1JTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5wb2lza3tcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIaW5kLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmYTtcclxufVxyXG4uZm9vdGVyVGV4dHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uZW1haWx7XHJcbiAgY29sb3I6ICAjYzdjN2M3O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4uaW5wQnRuOmhvdmVye1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZWQzYWU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uZm9vdGVyLWlrb25raXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uaWtvbmFGdXRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyZWQzYWU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG4uaWtvbmFGdXRlcjpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4ubmFtZXtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FootherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foother',
          templateUrl: './foother.component.html',
          styleUrls: ['./foother.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/foto-albom/foto-albom.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/foto-albom/foto-albom.component.ts ***!
    \****************************************************/

  /*! exports provided: FotoAlbomComponent */

  /***/
  function srcAppFotoAlbomFotoAlbomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotoAlbomComponent", function () {
      return FotoAlbomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FotoAlbomComponent = /*#__PURE__*/function () {
      function FotoAlbomComponent() {
        _classCallCheck(this, FotoAlbomComponent);
      }

      _createClass(FotoAlbomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FotoAlbomComponent;
    }();

    FotoAlbomComponent.ɵfac = function FotoAlbomComponent_Factory(t) {
      return new (t || FotoAlbomComponent)();
    };

    FotoAlbomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FotoAlbomComponent,
      selectors: [["app-foto-albom"]],
      decls: 30,
      vars: 0,
      consts: [[1, ""], [1, "fotoalbom"], [1, "row", "no-gutters"], [1, "col-md-4", "col-xl-3", "mycol"], [1, "getGallereya", "animate__animated", "animate__fadeInTopLeft"], [1, "getfoto1"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInTopLeft"], [1, "getfoto2"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInTopRight"], [1, "getfoto3"], [1, "col-md-4", "col-xl-3"], [1, "getfoto4"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInBottomLeft"], [1, "getfoto5"], [1, "getfoto6"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInBottomRight"], [1, "getfoto7"], [1, "getfoto8"], [1, "container"], ["src", "/assets/image/422d3b50-f13b-40fe-83ed-c88c78d8f9a5.jpg", 1, "sponsor", "wow", "animate__animated", "animate__fadeInLeftBig"]],
      template: function FotoAlbomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fotoalbom[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 120px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%], .getfoto2[_ngcontent-%COMP%], .getfoto3[_ngcontent-%COMP%], .getfoto4[_ngcontent-%COMP%], .getfoto5[_ngcontent-%COMP%], .getfoto6[_ngcontent-%COMP%], .getfoto7[_ngcontent-%COMP%], .getfoto8[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  min-width: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  background-position: center;\r\n  background-size: cover;\r\n  height: 400px;\r\n\r\n}\r\n.getGallereya[_ngcontent-%COMP%]{\r\n  margin-left: 0px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-3-1200x906.jpg\");\r\n\r\n}\r\n.getfoto2[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-9-1200x905.jpg\");\r\n}\r\n.getfoto3[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-10-1200x675.jpg\");\r\n}\r\n.getfoto4[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-11-1200x1200.jpg\");\r\n}\r\n.getfoto5[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-14-1200x905.jpg\");\r\n}\r\n.getfoto6[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-6-1200x905.jpg\")\r\n}\r\n.getfoto7[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-12-1200x797.jpg\");\r\n}\r\n.getfoto8[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-3-418x315.jpg\")\r\n}\r\n.sponsor[_ngcontent-%COMP%]{\r\n  margin-left:-40px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]:hover::before {\r\n  display:block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n  transition: 0.4s;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]::before{\r\n  transition: 0.4s;\r\n}\r\n.getfoto2[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto3[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto4[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n}\r\n.getfoto5[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto6[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto7[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto8[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n  transition: 0.4s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm90by1hbGJvbS9mb3RvLWFsYm9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7O0FBRWY7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7OEdBQzRHOztBQUU5RztBQUNBO0VBQ0U7OEdBQzRHO0FBQzlHO0FBQ0E7RUFDRTsrR0FDNkc7QUFDL0c7QUFDQTtFQUNFO2dIQUM4RztBQUNoSDtBQUNBO0VBQ0U7K0dBQzZHO0FBQy9HO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0VBQ0U7K0dBQzZHO0FBQy9HO0FBQ0EsVUFBVTs7QUFFVjtBQUdBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3RvLWFsYm9tL2ZvdG8tYWxib20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3RvYWxib217XHJcblxyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcbi5nZXRmb3RvMSwuZ2V0Zm90bzIsLmdldGZvdG8zLC5nZXRmb3RvNFxyXG4sLmdldGZvdG81LC5nZXRmb3RvNiwuZ2V0Zm90bzcsLmdldGZvdG84e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxufVxyXG4uZ2V0R2FsbGVyZXlhe1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmdldGZvdG8xe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvaW1hZ2Utb3JpZ2luYWwtMy0xMjAweDkwNi5qcGdcIik7XHJcblxyXG59XHJcbi5nZXRmb3RvMntcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTktMTIwMHg5MDUuanBnXCIpO1xyXG59XHJcbi5nZXRmb3RvM3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTEwLTEyMDB4Njc1LmpwZ1wiKTtcclxufVxyXG4uZ2V0Zm90bzR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9pbWFnZS1vcmlnaW5hbC0xMS0xMjAweDEyMDAuanBnXCIpO1xyXG59XHJcbi5nZXRmb3RvNXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTE0LTEyMDB4OTA1LmpwZ1wiKTtcclxufVxyXG4uZ2V0Zm90bzZ7YmFja2dyb3VuZC1pbWFnZTpcclxuICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvaW1hZ2Utb3JpZ2luYWwtNi0xMjAweDkwNS5qcGdcIilcclxufVxyXG4uZ2V0Zm90bzd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9pbWFnZS1vcmlnaW5hbC0xMi0xMjAweDc5Ny5qcGdcIik7XHJcbn1cclxuLmdldGZvdG84e2JhY2tncm91bmQtaW1hZ2U6XHJcbiAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL3NlcnZpY2VzLTMtNDE4eDMxNS5qcGdcIilcclxufVxyXG5cclxuXHJcbi5zcG9uc29ye1xyXG4gIG1hcmdpbi1sZWZ0Oi00MHB4O1xyXG59XHJcblxyXG4uZ2V0Zm90bzE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmdldGZvdG8xOjpiZWZvcmV7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uZ2V0Zm90bzI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogIGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuLmdldGZvdG8zOmhvdmVyOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6ICBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG59XHJcbi5nZXRmb3RvNDpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5nZXRmb3RvNTpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5cclxufVxyXG4uZ2V0Zm90bzY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogIGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuLmdldGZvdG83OmhvdmVyOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6ICBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG59XHJcbi5nZXRmb3RvODpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotoAlbomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-foto-albom',
          templateUrl: './foto-albom.component.html',
          styleUrls: ['./foto-albom.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/get-podval/get-podval.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/get-podval/get-podval.component.ts ***!
    \****************************************************/

  /*! exports provided: GetPodvalComponent */

  /***/
  function srcAppGetPodvalGetPodvalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetPodvalComponent", function () {
      return GetPodvalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GetPodvalComponent = /*#__PURE__*/function () {
      function GetPodvalComponent() {
        _classCallCheck(this, GetPodvalComponent);
      }

      _createClass(GetPodvalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GetPodvalComponent;
    }();

    GetPodvalComponent.ɵfac = function GetPodvalComponent_Factory(t) {
      return new (t || GetPodvalComponent)();
    };

    GetPodvalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GetPodvalComponent,
      selectors: [["app-get-podval"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container"], [1, "getPodval", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "podvalZagolovok"], [1, "podvalCovichki"], ["aria-hidden", "true", 1, "fa", "fa-quote-left"], [1, "getPodvalText"], [1, "podvalText"], [1, "name"]],
      template: function GetPodvalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Share Your Company Testimonials ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This template has everything I was looking for my business website to have. From easy-to-customize pages to flawlessly working web tools, Monstroid\xB2 is my number one choice!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-Nasir Atamazov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".getPodval[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  text-align: center;\r\n}\r\n.podvalZagolovok[_ngcontent-%COMP%]{\r\n  font-size: 45px;\r\n  font-weight: 200;\r\n  color: #151515;\r\n}\r\n.podvalText[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  color: #888;\r\n\r\n}\r\n.podvalCovichki[_ngcontent-%COMP%]{\r\n  color: #2ed3ae;\r\n  font-size: 26px ;\r\n  margin-top: 20px;\r\n}\r\n.getPodvalText[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 700px;\r\n  max-width: 100%;\r\n\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n  color: #000;\r\n  margin-top: 15px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LXBvZHZhbC9nZXQtcG9kdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXOztBQUViO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9nZXQtcG9kdmFsL2dldC1wb2R2YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZXRQb2R2YWx7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb2R2YWxaYWdvbG92b2t7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6ICMxNTE1MTU7XHJcbn1cclxuLnBvZHZhbFRleHR7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBjb2xvcjogIzg4ODtcclxuXHJcbn1cclxuLnBvZHZhbENvdmljaGtpe1xyXG4gIGNvbG9yOiAjMmVkM2FlO1xyXG4gIGZvbnQtc2l6ZTogMjZweCA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uZ2V0UG9kdmFsVGV4dHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLm5hbWV7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetPodvalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-get-podval',
          templateUrl: './get-podval.component.html',
          styleUrls: ['./get-podval.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 40,
      vars: 0,
      consts: [[1, "getHeader"], [1, "fotoHeader"], [1, "menublack"], ["id", "menuOkno", 1, "material-icons"], [1, "container"], [1, "menu", "d-flex"], [1, "logotip", "animate__animated", "animate__animated", "animate__fadeInDownBig"], ["id", "mobileNavigaci", 1, "mobileNav", "animate__animated", "animate__fadeInDownBig"], [1, "getNav"], [1, "mobNavigaci", "wow", "animate__animated", "animate__fadeInDownBig", 2, "color", "#2ed3ae"], [1, "mobNavigaci", "wow", "animate__animated", "animate__fadeInDownBig"], [1, "menubtn", "animate__animated", "animate__animated", "animate__fadeInDownBig"], [1, "bordlini"], [1, "getZag"], [1, "getZagolovok"], [1, "zagolovok", "wow", "animate__animated", "animate__fadeInUp"], [1, "tuo", "wow", "animate__animated", "animate__fadeInUp"], [1, "new", "wow", "animate__animated", "animate__fadeInUp"], [1, "getbtn", "wow", "animate__animated", "animate__fadeInUp"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "FEATURES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PAGES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EVINTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "BLOG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "GALLERY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SHOP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ELEMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041F\u041E\u0414\u041F\u0418\u0421\u0410\u0422\u042C\u0421\u042F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Monstroid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " New HTML Templates Generation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n}\r\nheader[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n.fotoHeader[_ngcontent-%COMP%]{background-image: url(\"/assets/image/headerFoto.png\");\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 1000px;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n.logotip[_ngcontent-%COMP%]{background-image: url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/logo-inverse-347x65.png\");\r\n  width: 200px;\r\n  height: 33px;\r\n  background-size: cover;\r\n\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  margin-top: 60px;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n}\r\n.getNav[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin-left: 25px;\r\n  display: flex;\r\n}\r\n.mobNavigaci[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n  font-weight: 600;\r\n  margin-top: 15px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n.mobNavigaci[_ngcontent-%COMP%]:hover{\r\n  color: #2ed3ae;\r\n  transition: 0.4s;\r\n}\r\n.menubtn[_ngcontent-%COMP%]{ color: white;\r\n  border: 1px solid white ;\r\n  padding: 10px 13px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  margin-left: 40px;\r\n  box-sizing: border-box;\r\n\r\n\r\n}\r\n.menubtn[_ngcontent-%COMP%]:hover{\r\n  transition: 0.3s;\r\n  background-color: #2ed3ae;\r\n  border-width: 0;\r\n}\r\n.bordlini[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #4c9081 ;\r\n  margin-top: 50px;\r\n}\r\n.zagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 90px;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n.getZagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left:50%;\r\n  z-index: 1;\r\n  transform: translate3d(-50%,-50%,0);\r\n\r\n}\r\n.tuo[_ngcontent-%COMP%]{font-size: 55px;\r\n  color: #4c9081;\r\n  font-weight: 600;\r\n  margin-left: 20px;\r\n  position: absolute;\r\n  top:-5px;\r\n}\r\n.new[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 40px;\r\n}\r\n.getbtn[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 20px;\r\n  border: 1px solid white ;\r\n  padding: 20px 13px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  background-color: #2ed3ae;\r\n  box-sizing: border-box;\r\n  border-width: 0;\r\n  width: 200px;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n}\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  transition: 0.3s;\r\n}\r\n@media only screen and (max-width: 420px) {\r\n  .fotoHeader[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxZQUFZLHFEQUFxRDtFQUMvRCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0EsU0FBUyxzSEFBc0g7RUFDN0gsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBLFVBQVUsWUFBWTtFQUNwQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7OztBQUd4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUNBQW1DOztBQUVyQztBQUVBLEtBQUssZUFBZTtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbmhlYWRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3RvSGVhZGVye2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2UvaGVhZGVyRm90by5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9nb3RpcHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvbG9nby1pbnZlcnNlLTM0N3g2NS5wbmdcIik7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG4ubWVudXtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuLm5hdntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2V0TmF2IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1vYk5hdmlnYWNpe1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tb2JOYXZpZ2FjaTpob3ZlcntcclxuICBjb2xvcjogIzJlZDNhZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubWVudWJ0bnsgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlIDtcclxuICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cclxufVxyXG4ubWVudWJ0bjpob3ZlcntcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5ib3JkbGluaXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRjOTA4MSA7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uemFnb2xvdm9re1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdldFphZ29sb3Zva3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7XHJcblxyXG59XHJcblxyXG4udHVve2ZvbnQtc2l6ZTogNTVweDtcclxuICBjb2xvcjogIzRjOTA4MTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6LTVweDtcclxufVxyXG4ubmV3e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmdldGJ0bntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlIDtcclxuICBwYWRkaW5nOiAyMHB4IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmdldGJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5mb3RvSGVhZGVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/important/important.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/important/important.component.ts ***!
    \**************************************************/

  /*! exports provided: ImportantComponent */

  /***/
  function srcAppImportantImportantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportantComponent", function () {
      return ImportantComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImportantComponent = /*#__PURE__*/function () {
      function ImportantComponent() {
        _classCallCheck(this, ImportantComponent);
      }

      _createClass(ImportantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImportantComponent;
    }();

    ImportantComponent.ɵfac = function ImportantComponent_Factory(t) {
      return new (t || ImportantComponent)();
    };

    ImportantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImportantComponent,
      selectors: [["app-important"]],
      decls: 10,
      vars: 0,
      consts: [[1, "important"], [1, "importFoto"], [1, "container"], [1, "importantObj", "wow", "animate__animated", "animate__fadeIn"], [1, "importantZag"], [1, "importantText"], [1, "importantBtn"]],
      template: function ImportantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Like What We Offer?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start with this demo now or check out the others to choose what you need.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "VIEW NOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".importFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"/assets/image/stacan.png\");\r\n  width: 100%;\r\n  height: 700px ;\r\n  background-size: cover;\r\n  background-position: left;\r\n  overflow: hidden;\r\n}\r\n.importantObj[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.importantZag[_ngcontent-%COMP%]{\r\n  font-size: 60px;\r\n  font-weight: 200;\r\n}\r\n.importantText[_ngcontent-%COMP%]{\r\n  margin-top: 28px;\r\n  color: #888;\r\n}\r\n.importantBtn[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  color: white;\r\n  border-color: #2ed3ae;\r\n  margin-top: 35px;\r\n  padding: 17px 40px 15px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  border-width: 0;\r\n  border-radius: 4px ;\r\n}\r\n.importantBtn[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  transition: 0.4s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0YW50L2ltcG9ydGFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bUNBQ2lDO0VBQ2pDLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0YW50L2ltcG9ydGFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydEZvdG97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcIi9hc3NldHMvaW1hZ2Uvc3RhY2FuLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwMHB4IDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1wb3J0YW50T2Jqe1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5pbXBvcnRhbnRaYWd7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5pbXBvcnRhbnRUZXh0e1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5pbXBvcnRhbnRCdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmVkM2FlO1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgcGFkZGluZzogMTdweCA0MHB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggO1xyXG59XHJcbi5pbXBvcnRhbnRCdG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-important',
          templateUrl: './important.component.html',
          styleUrls: ['./important.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/selector/selector.component.ts":
  /*!************************************************!*\
    !*** ./src/app/selector/selector.component.ts ***!
    \************************************************/

  /*! exports provided: SelectorComponent */

  /***/
  function srcAppSelectorSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectorComponent", function () {
      return SelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SelectorComponent = /*#__PURE__*/function () {
      function SelectorComponent() {
        _classCallCheck(this, SelectorComponent);
      }

      _createClass(SelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectorComponent;
    }();

    SelectorComponent.ɵfac = function SelectorComponent_Factory(t) {
      return new (t || SelectorComponent)();
    };

    SelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectorComponent,
      selectors: [["app-selector"]],
      decls: 11,
      vars: 0,
      consts: [[1, "selector"], [1, "container"], [1, "row"], [1, "col-md-7", "col-12"], [1, "selectorFoto"], [1, "col-md-5", "col-12"], [1, "getSelectorText"], [1, "selectorZagolvok"], [1, "selectorText"]],
      template: function SelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Consistency is the Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Monstroid\xB2 boasts clean and crispy design, bulletproof layout consistency and intuitive navigation. The template was created by top industry leaders in web design and user experience. Improve your audience engagement and loyalty with simple and user friendly tools offered by our template. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".selector[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  padding-top: 150px;\r\n  margin-top: 150px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.selectorFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/home-commerial-1-652x491.jpg\");\r\n  width: 550px;\r\n  height: 451px;\r\n  background-size: cover;\r\n}\r\n\r\n.getSelectorText[_ngcontent-%COMP%]{\r\n  margin-left: 50px;\r\n  color: white;\r\n  margin-top: 50px;\r\n}\r\n\r\n.selectorZagolvok[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  font-weight: 200;\r\n}\r\n\r\n.selectorText[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs2R0FFMkc7RUFDM0csWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Rvci9zZWxlY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnNlbGVjdG9yRm90b3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG5cclxuICAgIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9ob21lLWNvbW1lcmlhbC0xLTY1Mng0OTEuanBnXCIpO1xyXG4gIHdpZHRoOiA1NTBweDtcclxuICBoZWlnaHQ6IDQ1MXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmdldFNlbGVjdG9yVGV4dHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uc2VsZWN0b3JaYWdvbHZva3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uc2VsZWN0b3JUZXh0e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selector',
          templateUrl: './selector.component.html',
          styleUrls: ['./selector.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\насир\Desktop\angular\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map