import React from 'react';
import { connect } from 'react-redux';

const Header = ({title}) => (
  <div>The header{title}</div>
);

const mapStateToProps = (state) => {
  return {
    title: state.header.title 
  };
};
export default connect(mapStateToProps)(Header);
