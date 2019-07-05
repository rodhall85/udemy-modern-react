import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <div>
                Select a language
                <i 
                    className="flag england" 
                    onClick={() => this.context.onLanguageChange('english')} />
                <i 
                    className="flag belarus" 
                    onClick={() => this.context.onLanguageChange('belarus')} />
            </div>
        );
    }
};

export default LanguageSelector;