


import fetchCurrencies from "./modules/fetchCurrencies";
import firstScreen from "./modules/firstScreen";
import infoBrowser from "./modules/infoBrowser";
import secondScreen from "./modules/secondScreen";
import shareScreen from "./modules/shareScreen";
import thirdScreen from "./modules/thirdScreen";
import toggleScreen from "./modules/toggleScreen";


window.addEventListener('DOMContentLoaded', () => {
   toggleScreen();
   fetchCurrencies();
   firstScreen();
   secondScreen();
   thirdScreen();
   shareScreen();
   infoBrowser();
   
   
   
})