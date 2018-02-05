let nameLet = "Simba";
console.log("Name :",nameLet);


//Block Scoping in ES6
    const fName = "Simbarashe Mupfukudzwa";
    if (fName) {
      var lName = "Rowdy";
      console.log(fName + " is " + lName);
    }

    console.log(lName);