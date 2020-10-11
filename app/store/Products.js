Ext.define('InventoryApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    storeId: 'products',

    fields: [
        'id', 'name', 'description', 'price', 'quantity'
    ],

    data: { items: [
        {
            id: 1,
            name: "Товар 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: 200,
            quantity: 5
        },
        {
            id: 2,
            name: "Товар 2",
            description: "Curabitur suscipit dolor in iaculis dictum. Nunc sed faucibus odio",
            price: 11.5,
            quantity: 2
        },
        {
            id: 3,
            name: "Товар 3",
            description: "Integer ac nisi lorem. Nam vitae tempus mi, a ultrices quam",
            price: 343,
            quantity: 10
        },
        {
            id: 4,
            name: "Товар 4",
            description: "Nam nec odio vitae turpis euismod pulvinar et id massa",
            price: 2.35,
            quantity: 0
        },
        {
            id: 5,
            name: "Товар 5",
            description: "Fusce sagittis elit ligula, id tempus tellus ultricies ac",
            price: 50,
            quantity: 3
        },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
