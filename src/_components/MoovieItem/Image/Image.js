import React from 'react';
import style from './Image.module.css';

const Image = (props) => {

    return (
        <div>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Image;