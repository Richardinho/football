import React from 'react';
import styles from './styles.module.css';

export default ({text}) => (
  <button className={styles.buttonPrimary}>{text}</button>
);
