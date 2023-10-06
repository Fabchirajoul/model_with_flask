// Replace these sample values with actual usernames, passwords, and employee IDs in a real system.
const validUsers = [
    { username: "user1", password: "password1", employeeId: "123" },
    { username: "user2", password: "password2", employeeId: "456" }
];

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const employeeIdInput = document.getElementById("employeeId").value;

    // Check if the provided credentials match any valid user
    const validUser = validUsers.find(
        (user) =>
            user.username === usernameInput &&
            user.password === passwordInput &&
            user.employeeId === employeeIdInput
    );

    if (validUser) {
        // Redirect to another page on successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
