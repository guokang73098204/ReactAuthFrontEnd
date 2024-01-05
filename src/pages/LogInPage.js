import { useState } from "react"
import { useHistory } from "react-router-dom";

export const LogInPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const handleLogIn = async () => {

    }

    const handleForgotPd = async () => {
        history.push('/forgot-password')
    }

    const handleSignUp = async () => {
        history.push('/signup');
    }

    return (
        <div className="content-container">
            <h1>Log In</h1>
            <input 
                type="email" 
                value={emailValue}
                placeholder="someone@gmail.com"
                onChange={(e) => setEmailValue(e.target.value)}>
            </input>

            <input 
                type="password"
                value={passwordValue}
                placeholder="password"
                onChange={(e) => setPasswordValue(e.target.value)}>
            </input>

            <button 
                disabled={!emailValue || !passwordValue}
                onClick={handleLogIn}>
                Log In
            </button>
            <button onClick={handleForgotPd}>Forgot password</button>
            <button onClick={handleSignUp}>Don't have an account? Sign Up</button>
        </div>
    )

}