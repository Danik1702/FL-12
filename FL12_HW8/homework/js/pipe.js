function pipe(numb) {
    let result = numb;

    for (let i = 1; i < arguments.length; i++) {
        result = arguments[i](result);
    }

    return result;
}

const addOne = (x) => {
    return x + 1;
};

pipe(3, addOne, addOne, addOne);