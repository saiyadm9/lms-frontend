import axios from "axios";

const API_URL = "http://localhost:5010/api/getcourses";

export const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};
