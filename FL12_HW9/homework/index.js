function convert() {
    let convertArray = [];

    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            convertArray[i] = typeof arguments[i] === 'number' ? arguments[i] + '' : +arguments[i];
        }
    }

    return convertArray;
}

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
};

const mapArray = (arr, func) => {
    let resultMapArray = [];

    executeforEach(arr, (elem) => {
        resultMapArray.push(func(+elem));
    });

    return resultMapArray;
};

const filterArray = (arr, func) => {
    let resultFilterArray = [];

    executeforEach(arr, (elem) => {
        let funcResult = func(elem);
        if (funcResult) {
            resultFilterArray.push(elem);
        }
    });

    return resultFilterArray;
};

const flipOver = (str) => {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i-- ) {
        reverseStr += str[i];
    }

    return reverseStr;
};

const makeListFromRange = (arr) => {
    let arrayFromRange = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        arrayFromRange.push(i);
    }

    return arrayFromRange;
};

const getArrayOfKeys = (objectArray, key) => {
    let valuesArray = [];

    executeforEach(objectArray, (elem) => {
        valuesArray.push(elem[key]);
    });

    return valuesArray;
};

const substitute = (arr) => {
    const definedValue = 30;
    const resultArr = mapArray(arr, (elem) => {
        if (elem < definedValue) {
            return '*';
        }

        return elem;
    });

    return resultArr;
};

const getPastDay = (date, numb) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - numb).getDate();
};

const formatDate = (date) => {
    const ten = 10;
    const hours = date.getHours() < ten ? `0${date.getHours()}` : `${date.getHours()}`;
    const minutes = date.getMinutes() < ten ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
};

convert(['1', 2, 3, '4']);
executeforEach([1,2,3], el => {
    console.log(el * 2);
});
mapArray([2, '5', 8], el => el + 3);
filterArray([2, 5, 8], el => el % 2 === 0);
flipOver('hey world');
makeListFromRange([2, 7]);
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');
substitute([58, 14, 48, 2, 31, 29]);
getPastDay(new Date(2019, 0, 2), 2); 
formatDate(new Date());