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
        localStorage.setItem(JSON.stringify(username), JSON.stringify({"first task title": `this is the first task of ${username}`}) );
        return true;
    }

    add_task(username, title, task) {
        let user = JSON.parse(localStorage.getItem(JSON.stringify(username)));
        user[title] = task;

        localStorage.setItem(username, JSON.stringify(new_task));
    }

    //read
    get_username_list() {
        let users = localStorage.getItem("users");
        if (users == null){
            localStorage.setItem("users", JSON.stringify({}));
            users = localStorage.getItem("users");
        }
        return JSON.parse(users);
    }

    get_tasks_list(username) {
        return JSON.parse(localStorage.getItem(JSON.stringify(username)));
    }

    get_task(username, title) {
        return JSON.parse(localStorage.getItem(JSON.stringify(username))[title]);
    }

    //update
    update_content(username, title, new_content) {
        let task = this.get_tasks_list(username);
        task[title] = new_content;
        localStorage.setItem(username, JSON.stringify(task));
    }

    //delete
    delete_task(username, title) {
        delete localStorage.getItem(JSON.stringify(username))[title];
    }

    // find
    find_task(username, title) {
        if (this.get_task(username, title)) return true;
        else return false;
    }

}