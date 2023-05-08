export const logout = () => {
  localStorage.removeItem("amul");
};

export const isLogin = () => {
  if (localStorage.getItem("amul")) {
    var data = JSON.parse(localStorage.getItem("amul"));
    if (data.token) {
      return true;
    } else {
      localStorage.removeItem("amul");
      return false;
    }
  } else {
    return false;
  }
};
