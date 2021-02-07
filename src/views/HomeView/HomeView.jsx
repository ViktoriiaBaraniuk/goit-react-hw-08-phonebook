import back from '../../images/back.jpg';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}> Your contacts under reliable secure </h1>
    <img className={s.image} src={back} alt="open book" />
  </div>
);

export default HomeView;
