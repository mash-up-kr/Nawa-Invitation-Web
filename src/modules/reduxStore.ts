/* External dependencies */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

/* Internal dependencies */
import rootReducer, { rootSaga } from 'modules/reducers'
import { isDevelopment } from 'utils/environmentUtils'

declare global {
  interface Window {
    __PRELOADED_STATE__: any
  }
}

class ReduxStore {
  readonly store

  constructor() {
    const isDev = isDevelopment()
    // @ts-ignore
    const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    const composeEnhancers = devtools || compose

    const sagaMiddleware = createSagaMiddleware()
    this.store = createStore(rootReducer, window.__PRELOADED_STATE__, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
  }

  getStore() {
    return this.store
  }

  dispatch(action) {
    return this.store.dispatch(action)
  }

  getState() {
    return this.store.getState()
  }
}

export default new ReduxStore()
