const a = +prompt('Enter a: ', '0');
const b = +prompt('Enter b: ', '0');
const c = +prompt('Enter c: ', '0');
let condition = true;

if (!a || !b || !c) {
    alert('input values must be ONLY numbers');
    condition = false;
}

if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
    condition = false;
}

if (a + b < c || a + c < b || b + c < a) { 
    alert("Triangle doesn't exist");
} else if (condition){
    if(a === b && a=== c) {
        console.log('Equilateral triangle');
    } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}

