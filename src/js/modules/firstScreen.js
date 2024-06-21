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

export default firstScreen;