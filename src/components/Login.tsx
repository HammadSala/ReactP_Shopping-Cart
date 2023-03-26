import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import '../css/Login.css';

const Login = () => {

    const [ formValues, setFormValues ] = useState({
        name: "",
        pass: "",
    });
    
    type ErrorMessage = {
        name: string;
        message: string;
      };

      let navigate = useNavigate();

    const [ errorMessage, setErrormessage] = useState({ name: "", message: ""});
    const [ isSubmited, setIsSubmited] = useState(false);

    // get an explanation on the difference on this
    const adminData = [
       {
        username: "user1",
        password: "pass1"
       },
       {
        username: "user2",
        password: "pass2"
       }
    ]

    const errors = {
        uname : "Invalide Username",
        pname : "Invalid Password"
    }

    interface formValues {
        name: string ;
        pass: string ;
    }

   
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      
        event.preventDefault();
        // console.log("Form submitted ==>", formValues);
        // console.log("Form submitted ==>" + formValues.name);

        const { name, pass } = formValues;

        const realUser = adminData.find ((user) => user.username === name)

        if(realUser) {
            console.log("Valid user");
            if(realUser.password !== pass ) {
                setErrormessage({name: pass, message:errors.pname});
            } else
            {
                setIsSubmited(true);
            }
        } else {
            setErrormessage({name: name, message:errors.uname} );
            // console.log("errro message ", errorMessage);

        }
    }

    const renderErrorMessage = (name : string) => 

            name === errorMessage.name && (
                <><div className="error">{errorMessage.message}</div></>
            );

    

    //get a explanation on this
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // console.log(event.target);
        // const { name, uname } = event.target;
        setFormValues(
            (prevalues) => ({ ...prevalues, [name] : value}) );
           };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="Username">UserName</label>
                    <input type="text" name="name" id="Username"
                            value={formValues.name}
                            onChange={handleChange} required />
                            {renderErrorMessage(formValues.name)}
                </div>
                <div className="input-container">
                    <label htmlFor="Pass">Password</label>
                    <input type="password" name="pass" id="pass" 
                            value={formValues.pass}
                            onChange={handleChange} required />
                            {renderErrorMessage(formValues.pass)}
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>

    );
    
 
    return (
        <>
        <div className="app">
            <div className="login-form">
                <div className="title">
                  Login Page
                 <> {isSubmited ? navigate("/home") :  <div> {renderForm}</div> }</>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Login;