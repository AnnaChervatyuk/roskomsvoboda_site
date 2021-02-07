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
eval("\n\n__webpack_require__(/*! ../style/app.scss */ \"./src/style/app.scss\");\n\n// Collapse accoridion every time dropdown is shown\n$('.dropdown-accordion').on('show.bs.dropdown', function (event) {\n  var accordion = $(this).find($(this).data('accordion'));\n  accordion.find('.panel-collapse.in').collapse('hide');\n});\n\n// Prevent dropdown to be closed when we click on an accordion link\n$('.dropdown-accordion').on('click', 'a[data-toggle=\"collapse\"]', function (event) {\n  event.preventDefault();\n  event.stopPropagation();\n  $($(this).data('parent')).find('.panel-collapse.in').collapse('hide');\n  $($(this).attr('href')).collapse('show');\n});\n\n// открыть доп.соцети в выпадающем меню на моб\n// $('.dropleft').on('click', 'button[data-toggle=\"dropdown\"]', function (event) {\n//   event.preventDefault();\n//   event.stopPropagation();\n// })\n\n$(document).ready(function () {\n  var menu = $(\"#nav-bar-filter\");\n  var parent = $(\".filter-wrapper\");\n  var btnSwitchTheme = $(\"#switch_theme\");\n  var isLightTheme = window['localStorage'].getItem(\"isLightTheme\") == \"false\" ? isLightTheme = false : isLightTheme = true;\n  var compileDescMenu = false;\n\n  //кнопка меню на мобиле\n  function chooseBtnIcon() {\n    if ($(\"#mobail-menu\").hasClass(\"show\")) {\n      $(\"#mobile-menu\").attr(\"class\", \"icons icons--menu\");\n      $(\"#mobile-menu use\").attr(\"xlink:href\", \"./images/sprite.svg#icon-menu\");\n    } else {\n      $(\"#mobile-menu\").attr(\"class\", \"icons icons--close\");\n      $(\"#mobile-menu use\").attr(\"xlink:href\", \"./images/sprite.svg#icon-close\");\n    }\n  }\n\n  //переключение темы\n  function switchTheme() {\n\n    isLightTheme = !isLightTheme;\n    window['localStorage'].setItem(\"isLightTheme\", isLightTheme);\n    applyTheme();\n  }\n\n  function applyTheme() {\n    if (isLightTheme) {\n      $(\"body\").css('color', '#1D1D1B');\n      $(\"body\").css('background-color', '#ffffff');\n      $(\".container-fluid\").hasClass(\"dark_theme\") ? $(\".container-fluid\").removeClass(\"dark_theme\") : '';\n      $(\".nav-link__logo-copyright>img\").attr(\"src\", \"./images/logo_creative.png\");\n      $(\".nav-link__logo>img\").attr(\"src\", \"./images/logo.svg\");\n    } else {\n      $(\"body\").css('color', '#E4E4E4');\n      $(\"body\").css('background-color', '#1A1C1E');\n      $(\".container-fluid\").hasClass(\"dark_theme\") ? \"\" : $(\".container-fluid\").addClass(\"dark_theme\");\n      $(\".nav-link__logo-copyright>img\").attr(\"src\", \"./images/logo_creative_white.png\");\n     $(\".nav-link__logo\").css('background', 'none'); \n $(\".nav-link__logo>img\").attr(\"src\", \"./images/logo_dark.svg\");\n    }\n  }\n\n  //скрывающиеся элементы меню\n  function checkWidthMenu() {\n    if (parent.height() > 61) {\n      menu.css('justify-content', 'center');\n    } else {\n      menu.css('justify-content', 'flex-start');\n    }\n  }\n\n  function checkPosition() {\n    if ($('.has-megamenu').offset().top > 90) {\n      $('#list-work_desc').css('margin-top', '100px');\n    } else {\n      $('#list-work_desc').css('margin-top', '58px');\n    }\n  }\n\n  function checkWidth() {\n    var windowWidth = $('body').innerWidth(),\n        promoBanner = $(\".promo-banner\"),\n        btnSocial = $(\".btn-footer\"),\n        divPromo = $(\".promo-banner\"),\n        imgPromo = $(\".promo-banner>a>img\"),\n        imgPromoBack = $(\".promo-banner_background\"),\n        blockMenuWork = $(\"#list-work_mob\");\n\n    if (windowWidth >= 1200) {\n      //добавить или удалить класс на разных разрешениях\n      promoBanner.addClass(\"fixed sticky-top\");\n      for (var i = 0; i < divPromo.length; i++) {\n        var background = imgPromo.eq(i).attr('src');\n        imgPromoBack.eq(i).css('backgroundImage', 'none');\n      }\n    } else {\n      promoBanner.removeClass(\"fixed sticky-top\");\n    }\n\n    if (windowWidth > 767 && windowWidth < 1200) {\n      // добавление размытого фона для баннера на план\n      for (var i = 0; i < divPromo.length; i++) {\n        var background = imgPromo.eq(i).attr('src');\n        imgPromoBack.eq(i).css('backgroundImage', 'url(' + background + ')');\n      }\n    }\n\n    if (windowWidth >= 768) {\n      // перемещние блока с соц.сетями в навигатор\n      if (!compileDescMenu) {\n        $('<ul class=\"nav navbar list-work list-work-without-bg\"></ul>').appendTo($(\"#list-work_mob\"));\n        $(\"#list-work_mob>.list-work>.without-bg\").appendTo($('.list-work-without-bg'));\n        compileDescMenu = true;\n      }\n\n      $('#social-mob>div').appendTo($('#social-desc'));\n      $('#list-news_mob>ul').appendTo($('#list-news_desc'));\n      $('#list-monitoring_mob>ul').appendTo($('#list-monitoring_desc'));\n      $('#list-work_mob>ul').appendTo($('#list-work_desc'));\n      $('#more-social_drpdwn').css('display', 'block');\n      $('#btn-zen').appendTo($('#btn-zen__item'));\n      $('#btn-zen>span').css('display', 'inline');\n      $('#btn-inst').appendTo($('#btn-inst__item'));\n      $('#btn-inst>span').css('display', 'inline');\n      $('#btn-youtube').appendTo($('#btn-youtube__item'));\n      $('#btn-youtube>span').css('display', 'inline');\n      $('#btn-rss').appendTo($('#btn-rss__item'));\n      $('#btn-rss>span').css('display', 'inline');\n    } else {\n      $('#social-desc>div').appendTo($('#social-mob'));\n      $('#list-monitoring_desc>ul').appendTo($('#list-monitoring_mob'));\n      $('#list-work_desc>ul').appendTo($('#list-work_mob'));\n      $('#list-news_desc>ul').appendTo($('#list-news_mob'));\n      $('#more-social_drpdwn').css('display', 'none');\n      $('#btn-zen').appendTo($('#btn-social-group'));\n      $('#btn-zen>span').css('display', 'none');\n      $('#btn-inst').appendTo($('#btn-social-group'));\n      $('#btn-inst>span').css('display', 'none');\n      $('#btn-youtube').appendTo($('#btn-social-group'));\n      $('#btn-youtube>span').css('display', 'none');\n      $('#btn-rss').appendTo($('#btn-social-group'));\n      $('#btn-rss>span').css('display', 'none');\n    }\n  }\n\n  checkWidthMenu(); // меню плнашет и десктоп\n  checkWidth(); // проверит при загрузке страницы\n  checkPosition(); // высота меню - двигать или нет попап\n  applyTheme(); // пррименить цвет\n\n  $(window).on(\"resize\", function (e) {\n    checkWidth(); // проверит при изменении размера окна клиента\n    checkWidthMenu(); //меню плнашет и десктоп\n    checkPosition(); // высота меню - двигать или нет попап\n  });\n  $('#mobile-menu').on(\"click\", function () {\n    chooseBtnIcon();\n  });\n  $(\".container-fluid\").on(\"click\", function () {\n    chooseBtnIcon();\n  });\n  btnSwitchTheme.on(\"click\", function () {\n    switchTheme();\n  });\n});\n\n//# sourceURL=webpack:///./src/app/index.js?");

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
