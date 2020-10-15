Ext.define('InventoryApp.view.list.ListController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.list',

	onCellClick: function (table, td, cellIndex, record) {
		if (cellIndex === 1) {
			const productCard = Ext.create({
				xtype: 'productCard',
			});

			productCard.viewModel.setData(record.data);
		}
	}
});