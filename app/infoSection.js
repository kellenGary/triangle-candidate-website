

export default function InfoSection() {
    return (
        <div className={"flex flex-col items-center p-10 lg:p-20"}>
            <div className={'px-10 text-center pb-12 w-fit'}>
                <h1 className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold py-8'}>Welcome to Triangle</h1>
                <p className={'sm:text-lg md:text-xl lg:text-2xl'}>
                    Triangle Fraternity was founded in 1907 by sixteen engineers at the University of Illinois.
                    From the start, it was meant to be a place where men of similar majors could socialize,
                    support each other’s academic pursuits and better prepare themselves for successful careers.
                    Since that time, our membership has grown and expanded to include mathematics and the physical
                    sciences as well as architecture, making us STEM long before the term was coined in 2001.
                    Today, we continue to provide a unique social, academic and professional experience for STEM majors.
                </p>
            </div>
            <img src={'./crest.png'} className={"max-h-[10rem] h-auto w-auto"}/>
        </div>
    )
}