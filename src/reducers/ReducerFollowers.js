const initialStateFollowers = {
    image : [],
    login: [],
};


const reducerFollowers = (state , action) => {
    console.log(action.data);
    switch (action.type) {
    
        case 'RESPONCE_SUCCESS_FOLLOWERS': {
            return Object.assign({}, state.reducerFollowers, action.data);
        }
        case 'RESPONCE_SUCCESS_FOLLIWERS_EMPTY':{
           return initialStateFollowers;
        }
        default: {
            if (state !== undefined){
                return state;
            }else{
                return initialStateFollowers;
            }
        }
    }
};

export default reducerFollowers;