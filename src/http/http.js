export const loadData = (url) => {
  return fetch(url).then((response) => response.json());
};
