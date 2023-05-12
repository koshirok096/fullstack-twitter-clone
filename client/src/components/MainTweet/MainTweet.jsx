import React, { useState, useEffect } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PublicIcon from '@mui/icons-material/Public';

import { useSelector } from "react-redux";
import axios from "axios";

import { useParams } from "react-router-dom";


const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const { currentUser } = useSelector((state) => state.user);

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





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: tweetText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      {/* {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )} */}
      <div className="flex w-full justify-center h-12 border-b-2">
        <div className="w-6/12 flex justify-center items-center font-bold transition ease-in-out delay-150 hover:bg-slate-100 cursor-pointer relative">
          For You
          <div className="absolute rounded-full w-1/5 border-solid border-b-4 border-blue-500 bottom-0"></div>
        </div>
        <div className="w-6/12 flex justify-center items-center font-bold transition ease-in-out delay-150 hover:bg-slate-100 cursor-pointer">Following</div>
      </div>
      <div className="flex justify-start">
      <img
        src={userProfile?.profilePicture}
        alt="Profile Picture"
        className="w-12 h-12 rounded-full m-2"
      />
      <form className="pb-6 w-full">
        <div className="flex flex-col">
        <div
          className="px-3 border-solid border-2 rounded-full w-fit flex font-bold my-2 text-xs items-center transition ease-in-out delay-150 hover:bg-slate-100 cursor-pointer"
        >
          Everyone<ExpandMoreIcon className="w-2" />
        </div>
          {/* <div className="border-solid border-2 rounded-full w-fit text-xs">Everyone<ExpandMoreIcon className="w-0.5" /></div> */}
          <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening?!"
          maxLength={280}
          className="w-full p-2 focus:outline-none resize-none text-xl"
          >
      
          </textarea>
          <div
          className="px-2 rounded-full w-fit flex font-bold my-2 text-xs items-center transition ease-in-out delay-150 hover:bg-slate-100 cursor-pointer"
          >
            <PublicIcon className="w-2 mr-2" /> Everyone can reply
          </div>
          <div className="border-b-2">
            
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto font-bold flex m-2"
        >
          Tweet
        </button>
      </form>

      </div>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;