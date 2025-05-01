import { useEffect,useState } from 'react'
import HomePage from './pages/HomePage'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if(!username) return;

    async function fetchUserProfile(){
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
      }
      
    }
    fetchUserProfile();
  },[username]);
  return (
   <div className='app'>
    <HomePage onUsernameChange={setUsername}/>
    {
      (!error && !isLoading && userData) && 
      <ProfileCard userData={userData}/>
    }
   </div>
  )
}

export default App
