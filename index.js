function register() {
    const fxhr = new FXMLHttpRequest()

    const name = document.getElementById("rUsername").value
    const pass = document.getElementById("rPassword").value

    fxhr.open("POST", "");
    fxhr.send({ "username": name, "password": pass }, () => { console.log("registration succeed") })
    // Show the login form
    showLogin();
}


function login() {
    const username = document.getElementById("lUsername").value;
    const password = document.getElementById("lPassword").value;
    let pass;
    const fxhr = new FXMLHttpRequest()
    fxhr.open("GET", "");
    fxhr.send("usernames", (users) => {
        if (users[username] == password) {
            alert("welcome");
            localStorage.setItem("currentUser", JSON.stringify(username));
            // Show the todo list
            loginForm.style.display = "none";
            todo.style.display = "block";
            show_tasks(username);
        } else {
            alert("wrong");
        }
    });
}

function show_tasks(username) {
    const fxhr = new FXMLHttpRequest()
    fxhr.open("GET", "");
    let todo = document.getElementById('todoList');
    fxhr.send(username, (task_list) => {

        for(const key in task_list){
            todo.innerHTML += `<li> ${key}: ${task_list[key]}</li>`;
        }
    });
}

function add_task(){

    const title = document.getElementById("title").value;
    const task = document.getElementById("task").value;
    
    const fxhr = new FXMLHttpRequest()
    fxhr.open("PUT", "");
    fxhr.send({"username":JSON.parse(localStorage.getItem("currentUser")), "title":title, "new_content":task}, ()=>{
        document.getElementById('todoList').innerHTML = '';
        show_tasks(JSON.parse(localStorage.getItem("currentUser")));
    } );
}