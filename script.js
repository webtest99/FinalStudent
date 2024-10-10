const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwSjwrKY8FVE_cn4y0sjpSPtdCibv4XN6w-YjKH7A9RLuW2X6BnyBjVACKqBXSMJQjSVA/exec';

function toggleForms() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const toggleButton = document.getElementById('toggle-forms');
  
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    toggleButton.innerHTML = "Switch to Sign Up";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    toggleButton.innerHTML = "Switch to Sign In";
  }
}

function showLoading() {
  document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  showLoading(); // Show loading spinner

  fetch(googleScriptURL, {
    method: 'POST',
    body: new URLSearchParams({
      'action': 'register',
      'email': email,
      'password': password
    })
  }).then(response => response.text())
    .then(result => {
      alert(result);
      hideLoading(); // Hide loading spinner
    })
    .catch(error => {
      alert('Error: ' + error);
      hideLoading(); // Hide loading spinner
    });
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  showLoading(); // Show loading spinner

  fetch(googleScriptURL, {
    method: 'POST',
    body: new URLSearchParams({
      'action': 'login',
      'email': email,
      'password': password
    })
  }).then(response => response.text())
    .then(result => {
      if (result === 'Login successful!') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('student-form').style.display = 'block';
      } else {
        alert(result);
      }
      hideLoading(); // Hide loading spinner
    })
    .catch(error => {
      alert('Error: ' + error);
      hideLoading(); // Hide loading spinner
    });
}

function saveStudentDetails() {
  const email = document.getElementById('login-email').value;
  const name = document.getElementById('student-name').value;
  const age = document.getElementById('student-age').value;
  const classGrade = document.getElementById('student-class').value;

  showLoading(); // Show loading spinner

  fetch(googleScriptURL, {
    method: 'POST',
    body: new URLSearchParams({
      'action': 'saveDetails',
      'email': email,
      'name': name,
      'age': age,
      'classGrade': classGrade
    })
  }).then(response => response.text())
    .then(result => {
      alert(result);
      hideLoading(); // Hide loading spinner
    })
    .catch(error => {
      alert('Error: ' + error);
      hideLoading(); // Hide loading spinner
    });
}
