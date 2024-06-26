import axios from "axios";

const BASE_URL = "https://api.github.com/users/supreetsingh247";

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchUserRepos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(error + "\n Please try again");
    throw error;
  }
};
