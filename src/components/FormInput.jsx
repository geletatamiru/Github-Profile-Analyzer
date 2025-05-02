import { useState } from "react";
import "./FormInput.css";
const FormInput = ({dispatch}) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "setUsername", payload: {username: input}});
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="input">Enter your GitHub Profile URL</label>
      <div className="input-section">
        <input type="text" id="input" placeholder="username" onChange={(e) => setInput(e.target.value)}/>
        <input className="submit-btn" type="submit" value="Analyze"/>
      </div>
    </form>
  )
}
export default FormInput;
