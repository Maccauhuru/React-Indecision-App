'use strict';

var squareNum = function squareNum(num) {
    return num * num;
};

console.log(squareNum(10));

var square = function square(x) {
    console.log(arguments);
    return x * x;
};
console.log(square(5));

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};
console.log(getFirstName('Mike Smith'));

var getFirstName2 = function getFirstName2(name) {
    return name.split(' ')[0];
};
console.log(getFirstName2('Celine Dion'));

var user = {
    name: "Simba",
    cities: ["Adeline", "Denver", "Dallas"],
    placesLived: function placesLived() {
        var _this = this;

        return this.cities.map(function (element) {
            return _this.name + " has lived in " + element;
        });
    }
};
console.log(user.placesLived());

var multiplier = {
    numbers: [2, 4, 6, 8, 10],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};
console.log(multiplier.multiply());
