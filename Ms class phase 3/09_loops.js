const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shopd = [
    {
        itemName: "HTP watch",
        Price: 399
    },
    {
        itemName: "t9x headphones",
        Price: 899
    },
    {
        itemName: "Julion Series neckrest",
        Price: 166
    },
    {
        itemName: " Umbrella pair shoes",
        Price: 546
    }
]

const priceToPay = shopd.reduce((acc, item) => acc + item.Price, 0)
console.log(priceToPay);