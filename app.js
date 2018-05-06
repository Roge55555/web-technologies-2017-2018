let search = function () {
    document.getElementById('content').innerHTML = '';
    let login = document.getElementById('input').value;
    getResponse(login).then(user => {
        add_content(user);
    }).catch((err) => {
        errors(err);
    });
}
document.getElementById('search').addEventListener('click', search);
let getResponse = function(user){
    let url = 'https://api.github.com/users/' + user;
    return request(url);
}
function request(url) {
    return fetch(url)
        .then((response => {
            if(response.status >= 200 && response.status < 400){
                return response.json();
            }
            if (response.status === 404){
                return Promise.reject(new Error('User not found!'));
            }
            if (response.status >= 400){
                return Promise.reject(new Error('Client or Server error!'));
            }
        }))
}
function check_field(user, field) {
    if (user[field] === null || user[field] === '') {
        return 'empty field';
    } else {
        return user[field];
    }
}
function add_content(user) {
    let containers = [];
    let fields = ['name', 'login', 'bio', 'company', 'location', 'blog', 'email'];

    let root = document.createElement('div');
    root.id = 'Profile';
    root.className = 'Profile';

    containers.push(document.createElement('img'));
    containers[0].src = user.avatar_url;
    containers[0].className = 'avatar';
    containers[0].id = 'avatar';

    for(let i=0;i<fields.length;i++){
        containers.push(document.createElement('p'));
        containers[i+1].innerHTML = check_field(user, fields[i]);
        containers[i+1].className = fields[i];
    }

    containers[6].setAttribute('href', user.blog);


    containers.map(item => {
        root.appendChild(item);
    });

    document.getElementById('content').appendChild(root);
}

function errors(err) {
    let root = document.createElement('h3');
    root.innerHTML = err;
    document.getElementById('content').appendChild(root);
}