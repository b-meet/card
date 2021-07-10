import React from "react";
import reactDom from "react-dom";
import People from "./people";
import "./index.css";

function BirthdayList() {
  return (
    <article className="wrapper">
      <People />
    </article>
  );
}

reactDom.render(<BirthdayList />, document.getElementById("root"));
