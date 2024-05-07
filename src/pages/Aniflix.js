import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";
import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Aniflix = () =>{
    const [ isScrolled, setIsScrolled] = useState(false)

    console.log(isScrolled)

    const movies = useSelector((state)=> state.aniflix.movies)
    const generesLoaded = useSelector((state)=>state.aniflix.generesLoaded)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
      }, []);

    useEffect(() => {
        if(generesLoaded){
          dispatch(fetchMovies({type: "all"}))
        }
  })
  
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false: true)
    return ()=> (window.onscroll = null)
};

    return (
        <BannerContainer>
            <div className='banner'>
                <TopNav isScrolled = {isScrolled}></TopNav>
                <img className='banner_img' src="https://res.cloudinary.com/dmgadjqsz/image/upload/v1698335476/17367_l9fp2j.jpg" alt="banner"></img>
                <div className="container">
                    <div className="title">
                        <h1>ONE PIECE</h1>
                        <p>ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!</p>

                    </div>
                    <div className='buttons'>
                        <button className='playButton' onClick={()=>navigate('/player')}>Play</button>
                        <button className='moreButton'>More</button>
                    </div>
                </div>
        </div>

        
        <SliderContainer movies={movies}/>
        </BannerContainer>
    )
}

const BannerContainer = styled.div`
    .banner{
        position: relative;
        .banner_img{
            height: 65vh;
            width: 100%;
            filter: brightness(40%);
        }
        .container{
            position: absolute;
            bottom: -1rem;
            .title{
                h1 {
                    margin-left: 5rem;
                    text-transform: uppercase;
                    font-size: 73px;
                    color:#5271ff;
                    }
                }
                p {
                    margin-bottom: -50px;
                    width: 640px;
                    margin-left: 5rem;
                    font-family: "lexend Deca", sans-serif;
                    color: white;
                }
    
            .buttons {
                display: flex;
                margin: 5rem;
                gap: 2rem;
                height: 2.7rem;
            }

            .playButton {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #5271ff;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 1.4rem;
                padding-right: 2rem;
                border: none;
                cursor: pointer;
            }
            .moreButton {
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background-color: black;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 1.4rem;
                padding-right: 2rem;
                cursor: pointer;
             }
        }
    }
`

export default Aniflix