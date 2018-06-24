import React from 'react';
import { connect } from "react-redux";


function RepositoriesComponent(props) {
    console.log(props.login)
    if(props.login.length===0){
        return(
            <h2>Emtry</h2>
        )
    }
    return (

        props.login.length!==0 && <div className="REPS"> 

        <h2>Repositories</h2>
        {props.login.map(function(item, i) { 
            return (<div className="orgs_adds">
                <h2>{item}</h2>
                <h3>{props.image[i]}</h3>
            </div>)

        })}
        </div>
    );
}

const getState = (state) => {
    console.log(state);
    return {
        login: state.reducerRepos.login,
        image: state.reducerRepos.image
    };
};

export default connect(getState)(RepositoriesComponent);