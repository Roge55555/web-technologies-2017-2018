import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import git from '../API/index';

function InputUser(props) {
    return(
      <Fragment>
          <input onChange={ props.newValue } value={ props.inputValue }/>
          <button onClick={ props.search } value={ props.inputValue }>submit</button>
      </Fragment>
    );
}

const mapStateToProps = (state) => {
    return{
        inputValue: state.user.inputValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (event) => {
            git.getUser(event.target.value)
                .then(res => {
                    dispatch({
                        type: 'ON_SUBMIT',
                        data: {
                            name: res.name,
                            login: res.login,
                            avatar_url: res.avatar_url,
                            location: res.location,
                            bio: res.bio,
                            followers_url: res.followers_url
                        }
                    })
                })
        },
        newValue: (event) => {
            const action = { type: 'CHANGE_INPUT', user: event.target.value};
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputUser);