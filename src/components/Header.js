import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <div className='logo'>
                <img
                    src="https://res.cloudinary.com/dmgadjqsz/image/upload/v1698172842/umblywfr4rvx0gj5smxq.png"
                    alt="no internet connection" 
                />
            </div>
            <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
                {props.login ? 'Log in' : 'Sign up'}
            </button>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    .logo{
     img{
      height: 6.5rem;
      cursor: pointer;
     }
    }
    button{
      padding: 0.7rem 1rem;
      background-color:#5271ff ;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
      padding-right: 1rem;
    }
`

export default Header;
