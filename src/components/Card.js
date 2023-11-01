import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from 'react-icons/io5';

export default React.memo(function Card({movieData}){
    const [onHovered, setOnHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <CardContainer
            onMouseEnter={() => setOnHovered(true)}
            onMouseLeave={() => setOnHovered(false)}
        >
            <img
                src = "https://res.cloudinary.com/dmgadjqsz/image/upload/v1698308771/naruto-sasuke-sakura-and-kakashi-outfits-1920x1080-03fb4a1e5fbc_vmunno.jpg"
                // src={`https://api.themoviedb.org/3/movie/{movieData.image}/images`}
                alt="poster"
                onClick={() => navigate('/player')}
            />
            {onHovered && (
                <div className="hover">
                    <div className="img-vid-wrapper">
                        <img
                            src = "https://res.cloudinary.com/dmgadjqsz/image/upload/v1698308771/naruto-sasuke-sakura-and-kakashi-outfits-1920x1080-03fb4a1e5fbc_vmunno.jpg"
                            // src={`https://api.themoviedb.org/3/movie/{movieData.image}/images`}
                            alt="poster"
                            onClick={() => navigate('/player')}
                        />
                        <video
                            src="https://res.cloudinary.com/dmgadjqsz/video/upload/v1698333912/If_Naruto_Shippuden_had_a_Trailer_without_Spoiler_4k_ymfzn7.mp4"
                            autoPlay
                            loop
                            controls
                        ></video>
                    </div>
                    <div className="info-container">
                        <h3 className="movieName" onClick={() => navigate('/player')}>
                        {movieData.name}
                        </h3>
                        <div className="icons">
                            <div className="controls">
                                <IoPlayCircleSharp title="play" onClick={() => navigate('/player')} />
                            </div>
                        </div>
                        <div className="genres">
                            <ul>
                                {movieData.genres.map((genre) => (
                                    <li key={genre}>{genre}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </CardContainer>
    );
});

const CardContainer = styled.div`
    margin-top: 1rem;
    max-width: 230px;
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;

    img {
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .hover {
        z-index: 99;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -18vh;
        left: 0;
        border-radius: 0.2rem;
        border: 0.1rem solid gray;
        background-color: #181818;
        transition: 0.3s ease-out;
        .img-vid-wrapper {
            position: relative;
            height: 140px;
            img {
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
            video {
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
        }
        .info-container {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
            .movieName {
                color: white;
            }
        }
        .icons {
            display: flex;
            justify-content: space-between;
            .controls {
                display: flex;
                gap: 0.5rem;
            }
            svg {
                color: white;
                border: 0.1rem solid white;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #b8b8b8;
                }
            }
        }
        .genres {
            display: flex;
            color: white;
            ul {
                display: flex;
                gap: 1rem;
                li {
                    padding-right: 0.7rem;
                    &:first-of-type {
                        list-style-type: none;
                    }
                }
            }
        }
    }
`;
