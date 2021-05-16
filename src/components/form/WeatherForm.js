import React from 'react'
import { Form, Field } from 'react-final-form'

import './WeatherForm.css'

const WeatherForm = props => {
  return (
    <Form
    onSubmit={values => {
      
      }}
      > {({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="weather-form-wrapper">
        <Field
          name="query"
          placeholder="Search..."
          component="input"
          type="text"
          className="weather-form-input"
        />

        <button type="submit" className="weather-search" alt="Go!" />
      </form>
    )} </Form>
  )
}

// WeatherForm = Form({
//   form: 'weather'
// })(WeatherForm)

export default WeatherForm;