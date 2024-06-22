import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

function secondScreen() {
    const btn = document.getElementById("history-button");
    const inputSearchCurrency = document.getElementById("search-currency");
    
    btn.addEventListener("click", () => {
        fetchHistoricalRates();
    });
    
    inputSearchCurrency.addEventListener("input", (event) => {
        searchCurrency(event.target.value);
        
    });

    function fetchHistoricalRates() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const currencyId = document.getElementById('select-currency').value;
    
        if (!startDate || !endDate || !currencyId) return;
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Currency ID:', currencyId);
    
        const url = `https://www.nbrb.by/api/exrates/rates/dynamics/${currencyId}?startdate=${startDate}&enddate=${endDate}`;
        console.log('Request URL:', url);
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Response Data:', data);
                displayHistoricalRates(data);
            })
            .catch(error => console.error('Ошибка получения истории валюты:', error));
    }
    
    function displayHistoricalRates(data) {
        
        console.log('Displaying Data:', data);
        const chartContainer = document.getElementById('chart-container');
        chartContainer.innerHTML = ''; 
        
        if (data.length < 1) {
            chartContainer.innerHTML = '';
            const errorDiv = document.createElement("div");
            errorDiv.innerHTML = `
                <div class="error">Просмотр истории для данной валюты недоступен. Выберите другую</div>
            `;
            chartContainer.appendChild(errorDiv);
            return;
        } 
        
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'currencyChart';
        chartContainer.appendChild(newCanvas);

        const labels = data.map(rate => new Date(rate.Date).toISOString());
        const rateValues = data.map(rate => rate.Cur_OfficialRate);
        const rootStyles = getComputedStyle(document.documentElement);
        const menuBgColor = rootStyles.getPropertyValue('--menu-bg-color').trim();  

        const dataGraphics = {
            labels: labels,
            datasets: [{
                label: 'Курс валюты по отношению к BYN',
                data: rateValues,
                borderColor: menuBgColor,
                backgroundColor: menuBgColor,
                fill: false,
                tension: 0.1
            }]
        };
        
        const config = {
            type: 'line',
            data: dataGraphics,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: ''
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                            tooltipFormat: 'yyyy-MM-dd', // Adjusted to match date format
                            displayFormats: {
                                day: 'yyyy-MM-dd' // Ensure dates display correctly
                            }
                        },
                        title: {
                            display: true,
                            text: 'Дата',
                            color: menuBgColor
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'BYN',
                            color: menuBgColor
                        }
                    }
                }
            }
        };

        const ctx = newCanvas.getContext('2d');
        new Chart(ctx, config);
    }

    function searchCurrency(currency) {
        const options = document.querySelectorAll('option');
        
        if (currency) {
            let search = [...options].filter(item => item.textContent.startsWith(currency));
            console.log(search);
            if (search.length > 0) {
                const selectedOption = search[0];
                selectedOption.selected = true;
                
            }
        }
        
    }
            
}

export default secondScreen;
