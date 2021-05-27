const axios = require("axios");

const tokenService = async (data) => {
  let result;
  await axios
    .post("http://13.235.55.86/api/v1/user/auth", data)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.log("error while getting jwt token", error);
      return error;
    });
  return result;
};

export default tokenService;
