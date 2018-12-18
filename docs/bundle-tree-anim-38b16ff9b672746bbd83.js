var Demo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"tree-anim": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpDemo"] = window["webpackJsonpDemo"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tree; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var RIGHT_ANGLE = _math__WEBPACK_IMPORTED_MODULE_0__["TAU"] / 4;

function collectPoints(tree, x, y, angle, depth) {
  var _tree$config = tree.config,
      angleDelta = _tree$config.angle,
      segments = _tree$config.segments,
      radiuses = _tree$config.radiuses;
  var upX = Math.cos(angle) * segments[depth];
  var upY = Math.sin(angle) * segments[depth];
  var x1 = x + Math.cos(angle - RIGHT_ANGLE) * radiuses[depth];
  var y1 = y + Math.sin(angle - RIGHT_ANGLE) * radiuses[depth];
  var x2 = x + upX + Math.cos(angle - RIGHT_ANGLE) * radiuses[depth + 1];
  var y2 = y + upY + Math.sin(angle - RIGHT_ANGLE) * radiuses[depth + 1];
  var nextDepth = depth + 1;
  tree.points.push(x1, y1, depth, x2, y2, nextDepth);

  if (nextDepth < segments.length - 1) {
    var angleLeft = angle - angleDelta * (0.5 + Math.random() * 0.5);
    var angleRight = angle + angleDelta * (0.5 + Math.random() * 0.5);
    collectPoints(tree, x + upX, y + upY, angleLeft, nextDepth);
    collectPoints(tree, x + upX, y + upY, angleRight, nextDepth);
  }

  if (nextDepth === segments.length - 2) {
    tree.tips.push({
      x: x + upX,
      y: y + upY
    });
  }

  var x4 = x + Math.cos(angle + RIGHT_ANGLE) * radiuses[depth];
  var y4 = y + Math.sin(angle + RIGHT_ANGLE) * radiuses[depth];
  var x3 = x + upX + Math.cos(angle + RIGHT_ANGLE) * radiuses[depth + 1];
  var y3 = y + upY + Math.sin(angle + RIGHT_ANGLE) * radiuses[depth + 1];
  tree.points.push(x3, y3, nextDepth, x4, y4, depth);
}

var Tree = function Tree(config) {
  _classCallCheck(this, Tree);

  this.config = config;
  var segments = config.segments,
      radiuses = config.radiuses;

  if (segments.length !== radiuses.length) {
    throw new Error("segments and radiuses must have the same number of elements");
  }

  segments.push(segments[segments.length - 1]);
  radiuses.push(1);
  this.points = [];
  this.tips = [];

  var _config$start = _slicedToArray(config.start, 3),
      x = _config$start[0],
      y = _config$start[1],
      angle = _config$start[2];

  collectPoints(this, x, y, angle, 0);
};



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _seasons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seasons */ "./src/seasons.js");


var r = (1 + Math.sqrt(5)) / 2;
var r2 = r * r;
var r3 = r * r * r;
var r4 = r * r * r * r;
var r5 = r * r * r * r * r;
var LEN = 200;
var WIDTH = 40;
/* harmony default export */ __webpack_exports__["default"] = ({
  // trees are drawn inside [0,0 ... 1000,1000], this renders it a bit higher for design reasons
  viewBox: "0 15 1000 1000",
  start: [500, 1000, -_math__WEBPACK_IMPORTED_MODULE_0__["TAU"] / 4],
  angle: _math__WEBPACK_IMPORTED_MODULE_0__["TAU"] * 0.125,
  segments: [LEN, LEN / r, LEN / r2, LEN / r3, LEN / r4, LEN / r5],
  radiuses: [WIDTH, WIDTH / r, WIDTH / r2, WIDTH / r3, WIDTH / r4, WIDTH / r5],
  gravity: 4,
  minLeaf: 0.2,
  maxLeaf: 0.6,
  numLeafs: [500, 100, 100, 500],
  leafWindFactor: [0.01, 0.01, 0.05, 0.02],
  windStrength: [0.2, 0.1, 0.5, 0.01],
  horizon: 0.61,
  frostLimit: 80,
  // setting this higher might slow the simulation down
  decayRate: 13,
  decaySize: 40,
  seasonLength: 60 * 45,
  fullCrownSize: 75,
  fullOpacity: 0.4,
  minCrownSize: 8,
  minOpacity: 0.3,
  initialSeason: Object(_seasons__WEBPACK_IMPORTED_MODULE_1__["getCurrentSeason"])(),
  grassCount: 100,
  grassLength: 50
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _noise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noise */ "./src/noise.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _seasons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seasons */ "./src/seasons.js");
/* harmony import */ var _particle_modes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./particle-modes */ "./src/particle-modes.js");
/* harmony import */ var _loadGrassPalette__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadGrassPalette */ "./src/loadGrassPalette.js");





 // noinspection ES6UnusedImports





