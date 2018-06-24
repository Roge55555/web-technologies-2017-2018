const initialStateRepos = {
    image : [],
    login: [],
};


const reducerRepos = (state , action) => {
    switch (action.type) {
        case 'RESPONCE_SUCCESS_REPOS': {
            return Object.assign({}, state.reducerRepos, action.data);
        }
        case 'RESPONCE_SUCCESS_REPOS_EMPTY':{
           return initialStateRepos;
        }
        default: {
            if (state !== undefined){
                return state;
            }else{
                return initialStateRepos;
            }
        }
    }
};

export default reducerRepos;