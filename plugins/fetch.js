const $fetch = (context, url, data) => {
  return fetch(url, Object.assign({ method: 'GET' }, data))
    .then(res => res.json())
    .catch(e => {
      context.error({ statusCode: 404, message: 'Post not found' })
    })
}

export default (context, inject) => {
  inject('fetch', ({ $payloadURL, route }, url, data) => {
    if (process.static && process.client && $payloadURL) {
      return $fetch(context, $payloadURL(route), data)
    } else {
      const baseUrl = process.server ? process.env.BASE_URL : window.location.origin
      return $fetch(context, encodeURI(baseUrl + url), data)
    }
  })
}
