import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Menu from './components/menu';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: 'Menu'
    }
  }

  toggleScene(a) {
    this.setState({ scene: a })
  }

  render() {
    const { scene } = this.state;
    return (
      <div>
        {scene == 'Menu' ?
          <Menu sceneFunction={this.toggleScene.bind(this)} /> :
          <Search sceneFunction={this.toggleScene.bind(this)}/>
        }
      </div>
    );
  }
}

