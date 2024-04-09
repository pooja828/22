
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
// only works for the two first items
function validateForm() {
    var elements = [
        {inputId: "span_title",
        placeholder:"The funniest thing happend",
        state: "inValid",
        error:"title_error"},

        {inputId: "span_tags",
        placeholder:"LOL, WOW",
        state: "inValid",
        error:"tags_error"},

        {inputid:"span_content",
        placeholder:"Once upon a time...",
        state: "inValid",
        error:"content_error"}

    ]

    elements.forEach(function(element){ 
        var spanElement = document.getElementById(element.inputId);
        if (element.inputId === "span_title"){ //check the title
            var textLength = spanElement.textContent.trim().length; //'s length
            console.log(textLength," titles length")
            if (textLength > 80){ // if it is longer than 80 characters
                spanElement.style.borderColor = 'orange'; //make the border orange
                var errorText = document.getElementById(element.error); //fetch the error text
                errorText.style.color = 'orange'; //make it orange too
                errorText.textContent = 'This title is too long, try using less than 80 characters' //tell the user how to fix it
            }
            if (textLength < 80){ // if it is shorter than 80 characters
                spanElement.style.borderColor = 'black'; //make the border orange
                var errorText = document.getElementById(element.error); //fetch the error text
                errorText.style.color = "none"; //make it orange too
                errorText.textContent = ''
            }

        }

        if (spanElement.textContent.trim() === '') { //check if the elements are empty
            spanElement.style.borderColor = 'orange';
            spanElement.setAttribute('placeholder','Please write here'); //tell them to write
        }
        
        else {
            spanElement.style.borderColor = 'black'; 
            console.log(element, " is checked");
            element.state = "Valid";
        }
    })
    
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


//TODO: submit button links back to homepage

