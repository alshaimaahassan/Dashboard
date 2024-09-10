import { useState } from 'react';

export default function ProfilePhotoUploader() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="overflow-x-auto bg-white p-10 ">
            <h2 className="text-2xl font-bold pb-4">Upload Profile Photo</h2>
            <h3 className="text-xl font-thin pb-4">Profile Image Management</h3>
            <hr className="border-t-2 border-gray-400 my-4" />

            {/* Image Preview */}
            <div className="flex justify-center mb-4">
                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Profile Preview"
                        className="h-32 w-32 object-cover rounded-full shadow-lg"
                    />
                ) : (
                    <div className="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-lg">
                        No Image
                    </div>
                )}
            </div>

            {/* Image Uploader */}
            <label
                htmlFor="profilePhoto"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-4"
            >
                <input
                    type="file"
                    id="profilePhoto"
                    accept="image/*"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2 cursor-pointer"
                    onChange={handleImageChange}
                />
                <span
                    className="pointer-events-none absolute left-2.5 top-0 -translate-y-1/2 bg-white p-0.5 
                    text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm 
                    peer-focus:top-0 peer-focus:text-xs"
                >
                    Upload Profile Photo
                </span>
            </label>
        </div>
    );
}

