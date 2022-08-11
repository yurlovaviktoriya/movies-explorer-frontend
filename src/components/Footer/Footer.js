import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__project-name-wrapper">
        <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__info">
       <p className="footer__copyright">&copy; 2022</p>
       <ul className="list footer__nav">
         <li className="footer__nav-item">
           <a className="link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
         </li>
         <li className="footer__nav-item">
           <a className="link"href="https://github.com/yurlovaviktoriya" target="_blank" rel="noreferrer">Github</a>
         </li>
         <li className="footer__nav-item">
           <a className="link"href="https://vk.com/v.a.yurlova" target="_blank" rel="noreferrer">VK</a>
         </li>
       </ul>
      </div>
    </footer>
  );
}

export default Footer;
