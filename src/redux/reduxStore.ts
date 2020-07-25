/* External dependencies */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

/* Internal dependencies */
import rootReducer, { rootSaga } from 'redux/reducers'
import actionLifeCycles from 'redux/middlewares/actionLifeCycles'
import { isDevelopment } from 'utils/environmentUtils'

class ReduxStore {
  readonly store

  constructor() {
    const isDev = isDevelopment()
    // @ts-ignore
    const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    const composeEnhancers = devtools || compose

    const sagaMiddleware = createSagaMiddleware()
    this.store = createStore(rootReducer, composeEnhancers(applyMiddleware(actionLifeCycles, sagaMiddleware)))
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
