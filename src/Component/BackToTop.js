import React from "react";
import { flexColumn, flexRowCenter } from "../Style/Flex";

function BackToTop(props) {
  const handleBackToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={flexRowCenter}
      className="backToTop click"
      onClick={handleBackToTop}
    >
      <i className="bi bi-chevron-up"></i>
    </div>
  );
}

export default BackToTop;
