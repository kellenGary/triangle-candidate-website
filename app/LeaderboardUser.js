
function LeaderboardUser({user}) {
    return (
        <>
            <div className="table-row odd:bg-[#111111]">
                <div className="table-cell text-center px-4 py-2 border border-[#222222]">{user.rank}</div>
                <div className="table-cell font-semibold text-left px-4 py-2 border border-[#222222]">{user.name}</div>
                <div className="table-cell text-left px-4 py-2 border border-[#222222]">{user.score}</div>
            </div>
        </>
    )
}

export default LeaderboardUser