function encode(){
    //var formUserName = document.forms["loginForm"]["username"].value;
    var formUserPassword = document.forms["loginForm"]["pswd"].value;
    var hashPassword = formUserPassword ? md5(formUserPassword) : "";
    document.forms["loginForm"]["pswd"].value = hashPassword;

}