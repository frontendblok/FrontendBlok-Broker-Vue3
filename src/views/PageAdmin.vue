<template>
    <div>
        <div class="dashboard-info">
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconUser />
                </div>
                <h3 class="dashboard-info__title"><span>Количество пользователей</span>1200</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconDeal />
                </div>
                <h3 class="dashboard-info__title"><span>Количество сделок</span>37</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconFeedback />
                </div>
                <h3 class="dashboard-info__title"><span>Рейтинг компании</span>8.5 / 10</h3>
            </div>
            <div class="dashboard-info__item">
                <div class="dashboard-info__icon">
                    <IconActivity />
                </div>
                <h3 class="dashboard-info__title"><span>Активные пользователи</span>334</h3>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Имя и почта</th>
                    <th>Статус инвестора</th>
                    <th>ИНН</th>
                    <th>Валютное резиденство</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(table, index) in TableData" :key="index">
                    <td>
                        <div class="text-sm leading-5 font-medium text-gray-900">{{ table.name }}</div>
                        <div class="text-sm leading-5 text-gray-500">{{ table.email }}</div>
                    </td>
                    <td>
                        <span :class="`px-3 text-xs leading-5 bg-${table.statusColor}-100 text-${table.statusColor}-700 inline-flex rounded-full`">{{ table.status }}</span>
                    </td>
                    <td>{{ table.inn }}</td>
                    <td>{{ table.country }}</td>
                    <td>
                        <router-link to="/user/profile" class="btn-link">Посмотреть профиль</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">

import IconUser from '../components/icons/IconUser.vue'
import IconDeal from '../components/icons/IconDeal.vue'
import IconFeedback from '../components/icons/IconFeedback.vue'
import IconActivity from '../components/icons/IconActivity.vue'
import { useTableData } from '../interfaces/useTableData'

export default {
    name: 'Admin',
    components: { IconUser, IconDeal, IconFeedback, IconActivity },
    setup() {
        const { TableData } = useTableData();
        return { TableData };
    }
}
</script>
