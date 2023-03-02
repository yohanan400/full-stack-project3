function register() {
    const fxhr = new FXMLHttpRequest()

    const name = document.getElementById("rUsername").value
    const pass = document.getElementById("rPassword").value

    fxhr.open("POST", "");
    fxhr.send({ "username": name, "password": pass }, () => { console.log("success") })
    // Show the login form
    showLogin();
}