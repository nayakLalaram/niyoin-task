import React from "react";

const SignIn = () => {
  return (
    <div className="bg-yello h-screen flex items-center justify-center ">
      <div className="bg-white font-MontSerrat rounded-2xl">
        <div>
          <div className=" py-12 px-16">
            <h2 className="text-4xl font-extrabold text-black border-l-8 px-2  border-[#f8d441]">
              CRUD OPERATIONS
            </h2>
            <p className="text-2xl font-semibold font-MontSerrat text-center uppercase mt-5">
              Sign In
            </p>
            <p className="py-2 text-center text-[#6C6C6C]">
              Enter your credentials to access your account
            </p>
          </div>

          <form action="" className="px-8">
            <div>
              <label htmlFor="" className="text-[#6C6C6C] text-lg font-medium">
                Email
              </label>{" "}
              <br />
              <input
                type="text"
                name="email"
                className="border-[1px] border-[#e5e5e5] py-4 w-full px-3 rounded-lg mt-3"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="my-8">
              <label htmlFor="" className="text-[#6C6C6C] text-lg font-medium">
                Password
              </label>{" "}
              <br />
              <input
                type="text"
                name="Password"
                className="border-[1px] border-[#e5e5e5] py-4 w-full px-3 rounded-lg mt-3"
                id="Password"
                placeholder="Enter your Password"
              />
            </div>
            <button
              type="submit"
              className="bg-[#feaf00] w-full py-4 text-white font-medium rounded-lg"
            >
              SIGN IN
            </button>
            <p className="py-2 text-center text-[#6C6C6C] pb-8">
              Forgot your password?{" "}
              <span className="text-[#feaf00] ">Reset Password</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
