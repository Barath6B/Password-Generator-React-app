import './Header.css';
import logo from "../assets/logo-B6.png";


function Navbar( {onTopClick}) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img className="nav-logo" src={logo} alt="B6 Logo" onClick={onTopClick} />
      </div>
      <div className="nav-centre">
        {/* <a href="/" className="nav-link">HOME</a>
        <a href="/" className="nav-link">CONTACT</a> */}
      </div>
      <div className='nav-right'>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/barath-b-37a909245/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/Barath6B"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;