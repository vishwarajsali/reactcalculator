import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';
import "./style.css"; 
import * as firebase from 'firebase'

class List extends Component {
  state = { 
    formValue: ""
  };

  inputChange = event => {
    this.setState({formValue: event.target.value});
  };

 

  formSubmit = event => {
    const {formValue} = this.state;
    const {addCal} = this.props;

    var t = formValue.replace(/[^-()\d/*+.]/g, '');
    const result = t + ' = ' + eval(t)
    event.preventDefault();
    addCal({result: result, timestamp: firebase.database.ServerValue.TIMESTAMP});
    this.setState({formValue: ""});
  };
 



  renderForm = () => {
    const { formValue} = this.state;
     
      return ( 
          <form onSubmit={this.formSubmit}> 
              <input 
                value={formValue}
                onChange={this.inputChange}
                className="form-control"
                type="text"
                placeholder="Enter cal here... [Press Enter]"
                autoComplete="off"
              />  
          </form> 
      ); 
  };


  renderCal() {
    const {data} = this.props;
    const cals = _.map(data, (value, key) => {
      return <ListItem calId={key} cal={value} />;
    }).reverse();
    if (!_.isEmpty(cals)) {
      return cals;
    }
    return (
      <div className="col s10 offset-s1 center-align">
      <li className="col list-group-item">No cals yet</li>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchCals();
  }
  render() { 
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <header
              style={{ margin: "20px 0 40px 0" }}
              className="App-header col col-12"
            >
              <h1>React cal App</h1>
            </header>

            <main className="col-12">
            {this.renderForm()}
            <ul className="list-groups" style={{ padding: 0 }}>
            {this.renderCal()} 
            </ul>
            </main>
          </div>
        </div>
      </div>
    );
  }
}


 



const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);