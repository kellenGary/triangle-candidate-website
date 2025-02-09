

export default function MemberStats() {
    return (
        <div className={"flex flex-row justify-center gap-32 bg-[#262626] w-screen p-20"}>
            <div className={'flex flex-col items-center gap-4'}>
                <p className={'text-4xl font-bold'}>Active Members</p>
                <p className={'text-4xl'}>49</p>
            </div>
            <div className={'flex flex-col items-center gap-4'}>
                <p className={'text-4xl font-bold'}>Alumni</p>
                <p className={'text-4xl'}>1251</p>
            </div>
        </div>
    )
}