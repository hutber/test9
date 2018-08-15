const sortArray = function(arrayToBeSorted, sortType = "amount"){
  return Array.isArray(arrayToBeSorted) && [...arrayToBeSorted].sort((a,b) =>  a[sortType]-b[sortType]);
};

const searchArray = function(array, searchTerm, field= "name"){
  return Array.isArray(array) && array.filter(val => val[field].includes(searchTerm));
};

module.exports = {
  sortArray,
  searchArray
};
