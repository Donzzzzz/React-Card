import React from "react";

const card = props => {
  return (
    <div className="container" style={{ padding: 30 }}>
      <h2>Editor's Picks</h2>
      <img src={props.img} alt="" style={{ width: 500, height: 500 }} />
      <h3>{props.title}</h3>
      <h5>{props.subTitle}</h5>
    </div>
  );
};

export default card;
