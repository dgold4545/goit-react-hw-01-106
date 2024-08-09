import Profile from "../Profile/Profile";
import FrienList from "../FrienList/FrienList";

import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transaction.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

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

      <TransactionHistory items={transactions} />
    </div>
  );
}
