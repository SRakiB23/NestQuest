import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user ? user.displayName : "");
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : "");

  useEffect(() => {
    AOS.init();
  }, []);

  // Function to handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      toast.success("Profile Updated Successfully!");
    } catch (error) {
      toast.error("Profile Update Failed");
    }
  };

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
              <form onSubmit={handleUpdateProfile} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black text-white text-xl">
                    Update
                  </button>
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
