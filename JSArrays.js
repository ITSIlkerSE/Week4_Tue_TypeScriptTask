const firstCar = {
    id: 1,
    manufacturer: "Audi",
    model: "RS 5",
    engineType: "V6",
    power: 450,
    color: "black"
};
const firstCar2 = {
    id: 1.5,
    manufacturer: "Audi",
    model: "RS 6",
    engineType: "V8 Twinturbo",
    power: 620,
    color: "black",
    extras: "Tuned by ABT"
};
const secondCar = {
    id: 2,
    manufacturer: "Mercedes",
    model: "C63",
    engineType: "V8 TwinTurbo",
    power: 487,
    color: "blue"
};
const thirdCar = {
    id: 3,
    manufacturer: "BMW",
    model: "M5 Competition",
    engineType: "V8 TwinTurbo",
    power: 625,
    color: "white"
};
const fourthCar = {
    id: 4,
    manufacturer: "Nissan",
    model: "GTR",
    engineType: "V6 TwinTurbo",
    power: 580,
    color: "yellow"
};
const cars = [firstCar, secondCar, thirdCar, fourthCar, firstCar2];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[cars.length - 1]);
const findMyCar = cars.filter(car => car.manufacturer === "Audi");
console.log(findMyCar);
