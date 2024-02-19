const convertTime = (time) => {
  // Check if the time string contains the colon character
  if (!time.includes(":")) {
    // If the colon is not present, return an error message or handle it as per your requirement
    return "Invalid time format";
  }
  const timeParts = time.split(":");

  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridiem = "am";

  if (hours >= 12) {
    meridiem = "pm";

    if (hours > 12) {
      hours -= 12;
    }
  }

  return (
    hours.toString().padStart(2, "0") +
    ":" + // Ensure hours are always 2 digits
    minutes.toString().padStart(2, "0") +
    " " +
    meridiem
  );
};

export default convertTime;
