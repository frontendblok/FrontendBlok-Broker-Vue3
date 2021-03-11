import { ref } from 'vue';

export function useTableData() {
    const TableData = ref<ITableData[]>(
        [
            {
                name: 'Елена Петровская',
                email: 'helena@gmil.com',
                status: 'Активный',
                statusColor: 'green',
                inn: '78624284075',
                country: 'Резиденство РФ'
            },
            {
                name: 'Марат Агишев',
                email: 'marat@gmil.com',
                status: 'Активный',
                statusColor: 'green',
                inn: '66726664112',
                country: 'Резиденство РФ'
            },
            {
                name: 'Алексей Кузнецов',
                email: 'alex@gmil.com',
                status: 'Активный',
                statusColor: 'green',
                inn: '33623304208',
                country: 'Резиденство РФ'
            },
            {
                name: 'Лида Серова',
                email: 'lida@gmil.com',
                status: 'Подача заявки',
                statusColor: 'yellow',
                inn: '54624894225',
                country: 'Резиденство РФ'
            },
            {
                name: 'Валентин Савенко',
                email: 'valentin@gmil.com',
                status: 'Подача заявки',
                statusColor: 'yellow',
                inn: '76624883509',
                country: 'Резиденство США'
            },
            {
                name: 'Андрей Петров',
                email: 'andrew@gmil.com',
                status: 'Отключен',
                statusColor: 'red',
                inn: '06624554003',
                country: 'Резиденство РФ'
            }
        ]
    );
    return { TableData };
}