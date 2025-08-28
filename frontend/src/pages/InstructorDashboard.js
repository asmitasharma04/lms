import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./InstructorDashboard.css";

export default function InstructorDashboard() {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get("http://localhost:8080/instructor/classes", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setClasses(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching classes", err);
        setLoading(false);
      }
    };

    fetchClasses();
  }, [user]);

  if (loading) return <p className="loading">Loading classes...</p>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.username}</h2>
      <h3>Your Classes</h3>
      {classes.length === 0 ? (
        <p>No classes assigned yet.</p>
      ) : (
        <div className="classes-grid">
          {classes.map((cls) => (
            <div key={cls.id} className="class-card">
              <h4>{cls.name}</h4>
              <p>{cls.description}</p>
              <p><strong>Students Enrolled:</strong> {cls.studentCount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
