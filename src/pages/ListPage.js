import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
const ListPage = (props) => {
  return (
    <div >
      <ol>
        {props.data.map((val) => (
          <li key={val.title.toString()}>
            <Link to={`/${val.id}`}>{val.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListPage;
