import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  console.log(users);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div className="form-main create-main">
      <h2 className="my-2">Fill the Data</h2>
      <form
        className="w-50 p-3  mx-auto"
        onSubmit={handelSubmit}
        style={{ backgroundColor: "#F0F8FF" }}
      >
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={getUserData}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={getUserData}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={getUserData}
          />
        </div>

        <div className=" mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              onChange={getUserData}
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              checked
              onChange={getUserData}
            />
            <label class="form-check-label">Female</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
