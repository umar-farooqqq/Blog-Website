import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Signup = ({ textColor, bgColor }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "hello@example.com" && password === "123456") {
      router.push("/blogpostform");
    } else {
      alert("Invalid credentials. Use hello@example.com / 123456");
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 ${textColor}`}
    >
      <div
        className={`flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/5 ${bgColor} rounded-xl shadow-xl overflow-hidden`}
      >
        {/* Login Form Section */}
        <form
          className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center"
          onSubmit={handleLogin}
        >
          <div>
            <h3 className="text-2xl font-bold">Welcome back</h3>
          </div>
          <div>
            <p>Sign in to your account to continue to publish a blog</p>
          </div>
          <p className="mt-2">Email</p>
          <div>
            <input
              type="text"
              placeholder="hello@example.com"
              className="border-[1px] rounded-md p-2 mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <p className="mt-2">Password</p>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] rounded-md p-2 mt-1 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div
            className={`bg-blue-500 text-center p-2 rounded-md mt-5 w-full cursor-pointer hover:bg-blue-600 transition-colors ${textColor}`}
          >
            <button type="submit">Sign in</button>
          </div>
          <br />
          <div>
            <p>
              {"Don't have an account?"}
              <a href="#" className="text-white-500 font-bold">
                Create
              </a>
            </p>
          </div>
        </form>
        {/* Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <Image
            src="/login.jpg"
            alt="Login"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
