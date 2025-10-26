import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear user & token
    navigate("/login"); // Redirect to login page
  };

  return (
    <button style={{ background: "#3a512e" }} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
