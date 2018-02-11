import React, { Component } from 'react';
import './ImportFormOperators.css';
import smartphone from './smartphone.svg';

class ImportFormOperators extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            operators: [
                {id: '(915)', title: 'МТС', image: './mts.png'},
                {id: '(936)', title: 'Мегафон', image: './megafon.png'},
                {id: '(909)', title: 'Билайн', image: './beeline.png'},
                {id: '(977)', title: 'Теле2', image: './tele2.png'},
                {id: '(999)', title: 'Yota', image: './yota.png'}
            ]
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        return (
            <div className="Ui-form-main">
                <div className="Ui-form-title">Мобильная связь</div>
                <img src={smartphone} className="Ui-form-icon" alt="smartphone" />
                <div className="Ui-form-subtitle">Моментально пополним баланс любого оператора.</div>
                <div className="Ui-form-select">
                    <select className="Ui-select" value={this.state.value} onChange={this.handleChange.bind(this)} {...this.props}>
                        <option value={this.props.value} disabled selected>Пожалуйста, уточните оператора связи</option>
                        {
                            this.state.operators.map((item) => {
                                return (
                                    <option value={item.id} key={item.id}>{item.title}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default ImportFormOperators;