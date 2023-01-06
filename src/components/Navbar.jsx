import '../styles/Navbar.css'
import Logo from '../assets/LOGO.png'
import { useState,useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { motion,AnimatePresence } from 'framer-motion'

const Navbar = ()=>{
    const [showNavbar,setShowNavbar] = useState(window.innerWidth>480)
    const [navbarColor,setNavbarColor] = useState('rgba(255, 165, 207,0.8)')
    const [showKuttiNav,setShowKuttiNav] = useState(false)
    useEffect(()=>{
        if(window.location.href.split('/').at(-1)==='phenyl'){
            setNavbarColor('rgba(120, 206, 255, 0.8)')
        }
    },[window.location])
    return <nav style={{backgroundColor:navbarColor}}>
        <img src={Logo} alt='pinky-best' />
        <p className='company-name' style={{color:navbarColor==='rgba(255, 165, 207,0.8)'?'maroon':'#4169E1'}}>Pinnky best</p>
        <AnimatePresence>
            {showNavbar&&<motion.div 
                className="nav-list" 
                initial={{x:-200}}
                animate={{x:0}}
                exit={{x:-200}}
                >
                <a href='/'>Home</a>
                <a href='' onClick={(e)=>{e.preventDefault();setShowKuttiNav(!showKuttiNav)}} className='product-e'>Products</a>
               {showKuttiNav&&<div className='kutti'>
                    <a href='/phenyl' onClick={(e)=>{
                        
                        setShowKuttiNav(!showKuttiNav)
                        }} >Phenyl</a>
                    <a href='/napkin' onClick={()=>{setShowKuttiNav(!showKuttiNav)}} >Napkins</a>
                </div>}
                <a href='#CONTACT US'>Contact</a>
            </motion.div>}
        </AnimatePresence>
        <div className='menu' onClick={()=>setShowNavbar(!showNavbar)}>
            <MenuIcon />
        </div>
    </nav>
}

export default Navbar