const squareNum =(num)=>num * num;

console.log(squareNum(10));


const square = function (x){
    console.log(arguments);
    return x * x;
};
console.log(square(5));

const getFirstName = (name)=>name.split(' ')[0];
console.log(getFirstName('Mike Smith'));

const getFirstName2 = (name)=>{return name.split(' ')[0]}
console.log(getFirstName2('Celine Dion'));

const user = {
    name : "Simba",
    cities : ["Adeline","Denver","Dallas"],
    placesLived (){
       return this.cities.map((element)=>  this.name +" has lived in " + element)
       }
    };
console.log(user.placesLived());

const multiplier = {
    numbers :[2,4,6,8,10],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((num)=> this.multiplyBy * num)
    }
}
console.log(multiplier.multiply());