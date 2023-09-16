const items = ["light", "banana", "phone", "book",  "mouse"]

console.log(items)

const caps = items.map((item) => {
    return item.toUpperCase();
})

console.log(caps);

const concat = caps.reduce((acumulator, concats) => {
    return acumulator + concats + " ";
}, "")

console.log(concat);

const itemss = ["light", "banana", "phone", "book",  "mouse"].map((item) => {
    return item.toUpperCase();
}).reduce((acumulator, concats) => {
    return acumulator + concats + " ";
}, "")

console.log(itemss)