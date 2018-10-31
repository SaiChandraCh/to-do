import React, { Component } from 'react';
import SideBar from './SideBar';
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes : [<textarea className="note">empty</textarea>]
    }
  }

  notes = () => {
    var a = []
    for(let index=0;index<this.props.newItemCount;index++){
      a.push(<textarea>empty</textarea>)
    }  
    
    return this.state.notes;
  }

  render() {
    return (
      <div className="todo-main">
        <this.notes />
      </div>
    );
  }
}