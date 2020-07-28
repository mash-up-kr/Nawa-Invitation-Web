/* External dependencies */
import _ from 'lodash'
import LRUCache from 'lru-cache'

interface ActionPendingCacheProps {
  [key: string]: () => void
}

const CACHE_OPTION = {
  max: Infinity,
  maxAge: 1000 * 60 * 60,
  updateAgeOnGet: true,
}

const lruCache = new LRUCache<string, ActionPendingCacheProps>(CACHE_OPTION)

function actionLifeCycleMiddleware() {
  return next => action => {
    const nextFunc = (() => {
      if (action.uuid && action.meta && action.meta.lifeCycle) {
        return next({
          ...action,
          promise: new Promise((resolve, reject) => {
            const { lifeCycle } = action.meta
            lruCache.set(action.uuid, {
              [lifeCycle.resolve]: resolve,
              [lifeCycle.reject]: reject,
            })
          }),
        })
      }
      return next(action)
    })()

    if (action.uuid && lruCache.has(action.uuid)) {
      // @ts-ignore
      const { [action.type]: resolveOrReject } = lruCache.get(action.uuid)
      if (_.isFunction(resolveOrReject)) {
        lruCache.del(action.uuid)
        resolveOrReject(action.payload)
      }
    }

    return nextFunc
  }
}

export default actionLifeCycleMiddleware
