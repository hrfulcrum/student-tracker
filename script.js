var ref = new Firebase("https://fulcrum-students.firebaseio.com");

document.getElementById('login').addEventListener('click', function() {
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
}, false);