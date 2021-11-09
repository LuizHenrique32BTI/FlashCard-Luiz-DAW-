// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'
import api from './api'

class App extends Component {
  state = {courses: []}
  async componentDidMount() {
    var response = await api.get();
    this.setState({courses: response.data });
  }
  render() {
  	var {courses}= this.state;
    return (
      <div>
        <Header />
        <Main courses={courses}/>
      </div>
    );
  }
}

export default App;