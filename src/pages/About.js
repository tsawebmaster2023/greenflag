export default function About() {
    return (
        <div className="container mx-auto px-4">
            <div className="mt-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <div className="bg-white rounded-lg shadow-md p-6 md:flex md:justify-center md:flex-col md:items-start">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Green Flag was founded by two high school students named Aashish Anantharaman and Shreyank Kulkarni with the goal of helping homeowners navigate the process of incorporating green energy practices into their homes. By creating a blog filled with general information as well as resources tailored to specific needs, Green Flag aims to provide homeowners with the tools they need to make informed decisions about their energy practices.
                    </p>
                    {/* Add your image here on the right */}
                    {/* <img src="your-image-url" alt="Description of your image" className="md:w-1/3 md:ml-6" /> */}
                </div>
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-3xl font-bold mb-4">View Resources</h2>
                <a href="https://docs.google.com/document/d/14MMh7zMn0NjNUiIERkyR2unwigK9Ow8QNVH1LFGt6kU/edit" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out">Visit Resources</a>
            </div>
        </div>
    );
}
