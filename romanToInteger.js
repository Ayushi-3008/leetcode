/**
 * Create an roman object with value and priority key for each string
 * Loop thorugh an array from right to left and add the num if the priority of new char is greater than the present char priority else substract the value.
 * @param {*} romanString 
 * @returns 
 */
export function romanToInteger(romanString) {
    const romanObj = {
        I: {
            value: 1,
            priority: 0
        },
        V: {
            value: 5,
            priority: 1
        },
        X: {
            value: 10,
            priority: 2
        },
        L: {
            value: 50,
            priority: 3
        },
        C: {
            value: 100,
            priority: 4
        },
        D: {
            value: 500,
            priority: 5
        },
        M: {
            value: 1000,
            priority: 6
        }
    }
    const splittedString = romanString.split("");
    let num = 0;
    let priority = romanObj[splittedString[splittedString.length-1]].priority;

    for (let i = splittedString.length-1 ; i >= 0 ; i--) {  
        let newPriority = romanObj[splittedString[i]].priority;
        if (newPriority >= priority) {
            num +=  romanObj[splittedString[i]].value;
            priority = newPriority
        } else {
            num -=  romanObj[splittedString[i]].value;
            priority = newPriority
        }
    }
    return num
}
