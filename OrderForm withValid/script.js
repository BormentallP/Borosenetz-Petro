let form = document.querySelector('#form');
let username = document.querySelector('#name');
let mail = document.querySelector('#mail');
let password = document.querySelector('#pass');
let passwordCheck = document.getElementById('passCheck');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  var usernameValue = username.value.trim();
  var mailValue = mail.value.trim();
  var passwordValue = password.value.trim();
  var passswordCheckValue = passwordCheck.value.trim();
  console.log(username);
  if (usernameValue === '') {
    setErrorFor(username, 'User can not be blank');
  } else {
    setSucsesFor(username);
  }
  if (mailValue === '') {
    setErrorFor(mail, 'Mail can not be blank');
  } else {
    setSucsesFor(mail);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password is empty');
  } else if (passwordValue !== passswordCheckValue) {
    setErrorFor(password, 'Passwords is not the same');
  } else {
    setSucsesFor(password);
  }
  if (passswordCheckValue === '') {
    setErrorFor(passwordCheck, 'Password is empty');
  } else if (passswordCheckValue !== passwordValue) {
    setErrorFor(passwordCheck, 'Passwords is not the same');
  } else {
    setSucsesFor(passwordCheck);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText += message;
  formControl.classList.add('error');
}
function setSucsesFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add('sucsses');
}
