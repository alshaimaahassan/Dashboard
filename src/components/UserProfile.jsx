import  { useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '********',
    profilePhoto: '', // Initially no profile photo
  });
  const [imagePreview, setImagePreview] = useState(''); // State for image preview

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    // Send the updated profile data to the server
    try {
      await axios.put('/api/updateProfile', profileData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview the uploaded image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Optionally set the file to profile data to send it to the backend
      setProfileData({ ...profileData, profilePhoto: file });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-40 h-40 border-2 border-gray-300 rounded-full overflow-hidden mb-4">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            {isEditing && (
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handlePhotoChange}
              />
            )}
          </div>
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit Profile
            </button>
          )}
        </div>
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-700">First Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-64"
              />
            ) : (
              <p>{profileData.firstName}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-700">Last Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-64"
              />
            ) : (
              <p>{profileData.lastName}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-700">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-64"
              />
            ) : (
              <p>{profileData.email}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold text-gray-700">Password:</label>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={profileData.password}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-64"
              />
            ) : (
              <p>********</p>
            )}
          </div>
          {isEditing && (
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="px-4 py-2 text-sm text-white bg-primary rounded-full hover:bg-primary"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
