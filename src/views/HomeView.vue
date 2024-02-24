<script>
import UseApi from '@/composables/useApi'
import apiSerice from '@/services/axiosApi'
import { ref, watch } from 'vue'


export default {
  setup() {
    const data = ref(null);
    const value = ref(3)
    const datos = ref( {
      url: 'search',
      id: value.value,
    })

    watch(value, async() => {
     
      datos.value = {
        url: 'search',
        id: value.value === '' ? 1 : value.value && value.value === 0 ? 1 : value.value,
      }
      try {
        data.value = await apiSerice.GET_BY_ID(datos.value)
      } catch (error) {
        console.error(error)
      }
    })

    return { data, apiSerice, datos, value }
  },
  async created() {
    try {
      // this.data = await UseApi.get('http://localhost:8080/api/products/find/all')
      this.data = await apiSerice.GET_BY_ID(this.datos)
      console.log(this.data)
    } catch (error) {
      console.error(error)
    }
  },
}

</script>

<template>
  <input type="text" v-model="value" >
  <p v-if="data">{{ data }}</p>s
  <span>id: {{ value }}</span>
</template>

<style lang="scss" scoped>
</style>
