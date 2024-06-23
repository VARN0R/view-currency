function getSelectCurrency(currencies) {
    const currencySelect = document.getElementById('select-currency');
    const currencyFrom = document.getElementById('currency-from');
    const currencyTo = document.getElementById('currency-to');
    const uniqueCurrencies = new Set();
    for (let i = currencies.length - 1; i >= 0; i--) {
        if (!uniqueCurrencies.has(currencies[i].Cur_Abbreviation)) { 
            uniqueCurrencies.add(currencies[i].Cur_Abbreviation);
            const option = document.createElement('option');
            option.value = currencies[i].Cur_ID;
            option.textContent = `${currencies[i].Cur_Name} (${currencies[i].Cur_Abbreviation})`;
            currencySelect.appendChild(option);
            currencyFrom.appendChild(option.cloneNode(true));
            currencyTo.appendChild(option.cloneNode(true)); 
        }       
    }
}

export default getSelectCurrency;