import React from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  var navigate = useNavigate();

  function getData() {
    var searchItem = document.getElementById("search").value;

    if (searchItem.trim() !== "") {
      navigate("/searchresults", { state: { item: searchItem } });
    } else {
      alert("Invalid Entry");
    }
  }

  return (
    <div className="search-container w3l-banner py-5">
      <input type="text" id="search" placeholder="Search.." />
      <button
        onClick={getData}
        className="btn btn-style btn-primary search-btn"
        style={{
          borderRadius: "0px",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        {" "}
        <span className="fa fa-search" aria-hidden="true"></span>
      </button>
    </div>
  );
}
