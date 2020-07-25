/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './SVGIcon.styled'

export enum Size {
  XXSmall = 12,
  XSmall = 16,
  Small = 20,
  Normal = 24,
  Large = 34,
}

interface SVGIconProps {
  name: string
  width?: number
  height?: number
}

const path = '/images/'

function SVGIcon({ name, width = Size.Normal, height = Size.Normal }: SVGIconProps) {
  return (
    <Styled.SVGIconWrapper width={width} height={height}>
      <Styled.SVGIcon src={`${path}${name}.svg`} alt="이미지 없음" />
    </Styled.SVGIconWrapper>
  )
}

export default SVGIcon
