import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const Theme = () => {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();
  const themeChange = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <button
        style={{ margin: "auto", display: "block" }}
        onClick={themeChange}
      >
        Change theme
      </button>
    </div>
  );
};

export default Theme;
