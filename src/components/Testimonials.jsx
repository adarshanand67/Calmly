import React from "react";
import { v4 as uuidv4 } from "uuid";
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
  {
    id: 4,
    name: "Mattie Mccarthy",
    description:
      "I have been using Calmly for a few months now and I can't believe how much it has helped me. I have been able to reduce my stress levels and I feel much more focused at work.",
  },
  {
    id: 5,
    name: "Jameson Mccarthy",
    description:
      "I have been using Calmly for a few months now and I can't believe how much it has helped me. I have been able to reduce my stress levels and I feel much more focused at work.",
  },
  {
    id: 6,
    name: "Piper Jones",
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
              <h2 className="my-5 mb-8 text-center text-5xl font-extrabold tracking-tight text-black dark:text-white">
                What our customers are saying
              </h2>
              <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
                We are proud to have helped so many people improve their mental
                health and wellbeing.
              </p>
            </div>
            <div className="-mx-3 items-start md:flex">
              <div className="grid gap-4 px-3 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                  <TestimonialCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    key={uuidv4()}
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
