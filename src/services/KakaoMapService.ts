interface KakaoMapServiceProps {
  map: any
  mapContainer: any
  latitude: number
  longitude: number
}

declare global {
  interface Window {
    kakao: any
  }
}

class KakaoMapService implements KakaoMapServiceProps {
  map: any
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
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(this.latitude, this.longitude),
          level: 7,
        }
        this.map = new window.kakao.maps.Map(this.mapContainer, options)
        const markerPosition = new window.kakao.maps.LatLng(this.latitude, this.longitude)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(this.map)
      })
    }
  }

  getMap() {
    return this.map
  }
}

export default KakaoMapService
