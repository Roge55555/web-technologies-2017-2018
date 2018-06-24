import React, {Fragment} from 'react'
import { connect } from 'react-redux'

function Tabs(props) {
    return(
        <Fragment>
            <button className='tab' onClick={props.tab} value={0} > Основное </button>
            <button className='tab' onClick={props.tab} value={1} > Образование </button>
            <button className='tab' onClick={props.tab} value={2} > Контакты </button>
            <br />
            <textarea className='textArea' onChange={props.input} value={props.textArea} />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return{
        textArea: state.tabs.textArea
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        tab: (event) => {
            const action = { type: 'TAB_CHANGED', key: event.target.value };
            dispatch(action);
        },
        input: (event) => {
            const action = { type: 'TAB_INPUT', text: event.target.value };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Tabs);