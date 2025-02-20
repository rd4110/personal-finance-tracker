import AdminLayout from '../../../components/AdminLayout';
// import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './settings.css';

const Settings = () => {
  return (
    <AdminLayout heading="Settings">
      <div className="profile-container">
        <div className="welcome-msg">
          <ul>
            <li>Accessibility</li>
            <li>Account</li>
            <li>Theme</li>
          </ul>
        </div>

        <div className="profile-btn-container">
          {/* <Button onClick={}>Home</Button> */}
        </div>
      </div>
    </AdminLayout>
  );
};
export default Settings;