const getMMMDDYYYY = timestamp => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const datetime = new Date(timestamp)
  return `${months[datetime.getMonth()]} ${('0' + datetime.getDate()).slice(-2)}, ${datetime.getFullYear()}`
}

export default (context, inject) => {
  inject('f', {
    getMMMDDYYYY
  })
}
