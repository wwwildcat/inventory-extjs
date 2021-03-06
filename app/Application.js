/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('InventoryApp.Application', {
    extend: 'Ext.app.Application',

    name: 'InventoryApp',

    requires: [
        'InventoryApp.view.main.Main',
        'InventoryApp.view.login.Login',
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    //entry point
    launch: function () {
        Ext.create({
            xtype: 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
