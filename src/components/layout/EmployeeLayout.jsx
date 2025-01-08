// src/components/layout/EmployeeLayout.jsx
import EmployeeNavbar from '../navbar/EmployeeNavbar';

const EmployeeLayout = ({ children }) => (
  <div>
    <EmployeeNavbar />
    <main>{children}</main>
  </div>
);

export default EmployeeLayout;
