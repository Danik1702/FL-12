function getMin() {
    let minValue = arguments[0] || 'Please set the params';

    for (let i = 1; i < arguments.length; i++) {
        minValue = minValue > arguments[i] ? arguments[i] : minValue;
    }

    return minValue;
}

getMin(1, 4, -3, 5);