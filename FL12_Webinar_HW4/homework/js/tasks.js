// Task 1: Max element in array

const maxElement = numbersArray => Math.max(...numbersArray);

const arr = [1, 4, 5, 0, 12431, 42, 542, 5114, 532];
console.log(maxElement(arr));

// Task 2: Function which copies array

const copyArray = arr => [...arr];

const array = [1, 2, 3];
const copyedArray = copyArray(array);
console.log(array, copyedArray);
console.log(array === copyedArray);

// Task 3: Unique id

const addUniqueId = obj => {
    return {...obj, id: Symbol()};
};

const obj = {name: 'Max', age: 19};
const newObj = addUniqueId(obj);
console.log(obj);
console.log(newObj);

// Task 4: Regroups object properties

const regroupObject = (obj) => {
    const {name, details: {university, ...user}} = obj; 
    user.firstName = name;
    return {university, user};
};

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'NULP'}};
console.log(regroupObject(oldObj));

// Task 5: Unique elements in array

const findUniqueElements = arr => [...new Set(arr)];

const array2 = [1, 2, 3, 1, 42, 42, 12 ,4 ,5 ,1 ,3];
console.log(findUniqueElements(array2));

// Task 6: Masks phone number

const hideNumber = number => {
    return number.slice(number.length - 4).padStart(number.length, '*');
};

const number = '0123456789';
console.log(hideNumber(number));

// Task 7: Function which has all parameters always required

const error = () => new Error('Missing property');

const add = (a = error, b = error) => {
    if (typeof a === 'function'){
        throw a();
    } 
    if (typeof b === 'function') {
        throw b();
    }

    return a + b;
};
console.log(add(1, 4));
console.log(add(2));

// Task 8: Promises

const fetchJson = url => {
    return fetch(url)
        .then(request => request.text())
        .then(text => JSON.parse(text))
        .then(response => {
            const arrayOfnames = response.map(elem => elem.name).sort();
            console.log(arrayOfnames);
        })
        .catch(error => console.log(`Error: ${error}`));

}

fetchJson('https://api.github.com/users/danik1702/repos');

// Task 9: Async Await

const fetchJsonAsync = async url => {
    try {
        const request = await fetch(url);
        const text = await request.text();
        const response = JSON.parse(text);
        const arrayOfNames = response.map(elem => elem.name).sort();
        console.log(arrayOfNames);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

fetchJsonAsync('https://api.github.com/users/danik1702/repos');