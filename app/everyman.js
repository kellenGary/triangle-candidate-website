import Footer from "@/app/footer";

export default function Everyman() {

    function handleFileSubmit(file) {

    }

    return (
        <div className="h-fit flex flex-col items-center align-middle pt-28 gap-12 px-12">
            <div className="p-10 rounded-xl bg-[#373737] flex flex-col lg:flex-row gap-12">
                <img src="./everyman_3.jpg" className="grayscale rounded-xl invert object-cover w-auto md:h-80 lg:h-96" />
                <div className="flex flex-col justify-center align-middle">
                    <p className="md:text-lg lg:text-xl">
                        "Everyman is a late 15th-century morality play that explores themes of death,
                        salvation, and the importance of good deeds. The play follows Everyman,
                        an allegorical character representing humanity, who is suddenly summoned by Death to
                        account for his life before God. Desperate for companionship on his final journey,
                        he seeks help from figures like Fellowship, Kindred, and Goods, but they all abandon him.
                        Only Good Deeds, strengthened by his repentance and confession, remains faithful.
                        The play ultimately conveys a Christian message about the fleeting nature of worldly
                        attachments and the necessity of living a righteous life in preparation for divine judgment."
                    </p>
                    <p className="italic sm:text-sm md:text-base lg:text-lg">- ChatGPT</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-12 w-full">
                <div className="flex flex-col p-10 px-14 bg-[#373737] rounded-xl gap-8">
                    <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        What you have to do:
                    </h1>
                    <p className="text-xl sm:text-lg md:text-xl">1. Read the entire play starting on page 112 in your pledge book</p>
                    <p className="text-xl sm:text-lg md:text-xl">
                        2. Write one page about how the play made you feel.<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Do not write a summary.
                    </p>
                    <p className="text-xl sm:text-lg md:text-xl">3. Submit it to your current new member educators. </p>
                </div>

                <div className="p-8 bg-[#373737] rounded-xl w-full items-center align-middle">
                    <p className="text-2xl sm:text-xl md:text-2xl px-10 pb-8 text-center">Submit your Everyman PDF here</p>
                    <form className="flex flex-col w-full px-20">
                        <input type="text" placeholder="Name" className="mb-4 p-2 text-black rounded-md
                        bg-[#262626] border border-[#404040] drop-shadow-lg" />
                        <input type="email" placeholder="Email" className="mb-4 p-2 text-black rounded-md
                        bg-[#262626] border border-[#404040] drop-shadow-lg" />
                        <input type="file" className="mb-4 p-2 self-center" />
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md drop-shadow-lg"
                                onSubmit={handleFileSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
