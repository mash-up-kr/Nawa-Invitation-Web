/* External dependencies */
import platform from 'platform'

export function isProduction() {
  return process.env.NODE_ENV === 'production'
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

export function getEnvironment() {
  return process.env.NODE_ENV
}

export function isWindows() {
  return (platform.os || '').toString().indexOf('Window') >= 0
}

export function isMac() {
  return (platform.os || '').toString().indexOf('OS X') >= 0
}
