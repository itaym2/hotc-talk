import * as React from "react";
import styles from "../betFormStyles";
import { withState, compose, withProps } from "recompose";

interface BetFormPublicProps {
  teamA: string;
  teamB: string;
}

interface BetFormPrivateProps {
  teamAScore: number;
  teamBScore: number;
  setTeamAScore: (score: number) => number;
  setTeamBScore: (score: number) => number;
  comment: string;
}

const BetForm: React.SFC<BetFormPublicProps & BetFormPrivateProps> = ({
  teamA,
  teamB,
  teamAScore,
  setTeamAScore,
  teamBScore,
  setTeamBScore,
  comment
}) => {
  return (
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
      <p>{comment}</p>
    </div>
  );
};

const commentFromTotalGoals = (totalGoals: number) => {
  if (totalGoals === 0) {
    return "Kinda boring, don't you think?";
  } else if (totalGoals > 4) {
    return "You are wild!";
  }

  return "Going for the safe option?";
};

const addComment = withProps<{}, BetFormPrivateProps>(
  ({ teamAScore, teamBScore }) => ({
      comment: commentFromTotalGoals(teamAScore + teamBScore)
}));

const enhance = compose<BetFormPrivateProps, BetFormPublicProps>(
  withState("teamAScore", "setTeamAScore", 0),
  withState("teamBScore", "setTeamBScore", 0),
  addComment
);

const EnhancedBetForm = enhance(BetForm);
export default EnhancedBetForm;
