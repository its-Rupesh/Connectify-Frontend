import moment from "moment";

const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";
  if (fileExt === "mp3" || fileExt === "wav" || fileExt === "ogg")
    return "audio";
  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";
  return "file";
};
const transformImage = (url = "", width = 100) => {
  //const new_url = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
  return url;
};
const getLast7Days = () => {
  const currentDate = moment();
  const last7Days = [];
  for (let i = 0; i < 7; i++) {
    last7Days.unshift(currentDate.format("MMM D"));
    currentDate.subtract(1, "days");
  }
  return last7Days;
};
const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  else localStorage.setItem(key, JSON.stringify(value));
};
export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };
