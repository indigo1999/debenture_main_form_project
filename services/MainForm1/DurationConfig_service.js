export function validateDateFormat(input) {
  // Ensure input has the required keys
  if (
    !input ||
    typeof input !== "object" ||
    !("year" in input) ||
    !("month" in input) ||
    !("day" in input)
  ) {
    return { valid: false, message: "Input must be an object with year, month, and day." };
  }

  // Convert to integers
  const years = parseInt(input.year, 10);
  const months = parseInt(input.month, 10);
  const days = parseInt(input.day, 10);

  // Check if parsing failed
  if (isNaN(years) || isNaN(months) || isNaN(days)) {
    return { valid: false, message: "Year, month, and day must be numbers." };
  }

  // Logical checks
  if (years < 0) {
    return { valid: false, message: "Years cannot be negative." };
  }
  if (months < 0 || months > 11) {
    return { valid: false, message: "Months must be between 0 and 11." };
  }
  if (days < 0 || days > 30) {
    return { valid: false, message: "Days must be between 0 and 30." };
  }

  if (days == 0 && months == 0 && years == 0){
    return { valid : false, message : "There isn't any debenture with this duration."}
  }

  return {
    valid: true,
    years,
    months,
    days,
    message: "Valid age object."
  };
}