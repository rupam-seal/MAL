// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
// calling a function and append inside demo div
document.getElementById('demo').innerHTML = toCelsius(77);
