import React, { Fragment } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function Icon(props){
    return(
        <Fragment>
            <FontAwesomeIcon icon={props.icon} />
        </Fragment>
    );
}