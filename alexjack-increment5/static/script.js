// ===== Part 2: JavaScript Basics =====

var x = 5;
var y = 7;
var z = x + y;
console.log(z); // 12

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); // Hello world!

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y); // 12
sumnPrint(A, B); // Hello world!

if (C.length > z) {
    if (C.length > z) {
        console.log(C);
    }
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}


// ===== Part 3: Time-Based Greeting =====

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingEl = document.getElementById("greeting");
    if (!greetingEl) return;

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

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav li a, nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();


// ===== Part 5: Read More / Read Less Toggle (jQuery — index.html only) =====

if (typeof jQuery !== 'undefined') {
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });

    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });
}


// ===== Part 6: Buy Tickets — Reveal Purchase Form =====

function showPurchaseForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    var dateField = document.getElementById("selectedDate");
    if (dateField) {
        dateField.value = date;
    }
    document.getElementById("purchaseForm").scrollIntoView({ behavior: "smooth" });
}


// ===== Inc 5 Part 3: Hamburger Nav Toggle =====

function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    if (!navLinks) return;
    navLinks.classList.toggle("responsive");
}


// ===== Inc 5 Part 5: Leaflet Map (explore.html only) =====

if (document.getElementById("map")) {
    var museumMap = L.map("map").setView([40.4444, -79.9608], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(museumMap);

    L.marker([40.4444, -79.9608])
        .addTo(museumMap)
        .bindPopup("<b>MonoMuse</b><br>Contemporary Art &amp; Technology Museum")
        .openPopup();
}
