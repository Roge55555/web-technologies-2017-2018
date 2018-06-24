import React from 'react';
import {connect} from "react-redux";
import Router from './Router'
import '../css/user-info.css'
import IconDescription from "./IconDescription";
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'

function User(props) {
    return(
        <div className="User">
            <img src={ props.avatar_url } alt={ props.name } />
            <IconDescription text={props.name} icon={faUsers}/>
            <IconDescription text={props.login} icon={faLink}/>
            <IconDescription text={props.location} icon={faMapMarkerAlt}/>
            <h3>{props.bio}</h3>
            <Router user={ props.login }/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        name: state.user.name,
        avatar_url: state.user.avatar_url,
        login: state.user.login,
        location: state.user.location,
        bio: state.user.bio
    };
};

export default connect(mapStateToProps)(User);