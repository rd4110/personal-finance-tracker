import axios from '../../utils/axios';
// import { BASE_URL } from "../../utils/url";
// import { getUserFromStorage } from "../../utils/getUserFromStorage";

// Get the token
// const token = getUserFromStorage();

// LOGIN
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`/user/login`, {
    email,
    password,
  });
  //Return a promise
  return response.data;
};

// REGISTER
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(`/user/signup`, {
    email,
    password,
    username,
  });
  return response.data;
};

// UPDATE PASSWORD
export const changePasswordAPI = async newPassword => {
  const response = await axios.put(`/users/change-password`, {
    newPassword,
  });
  return response.data;
};

// UPDATE PASSWORD Profile
export const updateProfileAPI = async ({ email, username }) => {
  const response = await axios.put(`${BASE_URL}/users/update-profile`, {
    email,
    username,
  });
  return response.data;
};
