import React from "react";

const MedaiCardItems = ({ item }) => {
  const tags = item.tags.split(",");
  return (
    <div>
      <div className="  mx-4 my-5 transition  hover:-translate-y-1  overflow-hidden shadow-black shadow-2xl  dark:bg-slate-800 ">
        <img src={item.webformatURL} alt="img" className="w-100 h-300" />

        <div className="px-6 py-5">
          <div className="inline-block animate-pulse bg-gray-300  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1 w-60 space-y-0.5">
            <h4>Views : {item.views}</h4>
            <h4>Downloads : {item.downloads}</h4>
            <h4>Likes : {item.likes}</h4>
          </div>
        </div>
        <div className="px-6 py-3">
          {tags.map((tag) => (
            <span className="inline-block animate-pulse bg-gray-500 rounded-full px-4 py-1 text-sm font-semibold text-gray-200 mr-2 mt-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedaiCardItems;
