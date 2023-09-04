import { useState } from "react";

export const Expandable = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container-expandable">
      <div className="title-expandable" onClick={() => setOpen(!open)}>
        {title}
        <div>+</div>
      </div>
      <div
        className="content-expandable"
        style={{ display: open == true ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Expandable;
