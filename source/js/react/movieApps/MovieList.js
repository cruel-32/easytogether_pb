import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
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
function MovieList({ title, image, genres, rating, summary }) {
    return (
        <li>
            <div className="Movie__Colums">
                <MovieImage image={image} />
                <div className="Movie__Explanation">
                    <h2 className="Movie__Title">{title}</h2>
                    <div className="Movie__Genres">
                        {genres.map((genre, index) => <MovieGenres genre={genre} maxsize={genres.length} idx={index} key={index} />)}
                    </div>
                    <div className="Movie_rating">{rating}</div>
                    <p className="Movie__Summary">
                        <LinesEllipsis 
                            text={summary}
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                        />
                    </p>
                </div>
            </div>
        </li>
    )
}

function MovieImage({image}){
    console.log("image :", image);
    return (
        <div className="Movie__Img"><img src={image} alt="" /></div>
    )
}

function MovieGenres({genre, maxsize, idx}){
    console.log(idx)
    return (
        <span className="Movie__Genres">{genre}{idx < maxsize -1 ? "," : ""}</span>
    )
}

export default MovieList;