/* External dependencies */
import React, { useState, useCallback, useRef, useEffect } from 'react'

/* Internal dependencies */
import MapModel from 'models/Map'
import KakaoMapService from 'services/KakaoMapService'
import { Size } from 'elements/SVGIcon'
import * as Styled from './Map.styled'

interface MapProps {
  map: MapModel
  placeName: string
}

function Map({ map, placeName }: MapProps) {
  const [isWideMap, setIsWideMap] = useState<boolean>(false)
  const mapContainer = useRef(null)
  const mapService = useRef<KakaoMapService>()

  const handleClickMapSize = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsWideMap(prev => !prev)
  }, [])

  const handleScrollMap = useCallback(e => {
    e.stopPropagation()
  }, [])

  useEffect(() => {
    mapService.current = new KakaoMapService(mapContainer.current, map.latitude, map.longitude)
    mapService.current.loadMap()
  }, [map])

  useEffect(() => {
    if (mapService.current) {
      setTimeout(() => {
        mapService.current?.getMap()?.relayout()
      }, 300)
    }
  }, [isWideMap])

  return (
    <Styled.MapWrapper>
      <Styled.AddressWrapper>
        <Styled.PlaceName>{placeName}</Styled.PlaceName>
        <Styled.AddressName>{map.addressName}</Styled.AddressName>
        <Styled.RoadAddress>
          <Styled.AddressTag>도로명</Styled.AddressTag>
          {map.roadAddress}
        </Styled.RoadAddress>
      </Styled.AddressWrapper>
      <Styled.MapContainer ref={mapContainer} isWideMap={isWideMap} onWheel={handleScrollMap} />
      <Styled.MapSizeIconWrapper onClick={handleClickMapSize}>
        <Styled.MapSizeIcon name={isWideMap ? 'squares-filled' : 'squares'} size={Size.Small} />
      </Styled.MapSizeIconWrapper>
    </Styled.MapWrapper>
  )
}

export default React.memo(Map)
