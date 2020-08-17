/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import MapModel from 'models/Map'
import KakaoMapService from 'services/KakaoMapService'
import * as Styled from './Map.styled'

interface MapProps {
  map: MapModel
  placeName: string
}

function Map({ map, placeName }: MapProps) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapService = new KakaoMapService(mapContainer.current, map.latitude, map.longitude)
    mapService.loadMap()
  }, [map])

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
      <Styled.MapContainer ref={mapContainer} />
    </Styled.MapWrapper>
  )
}

export default React.memo(Map)
