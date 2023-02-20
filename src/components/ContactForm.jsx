import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    toast.success(
      "Your query has been submitted successfully!  You will be contacted soon."
    );
    setTimeout(() => {
      setShowModal(false);
    }, 3000);

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      query: e.target.query.value,
    };

    // console.log(templateParams);
    // console.log(e.target);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="mx-auto my-4 max-w-sm rounded-lg bg-white p-6 shadow-md">
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="query">
            Query
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            id="query"
            placeholder="Enter your query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>

        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
