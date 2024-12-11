import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="w-24 h-24 mt-2 self-center rounded-full object-cover cursor-pointer"
        />
        <input
          type="text"
          id="username"
          className="border rounded-lg p-3"
          placeholder="username"
        />
        <input
          type="email"
          id="email"
          className="border rounded-lg p-3"
          placeholder="email"
        />
        <input
          type="text"
          id="password"
          className="border rounded-lg p-3"
          placeholder="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
