import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import Menu from './components/menu';
import Partida from './components/partida'

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
        {scene === 'Menu' ?
          <Menu sceneFunction={this.toggleScene.bind(this)} /> :
          scene === 'Plantel' ?
          <Search sceneFunction={this.toggleScene.bind(this)} /> :
          scene === 'Partida' ?
          <Partida sceneFunction={this.toggleScene.bind(this)} /> : 
          null
        }
      </div>
    );
  }
}

