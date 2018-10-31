import React, { Component } from 'react';
import menuIcon from './menu.png';
import Main from './Main';
import '../style/SideBar.css'

export default class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  addEmptyNote = () =>{
    var a = <Main createNewNote = {true}/>
  }
  render() {
    return (
        <div className="todo-sidebar">
          <input type="image" src={menuIcon} />
          <input type="button" value="+ add note" onClick={()=>this.addEmptyNote()}/>
          <input type="button" value="+ add Item"/>
        </div>
    );
  }
}