var canvas, ctx, tree, start, width, height, leaf, bgContext, grassPalette;
var background,
    decayStart,
    seasonCount = 0,
    frost = 0;
var season = _config__WEBPACK_IMPORTED_MODULE_3__["default"].initialSeason;
var leafWindFactor = _config__WEBPACK_IMPORTED_MODULE_3__["default"].leafWindFactor[season];
var windStrength = _config__WEBPACK_IMPORTED_MODULE_3__["default"].windStrength[season];
var noise = new _noise__WEBPACK_IMPORTED_MODULE_4__["default"]();
var LEAF_SIZE = 4;
var LEAF_SCALE = 0.5;
var leafs = new Float32Array(_config__WEBPACK_IMPORTED_MODULE_3__["default"].numLeafs.reduce(function (a, b) {
  return Math.max(a, b);
}, 0) * LEAF_SIZE);

function initLeafs() {
  var numLeafs = _config__WEBPACK_IMPORTED_MODULE_3__["default"].numLeafs,
      initialSeason = _config__WEBPACK_IMPORTED_MODULE_3__["default"].initialSeason;
  var autommLeavesCount = numLeafs[_seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"]] * LEAF_SIZE;

  for (var i = 0; i < leafs.length; i += LEAF_SIZE) {
    leafs[i] = Math.random() * width;
    var space = initialSeason < _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"] ? 1 : i < autommLeavesCount ? 0.5 : 1;
    leafs[i + 1] = Math.random() * -height - space * height;
    leafs[i + 2] = Math.random();
    leafs[i + 3] = initialSeason < _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"] ? _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LOCKED"] : initialSeason === _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"] && i < autommLeavesCount ? _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LEAF"] : _particle_modes__WEBPACK_IMPORTED_MODULE_8__["SNOW"];
  }
}

function updateSeason() {
  document.body.className = "season-" + season;
}

function drawLeafOrSnow(context, x, y, z, i, isLeaf, didHitGround) {
  var rnd0 = noise.noise2D(x * 0.0001 + i, y * 0.001);
  var rnd1 = noise.noise2D(y * 0.0001, x * 0.001); // const dx = noise.noise2D( y, x);
  // const dy = noise.noise2D( x, y);
  //
  // x += dx;
  // y += dy;

  x += rnd1;
  y -= rnd1;
  var angle = rnd0 * _math__WEBPACK_IMPORTED_MODULE_5__["TAU"];
  context.save();
  context.translate(x - 32, y + (didHitGround ? -decayStart : 0) - 18);

  if (isLeaf || !didHitGround) {
    context.rotate(angle);
  }

  var s = _config__WEBPACK_IMPORTED_MODULE_3__["default"].minLeaf + z * (_config__WEBPACK_IMPORTED_MODULE_3__["default"].maxLeaf - _config__WEBPACK_IMPORTED_MODULE_3__["default"].minLeaf);
  context.scale(s, s);

  if (isLeaf) {
    context.drawImage(leaf, 0, 0);
  } else {
    if (didHitGround) {
      context.fillRect(0, 0, 48, 10);
    } else {
      context.fillRect(0, 0, 24, 24);
    }
  }

  context.restore();
}

