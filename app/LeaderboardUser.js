
function LeaderboardUser({user, pfp}) {
    return (
        <>
            <div className="table-row odd:bg-[#111111]">
                <div className="table-cell font-bold text-center text-xl align-middle px-4 py-2">{user.rank}</div>
                <div className={'flex flex-row items-center py-4 px-2'}>
                    <img className={'rounded-[100%] w-[4rem] h-[4rem] object-cover items-start'} src={pfp}/>
                    <div className="table-cell font-semibold text-left px-4 py-2">{user.name}</div>
                </div>
                <div className="table-cell text-center text-lg align-middle px-4 py-2">{user.score}</div>
            </div>
        </>
    )
}

export default LeaderboardUser