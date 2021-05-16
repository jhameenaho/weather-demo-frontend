import React, { Component } from 'react'
import moment from 'moment'

import './TemperatureList.css'

export default class TemperatureList extends Component {

  compareDay(currentDay, newDay) {
    if (currentDay === newDay)
      return currentDay

    return newDay
  }

  render() {
    let currentDay = 0;

    return (null
      // <ul className="temperature-list-wrapper">
      //   { this.props.weather.temperature.map(item => { return (
      //     <li key={item.from} className="temperature-list-item">
      //       { currentDay !== moment(item.from).date() &&
      //         <div className="temperature-date"><Time value={item.from} format="DD.MM. dddd" /></div>
      //       }
      //       <div value={currentDay = this.compareDay(currentDay, moment(item.from).date())} className="temperature-time"><Time value={item.from} format="HH" /></div>
      //       <div className="temperature-value">{Math.round(item.value)}&#8451;</div>
      //     </li>
      //   )}) }
      // </ul>
    )
  }
}