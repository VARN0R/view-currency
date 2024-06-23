


import fetchCurrencies from "./modules/fetchCurrencies";
import firstScreen from "./modules/firstScreen";
import secondScreen from "./modules/secondScreen";
import thirdScreen from "./modules/thirdScreen";
import toggleScreen from "./modules/toggleScreen";


window.addEventListener('DOMContentLoaded', () => {
   toggleScreen();
   fetchCurrencies();
   firstScreen();
   secondScreen();
   thirdScreen();
   
   
   
})