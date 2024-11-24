import React, { useState } from 'react'
import '../assets/styles/navbar.css'
import {Link} from 'react-scroll'
import menuLogo from '../../src/assets/images/menu.png'
const Navbar = () => {
  const [showmenu,setShowmenu] = useState(false)
  return (
    <>
        <nav className="navbar">
            <img src="https://cdn.pixabay.com/photo/2016/04/22/17/31/wooden-m-1346181_1280.png" alt="" />
            <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
              <Link className="desktopMenuListItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} >About</Link>
              <Link className="desktopMenuListItem" activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} >Portfolio</Link>
              <Link className="desktopMenuListItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} >Contact</Link>  
            </div>
            <button className='desktopMenuBtn' onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
              ✉️ ContactMe
            </button>
            <img src={menuLogo} alt="Menu" className='mobMenu' onClick={()=>setShowmenu(!showmenu)}/>
            <div className="navMenu" style={{display :showmenu?'flex':'none'}}>
              <Link className="listItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowmenu(false)}>Home</Link>
              <Link className="listItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowmenu(false)}>About</Link>
              <Link className="listItem" activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowmenu(false)}>Portfolio</Link>
              <Link className="listItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowmenu(false)}>Contact</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
