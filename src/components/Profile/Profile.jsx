import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userCardFlexContainer}>
        <img className={css.userCardImage} src={image} alt={name} />
        <p className={css.userCardName}>{name}</p>
        <p className={css.userCardTag}>@{tag}</p>
        <p className={css.userCardLocation}>{location}</p>
      </div>

      <ul className={css.userCardStatsFlexContainer}>
        <li className={css.userCardStatsItem}>
          <span className={css.userCardStatsTitle}>Followers</span>
          <span className={css.userCardStatsPoints}>{stats.followers}</span>
        </li>
        <li className={css.userCardStatsItem}>
          <span className={css.userCardStatsTitle}>Views</span>
          <span className={css.userCardStatsPoints}>{stats.views}</span>
        </li>
        <li className={css.userCardStatsItem}>
          <span className={css.userCardStatsTitle}>Likes</span>
          <span className={css.userCardStatsPoints}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
