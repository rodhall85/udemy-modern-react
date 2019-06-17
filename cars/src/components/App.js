import React from 'react';
import SearchBar from './SearchBar';
import unsplashApi from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplashApi.get('/search/photos', {
            params: { query: searchTerm },
            
        });

        this.setState({ images: response.data.results });
    }

    render() { 
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;