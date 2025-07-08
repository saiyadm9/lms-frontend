"use client";
import { useEffect, useState } from "react";
import { Trash2, CheckCircle, XCircle, ClipboardCheck, X, Pencil, Save, UserPlus } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
	const [newLinkValue, setNewLinkValue] = useState("");
	const [addingLinkIndex, setAddingLinkIndex] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserCourses, setSelectedUserCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newStudentModalOpen, setNewStudentModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`, { withCredentials: true });
        setUsers(usersRes.data);

        const coursesRes = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/getcourses`, { withCredentials: true });
        setCourses(coursesRes.data);
      } catch (err) {
        setError("Failed to load users or courses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddStudent = async () => {
    try {
      setAdding(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        { ...newStudent },
        { withCredentials: true }
      );

      setUsers(prev => [...prev, data.user || data]); // Adjust based on your backend return
      toast.success("Student added");
      setNewStudent({ name: "", email: "", phone: "", address: "" });
      setNewStudentModalOpen(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to add student");
    } finally {
      setAdding(false);
    }
  };

  const openEditModal = (user) => {
    setSelectedUser({ ...user, editingPhone: false, editingAddress: false });
    setSelectedUserCourses(user.courses || []);
    setIsModalOpen(true);
  };

  const handleCourseChange = (index, field, value) => {
    const updated = [...selectedUserCourses];
    updated[index][field] = value;
    setSelectedUserCourses(updated);
  };

  const handleLinkChange = (courseIndex, linkIndex, value) => {
    const updated = [...selectedUserCourses];
    updated[courseIndex].links[linkIndex] = value;
    setSelectedUserCourses(updated);
  };

  const addCourse = () => {
    setSelectedUserCourses([...selectedUserCourses, { courseId: "", courseName: "", links: [] }]);
  };

  const removeCourse = (index) => {
    const updated = [...selectedUserCourses];
    updated.splice(index, 1);
    setSelectedUserCourses(updated);
  };

  const addLink = (index) => {
		setAddingLinkIndex(index);
		setNewLinkValue("");
	};

	const confirmAddLink = () => {
		if (!newLinkValue.trim()) return toast.error("Link cannot be empty");
		const updated = [...selectedUserCourses];
		updated[addingLinkIndex].links.push(newLinkValue.trim());
		setSelectedUserCourses(updated);
		setAddingLinkIndex(null);
		setNewLinkValue("");
	};

  const removeLink = (courseIndex, linkIndex) => {
    const updated = [...selectedUserCourses];
    updated[courseIndex].links.splice(linkIndex, 1);
    setSelectedUserCourses(updated);
  };

  const handleSave = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users/${selectedUser._id}`, {
        courses: selectedUserCourses,
        phone: selectedUser.phone,
        address: selectedUser.address,
      }, { withCredentials: true });

      toast.success("User updated successfully");
      const updatedUsers = users.map((user) =>
        user._id === selectedUser._id
          ? { ...user, courses: selectedUserCourses, phone: selectedUser.phone, address: selectedUser.address }
          : user
      );
      setUsers(updatedUsers);
      setIsModalOpen(false);
    } catch (err) {
      toast.error("Failed to update user");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <>
      <Head><meta name="robots" content="noindex, nofollow" /></Head>
      <div className="p-6">
        <Toaster position="top-right" />
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Users and Course Management</h1>
            <button onClick={() => setNewStudentModalOpen(true)} className="btn btn-warning flex gap-2 items-center">
              <UserPlus size={18} /> Add new Student
            </button>
          </div>

          <table className="table w-full border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Assigned Courses</th>
                <th className="p-3 text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover align-top">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">
                    {user.courses?.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {user.courses.map((course, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                            {course.courseName}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500">No courses assigned</span>
                    )}
                  </td>
                  <td className="p-3">
                    <button className="btn btn-sm btn-info" onClick={() => openEditModal(user)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Add Student Modal */}
        {newStudentModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-2xl space-y-4">
              <h2 className="text-xl font-semibold">Add New Student</h2>

              {["name", "email", "phone", "address"].map((field) => (
                <div key={field} className="form-control">
                  <label className="label font-medium capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={newStudent[field]}
                    onChange={(e) => setNewStudent({ ...newStudent, [field]: e.target.value })}
                    className="input input-bordered"
                    placeholder={`Enter ${field}`}
                    required={field === "name" || field === "email"}
                  />
                </div>
              ))}

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  onClick={() => setNewStudentModalOpen(false)}
                  className="btn bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddStudent}
                  disabled={adding}
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  {adding ? "Adding..." : "Add Student"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Existing Edit Modal remains untouched and works fine */}
				{isModalOpen && selectedUser && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
						<div className="bg-white p-6 rounded-2xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
							<h2 className="text-2xl font-bold text-gray-800">Edit Student</h2>

							{/* User Info */}
							<div className="grid gap-4">
								<div className="grid grid-cols-3 items-center gap-2">
									<span className="text-gray-600 font-medium">Name</span>
									<span className="col-span-2">{selectedUser.name}</span>
								</div>

								<div className="grid grid-cols-3 items-center gap-2">
									<span className="text-gray-600 font-medium">Email</span>
									<span className="col-span-2">{selectedUser.email}</span>
								</div>

								<div className="grid grid-cols-3 items-center gap-2">
									<span className="text-gray-600 font-medium">Phone</span>
									<div className="col-span-2 flex items-center gap-2">
										{selectedUser.editingPhone ? (
											<input
												type="text"
												value={selectedUser.phone || ""}
												onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
												onBlur={() => setSelectedUser({ ...selectedUser, editingPhone: false })}
												className="input input-sm input-bordered w-full"
												autoFocus
											/>
										) : (
											<>
												<span>{selectedUser.phone || "—"}</span>
												<button
													onClick={() => setSelectedUser({ ...selectedUser, editingPhone: true })}
													className="text-blue-600"
													title="Edit phone"
												>
													<Pencil size={16} />
												</button>
											</>
										)}
									</div>
								</div>

								<div className="grid grid-cols-3 items-center gap-2">
									<span className="text-gray-600 font-medium">Address</span>
									<div className="col-span-2 flex items-center gap-2">
										{selectedUser.editingAddress ? (
											<input
												type="text"
												value={selectedUser.address || ""}
												onChange={(e) => setSelectedUser({ ...selectedUser, address: e.target.value })}
												onBlur={() => setSelectedUser({ ...selectedUser, editingAddress: false })}
												className="input input-sm input-bordered w-full"
												autoFocus
											/>
										) : (
											<>
												<span>{selectedUser.address || "—"}</span>
												<button
													onClick={() => setSelectedUser({ ...selectedUser, editingAddress: true })}
													className="text-blue-600"
													title="Edit address"
												>
													<Pencil size={16} />
												</button>
											</>
										)}
									</div>
								</div>
							</div>

							{/* Course Edit Section */}
							<div className="space-y-4">
								{selectedUserCourses.map((course, index) => (
									<div key={index} className="border rounded-lg p-4 space-y-3 bg-gray-50">
										<div className="flex justify-between items-center">
											<select
												value={course.courseId}
												onChange={(e) => {
													const selected = courses.find((c) => c._id === e.target.value);
													handleCourseChange(index, "courseId", selected._id);
													handleCourseChange(index, "courseName", selected.name);
												}}
												className="input input-bordered w-full"
											>
												<option value="">Select Course</option>
												{courses.map((c) => (
													<option key={c._id} value={c._id}>{c.name}</option>
												))}
											</select>
											<button onClick={() => removeCourse(index)} className="text-red-600 hover:text-red-800 ml-2" title="Remove course">
												<Trash2 size={18} />
											</button>
										</div>

										<div className="space-y-2">
											{course.links.length > 0 && (
												<div className="ml-2 mt-2 space-y-2">
													{course.links.map((link, linkIndex) => (
														<div key={linkIndex} className="flex gap-2 items-center">
															<span
																onClick={() => {
																	navigator.clipboard.writeText(link);
																	toast.success("Link copied to clipboard!");
																}}
																className="cursor-pointer text-blue-600 hover:underline truncate w-full"
																title="Click to copy"
															>
																{link}
															</span>
															<button
																onClick={() => removeLink(index, linkIndex)}
																className="text-red-500 text-lg"
																title="Remove link"
															>
																<XCircle size={20} />
															</button>
														</div>
													))}
												</div>
											)}

											{addingLinkIndex === index ? (
												<div className="flex gap-2 items-center mt-2 ml-2">
													<input
														type="text"
														value={newLinkValue}
														onChange={(e) => setNewLinkValue(e.target.value)}
														className="input input-sm input-bordered w-full"
														placeholder="Enter new link"
													/>
													<button
														onClick={confirmAddLink}
														className="text-green-600 hover:text-green-800"
														title="Confirm link"
													>
														<CheckCircle size={20} />
													</button>
													<button
														onClick={() => setAddingLinkIndex(null)}
														className="text-red-500 hover:text-red-700"
														title="Cancel"
													>
														<XCircle size={20} />
													</button>
												</div>
											) : (
												<button
													onClick={() => addLink(index)}
													className="text-blue-600 hover:underline text-sm font-medium ml-2 mt-2"
												>
													+ Add Link
												</button>
											)}
										</div>

									</div>
								))}

								<button
									onClick={addCourse}
									className="text-blue-600 hover:underline text-sm font-medium"
								>
									+ Add Course
								</button>
							</div>

							{/* Modal Buttons */}
							<div className="mt-6 flex justify-end space-x-4">
								<button
									onClick={handleSave}
									className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
								>
									<Save size={16} /> Save
								</button>
								<button
									onClick={() => setIsModalOpen(false)}
									className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 flex items-center gap-2"
								>
									<X size={16} /> Cancel
								</button>
							</div>
						</div>
					</div>
				)}
      </div>
    </>
  );
}
