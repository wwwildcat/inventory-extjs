Ext.define('InventoryApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
		'InventoryApp.view.login.LoginController',
		'Ext.form.Panel',
	],

	controller: 'login',
	bodyPadding: 10,
	title: 'Авторизация',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		items: [{
            xtype: 'textfield',
			name: 'username',
			reference: 'username',
            fieldLabel: 'Пользователь',
            allowBlank: false,
		},
		{
            xtype: 'textfield',
			name: 'password',
			reference: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
			allowBlank: false,
			enableKeyEvents: true,
			listeners: {
				keyup: 'onEnterPassword'
			},
		},
		{
			xtype: 'displayfield',
			hideEmptyLabel: false,
			value: 'Введите ваш пароль',
		}],
		buttons: [{
            text: 'Войти',
            formBind: true,
            listeners: {
                click: 'onLoginClick',
            }
        }],
	},
});