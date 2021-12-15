import { parseJsonBigInt, stringifyJsonBigInt } from '@/helpers/json_parse'

export function capitalize (string) {
  if (typeof string !== 'string') throw new TypeError('arg must be a string')
  if (string.length === 0) return ''
  return string[0].toUpperCase() + string.slice(1)
}

export function buildFetchAuthHeader (username, password) {
  if (username.length > 0 && password.length > 0) {
    return 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
  } else {
    return 'Basic ' + Buffer.from(username).toString('base64')
  }
}

export const debounce = (fn, timeout) => {
  let timerId

  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn(...args)
    }, timeout)
  }
}
