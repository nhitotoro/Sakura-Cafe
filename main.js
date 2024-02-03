const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


// Menue
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
// Element soll bei Contact Klick der Menu Leiste zu den Contact Daten scrollen
document.addEventListener("DOMContentLoaded", function () {

  var contactElement = document.querySelector(".contactt");
  var contactLink = document.querySelector('a[href="#contact"]');

  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Verhindere den normalen Link-Klick

//Scrolle zum Contact-Element
    contactElement.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var openingHoursLink = document.querySelector('a[href="#opening-hours"]');

  openingHoursLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement("opening-hours");
  });

  function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
// Finde das Gallery-Element
  var galleryElement = document.querySelector(".gallery_container");

// Finde den Link im Menü
  var galleryLink = document.querySelector('a[href="#gallery"]');

// Füge einen Event Listener hinzu
  galleryLink.addEventListener("click", function (event) {
    event.preventDefault(); // Verhindere den normalen Link-Klick

// Scrolle zum Gallery-Element
    galleryElement.scrollIntoView({ behavior: "smooth" });
  });
});

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

//Datum Feld
config = {
    altInput: true,
    altFormat: "D, d.m.y",
    dateFormat: "Y-m-d",
}
flatpickr("input[type=date]", config );

//Zeit Feld
var config = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i K",
    time_24hr: true,
  };
  flatpickr("#timeInput", config);

/// Buchung
document.getElementById('bookingButton').addEventListener('click', function() {
  alert('Booking Successful!');

// Eingabefeld für die E-Mail-Adresse
  var email = prompt('Please enter your email:');

// Verarbeite die E-Mail-Adresse
  processEmail(email);
});
function processEmail(email) {
  if (email !== null) {  // Überprüfe, ob der Benutzer "Abbrechen" geklickt hat
    alert('Email submitted successfully!\nEmail: ' + email);

  }}
