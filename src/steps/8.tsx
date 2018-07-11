import * as React from "react";
import styles from '../betFormStyles';
import { withState, compose } from "recompose";

interface BetFormPublicProps {
  teamA: string;
  teamB: string;
}

interface BetFormPrivateProps {
  teamAScore: number;
  teamBScore: number;
  setTeamAScore: (score: number) => number;
  setTeamBScore: (score: number) => number;
}

const BetForm: React.SFC<BetFormPublicProps & BetFormPrivateProps> = ({
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

const enhance = compose<{}, BetFormPublicProps>(
  withState("teamAScore", "setTeamAScore", 0),
  withState("teamBScore", "setTeamBScore", 0)
);

const EnhancedBetForm = enhance(BetForm);
export default EnhancedBetForm;
