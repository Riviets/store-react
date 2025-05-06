export const formatTitle = (str) => {
  if (str.length < 25) return str;
  return str.slice(0, 25) + "...";
};

export const formatString = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};
