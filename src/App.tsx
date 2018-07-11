import * as React from "react";
import "./App.css";
import BetForm from "./steps/0";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Israel Meetup! Place your bet</h1>
        </header>
        <div id="content">
           <BetForm />
        </div>
      </div>
    );
  }
}

export default App;


{/* <BetForm teamA="England" teamB="Croatia" /> */}



