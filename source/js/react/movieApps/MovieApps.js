console.log("movie apps");

import React, { Component } from 'react';
import MovieList from './MovieList';
import 'babel-polyfill';
import { throws } from 'assert';

class MovieApps extends Component {

    // state = {
    //     greeting: "hello!"
    // }

    //render : componentWillMount => render => componentDidMount
    //update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

    /*
        update 설명 :
        componentWillReceiveProps() => component props를 업데이트를 받은 상태
        shouldComponentUpdate() => 기존 props와 비교하여 다르면 true
        componentWillUpdate() => 업데이트 시작 단계
        render() => 업데이트 받은 props로 그리는 단계
        componentDidUpdate() => 업데이트 종료 단계
    */

    componentWillMount() {
        console.log("willMount");
    }

    componentDidMount() {
        console.log("DidMount");
        this._getMovie();
    }

    constructor(props) {
        super(props);
        this.state = {
            greeting: "hello!"
        }
    }

    _callApi = () => {
        return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating").then(
            response => response.json()
        ).then(
            json => json.data.movies
        ).catch(
            err => console.log(err)
        )
    }

    _getMovie = async () => {
        const movie = await this._callApi();
        this.setState({
            movie
        })
    }

    _renderMovie = () => {
        const movie = this.state.movie.map((movie, index) => {
            return <MovieList title={movie.title} image={movie.medium_cover_image} key={index} />
        });

        return movie;
    }

    render() {
        console.log("render");
        return (
            <div className="movie-wrap">
                <h1>{this.state.greeting}</h1>
                <ul className="movie-list">
                    {this.state.movie ? this._renderMovie() : "Loading..."}
                </ul>
            </div>
        )
    }
}

export default MovieApps;