import { Dispatch, AnyAction } from 'redux'
import { PromiseActionMeta, ActionPayload } from 'utils/reduxUtils'

declare module 'redux' {
  export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T extends ActionPayload<any, PromiseActionMeta> ? T & { promise: Promise<any> } : T
  }
}
