import css from './Statistics.module.css';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((stat) => {
          return (
            <li
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              className={css.item}
            >
              <span className={css.text}>{stat.label}</span>
              <span className={css.text}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};


