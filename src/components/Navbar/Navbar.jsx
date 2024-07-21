import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import menu_icon from '../../Assets/menu-icon.png'
import inverted_triangle from '../../Assets/inverted-triangle.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const toggleServicesDropdown = () => setServicesDropdown(!servicesDropdown);
  const toggleIndustriesDropdown = () => setIndustriesDropdown(!industriesDropdown);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to='/hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
        <li><Link to='/about' smooth={true} offset={-260} duration={500}>ABOUT US</Link></li>
        <li className='dropdown'>
          <span onClick={toggleServicesDropdown}>SERVICES<img src={inverted_triangle} alt="Dropdown Icon" className='dropdown-icon' /></span>
          {servicesDropdown && (
            <ul className='dropdown-menu'>
              <li><Link to='/service1' smooth={true} offset={-260} duration={500}>Service 1</Link></li>
              <li><Link to='/service2' smooth={true} offset={-260} duration={500}>Service 2</Link></li>
              <li><Link to='/service3' smooth={true} offset={-260} duration={500}>Service 3</Link></li>
            </ul>
          )}
        </li>
        <li className='dropdown'>
          <span onClick={toggleIndustriesDropdown}>INDUSTRIES<img src={inverted_triangle} alt="Dropdown Icon" className='dropdown-icon' /></span>
          {industriesDropdown && (
            <ul className='dropdown-menu'>
              <li><Link to='/industry1' smooth={true} offset={-260} duration={500}>Industry 1</Link></li>
              <li><Link to='/industry2' smooth={true} offset={-260} duration={500}>Industry 2</Link></li>
              <li><Link to='/industry3' smooth={true} offset={-260} duration={500}>Industry 3</Link></li>
            </ul>
          )}
        </li>
        <li><Link to='/testimonials' smooth={true} offset={-260} duration={500}>HELP-GUIDE</Link></li>
        <li><Link to='/contact' smooth={true} offset={-260} duration={500} className='btn'>CONTACT US</Link></li>
        <li><Link to='/mentorcontent' smooth={true} offset={-260} duration={500}>HIRE A ASSISTANT</Link></li>
      </ul>
      {/* <img src={menu_icon} alt="Menu Icon" className='menu-icon' /> */}
    </nav>
  )
}

export default Navbar
