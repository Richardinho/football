import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';


class FI extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onFilterItemChange(this.props.filter, this.props.item, event.target.checked); 
  }

  render() {
    return (
      <div className={styles.item}>
        <input 
          checked={this.props.item.selected}
          onChange={this.onChange}
          type="checkbox"/>   
        {this.props.item.displayName}
      </div>
    );   
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterItemChange: (filter, item, selected) => {
      dispatch({ type: 'FILTER_ITEM_CHANGED', filter, item: { ...item, selected } }); 
    }
  }
};

const FilterItem = connect(() => { return {}}, mapDispatchToProps)(FI);

const renderItem = (filterIndex, item, index) => (
  <FilterItem key={index} filter={filterIndex} item={Object.assign(item, { index }) }/>
);

const renderFilter = (filter, index) => {
  return (
    <div key={index}className={styles.filter}>
      { filter.items.map(renderItem.bind(null, index)) } 
    </div> 
  );
}

const Filters = ({criteria}) => (
  <div className={styles.filters}>
    {criteria.map(renderFilter)} 
  </div>
);

const mapStateToProps = (state) => {
  return {
    criteria: state.criteria 
  };
};
export default connect(mapStateToProps)(Filters);
