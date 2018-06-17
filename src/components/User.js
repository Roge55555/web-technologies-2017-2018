import React from 'react';
import {connect} from "react-redux";
import '../css/user-info.css'
import IconDescription from "./IconDescription";

function User(props) {
    return(
        <div className="User">
            <img src={ props.avatar_url } alt={ props.name } />
            <h2>{ props.name }</h2>
            <h3>{ props.login }</h3>
            <h3>{ props.bio }</h3>
            <IconDescription text={props.location} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        name: state.name,
        avatar_url: state.avatar_url,
        login: state.login,
        location: state.location,
        bio: state.bio
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);