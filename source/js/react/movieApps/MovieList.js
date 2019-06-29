import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {

    render() {
        return (
            <ul className="movie-list">
                <li>{this.props.title}</li>
            </ul>
        )
    }
}

export default MovieList;