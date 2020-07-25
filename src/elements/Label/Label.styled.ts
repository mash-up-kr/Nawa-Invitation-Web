/* External dependencies */
import styled from 'styled-components'

interface LabelProps {
  width: number
  height: number
  fontSize: number
  color: string
  backgroundColor: string
}

export const Label = styled.div<LabelProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.height}px;
  text-align: center;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`
