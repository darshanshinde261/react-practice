import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-sm w-full p-6 bg-slate-50 border h-screen">
          <h1 className="text-2xl font-bold">Create your <br /> PopX account</h1>
  
          <form className="mt-4 space-y-4 flex flex-col flex-grow">
            {/* Full Name */}
            <fieldset className="border border-gray-300 rounded-md px-3 py-2">
              <legend className="text-sm font-medium text-purple-700 px-2">Full Name <span className="text-red-500">*</span></legend>
              <input type="text" placeholder="Marry Doe" className="w-full outline-none bg-transparent" />
            </fieldset>
  
            {/* Phone Number */}
            <fieldset className="border border-gray-300 rounded-md px-3 py-2">
              <legend className="text-sm font-medium text-purple-700 px-2">Phone number <span className="text-red-500">*</span></legend>
              <input type="text" placeholder="Marry Doe" className="w-full outline-none bg-transparent" />
            </fieldset>
  
            {/* Email Address */}
            <fieldset className="border border-gray-300 rounded-md px-3 py-2">
              <legend className="text-sm font-medium text-purple-700 px-2">Email address <span className="text-red-500">*</span></legend>
              <input type="email" placeholder="Marry Doe" className="w-full outline-none bg-transparent" />
            </fieldset>
  
            {/* Password */}
            <fieldset className="border border-gray-300 rounded-md px-3 py-2">
              <legend className="text-sm font-medium text-purple-700 px-2">Password <span className="text-red-500">*</span></legend>
              <input type="password" placeholder="Marry Doe" className="w-full outline-none bg-transparent" />
            </fieldset>
  
            {/* Company Name */}
            <fieldset className="border border-gray-300 rounded-md px-3 py-2">
              <legend className="text-sm font-medium text-purple-700 px-2">Company name</legend>
              <input type="text" placeholder="Marry Doe" className="w-full outline-none bg-transparent" />
            </fieldset>
  
            {/* Agency Question */}
            <div className="mt-2">
              <p className="text-sm font-medium">Are you an Agency? <span className="text-red-500">*</span></p>
              <div className="flex items-center gap-4 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="text-purple-600 focus:ring-purple-500" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="agency" className="text-purple-600 focus:ring-purple-500" />
                  <span>No</span>
                </label>
              </div>
            </div>
  
            {/* Submit Button */}
            <button className="w-full bg-violet-600 text-white py-3 rounded-md font-semibold mt-4" onClick={()=>navigate('/profile')}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  };

  
  
  export default Signup;
  