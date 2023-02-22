import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import navbarData from '../Data/navData'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'

const RootLayout = () => {

  const [navItem, setNavItem] = useState([])
  const [isMobil, setIsMobil] = useState(false)

  useEffect(() => {
    setNavItem(navbarData())
  }, [])
  window.addEventListener("scroll",function(){
    const header  = document.querySelector(".nav__menu")
    header.classList.toggle("activeee", window.scrollY>50)
  })


  return (
    <div className='root-layout container'>
      <header>
        <nav className='nav__menu'>
          <h1 className='logo'>
            <a href='#'> MAИ</a>
          </h1>
          <ul className={isMobil ? 'nav-menu  ' : 'nav-list'}
            onClick={() => setIsMobil(false)}>
            {navItem.map((item, index) =>
              <li key={item.id}>
                <NavLink to={item.to}>{item.linkname}</NavLink>
              </li>
            )}
          </ul>
          <div className='navSocial'>
            <button onclick="location.href=''">Login</button>
            <button>Sign Up</button>
          </div>


          <span onClick={() => setIsMobil(!isMobil)}>
            {isMobil ? (
              <span className='nav-close'><AiOutlineCloseCircle /></span>
            ) : (
              <span className='nav-toggle'><AiOutlineMenu /></span>
            )}
          </span>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>


      <footer>

      </footer>
    </div>
  )
}

export default RootLayout
