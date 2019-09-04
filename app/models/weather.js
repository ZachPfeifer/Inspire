export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = ((data.main.temp - 273.15) * 1.8 + 32).toFixed(0) //FIXME Convert Temp to F
    this.icon = data.weather.main
    this.visibility = data.visibility
    this.sunrise = data.sys.sunrise
    this.sunset = data.sys.sunset
  }

  get Template() {
    let template = `
    <div class="card text-center w-25 p-2 text-white bg-dark mb-3">
  <div class="card-header">
    <h4><b>Today's Weather</b></h4>
  </div>
  <div class="card-body">
    <h5 class="card-title">
    ${this.city}
    <br>
    ${this.icon} | ${this.kelvin}°F
    </h5>
    <p class="card-text">
    Visibility: ${this.visibility}
    <br>
    Sunrise: ${this.sunrise}
    <br>
    Sunset: ${this.sunset}
    </p>
    <button onclick="_drawWeather()" class="btn btn-secondary">Refresh</button>
  </div>
  <div class="card-footer text-muted">
    Today
  </div>
</div>
    
    `
    return template
  }
}