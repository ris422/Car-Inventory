function problem5(arr, year = 2000) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
        return 'arr must be typeof Array';
    }

    // Filter cars older than the specified year and return the count
    const olderCarsCount = arr.filter(car => car < year).length;

    return olderCarsCount;
}

module.exports = problem5;
