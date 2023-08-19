document.getElementById("submit").addEventListener('click' , (e) => {
    e.preventDefault()

    const user_name = document.getElementById("name").value
    const user_email = document.getElementById("email").value
    const user_password = document.getElementById("password").value
    const user_number = document.getElementById("number").value

    console.log(user_name);
    console.log(user_email);
    console.log(user_password);
    console.log(user_number);

    const users = {
        name : user_name,
        email : user_email,
        password : user_password,
        number : user_number
    }
    console.log(users);

    if(!user_name || !user_email || !user_password || !user_number) {
      //alert("fill all the details")
      //document.getElementById("email").style.backgroundColor = "#ff6666";
      //document.getElementById("email").style.color = "black";
      if(!user_name){
        document.getElementById("name").style.backgroundColor = "#ff6666";
        alert("enter your name")
      }
      if(!user_email) {
        document.getElementById("email").style.backgroundColor = "#ff6666";
        alert("enter your email")
      }
      if(!user_password) {
        document.getElementById("password").style.backgroundColor = "#ff6666";
        alert("enter your password")
      }
      if(!user_number) {
        document.getElementById("number").style.backgroundColor = "#ff6666";
        alert("enter your number")
      }

    }
    else {
      const xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/signups")
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
        // const response = JSON.parse(xhr.responseText)
        console.log(xhr.responseText);
        }
      }
  
      xhr.send(JSON.stringify(users));
    }

    
    })  