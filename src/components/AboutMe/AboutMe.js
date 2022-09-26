import Portfolio from '../Portfolio/Portfolio';
import studentPhotoPath from '../../images/student.jpg';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__info-block">
        <div className="about-me__info">
          <p className="about-me__name">Юрлова Виктория</p>
          <p className="about-me__spec">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__bio">Всю жизнь живу в Новосибирске. По специальности - экономист-менеджер
            в сфере природопользования. Есть семья. До декретного отпуска работала прподавателем в ВУЗе. В отпуске
            заинтересовалась кодингом. В 2020-2021 году прошла подготовку по программе Python-разработчик, в 2021-2022 году
            - Веб-разработчик от Яндекс Практикума. Также в активе подготовка по программе Основы компьютерных и веб-
            технологий на Python от Диджитализируй.</p>
          <ul className="list about-me__list">
            <li className="about-me__list-item">
              <a className="link link_color_black" href="https://vk.com/v.a.yurlova" target="_blank" rel="noreferrer">VK</a>
            </li>
            <li className="about-me__list-item">
              <a className="link link_color_black" href="https://github.com/yurlovaviktoriya" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={studentPhotoPath} alt="Фотография студента"/>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;
