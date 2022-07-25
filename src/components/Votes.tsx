import { useState } from "react";
import "./Votes.css";

function Votes() {
  const [voteCountCD, setVoteCountCD] = useState(0);
  const [voteCountMT, setVoteCountMT] = useState(0);
  const [voteCountRR, setVoteCountRR] = useState(0);

  let voteUpCD = () => {
    setVoteCountCD(voteCountCD + 1);
  };

  let voteUpMT = () => {
    setVoteCountMT(voteCountMT + 1);
  };

  let voteUpRR = () => {
    setVoteCountRR(voteCountRR + 1);
  };

  let totalVotes = voteCountCD + voteCountMT + voteCountRR;

  let votesCC = ((voteCountCD / totalVotes) * 100).toFixed(1);
  let votesMT = ((voteCountMT / totalVotes) * 100).toFixed(1);
  let votesRR = ((voteCountRR / totalVotes) * 100).toFixed(1);

  let showResultsCD = voteCountCD >= 1;
  let showResultsMT = voteCountMT >= 1;
  let showResultsRR = voteCountRR >= 1;

  return (
    <div>
      <h1 className="vote-here">Vote Here</h1>
      <div>
        <button onClick={() => voteUpCD()}>Cookie Dough</button>
        <button onClick={() => voteUpMT()}>Moosetracks</button>
        <button onClick={() => voteUpRR()}>Rocky Road</button>
      </div>
      {showResultsCD ? (
        <>
          <div>
            Cookie Dough: {voteCountCD} ({votesCC}%)
          </div>
          <div
            className={"cd-bar"}
            style={{
              width: votesCC + "%",
              height: "20px",
              backgroundColor: "pink",
              borderRadius: "5px",
            }}
          ></div>
        </>
      ) : null}

      {showResultsMT ? (
        <>
          <div>
            Moosetracks: {voteCountMT} ({votesMT}%)
          </div>
          <div
            className="mt-bar"
            style={{
              width: votesMT + "%",
              height: "20px",
              backgroundColor: "tan",
              borderRadius: "5px",
            }}
          ></div>
        </>
      ) : null}

      {showResultsRR ? (
        <>
          <div>
            Rocky Road: {voteCountRR} ({votesRR}%)
          </div>
          <div
            className="rr-bar"
            style={{
              width: votesRR + "%",
              height: "20px",
              backgroundColor: "brown",
              borderRadius: "5px",
            }}
          ></div>
        </>
      ) : null}
    </div>
  );
}

export default Votes;
