import React , {Component}  from "react";
import "./Sidebar.css";
class Sidebar extends Component {
    render() {
        return <div className="sidebar">
            <div >
                <ul>
                    <li><a href="#link">Home</a></li>        
                    <li><a href="#link">Information</a></li>        
                    <li><a href="#link">Articles</a></li>        
                </ul>
            </div>
        </div>;
    }
  }
export default Sidebar;
  