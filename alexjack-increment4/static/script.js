// ===== Part 2: JavaScript Basics =====

// Variable declarations and console output
var x = 5;
var y = 7;
var z = x + y;
console.log(z); // 12

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); // Hello world!

// Basic function
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y); // 12
sumnPrint(A, B); // Hello world!

// Conditional statement comparing C.length to z
if (C.length > z) {
    // C.length is greater than z
    if (C.length > z) {
        console.log(C);
    }
} else {
    // C.length is not greater than z
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!"); // C.length === z (both are 12)
    }
}

// ===== Arrays + Loops (commented out after verification) =====

// var L1 = ["Watermelon","Pineapple","Pear","Banana"];
// var L2 = ["Apple","Banana","Kiwi","Orange"];

// // for loop version
// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Found the Banana!");
//         }
//     }
// }
// findTheBanana(L1);
// findTheBanana(L2);

// // forEach version
// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Found the Banana!");
//         }
//     });
// }
// findTheBanana(L1);
// findTheBanana(L2);


// ===== Part 3: Time-Based Greeting =====

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingEl = document.getElementById("greeting");
    if (!greetingEl) return; // only run on pages that have #greeting

    var message;
    if (x < 5 || x >= 20) {
        message = "Good night — Welcome to MonoMuse";
    } else if (x < 12) {
        message = "Good morning — Welcome to MonoMuse";
    } else if (x < 18) {
        message = "Good afternoon — Welcome to MonoMuse";
    } else {
        message = "Good evening — Welcome to MonoMuse";
    }

    greetingEl.innerHTML = message;
}

greeting(hour);


// ===== Part 4: Dynamic Footer Year =====

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (!yearEl) return;
    var currentYear = new Date().getFullYear();
    yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
}


// ===== Part 4: Active Navigation Bar =====

/* Sets the 'active' class on the navigation link that matches the current page URL. */
function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a, nav a');
    // Iterate over each link
    navLinks.forEach(link => {
        // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();


// ===== Part 5: Read More / Read Less Toggle (jQuery — index.html only) =====

if (typeof jQuery !== 'undefined') {
    // When the "Read Less" button is clicked
    $("#readLess").click(function() {
        $("#longIntro").hide(); // Hide the long introduction text
        $("#readLess").hide();  // Hide the "Read Less" button itself
        $("#readMore").show();  // Show the "Read More" button
    });

    // When the "Read More" button is clicked
    $("#readMore").click(function() {
        $("#longIntro").show(); // Show the long introduction text
        $("#readLess").show();  // Show the "Read Less" button
        $("#readMore").hide();  // Hide the "Read More" button
    });
}


// ===== Part 6: Buy Tickets — Reveal Purchase Form =====

function showPurchaseForm(date) {
    // Reveal the hidden purchase form
    document.getElementById("purchaseForm").style.display = "block";
    // Pre-fill the selected date field
    var dateField = document.getElementById("selectedDate");
    if (dateField) {
        dateField.value = date;
    }
    // Scroll to the form
    document.getElementById("purchaseForm").scrollIntoView({ behavior: "smooth" });
}
