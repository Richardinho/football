import React from 'react';
import styles from './styles.module.css';

export default ({text, type}) => ( type === 'light' ? 
  <a href="" className={styles.light}>{text}</a> : 
  <a href="" className={styles.dark}>{text}</a>
);
