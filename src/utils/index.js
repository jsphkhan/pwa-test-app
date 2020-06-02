/** 
 * Simple Utility to demonstrate Webpack Tree Shaking
*/
export const sum = (a, b) => {
    console.log('sum fn');
    return a + b;
}

export const multiply = (a, b) => {
    console.log('multiply fn');
    return a*b;
}

export const divide = (a, b) => {
    console.log('divide fn');
    return a/b;
}

export const modulus = (a, b) => {
    console.log('modulus fn');
    return a%b;
}