/* External dependencies */
import styled from 'styled-components'

interface UnderlineProps {
  underlineColor: string
}

export const Underline = styled.span<UnderlineProps>`
  padding: 0 10px;
  position: relative;
  background: linear-gradient(to bottom, #fff 70%, ${props => props.underlineColor} 30%);
`
