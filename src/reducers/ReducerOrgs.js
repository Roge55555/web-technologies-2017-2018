const initialStateOrgs = {
    image: [],
    login: [],
};


const reducerOrgs = (state , action) => {

    switch (action.type) {
        case 'RESPONCE_SUCCESS_ORGS': {
            return Object.assign({}, state.reducerOrgs, action.data);
        }
        case 'RESPONCE_SUCCESS_ORGS_EMPTY':{
           return initialStateOrgs;
        }
        default: {
            if (state !== undefined){
                return state;
            }else{
                return initialStateOrgs;
            }
        }
    }
};

export default reducerOrgs;