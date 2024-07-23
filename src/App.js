import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage"
import PostWritePage from "./component/page/PostWritePage"
import PostViewPage from "./component/page/PostViewPage"

const MainTitlePage = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>리액트 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;