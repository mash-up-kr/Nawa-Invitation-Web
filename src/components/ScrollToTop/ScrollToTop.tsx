/* External dependencies */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
  children: React.ReactElement
}

function ScrollToTop({ children }: ScrollToTopProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop
