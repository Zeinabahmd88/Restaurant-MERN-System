import React, { useState, useEffect } from 'react';
import './Add.css';
import { assets } from '../../assets/assets'; // Ensure the path is correct
import axios from "axios"
import { toast } from 'react-toastify';

const Add = () => {
  const url="http://localhost:4000";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };


  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    const formData=new FormData();
   formData.append("name",data.name)
   formData.append("description",data.description)
   formData.append("price",Number(data.price))
   formData.append("category",data.category)
   formData.append("image",image)
    const response=await axios.post(`${url}/api/food/add`,formData);
   if(response.data.success){
    setData({
      name: '',
      description: '',
      price: '',
      category: 'Salad',
    
    }) 
     setImage(false)
    toast.success(response.data.message)
       
       }else{
    toast.error(response.data.message)
      
   }
  }
  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="add-input-group">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>

        <div className="add-input-group">
          <p>Product Description</p>
          <textarea
            rows="6"
            name="description"
            placeholder="Write content here"
            value={data.description}
            onChange={onChangeHandler}
          />
        </div>

        <div className="add-category-price">
          <div className="add-input-group">
            <p>Product Category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwish">Sandwish</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-input-group">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$$"
              value={data.price}
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
