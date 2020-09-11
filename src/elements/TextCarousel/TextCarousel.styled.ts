/* External dependencies */
import styled, { css } from 'styled-components'

interface WrapperProps {
  isOver: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 20px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: white;

  ${props =>
    props.isOver &&
    css`
      justify-content: start;
      overflow: hidden;
      border-radius: 3px;
    `}
`

export const Carousel = styled.div`
  width: max-content;
  position: absolute;
`
