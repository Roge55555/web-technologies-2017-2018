const tabsState = {
    textArea: ''
};

const TabsReducer = (state = tabsState, action) => {
    switch (action.type){
        case 'TAB_CHANGED':
            return Object.assign({}, state, { textArea: action.text });
        default :
            return state;
    }
};

export default TabsReducer;