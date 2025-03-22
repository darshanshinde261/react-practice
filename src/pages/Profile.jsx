import React from 'react'
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="max-w-sm border mx-auto bg-slate-50 flex flex-col h-[100vh] overflow-x-hidden">
      <h2 className="text-lg font-semibold mb-4 bg-white min-w-full p-4">Account Settings</h2>

      {/* Profile Section */}
      <div className="flex items-center gap-4 p-4 -mt-3">
        {/* Profile Image */}
        <div className="relative w-16 h-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCiFg3WKJJD9wl2z94g3-1oEAJ-Baul_GCw&s"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Camera Icon */}
          <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full border border-white">
            <FaCamera className="text-white text-xs" />
          </div>
        </div>

        {/* User Info */}
        <div>
          <p className="font-semibold">Marry Doe</p>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm p-4 -mt-2">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <div className="border-t border-dotted border-spacing:[10px] scale-x-150 border-gray-300 mt-3" style={{ 
        borderTop: "2px dotted gray", 
        height: "2px",
        backgroundSize:"20px 22px"
        }}></div>
        <div className="border-t border-dotted border-spacing:[10px] scale-x-150 border-gray-300 mt-[29rem]" style={{ 
        borderTop: "2px dotted gray", 
        height: "2px",
        backgroundSize:"20px 22px"
        }}></div>
    </div>
  );
};

export default Profile;
