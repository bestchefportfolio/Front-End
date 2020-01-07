import React from 'react';
import axios from 'axios';
import './home.css';

class SearchForm extends React.Component {

    constructor( props ){
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    render(){
        return(
            <div className="container">
                <h2 className="heading"> Live Search</h2>
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        value=""
                        id="search-input"
                        placeholder="Let your hunger guide you...(e.g: Pizza, Soup, Salad..)"
                        />
                        <i class="fa fa-search" aria-hidden="true"/>
                </label>
            </div>
        )
    }
}

export default SearchForm