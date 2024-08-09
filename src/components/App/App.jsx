import Profile from "../Profile/Profile";

import userData from "../../userData.json";
import friends from "../../friends.json";
import FrienList from "../FrienList/FrienList";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FrienList friendsData={friends} />
    </div>
  );
}
