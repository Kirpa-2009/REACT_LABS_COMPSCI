import republican from "./assets/republican.png";
import democratic from "./assets/democratic.png";
import american from "./assets/american.png";

function Ballot({
    democrats,
    republicans,
    independents,
    voteDemocrat,
    voteRepublican,
    voteIndependent,
}) {
    return (

        <div className="party-container">
            <div className="party">
                <h2>Democrats</h2>
                <img src={democratic} alt="Democrats" className="party-image" />
                <br />
                <button className="vote-button" onClick={voteDemocrat}>
                    Vote
                </button>
                <p>Vote Count: {democrats}</p>
            </div>

            <div className="party">
                <h2>Republicans</h2>
                <img src={republican} alt="Republicans" className="party-image" />
                <br />
                <button className="vote-button" onClick={voteRepublican}>
                    Vote
                </button>
                <p>Vote Count: {republicans}</p>
            </div>

            <div className="party">
                <h2>Independent</h2>
                <img src={american} alt="Independent" className="party-image" />
                <br />
                <button className="vote-button" onClick={voteIndependent}>
                    Vote
                </button>
                <p>Vote Count: {independents}</p>
            </div>
        </div>
    );
}

export default Ballot;