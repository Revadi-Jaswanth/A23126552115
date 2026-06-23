const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZXZhZGluYWdhc2FpamFzd2FudGguMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5MjAyMCwiaWF0IjoxNzgyMTkxMTIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmY1YzAzZTMtNmQxMC00NzVhLTgyNGItODUyNzBhMTI0NTY2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmV2YWRpIG5hZ2Egc2FpIGphc3dhbnRoIiwic3ViIjoiZGNlMWJmMTAtOTQ4Ni00YjM4LWI1NjgtYzhmM2IwMmQ4Y2E2In0sImVtYWlsIjoicmV2YWRpbmFnYXNhaWphc3dhbnRoLjIzLmNzbUBhbml0cy5lZHUuaW4iLCJuYW1lIjoicmV2YWRpIG5hZ2Egc2FpIGphc3dhbnRoIiwicm9sbE5vIjoiYTIzMTI2NTUyMTE1IiwiYWNjZXNzQ29kZSI6Ik1UcXhhciIsImNsaWVudElEIjoiZGNlMWJmMTAtOTQ4Ni00YjM4LWI1NjgtYzhmM2IwMmQ4Y2E2IiwiY2xpZW50U2VjcmV0IjoiZnR0bVRDQnZRQnBFdkpkVCJ9.HzBRMWbmDZJaEZBsr0yvE_aCmFpYJpiSYwz3e2JsIJA";

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    const response =
      await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
          stack,
          level,
          package: packageName,
          message
        },
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`
          }
        }
      );

    console.log(response.data);

  } catch (error) {

    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);

}
}

module.exports = Log;