import React from "react";

const FAQCard = (props) => {
  const { id, title, description } = props;
  // console.log(id);
  // If even index, then left animation
  // If odd index, then right animation
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center"></div>
      <div className="mb-10" data-aos="fade-up">
        <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
          <svg
            className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FAQCard;
