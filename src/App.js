import React, { Component } from "react";
import styles from "./App.module.css";
import TeamPanel from "./components/teams/TeamPanel";
import Filters from "./components/filters/Filters";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <Filters />
        </div>
        <div className={styles.main}>
          <TeamPanel />
        </div>
      </div>
    );
  }
}

export default App;
