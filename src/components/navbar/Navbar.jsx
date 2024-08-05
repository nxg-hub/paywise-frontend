import {React,useState} from 'react'
import {  RiCloseLine } from 'react-icons/ri'
import "./navbar.css"
import logo from "../../assets/Vector.svg";
import menu from "../../assets/menu.svg";
import { navLinks} from '../../constants';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="payWise__navbar">
      <img src={logo} alt="" />

      <div className="payWise__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} className="x"/> : <img src={menu} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="payWise__navbar-menu_container scale-up-center">
            <div className="payWise__navbar-menu_container-links">
          {
           navLinks.map((item,i) =>{
            return(
              <>
              <ul>
        <li key={i}><a href={item.id}>{item.title}</a></li>
              </ul>
              </>
            )
           })
          }
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Navbar
