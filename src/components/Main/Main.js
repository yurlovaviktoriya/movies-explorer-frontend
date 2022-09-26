import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import './Main.css';

function Main({ isDarkTheme, isLogged, openBurgerMenu }) {
  return (
    <>
      <Header
        isDarkTheme={isDarkTheme}
        isLogged={isLogged}
        openBurgerMenu={openBurgerMenu}
      />
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Footer/>
    </>
  );
};

export default Main;
