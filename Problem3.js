function problem3(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return 'arr must be typeof Array';
    }
    // Extracting model names using map
    const modelNames = arr.map(car => car.car_model);
    // Sorting the modelNames array
    const sortedModelNames = modelNames.sort((a, b) => a.localeCompare(b));
    return sortedModelNames;
  }
  
  module.exports = problem3;
  