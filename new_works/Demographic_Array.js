let myArray = [];

let row1 = [];
let obj0 = {
    name: "Kapi",
    population: 1000,
    temp: 9,
    currency: "NG"
};
let obj1 = {
    name: "Mapi",
    population: 1000,
    temp: 6,
    currency: "NG"
};
let obj2 = {
    name: "Gapi",
    population: 1000,
    temp: 13,
    currency: "NG"
};
row1.push(null);
row1.push(obj0);
row1.push(obj1);
row1.push(obj2);

let row2 = [];
let obj3 = {
    name: "Bapi",
    population: 1000,
    temp: 10,
    currency: "NG"
};
let obj4 = {
    name: "Lapi",
    population: 1000,
    temp: 18,
    currency: "NG"
};
let obj5 = {
    name: "Lupi",
    population: 1000,
    temp: 6,
    currency: "NG"
};
row2.push(obj3);
row2.push(obj4);
row2.push(obj5);
row2.push(null);

let row3 = [];
let obj6 = {
    name: "Mami",
    population: 1000,
    temp: 10,
    currency: "NG"
};
let obj7 = {
    name: "Malumi",
    population: 1000,
    temp: 14,
    currency: "NG"
};
let obj8 = {
    name: "Sasapi",
    population: 1000,
    temp: 6,
    currency: "NG"
};
row3.push(obj6);
row3.push(null);
row3.push(obj7);
row3.push(obj8);


myArray.push(row1);
myArray.push(row2);
myArray.push(row3);

console.table(myArray);
console.table(myArray[0][1]);

let sum = 0;

for (let row of myArray) {
    for (let obj of row) {
        if (obj != null && obj.temp <= 10) {
            sum += obj.population;
        }
    }
}

console.log("Total population for objects with temp <= 10:", sum);



