/* External dependencies */
import React, { useCallback } from 'react'
import _ from 'lodash'

type func = () => string

interface WithNewlineProps {
  children: string | func
}

function WithNewline({ children }: WithNewlineProps) {
  const getContentWithNewline = useCallback((content: string) => {
    return content.split('\n').map((s, i) => (
      <span key={i}>
        {s}
        <br />
      </span>
    ))
  }, [])

  const transformContent = useCallback(
    content => {
      if (_.isString(content)) {
        return getContentWithNewline(content)
      }
      if (_.isFunction(content)) {
        return getContentWithNewline(content())
      }
      return null
    },
    [getContentWithNewline],
  )

  return <>{transformContent(children)}</>
}

export default WithNewline
