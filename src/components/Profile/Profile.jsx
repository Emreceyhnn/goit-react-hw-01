export function ProfileCard({ params }) {
  return (
    <div className="profile-wrapper">
      <div className="profile-content">
        <div className="img-wrapper">
          <img
            src={params.userData.avatar}
            alt={`avatar/${params.userData.avatar}`}
          />
        </div>

        <h1>{params.userData.username}</h1>
        <h2>@{params.userData.tag}</h2>
        <h2>{params.userData.location}</h2>
      </div>
      <div className="indicator-wrapper">
        <div className="indicator-item">
          <h2>Followers</h2>
          <h3>{params.userData.stats.followers}</h3>
        </div>
        <div className="indicator-item">
          <h2>Views</h2>
          <h3>{params.userData.stats.views}</h3>
        </div>
        <div className="indicator-item">
          <h2>Likes</h2>
          <h3>{params.userData.stats.likes}</h3>
        </div>
      </div>
    </div>
  );
}
