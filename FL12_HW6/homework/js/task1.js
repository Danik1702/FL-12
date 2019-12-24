const a = +prompt('Enter "a":', '0');
const b = +prompt('Enter "b":', '0');
const c = +prompt('Enter "c":', '0');

if (!a || !b || !c) {
    console.log('Invalid input data');
} else {
    const discriminant = b * b - 4 * a * c;

    if (discriminant === 0) {
        console.log(`x = ${Math.round(-b / (2 * a))}`);
    } else if (discriminant > 0) {
        console.log(`x1 = ${Math.round((-b + Math.sqrt(discriminant)) / (2 * a))}`);
        console.log(`x2 = ${Math.round((-b - Math.sqrt(discriminant)) / (2 * a))}`);
    } else {
        console.log('no solution');
    }
}



