import { IconContext } from 'react-icons';
import s from './Statistics.module.css';
export const StatisticsItem = ({ stat, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <span className={s.counter}>{stat.total}</span>
      <p className={s.text}>{stat.title}</p>
    </>
  );
};
