import React, { useEffect } from "react";

export const PopupAdmin = ({ isActive, setIsActive, children }) => {
  const handleEscape = (e) => {
    if (e.keyCode == "27") {
      setIsActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEscape, true);
    return () => {
      window.removeEventListener("keydown", handleEscape, true);
    };
  }, []);
  return (
    <div className={isActive ? "popup-admin active" : "popup-admin"}>
      <div className="container popup-reg-container">
        <div className="popup-reg__inner">
          <div className="popup-reg__card">
            <div
              className={
                isActive
                  ? "popup-admin__card-inner active"
                  : "popup-admin__card-inner"
              }
       ы     >
              <button
                onClick={() => setIsActive(false)}
                className="close-card reg-close"
              ></button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

