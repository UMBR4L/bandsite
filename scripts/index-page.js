// create an array of comment objects
// const comments = [
//   {
//     name: "Connor Walton",
//     timeStamp: "02/17/2021",
//     commentText:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     timeStamp: "01/09/2021",
//     commentText:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     timeStamp: "12/20/2020",
//     commentText:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

/* HTML Structure
<li class="comment">
    <h5 class="comment__name">Connor Walton</h5>
    <div class="comment__time-stamp">02/17/2021</div>
    <div class="comment__comment-text">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</div>
</li>
*/

// function displayCommentList() {
//   // clear the existing songs from the list
//   const container = document.querySelector(".comment-list");
//   container.innerHTML = "";

//   // use forEach to create a song item for each song
//   comments.forEach((comment) => {
//     displayComment(comment);
//   });
// }

// function displayComment(comment) {
//   // 1. select our container element
//   const container = document.querySelector(".comment-list");

//   // 2. create the elements that make up the comment, with their classes
//   const commentElement = document.createElement("li");

//   // 3. add classes and content
//   commentElement.classList.add("comment");

//   // 4. Create inner elements by repeating steps 2-4
//   const nameDateElement = document.createElement("div");
//   nameDateElement.classList.add("comment__nameDate--container");
//   commentElement.appendChild(nameDateElement);

//   const nameElement = document.createElement("h5");
//   nameElement.classList.add("comment__name");
//   nameElement.innerText = comment.name;
//   nameDateElement.appendChild(nameElement);

//   const timeStampElement = document.createElement("h6");
//   timeStampElement.classList.add("comment__timeStamp");
//   timeStampElement.innerText = comment.timeStamp;
//   nameDateElement.appendChild(timeStampElement);

//   const commentTextElement = document.createElement("p");
//   commentTextElement.classList.add("comment__text");
//   commentTextElement.innerText = comment.commentText;
//   commentElement.appendChild(commentTextElement);

//   // 5. append the element to the page
//   container.appendChild(commentElement);
// }

// displayCommentList();

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

const displayComment = async (comment) => {
  try {
    const currentComments = await apiA.getComments();

    // 1. select our container element
    const container = document.querySelector(".comment-list");

    // 2. create the elements that make up the comment, with their classes
    const commentElement = document.createElement("li");

    // 3. add classes and content
    commentElement.classList.add("comment");

    // 4. Create inner elements by repeating steps 2-4
    const nameDateElement = document.createElement("div");
    nameDateElement.classList.add("comment__nameDate--container");
    commentElement.appendChild(nameDateElement);

    const nameElement = document.createElement("h5");
    nameElement.classList.add("comment__name");
    nameElement.innerText = comment.name;
    nameDateElement.appendChild(nameElement);

    const timeStampElement = document.createElement("h6");
    timeStampElement.classList.add("comment__timeStamp");
    const formattedDate = formatDate(comment.timestamp);
    timeStampElement.innerText = formattedDate;
    nameDateElement.appendChild(timeStampElement);

    const commentTextElement = document.createElement("p");
    commentTextElement.classList.add("comment__text");
    commentTextElement.innerText = comment.comment;
    commentElement.appendChild(commentTextElement);

    // 5. append the element to the page
    container.appendChild(commentElement);
  } catch {
    console.error("error!");
  }
};

const displayCommentList = async () => {
  try {
    const currentComments = await apiA.getComments();
    const container = document.querySelector(".comment-list");
    container.innerHTML = "";

    // use forEach to create a song item for each song
    for (let i = currentComments.length-1; i>=0; i--) {
      displayComment(currentComments[i]);
      console.log(currentComments[i]);
    }
    
    // currentComments.forEach((comment) => {
    //   displayComment(comment);
 } catch {
    console.error("error!");
  }
};

window.addEventListener("load", (e) => {
  displayCommentList();
});

async function submitHandler(event) {
  event.preventDefault();
  // console.log("Form Submitted!");
  await apiA.postComment(event.target);

  // clear the input fields
  var nameInput = document.querySelector(".commentForm__input--name");
  nameInput.value = "Enter your name";
  var commentInput = document.querySelector(".commentForm__input--comment");
  commentInput.value = "Add a new comment";

  displayCommentList();
}

const form = document.getElementById("commentForm");

form.addEventListener("submit", submitHandler);
