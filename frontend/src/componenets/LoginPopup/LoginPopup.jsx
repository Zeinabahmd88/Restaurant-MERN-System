import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const {url,setToken} = useContext(StoreContext);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let newUrl=url;
        if (currentState === "Login") {
            // Add your login API call logic here
            newUrl+="/api/user/login"
        } else {
            newUrl+="/api/user/register"
         
  }
  const response=await axios.post(newUrl,data);
if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token",response.data.token);
    setShowLogin(false)
}
else{
    alert(response.data.message)
}


    };

    return (
        <div className="login-popup-overlay" onClick={() => setShowLogin(false)}>
            <div className="login-popup-container" onClick={(e) => e.stopPropagation()}>
                <span className="close-icon" onClick={() => setShowLogin(false)}>×</span>

                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                </div>

                <form onSubmit={onSubmitHandler} className="login-popup-inputs">
                    {currentState === "Sign up" && (
                        <input
                            name="name"
                            type="text"
                            onChange={onChangeHandler}
                            value={data.name}
                            placeholder="Your Name"
                            required
                        />
                    )}
                    <input
                        name="email"
                        type="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        placeholder="Email"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        placeholder="Password"
                        required
                    />
                    <button type="submit" className="login-btn">
                        {currentState === "Sign up" ? "Create Account" : "Login"}
                    </button>
                </form>

                <p
                    className="toggle-login"
                    onClick={() =>
                        setCurrentState(currentState === "Sign up" ? "Login" : "Sign up")
                    }
                >
                    {currentState === "Sign up"
                        ? "Already have an account? Login"
                        : "New here? Sign up"}
                </p>
            </div>
        </div>
    );
};

export default LoginPopup;
