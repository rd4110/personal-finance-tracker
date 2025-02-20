import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/User/Home';
import Profile from './pages/User/Profile';
import UserLogin from './pages/User/Login';
import UserRegistration from './pages/User/Register';
import AddCategory from './pages/User/Category/Add';
import ListCategory from './pages/User/Category/List';
import UpdateCategory from './pages/User/Category/Update';
import AddTransaction from './pages/User/Transaction/Add';
import PrivateRoute from './components/PrivateRoute';
// import { checkToken } from './utils';
import PublicNavbar from "./components/Navbar/Public";
import PrivateNavbar from './components/Navbar/Private';
import ExpenseTracker from './pages/User/ExpenseTracker';

// import './App.css';
const App = () => {
  const user = useSelector((state) => state?.auth?.user);
  return (
    <>
    {user ? <PrivateNavbar /> : <PublicNavbar />}
    <Routes>
      <Route path="/user/home/" element={<HomePage />} />
      <Route path="/user/login/" element={<UserLogin />} />
      <Route path="/user/register/" element={<UserRegistration />} />
      <Route path="/user" element={<PrivateRoute />}>
        <Route path="/user/profile/" element={<Profile />} />
        <Route path="/user/expense-tracker/" element={<ExpenseTracker />} />
        <Route path="/user/categories/" element={<ListCategory />} />
        <Route path="/user/category/add-category/" element={<AddCategory />} />
        <Route path="/user/category/update-category/:id" element={<UpdateCategory />} />
        <Route path="/user/add-transaction" element={<AddTransaction />} />
      </Route>
    </Routes>
    </>
  );
};
export default App;
