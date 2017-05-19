import React from 'react';
import './ParticipantTable.css';

class ParticipantTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false }
    this.renderForm = this.renderForm.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  render() {
    const {isEditing} = this.state;
    return(
      <section id="list-item-border">
      {
        isEditing ? this.renderForm() : this.renderTable()
      }
      </section>
    )
  }

  renderForm(){
    return(
      <form onSubmit={this.handleSave}>
      <input id="name-edit" type="text" ref={(value) => {this.name = value}}
      defaultValue={this.props.details.name} />
      <input id="mail-edit" type="email" ref={(value) => {this.mail = value}}
      defaultValue={this.props.details.mail} />
      <input id="phone-edit" type="tel" ref={(value) => {this.phone = value}}
      defaultValue={this.props.details.phone} />
      <button id="save" type="submit">Save</button>
      <button id="cancel" type="reset" onClick={(evt) => {
        evt.stopPropagation();
        this.handleCancel()
      }}>Cancel</button>
      </form>
    )
  }

  renderTable(){
    return(
      <div id="list-item">
      <div id="name-item"> {this.props.details.name} </div>
      <div id="mail-item"> {this.props.details.mail} </div>
      <div id="phone-item"> {this.props.details.phone} </div>
      <img id="edit" src={require('./images/Edit.png')}
      onClick={(evt) => {
        evt.stopPropagation();
        this.handleEdit()
      }}/>
      <img id="delete" src={require('./images/Delete.png')}
      onClick={(evt) => {
        evt.stopPropagation();
        this.props.deleteTask(this.props.index)
      }}/>
      </div>
    )
  }

  handleEdit() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    })
  }

  handleSave(evt){
    evt.preventDefault();
    this.props.editItem(this.props.index, this.name.value,
      this.mail.value, this.phone.value);
      this.handleEdit();
    }

    handleCancel(){
      this.handleEdit();
    }
  }

  export default ParticipantTable;
