export const kConverter = (num) => {
  if (num > 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else if (num > 100000) {
    return (num / 100000).toFixed(1) + "M";
  } else {
    return num;
  }
};

export default kConverter;
