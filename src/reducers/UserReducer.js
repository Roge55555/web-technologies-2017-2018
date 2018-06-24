const initialState = {
    inputValue: '',
    name: ' Name',
    login: ' Login',
    avatar_url: 'https://avatars0.githubusercontent.com/u/5195936?s=460&v=4',
    location: ' Anywhere',
    bio: ' just positive person',
    followers_url: ''
};

export default function userReducer(state = initialState, action){
    switch (action.type){
        case 'CHANGE_INPUT':
            return Object.assign({}, state, {inputValue: action.user});
        case 'ON_SUBMIT':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};