function decayBackground() {
  var x = Math.random() * (width - _config__WEBPACK_IMPORTED_MODULE_3__["default"].decaySize);
  var y = Math.random() * (height - decayStart - _config__WEBPACK_IMPORTED_MODULE_3__["default"].decaySize);
  var imageData = bgContext.getImageData(x, y, _config__WEBPACK_IMPORTED_MODULE_3__["default"].decaySize, _config__WEBPACK_IMPORTED_MODULE_3__["default"].decaySize);
  var dataWidth = imageData.data.length;
  var changed = false;

  for (var i = 0; i < dataWidth; i += 4) {
    var r = imageData.data[i];
    var g = imageData.data[i + 1];
    var b = imageData.data[i + 2];
    var a = imageData.data[i + 3];

    if (a === 255) {
      if (g > 66) {
        if (r < g) {
          r += 6;
        } else {
          if (r > 140 || g < 120) {
            r -= 1;
          }

          g -= 1;
        }

        imageData.data[i] = r;
        imageData.data[i + 1] = g;
        changed = true;
      }
    } else {
      if (season < _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"] && r + b > g) {
        imageData.data[i + 3] -= 8;
        changed = true;
      }
    }
  }

  if (changed) {
    bgContext.putImageData(imageData, x, y);
  }
}

function lookupGrassStyle(n, n2) {
  var _grassPalette = grassPalette,
      width = _grassPalette.width,
      height = _grassPalette.height,
      colors = _grassPalette.colors;
  var x = (width - 1) * n | 0;
  var y = (height - 1) * n2 | 0; //console.log("lookupGrassStyle", n, n2, x, y);

  return grassPalette.colors[width * y + x];
}

function drawGrass() {
  var grassLength = _config__WEBPACK_IMPORTED_MODULE_3__["default"].grassLength,
      horizon = _config__WEBPACK_IMPORTED_MODULE_3__["default"].horizon;

  for (var i = 0; i < _config__WEBPACK_IMPORTED_MODULE_3__["default"].grassCount; i++) {
    var x = Math.random() * width | 0;
    var z = Math.random();
    var horizonY = (height * horizon | 0) - decayStart;
    var y = horizonY + (background.height - horizonY) * z | 0;
    var angleNoise = noise.noise2D(x * 0.01, (y + i) * 0.01);
    var seasonMultiplier = season === _seasons__WEBPACK_IMPORTED_MODULE_7__["SPRING"] ? Math.min(1, seasonCount * 3 / _config__WEBPACK_IMPORTED_MODULE_3__["default"].seasonLength) : 1;
    var lengthNoise = (0.5 + noise.noise2D(x * 0.004, y * 0.04) * 0.7) * seasonMultiplier;
    var c2 = noise.noise2D(x * 0.0005, y * 0.004);
    var c1 = Math.random();
    var angle = _math__WEBPACK_IMPORTED_MODULE_5__["TAU"] / 4 + angleNoise * _math__WEBPACK_IMPORTED_MODULE_5__["TAU"] / 16 - _math__WEBPACK_IMPORTED_MODULE_5__["TAU"] / 32;
    bgContext.strokeStyle = lookupGrassStyle(c1, c2);
    bgContext.lineWidth = 1 + z * 3;
    bgContext.beginPath();
    bgContext.moveTo(x, y);
    bgContext.lineTo(x + Math.cos(angle) * grassLength * lengthNoise, y + Math.sin(angle) * grassLength * lengthNoise);
    bgContext.stroke();
  }

  bgContext.opacity = 1;
}

