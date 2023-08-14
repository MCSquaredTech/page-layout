import React from 'react';
import Nav from 'react-bootstrap/Nav';
import * as bsIcons from 'react-icons/bs';
import * as biIcons from 'react-icons/bi';
import * as giIcons from 'react-icons/gi';

const Header = () => {
  return (
    <>
      <div className=' header header-col-right'> <giIcons.GiFireShield size={"30px"}/><h5 style={{padding: "10px"}}>Fire Sheild B2B CRM</h5></div> 
      
    </>
  )
}

export default Header