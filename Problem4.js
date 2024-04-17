function problem4(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return 'arr must be typeof Array';
    }
    
    // Extract car years using reduce
    const years = arr.reduce((acc, car) => {
      acc.push(car.car_year);
      return acc;
    }, []);
    
    return years;
  }
  
  module.exports = problem4;
  