const car1 = {
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2025
};

const car2 = {
    brand: "Toyota",
    model: "Land Cruiser",
    owner: "Michael"
};

const car3 = {...car1, ...car2};
console.log (car3)