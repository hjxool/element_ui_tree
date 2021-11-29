let tree = new Vue({
    el: '#tree',
    data: {
        years: [
            { date: '2011', month: [{ date: '1yue', month: [{ date: '46545' }] }, { date: '2yue' }, { date: '3yue' }] },
            { date: '2012', month: [{ date: '1yue' }, { date: '2yue' }, { date: '3yue' }] },
            { date: '2013', month: [{ date: '1yue' }, { date: '2yue' }, { date: '3yue' }] },
            { date: '2014', month: [{ date: '1yue' }, { date: '2yue' }, { date: '3yue' }] },
        ],
        default_props: {
            children: 'month',
            label: 'date'
        }
    }
});