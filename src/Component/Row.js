import React from "react";

function Row({ AdditionalClass, id, styles, children }) {
  return (
    <div id={id} className={"row " + AdditionalClass} style={styles}>
      {children}
    </div>
  );
}

export default Row;
