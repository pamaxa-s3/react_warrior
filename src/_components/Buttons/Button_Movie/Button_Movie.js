import React from 'react';
import style from './Button_Movie.module.css';
import { Button } from 'reactstrap';

class Button_Movie extends React.Component {

    constructor() {
        super()
        this.state = {
            showOverviews: true
        }
    }

    show_overviews = () => {
        this.setState({
            showOverviews: !this.state.showOverviews
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.show_overviews} color="info">{this.state.showOverviews ? 'hide overviews' : 'show overviews'}</Button>
            </div>
        )
    }

}

export default Button_Movie;