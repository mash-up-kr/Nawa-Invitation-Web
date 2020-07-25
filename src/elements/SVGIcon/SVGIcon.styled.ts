/* External dependencies */
import styled from 'styled-components'

interface SVGIconWrapperProps {
  width: number
  height: number
}

export const SVGIconWrapper = styled.div<SVGIconWrapperProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export const SVGIcon = styled.img`
  width: 100%;
  height: 100%;
`
