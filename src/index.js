  import React from 'react';
  import ReactDOM from 'react-dom';
  import ParticipantTable from './ParticipantTable.js';
  import './index.css';

  class ParticipantForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.editItem = this.editItem.bind(this);
      this.state = {items: [], name: '', mail:'', phone:''};
    }

    render() {
      return (
        <section>
        <div id="page">
        <div id="page-header">
        <img id="nord-logo" src={require('./images/NordLogo.png')} />
        <div id="company-name">Nord Software</div>
        </div>
        <div id="page-body">
        <div id="body-header">List of participants</div>
        <div id="form-border">
        <form onSubmit={this.handleSubmit}>
        <input id="name" type="text" placeholder='Full name'
        onChange={this.handleChange('name')} value={this.state.name} />
        <input id="mail" type="email" placeholder='Email address'
        onChange={this.handleChange('mail')} value={this.state.mail} />
        <input id="phone" type="tel" placeholder='Phone number'
        onChange={this.handleChange('phone')} value={this.state.phone} />
        <button className="add-btn" onClick={this.handleSubmit.bind(this)}>Add new</button>
        </form>
        </div>
        <div id="list-header">
        <div id="name-header" onClick={this.nameSort.bind(this,'name')}>Name</div>
        <div id="mail-header" onClick={this.emailSort.bind(this,'mail')}>Email address</div>
        <div id="phone-header" onClick={this.numberSort.bind(this,'phone')}>Phone number</div>
        </div>
        {
          this.state.items.map((item, index) => {
            return <ParticipantTable key={index} index={index}
            details={item} deleteTask={this.deleteTask}
            editItem={this.editItem}/>
          })
        }
        </div>        
        </div>
        </section>
      );
    }

    nameSort(field){
      var sortedParticipants = this.state.items.sort( (a, b) => {
        var nameA = a[field].toUpperCase();
        var nameB = b[field].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({'items': sortedParticipants});
    }

    emailSort(field){
      var sortedParticipants = this.state.items.sort( (a, b) => {
        var nameA = a[field];
        var nameB = b[field];
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({'items': sortedParticipants});
    }

    numberSort(field){
      var sortedParticipants = this.state.items.sort( (a, b) => {
        return a[field] - b[field];
      });
      this.setState({'items': sortedParticipants});
    }

    deleteTask(index){
      console.log(index)
      let items = this.state.items;
      items.splice(index,1);
      this.setState({
        items
      })
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

    handleChange(key) {
      return function (e) {
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
      }.bind(this);
    }

    editItem(index, newName, newMail, newPhone){
      console.log(index, newName, newMail, newPhone);
      var items = this.state.items;
      var item = items[index];
      item['name'] = newName;
      item['mail'] = newMail;
      item['phone'] = newPhone;
      this.setState({
        items
      })
    }

  }

  ReactDOM.render(<ParticipantForm/>, document.getElementById('root'));
