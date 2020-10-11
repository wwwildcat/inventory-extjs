Ext.define('InventoryApp.view.filters.FiltersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.filters',

	onEnterID: function(textField, e) {
		if (e.getKey() == e.ENTER) {
			const list = textField.up('app-main').down('productsList');

			list.getStore().addFilter(item => textField.value ? item.data.id == textField.value : true);
		}
	},

	onEnterDescription: function(textField, e) {
		if (e.getKey() == e.ENTER) {
			var list = textField.up('app-main').down('productsList');

			list.getStore().addFilter(item => {
				const description = item.data.description.toLowerCase();
				const value = textField.value.toLowerCase();

				return description.indexOf(value) !== -1;
			});
		}
	},
});