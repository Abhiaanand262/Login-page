const loginform = document.getElementById("loginform");

loginform.addEventListener("submit", function(e) {
    e.preventDefault();



    const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(username==="user" & password==="password"){
    alert("login successful !");
}else{
    alert("Login failed..please check your username or password")
}

});