function render() {
  var gravity = _config__WEBPACK_IMPORTED_MODULE_3__["default"].gravity,
      horizon = _config__WEBPACK_IMPORTED_MODULE_3__["default"].horizon,
      fullOpacity = _config__WEBPACK_IMPORTED_MODULE_3__["default"].fullOpacity,
      fullCrownSize = _config__WEBPACK_IMPORTED_MODULE_3__["default"].fullCrownSize,
      minCrownSize = _config__WEBPACK_IMPORTED_MODULE_3__["default"].minCrownSize,
      minOpacity = _config__WEBPACK_IMPORTED_MODULE_3__["default"].minOpacity,
      seasonLength = _config__WEBPACK_IMPORTED_MODULE_3__["default"].seasonLength;
  seasonCount++;

  if (seasonCount > seasonLength) {
    seasonCount = 0;
    season = season + 1 & 3;
    updateSeason();
  }

  var _tree = tree,
      points = _tree.points,
      tips = _tree.tips;
  var time = Date.now() - start;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#90482a";
  ctx.beginPath();
  var windX = Math.cos(time * 0.0003) * 100;
  var windY = Math.cos(time * 0.0007) * 60;
  ctx.moveTo(points[0], points[1]);

  for (var i = 3; i < points.length; i += 3) {
    var x = points[i];
    var y = points[i + 1];
    var depth = points[i + 2];
    var factor = noise.noise2D(x * 0.001 + time * 0.0005, y * 0.001) * (depth * 0.05);
    ctx.lineTo(x + windX * factor, y + windY * factor);
  }

  ctx.fill();

  if (season !== _seasons__WEBPACK_IMPORTED_MODULE_7__["WINTER"]) {
    var crownSize, crownOpacity;

    if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["SUMMER"]) {
      crownSize = _config__WEBPACK_IMPORTED_MODULE_3__["default"].fullCrownSize;
      crownOpacity = _config__WEBPACK_IMPORTED_MODULE_3__["default"].fullOpacity;
    }

    if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"]) {
      var seasonRatio = Math.max(seasonCount / seasonLength * 2 - 1, 0);
      crownSize = fullCrownSize - (fullCrownSize - minCrownSize) * seasonRatio;
      crownOpacity = fullOpacity - (fullOpacity - minOpacity) * seasonRatio;
    }

    if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["SPRING"]) {
      var _seasonRatio = 1 - Math.min(seasonCount / seasonLength * 2, 1);

      crownSize = fullCrownSize - (fullCrownSize - minCrownSize) * _seasonRatio;
      crownOpacity = fullOpacity - (fullOpacity - minOpacity) * _seasonRatio;
    }

    ctx.fillStyle = "rgba(10,160,60," + crownOpacity + ")";

    for (var _i = 0; _i < tips.length; _i++) {
      var tip = tips[_i];
      ctx.beginPath();
      ctx.moveTo(tip.x, tip.y);

      var _factor = noise.noise2D(tip.x * 0.001 + time * 0.0005, tip.y * 0.001) * windStrength;

      ctx.arc(tip.x + windX * _factor, tip.y + windY * _factor, crownSize, 0, _math__WEBPACK_IMPORTED_MODULE_5__["TAU"], false);
      ctx.fill();
    }
  }

  bgContext.fillStyle = ctx.fillStyle = "rgba(255,255,255,0.9)";

  if (season !== _seasons__WEBPACK_IMPORTED_MODULE_7__["SUMMER"]) {
    var particlesPerSeason = _config__WEBPACK_IMPORTED_MODULE_3__["default"].numLeafs[season] * LEAF_SIZE;

    for (var _i2 = 0; _i2 < particlesPerSeason; _i2 += LEAF_SIZE) {
      var _x = leafs[_i2] + windX * leafWindFactor;

      var z = leafs[_i2 + 2];
      var _y = leafs[_i2 + 1];
      var code = leafs[_i2 + 3];

      if (code === _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LOCKED"]) {
        if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"]) {
          code = leafs[_i2 + 3] = _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LEAF"];
        } else if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["WINTER"]) {
          code = leafs[_i2 + 3] = _particle_modes__WEBPACK_IMPORTED_MODULE_8__["SNOW"];
        } else {
          continue;
        }
      }

      var isLeaf = code === _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LEAF"];
      var depthFactor = z * 0.5;
      _y += 2 + gravity * depthFactor + windY * leafWindFactor * depthFactor;

      if (_x < -64) {
        _x += width + 128;
      }

      if (_x > width + 64) {
        _x -= width + 128;
      }

      if (_y > height + 64) {
        _y -= height + 192;
      }

      leafs[_i2] = _x;
      leafs[_i2 + 1] = _y;

      if (_y > -64) {
        var horizonY = height * horizon + 32 | 0;
        var didHitGround = _y > horizonY + (height - horizonY) * z;
        var context = didHitGround ? bgContext : ctx;
        drawLeafOrSnow(context, _x, _y, z, _i2, isLeaf, didHitGround);

        if (didHitGround) {
          leafs[_i2] = Math.random() * width;

          if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["WINTER"]) {
            // give a little extra space when switching to snow
            leafs[_i2 + 1] = isLeaf ? Math.random() * -height - height : -32;
            leafs[_i2 + 3] = _particle_modes__WEBPACK_IMPORTED_MODULE_8__["SNOW"];

            if (!isLeaf && frost < _config__WEBPACK_IMPORTED_MODULE_3__["default"].frostLimit) {
              frost++;
            }
          } else if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"]) {
            leafs[_i2 + 1] = -32;
            leafs[_i2 + 3] = _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LEAF"];
          } else {
            leafs[_i2 + 1] = Math.random() * -height - height;
            leafs[_i2 + 3] = _particle_modes__WEBPACK_IMPORTED_MODULE_8__["LOCKED"];
          }
        }
      }
    }
  } // ctx.beginPath();
  // ctx.moveTo(0,config.horizon * height);
  // ctx.lineTo(width,config.horizon * height);
  // ctx.stroke();


  if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["AUTUMN"]) {
    for (var _i3 = 0; _i3 < _config__WEBPACK_IMPORTED_MODULE_3__["default"].decayRate; _i3++) {
      decayBackground();
    }

    frost = 0;
  }

  if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["WINTER"] && frost >= _config__WEBPACK_IMPORTED_MODULE_3__["default"].frostLimit && (seasonCount & 3) === 0) {
    bgContext.fillStyle = "rgba(255,255,255,0.006)";
    bgContext.fillRect(0, 32, width, background.height - 32);
  }

  if (season === _seasons__WEBPACK_IMPORTED_MODULE_7__["SPRING"]) {
    if (frost <= 0) {
      bgContext.strokeWidth = 2;
      drawGrass();
    } else {
      frost -= 0.3;
    }
  }

  windStrength += (_config__WEBPACK_IMPORTED_MODULE_3__["default"].windStrength[season] - windStrength) * 0.05;
  leafWindFactor += (_config__WEBPACK_IMPORTED_MODULE_3__["default"].leafWindFactor[season] - leafWindFactor) * 0.05;
  raf__WEBPACK_IMPORTED_MODULE_2___default()(render);
}

