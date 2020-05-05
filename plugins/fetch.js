export default ({ app }, inject) => {
  inject('fetch', (url, data) => {
    const baseUrl = process.server ? process.env.BASE_URL : window.location.origin
    return fetch(baseUrl + url, Object.assign({ method: 'GET' }, data)).then(res => res.json())
  })
}
