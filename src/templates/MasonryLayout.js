import React from "react";
import Masonry from "react-masonry-css";
import "./MasonryCss.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryLayout = ({ children }) => (
  <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {children}
  </Masonry>
);

export default MasonryLayout;