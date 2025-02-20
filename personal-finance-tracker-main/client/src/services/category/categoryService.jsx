import { checkToken } from '../../utils';
import axios from '../../utils/axios';

// TOKEN FROM LOCALSTORAGE
const token = checkToken();

// CREATE
export const addCategoryAPI = async ({ name, type }) => {
  const response = await axios.post(`/category`, { name, type });
  //Return a promise
  return response.data;
};

// lists
export const listCategoriesAPI = async () => {
  const response = await axios.get(`/category`);
  //Return a promise
  return response.data;
};

// UPDATE
export const updateCategoryAPI = async ({ name, type, id }) => {
  const response = await axios.put(`/category/update/${id}`, {
    name,
    type,
  });
  return response.data;
};

// DELETE
export const deleteCategoryAPI = async id => {
  const response = await axios.delete(`/category/delete/${id}`);
  return response.data;
};
