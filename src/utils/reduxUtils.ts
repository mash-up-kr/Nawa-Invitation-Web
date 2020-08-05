/* External dependencies */
import { call, put } from 'redux-saga/effects'
import _ from 'lodash'
import * as UUID from 'uuid'

export type AsyncActionTypes<T extends { [K in keyof T]: (...args: any[]) => any }> = ReturnType<T[keyof T]>

export interface ActionType<T, S = {}> {
  uuid: string
  type: string
  payload: T
  meta: S
}

export interface PromiseActionMeta {
  uuid: string
  lifecycle: {
    resolve: string
    reject: string
  }
}

export type ActionGenerator<T, S = {}> = (payload?: T, meta?: S) => ActionType<T extends undefined ? {} : T, S>

export type PromiseActionGenerator<T, S = {}> = (
  payload?: T,
  meta?: S,
) => ActionType<T extends undefined ? {} : T, S & PromiseActionMeta>

export type ResponseType<T> = (...args: any[]) => Promise<T>

export function actionCreator<T, S = {}>(requestType: string): ActionGenerator<T, S> {
  return (payload: any = {}, meta: any = {}) => {
    const uuid = _.get(meta, 'uuid', UUID.v4())
    _.unset(meta, 'uuid')
    return {
      uuid: !_.isEmpty(uuid) ? (uuid as string) : UUID.v4(),
      type: requestType,
      payload,
      meta,
    }
  }
}

export function actionCreatorWithPromise<T, S = {}>(requestType: string): PromiseActionGenerator<T, S> {
  return (payload: any = {}, meta: any = {}) => {
    const uuid = _.get(meta, 'uuid', UUID.v4())
    _.unset(meta, 'uuid')
    return {
      uuid: !_.isEmpty(uuid) ? (uuid as string) : UUID.v4(),
      type: requestType,
      payload,
      meta: {
        ...meta,
        lifeCycle: {
          resolve: `${requestType}_SUCCESS`,
          reject: `${requestType}_ERROR`,
        },
      },
    }
  }
}

export const createAsyncActionsAndSaga = <L, S, E>(fetching: L, success: S, error: E) => <AT, SP, EP>(
  request: ResponseType<SP>,
) => {
  const asyncActions = {
    fetching: () => ({ type: fetching }),
    success: (payload: SP, uuid: string) => ({ type: success, payload, uuid }),
    error: (payload: EP, uuid: string) => ({ type: error, payload, uuid }),
  }
  const asyncSaga = function* (action: ActionType<AT>) {
    yield put(asyncActions.fetching())
    try {
      const { data } = yield call(request, action.payload)
      yield put(asyncActions.success(data, action.uuid))
    } catch (error) {
      yield put(asyncActions.error(error, action.uuid))
    }
  }

  return { asyncActions, asyncSaga }
}
