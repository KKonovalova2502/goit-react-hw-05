import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.list}>
        {friends.map((friend) => (
          <li className={style.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
