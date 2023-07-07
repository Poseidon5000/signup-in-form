const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");
const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

//MULTIPLE USER LOGIN

signupButton.addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.querySelector(".email").value;
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;

  // let formData = [];

  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =

    JSON.parse(localStorage.getItem("formData")).find(data=>
      data.email ==
        document.querySelector(".email").value &&
        data.username.toLowerCase() ==
          document.querySelector(".username").value.toLowerCase()
    );

  if (!exist) {
    formData.push({
      email: email,
      username: username,
      password: password,
    });

    localStorage.setItem("formData", JSON.stringify(formData));
   
  } else {
    alert("Ooops user details already exist");
    signupForm.reset();
    document.querySelector(".email"), focus();
  }
});

loginButton.addEventListener("click", function (e) {

   e.preventDefault()
  
   // const email = document.querySelector(".email").value;
   // const username = document.querySelector(".username").value;
   // const password = document.querySelector(".password").value;
   
   
   let exist =

   JSON.parse(localStorage.getItem("formData")).find(data=>
     data.username ==
       document.querySelector(".username").value &&
       data.password ==
         document.querySelector(".password").value
   );

   if(!exist){
      alert("user details not found please try again")
   }

   else{
      window.location.href = "mainpage.html" 
   }

});

//SINGLE USER LOGIN

// signupButton.addEventListener("click", function(e){
// e.preventDefault()

//   const email = document.querySelector(".email").value;
//   const username = document.querySelector(".username").value;
//   const password = document.querySelector(".password").value;

//  localStorage.setItem("Email", email)
//  localStorage.setItem("Username", username)
//  localStorage.setItem("Password", password)
// })

// loginButton.addEventListener("click", function(e){
// e.preventDefault()

//     const loginUsername = document.querySelector(".login-username").value;
//     const loginPassword = document.querySelector(".login-password").value;

//    const email =  localStorage.getItem("Email");
//    const username =  localStorage.getItem("Username");
//    const password=  localStorage.getItem("Password");

//    console.log(email);
//    console.log(username);
//    console.log(password);

//    if(loginUsername == "" || loginPassword == ""){
//        alert("please input the required field")
//     }
//     else if(username !== loginUsername){
//      alert("User does not exist")
//     }

//    else if(password !== loginPassword){
//     alert("Wrong Password")
//    }

//    else if(loginUsername == username && loginPassword == password){
//    window.location.href = "mainpage.html"
// //    window.open("mainpage.html")
//    }

// })
