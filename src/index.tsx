import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

/* External dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

/* Internal dependencies */
import App from 'App'
import ReduxStore from 'redux/reduxStore'
import * as serviceWorker from 'serviceWorker'
import 'sanitize.css/sanitize.css'

ReactDOM.render(
  <Provider store={ReduxStore.getStore()}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
