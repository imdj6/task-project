import React from "react";

function BigCard(props) {
  return (
    <div
      className="w-full rounded-md  md:w-1/2 justify-between items-center p-3 flex md:p-10"
      style={{ backgroundColor: props.color==="first"?"#FFDE59":"#D1A3FF"}}
    >
      <div className="space-x-1 md:space-y-3">
        <div className="text-xl md:text-4xl font-bold">{props.number}</div>
        <div className="text-lg md:text-2xl">{props.header}</div>
        <div>{props.more}</div>
      </div>
      <div className="">
        <img src={props.img} alt="img" />
      </div>
    </div>
  );
}

export default BigCard;
