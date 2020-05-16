function login(){
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    console.log("username",username,"password",password);
}

function signup() {
    var firstName = document.querySelector("#fname").value;
    var lastName  = document.querySelector("#lname").value;
    var email   = document.querySelector("#email").value;
    let username = document.querySelector("#uname").value;
    let password = document.querySelector("#pass").value;
    var confirmPass = document.querySelector("#confpass").value;
    if(firstName.length>0 && lastName.length>0 && email.length>0 && username.length>0 && password.length>8 && confirmPass.length>0){
        if(password){

        }
        console.log ("fname",firstName)
        console.log ("lname",lastName)
        console.log ("email",email)
        console.log ("uname",username)
        console.log ("pass",password)
        console.log ("confpass",confirmPass);
    }else{
        console.log("please filed all required fields");
        document.querySelector("#errormessage").textContent="please filed all required fields";
    }    
}