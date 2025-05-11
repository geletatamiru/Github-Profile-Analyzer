import RepoCard from "./RepoCard";
import "./Repositories.css";
const Repositories = ({repos,count,user}) => {
  console.log(repos);
  return (
    <div className="repositories">
      <h2>{user.name || user.login} Public repositories ({count})</h2>
      {
        repos.map((repo) => {
          return <RepoCard key={repo.id} repo={repo} />
        })
      } 
    </div>
  )
}
export default Repositories;
