let userRole = "manager";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited Access Granted";
} else {
    accessLevel = "No Access granted";
}

console.log("Access Level :", accessLevel); 
let isLoggedIn = true;

if(isLoggedIn) {
    if(userRole === "admin") {
    userMessage = "Welcome, Admin!";
    } else if (userRole === "manager") {
        userMessage = "You get it!";
    } else {
        userMessage = "Please log in to continue.";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message :", userMessage); 

//conditional statement practice

let userType = "manager";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Adminstrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    default:
        userCategory = "Subscriber";
}
console.log("User Category :", userCategory);

//ternary operator practice
let isAuthenticated = true;
let authenticaitonStatus =  isAuthenticated ? "User is authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticaitonStatus); //Output: User is authenticated

