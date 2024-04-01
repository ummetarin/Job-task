const SignUp = () => {
  return (
    <div>
      <div>
        <section className="flex min-h-screen  w-full  justify-center bg-white px-8">
          <div className="flex w-full  gap-10 lg:flex-row-reverse flex-col  justify-around ">
            <div className=" ">
              <p className="ml-96 text-sm mt-3">
                Already a member? <span className="text-blue-800">Sign in</span>
              </p>
              <h1 className="text-start text-xl font-extrabold mt-8">
                Sign Up to Dribbble
              </h1>

              <div>
                <ol className="text-red-600 text-[11px] mt-3">
                  Username has already been taken
                </ol>
              </div>
              {/* name ,username */}
              <div className="flex flex-row gap-3 mt-4">
                <div className="flex flex-col gap-1.5 ">
                  <label className="ml-1 font-bold text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className=" bg-gray-200 text-black font-bold  rounded-lg pl-3 w-[220px] text-sm h-[35px]"
                  />
                </div>
                <div className="flex flex-col gap-1.5  ">
                  <label className="ml-1 font-bold text-sm">Username</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className=" bg-gray-200 text-black font-bold  rounded-lg pl-3 w-[220px] text-sm h-[35px]"
                  />
                </div>
              </div>
            {/* email */}

            <div className="flex flex-col gap-1.5 mt-5">
                  <label className="ml-1 font-bold text-sm">Email</label>
                  <input
                    type="Email"
                    placeholder="Email"
                    className=" bg-gray-200 text-black font-bold  rounded-lg pl-3 w-[450px] text-sm h-[35px]"
                  />
                </div>

                {/* pass */}

                <div className="flex flex-col gap-1.5 mt-5">
                  <label className="ml-1 font-bold text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" bg-gray-200 text-black font-bold  rounded-lg pl-3 w-[450px] text-sm h-[35px]"
                  />
                </div>

                <div className="flex flex-row gap-2 ml-1 mt-3 py-2" >
                
                 <div>
                 <input
                    type="checkbox"
                    className=" bg-gray-200 text-black font-bold  rounded-lg pl-3 h-4"
                  />
                 </div>
                 <div className="text-[12px] font-medium text-gray-500 ">
                    Creating an account means you are okay with our <span className="text-blue-600">terms of</span> 
                    <p className="text-blue-600">and services,privacy policy and our default Notification</p>
                    <p className="text-blue-600"> setting</p>
                 </div>
                </div>

                <div className="mt-3">
                    <button className=" rounded-md bg-pink-600 py-2 text-white font-bold text-[12px] px-10">Create Account</button>
                </div>
                <div className="text-[10px] font-medium text-gray-500 mt-3 ">
                    The site is protected reCapcha and the goggle <span className="text-blue-600">terms of</span> 
                    <p className="text-blue-600">privacy policy <span className="text-gray-500"> and terms of </span>Service apply</p>
                    <p className="text-blue-600"> setting</p>
                 </div>

            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                className="relative h-full md:h-[600px]  sm:h-[500px]   w-[500px] bg-gray-400 object-cover"
                alt="hero navigate ui"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
