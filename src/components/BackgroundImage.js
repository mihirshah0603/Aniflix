import React from 'react'
import styled from 'styled-components'
const BackgroundImage = () =>{
    return (
        <BackgroundContainer>
            <img src="https://res.cloudinary.com/dmgadjqsz/image/upload/v1698172859/r1ea3jswn3ahgdoezqp7.jpg" alt='no internet connection'></img>
            
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
height: 100vh;
       width: 100vw;
       img{
        height: 100vh;
        width: 100vw;
       }
`

export default BackgroundImage