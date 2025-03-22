
const ContactUsForm = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        alert ('your data has been recored')
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Name</label>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Message</label>
                        <textarea 
                            placeholder="Your Message" 
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                         onClick={handlesubmit} >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;