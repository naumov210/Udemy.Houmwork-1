;
'use strict';

var money = +prompt("Ваш бюджет на месяц ?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    money,
    time,
    expenses,
    income,
    savings: false
}


var a = prompt("Введите обязательную статью расходов в этом месяце", "");
var b = +prompt("Во сколько обойдётся?", "");

var expenses = {
    a,
    b
}


var optionalExpenses = {};

var income = [];

var budgetOneDay = money / 30;
alert(budgetOneDay);