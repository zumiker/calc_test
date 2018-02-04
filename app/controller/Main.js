Ext.define('calc_test.controller.Main', {
    extend: 'Ext.app.Controller',
    models: ['Model'],
    views: ['Viewport'],
    init: function () {
        this.control({
          'viewport #calc':{
            click: function(element){
              var viewport  = element.up('viewport');
              var firstNumEl  = viewport.query('#firstNum')[0];
              var secondNumEl = viewport.query('#secondNum')[0];
              var firstNum  = Number(firstNumEl.getValue());
              var secondNum = Number(secondNumEl.getValue());
              firstNumEl.setValue(firstNum);
              secondNumEl.setValue(secondNum);
              var resultNum = viewport.query('#resultNum')[0];
              var operator  = viewport.query('#operatorId')[0].getChecked()[0].inputValue;
              var result;
              switch(operator) {
                case '+':
                  result = firstNum + secondNum;
                  break;
                case '-':
                  result = firstNum - secondNum
                  break;
                case '*':
                  result = firstNum * secondNum
                  break;
                case '/':
                  if(secondNum!=0)
                    result = firstNum / secondNum
                  else {
                    Ext.MessageBox.alert('Ошибка вычисления', 'Деление на ноль не разрешено.', Ext.emptyFn);
                  }
                  break;
              }
              resultNum.setValue(result);
            }
          },
          'viewport #operatorId':{
            change: function(element, newValue, oldValue){
              var viewport  = element.up('viewport');
              var labelOper = viewport.query('#labeloperId')[0];
              Ext.Object.eachValue(newValue, function (value) {
                labelOper.setText(value);
              });
            }
          }
        });
    }
});
