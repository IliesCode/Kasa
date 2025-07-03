import React from "react";
import "./Headpicture.scss";

function Headpicture({ image, title, extraClass = "headHeight" }) {
  return (
    <div className="head">
      <div className={`headPic ${extraClass}`} style={{ backgroundImage: `url(${image})` }}>
        {title && <h2 className="title">{title}</h2>}
      </div>
    </div>
  );
}

export default Headpicture;
