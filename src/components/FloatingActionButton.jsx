import React from "react";

const FloatingActionButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-200 hover:bg-blue-600"
    >
      {icon}
    </button>
  );
};

export default FloatingActionButton;
