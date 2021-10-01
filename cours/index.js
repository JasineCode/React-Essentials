let student = { address: { city: 'New York', country: 'USA' } }

console.log(student.address.city) // New York
console.log(student.address.country) // USA

let student = { address: { city: 'New York', country: 'USA' } }

let city = student.address.city
let country = student.address.country

console.log(city) // New York
console.log(country) // USA

let { address } = {address:{city:"New York", country:"USA"}};
let {city, country} = address;

console.log(city) // New York
console.log(country) // USA