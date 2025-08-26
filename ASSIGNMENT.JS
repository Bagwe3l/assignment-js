    let container = document.getElementById("form-container");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let button   = document.getElementById("loginBtn");

    // Style the container using JavaScript
    container.style.width = "300px";
    container.style.margin = "100px auto";
    container.style.padding = "20px";
    container.style.border = "2px solid green";
    container.style.borderRadius = "10px";
    container.style.textAlign = "center";
    container.style.backgroundColor = "#f0fff0"; // light green background

    // Style input fields
    username.style.width = "90%";
    username.style.padding = "10px";
    username.style.marginBottom = "10px";
    username.style.border = "1px solid gray";
    username.style.borderRadius = "5px";

    password.style.width = "90%";
    password.style.padding = "10px";
    password.style.marginBottom = "10px";
    password.style.border = "1px solid gray";
    password.style.borderRadius = "5px";

    // Style the button
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    // Add hover effect with JS
    button.onmouseover = function() {
      button.style.backgroundColor = "darkgreen";
    }
    button.onmouseout = function() {
      button.style.backgroundColor = "green";
    }