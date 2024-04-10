let sliderIndex = {
  slide: 1,
  event: 1,
};

function plusSlider(sliderName, n) {
  showSlider(sliderName, (sliderIndex[sliderName] += n));
}
function showSlider(sliderName, n) {
  let i;
  const slides = document.getElementsByClassName(sliderName);

  if (n > slides.length) {
    sliderIndex[sliderName] = 1;
  }
  if (n < 1) {
    sliderIndex[sliderName] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[sliderIndex[sliderName] - 1].style.display = "block";
}
showSlider("slide", 1);
showSlider("event", 1);

window.addEventListener("load", () => {
  const map = L.map("map").setView([39.7637, 19.9943], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.7637, 19.9943]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".btn-primary").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

function openWhatsAppChat() {
  // Replace "1234567890" with the phone number you want to chat with
  let phoneNumber = "+40721080181";
  let Name = "Kosta";
  // Construct the WhatsApp chat URL
  var url = "https://wa.me/" + phoneNumber;
  // Open the WhatsApp chat link in a new tab/window
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
  var navLinks = document.querySelectorAll(".maina");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add the "active" class to the current page link
    }
  });
});

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const firstDiv = document.querySelector(".first-div");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  firstDiv.classList.add("remove-first-div");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  firstDiv.classList.remove("remove-first-div");
});
