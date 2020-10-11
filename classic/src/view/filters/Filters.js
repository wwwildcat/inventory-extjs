Ext.define('InventoryApp.view.filters.Filters', {
	extend: 'Ext.form.Panel',
	xtype: 'productsFilter',

	requires: [
        'InventoryApp.view.filters.FiltersController',
	],

	controller: 'filters',

	title: 'Список товаров',

	items: {
		xtype: 'form',
		margin: '10',
		items: [{
			xtype: 'textfield',
			name: 'idFilter',
			reference: 'idFilter',
			fieldLabel: 'ID:',
			emptyText: 'Введите фильтр...',
			submitEmptyText: false,
			enableKeyEvents: true,
			listeners: {
				keyup: 'onEnterID'
			},
		},
		{
			xtype: 'textfield',
			name: 'descriptionFilter',
			reference: 'descriptionFilter',
			fieldLabel: 'Описание:',
			emptyText: 'Введите фильтр...',
			submitEmptyText: false,
			enableKeyEvents: true,
			listeners: {
				keyup: 'onEnterDescription'
			},
		}]
	},
});