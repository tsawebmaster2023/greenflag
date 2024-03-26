export default function About() {
    return (
        <div>
            <div className="flex mt-10 items-center justify-center">
                <h2 className="text-3xl font-bold mr-6">Our Mission:</h2>
                <div className="text-center">
                    <p className="text-xl text-gray-700">
                        Provide strategic and useful resources to help homeowners use green energy practices.
                    </p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold">Our Story:</h2>
                <p className="text-xl text-center w-2/3 mt-4 mx-auto text-gray-700">
                    Green Flag was founded by two high school students called Aashish Anantharaman and Shreyank Kulkarni
                    with the goal of helping homeowners navigating the process of incorporating green energy practices into their homes.

                    By creating a blog filled with general information as well as resources tailoring to specific needs,
                    Green Flag aims to provide homeowners with the tools they need to make informed decisions about their energy practices.
                </p>
            </div>
        </div>
    );
}