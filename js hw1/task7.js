/* Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata. */
let S = 2000000;
let p = 10;
let years = 5;
let Pereplata = (S * p)/100 * 5;
console.log(Pereplata);
document.write(Pereplata)