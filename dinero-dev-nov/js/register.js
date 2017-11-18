$(document).ready(function() {
    // Getting references to our form and input
    var registerForm = $("#register-form");
    var usernameInput = $("input#register-username");
    var emailInput = $("input#register-email");
    var passwordInput = $("input#register-password");
    var budgetInput = $("input#register-budget");

    // When the signup button is clicked, we validate the email and password are not blank
    registerForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            username: usernameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            budget: budgetInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        console.log(userData)
        // If we have an email and password, run the registerUser function
        registerUser(userData.username, userData.email, userData.password, userData.budget);
        usernameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        budgetInput.val("");

    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function registerUser(username, email, password, budget) {
        $.post("/api/register", {
            username: username,
            email: email,
            password: password,
            budget: budget
        }).then(function(data) {
            window.location.replace(data);
            // console.log(data);
            // If there's an error, handle it by throwing up a boostrap alert
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});