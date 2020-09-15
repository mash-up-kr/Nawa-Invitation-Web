/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import SVGIcon from 'elements/SVGIcon'

interface MapContainerProps {
  isWideMap: boolean
}

export const MapWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
`

export const AddressWrapper = styled.div`
  padding: 8px 16px 0;
`

export const PlaceName = styled.p`
  font-size: 14px;
`

export const AddressName = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: #a9a9a9;
`

export const RoadAddress = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: #a9a9a9;
`

export const AddressTag = styled.span`
  padding: 0 3px;
  margin-right: 4px;
  border: 1px solid #a9a9a9;
  border-radius: 2px;
`

export const MapContainer = styled.div<MapContainerProps>`
  width: 100%;
  height: ${props => (props.isWideMap ? '250px' : '24vw')};
  max-height: 250px;
  margin-top: 12px;
  transition: height 0.3s ease-in-out;
`

export const MapSizeIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;
`

export const MapSizeIcon = styled(SVGIcon)`
  width: 100%;
  height: 100%;
`
