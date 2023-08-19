document.getElementById("login").addEventListener('click' , (event) =>{
    event.preventDefault()

    const user_name = document.getElementById("fname").value
    const user_password = document.getElementById("password").value
    
    

    if (!user_name) {
        
        event.preventDefault();
        alert("enter your name")
        document.getElementById("fname").style.backgroundColor = "#ff6666";
       
        
    } if (user_name ==="ajaysharma") {
        console.log("correct name");
    }
    else {
        alert("username is incorrect")
        document.getElementById("fname").style.backgroundColor = "#ff6666";
    }

    if (!user_password) {
        event.preventDefault();
        alert("enter your password")
        document.getElementById("password").style.backgroundColor = "#ff6666";
    }
    if(user_password === "123456"){
        console.log("correct password");
    }
    else {
        alert("user password is incorrect")
        document.getElementById("password").style.backgroundColor = "#ff6666";
    }

    

})