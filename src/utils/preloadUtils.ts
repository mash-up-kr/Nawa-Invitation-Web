/* External dependencies */
import { createContext, useContext } from 'react'

/* Internal dependencies */
import { PreloadContextProps } from 'index.server'

const PreloadContext = createContext<PreloadContextProps | null>(null)

export const usePreloader = (resolve: () => any) => {
  const preloadContext: PreloadContextProps | null = useContext(PreloadContext)
  if (!preloadContext) return null
  if (preloadContext.done) return null
  preloadContext.promises.push(Promise.resolve(resolve()))
}

export default PreloadContext
