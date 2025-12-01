import React from "react";

const Loading = () => {
  return (
    <div style={style}>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-1)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animationName: "spin",
  animationDuration: "1s",
  animationIterationCount: "infinite",
};
