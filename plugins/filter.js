import dayjs from 'dayjs'

const getMMMDDYYYY = timestamp => dayjs(timestamp).format('MMM DD, YYYY')

export default (context, inject) => {
  inject('filter', {
    getMMMDDYYYY
  })
}
