function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    
    if (username === 'anime' && password === 'pass') {
       
        alert('Login successful!');window.location.href='home.html';
    } else {
        errorMessage.innerHTML = 'Invalid username or password. Please try again.';
    }
}
