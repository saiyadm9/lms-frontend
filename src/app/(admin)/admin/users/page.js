"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserCourses, setSelectedUserCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openCourseModal = async (user) => {
    setSelectedUser(user);
    setSelectedUserCourses(user.assignedCourses || []);
    setIsModalOpen(true);
    try {
      const response = await axios.get("http://localhost:5010/api/getcourses");
      setCourses(response.data);
    } catch (err) {
      toast.error("Failed to load courses");
    }
  };

  const handleCourseSelection = (courseId) => {
    setSelectedUserCourses((prevCourses) =>
      prevCourses.includes(courseId)
        ? prevCourses.filter((id) => id !== courseId)
        : [...prevCourses, courseId]
    );
  };

  const handleSaveCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${selectedUser._id}/courses`,
        { courses: selectedUserCourses },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(
        users.map((user) =>
          user._id === selectedUser._id
            ? { ...user, assignedCourses: selectedUserCourses }
            : user
        )
      );
      toast.success("Courses updated successfully");
      setIsModalOpen(false);
    } catch (err) {
      toast.error("Failed to update courses");
    }
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-5">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <Toaster position="top-right" />
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Users List</h1>
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Country</th>
                <th className="p-3">Role</th>
                <th className="p-3">Courses</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.location}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => openCourseModal(user)}
                      className="btn btn-sm btn-outline btn-info"
                    >
                      {user.assignedCourses?.length || 0}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
            {/* User Info Section */}
            <div className="text-center border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Assign Courses
              </h2>
              <p className="text-blue-600 font-medium">{selectedUser.name}</p>
              <p className="text-gray-600 text-sm">{selectedUser.email}</p>
            </div>

            {/* Course Count & Search */}
            <p className="my-4 text-gray-700">
              Showing{" "}
              <span className="text-blue-600 font-semibold">
                {filteredCourses.length}
              </span>{" "}
              available course{filteredCourses.length !== 1 ? "s" : ""}.
            </p>
            <input
              type="text"
              placeholder="Search courses by name or grade..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Course List */}
            <div className="border-t pt-4 max-h-60 overflow-y-auto space-y-3">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <label
                    key={course._id}
                    className="flex items-center space-x-3 cursor-pointer bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <input
                      type="checkbox"
                      checked={selectedUserCourses.includes(course._id)}
                      onChange={() => handleCourseSelection(course._id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-medium">
                        {course.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Category: {course.category}
                      </span>
                    </div>
                  </label>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No courses available
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleSaveCourses}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
