import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Player = () =>{

    const navigate = useNavigate()

    return (
        <PlayContainer>
            <div className='player'>
                <div className='backArrow'>
                    <BsArrowLeft onClick={() => navigate(-1)}></BsArrowLeft>
                </div>
                <video src='https://res.cloudinary.com/dmgadjqsz/video/upload/v1698259464/If_One_Piece_had_a_trailer_qq2qs1.mp4' autoPlay loop controls></video>
            </div>
        </PlayContainer>
    )
}

const PlayContainer = styled.div`
.player{
    width: 100vw;
    height: 100vh;
    .backarrow{
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
            font-size:3rem;
            cursor: pointer;
            color: white;
        }
    }
    video{
        height: 100%;
        width: 100%;
    }
}

`

export default Player