/* Internal dependencies */
import { getEnvironment } from 'utils/environmentUtils'

export function getRequestUrl() {
  switch (getEnvironment()) {
    case 'production':
      return 'http://ec2-15-164-188-237.ap-northeast-2.compute.amazonaws.com:8080'
    default:
      return ''
  }
}
