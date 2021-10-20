import React from "react";

function Wrapper({ children }) {
  //파라미터로 children 전달
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children} //children 렌더링</div>;
}
export default Wrapper;
