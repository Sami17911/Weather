function all(data){
    document.getElementById('weather-info').innerHTML=`${data.location.name} , ${data.location.region} , ${data.location.country}`;
    document.getElementById('day-time').innerHTML=`${data.location.localtime}`;
    document.getElementById('text').innerHTML=`${data.current.condition.text}`;
    document.getElementById('temp').innerHTML=`${data.current.temp_c} °C`;
    document.getElementById('wind').innerHTML=`${data.current.wind_mph} m/s`;
    document.getElementById('humidity').innerHTML=`${data.current.humidity}%`;
    document.getElementById('pressure').innerHTML=`${data.current.pressure_mb} hPa`;
    document.getElementById('cloud').innerHTML=`${data.current.cloud}`;
}

fetch(`https://api.weatherapi.com/v1/current.json?key=b7c2405304384109954170447262705&q=Bihar&aqi=no`)
    .then(response=>response.json())
    .then((data)=>{
        all(data);
    })
    .catch(error=>console.log(error));

document.getElementById('location').addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        function update(data){
        all(data);
    }

    document.querySelectorAll('.main-content,#wind,#humidity,#pressure,#cloud').forEach(card => {
        card.classList.remove('animate-card');
        void card.offsetWidth;
        card.classList.add('animate-card');
});

    const search=document.getElementById('location').value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=b7c2405304384109954170447262705&q=${search}&aqi=no`)
    .then(data=>data.json())
    .then(response=>update(response))
    .catch(error=>console.log(error));
    }
})

document.querySelectorAll('.all,.main-content').forEach(card => {
        card.classList.remove('animate-card');

        // Restart animation
        void card.offsetWidth;

        card.classList.add('animate-card');
});
