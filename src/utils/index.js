export const formatTitle = (str, symbols = 25) => {
  if (str.length < Number(symbols)) return str;
  return str.slice(0, Number(symbols)) + "...";
};

export const formatString = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};
