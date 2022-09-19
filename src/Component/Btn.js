import React from "react";
import { flexRowCenter } from "../Style/Flex";

function Btn({ children, rounded, customClass }) {
  let classes = "CustomBtn-1 ";
  if (rounded) {
    classes += " rond ";
  }
  return (
    <div className={classes + customClass} style={flexRowCenter}>
      {children}
    </div>
  );
}

export default Btn;
