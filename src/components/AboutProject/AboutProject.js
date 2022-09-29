import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-title">О проекте</h2>
      <div className="about-project__description">
        <p className="about-project__digit about-project__description-box1">
          Дипломный проект включал 5 этапов
        </p>
        <p className="about-project__digit about-project__description-box2">
          На выполнение диплома ушло 5 недель
        </p>
        <p className="about-project__text about-project__description-box3">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className="about-project__text about-project__description-box4">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__info-graphic">
        <p className="about-project__weeks about-project__weeks_type_backend">1 неделя</p>
        <p className="about-project__weeks about-project__weeks_type_frontend">4 недели</p>
      </div>
      <div className="about-project__info-graphic-notes">
        <p className="about-project__info-graphic-note about-project__info-graphic-note_type_backend">Back-end</p>
        <p className="about-project__info-graphic-note about-project__info-graphic-note_type_frontend">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
