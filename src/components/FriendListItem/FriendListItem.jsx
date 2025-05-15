import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={style.friendsName}>{name}</p>
      <p className={isOnline ? style.online : style.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
