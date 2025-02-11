

export default function Week({week}) {
    const { number, date, title, slides, quizLink } = week;

    return (
        <div className={'pb-8 px-8'}>
            <div className={"flex flex-row justify-between items-end border-b border-[#737373]"}>
                <h1 className={'font-bold text-lg md:text-3xl lg:text-4xl'}>Week {number}</h1>
                <p className={'italic'}>{date}</p>
            </div>

            <div className={"flex flex-row justify-between items-end gap-12 pt-2"}>
                <a href={"https://docs.google.com/presentation/d/1NVGjsna_Z6mxEWD1PlEYbZWNfC6dkgFPR3v-GpiFRfg/edit?usp=sharing"}>
                    <p className={'hover:underline hover:underline-offset-2 hover:decoration-blue-500 md:text-xl lg:text-2xl'}>{title}</p>
                </a>
                <p className={'md:text-xl lg:text-2xl'}>{slides}</p>
            </div>
            {quizLink && (
                <a href={quizLink} className={'hover:underline hover:underline-offset-2 hover:decoration-blue-500'}>
                    <p className={'md:text-xl lg:text-2xl'}>Quiz {number} Link</p>
                </a>
            )}

        </div>
    )
}