import React from "react";
import { Link } from "react-router-dom";
import  styled from "styled-components";
import Loginpic from "../assets/login.gif";


function Login() {
    const handleSubmit=(event)=> {
    event.preventDefault();
    alert("form");
    }
    const handleChange=(event)=>{

    }
        
    
    return(
        <div>
            <FormContainer>
                <form action="" onSubmit={(event)=>handleSubmit(event)}>
                    <div className="login">
                        <img src={Loginpic} alt="login"/>
                        <h1>login</h1>

                    </div>
                    <input type="text"
                        placeholder=" username"
                        name="username"
                        onChange={(e)=>handleChange(e)}/>

                        <input type="password"
                        placeholder="password"
                        name="password"
                        onChange={(e)=>handleChange(e)}/>
                        <button type="login">Login</button>
                        <span>new user ? <Link to="/register">   Register here  </Link></span>
                </form>

            </FormContainer>
        </div>
    )
    
}
const FormContainer = styled.div`
height: 100vh;
width:  210vh;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items:center;
background-color: #131324;
.login {
    display: flex;
    align-items: center;
gap: 1rem;
justify-content: center;
img{
    height: 5rem;

}
h1{
    color: white;
    text-transform: uppercase;
    text-align: center;
  
}
}
form{
    display: flex;
    flex-direction: column;
      gap: 2rem;
      padding: 3rem 5rem;
      border-radius: 2rem;
      background-color: #00000076;
      input{
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
          border: 0.1rem solid #997af0;
          outline: none;
        }
      }
      button {
        background-color: red;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        &:hover {
          background-color: #4e0eff;
        }
      }
      span {
        color: white;
        text-transform: uppercase;
        a {
          color: #4e0eff;
          text-decoration: none;
          font-weight: bold;
        }
      


}


}`;
export default Login