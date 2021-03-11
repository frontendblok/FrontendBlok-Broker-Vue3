<template>
    <ul class="dashboard-info">
        <li class="dashboard-info__item currency" v-for="value in cryptos" :key="value.cryptos">
            <span>{{ value.name }}</span>
            <span>{{ value.price.toFixed(2) }} $</span>
        </li>
    </ul>
</template>
<script lang="ts">
import axios from 'axios'

export default {
    name: 'Crypto',
    data() {
        return {
            cryptos: [],
            errors: [],
        }
    },
    created() {
        axios.get('https://financialmodelingprep.com/api/v3/quote/BTCUSD,ETHUSD?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
            .then(responce => {
                this.cryptos = responce.data
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