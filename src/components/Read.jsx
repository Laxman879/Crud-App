import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showpopup, setShowpopup] = useState(false);
  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      {showpopup && (
        <CustomModal
          id={id}
          showpopup={showpopup}
          setShowpopup={setShowpopup}
        />
      )}
      <div className="text-center">
        <h3 className="text-center my-2">All data</h3>
        <input
          class="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={(e) => setRadioData("")}
        />
        <label class="form-check-label">All</label>
        <input
          class="form-check-input"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label class="form-check-label">Male</label>
        <input
          class="form-check-input"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label class="form-check-label">Female</label>
      </div>
      {users &&
        users
          .filter((item) => {
            if (searchData.length === 0) {
              return item;
            } else {
              return item.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((item) => {
            if (radioData === "Male") {
              return item.gender === radioData;
            } else if (radioData === "Female") {
              return item.gender === radioData;
            } else {
              return item;
            }
          })
          .map((item) => (
            <div className="card w-50 mx-auto my-2" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                <p className="card-text">{item.gender}</p>

                <button
                  className="card-link btn btn-primary"
                  onClick={() => [setId(item.id), setShowpopup(true)]}
                >
                  View
                </button>
                <Link
                  to={`/edit/${item.id}`}
                  className="card-link btn btn-success"
                >
                  Edit
                </Link>
                <Link
                  className="card-link btn btn-danger"
                  onClick={() => dispatch(deleteUser(item.id))}
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Read;
