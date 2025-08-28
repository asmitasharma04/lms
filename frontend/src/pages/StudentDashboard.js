import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8080/student/courses", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses", err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) return <p className="loading">Loading courses...</p>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}</h2>
      <h3>Your Courses</h3>
      {courses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h4>{course.name}</h4>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
