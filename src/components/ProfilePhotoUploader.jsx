import  { useState } from 'react';

function ProfilePhotoUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Update the state with the new image URL
    }
  };

  return (
    <label className="flex flex-col items-center justify-center px-32   w-96 h-48 max-w-lg 
            text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-lg">
      
      {/* Circle for the Profile Image */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {selectedImage ? (
          <img 
            src={selectedImage} 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        ) : (
          <svg width="40" height="40" fill="currentColor" viewBox="0 0 20 20" className="text-gray-400">
            <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 1.5a7.5 7.5 0 00-7.5 7.5H17.5a7.5 7.5 0 00-7.5-7.5z" />
          </svg>
        )}
      </div>

      {/* Text Below the Circle */}
      <p className="mt-4 text-xs tracking-wide text-gray-500 dark:text-gray-400">
        Drag & Drop or <span className="text-blue-500 font-bold">Browse</span> to upload your profile photo
      </p>

      {/* Hidden File Input */}
      <input 
        id="dropzone-file" 
        type="file" 
        className="hidden" 
        accept="image/*"
        onChange={handleImageChange} // Handle the file upload
      />
    </label>
  );
}

export default ProfilePhotoUploader;
