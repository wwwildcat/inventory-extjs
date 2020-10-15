Ext.define('InventoryApp.view.list.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'productsList',

    requires: [
        'InventoryApp.store.Products',
        'InventoryApp.view.list.ListController',
        'InventoryApp.view.card.Card'
    ],

    controller: 'list',

    store: {
        type: 'products'
    },

    header: false,

    columns: [
        { text: 'ID',  dataIndex: 'id', flex: 1 },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        {
            text: 'Кол-во',
            dataIndex: 'quantity',
            flex: 1,
            renderer: (value, meta) => {
                if (!value) {
                    meta.style = "background-color:red;";
                }
                return value;
            },
        }
    ],

    listeners: {
        cellclick: 'onCellClick',
    }
});
