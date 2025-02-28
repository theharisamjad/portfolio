import { useState } from "react";

const Tooltip = ({ text, children, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="position-relative d-inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`position-absolute bg-dark text-white p-2 rounded  shadow ${
            position === "top" ? "bottom-100 mb-2" : "top-100 mt-2"
          }`}
          style={{ whiteSpace: "nowrap", zIndex: 150 }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
