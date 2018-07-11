import * as React from "react";
import styles from "../betFormStyles";

interface BetFormProps {
  teamA: string;
  teamB: string;
}

interface BetFormState {
  teamAScore: number;
  teamBScore: number;
}

class BetForm extends React.Component<BetFormProps, BetFormState> {
  constructor(props: BetFormProps) {
    super(props);
    this.state = {
      teamAScore: 0,
      teamBScore: 0
    };
  }

  setTeamAScore(teamAScore: number) {
    this.setState({ teamAScore });
  }

  setTeamBScore(teamBScore: number) {
    this.setState({ teamBScore });
  }

  render() {
    const { teamAScore, teamBScore } = this.state;
    const { teamA, teamB } = this.props;
    return (
      <div style={styles.mainContainer}>
        <div style={styles.teamsContainer}>
          <div id="team-a">
            <img />
            <p>{teamA}</p>
            <input
              type="text"
              value={teamAScore}
              onChange={e => this.setTeamAScore(Number(e.target.value))}
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
              onChange={e => this.setTeamBScore(Number(e.target.value))}
              style={styles.scoreInput}
            />
          </div>
        </div>
        <button style={styles.saveButton}>Save</button>
      </div>
    );
  }
}

export default BetForm;
