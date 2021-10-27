import React from "react";
import "./detail-label.css";

export const DetailLabel = (props) => {
  return (
    <div className="detail-label">
      {props.price === true ? (
        <h4>&#8364; {props.mainText}</h4>
      ) : (
        <h4>{props.mainText}</h4>
      )}
      <p>{props.subText}</p>
    </div>
  );
};
