import React from "react";
import VideocardItems from "./VideocardItems";
const Videocard = ({ items, isLoaded }) => {
  return (
    <div>
      {" "}
      <div>
        <div className="container mx-auto">
          {!isLoaded && items.length === 0 && (
            <h1 className=" text-5xl text-center mx-auto mt-25 mb-5">
              No Videos Found....
            </h1>
          )}
          {isLoaded ? (
            <h1 className=" text-6xl text-center mx-auto">Loading....</h1>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <VideocardItems item={item} />
              ))}{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videocard;
