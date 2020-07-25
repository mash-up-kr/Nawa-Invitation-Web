//@ts-nocheck
interface KakaoMapServiceProps {
  mapContainer: any
  latitude: number
  longitude: number
}

class KakaoMapService implements KakaoMapServiceProps {
  readonly mapContainer: any
  readonly latitude: number
  readonly longitude: number

  constructor(mapContainer: any, latitude: number, longitude: number) {
    this.mapContainer = mapContainer
    this.latitude = latitude
    this.longitude = longitude
  }

  loadMap() {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=bbb3c9101cba6c438fd765abea932e31&autoload=false'
    document.head.appendChild(script)

    script.onload = () => {
      kakao.maps.load(() => {
        const options = {
          center: new kakao.maps.LatLng(this.latitude, this.longitude),
          level: 7,
        }
        const map = new kakao.maps.Map(this.mapContainer, options)
        const markerPosition = new kakao.maps.LatLng(this.latitude, this.longitude)
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }
  }
}

export default KakaoMapService
