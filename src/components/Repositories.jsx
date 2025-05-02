import { useState } from "react";
import RepoCard from "./RepoCard";
import "./Repositories.css";
const Repositories = ({repos,count}) => {
  return (
    <div className="repositories">
      <h2>Bekacru's Public repositories ({count})</h2>
      {
        repos.map((repo) => {
          return <RepoCard key={repo.id} repo={repo} />
        })
      } 
    </div>
  )
}
export default Repositories;