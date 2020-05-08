import dayjs from 'dayjs'
import 'dayjs/locale/es'

const getMMMDDYYYY = timestamp => dayjs(timestamp).format('MMM DD, YYYY')

export default (context, inject) => {
  inject('filter', {
    getMMMDDYYYY
  })
}
