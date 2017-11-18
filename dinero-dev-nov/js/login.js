$(document).ready(function() {
    var loginForm = $("form#login-form")
    var emailInput = $("input#login-email");
    var passwordInput = $("input#login-password");

    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            alert("Please enter a valid username and password.")
        });
    }

});