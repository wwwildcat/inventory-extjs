Ext.define('InventoryApp.view.card.CardController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.card',

	onSaveClick: function () {
		const currentData = this.getViewModel().data;
		const store = Ext.data.StoreManager.lookup('products');
		const record = store.getData().findBy(item => item.data.id === currentData.id);

		if (!Ext.Object.equals(record.data, currentData)) {
			Ext.Msg.show({
				title:'Сохранить изменения?',
				message: 'Данные были изменены. Сохранить?',
				buttons: Ext.Msg.YESNO,
				fn: (btn) => {
					if (btn === 'yes') {
						record.set(currentData);
					}
					this.getView().destroy();
				}
			});
		} else {
			this.getView().destroy();
		}
	},

	onCancelClick: function () {
		this.getView().destroy();
	},
});