import React from 'react'
import styled from 'styled-components'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    

  return (
    <>
    <Nav>
    <div>LOGO</div>
    <div className="right-nav">
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
        {/* <div className='scrollbar'>
            <h2>About</h2>
            <h2>Services</h2>
            <h2>Contact</h2>
        </div> */}
        <FiAlignJustify onClick={toggleMenu} className='icon' />
    </div>
    </Nav>
    </>
  )
}

export default NavBar

const Nav = styled.div`
height: 6rem;
width: 100%;
background-color: #c33727;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3rem;

.right-nav {
    display: flex;
    gap: .5rem;
}

button {
    width: 4rem;
    height: 1.6rem;
    padding: .5rem , .5rem;
}

.icon {
    font-size: 1.8rem;
}

@media (min-width: 801px) {
  .icon {
    display: none;
  }
}

@media (max-width: 801px) {
  button {
    display: none;
  }
}

.scrollbar {
    position: absolute;
    background-color: red;
}

`


