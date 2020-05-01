import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryCss.css';
import PropTypes from 'prop-types';

const breakpointColumnsObj = {
  default: 6,
  1800: 5,
  1400: 4,
  1100: 3,
  600: 2,
  300: 1,
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

MasonryLayout.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default MasonryLayout;
