import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen max-w-7xl mx-auto flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/bFY9yrW/banner3.webp')",
      }}
    >
      <div className="hero min-h-screen bg-opacity-65 bg-white">
        <div data-aos="fade-down" data-aos-duration="1500">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl font-bold">Register Now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-300">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoUrl"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black text-white">Login</button>
                </div>
                <p>
                  Have an Account! Please
                  <Link
                    to="/login"
                    className="underline pl-2 text-blue-600 font-bold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
