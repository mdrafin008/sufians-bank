document.getElementById('login-submit').addEventListener('click',function(){
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   //user password
   const passwordField = document.getElementById('user-password');
   const userPassword =passwordField.value;
  if (userEmail =='mdrafin008@gmail.com' && userPassword =='secret')
  {
   window.location.href ='banking.html';  
  }
})
