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
