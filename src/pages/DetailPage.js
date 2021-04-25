import React from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import '../App.css'
const DetailPage = (props) => {
  const params = useParams();
  const ids = parseInt(params.id);
  const { body, title, id, userId } = props.data[ids - 1];
  return (
    <div className="details">
      This is Detail Page
      <p>TITLE - {title}</p>
      <p>BODY - {body}</p>
      <p>ID - {id}</p>
      <p>USERID - {userId}</p>
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
