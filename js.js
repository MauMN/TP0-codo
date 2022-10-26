const getWeatherAsync = async() => {
    const temp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m&timezone=America%2FSao_Paulo")
    const tempj = await temp.json()
    temp1 = tempj.hourly.temperature_2m[36]
    document.getElementById("temperatura").innerHTML = temp1
}

getWeatherAsync()