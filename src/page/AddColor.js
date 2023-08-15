import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function AddColor({addNewColor}) {
  const navigate = useNavigate();

  const INITIAL_DATA = {
    id: uuid(),
    name: "",
    color: ""
  }
  
  const [formData, setFormData] = useState([INITIAL_DATA]);
  
  useEffect(()=>{
    localStorage.setItem("formData", JSON.stringify(formData))
  },[formData])

  function handleInputData(e){
    const {name, value} = e.target;
    setFormData(data => ({...data, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewColor({ ...formData });
    setFormData(INITIAL_DATA);
    navigate("/")
};


  return (
    <div className='text-center new-img'>
      <div className='new-div'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 p-3" style={{width: "50%"}}>
          <label className='form-label'>Color name:</label>
          <input type="text" onChange={handleInputData} className="form-control" id='form-label' name="name" value={formData.name} placeholder="Enter color name" required/>
          <div className='mb-3'>
          <label className='form-label'>Color Value:</label>
          <input type="color" onChange={handleInputData} className="form-control form-control-color mb-2" id="form-label" name="color" value={formData.color} title="Choose your color" required />
          </div>
          <button type="submit" className="btn btn-light fw-bold">Add a color</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddColor;
