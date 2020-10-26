import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

class FilterItem extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onSelected(this.props.item.key, event.target.checked); 
  }

  render() {
    return (
      <div className={styles.item}>
        <input 
          checked={this.props.item.selected}
          onChange={this.onChange}
          type="checkbox"/>   
        <div className={styles.name}>
          {this.props.item.displayName}
        </div>
      </div>
    );   
  }
}


const Filters = ({items, onSelected}) => (
  <div className={styles.filters}>
    { items.map((item) => {
      return <FilterItem key={item.key} item={item} onSelected={onSelected}/>
    }) } 
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: state.criteria.items 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (key, selected) => {
      dispatch({
        type: 'FILTER_ITEM_CHANGED',
        key,
        selected,
      }); 
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
