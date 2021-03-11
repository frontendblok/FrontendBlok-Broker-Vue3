<template>
    <table class="table mb-4">
        <thead>
            <tr>
                <th>Дата объявления</th>
                <th>Дата закрытия реестра</th>
                <th>Дата выплаты</th>
                <th>Тикер</th>
                <th>Размер выплат</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="value in dividends.slice(20,30)" :key="value.stock">
                <td>{{ value.declarationDate }}</td>
                <td>{{ value.recordDate }}</td>
                <td>{{ value.paymentDate }}</td>
                <td>{{ value.symbol }}</td>
                <td>{{ value.dividend }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
import axios from 'axios'

export default {
    name: 'Dividends',
    data() {
        return {
            dividends: [],
            errors: [],
        }
    },
    created() {
        axios.get('https://financialmodelingprep.com/api/v3/stock_dividend_calendar?from=2021-06-01&to=2021-09-10&apikey=6c9be8fcb7df7894ba5ae48be14935fc')
            .then(responce => {
                this.dividends = responce.data
                console.log(responce)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>