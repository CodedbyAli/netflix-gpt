import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import Navbar from "./Navbar";

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {

            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/');

            }).catch((error) => {
                // An error happened.
                navigate('/error');
            });

    }
  return (
    <>
        {/* <button onClick={handleSignOut}>Sign Out</button> */}
        <div className="bg-gradient-to-b from-black">
            <div className="flex justify-between w-full bg-black/50">
                <div className="flex items-center">
                    <img src="Netflix_Logo_PMS.png" alt="Netflix logo" className="ml-12 h-auto w-32 object-contain"/>
                    <Navbar />
                </div>
                <div className="flex items-center mr-10 space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                    <img onClick={handleSignOut} src="netflix-profile-picture.jpg" className="size-8 cursor-pointer" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header