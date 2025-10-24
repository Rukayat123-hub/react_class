import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);

    // Disable for 1 second to prevent spam
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={handleClick}
        disabled={disabled}
        style={{
          backgroundColor: liked ? "#ff4d6d" : "#e0e0e0",
          color: liked ? "white" : "black",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          fontSize: "18px",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "0.3s ease",
        }}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        {likeCount} {likeCount === 1 ? "like" : "likes"}
      </p>
    </div>
  );
}

export default LikeButton;
