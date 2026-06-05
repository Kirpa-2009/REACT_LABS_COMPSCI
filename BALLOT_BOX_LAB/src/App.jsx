import { useState } from "react";

import Ballot from "./Ballot";
import ElectionResults from "./Election_Results";
import "./App.css";

function App() {
  const [democrats, setDemocrats] = useState(0);
  const [republicans, setRepublicans] = useState(0);
  const [independents, setIndependents] = useState(0);

  const voteDemocrat = () => {
    setDemocrats(democrats + 1);
  };

  const voteRepublican = () => {
    setRepublicans(republicans + 1);
  };

  const voteIndependent = () => {
    setIndependents(independents + 1);
  };

  return (
    <>
      <Ballot
        democrats={democrats}
        republicans={republicans}
        independents={independents}
        voteDemocrat={voteDemocrat}
        voteRepublican={voteRepublican}
        voteIndependent={voteIndependent}
      />

      <ElectionResults
        democrats={democrats}
        republicans={republicans}
        independents={independents}
      />
    </>
  );
}

export default App;