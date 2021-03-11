<template>
    <div>
        <div class="dashboard-info">
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconDeal />
                </div>
                <h3 class="dashboard-info__title"><span>Количество активов</span>1200</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconCoin />
                </div>
                <h3 class="dashboard-info__title"><span>Сумма активов (РУБ)</span>37 000 ₽</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconCoin />
                </div>
                <h3 class="dashboard-info__title"><span>Сумма активов (USD)</span>5 500 $</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconIncome />
                </div>
                <h3 class="dashboard-info__title"><span>Доход за сегодня</span>+25%</h3>
            </div>
        </div>

        <h3 class="title">Валюты</h3>
        <Currency />

        <h3 class="title">Криптовалюты</h3>
        <Crypto />

        <h3 class="title">Акции</h3>
        <Stock />

        <h3 class="title">Календарь дивидендов</h3>
        <Dividends />

        <h3 class="title">Загрузка документов</h3>
        <FormUpload />
    </div>
</template>
<script lang="ts">

import IconDeal from '../components/icons/IconDeal.vue'
import IconCoin from '../components/icons/IconCoin.vue'
import IconIncome from '../components/icons/IconIncome.vue'
import Currency from '../components/clients/Currency.vue'
import Crypto from '../components/clients/Crypto.vue'
import Stock from '../components/clients/Stock.vue'
import Dividends from '../components/clients/Dividends.vue'
import FormUpload from '../components/FormUpload.vue'

export default {
    name: 'Client',
    components: { IconDeal, IconCoin, IconIncome, Currency, Crypto, Stock, Dividends, FormUpload }
}
</script>
