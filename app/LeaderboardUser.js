
function LeaderboardUser({user, pfp}) {
    return (
        <>
            <div className="table-row odd:bg-[#111111] text-white text-sm md:text-base">
                <div className="table-cell font-bold text-center align-middle px-4 py-2 w-1/6">{user.rank}</div>
                <div className={'flex flex-row items-center py-4 px-2'}>
                    <img   className="rounded-full w-auto h-auto aspect-square max-w-[4rem] max-h-[4rem] object-cover"
                           src={pfp}/>
                    <div className="table-cell font-semibold text-left text-sm md:text-lg lg:text-xl px-4 py-2">{user.name}</div>
                </div>
                <div className="table-cell text-center align-middle px-4 py-2 w-1/6">{user.score}</div>
            </div>
        </>
    )
}

export default LeaderboardUser