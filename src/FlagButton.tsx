import React from "react";

interface FlagButtonProps {
    name: string,
  }

function FlagButton(props: FlagButtonProps) {
  return (
    <div>
        <a href="#">{props.name}</a>
    </div>
  );
}

export default FlagButton;
