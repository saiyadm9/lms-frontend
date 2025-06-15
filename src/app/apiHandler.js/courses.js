import localCourses from '../../../data/courses';

export const fetchCourses = async () => {
  // Simulate a slight delay like API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localCourses);
    }, 500); // optional: simulate delay
  });
};