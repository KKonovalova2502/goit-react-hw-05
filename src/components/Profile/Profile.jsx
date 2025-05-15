import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.avatar} src={image} alt={name} />
        <p className={styles.title}>{name}</p>
        <p className={styles.subtitle}>@{tag}</p>
        <p className={styles.subtitle}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span className={styles.dataStatistic}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.dataStatistic}>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.dataStatistic}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
