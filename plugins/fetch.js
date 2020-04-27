export default ({ app }, inject) => {
  inject('fetch', (url, data) => {
    return fetch(
      process.env.BASE_URL + url,
      Object.assign({ method: 'GET' }, data)
    ).then(res => res.json())
  })
}
