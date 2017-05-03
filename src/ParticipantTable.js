import React, { Component } from 'react';
import './ParticipantTable.css';

class ParticipantTable extends React.Component {

  handleEdit(key){
   //ToDo: Hide Edit & Delete, show Save & Cancel
  }

  handleSave(e) {
  //Commit CellData
  e.preventDefault();
   var newItem = {
    name: this.state.name,
    mail:this.state.mail,
    phone:this.state.phone,
    id: Date.now()
  };
  return
  this.setState(newItem);
  //ToDo: Hide Save & Cancel, show Edit and Delete
 };

  handleCancel(item){
    //ToDo: Reject Save
    //ToDo: Hide Save & Cancel, show Edit & Delete
  }

  nameSort(field){
     var sortedParticipants = this.props.items.sort( (a, b) => {
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
     var sortedParticipants = this.props.items.sort( (a, b) => {
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
     var sortedParticipants = this.props.items.sort( (a, b) => {
       return a[field] - b[field];
     });
     this.setState({'items': sortedParticipants});
   }

  handleDelete(item){
  const newState = this.props.items;
  if (newState.indexOf(item) > -1) {
    newState.splice(newState.indexOf(item), 1);
    this.setState({items: newState})
  }
}
  render() {
    return (
      <div>
      <table>
     <thead>
       <th onClick={this.nameSort.bind(this,'name')}>Full Name</th>
       <th onClick={this.emailSort.bind(this,'email')}>Email Address</th>
       <th onClick={this.numberSort.bind(this,'phone')}>Phone Number</th>
     </thead>
    <tbody>
        {this.props.items.map((item) =>
        <tr key={item.id.toString()}>
          <td> <input type="text" value={item.name} onChange={this.props.onItemChange} /> </td>
          <td> <input type="email" value={item.mail} onChange={this.props.onItemChange} /> </td>
          <td> <input type="tel" value={item.phone} onChange={this.props.onItemChange} /> </td>
          <td> <input type="image" src={require('./images/Edit.png')}
          className="edit" onClick={this.handleEdit.bind(this, item)}/> </td>
          <td> <input type="image" src={require('./images/Delete.png')}
          className="delete" onClick={this.handleDelete.bind(this, item)}/> </td>
          <td> <input type="button" className="save" value="Save"
          onClick={this.handleSave.bind(this, item)}/></td>
          <td> <input type="button" className="cancel" value="Cancel"
          onClick={this.handleCancel.bind(this, item)}/></td>
          </tr>
        )}
    </tbody>
    </table>
    </div>
    );
  }
}

export default ParticipantTable;
