
// Changes from the header to the header scrolled position
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('#logo');
    const nav = document.querySelector('nav');

    // Check if page has been scrolled
    if (window.scrollY > 0) {
        // if it as been scrolled down add the scrolled class
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        // if it has not been scrolled, remove scrolled class
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});


// Return to top of page
document.addEventListener('DOMContentLoaded', function() {

    const articles = document.querySelectorAll('.post');

    articles.forEach(article => {
        const articleText = article.querySelector('.articleText');
        const hideButton = article.querySelector('.hideButton');
        const showButton = article.querySelector('.showButton');

        hideButton.addEventListener('click', function() {
            articleText.style.display = 'none';
            hideButton.style.display = 'none';
            showButton.style.display = 'inline';
        });

        showButton.addEventListener('click', function() {
            articleText.style.display = 'block';
            showButton.style.display = 'none';
            hideButton.style.display = 'inline';
        });
    });

});

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

//TODO: check email valid (check email contains "@" and ".") #edit not everyone uses .com


//TODO: prevents forms being submitted if fields are empty
function checkForm() {
        var elements = [{id: "uname", error:"user_error"},{id: "psw",error:"psw_error"}];
console.log(elements);
        let validCount =0
        elements.forEach(function(element){
            let x = document.forms["login"][element.id].value;
            var errorText = document.getElementById(element.error);
            var textLength = x.length;
            console.log(element, " has textlength of ", textLength)

            if (textLength ==0){
                input.style.borderColor = 'orange';
                errorText.style.color = 'orange';    
                errorText.textContent = 'Missing text';

            }
            validCount++
            console.log("current valid count is", validCount)
        })
        if (validCount === 2){
            alert("Success! You have logged in");
            window.location.href ="index.html";
        
    }
}

// only works for the two first items
function validateForm() {
    var elements = [
        {inputId: "span_title", error: "title_error", maxLength: 80, errorMessage: "This title is too long, try using less than 80 characters" },
        {inputId: "span_tags", error: "tags_error", maxLength: Infinity, errorMessage: "" },
        {inputId: "span_content", error: "content_error", maxLength: Infinity, errorMessage: "" }
    ];

    var validCount = 0;

    elements.forEach(function(element) {
        var spanElement = document.getElementById(element.inputId);
        var errorText = document.getElementById(element.error);
        var textLength = spanElement.textContent.trim().length;

        if (textLength === 0) {
            spanElement.style.borderColor = 'orange';
            errorText.style.color = 'orange';
            errorText.textContent = 'Missing text';
            spanElement.setAttribute('placeholder', 'Please write here');
        } else if (textLength > element.maxLength) {
            spanElement.style.borderColor = 'orange';
            errorText.style.color = 'orange';
            errorText.textContent = element.errorMessage;
        } else {
            spanElement.style.borderColor = '#025E73';
            errorText.textContent = '';
            validCount++;
        }
    });

    if (validCount === elements.length) {
        alert("Success! Your post has been made");
        window.location.href ="index.html";
    }
}


//TODO: reset function, clears all fields
function resetForm() {
    let span1 = document.getElementById("span_title");
    let span2 = document.getElementById("span_tags");
    let span3 = document.getElementById("span_content");
 
    span1.textContent = "";
    span2.textContent = "";
    span3.textContent = "";
 }  

//TODO: check email valid (check email contains "@" and ".com")


//TODO: prevents forms being submitted if fields are empty
function validateRegoForm() {
    if(document.forms["registration-form"]["username"].value == "") {
        alert("Username is required");
    }
    
}
//reference: W3 Schools js_validation

//This function is not strictly necessary as just adding 'onclick="reset()" ' to the reset button achieves the same outcome. Check with Sara on approach
function resetRegoForm() {
    document.getElementById("registration-form").reset();
}
//reference: W3 Schools Form Reset Method (https://www.w3schools.com/jsref/met_form_reset.asp)

//TODO: submit button links back to homepage

