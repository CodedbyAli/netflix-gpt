import { useRef, useState } from "react";
import { checkFormValidation } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const [isSigninForm,setIsSigninForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSigninForm(!isSigninForm);
    }

    const handleSubmitClick = () => {
        // Checking Form Validation
        const message = checkFormValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSigninForm){

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("User: ", user);
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });

        }else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' +errorMessage);
                });
        }

    }

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
                                  <h1 className="text-white text-3xl font-bold pb-4">{isSigninForm ? 'Sign In' : 'Sign Up'}</h1>
                                  <form onSubmit={(e) => e.preventDefault()}>
                                      {!isSigninForm && <input type="text" placeholder="Enter Full Name" className="p-4 bg-black my-4 rounded-sm text-white w-full block border border-zinc-600 bg-opacity-80" />}
                                      <input ref={email} type="text" placeholder="Email or phone number" className="p-4 bg-black my-4 rounded-sm text-white w-full block border border-zinc-600 bg-opacity-80 bg-[rgba(0,0,0,0.85)]" />
                                      <input ref={password} type="password" placeholder="Password" className="p-4 bg-black text-white my-4 rounded-sm w-full block border border-zinc-600 bg-opacity-85" />
                                      <p className="text-red-500 font-semibold">{errorMessage}</p>
                                      <button onClick={handleSubmitClick} className="text-white bg-red-600 font-semibold rounded-sm w-full p-2 mt-4">{isSigninForm ? 'Sign In' : 'Sign Up'}</button>
                                      <h3 className="text-zinc-400 my-4 text-center">OR</h3>
                                      <button className="bg-white text-white font-semibold rounded-sm w-full p-2 bg-opacity-30">{isSigninForm ? 'Use a Sign-In Code' : 'Use a Sign-In Code'}</button>
                                      {isSigninForm && <div className="flex justify-center my-4"><a href="/" className="text-white">Forgot Password?</a></div>}
                                      <div className="flex items-center space-x-2 my-4">
                                          <input type="checkbox" id="rememberMe" className="h-5 w-5 border-2 border-zinc-600 rounded-sm focus:ring-0"/>
                                          <label htmlFor="rememberMe" className="text-white text-md cursor-pointer">Remember me</label>
                                      </div>
                                      {isSigninForm ? <p className="text-zinc-400">New to Netflix?<span onClick={toggleSignInForm} className="text-zinc-100 font-semibold ml-2 cursor-pointer hover:underline">Sign up now</span></p>
                                       :
                                      <p className="text-zinc-400">Already a member?<span onClick={toggleSignInForm} className="text-zinc-100 font-semibold ml-2 cursor-pointer hover:underline">Sign in instead</span></p>}
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
  