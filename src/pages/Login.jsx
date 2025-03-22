const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full p-6 bg-slate-50 border h-screen">
        <h1 className="text-2xl font-bold">Signin to your <br /> PopX account</h1>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-4">
          <fieldset className="border border-gray-300 rounded-md px-3 py-2">
            <legend className="text-sm font-medium text-purple-700 px-2">Email Address</legend>
            <input 
              type="email" 
              placeholder="Enter email address"
              className="w-full outline-none bg-transparent"
            />
          </fieldset>
        </div>

        <div className="mt-4">
          <fieldset className="border border-gray-300 rounded-md px-3 py-2">
            <legend className="text-sm font-medium text-purple-700 px-2">Password</legend>
            <input 
              type="password" 
              placeholder="Enter password"
              className="w-full outline-none bg-transparent"
            />
          </fieldset>
        </div>

        <button className="w-full mt-6 bg-gray-300 text-gray-600 py-2 rounded-md font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
