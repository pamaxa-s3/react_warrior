import React from 'react';
import {
    Badge, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import style from './MovieItem.module.scss';

class MovieItem extends React.Component {

    constructor() {
        super()

        this.state = {
            willWatch: false
        }
    }

    render() {
        const { movie, removeMovie, addMoviesToMoviesWatch, removeMovieFromWillWatch } = this.props;
        return (
            <div className="movieItem">
                <Card className={style.card}>
                    <CardImg className={style.card_img_top} top width="100%" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="Card image cap" />
                    <CardBody className={style.card_body}>
                        <CardTitle className={style.card_title}>{movie.title}</CardTitle>
                        <CardSubtitle className={style.vote_average}>Rating: <Badge color="warning" pill>{movie.vote_average}</Badge></CardSubtitle>
                        {/* <CardText className={style.reviews}>{movie.overview}</CardText> */}
                        {this.state.willWatch ?
                            (<Button className={style.button_watch} size="sm" color="secondary" onClick={() => {
                                this.setState({
                                    willWatch: false
                                });
                                this.props.removeMovieFromWillWatch(movie)
                            }}>
                                Remove Watch
                            </Button>) :
                            (<Button className={style.button_watch} size="sm" color="success" onClick={() => {
                                this.setState({
                                    willWatch: true
                                });
                                this.props.addMoviesToMoviesWatch(movie)
                            }}>
                                Will Watch
                            </Button>)
                        }
                        <Button className={style.button_remove} size="sm" color="danger" outline onClick={removeMovie.bind(null, movie)}>Delete movie</Button>
                    </CardBody>
                </Card>
            </div>

        )
    }

}

export default MovieItem;


/*
class MoovieItem extends React.Component {

    constructor() {
        super()
        this.state = {
            showOverviews: true,
            like: false
        }
    }

    toggleOverview = () => {
        this.setState({
            showOverviews: !this.state.showOverviews
        })
    }

    handleLike = () => {
        this.setState({
            like: !this.state.like
        })
    }

    render() {
        const { data: {
            title,
            vote_average,
            image,
            overviews
        } } = this.props;

        return (
            <div>
                <div className={style.image}>
                    <Image src={image} alt={title} />
                </div>
                <div>
                    <h1 className={style.title}>
                        {title} <Badge color="warning" pill>Top</Badge>
                    </h1>
                    <p>{vote_average}</p>
                    <div className={style.buttonGroup}>
                        <Button onClick={this.toggleOverview} color="info">{this.state.showOverviews ? 'hide overviews' : 'show overviews'}</Button>
                        <Button className={this.state.like ? style.btn__like : null} onClick={this.handleLike} color={this.state.like ? 'success' : 'danger'}>{this.state.like ? 'like' : 'unlike'}</Button>
                    </div>

                    <Button_Movie />
                    {this.state.showOverviews ? <p>{overviews}</p> : null}
                </div>

            </div>
        );
    }
}

export default MoovieItem; */