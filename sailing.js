window.addEventListener("load", () => {
  const map = L.map("emeraldsail").setView(
    [39.77542706521572, 19.996332314456453],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.77542706521572, 19.996332314456453]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".emerald-sail-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

window.addEventListener("load", () => {
  const map = L.map("tongo").setView(
    [39.77318158925923, 19.996653342328425],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.77318158925923, 19.996653342328425]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".tongo-sail-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

window.addEventListener("load", () => {
  const map = L.map("pasqyra").setView(
    [39.77318158925923, 19.996653342328425],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.77318158925923, 19.996653342328425]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".pasqyra-sail-button").addEventListener("click", () => {
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
