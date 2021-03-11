<template>
    <div class="box-stock">
        <div class="box-stock__item" v-for="value in stock" :key="value.stock">
            <div class="box-stock__title">
                <div class="box-stock__image">
                    <img :src="value.image" :alt="value.companyName">
                </div>
                <h3>
                    {{ value.companyName }} <span>{{ value.symbol }}</span>
                </h3>
            </div>
            <span class="box-stock__price">{{ value.price }} $</span>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios'

export default {
    name: 'Stock',
    data() {
        return {
            stock: [],
            errors: [],
        }
    },
    created() {
        axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
            .then(responce => {
                this.stock = responce.data
                console.log(responce)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>
<style scoped>
    .box-stock {
        @apply grid grid-cols-4 gap-4 mb-6
    }
    .box-stock__item {
        @apply bg-white rounded-md flex-1 px-8 py-4 flex items-center justify-between
    }
    .box-stock__title {
        @apply flex items-center w-8/12
    }
    .box-stock__title h3 {
        @apply truncate flex-grow
    }
    .box-stock__title span {
        @apply block text-gray-400 text-sm
    }
    .box-stock__image {
        @apply overflow-hidden mr-4 h-8 w-8 min-w-max
    }
    .box-stock__image img {
        @apply h-8 w-8 object-contain
    }
    .box-stock__price {
        @apply w-4/12 text-right
    }
</style>