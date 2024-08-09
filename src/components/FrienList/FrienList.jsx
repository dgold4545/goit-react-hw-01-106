import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FrienList.module.css";

export default function FrienList({ friendsData }) {
  return (
    <ul className={css.friendListFlexContainer}>
      {friendsData.map(friend => {
        return (
          <li key={friend.id} className={css.friendListItem}>
            <FriendListItem friendInfo={friend} />
          </li>
        );
      })}
    </ul>
  );
}
