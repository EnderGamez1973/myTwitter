import React from "react";
import { GrSearch } from "react-icons/gr";
import { Tweet } from "react-tweet";
import "react-widgets/styles.css";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="Widgets">
      <div className="WidgetsInput">
        <GrSearch className="WidgetsSearchIcon" />
        <input type="text" placeholder="Search on Twitter" className="" />
      </div>
      <div className="WidgetsMainContainer">
        <h3>Whats Happing</h3>
        <Tweet Id="1711497568008433731" />;
      </div>
    </div>
  );
};
export default Widgets;
