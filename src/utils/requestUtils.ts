/* Internal dependencies */
import { getEnvironment } from 'utils/environmentUtils'

export function getRequestUrl() {
  switch (getEnvironment()) {
    case 'production':
      return 'http://ec2-15-165-190-104.ap-northeast-2.compute.amazonaws.com'
    default:
      return ''
  }
}
