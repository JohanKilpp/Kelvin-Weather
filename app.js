// Today's forecast in kelvin
const kelvin = 298;
// celsius is always kelvin minus 273
let celsius = kelvin - 273;
// fahrenheit formula calc
let fahrenheit = celsius * (9/5) + 32;
// floor method to round down the formula result
fahrenheit = Math.floor(fahrenheit);
//convert to newton
let newton = celsius*(33/100);
newton = Math.floor(newton);

console.log(`The ${kelvin} Kelvin is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees celsius and ${newton} degrees newton`)
