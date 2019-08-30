export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp //FIXME Convert Temp to F
    this.icon = data.weather.main
    this.visibility = data.visibility
    this.sunrise = data.sys.sunrise
    this.sunset = data.sys.sunset
  }

  get Template() {
    let template = `
    <div class="card text-center">
  <div class="card-header">
    Weather
  </div>
  <div class="card-body">
    <h5 class="card-title">
    ${this.city}
    <br>
    ${this.icon} |${this.kelvin}
    </h5>
    <p class="card-text">
    ${this.visibility}
    <br>
    ${this.sunrise}
    <br>
    ${this.sunset}
    </p>
    <a href="#" class="btn btn-primary">Refresh</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    
    `
    return template
  }
}