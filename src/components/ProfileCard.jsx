import "./ProfileCard.css";
const ProfileCard = ({userData}) => {
  return (
    <div className="profile-card">
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
            <p className="prop">Location</p>
            <p className="val">{userData.location ? userData.location : "N/A"}</p>
          </div>
          <hr />
          <div>
            <p className="prop">Followers</p>
            <p className="val">{userData.followers}</p>
          </div>
          <hr />
          <div>
            <p className="prop">Following</p>
            <p className="val">{userData.following}</p>
          </div>
          <hr />
          <div>
            <p className="prop">Twitter</p>
            <p className="val">{userData.twitter_username ? userData.twitter_username : "N/A"}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard;