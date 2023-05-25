

    navigator.geolocation.getCurrentPosition(async function(info){
        let lat = info.coords.latitude;
        let lon = info.coords.longitude;
        
        console.log(lat, lon);

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=132eed1df60cf0306c08b2cf220716d0&units=metric`;

        console.log(url);

        let result = await fetch(url);
            result = await result.json();

        console.log(result);

        document.write(`
            <h2>
                ${result.name}, ${result.sys.country}: ${result.main.temp} C, Clouds: ${result.clouds.all} %, Wind: ${result.wind.speed} m/s;
            </h2>
        `);
    });




