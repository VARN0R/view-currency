function getSelectCurrency(currencies) {
    const currencySelect = document.getElementById('select-currency');
    const uniqueCurrencies = new Set();
    for (let i = currencies.length - 1; i >= 0; i--) {
        if (!uniqueCurrencies.has(currencies[i].Cur_Abbreviation)) { 
            uniqueCurrencies.add(currencies[i].Cur_Abbreviation);
            const option = document.createElement('option');
            option.value = currencies[i].Cur_ID;
            option.textContent = `${currencies[i].Cur_Name} (${currencies[i].Cur_Abbreviation})`;
            currencySelect.appendChild(option); 
        }       
    }
}

export default getSelectCurrency;