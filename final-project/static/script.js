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
    var form = document.getElementById("purchaseForm");
    var confirmation = document.getElementById("confirmation");
    if (!form) return;
    form.style.display = "block";
    if (confirmation) confirmation.style.display = "none";
    var dateField = document.getElementById("selectedDate");
    if (dateField) dateField.value = date;
    updateTotal();
    form.scrollIntoView({ behavior: "smooth" });
}

function updateTotal() {
    var price = parseInt(document.getElementById("ticketType").value) || 18;
    var qty = parseInt(document.getElementById("quantity").value) || 1;
    var totalEl = document.getElementById("totalPrice");
    if (totalEl) totalEl.textContent = "Total: $" + (price * qty);
}

function submitPurchase() {
    var form = document.getElementById("ticketForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    var name = document.getElementById("name").value;
    var qty = document.getElementById("quantity").value;
    var date = document.getElementById("selectedDate").value;
    var price = parseInt(document.getElementById("ticketType").value);
    var total = price * parseInt(qty);
    var typeLabel = document.getElementById("ticketType").selectedOptions[0].text;

    document.getElementById("purchaseForm").style.display = "none";
    var conf = document.getElementById("confirmation");
    conf.style.display = "block";
    document.getElementById("confirmationMsg").textContent =
        "Thank you, " + name + "! Your " + qty + " " + typeLabel.split("—")[0].trim() +
        " ticket(s) for " + date + " are booked. Total charged: $" + total + ".";
    conf.scrollIntoView({ behavior: "smooth" });
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
