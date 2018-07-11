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

export default styles;