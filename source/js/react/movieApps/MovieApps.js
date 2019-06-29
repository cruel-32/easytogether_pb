console.log("movie apps");

import React, { Component } from 'react';
import MovieList from './MovieList';

const movieList = [
    {
        title: "a"
    },
    {
        title: "b"
    },
    {
        title: "c"
    }
];

class MovieApps extends Component {

    state = {
        greeting: "hello!"
    }

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
        setTimeout(() => {
            this.setState({
                greeting: "Hello! Movie Apps!"
            })
        }, 5000);
    }

    render() {
        console.log("render");
        return (
            <div className="movie-wrap">
                <h1>{this.state.greeting}</h1>
                {
                    movieList.map((movie, index) => {
                        return <MovieList title={movie.title} key={index} />
                    })
                }
            </div>
        )
    }
}

export default MovieApps;