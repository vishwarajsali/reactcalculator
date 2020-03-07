import React, {Component} from 'react';
import {connect} from 'react-redux'; 

class ListItem extends Component {
   
  render() {
    const{key, cal} = this.props;
    return (  
      <li
      key={`list-${key + 1}`}
      className="cal list-group-item"
    >
          <span
          style={{ 
            left: "3rem",
            right: "5rem",
            lineHeight: "62px",
            display: "block",
            position: "absolute", 
          }}
        >
         
        {cal.result}   
        </span>
        </li>
    );
  }
}
export default connect(null, {})(ListItem);