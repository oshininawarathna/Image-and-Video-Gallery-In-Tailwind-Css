import React from "react";
import MedaiCardItems from "./MediaCardItems";

const MediaCard = ({ items, isLoaded }) => {
  return (
    <div>
      <div className="container mx-auto">
        {!isLoaded && items.length === 0 && (
          <h1 className=" text-5xl text-center mx-auto mt-25 mb-5">
            No Images Found....
          </h1>
        )}
        {isLoaded ? (
          <h1 className=" text-6xl text-center mx-auto">Loading....</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <MedaiCardItems item={item} />
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
