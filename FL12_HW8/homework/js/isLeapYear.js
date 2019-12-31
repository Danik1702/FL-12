const isLeapYear = (date) => {
    const year = new Date(date).getFullYear();

    if (isNaN(year)) {
        return 'Invalid date';
    }

    return year % 4 === 0 && year % 400 === 0 || year % 100 !== 0 ? 
           `${year} is a leap year` : 
           `${year} is not a leap year`;
};

isLeapYear('2000-01-15 13:00:00');