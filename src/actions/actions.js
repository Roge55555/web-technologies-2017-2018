export const fetchSuccess = (responce) => (dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_USER',
            data: {
                image: responce.avatar_url,
                name: responce.name,
                login: responce.login,
                bio: responce.bio,
                blog: responce.blog,
                company: responce.company,
                location: responce.location,
                email: responce.email,
                social: responce.social,
                error: false
            }
        }
    )
};

export const fetchError =(error)=>(dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_ERROR_USER',
            data:{
                error: true
            }
        })
}


export const fetchSuccessOrg = (responce) => (dispatch) => {
    if (responce.length === 0) {
        console.log("EMPTY");
        return dispatch(
            {
                type: 'RESPONCE_SUCCESS_ORGS_EMPTY',
            }
        )
    }
    const imageAr = [];
    const loginAr = [];
    responce.map(obj => {
        imageAr.push(obj.avatar_url);
        loginAr.push(obj.login);
    })
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_ORGS',
            data: {
                image: imageAr,
                login: loginAr,
            }
        }
    )
};


export const textChangeInArea = (text, idArea) => (dispatch) => {
    return dispatch(
        {
            type: 'TextChange',
            data: {
                idArea: text
            }
        }
    )
};

export const fetchSuccessRepos = (responce) => (dispatch) => {
    if (responce.length === 0) {
        console.log("EMPTY");
        return dispatch(
            {
                type: 'RESPONCE_SUCCESS_REPOS_EMPTY',
            }
        )
    }
    const imageAr = [];
    const loginAr = [];

    responce.map(obj => {
        imageAr.push(obj.html_url);
        loginAr.push(obj.name);
    })
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_REPOS',
            data: {
                image: imageAr,
                login: loginAr,
            }
        }
    )
};

export const fetchSuccessFollowers = (responce) => (dispatch) => {
    console.log(responce);
    if (responce.length === 0) {
        console.log("EMPTY");
        return dispatch(
            {
                type: 'RESPONCE_SUCCESS_FOLLIWERS_EMPTY',
            }
        )
    }
    const imageAr = [];
    const loginAr = [];
    responce.map(obj => {
        imageAr.push(obj.avatar_url);
        loginAr.push(obj.login);
    })

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_FOLLOWERS',
            data: {
                image: imageAr,
                login: loginAr,
            }
        }
    )
};