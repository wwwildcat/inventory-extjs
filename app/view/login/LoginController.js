Ext.define('InventoryApp.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function () {
		const username = this.lookupReference('username');
		const password = this.lookupReference('password');

		if (username.value === 'admin' && password.value === 'padmin') {
			this.getView().destroy();

			Ext.create({
				xtype: 'app-main',
			});
		} else {
			Ext.Msg.alert({
				title: 'Ошибка',
				message: 'Неверный логин или пароль',
			});
			username.reset();
			password.reset();
		}
	},

	onEnterPassword: function(textField, e) {
		if (e.getKey() == e.ENTER) {
			this.onLoginClick();
		}
	},
});