import { useState, useEffect } from 'react'

function useDuration(duration: number) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, duration * 1000)
  }, [duration])

  return show
}

export default useDuration
