// api.js
import axios from "axios";

export const getCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all", {
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    // Map the response data to the desired format
    return response.data.map((country) => ({
      code: country.cca2,
      name: country.name.common,
    }));
  } catch (error) {
    console.error("Error fetching countries:", error);
    // Return an empty array or handle the error as needed
    return [];
  }
};
