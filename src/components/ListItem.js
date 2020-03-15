import React, {Component} from 'react';
import {connect} from 'react-redux'; 

class ListItem extends Component {
   
  render() {
    const{key, cal} = this.props;
    return (  
      <li
      key={`list-${key + 1}`}
      className=" list-group-item"
    >
    <span  
    >
        {cal.result}   
        </span>
         
        </li>
    );
  }
}



export default connect(null, {})(ListItem);