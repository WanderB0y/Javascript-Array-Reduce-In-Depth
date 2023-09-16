const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2]

const afterTax = prices.reduce((accumulator, price) => {
    if ( price > 6){
        return accumulator + price
    }
    return accumulator + (price * 1.2);
},0)

console.log(afterTax);