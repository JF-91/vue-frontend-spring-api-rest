
export default {
    install(Vue) {
        Vue.config.globalProperties.$filters = {
            capitalize(value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            currency(value) {
                if (!value) return ''
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(value)
            },
            formatEuro(value) {
                if (!value) return '0,00 €'
                return parseFloat(value).toFixed(2) + ' €'
            },
            formatBigEuro(value) {
                if (!value) return '0,000 €'
                return new Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3
                }).format(value)
              },
            formatPrice(value) {
                if (!value) return ''
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(value)
            },
            formatNumber(value) {
                if (!value) return ''
                return new Intl.NumberFormat('en-US').format(value)
            },
            formatDate(value) {
                if (!value) return ''
                return new Intl.DateTimeFormat('en-US').format(new Date(value))
            },
            formatDateTime(value) {
                if (!value) return ''
                return new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }).format(new Date(value))
            },
        }   
    }
}