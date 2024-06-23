function shareScreen() {
    const btn = document.getElementById("button-share");
    
    btn.addEventListener("click", () => {
        const screenId = location.hash.substring(1);
        let url = `${location.origin}${location.pathname}#${screenId}`;
        
        if (screenId === 'current-rates') {
            const date = document.getElementById('date-current').value;
            url += `?date=${date}`;
        } else if (screenId === 'history-rates') {
            console.log(screenId);
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            const currency = document.getElementById('select-currency').value;
            url += `?start-date=${startDate}&end-date=${endDate}&currency=${currency}`;
        } else if (screenId === 'screen-converter') {
            const amountFrom = document.getElementById('amount-from').value;
            const currencyFrom = document.getElementById('currency-from').value;
            const currencyTo = document.getElementById('currency-to').value;
            url += `?amount-from=${amountFrom}&currency-from=${currencyFrom}&currency-to=${currencyTo}`;
        }
        
        
        navigator.clipboard.writeText(url).then(() => {
            const descr = document.createElement("div");
            descr.id = "descr-link";
            descr.innerHTML = `Ссылка скопирована`;
            descr.style.fontSize = "10px";
            btn.insertAdjacentHTML('afterend', descr.outerHTML);
            setTimeout(() => {
               document.getElementById("descr-link").remove();
            }, 500)
        })
    })
}

export default shareScreen;
