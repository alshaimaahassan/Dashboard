import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddNewSection({ addSection }) {
    const [sectionName, setSectionName] = useState('');
    const [language, setLanguage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add the new section (can be added to a state or server call)
        addSection(sectionName, language);

        // Navigate to the new section's page
        navigate(`/dashboard/${sectionName.toLowerCase()}`);
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block text-gray-700">Section Name</label>
                    <input
                        type="text"
                        className="border p-1 w-full"
                        value={sectionName}
                        onChange={(e) => setSectionName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700">Language</label>
                    <input
                        type="text"
                        className="border p-1 w-full"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}
