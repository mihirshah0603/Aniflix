import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';

const TopNav = ({isScrolled}) => {
    const navlinks = [
        {name: "Home", link: '/'},
        {name: "Tv Shows", link: '/tvshows'},
        {name: "Movies", link: '/movies'},
        {name: "Subscribe", link: '/subscribe'},
    ];

    const navigate = useNavigate()

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(!currentUser) navigate("/login");
    })

    return(
        <NavContainer>
            <nav className={`${isScrolled ? "Scrolled": "notScrolled"}`}>
            <div className="leftside">
                <div className='logo'>
                    <img src="https://res.cloudinary.com/dmgadjqsz/image/upload/v1698172842/umblywfr4rvx0gj5smxq.png" alt='logo'></img>
                </div>
                <div>
                    <ul className = "links">
                        {
                            navlinks.map(({name, link}) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='rightside'>
                <button onClick={() => signOut(firebaseAuth)}>
                    <AiOutlineLogout></AiOutlineLogout>
                </button>
            </div>
            </nav>
        </NavContainer>
    )
    
}

const NavContainer = styled.div`
    .notScrolled{
        display: flex;
    }
    .Scrolled{
        display: flex;
        background-color: black;
    }
    nav{
        position: sticky;
        top: 0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0%.4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
    .leftside{
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-left: 2rem;
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        height: 6.5rem;
        padding-right: 3rem;
    }

.links{
    display: flex;
    list-style-type: none;
    gap: 3rem;
    li{
        a{
            color: white;
            text-decoration: none;
        }
    }
}
}

.rightside{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
        background-color: #5271ff;
        border: none;
        cursor: pointer;
    }svg{
        color: white;
        font-size: 1.5rem;
    }

}
`

export default TopNav;