/* Web config */

let baseUrl = ''

if( process.env.NODE_ENV === 'development' ) {
  baseUrl = 'http://localhost:3001/'
}

/* Helper Functions */

export function fetchReq( options, endpoint ) {
  const url = baseUrl + endpoint
  return fetch(url, options)
    .then( response => Promise.all([response, response.json()]) )
}

export function apiImage( url ) {
  return baseUrl + url
}