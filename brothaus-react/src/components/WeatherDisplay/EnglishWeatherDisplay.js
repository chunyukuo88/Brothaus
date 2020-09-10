import React, { Component } from "react";

export class EnglishWeatherDisplay extends Component {
  degreesFahrenheit = this.props.temp;
  humidity = this.props.humidity;
  render() {
    return(
      <div>
        <span>{Math.round(this.degreesFahrenheit)}°F </span>
        and {this.humidity}% humidity <br/> here in Westerville.
      </div>
    );
  }
}
