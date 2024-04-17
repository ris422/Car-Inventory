function problem6(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
        return 'arr must be typeof Array';
    }
    // Filter cars that are Audi or BMW
    const AudiBMW = arr.filter(car => ['Audi', 'BMW'].includes(car.car_make));
    // Convert the result to JSON string
    return JSON.stringify(AudiBMW);
}

module.exports = problem6;
