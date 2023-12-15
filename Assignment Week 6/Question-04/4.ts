
//Question-4: Write a program that calculates the discount for a product based on its price. If the price is
// above $100, apply a 10% discount; otherwise, apply a 5% discount.

function discount(price:number){
    if (price > 100){
    return (price/100)*(10)
    }
    else {
     return    (price/100)*(5)
    }
}
     let productdiscount= discount(120)
     console.log(productdiscount);


