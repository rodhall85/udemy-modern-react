import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {

        return (
            <div className="ui container">
                <div>
                    Select a language
                    <i className="flag england" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag belarus" onClick={() => this.onLanguageChange('belarus')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColourContext.Provider value="red">
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;