// use localstorage to store messages

export const setLocalStorage = (name, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(name, data);
};

export const getLocalStorage = (name) => {
  const data = localStorage.getItem(name);

  if (!data) return '';
  return JSON.parse(data);
};
