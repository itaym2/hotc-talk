import * as React from "react";
import styles from '../betFormStyles';

const BetForm = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.teamsContainer}>
        <div id="team-a">
          <img />
          <p>England</p>
          <input type="text" style={styles.scoreInput} />
        </div>
        <p>vs</p>
        <div id="team-b">
          <img />
          <p>Croatia</p>
          <input type="text" style={styles.scoreInput} />
        </div>
      </div>
      <button style={styles.saveButton}>Save</button>
    </div>
  );
};

export default BetForm;
