const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * (156.5/1.07);
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.87/156.5;
    // Retornamos el valor en dólares
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };