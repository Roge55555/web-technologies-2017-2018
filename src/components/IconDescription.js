import React, { Fragment } from 'react'
import Icon from './Icon'

export default function IconDescription(props){
    return(
        <Fragment>
            <span>
                <h5>{props.text}</h5>
            </span>
        </Fragment>
    );
}