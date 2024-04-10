window.addEventListener("load", () => {
  const map = L.map("katerishujt").setView(
    [39.77429164873549, 19.993849215343513],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.77429164873549, 19.993849215343513]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document
    .querySelector(".katerishujt-button")
    .addEventListener("click", () => {
      navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    });
});

window.addEventListener("load", () => {
  const map = L.map("kepmerli").setView(
    [39.74900065802942, 19.975660411739845],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.74900065802942, 19.975660411739845]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".kepmerli-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});



window.addEventListener("load", () => {
  const map = L.map("rameras").setView(
    [39.74900065802942, 19.975660411739845],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.74900065802942, 19.975660411739845]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".rameras-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

window.addEventListener("load", () => {
  const map = L.map("gjiriiartes").setView(
    [39.80011194356261, 20.001639772924076],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.80011194356261, 20.001639772924076]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document
    .querySelector(".gjiriiartes-button")
    .addEventListener("click", () => {
      navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
    });
});

window.addEventListener("load", () => {
  const map = L.map("paradise").setView(
    [39.76804182273829, 19.995584410208682],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.76804182273829, 19.995584410208682]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".paradise-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

window.addEventListener("load", () => {
  const map = L.map("poda").setView(
    [39.774740515947705, 20.001900772792094],
    12
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([39.774740515947705, 20.001900772792094]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".poda-button").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
  var navLinks = document.querySelectorAll(".maina");
  navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add the "active" class to the current page link
    }
  });
  console.log(currentPage)
});
