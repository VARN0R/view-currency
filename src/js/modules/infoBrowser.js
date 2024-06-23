import Bowser from 'bowser';

function infoBrowser() {
    let textDiv = document.querySelector(".browser-info");
    
    const browserInfo = Bowser.getParser(window.navigator.userAgent);
    textDiv.innerHTML = `
    Информация о браузере:<br>
        Название: ${browserInfo.getBrowserName()},
        Версия: ${browserInfo.getBrowserVersion()},
        Движок: ${browserInfo.getEngineName()},
        Платформа: ${browserInfo.getPlatformType()}
    `;
}
  
  


export default infoBrowser;

