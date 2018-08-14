import React, {Component} from 'react';
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest';

class Search extends Component {
    state = {
        query: 'a',
        data: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({data}));
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value,
        });
    };

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => (this.search = input)}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        );
    }
}

export default Search;
