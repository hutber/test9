export const fetchAPI = async url => {
  const dbData = await fetch(url)
    .then(response => response.json())
    .catch(e => {
      console.error(e);
      return e;
    });
  return dbData;
};
