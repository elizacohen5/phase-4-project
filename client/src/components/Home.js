import JewelryList from "./JewelryList";
import { useEffect, useState } from "react";

/**
 * WE have to add handle PATCH and DELETE
 * useEffect -> GET method
 * 1) GET Method -> to see all the images/name/price of all items of all sellers
 * 2) PATCH method -> to update a price
 * 3) DELETE method -> to delete an item from db
 * Not in priority: filter feature
 * **/
function Home() {
  const [jewelries, setJewelries] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5555/")
    .then((r) => r.json())
    .then((jewelryArray) => {
      setJewelries(jewelryArray)
      console.log({jewelryArray})
    })
    .catch((err) => console.error(err));
  }, [])

  const handleUpdatedItem = (updatedItem) => {
    const updatedItemArray =  jewelries.map(jewelry => {
      if (jewelry.id === updatedItem.id) return updatedItem
      else return jewelry
    });
    setJewelries(updatedItemArray)
  }

  const handleDeleteItem = (id) => {
    const updatedJewelryArray = jewelries.filter((jewelry) => {
      return jewelry.id !== id
    })
    setJewelries(updatedJewelryArray)
  }

  return (
    <div>
      <div className='filter_grid'>
        <div className='filters'>
          <select name='metal' id='metal'>
            <option value='gold'>Gold</option>
            <option value='silver'>Silver</option>
          </select>
        </div>
        <div className='filters'>
          <select name='type' id='type'>
            <option value='rings'>Rings</option>
            <option value='earrings'>Earrings</option>
            <option value='bracelets'>Bracelets</option>
            <option value='necklaces'>Necklaces</option>
          </select>
        </div>
        <div className='filters'>
          <select name='sellers' id='sellers'>
            <option value='name1'>Name 1</option>
            <option value='name2'>Name 2</option>
            <option value='name3'>Name 3</option>
            <option value='name4'>Name 4</option>
          </select>
        </div>
        <div className='filters'>
          <select name='price' id='price'>
            <option value='20'>Up to $20</option>
            <option value='50'>Up to $50</option>
            <option value='100'>Up to $100</option>
            <option value='150+'>$150+</option>
          </select>
        </div>
      </div>
      <JewelryList jewelries={jewelries} handleDeleteItem={handleDeleteItem} handleUpdatedItem={handleUpdatedItem} />
    </div>
  );
}

export default Home;
