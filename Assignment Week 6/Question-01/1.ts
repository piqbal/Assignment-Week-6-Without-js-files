// Question # 1- Write a program to convert the temperature from celsius to farhenheit and vice Verse .



function tofarhenheit(celsius:number) :number {
    return (celsius * 9/5)+32 
    }
    let celsiustofarhenheit=tofarhenheit(37)
    console.log(celsiustofarhenheit);
    
    
    
    function tocelsius(farhenheit:number):number {
        return (farhenheit - 32)* 5/9
    }
    let farhenheittocelsius=tocelsius(98.6)
    console.log(farhenheittocelsius);
    


