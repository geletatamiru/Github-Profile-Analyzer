import FormInput from "../components/FormInput";
import "./HomePage.css"
const HomePage = ({dispatch, error}) => {  
  return (
    <div className="home-page">
      <h1>Analyze Your Github</h1>
      <p>Get personalized feedback on your GitHub profile from a recruiter's perspective</p>
      <FormInput dispatch={dispatch}/>
      {error && <div className="error">{error}</div>}
    </div>
  )
}
export default HomePage;