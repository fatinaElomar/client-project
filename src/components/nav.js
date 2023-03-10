import { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../images/logo.png";

class Nav extends Component {
  render() {
    return (
      <div calssName="page_container">
        <header className="container-fluid">
          <nav className="navbar navbar-inverse">
            <img src={logo} alt="logo" className="logo" />

            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="hoverable">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services " className="hoverable">
                  services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hoverable">
                  About
                </Link>
              </li>
             
              <li>
                <Link to="/news" className="hoverable">
                  News
                </Link>
              </li>
              <li>
                <Link to="/maincontact" className="hoverable">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        

      </div>
    );
  }
}
export default Nav;
