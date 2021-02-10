function validate(){
    var username = document.getElementById("uname_input").value;
    var password = document.getElementById("password_input").value;
    
    
    console.log(username);
    console.log(password);
    
    let xhttp = new XMLHttpRequest();
    let form = {
            userName: username,
            password: password,
        };

    xhttp.onreadystatechange = function() {
    	if(this.readyState == 4) {
    		if(this.status == 403) {
    			console.log("There is some error in login function");
    		}
    		else {
    			console.log("It's not 403 problem");
    		}
    	}
    }
    xhttp.open("POST", "GetInformation", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhttp.send(JSON.stringify(form));

}