//import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import { AuthProvider } from "./context/AuthContext";
//import ProtectedRoute from "./components/ProtectedRoute";
//import Navbar from "./components/Navbar";
//import Login from "./pages/Login";
//import Register from "./pages/Register";
//
//// Dashboard components
//function StudentDashboard() {
//  return <h2>Student Dashboard</h2>;
//}
//
//function InstructorDashboard() {
//  return <h2>Instructor Dashboard</h2>;
//}
//
//function AdminDashboard() {
//  return <h2>Admin Dashboard</h2>;
//}
//
//export default function App() {
//  return (
//    <AuthProvider>
//      <BrowserRouter>
//        <Navbar /> {/* Add Navbar here */}
//        <Routes>
//          {/* Default route */}
//          <Route path="/" element={<Navigate to="/login" />} />
//
//          {/* Public routes */}
//          <Route path="/login" element={<Login />} />
//          <Route path="/register" element={<Register />} />
//
//          {/* Protected routes */}
//          <Route
//            path="/student"
//            element={
//              <ProtectedRoute role="STUDENT">
//                <StudentDashboard />
//              </ProtectedRoute>
//            }
//          />
//          <Route
//            path="/instructor"
//            element={
//              <ProtectedRoute role="INSTRUCTOR">
//                <InstructorDashboard />
//              </ProtectedRoute>
//            }
//          />
//          <Route
//            path="/admin"
//            element={
//              <ProtectedRoute role="ADMIN">
//                <AdminDashboard />
//              </ProtectedRoute>
//            }
//          />
//
//          {/* 404 page */}
//          <Route path="*" element={<h1>Page Not Found</h1>} />
//        </Routes>
//      </BrowserRouter>
//    </AuthProvider>
//  );
//}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar /> {/* Navbar always visible */}
        <Routes>
          {/* Default route redirects to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected dashboard routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role="STUDENT">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute role="INSTRUCTOR">
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 fallback */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
