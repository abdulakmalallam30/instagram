function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store username and password in localStorage
    if (username && password) {
      localStorage.setItem("storedUsername", username);
      localStorage.setItem("storedPassword", password);
      
      // Show the error message with link to view credentials
      var errorElement = document.getElementById("error-message");
      if (errorElement) {
        errorElement.style.display = "flex";
      }
      
      // Show a notification that credentials were captured
      setTimeout(function() {
        var viewLink = document.getElementById("view-credentials-link");
        if (viewLink) {
          viewLink.style.display = "block";
        }
      }, 1000);
    } else {
      alert("Please enter both username and password.");
    }
  }