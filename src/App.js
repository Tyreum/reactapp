import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component() {

  constructor(){
    super()
    this.state = {lista: [
      {
        nome:"projeto"
        descricao: "descricao do projeto"
        usuario: "nome"
        likes: "0"
      }
    ]}
  }

  componentDidMount(){
    fetch("https://localhost:8080/api/projetos")
    .then(res => res.json())
    .then(result) => {
      this.setState({lista: result.data})
    }
  }

  render(){
    return (
      <>
      <div class="ui menu inverted fixed">
        <a class="item">Sapo</a>
        <button class="ui button secondary">Criar projeto</button>
        <a class="item">Atualizações</a>
      <div class="ui icon input">
        <input type="text" placeholder="Search..." />
        <i aria-hidden="true" class="search circular inverted link icon"></i>
      </div>
      </div>
      <div class="ui grid three column container">
        {this.state.lista.map(function(projeto){
        <div class="column">
        <div class="ui card">
          <div class="image"><img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-04/12/12/asset/buzzfeed-prod-web-05/sub-buzz-17953-1523550200-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*" /></div>
          <div class="content">
            <div class="header">Jorgin</div>
            <div class="meta"><span class="date">Joined in 2015</span></div>
            <div class="description">Jorgin ta duraço</div>
          </div>
          <div class="extra content">
            <a>
              <i aria-hidden="true" class="user icon"></i>
              22 Friends
            </a>
          </div>
        }
        </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
