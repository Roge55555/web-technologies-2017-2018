import React, {Fragment} from 'react'
import { connect } from 'react-redux'

function Tabs(props) {
    return(
        <Fragment>
            <button className='tab' onClick={props.tab} value='Основное'>Основное</button>
            <button className='tab' onClick={props.tab} value='Образование'>Образование</button>
            <button className='tab' onClick={props.tab} value='Контакты'>Контакты</button>
            <br />
            <textarea className='textArea' value={props.textArea} />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return{
        textArea: state.textArea
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        tab: (event) => {
            const action = { type: 'TAB_CHANGED', text: event.target.value };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps ,mapDispatchToProps)(Tabs);