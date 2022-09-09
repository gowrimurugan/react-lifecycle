import { useState, useEffect } from "react";
import './Login.css';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [log, setLog] = useState("");
    useEffect(() => {
        // alert(localStorage.getItem("login"))
        setLog(localStorage.getItem("login"))
    }, [])

    function emailHandler(event) {
        setEmail(event.target.value)
    }
    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    function loginHandler(event) {
        event.preventDefault()

        if (log != true) {
            if (email.includes('@') && password.length > 6) {
                props.login(true)
                setEmail("")
                setPassword("")
                setLog(true)
            } else {
                alert("incorrect password")
            }
        } else {
            props.login(false)
            setLog(false)
            setEmail("")
            setPassword("")
        }
    }
    return (
        <div className="container">
            <form className="login" onSubmit={loginHandler}>
                <input type="text" placeholder="Enter Email" onChange={emailHandler} value={email}/><br/>
                <input type="password" placeholder="Enter Password" onChange={passwordHandler} value={password}/><br/>
                <input className="submit" type="submit" value={log == true ? "logout" : "login"}/>
            </form>
        </div>
    )
}
export default Login;