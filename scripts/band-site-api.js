const url = "https://project-1-api.herokuapp.com/";
const apiKey = "96c177ab-caf8-42cf-b5cf-6861358ad7a5";
// ?api_key=<4339d897-1305-4029-a322-41e80aa78f8b>

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = url;
  }

  async getComments() {
    return await axios
      .get(`${this.baseUrl}comments?api_key=${apiKey}`)
      .then((response) => {
        // console.log(response.data);
        return response.data;
      });
  }

  async postComment(newComment) {
    const userName = newComment.userName.value;
    const userComment = newComment.userComment.value;

    const noDateComment = {
      name: userName,
      comment: userComment,
    };

    return await axios
      .post(`${this.baseUrl}comments?api_key=${apiKey}`, noDateComment)
      .then((response) => {
        console.log(response);
        return response;
      });
  }

  async getShows() {
    return await axios
    .get(`${this.baseUrl}showdates?api_key=${apiKey}`)
    .then((response) => {
      console.log(response.data);
      return response;
    });
  }
}

export default BandSiteApi;
export { apiKey };
// console.log(apiA);
// console.log(apiAComments)

// apiA.fetchComments();
