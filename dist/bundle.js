/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/app.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../style/app.scss */ \"./src/style/app.scss\");\n\n// import '../public/sprite.svg';\n// import symbol from '../public/sprite.svg';\n// Collapse accoridion every time dropdown is shown\n$('.dropdown-accordion').on('show.bs.dropdown', function (event) {\n    var accordion = $(this).find($(this).data('accordion'));\n    accordion.find('.panel-collapse.in').collapse('hide');\n});\n// Prevent dropdown to be closed when we click on an accordion link\n$('.dropdown-accordion').on('click', 'a[data-toggle=\"collapse\"]', function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');\n    $($(this).attr('href')).collapse('show');\n});\n\n// открыть доп.соцети в выпадающем меню на моб\n$('.dropleft').on('click', 'button[data-toggle=\"dropdown\"]', function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    $(\"#more-social\").toggleClass(\"show\");\n});\n\n$('#mobile-menu').click(function () {\n    if ($(\"#more-social\").attr('class') == 'dropdown-menu show') {\n        $(\"#more-social\").attr(\"class\", \"dropdown-menu\");\n    }\n\n    if ($(\"#mobile-menu\").attr('class') == 'icons icons--menu') {\n        $(\"#mobile-menu\").attr(\"class\", \"icons icons--close\");\n        $(\"#mobile-menu use\").attr(\"xlink:href\", \"./images/sprite.svg#icon-close\");\n    } else {\n        $(\"#mobile-menu\").attr(\"class\", \"icons icons--menu\");\n        $(\"#mobile-menu use\").attr(\"xlink:href\", \"./images/sprite.svg#icon-menu\");\n    }\n});\n\n$(document).ready(function () {\n    function checkWidth() {\n        var windowWidth = $('body').innerWidth(),\n            promoBanner = $(\".promo-banner\");\n        if (windowWidth >= 1200) {\n            //добавить или удалить класс на разных разрешениях\n            promoBanner.addClass(\"fixed sticky-top\");\n            // $('.carousel-donate').removeAttr(\"data-flickity\")\n        } else {\n            promoBanner.removeClass(\"fixed sticky-top\");\n        }\n\n        if (windowWidth >= 768) {\n            // перемещние блока с соц.сетями в навигатор\n            $('#social-mob>div').appendTo($('#social-desc'));\n            $('#more-social').addClass(\"dropdown-menu-right\");\n        } else {\n            $('#social-desc>div').appendTo($('#social-mob'));\n        }\n\n        if (windowWidth > 767 && windowWidth < 1200) {\n            // перемещние блока с соц.сетями в навигатор\n            var divPromo = $(\".promo-banner\");\n            var imgPromo = $(\".promo-banner>a>img\");\n            var imgPromoBack = $(\".promo-banner_background\");\n            for (var i = 0; i < divPromo.length; i++) {\n                var background = imgPromo.eq(i).attr('src');\n                imgPromoBack.eq(i).css('backgroundImage', 'url(' + background + ')');\n            }\n        }\n    }\n\n    checkWidth(); // проверит при загрузке страницы\n\n    $(window).resize(function () {\n        checkWidth(); // проверит при изменении размера окна клиента\n    });\n});\n\n//скрывающиеся элементы меню\n$(document).ready(function () {\n    var menu = $(\"#nav-bar-filter\"),\n        subMenu = $(\".subfilter\"),\n        more = $(\"#more-nav-popup\"),\n        parent = $(\".filter-wrapper\"),\n        windowWidth = $(window).width(),\n        smw = more.outerWidth(),\n        btnGroupLeft = $(\"#btn-group__nav\");\n\n    menu.children(\"li\").each(function () {\n        var w = $(this).outerWidth();\n        if (w > smw) smw = w + 20;\n        return smw;\n    });\n    more.css('width', smw);\n    var list = [];\n\n    for (var i = 0; i < menu.children(\"li\").size(); i++) {\n        list.push(menu.children(\"li\").eq(i).outerWidth());\n    }\n\n    var w = 0,\n\n    // outerWidth = parent.width() - (smw + btnGroupLeft.width());\n    outerWidth = windowWidth - (smw + btnGroupLeft.width() + 90); // сколько остается ширины на меню\n\n    for (var i = 0; i < menu.children(\"li\").size(); i++) {\n        w += menu.children(\"li\").eq(i).outerWidth();\n        if (w > outerWidth) {\n            w -= menu.children(\"li\").eq(i - 1).outerWidth();\n            menu.children(\"li\").eq(i - 1).nextAll().detach().css('opacity', 0).prependTo(\".subfilter\").stop().animate({\n                'opacity': 1\n            }, 300);\n            break;\n        } else {\n            list.splice(0, 1);\n        }\n    }\n    console.log(\"windowWidth\", windowWidth);\n    console.log(\"smw\", smw);\n    console.log(\"btnGroupLeft\", btnGroupLeft.width());\n    console.log(\"outerWidth\", outerWidth);\n    console.log(\"w\", w);\n    console.log(\"LIST\", list);\n\n    function contract() {\n        //уменьшение ширины\n        console.log(\"----уменьшение----\");\n        var w = 0,\n            outerWidth = windowWidth - (smw + btnGroupLeft.width() + 90);\n        for (var i = 0; i < menu.children(\"li\").size(); i++) {\n            w += menu.children(\"li\").eq(i).outerWidth();\n            console.log(\"w - ширина меню\", w);\n            console.log(\"outerWidth - ширина остальных элементов\", outerWidth);\n            if (w > outerWidth) {\n                console.log(\"w > outerWidth\", menu.children(\"li\").eq(i).outerWidth());\n                list.unshift(menu.children(\"li\").eq(i).outerWidth());\n                menu.children(\"li\").eq(i - 1).nextAll().detach().css('opacity', 0).prependTo(\".subfilter\").stop().animate({\n                    'opacity': 1\n                }, 300);\n                break;\n            }\n        }\n        console.log(\"LIST\", list);\n    }\n\n    function expand() {\n        //увеличение ширины\n        console.log(\"----увеличение----\");\n        // var reversed = list.reverse();\n        var w = 0,\n            ww = list.reduce(function (a, b) {\n            return a + b;\n        });\n        // outerWidth = parent.width() - smw - btnGroupLeft.width();\n        outerWidth = windowWidth - (smw + btnGroupLeft.width() + 90);\n        menu.children(\"li\").each(function () {\n            console.log(\"$(this).outerWidth()\", $(this).outerWidth());\n            w += $(this).outerWidth();\n            // w += menu.children(\"li\").eq(i).outerWidth();\n            return w;\n        });\n        console.log(\"btnGroupLeft\", btnGroupLeft.width());\n        console.log(\"ww\", ww);\n\n        console.log(\"parent\", parent);\n        console.log(\"outerWidth = parent.width() - smw\", outerWidth);\n        console.log(\"parent\", parent.width());\n        console.log(\"smw\", more, smw);\n        console.log(\"menu\", menu);\n        console.log(\"w_1\", w);\n        // console.log(\"subMenu.children().eq(i).outerWidth()_1\", subMenu.children(\"li\").eq(i).outerWidth())\n        // console.log(\"subMenu.children().size\", subMenu.children(\"li\").size())\n        for (var i = 0; i < subMenu.children(\"li\").size(); i++) {\n            // w += subMenu.children(\"li\").eq(i).outerWidth();\n            ww += list[0];\n            // console.log(\"list[i]\", list[1])\n            // console.log(\"!\", subMenu.children(\"li\").eq(i))\n            // console.log(\"subMenu.children().eq(i).outerWidth()_2\", subMenu.children(\"li\").eq(i))\n            console.log(\"w_2\", w);\n            if (ww > outerWidth) {\n                console.log(\"w > outerWidt\");\n\n                var a = 0;\n                while (a <= i) {\n                    list.splice(0, 1);\n                    console.log(\"subMenu\", subMenu.children(\"li\"));\n                    subMenu.children(\"li\").eq(a).css('opacity', 0).detach().appendTo(\"#nav-bar-filter\").stop().animate({\n                        'opacity': 1\n                    }, 800);\n                    a++;\n                }\n                break;\n            }\n        }\n    }\n\n    function renderMoreBtn() {\n        console.log(\"renderMoreBtn\");\n        var moreBtn = $(\".btn-more-nav-popup\");\n        if (subMenu.children(\"li\").size() == 0) {\n            moreBtn.removeClass(\"d-md-block\");\n            $('.dropdown__more-nav-popup>.dropdown-menu').removeClass(\"show\");\n        } else {\n            moreBtn.addClass(\"d-md-block\");\n        }\n    }\n\n    // contract();\n    renderMoreBtn();\n\n    $(window).on(\"resize\", function (e) {\n        $(window).width() > windowWidth ? expand() : contract();\n        windowWidth = $(window).width();\n        renderMoreBtn();\n    });\n});\n//конец скрывающихся элементов меню\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),

/***/ "./src/style/app.scss":
/*!****************************!*\
  !*** ./src/style/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/app.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/app.scss?");

/***/ })

/******/ });