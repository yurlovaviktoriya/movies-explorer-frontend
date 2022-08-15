import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <p className='about-project__text'>Дипломный проект включал 5 этапов</p>
        <p className='about-project__text'>На выполнение диплома ушло 5 недель</p>
        <p className='about-project__text-more'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about-project__text-more'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__info-graphic'>
        <p className='about-project__parts about-project__parts_type_backend'>1 неделя</p>
        <p className='about-project__parts about-project__parts_type_frontend'>4 недели</p>
      </div>
    </section>
  );
}

export default AboutProject;
