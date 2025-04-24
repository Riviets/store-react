export const formatTitle = (str) => {
  if (str.length < 25) return str;
  return str.slice(0, 25) + "...";
};
