import FormInput from "../components/FormInput";
import "./HomePage.css"
const HomePage = ({onUsernameChange}) => {
  return (
    <div className="home-page">
      <h1>Analyze Your Github</h1>
      <p>Get personalized feedback on your GitHub profile from a recruiter's perspective</p>
      <FormInput onUsernameChange={onUsernameChange}/>
    </div>
  )
}
export default HomePage;