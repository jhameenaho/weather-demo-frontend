import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './reducers'
import registerServiceWorker from './registerServiceWorker'

import './config'
import './index.css'

import App from './pages/app/AppContainer'
import Home from './pages/home/HomeComponent'
import Weather from './pages/weather/WeatherContainer'
import Login from './pages/login/LoginContainer'
import Logout from './pages/logout/LogoutContainer'

const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/weather/:query?' component={Weather} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()