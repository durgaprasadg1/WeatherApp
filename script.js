

function handleClick(event) {
  event.preventDefault();
    let cityy = document.getElementById("city");
    if(cityy.value == "") {
        alert("Please enter the city name")
    }
 
  else{
  let city = cityy.value;
  let api = "";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

  let temp = document.getElementById("temp");
  let pressure = document.getElementById("pressure");
  let humidity = document.getElementById("humidity");
  let description = document.getElementById("description");
  let icon = document.getElementById("icon");
  let content = document.getElementById("content");
  let FeelLike = document.getElementById("feel-like");
  let dateTime = document.getElementById("date_time");

  function sunTimeCalculation(data){
    let timestamp = data.sys.sunrise ;
        let date = new Date(timestamp * 1000);
        let formattedDateTime = date.toLocaleString('en-IN', {
        weekday: 'short', 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
        });
        return formattedDateTime;
  }
  result.textContent = "Fetching weather data...";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    
      setTimeout(() => {
        result.textContent = `Weather in ${data.name}, ${data.sys.country}`;
        dateTime.textContent = `Day, Date and Time of Sunrise -> ${sunTimeCalculation(data)}`;
        temp.textContent = `Temperature -> ${data.main.temp}°C`;
        pressure.textContent = ` Pressure -> ${data.main.pressure} hPa`;
        humidity.textContent = ` Humidity -> ${data.main.humidity}%`;
        description.textContent = ` Description -> ${
          data.weather[0].description.charAt(0).toUpperCase() +
          data.weather[0].description.slice(1)}`;
        FeelLike.textContent = ` Feel Like -> ${data.main.feels_like}°C`;
        cityy.value = ''
       
        }, 2000);
    });

  }
  document.getElementById('clear').addEventListener('click', () => {
    content.textContent = '';
    result.textContent = '';
});

}
document.getElementById("get").addEventListener("click", handleClick);
