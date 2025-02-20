import { NavLink, useNavigate } from 'react-router-dom'; 
import './Main-layout.css';

const MainLayout = ({ children, heading }) => {
const navigate = useNavigate();

const onLogout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ID');
    localStorage.removeItem('ROLE');
    navigate('/user/login')
}

return (
<div className="user-layout">

<div className="sidebar"> 

<div className="logo">
<img src="/Doctor App Logo.png" alt="" />
<p>Medi+</p>
</div>

<div className="menu">
|<p className="menu-head">Pages</p>

<div className="menu-container">
<NavLink className="menu-item" to="/user/home">
<i class="fa-solid fa-house"></i>
Home
</NavLink>

<NavLink className="menu-item" to="/user/department">
<i class="fa-solid fa-building"></i>
Department
</NavLink>

<NavLink className="menu-item" to="/user/hospital">
<i class="fa-solid fa-hospital"></i>
Hospital
</NavLink>

<NavLink className="menu-item" to="/user/doctor"> 
<i class="fa-solid fa-user-doctor"></i>
Doctor 
</NavLink>

<NavLink className="menu-item" to="/user/profile"> 
<i class="fa-solid fa-user"></i>
Profile
</NavLink>

</div>

<p className="menu-head">Others</p>

<div className="menu-container">
<NavLink className="menu-item" to="/user/settings">
<i class="fa-solid fa-gear"></i>
Settings 
</NavLink>

<p className="menu-item" onClick={onLogout}>
<i class="fa-solid fa-right-from-bracket"></i>
Logout
</p>
</div>

</div>
</div>
<nav></nav>

<div className="container">
<h1 className="heading">{heading}</h1> 
{children}
</div>

</div>
);
};

export default MainLayout;