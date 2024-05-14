let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  var lat = 4.9484757918671365;
  var lng = 8.349606353853966;

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 17,
    mapId: "b0f8825471416300",
  });

  // 4.9541231516291555, 8.341361701889552
  // 4.954887872810305, 8.341963557572512
  // 4.953741222848458, 8.342234404994054
  // 4.947773, 8.346835
  // 4.946767, 8.346080
  // 4.9484757918671365, 8.349606353853966;
  // 4.946312, 8.350078
}

// for Map search and functionalities
const MapsearchBar = document.querySelector("#map-search");
const MapsearchBtn = document.querySelector(".map-search button#search-place");

MapsearchBtn.addEventListener("click", async () => {
  let searchValue = MapsearchBar.value;
  const geoCoder = new google.maps.Geocoder();
  let warning = document.querySelector("h2.map-header p.search-warning");

  geoCoder.geocode({ address: searchValue }, (results, stats) => {
    if (stats === "OK") {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      warning.innerText = "Place not found";

      console.log("Not successful because: " + stats);
    }
  });
  warning.innerText = "";
});

initMap();
