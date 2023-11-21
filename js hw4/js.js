document.write('Задание 1 </br>');
let massiv = [1, 2, 3, 4, 5];
for (let i = 0; i <= massiv.length; i++){
    document.write(massiv[i] + '</br>')
}


document.write('Задание 2 </br>');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i <= arr2.length; i++){
    if(arr2[i] > -10 && arr2[i] < -3){
        document.write(arr2[i] + '</br>');
    }
}
 /*
 Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите. */
document.write('Задание 3 часть 1 </br>');
let rezult = 0;
for(let i = 23; i <= 57; i++){
     document.write(i + '</br>');
     rezult = rezult + i;
}
document.write(rezult + '</br>')
document.write('Задание 3 часть 2 </br>');
let i = 23;
while(i <= 57){
    document.write(i + '</br>')
    i++
}

/*
Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
5. */
document.write('Задание 4 </br>');
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
let str = String(elem);
if (str[0] == 1 || str[0] == 2 || str[0] == 5)
document.write(str + '</br>');

}
/*
Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным. */
document.write('Задание 5 </br>');
let daysMassive = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
for( let i = 0; i < daysMassive.length; i++){
    if(daysMassive[i] == 'Saturday' || daysMassive[i] == 'Sunday'){
        document.write(` <b> ${daysMassive[i]} </b>` + '</br>')
    }else{
        document.write(daysMassive[i] + '</br>')
    }
}

/**
 * Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.
 */
document.write('Задание 6 </br>');
let massiv6 = [1, 2, 44, 87];
massiv6.push(88);
document.write(massiv6 + '</br>');
let lastEl = massiv6.length - 1;
document.write('Последний элемент массива: ' + massiv6[lastEl] + '</br>');

document.write('Задание 8 </br>');
let arr22 = [12, false, 'Text', 4, 2, 0, -1];
let rez = [];
while(arr22.length){
    let buff = arr22.pop();
    buff = buff.toString().split('').reverse().join('');
    rez.push(buff);
}
document.write(rez + '</br>');

document.write('Задание 9 </br>');
let arr3 = [5, 9, 21, , , 9, 78, , , , 6];
let counter = 0;
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] === undefined){
        counter++;
    }
}
document.write(counter + '</br>');

document.write('Задание 10 </br>');
let arr4 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let firstIndex = arr4.indexOf(0);
let lastIndex = arr4.lastIndexOf(0);
let rezult10 = 0;

if(firstIndex === -1 || lastIndex === -1){
    rezult10 = 'Нулей нет'
} else if (firstIndex === lastIndex){
    rezult10 = 'Только один индекс'
} else{
   /* 1 МЕТОД for(let i = firstIndex; i < lastIndex; i++){
        rezult += arr4[i]; //rezult = rezult + arr[i]
    }*/
let s = arr4.slice(firstIndex, lastIndex);
    while(s.length){
        rezult10 += s.pop() //rezult = rezult + s.pop()
    }
    
}

document.write(rezult10 + '</br>');

document.write('Задание 11 </br>');
let h = +prompt('Введите высоты пирамиды');
for(let i = 1; i <= h; i++){
   /* let sp = '';//пробелы
    let p = '';//птички
    for(let j = 0; j < h - i; j++){
        sp = sp + ' ';
    }
    for(let j = 0; j < i * 2 -1; j++){
        p += '^'
    }
    document.write(`<pre>${sp + p}</pre>`)*/
    document.write(`<pre>${(' ').repeat(h -i) + ('^').repeat(i * 2 - 1)}</pre>`)
}