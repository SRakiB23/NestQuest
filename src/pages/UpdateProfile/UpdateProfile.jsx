import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
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
              <h1 className="text-6xl font-bold">Update Profile</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-yellow-300">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder={user ? user.email : "Email"}
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder={user ? user.photoURL : "PhotoURL"}
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black text-white">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
