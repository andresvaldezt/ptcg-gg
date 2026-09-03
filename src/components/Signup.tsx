import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Signup = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { session } = UserAuth();
    console.log(session)

    return (
        <div>
            <form className="max-w-md m-auto pt-24">
                <h2 className="font-bold pb-2">Sign Up Today!!</h2>
                <p>Already have an account? <Link className="text-blue-600 hover:text-amber-300 transition-colors duration-300 ease-in-out" to="/signin">Sign In!</Link></p>
                <div className="flex flex-col py-4 gap-4">
                    <input type="email" name="email" id="email" placeholder="Your Email Account" className="text-black bg-amber-50 p-2 rounded-md border-2 border-gray-600 focus:border-blue-600 focus:outline-none transition-colors duration-300" />
                    <input type="password" name="password" id="password" placeholder="Password" className="text-black bg-amber-50 p-2 rounded-md border-2 border-gray-600 focus:border-blue-600 focus:outline-none transition-colors duration-300"/>
                    <button type="submit" className="cursor-pointer w-full bg-blue-600 mt-4 p-2 rounded-md hover:bg-blue-900 hover: transition-colors duration-300 ease-in-out">Sign Up</button>
                </div>
            </form>
        </div>
    )
}