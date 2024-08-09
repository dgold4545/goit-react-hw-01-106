import css from "./FriendListItem.module.css";

import clsx from "clsx";

export default function FriendListItem({
  friendInfo: { avatar, name, isOnline },
}) {
  // const classNameStatus = clsx(
  //   "friendListItemStatusNetwork",
  //   isOnline
  //     ? "friendListItemStatusNetworkOnline"
  //     : "friendListItemStatusNetworkOffline"
  // );

  return (
    <div className={css.friendListItemFlexContainer}>
      <img
        className={css.friendListItemImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendListItemName}>{name}</p>
      <p
        className={clsx(
          css.friendListItemStatusNetwork,
          isOnline ? css.green : css.red
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
