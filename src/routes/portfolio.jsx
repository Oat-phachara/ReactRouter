import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div id="port">
      <Link to="/portfolio/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARiCyT_yxBVFAxXX6b8fO8UGjRb3waoG1fr39ydSqDA&s"
          alt=""
        />
      </Link>
      <Link to="/portfolio/2">
        <img
          src="https://upload.wikimedia.org/wikipedia/th/5/52/The_Wall_Song_%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87.png"
          alt=""
        />
      </Link>
      <Link to="/portfolio/3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTFBvdaceOeWnIT7t9M1IVcYu2TMBXTMeAoWqiCKDWw&s"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Portfolio;
