// check password
function checkPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = "22";
    if (password != confirmPassword) {
        alert("Passwords do not match. Try twotwo");
        return false;
    }
    document.location.href='./index.html';
}