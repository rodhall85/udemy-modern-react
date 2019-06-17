import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onInputChange = event => {
        this.setState({searchTerm: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {

        return ( 
            <div className="search-bar ui segment ">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;