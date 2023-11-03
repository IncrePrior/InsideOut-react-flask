import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        history.push('/posts')
        closeModal()
    }
  };

  const demoUserLogIn = () => {
    setEmail('demo@aa.io')
    setPassword('password')
  }

  return (
    <div className="login-container">
      <img className="INSIDEOUT-logo1" alt="" src='https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png'></img>
      <h1 className="h1">Welcome!</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <ul className="errors-ul">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="login-label">
          Email
          <input
            className="placeholder"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-label">
          Password
          <input
            className="placeholder"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className = 'login-button' type="submit">LOG IN</button>
        <button className="demoUserLink" onClick={demoUserLogIn}>DEMO USER</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
