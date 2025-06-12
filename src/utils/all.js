/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

const BASE_URL = import.meta.env.BASE_URL;
export function getResolvedPath(originalPath) {
  if (originalPath === "/") return BASE_URL;
  return BASE_URL + originalPath.substring(1);
}
