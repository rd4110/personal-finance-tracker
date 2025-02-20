export const checkToken = () => {
    const token = JSON.parse(localStorage.getItem("userInfo") || null);
    return token?.token;
};

// export const checkToken = () => {
//     return localStorage.getItem('TOKEN') ? true : false ;
// };