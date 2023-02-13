import React , {Component} from "react";
import "./List.css";
class List extends Component {
    constructor(){
        super();
    }
    this.state={
        count:1,
    };
    clickHandler=()=>{
        this.setState({count:this.state.count + 1})
    }
    render(){
        return (
                <div>
                    <p>Hello</p>
                    <button onClick={this.clickHandler}>Test</button>
                    <button clicked={this.state.count} click={this.clickHandler}>Test</button>
                </div>
            )
    };
}    
export default List;
  