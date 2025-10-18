// Profile.jsx
import profilePic from "./assets/download (2).jpeg";

function Profile() {
  return (
    <div
      style={{
        width: "300px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        border: "2px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={profilePic}
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "15px",
          objectFit: "cover",
        }}
      />
      <h2>Odeleye Rukayat Ajoke</h2>
      <h3>Student Developer</h3>
      <p>
        I’m passionate about building interactive web applications and learning modern
        technologies.
      </p>
    </div>
  );
}

export default Profile;
