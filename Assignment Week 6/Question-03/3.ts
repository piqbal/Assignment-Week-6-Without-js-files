
// Quesation-3: Write a program that converts ginen numer of days in to weeks and days such as 17 days=2 weeks
// and 3 days .


     function convert(days:number){
     let week= Math.floor(days/7)
     let remainingdays= days % 7
     return `${days} days = ${week} weeks and ${remainingdays} days`
     }
     let totalweeks=convert(24)
     console.log(totalweeks);





