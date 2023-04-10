import React from "react";

const Home = () => {
  return (
    <section>
      <div className=" md:container mt-20  pt-5 md:text-left text-center px-14 ">
        <h1 className="text-white text-6xl">
          <span className="font-bold "> Images & Videos Gallery</span>{" "}
        </h1>
        <div className="md:flex mt-12 animate-pulse  ">
          {" "}
          <div className="  ml-16   mx-4 my-5 transition   hover:-translate-y-1  overflow-hidden shadow-black shadow-2xl  dark:bg-slate-800 ">
            <img
              src="https://th.bing.com/th/id/R.2bbb76b0b7fc9503b2d05770d503f437?rik=xdF3nEzVvcf%2fQA&pid=ImgRaw&r=0"
              alt="img"
              className="w-96 h-42"
            />
          </div>
          <div className=" ml-16 mx-4 my-5 transition  hover:-translate-y-1  overflow-hidden shadow-black shadow-2xl  dark:bg-slate-800 ">
            <img
              src="https://th.bing.com/th/id/R.8bafd0d57e9062b26e58ea9aa02d1030?rik=WeRNJrSydYQbVg&riu=http%3a%2f%2fcdn0.wideopenpets.com%2fwp-content%2fuploads%2f2018%2f03%2fAdobeStock_57899907.jpeg&ehk=81Lovpa4nRQhItpEzRz%2fFm9VD4k0VDwQoOmfXvAWkgY%3d&risl=&pid=ImgRaw&r=0"
              alt="img"
              className="w-96 h-42"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
