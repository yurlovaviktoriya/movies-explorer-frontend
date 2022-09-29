import { Link } from 'react-router-dom';

import './Logo.css';

function Logo({ isAuth }) {

  const logoClasses = isAuth ? "logo logo_type_auth" : "logo";

  return (
    <Link to="/" className="link">
      <div className={logoClasses}></div>
    </Link>
  );
}

export default Logo;
