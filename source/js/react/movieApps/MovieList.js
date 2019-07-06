import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* state를 사용할땐 클래스 컴포넌트를 사용한다.
class MovieList extends Component {

    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // }
    
    constructor(props) {
        super(props);
        this.state = {
            text: "movie list"
        }
    }

    render() {
        return (
            <li>
                <h2>{this.props.title}</h2>
                <MovieImage image={this.props.image} />
            </li>
        )
    }
}
*/

//state없이 props를 받아서 리턴할 경우 function을 이용한다.
function MovieList({ title, image }) {
    return (
        <li>
            <h2>{title}</h2>
            <MovieImage image={image} />
        </li>
    )
}

function MovieImage({image}){
    console.log("image :", image);
    return (
        <span><img src={image} /></span>
    )
}

export default MovieList;