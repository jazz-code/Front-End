import React, {useState, useEffect} from "react";
import {Card, Button} from "semantic-ui-react";

const Login = () => {
    const [login, setLogin] = useState({
        name: "",
        password: ""
    });

    // const [login2, setLogin2] = useState({
    //     name: "",
    //     password: ""
    // });

    const changeHandler = event => {
        setLogin({...login, [event.target.name]: event.target.value})
        //...login gives us the orignal state of login whaever it last was {...$anything} (in this case {...login}) then we add whatever the value is (event.target.value) to whatever the changed feild it corresponds to (event.target.name)
    }
    const submitForm = event => {
        event.preventDefault();
        console.log(login);
        setLogin({name: "", password: ""});
        //this is an optional peice of code that will reset the input boxes
        // setLogin2({login})
    }

    // useEffect(() => {
    //     axios.get()
    //     .then(response =>{
    //         console.log();
    //     })
    //     .catch(error => {
    //         console.error('Server Error', error);
    //     })
    // }, [login2])

    return (
        <div className = "login-container">
            <Card className = "login-card">
                <form className="login-form" onSubmit = {submitForm}>
                    <h1>Login:</h1>
                    <label htmlFor = "name" className="login-label">Name:</label>
                    <input 
                        name = "name"
                        placeholder = "Name"
                        type = "text"
                        value = {login.name} //this value is updated by the changeHandler
                        onChange= {changeHandler}/>
                    <label htmlFor = "password" className="login-label">Password:</label>
                    <input 
                        name = "password"
                        placeholder = "Password"
                        type = "password"
                        value  = {login.password} //this value is updated by the changeHandler
                        onChange = {changeHandler}/>
                        <br></br>
                    <Button type="submit" inverted color='blue' className= "login-button">Submit</Button>
                </form>
            </Card>
        </div>
    );
};

export default Login
