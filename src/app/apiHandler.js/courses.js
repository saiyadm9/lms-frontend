import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/getcourses`;

export const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};
