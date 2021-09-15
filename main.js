let emailSubmit = document.getElementById('eSubmit');
let passwordSubmit = document.getElementById('pSubmit');
let emailFieldErase = document.getElementById('emailField')
let eraseTheFieldValue = document.getElementById('pwField');



emailSubmit.addEventListener('click', function(e){  
    let email = document.getElementById('emailField');
     
    setTimeout(() => {
        alert('Email has been stored!');
        email.value = " "
        console.log(localStorage.getItem('email', email));// console.log for repl users
    }, 1000)
     
    email = email.value;   // sets email to the value of the emailField
    localStorage.setItem('email', email); // will store the email data into storage
});


passwordSubmit.addEventListener('click', function(e){
    let thePassword = document.getElementById('pwField');

    setTimeout(() => {
        alert('Password has been stored!')
        console.log(localStorage.getItem('password', thePassword)); // console.log for the repl users
    }, 2000)
    
    thePassword = thePassword.value;
    localStorage.setItem('password', thePassword);
});



eraseTheFieldValue.addEventListener('click', function() {
    emailFieldErase.value = "";
    eraseTheFieldValue.value = "";
})


emailFieldErase.addEventListener('click', function() {
    let emailErased = document.getElementById('emailField')
    emailErased.value = "";

})


