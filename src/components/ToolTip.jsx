const ToolTip = ({ content }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:flex flex-col items-center z-10">
      <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg">
        {content}
      </div>
      <div className="w-3 h-3 bg-gray-800 rotate-45 mt-[-6px]"></div>
    </div>
  );
};

export default ToolTip;
