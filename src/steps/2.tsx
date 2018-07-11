import * as React from "react";
import styles from '../betFormStyles';

interface BetFormProps {
    teamA: string;
    teamB: string;
}

const BetForm: React.SFC<BetFormProps> = ({teamA, teamB}) => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.teamsContainer}>
        <div id="team-a">
          <img />
          <p>{teamA}</p>
          <input type="text" style={styles.scoreInput} />
        </div>
        <p>vs</p>
        <div id="team-b">
          <img />
          <p>{teamB}</p>
          <input type="text" style={styles.scoreInput} />
        </div>
      </div>
      <button style={styles.saveButton}>Save</button>
    </div>
  );
};

export default BetForm;
