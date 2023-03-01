const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");

signupButton.addEventListener("click", function(e){
e.preventDefault()

  const email = document.querySelector(".email").value;
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;

 localStorage.setItem("Email", email)
 localStorage.setItem("Username", username)
 localStorage.setItem("Password", password)
})


loginButton.addEventListener("click", function(e){
e.preventDefault()

    const loginUsername = document.querySelector(".login-username").value;
    const loginPassword = document.querySelector(".login-password").value;

   const email =  localStorage.getItem("Email");
   const username =  localStorage.getItem("Username");
   const password=  localStorage.getItem("Password");

   console.log(email);
   console.log(username);
   console.log(password);

   
   if(loginUsername == "" || loginPassword == ""){
       alert("please input the required field")
    }
    else if(username !== loginUsername){
     alert("User does not exist")
    }
   
   else if(password !== loginPassword){
    alert("Wrong Password")
   }

   else if(loginUsername == username && loginPassword == password){
   window.location.href = "mainpage.html"
//    window.open("mainpage.html")
   }

   
})
