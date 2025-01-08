// src/components/layout/AdminLayout.jsx
import AdminNavbar from '../navbar/AdminNavbar';

const AdminLayout = ({ children }) => (
  <div>
    <AdminNavbar />
    <main>{children}</main>
  </div>
);

export default AdminLayout;
