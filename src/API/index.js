function getUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
            if (response.status >= 200 && response.status < 400) {
                return response.json()
            }
            if (response.status === 404) {
                throw new Error('FETCH_ERROR');
            }
            throw new Error('SERVER_ERROR');
        })
        .then(res => {
            return res;
        })
}

function getRepos(user) {
    return fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            if (response.status >= 200 && response.status < 400) {
                return response.json()
            }
            if (response.status === 404) {
                throw new Error('FETCH_ERROR');
            }
            throw new Error('SERVER_ERROR');
        })
        .then(res => {
            return res;
        })
}

function getFollowers(user) {
    return fetch(`https://api.github.com/users/${user}/followers`)
        .then((response) => {
            if (response.status >= 200 && response.status < 400) {
                return response.json()
            }
            if (response.status === 404) {
                throw new Error('FETCH_ERROR');
            }
            throw new Error('SERVER_ERROR');
        })
        .then(res => {
            return res;
        })
}

const git = {
    getUser,
    getRepos,
    getFollowers
};

export default git;