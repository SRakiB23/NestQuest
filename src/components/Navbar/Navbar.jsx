import { Link, NavLink } from "react-router-dom";
import "animate.css";
import { useContext, useState } from "react"; // Import useState
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false); // State to control visibility of display name

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleName = () => {
    setShowName(!showName); // Toggle the state on hover
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/update">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-yellow-300 md:max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold animate__animated animate__bounce">
            NestQuest
          </a>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center">
          {user?.email ? (
            <div className="dropdown dropdown-end flex items-center">
              <div
                className="relative"
                onMouseEnter={toggleName}
                onMouseLeave={toggleName}
              >
                <img
                  alt="User avatar"
                  src={user ? user.photoURL : "nai"}
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                {/* Show display name on hover */}
                {showName && (
                  <span className="absolute top-1 bg-white w-32 rounded-lg py-1 px-2">
                    {user.displayName}
                  </span>
                )}
              </div>
              <button onClick={handleLogOut} className="btn btn-secondary ml-2">
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-secondary ml-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
