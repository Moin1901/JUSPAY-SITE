import { Link } from "react-router-dom";
import "./Juspay.css";

function Juspay() {
  const rounds = [
    { id: "round1", title: "SDE Coding Question" },
    { id: "round2", title: "Developer Challenge (HackerEarth)" },
    { id: "round3", title: "Hackathon Part A" },
    { id: "round4", title: "Hackathon Part B" },
    { id: "round5", title: "Interview" },
  ];

  return (
    <div className="container">
      <h1>Juspay Rounds</h1>
      <p>Select a round to view questions and solutions.</p>

      <div className="round-list">
        {rounds.map((r) => (
          <Link key={r.id} to={`/juspay/${r.id}`} className="round-card">
            {r.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Juspay;
