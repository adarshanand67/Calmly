import React from "react";
// uuid
const TestimonialCard = (props) => {
  const { id, name, description } = props;
  const image = `https://i.pravatar.cc/100?img=${id}`;
  return (
    <>
      <div className="mx-auto mb-6 w-full rounded-lg border border-gray-200 bg-white p-5 font-light text-gray-800">
        <div className="mb-4 flex w-full items-center">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
            <img src={image} alt={name} />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="text-sm font-bold uppercase text-gray-600">
              {name}
            </h6>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm leading-tight">
            <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
              "
            </span>
            {description}
            <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
              "
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
