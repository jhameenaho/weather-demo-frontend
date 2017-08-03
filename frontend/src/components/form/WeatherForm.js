import React from 'react'
import { Field, reduxForm } from 'redux-form'

let WeatherForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <Field
          name="query"
          placeholder="Search"
          component="input"
          type="text"
        />

        <button type="submit">Search</button>
      </form>
    </div>
  )
}

WeatherForm = reduxForm({
  form: 'weather'
})(WeatherForm)

export default WeatherForm;