const axios = require("axios");

const deleteConnector = async (id, token) => {
  let result;
  const headers = {
    "Content-Type": "application/json",
    "X-access-token": token,
  };
  await axios
    .delete(`http://13.235.55.86/api/v1/connector/delete/${id}`, {
      headers,
    })
    .then(function (response) {
      console.log("response", response);
      result = response.data;
    })
    .catch(function (error) {
      console.log("error while delete connector", error);
      return error;
    });
  return result;
};

export default deleteConnector;
