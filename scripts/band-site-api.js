const url = "https://project-1-api.herokuapp.com/";
const apiKey = "96c177ab-caf8-42cf-b5cf-6861358ad7a5";
// ?api_key=<4339d897-1305-4029-a322-41e80aa78f8b>

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = url;
  }

  async getComments() {
    // const response = await axios.get(this.apiKey);
    // console.log(response);

    return axios
      .get(
        `${this.baseUrl}comments?api_key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }

  //   let apiA = new BandSiteApi("4339d897-1305-4029-a322-41e80aa78f8b");
  //   let apiAComments = await apiA.getComments();
}

export default BandSiteApi;
export { apiKey };
// console.log(apiA);
// console.log(apiAComments)

// apiA.fetchComments();
