export function FriendsList({ params }) {
  return (
    <ul className="friends-list-wrapper">
      {params.friends.map((i) => {
        return (
          <li key={i.id} className="friend-item">
            <img src={i.avatar} />
            <h2>{i.name}</h2>
            <h3 className={i?.isOnline ? "isOnline" : "isOffline"}>
              {i.isOnline ? "Online" : "Offline"}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}
