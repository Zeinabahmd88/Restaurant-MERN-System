import React, { useState, useEffect } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId) => {
    
      const response = await axios.post(`${url}/api/food/remove/`,{id:foodId});
     await fetchList();
     if(response.data.success){
      toast.success(response.data.message)
     }
     else{
      toast.error("Error")
     }
    }
  
  
  return (
    <div className="list-container">
      <h2>All Food Items</h2>
      <div className="list-table-header">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span>Action</span>
      </div>
      {list.map((item) => (
        <div key={item._id} className="list-table-row">
          <img src={`${url}/images/${item.image}`} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.category}</span>
          <span>${item.price}</span>
          <button onClick={() => removeFood(item._id)} className="delete-btn">X</button>
        </div>
      ))}
    </div>
  );
};

export default List;
