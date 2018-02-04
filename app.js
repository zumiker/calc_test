Ext.application({
    name: 'calc_test',
    appFolder: 'app',
    autoCreateViewport: true,
    launch: function () {
        Ext.QuickTips.init();
        console.log('launch App');
    },
    controllers: ['Main']
});
