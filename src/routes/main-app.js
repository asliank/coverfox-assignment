import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";
import { getPosts } from "../redux/actions/posts";

const MainApp = () => {
  const { postList } = useSelector((state) => state.postDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Route exact path="/" render={() => <ListPage data={postList} />} />
      <Route path="/:id" render={() => <DetailPage data={postList} />} />
    </>
  );
};
export default MainApp;
