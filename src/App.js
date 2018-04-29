import React, { Component } from 'react';
import styles from './App.module.css';
import Link from './components/link/Link';
import Button from './components/button/Button';
import Header from './components/header/Header';
import TeamPanel from './components/teams/TeamPanel';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TeamPanel/>
        <div className={styles.App}>
          <h6>header 6</h6>
          <h5>header 5</h5>
          <h4>header 4</h4>
          <h3>header 3</h3>
          <h2>header 2</h2>
          <h1>header 1</h1>
          <ul className={styles.buttonList}>
            <li style={{ fontSize: '14px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
            <li style={{ fontSize: '16px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
            <li style={{ fontSize: '18px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
            <li style={{ fontSize: '20px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
            <li style={{ fontSize: '22px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
            <li style={{ fontSize: '24px' }}>
              <Link type="light" text="hello world, bling"/>
            </li>
          </ul>
          <ul className={styles.buttonsList}>
            <li style={{ fontSize: '10px' }}>
              <Button text="press here"/>
            </li>
            <li style={{ fontSize: '14px' }}>
              <Button text="press here"/>
            </li>
            <li style={{ fontSize: '16px' }}>
              <Button text="press here"/>
            </li>
            <li style={{ fontSize: '18px' }}>
              <Button text="press here"/>
            </li>
            <li style={{ fontSize: '20px' }}>
              <Button text="press here"/>
            </li>
            <li style={{ fontSize: '22px' }}>
              <Button text="press here"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
