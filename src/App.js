import React, { Component } from 'react';
import './App.css';
import InputFormOperators from './components/InputFormOperators/InputFormOperators';
import InportFormRecharge from './components/InputFormRecharge/InputFormRecharge';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      showFormOfRecharge: false
    }
  }

  selectOperators(event) {
    this.setState({
      id: event.target.value,
      showFormOfRecharge: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Терминал оплаты услуг сотовой связи</h1>
        </header>
        <InputFormOperators onChange={this.selectOperators.bind(this)} />
        {this.state.showFormOfRecharge ? 
          <div className="App-container">
            <div className="App-recharge-balans-title">Форма пополнения баланса</div>
            <div className="App-recharge-block">
              <div className="App-operator-id">Идентификатор оператора связи: <strong id="operator-id">{this.state.id}</strong></div>
              <InportFormRecharge />
            </div>
          </div> 
        : null}
      </div>
    );
  }
}

export default App;
