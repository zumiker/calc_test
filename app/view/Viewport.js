
Ext.define('calc_test.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: {
      type: 'vbox',
      align: 'stretch'
  },
  alias: 'widget.viewport',
  initComponent: function () {
      this.items = [
          {
              xtype: 'form',
              layout: 'vbox',
              itemId: 'formId',
              width: '100%',
              defaults: {
                  padding: '10 0 0 10'
              },
              items:[
                {
                  xtype: 'textfield',
                  itemId: 'firstNum',
                  allowBlank: false,
                  emptyText: 'Число 1',
                  maskRe: /[0-9.]/,
                  regex: /(?<=^| )\d+(\.\d+)?(?=$| )/,
                  regexText: 'Значение должно соответствовать [0-9] или [0-9].[0-9]',
                  blankText: 'Поле обязательно для заполнения. начение должно соответствовать [0-9] или [0-9].[0-9]'
                },
                {
                  xtype: 'radiogroup',
                  itemId: 'operatorId',
                  layout: 'hbox',
                  items: [
                      {boxLabel: '+', boxLabelAlign: 'before', margin: '0 0 0 10', inputValue: '+', checked: true},
                      {boxLabel: '-', boxLabelAlign: 'before', margin: '0 0 0 10', inputValue: '-'},
                      {boxLabel: '*', boxLabelAlign: 'before', margin: '0 0 0 10', inputValue: '*'},
                      {boxLabel: '/', boxLabelAlign: 'before', margin: '0 0 0 10', inputValue: '/'}
                  ]
                },
                {
                  xtype: 'label',
                  itemId: 'labeloperId',
                  style: "font-size:25px;marginLeft:73px",
                  text: '+'
                },
                {
                  xtype: 'textfield',
                  allowBlank: false,
                  itemId: 'secondNum',
                  emptyText: 'Число 2',
                  maskRe: /[0-9.]/,
                  regex: /(?<=^| )\d+(\.\d+)?(?=$| )/,
                  regexText: 'Значение должно соответствовать [0-9] или [0-9].[0-9]',
                  blankText: 'Поле обязательно для заполнения. начение должно соответствовать [0-9] или [0-9].[0-9]'
                },
                {
                    xtype: 'label',
                    forId: 'equalId',
                    style: "font-size:25px;marginLeft:73px",
                    text: '='
                },
                {
                  xtype: 'textfield',
                  itemId: 'resultNum',
                  emptyText: 'Результат',
                  readOnly: true
                }
              ],
              buttonAlign:'left',
              buttons:[{
                  text: 'Расчет',
                  formBind: true,

                  itemId:'calc'
              }]
            }
          ];
          this.callParent(arguments);
        }
});
