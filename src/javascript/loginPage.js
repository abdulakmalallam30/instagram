function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store username and password in localStorage
    if (username && password) {
      localStorage.setItem("storedUsername", username);
      localStorage.setItem("storedPassword", password);
      
      // Show the error message
      var errorElement = document.getElementById("error-message");
      if (errorElement) {
        errorElement.style.display = "flex";
      }
    } else {
      alert("Please enter both username and password.");
    }
  }