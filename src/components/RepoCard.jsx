import view from "../assets/icons/view.svg";
import star from "../assets/icons/star.svg";
import fork from "../assets/icons/fork.svg";
import issue from "../assets/icons/issue.svg";
import "./RepoCard.css";

const RepoCard = ({repo}) => {
  return (
    <div className="repo-card">
      <p className="title">{repo.name}</p>
      <p className="desc">{repo.description}</p>
      <div className="data">
        <span className="views"><img src={view} alt="view-icon" /><span>{repo.views}</span></span>
        <span className="stars"><img src={star} alt="star-icon" /><span>{repo.stars}</span></span>
        <span className="forks"><img src={fork} alt="fork-icon" /><span>{repo.forks}</span></span>
        <span className="issues"><img src={issue} alt="issue-icon" /><span>{repo.issues}</span></span>
      </div>
      <a href={repo.url} target="_blank" className="repo-url">visit</a>
    </div>
  )
}
export default RepoCard;