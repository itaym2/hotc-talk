import * as React from "react";

const styles: { [p: string]: React.CSSProperties } = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 500
  },
  teamsContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  scoreInput: {
    width: 50,
    height: 50,
    fontSize: 30,
    textAlign: "center"
  },
  saveButton: {
    width: 130,
    borderRadius: 0,
    marginTop: 20,
    height: 50,
    fontSize: 25,
    cursor: "pointer"
  }
};

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
              onChange={e => this.setState({ teamAScore: Number(e.target.value) })}
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
              onChange={e => this.setState({ teamBScore: Number(e.target.value) })}
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
