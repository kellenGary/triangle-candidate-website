import Week from "@/app/week";

const weeks = [
    {
        number: 1,
        date: '2/9 - 2/15',
        title: 'Meeting 1: Introduction to Triangle and NME',
        slides: '(Slides 1-34)',
        quizLink: ''
    },
    {
        number: 2,
        date: '2/16 - 2/22',
        title: 'Meeting 2: Greek Life, Professionalism, Philanthropy',
        slides: '(Slides 35-46)',
        quizLink: ''
    },
    {
        number: 3,
        date: '2/23 - 3/1',
        title: 'Meeting 3: Intro to Social and Risk Management',
        slides: '(Slides 47-57)',
        quizLink: ''
    },
    {
        number: 4,
        date: '3/2 - 3/8',
        title: 'Meeting 4: Families and Brotherhood',
        slides: '(Slides 58-66)',
        quizLink: 'https://docs.google.com/presentation/d/1NVGjsna_Z6mxEWD1PlEYbZWNfC6dkgFPR3v-GpiFRfg/edit?usp=sharing'
    },
    {
        number: 5,
        date: '3/9 - 3/15',
        title: 'Meeting 5: Triangle in the Community',
        slides: '(Slides 67-71)',
        quizLink: 'https://docs.google.com/presentation/d/1NVGjsna_Z6mxEWD1PlEYbZWNfC6dkgFPR3v-GpiFRfg/edit?usp=sharing'
    },
    {
        number: 6,
        date: '3/16 - 3/22',
        title: 'Meeting 6: Review',
        slides: '(Slides 72-83)',
        quizLink: 'https://docs.google.com/presentation/d/1NVGjsna_Z6mxEWD1PlEYbZWNfC6dkgFPR3v-GpiFRfg/edit?usp=sharing'
    },
    {
        number: 7,
        date: '3/23 - 3/29',
        title: 'Meeting 7: Active Information and Elections',
        slides: '(Slides 84-95)',
        quizLink: 'https://docs.google.com/presentation/d/1NVGjsna_Z6mxEWD1PlEYbZWNfC6dkgFPR3v-GpiFRfg/edit?usp=sharing'
    },
    {
        number: 8,
        date: '3/30 - 4/5',
        title: 'Meeting 8: Wrap-Up and Next Steps',
        slides: '(Slides 96-100)',
        quizLink: ''
    }
];

export default function WeekByWeek() {
    return (
        <div className={'pb-12'}>
            <h1 className={'text-4xl md:text-5xl lg:text-6xl font-bold py-16'}>Weekly Schedule</h1>
            {weeks.map((week) => (
                <Week key={week.number} week={week} />
            ))}
        </div>
    );
}
