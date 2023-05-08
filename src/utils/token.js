export const token = () => {
  if (JSON.parse(localStorage.getItem("amul"))) {
    var data = JSON.parse(localStorage.getItem("amul"));
    return data.token;
  }
};
