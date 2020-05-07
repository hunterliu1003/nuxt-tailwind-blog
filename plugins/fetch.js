export default ({ error }, inject) => {
  inject('fetch', (url, data) => {
    const baseUrl = process.server ? process.env.BASE_URL : window.location.origin
    return fetch(encodeURI(baseUrl + url), Object.assign({ method: 'GET' }, data))
      .then(res => res.json())
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  })
}
