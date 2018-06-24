import React, { Fragment } from 'react'
import Icon from './Icon'

export default function IconDescription(props){
    return(
        <Fragment>
            <p>
                <Icon icon={props.icon}/>
                 {props.text}
            </p>
        </Fragment>
    );
}