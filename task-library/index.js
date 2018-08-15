const sortTransations = function(arrayToBeSorted, sortType = "amount"){
  return Array.isArray(arrayToBeSorted) && [...arrayToBeSorted].sort((a,b) =>  a[sortType]-b[sortType]);
};

module.exports = {
  sortTransations
};
