export default function Contact() {
    return (
        <div className="bg-emerald-100 flex flex-col h-screen mb-8">
            <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
            <iframe 
                src="https://forms.gle/hKw3Qnc3L33m1nTm9" 
                className="flex-grow w-100 sm:w-120 md:w-140 lg:w-160 mx-2" >
                Loading…
            </iframe>
        </div>
    );
}