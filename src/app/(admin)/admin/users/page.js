"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserCourses, setSelectedUserCourses] = useState([]);
  const [selectedUserLinks, setSelectedUserLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`,
          { withCredentials: true }
        );
        setUsers(usersRes.data);

        const assignedRes = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/getassigned-courses`,
          { withCredentials: true }
        );
        setAssignedCourses(assignedRes.data.assignedCourses);
      } catch (err) {
        console.error(err);
        setError("Failed to load users or assigned courses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openCourseModal = async (user) => {
    setSelectedUser(user);
    const userAssigned = assignedCourses.find(
      (item) => item.user._id === user._id
    );
    setSelectedUserCourses(
      userAssigned ? userAssigned.courses.map((c) => c._id) : []
    );
    setIsModalOpen(true);

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/getcourses`,
        { withCredentials: true }
      );
      setCourses(res.data);
    } catch (err) {
      toast.error("Failed to load courses");
    }
  };

  const openClassroomModal = (user) => {
    setSelectedUser(user);
    setSelectedUserLinks(user.classroomLinks || []);
    setIsLinkModalOpen(true);
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
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${selectedUser._id}/courses`,
        { courses: selectedUserCourses },
        { withCredentials: true }
      );

      const updatedCourses = courses.filter((course) =>
        selectedUserCourses.includes(course._id)
      );

      setAssignedCourses((prev) =>
        prev.map((item) =>
          item.user._id === selectedUser._id
            ? { ...item, courses: updatedCourses }
            : item
        )
      );

      toast.success("Courses updated successfully");
      setIsModalOpen(false);
    } catch (err) {
      toast.error("Failed to update courses");
    }
  };

  const handleSaveLinks = async () => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${selectedUser._id}/classroom-links`,
        { links: selectedUserLinks },
        { withCredentials: true }
      );

      setUsers((prev) =>
        prev.map((u) =>
          u._id === selectedUser._id
            ? { ...u, classroomLinks: selectedUserLinks }
            : u
        )
      );

      toast.success("Classroom links updated");
      setIsLinkModalOpen(false);
    } catch (err) {
      toast.error("Failed to update links");
    }
  };

  const handleLinkChange = (index, value) => {
    const updated = [...selectedUserLinks];
    updated[index] = value;
    setSelectedUserLinks(updated);
  };

  const addNewLinkField = () => {
    setSelectedUserLinks([...selectedUserLinks, ""]);
  };

  const removeLinkField = (index) => {
    const updated = [...selectedUserLinks];
    updated.splice(index, 1);
    setSelectedUserLinks(updated);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-5">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="p-6">
        <Toaster position="top-right" />
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">
              Users and Course Management
            </h1>
            <Link href="/register" className="btn btn-warning px-5">
              Add new Student
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full border rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Course Count</th>
                  <th className="p-3">Assigned Courses</th>
                  <th className="p-3">Classroom Links</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const userAssigned = assignedCourses.find(
                    (item) => item.user._id === user._id
                  );
                  return (
                    <tr key={user._id} className="hover">
                      <td className="p-3">{user.name}</td>
                      <td
                        className="p-3 text-blue-600 hover:underline cursor-pointer"
                        onClick={() => openClassroomModal(user)}
                      >
                        {user.email}
                      </td>
                      <td className="p-3">{user.role}</td>
                      <td className="p-3">
                        {user.role === "admin" ? null : (
                          <button
                            onClick={() => openCourseModal(user)}
                            className="btn btn-sm btn-outline btn-info"
                          >
                            {userAssigned?.courses?.length || 0}
                          </button>
                        )}
                      </td>
                      <td>
                        <div className="text-sm space-y-1">
                          {user.role === "admin" ? null : userAssigned?.courses
                              ?.length > 0 ? (
                            userAssigned?.courses.map((course) => (
                              <span
                                key={course._id}
                                className="inline-block bg-gray-100 text-gray-800 px-2 py-1 mx-1 rounded"
                              >
                                {course.name}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-500">No courses</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="text-sm space-y-1">
                          {user.role === "admin" ? null : user?.classroomLinks
                              ?.length > 0 ? (
                            user?.classroomLinks.map((link, idx) => (
                              <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-600 hover:underline bg-gray-100 px-2 py-1 mx-1 rounded"
                              >
                                Link {idx + 1}
                              </a>
                            ))
                          ) : (
                            <span className="text-gray-500">No link found</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Modal */}
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
              <div className="text-center border-b pb-4">
                <h2 className="text-xl font-semibold">Assign Courses</h2>
                <p className="text-blue-600 font-medium">{selectedUser.name}</p>
                <p className="text-gray-600 text-sm">{selectedUser.email}</p>
              </div>
              <p className="my-4 text-gray-700">
                Showing{" "}
                <span className="text-blue-600 font-semibold">
                  {filteredCourses.length}
                </span>{" "}
                available course{filteredCourses.length !== 1 ? "s" : ""}.
              </p>
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full p-2 border rounded-lg mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="border-t pt-4 max-h-60 overflow-y-auto space-y-3">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <label
                      key={course._id}
                      className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        checked={selectedUserCourses.includes(course._id)}
                        onChange={() => handleCourseSelection(course._id)}
                      />
                      <div>
                        <div className="font-medium">{course.name}</div>
                        <div className="text-sm text-blue-500">
                          {course.category}
                        </div>
                      </div>
                    </label>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No courses available
                  </p>
                )}
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleSaveCourses}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Classroom Link Modal */}
        {isLinkModalOpen && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
              <h2 className="text-xl font-semibold text-center mb-4">
                Update Classroom Links
              </h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {selectedUserLinks.map((link, idx) => (
                  <div key={idx} className="flex space-x-2 items-center">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => handleLinkChange(idx, e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    <button
                      onClick={() => removeLinkField(idx)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addNewLinkField}
                className="mt-4 text-blue-600 hover:underline"
              >
                + Add another link
              </button>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleSaveLinks}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsLinkModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
