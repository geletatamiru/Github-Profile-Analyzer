import { useEffect, useReducer } from 'react'
import { fetchUserProfile, fetchUserRepos } from './services/api'
import HomePage from './pages/HomePage'
import ProfileCard from './components/ProfileCard'
import Repositories from './components/Repositories'
import './App.css'
function reducer(state, action){
  switch(action.type){
    case "setUsername": 
      return {...state, username: action.payload.username}
    case "setUserData": 
      return {...state, userData: action.payload.userData}
    case "setError": 
      return {...state, error: action.payload.error};
    case "setIsLoading": 
      return {...state, isLoading: action.payload.isLoading}  
    case "setRepos": 
      return {...state, repos: action.payload.repos}
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { username: '', userData: null, error: null, isLoading: false, repos: null, page: 1})
  useEffect(() => {
    if(!state.username) return;

    async function getUser(){
        dispatch({type: "setIsLoading", payload: { isLoading: true}});
        const data = await fetchUserProfile(state.username);
        if (data) {
          dispatch({type: "setUserData", payload: { userData: data}});
          dispatch({type: "setError", payload: { error: null}});
          getRepos();
        } else {
          dispatch({type: "setUserData", payload: { userData: null}});
          dispatch({type: "setError", payload: { error: 'GitHub user not found. Please try again.'}});
        }
        
          dispatch({type: "setIsLoading", payload: { isLoading: false}});
    }
    async function getRepos(){
        dispatch({type: "setIsLoading", payload: { isLoading: true}});
        const data = await fetchUserRepos(state.username);
        if (data) {
          dispatch({type: "setRepos", payload: { repos: data}});
          dispatch({type: "setError", payload: { error: null}});
        } else {
          dispatch({type: "setRepos", payload: { repos: null}});
          dispatch({type: "setError", payload: { error: 'GitHub user not found. Please try again.'}});
        }
        
          dispatch({type: "setIsLoading", payload: { isLoading: false}});
    }

    getUser();
  },[state.username]);
  return (
   <div className='app'>
    <HomePage dispatch={dispatch} error={state.error}/>
    {state.isLoading && <div className='spinner'></div>}
    {
      (state.userData) && 
      <ProfileCard userData={state.userData}/>
    }
    {
      (state.repos) && 
      <Repositories 
        repos={state.repos} 
        count={state.userData?.public_repos}
      />
    }
   </div>
  )
}

export default App
