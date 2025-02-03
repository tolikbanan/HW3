import React from "react";

const LikeDislikeButtons = ({ likeStatus, onLike, onDislike, dislikeIcon }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button onClick={onLike} style={{ transform: likeStatus === "like" ? "scale(1.2)" : "scale(1)" }}>
        <img 
          src={dislikeIcon} 
          alt="Like" 
          style={{
            transform: "rotate(180deg)", 
            width: 24, 
            height: 24, 
            filter: likeStatus === "like" ? "invert(30%) sepia(80%) saturate(500%) hue-rotate(90deg)" : "none"
          }} 
        />
      </button>

      <button onClick={onDislike} style={{ transform: likeStatus === "dislike" ? "scale(1.2)" : "scale(1)" }}>
        <img 
          src={dislikeIcon} 
          alt="Dislike" 
          style={{
            width: 24, 
            height: 24, 
            filter: likeStatus === "dislike" ? "invert(20%) sepia(80%) saturate(500%) hue-rotate(0deg)" : "none"
          }} 
        />
      </button>
    </div>
  );
};

export default LikeDislikeButtons;