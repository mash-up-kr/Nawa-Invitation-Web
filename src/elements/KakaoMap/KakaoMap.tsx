/* External dependencies */
import React, { useRef, useEffect } from 'react'

/* Internal dependencies */
import KakakoMap from 'models/KakaoMap'
import KakaoMapService from 'services/KakaoMapService'
import * as Styled from './KakaoMap.styled'

interface KakaoMapProps {
  kakaoMap: KakakoMap
}

function KakaoMap({ kakaoMap }: KakaoMapProps) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapService = new KakaoMapService(mapContainer.current, 33.450701, 126.570667)
    mapService.loadMap()
  }, [kakaoMap])

  return (
    <Styled.MapWrapper>
      <Styled.AddressWrapper>
        <Styled.PlaceName>{kakaoMap.placeName}</Styled.PlaceName>
        <Styled.AddressName>{kakaoMap.addressName}</Styled.AddressName>
        <Styled.RoadAddress>
          <Styled.AddressTag>도로명</Styled.AddressTag>
          {kakaoMap.roadAddress || '서울특별시 송파구 잠실1동-5 마천로 328 오금현대아파트 43동'}
        </Styled.RoadAddress>
      </Styled.AddressWrapper>
      <Styled.MapContainer ref={mapContainer} />
    </Styled.MapWrapper>
  )
}

export default React.memo(KakaoMap)
