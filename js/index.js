var myDiv =document.querySelector("#content");
var signUp =document.getElementById("signUpButton");
var signUpName =document.getElementById("signUpName");
var signUpEmail =document.getElementById("signUpEmail");
var signUpPassword =document.getElementById("signUpPassword");
var signIn =document.getElementById("signIn");
var messageCheck = document.getElementById("check");
var signUpNameCheck =/^[A-Z]/;
var signUpEmailCheck =/(@gmail.com)$/;
var signUpPasswordCheck =/[\w]{8,}$/;
var loginEmail =document.getElementById("loginEmail");
var loginPassword =document.getElementById("loginPassword");
var username =document.getElementById("userNames");
var checkLog =document.getElementById("checkLogin");
var allUser=[];
var isExsist =false;

if (localStorage.getItem("users") !=null ) {
    allUser =JSON.parse(localStorage.getItem("users"));
}
var usernames = localStorage.getItem('username');
if (username) {
    document.getElementById('userNames').innerHTML = "Welcome " + usernames;
}
function isEmailExist() {
    for (var i = 0; i < allUser.length; i++) {
        if (allUser[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}
function SignUp() {

    messageCheck.innerHTML =`<p id="check" class="my-3 text-danger">
    </p>
`;  
    if ( signUpName.classList.contains("is-valid")&&signUpEmail.classList.contains("is-valid")&&signUpPassword.classList.contains("is-valid")) {
       
        
       
        if(isEmailExist()==false)
            {
                messageCheck.innerHTML =`<p id="check" class="my-3 text-danger">
                Email is Exsist
                </p>
            `;  
            }
            else
            {
                messageCheck.innerHTML =`<p id="check" class="my-3 text-danger">
                </p>
            `;   
            var user ={
    
                name :signUpName.value,
                email :signUpEmail.value.toLowerCase(),
                password :signUpPassword.value,
            }
            allUser.push(user);
            localStorage.setItem("users",JSON.stringify(allUser)); 
            clear();
            window.location.href ="index.html"

            }
       
    }
    else
    {
          messageCheck.innerHTML =`<p id="check" class="my-3 text-danger">
           All inputs is required
            </p>
        `;   

    }
    
   
}
signUpEmail.addEventListener("input",function(){
    if(signUpEmailCheck.test(signUpEmail.value.toLowerCase()))
        {
          
            signUpEmail.classList.add("is-valid");
            signUpEmail.classList.remove("is-invalid");
        }
    else
    {
        signUpEmail.classList.add("is-invalid");
        signUpEmail.classList.remove("is-valid");

    
    }
});
signUpPassword.addEventListener("input",function(){
    if(signUpPasswordCheck.test(signUpPassword.value))
        {
          
            signUpPassword.classList.add("is-valid");
            signUpPassword.classList.remove("is-invalid");
        }
    else
    {
        signUpPassword.classList.add("is-invalid");
        signUpPassword.classList.remove("is-valid");

        
    }
});
signUpName.addEventListener("input",function(){
    if(signUpNameCheck.test(signUpName.value))
        {
          
            signUpName.classList.add("is-valid");
            signUpName.classList.remove("is-invalid");
        }
    else
    {
        signUpName.classList.add("is-invalid");
        signUpName.classList.remove("is-valid");

        
    }
   
});

function clear()
{
    signUpEmail.value="";
    signUpName.value ="";
    signUpPassword.value ="";
}
function login() {
    checkLog.innerHTML =`
    <p id="checkLogin" class="my-3 text-danger">
 </p>
    `
    console.log(loginEmail.value);
    console.log(loginPassword.value);
    for(var i=0;i<allUser.length;i++)
    {
       
    

        if(allUser[i].password.toLowerCase() == loginPassword.value.toLowerCase() &&allUser[i].email.toLowerCase()==loginEmail.value.toLowerCase() )
            {
               localStorage.setItem('username',allUser[i].name);
                window.location.href ="home.html";
                

            }
            else
            {
               checkLog.innerHTML =`
               <p id="checkLogin" class="my-3 text-danger">
                Please Enter Valid Data
            </p>
               `
                
            }
    }
}
function logout() {
    localStorage.removeItem('username')
    window.location.href ="index.html"

}