export const formateDate = (date, config) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
  const options = config ? config : defaultOptions;
  
  return new Date(date).toLocaleDateString("en-US", options);
};
