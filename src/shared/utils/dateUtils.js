export const convertToISO8601 = (dateString, isEndDate = false) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hour = isEndDate ? "16" : "10";
  const time = `${hour}0000Z`;

  return `${year}${month}${day}T${time}`;
};
