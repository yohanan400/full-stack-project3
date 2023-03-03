class FXMLHttpRequest {
    //fields
    readyState;
    response;
    responseText;
    responseType;
    responseURL;
    responseXML;
    status;
    statusText;
    timeout;
    upload;
    withCredentials;
    data = {};

    // events
    abord = new Event("abord");
    error = new Event("error");
    load = new Event("load");
    loadend = new Event("loadend");
    loadstart = new Event("loadstart");
    progress = new Event("progress");
    readystatechange = new Event("readystatechange");
    timeout = new Event("timeout");

    // consts
    UNSENT = 0;


    // methods
    constructor() {
    }

    abort() {
        // TODO: abord the task
        readyState = this.UNSENT;
        this.status = 0;
    }

    getAllResponseHeaders() {
        text = JSON.parse(responseText);
        return Object.keys(text);
    }

    // recieve header name and return his value from the response string if exist
    // else, return null.
    getResponseHeader(headerName) {
        text = JSON.parse(responseText);
        result = text[headerName];

        if (result == "" || result == null) {
            return null;
        }
        else {
            return result;
        }
    }

    open(method, url, isAsync = true, user = null, password = null) {
        this.data = {
            "method": method,
            "url": url,
            "isAsinc": isAsync,
            "user": user,
            "password": password
        };
    }

    overrideMimeType(mimeType = "text/xml") {
        this.responseType = mimeType;
    }

    send(body = "", func = () => { }) {
        //TODO: send the request via network class
        let net = new network();
        const d = this.data
        if (this.data["isAsinc"]) {
            net.send_to_server_async(JSON.stringify({ d, body }), func);
        }
        else {
            net.send_to_server(JSON.stringify({ d, body }));
        }
    }
}