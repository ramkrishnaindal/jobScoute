import React from 'react'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from "../assets/images/Logo.png"
import Wrapper from '../assets/wrappers/BigSidebar'
const BigSidebar = () => {
  const {showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div className={ showSidebar ?'sidebar-cointainer show-sidebar':'sidebar-container'}>
        <div className='content'>
      <header>
      <img  src={Logo} alt = "JobScoute" className='logo ' />
      </header>
      <NavLinks />
        </div>

      </div>
       
        </Wrapper>
  )
}

export default BigSidebar