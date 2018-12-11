function save(button, user = button.value){

	window.location = '/save?newTask=' + button.parentNode.querySelector('#task').value + '&user=' + user;
}

function deleteUser(button, user = button.value) {
    const div = button.parentNode;
    const container = div.parentNode;

    container.removeChild(div);

    window.location = '/delete?user=' + user;
}

function exit() {
    window.location = '/';
}