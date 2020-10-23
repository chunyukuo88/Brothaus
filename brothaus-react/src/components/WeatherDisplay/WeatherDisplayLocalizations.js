import React, { Component } from "react";

export class EnglishWeatherDisplay extends Component {
  degreesFahrenheit = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='english'>
        <span>{Math.round(this.degreesFahrenheit)}°F </span>
        and {this.humidity}% humidity
      </div>
    );
  }
}

export class ChineseWeatherDisplay extends Component {
  degreesCelsius = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='chinese'>
        這裏有<span>{Math.round(this.degreesCelsius)}°C</span>，濕度為{this.humidity}%
      </div>
    );
  }
}

export class RussianWeatherDisplay extends Component {
  degreesCelsius = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div className='russian'>
        Здесь <span>{Math.round(this.degreesCelsius)}°C </span>и влажность {this.humidity}%
      </div>
    );
  }
}
