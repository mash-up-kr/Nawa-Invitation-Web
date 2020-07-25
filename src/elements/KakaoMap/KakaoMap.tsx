/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import KakaoMapService from 'services/KakaoMapService'
import * as Styled from './KakaoMap.styled'

interface KakaoMapProps {
  generalAddress: string
  detailAddress: string
  latitude: number
  longitude: number
}

function KakaoMap({ generalAddress, detailAddress, latitude, longitude }: KakaoMapProps) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapService = new KakaoMapService(mapContainer.current, latitude, longitude)
    mapService.loadMap()
  }, [latitude, longitude])

  return (
    <Styled.MapWrapper>
      <Styled.AddressWrapper>
        <Styled.GeneralAddress>{generalAddress}</Styled.GeneralAddress>
        <Styled.DetailAddress>{detailAddress}</Styled.DetailAddress>
      </Styled.AddressWrapper>
      <Styled.MapContainer ref={mapContainer} />
    </Styled.MapWrapper>
  )
}

export default React.memo(KakaoMap)
