import React, {useState} from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import {firebaseAuth} from "../utils/firebase-config";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async() => {
        try{
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch(error){
            console.log(error)
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) =>{
        if(currentUser) navigate('/')
    });

  return (
    <Wrapper>
      <BackgroundImage></BackgroundImage>
      <div className="loginContent">
        <Header></Header>
        <div className="formWrapper">
          <div className="form">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="container">
            <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <p className="error"></p>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    height: 100vh;
    width: 100vw;
  }

  .formWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .form {
    background-color: #111;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    width: 300px;
    height: 400px;

    .title {
      font-size: 24px;
      margin-bottom: 1rem;
      color: white;
      font-size: 20px;
      padding-top: -1rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border: 1px solid #333;
        border-radius: 5px;
        padding: 0.5rem;
        width: 100%;
        height: 35px;
        outline: none;
        align-items: center;
        justify-content: center;
      }

      button {
        background-color: #5271ff;
        width: 60%;
        align-self: center;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.75rem;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #3b58cc;
        }
      }
    }
  }
`;

export default LoginPage;
