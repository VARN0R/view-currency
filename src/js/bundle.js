/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/firstScreen.js":
/*!***************************************!*\
  !*** ./src/js/modules/firstScreen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function firstScreen() {
    const btn = document.querySelector(".button__show-rates");
    
    

    function giveCurrentRates() {
        
        const date = document.getElementById('date-current').value;
        const dateBlock = document.querySelector(".date");
        if (!date) {
            const errorDiv = document.createElement("div");
            errorDiv.innerHTML = `
                <div class="error">Неверно заполнена дата!</div>
            `;
            dateBlock.appendChild(errorDiv);
            return;
        } else {
            dateBlock.removeChild(errorDiv);
        };
        console.log("111");
        fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`)
            .then(response => response.json())
            .then(data => displayTodayRates(data))
            .catch(error => console.error('Ошибка получения валюты:', error));
    }
    
    function displayTodayRates(data) {
        const resultDiv = document.getElementById('current-rates-result');
        resultDiv.innerHTML = data.map(rate => `
            <div>
                <strong>${rate.Cur_Abbreviation}</strong>: ${rate.Cur_OfficialRate} ${rate.Cur_Name}
            </div>
        `).join('');
    }

    btn.addEventListener("click", () => {
        giveCurrentRates();
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstScreen);

/***/ }),

/***/ "./src/js/modules/toggleScreen.js":
/*!****************************************!*\
  !*** ./src/js/modules/toggleScreen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggleScreen() {
    const menuInputs = document.querySelectorAll(".menu__item input");
    const screens = document.querySelectorAll(".screen");
   
    menuInputs.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (item.checked) {
                screens[i].classList.add("screen_active");
            } else {
                screens[i].classList.remove("screen_active");
            }
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleScreen);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_firstScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/firstScreen */ "./src/js/modules/firstScreen.js");
/* harmony import */ var _modules_toggleScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleScreen */ "./src/js/modules/toggleScreen.js");






window.addEventListener('DOMContentLoaded', () => {
   (0,_modules_toggleScreen__WEBPACK_IMPORTED_MODULE_1__["default"])();
   (0,_modules_firstScreen__WEBPACK_IMPORTED_MODULE_0__["default"])();
   
})
/******/ })()
;
//# sourceMappingURL=bundle.js.map