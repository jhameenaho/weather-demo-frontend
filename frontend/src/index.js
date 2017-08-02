import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './reducers'
import registerServiceWorker from './registerServiceWorker'
import {} from './config'

import App from './pages/app/AppContainer'
import Weather from './pages/weather/WeatherContainer'
import Login from './pages/login/LoginContainer'

const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path='/' component={Weather} />
        <Route exact path='/login' component={Login} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()