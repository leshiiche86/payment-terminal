import React, { Component } from 'react';
import './InputFormRecharge.css';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input';
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

let id = null;

class InputFormRecharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValuePhone: '',
            inputValueCost: null,
            message: '',
            preloaderMessage: '',
            validateMessagePhone: '',
            validateMessageCost: '',
            showPreloader: false
        }
    }

    componentDidMount() {
        id = document.getElementById('operator-id').innerHTML;
    }

    onChangePhone(event) {
        this.setState({
            inputValuePhone: event.target.value,
            validateMessagePhone: ''
        })
    }

    onChangeCost(event) {
        this.setState({
            inputValueCost: event,
            validateMessageCost: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.inputValuePhone.length !== 18) {
            this.setState({ 
                validateMessagePhone: 'Вы не правельно ввели номер телефона' 
            })
        } else if (this.state.inputValuePhone.substring(3, 8) !== id) {
            this.setState({ 
                validateMessagePhone: 'Вы не правельно ввели идентификатор сотовой связи' 
            })
        } else if (this.state.inputValueCost === '0 руб' || this.state.inputValueCost === null) {
            this.setState({ 
                validateMessageCost: 'Минимальная сумма перевода - 1 руб' 
            })
        } else if (this.state.inputValueCost.length > 7 && this.state.inputValueCost !== '1 000 руб') {
            console.log(this.state.inputValueCost.length);
            this.setState({ 
                validateMessageCost: 'Максимальная сумма перевода - 1 000 руб', 
            })
        } else {
            let messages = ['Не удалось пополнить Ваш баланс, возможно проблемы с сервисом...', 'Поздравляем Ваш баланс успешно пополнен', 'Ooops =( произошла ошибка. Попробуйте в другой раз'];
            let randomMessage = messages[Math.floor((Math.random() * 3))];
            this.setState({ 
                message: randomMessage, 
                preloaderMessage: 'Подождите идет обработка операции...',
                showPreloader: true
            })
            setTimeout(() => {
                this.setState({ 
                    preloaderMessage: '',
                    showPreloader: false 
                })
                alert(this.state.message);
                if (this.state.message === 'Поздравляем Ваш баланс успешно пополнен') {
                    window.location.reload();
                }
            }, 2000);
        }
    };

    render() {
        return (
            <div className="Ui-input">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <InputMask className="Ui-input-component" mask='+7 (999) 999-99-99' maskChar="" placeholder="Номер телефона" value={this.state.inputValuePhone} onChange={this.onChangePhone.bind(this)} required />
                    <p className="Ui-validate-message">{this.state.validateMessagePhone}</p>
                    <CurrencyInput className="Ui-input-component" placeholder="Сумма, от 1 до 1 000 руб" precision="" thousandSeparator=" " suffix=" руб" allowNegative={true} allowEmpty={true} value={this.state.inputValueCost} onChange={this.onChangeCost.bind(this)} required /> 
                    <p className="Ui-validate-message">{this.state.validateMessageCost}</p>
                    <input type="submit" className="Ui-submit-btn" value="Пополнить" />
                </form>
                { this.state.showPreloader ? 
                    <div>
                        <PreloaderIcon
                            type={ICON_TYPE.OVAL}
                            size={60}
                            strokeWidth={8}
                            strokeColor="#006064"
                            duration={800}
                        />
                        {this.state.preloaderMessage}
                    </div>
                : null }
            </div>
        )
    }
}

export default InputFormRecharge;