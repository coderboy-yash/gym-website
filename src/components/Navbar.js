import React from 'react'
import { Link } from "react-scroll";
import { Link as Linkrd } from 'react-router-dom';
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction='row'
    justifyContent='space-around'
    sx={{gap:{
        sm:'122px',xs:'40px'},
        mt:{sm:'32px',xs:'20px'},justifyContent:'none'
    }}px='20px'
    >
        <Linkrd to='/'>
            <img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}} />

        </Linkrd>
        <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
        >     <Linkrd to="/" style={{textDecoration:'none',color:'#3A1212'}}>Home</Linkrd>
                 <Link
              className="link"
              activeClass="active"
              to="exercises"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              style={{textDecoration:'none',color:'#3A1212',cursor:"pointer"}}
              
            >
              Exercises
            </Link>
           {/*  */}
          
            
        </Stack>
    </Stack>

  )
}

export default Navbar
