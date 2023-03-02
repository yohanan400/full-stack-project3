class server{
    constructor(){
        this.dbapi = new db_api();
    }

    prossess_data(data, dispatcher = (x) => {}){
        recivedData = JSON.parse(data);
        
        if(recivedData["data"].method === 'GET'){
            if(recivedData["body"] == "usernames"){
                dispatcher(get_username_list());
            } 
            else if(recivedData["body"] == "tasks"){
                dispatcher(this.get_tasks_list());
            }
            else if(recivedData["body"].usernamae){
                dispatcher(get_task(recivedData["body"].username, recivedData["body"].title));
            }
        } 
        else if(recivedData["data"].method === 'POST' ){
            if (recivedData["body"].username) {
                add_user(recivedData["body"].username, recivedData["body"].password);
            } 
            else {
                add_task(recivedData["body"].username, recivedData["body"].title, recivedData["body"].task);
            }
            //dispatch the event
            dispatcher();
        } 
        else if(recivedData["data"].method === 'PUT'){
            update_task(recivedData["body"].username, recivedData["body"].title, recivedData["body"].new_content);
            //dispatch the event
            dispatcher();
        }
        else if(recivedData["data"].method == 'DELETE'){
            delete_task(recivedData["body"].username, recivedData["body"].title);
            //dispatch the event
            dispatcher();
        }

        return true;
    }

     //create
    add_user(username, password){
        this.dbapi.add_username(username, password);
    }

    add_task(username, title, task){
        this.dbapi.add_task(username, title, task);
     }

      //read
    get_username_list() {
        return this.dbapi.get_username_list();
    }

    get_tasks_list(username){
        return this.dbapi.get_tasks_list(username);
    }

    get_task(username, title){
        return this.dbapi.get_task(username, title);
    }

    //update
    update_task(username, title, new_content){
        return this.dbapi.update_content(username, title, new_content);
    }

    //delete
    delete_task(username, title){
        this.dbapi.delete_task(username, title);
    }

    //find
    find_task(username, title){
        return this.dbapi.find_task(username, title);
    }

}





