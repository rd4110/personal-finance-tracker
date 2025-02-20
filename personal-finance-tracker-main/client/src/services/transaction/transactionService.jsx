import { checkToken } from '../../utils';
import axios from '../../utils/axios';

// TOKEN FROM LOCALSTORAGE
const token = checkToken();

// CREATE
export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const response = await axios.post(`/transaction`, {
    category,
    date,
    description,
    amount,
    type,
  });
  return response.data;
};

// DISPLAY
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const response = await axios.get(`/transaction/list`, {
    params: { category, endDate, startDate, type },
  });
  return response.data;
};

// // UPDATE
// export const updateCategoryAPI = async ({ name, type, id }) => {
//   const response = await axios.put(`${BASE_URL}/categories/update/${id}`, {
//     name,
//     type,
//   });
//   return response.data;
// };

// // DELETE
// export const deleteCategoryAPI = async id => {
//   const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`);
//   return response.data;
// };
