var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
// Add in Heroku links
  .goto("http://localhost:3036/register")
  .type("input#register-username", "jimmyneutron")
  .type("input#register-email", "jimmy@thelab.com")
  .type("input#register-password", "goddard")
  .type("input#register-budget", "10000")
  .click("#register-button")
  .goto("http://localhost:3036/dashboard")
  .evaluate(function() {
    return document.querySelector(".main-menu");
  })
  .end()
  .catch(function(error) {
    console.error("Unable to register", error);
  });