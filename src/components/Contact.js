import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black m-2 p-2"
          placeholder="message"
        />
        <button className=" border rounded border-black m-2 p-2 bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
