/*
* Work out the number of seconds in a year
*/

var secondsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365; // 2016 actually has 366!

var secondsInYear = secondsInMinute * minutesInHour * hoursInDay * daysInYear;

/*
* Work out how many slices of pizza everyone can have at the end of class!
*/

var numberOfPizzas = 10;
var numberOfSlicesPerPizza = 8;
var numberOfPeople = 10;

var slicesPerPerson = numberOfPizzas * numberOfSlicesPerPizza / numberOfPeople;