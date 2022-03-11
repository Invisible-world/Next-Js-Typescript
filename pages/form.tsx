import React, { useState } from "react";
import axios from "axios";

const form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/hello", formData);
    // debugger;
    console.log(response);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Upload Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"> Image Title</label>
                <input
                  type="text"
                  className="form-control-file"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
