/**
 * Loop till the number is less than or equals to the argument
 * Check the mod of the number to check the divisibility of the integer ans based on that push the result to the array.
 * @param {*} number 
 */
export function fizzBuzz(n) {
    let looplength = 1;
    const ary = []
    while (looplength <= n) {
        if (looplength % 3 === 0 && looplength % 5 === 0) {
            ary.push("FizzBuzz")
        } else if ( looplength % 3 === 0) {
            ary.push("Fizz")
        } else if (looplength % 5 === 0){
            ary.push("Buzz")
        } else {
            ary.push(looplength.toString())
        }
        looplength ++;
    }
    return ary;
}
