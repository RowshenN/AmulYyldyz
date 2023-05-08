export const logout = () => {
    localStorage.removeItem("TDYAdmin");
};

export const isLogin = () => {
    if (localStorage.getItem("TDYAdmin")) {
        var data = JSON.parse(localStorage.getItem("TDYAdmin"));
        if (data.token) {
            return true;
        } else {
            localStorage.removeItem("TDYAdmin");
            return false;
        }
    } else {
        return false;
    }
};
