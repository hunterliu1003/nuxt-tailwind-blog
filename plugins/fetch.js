export default ({ app }, inject) => {
  inject('fetch', (url, data) =>
    fetch(
      process.env.BASE_URL + url,
      Object.assign({ method: 'GET' }, data)
    ).then(res => res.json())
  )
}
