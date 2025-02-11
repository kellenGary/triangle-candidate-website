import Footer from "@/app/footer";

export default function PledgeTest() {
    return (
        <div className="flex flex-col justify-center items-center md:pt-20">
            {/* Header */}
            <img src={'./greekHeader.png'} className={'w-screen max-h-96 object-cover'}
                 style={{
                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                     maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                 }}
            />
            <div className="text-center py-8">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Test Content</p>
            </div>

            {/* Code of Ethics Section */}
            <div className="my-8 ">
                <p className="text-2xl font-semibold mb-4 text-center">Code of Ethics</p>
                <p className={'pl-6'}>Preamble: As a member of Triangle, I recognize my obligation to:</p>

                <ol className="list-decimal list-inside pl-6">
                    <li>Observe the precepts of the Fraternity as set forth in the Ritual;</li>
                    <li>Accept cheerfully my full share of any task, however menial, involved in maintaining a chapter home;</li>
                    <li>Preserve and promote the chosen ideals of my Fraternity;</li>
                    <li>Pay all personal bills promptly, and always live within my means;</li>
                    <li>Help create in my chapter home an environment in which enduring friendships may be formed;</li>
                    <li>Maintain a creditable scholastic record;</li>
                    <li>Promote the welfare of my profession;</li>
                    <li>Maintain my self-respect by proper conduct at all times;</li>
                    <li>Uphold faithfully the traditions and program of my Alma Mater;</li>
                    <li>Pay the price of success in honest effort.</li>
                </ol>
            </div>


            {/* Greek Alphabet Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-4 text-center">Greek Alphabet</p>
                <img src="./greekAlphabet.png" alt="Greek Alphabet" className="mx-auto invert" />
            </div>

            {/* House Address Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-2">House Address</p>
                <p>47 E 12th Ave, Columbus, OH, 43201</p>
            </div>

            {/* Official Colors Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-2">Official Colors</p>
                <p>Old Rose (#990033)</p>
                <p>Gray (#999999)</p>
            </div>

            {/* Official Flower Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-2">Official Flower</p>
                <p>White Chrysanthemum</p>
            </div>

            {/* First Triangle Chapter and Founding Date Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-2">First Triangle Chapter and Founding Date</p>
                <p>University of Illinois, April 15th, 1907</p>
            </div>

            {/* Our Chapter's Greek Letter and Founding Date Section */}
            <div className="my-8 text-center">
                <p className="text-2xl font-semibold mb-2">Our Chapter's Greek Letter and Founding Date</p>
                <p>Gamma, February 2nd, 1911</p>
            </div>
            <Footer/>
        </div>
    );
}
