// create an array of show objects
const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East ",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge ",
    location: "San Francisco, CA ",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA ",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];

function displayShowsList() {
    // clear the existing shows from the list
    const container = document.querySelector(".shows-list");
    container.innerHTML = "";
  
    // use forEach to create a show item for each show
    shows.forEach((show) => {
      displayShow(show);
    });
  }
  
  // refactor into a function
  function displayShow(show) {
    /* Always these same 5 steps */
    // 1. select our container element (.song-list)
    const container = document.querySelector(".shows-list");
  
    // 2. create the elements that make up the song, with their classes
    const showElement = document.createElement("li");
  
    // 3. add classes and content
    showElement.classList.add("show");
  
    // 4. Create inner elements by repeating steps 2-4
    const dateHeaderElement = document.createElement("h4");
    dateHeaderElement.classList.add("show__date-header");
    dateHeaderElement.innerText = "DATE";
    showElement.appendChild(dateHeaderElement);

    const dateElement = document.createElement("p");
    dateElement.classList.add("show__date");
    dateElement.innerText = show.date;
    showElement.appendChild(dateElement);

    const venueHeaderElement = document.createElement("h4");
    venueHeaderElement.classList.add("show__venue-header");
    venueHeaderElement.innerText = "VENUE";
    showElement.appendChild(venueHeaderElement);

    const venueElement = document.createElement("p");
    venueElement.classList.add("show__venue");
    venueElement.innerText = show.venue;
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
  
    // const artistElement = document.createElement("div");
    // artistElement.classList.add("song__details");
    // artistElement.innerText = `by ${show.artist}`;
    // showElement.appendChild(artistElement);
  
    // 5. append the element to the page
    container.appendChild(showElement);
  }

  displayShowsList();