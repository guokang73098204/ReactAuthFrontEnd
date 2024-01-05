import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const SignUpPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPdValue, setConfirmPdValue] = useState('');

    const history = useHistory();

    const handleLogIn = async () => {
    }

    const handleSignUp = async () => {
    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
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

            <input 
                type="password"
                value={confirmPdValue}
                placeholder="confirm password"
                onChange={(e) => setConfirmPdValue(e.target.value)}>
            </input>

            <hr />

            <button 
                disabled={!emailValue || !passwordValue || passwordValue !== confirmPdValue}
                onClick={handleSignUp}>
                Sign Up
            </button>
            <button onClick={handleLogIn}>Already have an account? Log in</button>
        </div>
    )

}