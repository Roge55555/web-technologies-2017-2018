function getUser(user) {
    return fetch(`https://api.github.com/users/tresdosdos`)
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
    getUser
};

export default git;