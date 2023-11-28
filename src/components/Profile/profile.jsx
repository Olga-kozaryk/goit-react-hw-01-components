import PropTypes from 'prop-types'; 
import css from './Profile.module.css';


export const Profile = ({ userName, tag, location, avatar, stats }) => {
    return (
<div className={css.profile}>

<div className={css.user}>
  <img src={avatar} alt={userName} className={css.avatar} />
  <p className={css.name}>{userName}</p>
  <p className={css.text}>@{tag}</p>
  <p className={css.text}>{location}</p>
</div>


<ul className={css.stats}>
  <li className={css.item}>
    <span className={css.title}>Followers</span>
    <span className={css.number}>{stats.followers}</span>
  </li>
  <li className={css.item}>
    <span className={css.title}>Views</span>
    <span className={css.number}>{stats.views}</span>
  </li>
  <li className={css.item}>
    <span className={css.title}>Likes</span>
    <span className={css.number}>{stats.likes}</span>
  </li>
</ul>
</div>
);
};

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,}