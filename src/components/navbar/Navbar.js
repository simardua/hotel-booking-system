import "./navbar.css"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
        <span className="logo">Book It Up</span>
        
        <div className="navItems">
          <div className="headerContainer">
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
            </div>
            <div className='headerListItem'>
            <span>About us</span>
            </div>
          </div>
            <button className="navButton">Sign Up</button>
            <button className="navButton">Login</button>
        </div>

    </div>


    </div>
  )
}

export default Navbar