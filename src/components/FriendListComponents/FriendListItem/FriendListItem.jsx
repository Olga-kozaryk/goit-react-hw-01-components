import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} />
      <span className={css.name}>{name}</span>
      <span className={css.status} style={{ background: (isOnline? "green" : "red") }}></span>
    </li>
  );
};
