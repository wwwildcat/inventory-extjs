Ext.define('InventoryApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'InventoryApp.view.main.MainController',
        'InventoryApp.view.filters.Filters',
        'InventoryApp.view.list.List'
    ],

    controller: 'main',
    plugins:'viewport',

    ui: 'navigation',

    header: {
        layout: {
            align: 'stretchmax',
        },
        title: {
            text: 'Учет товаров',
            flex: 0,
        },
        items: [{
            xtype: 'button',
            text: 'Товары',
            margin: '10',
            padding: '0 15',
            handler: 'onClickProductButton',
        },
        {
            xtype: 'button',
            text: 'Выход',
            margin: '10',
            padding: '0 15',
            handler: 'onClickExitButton',
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
});
