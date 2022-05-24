var num1 = prompt('Первое число');
num1 = Number(num1);
//mastik bot
var num2 = prompt('Второе число');
num2 = Number(num2);


var operator = prompt('(/,+,*,-)');

//genshin = botskij bot
switch (operator) {
    case '+':
        document.write('Ответ: ',num1 + num2);
        break;
    case '-':
        document.write('Ответ: ',num1 - num2);
        break;
    case '/':
        document.write('Ответ: ',num1 / num2);
        break;
    case '*':
        document.write('Ответ: ',num1 * num2);
        
}