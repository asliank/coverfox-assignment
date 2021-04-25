import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const ListPage = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>List Page</h1>
        <ul>
          {props.data.map((val) => (
            <li key={val.title.toString()} className="listStyling">
              <Link to={`/${val.id}`}>{val.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
