import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function PortfolioItem() {
  const arr = [
    "https://www.youtube.com/embed/gPN79-MB7K0?si=wvkDar55StLvZrhS",
    "https://www.youtube.com/embed/z-mtQib9kUE?si=yzDK16-vSLZ3Qsvs",
    "https://www.youtube.com/embed/rQldIiY24EY?si=B0yFIN2DImlgz_4_",
  ];
  const { portfolioId } = useParams();
  const navigate = useNavigate();
  const convert = portfolioId - 1;
  return (
    <div>
      <button
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        BACK
      </button>
      <br />
      <br />{" "}
      <iframe
        width="1280"
        height="640"
        src={arr[convert]}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default PortfolioItem;
