import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

/* External dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component'

/* Internal dependencies */
import App from 'App'
import ReduxStore from 'modules/reduxStore'
import * as serviceWorker from 'serviceWorker'
import 'sanitize.css/sanitize.css'

const Root = () => (
  <Provider store={ReduxStore.getStore()}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root)
  })
} else {
  ReactDOM.render(<Root />, root)
}

serviceWorker.unregister()
