const axios = require("axios");

const updateConnector = async (id, data, token) => {
  let result;
  const headers = {
    "Content-Type": "application/json",
    "X-access-token": token,
  };
  await axios
    .post(`http://13.235.55.86/api/v1/connector/update/${id}`, data, {
      headers,
    })
    .then(function (response) {
      console.log("response", response);
      result = response.data;
    })
    .catch(function (error) {
      console.log("error while update connector", error);
      return error;
    });
  return result;
};

export default updateConnector;
