import React, { useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import UserPlaceholder from "../UserPlaceholder/UserPlaceholder";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center mycd-headwrap">
      <Link to="/">
      <div className="mx-auto md:mx-0">
        <div className="test">
        <img
          src="/580b57fcd9996e24bc43c53e.png"
          alt="Twitter Logo"
          width={"35px"}
          height={"35px"}
          className="ml-8 transition ease-in-out delay-150 hover:bg-slate-200 rounded-full cursor-pointer mycd-logo"
        />
        </div>
      </div>
      </Link>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 md:my-0 flex justify-between mycd-centerwrap">
        <div className="flex justify-between items-center mycd-homecenter">
          <h2 className="font-bold text-2xl">
            {location.includes("profile") ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes("explore") ? (
              "Explore"
            ) : (
              "Home"
            )}
          </h2>
          <SettingsOutlinedIcon className="cursor-pointer" />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <SearchIcon className="absolute m-2" />
        <input type="text" className="bg-blue-100 rounded-full py-2 px-8" />
      </div>
    </div>
  );
};

export default Navbar;