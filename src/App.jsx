import React, { Component } from 'react';
import './App.css';
import menuIcon from './components/menu.png';
import './style/SideBar.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addItemCount : 1
    }
  }
  addEmptyNote = () =>{
    var a = <Main createNewNote = {true}/>
  }

  render() {
    return (
      <div className="todo-app">
        <div className="todo-sidebar">
          <input type="image" src={menuIcon} />
          <input type="button" value="+ add note"  onClick={()=>this.setState({
            addItemCount : this.state.addItemCount + 1
          }) }/>
          <input type="button" value="+ add Item"/>
        </div>
        <div className="panel-2">
          <Header />
          <Main newItemCount = {this.state.addItemCount}/>
          <Footer />
        </div>
      </div>
    );
  }
}
