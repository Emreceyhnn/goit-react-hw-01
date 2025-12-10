import "./App.css";
import { FriendsList } from "./components/Friends-list/Friends";
import { ProfileCard } from "./components/Profile/Profile";
import { TableView } from "./components/Table/Table";

import user from "./lib/userData.json";
import friends from "./lib/friends.json";
import transactions from "./lib/transactions.json";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <ProfileCard params={user} />
        <FriendsList params={friends} />
        <TableView params={transactions} />
      </div>
    </>
  );
}

export default App;
