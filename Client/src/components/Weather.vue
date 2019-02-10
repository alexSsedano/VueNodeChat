<template>
<div class="container">
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">City</th>
      <td>{{name}}</td>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <th scope="row">Current Temperature</th>
      <td>{{currentTemp}}º</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Min Temperature</th>
      <td>{{minTemp}}º</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Max Temperature</th>
      <td>{{maxTemp}}º</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Sunrise</th>
      <td>{{sunrise}}0</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Sunset</th>
      <td>{{sunset}}0</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Pressure</th>
      <td>{{pressure}}</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Humidity</th>
      <td>{{humidity}}</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Wind</th>
      <td>{{wind}}</td>
    </tr>
    <tr class="table-active">
      <th scope="row">Overcast</th>
      <td>{{overcast}}</td>
    </tr>
  </tbody>
</table> 
</div>
   
</template>

<script> 
import axios from 'axios';

const tiempo = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
const myKey = '&APPID=5eeb9aeeaec2ee49c67559d461d2e8ea';
export default{
  name: 'app',
  data: function() {
    return{
    currentTemp: '',
    minTemp: '',
    maxTemp:'',
    sunrise: '',
    sunset: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '', 
    name:''

    }
  },
  methods: {
    getWeather(url) {
      axios
        .get(url)
        .then(response => {
          this.name = response.data.name;
          this.currentTemp = response.data.main.temp;
          this.minTemp = response.data.main.temp_min;
          this.maxTemp = response.data.main.temp_max;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity + '%';
          this.wind = response.data.wind.speed + 'm/s';
          this.overcast = response.data.weather[0].description;
          this.sunrise = new Date(response.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
          this.sunset = new Date(response.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);
      })
      .catch(error => {
        console.log(error);
      });
    },
    geolocation() {
      navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },
    buildUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.getWeather( tiempo + '&lat=' + lat + '&lon=' + lon +myKey);
    },
    geoError(error) {
      this.getWeather(tiempo + '&lat=0&lon=0' +myKey);
    }
  },
  beforeMount() {
    this.geolocation();
  },
};
</script> 