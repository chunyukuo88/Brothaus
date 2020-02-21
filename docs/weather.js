// https://openweathermap.org/current



async function getWeather(){
    const apiKey = 'eb366c82727f387afc53658766e245e8';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + apiKey;
    const options = { method: "GET", 
                      headers: { "Accept": "application/JSON" }
                    };
    let weatherData = new Map();                 
    await fetch(url, options)
        .then(res => res.json())
        .then(data => {
            weatherData.set('temperature', data.main.temp);
            weatherData.set('conditions', data.weather[0].main);
            })
        .catch(()=>{'Fetch failed'});
    return weatherData;
}

async function getTemp(){
    let weatherData = await getWeather();
    let kelvin = weatherData.get('temperature'); // OpenWeather API only produces kelvin temperatures.
    let tempInFahrenheit = (9/5) * (kelvin - 273) + 32;
    return tempInFahrenheit;
}

async function getConditions(){
    let weatherData = await getWeather();
    let conditions = weatherData.get('conditions');
    return conditions;
}

async function renderTemp(){
    const cbusTemperature = document.getElementById('cbus-temp');
    let temperature = await getTemp();
    cbusTemperature.innerText = Math.round(temperature);
}

async function renderConditions(){
    const cbusConditions = document.getElementById('cbus-conditions');
    let conditions = await getConditions();
    cbusConditions.innerText = conditions;
}
