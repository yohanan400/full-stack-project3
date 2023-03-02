class network{
    serv = new server();

    send_to_server_async(data, dispatcher){    
        serv.prossess_data(data, dispatcher);
    }

    send_to_server(data){
        let result =  serv.prossess_data(data);
        return result;
    }
}