var resizeCanvasToScreen = debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  width = window.innerWidth - 1 | 0;
  height = window.innerHeight - 1 | 0;
  initLeafs();
  canvas.width = width;
  canvas.height = height; // reset our decay line to the current horizon plus safety

  decayStart = height * _config__WEBPACK_IMPORTED_MODULE_3__["default"].horizon - 32 | 0;
  console.log("size: ", width, "x", height, "decayStart", decayStart);
  background.width = width;
  background.height = height - decayStart;
  background.style.top = decayStart + "px";
  bgContext.fillStyle = "rgba(53, 104, 45, 0.9)";
  bgContext.fillRect(0, 40, width, background.height);
  _config__WEBPACK_IMPORTED_MODULE_3__["default"].start[0] = width / 2;
  _config__WEBPACK_IMPORTED_MODULE_3__["default"].start[1] = height * 0.75;
  tree = new _Tree__WEBPACK_IMPORTED_MODULE_0__["default"](_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
  seasonCount = 0;
  season = _config__WEBPACK_IMPORTED_MODULE_3__["default"].initialSeason;

  if (season !== _seasons__WEBPACK_IMPORTED_MODULE_7__["SPRING"]) {
    for (var i = 0; i < _config__WEBPACK_IMPORTED_MODULE_3__["default"].seasonLength / 3; i++) {
      drawGrass();
    }
  } else {
    bgContext.fillStyle = "rgba(255,255,255,0.95)";
    bgContext.fillRect(0, 32, width, background.height - 32);
    frost = _config__WEBPACK_IMPORTED_MODULE_3__["default"].frostLimit;
  }
}, 150, true);

window.onload = function () {
  updateSeason();
  canvas = document.getElementById("screen");
  leaf = document.getElementById("leaf");
  grassPalette = Object(_loadGrassPalette__WEBPACK_IMPORTED_MODULE_9__["default"])(document.getElementById("grass"));
  console.log({
    grassPalette: grassPalette
  });
  ctx = canvas.getContext("2d");
  background = document.createElement("canvas");
  background.id = "bg";
  bgContext = background.getContext("2d");
  resizeCanvasToScreen();
  document.body.appendChild(background);
  window.addEventListener("resize", resizeCanvasToScreen, true);
  start = Date.now();
  raf__WEBPACK_IMPORTED_MODULE_2___default()(render);
};

/***/ }),

