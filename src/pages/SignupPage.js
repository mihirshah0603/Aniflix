import React, {useState} from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import {firebaseAuth} from "../utils/firebase-config";


const SignUpPage = () => {
  const [showPassword, setShowPassord] = useState(false);
  const navigate = useNavigate();  
  const[formValues, setFormValues] = useState({email: "", password: ""})
  const handleSignin = async()=>{
    try{
        const{email, password} = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error){
        console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate('/login')});
  
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited anime, movies, and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            {
                showPassword ? (
                    <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e)=>setFormValues({
                        ...formValues, [e.target.name]: e.target.value
                    })} />
                ):(
                    <input type="email" placeholder="Email Address" name="email" alue={formValues.email} onChange={(e)=>setFormValues({
                        ...formValues, [e.target.name]: e.target.value
                    })}/>
                )
            }
            {
                !showPassword ? (
                    <button onClick={()=>setShowPassord(true)}>Get Started</button>
                ):(
                    <button onClick={handleSignin}>Sign up</button>
                )
            }
           
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
 }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    color: white;
    padding: 1rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-top: -3.5rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
  h6 {
    font-size: 1rem;
    color: #ccc;
    margin-top: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      padding: 1rem;
      font-size: 1.2rem;
      width: 60%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: #5271ff;
      color: white;
      font-size: 1rem;
      padding: 0.75rem 2rem;
      border: none;
      cursor: pointer;
      margin-top: 1rem;
      font-weight: bold;
    }
  }
`;

export default SignUpPage;
