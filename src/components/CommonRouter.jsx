import { Route, Routes } from "react-router";
import Detail from "../page/Detail";
import Layout from "./Layout";
import Home from "../page/Home";
import SeachResult from "../page/SearchResult";

export default function CommonRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/search/:search" element={<SeachResult />} />
      </Route>
    </Routes>
  );
}
