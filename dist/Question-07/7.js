"use strict";
// //Question=7: Write a program that checks if the given number is divisible by 3 or 5 or both or not
//  divisible by anyone show output accordingly.
let givennum = 18;
if (givennum % 3 == 0 && givennum % 5 == 0) {
    console.log(`${givennum} is divisible by  both 3 and 5`);
}
else if (givennum % 3 == 0) {
    console.log(`${givennum} is divisible by 3`);
}
else if (givennum % 5 == 0) {
    console.log(`${givennum} is divisible by 5`);
}
else {
    console.log(`${givennum} is not divisible by both 3 and 5`);
}
