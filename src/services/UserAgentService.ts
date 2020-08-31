/* External dependencies */
import isMobile, { isMobileResult } from 'ismobilejs'

export class UserAgentService {
  userAgent: isMobileResult

  constructor(userAgent?: string) {
    this.userAgent = isMobile(userAgent)
  }

  isPhone() {
    return this.userAgent.phone
  }

  isAndroidPhone() {
    return this.userAgent.android.phone
  }

  isApplePhone() {
    return this.userAgent.apple.phone
  }

  isAndroidTablet() {
    return this.userAgent.android.tablet
  }

  isAppleTablet() {
    return this.userAgent.apple.tablet
  }

  isAndroidDevice() {
    return this.userAgent.android.device
  }

  isAppleDevice() {
    return this.userAgent.apple.device
  }

  isMobileDevice() {
    return this.userAgent.any
  }
}

export default new UserAgentService()
