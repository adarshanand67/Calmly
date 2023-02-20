import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_h2k5q27", // Service ID for the email provider
        "template_vqlawut", // Email template ID
        e.target, // Form element to send
        "lgGfkiUnJICbaIc-Q" // User ID for EmailJS account
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name: ", name, "Email: ", email, "Query: ", query);
    toast.success(
      "Your query has been submitted successfully!  You will be contacted soon."
    );
    setTimeout(() => {
      setShowModal(false);
    }, 3000);

    sendEmail(e);
  };

  return (
    <div className="mx-auto my-4 max-w-sm rounded-lg bg-white p-6 shadow-md">
      <form onSubmit={handleSubmit}>
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
