import React, { Fragment } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'

export default function Icon(props){
    return(
        <Fragment>
            <FontAwesomeIcon icon={props.icon} />
        </Fragment>
    );
}