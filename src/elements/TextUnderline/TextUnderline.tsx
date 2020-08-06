/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './TextUnderline.styled'

interface TextUnderlineProps {
  className?: string
  children: React.ReactNode
  underlineColor?: string
}

function TextUnderline({ className, children, underlineColor = '#fef051' }: TextUnderlineProps) {
  return (
    <Styled.Underline className={className} underlineColor={underlineColor}>
      {children}
    </Styled.Underline>
  )
}

export default TextUnderline
