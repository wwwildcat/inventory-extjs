Ext.define('InventoryApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	onClickProductButton: function () {
		const tab = this.view.add({
            title: 'Товары',
            items: [{
				xtype: 'productsFilter'
			},{
				xtype: 'productsList'
			}],
        });

        this.getView().setActiveTab(tab);
	},

    onClickExitButton: function () {
        this.getView().destroy();

        Ext.create({
            xtype: 'login',
        });
    }
});