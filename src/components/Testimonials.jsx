import React from "react";
import TestimonialCard from "./TestimonialCard";

const data = [
  {
    id: 1,
    name: "Kenzie Edgar",
    description:
      "Using Calmly has been a game changer for our team. It has improved the mental health of our employees and has helped us to build a more positive and productive culture.",
  },
  {
    id: 2,
    name: "Lola Gardner",
    description:
      "I have been using Calmly for a few months now and I can't believe how much it has helped me. I have been able to reduce my stress levels and I feel much more focused at work.",
  },
  {
    id: 3,
    name: "Stevie Tifft",
    description:
      "I have been using Calmly for a few months now and I can't believe how much it has helped me. I have been able to reduce my stress levels and I feel much more focused at work.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen items-center justify-center">
        <div className="description-gray-800 w-full border-t border-b border-gray-200 bg-white px-5 ">
          <div className="mx-auto w-full max-w-6xl">
            <div className="description-center mx-auto max-w-xl">
              <h1 className="description-6xl description-gray-600 md:description-7xl mb-5 font-bold">
                What people <br />
                are saying.
              </h1>
              <h3 className="description-xl mb-5 font-light">
                We are proud to have helped so many people.
              </h3>

            </div>
            <div className="-mx-3 items-start md:flex">
              <div className="px-3 md:w-1/3">
                {data.map((item) => (
                  <TestimonialCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
