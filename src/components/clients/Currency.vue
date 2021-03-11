<template>
    <ul class="dashboard-info">
        <li class="dashboard-info__item currency" v-for="value in currency" :key="value.currency">
            <span>{{ value.name }}</span>
            <span>{{ value.price.toFixed(2) }} ₽</span>
        </li>
    </ul>
</template>
<script lang="ts">
import axios from 'axios'

export default {
    name: 'Currency',
    data() {
        return {
            currency: [],
            errors: [],
        }
    },
    created() {
        axios.get('https://financialmodelingprep.com/api/v3/quote/USDRUB,EURRUB?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
            .then(responce => {
                this.currency = responce.data
                console.log(responce)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>
<style scoped>
    .dashboard-info .currency {
        @apply justify-between
    }
</style>