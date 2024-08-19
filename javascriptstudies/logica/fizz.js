const number = (num) => {
    if(typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
    } else if (num % 5 === 0) {
        console.log("buzz")
    } else if (num % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(num);

    }
}

number(5)
  
