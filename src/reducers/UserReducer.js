const initialState = {
    inputValue: '',
    name: '',
    login: '',
    avatar_url: 'https://avatars0.githubusercontent.com/u/5195936?s=460&v=4',
    location: '',
    bio: '',
    followers_url: ''
};

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_INPUT':
            return Object.assign({}, state, {inputValue: action.user});
        case 'ON_SUBMIT':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

export default UserReducer;