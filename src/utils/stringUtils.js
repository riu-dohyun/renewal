export const firstCharToUpperCase = string => {
  const firstChar = string.charAt(0);
  const others = string.slice(1);
  return firstChar.toUpperCase() + others;
};
