import getSelectCurrency from "./getSelectCurrency";

function fetchCurrencies() {
    fetch('https://www.nbrb.by/api/exrates/currencies')
        .then(response => response.json())
        .then(data => getSelectCurrency(data))
        .catch(error => console.error('Error fetching currencies:', error));
}

export default fetchCurrencies;