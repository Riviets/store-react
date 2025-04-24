export const formatTitle = (str) => {
  if (str.length < 30) return str;
  return str.slice(0, 30) + "...";
};
