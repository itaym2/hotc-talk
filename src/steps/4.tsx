import * as React from "react";
import styles from '../betFormStyles';
import { withState } from "recompose";

interface BetFormProps {
  teamA: string;
  teamB: string;
  teamAScore: number;
  teamBScore: number;
  setTeamAScore: (score: number) => number;
  setTeamBScore: (score: number) => number;
}

const BetForm: React.SFC<BetFormProps> = ({
  teamA,
  teamB,
  teamAScore,
  setTeamAScore,
  teamBScore,
  setTeamBScore
}) => (
  <div style={styles.mainContainer}>
    <div style={styles.teamsContainer}>
      <div id="team-a">
        <img />
        <p>{teamA}</p>
        <input
          type="text"
          value={teamAScore}
          onChange={e => setTeamAScore(Number(e.target.value))}
          style={styles.scoreInput}
        />
      </div>
      <p>vs</p>
      <div id="team-b">
        <img />
        <p>{teamB}</p>
        <input
          type="text"
          value={teamBScore}
          onChange={e => setTeamBScore(Number(e.target.value))}
          style={styles.scoreInput}
        />
      </div>
    </div>
    <button style={styles.saveButton}>Save</button>
  </div>
);

const C1 = withState("teamAScore", "setTeamAScore", 0)(BetForm);
const C2 = withState("teamBScore", "setTeamBScore", 0)(C1);

export default C2;
