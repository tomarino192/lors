// src/components/layout/BusinessLayout.jsx
import BusinessNavbar from '../navbar/BusinessNavbar';

const BusinessLayout = ({ children }) => (
  <div>
    <BusinessNavbar />
    <main>{children}</main>
  </div>
);

export default BusinessLayout;
