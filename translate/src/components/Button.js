import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {
    renderSumbit(value) {
        return value === 'english' ? 'submit' : 'soobmiiyt';
    }

    renderButton(colour) {
        return (
            <button className={`ui button ${colour}`}>
                <LanguageContext.Consumer>
                    {value => this.renderSumbit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColourContext.Consumer>
                {colour => this.renderButton(colour) }
            </ColourContext.Consumer>
        );
    }
}

export default Button;