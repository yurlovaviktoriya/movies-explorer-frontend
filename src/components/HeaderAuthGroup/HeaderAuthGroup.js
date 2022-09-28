import { Link } from 'react-router-dom';

import './HeaderAuthGroup.css';

function HeaderAuthGroup() {

  return (
    <div className="header__auth">
      <a className="link link_color_white header__auth-link" href="/signup">Регистрация</a>
      <Link to="/signin"><button className="btn header__auth-btn" type="button">Войти</button></Link>
    </div>
  );
}

export default HeaderAuthGroup;
