import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

import { useParams } from "react-router-dom";

import axios from "axios";


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';



const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // const { currentUser } = useSelector((state) => state.user);

  // const [userProfile, setUserProfile] = useState(currentUser);

  const [userProfile, setUserProfile] = useState(currentUser);

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTweets = await axios.get(`/tweets/user/all/${id}`);
        const userProfile = await axios.get(`/users/find/${id}`);

        setUserProfile(userProfile.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser, id]);

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };




  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-6 px-2 py-2 transition ease-in-out delay-150 hover:bg-slate-200 rounded-full cursor-pointer">
            <HomeIcon fontSize="large" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-6 px-2 py-2 transition ease-in-out delay-150 hover:bg-slate-200 rounded-full cursor-pointer">
            <TagIcon fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        <Link to={`/profile/${currentUser._id}`}>
          <div className="flex items-center space-x-6 px-2 py-2 transition ease-in-out delay-150 hover:bg-slate-200 rounded-full cursor-pointer">
            <PersonIcon fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-row justify-center items-center">
          <img
          src={userProfile?.profilePicture}
          alt="Profile Picture"
          className="w-12 h-12 rounded-full m-2"
          />
          <div className="flex flex-col">
            <p className="font-bold">{currentUser.username}</p>
            <p className="font-bold">@{currentUser.username}</p>
          </div>
       
          <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={
                <Link to="signin">
                  <div className="w-full text-xl flex justify-center items-center font-bold transition ease-in-out delay-150 hover:bg-slate-500 cursor-pointer">
                    Add an existing account
                  </div>
                  <div
                    className="w-full text-xl flex justify-center items-center font-bold transition ease-in-out delay-150 hover:bg-slate-500 cursor-pointer"
                    onClick={handleLogout}
                  >
                  Logout
                </div>
              </Link>
    }
                placement="top"
              >
                <MoreHorizIcon className="cursor-pointer ml-5" onClick={handleTooltipOpen} />

              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;