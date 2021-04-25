import React from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import "../App.css";
const DetailPage = (props) => {
  const params = useParams();
  const ids = parseInt(params.id);
  const { body, title, id, userId } = props.data[ids - 1];
  return (
    <div className="details col-12">
      <h1>Detail Page</h1>
      <table className="center">
        <tbody>
          <tr>
            <td>TITLE</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td>BODY</td>
            <td>{body}</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>USERID</td>
            <td>{userId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DetailPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  userId: PropTypes.number,
};

export default DetailPage;
