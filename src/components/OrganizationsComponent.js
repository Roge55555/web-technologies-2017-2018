import React from 'react';
import { connect } from "react-redux";


function OrganizationsComponent(props) {
    return (
        props.login.length!==0 && <div className="ORGS">

            <h2>Organizations</h2>
            {props.login.map(function(item, i) { 
                return (<div className="orgs_adds">
                    <h3>{item}</h3>
                    <img src={props.image[i]} alt={props.image[i]} />
                </div>)

            })}

        </div>
    );
}

const getState = (state) => {
    return {
        login: state.reducerOrgs.login,
        image: state.reducerOrgs.image
    };
};

export default connect(getState)(OrganizationsComponent);