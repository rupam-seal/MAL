// An array is a special variable, which can hold more than one value

const cars = ['Saab', 'Volvo', 'BMW'];
let car = cars[0];
cars[0] = 'Opel';
document.getElementById('demo').innerHTML = cars;
