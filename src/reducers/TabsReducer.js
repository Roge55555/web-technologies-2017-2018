const tabsState = {
    active: 0,
    textArea: '',
    tab: {
        0: 'Основное',
        1: 'Образование',
        2: 'Контакты'
    }
};

export default function tabsReducer(state = tabsState, action){
    switch (action.type){
        case 'TAB_CHANGED':
            return Object.assign({}, state, {
                active: action.key,
                textArea: state.tab[action.key]
            });
        case 'TAB_INPUT':
            return Object.assign({}, state, {
                textArea: action.text,
                tab: Object.assign({}, state.tab, { [state.active]: action.text})
            });
        default :
            return state;
    }
};