class db_api {
    constructor() {

    }
    //create
    add_username(username, password) {
        let users = JSON.parse(localStorage.getItem("users"));
        if (users == null) {
            localStorage.setItem("users", JSON.stringify({}))
            users = JSON.parse(localStorage.getItem("users"));
        }
        users[username] = password;

        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    add_task(username, title, task) {
        let user = localStorage.getItem("username");
        user.append({ title: task })

        localStorage.setItem(username, new_task)
    }

    //read
    get_username_list() {
        return JSON.parse(localStorage.getItem("usernames"));
    }

    get_tasks_list(username) {
        return JSON.parse(localStorage.getItem(username));
    }

    get_task(username, title) {
        return JSON.parse(localStorage.getItem(username)[title]);
    }

    //update
    update_content(username, title, new_content) {
        let task = get_tasks_list(username);
        task[title].value = new_content;
        localStorage.setItem(username, JSON.stringify(task));
    }

    //delete
    delete_task(username, title) {
        delete localStorage.getItem(username)[title];
    }

    // find
    find_task(username, title) {
        if (get_task(username, title)) return true;
        else return false;
    }

}