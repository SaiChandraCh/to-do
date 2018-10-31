import React, { Component } from 'react';
import SideBar from './SideBar';
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes : []
    }
  }

  notes = () => {
    this.state.notes = []
    // for(let index=0;index<this.props.newItemCount;index++){
    //   this.state.notes.push(<textarea name={"description"+index+1} defaultValue=""></textarea>)
    // }
    for(let index=0;index<this.props.newItemCount;index++){
      this.state.notes.push(<div className="todo-note"><textarea name={"description"+index+1} defaultValue=""></textarea></div>)
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