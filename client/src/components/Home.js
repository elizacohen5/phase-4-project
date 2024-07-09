import React, { useEffect, useState } from "react";
import JewelryList from "./JewelryList";

/**
 * WE have to add handle PATCH and DELETE
 * useEffect -> GET method
 * 1) GET Method -> to see all the images/name/price of all items of all sellers
 * 2) PATCH method -> to update a price
 * 3) DELETE method -> to delete an item from db
 * Not in priority: filter feature
 **/
function Home() {
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/")
      .then((r) => r.json())
      .then((jewelryArray) => {
        setJewelries(jewelryArray);
        console.log({ jewelryArray });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdatedItem = (updatedItem) => {
    const updatedItemArray = jewelries.map((jewelry) => {
      if (jewelry.id === updatedItem.id) return updatedItem;
      else return jewelry;
    });
    setJewelries(updatedItemArray);
  };

  const handleDeleteItem = (id) => {
    const updatedJewelryArray = jewelries.filter((jewelry) => {
      return jewelry.id !== id;
    });
    setJewelries(updatedJewelryArray);
  };

  return (
    <div>
      <JewelryList
        jewelries={jewelries}
        handleDeleteItem={handleDeleteItem}
        handleUpdatedItem={handleUpdatedItem}
      />
    </div>
  );
}

export default Home;
