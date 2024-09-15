
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';

export default function AddTour() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [language, setLanguage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const { token } = useAuth(); // Get the token from context

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file); // Set the actual file
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('state', state);
        formData.append('languages', JSON.stringify([language])); // Ensure the format is a stringified array
        formData.append('image', selectedImage); // Append the image file

        try {
            const response = await axios.post(
                'https://jr-production-e0d4.up.railway.app/api/v1/tourGuide/',
                formData,
                {
                    headers: {
                        token: token,
                    },
                }
            );
            console.log('Tour guide added successfully:', response.data);
        } catch (error) {
            console.error('Error adding tour guide:', error.response?.data || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="overflow-x-auto bg-white p-10">
            <h2 className="text-2xl font-bold pb-4">Tour Guide Details</h2>
            <h3 className="text-xl font-thin pb-4">Tour Guide listing Management</h3>
            
            <label htmlFor="name" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600">
                <input
                    type="text"
                    id="name"
                    placeholder="Tour Guide Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Tour Guide Name</span>
            </label>
            
            <label htmlFor="email" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600">
                <input
                    type="text"
                    id="email"
                    placeholder="Tour Guide Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Tour Guide Email</span>
            </label>
            
            <label htmlFor="phone" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600">
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    placeholder="Tour Guide Phone"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Tour Guide Phone</span>
            </label>
            
            <label htmlFor="state" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600">
                <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Tour Guide State"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Tour Guide State</span>
            </label>
            
            <label htmlFor="language" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-8 mb-4 focus-within:border-blue-600">
                <input
                    type="text"
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder="Tour Guide Language"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Tour Guide Language</span>
            </label>
            
            <div className="flex">
                <label className="flex flex-col items-center justify-center px-32 w-96 h-48 max-w-lg text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-lg">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {selectedImage ? (
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <svg width="40" height="40" fill="currentColor" viewBox="0 0 20 20" className="text-gray-400">
                                <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 1.5a7.5 7.5 0 00-7.5 7.5H17.5a7.5 7.5 0 00-7.5-7.5z" />
                            </svg>
                        )}
                    </div>
                    <p className="mt-4 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                        Drag & Drop or <span className="text-blue-500 font-bold">Browse</span> to upload your profile photo
                    </p>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg w-64 h-14 mt-32 ml-9">Submit</button>
            </div>
        </form>
    );
}
