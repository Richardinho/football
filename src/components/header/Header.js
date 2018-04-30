import React from 'react';
import { connect } from 'react-redux';

const Header = ({title, criteria}) => (
  <div>The header{title}{JSON.stringify(criteria)}</div>
);

const mapStateToProps = (state) => {
  return {
    title: state.header.title ,
    criteria: state.criteria
  };
};
export default connect(mapStateToProps)(Header);
