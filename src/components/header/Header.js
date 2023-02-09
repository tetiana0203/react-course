import React , {Component} from "react";
import "./Header.css";
class Header extends Component {
    render() {
        return <header className="main-header">
                    <nav className="main-nav">
                        <ul className="main-menu">
                            <li><a href="#link">Home</a></li>
                            <li><a href="#link">Information</a></li>
                            <li><a href="#link">Articles</a></li>
                        </ul>
                    </nav>
        </header>;
    }
  }
export default Header;
  