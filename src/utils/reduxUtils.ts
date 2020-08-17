/* External dependencies */
import { call, put } from 'redux-saga/effects'
import _ from 'lodash'

export type AsyncActionTypes<T extends { [K in keyof T]: (...args: any[]) => any }> = ReturnType<T[keyof T]>

export interface OptionType {
  usePromise?: boolean
}

export interface LifeCycle {
  resolve?: any
  reject?: any
}

export interface ActionType<T, S = {}> {
  type: string
  payload: T
  meta: S & LifeCycle
  promise?: Promise<any>
}

export type ActionGenerator<T, S> = (payload?: T, meta?: S) => ActionType<T extends undefined ? {} : T, S>

export type ResponseType<T> = (...args: any[]) => Promise<T>

export function actionCreator<T = {}, S = {}>(actionType: string, option: OptionType = {}): ActionGenerator<T, S> {
  return (payload: any = {}, meta: any = {}) => {
    const action = {
      type: actionType,
      payload,
      meta,
    }
    if (option.usePromise) {
      const promise = new Promise((resolve, reject) => {
        _.set(action, ['meta', 'resolve'], resolve)
        _.set(action, ['meta', 'reject'], reject)
      })
      _.set(action, 'promise', promise)
    }

    return action
  }
}

export const createAsyncActionsAndSaga = <F, S, E>(fetching: F, success: S, error: E) => <AT, SP, EP>(
  request: ResponseType<SP>,
) => {
  const asyncActions = {
    fetching: () => ({ type: fetching }),
    success: (payload: SP) => ({ type: success, payload }),
    error: (payload: EP) => ({ type: error, payload }),
  }
  const asyncSaga = function* (action: ActionType<AT>) {
    yield put(asyncActions.fetching())
    try {
      const { data } = yield call(request, action.payload)
      const resolve = _.get(action, ['meta', 'resolve'])

      if (_.isFunction(resolve)) {
        resolve(data)
      }

      yield put(asyncActions.success(data))
    } catch (error) {
      const reject = _.get(action, ['meta', 'reject'])

      if (_.isFunction(reject)) {
        reject(error)
      }

      yield put(asyncActions.error(error))
    }
  }

  return { asyncActions, asyncSaga }
}
