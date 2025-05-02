const fetchUserProfile = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Fetch error:', err.message);
    return null;
  }
};
const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();
    const filteredRepos = data.map(repo => ({
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      issues: repo.open_issues_count,
      views: repo.watchers_count
    }));
    return filteredRepos;
  } catch (err) {
    console.error('Fetch error:', err.message);
    return null;
  }
}
export {fetchUserProfile, fetchUserRepos};