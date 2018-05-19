import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './WeatherForm.css'

let WeatherForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className="weather-form-wrapper">
      <Field
        name="query"
        placeholder="Search..."
        component="input"
        type="text"
        className ="weather-form-input"
      />

      <button type="submit" className="weather-search" alt= "Go!"/>
    </form>
  )
}

WeatherForm = reduxForm({
  form: 'weather'
})(WeatherForm)

export default WeatherForm;