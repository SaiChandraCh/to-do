import React, { Component } from 'react';
import '../style/Header.css';
import searchlogo from './magnify.png'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <div className="todo-header-panel-1">Header</div>
        <div className="todo-header-panel-2">
          <div className="todo-searchbar"> {/* contentEditable={true}*/}
            <input type="text" placeholder="Search.."/>
            <input type="image" src={searchlogo}/>
          </div>  
        </div>        
      </div>
    );
  }
}
