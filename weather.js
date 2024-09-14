function weather()
{
    let cityName=document.getElementById("name").value
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d4b22ebcb3984f86820105724240809&q=${cityName}&aqi=yes`)
    console.log()
}