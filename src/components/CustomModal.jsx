import React from "react";
import "./modal.css";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

function CustomModal({ id, showpopup, setShowpopup }) {
  const allusers = useSelector((state) => state.app.users);

  const singelUser = allusers.filter((item) => item.id === id);
  console.log(singelUser);
  return (
    <div className="modal-background">
      <div className="modalContainer">
        <div className="close-button-div">
          <div
            onClick={() => setShowpopup(false)}
            className="align-self-end close-button"
          >
            <IoClose />
          </div>
        </div>
        <h3>{singelUser[0].name}</h3>
        <p>{singelUser[0].email}</p>
        <p>{singelUser[0].age}</p>
        <p>{singelUser[0].gender}</p>
      </div>
    </div>
  );
}

export default CustomModal;
