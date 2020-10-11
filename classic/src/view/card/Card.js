Ext.define('InventoryApp.view.card.Card', {
	extend: 'Ext.window.Window',
	xtype: 'productCard',

	requires: [
		'InventoryApp.view.card.CardController',
		'InventoryApp.view.card.CardModel',
		'Ext.form.Panel',
	],

	controller: 'card',
	viewModel: {
		type: 'card'
	},

	bodyPadding: 10,
	closable: false,
	autoShow: true,

	bind: {
		title: 'Карточка товара: {name}',
	},

	items: {
		xtype: 'form',
		items: [{
			xtype: 'displayfield',
			hideEmptyLabel: false,
			name: 'id',
			fieldLabel: 'ID',
			bind: {
				value: '{id}',
			},
		},
		{
			xtype: 'displayfield',
			hideEmptyLabel: false,
			name: 'description',
			fieldLabel: 'Наименование',
			bind: {
				value: '{description}',
			},
		},
		{
			xtype: 'numberfield',
			minValue: 0,
			allowBlank: false,
			name: 'price',
			fieldLabel: 'Цена',
			bind: {
				value: '{price}',
			},
		},
		{
			xtype: 'numberfield',
			minValue: 0,
			allowDecimals: false,
			allowBlank: false,
			name: 'quantity',
			fieldLabel: 'Кол-во',
			bind: {
				value: '{quantity}',
			},
		}],
		buttons: [{
            text: 'Сохранить',
			formBind: true,
            listeners: {
                click: 'onSaveClick',
            }
		},
		{
            text: 'Отмена',
            formBind: true,
            listeners: {
                click: 'onCancelClick',
            }
        }],
	},
});