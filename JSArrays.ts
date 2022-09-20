type car = {
    id: Number
    manufacturer: String
    model: String
    engineType: String
    power: Number
    color: String
}

const firstCar: car = {
    id: 1,
    manufacturer: "Audi",
    model: "RS 5",
    engineType: "V6",
    power: 450,
    color: "black"
}

const firstCar2: car = {
    id: 1.5,
    manufacturer: "Audi",
    model: "RS 6",
    engineType: "V8 Twinturbo",
    power: 620,
    color: "black"
}

const secondCar: car = {
    id: 2,
    manufacturer: "Mercedes",
    model: "C63",
    engineType: "V8 TwinTurbo",
    power: 487,
    color: "blue"


}
const thirdCar: car = {
    id: 3,
    manufacturer: "BMW",
    model: "M5 Competition",
    engineType: "V8 TwinTurbo",
    power: 625,
    color: "white"


}
const fourthCar: car = {
    id: 4,
    manufacturer: "Nissan",
    model: "GTR",
    engineType: "V6 TwinTurbo",
    power: 580,
    color: "yellow"


}

let cars = [firstCar,secondCar,thirdCar,fourthCar,firstCar2];



console.log(cars)


console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[cars.length - 1])


const findMyCar = cars.filter(car => car.manufacturer == "Audi");
console.log(findMyCar)