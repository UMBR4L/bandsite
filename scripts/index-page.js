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

    const container = document.querySelector(".comment-list");

    const commentElement = document.createElement("li");

    commentElement.classList.add("comment");

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

    for (let i = currentComments.length - 1; i >= 0; i--) {
      displayComment(currentComments[i]);
      // console.log(currentComments[i]);
    }

  } catch {
    console.error("error!");
  }
};

async function submitHandler(event) {
  event.preventDefault();
  await apiA.postComment(event.target);

  // clear the input fields
  var nameInput = document.querySelector(".commentForm__input--name");
  nameInput.placeholder = "Enter your name";
  var commentInput = document.querySelector(".commentForm__input--comment");
  commentInput.placeholder = "Add a new comment";

  displayCommentList();
}

const form = document.getElementById("commentForm");

form.addEventListener("submit", submitHandler);

displayCommentList();
