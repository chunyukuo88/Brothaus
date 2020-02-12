// https://openweathermap.org/current



async function getWeather(){
    const apiKey = 'eb366c82727f387afc53658766e245e8';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus,Ohio&appid=' + apiKey;
    const options = { method: "GET", 
                      headers: { "Accept": "application/JSON" }};;
    let fetchedTemperature;                 
    await fetch(url, options)
        .then(res => res.json())
        .then(data => {
            fetchedTemperature = data.main.temp;
            })
        .catch(()=>{'Fetch failed'});
    return fetchedTemperature;
}

async function getTemp(){
    const cbusTemperature = document.getElementById('cbus-temp');
    let kelvin = await getWeather();
    let tempInFahrenheit = (9/5) * (kelvin - 273) + 32;
    cbusTemperature.innerText = Math.round(tempInFahrenheit);
}