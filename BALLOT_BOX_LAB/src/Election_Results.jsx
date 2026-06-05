function ElectionResults({
    democrats,
    republicans,
    independents,
}) {
    const totalVotes =
        democrats + republicans + independents;

    if (totalVotes === 0) {
        return (
            <div className="vote-statistics">
                <h2>Election Results</h2>
                <p className="no-votes">
                    Currently, the system has not received any votes yet.
                </p>
            </div>
        );
    }

    const democratPercent =
        ((democrats / totalVotes) * 100).toFixed(2);

    const republicanPercent =
        ((republicans / totalVotes) * 100).toFixed(2);

    const independentPercent =
        ((independents / totalVotes) * 100).toFixed(2);

    return (
        <div className="vote-statistics">
            <h2>Vote Statistics</h2>

            <p>Total Votes: {totalVotes}</p>

            <p>
                Democrats: {democrats} ({democratPercent}%)
            </p>

            <p>
                Republicans: {republicans} ({republicanPercent}%)
            </p>

            <p>
                Independent: {independents} ({independentPercent}%)
            </p>
        </div>
    );
}

export default ElectionResults;