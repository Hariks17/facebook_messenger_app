import React from "react";

const Signup = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>
      <form className="grid grid-cols-[auto,1fr ] gap-x-3 gap-y-5 items-center justify-items-end">
        <label>Username</label>
        <input type="text" name="username" id="username" />
        <label>Name</label>
        <input type="text" name="name" id="name" />
        <label>Image URL</label>
      </form>
    </>
  );
};

export default Signup;
