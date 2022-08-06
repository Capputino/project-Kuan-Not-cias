
function login() {
  var Login = document.getElementById('username').value
  var password = document.getElementById('password').value
        
 

     if (login =="admin" && senha=="admin") {
       alert("sucesso") 
       location.href = "home.html"
      }else{
        alert("incorreto")
        }
      }