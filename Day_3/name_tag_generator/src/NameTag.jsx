import { useState } from "react";

function NameTag() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleDownload = () => {
    const formattedTag = `
--- NAME TAG ---
Hello, my name is
${name || "Your Name"}
${title || "Your Title"}
${company || "Your Company"}
`;
    alert(formattedTag);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>⛽ Name Tag Generator</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Enter your job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={tagStyle}>
        <h3>--- NAME TAG ---</h3>
        <p>Hello, my name is</p>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>
          {name || "Your Name"}
        </h2>
        <p>{title || "Your Title"}</p>
        <p style={{ fontStyle: "italic" }}>{company || "Your Company"}</p>
      </div>

      <button onClick={handleDownload} style={buttonStyle}>
        🧰 Download
      </button>
    </div>
  );
}

// Simple inline styles
const inputStyle = {
  padding: "10px",
  margin: "5px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  width: "220px",
};

const tagStyle = {
  border: "2px solid #333",
  borderRadius: "20px",
  backgroundColor: "#fef3c7",
  display: "inline-block",
  padding: "20px 40px",
  marginTop: "15px",
  textAlign: "center",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#2563eb",
  color: "black",
  cursor: "pointer",
  fontSize: "16px",
};

export default NameTag;
