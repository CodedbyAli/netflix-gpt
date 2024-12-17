const Login = () => {
    return (
      <>
        <div className="relative w-screen h-screen">
          {/* Background Image */}
          <img src="netflix-bg.jpg" alt="Netflix background logo" className="absolute top-0 left-0 w-full h-full object-cover"/>
  
          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
  
          {/* Netflix Logo */}
          <div className="absolute h-52 w-52 top-0 left-8 z-20">
            <img src="Netflix_Logo_PMS.png" alt="Netflix logo"/>
          </div>

          {/* Login Component */}
          <div className="absolute w-full h-full flex items-end justify-center z-10">
                  <div className="bg-black rounded-lg w-4/12 bg-opacity-60">
                              <div className="p-16">
                                  <h1 className="text-white text-3xl font-bold pb-4">Sign In</h1>
                                  <form>
                                      <input type="text" placeholder="Email or phone number" className="p-4 bg-black my-4 rounded-sm text-white w-full block border border-zinc-600 bg-opacity-80 bg-[rgba(0,0,0,0.85)]" />
                                      <input type="text" placeholder="Password" className="p-4 bg-black my-4 rounded-sm w-full block border border-zinc-600 bg-opacity-85 bg-[rgba(0,0,0,0.85)]" />
                                      <button type="submit" className="text-white bg-red-600 font-semibold rounded-sm w-full p-2 mt-4">Sign In</button>
                                      <h3 className="text-zinc-400 my-4 text-center">OR</h3>
                                      <button type="submit" className="bg-white text-white font-semibold rounded-sm w-full p-2 bg-opacity-30">Use a Sign-In Code</button>
                                      <div className="flex justify-center my-4"><a href="/" className="text-white">Forgot Password?</a></div>
                                      <div className="flex items-center space-x-2 my-4">
                                          <input type="checkbox" id="rememberMe" className="h-5 w-5 border-2 border-zinc-600 rounded-sm focus:ring-0"/>
                                          <label htmlFor="rememberMe" className="text-white text-md cursor-pointer">Remember me</label>
                                      </div>
                                      <p className="text-zinc-400">New to Netflix?<span className="text-zinc-100 font-semibold ml-2"><a href="/">Sign up now</a></span></p>
                                      <p className="text-zinc-500 mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500">Learn more.</span></p>
                                  </form>
  
                              </div>
                          </div>
                  </div>
              </div>
      </>
    );
  };
  
  export default Login;
  