import BandSiteApi, { apiKey } from "./band-site-api.js";

const apiA = new BandSiteApi(apiKey);

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const userTimeStamp = `${month}/${day}/${year}`;

  return userTimeStamp;
}

function displayShow(show) {

  const container = document.querySelector(".shows-list");

  const showElement = document.createElement("li");

  showElement.classList.add("show");

  const dateHeaderElement = document.createElement("h4");
  dateHeaderElement.classList.add("show__date-header");
  dateHeaderElement.innerText = "DATE";
  showElement.appendChild(dateHeaderElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("show__date");
  const formattedDate = formatDate(new Date(show.date));
  dateElement.innerText = formattedDate;
  showElement.appendChild(dateElement);

  const venueHeaderElement = document.createElement("h4");
  venueHeaderElement.classList.add("show__venue-header");
  venueHeaderElement.innerText = "VENUE";
  showElement.appendChild(venueHeaderElement);

  const venueElement = document.createElement("p");
  venueElement.classList.add("show__venue");
  venueElement.innerText = show.place;
  showElement.appendChild(venueElement);

  const locationHeaderElement = document.createElement("h4");
  locationHeaderElement.classList.add("show__location-header");
  locationHeaderElement.innerText = "LOCATION";
  showElement.appendChild(locationHeaderElement);

  const locationElement = document.createElement("p");
  locationElement.classList.add("show__location");
  locationElement.innerText = show.location;
  showElement.appendChild(locationElement);

  const buyTicketsElement = document.createElement("button");
  buyTicketsElement.classList.add("show__buy-tickets");
  buyTicketsElement.value = "BUY TICKETS";
  buyTicketsElement.type = "submit";
  showElement.appendChild(buyTicketsElement);

  container.appendChild(showElement);
}

async function displayShowsList() {
  const currentShows = await apiA.getShows();
  console.log(currentShows);

  const container = document.querySelector(".shows-list");
  container.innerHTML = "";

  currentShows.data.forEach((show) => {
    displayShow(show);
  });
}

displayShowsList();
