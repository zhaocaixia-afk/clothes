import Vue from 'vue'

import format from 'date-fns/format'

Vue.filter('dateFormat',(value,formatStr='yyyy-MM-dd') => {
    return format(value,formatStr)
})
