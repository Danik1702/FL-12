const countNumbers = (str) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const countsObject = {};

    for (let i = 0; i < str.length; i++) {
        if (~numbers.indexOf(+str[i])) {
            let cutOfStr = str.split(str[i]).join('');

            countsObject[str[i]] = str.length - cutOfStr.length;

            str = cutOfStr;

            i--;
        }
    }

    return countsObject;
};

countNumbers('de2234dg094214l32');