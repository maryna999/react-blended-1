import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
const icons = [
  <FaRegThumbsUp key="trumbs" />,
  <MdPeople key="person" />,
  <MdOutlineProductionQuantityLimits key="limit" />,
  <GiTreeDoor key="door" />,
];

export const Statistics = ({ stats }) => {
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>

      <ul className={style.list}>
        {stats.map((stat, index) => {
          return (
            <li key={stat.id} className={style.item}>
              <StatisticsItem stat={stat} icon={icons[index]} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
