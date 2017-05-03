import React, { Component } from 'react';
import ParticipantTable from './ParticipantTable';
import './ParticipantForm.css';

class ParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], name: '', mail:'', phone:''};
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Full name' onChange={this.handleChange('name')} value={this.state.name} />
          <input type="email" placeholder='Email Address' onChange={this.handleChange('mail')} value={this.state.mail} />
          <input type="tel" placeholder='Phone Number' onChange={this.handleChange('phone')} value={this.state.phone} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
          <ParticipantTable items={this.state.items} onItemChange={this.handleChange.bind(this)}/>
      </div>
    );
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      name: this.state.name,
      mail:this.state.mail,
      phone:this.state.phone,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      name: '',
      mail:'',
      phone:''
    }));
  }
}

export default ParticipantForm;
