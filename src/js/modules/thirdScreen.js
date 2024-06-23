function thirdScreen() {
    const btn = document.getElementById("convert-button");
    btn.addEventListener("click", () => {
        convertCurrency();
    })

    function convertCurrency() {
        const amount = document.getElementById('amount-from').value;
        const currencyFrom = document.getElementById('currency-from').value;
        const currencyTo = document.getElementById('currency-to').value;
        if (!amount || !currencyFrom || !currencyTo) return;

        Promise.all([
            fetch(`https://www.nbrb.by/api/exrates/rates/${currencyFrom}`).then(response => response.json()),
            fetch(`https://www.nbrb.by/api/exrates/rates/${currencyTo}`).then(response => response.json())
        ])
        .then(([fromRate, toRate]) => {
            const amountCurrencyFromInOneCopy = fromRate.Cur_OfficialRate / fromRate.Cur_Scale;
            const amountCurrencyToInOneCopy = toRate.Cur_OfficialRate / toRate.Cur_Scale;
            const currentAmountCurrencyFrom = amountCurrencyFromInOneCopy * amount;
            const convertedAmount = currentAmountCurrencyFrom / amountCurrencyToInOneCopy;

            document.getElementById('converter-result').textContent = `${convertedAmount.toFixed(2)}`;
        })
        .catch(error => console.error('Error converting currency:', error));
    }
}

export default thirdScreen;