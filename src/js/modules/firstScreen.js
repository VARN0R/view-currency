function firstScreen() {
    const btn = document.querySelector(".button__show-rates");
    let errors = [];

    function giveCurrentRates() {
        const date = document.getElementById('date-current').value;
        const dateBlock = document.querySelector(".date");
        
        if (!date && errors.length < 1) {
            const errorDiv = document.createElement("div");
            errorDiv.innerHTML = `
                <div class="error">Неверно заполнена дата!</div>
            `;
            dateBlock.appendChild(errorDiv);
            errors.push(errorDiv);
            return;
        } else if (!date && errors.length >= 1) {
            return;
        } else if(errors.length >= 1) {
            errors[0].remove();
            errors = [];
        };
        fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`)
            .then(response => response.json())
            .then(data => displayTodayRates(data))
            .catch(error => console.error('Ошибка получения валюты:', error));
    }
    
    function displayTodayRates(data) {
        const resultDiv = document.querySelector('.currencies-block');
        resultDiv.style.display = "block";
        resultDiv.innerHTML = data.map(rate => `
            <div class="currencies-block__item">
                <div class="currencies-block__abr">${rate.Cur_Abbreviation}</div>
                <div class="currencies-block__field">${rate.Cur_OfficialRate}</div>
            </div>
            <div class="currencies-block__text">${rate.Cur_Scale} ${rate.Cur_Name}</div>
        `).join('');
    }

    btn.addEventListener("click", () => {
        giveCurrentRates();
    })
}

export default firstScreen;