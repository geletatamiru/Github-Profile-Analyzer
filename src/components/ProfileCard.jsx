import "./ProfileCard.css";
const ProfileCard = ({userData}) => {
  return (
    <div className="profile-card">
      <button className="back-btn">Back</button>
      <div className="profile-container">
        <img src={userData.avatar_url} alt="profile-image" className="profile-image" />
        <div className="user">
        <h1>{userData.login}</h1>
        <p> 
          {
            userData.bio ? userData.bio : "User's bio is not available"
          }
        </p>
        <a className="visit-btn" href={userData.html_url} target="_blank">VISIT GITHUB PROFILE</a>
        <div className="user-info">
          <div>
            <p>Location</p>
            <p>{userData.location ? userData.location : "N/A"}</p>
          </div>
          <hr />
          <div>
            <p>Followers</p>
            <p>{userData.followers}</p>
          </div>
          <hr />
          <div>
            <p>Following</p>
            <p>{userData.following}</p>
          </div>
          <hr />
          <div>
            <p>Twitter</p>
            <p>{userData.twitter_username ? userData.twitter_username : "N/A"}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard;