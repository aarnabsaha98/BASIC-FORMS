const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const email = document.getElementById('email')
const inputs = document.querySelectorAll('input')
const confirmpassword = document.getElementById('confirmpassword')
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 


form.addEventListener('submit', (e) => {
  let messages = []

    if(username.value === "" || username.value == null) {

        messages.push(' user name required');
        document.getElementById('body_element').style.backgroundColor = 'red'
    }

    if(username.value.length > 4 && username.value.length <= 8){
      messages.push('user name consist 4-8 character ' + username.value[0])
    }

    if(username.value[0].tolower()){

      messages.push('first character must be uppercase')
    }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if(password.value != confirmpassword.value){

    messages.push('put the same password to cofirm')
  }

  if(email.value === '' || email.value.match(emailReg) == false){
      messages.push('Email must be a valid email address')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

});

