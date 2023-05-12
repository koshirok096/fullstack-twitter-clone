import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { useLocation, useParams } from "react-router-dom";

const UserPlaceholder = ({ setUserData, userData }) => {
  const { id } = useParams();
  const location = useLocation().pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await axios.get(`/users/find/${id}`);
        setUserData(userProfile.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-row justify-center items-center">
      <Link to="/">
        <div className="flex justify-center items-center w-fit space-x-6 px-2 py-2 mr-2 w-10 h-10 transition ease-in-out delay-150 hover:bg-slate-200 rounded-full cursor-pointer">
          <p>←</p>
        </div>
      </Link>
      {userData?.username}
    </div>);
};

export default UserPlaceholder;