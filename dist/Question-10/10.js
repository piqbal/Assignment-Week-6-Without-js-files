"use strict";
// Question=10: Write a program that takes the number of units consumed by a user if it is greater than 100
// then add 10% tax if greater than 200 then add 15%  of tax so on up to if greater than 500 then add 25% of 
// tax . 
// Where the tax amount will be calculated by the amount of bill
function units(consumedunits, billamount) {
    if (consumedunits <= 100) {
        return billamount;
    }
    if (consumedunits > 100 && consumedunits <= 200) {
        return (billamount / 100) * (110);
    }
    if (consumedunits > 200 && consumedunits <= 500) {
        return (billamount / 100) * (115);
    }
    if (consumedunits > 500) {
        return (billamount / 100) * (125);
    }
}
let totaltax = units(511, 3000);
console.log(totaltax);
