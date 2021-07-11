import React from "react";
import"./Key.css";

const Key = (props) => {
  return (
    <div className="drum-pad col-3">
      {props.btn}
      <audio src={props.url} id={props.btn} />
    </div>
  );
};

export default Key;