/***/ "./src/loadGrassPalette.js":
/*!*********************************!*\
  !*** ./src/loadGrassPalette.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadGrassPalette; });
function loadGrassPalette(img) {
  var canvas = document.createElement("canvas");
  var width = img.width;
  var height = img.height;
  canvas.width = width;
  canvas.height = height;
  canvas.className = "offscreen";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var imageData = ctx.getImageData(0, 0, width, height);
  document.body.removeChild(canvas);
  var colors = new Array(width * height);
  var lineWidth = imageData.width * 4;
  var data = imageData.data;
  var index = 0;

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var off = y * lineWidth + x * 4;
      colors[index++] = "rgba(" + data[off] + "," + data[off + 1] + "," + data[off + 2] + ", 0.99)";
    }
  }

  return {
    width: width,
    height: height,
    colors: colors
  };
}

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: TAU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAU", function() { return TAU; });
var TAU = Math.PI * 2;

/***/ }),

/***/ "./src/noise.js":
/*!**********************!*\
  !*** ./src/noise.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * A fast javascript implementation of simplex noise by Jonas Wagner
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 *
 *
 * Copyright (C) 2016 Jonas Wagner
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
// Code take from NPM module "simplex-noise", but only the noise2D code
var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;

var SimplexNoise =
/*#__PURE__*/
function () {
  function SimplexNoise(random) {
    _classCallCheck(this, SimplexNoise);

    if (!random) {
      random = Math.random;
    }

    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);

    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

    this.grad3 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
    this.grad4 = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
  }

  _createClass(SimplexNoise, [{
    key: "noise2D",
    value: function noise2D(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners

      var n1 = 0;
      var n2 = 0; // Skew the input space to determine which simplex cell we're in

      var s = (xin + yin) * F2; // Hairy factor for 2D

      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space

      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin

      var y0 = yin - Y0; // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.

      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords

      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
          i1 = 0;
          j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6


      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords

      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords

      var y2 = y0 - 1.0 + 2.0 * G2; // Work out the hashed gradient indices of the three simplex corners

      var ii = i & 255;
      var jj = j & 255; // Calculate the contribution from the three corners

      var t0 = 0.5 - x0 * x0 - y0 * y0;

      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }

      var t1 = 0.5 - x1 * x1 - y1 * y1;

      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }

      var t2 = 0.5 - x2 * x2 - y2 * y2;

      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      } // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].


      return 70.0 * (n0 + n1 + n2);
    }
  }]);

  return SimplexNoise;
}();

function buildPermutationTable(random) {
  var i;
  var p = new Uint8Array(256);

  for (i = 0; i < 256; i++) {
    p[i] = i;
  }

  for (i = 0; i < 255; i++) {
    var r = i + 1 + ~~(random() * (255 - i));
    var aux = p[i];
    p[i] = p[r];
    p[r] = aux;
  }

  return p;
}

SimplexNoise._buildPermutationTable = buildPermutationTable;
/* harmony default export */ __webpack_exports__["default"] = (SimplexNoise);

/***/ }),

/***/ "./src/particle-modes.js":
/*!*******************************!*\
  !*** ./src/particle-modes.js ***!
  \*******************************/
/*! exports provided: LEAF, SNOW, LOCKED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAF", function() { return LEAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNOW", function() { return SNOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED", function() { return LOCKED; });
var LEAF = 0;
var SNOW = 1;
var LOCKED = 2;

/***/ }),

/***/ "./src/seasons.js":
/*!************************!*\
  !*** ./src/seasons.js ***!
  \************************/
/*! exports provided: SPRING, SUMMER, AUTUMN, WINTER, getCurrentSeason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRING", function() { return SPRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUMMER", function() { return SUMMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTUMN", function() { return AUTUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINTER", function() { return WINTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSeason", function() { return getCurrentSeason; });
var SPRING = 0;
var SUMMER = 1;
var AUTUMN = 2;
var WINTER = 3;
var SEASON_FOR_MONTH = [WINTER, WINTER, SPRING, SPRING, SPRING, SUMMER, SUMMER, SUMMER, AUTUMN, AUTUMN, AUTUMN, WINTER];
function getCurrentSeason() {
  return SEASON_FOR_MONTH[new Date().getMonth()];
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle-tree-anim-38b16ff9b672746bbd83.js.map