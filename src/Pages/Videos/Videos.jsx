import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Videocard from "../../components/MediaVideoCard/Videocard";
const Videos = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/videos/?key=29453809-c31b8f54f24923c75c98798bc&q=${term}&pretty=true`
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
      <Videocard items={items} isLoaded={isLoaded} />
    </div>
  );
};

export default Videos;
