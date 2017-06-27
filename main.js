const weather_api_key = '47d07468a66af72d903d45d490e62e20'

if ("geolocation" in navigator) {
  console.log("geolocation is available");
} else {
  console.log("geolocation IS NOT available");
}

function fetchWeather(lat, long, key) {
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat + "&lon=" + long + "&APPID=" + weather_api_key
  return fetch(url).then((data) => {
     return data.json()
  })
}

function getCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve(position)
    })
  })
}

getCoords().then((position) => {
    return [position.coords.latitude, position.coords.longitude]
  })
  .then((p) => {
    console.log(p)
    return fetchWeather(p[0], p[1], weather_api_key)
  })
  .then((w) => console.log(w))
  var temp = response.main.temp
  console.log(temp)














//
// //GET CURRENT GEOLOCATION
// navigator.geolocation.getCurrentPosition(function(position) {
//   coords = [position.coords.latitude, position.coords.longitude];
//   console.log(coords)
//   fetchWeather(coords[0], coords[1], weather_api_key).then((d) => {
//     console.log(d)
//   })
//   // var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + coords[0] + "&lon=" + coords[1] + "&APPID=47d07468a66af72d903d45d490e62e20" + "&units=imperial";
// //   fetch(url).then(data => data.json())
// //     .then(function(response) {
// //       let weather = response
// //       var temp_max = weather.main.temp_max
// //       var temp_min = weather.main.temp_min
// //       var temp = weather.main.temp
// //       var description = weather.weather[0].description
// //       var location = weather.name
// //       var descriptionId = weather.weather[0].id
// //       console.log (temp_max)
// //       console.log (temp_min)
// //       console.log (temp)
// //       console.log (description)
// //       console.log (location)
// //       console.log (weather)
// //       console.log (descriptionId)
// //       document.getElementById("current-weather").innerHTML = "Current weather in " + location + " is " + description;
// //       document.getElementById("temperature").innerHTML = "The temperature is " + temp + " degrees";
// //
// // /*-----UPDATING BACKGROUND IMAGE BASED ON WEATHER----- */
// //       var background = document.querySelector(".container");
// //       if (descriptionId >= 200 && descriptionId <= 299) {
// //         background.style.backgroundImage =
// //           "url('https://s-media-cache-ak0.pinimg.com/736x/2e/f3/bf/2ef3bf013817c5871d639257a89936bf.jpg')";
// //       } else if (descriptionId >= 300 && descriptionId <= 599) {
// //           background.style.backgroundImage = "url('http://cdn.abclocal.go.com/content/wtvd/images/cms/automation/images/511280_1280x720.jpg')";
// //       } else if (descriptionId >= 600 && descriptionId <= 699) {
// //           background.style.backgroundImage = "url('http://media.thedenverchannel.com/photo/2016/03/23/Snow%20Storm_March_1458765797628_34683834_ver1.0_640_480.jpg')";
// //       }
// //         else if (descriptionId >= 600 && descriptionId <= 699) {
// //           background.style.backgroundImage = "url('http://media.thedenverchannel.com/photo/2016/03/23/Snow%20Storm_March_1458765797628_34683834_ver1.0_640_480.jpg')";
// //         }
// //         else if (descriptionId >= 700 && descriptionId <= 899 && descriptionId != 800) {
// //           background.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/c/ca/Dense_Seattle_Fog.jpg')";
// //         }
//     //  })
//     // .catch((err) => {
//     //   console.log(err)
//     //  })
//   },
//   function(error) {
//     console.log(err)
// })
