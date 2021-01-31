const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('button');
let inputValue = [firstName.value,lastName.value,email.value,password.value];
const validateFirstName =  document.querySelector('.validate-firstName');
const validateLastName =  document.querySelector('.validate-lastName');
const validatePassword =  document.querySelector('.validate-password');
const validateEmail =  document.querySelector('.email-empty');


button.addEventListener('click',function(e){
    // prevent send the value
    e.preventDefault();
    // validate firstName
    if(firstName.value === ''){
        validateFirstName.classList.add('active');
        firstName.classList.add('active');
    } else{
        validateFirstName.classList.remove('active');
        firstName.classList.remove('active');
    }

    // validate lastName
    if(lastName.value === ''){
        validateLastName.classList.add('active');
        lastName.classList.add('active');
    } else{
        validateLastName.classList.remove('active');
        lastName.classList.remove('active');
    }

    // validate password
    if(password.value === ''){
        validatePassword.classList.add('active');
        password.classList.add('active');
    } else{
        validatePassword.classList.remove('active');
        password.classList.remove('active');
    }

    // validate if email is empty
    if(email.value === ''){
        validateEmail.classList.add('active');
        email.classList.add('active');
        validateEmail.innerHTML = 'Email cannot be empty';
    } else{
        validateEmail.classList.remove('active');
        email.classList.remove('active');
        // validate if user input isn't email
        if(email.validity.valid === false){
            validateEmail.classList.toggle('active');
            email.classList.add('active');
            validateEmail.innerHTML = 'Looks like this is not an email';
        }
    }
});