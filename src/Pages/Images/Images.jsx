import React, { useState, useEffect } from "react";
import useFetch from "../../hook/useFetch";
import MediaCard from "../../components/Mediacard/MediaCard";
import Search from "../../components/Search/Search";
const Images = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=29453809-c31b8f54f24923c75c98798bc&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.hits);
        setIsLoaded(false);
      })
      .catch((err) => <h1>(err)</h1>);
  }, [term]);
  return (
    <div className="my-5 bg-zinc-300">
      <Search searchtext={(text) => setTerm(text)} />
      <MediaCard items={items} isLoaded={isLoaded} />
    </div>
  );
};

export default Images;
