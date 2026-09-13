// =================================
// CAREERPILOT - MAIN JAVASCRIPT
// =================================

const loginBtn = document.querySelector(".login-btn");
const startBtn = document.querySelector(".primary-btn");
const exploreBtn = document.querySelector(".secondary-btn");
const aiBtn = document.querySelector(".ai-section .primary-btn");


// Login button
loginBtn.addEventListener("click", function () {
     window.location.href = "login.html";
});


// Start Your Journey button
startBtn.addEventListener("click", function () {
    alert("Welcome to CareerPilot! Your career journey starts here.");
});


// Explore Careers button
exploreBtn.addEventListener("click", function () {
    alert("Career Explorer will help you discover the right career.");
});


// AI Assistant button
aiBtn.addEventListener("click", function () {
    alert("CareerPilot AI Assistant will be powered by Gemini AI.");
});
