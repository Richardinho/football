import React, { Component } from 'react';
import styles from './App.module.css';
import Link from './components/link/Link';
import Button from './components/button/Button';

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.App}>
          <h1>Football</h1>
          <Link type="light" text="hello world"/>
          <div className={styles.buttonContainer}>
            <Button text="press here"/>
          </div>
          <div style={{ fontSize: '40px'}}>
            <Button text="press here"/>
          </div>
        </div>
        <Link type="dark" text="this is a dark link"/>
      </div>
    );
  }
}

export default App;
